define(["require", "exports", "react/jsx-runtime", "@radix-ui/react-dropdown-menu", "lucide-react", "@/lib/utils"], function (require, exports, jsx_runtime_1, DropdownMenuPrimitive, lucide_react_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DropdownMenu = DropdownMenu;
    exports.DropdownMenuPortal = DropdownMenuPortal;
    exports.DropdownMenuTrigger = DropdownMenuTrigger;
    exports.DropdownMenuContent = DropdownMenuContent;
    exports.DropdownMenuGroup = DropdownMenuGroup;
    exports.DropdownMenuLabel = DropdownMenuLabel;
    exports.DropdownMenuItem = DropdownMenuItem;
    exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
    exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
    exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
    exports.DropdownMenuSeparator = DropdownMenuSeparator;
    exports.DropdownMenuShortcut = DropdownMenuShortcut;
    exports.DropdownMenuSub = DropdownMenuSub;
    exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
    exports.DropdownMenuSubContent = DropdownMenuSubContent;
    function DropdownMenu({ ...props }) {
        return (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
    }
    function DropdownMenuPortal({ ...props }) {
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props }));
    }
    function DropdownMenuTrigger({ ...props }) {
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Trigger, { "data-slot": "dropdown-menu-trigger", ...props }));
    }
    function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Content, { "data-slot": "dropdown-menu-content", sideOffset: sideOffset, className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md", className), ...props }) }));
    }
    function DropdownMenuGroup({ ...props }) {
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props }));
    }
    function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Item, { "data-slot": "dropdown-menu-item", "data-inset": inset, "data-variant": variant, className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props }));
    }
    function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
        return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.CheckboxItem, { "data-slot": "dropdown-menu-checkbox-item", className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), checked: checked, ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.CheckIcon, { className: "size-4" }) }) }), children] }));
    }
    function DropdownMenuRadioGroup({ ...props }) {
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...props }));
    }
    function DropdownMenuRadioItem({ className, children, ...props }) {
        return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.RadioItem, { "data-slot": "dropdown-menu-radio-item", className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.CircleIcon, { className: "size-2 fill-current" }) }) }), children] }));
    }
    function DropdownMenuLabel({ className, inset, ...props }) {
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Label, { "data-slot": "dropdown-menu-label", "data-inset": inset, className: (0, utils_1.cn)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className), ...props }));
    }
    function DropdownMenuSeparator({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Separator, { "data-slot": "dropdown-menu-separator", className: (0, utils_1.cn)("bg-border -mx-1 my-1 h-px", className), ...props }));
    }
    function DropdownMenuShortcut({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("span", { "data-slot": "dropdown-menu-shortcut", className: (0, utils_1.cn)("text-muted-foreground ml-auto text-xs tracking-widest", className), ...props }));
    }
    function DropdownMenuSub({ ...props }) {
        return (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
    }
    function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
        return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.SubTrigger, { "data-slot": "dropdown-menu-sub-trigger", "data-inset": inset, className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", className), ...props, children: [children, (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRightIcon, { className: "ml-auto size-4" })] }));
    }
    function DropdownMenuSubContent({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.SubContent, { "data-slot": "dropdown-menu-sub-content", className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg", className), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFBQSxZQUFZLENBQUM7OztJQWlQWCxvQ0FBWTtJQUNaLGdEQUFrQjtJQUNsQixrREFBbUI7SUFDbkIsa0RBQW1CO0lBQ25CLDhDQUFpQjtJQUNqQiw4Q0FBaUI7SUFDakIsNENBQWdCO0lBQ2hCLDREQUF3QjtJQUN4Qix3REFBc0I7SUFDdEIsc0RBQXFCO0lBQ3JCLHNEQUFxQjtJQUNyQixvREFBb0I7SUFDcEIsMENBQWU7SUFDZix3REFBc0I7SUFDdEIsd0RBQXNCO0lBdlB4QixTQUFTLFlBQVksQ0FBQyxFQUNwQixHQUFHLEtBQUssRUFDZ0Q7UUFDeEQsT0FBTyx1QkFBQyxxQkFBcUIsQ0FBQyxJQUFJLGlCQUFXLGVBQWUsS0FBSyxLQUFLLEdBQUksQ0FBQztJQUM3RSxDQUFDO0lBRUQsU0FBUyxrQkFBa0IsQ0FBQyxFQUMxQixHQUFHLEtBQUssRUFDa0Q7UUFDMUQsT0FBTyxDQUNMLHVCQUFDLHFCQUFxQixDQUFDLE1BQU0saUJBQVcsc0JBQXNCLEtBQUssS0FBSyxHQUFJLENBQzdFLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxtQkFBbUIsQ0FBQyxFQUMzQixHQUFHLEtBQUssRUFDbUQ7UUFDM0QsT0FBTyxDQUNMLHVCQUFDLHFCQUFxQixDQUFDLE9BQU8saUJBQ2xCLHVCQUF1QixLQUM3QixLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsbUJBQW1CLENBQUMsRUFDM0IsU0FBUyxFQUNULFVBQVUsR0FBRyxDQUFDLEVBQ2QsR0FBRyxLQUFLLEVBQ21EO1FBQzNELE9BQU8sQ0FDTCx1QkFBQyxxQkFBcUIsQ0FBQyxNQUFNLGNBQzNCLHVCQUFDLHFCQUFxQixDQUFDLE9BQU8saUJBQ2xCLHVCQUF1QixFQUNqQyxVQUFV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d0JBQXdCLEVBQ2xDLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCx1REFBdUQsRUFDdkQsU0FBUyxDQUNWLEtBQ0csS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLGVBQWUsQ0FBQyxFQUN2QixHQUFHLEtBQUssRUFDK0M7UUFDdkQsT0FBTyx1QkFBQyxxQkFBcUIsQ0FBQyxHQUFHLGlCQUFXLG1CQUFtQixLQUFLLEtBQUssR0FBSSxDQUFDO0lBQ2hGLENBQUM7SUFFRCxTQUFTLHNCQUFzQixDQUFDLEVBQzlCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUNSLEdBQUcsS0FBSyxFQUdUO1FBQ0MsT0FBTyxDQUNMLHdCQUFDLHFCQUFxQixDQUFDLFVBQVUsaUJBQ3JCLDJCQUEyQixnQkFDekIsS0FBSyxFQUNqQixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsZ09BQWdPLEVBQ2hPLFNBQVMsQ0FDVixLQUNHLEtBQUssYUFFUixRQUFRLEVBQ1QsdUJBQUMsK0JBQWdCLElBQUMsU0FBUyxFQUFDLGdCQUFnQixHQUFHLElBQ2QsQ0FDcEMsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLHNCQUFzQixDQUFDLEVBQzlCLFNBQVMsRUFDVCxHQUFHLEtBQUssRUFDc0Q7UUFDOUQsT0FBTyxDQUNMLHVCQUFDLHFCQUFxQixDQUFDLFVBQVUsaUJBQ3JCLDJCQUEyQixFQUNyQyxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsdWJBQXViLEVBQ3ZiLFNBQVMsQ0FDVixLQUNHLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgRHJvcGRvd25NZW51UHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgQ2hlY2tJY29uLCBDaGV2cm9uUmlnaHRJY29uLCBDaXJjbGVJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnUoe1xuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5Sb290Pikge1xuICByZXR1cm4gPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Sb290IGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnVcIiB7Li4ucHJvcHN9IC8+O1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVQb3J0YWwoe1xuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+KSB7XG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWwgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1wb3J0YWxcIiB7Li4ucHJvcHN9IC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIERyb3Bkb3duTWVudVRyaWdnZXIoe1xuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5UcmlnZ2VyPikge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuVHJpZ2dlclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS10cmlnZ2VyXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVDb250ZW50KHtcbiAgY2xhc3NOYW1lLFxuICBzaWRlT2Zmc2V0ID0gNCxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudD4pIHtcbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlBvcnRhbD5cbiAgICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudFxuICAgICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWNvbnRlbnRcIlxuICAgICAgICBzaWRlT2Zmc2V0PXtzaWRlT2Zmc2V0fVxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiYmctcG9wb3ZlciB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMCBkYXRhLVtzdGF0ZT1jbG9zZWRdOnpvb20tb3V0LTk1IGRhdGEtW3N0YXRlPW9wZW5dOnpvb20taW4tOTUgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTIgei01MCBtaW4tdy1bOHJlbV0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbWQgYm9yZGVyIHAtMSBzaGFkb3ctbWRcIixcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuUG9ydGFsPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVHcm91cCh7XG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkdyb3VwPikge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuR3JvdXAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1ncm91cFwiIHsuLi5wcm9wc30gLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRHJvcGRvd25NZW51SXRlbSh7XG4gIGNsYXNzTmFtZSxcbiAgaW5zZXQsXG4gIHZhcmlhbnQgPSBcImRlZmF1bHRcIixcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbT4gJiB7XG4gIGluc2V0PzogYm9vbGVhbjtcbiAgdmFyaWFudD86IFwiZGVmYXVsdFwiIHwgXCJkZXN0cnVjdGl2ZVwiO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbVxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1pdGVtXCJcbiAgICAgIGRhdGEtaW5zZXQ9e2luc2V0fVxuICAgICAgZGF0YS12YXJpYW50PXt2YXJpYW50fVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBkYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTp0ZXh0LWRlc3RydWN0aXZlLWZvcmVncm91bmQgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06Zm9jdXM6YmctZGVzdHJ1Y3RpdmUvMTAgZGFyazpkYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTpmb2N1czpiZy1kZXN0cnVjdGl2ZS80MCBkYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTpmb2N1czp0ZXh0LWRlc3RydWN0aXZlLWZvcmVncm91bmQgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06Kjpbc3ZnXTohdGV4dC1kZXN0cnVjdGl2ZS1mb3JlZ3JvdW5kIFsmX3N2Zzpub3QoW2NsYXNzKj0ndGV4dC0nXSldOnRleHQtbXV0ZWQtZm9yZWdyb3VuZCByZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLXNtIHB4LTIgcHktMS41IHRleHQtc20gb3V0bGluZS1oaWRkZW4gc2VsZWN0LW5vbmUgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTAgZGF0YS1baW5zZXRdOnBsLTggWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Z106c2hyaW5rLTAgWyZfc3ZnOm5vdChbY2xhc3MqPSdzaXplLSddKV06c2l6ZS00XCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgY2hlY2tlZCxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPikge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWNoZWNrYm94LWl0ZW1cIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCByZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLXNtIHB5LTEuNSBwci0yIHBsLTggdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMCBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTRcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTIgZmxleCBzaXplLTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxuICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwic2l6ZS00XCIgLz5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0+XG4gICk7XG59XG5cbmZ1bmN0aW9uIERyb3Bkb3duTWVudVJhZGlvR3JvdXAoe1xuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0dyb3VwPikge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9Hcm91cFxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1yYWRpby1ncm91cFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRHJvcGRvd25NZW51UmFkaW9JdGVtKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPikge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXJhZGlvLWl0ZW1cIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCByZWxhdGl2ZSBmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLXNtIHB5LTEuNSBwci0yIHBsLTggdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBkYXRhLVtkaXNhYmxlZF06cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLVtkaXNhYmxlZF06b3BhY2l0eS01MCBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMCBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTRcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMiBmbGV4IHNpemUtMy41IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgICAgICAgPENpcmNsZUljb24gY2xhc3NOYW1lPVwic2l6ZS0yIGZpbGwtY3VycmVudFwiIC8+XG4gICAgICAgIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLkl0ZW1JbmRpY2F0b3I+XG4gICAgICA8L3NwYW4+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9JdGVtPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVMYWJlbCh7XG4gIGNsYXNzTmFtZSxcbiAgaW5zZXQsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkxhYmVsPiAmIHtcbiAgaW5zZXQ/OiBib29sZWFuO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWxcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtbGFiZWxcIlxuICAgICAgZGF0YS1pbnNldD17aW5zZXR9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInB4LTIgcHktMS41IHRleHQtc20gZm9udC1tZWRpdW0gZGF0YS1baW5zZXRdOnBsLThcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTZXBhcmF0b3Ioe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlNlcGFyYXRvcj4pIHtcbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlNlcGFyYXRvclxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1zZXBhcmF0b3JcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcImJnLWJvcmRlciAtbXgtMSBteS0xIGgtcHhcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTaG9ydGN1dCh7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwic3BhblwiPikge1xuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXNob3J0Y3V0XCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG1sLWF1dG8gdGV4dC14cyB0cmFja2luZy13aWRlc3RcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTdWIoe1xuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWI+KSB7XG4gIHJldHVybiA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YiBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXN1YlwiIHsuLi5wcm9wc30gLz47XG59XG5cbmZ1bmN0aW9uIERyb3Bkb3duTWVudVN1YlRyaWdnZXIoe1xuICBjbGFzc05hbWUsXG4gIGluc2V0LFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlcj4gJiB7XG4gIGluc2V0PzogYm9vbGVhbjtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YlRyaWdnZXJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc3ViLXRyaWdnZXJcIlxuICAgICAgZGF0YS1pbnNldD17aW5zZXR9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtW3N0YXRlPW9wZW5dOmJnLWFjY2VudCBkYXRhLVtzdGF0ZT1vcGVuXTp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHgtMiBweS0xLjUgdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBkYXRhLVtpbnNldF06cGwtOFwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxDaGV2cm9uUmlnaHRJY29uIGNsYXNzTmFtZT1cIm1sLWF1dG8gc2l6ZS00XCIgLz5cbiAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPlxuICApO1xufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTdWJDb250ZW50KHtcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJDb250ZW50Pikge1xuICByZXR1cm4gKFxuICAgIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViQ29udGVudFxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1zdWItY29udGVudFwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImJnLXBvcG92ZXIgdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9bGVmdF06c2xpZGUtaW4tZnJvbS1yaWdodC0yIGRhdGEtW3NpZGU9cmlnaHRdOnNsaWRlLWluLWZyb20tbGVmdC0yIGRhdGEtW3NpZGU9dG9wXTpzbGlkZS1pbi1mcm9tLWJvdHRvbS0yIHotNTAgbWluLXctWzhyZW1dIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBwLTEgc2hhZG93LWxnXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IHtcbiAgRHJvcGRvd25NZW51LFxuICBEcm9wZG93bk1lbnVQb3J0YWwsXG4gIERyb3Bkb3duTWVudVRyaWdnZXIsXG4gIERyb3Bkb3duTWVudUNvbnRlbnQsXG4gIERyb3Bkb3duTWVudUdyb3VwLFxuICBEcm9wZG93bk1lbnVMYWJlbCxcbiAgRHJvcGRvd25NZW51SXRlbSxcbiAgRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtLFxuICBEcm9wZG93bk1lbnVSYWRpb0dyb3VwLFxuICBEcm9wZG93bk1lbnVSYWRpb0l0ZW0sXG4gIERyb3Bkb3duTWVudVNlcGFyYXRvcixcbiAgRHJvcGRvd25NZW51U2hvcnRjdXQsXG4gIERyb3Bkb3duTWVudVN1YixcbiAgRHJvcGRvd25NZW51U3ViVHJpZ2dlcixcbiAgRHJvcGRvd25NZW51U3ViQ29udGVudCxcbn07XG4iXX0=
