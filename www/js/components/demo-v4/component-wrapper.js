define(["require", "exports", "react/jsx-runtime", "react", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ComponentWrapper = ComponentWrapper;
    function ComponentWrapper({ className, name, children, ...props }) {
        return ((0, jsx_runtime_1.jsx)(ComponentErrorBoundary, { name: name, children: (0, jsx_runtime_1.jsxs)("div", { id: name, "data-name": name.toLowerCase(), className: (0, utils_1.cn)("flex w-full scroll-mt-16 flex-col rounded-lg border", className), ...props, children: [(0, jsx_runtime_1.jsx)("div", { className: "border-b px-4 py-3", children: (0, jsx_runtime_1.jsx)("div", { className: "text-sm font-medium", children: getComponentName(name) }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-1 items-center gap-2 p-4", children: children })] }) }));
    }
    class ComponentErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }
        static getDerivedStateFromError() {
            return { hasError: true };
        }
        componentDidCatch(error, errorInfo) {
            console.error(`Error in component ${this.props.name}:`, error, errorInfo);
        }
        render() {
            if (this.state.hasError) {
                return ((0, jsx_runtime_1.jsxs)("div", { className: "p-4 text-red-500", children: ["Something went wrong in component: ", this.props.name] }));
            }
            return this.props.children;
        }
    }
    function getComponentName(name) {
        // convert kebab-case to title case
        return name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXdyYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLXY0L2NvbXBvbmVudC13cmFwcGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUFNYiw0Q0F3QkM7SUF4QkQsU0FBZ0IsZ0JBQWdCLENBQUMsRUFDL0IsU0FBUyxFQUNULElBQUksRUFDSixRQUFRLEVBQ1IsR0FBRyxLQUFLLEVBQ2lEO1FBQ3pELE9BQU8sQ0FDTCx1QkFBQyxzQkFBc0IsSUFBQyxJQUFJLEVBQUUsSUFBSSxZQUNoQyxpQ0FDRSxFQUFFLEVBQUUsSUFBSSxlQUNHLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFDN0IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLHFEQUFxRCxFQUNyRCxTQUFTLENBQ1YsS0FDRyxLQUFLLGFBRVQsZ0NBQUssU0FBUyxFQUFDLG9CQUFvQixZQUNqQyxnQ0FBSyxTQUFTLEVBQUMscUJBQXFCLFlBQUUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQU8sR0FDL0QsRUFDTixnQ0FBSyxTQUFTLEVBQUMsb0NBQW9DLFlBQUUsUUFBUSxHQUFPLElBQ2hFLEdBQ2lCLENBQzFCLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxzQkFBdUIsU0FBUSxLQUFLLENBQUMsU0FHMUM7UUFDQyxZQUFZLEtBQWtEO1lBQzVELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELE1BQU0sQ0FBQyx3QkFBd0I7WUFDN0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBRUQsaUJBQWlCLENBQUMsS0FBWSxFQUFFLFNBQTBCO1lBQ3hELE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFFRCxNQUFNO1lBQ0osSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN4QixPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLGtCQUFrQixvREFDSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFDL0MsQ0FDUCxDQUFDO1lBQ0osQ0FBQztZQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDN0IsQ0FBQztLQUNGO0lBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFZO1FBQ3BDLG1DQUFtQztRQUNuQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb21wb25lbnRXcmFwcGVyKHtcbiAgY2xhc3NOYW1lLFxuICBuYW1lLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjxcImRpdlwiPiAmIHsgbmFtZTogc3RyaW5nIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29tcG9uZW50RXJyb3JCb3VuZGFyeSBuYW1lPXtuYW1lfT5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9e25hbWV9XG4gICAgICAgIGRhdGEtbmFtZT17bmFtZS50b0xvd2VyQ2FzZSgpfVxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiZmxleCB3LWZ1bGwgc2Nyb2xsLW10LTE2IGZsZXgtY29sIHJvdW5kZWQtbGcgYm9yZGVyXCIsXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICApfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgcHgtNCBweS0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+e2dldENvbXBvbmVudE5hbWUobmFtZSl9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGl0ZW1zLWNlbnRlciBnYXAtMiBwLTRcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbXBvbmVudEVycm9yQm91bmRhcnk+XG4gICk7XG59XG5cbmNsYXNzIENvbXBvbmVudEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTsgbmFtZTogc3RyaW5nIH0sXG4gIHsgaGFzRXJyb3I6IGJvb2xlYW4gfVxuPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7IG5hbWU6IHN0cmluZyB9KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcigpIHtcbiAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBlcnJvckluZm86IFJlYWN0LkVycm9ySW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGluIGNvbXBvbmVudCAke3RoaXMucHJvcHMubmFtZX06YCwgZXJyb3IsIGVycm9ySW5mbyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgIFNvbWV0aGluZyB3ZW50IHdyb25nIGluIGNvbXBvbmVudDoge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUobmFtZTogc3RyaW5nKSB7XG4gIC8vIGNvbnZlcnQga2ViYWItY2FzZSB0byB0aXRsZSBjYXNlXG4gIHJldHVybiBuYW1lLnJlcGxhY2UoLy0vZywgXCIgXCIpLnJlcGxhY2UoL1xcYlxcdy9nLCAoY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbn1cbiJdfQ==