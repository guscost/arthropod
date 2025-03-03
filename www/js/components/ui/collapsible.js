define(["require", "exports", "react/jsx-runtime", "@radix-ui/react-collapsible"], function (require, exports, jsx_runtime_1, CollapsiblePrimitive) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Collapsible = Collapsible;
    exports.CollapsibleTrigger = CollapsibleTrigger;
    exports.CollapsibleContent = CollapsibleContent;
    function Collapsible({ ...props }) {
        return (0, jsx_runtime_1.jsx)(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props });
    }
    function CollapsibleTrigger({ ...props }) {
        return ((0, jsx_runtime_1.jsx)(CollapsiblePrimitive.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...props }));
    }
    function CollapsibleContent({ ...props }) {
        return ((0, jsx_runtime_1.jsx)(CollapsiblePrimitive.CollapsibleContent, { "data-slot": "collapsible-content", ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9jb2xsYXBzaWJsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUFBLFlBQVksQ0FBQzs7O0lBZ0NKLGtDQUFXO0lBQUUsZ0RBQWtCO0lBQUUsZ0RBQWtCO0lBNUI1RCxTQUFTLFdBQVcsQ0FBQyxFQUNuQixHQUFHLEtBQUssRUFDK0M7UUFDdkQsT0FBTyx1QkFBQyxvQkFBb0IsQ0FBQyxJQUFJLGlCQUFXLGFBQWEsS0FBSyxLQUFLLEdBQUksQ0FBQztJQUMxRSxDQUFDO0lBRUQsU0FBUyxrQkFBa0IsQ0FBQyxFQUMxQixHQUFHLEtBQUssRUFDNkQ7UUFDckUsT0FBTyxDQUNMLHVCQUFDLG9CQUFvQixDQUFDLGtCQUFrQixpQkFDNUIscUJBQXFCLEtBQzNCLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxrQkFBa0IsQ0FBQyxFQUMxQixHQUFHLEtBQUssRUFDNkQ7UUFDckUsT0FBTyxDQUNMLHVCQUFDLG9CQUFvQixDQUFDLGtCQUFrQixpQkFDNUIscUJBQXFCLEtBQzNCLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIENvbGxhcHNpYmxlUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtY29sbGFwc2libGVcIjtcblxuZnVuY3Rpb24gQ29sbGFwc2libGUoe1xuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIENvbGxhcHNpYmxlUHJpbWl0aXZlLlJvb3Q+KSB7XG4gIHJldHVybiA8Q29sbGFwc2libGVQcmltaXRpdmUuUm9vdCBkYXRhLXNsb3Q9XCJjb2xsYXBzaWJsZVwiIHsuLi5wcm9wc30gLz47XG59XG5cbmZ1bmN0aW9uIENvbGxhcHNpYmxlVHJpZ2dlcih7XG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQ29sbGFwc2libGVQcmltaXRpdmUuQ29sbGFwc2libGVUcmlnZ2VyPikge1xuICByZXR1cm4gKFxuICAgIDxDb2xsYXBzaWJsZVByaW1pdGl2ZS5Db2xsYXBzaWJsZVRyaWdnZXJcbiAgICAgIGRhdGEtc2xvdD1cImNvbGxhcHNpYmxlLXRyaWdnZXJcIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbGxhcHNpYmxlQ29udGVudCh7XG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQ29sbGFwc2libGVQcmltaXRpdmUuQ29sbGFwc2libGVDb250ZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxDb2xsYXBzaWJsZVByaW1pdGl2ZS5Db2xsYXBzaWJsZUNvbnRlbnRcbiAgICAgIGRhdGEtc2xvdD1cImNvbGxhcHNpYmxlLWNvbnRlbnRcIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IENvbGxhcHNpYmxlLCBDb2xsYXBzaWJsZVRyaWdnZXIsIENvbGxhcHNpYmxlQ29udGVudCB9O1xuIl19