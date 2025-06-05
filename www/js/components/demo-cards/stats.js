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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWNhcmRzL3N0YXRzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFBOzs7SUE2RFosZ0NBbUVDO0lBakhELE1BQU0sSUFBSSxHQUFHO1FBQ1g7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsSUFBSTtZQUNiLFlBQVksRUFBRSxHQUFHO1NBQ2xCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxFQUFFO1NBQ2pCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLFlBQVksRUFBRSxFQUFFO1NBQ2pCO0tBQ0YsQ0FBQTtJQUVELE1BQU0sV0FBVyxHQUFHO1FBQ2xCLE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRSxnQkFBZ0I7U0FDeEI7UUFDRCxZQUFZLEVBQUU7WUFDWixLQUFLLEVBQUUsZUFBZTtZQUN0QixLQUFLLEVBQUUsZ0JBQWdCO1NBQ3hCO0tBQ29CLENBQUE7SUFFdkIsU0FBZ0IsVUFBVTtRQUN4QixPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLHlEQUF5RCxhQUN0RSx3QkFBQyxXQUFJLGVBQ0gsd0JBQUMsaUJBQVUsZUFDVCx1QkFBQyxzQkFBZSxnQ0FBZ0MsRUFDaEQsdUJBQUMsZ0JBQVMsSUFBQyxTQUFTLEVBQUMsVUFBVSwyQkFBdUIsRUFDdEQsdUJBQUMsc0JBQWUseUNBQXlDLElBQzlDLEVBQ2IsdUJBQUMsa0JBQVcsSUFBQyxTQUFTLEVBQUMsTUFBTSxZQUMzQix1QkFBQyxzQkFBYyxJQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFDLGlCQUFpQixZQUM5RCx1QkFBQyxvQkFBUyxJQUNSLElBQUksRUFBRSxJQUFJLEVBQ1YsTUFBTSxFQUFFO3dDQUNOLEdBQUcsRUFBRSxDQUFDO3dDQUNOLEtBQUssRUFBRSxFQUFFO3dDQUNULElBQUksRUFBRSxFQUFFO3dDQUNSLE1BQU0sRUFBRSxDQUFDO3FDQUNWLFlBRUQsdUJBQUMsZUFBSSxJQUNILElBQUksRUFBQyxVQUFVLEVBQ2YsV0FBVyxFQUFFLENBQUMsRUFDZCxPQUFPLEVBQUMsU0FBUyxFQUNqQixNQUFNLEVBQUMsc0JBQXNCLEVBQzdCLFNBQVMsRUFBRTs0Q0FDVCxDQUFDLEVBQUUsQ0FBQzt5Q0FDTCxHQUNELEdBQ1EsR0FDRyxHQUNMLElBQ1QsRUFDUCx3QkFBQyxXQUFJLElBQUMsU0FBUyxFQUFDLHdCQUF3QixhQUN0Qyx3QkFBQyxpQkFBVSxlQUNULHVCQUFDLHNCQUFlLGdDQUFnQyxFQUNoRCx1QkFBQyxnQkFBUyxJQUFDLFNBQVMsRUFBQyxVQUFVLHVCQUFtQixFQUNsRCx1QkFBQyxzQkFBZSwwQ0FBMEMsRUFDMUQsdUJBQUMsaUJBQVUsY0FDVCx1QkFBQyxlQUFNLElBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsSUFBSSwwQkFFeEIsR0FDRSxJQUNGLEVBQ2IsdUJBQUMsa0JBQVcsSUFBQyxTQUFTLEVBQUMsa0NBQWtDLFlBQ3ZELHVCQUFDLHNCQUFjLElBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUMsV0FBVyxZQUN4RCx1QkFBQyxvQkFBUyxJQUNSLElBQUksRUFBRSxJQUFJLEVBQ1YsTUFBTSxFQUFFO3dDQUNOLElBQUksRUFBRSxDQUFDO3dDQUNQLEtBQUssRUFBRSxDQUFDO3FDQUNULFlBRUQsdUJBQUMsZUFBSSxJQUNILE9BQU8sRUFBQyxjQUFjLEVBQ3RCLElBQUksRUFBQywyQkFBMkIsRUFDaEMsV0FBVyxFQUFFLElBQUksRUFDakIsTUFBTSxFQUFDLDJCQUEyQixFQUNsQyxXQUFXLEVBQUUsQ0FBQyxFQUNkLElBQUksRUFBQyxVQUFVLEdBQ2YsR0FDUSxHQUNHLEdBQ0wsSUFDVCxJQUNILENBQ1AsQ0FBQTtJQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgQXJlYSwgQXJlYUNoYXJ0LCBMaW5lLCBMaW5lQ2hhcnQgfSBmcm9tIFwicmVjaGFydHNcIlxyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEFjdGlvbixcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkRGVzY3JpcHRpb24sXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkVGl0bGUsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcclxuaW1wb3J0IHsgQ2hhcnRDb25maWcsIENoYXJ0Q29udGFpbmVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jaGFydFwiXHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIHJldmVudWU6IDEwNDAwLFxyXG4gICAgc3Vic2NyaXB0aW9uOiA0MCxcclxuICB9LFxyXG4gIHtcclxuICAgIHJldmVudWU6IDE0NDA1LFxyXG4gICAgc3Vic2NyaXB0aW9uOiA5MCxcclxuICB9LFxyXG4gIHtcclxuICAgIHJldmVudWU6IDk0MDAsXHJcbiAgICBzdWJzY3JpcHRpb246IDIwMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHJldmVudWU6IDgyMDAsXHJcbiAgICBzdWJzY3JpcHRpb246IDI3OCxcclxuICB9LFxyXG4gIHtcclxuICAgIHJldmVudWU6IDcwMDAsXHJcbiAgICBzdWJzY3JpcHRpb246IDg5LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcmV2ZW51ZTogOTYwMCxcclxuICAgIHN1YnNjcmlwdGlvbjogMjM5LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcmV2ZW51ZTogMTEyNDQsXHJcbiAgICBzdWJzY3JpcHRpb246IDc4LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcmV2ZW51ZTogMjY0NzUsXHJcbiAgICBzdWJzY3JpcHRpb246IDg5LFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IGNoYXJ0Q29uZmlnID0ge1xyXG4gIHJldmVudWU6IHtcclxuICAgIGxhYmVsOiBcIlJldmVudWVcIixcclxuICAgIGNvbG9yOiBcInZhcigtLXByaW1hcnkpXCIsXHJcbiAgfSxcclxuICBzdWJzY3JpcHRpb246IHtcclxuICAgIGxhYmVsOiBcIlN1YnNjcmlwdGlvbnNcIixcclxuICAgIGNvbG9yOiBcInZhcigtLXByaW1hcnkpXCIsXHJcbiAgfSxcclxufSBzYXRpc2ZpZXMgQ2hhcnRDb25maWdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJkc1N0YXRzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTEgeGw6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPlRvdGFsIFJldmVudWU8L0NhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj4kMTUsMjMxLjg5PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPisyMC4xJSBmcm9tIGxhc3QgbW9udGg8L0NhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInBiLTBcIj5cclxuICAgICAgICAgIDxDaGFydENvbnRhaW5lciBjb25maWc9e2NoYXJ0Q29uZmlnfSBjbGFzc05hbWU9XCJoLVs4MHB4XSB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPExpbmVDaGFydFxyXG4gICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgbWFyZ2luPXt7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUsXHJcbiAgICAgICAgICAgICAgICByaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMCxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpbmVcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJtb25vdG9uZVwiXHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgIGRhdGFLZXk9XCJyZXZlbnVlXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZT1cInZhcigtLWNvbG9yLXJldmVudWUpXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZURvdD17e1xyXG4gICAgICAgICAgICAgICAgICByOiA2LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpbmVDaGFydD5cclxuICAgICAgICAgIDwvQ2hhcnRDb250YWluZXI+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJwYi0wIGxnOmhpZGRlbiB4bDpmbGV4XCI+XHJcbiAgICAgICAgPENhcmRIZWFkZXI+XHJcbiAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uPlN1YnNjcmlwdGlvbnM8L0NhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj4rMiwzNTA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24+KzE4MC4xJSBmcm9tIGxhc3QgbW9udGg8L0NhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDxDYXJkQWN0aW9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiIHNpemU9XCJzbVwiPlxyXG4gICAgICAgICAgICAgIFZpZXcgTW9yZVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQ2FyZEFjdGlvbj5cclxuICAgICAgICA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cIm10LWF1dG8gbWF4LWgtWzEyNHB4XSBmbGV4LTEgcC0wXCI+XHJcbiAgICAgICAgICA8Q2hhcnRDb250YWluZXIgY29uZmlnPXtjaGFydENvbmZpZ30gY2xhc3NOYW1lPVwic2l6ZS1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxBcmVhQ2hhcnRcclxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgIG1hcmdpbj17e1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QXJlYVxyXG4gICAgICAgICAgICAgICAgZGF0YUtleT1cInN1YnNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tY29sb3Itc3Vic2NyaXB0aW9uKVwiXHJcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eT17MC4wNX1cclxuICAgICAgICAgICAgICAgIHN0cm9rZT1cInZhcigtLWNvbG9yLXN1YnNjcmlwdGlvbilcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibW9ub3RvbmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQXJlYUNoYXJ0PlxyXG4gICAgICAgICAgPC9DaGFydENvbnRhaW5lcj5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl19