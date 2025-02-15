define(["require", "exports", "react/jsx-runtime", "@radix-ui/react-switch", "@/lib/utils"], function (require, exports, jsx_runtime_1, SwitchPrimitive, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Switch = Switch;
    function Switch({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)(SwitchPrimitive.Root, { "data-slot": "switch", className: (0, utils_1.cn)("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-hidden focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-0", className), ...props, children: (0, jsx_runtime_1.jsx)(SwitchPrimitive.Thumb, { "data-slot": "switch-thumb", className: (0, utils_1.cn)("bg-background pointer-events-none block size-4 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") }) }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvc3dpdGNoLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUE4Qkosd0JBQU07SUF2QmYsU0FBUyxNQUFNLENBQUMsRUFDZCxTQUFTLEVBQ1QsR0FBRyxLQUFLLEVBQzBDO1FBQ2xELE9BQU8sQ0FDTCx1QkFBQyxlQUFlLENBQUMsSUFBSSxpQkFDVCxRQUFRLEVBQ2xCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxpYUFBaWEsRUFDamEsU0FBUyxDQUNWLEtBQ0csS0FBSyxZQUVULHVCQUFDLGVBQWUsQ0FBQyxLQUFLLGlCQUNWLGNBQWMsRUFDeEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLDJLQUEySyxDQUM1SyxHQUNELEdBQ21CLENBQ3hCLENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgU3dpdGNoUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc3dpdGNoXCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIFN3aXRjaCh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBTd2l0Y2hQcmltaXRpdmUuUm9vdD4pIHtcbiAgcmV0dXJuIChcbiAgICA8U3dpdGNoUHJpbWl0aXZlLlJvb3RcbiAgICAgIGRhdGEtc2xvdD1cInN3aXRjaFwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInBlZXIgZGF0YS1bc3RhdGU9Y2hlY2tlZF06YmctcHJpbWFyeSBkYXRhLVtzdGF0ZT11bmNoZWNrZWRdOmJnLWlucHV0IHJpbmctcmluZy8xMCBkYXJrOnJpbmctcmluZy8yMCBkYXJrOm91dGxpbmUtcmluZy80MCBvdXRsaW5lLXJpbmcvNTAgaW5saW5lLWZsZXggaC01IHctOSBzaHJpbmstMCBpdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci10cmFuc3BhcmVudCBzaGFkb3cteHMgdHJhbnNpdGlvbi1bY29sb3IsYm94LXNoYWRvd10gZm9jdXMtdmlzaWJsZTpyaW5nLTQgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWhpZGRlbiBmb2N1cy12aXNpYmxlOm91dGxpbmUtMSBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCBhcmlhLWludmFsaWQ6Zm9jdXMtdmlzaWJsZTpyaW5nLTBcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8U3dpdGNoUHJpbWl0aXZlLlRodW1iXG4gICAgICAgIGRhdGEtc2xvdD1cInN3aXRjaC10aHVtYlwiXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgXCJiZy1iYWNrZ3JvdW5kIHBvaW50ZXItZXZlbnRzLW5vbmUgYmxvY2sgc2l6ZS00IHJvdW5kZWQtZnVsbCByaW5nLTAgc2hhZG93LWxnIHRyYW5zaXRpb24tdHJhbnNmb3JtIGRhdGEtW3N0YXRlPWNoZWNrZWRdOnRyYW5zbGF0ZS14LTQgZGF0YS1bc3RhdGU9dW5jaGVja2VkXTp0cmFuc2xhdGUteC0wXCIsXG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvU3dpdGNoUHJpbWl0aXZlLlJvb3Q+XG4gICk7XG59XG5cbmV4cG9ydCB7IFN3aXRjaCB9O1xuIl19