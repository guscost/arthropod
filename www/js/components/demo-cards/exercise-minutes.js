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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlcmNpc2UtbWludXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RlbW8tY2FyZHMvZXhlcmNpc2UtbWludXRlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUFBLFlBQVksQ0FBQTs7O0lBbUVaLG9EQTZEQztJQTlHRCxNQUFNLElBQUksR0FBRztRQUNYO1lBQ0UsT0FBTyxFQUFFLEdBQUc7WUFDWixLQUFLLEVBQUUsR0FBRztZQUNWLEdBQUcsRUFBRSxRQUFRO1NBQ2Q7UUFDRDtZQUNFLE9BQU8sRUFBRSxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUc7WUFDVixHQUFHLEVBQUUsU0FBUztTQUNmO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHO1lBQ1YsR0FBRyxFQUFFLFdBQVc7U0FDakI7UUFDRDtZQUNFLE9BQU8sRUFBRSxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUc7WUFDVixHQUFHLEVBQUUsVUFBVTtTQUNoQjtRQUNEO1lBQ0UsT0FBTyxFQUFFLEdBQUc7WUFDWixLQUFLLEVBQUUsR0FBRztZQUNWLEdBQUcsRUFBRSxRQUFRO1NBQ2Q7UUFDRDtZQUNFLE9BQU8sRUFBRSxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUc7WUFDVixHQUFHLEVBQUUsVUFBVTtTQUNoQjtRQUNEO1lBQ0UsT0FBTyxFQUFFLEdBQUc7WUFDWixLQUFLLEVBQUUsR0FBRztZQUNWLEdBQUcsRUFBRSxRQUFRO1NBQ2Q7S0FDRixDQUFBO0lBRUQsTUFBTSxXQUFXLEdBQUc7UUFDbEIsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLE9BQU87WUFDZCxLQUFLLEVBQUUsZ0JBQWdCO1NBQ3hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLGdCQUFnQjtTQUN4QjtLQUNvQixDQUFBO0lBRXZCLFNBQWdCLG9CQUFvQjtRQUNsQyxPQUFPLENBQ0wsd0JBQUMsV0FBSSxlQUNILHdCQUFDLGlCQUFVLGVBQ1QsdUJBQUMsZ0JBQVMsbUNBQTZCLEVBQ3ZDLHVCQUFDLHNCQUFlLDZFQUVFLElBQ1AsRUFDYix1QkFBQyxrQkFBVyxjQUNWLHVCQUFDLHNCQUFjLElBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMscUJBQXFCLFlBQ2xFLHdCQUFDLG9CQUFTLElBQ1Isa0JBQWtCLFFBQ2xCLElBQUksRUFBRSxJQUFJLEVBQ1YsTUFBTSxFQUFFO2dDQUNOLEdBQUcsRUFBRSxDQUFDO2dDQUNOLEtBQUssRUFBRSxFQUFFO2dDQUNULElBQUksRUFBRSxFQUFFO2dDQUNSLE1BQU0sRUFBRSxDQUFDOzZCQUNWLGFBRUQsdUJBQUMsd0JBQWEsSUFBQyxRQUFRLEVBQUUsS0FBSyxHQUFJLEVBQ2xDLHVCQUFDLGdCQUFLLElBQ0osT0FBTyxFQUFDLEtBQUssRUFDYixRQUFRLEVBQUUsS0FBSyxFQUNmLFFBQVEsRUFBRSxLQUFLLEVBQ2YsVUFBVSxFQUFFLENBQUMsRUFDYixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUMzQyxFQUNGLHVCQUFDLGVBQUksSUFDSCxJQUFJLEVBQUMsVUFBVSxFQUNmLE9BQU8sRUFBQyxPQUFPLEVBQ2YsV0FBVyxFQUFFLENBQUMsRUFDZCxNQUFNLEVBQUMsb0JBQW9CLEVBQzNCLEdBQUcsRUFBRTt3Q0FDSCxJQUFJLEVBQUUsb0JBQW9CO3FDQUMzQixFQUNELFNBQVMsRUFBRTt3Q0FDVCxDQUFDLEVBQUUsQ0FBQztxQ0FDTCxHQUNELEVBQ0YsdUJBQUMsZUFBSSxJQUNILElBQUksRUFBQyxVQUFVLEVBQ2YsV0FBVyxFQUFFLENBQUMsRUFDZCxPQUFPLEVBQUMsU0FBUyxFQUNqQixNQUFNLEVBQUMsc0JBQXNCLEVBQzdCLGFBQWEsRUFBRSxHQUFHLEVBQ2xCLEdBQUcsRUFBRTt3Q0FDSCxJQUFJLEVBQUUsc0JBQXNCO3dDQUM1QixPQUFPLEVBQUUsR0FBRztxQ0FDYixFQUNELFNBQVMsRUFBRTt3Q0FDVCxDQUFDLEVBQUUsQ0FBQztxQ0FDTCxHQUNELEVBQ0YsdUJBQUMsb0JBQVksSUFBQyxPQUFPLEVBQUUsdUJBQUMsMkJBQW1CLEtBQUcsR0FBSSxJQUN4QyxHQUNHLEdBQ0wsSUFDVCxDQUNSLENBQUE7SUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IENhcnRlc2lhbkdyaWQsIExpbmUsIExpbmVDaGFydCwgWEF4aXMgfSBmcm9tIFwicmVjaGFydHNcIlxyXG5cclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmREZXNjcmlwdGlvbixcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRUaXRsZSxcclxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxyXG5pbXBvcnQge1xyXG4gIENoYXJ0Q29uZmlnLFxyXG4gIENoYXJ0Q29udGFpbmVyLFxyXG4gIENoYXJ0VG9vbHRpcCxcclxuICBDaGFydFRvb2x0aXBDb250ZW50LFxyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2hhcnRcIlxyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBhdmVyYWdlOiA0MDAsXHJcbiAgICB0b2RheTogMjQwLFxyXG4gICAgZGF5OiBcIk1vbmRheVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYXZlcmFnZTogMzAwLFxyXG4gICAgdG9kYXk6IDEzOSxcclxuICAgIGRheTogXCJUdWVzZGF5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBhdmVyYWdlOiAyMDAsXHJcbiAgICB0b2RheTogOTgwLFxyXG4gICAgZGF5OiBcIldlZG5lc2RheVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYXZlcmFnZTogMjc4LFxyXG4gICAgdG9kYXk6IDM5MCxcclxuICAgIGRheTogXCJUaHVyc2RheVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYXZlcmFnZTogMTg5LFxyXG4gICAgdG9kYXk6IDQ4MCxcclxuICAgIGRheTogXCJGcmlkYXlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGF2ZXJhZ2U6IDIzOSxcclxuICAgIHRvZGF5OiAzODAsXHJcbiAgICBkYXk6IFwiU2F0dXJkYXlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGF2ZXJhZ2U6IDM0OSxcclxuICAgIHRvZGF5OiA0MzAsXHJcbiAgICBkYXk6IFwiU3VuZGF5XCIsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgY2hhcnRDb25maWcgPSB7XHJcbiAgdG9kYXk6IHtcclxuICAgIGxhYmVsOiBcIlRvZGF5XCIsXHJcbiAgICBjb2xvcjogXCJ2YXIoLS1wcmltYXJ5KVwiLFxyXG4gIH0sXHJcbiAgYXZlcmFnZToge1xyXG4gICAgbGFiZWw6IFwiQXZlcmFnZVwiLFxyXG4gICAgY29sb3I6IFwidmFyKC0tcHJpbWFyeSlcIixcclxuICB9LFxyXG59IHNhdGlzZmllcyBDaGFydENvbmZpZ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhcmRzRXhlcmNpc2VNaW51dGVzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRUaXRsZT5FeGVyY2lzZSBNaW51dGVzPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgPENhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgIFlvdXIgZXhlcmNpc2UgbWludXRlcyBhcmUgYWhlYWQgb2Ygd2hlcmUgeW91IG5vcm1hbGx5IGFyZS5cclxuICAgICAgICA8L0NhcmREZXNjcmlwdGlvbj5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgPENoYXJ0Q29udGFpbmVyIGNvbmZpZz17Y2hhcnRDb25maWd9IGNsYXNzTmFtZT1cInctZnVsbCBtZDpoLVsyMDBweF1cIj5cclxuICAgICAgICAgIDxMaW5lQ2hhcnRcclxuICAgICAgICAgICAgYWNjZXNzaWJpbGl0eUxheWVyXHJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgIG1hcmdpbj17e1xyXG4gICAgICAgICAgICAgIHRvcDogNSxcclxuICAgICAgICAgICAgICByaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgbGVmdDogMTYsXHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCB2ZXJ0aWNhbD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDxYQXhpc1xyXG4gICAgICAgICAgICAgIGRhdGFLZXk9XCJkYXlcIlxyXG4gICAgICAgICAgICAgIHRpY2tMaW5lPXtmYWxzZX1cclxuICAgICAgICAgICAgICBheGlzTGluZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgdGlja01hcmdpbj17OH1cclxuICAgICAgICAgICAgICB0aWNrRm9ybWF0dGVyPXsodmFsdWUpID0+IHZhbHVlLnNsaWNlKDAsIDMpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TGluZVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJtb25vdG9uZVwiXHJcbiAgICAgICAgICAgICAgZGF0YUtleT1cInRvZGF5XCJcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICBzdHJva2U9XCJ2YXIoLS1jb2xvci10b2RheSlcIlxyXG4gICAgICAgICAgICAgIGRvdD17e1xyXG4gICAgICAgICAgICAgICAgZmlsbDogXCJ2YXIoLS1jb2xvci10b2RheSlcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGFjdGl2ZURvdD17e1xyXG4gICAgICAgICAgICAgICAgcjogNSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TGluZVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJtb25vdG9uZVwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgZGF0YUtleT1cImF2ZXJhZ2VcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZT1cInZhcigtLWNvbG9yLWF2ZXJhZ2UpXCJcclxuICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5PXswLjV9XHJcbiAgICAgICAgICAgICAgZG90PXt7XHJcbiAgICAgICAgICAgICAgICBmaWxsOiBcInZhcigtLWNvbG9yLWF2ZXJhZ2UpXCIsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBhY3RpdmVEb3Q9e3tcclxuICAgICAgICAgICAgICAgIHI6IDUsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENoYXJ0VG9vbHRpcCBjb250ZW50PXs8Q2hhcnRUb29sdGlwQ29udGVudCAvPn0gLz5cclxuICAgICAgICAgIDwvTGluZUNoYXJ0PlxyXG4gICAgICAgIDwvQ2hhcnRDb250YWluZXI+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKVxyXG59XHJcbiJdfQ==