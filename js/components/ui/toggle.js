define(["require", "exports", "react/jsx-runtime", "@radix-ui/react-toggle", "class-variance-authority", "@/lib/utils"], function (require, exports, jsx_runtime_1, TogglePrimitive, class_variance_authority_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toggleVariants = void 0;
    exports.Toggle = Toggle;
    const toggleVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap", {
        variants: {
            variant: {
                default: "bg-transparent",
                outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
            },
            size: {
                default: "h-9 px-2 min-w-9",
                sm: "h-8 px-1.5 min-w-8",
                lg: "h-10 px-2.5 min-w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    });
    exports.toggleVariants = toggleVariants;
    function Toggle({ className, variant, size, ...props }) {
        return ((0, jsx_runtime_1.jsx)(TogglePrimitive.Root, { "data-slot": "toggle", className: (0, utils_1.cn)(toggleVariants({ variant, size, className })), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvdG9nZ2xlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7O0lBOENKLHdCQUFNO0lBdENmLE1BQU0sY0FBYyxHQUFHLElBQUEsOEJBQUcsRUFDeEIsK2lCQUEraUIsRUFDL2lCO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSxnQkFBZ0I7Z0JBQ3pCLE9BQU8sRUFDTCwyRkFBMkY7YUFDOUY7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsRUFBRSxFQUFFLG9CQUFvQjtnQkFDeEIsRUFBRSxFQUFFLHNCQUFzQjthQUMzQjtTQUNGO1FBQ0QsZUFBZSxFQUFFO1lBQ2YsT0FBTyxFQUFFLFNBQVM7WUFDbEIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRixDQUNGLENBQUM7SUFrQmUsd0NBQWM7SUFoQi9CLFNBQVMsTUFBTSxDQUFDLEVBQ2QsU0FBUyxFQUNULE9BQU8sRUFDUCxJQUFJLEVBQ0osR0FBRyxLQUFLLEVBRTJCO1FBQ25DLE9BQU8sQ0FDTCx1QkFBQyxlQUFlLENBQUMsSUFBSSxpQkFDVCxRQUFRLEVBQ2xCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxjQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsS0FDdkQsS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUb2dnbGVQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC10b2dnbGVcIjtcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IHRvZ2dsZVZhcmlhbnRzID0gY3ZhKFxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gaG92ZXI6YmctbXV0ZWQgaG92ZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MCBkYXRhLVtzdGF0ZT1vbl06YmctYWNjZW50IGRhdGEtW3N0YXRlPW9uXTp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmc6bm90KFtjbGFzcyo9J3NpemUtJ10pXTpzaXplLTQgWyZfc3ZnXTpzaHJpbmstMCBmb2N1cy12aXNpYmxlOmJvcmRlci1yaW5nIGZvY3VzLXZpc2libGU6cmluZy1yaW5nLzUwIGZvY3VzLXZpc2libGU6cmluZy1bM3B4XSBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1bY29sb3IsYm94LXNoYWRvd10gYXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvMjAgZGFyazphcmlhLWludmFsaWQ6cmluZy1kZXN0cnVjdGl2ZS80MCBhcmlhLWludmFsaWQ6Ym9yZGVyLWRlc3RydWN0aXZlIHdoaXRlc3BhY2Utbm93cmFwXCIsXG4gIHtcbiAgICB2YXJpYW50czoge1xuICAgICAgdmFyaWFudDoge1xuICAgICAgICBkZWZhdWx0OiBcImJnLXRyYW5zcGFyZW50XCIsXG4gICAgICAgIG91dGxpbmU6XG4gICAgICAgICAgXCJib3JkZXIgYm9yZGVyLWlucHV0IGJnLXRyYW5zcGFyZW50IHNoYWRvdy14cyBob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZFwiLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgZGVmYXVsdDogXCJoLTkgcHgtMiBtaW4tdy05XCIsXG4gICAgICAgIHNtOiBcImgtOCBweC0xLjUgbWluLXctOFwiLFxuICAgICAgICBsZzogXCJoLTEwIHB4LTIuNSBtaW4tdy0xMFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgICBzaXplOiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9LFxuKTtcblxuZnVuY3Rpb24gVG9nZ2xlKHtcbiAgY2xhc3NOYW1lLFxuICB2YXJpYW50LFxuICBzaXplLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFRvZ2dsZVByaW1pdGl2ZS5Sb290PiAmXG4gIFZhcmlhbnRQcm9wczx0eXBlb2YgdG9nZ2xlVmFyaWFudHM+KSB7XG4gIHJldHVybiAoXG4gICAgPFRvZ2dsZVByaW1pdGl2ZS5Sb290XG4gICAgICBkYXRhLXNsb3Q9XCJ0b2dnbGVcIlxuICAgICAgY2xhc3NOYW1lPXtjbih0b2dnbGVWYXJpYW50cyh7IHZhcmlhbnQsIHNpemUsIGNsYXNzTmFtZSB9KSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IHsgVG9nZ2xlLCB0b2dnbGVWYXJpYW50cyB9O1xuIl19