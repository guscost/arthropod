// Custom AMD-like loader, does not support circular dependencies
const __MODULES__ = {
    cache: {},
    pending: {},
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
            name = name.replace(/^@?\//, document.location.pathname.split("/").slice(0, -1).join("/") + "/js/");
        }
        return name;
    },
    refresh: () => {
        for (const [key, { unmetDeps, load }] of Object.entries(__MODULES__.pending)) {
            if (unmetDeps.every((name) => name in __MODULES__.cache)) {
                delete __MODULES__.pending[key];
                load();
            }
        }
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
            !__MODULES__.get(dep) && unmetDeps.push(dep);
        }
        for (let dep of unmetDeps) {
            if (!Object.values(__MODULES__.pending).some(({ unmetDeps }) => unmetDeps.includes(dep))) {
                const dynamicScript = document.createElement("script");
                dynamicScript.type = "text/javascript";
                dynamicScript.src = dep + ".js";
                document.body.appendChild(dynamicScript);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzaGV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9jYXNoZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQWlFO0FBQ2pFLE1BQU0sV0FBVyxHQU9iO0lBQ0YsS0FBSyxFQUFFLEVBQUU7SUFDVCxPQUFPLEVBQUUsRUFBRTtJQUNYLEdBQUcsRUFBRSxDQUFDLElBQVksRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDOUMsR0FBRyxFQUFFLENBQUMsSUFBWSxFQUFFLEtBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNwRSxPQUFPLEVBQUUsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLEVBQUU7UUFDdEMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDMUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFDL0IsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckIsQ0FBQztZQUNELE9BQU8sV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUM5QixXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEIsQ0FBQztZQUNELElBQUksR0FBRyxDQUFDLEdBQUcsWUFBWSxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxD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QyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBRUQsS0FBSyxJQUFJLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUMxQixJQUNFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQ3pELFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQ3hCLEVBQ0QsQ0FBQztnQkFDRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2RCxhQUFhLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO2dCQUN2QyxhQUFhLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNDLENBQUM7UUFDSCxDQUFDO1FBRUQsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNoRCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztTQUFNLENBQUM7UUFDTix1RUFBdUU7UUFDdkUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsb0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIEFNRC1saWtlIGxvYWRlciwgZG9lcyBub3Qgc3VwcG9ydCBjaXJjdWxhciBkZXBlbmRlbmNpZXNcbmNvbnN0IF9fTU9EVUxFU19fOiB7XG4gIGNhY2hlOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfTtcbiAgcGVuZGluZzogeyBbbmFtZTogc3RyaW5nXTogeyB1bm1ldERlcHM6IHN0cmluZ1tdOyBsb2FkOiAoKSA9PiB2b2lkIH0gfTtcbiAgZ2V0OiAobmFtZTogc3RyaW5nKSA9PiBhbnk7XG4gIHNldDogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZDtcbiAgcmVzb2x2ZTogKGRlcDogc3RyaW5nLCBjdXJyZW50OiBzdHJpbmcpID0+IHN0cmluZztcbiAgcmVmcmVzaDogKCkgPT4gdm9pZDtcbn0gPSB7XG4gIGNhY2hlOiB7fSxcbiAgcGVuZGluZzoge30sXG4gIGdldDogKG5hbWU6IHN0cmluZykgPT4gX19NT0RVTEVTX18uY2FjaGVbbmFtZV0sXG4gIHNldDogKG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gKF9fTU9EVUxFU19fLmNhY2hlW25hbWVdID0gdmFsdWUpLFxuICByZXNvbHZlOiAobmFtZTogc3RyaW5nLCBmcm9tOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoL15cXC5cXC4/XFwvLy50ZXN0KG5hbWUpKSB7XG4gICAgICBjb25zdCBhYnNvbHV0ZVBhdGggPSBmcm9tLnNwbGl0KFwiL1wiKS5zbGljZSgwLCAtMSk7XG4gICAgICBjb25zdCByZWxhdGl2ZURlcCA9IG5hbWUuc3BsaXQoXCIvXCIpO1xuICAgICAgd2hpbGUgKHJlbGF0aXZlRGVwWzBdID09PSBcIi4uXCIpIHtcbiAgICAgICAgcmVsYXRpdmVEZXAuc2hpZnQoKTtcbiAgICAgICAgYWJzb2x1dGVQYXRoLnBvcCgpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHJlbGF0aXZlRGVwWzBdID09PSBcIi5cIikge1xuICAgICAgICByZWxhdGl2ZURlcC5zaGlmdCgpO1xuICAgICAgfVxuICAgICAgbmFtZSA9IFsuLi5hYnNvbHV0ZVBhdGgsIC4uLnJlbGF0aXZlRGVwXS5qb2luKFwiL1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZShcbiAgICAgICAgL15AP1xcLy8sXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKS5zbGljZSgwLCAtMSkuam9pbihcIi9cIikgKyBcIi9qcy9cIixcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBuYW1lO1xuICB9LFxuICByZWZyZXNoOiAoKSA9PiB7XG4gICAgZm9yIChjb25zdCBba2V5LCB7IHVubWV0RGVwcywgbG9hZCB9XSBvZiBPYmplY3QuZW50cmllcyhcbiAgICAgIF9fTU9EVUxFU19fLnBlbmRpbmcsXG4gICAgKSkge1xuICAgICAgaWYgKHVubWV0RGVwcy5ldmVyeSgobmFtZSkgPT4gbmFtZSBpbiBfX01PRFVMRVNfXy5jYWNoZSkpIHtcbiAgICAgICAgZGVsZXRlIF9fTU9EVUxFU19fLnBlbmRpbmdba2V5XTtcbiAgICAgICAgbG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn07XG5cbmNvbnN0IGRlZmluZSA9ICguLi5hcmdzOiBhbnkpID0+IHtcbiAgbGV0IG5hbWU6IHN0cmluZywgZGVwczogQXJyYXk8c3RyaW5nPiwgZmFjdG9yeTogRnVuY3Rpb247XG5cbiAgLy8gV2VicGFjayBBTUQgbW9kdWxlcyBhcmUgbmFtZWQsIFR5cGVTY3JpcHQgQU1EIG1vZHVsZXMgYXJlIG5vdFxuICBpZiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICBuYW1lID0gYXJnc1swXTtcbiAgICBkZXBzID0gYXJnc1sxXTtcbiAgICBmYWN0b3J5ID0gYXJnc1syXTtcbiAgfSBlbHNlIHtcbiAgICBuYW1lID0gKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgYXMgSFRNTFNjcmlwdEVsZW1lbnQpLnNyY1xuICAgICAgLnJlcGxhY2UoZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luLCBcIlwiKVxuICAgICAgLnJlcGxhY2UoL1xcLmpzJC8sIFwiXCIpO1xuICAgIGRlcHMgPSBhcmdzWzBdO1xuICAgIGZhY3RvcnkgPSBhcmdzWzFdO1xuICB9XG5cbiAgLy8gVHlwZVNjcmlwdCBBTUQgbW9kdWxlcyBwYXNzIGluIHJlcXVpcmUgYW5kIGV4cG9ydHNcbiAgaWYgKFwicmVxdWlyZVwiID09PSBkZXBzWzBdICYmIFwiZXhwb3J0c1wiID09PSBkZXBzWzFdKSB7XG4gICAgZGVwcyA9IGRlcHMuc2xpY2UoMik7XG5cbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgY29uc3QgcmVxdWlyZSA9IChkZXA6IHN0cmluZykgPT5cbiAgICAgICAgX19NT0RVTEVTX18uZ2V0KF9fTU9EVUxFU19fLnJlc29sdmUoZGVwLCBuYW1lKSk7XG4gICAgICBjb25zdCBleHBvcnRzID0ge307XG4gICAgICBmYWN0b3J5LmNhbGwodGhpcywgcmVxdWlyZSwgZXhwb3J0cywgLi4uZGVwcy5tYXAocmVxdWlyZSkpO1xuICAgICAgX19NT0RVTEVTX18uc2V0KG5hbWUsIGV4cG9ydHMpO1xuICAgICAgX19NT0RVTEVTX18ucmVmcmVzaCgpO1xuICAgIH07XG5cbiAgICBjb25zdCB1bm1ldERlcHMgPSBbXTtcbiAgICBmb3IgKGxldCBkZXAgb2YgZGVwcykge1xuICAgICAgZGVwID0gX19NT0RVTEVTX18ucmVzb2x2ZShkZXAsIG5hbWUpO1xuICAgICAgIV9fTU9EVUxFU19fLmdldChkZXApICYmIHVubWV0RGVwcy5wdXNoKGRlcCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgZGVwIG9mIHVubWV0RGVwcykge1xuICAgICAgaWYgKFxuICAgICAgICAhT2JqZWN0LnZhbHVlcyhfX01PRFVMRVNfXy5wZW5kaW5nKS5zb21lKCh7IHVubWV0RGVwcyB9KSA9PlxuICAgICAgICAgIHVubWV0RGVwcy5pbmNsdWRlcyhkZXApLFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZHluYW1pY1NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIGR5bmFtaWNTY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgICAgIGR5bmFtaWNTY3JpcHQuc3JjID0gZGVwICsgXCIuanNcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkeW5hbWljU2NyaXB0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfX01PRFVMRVNfXy5wZW5kaW5nW25hbWVdID0geyB1bm1ldERlcHMsIGxvYWQgfTtcbiAgICBfX01PRFVMRVNfXy5yZWZyZXNoKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gV2VicGFjayBVTURzIGRvIG5vdCBsb2FkIGR5bmFtaWNhbGx5LCBhZGQgdGhlc2Ugc2NyaXB0IHRhZ3MgaW4gb3JkZXJcbiAgICBfX01PRFVMRVNfXy5zZXQobmFtZSwgZmFjdG9yeS5jYWxsKHRoaXMsIC4uLmRlcHMubWFwKF9fTU9EVUxFU19fLmdldCkpKTtcbiAgfVxufTtcblxuZGVmaW5lLmFtZCA9IHRydWU7IC8vIGxvbCBubyBpdCdzIG5vdCwgYnV0IHByZXRlbmQgd2UgYXJlIEFNRC9SZXF1aXJlSlNcbiJdfQ==