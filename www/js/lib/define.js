// Custom AMD-like loader, does not support circular dependencies
const __MODULES__ = {
    cache: {},
    pending: {},
    hasCycle: false,
    checkCycles: () => {
        const visited = new Set();
        const recursionStack = new Set();
        // Recursive depth-first search to trace dependency cycles
        function trace(module) {
            var _a;
            if (recursionStack.has(module)) {
                return [module];
            }
            if (visited.has(module)) {
                return [];
            }
            visited.add(module);
            recursionStack.add(module);
            const deps = ((_a = __MODULES__.pending[module]) === null || _a === void 0 ? void 0 : _a.unmetDeps) || [];
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
                    throw new Error("Circular dependency " + minimalCycle.reverse().join(" -> "));
                }
            }
        }
    },
    get: (name) => __MODULES__.cache[name],
    set: (name, value) => (__MODULES__.cache[name] = value),
    resolve: (name, from) => {
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
        }
        else {
            name = name.replace(/^@?\//, __ROOT_PATH__ + "/js/");
        }
        return name;
    },
    refresh: () => {
        if (__MODULES__.hasCycle)
            return;
        for (const [key, { unmetDeps, load }] of Object.entries(__MODULES__.pending)) {
            if (unmetDeps.every((name) => name in __MODULES__.cache)) {
                delete __MODULES__.pending[key];
                load();
            }
        }
        __MODULES__.checkCycles();
    },
};
const define = (...args) => {
    let name, deps, factory;
    // Webpack AMD modules are named, TypeScript AMD modules are not
    if ("string" === typeof args[0]) {
        name = args[0];
        deps = args[1];
        factory = args[2];
    }
    else {
        name = document.currentScript.src
            .replace(document.location.origin, "")
            .replace(/\.js$/, "");
        deps = args[0];
        factory = args[1];
    }
    // TypeScript AMD modules pass in require and exports
    if ("require" === deps[0] && "exports" === deps[1]) {
        deps = deps.slice(2);
        const load = () => {
            const require = (dep) => __MODULES__.get(__MODULES__.resolve(dep, name));
            const exports = {};
            factory.call(this, require, exports, ...deps.map(require));
            __MODULES__.set(name, exports);
            __MODULES__.refresh();
        };
        const unmetDeps = [];
        for (let dep of deps) {
            dep = __MODULES__.resolve(dep, name);
            !(dep in __MODULES__.cache) && unmetDeps.push(dep);
        }
        for (let dep of unmetDeps) {
            if (!Object.values(__MODULES__.pending).some(({ unmetDeps }) => unmetDeps.includes(dep))) {
                __LOAD_SCRIPT__(dep, true);
            }
        }
        __MODULES__.pending[name] = { unmetDeps, load };
        __MODULES__.refresh();
    }
    else {
        // Webpack UMDs do not load dynamically, add these script tags in order
        __MODULES__.set(name, factory.call(this, ...deps.map(__MODULES__.get)));
    }
};
define.amd = true; // lol no it's not, but pretend we are AMD/RequireJS
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9kZWZpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQWlFO0FBQ2pFLE1BQU0sV0FBVyxHQVNiO0lBQ0YsS0FBSyxFQUFFLEVBQUU7SUFDVCxPQUFPLEVBQUUsRUFBRTtJQUNYLFFBQVEsRUFBRSxLQUFLO0lBQ2YsV0FBVyxFQUFFLEdBQUcsRUFBRTtRQUNoQixNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO1FBQ2xDLE1BQU0sY0FBYyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFFekMsMERBQTBEO1FBQzFELFNBQVMsS0FBSyxDQUFDLE1BQWM7O1lBQzNCLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUMvQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQztZQUNELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUN4QixPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUM7WUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFM0IsTUFBTSxJQUFJLEdBQUcsQ0FBQSxNQUFBLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLDBDQUFFLFNBQVMsS0FBSSxFQUFFLENBQUM7WUFDMUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25CLE9BQU8sS0FBSyxDQUFDO2dCQUNm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QXVFO1FBQ3ZFLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLG9EQUFvRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSBBTUQtbGlrZSBsb2FkZXIsIGRvZXMgbm90IHN1cHBvcnQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzXG5jb25zdCBfX01PRFVMRVNfXzoge1xuICBjYWNoZTogeyBbbmFtZTogc3RyaW5nXTogYW55IH07XG4gIHBlbmRpbmc6IHsgW25hbWU6IHN0cmluZ106IHsgdW5tZXREZXBzOiBzdHJpbmdbXTsgbG9hZDogKCkgPT4gdm9pZCB9IH07XG4gIGhhc0N5Y2xlOiBib29sZWFuO1xuICBjaGVja0N5Y2xlczogKCkgPT4gdm9pZDtcbiAgZ2V0OiAobmFtZTogc3RyaW5nKSA9PiBhbnk7XG4gIHNldDogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZDtcbiAgcmVzb2x2ZTogKGRlcDogc3RyaW5nLCBjdXJyZW50OiBzdHJpbmcpID0+IHN0cmluZztcbiAgcmVmcmVzaDogKCkgPT4gdm9pZDtcbn0gPSB7XG4gIGNhY2hlOiB7fSxcbiAgcGVuZGluZzoge30sXG4gIGhhc0N5Y2xlOiBmYWxzZSxcbiAgY2hlY2tDeWNsZXM6ICgpID0+IHtcbiAgICBjb25zdCB2aXNpdGVkID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgY29uc3QgcmVjdXJzaW9uU3RhY2sgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIC8vIFJlY3Vyc2l2ZSBkZXB0aC1maXJzdCBzZWFyY2ggdG8gdHJhY2UgZGVwZW5kZW5jeSBjeWNsZXNcbiAgICBmdW5jdGlvbiB0cmFjZShtb2R1bGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICAgIGlmIChyZWN1cnNpb25TdGFjay5oYXMobW9kdWxlKSkge1xuICAgICAgICByZXR1cm4gW21vZHVsZV07XG4gICAgICB9XG4gICAgICBpZiAodmlzaXRlZC5oYXMobW9kdWxlKSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIHZpc2l0ZWQuYWRkKG1vZHVsZSk7XG4gICAgICByZWN1cnNpb25TdGFjay5hZGQobW9kdWxlKTtcblxuICAgICAgY29uc3QgZGVwcyA9IF9fTU9EVUxFU19fLnBlbmRpbmdbbW9kdWxlXT8udW5tZXREZXBzIHx8IFtdO1xuICAgICAgZm9yIChjb25zdCBkZXAgb2YgZGVwcykge1xuICAgICAgICBjb25zdCBjeWNsZSA9IHRyYWNlKGRlcCk7XG4gICAgICAgIGlmIChjeWNsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY3ljbGUucHVzaChtb2R1bGUpO1xuICAgICAgICAgIHJldHVybiBjeWNsZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZWN1cnNpb25TdGFjay5kZWxldGUobW9kdWxlKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG1vZHVsZSBvZiBPYmplY3Qua2V5cyhfX01PRFVMRVNfXy5wZW5kaW5nKSkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhtb2R1bGUpKSB7XG4gICAgICAgIGNvbnN0IGN5Y2xlID0gdHJhY2UobW9kdWxlKTtcblxuICAgICAgICBpZiAoY3ljbGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIF9fTU9EVUxFU19fLmhhc0N5Y2xlID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBmaXJzdE5vZGUgPSBjeWNsZVswXTtcbiAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBjeWNsZS5sYXN0SW5kZXhPZihmaXJzdE5vZGUpO1xuICAgICAgICAgIGNvbnN0IG1pbmltYWxDeWNsZSA9IGN5Y2xlLnNsaWNlKDAsIGxhc3RJbmRleCArIDEpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiQ2lyY3VsYXIgZGVwZW5kZW5jeSBcIiArIG1pbmltYWxDeWNsZS5yZXZlcnNlKCkuam9pbihcIiAtPiBcIiksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0OiAobmFtZTogc3RyaW5nKSA9PiBfX01PRFVMRVNfXy5jYWNoZVtuYW1lXSxcbiAgc2V0OiAobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiAoX19NT0RVTEVTX18uY2FjaGVbbmFtZV0gPSB2YWx1ZSksXG4gIHJlc29sdmU6IChuYW1lOiBzdHJpbmcsIGZyb206IHN0cmluZykgPT4ge1xuICAgIGlmICgvXlxcLlxcLj9cXC8vLnRlc3QobmFtZSkpIHtcbiAgICAgIGNvbnN0IGFic29sdXRlUGF0aCA9IGZyb20uc3BsaXQoXCIvXCIpLnNsaWNlKDAsIC0xKTtcbiAgICAgIGNvbnN0IHJlbGF0aXZlRGVwID0gbmFtZS5zcGxpdChcIi9cIik7XG4gICAgICB3aGlsZSAocmVsYXRpdmVEZXBbMF0gPT09IFwiLi5cIikge1xuICAgICAgICByZWxhdGl2ZURlcC5zaGlmdCgpO1xuICAgICAgICBhYnNvbHV0ZVBhdGgucG9wKCk7XG4gICAgICB9XG4gICAgICB3aGlsZSAocmVsYXRpdmVEZXBbMF0gPT09IFwiLlwiKSB7XG4gICAgICAgIHJlbGF0aXZlRGVwLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgICBuYW1lID0gWy4uLmFic29sdXRlUGF0aCwgLi4ucmVsYXRpdmVEZXBdLmpvaW4oXCIvXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9eQD9cXC8vLCBfX1JPT1RfUEFUSF9fICsgXCIvanMvXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZTtcbiAgfSxcbiAgcmVmcmVzaDogKCkgPT4ge1xuICAgIGlmIChfX01PRFVMRVNfXy5oYXNDeWNsZSkgcmV0dXJuO1xuICAgIGZvciAoY29uc3QgW2tleSwgeyB1bm1ldERlcHMsIGxvYWQgfV0gb2YgT2JqZWN0LmVudHJpZXMoXG4gICAgICBfX01PRFVMRVNfXy5wZW5kaW5nLFxuICAgICkpIHtcbiAgICAgIGlmICh1bm1ldERlcHMuZXZlcnkoKG5hbWUpID0+IG5hbWUgaW4gX19NT0RVTEVTX18uY2FjaGUpKSB7XG4gICAgICAgIGRlbGV0ZSBfX01PRFVMRVNfXy5wZW5kaW5nW2tleV07XG4gICAgICAgIGxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX19NT0RVTEVTX18uY2hlY2tDeWNsZXMoKTtcbiAgfSxcbn07XG5cbmNvbnN0IGRlZmluZSA9ICguLi5hcmdzOiBhbnkpID0+IHtcbiAgbGV0IG5hbWU6IHN0cmluZywgZGVwczogQXJyYXk8c3RyaW5nPiwgZmFjdG9yeTogRnVuY3Rpb247XG5cbiAgLy8gV2VicGFjayBBTUQgbW9kdWxlcyBhcmUgbmFtZWQsIFR5cGVTY3JpcHQgQU1EIG1vZHVsZXMgYXJlIG5vdFxuICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICBuYW1lID0gYXJnc1swXTtcbiAgICBkZXBzID0gYXJnc1sxXTtcbiAgICBmYWN0b3J5ID0gYXJnc1syXTtcbiAgfSBlbHNlIHtcbiAgICBuYW1lID0gKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgYXMgSFRNTFNjcmlwdEVsZW1lbnQpLnNyY1xuICAgICAgLnJlcGxhY2UoZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luLCBcIlwiKVxuICAgICAgLnJlcGxhY2UoL1xcLmpzJC8sIFwiXCIpO1xuICAgIGRlcHMgPSBhcmdzWzBdO1xuICAgIGZhY3RvcnkgPSBhcmdzWzFdO1xuICB9XG5cbiAgLy8gVHlwZVNjcmlwdCBBTUQgbW9kdWxlcyBwYXNzIGluIHJlcXVpcmUgYW5kIGV4cG9ydHNcbiAgaWYgKFwicmVxdWlyZVwiID09PSBkZXBzWzBdICYmIFwiZXhwb3J0c1wiID09PSBkZXBzWzFdKSB7XG4gICAgZGVwcyA9IGRlcHMuc2xpY2UoMik7XG5cbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWlyZSA9IChkZXA6IHN0cmluZykgPT5cbiAgICAgICAgX19NT0RVTEVTX18uZ2V0KF9fTU9EVUxFU19fLnJlc29sdmUoZGVwLCBuYW1lKSk7XG4gICAgICBjb25zdCBleHBvcnRzID0ge307XG4gICAgICBmYWN0b3J5LmNhbGwodGhpcywgcmVxdWlyZSwgZXhwb3J0cywgLi4uZGVwcy5tYXAocmVxdWlyZSkpO1xuICAgICAgX19NT0RVTEVTX18uc2V0KG5hbWUsIGV4cG9ydHMpO1xuICAgICAgX19NT0RVTEVTX18ucmVmcmVzaCgpO1xuICAgIH07XG5cbiAgICBjb25zdCB1bm1ldERlcHMgPSBbXTtcbiAgICBmb3IgKGxldCBkZXAgb2YgZGVwcykge1xuICAgICAgZGVwID0gX19NT0RVTEVTX18ucmVzb2x2ZShkZXAsIG5hbWUpO1xuICAgICAgIShkZXAgaW4gX19NT0RVTEVTX18uY2FjaGUpICYmIHVubWV0RGVwcy5wdXNoKGRlcCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgZGVwIG9mIHVubWV0RGVwcykge1xuICAgICAgaWYgKFxuICAgICAgICAhT2JqZWN0LnZhbHVlcyhfX01PRFVMRVNfXy5wZW5kaW5nKS5zb21lKCh7IHVubWV0RGVwcyB9KSA9PlxuICAgICAgICAgIHVubWV0RGVwcy5pbmNsdWRlcyhkZXApLFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgX19MT0FEX1NDUklQVF9fKGRlcCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX19NT0RVTEVTX18ucGVuZGluZ1tuYW1lXSA9IHsgdW5tZXREZXBzLCBsb2FkIH07XG4gICAgX19NT0RVTEVTX18ucmVmcmVzaCgpO1xuICB9IGVsc2Uge1xuICAgIC8vIFdlYnBhY2sgVU1EcyBkbyBub3QgbG9hZCBkeW5hbWljYWxseSwgYWRkIHRoZXNlIHNjcmlwdCB0YWdzIGluIG9yZGVyXG4gICAgX19NT0RVTEVTX18uc2V0KG5hbWUsIGZhY3RvcnkuY2FsbCh0aGlzLCAuLi5kZXBzLm1hcChfX01PRFVMRVNfXy5nZXQpKSk7XG4gIH1cbn07XG5cbmRlZmluZS5hbWQgPSB0cnVlOyAvLyBsb2wgbm8gaXQncyBub3QsIGJ1dCBwcmV0ZW5kIHdlIGFyZSBBTUQvUmVxdWlyZUpTXG4iXX0=