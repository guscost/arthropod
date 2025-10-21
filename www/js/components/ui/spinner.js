define(["require", "exports", "react/jsx-runtime", "lucide-react", "@/lib/utils"], function (require, exports, jsx_runtime_1, lucide_react_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Spinner = Spinner;
    function Spinner({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)(lucide_react_1.Loader2Icon, { role: "status", "aria-label": "Loading", className: (0, utils_1.cn)("size-4 animate-spin", className), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL3NwaW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQWVTLDBCQUFPO0lBWGhCLFNBQVMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUErQjtRQUNuRSxPQUFPLENBQ0wsdUJBQUMsMEJBQVcsSUFDVixJQUFJLEVBQUMsUUFBUSxnQkFDRixTQUFTLEVBQ3BCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsS0FDM0MsS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2FkZXIySWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuZnVuY3Rpb24gU3Bpbm5lcih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJzdmdcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8TG9hZGVyMkljb25cbiAgICAgIHJvbGU9XCJzdGF0dXNcIlxuICAgICAgYXJpYS1sYWJlbD1cIkxvYWRpbmdcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcInNpemUtNCBhbmltYXRlLXNwaW5cIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgeyBTcGlubmVyIH07XG4iXX0=