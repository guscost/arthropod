define(["require", "exports", "react/jsx-runtime", "recharts", "@/components/ui/card", "@/components/ui/chart"], function (require, exports, jsx_runtime_1, recharts_1, card_1, chart_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardsMetric = CardsMetric;
    const data = [
        {
            average: 400,
            today: 240,
        },
        {
            average: 300,
            today: 139,
        },
        {
            average: 200,
            today: 980,
        },
        {
            average: 278,
            today: 390,
        },
        {
            average: 189,
            today: 480,
        },
        {
            average: 239,
            today: 380,
        },
        {
            average: 349,
            today: 430,
        },
    ];
    const chartConfig = {
        today: {
            label: "Today",
            color: "hsl(var(--primary))",
        },
        average: {
            label: "Average",
            color: "hsl(var(--primary))",
        },
    };
    function CardsMetric() {
        return ((0, jsx_runtime_1.jsxs)(card_1.Card, { children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)(card_1.CardTitle, { children: "Exercise Minutes" }), (0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "Your exercise minutes are ahead of where you normally are." })] }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { className: "pb-4", children: (0, jsx_runtime_1.jsx)(chart_1.ChartContainer, { config: chartConfig, className: "w-full md:h-[200px]", children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { data: data, margin: {
                                top: 5,
                                right: 10,
                                left: 10,
                                bottom: 0,
                            }, children: [(0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", strokeWidth: 2, dataKey: "average", stroke: "var(--color-average)", strokeOpacity: 0.5, activeDot: {
                                        r: 6,
                                        fill: "var(--color-average)",
                                    } }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", dataKey: "today", strokeWidth: 2, stroke: "var(--color-today)", activeDot: {
                                        r: 8,
                                        style: { fill: "var(--color-today)" },
                                    } }), (0, jsx_runtime_1.jsx)(chart_1.ChartTooltip, { content: (0, jsx_runtime_1.jsx)(chart_1.ChartTooltipContent, {}) })] }) }) })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0cmljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZGVtby1jYXJkcy9tZXRyaWMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFBQSxZQUFZLENBQUM7OztJQTREYixrQ0ErQ0M7SUF6RkQsTUFBTSxJQUFJLEdBQUc7UUFDWDtZQUNFLE9BQU8sRUFBRSxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUc7U0FDWDtRQUNEO1lBQ0UsT0FBTyxFQUFFLEdBQUc7WUFDWixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHO1NBQ1g7UUFDRDtZQUNFLE9BQU8sRUFBRSxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUc7U0FDWDtRQUNEO1lBQ0UsT0FBTyxFQUFFLEdBQUc7WUFDWixLQUFLLEVBQUUsR0FBRztTQUNYO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsR0FBRztZQUNaLEtBQUssRUFBRSxHQUFHO1NBQ1g7UUFDRDtZQUNFLE9BQU8sRUFBRSxHQUFHO1lBQ1osS0FBSyxFQUFFLEdBQUc7U0FDWDtLQUNGLENBQUM7SUFFRixNQUFNLFdBQVcsR0FBRztRQUNsQixLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsT0FBTztZQUNkLEtBQUssRUFBRSxxQkFBcUI7U0FDN0I7UUFDRCxPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUscUJBQXFCO1NBQzdCO0tBQ29CLENBQUM7SUFFeEIsU0FBZ0IsV0FBVztRQUN6QixPQUFPLENBQ0wsd0JBQUMsV0FBSSxlQUNILHdCQUFDLGlCQUFVLGVBQ1QsdUJBQUMsZ0JBQVMsbUNBQTZCLEVBQ3ZDLHVCQUFDLHNCQUFlLDZFQUVFLElBQ1AsRUFDYix1QkFBQyxrQkFBVyxJQUFDLFNBQVMsRUFBQyxNQUFNLFlBQzNCLHVCQUFDLHNCQUFjLElBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMscUJBQXFCLFlBQ2xFLHdCQUFDLG9CQUFTLElBQ1IsSUFBSSxFQUFFLElBQUksRUFDVixNQUFNLEVBQUU7Z0NBQ04sR0FBRyxFQUFFLENBQUM7Z0NBQ04sS0FBSyxFQUFFLEVBQUU7Z0NBQ1QsSUFBSSxFQUFFLEVBQUU7Z0NBQ1IsTUFBTSxFQUFFLENBQUM7NkJBQ1YsYUFFRCx1QkFBQyxlQUFJLElBQ0gsSUFBSSxFQUFDLFVBQVUsRUFDZixXQUFXLEVBQUUsQ0FBQyxFQUNkLE9BQU8sRUFBQyxTQUFTLEVBQ2pCLE1BQU0sRUFBQyxzQkFBc0IsRUFDN0IsYUFBYSxFQUFFLEdBQUcsRUFDbEIsU0FBUyxFQUFFO3dDQUNULENBQUMsRUFBRSxDQUFDO3dDQUNKLElBQUksRUFBRSxzQkFBc0I7cUNBQzdCLEdBQ0QsRUFDRix1QkFBQyxlQUFJLElBQ0gsSUFBSSxFQUFDLFVBQVUsRUFDZixPQUFPLEVBQUMsT0FBTyxFQUNmLFdBQVcsRUFBRSxDQUFDLEVBQ2QsTUFBTSxFQUFDLG9CQUFvQixFQUMzQixTQUFTLEVBQUU7d0NBQ1QsQ0FBQyxFQUFFLENBQUM7d0NBQ0osS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO3FDQUN0QyxHQUNELEVBQ0YsdUJBQUMsb0JBQVksSUFBQyxPQUFPLEVBQUUsdUJBQUMsMkJBQW1CLEtBQUcsR0FBSSxJQUN4QyxHQUNHLEdBQ0wsSUFDVCxDQUNSLENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IExpbmUsIExpbmVDaGFydCB9IGZyb20gXCJyZWNoYXJ0c1wiO1xuXG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbiAgQ2FyZERlc2NyaXB0aW9uLFxuICBDYXJkSGVhZGVyLFxuICBDYXJkVGl0bGUsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuaW1wb3J0IHtcbiAgQ2hhcnRDb25maWcsXG4gIENoYXJ0Q29udGFpbmVyLFxuICBDaGFydFRvb2x0aXAsXG4gIENoYXJ0VG9vbHRpcENvbnRlbnQsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2hhcnRcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGF2ZXJhZ2U6IDQwMCxcbiAgICB0b2RheTogMjQwLFxuICB9LFxuICB7XG4gICAgYXZlcmFnZTogMzAwLFxuICAgIHRvZGF5OiAxMzksXG4gIH0sXG4gIHtcbiAgICBhdmVyYWdlOiAyMDAsXG4gICAgdG9kYXk6IDk4MCxcbiAgfSxcbiAge1xuICAgIGF2ZXJhZ2U6IDI3OCxcbiAgICB0b2RheTogMzkwLFxuICB9LFxuICB7XG4gICAgYXZlcmFnZTogMTg5LFxuICAgIHRvZGF5OiA0ODAsXG4gIH0sXG4gIHtcbiAgICBhdmVyYWdlOiAyMzksXG4gICAgdG9kYXk6IDM4MCxcbiAgfSxcbiAge1xuICAgIGF2ZXJhZ2U6IDM0OSxcbiAgICB0b2RheTogNDMwLFxuICB9LFxuXTtcblxuY29uc3QgY2hhcnRDb25maWcgPSB7XG4gIHRvZGF5OiB7XG4gICAgbGFiZWw6IFwiVG9kYXlcIixcbiAgICBjb2xvcjogXCJoc2wodmFyKC0tcHJpbWFyeSkpXCIsXG4gIH0sXG4gIGF2ZXJhZ2U6IHtcbiAgICBsYWJlbDogXCJBdmVyYWdlXCIsXG4gICAgY29sb3I6IFwiaHNsKHZhcigtLXByaW1hcnkpKVwiLFxuICB9LFxufSBzYXRpc2ZpZXMgQ2hhcnRDb25maWc7XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkc01ldHJpYygpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZFRpdGxlPkV4ZXJjaXNlIE1pbnV0ZXM8L0NhcmRUaXRsZT5cbiAgICAgICAgPENhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgICBZb3VyIGV4ZXJjaXNlIG1pbnV0ZXMgYXJlIGFoZWFkIG9mIHdoZXJlIHlvdSBub3JtYWxseSBhcmUuXG4gICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxuICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInBiLTRcIj5cbiAgICAgICAgPENoYXJ0Q29udGFpbmVyIGNvbmZpZz17Y2hhcnRDb25maWd9IGNsYXNzTmFtZT1cInctZnVsbCBtZDpoLVsyMDBweF1cIj5cbiAgICAgICAgICA8TGluZUNoYXJ0XG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgbWFyZ2luPXt7XG4gICAgICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICAgICAgcmlnaHQ6IDEwLFxuICAgICAgICAgICAgICBsZWZ0OiAxMCxcbiAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluZVxuICAgICAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgZGF0YUtleT1cImF2ZXJhZ2VcIlxuICAgICAgICAgICAgICBzdHJva2U9XCJ2YXIoLS1jb2xvci1hdmVyYWdlKVwiXG4gICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk9ezAuNX1cbiAgICAgICAgICAgICAgYWN0aXZlRG90PXt7XG4gICAgICAgICAgICAgICAgcjogNixcbiAgICAgICAgICAgICAgICBmaWxsOiBcInZhcigtLWNvbG9yLWF2ZXJhZ2UpXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPExpbmVcbiAgICAgICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcbiAgICAgICAgICAgICAgZGF0YUtleT1cInRvZGF5XCJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgIHN0cm9rZT1cInZhcigtLWNvbG9yLXRvZGF5KVwiXG4gICAgICAgICAgICAgIGFjdGl2ZURvdD17e1xuICAgICAgICAgICAgICAgIHI6IDgsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgZmlsbDogXCJ2YXIoLS1jb2xvci10b2RheSlcIiB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDaGFydFRvb2x0aXAgY29udGVudD17PENoYXJ0VG9vbHRpcENvbnRlbnQgLz59IC8+XG4gICAgICAgICAgPC9MaW5lQ2hhcnQ+XG4gICAgICAgIDwvQ2hhcnRDb250YWluZXI+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiJdfQ==