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
                "icon-sm": "size-8",
                "icon-lg": "size-10",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvYnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBMkRTLHdCQUFNO0lBckRmLE1BQU0sY0FBYyxHQUFHLElBQUEsOEJBQUcsRUFDeEIsNmJBQTZiLEVBQzdiO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSx3REFBd0Q7Z0JBQ2pFLFdBQVcsRUFDVCxtSkFBbUo7Z0JBQ3JKLE9BQU8sRUFDTCx1SUFBdUk7Z0JBQ3pJLFNBQVMsRUFDUCw4REFBOEQ7Z0JBQ2hFLEtBQUssRUFDSCxzRUFBc0U7Z0JBQ3hFLElBQUksRUFBRSxpREFBaUQ7YUFDeEQ7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLCtCQUErQjtnQkFDeEMsRUFBRSxFQUFFLCtDQUErQztnQkFDbkQsRUFBRSxFQUFFLHNDQUFzQztnQkFDMUMsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLFNBQVMsRUFBRSxTQUFTO2FBQ3JCO1NBQ0Y7UUFDRCxlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUUsU0FBUztZQUNsQixJQUFJLEVBQUUsU0FBUztTQUNoQjtLQUNGLENBQ0YsQ0FBQztJQXVCZSx3Q0FBYztJQXJCL0IsU0FBUyxNQUFNLENBQUMsRUFDZCxTQUFTLEVBQ1QsT0FBTyxFQUNQLElBQUksRUFDSixPQUFPLEdBQUcsS0FBSyxFQUNmLEdBQUcsS0FBSyxFQUlQO1FBQ0QsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFdkMsT0FBTyxDQUNMLHVCQUFDLElBQUksaUJBQ08sUUFBUSxFQUNsQixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsY0FBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEtBQ3ZELEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTbG90IH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zbG90XCI7XG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBidXR0b25WYXJpYW50cyA9IGN2YShcbiAgXCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgd2hpdGVzcGFjZS1ub3dyYXAgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tYWxsIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MCBbJl9zdmddOnBvaW50ZXItZXZlbnRzLW5vbmUgWyZfc3ZnOm5vdChbY2xhc3MqPSdzaXplLSddKV06c2l6ZS00IHNocmluay0wIFsmX3N2Z106c2hyaW5rLTAgb3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6Ym9yZGVyLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcvNTAgZm9jdXMtdmlzaWJsZTpyaW5nLVszcHhdIGFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6YXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvNDAgYXJpYS1pbnZhbGlkOmJvcmRlci1kZXN0cnVjdGl2ZVwiLFxuICB7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgZGVmYXVsdDogXCJiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGhvdmVyOmJnLXByaW1hcnkvOTBcIixcbiAgICAgICAgZGVzdHJ1Y3RpdmU6XG4gICAgICAgICAgXCJiZy1kZXN0cnVjdGl2ZSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWRlc3RydWN0aXZlLzkwIGZvY3VzLXZpc2libGU6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmZvY3VzLXZpc2libGU6cmluZy1kZXN0cnVjdGl2ZS80MCBkYXJrOmJnLWRlc3RydWN0aXZlLzYwXCIsXG4gICAgICAgIG91dGxpbmU6XG4gICAgICAgICAgXCJib3JkZXIgYmctYmFja2dyb3VuZCBzaGFkb3cteHMgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGFyazpiZy1pbnB1dC8zMCBkYXJrOmJvcmRlci1pbnB1dCBkYXJrOmhvdmVyOmJnLWlucHV0LzUwXCIsXG4gICAgICAgIHNlY29uZGFyeTpcbiAgICAgICAgICBcImJnLXNlY29uZGFyeSB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIGhvdmVyOmJnLXNlY29uZGFyeS84MFwiLFxuICAgICAgICBnaG9zdDpcbiAgICAgICAgICBcImhvdmVyOmJnLWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhcms6aG92ZXI6YmctYWNjZW50LzUwXCIsXG4gICAgICAgIGxpbms6IFwidGV4dC1wcmltYXJ5IHVuZGVybGluZS1vZmZzZXQtNCBob3Zlcjp1bmRlcmxpbmVcIixcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiaC05IHB4LTQgcHktMiBoYXMtWz5zdmddOnB4LTNcIixcbiAgICAgICAgc206IFwiaC04IHJvdW5kZWQtbWQgZ2FwLTEuNSBweC0zIGhhcy1bPnN2Z106cHgtMi41XCIsXG4gICAgICAgIGxnOiBcImgtMTAgcm91bmRlZC1tZCBweC02IGhhcy1bPnN2Z106cHgtNFwiLFxuICAgICAgICBpY29uOiBcInNpemUtOVwiLFxuICAgICAgICBcImljb24tc21cIjogXCJzaXplLThcIixcbiAgICAgICAgXCJpY29uLWxnXCI6IFwic2l6ZS0xMFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgICBzaXplOiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9LFxuKTtcblxuZnVuY3Rpb24gQnV0dG9uKHtcbiAgY2xhc3NOYW1lLFxuICB2YXJpYW50LFxuICBzaXplLFxuICBhc0NoaWxkID0gZmFsc2UsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImJ1dHRvblwiPiAmXG4gIFZhcmlhbnRQcm9wczx0eXBlb2YgYnV0dG9uVmFyaWFudHM+ICYge1xuICAgIGFzQ2hpbGQ/OiBib29sZWFuO1xuICB9KSB7XG4gIGNvbnN0IENvbXAgPSBhc0NoaWxkID8gU2xvdCA6IFwiYnV0dG9uXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29tcFxuICAgICAgZGF0YS1zbG90PVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50LCBzaXplLCBjbGFzc05hbWUgfSkpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IEJ1dHRvbiwgYnV0dG9uVmFyaWFudHMgfTtcbiJdfQ==