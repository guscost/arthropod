define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hasDraggableData = hasDraggableData;
    function hasDraggableData(entry) {
        if (!entry) {
            return false;
        }
        const data = entry.data.current;
        if ((data === null || data === void 0 ? void 0 : data.type) === "Column" || (data === null || data === void 0 ? void 0 : data.type) === "Task") {
            return true;
        }
        return false;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWthbmJhbi91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFNQSw0Q0FnQkM7SUFoQkQsU0FBZ0IsZ0JBQWdCLENBQzlCLEtBQTJCO1FBSTNCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNYLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUVELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRWhDLElBQUksQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsSUFBSSxNQUFLLFFBQVEsSUFBSSxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxJQUFJLE1BQUssTUFBTSxFQUFFLENBQUM7WUFDckQsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZlLCBEYXRhUmVmLCBPdmVyIH0gZnJvbSBcIkBkbmQta2l0L2NvcmVcIjtcbmltcG9ydCB7IENvbHVtbkRyYWdEYXRhIH0gZnJvbSBcIi4vQm9hcmRDb2x1bW5cIjtcbmltcG9ydCB7IFRhc2tEcmFnRGF0YSB9IGZyb20gXCIuL1Rhc2tDYXJkXCI7XG5cbnR5cGUgRHJhZ2dhYmxlRGF0YSA9IENvbHVtbkRyYWdEYXRhIHwgVGFza0RyYWdEYXRhO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzRHJhZ2dhYmxlRGF0YTxUIGV4dGVuZHMgQWN0aXZlIHwgT3Zlcj4oXG4gIGVudHJ5OiBUIHwgbnVsbCB8IHVuZGVmaW5lZCxcbik6IGVudHJ5IGlzIFQgJiB7XG4gIGRhdGE6IERhdGFSZWY8RHJhZ2dhYmxlRGF0YT47XG59IHtcbiAgaWYgKCFlbnRyeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBlbnRyeS5kYXRhLmN1cnJlbnQ7XG5cbiAgaWYgKGRhdGE/LnR5cGUgPT09IFwiQ29sdW1uXCIgfHwgZGF0YT8udHlwZSA9PT0gXCJUYXNrXCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiJdfQ==