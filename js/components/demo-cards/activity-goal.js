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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktZ29hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RlbW8tY2FyZHMvYWN0aXZpdHktZ29hbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUFBLFlBQVksQ0FBQzs7O0lBa0ViLDhDQThEQztJQS9HRCxNQUFNLElBQUksR0FBRztRQUNYO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtLQUNGLENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRztRQUNsQixJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsTUFBTTtZQUNiLEtBQUssRUFBRSxnQkFBZ0I7U0FDeEI7S0FDb0IsQ0FBQztJQUV4QixTQUFnQixpQkFBaUI7UUFDL0IsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTVDLFNBQVMsT0FBTyxDQUFDLFVBQWtCO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFFRCxPQUFPLENBQ0wsd0JBQUMsV0FBSSxJQUFDLFNBQVMsRUFBQyxjQUFjLGFBQzVCLHdCQUFDLGlCQUFVLGVBQ1QsdUJBQUMsZ0JBQVMsNEJBQXNCLEVBQ2hDLHVCQUFDLHNCQUFlLGdEQUFnRCxJQUNyRCxFQUNiLHdCQUFDLGtCQUFXLElBQUMsU0FBUyxFQUFDLHNCQUFzQixhQUMzQyxpQ0FBSyxTQUFTLEVBQUMsd0NBQXdDLGFBQ3JELHdCQUFDLGVBQU0sSUFDTCxPQUFPLEVBQUMsU0FBUyxFQUNqQixJQUFJLEVBQUMsTUFBTSxFQUNYLFNBQVMsRUFBQyxxQkFBcUIsRUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUMzQixRQUFRLEVBQUUsSUFBSSxJQUFJLEdBQUcsYUFFckIsdUJBQUMsd0JBQVMsS0FBRyxFQUNiLGlDQUFNLFNBQVMsRUFBQyxTQUFTLHlCQUFnQixJQUNsQyxFQUNULGlDQUFLLFNBQVMsRUFBQyxhQUFhLGFBQzFCLGdDQUFLLFNBQVMsRUFBQyxrREFBa0QsWUFDOUQsSUFBSSxHQUNELEVBQ04sZ0NBQUssU0FBUyxFQUFDLHlDQUF5Qyw2QkFFbEQsSUFDRixFQUNOLHdCQUFDLGVBQU0sSUFDTCxPQUFPLEVBQUMsU0FBUyxFQUNqQixJQUFJLEVBQUMsTUFBTSxFQUNYLFNBQVMsRUFBQyxxQkFBcUIsRUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFDMUIsUUFBUSxFQUFFLElBQUksSUFBSSxHQUFHLGFBRXJCLHVCQUFDLHVCQUFRLEtBQUcsRUFDWixpQ0FBTSxTQUFTLEVBQUMsU0FBUyx5QkFBZ0IsSUFDbEMsSUFDTCxFQUNOLGdDQUFLLFNBQVMsRUFBQyxRQUFRLFlBQ3JCLHVCQUFDLHNCQUFjLElBQ2IsTUFBTSxFQUFFLFdBQVcsRUFDbkIsU0FBUyxFQUFDLDJCQUEyQixZQUVyQyx1QkFBQyxtQkFBUSxJQUFDLElBQUksRUFBRSxJQUFJLFlBQ2xCLHVCQUFDLGNBQUcsSUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLG1CQUFtQixHQUFHLEdBQ2pELEdBQ0ksR0FDYixJQUNNLEVBQ2QsdUJBQUMsaUJBQVUsY0FDVCx1QkFBQyxlQUFNLElBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsV0FBVyx5QkFFckMsR0FDRSxJQUNSLENBQ1IsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNaW51c0ljb24sIFBsdXNJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBCYXIsIEJhckNoYXJ0IH0gZnJvbSBcInJlY2hhcnRzXCI7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZERlc2NyaXB0aW9uLFxyXG4gIENhcmRGb290ZXIsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkVGl0bGUsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XHJcbmltcG9ydCB7IENoYXJ0Q29uZmlnLCBDaGFydENvbnRhaW5lciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2hhcnRcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgZ29hbDogNDAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZ29hbDogMzAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZ29hbDogMjAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZ29hbDogMzAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZ29hbDogMjAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZ29hbDogMjc4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZ29hbDogMTg5LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZ29hbDogMjM5LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZ29hbDogMzAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZ29hbDogMjAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZ29hbDogMjc4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZ29hbDogMTg5LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZ29hbDogMzQ5LFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBjaGFydENvbmZpZyA9IHtcclxuICBnb2FsOiB7XHJcbiAgICBsYWJlbDogXCJHb2FsXCIsXHJcbiAgICBjb2xvcjogXCJ2YXIoLS1wcmltYXJ5KVwiLFxyXG4gIH0sXHJcbn0gc2F0aXNmaWVzIENoYXJ0Q29uZmlnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhcmRzQWN0aXZpdHlHb2FsKCkge1xyXG4gIGNvbnN0IFtnb2FsLCBzZXRHb2FsXSA9IFJlYWN0LnVzZVN0YXRlKDM1MCk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2soYWRqdXN0bWVudDogbnVtYmVyKSB7XHJcbiAgICBzZXRHb2FsKE1hdGgubWF4KDIwMCwgTWF0aC5taW4oNDAwLCBnb2FsICsgYWRqdXN0bWVudCkpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJoLWZ1bGwgZ2FwLTVcIj5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRUaXRsZT5Nb3ZlIEdvYWw8L0NhcmRUaXRsZT5cclxuICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPlNldCB5b3VyIGRhaWx5IGFjdGl2aXR5IGdvYWwuPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGZsZXgtY29sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJpY29uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS03IHJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soLTEwKX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2dvYWwgPD0gMjAwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWludXNJY29uIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5EZWNyZWFzZTwvc3Bhbj5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIHRhYnVsYXItbnVtc1wiPlxyXG4gICAgICAgICAgICAgIHtnb2FsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dC14cyB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICBDYWxvcmllcy9kYXlcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICBzaXplPVwiaWNvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtNyByb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKDEwKX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2dvYWwgPj0gNDAwfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkluY3JlYXNlPC9zcGFuPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cclxuICAgICAgICAgIDxDaGFydENvbnRhaW5lclxyXG4gICAgICAgICAgICBjb25maWc9e2NoYXJ0Q29uZmlnfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhc3BlY3QtYXV0byBoLWZ1bGwgdy1mdWxsXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJhckNoYXJ0IGRhdGE9e2RhdGF9PlxyXG4gICAgICAgICAgICAgIDxCYXIgZGF0YUtleT1cImdvYWxcIiByYWRpdXM9ezR9IGZpbGw9XCJ2YXIoLS1jb2xvci1nb2FsKVwiIC8+XHJcbiAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XHJcbiAgICAgICAgICA8L0NoYXJ0Q29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8Q2FyZEZvb3Rlcj5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgIFNldCBHb2FsXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQ2FyZEZvb3Rlcj5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcbiJdfQ==