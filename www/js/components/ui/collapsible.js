define(["require", "exports", "react/jsx-runtime", "@base-ui/react"], function (require, exports, jsx_runtime_1, react_1) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Collapsible = Collapsible;
    exports.CollapsibleTrigger = CollapsibleTrigger;
    exports.CollapsibleContent = CollapsibleContent;
    function Collapsible({ ...props }) {
        return (0, jsx_runtime_1.jsx)(react_1.Collapsible.Root, { "data-slot": "collapsible", ...props });
    }
    function CollapsibleTrigger({ ...props }) {
        return ((0, jsx_runtime_1.jsx)(react_1.Collapsible.Trigger, { "data-slot": "collapsible-trigger", ...props }));
    }
    function CollapsibleContent({ ...props }) {
        return ((0, jsx_runtime_1.jsx)(react_1.Collapsible.Panel, { "data-slot": "collapsible-content", ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9jb2xsYXBzaWJsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFBQSxZQUFZLENBQUM7O0lBb0JKLGtDQUFXO0lBQUUsZ0RBQWtCO0lBQUUsZ0RBQWtCO0lBaEI1RCxTQUFTLFdBQVcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFtQztRQUNoRSxPQUFPLHVCQUFDLG1CQUFvQixDQUFDLElBQUksaUJBQVcsYUFBYSxLQUFLLEtBQUssR0FBSSxDQUFDO0lBQzFFLENBQUM7SUFFRCxTQUFTLGtCQUFrQixDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQXNDO1FBQzFFLE9BQU8sQ0FDTCx1QkFBQyxtQkFBb0IsQ0FBQyxPQUFPLGlCQUFXLHFCQUFxQixLQUFLLEtBQUssR0FBSSxDQUM1RSxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBb0M7UUFDeEUsT0FBTyxDQUNMLHVCQUFDLG1CQUFvQixDQUFDLEtBQUssaUJBQVcscUJBQXFCLEtBQUssS0FBSyxHQUFJLENBQzFFLENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IENvbGxhcHNpYmxlIGFzIENvbGxhcHNpYmxlUHJpbWl0aXZlIH0gZnJvbSBcIkBiYXNlLXVpL3JlYWN0XCI7XG5cbmZ1bmN0aW9uIENvbGxhcHNpYmxlKHsgLi4ucHJvcHMgfTogQ29sbGFwc2libGVQcmltaXRpdmUuUm9vdC5Qcm9wcykge1xuICByZXR1cm4gPENvbGxhcHNpYmxlUHJpbWl0aXZlLlJvb3QgZGF0YS1zbG90PVwiY29sbGFwc2libGVcIiB7Li4ucHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBDb2xsYXBzaWJsZVRyaWdnZXIoeyAuLi5wcm9wcyB9OiBDb2xsYXBzaWJsZVByaW1pdGl2ZS5UcmlnZ2VyLlByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNpYmxlUHJpbWl0aXZlLlRyaWdnZXIgZGF0YS1zbG90PVwiY29sbGFwc2libGUtdHJpZ2dlclwiIHsuLi5wcm9wc30gLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ29sbGFwc2libGVDb250ZW50KHsgLi4ucHJvcHMgfTogQ29sbGFwc2libGVQcmltaXRpdmUuUGFuZWwuUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2libGVQcmltaXRpdmUuUGFuZWwgZGF0YS1zbG90PVwiY29sbGFwc2libGUtY29udGVudFwiIHsuLi5wcm9wc30gLz5cbiAgKTtcbn1cblxuZXhwb3J0IHsgQ29sbGFwc2libGUsIENvbGxhcHNpYmxlVHJpZ2dlciwgQ29sbGFwc2libGVDb250ZW50IH07XG4iXX0=