define(["require", "exports", "react/jsx-runtime", "@/lib/utils"], function (require, exports, jsx_runtime_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Card = Card;
    exports.CardHeader = CardHeader;
    exports.CardFooter = CardFooter;
    exports.CardTitle = CardTitle;
    exports.CardDescription = CardDescription;
    exports.CardContent = CardContent;
    function Card({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "card", className: (0, utils_1.cn)("bg-card text-card-foreground rounded-xl border shadow-sm", className), ...props }));
    }
    function CardHeader({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "card-header", className: (0, utils_1.cn)("flex flex-col gap-1.5 p-6", className), ...props }));
    }
    function CardTitle({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "card-title", className: (0, utils_1.cn)("leading-none font-semibold tracking-tight", className), ...props }));
    }
    function CardDescription({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "card-description", className: (0, utils_1.cn)("text-muted-foreground text-sm", className), ...props }));
    }
    function CardContent({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "card-content", className: (0, utils_1.cn)("p-6 pt-0", className), ...props }));
    }
    function CardFooter({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "card-footer", className: (0, utils_1.cn)("flex items-center p-6 pt-0", className), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL2NhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQW9FRSxvQkFBSTtJQUNKLGdDQUFVO0lBQ1YsZ0NBQVU7SUFDViw4QkFBUztJQUNULDBDQUFlO0lBQ2Ysa0NBQVc7SUFyRWIsU0FBUyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQStCO1FBQ2hFLE9BQU8sQ0FDTCw2Q0FDWSxNQUFNLEVBQ2hCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCwwREFBMEQsRUFDMUQsU0FBUyxDQUNWLEtBQ0csS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLFVBQVUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEtBQUssRUFBK0I7UUFDdEUsT0FBTyxDQUNMLDZDQUNZLGFBQWEsRUFDdkIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLDJCQUEyQixFQUFFLFNBQVMsQ0FBQyxLQUNqRCxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUErQjtRQUNyRSxPQUFPLENBQ0wsNkNBQ1ksWUFBWSxFQUN0QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsMkNBQTJDLEVBQUUsU0FBUyxDQUFDLEtBQ2pFLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxlQUFlLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQStCO1FBQzNFLE9BQU8sQ0FDTCw2Q0FDWSxrQkFBa0IsRUFDNUIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLCtCQUErQixFQUFFLFNBQVMsQ0FBQyxLQUNyRCxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsV0FBVyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUErQjtRQUN2RSxPQUFPLENBQ0wsNkNBQ1ksY0FBYyxFQUN4QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxLQUNoQyxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsVUFBVSxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxFQUErQjtRQUN0RSxPQUFPLENBQ0wsNkNBQ1ksYUFBYSxFQUN2QixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDLEtBQ2xELEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIENhcmQoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwiY2FyZFwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImJnLWNhcmQgdGV4dC1jYXJkLWZvcmVncm91bmQgcm91bmRlZC14bCBib3JkZXIgc2hhZG93LXNtXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2FyZEhlYWRlcih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNsb3Q9XCJjYXJkLWhlYWRlclwiXG4gICAgICBjbGFzc05hbWU9e2NuKFwiZmxleCBmbGV4LWNvbCBnYXAtMS41IHAtNlwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhcmRUaXRsZSh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNsb3Q9XCJjYXJkLXRpdGxlXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJsZWFkaW5nLW5vbmUgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodFwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhcmREZXNjcmlwdGlvbih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNsb3Q9XCJjYXJkLWRlc2NyaXB0aW9uXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC1zbVwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENhcmRDb250ZW50KHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtc2xvdD1cImNhcmQtY29udGVudFwiXG4gICAgICBjbGFzc05hbWU9e2NuKFwicC02IHB0LTBcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBDYXJkRm9vdGVyKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGRhdGEtc2xvdD1cImNhcmQtZm9vdGVyXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4IGl0ZW1zLWNlbnRlciBwLTYgcHQtMFwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCB7XG4gIENhcmQsXG4gIENhcmRIZWFkZXIsXG4gIENhcmRGb290ZXIsXG4gIENhcmRUaXRsZSxcbiAgQ2FyZERlc2NyaXB0aW9uLFxuICBDYXJkQ29udGVudCxcbn07XG4iXX0=