define(["require", "exports", "react/jsx-runtime", "next-themes"], function (require, exports, jsx_runtime_1, next_themes_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ThemeProvider = ThemeProvider;
    function ThemeProvider({ children, ...props }) {
        return (0, jsx_runtime_1.jsx)(next_themes_1.ThemeProvider, { ...props, children: children });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLXY0L3RoZW1lLXByb3ZpZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUFLYixzQ0FLQztJQUxELFNBQWdCLGFBQWEsQ0FBQyxFQUM1QixRQUFRLEVBQ1IsR0FBRyxLQUFLLEVBQ3dDO1FBQ2hELE9BQU8sdUJBQUMsMkJBQWtCLE9BQUssS0FBSyxZQUFHLFFBQVEsR0FBc0IsQ0FBQztJQUN4RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciBhcyBOZXh0VGhlbWVzUHJvdmlkZXIgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPHR5cGVvZiBOZXh0VGhlbWVzUHJvdmlkZXI+KSB7XG4gIHJldHVybiA8TmV4dFRoZW1lc1Byb3ZpZGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvTmV4dFRoZW1lc1Byb3ZpZGVyPjtcbn1cbiJdfQ==