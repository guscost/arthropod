define(["require", "exports", "react/jsx-runtime", "@/components/ui/table"], function (require, exports, jsx_runtime_1, table_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TableDemo = TableDemo;
    const invoices = [
        {
            invoice: "INV001",
            paymentStatus: "Paid",
            totalAmount: "$250.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV002",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        },
        {
            invoice: "INV003",
            paymentStatus: "Unpaid",
            totalAmount: "$350.00",
            paymentMethod: "Bank Transfer",
        },
        {
            invoice: "INV004",
            paymentStatus: "Paid",
            totalAmount: "$450.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV005",
            paymentStatus: "Paid",
            totalAmount: "$550.00",
            paymentMethod: "PayPal",
        },
        {
            invoice: "INV006",
            paymentStatus: "Pending",
            totalAmount: "$200.00",
            paymentMethod: "Bank Transfer",
        },
        {
            invoice: "INV007",
            paymentStatus: "Unpaid",
            totalAmount: "$300.00",
            paymentMethod: "Credit Card",
        },
    ];
    function TableDemo() {
        return ((0, jsx_runtime_1.jsxs)(table_1.Table, { children: [(0, jsx_runtime_1.jsx)(table_1.TableCaption, { children: "A list of your recent invoices." }), (0, jsx_runtime_1.jsx)(table_1.TableHeader, { children: (0, jsx_runtime_1.jsxs)(table_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(table_1.TableHead, { className: "w-[100px]", children: "Invoice" }), (0, jsx_runtime_1.jsx)(table_1.TableHead, { children: "Status" }), (0, jsx_runtime_1.jsx)(table_1.TableHead, { children: "Method" }), (0, jsx_runtime_1.jsx)(table_1.TableHead, { className: "text-right", children: "Amount" })] }) }), (0, jsx_runtime_1.jsx)(table_1.TableBody, { children: invoices.map((invoice) => ((0, jsx_runtime_1.jsxs)(table_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(table_1.TableCell, { className: "font-medium", children: invoice.invoice }), (0, jsx_runtime_1.jsx)(table_1.TableCell, { children: invoice.paymentStatus }), (0, jsx_runtime_1.jsx)(table_1.TableCell, { children: invoice.paymentMethod }), (0, jsx_runtime_1.jsx)(table_1.TableCell, { className: "text-right", children: invoice.totalAmount })] }, invoice.invoice))) }), (0, jsx_runtime_1.jsx)(table_1.TableFooter, { children: (0, jsx_runtime_1.jsxs)(table_1.TableRow, { children: [(0, jsx_runtime_1.jsx)(table_1.TableCell, { colSpan: 3, children: "Total" }), (0, jsx_runtime_1.jsx)(table_1.TableCell, { className: "text-right", children: "$2,500.00" })] }) })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RlbW8tdjQvdGFibGUtZGVtby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBd0RBLDhCQThCQztJQTNFRCxNQUFNLFFBQVEsR0FBRztRQUNmO1lBQ0UsT0FBTyxFQUFFLFFBQVE7WUFDakIsYUFBYSxFQUFFLE1BQU07WUFDckIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsYUFBYSxFQUFFLGFBQWE7U0FDN0I7UUFDRDtZQUNFLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLGFBQWEsRUFBRSxRQUFRO1NBQ3hCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsUUFBUTtZQUNqQixhQUFhLEVBQUUsUUFBUTtZQUN2QixXQUFXLEVBQUUsU0FBUztZQUN0QixhQUFhLEVBQUUsZUFBZTtTQUMvQjtRQUNEO1lBQ0UsT0FBTyxFQUFFLFFBQVE7WUFDakIsYUFBYSxFQUFFLE1BQU07WUFDckIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsYUFBYSxFQUFFLGFBQWE7U0FDN0I7UUFDRDtZQUNFLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLGFBQWEsRUFBRSxRQUFRO1NBQ3hCO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsUUFBUTtZQUNqQixhQUFhLEVBQUUsU0FBUztZQUN4QixXQUFXLEVBQUUsU0FBUztZQUN0QixhQUFhLEVBQUUsZUFBZTtTQUMvQjtRQUNEO1lBQ0UsT0FBTyxFQUFFLFFBQVE7WUFDakIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsYUFBYSxFQUFFLGFBQWE7U0FDN0I7S0FDRixDQUFDO0lBRUYsU0FBZ0IsU0FBUztRQUN2QixPQUFPLENBQ0wsd0JBQUMsYUFBSyxlQUNKLHVCQUFDLG9CQUFZLGtEQUErQyxFQUM1RCx1QkFBQyxtQkFBVyxjQUNWLHdCQUFDLGdCQUFRLGVBQ1AsdUJBQUMsaUJBQVMsSUFBQyxTQUFTLEVBQUMsV0FBVyx3QkFBb0IsRUFDcEQsdUJBQUMsaUJBQVMseUJBQW1CLEVBQzdCLHVCQUFDLGlCQUFTLHlCQUFtQixFQUM3Qix1QkFBQyxpQkFBUyxJQUFDLFNBQVMsRUFBQyxZQUFZLHVCQUFtQixJQUMzQyxHQUNDLEVBQ2QsdUJBQUMsaUJBQVMsY0FDUCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUN6Qix3QkFBQyxnQkFBUSxlQUNQLHVCQUFDLGlCQUFTLElBQUMsU0FBUyxFQUFDLGFBQWEsWUFBRSxPQUFPLENBQUMsT0FBTyxHQUFhLEVBQ2hFLHVCQUFDLGlCQUFTLGNBQUUsT0FBTyxDQUFDLGFBQWEsR0FBYSxFQUM5Qyx1QkFBQyxpQkFBUyxjQUFFLE9BQU8sQ0FBQyxhQUFhLEdBQWEsRUFDOUMsdUJBQUMsaUJBQVMsSUFBQyxTQUFTLEVBQUMsWUFBWSxZQUFFLE9BQU8sQ0FBQyxXQUFXLEdBQWEsS0FKdEQsT0FBTyxDQUFDLE9BQU8sQ0FLbkIsQ0FDWixDQUFDLEdBQ1EsRUFDWix1QkFBQyxtQkFBVyxjQUNWLHdCQUFDLGdCQUFRLGVBQ1AsdUJBQUMsaUJBQVMsSUFBQyxPQUFPLEVBQUUsQ0FBQyxzQkFBbUIsRUFDeEMsdUJBQUMsaUJBQVMsSUFBQyxTQUFTLEVBQUMsWUFBWSwwQkFBc0IsSUFDOUMsR0FDQyxJQUNSLENBQ1QsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBUYWJsZSxcbiAgVGFibGVCb2R5LFxuICBUYWJsZUNhcHRpb24sXG4gIFRhYmxlQ2VsbCxcbiAgVGFibGVGb290ZXIsXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVIZWFkZXIsXG4gIFRhYmxlUm93LFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RhYmxlXCI7XG5cbmNvbnN0IGludm9pY2VzID0gW1xuICB7XG4gICAgaW52b2ljZTogXCJJTlYwMDFcIixcbiAgICBwYXltZW50U3RhdHVzOiBcIlBhaWRcIixcbiAgICB0b3RhbEFtb3VudDogXCIkMjUwLjAwXCIsXG4gICAgcGF5bWVudE1ldGhvZDogXCJDcmVkaXQgQ2FyZFwiLFxuICB9LFxuICB7XG4gICAgaW52b2ljZTogXCJJTlYwMDJcIixcbiAgICBwYXltZW50U3RhdHVzOiBcIlBlbmRpbmdcIixcbiAgICB0b3RhbEFtb3VudDogXCIkMTUwLjAwXCIsXG4gICAgcGF5bWVudE1ldGhvZDogXCJQYXlQYWxcIixcbiAgfSxcbiAge1xuICAgIGludm9pY2U6IFwiSU5WMDAzXCIsXG4gICAgcGF5bWVudFN0YXR1czogXCJVbnBhaWRcIixcbiAgICB0b3RhbEFtb3VudDogXCIkMzUwLjAwXCIsXG4gICAgcGF5bWVudE1ldGhvZDogXCJCYW5rIFRyYW5zZmVyXCIsXG4gIH0sXG4gIHtcbiAgICBpbnZvaWNlOiBcIklOVjAwNFwiLFxuICAgIHBheW1lbnRTdGF0dXM6IFwiUGFpZFwiLFxuICAgIHRvdGFsQW1vdW50OiBcIiQ0NTAuMDBcIixcbiAgICBwYXltZW50TWV0aG9kOiBcIkNyZWRpdCBDYXJkXCIsXG4gIH0sXG4gIHtcbiAgICBpbnZvaWNlOiBcIklOVjAwNVwiLFxuICAgIHBheW1lbnRTdGF0dXM6IFwiUGFpZFwiLFxuICAgIHRvdGFsQW1vdW50OiBcIiQ1NTAuMDBcIixcbiAgICBwYXltZW50TWV0aG9kOiBcIlBheVBhbFwiLFxuICB9LFxuICB7XG4gICAgaW52b2ljZTogXCJJTlYwMDZcIixcbiAgICBwYXltZW50U3RhdHVzOiBcIlBlbmRpbmdcIixcbiAgICB0b3RhbEFtb3VudDogXCIkMjAwLjAwXCIsXG4gICAgcGF5bWVudE1ldGhvZDogXCJCYW5rIFRyYW5zZmVyXCIsXG4gIH0sXG4gIHtcbiAgICBpbnZvaWNlOiBcIklOVjAwN1wiLFxuICAgIHBheW1lbnRTdGF0dXM6IFwiVW5wYWlkXCIsXG4gICAgdG90YWxBbW91bnQ6IFwiJDMwMC4wMFwiLFxuICAgIHBheW1lbnRNZXRob2Q6IFwiQ3JlZGl0IENhcmRcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBUYWJsZURlbW8oKSB7XG4gIHJldHVybiAoXG4gICAgPFRhYmxlPlxuICAgICAgPFRhYmxlQ2FwdGlvbj5BIGxpc3Qgb2YgeW91ciByZWNlbnQgaW52b2ljZXMuPC9UYWJsZUNhcHRpb24+XG4gICAgICA8VGFibGVIZWFkZXI+XG4gICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVIZWFkIGNsYXNzTmFtZT1cInctWzEwMHB4XVwiPkludm9pY2U8L1RhYmxlSGVhZD5cbiAgICAgICAgICA8VGFibGVIZWFkPlN0YXR1czwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+TWV0aG9kPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlSGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+QW1vdW50PC9UYWJsZUhlYWQ+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICA8L1RhYmxlSGVhZGVyPlxuICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAge2ludm9pY2VzLm1hcCgoaW52b2ljZSkgPT4gKFxuICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2ludm9pY2UuaW52b2ljZX0+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e2ludm9pY2UuaW52b2ljZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+e2ludm9pY2UucGF5bWVudFN0YXR1c308L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+e2ludm9pY2UucGF5bWVudE1ldGhvZH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPntpbnZvaWNlLnRvdGFsQW1vdW50fTwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICkpfVxuICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICA8VGFibGVGb290ZXI+XG4gICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICA8VGFibGVDZWxsIGNvbFNwYW49ezN9PlRvdGFsPC9UYWJsZUNlbGw+XG4gICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+JDIsNTAwLjAwPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICA8L1RhYmxlRm9vdGVyPlxuICAgIDwvVGFibGU+XG4gICk7XG59XG4iXX0=