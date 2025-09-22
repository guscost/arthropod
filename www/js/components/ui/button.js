define(["require", "exports", "react/jsx-runtime", "@radix-ui/react-slot", "class-variance-authority", "@/lib/utils"], function (require, exports, jsx_runtime_1, react_slot_1, class_variance_authority_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buttonVariants = void 0;
    exports.Button = Button;
    const buttonVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    });
    exports.buttonVariants = buttonVariants;
    function Button({ className, variant, size, asChild = false, ...props }) {
        const Comp = asChild ? react_slot_1.Slot : "button";
        return ((0, jsx_runtime_1.jsx)(Comp, { "data-slot": "button", className: (0, utils_1.cn)(buttonVariants({ variant, size, className })), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvYnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBeURTLHdCQUFNO0lBbkRmLE1BQU0sY0FBYyxHQUFHLElBQUEsOEJBQUcsRUFDeEIsNmJBQTZiLEVBQzdiO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSx3REFBd0Q7Z0JBQ2pFLFdBQVcsRUFDVCxtSkFBbUo7Z0JBQ3JKLE9BQU8sRUFDTCx1SUFBdUk7Z0JBQ3pJLFNBQVMsRUFDUCw4REFBOEQ7Z0JBQ2hFLEtBQUssRUFDSCxzRUFBc0U7Z0JBQ3hFLElBQUksRUFBRSxpREFBaUQ7YUFDeEQ7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLCtCQUErQjtnQkFDeEMsRUFBRSxFQUFFLCtDQUErQztnQkFDbkQsRUFBRSxFQUFFLHNDQUFzQztnQkFDMUMsSUFBSSxFQUFFLFFBQVE7YUFDZjtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRixDQUNGLENBQUM7SUF1QmUsd0NBQWM7SUFyQi9CLFNBQVMsTUFBTSxDQUFDLEVBQ2QsU0FBUyxFQUNULE9BQU8sRUFDUCxJQUFJLEVBQ0osT0FBTyxHQUFHLEtBQUssRUFDZixHQUFHLEtBQUssRUFJUDtRQUNELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUJBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRXZDLE9BQU8sQ0FDTCx1QkFBQyxJQUFJLGlCQUNPLFFBQVEsRUFDbEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUN2RCxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xvdFwiO1xuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgYnV0dG9uVmFyaWFudHMgPSBjdmEoXG4gIFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHdoaXRlc3BhY2Utbm93cmFwIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWFsbCBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNCBzaHJpbmstMCBbJl9zdmddOnNocmluay0wIG91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOmJvcmRlci1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1yaW5nLzUwIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XSBhcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzQwIGFyaWEtaW52YWxpZDpib3JkZXItZGVzdHJ1Y3RpdmVcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBob3ZlcjpiZy1wcmltYXJ5LzkwXCIsXG4gICAgICAgIGRlc3RydWN0aXZlOlxuICAgICAgICAgIFwiYmctZGVzdHJ1Y3RpdmUgdGV4dC13aGl0ZSBob3ZlcjpiZy1kZXN0cnVjdGl2ZS85MCBmb2N1cy12aXNpYmxlOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazpmb2N1cy12aXNpYmxlOnJpbmctZGVzdHJ1Y3RpdmUvNDAgZGFyazpiZy1kZXN0cnVjdGl2ZS82MFwiLFxuICAgICAgICBvdXRsaW5lOlxuICAgICAgICAgIFwiYm9yZGVyIGJnLWJhY2tncm91bmQgc2hhZG93LXhzIGhvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhcms6YmctaW5wdXQvMzAgZGFyazpib3JkZXItaW5wdXQgZGFyazpob3ZlcjpiZy1pbnB1dC81MFwiLFxuICAgICAgICBzZWNvbmRhcnk6XG4gICAgICAgICAgXCJiZy1zZWNvbmRhcnkgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZCBob3ZlcjpiZy1zZWNvbmRhcnkvODBcIixcbiAgICAgICAgZ2hvc3Q6XG4gICAgICAgICAgXCJob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBkYXJrOmhvdmVyOmJnLWFjY2VudC81MFwiLFxuICAgICAgICBsaW5rOiBcInRleHQtcHJpbWFyeSB1bmRlcmxpbmUtb2Zmc2V0LTQgaG92ZXI6dW5kZXJsaW5lXCIsXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBkZWZhdWx0OiBcImgtOSBweC00IHB5LTIgaGFzLVs+c3ZnXTpweC0zXCIsXG4gICAgICAgIHNtOiBcImgtOCByb3VuZGVkLW1kIGdhcC0xLjUgcHgtMyBoYXMtWz5zdmddOnB4LTIuNVwiLFxuICAgICAgICBsZzogXCJoLTEwIHJvdW5kZWQtbWQgcHgtNiBoYXMtWz5zdmddOnB4LTRcIixcbiAgICAgICAgaWNvbjogXCJzaXplLTlcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgICAgc2l6ZTogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgfSxcbik7XG5cbmZ1bmN0aW9uIEJ1dHRvbih7XG4gIGNsYXNzTmFtZSxcbiAgdmFyaWFudCxcbiAgc2l6ZSxcbiAgYXNDaGlsZCA9IGZhbHNlLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJidXR0b25cIj4gJlxuICBWYXJpYW50UHJvcHM8dHlwZW9mIGJ1dHRvblZhcmlhbnRzPiAmIHtcbiAgICBhc0NoaWxkPzogYm9vbGVhbjtcbiAgfSkge1xuICBjb25zdCBDb21wID0gYXNDaGlsZCA/IFNsb3QgOiBcImJ1dHRvblwiO1xuXG4gIHJldHVybiAoXG4gICAgPENvbXBcbiAgICAgIGRhdGEtc2xvdD1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e2NuKGJ1dHRvblZhcmlhbnRzKHsgdmFyaWFudCwgc2l6ZSwgY2xhc3NOYW1lIH0pKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgeyBCdXR0b24sIGJ1dHRvblZhcmlhbnRzIH07XG4iXX0=