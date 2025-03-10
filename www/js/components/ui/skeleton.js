define(["require", "exports", "react/jsx-runtime", "@/lib/utils"], function (require, exports, jsx_runtime_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Skeleton = Skeleton;
    function Skeleton({ className, ...props }) {
        return ((0, jsx_runtime_1.jsx)("div", { "data-slot": "skeleton", className: (0, utils_1.cn)("bg-primary/10 animate-pulse rounded-md", className), ...props }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9za2VsZXRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBWVMsNEJBQVE7SUFWakIsU0FBUyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxLQUFLLEVBQStCO1FBQ3BFLE9BQU8sQ0FDTCw2Q0FDWSxVQUFVLEVBQ3BCLFNBQVMsRUFBRSxJQUFBLFVBQUUsRUFBQyx3Q0FBd0MsRUFBRSxTQUFTLENBQUMsS0FDOUQsS0FBSyxHQUNULENBQ0gsQ0FBQztJQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5mdW5jdGlvbiBTa2VsZXRvbih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBkYXRhLXNsb3Q9XCJza2VsZXRvblwiXG4gICAgICBjbGFzc05hbWU9e2NuKFwiYmctcHJpbWFyeS8xMCBhbmltYXRlLXB1bHNlIHJvdW5kZWQtbWRcIiwgY2xhc3NOYW1lKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgeyBTa2VsZXRvbiB9O1xuIl19