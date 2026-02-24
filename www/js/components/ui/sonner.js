define(["require", "exports", "react/jsx-runtime", "next-themes", "sonner", "lucide-react"], function (require, exports, jsx_runtime_1, next_themes_1, sonner_1, lucide_react_1) {
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
            }, toastOptions: {
                classNames: {
                    toast: "cn-toast",
                },
            }, ...props }));
    };
    exports.Toaster = Toaster;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvc29ubmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7O0lBWWIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFnQixFQUFFLEVBQUU7UUFDN0MsTUFBTSxFQUFFLEtBQUssR0FBRyxRQUFRLEVBQUUsR0FBRyxJQUFBLHNCQUFRLEdBQUUsQ0FBQztRQUV4QyxPQUFPLENBQ0wsdUJBQUMsZ0JBQU0sSUFDTCxLQUFLLEVBQUUsS0FBOEIsRUFDckMsU0FBUyxFQUFDLGVBQWUsRUFDekIsS0FBSyxFQUFFO2dCQUNMLE9BQU8sRUFBRSx1QkFBQyw4QkFBZSxJQUFDLFNBQVMsRUFBQyxRQUFRLEdBQUc7Z0JBQy9DLElBQUksRUFBRSx1QkFBQyx1QkFBUSxJQUFDLFNBQVMsRUFBQyxRQUFRLEdBQUc7Z0JBQ3JDLE9BQU8sRUFBRSx1QkFBQyxnQ0FBaUIsSUFBQyxTQUFTLEVBQUMsUUFBUSxHQUFHO2dCQUNqRCxLQUFLLEVBQUUsdUJBQUMsMkJBQVksSUFBQyxTQUFTLEVBQUMsUUFBUSxHQUFHO2dCQUMxQyxPQUFPLEVBQUUsdUJBQUMsMEJBQVcsSUFBQyxTQUFTLEVBQUMscUJBQXFCLEdBQUc7YUFDekQsRUFDRCxLQUFLLEVBQ0g7Z0JBQ0UsYUFBYSxFQUFFLGdCQUFnQjtnQkFDL0IsZUFBZSxFQUFFLDJCQUEyQjtnQkFDNUMsaUJBQWlCLEVBQUUsZUFBZTtnQkFDbEMsaUJBQWlCLEVBQUUsZUFBZTthQUNaLEVBRTFCLFlBQVksRUFBRTtnQkFDWixVQUFVLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFVBQVU7aUJBQ2xCO2FBQ0YsS0FDRyxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRU8sMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcbmltcG9ydCB7IFRvYXN0ZXIgYXMgU29ubmVyLCB0eXBlIFRvYXN0ZXJQcm9wcyB9IGZyb20gXCJzb25uZXJcIjtcbmltcG9ydCB7XG4gIENpcmNsZUNoZWNrSWNvbixcbiAgSW5mb0ljb24sXG4gIFRyaWFuZ2xlQWxlcnRJY29uLFxuICBPY3RhZ29uWEljb24sXG4gIExvYWRlcjJJY29uLFxufSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmNvbnN0IFRvYXN0ZXIgPSAoeyAuLi5wcm9wcyB9OiBUb2FzdGVyUHJvcHMpID0+IHtcbiAgY29uc3QgeyB0aGVtZSA9IFwic3lzdGVtXCIgfSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U29ubmVyXG4gICAgICB0aGVtZT17dGhlbWUgYXMgVG9hc3RlclByb3BzW1widGhlbWVcIl19XG4gICAgICBjbGFzc05hbWU9XCJ0b2FzdGVyIGdyb3VwXCJcbiAgICAgIGljb25zPXt7XG4gICAgICAgIHN1Y2Nlc3M6IDxDaXJjbGVDaGVja0ljb24gY2xhc3NOYW1lPVwic2l6ZS00XCIgLz4sXG4gICAgICAgIGluZm86IDxJbmZvSWNvbiBjbGFzc05hbWU9XCJzaXplLTRcIiAvPixcbiAgICAgICAgd2FybmluZzogPFRyaWFuZ2xlQWxlcnRJY29uIGNsYXNzTmFtZT1cInNpemUtNFwiIC8+LFxuICAgICAgICBlcnJvcjogPE9jdGFnb25YSWNvbiBjbGFzc05hbWU9XCJzaXplLTRcIiAvPixcbiAgICAgICAgbG9hZGluZzogPExvYWRlcjJJY29uIGNsYXNzTmFtZT1cInNpemUtNCBhbmltYXRlLXNwaW5cIiAvPixcbiAgICAgIH19XG4gICAgICBzdHlsZT17XG4gICAgICAgIHtcbiAgICAgICAgICBcIi0tbm9ybWFsLWJnXCI6IFwidmFyKC0tcG9wb3ZlcilcIixcbiAgICAgICAgICBcIi0tbm9ybWFsLXRleHRcIjogXCJ2YXIoLS1wb3BvdmVyLWZvcmVncm91bmQpXCIsXG4gICAgICAgICAgXCItLW5vcm1hbC1ib3JkZXJcIjogXCJ2YXIoLS1ib3JkZXIpXCIsXG4gICAgICAgICAgXCItLWJvcmRlci1yYWRpdXNcIjogXCJ2YXIoLS1yYWRpdXMpXCIsXG4gICAgICAgIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllc1xuICAgICAgfVxuICAgICAgdG9hc3RPcHRpb25zPXt7XG4gICAgICAgIGNsYXNzTmFtZXM6IHtcbiAgICAgICAgICB0b2FzdDogXCJjbi10b2FzdFwiLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IHsgVG9hc3RlciB9O1xuIl19