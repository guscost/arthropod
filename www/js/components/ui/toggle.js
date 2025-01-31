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
define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-toggle", "class-variance-authority", "utils"], function (require, exports, jsx_runtime_1, React, TogglePrimitive, class_variance_authority_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toggleVariants = exports.Toggle = void 0;
    React = __importStar(React);
    TogglePrimitive = __importStar(TogglePrimitive);
    var toggleVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-transparent",
                outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            },
            size: {
                default: "h-9 px-2 min-w-9",
                sm: "h-8 px-1.5 min-w-8",
                lg: "h-10 px-2.5 min-w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    });
    exports.toggleVariants = toggleVariants;
    var Toggle = React.forwardRef(function (_a, ref) {
        var className = _a.className, variant = _a.variant, size = _a.size, props = __rest(_a, ["className", "variant", "size"]);
        return ((0, jsx_runtime_1.jsx)(TogglePrimitive.Root, __assign({ ref: ref, className: (0, utils_1.cn)(toggleVariants({ variant: variant, size: size, className: className })) }, props)));
    });
    exports.Toggle = Toggle;
    Toggle.displayName = TogglePrimitive.Root.displayName;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvdG9nZ2xlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBLFlBQVksQ0FBQzs7Ozs7O0lBUWIsSUFBTSxjQUFjLEdBQUcsSUFBQSw4QkFBRyxFQUN4QixpWUFBaVksRUFDalk7UUFDRSxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsT0FBTyxFQUNMLDJGQUEyRjthQUM5RjtZQUNELElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixFQUFFLEVBQUUsb0JBQW9CO2dCQUN4QixFQUFFLEVBQUUsc0JBQXNCO2FBQzNCO1NBQ0Y7UUFDRCxlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUUsU0FBUztZQUNsQixJQUFJLEVBQUUsU0FBUztTQUNoQjtLQUNGLENBQ0YsQ0FBQztJQWdCZSx3Q0FBYztJQWQvQixJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUk3QixVQUFDLEVBQXNDLEVBQUUsR0FBRztRQUF6QyxJQUFBLFNBQVMsZUFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLElBQUksVUFBQSxFQUFLLEtBQUssY0FBcEMsZ0NBQXNDLENBQUY7UUFBWSxPQUFBLENBQ2pELHVCQUFDLGVBQWUsQ0FBQyxJQUFJLGFBQ25CLEdBQUcsRUFBRSxHQUFHLEVBQ1IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sU0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUMsQ0FBQyxJQUN2RCxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0tBQUEsQ0FBQyxDQUFDO0lBSU0sd0JBQU07SUFGZixNQUFNLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDIn0=