define(["require", "exports", "react/jsx-runtime", "lucide-react", "@/components/ui/badge"], function (require, exports, jsx_runtime_1, lucide_react_1, badge_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BadgeDemo = BadgeDemo;
    function BadgeDemo() {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center gap-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full flex-col gap-2 md:flex-row", children: [(0, jsx_runtime_1.jsx)(badge_1.Badge, { children: "Badge" }), (0, jsx_runtime_1.jsx)(badge_1.Badge, { variant: "secondary", children: "Secondary" }), (0, jsx_runtime_1.jsx)(badge_1.Badge, { variant: "destructive", children: "Destructive" }), (0, jsx_runtime_1.jsx)(badge_1.Badge, { variant: "outline", children: "Outline" }), (0, jsx_runtime_1.jsxs)(badge_1.Badge, { variant: "outline", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.CheckIcon, {}), "Badge"] }), (0, jsx_runtime_1.jsxs)(badge_1.Badge, { variant: "destructive", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.AlertCircleIcon, {}), "Alert"] }), (0, jsx_runtime_1.jsx)(badge_1.Badge, { className: "size-5 rounded-full p-0 font-mono tabular-nums", children: "8" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex w-full flex-col gap-2 md:flex-row", children: [(0, jsx_runtime_1.jsx)(badge_1.Badge, { asChild: true, children: (0, jsx_runtime_1.jsxs)("a", { href: "#", children: ["Link ", (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowRightIcon, {})] }) }), (0, jsx_runtime_1.jsx)(badge_1.Badge, { asChild: true, variant: "secondary", children: (0, jsx_runtime_1.jsxs)("a", { href: "#", children: ["Link ", (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowRightIcon, {})] }) }), (0, jsx_runtime_1.jsx)(badge_1.Badge, { asChild: true, variant: "destructive", children: (0, jsx_runtime_1.jsxs)("a", { href: "#", children: ["Link ", (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowRightIcon, {})] }) }), (0, jsx_runtime_1.jsx)(badge_1.Badge, { asChild: true, variant: "outline", children: (0, jsx_runtime_1.jsxs)("a", { href: "#", children: ["Link ", (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowRightIcon, {})] }) })] })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UtZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RlbW8tdjQvYmFkZ2UtZGVtby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUEsOEJBNENDO0lBNUNELFNBQWdCLFNBQVM7UUFDdkIsT0FBTyxDQUNMLGlDQUFLLFNBQVMsRUFBQyxrQ0FBa0MsYUFDL0MsaUNBQUssU0FBUyxFQUFDLHdDQUF3QyxhQUNyRCx1QkFBQyxhQUFLLHdCQUFjLEVBQ3BCLHVCQUFDLGFBQUssSUFBQyxPQUFPLEVBQUMsV0FBVywwQkFBa0IsRUFDNUMsdUJBQUMsYUFBSyxJQUFDLE9BQU8sRUFBQyxhQUFhLDRCQUFvQixFQUNoRCx1QkFBQyxhQUFLLElBQUMsT0FBTyxFQUFDLFNBQVMsd0JBQWdCLEVBQ3hDLHdCQUFDLGFBQUssSUFBQyxPQUFPLEVBQUMsU0FBUyxhQUN0Qix1QkFBQyx3QkFBUyxLQUFHLGFBRVAsRUFDUix3QkFBQyxhQUFLLElBQUMsT0FBTyxFQUFDLGFBQWEsYUFDMUIsdUJBQUMsOEJBQWUsS0FBRyxhQUViLEVBQ1IsdUJBQUMsYUFBSyxJQUFDLFNBQVMsRUFBQyxnREFBZ0Qsa0JBRXpELElBQ0osRUFDTixpQ0FBSyxTQUFTLEVBQUMsd0NBQXdDLGFBQ3JELHVCQUFDLGFBQUssSUFBQyxPQUFPLGtCQUNaLCtCQUFHLElBQUksRUFBQyxHQUFHLHNCQUNKLHVCQUFDLDZCQUFjLEtBQUcsSUFDckIsR0FDRSxFQUNSLHVCQUFDLGFBQUssSUFBQyxPQUFPLFFBQUMsT0FBTyxFQUFDLFdBQVcsWUFDaEMsK0JBQUcsSUFBSSxFQUFDLEdBQUcsc0JBQ0osdUJBQUMsNkJBQWMsS0FBRyxJQUNyQixHQUNFLEVBQ1IsdUJBQUMsYUFBSyxJQUFDLE9BQU8sUUFBQyxPQUFPLEVBQUMsYUFBYSxZQUNsQywrQkFBRyxJQUFJLEVBQUMsR0FBRyxzQkFDSix1QkFBQyw2QkFBYyxLQUFHLElBQ3JCLEdBQ0UsRUFDUix1QkFBQyxhQUFLLElBQUMsT0FBTyxRQUFDLE9BQU8sRUFBQyxTQUFTLFlBQzlCLCtCQUFHLElBQUksRUFBQyxHQUFHLHNCQUNKLHVCQUFDLDZCQUFjLEtBQUcsSUFDckIsR0FDRSxJQUNKLElBQ0YsQ0FDUCxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsZXJ0Q2lyY2xlSWNvbiwgQXJyb3dSaWdodEljb24sIENoZWNrSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBCYWRnZURlbW8oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBnYXAtMiBtZDpmbGV4LXJvd1wiPlxuICAgICAgICA8QmFkZ2U+QmFkZ2U8L0JhZGdlPlxuICAgICAgICA8QmFkZ2UgdmFyaWFudD1cInNlY29uZGFyeVwiPlNlY29uZGFyeTwvQmFkZ2U+XG4gICAgICAgIDxCYWRnZSB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIj5EZXN0cnVjdGl2ZTwvQmFkZ2U+XG4gICAgICAgIDxCYWRnZSB2YXJpYW50PVwib3V0bGluZVwiPk91dGxpbmU8L0JhZGdlPlxuICAgICAgICA8QmFkZ2UgdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgICA8Q2hlY2tJY29uIC8+XG4gICAgICAgICAgQmFkZ2VcbiAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPEJhZGdlIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiPlxuICAgICAgICAgIDxBbGVydENpcmNsZUljb24gLz5cbiAgICAgICAgICBBbGVydFxuICAgICAgICA8L0JhZGdlPlxuICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPVwic2l6ZS01IHJvdW5kZWQtZnVsbCBwLTAgZm9udC1tb25vIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgIDhcbiAgICAgICAgPC9CYWRnZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBnYXAtMiBtZDpmbGV4LXJvd1wiPlxuICAgICAgICA8QmFkZ2UgYXNDaGlsZD5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgTGluayA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvQmFkZ2U+XG4gICAgICAgIDxCYWRnZSBhc0NoaWxkIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgTGluayA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvQmFkZ2U+XG4gICAgICAgIDxCYWRnZSBhc0NoaWxkIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICBMaW5rIDxBcnJvd1JpZ2h0SWNvbiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPEJhZGdlIGFzQ2hpbGQgdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgTGluayA8QXJyb3dSaWdodEljb24gLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvQmFkZ2U+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==