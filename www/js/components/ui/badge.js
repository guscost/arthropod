define(["require", "exports", "@base-ui/react/merge-props", "@base-ui/react/use-render", "class-variance-authority", "@/lib/utils"], function (require, exports, merge_props_1, use_render_1, class_variance_authority_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.badgeVariants = void 0;
    exports.Badge = Badge;
    const badgeVariants = (0, class_variance_authority_1.cva)("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
                secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
                destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
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
        return (0, use_render_1.useRender)({
            defaultTagName: "span",
            props: (0, merge_props_1.mergeProps)({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9iYWRnZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQW1EUyxzQkFBSztJQTdDZCxNQUFNLGFBQWEsR0FBRyxJQUFBLDhCQUFHLEVBQ3ZCLDRlQUE0ZSxFQUM1ZTtRQUNFLFFBQVEsRUFBRTtZQUNSLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsNERBQTREO2dCQUNyRSxTQUFTLEVBQ1Asa0VBQWtFO2dCQUNwRSxXQUFXLEVBQ1QsZ0tBQWdLO2dCQUNsSyxPQUFPLEVBQ0wsa0ZBQWtGO2dCQUNwRixLQUFLLEVBQ0gsbUVBQW1FO2dCQUNyRSxJQUFJLEVBQUUsaURBQWlEO2FBQ3hEO1NBQ0Y7UUFDRCxlQUFlLEVBQUU7WUFDZixPQUFPLEVBQUUsU0FBUztTQUNuQjtLQUNGLENBQ0YsQ0FBQztJQXdCYyxzQ0FBYTtJQXRCN0IsU0FBUyxLQUFLLENBQUMsRUFDYixTQUFTLEVBQ1QsT0FBTyxHQUFHLFNBQVMsRUFDbkIsTUFBTSxFQUNOLEdBQUcsS0FBSyxFQUM4RDtRQUN0RSxPQUFPLElBQUEsc0JBQVMsRUFBQztZQUNmLGNBQWMsRUFBRSxNQUFNO1lBQ3RCLEtBQUssRUFBRSxJQUFBLHdCQUFVLEVBQ2Y7Z0JBQ0UsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLGFBQWEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDO2FBQ3JELEVBQ0QsS0FBSyxDQUNOO1lBQ0QsTUFBTTtZQUNOLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPO2FBQ1I7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVyZ2VQcm9wcyB9IGZyb20gXCJAYmFzZS11aS9yZWFjdC9tZXJnZS1wcm9wc1wiO1xuaW1wb3J0IHsgdXNlUmVuZGVyIH0gZnJvbSBcIkBiYXNlLXVpL3JlYWN0L3VzZS1yZW5kZXJcIjtcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmNvbnN0IGJhZGdlVmFyaWFudHMgPSBjdmEoXG4gIFwiZ3JvdXAvYmFkZ2UgaW5saW5lLWZsZXggaC01IHctZml0IHNocmluay0wIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC00eGwgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC0yIHB5LTAuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwIHRyYW5zaXRpb24tYWxsIGZvY3VzLXZpc2libGU6Ym9yZGVyLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLVszcHhdIGZvY3VzLXZpc2libGU6cmluZy1yaW5nLzUwIGhhcy1kYXRhLVtpY29uPWlubGluZS1lbmRdOnByLTEuNSBoYXMtZGF0YS1baWNvbj1pbmxpbmUtc3RhcnRdOnBsLTEuNSBhcmlhLWludmFsaWQ6Ym9yZGVyLWRlc3RydWN0aXZlIGFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6YXJpYS1pbnZhbGlkOnJpbmctZGVzdHJ1Y3RpdmUvNDAgWyY+c3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmPnN2Z106c2l6ZS0zIVwiLFxuICB7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgZGVmYXVsdDogXCJiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIFthXTpob3ZlcjpiZy1wcmltYXJ5LzgwXCIsXG4gICAgICAgIHNlY29uZGFyeTpcbiAgICAgICAgICBcImJnLXNlY29uZGFyeSB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIFthXTpob3ZlcjpiZy1zZWNvbmRhcnkvODBcIixcbiAgICAgICAgZGVzdHJ1Y3RpdmU6XG4gICAgICAgICAgXCJiZy1kZXN0cnVjdGl2ZS8xMCB0ZXh0LWRlc3RydWN0aXZlIGZvY3VzLXZpc2libGU6cmluZy1kZXN0cnVjdGl2ZS8yMCBkYXJrOmJnLWRlc3RydWN0aXZlLzIwIGRhcms6Zm9jdXMtdmlzaWJsZTpyaW5nLWRlc3RydWN0aXZlLzQwIFthXTpob3ZlcjpiZy1kZXN0cnVjdGl2ZS8yMFwiLFxuICAgICAgICBvdXRsaW5lOlxuICAgICAgICAgIFwiYm9yZGVyLWJvcmRlciB0ZXh0LWZvcmVncm91bmQgW2FdOmhvdmVyOmJnLW11dGVkIFthXTpob3Zlcjp0ZXh0LW11dGVkLWZvcmVncm91bmRcIixcbiAgICAgICAgZ2hvc3Q6XG4gICAgICAgICAgXCJob3ZlcjpiZy1tdXRlZCBob3Zlcjp0ZXh0LW11dGVkLWZvcmVncm91bmQgZGFyazpob3ZlcjpiZy1tdXRlZC81MFwiLFxuICAgICAgICBsaW5rOiBcInRleHQtcHJpbWFyeSB1bmRlcmxpbmUtb2Zmc2V0LTQgaG92ZXI6dW5kZXJsaW5lXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVmYXVsdFZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiBcImRlZmF1bHRcIixcbiAgICB9LFxuICB9LFxuKTtcblxuZnVuY3Rpb24gQmFkZ2Uoe1xuICBjbGFzc05hbWUsXG4gIHZhcmlhbnQgPSBcImRlZmF1bHRcIixcbiAgcmVuZGVyLFxuICAuLi5wcm9wc1xufTogdXNlUmVuZGVyLkNvbXBvbmVudFByb3BzPFwic3BhblwiPiAmIFZhcmlhbnRQcm9wczx0eXBlb2YgYmFkZ2VWYXJpYW50cz4pIHtcbiAgcmV0dXJuIHVzZVJlbmRlcih7XG4gICAgZGVmYXVsdFRhZ05hbWU6IFwic3BhblwiLFxuICAgIHByb3BzOiBtZXJnZVByb3BzPFwic3BhblwiPihcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbihiYWRnZVZhcmlhbnRzKHsgdmFyaWFudCB9KSwgY2xhc3NOYW1lKSxcbiAgICAgIH0sXG4gICAgICBwcm9wcyxcbiAgICApLFxuICAgIHJlbmRlcixcbiAgICBzdGF0ZToge1xuICAgICAgc2xvdDogXCJiYWRnZVwiLFxuICAgICAgdmFyaWFudCxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IHsgQmFkZ2UsIGJhZGdlVmFyaWFudHMgfTtcbiJdfQ==