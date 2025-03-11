// Custom AMD-like loader, does not support circular dependencies
const __MODULES__: {
  cache: { [name: string]: any };
  pending: { [name: string]: { unmetDeps: string[]; load: () => void } };
  hasCycle: boolean;
  checkCycles: () => void;
  get: (name: string) => any;
  set: (name: string, value: any) => void;
  resolve: (dep: string, current: string) => string;
  refresh: () => void;
} = {
  cache: {},
  pending: {},
  hasCycle: false,
  checkCycles: () => {
    const visited = new Set<string>();
    const recursionStack = new Set<string>();

    // Recursive depth-first search to trace dependency cycles
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
  get: (name: string) => __MODULES__.cache[name],
  set: (name: string, value: any) => (__MODULES__.cache[name] = value),
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
};

const define = (...args: any) => {
  let name: string, deps: Array<string>, factory: Function;

  // Webpack AMD modules are named, TypeScript AMD modules are not
  if ("string" === typeof args[0]) {
    name = args[0];
    deps = args[1];
    factory = args[2];
  } else {
    name = (document.currentScript as HTMLScriptElement).src
      .replace(document.location.origin, "")
      .replace(/\.js$/, "");
    deps = args[0];
    factory = args[1];
  }

  // TypeScript AMD modules pass in require and exports
  if ("require" === deps[0] && "exports" === deps[1]) {
    deps = deps.slice(2);

    const load = () => {
      const require = (dep: string) =>
        __MODULES__.get(__MODULES__.resolve(dep, name));
      const exports = {};
      factory.call(this, require, exports, ...deps.map(require));
      __MODULES__.set(name, exports);
      __MODULES__.refresh();
    };

    const unmetDeps = [];
    for (let dep of deps) {
      dep = __MODULES__.resolve(dep, name);
      !__MODULES__.get(dep) && unmetDeps.push(dep);
    }

    for (let dep of unmetDeps) {
      if (
        !Object.values(__MODULES__.pending).some(({ unmetDeps }) =>
          unmetDeps.includes(dep),
        )
      ) {
        __LOAD_SCRIPT__(dep, true);
      }
    }

    __MODULES__.pending[name] = { unmetDeps, load };
    __MODULES__.refresh();
  } else {
    // Webpack UMDs do not load dynamically, add these script tags in order
    __MODULES__.set(name, factory.call(this, ...deps.map(__MODULES__.get)));
  }
};

define.amd = true; // lol no it's not, but pretend we are AMD/RequireJS
