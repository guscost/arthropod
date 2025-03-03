define(["require", "exports", "react/jsx-runtime", "next-themes", "sonner"], function (require, exports, jsx_runtime_1, next_themes_1, sonner_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Toaster = void 0;
    const Toaster = ({ ...props }) => {
        const { theme = "system" } = (0, next_themes_1.useTheme)();
        return ((0, jsx_runtime_1.jsx)(sonner_1.Toaster, { theme: theme, className: "toaster group", toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium",
                },
            }, ...props }));
    };
    exports.Toaster = Toaster;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvc29ubmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7O0lBS2IsTUFBTSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFnQixFQUFFLEVBQUU7UUFDN0MsTUFBTSxFQUFFLEtBQUssR0FBRyxRQUFRLEVBQUUsR0FBRyxJQUFBLHNCQUFRLEdBQUUsQ0FBQztRQUV4QyxPQUFPLENBQ0wsdUJBQUMsZ0JBQU0sSUFDTCxLQUFLLEVBQUUsS0FBOEIsRUFDckMsU0FBUyxFQUFDLGVBQWUsRUFDekIsWUFBWSxFQUFFO2dCQUNaLFVBQVUsRUFBRTtvQkFDVixLQUFLLEVBQ0gsdUlBQXVJO29CQUN6SSxXQUFXLEVBQUUsc0NBQXNDO29CQUNuRCxZQUFZLEVBQ1YsOEVBQThFO29CQUNoRixZQUFZLEVBQ1YsMEVBQTBFO2lCQUM3RTthQUNGLEtBQ0csS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVPLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgeyBUb2FzdGVyIGFzIFNvbm5lciwgVG9hc3RlclByb3BzIH0gZnJvbSBcInNvbm5lclwiO1xuXG5jb25zdCBUb2FzdGVyID0gKHsgLi4ucHJvcHMgfTogVG9hc3RlclByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUgPSBcInN5c3RlbVwiIH0gPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPFNvbm5lclxuICAgICAgdGhlbWU9e3RoZW1lIGFzIFRvYXN0ZXJQcm9wc1tcInRoZW1lXCJdfVxuICAgICAgY2xhc3NOYW1lPVwidG9hc3RlciBncm91cFwiXG4gICAgICB0b2FzdE9wdGlvbnM9e3tcbiAgICAgICAgY2xhc3NOYW1lczoge1xuICAgICAgICAgIHRvYXN0OlxuICAgICAgICAgICAgXCJncm91cCB0b2FzdCBncm91cC1bLnRvYXN0ZXJdOmJnLWJhY2tncm91bmQgZ3JvdXAtWy50b2FzdGVyXTp0ZXh0LWZvcmVncm91bmQgZ3JvdXAtWy50b2FzdGVyXTpib3JkZXItYm9yZGVyIGdyb3VwLVsudG9hc3Rlcl06c2hhZG93LWxnXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiZ3JvdXAtWy50b2FzdF06dGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgICAgYWN0aW9uQnV0dG9uOlxuICAgICAgICAgICAgXCJncm91cC1bLnRvYXN0XTpiZy1wcmltYXJ5IGdyb3VwLVsudG9hc3RdOnRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGZvbnQtbWVkaXVtXCIsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uOlxuICAgICAgICAgICAgXCJncm91cC1bLnRvYXN0XTpiZy1tdXRlZCBncm91cC1bLnRvYXN0XTp0ZXh0LW11dGVkLWZvcmVncm91bmQgZm9udC1tZWRpdW1cIixcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IFRvYXN0ZXIgfTtcbiJdfQ==