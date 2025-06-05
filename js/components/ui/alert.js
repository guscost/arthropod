define(["require", "exports", "react/jsx-runtime", "class-variance-authority", "@/lib/utils"], function (require, exports, jsx_runtime_1, class_variance_authority_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Alert = Alert;
    exports.AlertTitle = AlertTitle;
    exports.AlertDescription = AlertDescription;
    const alertVariants = (0, class_variance_authority_1.cva)("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
        variants: {
            variant: {
                default: "bg-card text-card-foreground",
                destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    });
    function Alert({ className, variant, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "alert", role: "alert", className: (0, utils_1.cn)(alertVariants({ variant }), className), ...props }));
    }
    function AlertTitle({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "alert-title", className: (0, utils_1.cn)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className), ...props }));
    }
    function AlertDescription({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "alert-description", className: (0, utils_1.cn)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9hbGVydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBaUVTLHNCQUFLO0lBQUUsZ0NBQVU7SUFBRSw0Q0FBZ0I7SUE1RDVDLE1BQU0sYUFBYSxHQUFHLElBQUEsOEJBQUcsRUFDdkIsbU9BQW1PLEVBQ25PO1FBQ0UsUUFBUSxFQUFFO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRSw4QkFBOEI7Z0JBQ3ZDLFdBQVcsRUFDVCxtR0FBbUc7YUFDdEc7U0FDRjtRQUNELGVBQWUsRUFBRTtZQUNmLE9BQU8sRUFBRSxTQUFTO1NBQ25CO0tBQ0YsQ0FDRixDQUFDO0lBRUYsU0FBUyxLQUFLLENBQUMsRUFDYixTQUFTLEVBQ1QsT0FBTyxFQUNQLEdBQUcsS0FBSyxFQUN5RDtRQUNqRSxPQUFPLENBQ0wsNkNBQ1ksT0FBTyxFQUNqQixJQUFJLEVBQUMsT0FBTyxFQUNaLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxhQUFhLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUNoRCxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsVUFBVSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUErQjtRQUN0RSxPQUFPLENBQ0wsNkNBQ1ksYUFBYSxFQUN2QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsNkRBQTZELEVBQzdELFNBQVMsQ0FDVixLQUNHLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxFQUN4QixTQUFTLEVBQ1QsR0FBRyxLQUFLLEVBQ29CO1FBQzVCLE9BQU8sQ0FDTCw2Q0FDWSxtQkFBbUIsRUFDN0IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLGdHQUFnRyxFQUNoRyxTQUFTLENBQ1YsS0FDRyxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgYWxlcnRWYXJpYW50cyA9IGN2YShcbiAgXCJyZWxhdGl2ZSB3LWZ1bGwgcm91bmRlZC1sZyBib3JkZXIgcHgtNCBweS0zIHRleHQtc20gZ3JpZCBoYXMtWz5zdmddOmdyaWQtY29scy1bY2FsYyh2YXIoLS1zcGFjaW5nKSo0KV8xZnJdIGdyaWQtY29scy1bMF8xZnJdIGhhcy1bPnN2Z106Z2FwLXgtMyBnYXAteS0wLjUgaXRlbXMtc3RhcnQgWyY+c3ZnXTpzaXplLTQgWyY+c3ZnXTp0cmFuc2xhdGUteS0wLjUgWyY+c3ZnXTp0ZXh0LWN1cnJlbnRcIixcbiAge1xuICAgIHZhcmlhbnRzOiB7XG4gICAgICB2YXJpYW50OiB7XG4gICAgICAgIGRlZmF1bHQ6IFwiYmctY2FyZCB0ZXh0LWNhcmQtZm9yZWdyb3VuZFwiLFxuICAgICAgICBkZXN0cnVjdGl2ZTpcbiAgICAgICAgICBcInRleHQtZGVzdHJ1Y3RpdmUgYmctY2FyZCBbJj5zdmddOnRleHQtY3VycmVudCAqOmRhdGEtW3Nsb3Q9YWxlcnQtZGVzY3JpcHRpb25dOnRleHQtZGVzdHJ1Y3RpdmUvOTBcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IFwiZGVmYXVsdFwiLFxuICAgIH0sXG4gIH0sXG4pO1xuXG5mdW5jdGlvbiBBbGVydCh7XG4gIGNsYXNzTmFtZSxcbiAgdmFyaWFudCxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICYgVmFyaWFudFByb3BzPHR5cGVvZiBhbGVydFZhcmlhbnRzPikge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtc2xvdD1cImFsZXJ0XCJcbiAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICBjbGFzc05hbWU9e2NuKGFsZXJ0VmFyaWFudHMoeyB2YXJpYW50IH0pLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEFsZXJ0VGl0bGUoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwiYWxlcnQtdGl0bGVcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJjb2wtc3RhcnQtMiBsaW5lLWNsYW1wLTEgbWluLWgtNCBmb250LW1lZGl1bSB0cmFja2luZy10aWdodFwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEFsZXJ0RGVzY3JpcHRpb24oe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtc2xvdD1cImFsZXJ0LWRlc2NyaXB0aW9uXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGNvbC1zdGFydC0yIGdyaWQganVzdGlmeS1pdGVtcy1zdGFydCBnYXAtMSB0ZXh0LXNtIFsmX3BdOmxlYWRpbmctcmVsYXhlZFwiLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IEFsZXJ0LCBBbGVydFRpdGxlLCBBbGVydERlc2NyaXB0aW9uIH07XG4iXX0=