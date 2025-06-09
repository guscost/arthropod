define(["require", "exports", "react/jsx-runtime", "date-fns", "@/components/ui/calendar", "@/components/ui/card"], function (require, exports, jsx_runtime_1, date_fns_1, calendar_1, card_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardsCalendar = CardsCalendar;
    const start = new Date(2025, 5, 5);
    function CardsCalendar() {
        return ((0, jsx_runtime_1.jsx)(card_1.Card, { className: "hidden max-w-[260px] p-0 sm:flex", children: (0, jsx_runtime_1.jsx)(card_1.CardContent, { className: "p-0", children: (0, jsx_runtime_1.jsx)(calendar_1.Calendar, { numberOfMonths: 1, mode: "range", defaultMonth: start, selected: {
                        from: start,
                        to: (0, date_fns_1.addDays)(start, 8),
                    } }) }) }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWNhcmRzL2NhbGVuZGFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUFTYixzQ0FnQkM7SUFsQkQsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVuQyxTQUFnQixhQUFhO1FBQzNCLE9BQU8sQ0FDTCx1QkFBQyxXQUFJLElBQUMsU0FBUyxFQUFDLGtDQUFrQyxZQUNoRCx1QkFBQyxrQkFBVyxJQUFDLFNBQVMsRUFBQyxLQUFLLFlBQzFCLHVCQUFDLG1CQUFRLElBQ1AsY0FBYyxFQUFFLENBQUMsRUFDakIsSUFBSSxFQUFDLE9BQU8sRUFDWixZQUFZLEVBQUUsS0FBSyxFQUNuQixRQUFRLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsRUFBRSxFQUFFLElBQUEsa0JBQU8sRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3FCQUN0QixHQUNELEdBQ1UsR0FDVCxDQUNSLENBQUM7SUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IGFkZERheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhbGVuZGFyXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xuXG5jb25zdCBzdGFydCA9IG5ldyBEYXRlKDIwMjUsIDUsIDUpO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZHNDYWxlbmRhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJoaWRkZW4gbWF4LXctWzI2MHB4XSBwLTAgc206ZmxleFwiPlxuICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtMFwiPlxuICAgICAgICA8Q2FsZW5kYXJcbiAgICAgICAgICBudW1iZXJPZk1vbnRocz17MX1cbiAgICAgICAgICBtb2RlPVwicmFuZ2VcIlxuICAgICAgICAgIGRlZmF1bHRNb250aD17c3RhcnR9XG4gICAgICAgICAgc2VsZWN0ZWQ9e3tcbiAgICAgICAgICAgIGZyb206IHN0YXJ0LFxuICAgICAgICAgICAgdG86IGFkZERheXMoc3RhcnQsIDgpLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cbiJdfQ==