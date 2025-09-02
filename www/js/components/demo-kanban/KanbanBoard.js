define(["require", "exports", "react/jsx-runtime", "react", "react-dom", "./BoardColumn", "@dnd-kit/core", "@dnd-kit/sortable", "./TaskCard", "./utils", "./multipleContainersKeyboardPreset"], function (require, exports, jsx_runtime_1, react_1, react_dom_1, BoardColumn_1, core_1, sortable_1, TaskCard_1, utils_1, multipleContainersKeyboardPreset_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KanbanBoard = KanbanBoard;
    const defaultCols = [
        {
            id: "todo",
            title: "Todo",
        },
        {
            id: "in-progress",
            title: "In progress",
        },
        {
            id: "done",
            title: "Done",
        },
    ];
    const initialTasks = [
        {
            id: "task1",
            columnId: "done",
            content: "Project initiation and planning",
        },
        {
            id: "task2",
            columnId: "done",
            content: "Gather requirements from stakeholders",
        },
        {
            id: "task3",
            columnId: "done",
            content: "Create wireframes and mockups",
        },
        {
            id: "task4",
            columnId: "in-progress",
            content: "Develop homepage layout",
        },
        {
            id: "task5",
            columnId: "in-progress",
            content: "Design color scheme and typography",
        },
        {
            id: "task6",
            columnId: "todo",
            content: "Implement user authentication",
        },
        {
            id: "task7",
            columnId: "todo",
            content: "Build contact us page",
        },
        {
            id: "task8",
            columnId: "todo",
            content: "Create product catalog",
        },
        {
            id: "task9",
            columnId: "todo",
            content: "Develop about us page",
        },
        {
            id: "task10",
            columnId: "todo",
            content: "Optimize website for mobile devices",
        },
        {
            id: "task11",
            columnId: "todo",
            content: "Integrate payment gateway",
        },
        {
            id: "task12",
            columnId: "todo",
            content: "Perform testing and bug fixing",
        },
        {
            id: "task13",
            columnId: "todo",
            content: "Launch website and deploy to server",
        },
    ];
    function KanbanBoard() {
        const [columns, setColumns] = (0, react_1.useState)(defaultCols);
        const pickedUpTaskColumn = (0, react_1.useRef)(null);
        const columnsId = (0, react_1.useMemo)(() => columns.map((col) => col.id), [columns]);
        const [tasks, setTasks] = (0, react_1.useState)(initialTasks);
        const [activeColumn, setActiveColumn] = (0, react_1.useState)(null);
        const [activeTask, setActiveTask] = (0, react_1.useState)(null);
        const sensors = (0, core_1.useSensors)((0, core_1.useSensor)(core_1.MouseSensor), (0, core_1.useSensor)(core_1.TouchSensor), (0, core_1.useSensor)(core_1.KeyboardSensor, {
            coordinateGetter: multipleContainersKeyboardPreset_1.coordinateGetter,
        }));
        function getDraggingTaskData(taskId, columnId) {
            const tasksInColumn = tasks.filter((task) => task.columnId === columnId);
            const taskPosition = tasksInColumn.findIndex((task) => task.id === taskId);
            const column = columns.find((col) => col.id === columnId);
            return {
                tasksInColumn,
                taskPosition,
                column,
            };
        }
        const announcements = {
            onDragStart({ active }) {
                var _a, _b;
                if (!(0, utils_1.hasDraggableData)(active))
                    return;
                if (((_a = active.data.current) === null || _a === void 0 ? void 0 : _a.type) === "Column") {
                    const startColumnIdx = columnsId.findIndex((id) => id === active.id);
                    const startColumn = columns[startColumnIdx];
                    return `Picked up Column ${startColumn === null || startColumn === void 0 ? void 0 : startColumn.title} at position: ${startColumnIdx + 1} of ${columnsId.length}`;
                }
                else if (((_b = active.data.current) === null || _b === void 0 ? void 0 : _b.type) === "Task") {
                    pickedUpTaskColumn.current = active.data.current.task.columnId;
                    const { tasksInColumn, taskPosition, column } = getDraggingTaskData(active.id, pickedUpTaskColumn.current);
                    return `Picked up Task ${active.data.current.task.content} at position: ${taskPosition + 1} of ${tasksInColumn.length} in column ${column === null || column === void 0 ? void 0 : column.title}`;
                }
            },
            onDragOver({ active, over }) {
                var _a, _b, _c, _d;
                if (!(0, utils_1.hasDraggableData)(active) || !(0, utils_1.hasDraggableData)(over))
                    return;
                if (((_a = active.data.current) === null || _a === void 0 ? void 0 : _a.type) === "Column" &&
                    ((_b = over.data.current) === null || _b === void 0 ? void 0 : _b.type) === "Column") {
                    const overColumnIdx = columnsId.findIndex((id) => id === over.id);
                    return `Column ${active.data.current.column.title} was moved over ${over.data.current.column.title} at position ${overColumnIdx + 1} of ${columnsId.length}`;
                }
                else if (((_c = active.data.current) === null || _c === void 0 ? void 0 : _c.type) === "Task" &&
                    ((_d = over.data.current) === null || _d === void 0 ? void 0 : _d.type) === "Task") {
                    const { tasksInColumn, taskPosition, column } = getDraggingTaskData(over.id, over.data.current.task.columnId);
                    if (over.data.current.task.columnId !== pickedUpTaskColumn.current) {
                        return `Task ${active.data.current.task.content} was moved over column ${column === null || column === void 0 ? void 0 : column.title} in position ${taskPosition + 1} of ${tasksInColumn.length}`;
                    }
                    return `Task was moved over position ${taskPosition + 1} of ${tasksInColumn.length} in column ${column === null || column === void 0 ? void 0 : column.title}`;
                }
            },
            onDragEnd({ active, over }) {
                var _a, _b, _c, _d;
                if (!(0, utils_1.hasDraggableData)(active) || !(0, utils_1.hasDraggableData)(over)) {
                    pickedUpTaskColumn.current = null;
                    return;
                }
                if (((_a = active.data.current) === null || _a === void 0 ? void 0 : _a.type) === "Column" &&
                    ((_b = over.data.current) === null || _b === void 0 ? void 0 : _b.type) === "Column") {
                    const overColumnPosition = columnsId.findIndex((id) => id === over.id);
                    return `Column ${active.data.current.column.title} was dropped into position ${overColumnPosition + 1} of ${columnsId.length}`;
                }
                else if (((_c = active.data.current) === null || _c === void 0 ? void 0 : _c.type) === "Task" &&
                    ((_d = over.data.current) === null || _d === void 0 ? void 0 : _d.type) === "Task") {
                    const { tasksInColumn, taskPosition, column } = getDraggingTaskData(over.id, over.data.current.task.columnId);
                    if (over.data.current.task.columnId !== pickedUpTaskColumn.current) {
                        return `Task was dropped into column ${column === null || column === void 0 ? void 0 : column.title} in position ${taskPosition + 1} of ${tasksInColumn.length}`;
                    }
                    return `Task was dropped into position ${taskPosition + 1} of ${tasksInColumn.length} in column ${column === null || column === void 0 ? void 0 : column.title}`;
                }
                pickedUpTaskColumn.current = null;
            },
            onDragCancel({ active }) {
                var _a;
                pickedUpTaskColumn.current = null;
                if (!(0, utils_1.hasDraggableData)(active))
                    return;
                return `Dragging ${(_a = active.data.current) === null || _a === void 0 ? void 0 : _a.type} cancelled.`;
            },
        };
        return ((0, jsx_runtime_1.jsxs)(core_1.DndContext, { accessibility: {
                announcements,
            }, sensors: sensors, collisionDetection: core_1.closestCenter, onDragStart: onDragStart, onDragEnd: onDragEnd, onDragOver: onDragOver, children: [(0, jsx_runtime_1.jsx)(BoardColumn_1.BoardContainer, { children: (0, jsx_runtime_1.jsx)(sortable_1.SortableContext, { items: columnsId, children: columns.map((col) => ((0, jsx_runtime_1.jsx)(BoardColumn_1.BoardColumn, { column: col, tasks: tasks.filter((task) => task.columnId === col.id) }, col.id))) }) }), "document" in window &&
                    (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsxs)(core_1.DragOverlay, { children: [activeColumn && ((0, jsx_runtime_1.jsx)(BoardColumn_1.BoardColumn, { isOverlay: true, column: activeColumn, tasks: tasks.filter((task) => task.columnId === activeColumn.id) })), activeTask && (0, jsx_runtime_1.jsx)(TaskCard_1.TaskCard, { task: activeTask, isOverlay: true })] }), document.body)] }));
        function onDragStart(event) {
            if (!(0, utils_1.hasDraggableData)(event.active))
                return;
            const data = event.active.data.current;
            if ((data === null || data === void 0 ? void 0 : data.type) === "Column") {
                setActiveColumn(data.column);
                return;
            }
            if ((data === null || data === void 0 ? void 0 : data.type) === "Task") {
                setActiveTask(data.task);
                return;
            }
        }
        function onDragEnd(event) {
            setActiveColumn(null);
            setActiveTask(null);
            const { active, over } = event;
            if (!over)
                return;
            const activeId = active.id;
            const overId = over.id;
            if (!(0, utils_1.hasDraggableData)(active))
                return;
            const activeData = active.data.current;
            if (activeId === overId)
                return;
            const isActiveAColumn = (activeData === null || activeData === void 0 ? void 0 : activeData.type) === "Column";
            if (!isActiveAColumn)
                return;
            setColumns((columns) => {
                const activeColumnIndex = columns.findIndex((col) => col.id === activeId);
                const overColumnIndex = columns.findIndex((col) => col.id === overId);
                return (0, sortable_1.arrayMove)(columns, activeColumnIndex, overColumnIndex);
            });
        }
        function onDragOver(event) {
            const { active, over } = event;
            if (!over)
                return;
            const activeId = active.id;
            const overId = over.id;
            if (activeId === overId)
                return;
            if (!(0, utils_1.hasDraggableData)(active) || !(0, utils_1.hasDraggableData)(over))
                return;
            const activeData = active.data.current;
            const overData = over.data.current;
            const isActiveATask = (activeData === null || activeData === void 0 ? void 0 : activeData.type) === "Task";
            const isOverATask = (overData === null || overData === void 0 ? void 0 : overData.type) === "Task";
            if (!isActiveATask)
                return;
            // Im dropping a Task over another Task
            if (isActiveATask && isOverATask) {
                setTasks((tasks) => {
                    const activeIndex = tasks.findIndex((t) => t.id === activeId);
                    const overIndex = tasks.findIndex((t) => t.id === overId);
                    const activeTask = tasks[activeIndex];
                    const overTask = tasks[overIndex];
                    if (activeTask &&
                        overTask &&
                        activeTask.columnId !== overTask.columnId) {
                        activeTask.columnId = overTask.columnId;
                        return (0, sortable_1.arrayMove)(tasks, activeIndex, overIndex - 1);
                    }
                    return (0, sortable_1.arrayMove)(tasks, activeIndex, overIndex);
                });
            }
            const isOverAColumn = (overData === null || overData === void 0 ? void 0 : overData.type) === "Column";
            // Im dropping a Task over a column
            if (isActiveATask && isOverAColumn) {
                setTasks((tasks) => {
                    const activeIndex = tasks.findIndex((t) => t.id === activeId);
                    const activeTask = tasks[activeIndex];
                    if (activeTask) {
                        activeTask.columnId = overId;
                        return (0, sortable_1.arrayMove)(tasks, activeIndex, activeIndex);
                    }
                    return tasks;
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FuYmFuQm9hcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWthbmJhbi9LYW5iYW5Cb2FyZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBNkdBLGtDQXVRQztJQTNWRCxNQUFNLFdBQVcsR0FBRztRQUNsQjtZQUNFLEVBQUUsRUFBRSxNQUFlO1lBQ25CLEtBQUssRUFBRSxNQUFNO1NBQ2Q7UUFDRDtZQUNFLEVBQUUsRUFBRSxhQUFzQjtZQUMxQixLQUFLLEVBQUUsYUFBYTtTQUNyQjtRQUNEO1lBQ0UsRUFBRSxFQUFFLE1BQWU7WUFDbkIsS0FBSyxFQUFFLE1BQU07U0FDZDtLQUNpQixDQUFDO0lBSXJCLE1BQU0sWUFBWSxHQUFXO1FBQzNCO1lBQ0UsRUFBRSxFQUFFLE9BQU87WUFDWCxRQUFRLEVBQUUsTUFBTTtZQUNoQixPQUFPLEVBQUUsaUNBQWlDO1NBQzNDO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsT0FBTztZQUNYLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE9BQU8sRUFBRSx1Q0FBdUM7U0FDakQ7UUFDRDtZQUNFLEVBQUUsRUFBRSxPQUFPO1lBQ1gsUUFBUSxFQUFFLE1BQU07WUFDaEIsT0FBTyxFQUFFLCtCQUErQjtTQUN6QztRQUNEO1lBQ0UsRUFBRSxFQUFFLE9BQU87WUFDWCxRQUFRLEVBQUUsYUFBYTtZQUN2QixPQUFPLEVBQUUseUJBQXlCO1NBQ25DO1FBQ0Q7WUFDRSxFQUFFLEVBQUUsT0FBTztZQUNYLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLE9BQU8sRUFBRSxvQ0FBb0M7U0FDOUM7UUFDRDtZQUNFLEVBQUUsRUFBRSxPQUFPO1lBQ1gsUUFBUSxFQUFFLE1BQU07WUFDaEIsT0FBTyxFQUFFLCtCQUErQjtTQUN6QztRQUNEO1lBQ0UsRUFBRSxFQUFFLE9BQU87WUFDWCxRQUFRLEVBQUUsTUFBTTtZQUNoQixPQUFPLEVBQUUsdUJBQXVCO1NBQ2pDO1FBQ0Q7WUFDRSxF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ImltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IHsgQm9hcmRDb2x1bW4sIEJvYXJkQ29udGFpbmVyIH0gZnJvbSBcIi4vQm9hcmRDb2x1bW5cIjtcbmltcG9ydCB7XG4gIERuZENvbnRleHQsXG4gIHR5cGUgRHJhZ0VuZEV2ZW50LFxuICB0eXBlIERyYWdPdmVyRXZlbnQsXG4gIERyYWdPdmVybGF5LFxuICB0eXBlIERyYWdTdGFydEV2ZW50LFxuICB1c2VTZW5zb3IsXG4gIHVzZVNlbnNvcnMsXG4gIEtleWJvYXJkU2Vuc29yLFxuICBBbm5vdW5jZW1lbnRzLFxuICBVbmlxdWVJZGVudGlmaWVyLFxuICBUb3VjaFNlbnNvcixcbiAgTW91c2VTZW5zb3IsXG4gIGNsb3Nlc3RDZW50ZXIsXG59IGZyb20gXCJAZG5kLWtpdC9jb3JlXCI7XG5pbXBvcnQgeyBTb3J0YWJsZUNvbnRleHQsIGFycmF5TW92ZSB9IGZyb20gXCJAZG5kLWtpdC9zb3J0YWJsZVwiO1xuaW1wb3J0IHsgdHlwZSBUYXNrLCBUYXNrQ2FyZCB9IGZyb20gXCIuL1Rhc2tDYXJkXCI7XG5pbXBvcnQgdHlwZSB7IENvbHVtbiB9IGZyb20gXCIuL0JvYXJkQ29sdW1uXCI7XG5pbXBvcnQgeyBoYXNEcmFnZ2FibGVEYXRhIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IGNvb3JkaW5hdGVHZXR0ZXIgfSBmcm9tIFwiLi9tdWx0aXBsZUNvbnRhaW5lcnNLZXlib2FyZFByZXNldFwiO1xuXG5jb25zdCBkZWZhdWx0Q29scyA9IFtcbiAge1xuICAgIGlkOiBcInRvZG9cIiBhcyBjb25zdCxcbiAgICB0aXRsZTogXCJUb2RvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJpbi1wcm9ncmVzc1wiIGFzIGNvbnN0LFxuICAgIHRpdGxlOiBcIkluIHByb2dyZXNzXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJkb25lXCIgYXMgY29uc3QsXG4gICAgdGl0bGU6IFwiRG9uZVwiLFxuICB9LFxuXSBzYXRpc2ZpZXMgQ29sdW1uW107XG5cbmV4cG9ydCB0eXBlIENvbHVtbklkID0gKHR5cGVvZiBkZWZhdWx0Q29scylbbnVtYmVyXVtcImlkXCJdO1xuXG5jb25zdCBpbml0aWFsVGFza3M6IFRhc2tbXSA9IFtcbiAge1xuICAgIGlkOiBcInRhc2sxXCIsXG4gICAgY29sdW1uSWQ6IFwiZG9uZVwiLFxuICAgIGNvbnRlbnQ6IFwiUHJvamVjdCBpbml0aWF0aW9uIGFuZCBwbGFubmluZ1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidGFzazJcIixcbiAgICBjb2x1bW5JZDogXCJkb25lXCIsXG4gICAgY29udGVudDogXCJHYXRoZXIgcmVxdWlyZW1lbnRzIGZyb20gc3Rha2Vob2xkZXJzXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0YXNrM1wiLFxuICAgIGNvbHVtbklkOiBcImRvbmVcIixcbiAgICBjb250ZW50OiBcIkNyZWF0ZSB3aXJlZnJhbWVzIGFuZCBtb2NrdXBzXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0YXNrNFwiLFxuICAgIGNvbHVtbklkOiBcImluLXByb2dyZXNzXCIsXG4gICAgY29udGVudDogXCJEZXZlbG9wIGhvbWVwYWdlIGxheW91dFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidGFzazVcIixcbiAgICBjb2x1bW5JZDogXCJpbi1wcm9ncmVzc1wiLFxuICAgIGNvbnRlbnQ6IFwiRGVzaWduIGNvbG9yIHNjaGVtZSBhbmQgdHlwb2dyYXBoeVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidGFzazZcIixcbiAgICBjb2x1bW5JZDogXCJ0b2RvXCIsXG4gICAgY29udGVudDogXCJJbXBsZW1lbnQgdXNlciBhdXRoZW50aWNhdGlvblwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidGFzazdcIixcbiAgICBjb2x1bW5JZDogXCJ0b2RvXCIsXG4gICAgY29udGVudDogXCJCdWlsZCBjb250YWN0IHVzIHBhZ2VcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInRhc2s4XCIsXG4gICAgY29sdW1uSWQ6IFwidG9kb1wiLFxuICAgIGNvbnRlbnQ6IFwiQ3JlYXRlIHByb2R1Y3QgY2F0YWxvZ1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidGFzazlcIixcbiAgICBjb2x1bW5JZDogXCJ0b2RvXCIsXG4gICAgY29udGVudDogXCJEZXZlbG9wIGFib3V0IHVzIHBhZ2VcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInRhc2sxMFwiLFxuICAgIGNvbHVtbklkOiBcInRvZG9cIixcbiAgICBjb250ZW50OiBcIk9wdGltaXplIHdlYnNpdGUgZm9yIG1vYmlsZSBkZXZpY2VzXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0YXNrMTFcIixcbiAgICBjb2x1bW5JZDogXCJ0b2RvXCIsXG4gICAgY29udGVudDogXCJJbnRlZ3JhdGUgcGF5bWVudCBnYXRld2F5XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJ0YXNrMTJcIixcbiAgICBjb2x1bW5JZDogXCJ0b2RvXCIsXG4gICAgY29udGVudDogXCJQZXJmb3JtIHRlc3RpbmcgYW5kIGJ1ZyBmaXhpbmdcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInRhc2sxM1wiLFxuICAgIGNvbHVtbklkOiBcInRvZG9cIixcbiAgICBjb250ZW50OiBcIkxhdW5jaCB3ZWJzaXRlIGFuZCBkZXBsb3kgdG8gc2VydmVyXCIsXG4gIH0sXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIEthbmJhbkJvYXJkKCkge1xuICBjb25zdCBbY29sdW1ucywgc2V0Q29sdW1uc10gPSB1c2VTdGF0ZTxDb2x1bW5bXT4oZGVmYXVsdENvbHMpO1xuICBjb25zdCBwaWNrZWRVcFRhc2tDb2x1bW4gPSB1c2VSZWY8Q29sdW1uSWQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgY29sdW1uc0lkID0gdXNlTWVtbygoKSA9PiBjb2x1bW5zLm1hcCgoY29sKSA9PiBjb2wuaWQpLCBbY29sdW1uc10pO1xuXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGU8VGFza1tdPihpbml0aWFsVGFza3MpO1xuXG4gIGNvbnN0IFthY3RpdmVDb2x1bW4sIHNldEFjdGl2ZUNvbHVtbl0gPSB1c2VTdGF0ZTxDb2x1bW4gfCBudWxsPihudWxsKTtcblxuICBjb25zdCBbYWN0aXZlVGFzaywgc2V0QWN0aXZlVGFza10gPSB1c2VTdGF0ZTxUYXNrIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3Qgc2Vuc29ycyA9IHVzZVNlbnNvcnMoXG4gICAgdXNlU2Vuc29yKE1vdXNlU2Vuc29yKSxcbiAgICB1c2VTZW5zb3IoVG91Y2hTZW5zb3IpLFxuICAgIHVzZVNlbnNvcihLZXlib2FyZFNlbnNvciwge1xuICAgICAgY29vcmRpbmF0ZUdldHRlcjogY29vcmRpbmF0ZUdldHRlcixcbiAgICB9KSxcbiAgKTtcblxuICBmdW5jdGlvbiBnZXREcmFnZ2luZ1Rhc2tEYXRhKHRhc2tJZDogVW5pcXVlSWRlbnRpZmllciwgY29sdW1uSWQ6IENvbHVtbklkKSB7XG4gICAgY29uc3QgdGFza3NJbkNvbHVtbiA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5jb2x1bW5JZCA9PT0gY29sdW1uSWQpO1xuICAgIGNvbnN0IHRhc2tQb3NpdGlvbiA9IHRhc2tzSW5Db2x1bW4uZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgIGNvbnN0IGNvbHVtbiA9IGNvbHVtbnMuZmluZCgoY29sKSA9PiBjb2wuaWQgPT09IGNvbHVtbklkKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGFza3NJbkNvbHVtbixcbiAgICAgIHRhc2tQb3NpdGlvbixcbiAgICAgIGNvbHVtbixcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgYW5ub3VuY2VtZW50czogQW5ub3VuY2VtZW50cyA9IHtcbiAgICBvbkRyYWdTdGFydCh7IGFjdGl2ZSB9KSB7XG4gICAgICBpZiAoIWhhc0RyYWdnYWJsZURhdGEoYWN0aXZlKSkgcmV0dXJuO1xuICAgICAgaWYgKGFjdGl2ZS5kYXRhLmN1cnJlbnQ/LnR5cGUgPT09IFwiQ29sdW1uXCIpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2x1bW5JZHggPSBjb2x1bW5zSWQuZmluZEluZGV4KChpZCkgPT4gaWQgPT09IGFjdGl2ZS5pZCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sdW1uID0gY29sdW1uc1tzdGFydENvbHVtbklkeF07XG4gICAgICAgIHJldHVybiBgUGlja2VkIHVwIENvbHVtbiAke3N0YXJ0Q29sdW1uPy50aXRsZX0gYXQgcG9zaXRpb246ICR7XG4gICAgICAgICAgc3RhcnRDb2x1bW5JZHggKyAxXG4gICAgICAgIH0gb2YgJHtjb2x1bW5zSWQubGVuZ3RofWA7XG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZS5kYXRhLmN1cnJlbnQ/LnR5cGUgPT09IFwiVGFza1wiKSB7XG4gICAgICAgIHBpY2tlZFVwVGFza0NvbHVtbi5jdXJyZW50ID0gYWN0aXZlLmRhdGEuY3VycmVudC50YXNrLmNvbHVtbklkO1xuICAgICAgICBjb25zdCB7IHRhc2tzSW5Db2x1bW4sIHRhc2tQb3NpdGlvbiwgY29sdW1uIH0gPSBnZXREcmFnZ2luZ1Rhc2tEYXRhKFxuICAgICAgICAgIGFjdGl2ZS5pZCxcbiAgICAgICAgICBwaWNrZWRVcFRhc2tDb2x1bW4uY3VycmVudCxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGBQaWNrZWQgdXAgVGFzayAke1xuICAgICAgICAgIGFjdGl2ZS5kYXRhLmN1cnJlbnQudGFzay5jb250ZW50XG4gICAgICAgIH0gYXQgcG9zaXRpb246ICR7dGFza1Bvc2l0aW9uICsgMX0gb2YgJHtcbiAgICAgICAgICB0YXNrc0luQ29sdW1uLmxlbmd0aFxuICAgICAgICB9IGluIGNvbHVtbiAke2NvbHVtbj8udGl0bGV9YDtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uRHJhZ092ZXIoeyBhY3RpdmUsIG92ZXIgfSkge1xuICAgICAgaWYgKCFoYXNEcmFnZ2FibGVEYXRhKGFjdGl2ZSkgfHwgIWhhc0RyYWdnYWJsZURhdGEob3ZlcikpIHJldHVybjtcblxuICAgICAgaWYgKFxuICAgICAgICBhY3RpdmUuZGF0YS5jdXJyZW50Py50eXBlID09PSBcIkNvbHVtblwiICYmXG4gICAgICAgIG92ZXIuZGF0YS5jdXJyZW50Py50eXBlID09PSBcIkNvbHVtblwiXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb3ZlckNvbHVtbklkeCA9IGNvbHVtbnNJZC5maW5kSW5kZXgoKGlkKSA9PiBpZCA9PT0gb3Zlci5pZCk7XG4gICAgICAgIHJldHVybiBgQ29sdW1uICR7YWN0aXZlLmRhdGEuY3VycmVudC5jb2x1bW4udGl0bGV9IHdhcyBtb3ZlZCBvdmVyICR7XG4gICAgICAgICAgb3Zlci5kYXRhLmN1cnJlbnQuY29sdW1uLnRpdGxlXG4gICAgICAgIH0gYXQgcG9zaXRpb24gJHtvdmVyQ29sdW1uSWR4ICsgMX0gb2YgJHtjb2x1bW5zSWQubGVuZ3RofWA7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBhY3RpdmUuZGF0YS5jdXJyZW50Py50eXBlID09PSBcIlRhc2tcIiAmJlxuICAgICAgICBvdmVyLmRhdGEuY3VycmVudD8udHlwZSA9PT0gXCJUYXNrXCJcbiAgICAgICkge1xuICAgICAgICBjb25zdCB7IHRhc2tzSW5Db2x1bW4sIHRhc2tQb3NpdGlvbiwgY29sdW1uIH0gPSBnZXREcmFnZ2luZ1Rhc2tEYXRhKFxuICAgICAgICAgIG92ZXIuaWQsXG4gICAgICAgICAgb3Zlci5kYXRhLmN1cnJlbnQudGFzay5jb2x1bW5JZCxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG92ZXIuZGF0YS5jdXJyZW50LnRhc2suY29sdW1uSWQgIT09IHBpY2tlZFVwVGFza0NvbHVtbi5jdXJyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGBUYXNrICR7XG4gICAgICAgICAgICBhY3RpdmUuZGF0YS5jdXJyZW50LnRhc2suY29udGVudFxuICAgICAgICAgIH0gd2FzIG1vdmVkIG92ZXIgY29sdW1uICR7Y29sdW1uPy50aXRsZX0gaW4gcG9zaXRpb24gJHtcbiAgICAgICAgICAgIHRhc2tQb3NpdGlvbiArIDFcbiAgICAgICAgICB9IG9mICR7dGFza3NJbkNvbHVtbi5sZW5ndGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFRhc2sgd2FzIG1vdmVkIG92ZXIgcG9zaXRpb24gJHt0YXNrUG9zaXRpb24gKyAxfSBvZiAke1xuICAgICAgICAgIHRhc2tzSW5Db2x1bW4ubGVuZ3RoXG4gICAgICAgIH0gaW4gY29sdW1uICR7Y29sdW1uPy50aXRsZX1gO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25EcmFnRW5kKHsgYWN0aXZlLCBvdmVyIH0pIHtcbiAgICAgIGlmICghaGFzRHJhZ2dhYmxlRGF0YShhY3RpdmUpIHx8ICFoYXNEcmFnZ2FibGVEYXRhKG92ZXIpKSB7XG4gICAgICAgIHBpY2tlZFVwVGFza0NvbHVtbi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBhY3RpdmUuZGF0YS5jdXJyZW50Py50eXBlID09PSBcIkNvbHVtblwiICYmXG4gICAgICAgIG92ZXIuZGF0YS5jdXJyZW50Py50eXBlID09PSBcIkNvbHVtblwiXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb3ZlckNvbHVtblBvc2l0aW9uID0gY29sdW1uc0lkLmZpbmRJbmRleCgoaWQpID0+IGlkID09PSBvdmVyLmlkKTtcblxuICAgICAgICByZXR1cm4gYENvbHVtbiAke1xuICAgICAgICAgIGFjdGl2ZS5kYXRhLmN1cnJlbnQuY29sdW1uLnRpdGxlXG4gICAgICAgIH0gd2FzIGRyb3BwZWQgaW50byBwb3NpdGlvbiAke292ZXJDb2x1bW5Qb3NpdGlvbiArIDF9IG9mICR7XG4gICAgICAgICAgY29sdW1uc0lkLmxlbmd0aFxuICAgICAgICB9YDtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGFjdGl2ZS5kYXRhLmN1cnJlbnQ/LnR5cGUgPT09IFwiVGFza1wiICYmXG4gICAgICAgIG92ZXIuZGF0YS5jdXJyZW50Py50eXBlID09PSBcIlRhc2tcIlxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHsgdGFza3NJbkNvbHVtbiwgdGFza1Bvc2l0aW9uLCBjb2x1bW4gfSA9IGdldERyYWdnaW5nVGFza0RhdGEoXG4gICAgICAgICAgb3Zlci5pZCxcbiAgICAgICAgICBvdmVyLmRhdGEuY3VycmVudC50YXNrLmNvbHVtbklkLFxuICAgICAgICApO1xuICAgICAgICBpZiAob3Zlci5kYXRhLmN1cnJlbnQudGFzay5jb2x1bW5JZCAhPT0gcGlja2VkVXBUYXNrQ29sdW1uLmN1cnJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gYFRhc2sgd2FzIGRyb3BwZWQgaW50byBjb2x1bW4gJHtjb2x1bW4/LnRpdGxlfSBpbiBwb3NpdGlvbiAke1xuICAgICAgICAgICAgdGFza1Bvc2l0aW9uICsgMVxuICAgICAgICAgIH0gb2YgJHt0YXNrc0luQ29sdW1uLmxlbmd0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGFzayB3YXMgZHJvcHBlZCBpbnRvIHBvc2l0aW9uICR7dGFza1Bvc2l0aW9uICsgMX0gb2YgJHtcbiAgICAgICAgICB0YXNrc0luQ29sdW1uLmxlbmd0aFxuICAgICAgICB9IGluIGNvbHVtbiAke2NvbHVtbj8udGl0bGV9YDtcbiAgICAgIH1cbiAgICAgIHBpY2tlZFVwVGFza0NvbHVtbi5jdXJyZW50ID0gbnVsbDtcbiAgICB9LFxuICAgIG9uRHJhZ0NhbmNlbCh7IGFjdGl2ZSB9KSB7XG4gICAgICBwaWNrZWRVcFRhc2tDb2x1bW4uY3VycmVudCA9IG51bGw7XG4gICAgICBpZiAoIWhhc0RyYWdnYWJsZURhdGEoYWN0aXZlKSkgcmV0dXJuO1xuICAgICAgcmV0dXJuIGBEcmFnZ2luZyAke2FjdGl2ZS5kYXRhLmN1cnJlbnQ/LnR5cGV9IGNhbmNlbGxlZC5gO1xuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RG5kQ29udGV4dFxuICAgICAgYWNjZXNzaWJpbGl0eT17e1xuICAgICAgICBhbm5vdW5jZW1lbnRzLFxuICAgICAgfX1cbiAgICAgIHNlbnNvcnM9e3NlbnNvcnN9XG4gICAgICBjb2xsaXNpb25EZXRlY3Rpb249e2Nsb3Nlc3RDZW50ZXJ9XG4gICAgICBvbkRyYWdTdGFydD17b25EcmFnU3RhcnR9XG4gICAgICBvbkRyYWdFbmQ9e29uRHJhZ0VuZH1cbiAgICAgIG9uRHJhZ092ZXI9e29uRHJhZ092ZXJ9XG4gICAgPlxuICAgICAgPEJvYXJkQ29udGFpbmVyPlxuICAgICAgICA8U29ydGFibGVDb250ZXh0IGl0ZW1zPXtjb2x1bW5zSWR9PlxuICAgICAgICAgIHtjb2x1bW5zLm1hcCgoY29sKSA9PiAoXG4gICAgICAgICAgICA8Qm9hcmRDb2x1bW5cbiAgICAgICAgICAgICAga2V5PXtjb2wuaWR9XG4gICAgICAgICAgICAgIGNvbHVtbj17Y29sfVxuICAgICAgICAgICAgICB0YXNrcz17dGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmNvbHVtbklkID09PSBjb2wuaWQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Tb3J0YWJsZUNvbnRleHQ+XG4gICAgICA8L0JvYXJkQ29udGFpbmVyPlxuXG4gICAgICB7XCJkb2N1bWVudFwiIGluIHdpbmRvdyAmJlxuICAgICAgICBjcmVhdGVQb3J0YWwoXG4gICAgICAgICAgPERyYWdPdmVybGF5PlxuICAgICAgICAgICAge2FjdGl2ZUNvbHVtbiAmJiAoXG4gICAgICAgICAgICAgIDxCb2FyZENvbHVtblxuICAgICAgICAgICAgICAgIGlzT3ZlcmxheVxuICAgICAgICAgICAgICAgIGNvbHVtbj17YWN0aXZlQ29sdW1ufVxuICAgICAgICAgICAgICAgIHRhc2tzPXt0YXNrcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAodGFzaykgPT4gdGFzay5jb2x1bW5JZCA9PT0gYWN0aXZlQ29sdW1uLmlkLFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2FjdGl2ZVRhc2sgJiYgPFRhc2tDYXJkIHRhc2s9e2FjdGl2ZVRhc2t9IGlzT3ZlcmxheSAvPn1cbiAgICAgICAgICA8L0RyYWdPdmVybGF5PixcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LFxuICAgICAgICApfVxuICAgIDwvRG5kQ29udGV4dD5cbiAgKTtcblxuICBmdW5jdGlvbiBvbkRyYWdTdGFydChldmVudDogRHJhZ1N0YXJ0RXZlbnQpIHtcbiAgICBpZiAoIWhhc0RyYWdnYWJsZURhdGEoZXZlbnQuYWN0aXZlKSkgcmV0dXJuO1xuICAgIGNvbnN0IGRhdGEgPSBldmVudC5hY3RpdmUuZGF0YS5jdXJyZW50O1xuICAgIGlmIChkYXRhPy50eXBlID09PSBcIkNvbHVtblwiKSB7XG4gICAgICBzZXRBY3RpdmVDb2x1bW4oZGF0YS5jb2x1bW4pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkYXRhPy50eXBlID09PSBcIlRhc2tcIikge1xuICAgICAgc2V0QWN0aXZlVGFzayhkYXRhLnRhc2spO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ0VuZChldmVudDogRHJhZ0VuZEV2ZW50KSB7XG4gICAgc2V0QWN0aXZlQ29sdW1uKG51bGwpO1xuICAgIHNldEFjdGl2ZVRhc2sobnVsbCk7XG5cbiAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XG4gICAgaWYgKCFvdmVyKSByZXR1cm47XG5cbiAgICBjb25zdCBhY3RpdmVJZCA9IGFjdGl2ZS5pZDtcbiAgICBjb25zdCBvdmVySWQgPSBvdmVyLmlkO1xuXG4gICAgaWYgKCFoYXNEcmFnZ2FibGVEYXRhKGFjdGl2ZSkpIHJldHVybjtcblxuICAgIGNvbnN0IGFjdGl2ZURhdGEgPSBhY3RpdmUuZGF0YS5jdXJyZW50O1xuXG4gICAgaWYgKGFjdGl2ZUlkID09PSBvdmVySWQpIHJldHVybjtcblxuICAgIGNvbnN0IGlzQWN0aXZlQUNvbHVtbiA9IGFjdGl2ZURhdGE/LnR5cGUgPT09IFwiQ29sdW1uXCI7XG4gICAgaWYgKCFpc0FjdGl2ZUFDb2x1bW4pIHJldHVybjtcblxuICAgIHNldENvbHVtbnMoKGNvbHVtbnMpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZUNvbHVtbkluZGV4ID0gY29sdW1ucy5maW5kSW5kZXgoKGNvbCkgPT4gY29sLmlkID09PSBhY3RpdmVJZCk7XG5cbiAgICAgIGNvbnN0IG92ZXJDb2x1bW5JbmRleCA9IGNvbHVtbnMuZmluZEluZGV4KChjb2wpID0+IGNvbC5pZCA9PT0gb3ZlcklkKTtcblxuICAgICAgcmV0dXJuIGFycmF5TW92ZShjb2x1bW5zLCBhY3RpdmVDb2x1bW5JbmRleCwgb3ZlckNvbHVtbkluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZ092ZXIoZXZlbnQ6IERyYWdPdmVyRXZlbnQpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XG4gICAgaWYgKCFvdmVyKSByZXR1cm47XG5cbiAgICBjb25zdCBhY3RpdmVJZCA9IGFjdGl2ZS5pZDtcbiAgICBjb25zdCBvdmVySWQgPSBvdmVyLmlkO1xuXG4gICAgaWYgKGFjdGl2ZUlkID09PSBvdmVySWQpIHJldHVybjtcblxuICAgIGlmICghaGFzRHJhZ2dhYmxlRGF0YShhY3RpdmUpIHx8ICFoYXNEcmFnZ2FibGVEYXRhKG92ZXIpKSByZXR1cm47XG5cbiAgICBjb25zdCBhY3RpdmVEYXRhID0gYWN0aXZlLmRhdGEuY3VycmVudDtcbiAgICBjb25zdCBvdmVyRGF0YSA9IG92ZXIuZGF0YS5jdXJyZW50O1xuXG4gICAgY29uc3QgaXNBY3RpdmVBVGFzayA9IGFjdGl2ZURhdGE/LnR5cGUgPT09IFwiVGFza1wiO1xuICAgIGNvbnN0IGlzT3ZlckFUYXNrID0gb3ZlckRhdGE/LnR5cGUgPT09IFwiVGFza1wiO1xuXG4gICAgaWYgKCFpc0FjdGl2ZUFUYXNrKSByZXR1cm47XG5cbiAgICAvLyBJbSBkcm9wcGluZyBhIFRhc2sgb3ZlciBhbm90aGVyIFRhc2tcbiAgICBpZiAoaXNBY3RpdmVBVGFzayAmJiBpc092ZXJBVGFzaykge1xuICAgICAgc2V0VGFza3MoKHRhc2tzKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGFza3MuZmluZEluZGV4KCh0KSA9PiB0LmlkID09PSBhY3RpdmVJZCk7XG4gICAgICAgIGNvbnN0IG92ZXJJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodCkgPT4gdC5pZCA9PT0gb3ZlcklkKTtcbiAgICAgICAgY29uc3QgYWN0aXZlVGFzayA9IHRhc2tzW2FjdGl2ZUluZGV4XTtcbiAgICAgICAgY29uc3Qgb3ZlclRhc2sgPSB0YXNrc1tvdmVySW5kZXhdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYWN0aXZlVGFzayAmJlxuICAgICAgICAgIG92ZXJUYXNrICYmXG4gICAgICAgICAgYWN0aXZlVGFzay5jb2x1bW5JZCAhPT0gb3ZlclRhc2suY29sdW1uSWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWN0aXZlVGFzay5jb2x1bW5JZCA9IG92ZXJUYXNrLmNvbHVtbklkO1xuICAgICAgICAgIHJldHVybiBhcnJheU1vdmUodGFza3MsIGFjdGl2ZUluZGV4LCBvdmVySW5kZXggLSAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheU1vdmUodGFza3MsIGFjdGl2ZUluZGV4LCBvdmVySW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNPdmVyQUNvbHVtbiA9IG92ZXJEYXRhPy50eXBlID09PSBcIkNvbHVtblwiO1xuXG4gICAgLy8gSW0gZHJvcHBpbmcgYSBUYXNrIG92ZXIgYSBjb2x1bW5cbiAgICBpZiAoaXNBY3RpdmVBVGFzayAmJiBpc092ZXJBQ29sdW1uKSB7XG4gICAgICBzZXRUYXNrcygodGFza3MpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHQpID0+IHQuaWQgPT09IGFjdGl2ZUlkKTtcbiAgICAgICAgY29uc3QgYWN0aXZlVGFzayA9IHRhc2tzW2FjdGl2ZUluZGV4XTtcbiAgICAgICAgaWYgKGFjdGl2ZVRhc2spIHtcbiAgICAgICAgICBhY3RpdmVUYXNrLmNvbHVtbklkID0gb3ZlcklkIGFzIENvbHVtbklkO1xuICAgICAgICAgIHJldHVybiBhcnJheU1vdmUodGFza3MsIGFjdGl2ZUluZGV4LCBhY3RpdmVJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=