define(["require", "exports", "react/jsx-runtime", "lucide-react", "next-themes", "sonner"], function (require, exports, jsx_runtime_1, lucide_react_1, next_themes_1, sonner_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Toaster = void 0;
    const Toaster = ({ ...props }) => {
        const { theme = "system" } = (0, next_themes_1.useTheme)();
        return ((0, jsx_runtime_1.jsx)(sonner_1.Toaster, { theme: theme, className: "toaster group", icons: {
                success: (0, jsx_runtime_1.jsx)(lucide_react_1.CircleCheckIcon, { className: "size-4" }),
                info: (0, jsx_runtime_1.jsx)(lucide_react_1.InfoIcon, { className: "size-4" }),
                warning: (0, jsx_runtime_1.jsx)(lucide_react_1.TriangleAlertIcon, { className: "size-4" }),
                error: (0, jsx_runtime_1.jsx)(lucide_react_1.OctagonXIcon, { className: "size-4" }),
                loading: (0, jsx_runtime_1.jsx)(lucide_react_1.Loader2Icon, { className: "size-4 animate-spin" }),
            }, style: {
                "--normal-bg": "var(--popover)",
                "--normal-text": "var(--popover-foreground)",
                "--normal-border": "var(--border)",
                "--border-radius": "var(--radius)",
            }, ...props }));
    };
    exports.Toaster = Toaster;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvc29ubmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7O0lBWWIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFnQixFQUFFLEVBQUU7UUFDN0MsTUFBTSxFQUFFLEtBQUssR0FBRyxRQUFRLEVBQUUsR0FBRyxJQUFBLHNCQUFRLEdBQUUsQ0FBQztRQUV4QyxPQUFPLENBQ0wsdUJBQUMsZ0JBQU0sSUFDTCxLQUFLLEVBQUUsS0FBOEIsRUFDckMsU0FBUyxFQUFDLGVBQWUsRUFDekIsS0FBSyxFQUFFO2dCQUNMLE9BQU8sRUFBRSx1QkFBQyw4QkFBZSxJQUFDLFNBQVMsRUFBQyxRQUFRLEdBQUc7Z0JBQy9DLElBQUksRUFBRSx1QkFBQyx1QkFBUSxJQUFDLFNBQVMsRUFBQyxRQUFRLEdBQUc7Z0JBQ3JDLE9BQU8sRUFBRSx1QkFBQyxnQ0FBaUIsSUFBQyxTQUFTLEVBQUMsUUFBUSxHQUFHO2dCQUNqRCxLQUFLLEVBQUUsdUJBQUMsMkJBQVksSUFBQyxTQUFTLEVBQUMsUUFBUSxHQUFHO2dCQUMxQyxPQUFPLEVBQUUsdUJBQUMsMEJBQVcsSUFBQyxTQUFTLEVBQUMscUJBQXFCLEdBQUc7YUFDekQsRUFDRCxLQUFLLEVBQ0g7Z0JBQ0UsYUFBYSxFQUFFLGdCQUFnQjtnQkFDL0IsZUFBZSxFQUFFLDJCQUEyQjtnQkFDNUMsaUJBQWlCLEVBQUUsZUFBZTtnQkFDbEMsaUJBQWlCLEVBQUUsZUFBZTthQUNaLEtBRXRCLEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDLENBQUM7SUFFTywwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQge1xuICBDaXJjbGVDaGVja0ljb24sXG4gIEluZm9JY29uLFxuICBMb2FkZXIySWNvbixcbiAgT2N0YWdvblhJY29uLFxuICBUcmlhbmdsZUFsZXJ0SWNvbixcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcbmltcG9ydCB7IFRvYXN0ZXIgYXMgU29ubmVyLCB0eXBlIFRvYXN0ZXJQcm9wcyB9IGZyb20gXCJzb25uZXJcIjtcblxuY29uc3QgVG9hc3RlciA9ICh7IC4uLnByb3BzIH06IFRvYXN0ZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IHRoZW1lID0gXCJzeXN0ZW1cIiB9ID0gdXNlVGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxTb25uZXJcbiAgICAgIHRoZW1lPXt0aGVtZSBhcyBUb2FzdGVyUHJvcHNbXCJ0aGVtZVwiXX1cbiAgICAgIGNsYXNzTmFtZT1cInRvYXN0ZXIgZ3JvdXBcIlxuICAgICAgaWNvbnM9e3tcbiAgICAgICAgc3VjY2VzczogPENpcmNsZUNoZWNrSWNvbiBjbGFzc05hbWU9XCJzaXplLTRcIiAvPixcbiAgICAgICAgaW5mbzogPEluZm9JY29uIGNsYXNzTmFtZT1cInNpemUtNFwiIC8+LFxuICAgICAgICB3YXJuaW5nOiA8VHJpYW5nbGVBbGVydEljb24gY2xhc3NOYW1lPVwic2l6ZS00XCIgLz4sXG4gICAgICAgIGVycm9yOiA8T2N0YWdvblhJY29uIGNsYXNzTmFtZT1cInNpemUtNFwiIC8+LFxuICAgICAgICBsb2FkaW5nOiA8TG9hZGVyMkljb24gY2xhc3NOYW1lPVwic2l6ZS00IGFuaW1hdGUtc3BpblwiIC8+LFxuICAgICAgfX1cbiAgICAgIHN0eWxlPXtcbiAgICAgICAge1xuICAgICAgICAgIFwiLS1ub3JtYWwtYmdcIjogXCJ2YXIoLS1wb3BvdmVyKVwiLFxuICAgICAgICAgIFwiLS1ub3JtYWwtdGV4dFwiOiBcInZhcigtLXBvcG92ZXItZm9yZWdyb3VuZClcIixcbiAgICAgICAgICBcIi0tbm9ybWFsLWJvcmRlclwiOiBcInZhcigtLWJvcmRlcilcIixcbiAgICAgICAgICBcIi0tYm9yZGVyLXJhZGl1c1wiOiBcInZhcigtLXJhZGl1cylcIixcbiAgICAgICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gICAgICB9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IFRvYXN0ZXIgfTtcbiJdfQ==