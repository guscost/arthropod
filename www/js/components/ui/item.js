define(["require", "exports", "react/jsx-runtime", "@base-ui/react/merge-props", "@base-ui/react/use-render", "class-variance-authority", "@/lib/utils", "@/components/ui/separator"], function (require, exports, jsx_runtime_1, merge_props_1, use_render_1, class_variance_authority_1, utils_1, separator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Item = Item;
    exports.ItemMedia = ItemMedia;
    exports.ItemContent = ItemContent;
    exports.ItemActions = ItemActions;
    exports.ItemGroup = ItemGroup;
    exports.ItemSeparator = ItemSeparator;
    exports.ItemTitle = ItemTitle;
    exports.ItemDescription = ItemDescription;
    exports.ItemHeader = ItemHeader;
    exports.ItemFooter = ItemFooter;
    function ItemGroup({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { role: "list", "data-slot": "item-group", className: (0, utils_1.cn)("group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2", className), ...props }));
    }
    function ItemSeparator({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)(separator_1.Separator, { "data-slot": "item-separator", orientation: "horizontal", className: (0, utils_1.cn)("my-2", className), ...props }));
    }
    const itemVariants = (0, class_variance_authority_1.cva)("group/item flex w-full flex-wrap items-center rounded-lg border text-sm transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors [a]:hover:bg-muted", {
        variants: {
            variant: {
                default: "border-transparent",
                outline: "border-border",
                muted: "border-transparent bg-muted/50",
            },
            size: {
                default: "gap-2.5 px-3 py-2.5",
                sm: "gap-2.5 px-3 py-2.5",
                xs: "gap-2 px-2.5 py-2 in-data-[slot=dropdown-menu-content]:p-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    });
    function Item({ className, variant = "default", size = "default", render, ...props }) {
        return (0, use_render_1.useRender)({
            defaultTagName: "div",
            props: (0, merge_props_1.mergeProps)({
                className: (0, utils_1.cn)(itemVariants({ variant, size, className })),
            }, props),
            render,
            state: {
                slot: "item",
                variant,
                size,
            },
        });
    }
    const itemMediaVariants = (0, class_variance_authority_1.cva)("flex shrink-0 items-center justify-center gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start [&_svg]:pointer-events-none", {
        variants: {
            variant: {
                default: "bg-transparent",
                icon: "[&_svg:not([class*='size-'])]:size-4",
                image: "size-10 overflow-hidden rounded-sm group-data-[size=sm]/item:size-8 group-data-[size=xs]/item:size-6 [&_img]:size-full [&_img]:object-cover",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    });
    function ItemMedia({ className, variant = "default", ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "item-media", "data-variant": variant, className: (0, utils_1.cn)(itemMediaVariants({ variant, className })), ...props }));
    }
    function ItemContent({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "item-content", className: (0, utils_1.cn)("flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0 [&+[data-slot=item-content]]:flex-none", className), ...props }));
    }
    function ItemTitle({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "item-title", className: (0, utils_1.cn)("line-clamp-1 flex w-fit items-center gap-2 text-sm leading-snug font-medium underline-offset-4", className), ...props }));
    }
    function ItemDescription({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("p", { "data-slot": "item-description", className: (0, utils_1.cn)("line-clamp-2 text-left text-sm leading-normal font-normal text-muted-foreground group-data-[size=xs]/item:text-xs [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className), ...props }));
    }
    function ItemActions({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "item-actions", className: (0, utils_1.cn)("flex items-center gap-2", className), ...props }));
    }
    function ItemHeader({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "item-header", className: (0, utils_1.cn)("flex basis-full items-center justify-between gap-2", className), ...props }));
    }
    function ItemFooter({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "item-footer", className: (0, utils_1.cn)("flex basis-full items-center justify-between gap-2", className), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL2l0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQThMRSxvQkFBSTtJQUNKLDhCQUFTO0lBQ1Qsa0NBQVc7SUFDWCxrQ0FBVztJQUNYLDhCQUFTO0lBQ1Qsc0NBQWE7SUFDYiw4QkFBUztJQUNULDBDQUFlO0lBQ2YsZ0NBQVU7SUFDVixnQ0FBVTtJQS9MWixTQUFTLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssRUFBK0I7UUFDckUsT0FBTyxDQUNMLGdDQUNFLElBQUksRUFBQyxNQUFNLGVBQ0QsWUFBWSxFQUN0QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsaUdBQWlHLEVBQ2pHLFNBQVMsQ0FDVixLQUNHLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxhQUFhLENBQUMsRUFDckIsU0FBUyxFQUNULEdBQUcsS0FBSyxFQUMrQjtRQUN2QyxPQUFPLENBQ0wsdUJBQUMscUJBQVMsaUJBQ0UsZ0JBQWdCLEVBQzFCLFdBQVcsRUFBQyxZQUFZLEVBQ3hCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEtBQzVCLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxZQUFZLEdBQUcsSUFBQSw4QkFBRyxFQUN0Qiw0T0FBNE8sRUFDNU87UUFDRSxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLEtBQUssRUFBRSxnQ0FBZ0M7YUFDeEM7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLHFCQUFxQjtnQkFDOUIsRUFBRSxFQUFFLHFCQUFxQjtnQkFDekIsRUFBRSxFQUFFLDREQUE0RDthQUNqRTtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FB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LEVBQ3ZCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxvREFBb0QsRUFDcEQsU0FBUyxDQUNWLEtBQ0csS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1lcmdlUHJvcHMgfSBmcm9tIFwiQGJhc2UtdWkvcmVhY3QvbWVyZ2UtcHJvcHNcIjtcbmltcG9ydCB7IHVzZVJlbmRlciB9IGZyb20gXCJAYmFzZS11aS9yZWFjdC91c2UtcmVuZGVyXCI7XG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zZXBhcmF0b3JcIjtcblxuZnVuY3Rpb24gSXRlbUdyb3VwKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJvbGU9XCJsaXN0XCJcbiAgICAgIGRhdGEtc2xvdD1cIml0ZW0tZ3JvdXBcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJncm91cC9pdGVtLWdyb3VwIGZsZXggdy1mdWxsIGZsZXgtY29sIGdhcC00IGhhcy1kYXRhLVtzaXplPXNtXTpnYXAtMi41IGhhcy1kYXRhLVtzaXplPXhzXTpnYXAtMlwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEl0ZW1TZXBhcmF0b3Ioe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgU2VwYXJhdG9yPikge1xuICByZXR1cm4gKFxuICAgIDxTZXBhcmF0b3JcbiAgICAgIGRhdGEtc2xvdD1cIml0ZW0tc2VwYXJhdG9yXCJcbiAgICAgIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICBjbGFzc05hbWU9e2NuKFwibXktMlwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmNvbnN0IGl0ZW1WYXJpYW50cyA9IGN2YShcbiAgXCJncm91cC9pdGVtIGZsZXggdy1mdWxsIGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyBib3JkZXIgdGV4dC1zbSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xMDAgb3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6Ym9yZGVyLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLVszcHhdIGZvY3VzLXZpc2libGU6cmluZy1yaW5nLzUwIFthXTp0cmFuc2l0aW9uLWNvbG9ycyBbYV06aG92ZXI6YmctbXV0ZWRcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiYm9yZGVyLXRyYW5zcGFyZW50XCIsXG4gICAgICAgIG91dGxpbmU6IFwiYm9yZGVyLWJvcmRlclwiLFxuICAgICAgICBtdXRlZDogXCJib3JkZXItdHJhbnNwYXJlbnQgYmctbXV0ZWQvNTBcIixcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiZ2FwLTIuNSBweC0zIHB5LTIuNVwiLFxuICAgICAgICBzbTogXCJnYXAtMi41IHB4LTMgcHktMi41XCIsXG4gICAgICAgIHhzOiBcImdhcC0yIHB4LTIuNSBweS0yIGluLWRhdGEtW3Nsb3Q9ZHJvcGRvd24tbWVudS1jb250ZW50XTpwLTBcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgfSxcbik7XG5cbmZ1bmN0aW9uIEl0ZW0oe1xuICBjbGFzc05hbWUsXG4gIHZhcmlhbnQgPSBcImRlZmF1bHRcIixcbiAgc2l6ZSA9IFwiZGVmYXVsdFwiLFxuICByZW5kZXIsXG4gIC4uLnByb3BzXG59OiB1c2VSZW5kZXIuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4gJiBWYXJpYW50UHJvcHM8dHlwZW9mIGl0ZW1WYXJpYW50cz4pIHtcbiAgcmV0dXJuIHVzZVJlbmRlcih7XG4gICAgZGVmYXVsdFRhZ05hbWU6IFwiZGl2XCIsXG4gICAgcHJvcHM6IG1lcmdlUHJvcHM8XCJkaXZcIj4oXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogY24oaXRlbVZhcmlhbnRzKHsgdmFyaWFudCwgc2l6ZSwgY2xhc3NOYW1lIH0pKSxcbiAgICAgIH0sXG4gICAgICBwcm9wcyxcbiAgICApLFxuICAgIHJlbmRlcixcbiAgICBzdGF0ZToge1xuICAgICAgc2xvdDogXCJpdGVtXCIsXG4gICAgICB2YXJpYW50LFxuICAgICAgc2l6ZSxcbiAgICB9LFxuICB9KTtcbn1cblxuY29uc3QgaXRlbU1lZGlhVmFyaWFudHMgPSBjdmEoXG4gIFwiZmxleCBzaHJpbmstMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgZ3JvdXAtaGFzLWRhdGEtW3Nsb3Q9aXRlbS1kZXNjcmlwdGlvbl0vaXRlbTp0cmFuc2xhdGUteS0wLjUgZ3JvdXAtaGFzLWRhdGEtW3Nsb3Q9aXRlbS1kZXNjcmlwdGlvbl0vaXRlbTpzZWxmLXN0YXJ0IFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZVwiLFxuICB7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgZGVmYXVsdDogXCJiZy10cmFuc3BhcmVudFwiLFxuICAgICAgICBpY29uOiBcIlsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxuICAgICAgICBpbWFnZTpcbiAgICAgICAgICBcInNpemUtMTAgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtc20gZ3JvdXAtZGF0YS1bc2l6ZT1zbV0vaXRlbTpzaXplLTggZ3JvdXAtZGF0YS1bc2l6ZT14c10vaXRlbTpzaXplLTYgWyZfaW1nXTpzaXplLWZ1bGwgWyZfaW1nXTpvYmplY3QtY292ZXJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgIH0sXG4gIH0sXG4pO1xuXG5mdW5jdGlvbiBJdGVtTWVkaWEoe1xuICBjbGFzc05hbWUsXG4gIHZhcmlhbnQgPSBcImRlZmF1bHRcIixcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICYgVmFyaWFudFByb3BzPHR5cGVvZiBpdGVtTWVkaWFWYXJpYW50cz4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNsb3Q9XCJpdGVtLW1lZGlhXCJcbiAgICAgIGRhdGEtdmFyaWFudD17dmFyaWFudH1cbiAgICAgIGNsYXNzTmFtZT17Y24oaXRlbU1lZGlhVmFyaWFudHMoeyB2YXJpYW50LCBjbGFzc05hbWUgfSkpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEl0ZW1Db250ZW50KHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtc2xvdD1cIml0ZW0tY29udGVudFwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZsZXggZmxleC0xIGZsZXgtY29sIGdhcC0xIGdyb3VwLWRhdGEtW3NpemU9eHNdL2l0ZW06Z2FwLTAgWyYrW2RhdGEtc2xvdD1pdGVtLWNvbnRlbnRdXTpmbGV4LW5vbmVcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBJdGVtVGl0bGUoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwiaXRlbS10aXRsZVwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImxpbmUtY2xhbXAtMSBmbGV4IHctZml0IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXNtIGxlYWRpbmctc251ZyBmb250LW1lZGl1bSB1bmRlcmxpbmUtb2Zmc2V0LTRcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBJdGVtRGVzY3JpcHRpb24oeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwicFwiPikge1xuICByZXR1cm4gKFxuICAgIDxwXG4gICAgICBkYXRhLXNsb3Q9XCJpdGVtLWRlc2NyaXB0aW9uXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwibGluZS1jbGFtcC0yIHRleHQtbGVmdCB0ZXh0LXNtIGxlYWRpbmctbm9ybWFsIGZvbnQtbm9ybWFsIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBncm91cC1kYXRhLVtzaXplPXhzXS9pdGVtOnRleHQteHMgWyY+YV06dW5kZXJsaW5lIFsmPmFdOnVuZGVybGluZS1vZmZzZXQtNCBbJj5hOmhvdmVyXTp0ZXh0LXByaW1hcnlcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBJdGVtQWN0aW9ucyh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNsb3Q9XCJpdGVtLWFjdGlvbnNcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSXRlbUhlYWRlcih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNsb3Q9XCJpdGVtLWhlYWRlclwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZsZXggYmFzaXMtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSXRlbUZvb3Rlcih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNsb3Q9XCJpdGVtLWZvb3RlclwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZsZXggYmFzaXMtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IHtcbiAgSXRlbSxcbiAgSXRlbU1lZGlhLFxuICBJdGVtQ29udGVudCxcbiAgSXRlbUFjdGlvbnMsXG4gIEl0ZW1Hcm91cCxcbiAgSXRlbVNlcGFyYXRvcixcbiAgSXRlbVRpdGxlLFxuICBJdGVtRGVzY3JpcHRpb24sXG4gIEl0ZW1IZWFkZXIsXG4gIEl0ZW1Gb290ZXIsXG59O1xuIl19