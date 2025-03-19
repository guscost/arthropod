define(["require", "exports", "react/jsx-runtime", "next-themes", "sonner"], function (require, exports, jsx_runtime_1, next_themes_1, sonner_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Toaster = void 0;
    const Toaster = ({ ...props }) => {
        const { theme = "system" } = (0, next_themes_1.useTheme)();
        return ((0, jsx_runtime_1.jsx)(sonner_1.Toaster, { theme: theme, className: "toaster group", style: {
                "--normal-bg": "var(--popover)",
                "--normal-text": "var(--popover-foreground)",
                "--normal-border": "var(--border)",
            }, ...props }));
    };
    exports.Toaster = Toaster;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvc29ubmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7O0lBS2IsTUFBTSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFnQixFQUFFLEVBQUU7UUFDN0MsTUFBTSxFQUFFLEtBQUssR0FBRyxRQUFRLEVBQUUsR0FBRyxJQUFBLHNCQUFRLEdBQUUsQ0FBQztRQUV4QyxPQUFPLENBQ0wsdUJBQUMsZ0JBQU0sSUFDTCxLQUFLLEVBQUUsS0FBOEIsRUFDckMsU0FBUyxFQUFDLGVBQWUsRUFDekIsS0FBSyxFQUNIO2dCQUNFLGFBQWEsRUFBRSxnQkFBZ0I7Z0JBQy9CLGVBQWUsRUFBRSwyQkFBMkI7Z0JBQzVDLGlCQUFpQixFQUFFLGVBQWU7YUFDWixLQUV0QixLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQyxDQUFDO0lBRU8sMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcbmltcG9ydCB7IFRvYXN0ZXIgYXMgU29ubmVyLCBUb2FzdGVyUHJvcHMgfSBmcm9tIFwic29ubmVyXCI7XG5cbmNvbnN0IFRvYXN0ZXIgPSAoeyAuLi5wcm9wcyB9OiBUb2FzdGVyUHJvcHMpID0+IHtcbiAgY29uc3QgeyB0aGVtZSA9IFwic3lzdGVtXCIgfSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U29ubmVyXG4gICAgICB0aGVtZT17dGhlbWUgYXMgVG9hc3RlclByb3BzW1widGhlbWVcIl19XG4gICAgICBjbGFzc05hbWU9XCJ0b2FzdGVyIGdyb3VwXCJcbiAgICAgIHN0eWxlPXtcbiAgICAgICAge1xuICAgICAgICAgIFwiLS1ub3JtYWwtYmdcIjogXCJ2YXIoLS1wb3BvdmVyKVwiLFxuICAgICAgICAgIFwiLS1ub3JtYWwtdGV4dFwiOiBcInZhcigtLXBvcG92ZXItZm9yZWdyb3VuZClcIixcbiAgICAgICAgICBcIi0tbm9ybWFsLWJvcmRlclwiOiBcInZhcigtLWJvcmRlcilcIixcbiAgICAgICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gICAgICB9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IFRvYXN0ZXIgfTtcbiJdfQ==