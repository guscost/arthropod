define(["require", "exports", "react/jsx-runtime", "@base-ui/react", "class-variance-authority", "@/lib/utils"], function (require, exports, jsx_runtime_1, react_1, class_variance_authority_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toggleVariants = void 0;
    exports.Toggle = Toggle;
    const toggleVariants = (0, class_variance_authority_1.cva)("hover:text-foreground aria-pressed:bg-muted focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive gap-1 rounded-md text-sm font-medium transition-[color,box-shadow] [&_svg:not([class*='size-'])]:size-4 group/toggle hover:bg-muted inline-flex items-center justify-center whitespace-nowrap outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-transparent",
                outline: "border-input hover:bg-muted border bg-transparent shadow-xs",
            },
            size: {
                default: "h-9 min-w-9 px-2",
                sm: "h-8 min-w-8 px-1.5",
                lg: "h-10 min-w-10 px-2.5",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    });
    exports.toggleVariants = toggleVariants;
    function Toggle({ className, variant = "default", size = "default", ...props }) {
        return ((0, jsx_runtime_1.jsx)(react_1.Toggle, { "data-slot": "toggle", className: (0, utils_1.cn)(toggleVariants({ variant, size, className })), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvdG9nZ2xlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7O0lBMkNKLHdCQUFNO0lBcENmLE1BQU0sY0FBYyxHQUFHLElBQUEsOEJBQUcsRUFDeEIsMmdCQUEyZ0IsRUFDM2dCO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLE9BQU8sRUFBRSw2REFBNkQ7YUFDdkU7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsRUFBRSxFQUFFLG9CQUFvQjtnQkFDeEIsRUFBRSxFQUFFLHNCQUFzQjthQUMzQjtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRixDQUNGLENBQUM7SUFpQmUsd0NBQWM7SUFmL0IsU0FBUyxNQUFNLENBQUMsRUFDZCxTQUFTLEVBQ1QsT0FBTyxHQUFHLFNBQVMsRUFDbkIsSUFBSSxHQUFHLFNBQVMsRUFDaEIsR0FBRyxLQUFLLEVBQ29EO1FBQzVELE9BQU8sQ0FDTCx1QkFBQyxjQUFlLGlCQUNKLFFBQVEsRUFDbEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUN2RCxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBUb2dnbGUgYXMgVG9nZ2xlUHJpbWl0aXZlIH0gZnJvbSBcIkBiYXNlLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCB0b2dnbGVWYXJpYW50cyA9IGN2YShcbiAgXCJob3Zlcjp0ZXh0LWZvcmVncm91bmQgYXJpYS1wcmVzc2VkOmJnLW11dGVkIGZvY3VzLXZpc2libGU6Ym9yZGVyLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcvNTAgYXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazphcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS80MCBhcmlhLWludmFsaWQ6Ym9yZGVyLWRlc3RydWN0aXZlIGdhcC0xIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLVtjb2xvcixib3gtc2hhZG93XSBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTQgZ3JvdXAvdG9nZ2xlIGhvdmVyOmJnLW11dGVkIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCBvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLVszcHhdIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MCBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnXTpzaHJpbmstMFwiLFxuICB7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgZGVmYXVsdDogXCJiZy10cmFuc3BhcmVudFwiLFxuICAgICAgICBvdXRsaW5lOiBcImJvcmRlci1pbnB1dCBob3ZlcjpiZy1tdXRlZCBib3JkZXIgYmctdHJhbnNwYXJlbnQgc2hhZG93LXhzXCIsXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBkZWZhdWx0OiBcImgtOSBtaW4tdy05IHB4LTJcIixcbiAgICAgICAgc206IFwiaC04IG1pbi13LTggcHgtMS41XCIsXG4gICAgICAgIGxnOiBcImgtMTAgbWluLXctMTAgcHgtMi41XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxuICAgIH0sXG4gIH0sXG4pO1xuXG5mdW5jdGlvbiBUb2dnbGUoe1xuICBjbGFzc05hbWUsXG4gIHZhcmlhbnQgPSBcImRlZmF1bHRcIixcbiAgc2l6ZSA9IFwiZGVmYXVsdFwiLFxuICAuLi5wcm9wc1xufTogVG9nZ2xlUHJpbWl0aXZlLlByb3BzICYgVmFyaWFudFByb3BzPHR5cGVvZiB0b2dnbGVWYXJpYW50cz4pIHtcbiAgcmV0dXJuIChcbiAgICA8VG9nZ2xlUHJpbWl0aXZlXG4gICAgICBkYXRhLXNsb3Q9XCJ0b2dnbGVcIlxuICAgICAgY2xhc3NOYW1lPXtjbih0b2dnbGVWYXJpYW50cyh7IHZhcmlhbnQsIHNpemUsIGNsYXNzTmFtZSB9KSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IHsgVG9nZ2xlLCB0b2dnbGVWYXJpYW50cyB9O1xuIl19