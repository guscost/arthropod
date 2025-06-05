define(["require", "exports", "react/jsx-runtime", "date-fns", "@/components/ui/calendar-v9", "@/components/ui/card"], function (require, exports, jsx_runtime_1, date_fns_1, calendar_v9_1, card_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CardsCalendar = CardsCalendar;
    const start = new Date(2025, 5, 5);
    function CardsCalendar() {
        return ((0, jsx_runtime_1.jsx)(card_1.Card, { className: "hidden max-w-[260px] p-0 sm:flex", children: (0, jsx_runtime_1.jsx)(card_1.CardContent, { className: "p-0", children: (0, jsx_runtime_1.jsx)(calendar_v9_1.Calendar, { numberOfMonths: 1, mode: "range", defaultMonth: start, selected: {
                        from: start,
                        to: (0, date_fns_1.addDays)(start, 8),
                    } }) }) }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWNhcmRzL2NhbGVuZGFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFBOzs7SUFTWixzQ0FnQkM7SUFsQkQsTUFBTSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUVsQyxTQUFnQixhQUFhO1FBQzNCLE9BQU8sQ0FDTCx1QkFBQyxXQUFJLElBQUMsU0FBUyxFQUFDLGtDQUFrQyxZQUNoRCx1QkFBQyxrQkFBVyxJQUFDLFNBQVMsRUFBQyxLQUFLLFlBQzFCLHVCQUFDLHNCQUFRLElBQ1AsY0FBYyxFQUFFLENBQUMsRUFDakIsSUFBSSxFQUFDLE9BQU8sRUFDWixZQUFZLEVBQUUsS0FBSyxFQUNuQixRQUFRLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLEtBQUs7d0JBQ1gsRUFBRSxFQUFFLElBQUEsa0JBQU8sRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3FCQUN0QixHQUNELEdBQ1UsR0FDVCxDQUNSLENBQUE7SUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IGFkZERheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIlxyXG5cclxuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhbGVuZGFyLXY5XCJcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxyXG5cclxuY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgyMDI1LCA1LCA1KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENhcmRzQ2FsZW5kYXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT1cImhpZGRlbiBtYXgtdy1bMjYwcHhdIHAtMCBzbTpmbGV4XCI+XHJcbiAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgIG51bWJlck9mTW9udGhzPXsxfVxyXG4gICAgICAgICAgbW9kZT1cInJhbmdlXCJcclxuICAgICAgICAgIGRlZmF1bHRNb250aD17c3RhcnR9XHJcbiAgICAgICAgICBzZWxlY3RlZD17e1xyXG4gICAgICAgICAgICBmcm9tOiBzdGFydCxcclxuICAgICAgICAgICAgdG86IGFkZERheXMoc3RhcnQsIDgpLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gIClcclxufVxyXG4iXX0=