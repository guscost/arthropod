define(["require", "exports", "react/jsx-runtime", "@base-ui/react/toggle", "class-variance-authority", "@/lib/utils"], function (require, exports, jsx_runtime_1, toggle_1, class_variance_authority_1, utils_1) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toggleVariants = void 0;
    exports.Toggle = Toggle;
    const toggleVariants = (0, class_variance_authority_1.cva)("group/toggle inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
        variants: {
            variant: {
                default: "bg-transparent",
                outline: "border border-input bg-transparent shadow-xs hover:bg-muted",
            },
            size: {
                default: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
                sm: "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
                lg: "h-10 min-w-10 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    });
    exports.toggleVariants = toggleVariants;
    function Toggle({ className, variant = "default", size = "default", ...props }) {
        return ((0, jsx_runtime_1.jsx)(toggle_1.Toggle, { "data-slot": "toggle", className: (0, utils_1.cn)(toggleVariants({ variant, size, className })), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvdG9nZ2xlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUFBLFlBQVksQ0FBQzs7O0lBNENKLHdCQUFNO0lBckNmLE1BQU0sY0FBYyxHQUFHLElBQUEsOEJBQUcsRUFDeEIsMmdCQUEyZ0IsRUFDM2dCO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLE9BQU8sRUFBRSw2REFBNkQ7YUFDdkU7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUNMLHNGQUFzRjtnQkFDeEYsRUFBRSxFQUFFLDBGQUEwRjtnQkFDOUYsRUFBRSxFQUFFLHdGQUF3RjthQUM3RjtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRixDQUNGLENBQUM7SUFpQmUsd0NBQWM7SUFmL0IsU0FBUyxNQUFNLENBQUMsRUFDZCxTQUFTLEVBQ1QsT0FBTyxHQUFHLFNBQVMsRUFDbkIsSUFBSSxHQUFHLFNBQVMsRUFDaEIsR0FBRyxLQUFLLEVBQ29EO1FBQzVELE9BQU8sQ0FDTCx1QkFBQyxlQUFlLGlCQUNKLFFBQVEsRUFDbEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUN2RCxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBUb2dnbGUgYXMgVG9nZ2xlUHJpbWl0aXZlIH0gZnJvbSBcIkBiYXNlLXVpL3JlYWN0L3RvZ2dsZVwiO1xuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgdG9nZ2xlVmFyaWFudHMgPSBjdmEoXG4gIFwiZ3JvdXAvdG9nZ2xlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMSByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbi1bY29sb3IsYm94LXNoYWRvd10gb3V0bGluZS1ub25lIGhvdmVyOmJnLW11dGVkIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBmb2N1cy12aXNpYmxlOmJvcmRlci1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XSBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgYXJpYS1pbnZhbGlkOmJvcmRlci1kZXN0cnVjdGl2ZSBhcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS8yMCBhcmlhLXByZXNzZWQ6YmctbXV0ZWQgZGFyazphcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS80MCBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMCBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTRcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiYmctdHJhbnNwYXJlbnRcIixcbiAgICAgICAgb3V0bGluZTogXCJib3JkZXIgYm9yZGVyLWlucHV0IGJnLXRyYW5zcGFyZW50IHNoYWRvdy14cyBob3ZlcjpiZy1tdXRlZFwiLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBcImgtOSBtaW4tdy05IHB4LTIuNSBoYXMtZGF0YS1baWNvbj1pbmxpbmUtZW5kXTpwci0yIGhhcy1kYXRhLVtpY29uPWlubGluZS1zdGFydF06cGwtMlwiLFxuICAgICAgICBzbTogXCJoLTggbWluLXctOCBweC0yLjUgaGFzLWRhdGEtW2ljb249aW5saW5lLWVuZF06cHItMS41IGhhcy1kYXRhLVtpY29uPWlubGluZS1zdGFydF06cGwtMS41XCIsXG4gICAgICAgIGxnOiBcImgtMTAgbWluLXctMTAgcHgtMi41IGhhcy1kYXRhLVtpY29uPWlubGluZS1lbmRdOnByLTIgaGFzLWRhdGEtW2ljb249aW5saW5lLXN0YXJ0XTpwbC0yXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxuICAgIH0sXG4gIH0sXG4pO1xuXG5mdW5jdGlvbiBUb2dnbGUoe1xuICBjbGFzc05hbWUsXG4gIHZhcmlhbnQgPSBcImRlZmF1bHRcIixcbiAgc2l6ZSA9IFwiZGVmYXVsdFwiLFxuICAuLi5wcm9wc1xufTogVG9nZ2xlUHJpbWl0aXZlLlByb3BzICYgVmFyaWFudFByb3BzPHR5cGVvZiB0b2dnbGVWYXJpYW50cz4pIHtcbiAgcmV0dXJuIChcbiAgICA8VG9nZ2xlUHJpbWl0aXZlXG4gICAgICBkYXRhLXNsb3Q9XCJ0b2dnbGVcIlxuICAgICAgY2xhc3NOYW1lPXtjbih0b2dnbGVWYXJpYW50cyh7IHZhcmlhbnQsIHNpemUsIGNsYXNzTmFtZSB9KSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IHsgVG9nZ2xlLCB0b2dnbGVWYXJpYW50cyB9O1xuIl19