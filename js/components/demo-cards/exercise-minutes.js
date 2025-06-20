define(["require", "exports", "react/jsx-runtime", "recharts", "@/components/ui/card", "@/components/ui/chart"], function (require, exports, jsx_runtime_1, recharts_1, card_1, chart_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardsExerciseMinutes = CardsExerciseMinutes;
    const data = [
        {
            average: 400,
            today: 240,
            day: "Monday",
        },
        {
            average: 300,
            today: 139,
            day: "Tuesday",
        },
        {
            average: 200,
            today: 980,
            day: "Wednesday",
        },
        {
            average: 278,
            today: 390,
            day: "Thursday",
        },
        {
            average: 189,
            today: 480,
            day: "Friday",
        },
        {
            average: 239,
            today: 380,
            day: "Saturday",
        },
        {
            average: 349,
            today: 430,
            day: "Sunday",
        },
    ];
    const chartConfig = {
        today: {
            label: "Today",
            color: "var(--primary)",
        },
        average: {
            label: "Average",
            color: "var(--primary)",
        },
    };
    function CardsExerciseMinutes() {
        return ((0, jsx_runtime_1.jsxs)(card_1.Card, { children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: "Exercise Minutes" }), (0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "Your exercise minutes are ahead of where you normally are." })] }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { children: (0, jsx_runtime_1.jsx)(chart_1.ChartContainer, { config: chartConfig, className: "w-full md:h-[200px]", children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { accessibilityLayer: true, data: data, margin: {
                                top: 5,
                                right: 10,
                                left: 16,
                                bottom: 0,
                            }, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { vertical: false }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "day", tickLine: false, axisLine: false, tickMargin: 8, tickFormatter: (value) => value.slice(0, 3) }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", dataKey: "today", strokeWidth: 2, stroke: "var(--color-today)", dot: {
                                        fill: "var(--color-today)",
                                    }, activeDot: {
                                        r: 5,
                                    } }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", strokeWidth: 2, dataKey: "average", stroke: "var(--color-average)", strokeOpacity: 0.5, dot: {
                                        fill: "var(--color-average)",
                                        opacity: 0.5,
                                    }, activeDot: {
                                        r: 5,
                                    } }), (0, jsx_runtime_1.jsx)(chart_1.ChartTooltip, { content: (0, jsx_runtime_1.jsx)(chart_1.ChartTooltipContent, {}) })] }) }) })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlcmNpc2UtbWludXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RlbW8tY2FyZHMvZXhlcmNpc2UtbWludXRlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUFBLFlBQVksQ0FBQzs7O0lBbUViLG9EQTZEQztJQTlHRCxNQUFNLElBQUksR0FBRztRQUNYO1lBQ0UsT0FBTyxFQUFFLEdBQUc7WUFDWixLQUFLLEVBQUUsR0FBRztZQUNWLEdBQUcsRUFBRSxRQUFRO1NBQ2Q7UUFDRDtZQUNFLE9BQU8sRUFBRSxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUc7WUFDVixHQUFHLEVBQUUsU0FBUztTQUNmO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHO1lBQ1YsR0FBRyxFQUFFLFdBQVc7U0FDakI7UUFDRDtZQUNFLE9BQU8sRUFBRSxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUc7WUFDVixHQUFHLEVBQUUsVUFBVTtTQUNoQjtRQUNEO1lBQ0UsT0FBTyxFQUFFLEdBQUc7WUFDWixLQUFLLEVBQUUsR0FBRztZQUNWLEdBQUcsRUFBRSxRQUFRO1NBQ2Q7UUFDRDtZQUNFLE9BQU8sRUFBRSxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUc7WUFDVixHQUFHLEVBQUUsVUFBVTtTQUNoQjtRQUNEO1lBQ0UsT0FBTyxFQUFFLEdBQUc7WUFDWixLQUFLLEVBQUUsR0FBRztZQUNWLEdBQUcsRUFBRSxRQUFRO1NBQ2Q7S0FDRixDQUFDO0lBRUYsTUFBTSxXQUFXLEdBQUc7UUFDbEIsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUUsZ0JBQWdCO1NBQ3hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLGdCQUFnQjtTQUN4QjtLQUNvQixDQUFDO0lBRXhCLFNBQWdCLG9CQUFvQjtRQUNsQyxPQUFPLENBQ0wsd0JBQUMsV0FBSSxlQUNILHdCQUFDLGlCQUFVLGVBQ1QsdUJBQUMsZ0JBQVMsbUNBQTZCLEVBQ3ZDLHVCQUFDLHNCQUFlLDZFQUVFLElBQ1AsRUFDYix1QkFBQyxrQkFBVyxjQUNWLHVCQUFDLHNCQUFjLElBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMscUJBQXFCLFlBQ2xFLHdCQUFDLG9CQUFTLElBQ1Isa0JBQWtCLFFBQ2xCLElBQUksRUFBRSxJQUFJLEVBQ1YsTUFBTSxFQUFFO2dDQUNOLEdBQUcsRUFBRSxDQUFDO2dDQUNOLEtBQUssRUFBRSxFQUFFO2dDQUNULElBQUksRUFBRSxFQUFFO2dDQUNSLE1BQU0sRUFBRSxDQUFDOzZCQUNWLGFBRUQsdUJBQUMsd0JBQWEsSUFBQyxRQUFRLEVBQUUsS0FBSyxHQUFJLEVBQ2xDLHVCQUFDLGdCQUFLLElBQ0osT0FBTyxFQUFDLEtBQUssRUFDYixRQUFRLEVBQUUsS0FBSyxFQUNmLFFBQVEsRUFBRSxLQUFLLEVBQ2YsVUFBVSxFQUFFLENBQUMsRUFDYixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUMzQyxFQUNGLHVCQUFDLGVBQUksSUFDSCxJQUFJLEVBQUMsVUFBVSxFQUNmLE9BQU8sRUFBQyxPQUFPLEVBQ2YsV0FBVyxFQUFFLENBQUMsRUFDZCxNQUFNLEVBQUMsb0JBQW9CLEVBQzNCLEdBQUcsRUFBRTt3Q0FDSCxJQUFJLEVBQUUsb0JBQW9CO3FDQUMzQixFQUNELFNBQVMsRUFBRTt3Q0FDVCxDQUFDLEVBQUUsQ0FBQztxQ0FDTCxHQUNELEVBQ0YsdUJBQUMsZUFBSSxJQUNILElBQUksRUFBQyxVQUFVLEVBQ2YsV0FBVyxFQUFFLENBQUMsRUFDZCxPQUFPLEVBQUMsU0FBUyxFQUNqQixNQUFNLEVBQUMsc0JBQXNCLEVBQzdCLGFBQWEsRUFBRSxHQUFHLEVBQ2xCLEdBQUcsRUFBRTt3Q0FDSCxJQUFJLEVBQUUsc0JBQXNCO3dDQUM1QixPQUFPLEVBQUUsR0FBRztxQ0FDYixFQUNELFNBQVMsRUFBRTt3Q0FDVCxDQUFDLEVBQUUsQ0FBQztxQ0FDTCxHQUNELEVBQ0YsdUJBQUMsb0JBQVksSUFBQyxPQUFPLEVBQUUsdUJBQUMsMkJBQW1CLEtBQUcsR0FBSSxJQUN4QyxHQUNHLEdBQ0wsSUFDVCxDQUNSLENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IENhcnRlc2lhbkdyaWQsIExpbmUsIExpbmVDaGFydCwgWEF4aXMgfSBmcm9tIFwicmVjaGFydHNcIjtcblxuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZENvbnRlbnQsXG4gIENhcmREZXNjcmlwdGlvbixcbiAgQ2FyZEhlYWRlcixcbiAgQ2FyZFRpdGxlLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbmltcG9ydCB7XG4gIENoYXJ0Q29uZmlnLFxuICBDaGFydENvbnRhaW5lcixcbiAgQ2hhcnRUb29sdGlwLFxuICBDaGFydFRvb2x0aXBDb250ZW50LFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NoYXJ0XCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBhdmVyYWdlOiA0MDAsXG4gICAgdG9kYXk6IDI0MCxcbiAgICBkYXk6IFwiTW9uZGF5XCIsXG4gIH0sXG4gIHtcbiAgICBhdmVyYWdlOiAzMDAsXG4gICAgdG9kYXk6IDEzOSxcbiAgICBkYXk6IFwiVHVlc2RheVwiLFxuICB9LFxuICB7XG4gICAgYXZlcmFnZTogMjAwLFxuICAgIHRvZGF5OiA5ODAsXG4gICAgZGF5OiBcIldlZG5lc2RheVwiLFxuICB9LFxuICB7XG4gICAgYXZlcmFnZTogMjc4LFxuICAgIHRvZGF5OiAzOTAsXG4gICAgZGF5OiBcIlRodXJzZGF5XCIsXG4gIH0sXG4gIHtcbiAgICBhdmVyYWdlOiAxODksXG4gICAgdG9kYXk6IDQ4MCxcbiAgICBkYXk6IFwiRnJpZGF5XCIsXG4gIH0sXG4gIHtcbiAgICBhdmVyYWdlOiAyMzksXG4gICAgdG9kYXk6IDM4MCxcbiAgICBkYXk6IFwiU2F0dXJkYXlcIixcbiAgfSxcbiAge1xuICAgIGF2ZXJhZ2U6IDM0OSxcbiAgICB0b2RheTogNDMwLFxuICAgIGRheTogXCJTdW5kYXlcIixcbiAgfSxcbl07XG5cbmNvbnN0IGNoYXJ0Q29uZmlnID0ge1xuICB0b2RheToge1xuICAgIGxhYmVsOiBcIlRvZGF5XCIsXG4gICAgY29sb3I6IFwidmFyKC0tcHJpbWFyeSlcIixcbiAgfSxcbiAgYXZlcmFnZToge1xuICAgIGxhYmVsOiBcIkF2ZXJhZ2VcIixcbiAgICBjb2xvcjogXCJ2YXIoLS1wcmltYXJ5KVwiLFxuICB9LFxufSBzYXRpc2ZpZXMgQ2hhcnRDb25maWc7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkc0V4ZXJjaXNlTWludXRlcygpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZFRpdGxlPkV4ZXJjaXNlIE1pbnV0ZXM8L0NhcmRUaXRsZT5cbiAgICAgICAgPENhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgICBZb3VyIGV4ZXJjaXNlIG1pbnV0ZXMgYXJlIGFoZWFkIG9mIHdoZXJlIHlvdSBub3JtYWxseSBhcmUuXG4gICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8Q2hhcnRDb250YWluZXIgY29uZmlnPXtjaGFydENvbmZpZ30gY2xhc3NOYW1lPVwidy1mdWxsIG1kOmgtWzIwMHB4XVwiPlxuICAgICAgICAgIDxMaW5lQ2hhcnRcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYXllclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIG1hcmdpbj17e1xuICAgICAgICAgICAgICB0b3A6IDUsXG4gICAgICAgICAgICAgIHJpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgbGVmdDogMTYsXG4gICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgdmVydGljYWw9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPFhBeGlzXG4gICAgICAgICAgICAgIGRhdGFLZXk9XCJkYXlcIlxuICAgICAgICAgICAgICB0aWNrTGluZT17ZmFsc2V9XG4gICAgICAgICAgICAgIGF4aXNMaW5lPXtmYWxzZX1cbiAgICAgICAgICAgICAgdGlja01hcmdpbj17OH1cbiAgICAgICAgICAgICAgdGlja0Zvcm1hdHRlcj17KHZhbHVlKSA9PiB2YWx1ZS5zbGljZSgwLCAzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TGluZVxuICAgICAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxuICAgICAgICAgICAgICBkYXRhS2V5PVwidG9kYXlcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgc3Ryb2tlPVwidmFyKC0tY29sb3ItdG9kYXkpXCJcbiAgICAgICAgICAgICAgZG90PXt7XG4gICAgICAgICAgICAgICAgZmlsbDogXCJ2YXIoLS1jb2xvci10b2RheSlcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWN0aXZlRG90PXt7XG4gICAgICAgICAgICAgICAgcjogNSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TGluZVxuICAgICAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgZGF0YUtleT1cImF2ZXJhZ2VcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJ2YXIoLS1jb2xvci1hdmVyYWdlKVwiXG4gICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk9ezAuNX1cbiAgICAgICAgICAgICAgZG90PXt7XG4gICAgICAgICAgICAgICAgZmlsbDogXCJ2YXIoLS1jb2xvci1hdmVyYWdlKVwiLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWN0aXZlRG90PXt7XG4gICAgICAgICAgICAgICAgcjogNSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2hhcnRUb29sdGlwIGNvbnRlbnQ9ezxDaGFydFRvb2x0aXBDb250ZW50IC8+fSAvPlxuICAgICAgICAgIDwvTGluZUNoYXJ0PlxuICAgICAgICA8L0NoYXJ0Q29udGFpbmVyPlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG4iXX0=