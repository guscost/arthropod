define(["require", "exports", "react/jsx-runtime", "@base-ui/react", "@base-ui/react", "class-variance-authority", "@/lib/utils", "@/components/ui/separator"], function (require, exports, jsx_runtime_1, react_1, react_2, class_variance_authority_1, utils_1, separator_1) {
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
        return ((0, jsx_runtime_1.jsx)("div", { role: "list", "data-slot": "item-group", className: (0, utils_1.cn)("gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2 group/item-group flex w-full flex-col", className), ...props }));
    }
    function ItemSeparator({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)(separator_1.Separator, { "data-slot": "item-separator", orientation: "horizontal", className: (0, utils_1.cn)("my-2", className), ...props }));
    }
    const itemVariants = (0, class_variance_authority_1.cva)("[a]:hover:bg-muted rounded-md border text-sm w-full group/item focus-visible:border-ring focus-visible:ring-ring/50 flex items-center flex-wrap outline-none transition-colors duration-100 focus-visible:ring-[3px] [a]:transition-colors", {
        variants: {
            variant: {
                default: "border-transparent",
                outline: "border-border",
                muted: "bg-muted/50 border-transparent",
            },
            size: {
                default: "gap-3.5 px-4 py-3.5",
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
        return (0, react_2.useRender)({
            defaultTagName: "div",
            props: (0, react_1.mergeProps)({
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
    const itemMediaVariants = (0, class_variance_authority_1.cva)("gap-2 group-has-data-[slot=item-description]/item:translate-y-0.5 group-has-data-[slot=item-description]/item:self-start flex shrink-0 items-center justify-center [&_svg]:pointer-events-none", {
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
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "item-content", className: (0, utils_1.cn)("gap-1 group-data-[size=xs]/item:gap-0 flex flex-1 flex-col [&+[data-slot=item-content]]:flex-none", className), ...props }));
    }
    function ItemTitle({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "item-title", className: (0, utils_1.cn)("gap-2 text-sm leading-snug font-medium underline-offset-4 line-clamp-1 flex w-fit items-center", className), ...props }));
    }
    function ItemDescription({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("p", { "data-slot": "item-description", className: (0, utils_1.cn)("text-muted-foreground text-left text-sm leading-normal group-data-[size=xs]/item:text-xs [&>a:hover]:text-primary line-clamp-2 font-normal [&>a]:underline [&>a]:underline-offset-4", className), ...props }));
    }
    function ItemActions({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "item-actions", className: (0, utils_1.cn)("gap-2 flex items-center", className), ...props }));
    }
    function ItemHeader({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "item-header", className: (0, utils_1.cn)("gap-2 flex basis-full items-center justify-between", className), ...props }));
    }
    function ItemFooter({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "item-footer", className: (0, utils_1.cn)("gap-2 flex basis-full items-center justify-between", className), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL2l0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQThMRSxvQkFBSTtJQUNKLDhCQUFTO0lBQ1Qsa0NBQVc7SUFDWCxrQ0FBVztJQUNYLDhCQUFTO0lBQ1Qsc0NBQWE7SUFDYiw4QkFBUztJQUNULDBDQUFlO0lBQ2YsZ0NBQVU7SUFDVixnQ0FBVTtJQS9MWixTQUFTLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssRUFBK0I7UUFDckUsT0FBTyxDQUNMLGdDQUNFLElBQUksRUFBQyxNQUFNLGVBQ0QsWUFBWSxFQUN0QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsaUdBQWlHLEVBQ2pHLFNBQVMsQ0FDVixLQUNHLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxhQUFhLENBQUMsRUFDckIsU0FBUyxFQUNULEdBQUcsS0FBSyxFQUMrQjtRQUN2QyxPQUFPLENBQ0wsdUJBQUMscUJBQVMsaUJBQ0UsZ0JBQWdCLEVBQzFCLFdBQVcsRUFBQyxZQUFZLEVBQ3hCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEtBQzVCLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxZQUFZLEdBQUcsSUFBQSw4QkFBRyxFQUN0Qiw0T0FBNE8sRUFDNU87UUFDRSxRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLEtBQUssRUFBRSxnQ0FBZ0M7YUFDeEM7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLHFCQUFxQjtnQkFDOUIsRUFBRSxFQUFFLHFCQUFxQjtnQkFDekIsRUFBRSxFQUFFLDREQUE0RDthQUNqRTtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRixDQUNGLENBQUM7SUFFRixTQUFTLElBQUksQ0FBQyxFQUNaLFNBQVMsRUFDVCxPQUFPLEdBQUcsU0FBUyxFQUNuQixJQUFJLEdBQUcsU0FBUyxFQUNoQixNQUFNLEVBQ04sR0FBRyxLQUFLLEVBQzREO1FBQ3BFLE9BQU8sSUFBQSxpQkFBUyxFQUFDO1lBQ2YsY0FBYyxFQUFFLEtBQUs7WUFDckIsS0FBSyxFQUFFLElBQUEsa0JBQVUsRUFDZjtnQkFDRSxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsWUFBWSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2FBQzFELEVBQ0QsS0FBSyxDQUNOO1lBQ0QsTUFBTTtZQUNOLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPO2dCQUNQLElBQUk7YUFDTDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLGlCQUFpQixHQUFHLElBQUEsOEJBQUcsRUFDM0IsZ01BQWdNLEVBQ2hNO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLElBQUksRUFBRSxzQ0FBc0M7Z0JBQzVDLEtBQUssRUFDSCw2SUFBNkk7YUFDaEo7U0FDRjtRQUNELGVBQWUsRUFBRTtZQUNmLE9BQU8sRUFBRSxTQUFTO1NBQ25CO0tBQ0YsQ0FDRixDQUFDO0lBRUYsU0FBUyxTQUFTLENBQUMsRUFDakIsU0FBUyxFQUNULE9BQU8sR0FBRyxTQUFTLEVBQ25CLEdBQUcsS0FBSyxFQUM2RDtRQUNyRSxPQUFPLENBQ0wsNkNBQ1ksWUFBWSxrQkFDUixPQUFPLEVBQ3JCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxpQkFBaUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQ3BELEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxXQUFXLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQStCO1FBQ3ZFLE9BQU8sQ0FDTCw2Q0FDWSxjQUFjLEVBQ3hCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxtR0FBbUcsRUFDbkcsU0FBUyxDQUNWLEtBQ0csS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssRUFBK0I7UUFDckUsT0FBTyxDQUNMLDZDQUNZLFlBQVksRUFDdEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLGdHQUFnRyxFQUNoRyxTQUFTLENBQ1YsS0FDRyxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsZUFBZSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUE2QjtRQUN6RSxPQUFPLENBQ0wsMkNBQ1ksa0JBQWtCLEVBQzVCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxxTEFBcUwsRUFDckwsU0FBUyxDQUNWLEtBQ0csS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssRUFBK0I7UUFDdkUsT0FBTyxDQUNMLDZDQUNZLGNBQWMsRUFDeEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLHlCQUF5QixFQUFFLFNBQVMsQ0FBQyxLQUMvQyxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsVUFBVSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUErQjtRQUN0RSxPQUFPLENBQ0wsNkNBQ1ksYUFBYSxFQUN2QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsb0RBQW9ELEVBQ3BELFNBQVMsQ0FDVixLQUNHLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxVQUFVLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQStCO1FBQ3RFLE9BQU8sQ0FDTCw2Q0FDWSxhQUFhLEVBQ3ZCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCxvREFBb0QsRUFDcEQsU0FBUyxDQUNWLEtBQ0csS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1lcmdlUHJvcHMgfSBmcm9tIFwiQGJhc2UtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlbmRlciB9IGZyb20gXCJAYmFzZS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IFNlcGFyYXRvciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2VwYXJhdG9yXCI7XG5cbmZ1bmN0aW9uIEl0ZW1Hcm91cCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByb2xlPVwibGlzdFwiXG4gICAgICBkYXRhLXNsb3Q9XCJpdGVtLWdyb3VwXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiZ2FwLTQgaGFzLWRhdGEtW3NpemU9c21dOmdhcC0yLjUgaGFzLWRhdGEtW3NpemU9eHNdOmdhcC0yIGdyb3VwL2l0ZW0tZ3JvdXAgZmxleCB3LWZ1bGwgZmxleC1jb2xcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBJdGVtU2VwYXJhdG9yKHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNlcGFyYXRvcj4pIHtcbiAgcmV0dXJuIChcbiAgICA8U2VwYXJhdG9yXG4gICAgICBkYXRhLXNsb3Q9XCJpdGVtLXNlcGFyYXRvclwiXG4gICAgICBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcIm15LTJcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5jb25zdCBpdGVtVmFyaWFudHMgPSBjdmEoXG4gIFwiW2FdOmhvdmVyOmJnLW11dGVkIHJvdW5kZWQtbWQgYm9yZGVyIHRleHQtc20gdy1mdWxsIGdyb3VwL2l0ZW0gZm9jdXMtdmlzaWJsZTpib3JkZXItcmluZyBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTEwMCBmb2N1cy12aXNpYmxlOnJpbmctWzNweF0gW2FdOnRyYW5zaXRpb24tY29sb3JzXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OiBcImJvcmRlci10cmFuc3BhcmVudFwiLFxuICAgICAgICBvdXRsaW5lOiBcImJvcmRlci1ib3JkZXJcIixcbiAgICAgICAgbXV0ZWQ6IFwiYmctbXV0ZWQvNTAgYm9yZGVyLXRyYW5zcGFyZW50XCIsXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBkZWZhdWx0OiBcImdhcC0zLjUgcHgtNCBweS0zLjVcIixcbiAgICAgICAgc206IFwiZ2FwLTIuNSBweC0zIHB5LTIuNVwiLFxuICAgICAgICB4czogXCJnYXAtMiBweC0yLjUgcHktMiBpbi1kYXRhLVtzbG90PWRyb3Bkb3duLW1lbnUtY29udGVudF06cC0wXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxuICAgIH0sXG4gIH0sXG4pO1xuXG5mdW5jdGlvbiBJdGVtKHtcbiAgY2xhc3NOYW1lLFxuICB2YXJpYW50ID0gXCJkZWZhdWx0XCIsXG4gIHNpemUgPSBcImRlZmF1bHRcIixcbiAgcmVuZGVyLFxuICAuLi5wcm9wc1xufTogdXNlUmVuZGVyLkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICYgVmFyaWFudFByb3BzPHR5cGVvZiBpdGVtVmFyaWFudHM+KSB7XG4gIHJldHVybiB1c2VSZW5kZXIoe1xuICAgIGRlZmF1bHRUYWdOYW1lOiBcImRpdlwiLFxuICAgIHByb3BzOiBtZXJnZVByb3BzPFwiZGl2XCI+KFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGNuKGl0ZW1WYXJpYW50cyh7IHZhcmlhbnQsIHNpemUsIGNsYXNzTmFtZSB9KSksXG4gICAgICB9LFxuICAgICAgcHJvcHMsXG4gICAgKSxcbiAgICByZW5kZXIsXG4gICAgc3RhdGU6IHtcbiAgICAgIHNsb3Q6IFwiaXRlbVwiLFxuICAgICAgdmFyaWFudCxcbiAgICAgIHNpemUsXG4gICAgfSxcbiAgfSk7XG59XG5cbmNvbnN0IGl0ZW1NZWRpYVZhcmlhbnRzID0gY3ZhKFxuICBcImdhcC0yIGdyb3VwLWhhcy1kYXRhLVtzbG90PWl0ZW0tZGVzY3JpcHRpb25dL2l0ZW06dHJhbnNsYXRlLXktMC41IGdyb3VwLWhhcy1kYXRhLVtzbG90PWl0ZW0tZGVzY3JpcHRpb25dL2l0ZW06c2VsZi1zdGFydCBmbGV4IHNocmluay0wIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmVcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiYmctdHJhbnNwYXJlbnRcIixcbiAgICAgICAgaWNvbjogXCJbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTRcIixcbiAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgXCJzaXplLTEwIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXNtIGdyb3VwLWRhdGEtW3NpemU9c21dL2l0ZW06c2l6ZS04IGdyb3VwLWRhdGEtW3NpemU9eHNdL2l0ZW06c2l6ZS02IFsmX2ltZ106c2l6ZS1mdWxsIFsmX2ltZ106b2JqZWN0LWNvdmVyXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9LFxuKTtcblxuZnVuY3Rpb24gSXRlbU1lZGlhKHtcbiAgY2xhc3NOYW1lLFxuICB2YXJpYW50ID0gXCJkZWZhdWx0XCIsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPiAmIFZhcmlhbnRQcm9wczx0eXBlb2YgaXRlbU1lZGlhVmFyaWFudHM+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwiaXRlbS1tZWRpYVwiXG4gICAgICBkYXRhLXZhcmlhbnQ9e3ZhcmlhbnR9XG4gICAgICBjbGFzc05hbWU9e2NuKGl0ZW1NZWRpYVZhcmlhbnRzKHsgdmFyaWFudCwgY2xhc3NOYW1lIH0pKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBJdGVtQ29udGVudCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNsb3Q9XCJpdGVtLWNvbnRlbnRcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJnYXAtMSBncm91cC1kYXRhLVtzaXplPXhzXS9pdGVtOmdhcC0wIGZsZXggZmxleC0xIGZsZXgtY29sIFsmK1tkYXRhLXNsb3Q9aXRlbS1jb250ZW50XV06ZmxleC1ub25lXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSXRlbVRpdGxlKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtc2xvdD1cIml0ZW0tdGl0bGVcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJnYXAtMiB0ZXh0LXNtIGxlYWRpbmctc251ZyBmb250LW1lZGl1bSB1bmRlcmxpbmUtb2Zmc2V0LTQgbGluZS1jbGFtcC0xIGZsZXggdy1maXQgaXRlbXMtY2VudGVyXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSXRlbURlc2NyaXB0aW9uKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcInBcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8cFxuICAgICAgZGF0YS1zbG90PVwiaXRlbS1kZXNjcmlwdGlvblwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LWxlZnQgdGV4dC1zbSBsZWFkaW5nLW5vcm1hbCBncm91cC1kYXRhLVtzaXplPXhzXS9pdGVtOnRleHQteHMgWyY+YTpob3Zlcl06dGV4dC1wcmltYXJ5IGxpbmUtY2xhbXAtMiBmb250LW5vcm1hbCBbJj5hXTp1bmRlcmxpbmUgWyY+YV06dW5kZXJsaW5lLW9mZnNldC00XCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSXRlbUFjdGlvbnMoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwiaXRlbS1hY3Rpb25zXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJnYXAtMiBmbGV4IGl0ZW1zLWNlbnRlclwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEl0ZW1IZWFkZXIoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwiaXRlbS1oZWFkZXJcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJnYXAtMiBmbGV4IGJhc2lzLWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEl0ZW1Gb290ZXIoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwiaXRlbS1mb290ZXJcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJnYXAtMiBmbGV4IGJhc2lzLWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7XG4gIEl0ZW0sXG4gIEl0ZW1NZWRpYSxcbiAgSXRlbUNvbnRlbnQsXG4gIEl0ZW1BY3Rpb25zLFxuICBJdGVtR3JvdXAsXG4gIEl0ZW1TZXBhcmF0b3IsXG4gIEl0ZW1UaXRsZSxcbiAgSXRlbURlc2NyaXB0aW9uLFxuICBJdGVtSGVhZGVyLFxuICBJdGVtRm9vdGVyLFxufTtcbiJdfQ==