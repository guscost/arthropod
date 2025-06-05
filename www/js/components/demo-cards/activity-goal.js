define(["require", "exports", "react/jsx-runtime", "react", "lucide-react", "recharts", "@/components/ui/button", "@/components/ui/card", "@/components/ui/chart"], function (require, exports, jsx_runtime_1, React, lucide_react_1, recharts_1, button_1, card_1, chart_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardsActivityGoal = CardsActivityGoal;
    const data = [
        {
            goal: 400,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 278,
        },
        {
            goal: 189,
        },
        {
            goal: 239,
        },
        {
            goal: 300,
        },
        {
            goal: 200,
        },
        {
            goal: 278,
        },
        {
            goal: 189,
        },
        {
            goal: 349,
        },
    ];
    const chartConfig = {
        goal: {
            label: "Goal",
            color: "var(--primary)",
        },
    };
    function CardsActivityGoal() {
        const [goal, setGoal] = React.useState(350);
        function onClick(adjustment) {
            setGoal(Math.max(200, Math.min(400, goal + adjustment)));
        }
        return ((0, jsx_runtime_1.jsxs)(card_1.Card, { className: "h-full gap-5", children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: "Move Goal" }), (0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "Set your daily activity goal." })] }), (0, jsx_runtime_1.jsxs)(card_1.CardContent, { className: "flex flex-1 flex-col", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center gap-4", children: [(0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "outline", size: "icon", className: "size-7 rounded-full", onClick: () => onClick(-10), disabled: goal <= 200, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MinusIcon, {}), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Decrease" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-4xl font-bold tracking-tighter tabular-nums", children: goal }), (0, jsx_runtime_1.jsx)("div", { className: "text-muted-foreground text-xs uppercase", children: "Calories/day" })] }), (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "outline", size: "icon", className: "size-7 rounded-full", onClick: () => onClick(10), disabled: goal >= 400, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.PlusIcon, {}), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Increase" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex-1", children: (0, jsx_runtime_1.jsx)(chart_1.ChartContainer, { config: chartConfig, className: "aspect-auto h-full w-full", children: (0, jsx_runtime_1.jsx)(recharts_1.BarChart, { data: data, children: (0, jsx_runtime_1.jsx)(recharts_1.Bar, { dataKey: "goal", radius: 4, fill: "var(--color-goal)" }) }) }) })] }), (0, jsx_runtime_1.jsx)(card_1.CardFooter, { children: (0, jsx_runtime_1.jsx)(button_1.Button, { className: "w-full", variant: "secondary", children: "Set Goal" }) })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktZ29hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RlbW8tY2FyZHMvYWN0aXZpdHktZ29hbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUFBLFlBQVksQ0FBQTs7O0lBa0VaLDhDQThEQztJQS9HRCxNQUFNLElBQUksR0FBRztRQUNYO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtLQUNGLENBQUE7SUFFRCxNQUFNLFdBQVcsR0FBRztRQUNsQixJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsTUFBTTtZQUNiLEtBQUssRUFBRSxnQkFBZ0I7U0FDeEI7S0FDb0IsQ0FBQTtJQUV2QixTQUFnQixpQkFBaUI7UUFDL0IsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRTNDLFNBQVMsT0FBTyxDQUFDLFVBQWtCO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFELENBQUM7UUFFRCxPQUFPLENBQ0wsd0JBQUMsV0FBSSxJQUFDLFNBQVMsRUFBQyxjQUFjLGFBQzVCLHdCQUFDLGlCQUFVLGVBQ1QsdUJBQUMsZ0JBQVMsNEJBQXNCLEVBQ2hDLHVCQUFDLHNCQUFlLGdEQUFnRCxJQUNyRCxFQUNiLHdCQUFDLGtCQUFXLElBQUMsU0FBUyxFQUFDLHNCQUFzQixhQUMzQyxpQ0FBSyxTQUFTLEVBQUMsd0NBQXdDLGFBQ3JELHdCQUFDLGVBQU0sSUFDTCxPQUFPLEVBQUMsU0FBUyxFQUNqQixJQUFJLEVBQUMsTUFBTSxFQUNYLFNBQVMsRUFBQyxxQkFBcUIsRUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUMzQixRQUFRLEVBQUUsSUFBSSxJQUFJLEdBQUcsYUFFckIsdUJBQUMsd0JBQVMsS0FBRyxFQUNiLGlDQUFNLFNBQVMsRUFBQyxTQUFTLHlCQUFnQixJQUNsQyxFQUNULGlDQUFLLFNBQVMsRUFBQyxhQUFhLGFBQzFCLGdDQUFLLFNBQVMsRUFBQyxrREFBa0QsWUFDOUQsSUFBSSxHQUNELEVBQ04sZ0NBQUssU0FBUyxFQUFDLHlDQUF5Qyw2QkFFbEQsSUFDRixFQUNOLHdCQUFDLGVBQU0sSUFDTCxPQUFPLEVBQUMsU0FBUyxFQUNqQixJQUFJLEVBQUMsTUFBTSxFQUNYLFNBQVMsRUFBQyxxQkFBcUIsRUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFDMUIsUUFBUSxFQUFFLElBQUksSUFBSSxHQUFHLGFBRXJCLHVCQUFDLHVCQUFRLEtBQUcsRUFDWixpQ0FBTSxTQUFTLEVBQUMsU0FBUyx5QkFBZ0IsSUFDbEMsSUFDTCxFQUNOLGdDQUFLLFNBQVMsRUFBQyxRQUFRLFlBQ3JCLHVCQUFDLHNCQUFjLElBQ2IsTUFBTSxFQUFFLFdBQVcsRUFDbkIsU0FBUyxFQUFDLDJCQUEyQixZQUVyQyx1QkFBQyxtQkFBUSxJQUFDLElBQUksRUFBRSxJQUFJLFlBQ2xCLHVCQUFDLGNBQUcsSUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLG1CQUFtQixHQUFHLEdBQ2pELEdBQ0ksR0FDYixJQUNNLEVBQ2QsdUJBQUMsaUJBQVUsY0FDVCx1QkFBQyxlQUFNLElBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsV0FBVyx5QkFFckMsR0FDRSxJQUNSLENBQ1IsQ0FBQTtJQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgTWludXNJY29uLCBQbHVzSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIlxyXG5pbXBvcnQgeyBCYXIsIEJhckNoYXJ0IH0gZnJvbSBcInJlY2hhcnRzXCJcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCJcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmREZXNjcmlwdGlvbixcclxuICBDYXJkRm9vdGVyLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZFRpdGxlLFxyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiXHJcbmltcG9ydCB7IENoYXJ0Q29uZmlnLCBDaGFydENvbnRhaW5lciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2hhcnRcIlxyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBnb2FsOiA0MDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBnb2FsOiAzMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBnb2FsOiAyMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBnb2FsOiAzMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBnb2FsOiAyMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBnb2FsOiAyNzgsXHJcbiAgfSxcclxuICB7XHJcbiAgICBnb2FsOiAxODksXHJcbiAgfSxcclxuICB7XHJcbiAgICBnb2FsOiAyMzksXHJcbiAgfSxcclxuICB7XHJcbiAgICBnb2FsOiAzMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBnb2FsOiAyMDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBnb2FsOiAyNzgsXHJcbiAgfSxcclxuICB7XHJcbiAgICBnb2FsOiAxODksXHJcbiAgfSxcclxuICB7XHJcbiAgICBnb2FsOiAzNDksXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgY2hhcnRDb25maWcgPSB7XHJcbiAgZ29hbDoge1xyXG4gICAgbGFiZWw6IFwiR29hbFwiLFxyXG4gICAgY29sb3I6IFwidmFyKC0tcHJpbWFyeSlcIixcclxuICB9LFxyXG59IHNhdGlzZmllcyBDaGFydENvbmZpZ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhcmRzQWN0aXZpdHlHb2FsKCkge1xyXG4gIGNvbnN0IFtnb2FsLCBzZXRHb2FsXSA9IFJlYWN0LnVzZVN0YXRlKDM1MClcclxuXHJcbiAgZnVuY3Rpb24gb25DbGljayhhZGp1c3RtZW50OiBudW1iZXIpIHtcclxuICAgIHNldEdvYWwoTWF0aC5tYXgoMjAwLCBNYXRoLm1pbig0MDAsIGdvYWwgKyBhZGp1c3RtZW50KSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiaC1mdWxsIGdhcC01XCI+XHJcbiAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkVGl0bGU+TW92ZSBHb2FsPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgPENhcmREZXNjcmlwdGlvbj5TZXQgeW91ciBkYWlseSBhY3Rpdml0eSBnb2FsLjwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICBzaXplPVwiaWNvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtNyByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKC0xMCl9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtnb2FsIDw9IDIwMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1pbnVzSWNvbiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RGVjcmVhc2U8L3NwYW4+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlciB0YWJ1bGFyLW51bXNcIj5cclxuICAgICAgICAgICAgICB7Z29hbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQteHMgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgQ2Fsb3JpZXMvZGF5XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgc2l6ZT1cImljb25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaXplLTcgcm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaygxMCl9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtnb2FsID49IDQwMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBsdXNJY29uIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5JbmNyZWFzZTwvc3Bhbj5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XHJcbiAgICAgICAgICA8Q2hhcnRDb250YWluZXJcclxuICAgICAgICAgICAgY29uZmlnPXtjaGFydENvbmZpZ31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNwZWN0LWF1dG8gaC1mdWxsIHctZnVsbFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXtkYXRhfT5cclxuICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJnb2FsXCIgcmFkaXVzPXs0fSBmaWxsPVwidmFyKC0tY29sb3ItZ29hbClcIiAvPlxyXG4gICAgICAgICAgICA8L0JhckNoYXJ0PlxyXG4gICAgICAgICAgPC9DaGFydENvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPENhcmRGb290ZXI+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICBTZXQgR29hbFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0NhcmRGb290ZXI+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59XHJcbiJdfQ==