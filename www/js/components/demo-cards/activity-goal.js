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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktZ29hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RlbW8tY2FyZHMvYWN0aXZpdHktZ29hbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUFBLFlBQVksQ0FBQzs7O0lBa0ViLDhDQThEQztJQS9HRCxNQUFNLElBQUksR0FBRztRQUNYO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtRQUNEO1lBQ0UsSUFBSSxFQUFFLEdBQUc7U0FDVjtLQUNGLENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRztRQUNsQixJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsTUFBTTtZQUNiLEtBQUssRUFBRSxnQkFBZ0I7U0FDeEI7S0FDb0IsQ0FBQztJQUV4QixTQUFnQixpQkFBaUI7UUFDL0IsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTVDLFNBQVMsT0FBTyxDQUFDLFVBQWtCO1lBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFFRCxPQUFPLENBQ0wsd0JBQUMsV0FBSSxJQUFDLFNBQVMsRUFBQyxjQUFjLGFBQzVCLHdCQUFDLGlCQUFVLGVBQ1QsdUJBQUMsZ0JBQVMsNEJBQXNCLEVBQ2hDLHVCQUFDLHNCQUFlLGdEQUFnRCxJQUNyRCxFQUNiLHdCQUFDLGtCQUFXLElBQUMsU0FBUyxFQUFDLHNCQUFzQixhQUMzQyxpQ0FBSyxTQUFTLEVBQUMsd0NBQXdDLGFBQ3JELHdCQUFDLGVBQU0sSUFDTCxPQUFPLEVBQUMsU0FBUyxFQUNqQixJQUFJLEVBQUMsTUFBTSxFQUNYLFNBQVMsRUFBQyxxQkFBcUIsRUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUMzQixRQUFRLEVBQUUsSUFBSSxJQUFJLEdBQUcsYUFFckIsdUJBQUMsd0JBQVMsS0FBRyxFQUNiLGlDQUFNLFNBQVMsRUFBQyxTQUFTLHlCQUFnQixJQUNsQyxFQUNULGlDQUFLLFNBQVMsRUFBQyxhQUFhLGFBQzFCLGdDQUFLLFNBQVMsRUFBQyxrREFBa0QsWUFDOUQsSUFBSSxHQUNELEVBQ04sZ0NBQUssU0FBUyxFQUFDLHlDQUF5Qyw2QkFFbEQsSUFDRixFQUNOLHdCQUFDLGVBQU0sSUFDTCxPQUFPLEVBQUMsU0FBUyxFQUNqQixJQUFJLEVBQUMsTUFBTSxFQUNYLFNBQVMsRUFBQyxxQkFBcUIsRUFDL0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFDMUIsUUFBUSxFQUFFLElBQUksSUFBSSxHQUFHLGFBRXJCLHVCQUFDLHVCQUFRLEtBQUcsRUFDWixpQ0FBTSxTQUFTLEVBQUMsU0FBUyx5QkFBZ0IsSUFDbEMsSUFDTCxFQUNOLGdDQUFLLFNBQVMsRUFBQyxRQUFRLFlBQ3JCLHVCQUFDLHNCQUFjLElBQ2IsTUFBTSxFQUFFLFdBQVcsRUFDbkIsU0FBUyxFQUFDLDJCQUEyQixZQUVyQyx1QkFBQyxtQkFBUSxJQUFDLElBQUksRUFBRSxJQUFJLFlBQ2xCLHVCQUFDLGNBQUcsSUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLG1CQUFtQixHQUFHLEdBQ2pELEdBQ0ksR0FDYixJQUNNLEVBQ2QsdUJBQUMsaUJBQVUsY0FDVCx1QkFBQyxlQUFNLElBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsV0FBVyx5QkFFckMsR0FDRSxJQUNSLENBQ1IsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNaW51c0ljb24sIFBsdXNJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQmFyLCBCYXJDaGFydCB9IGZyb20gXCJyZWNoYXJ0c1wiO1xuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIENhcmREZXNjcmlwdGlvbixcbiAgQ2FyZEZvb3RlcixcbiAgQ2FyZEhlYWRlcixcbiAgQ2FyZFRpdGxlLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7IENoYXJ0Q29uZmlnLCBDaGFydENvbnRhaW5lciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2hhcnRcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGdvYWw6IDQwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDMwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDIwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDMwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDIwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDI3OCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDE4OSxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDIzOSxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDMwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDIwMCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDI3OCxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDE4OSxcbiAgfSxcbiAge1xuICAgIGdvYWw6IDM0OSxcbiAgfSxcbl07XG5cbmNvbnN0IGNoYXJ0Q29uZmlnID0ge1xuICBnb2FsOiB7XG4gICAgbGFiZWw6IFwiR29hbFwiLFxuICAgIGNvbG9yOiBcInZhcigtLXByaW1hcnkpXCIsXG4gIH0sXG59IHNhdGlzZmllcyBDaGFydENvbmZpZztcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRzQWN0aXZpdHlHb2FsKCkge1xuICBjb25zdCBbZ29hbCwgc2V0R29hbF0gPSBSZWFjdC51c2VTdGF0ZSgzNTApO1xuXG4gIGZ1bmN0aW9uIG9uQ2xpY2soYWRqdXN0bWVudDogbnVtYmVyKSB7XG4gICAgc2V0R29hbChNYXRoLm1heCgyMDAsIE1hdGgubWluKDQwMCwgZ29hbCArIGFkanVzdG1lbnQpKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT1cImgtZnVsbCBnYXAtNVwiPlxuICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkVGl0bGU+TW92ZSBHb2FsPC9DYXJkVGl0bGU+XG4gICAgICAgIDxDYXJkRGVzY3JpcHRpb24+U2V0IHlvdXIgZGFpbHkgYWN0aXZpdHkgZ29hbC48L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LWNvbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxuICAgICAgICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS03IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKC0xMCl9XG4gICAgICAgICAgICBkaXNhYmxlZD17Z29hbCA8PSAyMDB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1pbnVzSWNvbiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkRlY3JlYXNlPC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXIgdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICAgIHtnb2FsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICBDYWxvcmllcy9kYXlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgIHNpemU9XCJpY29uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtNyByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaygxMCl9XG4gICAgICAgICAgICBkaXNhYmxlZD17Z29hbCA+PSA0MDB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBsdXNJY29uIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+SW5jcmVhc2U8L3NwYW4+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgIDxDaGFydENvbnRhaW5lclxuICAgICAgICAgICAgY29uZmlnPXtjaGFydENvbmZpZ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC1hdXRvIGgtZnVsbCB3LWZ1bGxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCYXJDaGFydCBkYXRhPXtkYXRhfT5cbiAgICAgICAgICAgICAgPEJhciBkYXRhS2V5PVwiZ29hbFwiIHJhZGl1cz17NH0gZmlsbD1cInZhcigtLWNvbG9yLWdvYWwpXCIgLz5cbiAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XG4gICAgICAgICAgPC9DaGFydENvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPENhcmRGb290ZXI+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidy1mdWxsXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgIFNldCBHb2FsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9DYXJkRm9vdGVyPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiJdfQ==