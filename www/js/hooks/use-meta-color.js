define(["require", "exports", "react", "next-themes"], function (require, exports, React, next_themes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.META_THEME_COLORS = void 0;
    exports.useMetaColor = useMetaColor;
    exports.META_THEME_COLORS = {
        light: "#ffffff",
        dark: "#09090b",
    };
    function useMetaColor() {
        const { resolvedTheme } = (0, next_themes_1.useTheme)();
        const metaColor = React.useMemo(() => {
            return resolvedTheme !== "dark"
                ? exports.META_THEME_COLORS.light
                : exports.META_THEME_COLORS.dark;
        }, [resolvedTheme]);
        const setMetaColor = React.useCallback((color) => {
            var _a;
            (_a = document
                .querySelector('meta[name="theme-color"]')) === null || _a === void 0 ? void 0 : _a.setAttribute("content", color);
        }, []);
        return {
            metaColor,
            setMetaColor,
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLW1ldGEtY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaG9va3MvdXNlLW1ldGEtY29sb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQVFBLG9DQW1CQztJQXhCWSxRQUFBLGlCQUFpQixHQUFHO1FBQy9CLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxTQUFTO0tBQ2hCLENBQUM7SUFFRixTQUFnQixZQUFZO1FBQzFCLE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFBLHNCQUFRLEdBQUUsQ0FBQztRQUVyQyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNuQyxPQUFPLGFBQWEsS0FBSyxNQUFNO2dCQUM3QixDQUFDLENBQUMseUJBQWlCLENBQUMsS0FBSztnQkFDekIsQ0FBQyxDQUFDLHlCQUFpQixDQUFDLElBQUksQ0FBQztRQUM3QixDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRXBCLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTs7WUFDdkQsTUFBQSxRQUFRO2lCQUNMLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQywwQ0FDeEMsWUFBWSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFUCxPQUFPO1lBQ0wsU0FBUztZQUNULFlBQVk7U0FDYixDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcblxuZXhwb3J0IGNvbnN0IE1FVEFfVEhFTUVfQ09MT1JTID0ge1xuICBsaWdodDogXCIjZmZmZmZmXCIsXG4gIGRhcms6IFwiIzA5MDkwYlwiLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU1ldGFDb2xvcigpIHtcbiAgY29uc3QgeyByZXNvbHZlZFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuXG4gIGNvbnN0IG1ldGFDb2xvciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiByZXNvbHZlZFRoZW1lICE9PSBcImRhcmtcIlxuICAgICAgPyBNRVRBX1RIRU1FX0NPTE9SUy5saWdodFxuICAgICAgOiBNRVRBX1RIRU1FX0NPTE9SUy5kYXJrO1xuICB9LCBbcmVzb2x2ZWRUaGVtZV0pO1xuXG4gIGNvbnN0IHNldE1ldGFDb2xvciA9IFJlYWN0LnVzZUNhbGxiYWNrKChjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0aGVtZS1jb2xvclwiXScpXG4gICAgICA/LnNldEF0dHJpYnV0ZShcImNvbnRlbnRcIiwgY29sb3IpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBtZXRhQ29sb3IsXG4gICAgc2V0TWV0YUNvbG9yLFxuICB9O1xufVxuIl19