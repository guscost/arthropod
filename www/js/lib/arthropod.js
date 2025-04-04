var _a, _b;
const __ROOT_PATH__ = ((_b = (_a = document.querySelector('meta[name="root-path"]')) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.replace(/\/$/, "")) || "";
// Helper to dynamically load scripts
function __LOAD_SCRIPT__(src, async = false) {
    const dynamicScript = document.createElement("script");
    dynamicScript.type = "text/javascript";
    dynamicScript.src = src + ".js";
    dynamicScript.async = async;
    document.body.appendChild(dynamicScript);
}
// Tailwind & Config
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/tailwind.min");
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/tailwind-config");
// Module loader
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/define");
// Dependencies
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/react.min");
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/react-dom.min");
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/lucide-react.min");
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/extras.min");
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/dnd-kit.min");
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/radix-ui.min");
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/shadcn.min");
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/chart.min");
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/form.min");
// App entrypoint
__LOAD_SCRIPT__(__ROOT_PATH__ + "/js/index");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aHJvcG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9hcnRocm9wb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sYUFBYSxHQUNqQixDQUFBLE1BQUEsTUFDRSxRQUFRLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUNoRCwwQ0FBRSxPQUFPLDBDQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUksRUFBRSxDQUFDO0FBRXZDLHFDQUFxQztBQUNyQyxTQUFTLGVBQWUsQ0FBQyxHQUFXLEVBQUUsS0FBSyxHQUFHLEtBQUs7SUFDakQsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RCxhQUFhLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO0lBQ3ZDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUNoQyxhQUFhLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRUQsb0JBQW9CO0FBQ3BCLGVBQWUsQ0FBQyxhQUFhLEdBQUcsc0JBQXNCLENBQUMsQ0FBQztBQUN4RCxlQUFlLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDLENBQUM7QUFFM0QsZ0JBQWdCO0FBQ2hCLGVBQWUsQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztBQUVsRCxlQUFlO0FBQ2YsZUFBZSxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELGVBQWUsQ0FBQyxhQUFhLEdBQUcsdUJBQXVCLENBQUMsQ0FBQztBQUN6RCxlQUFlLENBQUMsYUFBYSxHQUFHLDBCQUEwQixDQUFDLENBQUM7QUFDNUQsZUFBZSxDQUFDLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3RELGVBQWUsQ0FBQyxhQUFhLEdBQUcscUJBQXFCLENBQUMsQ0FBQztBQUN2RCxlQUFlLENBQUMsYUFBYSxHQUFHLHNCQUFzQixDQUFDLENBQUM7QUFDeEQsZUFBZSxDQUFDLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3RELGVBQWUsQ0FBQyxhQUFhLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztBQUNyRCxlQUFlLENBQUMsYUFBYSxHQUFHLGtCQUFrQixDQUFDLENBQUM7QUFFcEQsaUJBQWlCO0FBQ2pCLGVBQWUsQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfX1JPT1RfUEFUSF9fID1cbiAgKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cInJvb3QtcGF0aFwiXScpIGFzIEhUTUxNZXRhRWxlbWVudFxuICApPy5jb250ZW50Py5yZXBsYWNlKC9cXC8kLywgXCJcIikgfHwgXCJcIjtcblxuLy8gSGVscGVyIHRvIGR5bmFtaWNhbGx5IGxvYWQgc2NyaXB0c1xuZnVuY3Rpb24gX19MT0FEX1NDUklQVF9fKHNyYzogc3RyaW5nLCBhc3luYyA9IGZhbHNlKSB7XG4gIGNvbnN0IGR5bmFtaWNTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBkeW5hbWljU2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuICBkeW5hbWljU2NyaXB0LnNyYyA9IHNyYyArIFwiLmpzXCI7XG4gIGR5bmFtaWNTY3JpcHQuYXN5bmMgPSBhc3luYztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkeW5hbWljU2NyaXB0KTtcbn1cblxuLy8gVGFpbHdpbmQgJiBDb25maWdcbl9fTE9BRF9TQ1JJUFRfXyhfX1JPT1RfUEFUSF9fICsgXCIvanMvbGliL3RhaWx3aW5kLm1pblwiKTtcbl9fTE9BRF9TQ1JJUFRfXyhfX1JPT1RfUEFUSF9fICsgXCIvanMvbGliL3RhaWx3aW5kLWNvbmZpZ1wiKTtcblxuLy8gTW9kdWxlIGxvYWRlclxuX19MT0FEX1NDUklQVF9fKF9fUk9PVF9QQVRIX18gKyBcIi9qcy9saWIvZGVmaW5lXCIpO1xuXG4vLyBEZXBlbmRlbmNpZXNcbl9fTE9BRF9TQ1JJUFRfXyhfX1JPT1RfUEFUSF9fICsgXCIvanMvbGliL3JlYWN0Lm1pblwiKTtcbl9fTE9BRF9TQ1JJUFRfXyhfX1JPT1RfUEFUSF9fICsgXCIvanMvbGliL3JlYWN0LWRvbS5taW5cIik7XG5fX0xPQURfU0NSSVBUX18oX19ST09UX1BBVEhfXyArIFwiL2pzL2xpYi9sdWNpZGUtcmVhY3QubWluXCIpO1xuX19MT0FEX1NDUklQVF9fKF9fUk9PVF9QQVRIX18gKyBcIi9qcy9saWIvZXh0cmFzLm1pblwiKTtcbl9fTE9BRF9TQ1JJUFRfXyhfX1JPT1RfUEFUSF9fICsgXCIvanMvbGliL2RuZC1raXQubWluXCIpO1xuX19MT0FEX1NDUklQVF9fKF9fUk9PVF9QQVRIX18gKyBcIi9qcy9saWIvcmFkaXgtdWkubWluXCIpO1xuX19MT0FEX1NDUklQVF9fKF9fUk9PVF9QQVRIX18gKyBcIi9qcy9saWIvc2hhZGNuLm1pblwiKTtcbl9fTE9BRF9TQ1JJUFRfXyhfX1JPT1RfUEFUSF9fICsgXCIvanMvbGliL2NoYXJ0Lm1pblwiKTtcbl9fTE9BRF9TQ1JJUFRfXyhfX1JPT1RfUEFUSF9fICsgXCIvanMvbGliL2Zvcm0ubWluXCIpO1xuXG4vLyBBcHAgZW50cnlwb2ludFxuX19MT0FEX1NDUklQVF9fKF9fUk9PVF9QQVRIX18gKyBcIi9qcy9pbmRleFwiKTtcbiJdfQ==