define(["require", "exports", "react/jsx-runtime", "react", "@radix-ui/react-slot", "react-hook-form", "@/lib/utils", "@/components/ui/label"], function (require, exports, jsx_runtime_1, React, react_slot_1, react_hook_form_1, utils_1, label_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormField = exports.Form = exports.useFormField = void 0;
    exports.FormItem = FormItem;
    exports.FormLabel = FormLabel;
    exports.FormControl = FormControl;
    exports.FormDescription = FormDescription;
    exports.FormMessage = FormMessage;
    const Form = react_hook_form_1.FormProvider;
    exports.Form = Form;
    const FormFieldContext = React.createContext({});
    const FormField = ({ ...props }) => {
        return ((0, jsx_runtime_1.jsx)(FormFieldContext.Provider, { value: { name: props.name }, children: (0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { ...props }) }));
    };
    exports.FormField = FormField;
    const useFormField = () => {
        const fieldContext = React.useContext(FormFieldContext);
        const itemContext = React.useContext(FormItemContext);
        const { getFieldState } = (0, react_hook_form_1.useFormContext)();
        const formState = (0, react_hook_form_1.useFormState)({ name: fieldContext.name });
        const fieldState = getFieldState(fieldContext.name, formState);
        if (!fieldContext) {
            throw new Error("useFormField should be used within <FormField>");
        }
        const { id } = itemContext;
        return {
            id,
            name: fieldContext.name,
            formItemId: `${id}-form-item`,
            formDescriptionId: `${id}-form-item-description`,
            formMessageId: `${id}-form-item-message`,
            ...fieldState,
        };
    };
    exports.useFormField = useFormField;
    const FormItemContext = React.createContext({});
    function FormItem({ className, ...props }) {
        const id = React.useId();
        return ((0, jsx_runtime_1.jsx)(FormItemContext.Provider, { value: { id }, children: (0, jsx_runtime_1.jsx)("div", { "data-slot": "form-item", className: (0, utils_1.cn)("grid gap-2", className), ...props }) }));
    }
    function FormLabel({ className, ...props }) {
        const { error, formItemId } = useFormField();
        return ((0, jsx_runtime_1.jsx)(label_1.Label, { "data-slot": "form-label", "data-error": !!error, className: (0, utils_1.cn)("data-[error=true]:text-destructive", className), htmlFor: formItemId, ...props }));
    }
    function FormControl({ ...props }) {
        const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
        return ((0, jsx_runtime_1.jsx)(react_slot_1.Slot, { "data-slot": "form-control", id: formItemId, "aria-describedby": !error
                ? `${formDescriptionId}`
                : `${formDescriptionId} ${formMessageId}`, "aria-invalid": !!error, ...props }));
    }
    function FormDescription({ className, ...props }) {
        const { formDescriptionId } = useFormField();
        return ((0, jsx_runtime_1.jsx)("p", { "data-slot": "form-description", id: formDescriptionId, className: (0, utils_1.cn)("text-muted-foreground text-sm", className), ...props }));
    }
    function FormMessage({ className, ...props }) {
        var _a;
        const { error, formMessageId } = useFormField();
        const body = error ? String((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : "") : props.children;
        if (!body) {
            return null;
        }
        return ((0, jsx_runtime_1.jsx)("p", { "data-slot": "form-message", id: formMessageId, className: (0, utils_1.cn)("text-destructive text-sm", className), ...props, children: body }));
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3VpL2Zvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFBQSxZQUFZLENBQUM7Ozs7SUFpS1gsNEJBQVE7SUFDUiw4QkFBUztJQUNULGtDQUFXO0lBQ1gsMENBQWU7SUFDZixrQ0FBVztJQW5KYixNQUFNLElBQUksR0FBRyw4QkFBWSxDQUFDO0lBOEl4QixvQkFBSTtJQXJJTixNQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxhQUFhLENBQzFDLEVBQTJCLENBQzVCLENBQUM7SUFFRixNQUFNLFNBQVMsR0FBRyxDQUdoQixFQUNBLEdBQUcsS0FBSyxFQUM2QixFQUFFLEVBQUU7UUFDekMsT0FBTyxDQUNMLHVCQUFDLGdCQUFnQixDQUFDLFFBQVEsSUFBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUNwRCx1QkFBQyw0QkFBVSxPQUFLLEtBQUssR0FBSSxHQUNDLENBQzdCLENBQUM7SUFDSixDQUFDLENBQUM7SUE0SEEsOEJBQVM7SUExSFgsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO1FBQ3hCLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN4RCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFBLGdDQUFjLEdBQUUsQ0FBQztRQUMzQyxNQUFNLFNBQVMsR0FBRyxJQUFBLDhCQUFZLEVBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUQsTUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFD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LENBQ0wsMkNBQ1ksY0FBYyxFQUN4QixFQUFFLEVBQUUsYUFBYSxFQUNqQixTQUFTLEVBQUUsSUFBQSxVQUFFLEVBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLEtBQ2hELEtBQUssWUFFUixJQUFJLEdBQ0gsQ0FDTCxDQUFDO0lBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIExhYmVsUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtbGFiZWxcIjtcbmltcG9ydCB7IFNsb3QgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIjtcbmltcG9ydCB7XG4gIENvbnRyb2xsZXIsXG4gIEZvcm1Qcm92aWRlcixcbiAgdXNlRm9ybUNvbnRleHQsXG4gIHVzZUZvcm1TdGF0ZSxcbiAgdHlwZSBDb250cm9sbGVyUHJvcHMsXG4gIHR5cGUgRmllbGRQYXRoLFxuICB0eXBlIEZpZWxkVmFsdWVzLFxufSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIjtcblxuY29uc3QgRm9ybSA9IEZvcm1Qcm92aWRlcjtcblxudHlwZSBGb3JtRmllbGRDb250ZXh0VmFsdWU8XG4gIFRGaWVsZFZhbHVlcyBleHRlbmRzIEZpZWxkVmFsdWVzID0gRmllbGRWYWx1ZXMsXG4gIFROYW1lIGV4dGVuZHMgRmllbGRQYXRoPFRGaWVsZFZhbHVlcz4gPSBGaWVsZFBhdGg8VEZpZWxkVmFsdWVzPixcbj4gPSB7XG4gIG5hbWU6IFROYW1lO1xufTtcblxuY29uc3QgRm9ybUZpZWxkQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Rm9ybUZpZWxkQ29udGV4dFZhbHVlPihcbiAge30gYXMgRm9ybUZpZWxkQ29udGV4dFZhbHVlLFxuKTtcblxuY29uc3QgRm9ybUZpZWxkID0gPFxuICBURmllbGRWYWx1ZXMgZXh0ZW5kcyBGaWVsZFZhbHVlcyA9IEZpZWxkVmFsdWVzLFxuICBUTmFtZSBleHRlbmRzIEZpZWxkUGF0aDxURmllbGRWYWx1ZXM+ID0gRmllbGRQYXRoPFRGaWVsZFZhbHVlcz4sXG4+KHtcbiAgLi4ucHJvcHNcbn06IENvbnRyb2xsZXJQcm9wczxURmllbGRWYWx1ZXMsIFROYW1lPikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGb3JtRmllbGRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG5hbWU6IHByb3BzLm5hbWUgfX0+XG4gICAgICA8Q29udHJvbGxlciB7Li4ucHJvcHN9IC8+XG4gICAgPC9Gb3JtRmllbGRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuY29uc3QgdXNlRm9ybUZpZWxkID0gKCkgPT4ge1xuICBjb25zdCBmaWVsZENvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEZvcm1GaWVsZENvbnRleHQpO1xuICBjb25zdCBpdGVtQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRm9ybUl0ZW1Db250ZXh0KTtcbiAgY29uc3QgeyBnZXRGaWVsZFN0YXRlIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xuICBjb25zdCBmb3JtU3RhdGUgPSB1c2VGb3JtU3RhdGUoeyBuYW1lOiBmaWVsZENvbnRleHQubmFtZSB9KTtcbiAgY29uc3QgZmllbGRTdGF0ZSA9IGdldEZpZWxkU3RhdGUoZmllbGRDb250ZXh0Lm5hbWUsIGZvcm1TdGF0ZSk7XG5cbiAgaWYgKCFmaWVsZENvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VGb3JtRmllbGQgc2hvdWxkIGJlIHVzZWQgd2l0aGluIDxGb3JtRmllbGQ+XCIpO1xuICB9XG5cbiAgY29uc3QgeyBpZCB9ID0gaXRlbUNvbnRleHQ7XG5cbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBuYW1lOiBmaWVsZENvbnRleHQubmFtZSxcbiAgICBmb3JtSXRlbUlkOiBgJHtpZH0tZm9ybS1pdGVtYCxcbiAgICBmb3JtRGVzY3JpcHRpb25JZDogYCR7aWR9LWZvcm0taXRlbS1kZXNjcmlwdGlvbmAsXG4gICAgZm9ybU1lc3NhZ2VJZDogYCR7aWR9LWZvcm0taXRlbS1tZXNzYWdlYCxcbiAgICAuLi5maWVsZFN0YXRlLFxuICB9O1xufTtcblxudHlwZSBGb3JtSXRlbUNvbnRleHRWYWx1ZSA9IHtcbiAgaWQ6IHN0cmluZztcbn07XG5cbmNvbnN0IEZvcm1JdGVtQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Rm9ybUl0ZW1Db250ZXh0VmFsdWU+KFxuICB7fSBhcyBGb3JtSXRlbUNvbnRleHRWYWx1ZSxcbik7XG5cbmZ1bmN0aW9uIEZvcm1JdGVtKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPikge1xuICBjb25zdCBpZCA9IFJlYWN0LnVzZUlkKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUl0ZW1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlkIH19PlxuICAgICAgPGRpdlxuICAgICAgICBkYXRhLXNsb3Q9XCJmb3JtLWl0ZW1cIlxuICAgICAgICBjbGFzc05hbWU9e2NuKFwiZ3JpZCBnYXAtMlwiLCBjbGFzc05hbWUpfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIDwvRm9ybUl0ZW1Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5mdW5jdGlvbiBGb3JtTGFiZWwoe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczx0eXBlb2YgTGFiZWxQcmltaXRpdmUuUm9vdD4pIHtcbiAgY29uc3QgeyBlcnJvciwgZm9ybUl0ZW1JZCB9ID0gdXNlRm9ybUZpZWxkKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGFiZWxcbiAgICAgIGRhdGEtc2xvdD1cImZvcm0tbGFiZWxcIlxuICAgICAgZGF0YS1lcnJvcj17ISFlcnJvcn1cbiAgICAgIGNsYXNzTmFtZT17Y24oXCJkYXRhLVtlcnJvcj10cnVlXTp0ZXh0LWRlc3RydWN0aXZlXCIsIGNsYXNzTmFtZSl9XG4gICAgICBodG1sRm9yPXtmb3JtSXRlbUlkfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZvcm1Db250cm9sKHsgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFNsb3Q+KSB7XG4gIGNvbnN0IHsgZXJyb3IsIGZvcm1JdGVtSWQsIGZvcm1EZXNjcmlwdGlvbklkLCBmb3JtTWVzc2FnZUlkIH0gPVxuICAgIHVzZUZvcm1GaWVsZCgpO1xuXG4gIHJldHVybiAoXG4gICAgPFNsb3RcbiAgICAgIGRhdGEtc2xvdD1cImZvcm0tY29udHJvbFwiXG4gICAgICBpZD17Zm9ybUl0ZW1JZH1cbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAhZXJyb3JcbiAgICAgICAgICA/IGAke2Zvcm1EZXNjcmlwdGlvbklkfWBcbiAgICAgICAgICA6IGAke2Zvcm1EZXNjcmlwdGlvbklkfSAke2Zvcm1NZXNzYWdlSWR9YFxuICAgICAgfVxuICAgICAgYXJpYS1pbnZhbGlkPXshIWVycm9yfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEZvcm1EZXNjcmlwdGlvbih7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfTogUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJwXCI+KSB7XG4gIGNvbnN0IHsgZm9ybURlc2NyaXB0aW9uSWQgfSA9IHVzZUZvcm1GaWVsZCgpO1xuXG4gIHJldHVybiAoXG4gICAgPHBcbiAgICAgIGRhdGEtc2xvdD1cImZvcm0tZGVzY3JpcHRpb25cIlxuICAgICAgaWQ9e2Zvcm1EZXNjcmlwdGlvbklkfVxuICAgICAgY2xhc3NOYW1lPXtjbihcInRleHQtbXV0ZWQtZm9yZWdyb3VuZCB0ZXh0LXNtXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gRm9ybU1lc3NhZ2UoeyBjbGFzc05hbWUsIC4uLnByb3BzIH06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwicFwiPikge1xuICBjb25zdCB7IGVycm9yLCBmb3JtTWVzc2FnZUlkIH0gPSB1c2VGb3JtRmllbGQoKTtcbiAgY29uc3QgYm9keSA9IGVycm9yID8gU3RyaW5nKGVycm9yPy5tZXNzYWdlID8/IFwiXCIpIDogcHJvcHMuY2hpbGRyZW47XG5cbiAgaWYgKCFib2R5KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxwXG4gICAgICBkYXRhLXNsb3Q9XCJmb3JtLW1lc3NhZ2VcIlxuICAgICAgaWQ9e2Zvcm1NZXNzYWdlSWR9XG4gICAgICBjbGFzc05hbWU9e2NuKFwidGV4dC1kZXN0cnVjdGl2ZSB0ZXh0LXNtXCIsIGNsYXNzTmFtZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2JvZHl9XG4gICAgPC9wPlxuICApO1xufVxuXG5leHBvcnQge1xuICB1c2VGb3JtRmllbGQsXG4gIEZvcm0sXG4gIEZvcm1JdGVtLFxuICBGb3JtTGFiZWwsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtRGVzY3JpcHRpb24sXG4gIEZvcm1NZXNzYWdlLFxuICBGb3JtRmllbGQsXG59O1xuIl19