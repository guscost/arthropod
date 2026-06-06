// Inspired by https://github.com/lofcz/umd-react
import {
  appendFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
  Dirent,
} from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { createRequire } from "module";
import util from "util";
import proc from "child_process";

import webpack, { type Configuration as WebpackConfig } from "webpack";

// Get keys to load from react-dom and react-dom/client
import * as ReactDOMClient from "react-dom/client";
import * as ReactDOM from "react-dom";

const reactDomClientMethods: string[] = Object.keys(ReactDOMClient).filter(
  (key) => key !== "default",
);
const reactDomMethods: string[] = Object.keys(ReactDOM).filter(
  (key) => key !== "default" && !reactDomClientMethods.includes(key),
);

// Execute a shell command as a promise
const exec = util.promisify(proc.exec);

// Common Webpack config
const commonConfig: WebpackConfig = {
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
const _root: string = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
type PackageJson = {
  version?: string;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  exports?: Record<string, unknown>;
};
const radixVersion = "DEPRECATED";
const reactPackage: PackageJson = JSON.parse(
  readFileSync(
    path.join(_root, "update/node_modules/react/package.json"),
    "utf8",
  ),
);
const reactVersion: string = reactPackage.version!;
const lucidePackage: PackageJson = JSON.parse(
  readFileSync(
    path.join(_root, "update/node_modules/lucide-react/package.json"),
    "utf8",
  ),
);
const lucideVersion: string = lucidePackage.version!;
type VersionMap = Record<string, string>;
const packageVersions: VersionMap = {
  react: reactVersion,
  "react-dom": reactVersion,
  "jsx-runtime": reactVersion,
  "lucide-react": lucideVersion,
  "radix-ui": radixVersion,
};

// Build a custom entry that re-exports wouter + wouter/use-hash-location
// so the single UMD bundle contains all exports needed by the app.
async function generateWouterEntryFile(tempDir: string): Promise<string> {
  const entryContent = `
        import * as Wouter from "wouter";
        import * as HashLocation from "wouter/use-hash-location";

        // re-export everything from main wouter
        export const {
          Link,
          Redirect,
          Route,
          Router,
          Switch,
          matchRoute,
          useLocation,
          useParams,
          useRoute,
          useRouter,
          useSearch,
          useSearchParams,
        } = Wouter;

        // re-export use-hash-location (not in main wouter bundle)
        export const navigate = HashLocation.navigate;
        export const useHashLocation = HashLocation.useHashLocation;
    `;

  const entryFile = path.join(tempDir, "wouter-entry.js");
  appendFileSync(entryFile, entryContent);
  return entryFile;
}

// Helper methods for building UMD bundles
async function generateReactDomEntryFile(tempDir: string): Promise<string> {
  const entryContent = `
        import * as ReactDOM from "react-dom";
        import * as ReactDOMClient from "react-dom/client";

        // export client methods
        ${reactDomClientMethods
          .filter((method) => method !== "module.exports")
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

async function runWebpack(config: WebpackConfig): Promise<webpack.Stats> {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      if (stats!.hasErrors()) {
        reject(new Error(stats!.toString()));
        return;
      }
      resolve(stats!);
    });
  });
}

type ExternalsMap = Record<string, string>;
async function buildUmd(
  tempDir: string,
  moduleName: string,
  fileName: string,
  entry?: string | null,
  externals: ExternalsMap = {},
) {
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

async function buildBaseUiUmds(tempDir: string, fileName: string) {
  const baseUiDir = path.join(_root, "update/node_modules/@base-ui/react");

  // Build ONE monolithic UMD for @base-ui/react so every sub-module shares the
  // same module instances (React contexts, stores, etc.), preventing
  // shared-context bugs that arise when each sub-module bundles its own copy.
  await buildUmd(tempDir, "@base-ui/react", fileName);

  // Get the exported sub-module paths from package.json
  const baseUiPackage: PackageJson = JSON.parse(
    readFileSync(path.join(baseUiDir, "package.json"), "utf8"),
  );
  const subModules: string[] = Object.keys(baseUiPackage.exports || {})
    .filter(
      (key) =>
        key !== "." &&
        key !== "./package.json" &&
        key !== "./esm" &&
        !key.startsWith("./internals/"),
    )
    .map((key) => key.slice(2));

  // Resolve sub-module exports via Node require so we know which names to
  // extract from the shared root bundle at runtime.
  const req = createRequire(
    pathToFileURL(path.join(_root, "update/update.ts")).href,
  );

  // Append a lightweight AMD shim per sub-module so the app can import e.g.
  // `@base-ui/react/accordion` and receive its exports from the shared bundle.
  for (const subModule of subModules) {
    let exportNames: string[];
    try {
      const mod = req(`@base-ui/react/${subModule}`) as Record<string, unknown>;
      exportNames = Object.keys(mod).filter(
        (k) => k !== "__esModule" && k !== "default",
      );
    } catch {
      continue;
    }
    if (exportNames.length === 0) continue;

    const exportMap = exportNames.map((n) => `"${n}":lib["${n}"]`).join(",");
    appendFileSync(
      path.join(_root, "www/js/lib", fileName),
      `(function(r){if(typeof define==="function"&&define.amd)define("@base-ui/react/${subModule}",["@base-ui/react"],function(lib){return{${exportMap}};});})(this);
`,
    );
  }
}

async function buildRadixUmds(tempDir: string, fileName: string) {
  // Get Radix UI modules to aggregate into headless-ui (still used for cmdk and vaul)
  const radixUiSources = readdirSync(
    path.join(_root, "update/node_modules/@radix-ui"),
    {
      withFileTypes: true,
    },
  );

  // First, build a dependency graph and sort topologically
  type RadixPackage = string;
  const dependencyGraph = new Map<RadixPackage, RadixPackage[]>();
  const packageJsonCache = new Map<RadixPackage, PackageJson>();

  // Build Radix dependency graph
  for (const folder of radixUiSources.filter(
    (f): f is Dirent & { isDirectory: () => true } => f.isDirectory(),
  )) {
    const packagePath = path.join(
      _root,
      "update/node_modules/@radix-ui",
      folder.name,
      "package.json",
    );
    const packageJson: PackageJson = JSON.parse(
      readFileSync(packagePath, "utf8"),
    );
    packageJsonCache.set(folder.name, packageJson);

    const radixDeps: RadixPackage[] = Object.keys({
      ...packageJson.dependencies,
      ...packageJson.peerDependencies,
    })
      .filter((dep) => dep.startsWith("@radix-ui/"))
      .map((dep): RadixPackage => dep.replace("@radix-ui/", ""));

    dependencyGraph.set(folder.name, radixDeps);
  }

  // Topological sort function
  function topologicalSort(
    graph: Map<RadixPackage, RadixPackage[]>,
  ): RadixPackage[] {
    const visited = new Set<RadixPackage>();
    const temp = new Set<RadixPackage>();
    const order: RadixPackage[] = [];

    function visit(node: RadixPackage) {
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
    const packageJson = packageJsonCache.get(packageName)!;
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
      fileName,
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
    rmSync(path.join(_root, "www/js/lib/headless-ui.min.js"), { force: true });
    rmSync(path.join(_root, "www/js/lib/dnd-kit.min.js"), { force: true });
    rmSync(path.join(_root, "www/js/lib/shadcn.min.js"), { force: true });
    rmSync(path.join(_root, "www/js/lib/charts.min.js"), { force: true });

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

    // @base-ui replaces radix-ui for most headless ui
    await buildRadixUmds(tempDir, "headless-ui.min.js");
    await buildBaseUiUmds(tempDir, "headless-ui.min.js");

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

    // wouter — custom entry includes use-hash-location exports
    const wouterEntry = await generateWouterEntryFile(tempDir);
    await buildUmd(tempDir, "wouter", "extras.min.js", wouterEntry);

    // AMD shim for wouter/use-hash-location (sub-module of the shared wouter bundle)
    appendFileSync(
      path.join(_root, "www/js/lib", "extras.min.js"),
      `(function(r){if(typeof define==="function"&&define.amd)define("wouter/use-hash-location",["wouter"],function(lib){return{"navigate":lib["navigate"],"useHashLocation":lib["useHashLocation"]};});})(this);
`,
    );
    await buildUmd(tempDir, "zustand", "extras.min.js");
    await buildUmd(tempDir, "swr", "extras.min.js");

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
    await buildUmd(tempDir, "zod", "shadcn.min.js");
    await buildUmd(tempDir, "date-fns", "shadcn.min.js");
    await buildUmd(tempDir, "tailwind-merge", "shadcn.min.js");
    await buildUmd(tempDir, "clsx", "shadcn.min.js");
    await buildUmd(tempDir, "class-variance-authority", "shadcn.min.js"); //clsx
    await buildUmd(tempDir, "react-resizable-panels", "shadcn.min.js");
    await buildUmd(tempDir, "react-day-picker", "shadcn.min.js"); //date-fns
    await buildUmd(tempDir, "embla-carousel-react", "shadcn.min.js");
    await buildUmd(tempDir, "@tanstack/react-form", "shadcn.min.js");
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

    // use-mask-input
    await buildUmd(tempDir, "use-mask-input", "shadcn.min.js");

    // shadcn charts
    await buildUmd(tempDir, "recharts", "charts.min.js"); //clsx

    rmSync(tempDir, { recursive: true, force: true });
  } catch (error) {
    console.error("Error during UMD build:", error);
    throw error;
  }
}

function removeExtensionFromImports(directory: string) {
  try {
    const files = readdirSync(directory);

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stats = statSync(filePath);

      if (stats.isDirectory()) {
        // Recursively process subdirectories
        removeExtensionFromImports(filePath);
      } else {
        // Only process .d.ts files
        if (file.endsWith(".d.ts")) {
          const content = readFileSync(filePath, "utf8");
          // Multi-pass: strip .d.ts before .ts to avoid partial match; tsx before ts same reason
          const updatedContent = content
            .replace(/(from ['\"])([^'\"]+)\.d\.ts(['\"])/g, "$1$2$3")
            .replace(/(from ['\"])([^'\"]+)\.tsx(['\"])/g, "$1$2$3")
            .replace(/(from ['\"])([^'\"]+)\.ts(['\"])/g, "$1$2$3")
            .replace(/(from ['\"])([^'\"]+)\.js(['\"])/g, "$1$2$3");
          if (updatedContent !== content) {
            writeFileSync(filePath, updatedContent);
          }
        }
      }
    });
  } catch (error) {
    console.error("Error removing extensions: ", error);
  }
}

async function buildType(src: string, dest: string) {
  await exec(`tsup ${src}`);
  await exec(`tsup ${src}`);
  const outFile = path.basename(src).replace(/\.(j|t)sx?$/, ".d.cts");
  let content = readFileSync(path.join(_root, `update/${outFile}`), "utf8")
    .replace("import React from 'react';", "import * as React from 'react';")
    .replace("import React__default from 'react';", "")
    .replace(
      "import React__default, { ReactNode } from 'react';",
      "import { ReactNode } from 'react';",
    )
    .replaceAll("React__default.", "React.");

  // Fix mangled cross-module references tsup cannot resolve
  content = content
    // Strip mangled declare const lines that shadow real declarations
    .replace(
      /declare const index_parts[\$_a-zA-Z0-9]*_(\w+): typeof \1;\n/g,
      "",
    )
    // Strip mangled type aliases
    .replace(/type index_parts[\$_a-zA-Z0-9]*_(\w+) = \1;/g, "")
    // Fix mangled re-export references inside index_parts namespace
    .replace(/index_parts[\$_a-zA-Z0-9]*_(\w+) as \1/g, "$1");

  appendFileSync(dest, content);
  rmSync(path.join(_root, `update/${outFile}`));
}

// Copy all type definitions for the project
async function buildTypes() {
  try {
    rmSync(path.join(_root, "types"), { recursive: true, force: true });
    mkdirSync(path.join(_root, "types"), { recursive: true });

    // csstype
    cpSync(
      path.join(_root, "update/node_modules/csstype/index.d.ts"),
      path.join(_root, "types/csstype.d.ts"),
    );

    // react is a relative import in jsx-runtime, so rewrite that
    cpSync(
      path.join(_root, "update/node_modules/@types/react/global.d.ts"),
      path.join(_root, "types/global.d.ts"),
    );
    cpSync(
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
    cpSync(
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

    // Patch @base-ui 1.5.0 .parts.d.ts that are missing re-exports present in the JS
    // (e.g., direction-provider/index.parts.d.ts is missing useDirection)
    const baseUiDir = path.join(_root, "update/node_modules/@base-ui/react");
    for (const entry of readdirSync(baseUiDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const partsDecl = path.join(baseUiDir, entry.name, "index.parts.d.ts");
      if (!existsSync(partsDecl)) continue;
      let partsContent = readFileSync(partsDecl, "utf8");
      // direction-provider is missing useDirection re-export from internal context
      if (
        !partsContent.includes("useDirection") &&
        partsContent.includes("DirectionProvider as Provider")
      ) {
        appendFileSync(
          partsDecl,
          '\nexport type { TextDirection } from "../internals/direction-context/DirectionContext.js";\n' +
            'export { useDirection } from "../internals/direction-context/DirectionContext.js";\n',
        );
      }
    }

    // base-ui types
    mkdirSync(path.join(_root, "types/@base-ui"));
    await buildType(
      path.join(_root, "update/node_modules/@base-ui/react/index.js"),
      path.join(_root, "types/@base-ui/react.d.ts"),
    );

    // Update the separator exports so the typescript compiler can analyze them
    const baseUiTypesPath = path.join(_root, "types/@base-ui/react.d.ts");
    const baseUiTypesContent = readFileSync(baseUiTypesPath, "utf8");
    writeFileSync(
      baseUiTypesPath,
      baseUiTypesContent
        .replace(
          /declare const index_parts\$[a-z0-9]+_Separator: typeof Separator;\n/g,
          "",
        )
        .replace(/index_parts\$[a-z0-9]+_Separator as Separator/g, "Separator"),
    );

    // base-ui sub-module types for path resolution (e.g. @base-ui/react/accordion)
    mkdirSync(path.join(_root, "types/@base-ui/react"), { recursive: true });
    const subDir = path.join(_root, "update/node_modules/@base-ui/react");
    for (const entry of readdirSync(subDir, { withFileTypes: true })) {
      if (
        !entry.isDirectory() ||
        ["esm", "types", "internals", "utils"].includes(entry.name) ||
        entry.name.startsWith("unstable-")
      ) {
        continue;
      }
      const indexPath = path.join(subDir, entry.name, "index.js");
      if (!statSync(indexPath).isFile()) continue;

      await buildType(
        indexPath,
        path.join(_root, `types/@base-ui/react/${entry.name}.d.ts`),
      );
    }
    // Copy helper: recursively copy .d.ts files, stripping .js extensions from relative imports
    function copyTypesPreservingStructure(srcDir: string, destDir: string) {
      for (const entry of readdirSync(srcDir, { withFileTypes: true })) {
        if (entry.isDirectory()) {
          mkdirSync(path.join(destDir, entry.name), { recursive: true });
          copyTypesPreservingStructure(
            path.join(srcDir, entry.name),
            path.join(destDir, entry.name),
          );
        } else if (entry.name.endsWith(".d.ts")) {
          const content = readFileSync(path.join(srcDir, entry.name), "utf8")
            .replace(/(from ['"])([^'"]+)\.js(['"])/g, "$1$2$3")
            .replace(/(from ['"])([^'"]+)\.d\.ts(['"])/g, "$1$2$3")
            .replace(/from ['"]\.\.(['"])/g, "from '../index$1");
          writeFileSync(path.join(destDir, entry.name), content);
        }
      }
    }
    // Build types with tsup
    mkdirSync(path.join(_root, "types/@tanstack"));
    // @tanstack/react-table — copy .d.ts preserving structure so tsconfig paths resolve
    mkdirSync(path.join(_root, "types/@tanstack/react-table/build/lib"), {
      recursive: true,
    });
    copyTypesPreservingStructure(
      path.join(_root, "update/node_modules/@tanstack/react-table/build/lib"),
      path.join(_root, "types/@tanstack/react-table/build/lib"),
    );
    appendFileSync(
      path.join(_root, "types/@tanstack/react-table/index.d.ts"),
      "export * from './build/lib/index';\n",
    );
    // @tanstack/table-core — dependency of react-table
    mkdirSync(path.join(_root, "types/@tanstack/table-core/build/lib"), {
      recursive: true,
    });
    copyTypesPreservingStructure(
      path.join(_root, "update/node_modules/@tanstack/table-core/build/lib"),
      path.join(_root, "types/@tanstack/table-core/build/lib"),
    );
    appendFileSync(
      path.join(_root, "types/@tanstack/table-core/index.d.ts"),
      "export * from './build/lib/index';\n",
    );
    // @tanstack/react-form — copy .d.ts preserving structure so TypeScript resolves
    // relative imports between react-form, form-core, and react-store
    mkdirSync(path.join(_root, "types/@tanstack/react-form/dist/esm"), {
      recursive: true,
    });
    copyTypesPreservingStructure(
      path.join(_root, "update/node_modules/@tanstack/react-form/dist/esm"),
      path.join(_root, "types/@tanstack/react-form/dist/esm"),
    );
    mkdirSync(path.join(_root, "types/@tanstack/form-core/dist/esm"), {
      recursive: true,
    });
    copyTypesPreservingStructure(
      path.join(_root, "update/node_modules/@tanstack/form-core/dist/esm"),
      path.join(_root, "types/@tanstack/form-core/dist/esm"),
    );
    mkdirSync(path.join(_root, "types/@tanstack/react-store/dist"), {
      recursive: true,
    });
    copyTypesPreservingStructure(
      path.join(_root, "update/node_modules/@tanstack/react-store/dist"),
      path.join(_root, "types/@tanstack/react-store/dist"),
    );
    // Create package-level entry points so tsconfig path resolution works
    appendFileSync(
      path.join(_root, "types/@tanstack/react-form/index.d.ts"),
      "export * from './dist/esm/index';\n",
    );
    appendFileSync(
      path.join(_root, "types/@tanstack/form-core/index.d.ts"),
      "export * from './dist/esm/index';\n",
    );
    appendFileSync(
      path.join(_root, "types/@tanstack/react-store/index.d.ts"),
      "export * from './dist/index';\n",
    );
    // @tanstack/store — dependency of form-core and react-store
    mkdirSync(path.join(_root, "types/@tanstack/store/dist"), {
      recursive: true,
    });
    copyTypesPreservingStructure(
      path.join(_root, "update/node_modules/@tanstack/store/dist"),
      path.join(_root, "types/@tanstack/store/dist"),
    );
    appendFileSync(
      path.join(_root, "types/@tanstack/store/index.d.ts"),
      "export * from './dist/index';\n",
    );
    // @tanstack/devtools-event-client — dependency of form-core
    mkdirSync(
      path.join(_root, "types/@tanstack/devtools-event-client/dist/esm"),
      { recursive: true },
    );
    copyTypesPreservingStructure(
      path.join(
        _root,
        "update/node_modules/@tanstack/devtools-event-client/dist/esm",
      ),
      path.join(_root, "types/@tanstack/devtools-event-client/dist/esm"),
    );
    appendFileSync(
      path.join(_root, "types/@tanstack/devtools-event-client/index.d.ts"),
      "export * from './dist/esm/index';\n",
    );
    // tsup needs renamed files, since these typedefs import with .ts extension
    removeExtensionFromImports(
      path.join(_root, "update/node_modules/date-fns"),
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
      path.join(_root, "update/node_modules/zustand/index.js"),
      path.join(_root, "types/zustand.d.ts"),
    );

    // Copy @dnd-kit types
    mkdirSync(path.join(_root, "types/@dnd-kit"));
    cpSync(
      path.join(_root, "update/types/@dnd-kit/utilities.d.ts"),
      path.join(_root, "types/@dnd-kit/utilities.d.ts"),
    );
    cpSync(
      path.join(_root, "update/types/@dnd-kit/accessibility.d.ts"),
      path.join(_root, "types/@dnd-kit/accessibility.d.ts"),
    );
    cpSync(
      path.join(_root, "update/types/@dnd-kit/core.d.ts"),
      path.join(_root, "types/@dnd-kit/core.d.ts"),
    );
    cpSync(
      path.join(_root, "update/types/@dnd-kit/modifiers.d.ts"),
      path.join(_root, "types/@dnd-kit/modifiers.d.ts"),
    );
    cpSync(
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
    cpSync(
      path.join(_root, "update/node_modules/regexparam/index.d.ts"),
      path.join(_root, "types/regexparam.d.ts"),
    );
    cpSync(
      path.join(_root, "update/node_modules/wouter/types/index.d.ts"),
      path.join(_root, "types/wouter/index.d.ts"),
    );
    cpSync(
      path.join(_root, "update/node_modules/wouter/types/location-hook.d.ts"),
      path.join(_root, "types/wouter/location-hook.d.ts"),
    );
    cpSync(
      path.join(_root, "update/node_modules/wouter/types/memory-location.d.ts"),
      path.join(_root, "types/wouter/memory-location.d.ts"),
    );
    cpSync(
      path.join(_root, "update/node_modules/wouter/types/router.d.ts"),
      path.join(_root, "types/wouter/router.d.ts"),
    );
    cpSync(
      path.join(
        _root,
        "update/node_modules/wouter/types/use-browser-location.d.ts",
      ),
      path.join(_root, "types/wouter/use-browser-location.d.ts"),
    );
    cpSync(
      path.join(
        _root,
        "update/node_modules/wouter/types/use-hash-location.d.ts",
      ),
      path.join(_root, "types/wouter/use-hash-location.d.ts"),
    );

    // Copy shadcn dependency types
    cpSync(
      path.join(_root, "update/node_modules/clsx/clsx.d.ts"),
      path.join(_root, "types/clsx.d.ts"),
    );
    cpSync(
      path.join(_root, "update/node_modules/tailwind-merge/dist/types.d.ts"),
      path.join(_root, "types/tailwind-merge.d.ts"),
    );
    cpSync(
      path.join(_root, "update/node_modules/cmdk/dist/index.d.ts"),
      path.join(_root, "types/cmdk.d.ts"),
    );

    // tsup needs renamed files, since these typedefs import with file extensions (.js/.ts)
    removeExtensionFromImports(
      path.join(_root, "update/node_modules/swr/dist"),
    );
    await buildType(
      path.join(_root, "update/node_modules/swr/dist/index/index.d.ts"),
      path.join(_root, "types/swr.d.ts"),
    );
    removeExtensionFromImports(
      path.join(_root, "update/node_modules/react-resizable-panels/dist"),
    );
    await buildType(
      path.join(
        _root,
        "update/node_modules/react-resizable-panels/dist/react-resizable-panels.d.ts",
      ),
      path.join(_root, "types/react-resizable-panels.d.ts"),
    );

    // zod
    cpSync(
      path.join(_root, "update/node_modules/zod"),
      path.join(_root, "types/zod"),
      { filter: (src, _) => /(^[^\.]+$|\.d\.ts$)/.test(src), recursive: true },
    );
    appendFileSync(
      path.join(_root, "types/zod/v4/core/util.d.ts"),
      `
// https://github.com/microsoft/TypeScript/issues/3926#issuecomment-169096154
declare global {
	interface ErrorConstructor {
		captureStackTrace(thisArg: any, func: any): void;
	}
}`,
    );

    // use-mask-input
    await buildType(
      path.join(_root, "update/node_modules/use-mask-input/dist/index.d.ts"),
      path.join(_root, "types/use-mask-input.d.ts"),
    );

    // Update the relative import to fix tsup generation for use-mask-input
    const useMaskDistDir = path.join(
      _root,
      "update/node_modules/use-mask-input/dist",
    );
    const useMaskChunk = readdirSync(useMaskDistDir).find((file) =>
      /^index-.*\.d\.ts$/.test(file),
    );
    if (useMaskChunk) {
      cpSync(
        path.join(useMaskDistDir, useMaskChunk),
        path.join(_root, "types", useMaskChunk),
      );
    }
    const useMaskTypesPath = path.join(_root, "types/use-mask-input.d.ts");
    const useMaskTypesContent = readFileSync(useMaskTypesPath, "utf8");
    writeFileSync(
      useMaskTypesPath,
      useMaskTypesContent.replace(/(["']\.\/index-[^"']+)\.js(["'])/g, "$1$2"),
    );

    // Recharts
    await buildType(
      path.join(_root, "update/node_modules/recharts/types/index.d.ts"),
      path.join(_root, "types/recharts.d.ts"),
    );

    // Uncomment, run, and fix imports to build updated react-day-picker types:
    // await buildType(path.join(_root, "update/node_modules/react-day-picker/dist/esm/index.js"), path.join(_root, "update/types/react-day-picker.d.ts"));
    cpSync(
      path.join(_root, "update/types/react-day-picker.d.ts"),
      path.join(_root, "types/react-day-picker.d.ts"),
    );

    // Combine class-variance-authority types
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
