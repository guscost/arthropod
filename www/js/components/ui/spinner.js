define(["require", "exports", "react/jsx-runtime", "@/lib/utils", "lucide-react"], function (require, exports, jsx_runtime_1, utils_1, lucide_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Spinner = Spinner;
    function Spinner({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)(lucide_react_1.Loader2Icon, { role: "status", "aria-label": "Loading", className: (0, utils_1.cn)("size-4 animate-spin", className), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL3NwaW5uZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQWNTLDBCQUFPO0lBWGhCLFNBQVMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUErQjtRQUNuRSxPQUFPLENBQ0wsdUJBQUMsMEJBQVcsSUFDVixJQUFJLEVBQUMsUUFBUSxnQkFDRixTQUFTLEVBQ3BCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsS0FDM0MsS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgTG9hZGVyMkljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmZ1bmN0aW9uIFNwaW5uZXIoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwic3ZnXCI+KSB7XG4gIHJldHVybiAoXG4gICAgPExvYWRlcjJJY29uXG4gICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJMb2FkaW5nXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJzaXplLTQgYW5pbWF0ZS1zcGluXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IHsgU3Bpbm5lciB9O1xuIl19