define(["require", "exports", "react/jsx-runtime", "sonner", "@/components/ui/button"], function (require, exports, jsx_runtime_1, sonner_1, button_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SonnerDemo = SonnerDemo;
    function SonnerDemo() {
        return ((0, jsx_runtime_1.jsx)(button_1.Button, { variant: "outline", onClick: () => (0, sonner_1.toast)("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            }), children: "Show Toast" }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ubmVyLWRlbW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLXY0L3Nvbm5lci1kZW1vLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUFNYixnQ0FpQkM7SUFqQkQsU0FBZ0IsVUFBVTtRQUN4QixPQUFPLENBQ0wsdUJBQUMsZUFBTSxJQUNMLE9BQU8sRUFBQyxTQUFTLEVBQ2pCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FDWixJQUFBLGNBQUssRUFBQyx3QkFBd0IsRUFBRTtnQkFDOUIsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxNQUFNO29CQUNiLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztpQkFDbkM7YUFDRixDQUFDLDJCQUlHLENBQ1YsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwic29ubmVyXCI7XG5cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTb25uZXJEZW1vKCkge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgIHRvYXN0KFwiRXZlbnQgaGFzIGJlZW4gY3JlYXRlZFwiLCB7XG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiU3VuZGF5LCBEZWNlbWJlciAwMywgMjAyMyBhdCA5OjAwIEFNXCIsXG4gICAgICAgICAgYWN0aW9uOiB7XG4gICAgICAgICAgICBsYWJlbDogXCJVbmRvXCIsXG4gICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBjb25zb2xlLmxvZyhcIlVuZG9cIiksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA+XG4gICAgICBTaG93IFRvYXN0XG4gICAgPC9CdXR0b24+XG4gICk7XG59XG4iXX0=