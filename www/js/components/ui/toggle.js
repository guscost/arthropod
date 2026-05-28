define(["require", "exports", "react/jsx-runtime", "@base-ui/react/toggle", "class-variance-authority", "@/lib/utils"], function (require, exports, jsx_runtime_1, toggle_1, class_variance_authority_1, utils_1) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toggleVariants = void 0;
    exports.Toggle = Toggle;
    const toggleVariants = (0, class_variance_authority_1.cva)("group/toggle inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted data-[state=on]:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
        variants: {
            variant: {
                default: "bg-transparent",
                outline: "border border-input bg-transparent hover:bg-muted",
            },
            size: {
                default: "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
                sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
                lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvdG9nZ2xlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUFBLFlBQVksQ0FBQzs7O0lBNENKLHdCQUFNO0lBckNmLE1BQU0sY0FBYyxHQUFHLElBQUEsOEJBQUcsRUFDeEIscWhCQUFxaEIsRUFDcmhCO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLE9BQU8sRUFBRSxtREFBbUQ7YUFDN0Q7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUNMLHNGQUFzRjtnQkFDeEYsRUFBRSxFQUFFLG9MQUFvTDtnQkFDeEwsRUFBRSxFQUFFLHNGQUFzRjthQUMzRjtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRixDQUNGLENBQUM7SUFpQmUsd0NBQWM7SUFmL0IsU0FBUyxNQUFNLENBQUMsRUFDZCxTQUFTLEVBQ1QsT0FBTyxHQUFHLFNBQVMsRUFDbkIsSUFBSSxHQUFHLFNBQVMsRUFDaEIsR0FBRyxLQUFLLEVBQ29EO1FBQzVELE9BQU8sQ0FDTCx1QkFBQyxlQUFlLGlCQUNKLFFBQVEsRUFDbEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxLQUN2RCxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBUb2dnbGUgYXMgVG9nZ2xlUHJpbWl0aXZlIH0gZnJvbSBcIkBiYXNlLXVpL3JlYWN0L3RvZ2dsZVwiO1xuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgdG9nZ2xlVmFyaWFudHMgPSBjdmEoXG4gIFwiZ3JvdXAvdG9nZ2xlIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMSByb3VuZGVkLWxnIHRleHQtc20gZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbi1hbGwgb3V0bGluZS1ub25lIGhvdmVyOmJnLW11dGVkIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBmb2N1cy12aXNpYmxlOmJvcmRlci1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XSBmb2N1cy12aXNpYmxlOnJpbmctcmluZy81MCBkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAgYXJpYS1pbnZhbGlkOmJvcmRlci1kZXN0cnVjdGl2ZSBhcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS8yMCBhcmlhLXByZXNzZWQ6YmctbXV0ZWQgZGF0YS1bc3RhdGU9b25dOmJnLW11dGVkIGRhcms6YXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvNDAgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Z106c2hyaW5rLTAgWyZfc3ZnOm5vdChbY2xhc3MqPSdzaXplLSddKV06c2l6ZS00XCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OiBcImJnLXRyYW5zcGFyZW50XCIsXG4gICAgICAgIG91dGxpbmU6IFwiYm9yZGVyIGJvcmRlci1pbnB1dCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1tdXRlZFwiLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBcImgtOCBtaW4tdy04IHB4LTIuNSBoYXMtZGF0YS1baWNvbj1pbmxpbmUtZW5kXTpwci0yIGhhcy1kYXRhLVtpY29uPWlubGluZS1zdGFydF06cGwtMlwiLFxuICAgICAgICBzbTogXCJoLTcgbWluLXctNyByb3VuZGVkLVttaW4odmFyKC0tcmFkaXVzLW1kKSwxMnB4KV0gcHgtMi41IHRleHQtWzAuOHJlbV0gaGFzLWRhdGEtW2ljb249aW5saW5lLWVuZF06cHItMS41IGhhcy1kYXRhLVtpY29uPWlubGluZS1zdGFydF06cGwtMS41IFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtMy41XCIsXG4gICAgICAgIGxnOiBcImgtOSBtaW4tdy05IHB4LTIuNSBoYXMtZGF0YS1baWNvbj1pbmxpbmUtZW5kXTpwci0yIGhhcy1kYXRhLVtpY29uPWlubGluZS1zdGFydF06cGwtMlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgICBzaXplOiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9LFxuKTtcblxuZnVuY3Rpb24gVG9nZ2xlKHtcbiAgY2xhc3NOYW1lLFxuICB2YXJpYW50ID0gXCJkZWZhdWx0XCIsXG4gIHNpemUgPSBcImRlZmF1bHRcIixcbiAgLi4ucHJvcHNcbn06IFRvZ2dsZVByaW1pdGl2ZS5Qcm9wcyAmIFZhcmlhbnRQcm9wczx0eXBlb2YgdG9nZ2xlVmFyaWFudHM+KSB7XG4gIHJldHVybiAoXG4gICAgPFRvZ2dsZVByaW1pdGl2ZVxuICAgICAgZGF0YS1zbG90PVwidG9nZ2xlXCJcbiAgICAgIGNsYXNzTmFtZT17Y24odG9nZ2xlVmFyaWFudHMoeyB2YXJpYW50LCBzaXplLCBjbGFzc05hbWUgfSkpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IFRvZ2dsZSwgdG9nZ2xlVmFyaWFudHMgfTtcbiJdfQ==