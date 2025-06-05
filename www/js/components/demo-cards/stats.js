define(["require", "exports", "react/jsx-runtime", "recharts", "@/components/ui/button", "@/components/ui/card", "@/components/ui/chart"], function (require, exports, jsx_runtime_1, recharts_1, button_1, card_1, chart_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardsStats = CardsStats;
    const data = [
        {
            revenue: 10400,
            subscription: 40,
        },
        {
            revenue: 14405,
            subscription: 90,
        },
        {
            revenue: 9400,
            subscription: 200,
        },
        {
            revenue: 8200,
            subscription: 278,
        },
        {
            revenue: 7000,
            subscription: 89,
        },
        {
            revenue: 9600,
            subscription: 239,
        },
        {
            revenue: 11244,
            subscription: 78,
        },
        {
            revenue: 26475,
            subscription: 89,
        },
    ];
    const chartConfig = {
        revenue: {
            label: "Revenue",
            color: "var(--primary)",
        },
        subscription: {
            label: "Subscriptions",
            color: "var(--primary)",
        },
    };
    function CardsStats() {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2", children: [(0, jsx_runtime_1.jsxs)(card_1.Card, { children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "Total Revenue" }), (0, jsx_runtime_1.jsx)(card_1.CardTitle, { className: "text-3xl", children: "$15,231.89" }), (0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "+20.1% from last month" })] }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { className: "pb-0", children: (0, jsx_runtime_1.jsx)(chart_1.ChartContainer, { config: chartConfig, className: "h-[80px] w-full", children: (0, jsx_runtime_1.jsx)(recharts_1.LineChart, { data: data, margin: {
                                        top: 5,
                                        right: 10,
                                        left: 10,
                                        bottom: 0,
                                    }, children: (0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", strokeWidth: 2, dataKey: "revenue", stroke: "var(--color-revenue)", activeDot: {
                                            r: 6,
                                        } }) }) }) })] }), (0, jsx_runtime_1.jsxs)(card_1.Card, { className: "pb-0 lg:hidden xl:flex", children: [(0, jsx_runtime_1.jsxs)(card_1.CardHeader, { children: [(0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "Subscriptions" }), (0, jsx_runtime_1.jsx)(card_1.CardTitle, { className: "text-3xl", children: "+2,350" }), (0, jsx_runtime_1.jsx)(card_1.CardDescription, { children: "+180.1% from last month" }), (0, jsx_runtime_1.jsx)(card_1.CardAction, { children: (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "ghost", size: "sm", children: "View More" }) })] }), (0, jsx_runtime_1.jsx)(card_1.CardContent, { className: "mt-auto max-h-[124px] flex-1 p-0", children: (0, jsx_runtime_1.jsx)(chart_1.ChartContainer, { config: chartConfig, className: "size-full", children: (0, jsx_runtime_1.jsx)(recharts_1.AreaChart, { data: data, margin: {
                                        left: 0,
                                        right: 0,
                                    }, children: (0, jsx_runtime_1.jsx)(recharts_1.Area, { dataKey: "subscription", fill: "var(--color-subscription)", fillOpacity: 0.05, stroke: "var(--color-subscription)", strokeWidth: 2, type: "monotone" }) }) }) })] })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWNhcmRzL3N0YXRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUE2RGIsZ0NBbUVDO0lBakhELE1BQU0sSUFBSSxHQUFHO1FBQ1g7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxFQUFFO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sV0FBVyxHQUFHO1FBQ2xCLE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRSxnQkFBZ0I7U0FDeEI7UUFDRCxZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUUsZUFBZTtZQUN0QixLQUFLLEVBQUUsZ0JBQWdCO1NBQ3hCO0tBQ29CLENBQUM7SUFFeEIsU0FBZ0IsVUFBVTtRQUN4QixPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLHlEQUF5RCxhQUN0RSx3QkFBQyxXQUFJLGVBQ0gsd0JBQUMsaUJBQVUsZUFDVCx1QkFBQyxzQkFBZSxnQ0FBZ0MsRUFDaEQsdUJBQUMsZ0JBQVMsSUFBQyxTQUFTLEVBQUMsVUFBVSwyQkFBdUIsRUFDdEQsdUJBQUMsc0JBQWUseUNBQXlDLElBQzlDLEVBQ2IsdUJBQUMsa0JBQVcsSUFBQyxTQUFTLEVBQUMsTUFBTSxZQUMzQix1QkFBQyxzQkFBYyxJQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFDLGlCQUFpQixZQUM5RCx1QkFBQyxvQkFBUyxJQUNSLElBQUksRUFBRSxJQUFJLEVBQ1YsTUFBTSxFQUFFO3dDQUNOLEdBQUcsRUFBRSxDQUFDO3dDQUNOLEtBQUssRUFBRSxFQUFFO3dDQUNULElBQUksRUFBRSxFQUFFO3dDQUNSLE1BQU0sRUFBRSxDQUFDO3FDQUNWLFlBRUQsdUJBQUMsZUFBSSxJQUNILElBQUksRUFBQyxVQUFVLEVBQ2YsV0FBVyxFQUFFLENBQUMsRUFDZCxPQUFPLEVBQUMsU0FBUyxFQUNqQixNQUFNLEVBQUMsc0JBQXNCLEVBQzdCLFNBQVMsRUFBRTs0Q0FDVCxDQUFDLEVBQUUsQ0FBQzt5Q0FDTCxHQUNELEdBQ1EsR0FDRyxHQUNMLElBQ1QsRUFDUCx3QkFBQyxXQUFJLElBQUMsU0FBUyxFQUFDLHdCQUF3QixhQUN0Qyx3QkFBQyxpQkFBVSxlQUNULHVCQUFDLHNCQUFlLGdDQUFnQyxFQUNoRCx1QkFBQyxnQkFBUyxJQUFDLFNBQVMsRUFBQyxVQUFVLHVCQUFtQixFQUNsRCx1QkFBQyxzQkFBZSwwQ0FBMEMsRUFDMUQsdUJBQUMsaUJBQVUsY0FDVCx1QkFBQyxlQUFNLElBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsSUFBSSwwQkFFeEIsR0FDRSxJQUNGLEVBQ2IsdUJBQUMsa0JBQVcsSUFBQyxTQUFTLEVBQUMsa0NBQWtDLFlBQ3ZELHVCQUFDLHNCQUFjLElBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsV0FBVyxZQUN4RCx1QkFBQyxvQkFBUyxJQUNSLElBQUksRUFBRSxJQUFJLEVBQ1YsTUFBTSxFQUFFO3dDQUNOLElBQUksRUFBRSxDQUFDO3dDQUNQLEtBQUssRUFBRSxDQUFDO3FDQUNULFlBRUQsdUJBQUMsZUFBSSxJQUNILE9BQU8sRUFBQyxjQUFjLEVBQ3RCLElBQUksRUFBQywyQkFBMkIsRUFDaEMsV0FBVyxFQUFFLElBQUksRUFDakIsTUFBTSxFQUFDLDJCQUEyQixFQUNsQyxXQUFXLEVBQUUsQ0FBQyxFQUNkLElBQUksRUFBQyxVQUFVLEdBQ2YsR0FDUSxHQUNHLEdBQ0wsSUFDVCxJQUNILENBQ1AsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQXJlYSwgQXJlYUNoYXJ0LCBMaW5lLCBMaW5lQ2hhcnQgfSBmcm9tIFwicmVjaGFydHNcIjtcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRBY3Rpb24sXG4gIENhcmRDb250ZW50LFxuICBDYXJkRGVzY3JpcHRpb24sXG4gIENhcmRIZWFkZXIsXG4gIENhcmRUaXRsZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XG5pbXBvcnQgeyBDaGFydENvbmZpZywgQ2hhcnRDb250YWluZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NoYXJ0XCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICByZXZlbnVlOiAxMDQwMCxcbiAgICBzdWJzY3JpcHRpb246IDQwLFxuICB9LFxuICB7XG4gICAgcmV2ZW51ZTogMTQ0MDUsXG4gICAgc3Vic2NyaXB0aW9uOiA5MCxcbiAgfSxcbiAge1xuICAgIHJldmVudWU6IDk0MDAsXG4gICAgc3Vic2NyaXB0aW9uOiAyMDAsXG4gIH0sXG4gIHtcbiAgICByZXZlbnVlOiA4MjAwLFxuICAgIHN1YnNjcmlwdGlvbjogMjc4LFxuICB9LFxuICB7XG4gICAgcmV2ZW51ZTogNzAwMCxcbiAgICBzdWJzY3JpcHRpb246IDg5LFxuICB9LFxuICB7XG4gICAgcmV2ZW51ZTogOTYwMCxcbiAgICBzdWJzY3JpcHRpb246IDIzOSxcbiAgfSxcbiAge1xuICAgIHJldmVudWU6IDExMjQ0LFxuICAgIHN1YnNjcmlwdGlvbjogNzgsXG4gIH0sXG4gIHtcbiAgICByZXZlbnVlOiAyNjQ3NSxcbiAgICBzdWJzY3JpcHRpb246IDg5LFxuICB9LFxuXTtcblxuY29uc3QgY2hhcnRDb25maWcgPSB7XG4gIHJldmVudWU6IHtcbiAgICBsYWJlbDogXCJSZXZlbnVlXCIsXG4gICAgY29sb3I6IFwidmFyKC0tcHJpbWFyeSlcIixcbiAgfSxcbiAgc3Vic2NyaXB0aW9uOiB7XG4gICAgbGFiZWw6IFwiU3Vic2NyaXB0aW9uc1wiLFxuICAgIGNvbG9yOiBcInZhcigtLXByaW1hcnkpXCIsXG4gIH0sXG59IHNhdGlzZmllcyBDaGFydENvbmZpZztcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRzU3RhdHMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0xIHhsOmdyaWQtY29scy0yXCI+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmREZXNjcmlwdGlvbj5Ub3RhbCBSZXZlbnVlPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPiQxNSwyMzEuODk8L0NhcmRUaXRsZT5cbiAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPisyMC4xJSBmcm9tIGxhc3QgbW9udGg8L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicGItMFwiPlxuICAgICAgICAgIDxDaGFydENvbnRhaW5lciBjb25maWc9e2NoYXJ0Q29uZmlnfSBjbGFzc05hbWU9XCJoLVs4MHB4XSB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxMaW5lQ2hhcnRcbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgbWFyZ2luPXt7XG4gICAgICAgICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5lXG4gICAgICAgICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICBkYXRhS2V5PVwicmV2ZW51ZVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwidmFyKC0tY29sb3ItcmV2ZW51ZSlcIlxuICAgICAgICAgICAgICAgIGFjdGl2ZURvdD17e1xuICAgICAgICAgICAgICAgICAgcjogNixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XG4gICAgICAgICAgPC9DaGFydENvbnRhaW5lcj5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInBiLTAgbGc6aGlkZGVuIHhsOmZsZXhcIj5cbiAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmREZXNjcmlwdGlvbj5TdWJzY3JpcHRpb25zPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPisyLDM1MDwvQ2FyZFRpdGxlPlxuICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+KzE4MC4xJSBmcm9tIGxhc3QgbW9udGg8L0NhcmREZXNjcmlwdGlvbj5cbiAgICAgICAgICA8Q2FyZEFjdGlvbj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImdob3N0XCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgIFZpZXcgTW9yZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkQWN0aW9uPlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJtdC1hdXRvIG1heC1oLVsxMjRweF0gZmxleC0xIHAtMFwiPlxuICAgICAgICAgIDxDaGFydENvbnRhaW5lciBjb25maWc9e2NoYXJ0Q29uZmlnfSBjbGFzc05hbWU9XCJzaXplLWZ1bGxcIj5cbiAgICAgICAgICAgIDxBcmVhQ2hhcnRcbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgbWFyZ2luPXt7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEFyZWFcbiAgICAgICAgICAgICAgICBkYXRhS2V5PVwic3Vic2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tY29sb3Itc3Vic2NyaXB0aW9uKVwiXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9ezAuMDV9XG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwidmFyKC0tY29sb3Itc3Vic2NyaXB0aW9uKVwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQXJlYUNoYXJ0PlxuICAgICAgICAgIDwvQ2hhcnRDb250YWluZXI+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=