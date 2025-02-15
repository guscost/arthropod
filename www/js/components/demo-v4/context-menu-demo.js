define(["require", "exports", "react/jsx-runtime", "lucide-react", "@/components/ui/context-menu"], function (require, exports, jsx_runtime_1, lucide_react_1, context_menu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContextMenuDemo = ContextMenuDemo;
    function ContextMenuDemo() {
        return ((0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenu, { children: [(0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuTrigger, { className: "flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm", children: "Right click here" }), (0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenuContent, { className: "w-64", children: [(0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenuItem, { inset: true, children: ["Back", (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuShortcut, { children: "\u2318[" })] }), (0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenuItem, { inset: true, disabled: true, children: ["Forward", (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuShortcut, { children: "\u2318]" })] }), (0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenuItem, { inset: true, children: ["Reload", (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuShortcut, { children: "\u2318R" })] }), (0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenuSub, { children: [(0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuSubTrigger, { inset: true, children: "More Tools" }), (0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenuSubContent, { className: "w-48", children: [(0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenuItem, { inset: true, children: ["Save Page As...", (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuShortcut, { children: "\u21E7\u2318S" })] }), (0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenuItem, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.PlusIcon, {}), "Create Shortcut..."] }), (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuItem, { inset: true, children: "Name Window..." }), (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuSeparator, {}), (0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenuItem, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Code2Icon, {}), "Developer Tools"] }), (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuSeparator, {}), (0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenuItem, { variant: "destructive", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.TrashIcon, {}), "Delete"] })] })] }), (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuSeparator, {}), (0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenuCheckboxItem, { checked: true, children: ["Show Bookmarks Bar", (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuShortcut, { children: "\u2318\u21E7B" })] }), (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuCheckboxItem, { children: "Show Full URLs" }), (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuSeparator, {}), (0, jsx_runtime_1.jsxs)(context_menu_1.ContextMenuRadioGroup, { value: "pedro", children: [(0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuLabel, { inset: true, children: "People" }), (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuRadioItem, { value: "pedro", children: "Pedro Duarte" }), (0, jsx_runtime_1.jsx)(context_menu_1.ContextMenuRadioItem, { value: "colm", children: "Colm Tuite" })] })] })] }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LWRlbW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLXY0L2NvbnRleHQtbWVudS1kZW1vLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFrQkEsMENBNERDO0lBNURELFNBQWdCLGVBQWU7UUFDN0IsT0FBTyxDQUNMLHdCQUFDLDBCQUFXLGVBQ1YsdUJBQUMsaUNBQWtCLElBQUMsU0FBUyxFQUFDLDhGQUE4RixpQ0FFdkcsRUFDckIsd0JBQUMsaUNBQWtCLElBQUMsU0FBUyxFQUFDLE1BQU0sYUFDbEMsd0JBQUMsOEJBQWUsSUFBQyxLQUFLLDJCQUVwQix1QkFBQyxrQ0FBbUIsMEJBQXlCLElBQzdCLEVBQ2xCLHdCQUFDLDhCQUFlLElBQUMsS0FBSyxRQUFDLFFBQVEsOEJBRTdCLHVCQUFDLGtDQUFtQiwwQkFBeUIsSUFDN0IsRUFDbEIsd0JBQUMsOEJBQWUsSUFBQyxLQUFLLDZCQUVwQix1QkFBQyxrQ0FBbUIsMEJBQXlCLElBQzdCLEVBQ2xCLHdCQUFDLDZCQUFjLGVBQ2IsdUJBQUMsb0NBQXFCLElBQUMsS0FBSyxpQ0FBbUMsRUFDL0Qsd0JBQUMsb0NBQXFCLElBQUMsU0FBUyxFQUFDLE1BQU0sYUFDckMsd0JBQUMsOEJBQWUsSUFBQyxLQUFLLHNDQUVwQix1QkFBQyxrQ0FBbUIsZ0NBQTBCLElBQzlCLEVBQ2xCLHdCQUFDLDhCQUFlLGVBQ2QsdUJBQUMsdUJBQVEsS0FBRywwQkFFSSxFQUNsQix1QkFBQyw4QkFBZSxJQUFDLEtBQUsscUNBQWlDLEVBQ3ZELHVCQUFDLG1DQUFvQixLQUFHLEVBQ3hCLHdCQUFDLDhCQUFlLGVBQ2QsdUJBQUMsd0JBQVMsS0FBRyx1QkFFRyxFQUNsQix1QkFBQyxtQ0FBb0IsS0FBRyxFQUN4Qix3QkFBQyw4QkFBZSxJQUFDLE9BQU8sRUFBQyxhQUFhLGFBQ3BDLHVCQUFDLHdCQUFTLEtBQUcsY0FFRyxJQUNJLElBQ1QsRUFDakIsdUJBQUMsbUNBQW9CLEtBQUcsRUFDeEIsd0JBQUMsc0NBQXVCLElBQUMsT0FBTyx5Q0FFOUIsdUJBQUMsa0NBQW1CLGdDQUEwQixJQUN0QixFQUMxQix1QkFBQyxzQ0FBdUIsaUNBQXlDLEVBQ2pFLHVCQUFDLG1DQUFvQixLQUFHLEVBQ3hCLHdCQUFDLG9DQUFxQixJQUFDLEtBQUssRUFBQyxPQUFPLGFBQ2xDLHVCQUFDLCtCQUFnQixJQUFDLEtBQUssNkJBQTBCLEVBQ2pELHVCQUFDLG1DQUFvQixJQUFDLEtBQUssRUFBQyxPQUFPLDZCQUVaLEVBQ3ZCLHVCQUFDLG1DQUFvQixJQUFDLEtBQUssRUFBQyxNQUFNLDJCQUFrQyxJQUM5QyxJQUNMLElBQ1QsQ0FDZixDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvZGUySWNvbiwgUGx1c0ljb24sIFRyYXNoSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHtcbiAgQ29udGV4dE1lbnUsXG4gIENvbnRleHRNZW51Q2hlY2tib3hJdGVtLFxuICBDb250ZXh0TWVudUNvbnRlbnQsXG4gIENvbnRleHRNZW51SXRlbSxcbiAgQ29udGV4dE1lbnVMYWJlbCxcbiAgQ29udGV4dE1lbnVSYWRpb0dyb3VwLFxuICBDb250ZXh0TWVudVJhZGlvSXRlbSxcbiAgQ29udGV4dE1lbnVTZXBhcmF0b3IsXG4gIENvbnRleHRNZW51U2hvcnRjdXQsXG4gIENvbnRleHRNZW51U3ViLFxuICBDb250ZXh0TWVudVN1YkNvbnRlbnQsXG4gIENvbnRleHRNZW51U3ViVHJpZ2dlcixcbiAgQ29udGV4dE1lbnVUcmlnZ2VyLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NvbnRleHQtbWVudVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29udGV4dE1lbnVEZW1vKCkge1xuICByZXR1cm4gKFxuICAgIDxDb250ZXh0TWVudT5cbiAgICAgIDxDb250ZXh0TWVudVRyaWdnZXIgY2xhc3NOYW1lPVwiZmxleCBoLVsxNTBweF0gdy1bMzAwcHhdIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZGFzaGVkIHRleHQtc21cIj5cbiAgICAgICAgUmlnaHQgY2xpY2sgaGVyZVxuICAgICAgPC9Db250ZXh0TWVudVRyaWdnZXI+XG4gICAgICA8Q29udGV4dE1lbnVDb250ZW50IGNsYXNzTmFtZT1cInctNjRcIj5cbiAgICAgICAgPENvbnRleHRNZW51SXRlbSBpbnNldD5cbiAgICAgICAgICBCYWNrXG4gICAgICAgICAgPENvbnRleHRNZW51U2hvcnRjdXQ+4oyYWzwvQ29udGV4dE1lbnVTaG9ydGN1dD5cbiAgICAgICAgPC9Db250ZXh0TWVudUl0ZW0+XG4gICAgICAgIDxDb250ZXh0TWVudUl0ZW0gaW5zZXQgZGlzYWJsZWQ+XG4gICAgICAgICAgRm9yd2FyZFxuICAgICAgICAgIDxDb250ZXh0TWVudVNob3J0Y3V0PuKMmF08L0NvbnRleHRNZW51U2hvcnRjdXQ+XG4gICAgICAgIDwvQ29udGV4dE1lbnVJdGVtPlxuICAgICAgICA8Q29udGV4dE1lbnVJdGVtIGluc2V0PlxuICAgICAgICAgIFJlbG9hZFxuICAgICAgICAgIDxDb250ZXh0TWVudVNob3J0Y3V0PuKMmFI8L0NvbnRleHRNZW51U2hvcnRjdXQ+XG4gICAgICAgIDwvQ29udGV4dE1lbnVJdGVtPlxuICAgICAgICA8Q29udGV4dE1lbnVTdWI+XG4gICAgICAgICAgPENvbnRleHRNZW51U3ViVHJpZ2dlciBpbnNldD5Nb3JlIFRvb2xzPC9Db250ZXh0TWVudVN1YlRyaWdnZXI+XG4gICAgICAgICAgPENvbnRleHRNZW51U3ViQ29udGVudCBjbGFzc05hbWU9XCJ3LTQ4XCI+XG4gICAgICAgICAgICA8Q29udGV4dE1lbnVJdGVtIGluc2V0PlxuICAgICAgICAgICAgICBTYXZlIFBhZ2UgQXMuLi5cbiAgICAgICAgICAgICAgPENvbnRleHRNZW51U2hvcnRjdXQ+4oen4oyYUzwvQ29udGV4dE1lbnVTaG9ydGN1dD5cbiAgICAgICAgICAgIDwvQ29udGV4dE1lbnVJdGVtPlxuICAgICAgICAgICAgPENvbnRleHRNZW51SXRlbT5cbiAgICAgICAgICAgICAgPFBsdXNJY29uIC8+XG4gICAgICAgICAgICAgIENyZWF0ZSBTaG9ydGN1dC4uLlxuICAgICAgICAgICAgPC9Db250ZXh0TWVudUl0ZW0+XG4gICAgICAgICAgICA8Q29udGV4dE1lbnVJdGVtIGluc2V0Pk5hbWUgV2luZG93Li4uPC9Db250ZXh0TWVudUl0ZW0+XG4gICAgICAgICAgICA8Q29udGV4dE1lbnVTZXBhcmF0b3IgLz5cbiAgICAgICAgICAgIDxDb250ZXh0TWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxDb2RlMkljb24gLz5cbiAgICAgICAgICAgICAgRGV2ZWxvcGVyIFRvb2xzXG4gICAgICAgICAgICA8L0NvbnRleHRNZW51SXRlbT5cbiAgICAgICAgICAgIDxDb250ZXh0TWVudVNlcGFyYXRvciAvPlxuICAgICAgICAgICAgPENvbnRleHRNZW51SXRlbSB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIj5cbiAgICAgICAgICAgICAgPFRyYXNoSWNvbiAvPlxuICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgIDwvQ29udGV4dE1lbnVJdGVtPlxuICAgICAgICAgIDwvQ29udGV4dE1lbnVTdWJDb250ZW50PlxuICAgICAgICA8L0NvbnRleHRNZW51U3ViPlxuICAgICAgICA8Q29udGV4dE1lbnVTZXBhcmF0b3IgLz5cbiAgICAgICAgPENvbnRleHRNZW51Q2hlY2tib3hJdGVtIGNoZWNrZWQ+XG4gICAgICAgICAgU2hvdyBCb29rbWFya3MgQmFyXG4gICAgICAgICAgPENvbnRleHRNZW51U2hvcnRjdXQ+4oyY4oenQjwvQ29udGV4dE1lbnVTaG9ydGN1dD5cbiAgICAgICAgPC9Db250ZXh0TWVudUNoZWNrYm94SXRlbT5cbiAgICAgICAgPENvbnRleHRNZW51Q2hlY2tib3hJdGVtPlNob3cgRnVsbCBVUkxzPC9Db250ZXh0TWVudUNoZWNrYm94SXRlbT5cbiAgICAgICAgPENvbnRleHRNZW51U2VwYXJhdG9yIC8+XG4gICAgICAgIDxDb250ZXh0TWVudVJhZGlvR3JvdXAgdmFsdWU9XCJwZWRyb1wiPlxuICAgICAgICAgIDxDb250ZXh0TWVudUxhYmVsIGluc2V0PlBlb3BsZTwvQ29udGV4dE1lbnVMYWJlbD5cbiAgICAgICAgICA8Q29udGV4dE1lbnVSYWRpb0l0ZW0gdmFsdWU9XCJwZWRyb1wiPlxuICAgICAgICAgICAgUGVkcm8gRHVhcnRlXG4gICAgICAgICAgPC9Db250ZXh0TWVudVJhZGlvSXRlbT5cbiAgICAgICAgICA8Q29udGV4dE1lbnVSYWRpb0l0ZW0gdmFsdWU9XCJjb2xtXCI+Q29sbSBUdWl0ZTwvQ29udGV4dE1lbnVSYWRpb0l0ZW0+XG4gICAgICAgIDwvQ29udGV4dE1lbnVSYWRpb0dyb3VwPlxuICAgICAgPC9Db250ZXh0TWVudUNvbnRlbnQ+XG4gICAgPC9Db250ZXh0TWVudT5cbiAgKTtcbn1cbiJdfQ==