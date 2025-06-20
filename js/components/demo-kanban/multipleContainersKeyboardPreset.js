define(["require", "exports", "@dnd-kit/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.coordinateGetter = void 0;
    const directions = [
        core_1.KeyboardCode.Down,
        core_1.KeyboardCode.Right,
        core_1.KeyboardCode.Up,
        core_1.KeyboardCode.Left,
    ];
    const coordinateGetter = (event, { context: { active, droppableRects, droppableContainers, collisionRect } }) => {
        if (directions.includes(event.code)) {
            event.preventDefault();
            if (!active || !collisionRect) {
                return;
            }
            const filteredContainers = [];
            droppableContainers.getEnabled().forEach((entry) => {
                var _a, _b, _c;
                if (!entry || (entry === null || entry === void 0 ? void 0 : entry.disabled)) {
                    return;
                }
                const rect = droppableRects.get(entry.id);
                if (!rect) {
                    return;
                }
                const data = entry.data.current;
                if (data) {
                    const { type, children } = data;
                    if (type === "Column" && (children === null || children === void 0 ? void 0 : children.length) > 0) {
                        if (((_a = active.data.current) === null || _a === void 0 ? void 0 : _a.type) !== "Column") {
                            return;
                        }
                    }
                }
                switch (event.code) {
                    case core_1.KeyboardCode.Down:
                        if (((_b = active.data.current) === null || _b === void 0 ? void 0 : _b.type) === "Column") {
                            return;
                        }
                        if (collisionRect.top < rect.top) {
                            // find all droppable areas below
                            filteredContainers.push(entry);
                        }
                        break;
                    case core_1.KeyboardCode.Up:
                        if (((_c = active.data.current) === null || _c === void 0 ? void 0 : _c.type) === "Column") {
                            return;
                        }
                        if (collisionRect.top > rect.top) {
                            // find all droppable areas above
                            filteredContainers.push(entry);
                        }
                        break;
                    case core_1.KeyboardCode.Left:
                        if (collisionRect.left >= rect.left + rect.width) {
                            // find all droppable areas to left
                            filteredContainers.push(entry);
                        }
                        break;
                    case core_1.KeyboardCode.Right:
                        // find all droppable areas to right
                        if (collisionRect.left + collisionRect.width <= rect.left) {
                            filteredContainers.push(entry);
                        }
                        break;
                }
            });
            const collisions = (0, core_1.closestCorners)({
                active,
                collisionRect: collisionRect,
                droppableRects,
                droppableContainers: filteredContainers,
                pointerCoordinates: null,
            });
            const closestId = (0, core_1.getFirstCollision)(collisions, "id");
            if (closestId != null) {
                const newDroppable = droppableContainers.get(closestId);
                const newNode = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.node.current;
                const newRect = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.rect.current;
                if (newNode && newRect) {
                    return {
                        x: newRect.left,
                        y: newRect.top,
                    };
                }
            }
        }
        return undefined;
    };
    exports.coordinateGetter = coordinateGetter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGVDb250YWluZXJzS2V5Ym9hcmRQcmVzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWthbmJhbi9tdWx0aXBsZUNvbnRhaW5lcnNLZXlib2FyZFByZXNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBUUEsTUFBTSxVQUFVLEdBQWE7UUFDM0IsbUJBQVksQ0FBQyxJQUFJO1FBQ2pCLG1CQUFZLENBQUMsS0FBSztRQUNsQixtQkFBWSxDQUFDLEVBQUU7UUFDZixtQkFBWSxDQUFDLElBQUk7S0FDbEIsQ0FBQztJQUVLLE1BQU0sZ0JBQWdCLEdBQTZCLENBQ3hELEtBQUssRUFDTCxFQUFFLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFDM0UsRUFBRTtRQUNGLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNwQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdkIsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUM5QixPQUFPO1lBQ1QsQ0FBQztZQUVELE1BQU0sa0JBQWtCLEdBQXlCLEVBQUUsQ0FBQztZQUVwRCxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTs7Z0JBQ2pELElBQUksQ0FBQyxLQUFLLEtBQUksS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVEsQ0FBQSxFQUFFLENBQUM7b0JBQzlCLE9BQU87Z0JBQ1QsQ0FBQztnQkFFRCxNQUFNLElBQUksR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFMUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNWLE9BQU87Z0JBQ1QsQ0FB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O29CQUN2QixPQUFPO3dCQUNMLENBQUMsRUFBRSxPQUFPLENBQUMsSUFBSTt3QkFDZixDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUc7cUJBQ2YsQ0FBQztnQkFDSixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDLENBQUM7SUE3RlcsUUFBQSxnQkFBZ0Isb0JBNkYzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNsb3Nlc3RDb3JuZXJzLFxuICBnZXRGaXJzdENvbGxpc2lvbixcbiAgS2V5Ym9hcmRDb2RlLFxuICBEcm9wcGFibGVDb250YWluZXIsXG4gIEtleWJvYXJkQ29vcmRpbmF0ZUdldHRlcixcbn0gZnJvbSBcIkBkbmQta2l0L2NvcmVcIjtcblxuY29uc3QgZGlyZWN0aW9uczogc3RyaW5nW10gPSBbXG4gIEtleWJvYXJkQ29kZS5Eb3duLFxuICBLZXlib2FyZENvZGUuUmlnaHQsXG4gIEtleWJvYXJkQ29kZS5VcCxcbiAgS2V5Ym9hcmRDb2RlLkxlZnQsXG5dO1xuXG5leHBvcnQgY29uc3QgY29vcmRpbmF0ZUdldHRlcjogS2V5Ym9hcmRDb29yZGluYXRlR2V0dGVyID0gKFxuICBldmVudCxcbiAgeyBjb250ZXh0OiB7IGFjdGl2ZSwgZHJvcHBhYmxlUmVjdHMsIGRyb3BwYWJsZUNvbnRhaW5lcnMsIGNvbGxpc2lvblJlY3QgfSB9LFxuKSA9PiB7XG4gIGlmIChkaXJlY3Rpb25zLmluY2x1ZGVzKGV2ZW50LmNvZGUpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghYWN0aXZlIHx8ICFjb2xsaXNpb25SZWN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyZWRDb250YWluZXJzOiBEcm9wcGFibGVDb250YWluZXJbXSA9IFtdO1xuXG4gICAgZHJvcHBhYmxlQ29udGFpbmVycy5nZXRFbmFibGVkKCkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmICghZW50cnkgfHwgZW50cnk/LmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVjdCA9IGRyb3BwYWJsZVJlY3RzLmdldChlbnRyeS5pZCk7XG5cbiAgICAgIGlmICghcmVjdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBlbnRyeS5kYXRhLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgY2hpbGRyZW4gfSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09IFwiQ29sdW1uXCIgJiYgY2hpbGRyZW4/Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAoYWN0aXZlLmRhdGEuY3VycmVudD8udHlwZSAhPT0gXCJDb2x1bW5cIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgY2FzZSBLZXlib2FyZENvZGUuRG93bjpcbiAgICAgICAgICBpZiAoYWN0aXZlLmRhdGEuY3VycmVudD8udHlwZSA9PT0gXCJDb2x1bW5cIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29sbGlzaW9uUmVjdC50b3AgPCByZWN0LnRvcCkge1xuICAgICAgICAgICAgLy8gZmluZCBhbGwgZHJvcHBhYmxlIGFyZWFzIGJlbG93XG4gICAgICAgICAgICBmaWx0ZXJlZENvbnRhaW5lcnMucHVzaChlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtleWJvYXJkQ29kZS5VcDpcbiAgICAgICAgICBpZiAoYWN0aXZlLmRhdGEuY3VycmVudD8udHlwZSA9PT0gXCJDb2x1bW5cIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29sbGlzaW9uUmVjdC50b3AgPiByZWN0LnRvcCkge1xuICAgICAgICAgICAgLy8gZmluZCBhbGwgZHJvcHBhYmxlIGFyZWFzIGFib3ZlXG4gICAgICAgICAgICBmaWx0ZXJlZENvbnRhaW5lcnMucHVzaChlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtleWJvYXJkQ29kZS5MZWZ0OlxuICAgICAgICAgIGlmIChjb2xsaXNpb25SZWN0LmxlZnQgPj0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCkge1xuICAgICAgICAgICAgLy8gZmluZCBhbGwgZHJvcHBhYmxlIGFyZWFzIHRvIGxlZnRcbiAgICAgICAgICAgIGZpbHRlcmVkQ29udGFpbmVycy5wdXNoKGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgS2V5Ym9hcmRDb2RlLlJpZ2h0OlxuICAgICAgICAgIC8vIGZpbmQgYWxsIGRyb3BwYWJsZSBhcmVhcyB0byByaWdodFxuICAgICAgICAgIGlmIChjb2xsaXNpb25SZWN0LmxlZnQgKyBjb2xsaXNpb25SZWN0LndpZHRoIDw9IHJlY3QubGVmdCkge1xuICAgICAgICAgICAgZmlsdGVyZWRDb250YWluZXJzLnB1c2goZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjb2xsaXNpb25zID0gY2xvc2VzdENvcm5lcnMoe1xuICAgICAgYWN0aXZlLFxuICAgICAgY29sbGlzaW9uUmVjdDogY29sbGlzaW9uUmVjdCxcbiAgICAgIGRyb3BwYWJsZVJlY3RzLFxuICAgICAgZHJvcHBhYmxlQ29udGFpbmVyczogZmlsdGVyZWRDb250YWluZXJzLFxuICAgICAgcG9pbnRlckNvb3JkaW5hdGVzOiBudWxsLFxuICAgIH0pO1xuICAgIGNvbnN0IGNsb3Nlc3RJZCA9IGdldEZpcnN0Q29sbGlzaW9uKGNvbGxpc2lvbnMsIFwiaWRcIik7XG5cbiAgICBpZiAoY2xvc2VzdElkICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IG5ld0Ryb3BwYWJsZSA9IGRyb3BwYWJsZUNvbnRhaW5lcnMuZ2V0KGNsb3Nlc3RJZCk7XG4gICAgICBjb25zdCBuZXdOb2RlID0gbmV3RHJvcHBhYmxlPy5ub2RlLmN1cnJlbnQ7XG4gICAgICBjb25zdCBuZXdSZWN0ID0gbmV3RHJvcHBhYmxlPy5yZWN0LmN1cnJlbnQ7XG5cbiAgICAgIGlmIChuZXdOb2RlICYmIG5ld1JlY3QpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiBuZXdSZWN0LmxlZnQsXG4gICAgICAgICAgeTogbmV3UmVjdC50b3AsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4iXX0=