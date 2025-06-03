// Inspired by https://github.com/lofcz/umd-react
import {
  appendFileSync,
  copyFileSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  rmSync,
  statSync,
} from "fs";
import path from "path";
import { fileURLToPath } from "url";
import util from "util";
import proc from "child_process";

import webpack from "webpack";

// Get keys to load from react-dom and react-dom/client
import * as ReactDOMClient from "react-dom/client";
import * as ReactDOM from "react-dom";

const reactDomClientMethods = Object.keys(ReactDOMClient).filter(
  (key) => key !== "default",
);
const reactDomMethods = Object.keys(ReactDOM).filter(
  (key) => key !== "default" && !reactDomClientMethods.includes(key),
);

// Execute a shell command as a promise
const exec = util.promisify(proc.exec);

// Common Webpack config
const commonConfig = {
  mode: "production",
  optimization: {
    minimize: true,
    usedExports: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};

// Determine package versions
const _root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const reactVersion = JSON.parse(
  readFileSync(path.join(_root, "update/node_modules/react/package.json")),
).version;
const radixVersion = JSON.parse(
  readFileSync(path.join(_root, "update/node_modules/radix-ui/package.json")),
).version;
const lucideVersion = JSON.parse(
  readFileSync(
    path.join(_root, "update/node_modules/lucide-react/package.json"),
  ),
).version;
const packageVersions = {
  react: reactVersion,
  "react-dom": reactVersion,
  "jsx-runtime": reactVersion,
  "lucide-react": lucideVersion,
  "radix-ui": radixVersion,
};

// Helper methods for building UMD bundles
async function generateReactDomEntryFile(tempDir) {
  const entryContent = `
        import * as ReactDOM from "react-dom";
        import * as ReactDOMClient from "react-dom/client";

        // export client methods
        ${reactDomClientMethods
          .map((method) => `export const ${method} = ReactDOMClient.${method};`)
          .join("\n")}

        // export dom methods
        ${reactDomMethods
          .map((method) => `export const ${method} = ReactDOM.${method};`)
          .join("\n")}
    `;

  const entryFile = path.join(tempDir, "react-dom-entry.js");
  appendFileSync(entryFile, entryContent);
  return entryFile;
}

async function runWebpack(config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      if (stats.hasErrors()) {
        reject(new Error(stats.toString()));
        return;
      }
      resolve(stats);
    });
  });
}

async function buildUmd(tempDir, moduleName, fileName, entry, externals) {
  await runWebpack({
    ...commonConfig,
    entry: entry || moduleName,
    externals: Object.fromEntries(
      Object.entries({
        clsx: "clsx",
        react: "react",
        "react-dom": "react-dom",
        "date-fns": "date-fns",
        ...externals,
      }).filter(([k, _]) => k !== moduleName),
    ),
    output: {
      path: tempDir,
      filename: fileName,
      library: {
        name: moduleName,
        type: "umd",
        umdNamedDefine: true,
      },
      globalObject: "this",
      iife: true,
      environment: {
        arrowFunction: true,
        const: true,
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
    ],
  });

  const content = readFileSync(path.join(tempDir, fileName), "utf8");
  const version = packageVersions[fileName.split(".")[0]] || "";

  appendFileSync(
    path.join(_root, "www/js/lib", fileName),
    content.replace(/^\/\*\!.*\*\//, `/*! ${fileName} ${version} */`) + "\n",
  );
}

async function buildRadixUmds(tempDir) {
  rmSync(path.join(_root, "www/js/lib/radix-ui.min.js"), { force: true });

  // Get all Radix UI modules to aggregate into one big UMD file
  const radixUiSources = readdirSync(
    path.join(_root, "update/node_modules/@radix-ui"),
    {
      withFileTypes: true,
    },
  );

  // First, build a dependency graph and sort topologically
  const dependencyGraph = new Map();
  const packageJsonCache = new Map();

  // Build dependency graph
  for (const folder of radixUiSources.filter((f) => f.isDirectory())) {
    const packagePath = path.join(
      _root,
      "update/node_modules/@radix-ui",
      folder.name,
      "package.json",
    );
    const packageJson = JSON.parse(readFileSync(packagePath, "utf8"));
    packageJsonCache.set(folder.name, packageJson);

    const radixDeps = Object.keys({
      ...packageJson.dependencies,
      ...packageJson.peerDependencies,
    })
      .filter((dep) => dep.startsWith("@radix-ui/"))
      .map((dep) => dep.replace("@radix-ui/", ""));

    dependencyGraph.set(folder.name, radixDeps);
  }

  // Topological sort function
  function topologicalSort(graph) {
    const visited = new Set();
    const temp = new Set();
    const order = [];

    function visit(node) {
      if (temp.has(node)) throw new Error("Circular dependency detected");
      if (visited.has(node)) return;

      temp.add(node);
      const deps = graph.get(node) || [];
      for (const dep of deps) {
        visit(dep);
      }
      temp.delete(node);
      visited.add(node);
      order.push(node);
    }

    for (const node of graph.keys()) {
      if (!visited.has(node)) {
        visit(node);
      }
    }

    return order;
  }

  // Build packages in dependency order
  const buildOrder = topologicalSort(dependencyGraph);
  for (const packageName of buildOrder) {
    const packageJson = packageJsonCache.get(packageName);
    const radixDeps = Object.keys({
      ...packageJson.dependencies,
      ...packageJson.peerDependencies,
    }).filter((dep) => dep.startsWith("@radix-ui/"));

    const radixExternals = Object.fromEntries(
      radixDeps.map((dep) => [dep, dep]),
    );

    await buildUmd(
      tempDir,
      `@radix-ui/${packageName}`,
      "radix-ui.min.js",
      null,
      radixExternals,
    );
  }
}

// Build all other UMD bundles for the project
async function buildUmds() {
  try {
    const tempDir = path.join(_root, "update/temp");
    rmSync(tempDir, { recursive: true, force: true });
    mkdirSync(tempDir, { recursive: true });

    // @radix-ui packages have a complicated dependency graph, build separately
    buildRadixUmds(tempDir);

    // Clean up old files
    rmSync(path.join(_root, "www/js/lib/tailwind.min.js"), { force: true });
    rmSync(path.join(_root, "www/js/lib/react.min.js"), { force: true });
    rmSync(path.join(_root, "www/js/lib/react-dom.min.js"), {
      force: true,
    });
    rmSync(path.join(_root, "www/js/lib/lucide-react.min.js"), {
      force: true,
    });
    rmSync(path.join(_root, "www/js/lib/extras.min.js"), { force: true });
    rmSync(path.join(_root, "www/js/lib/dnd-kit.min.js"), { force: true });
    rmSync(path.join(_root, "www/js/lib/shadcn.min.js"), { force: true });
    rmSync(path.join(_root, "www/js/lib/chart.min.js"), { force: true });
    rmSync(path.join(_root, "www/js/lib/form.min.js"), { force: true });

    // tailwindcss
    const tailwindResponse = await fetch(
      "https://unpkg.com/@tailwindcss/browser@4",
    );
    const tailwindContent = await tailwindResponse.text();
    appendFileSync(
      path.join(_root, "www/js/lib/tailwind.min.js"),
      tailwindContent.replace(
        /console.warn\("The browser build of Tailwind CSS should not be used in production.[^"]*"\)\;/,
        "",
      ),
    );

    // react and other dependencies
    await buildUmd(tempDir, "react", "react.min.js");
    await buildUmd(tempDir, "react/jsx-runtime", "react.min.js");

    // react 19 added react-dom/client which we need to merge back into react-dom
    await buildUmd(
      tempDir,
      "react-dom",
      "react-dom.min.js",
      await generateReactDomEntryFile(tempDir),
    );

    // lucide-react icons
    await buildUmd(tempDir, "lucide-react", "lucide-react.min.js");

    // wouter and zustand
    await buildUmd(tempDir, "wouter", "extras.min.js");
    await buildUmd(tempDir, "zustand", "extras.min.js");

    // @dnd-kit
    await buildUmd(tempDir, "@dnd-kit/utilities", "dnd-kit.min.js"); // includes tslib
    await buildUmd(tempDir, "@dnd-kit/accessibility", "dnd-kit.min.js", null, {
      tslib: "tslib",
    });
    await buildUmd(tempDir, "@dnd-kit/core", "dnd-kit.min.js", null, {
      tslib: "tslib",
      "@dnd-kit/accessibility": "@dnd-kit/accessibility",
      "@dnd-kit/utilities": "@dnd-kit/utilities",
    });
    await buildUmd(tempDir, "@dnd-kit/modifiers", "dnd-kit.min.js", null, {
      tslib: "tslib",
      "@dnd-kit/core": "@dnd-kit/core",
      "@dnd-kit/utilities": "@dnd-kit/utilities",
    });
    await buildUmd(tempDir, "@dnd-kit/sortable", "dnd-kit.min.js", null, {
      tslib: "tslib",
      "@dnd-kit/core": "@dnd-kit/core",
      "@dnd-kit/utilities": "@dnd-kit/utilities",
    });

    // shadcn deps
    await buildUmd(tempDir, "date-fns", "shadcn.min.js");
    await buildUmd(tempDir, "tailwind-merge", "shadcn.min.js");
    await buildUmd(tempDir, "clsx", "shadcn.min.js");
    await buildUmd(tempDir, "class-variance-authority", "shadcn.min.js"); //clsx
    await buildUmd(tempDir, "react-resizable-panels", "shadcn.min.js");
    await buildUmd(tempDir, "react-day-picker", "shadcn.min.js"); //date-fns
    await buildUmd(tempDir, "embla-carousel-react", "shadcn.min.js");
    await buildUmd(tempDir, "@tanstack/react-table", "shadcn.min.js");
    await buildUmd(tempDir, "input-otp", "shadcn.min.js");
    await buildUmd(tempDir, "next-themes", "shadcn.min.js");
    await buildUmd(tempDir, "sonner", "shadcn.min.js");
    await buildUmd(tempDir, "vaul", "shadcn.min.js", null, {
      "@radix-ui/react-dialog": "@radix-ui/react-dialog",
    });
    await buildUmd(tempDir, "cmdk", "shadcn.min.js", null, {
      "@radix-ui/react-dialog": "@radix-ui/react-dialog",
      "@radix-ui/react-id": "@radix-ui/react-id",
      "@radix-ui/react-primitive": "@radix-ui/react-primitive",
    });

    // shadcn chart
    await buildUmd(tempDir, "recharts", "chart.min.js"); //clsx

    // shadcn form
    await buildUmd(tempDir, "zod", "form.min.js");
    await buildUmd(tempDir, "react-hook-form", "form.min.js");
    await buildUmd(tempDir, "@hookform/resolvers/zod", "form.min.js", null, {
      "react-hook-form": "react-hook-form",
    });

    rmSync(tempDir, { recursive: true, force: true });
  } catch (error) {
    console.error("Error during UMD build:", error);
    throw error;
  }
}

async function buildType(src, dest) {
  await exec(`tsup ${src}`);
  const outFile = path.basename(src).replace(/\.(j|t)sx?$/, ".d.cts");
  appendFileSync(
    dest,
    readFileSync(path.join(_root, `update/${outFile}`), "utf8")
      .replace("import React from 'react';", "import * as React from 'react';")
      .replace("import React__default from 'react';", "")
      .replaceAll("React__default.", "React."),
  );
  rmSync(path.join(_root, `update/${outFile}`));
}

// Copy all type definitions for the project
async function buildTypes() {
  try {
    rmSync(path.join(_root, "types"), { recursive: true, force: true });
    mkdirSync(path.join(_root, "types"), { recursive: true });

    // csstype
    copyFileSync(
      path.join(_root, "update/node_modules/csstype/index.d.ts"),
      path.join(_root, "types/csstype.d.ts"),
    );

    // react is a relative import in jsx-runtime, so rewrite that
    copyFileSync(
      path.join(_root, "update/node_modules/@types/react/global.d.ts"),
      path.join(_root, "types/global.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/node_modules/@types/react/index.d.ts"),
      path.join(_root, "types/react.d.ts"),
    );
    appendFileSync(
      path.join(_root, "types/jsx-runtime.d.ts"),
      readFileSync(
        path.join(_root, "update/node_modules/@types/react/jsx-runtime.d.ts"),
        "utf8",
      ).replace(/((import|export).* from )"\.\/";/g, (_, g) => g + '"react";'),
    );

    // react-dom has types from both index and client, since we built them together
    appendFileSync(
      path.join(_root, "types/react-dom.d.ts"),
      readFileSync(
        path.join(_root, "update/node_modules/@types/react-dom/index.d.ts"),
        "utf8",
      ) + "\n",
    );
    appendFileSync(
      path.join(_root, "types/react-dom.d.ts"),
      readFileSync(
        path.join(_root, "update/node_modules/@types/react-dom/client.d.ts"),
        "utf8",
      ),
    );

    // Copy lucide-react types
    copyFileSync(
      path.join(
        _root,
        "update/node_modules/lucide-react/dist/lucide-react.d.ts",
      ),
      path.join(_root, "types/lucide-react.d.ts"),
    );

    // Copy all radix-ui types
    mkdirSync(path.join(_root, "types/@radix-ui"));
    const radixUiFolders = readdirSync(
      path.join(_root, "update/node_modules/@radix-ui"),
      {
        withFileTypes: true,
      },
    );
    for (const folder of radixUiFolders.filter((f) => f.isDirectory())) {
      const radixUiTypedefs = readdirSync(
        path.join(_root, "update/node_modules/@radix-ui", folder.name, "dist"),
        {
          withFileTypes: true,
        },
      );

      for (const file of radixUiTypedefs.filter(
        (f) => f.isFile() && f.name.endsWith(".d.ts"),
      )) {
        appendFileSync(
          "index.d.ts" === file.name
            ? path.join(_root, "types/@radix-ui", `${folder.name}.d.ts`)
            : path.join(_root, "types/@radix-ui", file.name),
          readFileSync(
            path.join(folder.parentPath, folder.name, "dist", file.name),
            "utf8",
          ).replace(
            "import React from 'react';",
            "import * as React from 'react';",
          ),
        );
      }
    }

    // Build types with tsup
    mkdirSync(path.join(_root, "types/@tanstack"));
    await buildType(
      path.join(
        _root,
        "update/node_modules/@tanstack/react-table/build/lib/index.js",
      ),
      path.join(_root, "types/@tanstack/react-table.d.ts"),
    );
    mkdirSync(path.join(_root, "types/@hookform"));
    mkdirSync(path.join(_root, "types/@hookform/resolvers"));
    await buildType(
      path.join(
        _root,
        "update/node_modules/@hookform/resolvers/zod/dist/index.d.ts",
      ),
      path.join(_root, "types/@hookform/resolvers/zod.d.ts"),
    );
    await buildType(
      path.join(_root, "update/node_modules/date-fns/index.js"),
      path.join(_root, "types/date-fns.d.ts"),
    );
    await buildType(
      path.join(_root, "update/node_modules/embla-carousel-react/index.d.ts"),
      path.join(_root, "types/embla-carousel-react.d.ts"),
    );
    await buildType(
      path.join(_root, "update/node_modules/input-otp/dist/index.js"),
      path.join(_root, "types/input-otp.d.ts"),
    );
    await buildType(
      path.join(_root, "update/node_modules/next-themes/dist/index.js"),
      path.join(_root, "types/next-themes.d.ts"),
    );
    await buildType(
      path.join(_root, "update/node_modules/sonner/dist/index.js"),
      path.join(_root, "types/sonner.d.ts"),
    );
    await buildType(
      path.join(_root, "update/node_modules/vaul/dist/index.js"),
      path.join(_root, "types/vaul.d.ts"),
    );
    await buildType(
      path.join(_root, "update/node_modules/zod/lib/index.d.ts"),
      path.join(_root, "types/zod.d.ts"),
    );
    await buildType(
      path.join(_root, "update/node_modules/react-hook-form/dist/index.d.ts"),
      path.join(_root, "types/react-hook-form.d.ts"),
    );
    await buildType(
      path.join(_root, "update/node_modules/zustand/index.js"),
      path.join(_root, "types/zustand.d.ts"),
    );

    // Copy @dnd-kit types
    mkdirSync(path.join(_root, "types/@dnd-kit"));
    copyFileSync(
      path.join(_root, "update/types/@dnd-kit/utilities.d.ts"),
      path.join(_root, "types/@dnd-kit/utilities.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/types/@dnd-kit/accessibility.d.ts"),
      path.join(_root, "types/@dnd-kit/accessibility.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/types/@dnd-kit/core.d.ts"),
      path.join(_root, "types/@dnd-kit/core.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/types/@dnd-kit/modifiers.d.ts"),
      path.join(_root, "types/@dnd-kit/modifiers.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/types/@dnd-kit/sortable.d.ts"),
      path.join(_root, "types/@dnd-kit/sortable.d.ts"),
    );
    // Uncomment, run, and fix imports to build updated @dnd-kit types:
    // await buildType(path.join(_root, "update/node_modules/@dnd-kit/utilities/dist/index.d.ts"), path.join(_root, "update/types/@dnd-kit/utilities.d.ts"));
    // await buildType(path.join(_root, "update/node_modules/@dnd-kit/accessibility/dist/index.d.ts"), path.join(_root, "update/types/@dnd-kit/accessibility.d.ts"));
    // await buildType(path.join(_root, "update/node_modules/@dnd-kit/core/dist/index.d.ts"), path.join(_root, "update/types/@dnd-kit/core.d.ts"));
    // await buildType(path.join(_root, "update/node_modules/@dnd-kit/modifiers/dist/index.d.ts"), path.join(_root, "update/types/@dnd-kit/modifiers.d.ts"));
    // await buildType(path.join(_root, "update/node_modules/@dnd-kit/sortable/dist/index.d.ts"), path.join(_root, "update/types/@dnd-kit/sortable.d.ts"));

    // Copy wouter types
    mkdirSync(path.join(_root, "types/wouter"));
    copyFileSync(
      path.join(_root, "update/node_modules/regexparam/index.d.ts"),
      path.join(_root, "types/regexparam.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/node_modules/wouter/types/index.d.ts"),
      path.join(_root, "types/wouter/index.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/node_modules/wouter/types/location-hook.d.ts"),
      path.join(_root, "types/wouter/location-hook.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/node_modules/wouter/types/memory-location.d.ts"),
      path.join(_root, "types/wouter/memory-location.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/node_modules/wouter/types/router.d.ts"),
      path.join(_root, "types/wouter/router.d.ts"),
    );
    copyFileSync(
      path.join(
        _root,
        "update/node_modules/wouter/types/use-browser-location.d.ts",
      ),
      path.join(_root, "types/wouter/use-browser-location.d.ts"),
    );
    copyFileSync(
      path.join(
        _root,
        "update/node_modules/wouter/types/use-hash-location.d.ts",
      ),
      path.join(_root, "types/wouter/use-hash-location.d.ts"),
    );

    // Copy shadcn dependency types
    copyFileSync(
      path.join(_root, "update/node_modules/clsx/clsx.d.ts"),
      path.join(_root, "types/clsx.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/node_modules/tailwind-merge/dist/types.d.ts"),
      path.join(_root, "types/tailwind-merge.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/node_modules/cmdk/dist/index.d.ts"),
      path.join(_root, "types/cmdk.d.ts"),
    );

    copyFileSync(
      path.join(_root, "update/types/react-resizable-panels.d.ts"),
      path.join(_root, "types/react-resizable-panels.d.ts"),
    );
    // Uncomment and run to build updated react-resizable-panels types:
    // function renameFilesToJs(directory) {
    //   try {
    //     const files = readdirSync(directory);

    //     files.forEach((file) => {
    //       const filePath = path.join(directory, file);
    //       const stats = statSync(filePath);

    //       if (stats.isDirectory()) {
    //         // Recursively process subdirectories
    //         renameFilesToJs(filePath);
    //       } else if (
    //         stats.isFile() &&
    //         path.extname(file) !== ".js" &&
    //         file !== "index.d.ts"
    //       ) {
    //         const newFilePath = path.join(
    //           directory,
    //           `${path.basename(file, path.extname(file)).replace(/\.d$/, "")}.js`,
    //         );
    //         renameSync(filePath, newFilePath);
    //         console.log(`Renamed: ${file} -> ${path.basename(newFilePath)}`);
    //       }
    //     });
    //   } catch (error) {
    //     console.error("Error renaming files: ", error);
    //   }
    // }
    // const targetDir = path.join(
    //   _root,
    //   "update/node_modules/react-resizable-panels/dist/declarations/src",
    // );
    // renameFilesToJs(targetDir);
    // await buildType(path.join(_root, "update/node_modules/react-resizable-panels/dist/declarations/src/index.d.ts"), path.join(_root, "update/types/react-resizable-panels.d.ts"));

    copyFileSync(
      path.join(_root, "update/types/react-day-picker.d.ts"),
      path.join(_root, "types/react-day-picker.d.ts"),
    );
    // Uncomment, run, and fix imports to build updated react-day-picker types:
    // await buildType(path.join(_root, "update/node_modules/react-day-picker/dist/esm/index.js"), path.join(_root, "update/types/react-day-picker.d.ts"));

    copyFileSync(
      path.join(_root, "update/types/recharts.d.ts"),
      path.join(_root, "types/recharts.d.ts"),
    );
    // Uncomment, run, and fix imports to build updated recharts types:
    // await buildType(path.join(_root, "update/node_modules/recharts/types/index.d.ts"), path.join(_root, "update/types/recharts.d.ts"));

    const classVarianceAuthorityContent = readFileSync(
      path.join(
        _root,
        "update/node_modules/class-variance-authority/dist/index.d.ts",
      ),
      "utf8",
    );
    const classVarianceAuthorityTypesContent = readFileSync(
      path.join(
        _root,
        "update/node_modules/class-variance-authority/dist/types.d.ts",
      ),
      "utf8",
    );
    appendFileSync(
      path.join(_root, "types/class-variance-authority.d.ts"),
      classVarianceAuthorityContent.replace(
        /import .* from "\.\/types";/,
        classVarianceAuthorityTypesContent,
      ) + "\n",
    );
  } catch (error) {
    console.error("Error during typedef build:", error);
    throw error;
  }
}

buildUmds();
buildTypes();
