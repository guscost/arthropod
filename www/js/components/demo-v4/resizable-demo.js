define(["require", "exports", "react/jsx-runtime", "@/components/ui/resizable"], function (require, exports, jsx_runtime_1, resizable_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ResizableDemo = ResizableDemo;
    function ResizableDemo() {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex w-full flex-col gap-6", children: [(0, jsx_runtime_1.jsxs)(resizable_1.ResizablePanelGroup, { direction: "horizontal", className: "max-w-md rounded-lg border md:min-w-[450px]", children: [(0, jsx_runtime_1.jsx)(resizable_1.ResizablePanel, { defaultSize: 50, children: (0, jsx_runtime_1.jsx)("div", { className: "flex h-[200px] items-center justify-center p-6", children: (0, jsx_runtime_1.jsx)("span", { className: "font-semibold", children: "One" }) }) }), (0, jsx_runtime_1.jsx)(resizable_1.ResizableHandle, {}), (0, jsx_runtime_1.jsx)(resizable_1.ResizablePanel, { defaultSize: 50, children: (0, jsx_runtime_1.jsxs)(resizable_1.ResizablePanelGroup, { direction: "vertical", children: [(0, jsx_runtime_1.jsx)(resizable_1.ResizablePanel, { defaultSize: 25, children: (0, jsx_runtime_1.jsx)("div", { className: "flex h-full items-center justify-center p-6", children: (0, jsx_runtime_1.jsx)("span", { className: "font-semibold", children: "Two" }) }) }), (0, jsx_runtime_1.jsx)(resizable_1.ResizableHandle, {}), (0, jsx_runtime_1.jsx)(resizable_1.ResizablePanel, { defaultSize: 75, children: (0, jsx_runtime_1.jsx)("div", { className: "flex h-full items-center justify-center p-6", children: (0, jsx_runtime_1.jsx)("span", { className: "font-semibold", children: "Three" }) }) })] }) })] }), (0, jsx_runtime_1.jsxs)(resizable_1.ResizablePanelGroup, { direction: "horizontal", className: "min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]", children: [(0, jsx_runtime_1.jsx)(resizable_1.ResizablePanel, { defaultSize: 25, children: (0, jsx_runtime_1.jsx)("div", { className: "flex h-full items-center justify-center p-6", children: (0, jsx_runtime_1.jsx)("span", { className: "font-semibold", children: "Sidebar" }) }) }), (0, jsx_runtime_1.jsx)(resizable_1.ResizableHandle, { withHandle: true }), (0, jsx_runtime_1.jsx)(resizable_1.ResizablePanel, { defaultSize: 75, children: (0, jsx_runtime_1.jsx)("div", { className: "flex h-full items-center justify-center p-6", children: (0, jsx_runtime_1.jsx)("span", { className: "font-semibold", children: "Content" }) }) })] }), (0, jsx_runtime_1.jsxs)(resizable_1.ResizablePanelGroup, { direction: "vertical", className: "min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]", children: [(0, jsx_runtime_1.jsx)(resizable_1.ResizablePanel, { defaultSize: 25, children: (0, jsx_runtime_1.jsx)("div", { className: "flex h-full items-center justify-center p-6", children: (0, jsx_runtime_1.jsx)("span", { className: "font-semibold", children: "Header" }) }) }), (0, jsx_runtime_1.jsx)(resizable_1.ResizableHandle, {}), (0, jsx_runtime_1.jsx)(resizable_1.ResizablePanel, { defaultSize: 75, children: (0, jsx_runtime_1.jsx)("div", { className: "flex h-full items-center justify-center p-6", children: (0, jsx_runtime_1.jsx)("span", { className: "font-semibold", children: "Content" }) }) })] })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLWRlbW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLXY0L3Jlc2l6YWJsZS1kZW1vLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFNQSxzQ0ErREM7SUEvREQsU0FBZ0IsYUFBYTtRQUMzQixPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLDRCQUE0QixhQUN6Qyx3QkFBQywrQkFBbUIsSUFDbEIsU0FBUyxFQUFDLFlBQVksRUFDdEIsU0FBUyxFQUFDLDZDQUE2QyxhQUV2RCx1QkFBQywwQkFBYyxJQUFDLFdBQVcsRUFBRSxFQUFFLFlBQzdCLGdDQUFLLFNBQVMsRUFBQyxnREFBZ0QsWUFDN0QsaUNBQU0sU0FBUyxFQUFDLGVBQWUsb0JBQVcsR0FDdEMsR0FDUyxFQUNqQix1QkFBQywyQkFBZSxLQUFHLEVBQ25CLHVCQUFDLDBCQUFjLElBQUMsV0FBVyxFQUFFLEVBQUUsWUFDN0Isd0JBQUMsK0JBQW1CLElBQUMsU0FBUyxFQUFDLFVBQVUsYUFDdkMsdUJBQUMsMEJBQWMsSUFBQyxXQUFXLEVBQUUsRUFBRSxZQUM3QixnQ0FBSyxTQUFTLEVBQUMsNkNBQTZDLFlBQzFELGlDQUFNLFNBQVMsRUFBQyxlQUFlLG9CQUFXLEdBQ3RDLEdBQ1MsRUFDakIsdUJBQUMsMkJBQWUsS0FBRyxFQUNuQix1QkFBQywwQkFBYyxJQUFDLFdBQVcsRUFBRSxFQUFFLFlBQzdCLGdDQUFLLFNBQVMsRUFBQyw2Q0FBNkMsWUFDMUQsaUNBQU0sU0FBUyxFQUFDLGVBQWUsc0JBQWEsR0FDeEMsR0FDUyxJQUNHLEdBQ1AsSUFDRyxFQUN0Qix3QkFBQywrQkFBbUIsSUFDbEIsU0FBUyxFQUFDLFlBQVksRUFDdEIsU0FBUyxFQUFDLDJEQUEyRCxhQUVyRSx1QkFBQywwQkFBYyxJQUFDLFdBQVcsRUFBRSxFQUFFLFlBQzdCLGdDQUFLLFNBQVMsRUFBQyw2Q0FBNkMsWUFDMUQsaUNBQU0sU0FBUyxFQUFDLGVBQWUsd0JBQWUsR0FDMUMsR0FDUyxFQUNqQix1QkFBQywyQkFBZSxJQUFDLFVBQVUsU0FBRyxFQUM5Qix1QkFBQywwQkFBYyxJQUFDLFdBQVcsRUFBRSxFQUFFLFlBQzdCLGdDQUFLLFNBQVMsRUFBQyw2Q0FBNkMsWUFDMUQsaUNBQU0sU0FBUyxFQUFDLGVBQWUsd0JBQWUsR0FDMUMsR0FDUyxJQUNHLEVBQ3RCLHdCQUFDLCtCQUFtQixJQUNsQixTQUFTLEVBQUMsVUFBVSxFQUNwQixTQUFTLEVBQUMsMkRBQTJELGFBRXJFLHVCQUFDLDBCQUFjLElBQUMsV0FBVyxFQUFFLEVBQUUsWUFDN0IsZ0NBQUssU0FBUyxFQUFDLDZDQUE2QyxZQUMxRCxpQ0FBTSxTQUFTLEVBQUMsZUFBZSx1QkFBYyxHQUN6QyxHQUNTLEVBQ2pCLHVCQUFDLDJCQUFlLEtBQUcsRUFDbkIsdUJBQUMsMEJBQWMsSUFBQyxXQUFXLEVBQUUsRUFBRSxZQUM3QixnQ0FBSyxTQUFTLEVBQUMsNkNBQTZDLFlBQzFELGlDQUFNLFNBQVMsRUFBQyxlQUFlLHdCQUFlLEdBQzFDLEdBQ1MsSUFDRyxJQUNsQixDQUNQLENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUmVzaXphYmxlSGFuZGxlLFxuICBSZXNpemFibGVQYW5lbCxcbiAgUmVzaXphYmxlUGFuZWxHcm91cCxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9yZXNpemFibGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFJlc2l6YWJsZURlbW8oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBnYXAtNlwiPlxuICAgICAgPFJlc2l6YWJsZVBhbmVsR3JvdXBcbiAgICAgICAgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1heC13LW1kIHJvdW5kZWQtbGcgYm9yZGVyIG1kOm1pbi13LVs0NTBweF1cIlxuICAgICAgPlxuICAgICAgICA8UmVzaXphYmxlUGFuZWwgZGVmYXVsdFNpemU9ezUwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1bMjAwcHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTZcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5PbmU8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVzaXphYmxlUGFuZWw+XG4gICAgICAgIDxSZXNpemFibGVIYW5kbGUgLz5cbiAgICAgICAgPFJlc2l6YWJsZVBhbmVsIGRlZmF1bHRTaXplPXs1MH0+XG4gICAgICAgICAgPFJlc2l6YWJsZVBhbmVsR3JvdXAgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxSZXNpemFibGVQYW5lbCBkZWZhdWx0U2l6ZT17MjV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTZcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+VHdvPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVzaXphYmxlUGFuZWw+XG4gICAgICAgICAgICA8UmVzaXphYmxlSGFuZGxlIC8+XG4gICAgICAgICAgICA8UmVzaXphYmxlUGFuZWwgZGVmYXVsdFNpemU9ezc1fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC02XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlRocmVlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVzaXphYmxlUGFuZWw+XG4gICAgICAgICAgPC9SZXNpemFibGVQYW5lbEdyb3VwPlxuICAgICAgICA8L1Jlc2l6YWJsZVBhbmVsPlxuICAgICAgPC9SZXNpemFibGVQYW5lbEdyb3VwPlxuICAgICAgPFJlc2l6YWJsZVBhbmVsR3JvdXBcbiAgICAgICAgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgICAgIGNsYXNzTmFtZT1cIm1pbi1oLVsyMDBweF0gbWF4LXctbWQgcm91bmRlZC1sZyBib3JkZXIgbWQ6bWluLXctWzQ1MHB4XVwiXG4gICAgICA+XG4gICAgICAgIDxSZXNpemFibGVQYW5lbCBkZWZhdWx0U2l6ZT17MjV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtNlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlNpZGViYXI8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVzaXphYmxlUGFuZWw+XG4gICAgICAgIDxSZXNpemFibGVIYW5kbGUgd2l0aEhhbmRsZSAvPlxuICAgICAgICA8UmVzaXphYmxlUGFuZWwgZGVmYXVsdFNpemU9ezc1fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTZcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5Db250ZW50PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Jlc2l6YWJsZVBhbmVsPlxuICAgICAgPC9SZXNpemFibGVQYW5lbEdyb3VwPlxuICAgICAgPFJlc2l6YWJsZVBhbmVsR3JvdXBcbiAgICAgICAgZGlyZWN0aW9uPVwidmVydGljYWxcIlxuICAgICAgICBjbGFzc05hbWU9XCJtaW4taC1bMjAwcHhdIG1heC13LW1kIHJvdW5kZWQtbGcgYm9yZGVyIG1kOm1pbi13LVs0NTBweF1cIlxuICAgICAgPlxuICAgICAgICA8UmVzaXphYmxlUGFuZWwgZGVmYXVsdFNpemU9ezI1fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTZcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5IZWFkZXI8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUmVzaXphYmxlUGFuZWw+XG4gICAgICAgIDxSZXNpemFibGVIYW5kbGUgLz5cbiAgICAgICAgPFJlc2l6YWJsZVBhbmVsIGRlZmF1bHRTaXplPXs3NX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC02XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+Q29udGVudDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9SZXNpemFibGVQYW5lbD5cbiAgICAgIDwvUmVzaXphYmxlUGFuZWxHcm91cD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ==