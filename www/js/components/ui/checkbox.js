define(["require", "exports", "react/jsx-runtime", "@radix-ui/react-checkbox", "lucide-react", "@/lib/utils"], function (require, exports, jsx_runtime_1, CheckboxPrimitive, lucide_react_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Checkbox = Checkbox;
    function Checkbox({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)(CheckboxPrimitive.Root, { "data-slot": "checkbox", className: (0, utils_1.cn)("peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 size-4 shrink-0 rounded-[4px] border shadow-xs transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:ring-0", className), ...props, children: (0, jsx_runtime_1.jsx)(CheckboxPrimitive.Indicator, { "data-slot": "checkbox-indicator", className: "flex items-center justify-center text-current", children: (0, jsx_runtime_1.jsx)(lucide_react_1.CheckIcon, { className: "size-3.5" }) }) }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9jaGVja2JveC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUFBLFlBQVksQ0FBQzs7O0lBK0JKLDRCQUFRO0lBdkJqQixTQUFTLFFBQVEsQ0FBQyxFQUNoQixTQUFTLEVBQ1QsR0FBRyxLQUFLLEVBQzRDO1FBQ3BELE9BQU8sQ0FDTCx1QkFBQyxpQkFBaUIsQ0FBQyxJQUFJLGlCQUNYLFVBQVUsRUFDcEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLG9aQUFvWixFQUNwWixTQUFTLENBQ1YsS0FDRyxLQUFLLFlBRVQsdUJBQUMsaUJBQWlCLENBQUMsU0FBUyxpQkFDaEIsb0JBQW9CLEVBQzlCLFNBQVMsRUFBQywrQ0FBK0MsWUFFekQsdUJBQUMsd0JBQVMsSUFBQyxTQUFTLEVBQUMsVUFBVSxHQUFHLEdBQ04sR0FDUCxDQUMxQixDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIENoZWNrYm94UHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtY2hlY2tib3hcIjtcbmltcG9ydCB7IENoZWNrSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuZnVuY3Rpb24gQ2hlY2tib3goe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgQ2hlY2tib3hQcmltaXRpdmUuUm9vdD4pIHtcbiAgcmV0dXJuIChcbiAgICA8Q2hlY2tib3hQcmltaXRpdmUuUm9vdFxuICAgICAgZGF0YS1zbG90PVwiY2hlY2tib3hcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJwZWVyIGJvcmRlci1pbnB1dCBkYXRhLVtzdGF0ZT1jaGVja2VkXTpiZy1wcmltYXJ5IGRhdGEtW3N0YXRlPWNoZWNrZWRdOnRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGRhdGEtW3N0YXRlPWNoZWNrZWRdOmJvcmRlci1wcmltYXJ5IHJpbmctcmluZy8xMCBkYXJrOnJpbmctcmluZy8yMCBkYXJrOm91dGxpbmUtcmluZy80MCBvdXRsaW5lLXJpbmcvNTAgc2l6ZS00IHNocmluay0wIHJvdW5kZWQtWzRweF0gYm9yZGVyIHNoYWRvdy14cyB0cmFuc2l0aW9uLVtjb2xvcixib3gtc2hhZG93XSBmb2N1cy12aXNpYmxlOnJpbmctNCBmb2N1cy12aXNpYmxlOm91dGxpbmUtMSBkaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgZGlzYWJsZWQ6b3BhY2l0eS01MCBhcmlhLWludmFsaWQ6Zm9jdXMtdmlzaWJsZTpyaW5nLTBcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8Q2hlY2tib3hQcmltaXRpdmUuSW5kaWNhdG9yXG4gICAgICAgIGRhdGEtc2xvdD1cImNoZWNrYm94LWluZGljYXRvclwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY3VycmVudFwiXG4gICAgICA+XG4gICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwic2l6ZS0zLjVcIiAvPlxuICAgICAgPC9DaGVja2JveFByaW1pdGl2ZS5JbmRpY2F0b3I+XG4gICAgPC9DaGVja2JveFByaW1pdGl2ZS5Sb290PlxuICApO1xufVxuXG5leHBvcnQgeyBDaGVja2JveCB9O1xuIl19