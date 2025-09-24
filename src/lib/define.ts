// Custom AMD-like loader, does not support circular dependencies
const __MODULES__: {
  cache: { [name: string]: any };
  pending: { [name: string]: { unmetDeps: string[]; load: () => void } };
  hasCycle: boolean;
  get: (name: string) => any;
  set: (name: string, value: any) => void;
  resolve: (dep: string, current: string) => string;
  refresh: () => void;
  checkCycles: () => void;
} = {
  cache: {},
  pending: {},
  hasCycle: false,
  get: (name: string) => __MODULES__.cache[name],
  set: (name: string, value: any) => (__MODULES__.cache[name] = value),

  // Convert a module path to be relative to the output "js" directory
  resolve: (name: string, from: string) => {
    if (/^\.\.?\//.test(name)) {
      const absolutePath = from.split("/").slice(0, -1);
      const relativeDep = name.split("/");
      while (relativeDep[0] === "..") {
        relativeDep.shift();
        absolutePath.pop();
      }
      while (relativeDep[0] === ".") {
        relativeDep.shift();
      }
      name = [...absolutePath, ...relativeDep].join("/");
    } else {
      name = name.replace(/^@?\//, __ROOT_PATH__ + "/js/");
    }
    return name;
  },

  // Perform load of any modules that are ready
  refresh: () => {
    if (__MODULES__.hasCycle) return;
    for (const [key, { unmetDeps, load }] of Object.entries(
      __MODULES__.pending,
    )) {
      if (unmetDeps.every((name) => name in __MODULES__.cache)) {
        delete __MODULES__.pending[key];
        load();
      }
    }
    __MODULES__.checkCycles();
  },

  // Recursive depth-first search to trace dependency cycles
  checkCycles: () => {
    const visited = new Set<string>();
    const recursionStack = new Set<string>();

    function trace(module: string): string[] {
      if (recursionStack.has(module)) {
        return [module];
      }
      if (visited.has(module)) {
        return [];
      }

      visited.add(module);
      recursionStack.add(module);

      const deps = __MODULES__.pending[module]?.unmetDeps || [];
      for (const dep of deps) {
        const cycle = trace(dep);
        if (cycle.length > 0) {
          cycle.push(module);
          return cycle;
        }
      }

      recursionStack.delete(module);
      return [];
    }

    // Trace all still-pending modules to see if we have a cycle
    for (const module of Object.keys(__MODULES__.pending)) {
      if (!visited.has(module)) {
        const cycle = trace(module);

        if (cycle.length > 0) {
          __MODULES__.hasCycle = true;
          const firstNode = cycle[0];
          const lastIndex = cycle.lastIndexOf(firstNode);
          const minimalCycle = cycle.slice(0, lastIndex + 1);
          throw new Error(
            "Circular dependency " + minimalCycle.reverse().join(" -> "),
          );
        }
      }
    }
  },
};

// Main define function to load a module w/ dependencies into the __MODULES__ global object
const define = (...args: any) => {
  let name: string, deps: Array<string>, factory: Function;

  // Webpack AMD modules are named
  if ("string" === typeof args[0]) {
    name = args[0];
    deps = args[1];
    factory = args[2];

    // Webpack modules do not load dynamically, add these script tags in order
    __MODULES__.set(name, factory.call(this, ...deps.map(__MODULES__.get)));

    // TypeScript AMD modules are not named
  } else {
    name = (document.currentScript as HTMLScriptElement).src
      .replace(document.location.origin, "")
      .replace(/\.js$/, "");
    deps = args[0];
    factory = args[1];

    // TypeScript AMD modules pass in require and exports
    deps = deps.slice(2);

    // Load the module with all dependencies, when ready
    const load = () => {
      const require = (dep: string) =>
        __MODULES__.get(__MODULES__.resolve(dep, name));
      const exports = {};
      factory.call(this, require, exports, ...deps.map(require));
      __MODULES__.set(name, exports);
      __MODULES__.refresh();
    };

    // Check which dependencies are not yet loaded
    const unmetDeps = [];
    for (const dep of deps) {
      const resolved = __MODULES__.resolve(dep, name);
      !(resolved in __MODULES__.cache) && unmetDeps.push(resolved);
    }

    // Dynamically add new AMD module dependencies in script elements
    for (const dep of unmetDeps) {
      if (
        !Object.values(__MODULES__.pending).some(({ unmetDeps }) =>
          unmetDeps.includes(dep),
        )
      ) {
        __LOAD_SCRIPT__(dep, true);
      }
    }

    // Add this module to pending list and try to load
    __MODULES__.pending[name] = { unmetDeps, load };
    __MODULES__.refresh();
  }
};

define.amd = true; // lol no it's not, but pretend we are AMD/RequireJS
