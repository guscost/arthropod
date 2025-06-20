define(["require", "exports", "react/jsx-runtime", "react"], function (require, exports, jsx_runtime_1, react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useTheme = void 0;
    exports.ThemeProvider = ThemeProvider;
    const initialState = {
        theme: "system",
        setTheme: () => null,
    };
    const ThemeProviderContext = (0, react_1.createContext)(initialState);
    function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme", ...props }) {
        const [theme, setTheme] = (0, react_1.useState)(() => localStorage.getItem(storageKey) || defaultTheme);
        (0, react_1.useEffect)(() => {
            const root = window.document.documentElement;
            root.classList.remove("light", "dark");
            if (theme === "system") {
                const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                    .matches
                    ? "dark"
                    : "light";
                root.classList.add(systemTheme);
                return;
            }
            root.classList.add(theme);
        }, [theme]);
        const value = {
            theme,
            setTheme: (theme) => {
                localStorage.setItem(storageKey, theme);
                setTheme(theme);
            },
        };
        return ((0, jsx_runtime_1.jsx)(ThemeProviderContext.Provider, { ...props, value: value, children: children }));
    }
    const useTheme = () => {
        const context = (0, react_1.useContext)(ThemeProviderContext);
        if (context === undefined)
            throw new Error("useTheme must be used within a ThemeProvider");
        return context;
    };
    exports.useTheme = useTheme;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWthbmJhbi90aGVtZS1wcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztJQW9CQSxzQ0F5Q0M7SUFoREQsTUFBTSxZQUFZLEdBQXVCO1FBQ3ZDLEtBQUssRUFBRSxRQUFRO1FBQ2YsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUk7S0FDckIsQ0FBQztJQUVGLE1BQU0sb0JBQW9CLEdBQUcsSUFBQSxxQkFBYSxFQUFxQixZQUFZLENBQUMsQ0FBQztJQUU3RSxTQUFnQixhQUFhLENBQUMsRUFDNUIsUUFBUSxFQUNSLFlBQVksR0FBRyxRQUFRLEVBQ3ZCLFVBQVUsR0FBRyxlQUFlLEVBQzVCLEdBQUcsS0FBSyxFQUNXO1FBQ25CLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUNoQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFlBQVksQ0FDdkQsQ0FBQztRQUVGLElBQUEsaUJBQVMsRUFBQyxHQUFHLEVBQUU7WUFDYixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUU3QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFdkMsSUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUM7cUJBQ2xFLE9BQU87b0JBQ1IsQ0FBQyxDQUFDLE1BQU07b0JBQ1IsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFFWixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDaEMsT0FBTztZQUNULENBQUM7WUFFRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRVosTUFBTSxLQUFLLEdBQUc7WUFDWixLQUFLO1lBQ0wsUUFBUSxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUU7Z0JBQzFCLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEIsQ0FBQztTQUNGLENBQUM7UUFFRixPQUFPLENBQ0wsdUJBQUMsb0JBQW9CLENBQUMsUUFBUSxPQUFLLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxZQUNuRCxRQUFRLEdBQ3FCLENBQ2pDLENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQzNCLE1BQU0sT0FBTyxHQUFHLElBQUEsa0JBQVUsRUFBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRWpELElBQUksT0FBTyxLQUFLLFNBQVM7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1FBRWxFLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUMsQ0FBQztJQVBXLFFBQUEsUUFBUSxZQU9uQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBUaGVtZVByb3ZpZGVyUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGRlZmF1bHRUaGVtZT86IHN0cmluZztcbiAgc3RvcmFnZUtleT86IHN0cmluZztcbn07XG5cbnR5cGUgVGhlbWVQcm92aWRlclN0YXRlID0ge1xuICB0aGVtZTogc3RyaW5nO1xuICBzZXRUaGVtZTogKHRoZW1lOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IFRoZW1lUHJvdmlkZXJTdGF0ZSA9IHtcbiAgdGhlbWU6IFwic3lzdGVtXCIsXG4gIHNldFRoZW1lOiAoKSA9PiBudWxsLFxufTtcblxuY29uc3QgVGhlbWVQcm92aWRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFRoZW1lUHJvdmlkZXJTdGF0ZT4oaW5pdGlhbFN0YXRlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lUHJvdmlkZXIoe1xuICBjaGlsZHJlbixcbiAgZGVmYXVsdFRoZW1lID0gXCJzeXN0ZW1cIixcbiAgc3RvcmFnZUtleSA9IFwidml0ZS11aS10aGVtZVwiLFxuICAuLi5wcm9wc1xufTogVGhlbWVQcm92aWRlclByb3BzKSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXG4gICAgKCkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSkgfHwgZGVmYXVsdFRoZW1lLFxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiLCBcImRhcmtcIik7XG5cbiAgICBpZiAodGhlbWUgPT09IFwic3lzdGVtXCIpIHtcbiAgICAgIGNvbnN0IHN5c3RlbVRoZW1lID0gd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpXG4gICAgICAgIC5tYXRjaGVzXG4gICAgICAgID8gXCJkYXJrXCJcbiAgICAgICAgOiBcImxpZ2h0XCI7XG5cbiAgICAgIHJvb3QuY2xhc3NMaXN0LmFkZChzeXN0ZW1UaGVtZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcm9vdC5jbGFzc0xpc3QuYWRkKHRoZW1lKTtcbiAgfSwgW3RoZW1lXSk7XG5cbiAgY29uc3QgdmFsdWUgPSB7XG4gICAgdGhlbWUsXG4gICAgc2V0VGhlbWU6ICh0aGVtZTogc3RyaW5nKSA9PiB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCB0aGVtZSk7XG4gICAgICBzZXRUaGVtZSh0aGVtZSk7XG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyQ29udGV4dC5Qcm92aWRlciB7Li4ucHJvcHN9IHZhbHVlPXt2YWx1ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UaGVtZVByb3ZpZGVyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRoZW1lID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUaGVtZVByb3ZpZGVyQ29udGV4dCk7XG5cbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZClcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VUaGVtZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVGhlbWVQcm92aWRlclwiKTtcblxuICByZXR1cm4gY29udGV4dDtcbn07XG4iXX0=