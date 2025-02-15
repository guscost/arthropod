define(["require", "exports", "react/jsx-runtime", "@/lib/utils"], function (require, exports, jsx_runtime_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Table = Table;
    exports.TableHeader = TableHeader;
    exports.TableBody = TableBody;
    exports.TableFooter = TableFooter;
    exports.TableHead = TableHead;
    exports.TableRow = TableRow;
    exports.TableCell = TableCell;
    exports.TableCaption = TableCaption;
    function Table({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "relative w-full overflow-auto", children: (0, jsx_runtime_1.jsx)("table", { "data-slot": "table", className: (0, utils_1.cn)("w-full caption-bottom text-sm", className), ...props }) }));
    }
    function TableHeader({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("thead", { "data-slot": "table-header", className: (0, utils_1.cn)("[&_tr]:border-b", className), ...props }));
    }
    function TableBody({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("tbody", { "data-slot": "table-body", className: (0, utils_1.cn)("[&_tr:last-child]:border-0", className), ...props }));
    }
    function TableFooter({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("tfoot", { "data-slot": "table-footer", className: (0, utils_1.cn)("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className), ...props }));
    }
    function TableRow({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("tr", { "data-slot": "table-row", className: (0, utils_1.cn)("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className), ...props }));
    }
    function TableHead({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("th", { "data-slot": "table-head", className: (0, utils_1.cn)("text-muted-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className), ...props }));
    }
    function TableCell({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("td", { "data-slot": "table-cell", className: (0, utils_1.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className), ...props }));
    }
    function TableCaption({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("caption", { "data-slot": "table-caption", className: (0, utils_1.cn)("text-muted-foreground mt-4 text-sm", className), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS90YWJsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUFBLFlBQVksQ0FBQzs7O0lBd0dYLHNCQUFLO0lBQ0wsa0NBQVc7SUFDWCw4QkFBUztJQUNULGtDQUFXO0lBQ1gsOEJBQVM7SUFDVCw0QkFBUTtJQUNSLDhCQUFTO0lBQ1Qsb0NBQVk7SUF6R2QsU0FBUyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQWlDO1FBQ25FLE9BQU8sQ0FDTCxnQ0FBSyxTQUFTLEVBQUMsK0JBQStCLFlBQzVDLCtDQUNZLE9BQU8sRUFDakIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQyxLQUNyRCxLQUFLLEdBQ1QsR0FDRSxDQUNQLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxXQUFXLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQWlDO1FBQ3pFLE9BQU8sQ0FDTCwrQ0FDWSxjQUFjLEVBQ3hCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsS0FDdkMsS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssRUFBaUM7UUFDdkUsT0FBTyxDQUNMLCtDQUNZLFlBQVksRUFDdEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLDRCQUE0QixFQUFFLFNBQVMsQ0FBQyxLQUNsRCxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsV0FBVyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUFpQztRQUN6RSxPQUFPLENBQ0wsK0NBQ1ksY0FBYyxFQUN4QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gseURBQXlELEVBQ3pELFNBQVMsQ0FDVixLQUNHLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQThCO1FBQ25FLE9BQU8sQ0FDTCw0Q0FDWSxXQUFXLEVBQ3JCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCw2RUFBNkUsRUFDN0UsU0FBUyxDQUNWLEtBQ0csS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssRUFBOEI7UUFDcEUsT0FBTyxDQUNMLDRDQUNZLFlBQVksRUFDdEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLHdJQUF3SSxFQUN4SSxTQUFTLENBQ1YsS0FDRyxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUE4QjtRQUNwRSxPQUFPLENBQ0wsNENBQ1ksWUFBWSxFQUN0QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQ1gsc0ZBQXNGLEVBQ3RGLFNBQVMsQ0FDVixLQUNHLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxZQUFZLENBQUMsRUFDcEIsU0FBUyxFQUNULEdBQUcsS0FBSyxFQUN3QjtRQUNoQyxPQUFPLENBQ0wsaURBQ1ksZUFBZSxFQUN6QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsb0NBQW9DLEVBQUUsU0FBUyxDQUFDLEtBQzFELEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5mdW5jdGlvbiBUYWJsZSh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJ0YWJsZVwiPikge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgIDx0YWJsZVxuICAgICAgICBkYXRhLXNsb3Q9XCJ0YWJsZVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXCJ3LWZ1bGwgY2FwdGlvbi1ib3R0b20gdGV4dC1zbVwiLCBjbGFzc05hbWUpfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBUYWJsZUhlYWRlcih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJ0aGVhZFwiPikge1xuICByZXR1cm4gKFxuICAgIDx0aGVhZFxuICAgICAgZGF0YS1zbG90PVwidGFibGUtaGVhZGVyXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJbJl90cl06Ym9yZGVyLWJcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBUYWJsZUJvZHkoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwidGJvZHlcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8dGJvZHlcbiAgICAgIGRhdGEtc2xvdD1cInRhYmxlLWJvZHlcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcIlsmX3RyOmxhc3QtY2hpbGRdOmJvcmRlci0wXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gVGFibGVGb290ZXIoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwidGZvb3RcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8dGZvb3RcbiAgICAgIGRhdGEtc2xvdD1cInRhYmxlLWZvb3RlclwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImJnLW11dGVkLzUwIGJvcmRlci10IGZvbnQtbWVkaXVtIFsmPnRyXTpsYXN0OmJvcmRlci1iLTBcIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBUYWJsZVJvdyh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJ0clwiPikge1xuICByZXR1cm4gKFxuICAgIDx0clxuICAgICAgZGF0YS1zbG90PVwidGFibGUtcm93XCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiaG92ZXI6YmctbXV0ZWQvNTAgZGF0YS1bc3RhdGU9c2VsZWN0ZWRdOmJnLW11dGVkIGJvcmRlci1iIHRyYW5zaXRpb24tY29sb3JzXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gVGFibGVIZWFkKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcInRoXCI+KSB7XG4gIHJldHVybiAoXG4gICAgPHRoXG4gICAgICBkYXRhLXNsb3Q9XCJ0YWJsZS1oZWFkXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGgtMTAgcHgtMiB0ZXh0LWxlZnQgYWxpZ24tbWlkZGxlIGZvbnQtbWVkaXVtIFsmOmhhcyhbcm9sZT1jaGVja2JveF0pXTpwci0wIFsmPltyb2xlPWNoZWNrYm94XV06dHJhbnNsYXRlLXktWzJweF1cIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBUYWJsZUNlbGwoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwidGRcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8dGRcbiAgICAgIGRhdGEtc2xvdD1cInRhYmxlLWNlbGxcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJwLTIgYWxpZ24tbWlkZGxlIFsmOmhhcyhbcm9sZT1jaGVja2JveF0pXTpwci0wIFsmPltyb2xlPWNoZWNrYm94XV06dHJhbnNsYXRlLXktWzJweF1cIixcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBUYWJsZUNhcHRpb24oe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImNhcHRpb25cIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8Y2FwdGlvblxuICAgICAgZGF0YS1zbG90PVwidGFibGUtY2FwdGlvblwiXG4gICAgICBjbGFzc05hbWU9e2NuKFwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTQgdGV4dC1zbVwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7XG4gIFRhYmxlLFxuICBUYWJsZUhlYWRlcixcbiAgVGFibGVCb2R5LFxuICBUYWJsZUZvb3RlcixcbiAgVGFibGVIZWFkLFxuICBUYWJsZVJvdyxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUNhcHRpb24sXG59O1xuIl19