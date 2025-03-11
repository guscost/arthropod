var _a, _b;
const __ROOT_PATH__ = ((_b = (_a = document.querySelector('meta[name="root-path"]')) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.replace(/\/$/, "")) || "";
function __LOAD_SCRIPT__(src, async = false) {
    const dynamicScript = document.createElement("script");
    dynamicScript.type = "text/javascript";
    dynamicScript.src = src + ".js";
    dynamicScript.async = async;
    document.body.appendChild(dynamicScript);
}
(function () {
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
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aHJvcG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9hcnRocm9wb2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sYUFBYSxHQUNqQixDQUFBLE1BQUEsTUFDRSxRQUFRLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUNoRCwwQ0FBRSxPQUFPLDBDQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUksRUFBRSxDQUFDO0FBRXZDLFNBQVMsZUFBZSxDQUFDLEdBQVcsRUFBRSxLQUFLLEdBQUcsS0FBSztJQUNqRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELGFBQWEsQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFDdkMsYUFBYSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQzVCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFRCxDQUFDO0lBQ0Msb0JBQW9CO0lBQ3BCLGVBQWUsQ0FBQyxhQUFhLEdBQUcsc0JBQXNCLENBQUMsQ0FBQztJQUN4RCxlQUFlLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDLENBQUM7SUFFM0QsZ0JBQWdCO0lBQ2hCLGVBQWUsQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztJQUVsRCxlQUFlO0lBQ2YsZUFBZSxDQUFDLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JELGVBQWUsQ0FBQyxhQUFhLEdBQUcsdUJBQXVCLENBQUMsQ0FBQztJQUN6RCxlQUFlLENBQUMsYUFBYSxHQUFHLDBCQUEwQixDQUFDLENBQUM7SUFDNUQsZUFBZSxDQUFDLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RELGVBQWUsQ0FBQyxhQUFhLEdBQUcscUJBQXFCLENBQUMsQ0FBQztJQUN2RCxlQUFlLENBQUMsYUFBYSxHQUFHLHNCQUFzQixDQUFDLENBQUM7SUFDeEQsZUFBZSxDQUFDLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RELGVBQWUsQ0FBQyxhQUFhLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztJQUNyRCxlQUFlLENBQUMsYUFBYSxHQUFHLGtCQUFrQixDQUFDLENBQUM7SUFFcEQsaUJBQWlCO0lBQ2pCLGVBQWUsQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9fUk9PVF9QQVRIX18gPVxuICAoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwicm9vdC1wYXRoXCJdJykgYXMgSFRNTE1ldGFFbGVtZW50XG4gICk/LmNvbnRlbnQ/LnJlcGxhY2UoL1xcLyQvLCBcIlwiKSB8fCBcIlwiO1xuXG5mdW5jdGlvbiBfX0xPQURfU0NSSVBUX18oc3JjOiBzdHJpbmcsIGFzeW5jID0gZmFsc2UpIHtcbiAgY29uc3QgZHluYW1pY1NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIGR5bmFtaWNTY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gIGR5bmFtaWNTY3JpcHQuc3JjID0gc3JjICsgXCIuanNcIjtcbiAgZHluYW1pY1NjcmlwdC5hc3luYyA9IGFzeW5jO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGR5bmFtaWNTY3JpcHQpO1xufVxuXG4oZnVuY3Rpb24gKCkge1xuICAvLyBUYWlsd2luZCAmIENvbmZpZ1xuICBfX0xPQURfU0NSSVBUX18oX19ST09UX1BBVEhfXyArIFwiL2pzL2xpYi90YWlsd2luZC5taW5cIik7XG4gIF9fTE9BRF9TQ1JJUFRfXyhfX1JPT1RfUEFUSF9fICsgXCIvanMvbGliL3RhaWx3aW5kLWNvbmZpZ1wiKTtcblxuICAvLyBNb2R1bGUgbG9hZGVyXG4gIF9fTE9BRF9TQ1JJUFRfXyhfX1JPT1RfUEFUSF9fICsgXCIvanMvbGliL2RlZmluZVwiKTtcblxuICAvLyBEZXBlbmRlbmNpZXNcbiAgX19MT0FEX1NDUklQVF9fKF9fUk9PVF9QQVRIX18gKyBcIi9qcy9saWIvcmVhY3QubWluXCIpO1xuICBfX0xPQURfU0NSSVBUX18oX19ST09UX1BBVEhfXyArIFwiL2pzL2xpYi9yZWFjdC1kb20ubWluXCIpO1xuICBfX0xPQURfU0NSSVBUX18oX19ST09UX1BBVEhfXyArIFwiL2pzL2xpYi9sdWNpZGUtcmVhY3QubWluXCIpO1xuICBfX0xPQURfU0NSSVBUX18oX19ST09UX1BBVEhfXyArIFwiL2pzL2xpYi9leHRyYXMubWluXCIpO1xuICBfX0xPQURfU0NSSVBUX18oX19ST09UX1BBVEhfXyArIFwiL2pzL2xpYi9kbmQta2l0Lm1pblwiKTtcbiAgX19MT0FEX1NDUklQVF9fKF9fUk9PVF9QQVRIX18gKyBcIi9qcy9saWIvcmFkaXgtdWkubWluXCIpO1xuICBfX0xPQURfU0NSSVBUX18oX19ST09UX1BBVEhfXyArIFwiL2pzL2xpYi9zaGFkY24ubWluXCIpO1xuICBfX0xPQURfU0NSSVBUX18oX19ST09UX1BBVEhfXyArIFwiL2pzL2xpYi9jaGFydC5taW5cIik7XG4gIF9fTE9BRF9TQ1JJUFRfXyhfX1JPT1RfUEFUSF9fICsgXCIvanMvbGliL2Zvcm0ubWluXCIpO1xuXG4gIC8vIEFwcCBlbnRyeXBvaW50XG4gIF9fTE9BRF9TQ1JJUFRfXyhfX1JPT1RfUEFUSF9fICsgXCIvanMvaW5kZXhcIik7XG59KSgpO1xuIl19