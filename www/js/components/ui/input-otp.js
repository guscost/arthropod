define(["require", "exports", "react/jsx-runtime", "react", "input-otp", "lucide-react", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, input_otp_1, lucide_react_1, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InputOTP = InputOTP;
    exports.InputOTPGroup = InputOTPGroup;
    exports.InputOTPSlot = InputOTPSlot;
    exports.InputOTPSeparator = InputOTPSeparator;
    function InputOTP({ className, containerClassName, ...props }) {
        return ((0, jsx_runtime_1.jsx)(input_otp_1.OTPInput, { "data-slot": "input-otp", containerClassName: (0, utils_1.cn)("flex items-center gap-2 has-disabled:opacity-50", containerClassName), className: (0, utils_1.cn)("disabled:cursor-not-allowed", className), ...props }));
    }
    function InputOTPGroup({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "input-otp-group", className: (0, utils_1.cn)("flex items-center", className), ...props }));
    }
    function InputOTPSlot({ index, className, ...props }) {
        var _a;
        const inputOTPContext = React.useContext(input_otp_1.OTPInputContext);
        const { char, hasFakeCaret, isActive } = (_a = inputOTPContext === null || inputOTPContext === void 0 ? void 0 : inputOTPContext.slots[index]) !== null && _a !== void 0 ? _a : {};
        return ((0, jsx_runtime_1.jsxs)("div", { "data-slot": "input-otp-slot", "data-active": isActive, className: (0, utils_1.cn)("border-input data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]", className), ...props, children: [char, hasFakeCaret && ((0, jsx_runtime_1.jsx)("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) }))] }));
    }
    function InputOTPSeparator({ ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "input-otp-separator", role: "separator", ...props, children: (0, jsx_runtime_1.jsx)(lucide_react_1.MinusIcon, {}) }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtb3RwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdWkvaW5wdXQtb3RwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQUEsWUFBWSxDQUFDOzs7SUE0RUosNEJBQVE7SUFBRSxzQ0FBYTtJQUFFLG9DQUFZO0lBQUUsOENBQWlCO0lBcEVqRSxTQUFTLFFBQVEsQ0FBQyxFQUNoQixTQUFTLEVBQ1Qsa0JBQWtCLEVBQ2xCLEdBQUcsS0FBSyxFQUdUO1FBQ0MsT0FBTyxDQUNMLHVCQUFDLG9CQUFRLGlCQUNHLFdBQVcsRUFDckIsa0JBQWtCLEVBQUUsSUFBQSxVQUFFLEVBQ3BCLGlEQUFpRCxFQUNqRCxrQkFBa0IsQ0FDbkIsRUFDRCxTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsNkJBQTZCLEVBQUUsU0FBUyxDQUFDLEtBQ25ELEtBQUssR0FDVCxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsU0FBUyxhQUFhLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQStCO1FBQ3pFLE9BQU8sQ0FDTCw2Q0FDWSxpQkFBaUIsRUFDM0IsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUFDLG1CQUFtQixFQUFFLFNBQVMsQ0FBQyxLQUN6QyxLQUFLLEdBQ1QsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsWUFBWSxDQUFDLEVBQ3BCLEtBQUssRUFDTCxTQUFTLEVBQ1QsR0FBRyxLQUFLLEVBR1Q7O1FBQ0MsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQywyQkFBZSxDQUFDLENBQUM7UUFDMUQsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBQSxlQUFlLGFBQWYsZUFBZSx1QkFBZixlQUFlLENBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxtQ0FBSSxFQUFFLENBQUM7UUFFN0UsT0FBTyxDQUNMLDhDQUNZLGdCQUFnQixpQkFDYixRQUFRLEVBQ3JCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFDWCx5ZUFBeWUsRUFDemUsU0FBUyxDQUNWLEtBQ0csS0FBSyxhQUVSLElBQUksRUFDSixZQUFZLElBQUksQ0FDZixnQ0FBSyxTQUFTLEVBQUMsdUVBQXVFLFlBQ3BGLGdDQUFLLFNBQVMsRUFBQywwREFBMEQsR0FBRyxHQUN4RSxDQUNQLElBQ0csQ0FDUCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBK0I7UUFDbEUsT0FBTyxDQUNMLDZDQUFlLHFCQUFxQixFQUFDLElBQUksRUFBQyxXQUFXLEtBQUssS0FBSyxZQUM3RCx1QkFBQyx3QkFBUyxLQUFHLEdBQ1QsQ0FDUCxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE9UUElucHV0LCBPVFBJbnB1dENvbnRleHQgfSBmcm9tIFwiaW5wdXQtb3RwXCI7XG5pbXBvcnQgeyBNaW51c0ljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIElucHV0T1RQKHtcbiAgY2xhc3NOYW1lLFxuICBjb250YWluZXJDbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgT1RQSW5wdXQ+ICYge1xuICBjb250YWluZXJDbGFzc05hbWU/OiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPE9UUElucHV0XG4gICAgICBkYXRhLXNsb3Q9XCJpbnB1dC1vdHBcIlxuICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBoYXMtZGlzYWJsZWQ6b3BhY2l0eS01MFwiLFxuICAgICAgICBjb250YWluZXJDbGFzc05hbWUsXG4gICAgICApfVxuICAgICAgY2xhc3NOYW1lPXtjbihcImRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZFwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIElucHV0T1RQR3JvdXAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwiaW5wdXQtb3RwLWdyb3VwXCJcbiAgICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4IGl0ZW1zLWNlbnRlclwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIElucHV0T1RQU2xvdCh7XG4gIGluZGV4LFxuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPiAmIHtcbiAgaW5kZXg6IG51bWJlcjtcbn0pIHtcbiAgY29uc3QgaW5wdXRPVFBDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChPVFBJbnB1dENvbnRleHQpO1xuICBjb25zdCB7IGNoYXIsIGhhc0Zha2VDYXJldCwgaXNBY3RpdmUgfSA9IGlucHV0T1RQQ29udGV4dD8uc2xvdHNbaW5kZXhdID8/IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgZGF0YS1zbG90PVwiaW5wdXQtb3RwLXNsb3RcIlxuICAgICAgZGF0YS1hY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJib3JkZXItaW5wdXQgZGF0YS1bYWN0aXZlPXRydWVdOmJvcmRlci1yaW5nIGRhdGEtW2FjdGl2ZT10cnVlXTpyaW5nLXJpbmcvNTAgZGF0YS1bYWN0aXZlPXRydWVdOmFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzIwIGRhcms6ZGF0YS1bYWN0aXZlPXRydWVdOmFyaWEtaW52YWxpZDpyaW5nLWRlc3RydWN0aXZlLzQwIGFyaWEtaW52YWxpZDpib3JkZXItZGVzdHJ1Y3RpdmUgZGF0YS1bYWN0aXZlPXRydWVdOmFyaWEtaW52YWxpZDpib3JkZXItZGVzdHJ1Y3RpdmUgcmVsYXRpdmUgZmxleCBoLTkgdy05IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXIteSBib3JkZXItciB0ZXh0LXNtIHNoYWRvdy14cyB0cmFuc2l0aW9uLWFsbCBvdXRsaW5lLW5vbmUgZmlyc3Q6cm91bmRlZC1sLW1kIGZpcnN0OmJvcmRlci1sIGxhc3Q6cm91bmRlZC1yLW1kIGRhdGEtW2FjdGl2ZT10cnVlXTp6LTEwIGRhdGEtW2FjdGl2ZT10cnVlXTpyaW5nLVszcHhdXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoYXJ9XG4gICAgICB7aGFzRmFrZUNhcmV0ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtY2FyZXQtYmxpbmsgYmctZm9yZWdyb3VuZCBoLTQgdy1weCBkdXJhdGlvbi0xMDAwXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBJbnB1dE9UUFNlcGFyYXRvcih7IC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNsb3Q9XCJpbnB1dC1vdHAtc2VwYXJhdG9yXCIgcm9sZT1cInNlcGFyYXRvclwiIHsuLi5wcm9wc30+XG4gICAgICA8TWludXNJY29uIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCB7IElucHV0T1RQLCBJbnB1dE9UUEdyb3VwLCBJbnB1dE9UUFNsb3QsIElucHV0T1RQU2VwYXJhdG9yIH07XG4iXX0=