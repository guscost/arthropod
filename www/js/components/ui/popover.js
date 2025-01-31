var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-popover", "utils"], function (require, exports, jsx_runtime_1, React, PopoverPrimitive, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PopoverAnchor = exports.PopoverContent = exports.PopoverTrigger = exports.Popover = void 0;
    React = __importStar(React);
    PopoverPrimitive = __importStar(PopoverPrimitive);
    var Popover = PopoverPrimitive.Root;
    exports.Popover = Popover;
    var PopoverTrigger = PopoverPrimitive.Trigger;
    exports.PopoverTrigger = PopoverTrigger;
    var PopoverAnchor = PopoverPrimitive.Anchor;
    exports.PopoverAnchor = PopoverAnchor;
    var PopoverContent = React.forwardRef(function (_a, ref) {
        var className = _a.className, _b = _a.align, align = _b === void 0 ? "center" : _b, _c = _a.sideOffset, sideOffset = _c === void 0 ? 4 : _c, props = __rest(_a, ["className", "align", "sideOffset"]);
        return ((0, jsx_runtime_1.jsx)(PopoverPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(PopoverPrimitive.Content, __assign({ ref: ref, align: align, sideOffset: sideOffset, className: (0, utils_1.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)) }));
    });
    exports.PopoverContent = PopoverContent;
    PopoverContent.displayName = PopoverPrimitive.Content.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL3BvcG92ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsWUFBWSxDQUFDOzs7Ozs7SUFPYixJQUFNLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7SUF5QjdCLDBCQUFPO0lBdkJoQixJQUFNLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7SUF1QjlCLHdDQUFjO0lBckJoQyxJQUFNLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7SUFxQkksc0NBQWE7SUFuQi9ELElBQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBR3JDLFVBQUMsRUFBeUQsRUFBRSxHQUFHO1FBQTVELElBQUEsU0FBUyxlQUFBLEVBQUUsYUFBZ0IsRUFBaEIsS0FBSyxtQkFBRyxRQUFRLEtBQUEsRUFBRSxrQkFBYyxFQUFkLFVBQVUsbUJBQUcsQ0FBQyxLQUFBLEVBQUssS0FBSyxjQUF2RCxvQ0FBeUQsQ0FBRjtRQUFZLE9BQUEsQ0FDcEUsdUJBQUMsZ0JBQWdCLENBQUMsTUFBTSxjQUN0Qix1QkFBQyxnQkFBZ0IsQ0FBQyxPQUFPLGFBQ3ZCLEdBQUcsRUFBRSxHQUFHLEVBQ1IsS0FBSyxFQUFFLEtBQUssRUFDWixVQUFVLEVBQUUsVUFBVSxFQUN0QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsNGFBQTRhLEVBQzVhLFNBQVMsQ0FDVixJQUNHLEtBQUssRUFDVCxHQUNzQixDQUMzQixDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBRytCLHdDQUFjO0lBRmhELGNBQWMsQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyJ9