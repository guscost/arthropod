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
define("Hero", ["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-select", "lucide-react", "ui/button"], function (require, exports, jsx_runtime_1, react_1, Select, lucide_react_1, button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Hero;
    react_1 = __importStar(react_1);
    Select = __importStar(Select);
    var SelectItem = react_1.default.forwardRef(function (_a, forwardedRef) {
        var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
        return ((0, jsx_runtime_1.jsxs)(Select.Item, __assign({}, props, { ref: forwardedRef, className: "flex justify-between items-center hover:bg-gray-100", children: [(0, jsx_runtime_1.jsx)(Select.ItemText, { children: children }), (0, jsx_runtime_1.jsx)(Select.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.CheckIcon, {}) })] })));
    });
    function Hero() {
        var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: ["Hello world x", count] }), (0, jsx_runtime_1.jsx)(button_1.Button, { className: "mt-2", onClick: function () { return setCount(count + 1); }, children: "Again!" }), (0, jsx_runtime_1.jsxs)(Select.Root, { onValueChange: function (value) { return setCount(parseInt(value, 10)); }, children: [(0, jsx_runtime_1.jsxs)(Select.Trigger, { className: "border rounded mt-2 px-4 py-2 flex gap-2 justify-between items-center w-56", "aria-label": "Number", children: [(0, jsx_runtime_1.jsx)(Select.Value, { placeholder: "Select a number..." }), (0, jsx_runtime_1.jsx)(Select.Icon, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDownIcon, {}) })] }), (0, jsx_runtime_1.jsx)(Select.Portal, { children: (0, jsx_runtime_1.jsxs)(Select.Content, { className: "rounded border p-2 bg-white", children: [(0, jsx_runtime_1.jsx)(Select.ScrollUpButton, { className: "flex justify-center items-center", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronUpIcon, {}) }), (0, jsx_runtime_1.jsxs)(Select.Viewport, { children: [(0, jsx_runtime_1.jsxs)(Select.Group, { children: [(0, jsx_runtime_1.jsx)(Select.Label, { className: "text-xs", children: "Small" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "1", children: "1" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "2", children: "2" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "3", children: "3" })] }), (0, jsx_runtime_1.jsx)(Select.Separator, {}), (0, jsx_runtime_1.jsxs)(Select.Group, { className: "mt-2", children: [(0, jsx_runtime_1.jsx)(Select.Label, { className: "text-xs", children: "Medium" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "10", children: "10" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "11", children: "11" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "12", disabled: true, children: "12" })] }), (0, jsx_runtime_1.jsx)(Select.Separator, {}), (0, jsx_runtime_1.jsxs)(Select.Group, { className: "mt-2", children: [(0, jsx_runtime_1.jsx)(Select.Label, { className: "text-xs", children: "Large" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "100", children: "100" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "101", children: "101" }), (0, jsx_runtime_1.jsx)(SelectItem, { value: "102", children: "102" })] })] }), (0, jsx_runtime_1.jsx)(Select.ScrollDownButton, { className: "flex justify-center items-center", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDownIcon, {}) })] }) })] })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVyby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlcm8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQkEsdUJBNERDOzs7SUFoRkQsSUFBTSxVQUFVLEdBQUcsZUFBSyxDQUFDLFVBQVUsQ0FDakMsVUFDRSxFQUF5RCxFQUN6RCxZQUF1QztRQURyQyxJQUFBLFFBQVEsY0FBQSxFQUFFLFNBQVMsZUFBQSxFQUFLLEtBQUssY0FBL0IseUJBQWlDLENBQUY7UUFHL0IsT0FBTyxDQUNMLHdCQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQ04sS0FBSyxJQUNULEdBQUcsRUFBRSxZQUFZLEVBQ2pCLFNBQVMsRUFBQyxxREFBcUQsYUFFL0QsdUJBQUMsTUFBTSxDQUFDLFFBQVEsY0FBRSxRQUFRLEdBQW1CLEVBQzdDLHVCQUFDLE1BQU0sQ0FBQyxhQUFhLGNBQ25CLHVCQUFDLHdCQUFTLEtBQUcsR0FDUSxLQUNYLENBQ2YsQ0FBQztJQUNKLENBQUMsQ0FDRixDQUFDO0lBRUYsU0FBd0IsSUFBSTtRQUNwQixJQUFBLEtBQW9CLElBQUEsZ0JBQVEsRUFBQyxDQUFDLENBQUMsRUFBOUIsS0FBSyxRQUFBLEVBQUUsUUFBUSxRQUFlLENBQUM7UUFFdEMsT0FBTyxDQUNMLDRDQUNFLDREQUFrQixLQUFLLElBQU0sRUFFN0IsdUJBQUMsZUFBTSxJQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFFLGNBQU0sT0FBQSxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFuQixDQUFtQix1QkFBaUIsRUFFNUUsd0JBQUMsTUFBTSxDQUFDLElBQUksSUFBQyxhQUFhLEVBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUE3QixDQUE2QixhQUNsRSx3QkFBQyxNQUFNLENBQUMsT0FBTyxJQUNiLFNBQVMsRUFBQyw0RUFBNEUsZ0JBQzNFLFFBQVEsYUFFbkIsdUJBQUMsTUFBTSxDQUFDLEtBQUssSUFBQyxXQUFXLEVBQUMsb0JBQW9CLEdBQUcsRUFDakQsdUJBQUMsTUFBTSxDQUFDLElBQUksY0FDVix1QkFBQyw4QkFBZSxLQUFHLEdBQ1AsSUFDQyxFQUNqQix1QkFBQyxNQUFNLENBQUMsTUFBTSxjQUNaLHdCQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUMsU0FBUyxFQUFDLDZCQUE2QixhQUNyRCx1QkFBQyxNQUFNLENBQUMsY0FBYyxJQUFDLFNBQVMsRUFBQyxrQ0FBa0MsWUFDakUsdUJBQUMsNEJBQWEsS0FBRyxHQUNLLEVBQ3hCLHdCQUFDLE1BQU0sQ0FBQyxRQUFRLGVBQ2Qsd0JBQUMsTUFBTSxDQUFDLEtBQUssZUFDWCx1QkFBQyxNQUFNLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQyxTQUFTLHNCQUFxQixFQUN0RCx1QkFBQyxVQUFVLElBQUMsS0FBSyxFQUFDLEdBQUcsa0JBQWUsRUFDcEMsdUJBQUMsVUFBVSxJQUFDLEtBQUssRUFBQyxHQUFHLGtCQUFlLEVBQ3BDLHVCQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUMsR0FBRyxrQkFBZSxJQUN2QixFQUVmLHVCQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUcsRUFFcEIsd0JBQUMsTUFBTSxDQUFDLEtBQUssSUFBQyxTQUFTLEVBQUMsTUFBTSxhQUM1Qix1QkFBQyxNQUFNLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQyxTQUFTLHVCQUFzQixFQUN2RCx1QkFBQyxVQUFVLElBQUMsS0FBSyxFQUFDLElBQUksbUJBQWdCLEVBQ3RDLHVCQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUMsSUFBSSxtQkFBZ0IsRUFDdEMsdUJBQUMsVUFBVSxJQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsUUFBUSx5QkFFbEIsSUFDQSxFQUVmLHVCQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUcsRUFFcEIsd0JBQUMsTUFBTSxDQUFDLEtBQUssSUFBQyxTQUFTLEVBQUMsTUFBTSxhQUM1Qix1QkFBQyxNQUFNLENBQUMsS0FBSyxJQUFDLFNBQVMsRUFBQyxTQUFTLHNCQUFxQixFQUN0RCx1QkFBQyxVQUFVLElBQUMsS0FBSyxFQUFDLEtBQUssb0JBQWlCLEVBQ3hDLHVCQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUMsS0FBSyxvQkFBaUIsRUFDeEMsdUJBQUMsVUFBVSxJQUFDLEtBQUssRUFBQyxLQUFLLG9CQUFpQixJQUMzQixJQUNDLEVBQ2xCLHVCQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBQyxTQUFTLEVBQUMsa0NBQWtDLFlBQ25FLHVCQUFDLDhCQUFlLEtBQUcsR0FDSyxJQUNYLEdBQ0gsSUFDSixJQUNWLENBQ1AsQ0FBQztJQUNKLENBQUMifQ==