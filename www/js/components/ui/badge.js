define(["require", "exports", "@base-ui/react", "@base-ui/react", "class-variance-authority", "@/lib/utils"], function (require, exports, react_1, react_2, class_variance_authority_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.badgeVariants = void 0;
    exports.Badge = Badge;
    const badgeVariants = (0, class_variance_authority_1.cva)("h-5 gap-1 rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium transition-all has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden group/badge", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
                secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
                destructive: "bg-destructive/10 [a]:hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 text-destructive dark:bg-destructive/20",
                outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
                ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
                link: "text-primary underline-offset-4 hover:underline",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    });
    exports.badgeVariants = badgeVariants;
    function Badge({ className, variant = "default", render, ...props }) {
        return (0, react_2.useRender)({
            defaultTagName: "span",
            props: (0, react_1.mergeProps)({
                className: (0, utils_1.cn)(badgeVariants({ variant }), className),
            }, props),
            render,
            state: {
                slot: "badge",
                variant,
            },
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9iYWRnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQW1EUyxzQkFBSztJQTdDZCxNQUFNLGFBQWEsR0FBRyxJQUFBLDhCQUFHLEVBQ3ZCLDRlQUE0ZSxFQUM1ZTtRQUNFLFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsNERBQTREO2dCQUNyRSxTQUFTLEVBQ1Asa0VBQWtFO2dCQUNwRSxXQUFXLEVBQ1QsZ0tBQWdLO2dCQUNsSyxPQUFPLEVBQ0wsa0ZBQWtGO2dCQUNwRixLQUFLLEVBQ0gsbUVBQW1FO2dCQUNyRSxJQUFJLEVBQUUsaURBQWlEO2FBQ3hEO1NBQ0Y7UUFDRCxlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUUsU0FBUztTQUNuQjtLQUNGLENBQ0YsQ0FBQztJQXdCYyxzQ0FBYTtJQXRCN0IsU0FBUyxLQUFLLENBQUMsRUFDYixTQUFTLEVBQ1QsT0FBTyxHQUFHLFNBQVMsRUFDbkIsTUFBTSxFQUNOLEdBQUcsS0FBSyxFQUM4RDtRQUN0RSxPQUFPLElBQUEsaUJBQVMsRUFBQztZQUNmLGNBQWMsRUFBRSxNQUFNO1lBQ3RCLEtBQUssRUFBRSxJQUFBLGtCQUFVLEVBQ2Y7Z0JBQ0UsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDO2FBQ3JELEVBQ0QsS0FBSyxDQUNOO1lBQ0QsTUFBTTtZQUNOLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPO2FBQ1I7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVyZ2VQcm9wcyB9IGZyb20gXCJAYmFzZS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVuZGVyIH0gZnJvbSBcIkBiYXNlLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBjdmEsIHR5cGUgVmFyaWFudFByb3BzIH0gZnJvbSBcImNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBiYWRnZVZhcmlhbnRzID0gY3ZhKFxuICBcImgtNSBnYXAtMSByb3VuZGVkLTR4bCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTIgcHktMC41IHRleHQteHMgZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1hbGwgaGFzLWRhdGEtW2ljb249aW5saW5lLWVuZF06cHItMS41IGhhcy1kYXRhLVtpY29uPWlubGluZS1zdGFydF06cGwtMS41IFsmPnN2Z106c2l6ZS0zISBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1maXQgd2hpdGVzcGFjZS1ub3dyYXAgc2hyaW5rLTAgWyY+c3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIGZvY3VzLXZpc2libGU6Ym9yZGVyLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcvNTAgZm9jdXMtdmlzaWJsZTpyaW5nLVszcHhdIGFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6YXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvNDAgYXJpYS1pbnZhbGlkOmJvcmRlci1kZXN0cnVjdGl2ZSBvdmVyZmxvdy1oaWRkZW4gZ3JvdXAvYmFkZ2VcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBbYV06aG92ZXI6YmctcHJpbWFyeS84MFwiLFxuICAgICAgICBzZWNvbmRhcnk6XG4gICAgICAgICAgXCJiZy1zZWNvbmRhcnkgdGV4dC1zZWNvbmRhcnktZm9yZWdyb3VuZCBbYV06aG92ZXI6Ymctc2Vjb25kYXJ5LzgwXCIsXG4gICAgICAgIGRlc3RydWN0aXZlOlxuICAgICAgICAgIFwiYmctZGVzdHJ1Y3RpdmUvMTAgW2FdOmhvdmVyOmJnLWRlc3RydWN0aXZlLzIwIGZvY3VzLXZpc2libGU6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmZvY3VzLXZpc2libGU6cmluZy1kZXN0cnVjdGl2ZS80MCB0ZXh0LWRlc3RydWN0aXZlIGRhcms6YmctZGVzdHJ1Y3RpdmUvMjBcIixcbiAgICAgICAgb3V0bGluZTpcbiAgICAgICAgICBcImJvcmRlci1ib3JkZXIgdGV4dC1mb3JlZ3JvdW5kIFthXTpob3ZlcjpiZy1tdXRlZCBbYV06aG92ZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIGdob3N0OlxuICAgICAgICAgIFwiaG92ZXI6YmctbXV0ZWQgaG92ZXI6dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGRhcms6aG92ZXI6YmctbXV0ZWQvNTBcIixcbiAgICAgICAgbGluazogXCJ0ZXh0LXByaW1hcnkgdW5kZXJsaW5lLW9mZnNldC00IGhvdmVyOnVuZGVybGluZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgfSxcbik7XG5cbmZ1bmN0aW9uIEJhZGdlKHtcbiAgY2xhc3NOYW1lLFxuICB2YXJpYW50ID0gXCJkZWZhdWx0XCIsXG4gIHJlbmRlcixcbiAgLi4ucHJvcHNcbn06IHVzZVJlbmRlci5Db21wb25lbnRQcm9wczxcInNwYW5cIj4gJiBWYXJpYW50UHJvcHM8dHlwZW9mIGJhZGdlVmFyaWFudHM+KSB7XG4gIHJldHVybiB1c2VSZW5kZXIoe1xuICAgIGRlZmF1bHRUYWdOYW1lOiBcInNwYW5cIixcbiAgICBwcm9wczogbWVyZ2VQcm9wczxcInNwYW5cIj4oXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogY24oYmFkZ2VWYXJpYW50cyh7IHZhcmlhbnQgfSksIGNsYXNzTmFtZSksXG4gICAgICB9LFxuICAgICAgcHJvcHMsXG4gICAgKSxcbiAgICByZW5kZXIsXG4gICAgc3RhdGU6IHtcbiAgICAgIHNsb3Q6IFwiYmFkZ2VcIixcbiAgICAgIHZhcmlhbnQsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCB7IEJhZGdlLCBiYWRnZVZhcmlhbnRzIH07XG4iXX0=