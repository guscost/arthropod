define(["require", "exports", "react/jsx-runtime", "react", "date-fns", "lucide-react", "@/lib/utils", "@/components/ui/button", "@/components/ui/calendar-v9", "@/components/ui/popover"], function (require, exports, jsx_runtime_1, React, date_fns_1, lucide_react_1, utils_1, button_1, calendar_v9_1, popover_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DatePickerDemo = DatePickerDemo;
    function DatePickerDemo() {
        return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-start gap-4 md:flex-row", children: [(0, jsx_runtime_1.jsx)(DatePickerSimple, {}), (0, jsx_runtime_1.jsx)(DatePickerWithRange, {})] }));
    }
    function DatePickerSimple() {
        const [date, setDate] = React.useState();
        return ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "outline", className: (0, utils_1.cn)("min-w-[200px] justify-start px-2 font-normal", !date && "text-muted-foreground"), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.CalendarIcon, {}), date ? (0, date_fns_1.format)(date, "PPP") : (0, jsx_runtime_1.jsx)("span", { children: "Pick a date" })] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto p-0", align: "start", children: (0, jsx_runtime_1.jsx)(calendar_v9_1.Calendar, { mode: "single", selected: date, onSelect: setDate, initialFocus: true }) })] }));
    }
    function DatePickerWithRange() {
        const [date, setDate] = React.useState({
            from: new Date(new Date().getFullYear(), 0, 20),
            to: (0, date_fns_1.addDays)(new Date(new Date().getFullYear(), 0, 20), 20),
        });
        return ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { id: "date", variant: "outline", className: (0, utils_1.cn)("w-fit justify-start px-2 font-normal", !date && "text-muted-foreground"), children: [(0, jsx_runtime_1.jsx)(lucide_react_1.CalendarIcon, {}), (date === null || date === void 0 ? void 0 : date.from) ? (date.to ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, date_fns_1.format)(date.from, "LLL dd, y"), " -", " ", (0, date_fns_1.format)(date.to, "LLL dd, y")] })) : ((0, date_fns_1.format)(date.from, "LLL dd, y"))) : ((0, jsx_runtime_1.jsx)("span", { children: "Pick a date" }))] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto p-0", align: "start", children: (0, jsx_runtime_1.jsx)(calendar_v9_1.Calendar, { initialFocus: true, mode: "range", defaultMonth: date === null || date === void 0 ? void 0 : date.from, selected: date, onSelect: setDate, numberOfMonths: 2 }) })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXItZGVtby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RlbW8tdjQvZGF0ZS1waWNrZXItZGVtby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUFBLFlBQVksQ0FBQzs7O0lBZ0JiLHdDQU9DO0lBUEQsU0FBZ0IsY0FBYztRQUM1QixPQUFPLENBQ0wsaUNBQUssU0FBUyxFQUFDLDZDQUE2QyxhQUMxRCx1QkFBQyxnQkFBZ0IsS0FBRyxFQUNwQix1QkFBQyxtQkFBbUIsS0FBRyxJQUNuQixDQUNQLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxnQkFBZ0I7UUFDdkIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFRLENBQUM7UUFFL0MsT0FBTyxDQUNMLHdCQUFDLGlCQUFPLGVBQ04sdUJBQUMsd0JBQWMsSUFBQyxPQUFPLGtCQUNyQix3QkFBQyxlQUFNLElBQ0wsT0FBTyxFQUFFLFNBQVMsRUFDbEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLDhDQUE4QyxFQUM5QyxDQUFDLElBQUksSUFBSSx1QkFBdUIsQ0FDakMsYUFFRCx1QkFBQywyQkFBWSxLQUFHLEVBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFBLGlCQUFNLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQywyREFBd0IsSUFDL0MsR0FDTSxFQUNqQix1QkFBQyx3QkFBYyxJQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFDLE9BQU8sWUFDbEQsdUJBQUMsc0JBQVEsSUFDUCxJQUFJLEVBQUMsUUFBUSxFQUNiLFFBQVEsRUFBRSxJQUFJLEVBQ2QsUUFBUSxFQUFFLE9BQU8sRUFDakIsWUFBWSxTQUNaLEdBQ2EsSUFDVCxDQUNYLENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxtQkFBbUI7UUFDMUIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUF3QjtZQUM1RCxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQy9DLEVBQUUsRUFBRSxJQUFBLGtCQUFPLEVBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQzNELENBQUMsQ0FBQztRQUVILE9BQU8sQ0FDTCx3QkFBQyxpQkFBTyxlQUNOLHVCQUFDLHdCQUFjLElBQUMsT0FBTyxrQkFDckIsd0JBQUMsZUFBTSxJQUNMLEVBQUUsRUFBQyxNQUFNLEVBQ1QsT0FBTyxFQUFFLFNBQVMsRUFDbEIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLHNDQUFzQyxFQUN0QyxDQUFDLElBQUksSUFBSSx1QkFBdUIsQ0FDakMsYUFFRCx1QkFBQywyQkFBWSxLQUFHLEVBQ2YsQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUNaLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ1IsNkRBQ0csSUFBQSxpQkFBTSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQUksR0FBRyxFQUNyQyxJQUFBLGlCQUFNLEVBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFDNUIsQ0FDSixDQUFDLENBQUMsQ0FBQyxDQUNGLElBQUEsaUJBQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUMvQixDQUNGLENBQUMsQ0FBQyxDQUFDLENBQ0YsMkRBQXdCLENBQ3pCLElBQ00sR0FDTSxFQUNqQix1QkFBQyx3QkFBYyxJQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFDLE9BQU8sWUFDbEQsdUJBQUMsc0JBQVEsSUFDUCxZQUFZLFFBQ1osSUFBSSxFQUFDLE9BQU8sRUFDWixZQUFZLEVBQUUsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLElBQUksRUFDeEIsUUFBUSxFQUFFLElBQUksRUFDZCxRQUFRLEVBQUUsT0FBTyxFQUNqQixjQUFjLEVBQUUsQ0FBQyxHQUNqQixHQUNhLElBQ1QsQ0FDWCxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFkZERheXMsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgQ2FsZW5kYXJJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgRGF0ZVJhbmdlIH0gZnJvbSBcInJlYWN0LWRheS1waWNrZXJcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FsZW5kYXItdjlcIjtcbmltcG9ydCB7XG4gIFBvcG92ZXIsXG4gIFBvcG92ZXJDb250ZW50LFxuICBQb3BvdmVyVHJpZ2dlcixcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9wb3BvdmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBEYXRlUGlja2VyRGVtbygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgZ2FwLTQgbWQ6ZmxleC1yb3dcIj5cbiAgICAgIDxEYXRlUGlja2VyU2ltcGxlIC8+XG4gICAgICA8RGF0ZVBpY2tlcldpdGhSYW5nZSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBEYXRlUGlja2VyU2ltcGxlKCkge1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxEYXRlPigpO1xuXG4gIHJldHVybiAoXG4gICAgPFBvcG92ZXI+XG4gICAgICA8UG9wb3ZlclRyaWdnZXIgYXNDaGlsZD5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9e1wib3V0bGluZVwifVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICBcIm1pbi13LVsyMDBweF0ganVzdGlmeS1zdGFydCBweC0yIGZvbnQtbm9ybWFsXCIsXG4gICAgICAgICAgICAhZGF0ZSAmJiBcInRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLFxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2FsZW5kYXJJY29uIC8+XG4gICAgICAgICAge2RhdGUgPyBmb3JtYXQoZGF0ZSwgXCJQUFBcIikgOiA8c3Bhbj5QaWNrIGEgZGF0ZTwvc3Bhbj59XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Qb3BvdmVyVHJpZ2dlcj5cbiAgICAgIDxQb3BvdmVyQ29udGVudCBjbGFzc05hbWU9XCJ3LWF1dG8gcC0wXCIgYWxpZ249XCJzdGFydFwiPlxuICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICBtb2RlPVwic2luZ2xlXCJcbiAgICAgICAgICBzZWxlY3RlZD17ZGF0ZX1cbiAgICAgICAgICBvblNlbGVjdD17c2V0RGF0ZX1cbiAgICAgICAgICBpbml0aWFsRm9jdXNcbiAgICAgICAgLz5cbiAgICAgIDwvUG9wb3ZlckNvbnRlbnQ+XG4gICAgPC9Qb3BvdmVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBEYXRlUGlja2VyV2l0aFJhbmdlKCkge1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxEYXRlUmFuZ2UgfCB1bmRlZmluZWQ+KHtcbiAgICBmcm9tOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDIwKSxcbiAgICB0bzogYWRkRGF5cyhuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksIDAsIDIwKSwgMjApLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyPlxuICAgICAgPFBvcG92ZXJUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBpZD1cImRhdGVcIlxuICAgICAgICAgIHZhcmlhbnQ9e1wib3V0bGluZVwifVxuICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICBcInctZml0IGp1c3RpZnktc3RhcnQgcHgtMiBmb250LW5vcm1hbFwiLFxuICAgICAgICAgICAgIWRhdGUgJiYgXCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIixcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgPENhbGVuZGFySWNvbiAvPlxuICAgICAgICAgIHtkYXRlPy5mcm9tID8gKFxuICAgICAgICAgICAgZGF0ZS50byA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7Zm9ybWF0KGRhdGUuZnJvbSwgXCJMTEwgZGQsIHlcIil9IC17XCIgXCJ9XG4gICAgICAgICAgICAgICAge2Zvcm1hdChkYXRlLnRvLCBcIkxMTCBkZCwgeVwiKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBmb3JtYXQoZGF0ZS5mcm9tLCBcIkxMTCBkZCwgeVwiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3Bhbj5QaWNrIGEgZGF0ZTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvUG9wb3ZlclRyaWdnZXI+XG4gICAgICA8UG9wb3ZlckNvbnRlbnQgY2xhc3NOYW1lPVwidy1hdXRvIHAtMFwiIGFsaWduPVwic3RhcnRcIj5cbiAgICAgICAgPENhbGVuZGFyXG4gICAgICAgICAgaW5pdGlhbEZvY3VzXG4gICAgICAgICAgbW9kZT1cInJhbmdlXCJcbiAgICAgICAgICBkZWZhdWx0TW9udGg9e2RhdGU/LmZyb219XG4gICAgICAgICAgc2VsZWN0ZWQ9e2RhdGV9XG4gICAgICAgICAgb25TZWxlY3Q9e3NldERhdGV9XG4gICAgICAgICAgbnVtYmVyT2ZNb250aHM9ezJ9XG4gICAgICAgIC8+XG4gICAgICA8L1BvcG92ZXJDb250ZW50PlxuICAgIDwvUG9wb3Zlcj5cbiAgKTtcbn1cbiJdfQ==