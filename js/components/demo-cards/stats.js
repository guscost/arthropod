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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWNhcmRzL3N0YXRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUE2RGIsZ0NBbUVDO0lBakhELE1BQU0sSUFBSSxHQUFHO1FBQ1g7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxFQUFFO1NBQ2pCO0tBQ0YsQ0FBQztJQUVGLE1BQU0sV0FBVyxHQUFHO1FBQ2xCLE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRSxnQkFBZ0I7U0FDeEI7UUFDRCxZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUUsZUFBZTtZQUN0QixLQUFLLEVBQUUsZ0JBQWdCO1NBQ3hCO0tBQ29CLENBQUM7SUFFeEIsU0FBZ0IsVUFBVTtRQUN4QixPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLHlEQUF5RCxhQUN0RSx3QkFBQyxXQUFJLGVBQ0gsd0JBQUMsaUJBQVUsZUFDVCx1QkFBQyxzQkFBZSxnQ0FBZ0MsRUFDaEQsdUJBQUMsZ0JBQVMsSUFBQyxTQUFTLEVBQUMsVUFBVSwyQkFBdUIsRUFDdEQsdUJBQUMsc0JBQWUseUNBQXlDLElBQzlDLEVBQ2IsdUJBQUMsa0JBQVcsSUFBQyxTQUFTLEVBQUMsTUFBTSxZQUMzQix1QkFBQyxzQkFBYyxJQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFDLGlCQUFpQixZQUM5RCx1QkFBQyxvQkFBUyxJQUNSLElBQUksRUFBRSxJQUFJLEVBQ1YsTUFBTSxFQUFFO3dDQUNOLEdBQUcsRUFBRSxDQUFDO3dDQUNOLEtBQUssRUFBRSxFQUFFO3dDQUNULElBQUksRUFBRSxFQUFFO3dDQUNSLE1BQU0sRUFBRSxDQUFDO3FDQUNWLFlBRUQsdUJBQUMsZUFBSSxJQUNILElBQUksRUFBQyxVQUFVLEVBQ2YsV0FBVyxFQUFFLENBQUMsRUFDZCxPQUFPLEVBQUMsU0FBUyxFQUNqQixNQUFNLEVBQUMsc0JBQXNCLEVBQzdCLFNBQVMsRUFBRTs0Q0FDVCxDQUFDLEVBQUUsQ0FBQzt5Q0FDTCxHQUNELEdBQ1EsR0FDRyxHQUNMLElBQ1QsRUFDUCx3QkFBQyxXQUFJLElBQUMsU0FBUyxFQUFDLHdCQUF3QixhQUN0Qyx3QkFBQyxpQkFBVSxlQUNULHVCQUFDLHNCQUFlLGdDQUFnQyxFQUNoRCx1QkFBQyxnQkFBUyxJQUFDLFNBQVMsRUFBQyxVQUFVLHVCQUFtQixFQUNsRCx1QkFBQyxzQkFBZSwwQ0FBMEMsRUFDMUQsdUJBQUMsaUJBQVUsY0FDVCx1QkFBQyxlQUFNLElBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsSUFBSSwwQkFFeEIsR0FDRSxJQUNGLEVBQ2IsdUJBQUMsa0JBQVcsSUFBQyxTQUFTLEVBQUMsa0NBQWtDLFlBQ3ZELHVCQUFDLHNCQUFjLElBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsV0FBVyxZQUN4RCx1QkFBQyxvQkFBUyxJQUNSLElBQUksRUFBRSxJQUFJLEVBQ1YsTUFBTSxFQUFFO3dDQUNOLElBQUksRUFBRSxDQUFDO3dDQUNQLEtBQUssRUFBRSxDQUFDO3FDQUNULFlBRUQsdUJBQUMsZUFBSSxJQUNILE9BQU8sRUFBQyxjQUFjLEVBQ3RCLElBQUksRUFBQywyQkFBMkIsRUFDaEMsV0FBVyxFQUFFLElBQUksRUFDakIsTUFBTSxFQUFDLDJCQUEyQixFQUNsQyxXQUFXLEVBQUUsQ0FBQyxFQUNkLElBQUksRUFBQyxVQUFVLEdBQ2YsR0FDUSxHQUNHLEdBQ0wsSUFDVCxJQUNILENBQ1AsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IEFyZWEsIEFyZWFDaGFydCwgTGluZSwgTGluZUNoYXJ0IH0gZnJvbSBcInJlY2hhcnRzXCI7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbixcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkRGVzY3JpcHRpb24sXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkVGl0bGUsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XHJcbmltcG9ydCB7IENoYXJ0Q29uZmlnLCBDaGFydENvbnRhaW5lciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2hhcnRcIjtcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgcmV2ZW51ZTogMTA0MDAsXHJcbiAgICBzdWJzY3JpcHRpb246IDQwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcmV2ZW51ZTogMTQ0MDUsXHJcbiAgICBzdWJzY3JpcHRpb246IDkwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcmV2ZW51ZTogOTQwMCxcclxuICAgIHN1YnNjcmlwdGlvbjogMjAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcmV2ZW51ZTogODIwMCxcclxuICAgIHN1YnNjcmlwdGlvbjogMjc4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcmV2ZW51ZTogNzAwMCxcclxuICAgIHN1YnNjcmlwdGlvbjogODksXHJcbiAgfSxcclxuICB7XHJcbiAgICByZXZlbnVlOiA5NjAwLFxyXG4gICAgc3Vic2NyaXB0aW9uOiAyMzksXHJcbiAgfSxcclxuICB7XHJcbiAgICByZXZlbnVlOiAxMTI0NCxcclxuICAgIHN1YnNjcmlwdGlvbjogNzgsXHJcbiAgfSxcclxuICB7XHJcbiAgICByZXZlbnVlOiAyNjQ3NSxcclxuICAgIHN1YnNjcmlwdGlvbjogODksXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGNoYXJ0Q29uZmlnID0ge1xyXG4gIHJldmVudWU6IHtcclxuICAgIGxhYmVsOiBcIlJldmVudWVcIixcclxuICAgIGNvbG9yOiBcInZhcigtLXByaW1hcnkpXCIsXHJcbiAgfSxcclxuICBzdWJzY3JpcHRpb246IHtcclxuICAgIGxhYmVsOiBcIlN1YnNjcmlwdGlvbnNcIixcclxuICAgIGNvbG9yOiBcInZhcigtLXByaW1hcnkpXCIsXHJcbiAgfSxcclxufSBzYXRpc2ZpZXMgQ2hhcnRDb25maWc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2FyZHNTdGF0cygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0xIHhsOmdyaWQtY29scy0yXCI+XHJcbiAgICAgIDxDYXJkPlxyXG4gICAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPENhcmREZXNjcmlwdGlvbj5Ub3RhbCBSZXZlbnVlPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+JDE1LDIzMS44OTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgPENhcmREZXNjcmlwdGlvbj4rMjAuMSUgZnJvbSBsYXN0IG1vbnRoPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwYi0wXCI+XHJcbiAgICAgICAgICA8Q2hhcnRDb250YWluZXIgY29uZmlnPXtjaGFydENvbmZpZ30gY2xhc3NOYW1lPVwiaC1bODBweF0gdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxMaW5lQ2hhcnRcclxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgIG1hcmdpbj17e1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1LFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogMTAsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxMaW5lXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICBkYXRhS2V5PVwicmV2ZW51ZVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJ2YXIoLS1jb2xvci1yZXZlbnVlKVwiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVEb3Q9e3tcclxuICAgICAgICAgICAgICAgICAgcjogNixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaW5lQ2hhcnQ+XHJcbiAgICAgICAgICA8L0NoYXJ0Q29udGFpbmVyPlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwicGItMCBsZzpoaWRkZW4geGw6ZmxleFwiPlxyXG4gICAgICAgIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgICAgPENhcmREZXNjcmlwdGlvbj5TdWJzY3JpcHRpb25zPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+KzIsMzUwPC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPisxODAuMSUgZnJvbSBsYXN0IG1vbnRoPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8Q2FyZEFjdGlvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBzaXplPVwic21cIj5cclxuICAgICAgICAgICAgICBWaWV3IE1vcmVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0NhcmRBY3Rpb24+XHJcbiAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJtdC1hdXRvIG1heC1oLVsxMjRweF0gZmxleC0xIHAtMFwiPlxyXG4gICAgICAgICAgPENoYXJ0Q29udGFpbmVyIGNvbmZpZz17Y2hhcnRDb25maWd9IGNsYXNzTmFtZT1cInNpemUtZnVsbFwiPlxyXG4gICAgICAgICAgICA8QXJlYUNoYXJ0XHJcbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICBtYXJnaW49e3tcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFyZWFcclxuICAgICAgICAgICAgICAgIGRhdGFLZXk9XCJzdWJzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLWNvbG9yLXN1YnNjcmlwdGlvbilcIlxyXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk9ezAuMDV9XHJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJ2YXIoLS1jb2xvci1zdWJzY3JpcHRpb24pXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0FyZWFDaGFydD5cclxuICAgICAgICAgIDwvQ2hhcnRDb250YWluZXI+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0=