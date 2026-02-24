// "use client";
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormDemo = FormDemo;
    // import { toast } from "sonner";
    // import { useHookFormMask } from "use-mask-input";
    // import { zodResolver } from "@hookform/resolvers/zod";
    // import { useForm } from "react-hook-form";
    // import { z } from "zod";
    // import { Button } from "@/components/ui/button";
    // import { Card, CardContent, CardHeader } from "@/components/ui/card";
    // import {
    //   Form,
    //   FormControl,
    //   FormDescription,
    //   FormField,
    //   FormItem,
    //   FormLabel,
    //   FormMessage,
    // } from "@/components/ui/form";
    // import { Input } from "@/components/ui/input";
    // const formSchema = z.object({
    //   email: z.string().email("Must be a valid email."),
    //   phone: z.string().min(12, {
    //     message: "Must be a valid phone number.",
    //   }),
    //   password: z.string().min(8, {
    //     message: "Password must be at least 8 characters.",
    //   }),
    // });
    // export function FormDemo() {
    //   // 1. Define your form.
    //   const form = useForm<z.infer<typeof formSchema>>({
    //     resolver: zodResolver(formSchema),
    //     defaultValues: {
    //       email: "",
    //       phone: "",
    //       password: "",
    //     },
    //   });
    //   // 2. Define a submit handler.
    //   function onSubmit(values: z.infer<typeof formSchema>) {
    //     toast("Submitted:", {
    //       description: JSON.stringify(values, null, 2),
    //     });
    //   }
    //   const registerWithMask = useHookFormMask(form.register);
    //   return (
    //     <Card className="w-96">
    //       <CardHeader>Form Demo</CardHeader>
    //       <CardContent>
    //         <Form {...form}>
    //           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    //             <FormField
    //               control={form.control}
    //               name="email"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Email</FormLabel>
    //                   <FormControl>
    //                     <Input placeholder="test@example.com" {...field} />
    //                   </FormControl>
    //                   <FormDescription>
    //                     This email will not be shared with anyone.
    //                   </FormDescription>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />
    //             <FormField
    //               control={form.control}
    //               name="phone"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Phone</FormLabel>
    //                   <FormControl>
    //                     <Input
    //                       className="font-mono"
    //                       placeholder="(555) 555-5555"
    //                       onKeyDown={(e) => {
    //                         if (
    //                           e.currentTarget.value
    //                             .substring(0, e.currentTarget.selectionStart)
    //                             .includes("_")
    //                         ) {
    //                           const firstBlank = e.currentTarget.value.indexOf("_");
    //                           e.currentTarget.setSelectionRange(
    //                             firstBlank,
    //                             firstBlank,
    //                           );
    //                         }
    //                       }}
    //                       {...field}
    //                       {...registerWithMask("phone", "(999) 999-9999", {
    //                         placeholder: "_",
    //                         required: true,
    //                         showMaskOnHover: false,
    //                       })}
    //                     />
    //                   </FormControl>
    //                   <FormDescription>
    //                     This phone number will not be shared with anyone.
    //                   </FormDescription>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />
    //             <FormField
    //               control={form.control}
    //               name="password"
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>Password</FormLabel>
    //                   <FormControl>
    //                     <Input type="password" placeholder="" {...field} />
    //                   </FormControl>
    //                   <FormDescription>Choose a strong password.</FormDescription>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />
    //             <Button type="submit">Submit</Button>
    //           </form>
    //         </Form>
    //       </CardContent>
    //     </Card>
    //   );
    // }
    function FormDemo() {
        return "Form Demo";
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9kZW1vLWZvcm0vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjs7OztJQXFJaEIsNEJBRUM7SUFySUQsa0NBQWtDO0lBQ2xDLG9EQUFvRDtJQUNwRCx5REFBeUQ7SUFDekQsNkNBQTZDO0lBQzdDLDJCQUEyQjtJQUUzQixtREFBbUQ7SUFDbkQsd0VBQXdFO0lBQ3hFLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUNBQWlDO0lBQ2pDLGlEQUFpRDtJQUVqRCxnQ0FBZ0M7SUFDaEMsdURBQXVEO0lBQ3ZELGdDQUFnQztJQUNoQyxnREFBZ0Q7SUFDaEQsUUFBUTtJQUNSLGtDQUFrQztJQUNsQywwREFBMEQ7SUFDMUQsUUFBUTtJQUNSLE1BQU07SUFFTiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLHVEQUF1RDtJQUN2RCx5Q0FBeUM7SUFDekMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxRQUFRO0lBRVIsbUNBQW1DO0lBQ25DLDREQUE0RDtJQUM1RCw0QkFBNEI7SUFDNUIsc0RBQXNEO0lBQ3RELFVBQVU7SUFDVixNQUFNO0lBRU4sNkRBQTZEO0lBRTdELGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkNBQTJDO0lBQzNDLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZ0ZBQWdGO0lBQ2hGLHlCQUF5QjtJQUN6Qix1Q0FBdUM7SUFDdkMsNkJBQTZCO0lBQzdCLHlDQUF5QztJQUN6Qyw2QkFBNkI7SUFDN0IsaURBQWlEO0lBQ2pELGtDQUFrQztJQUNsQywwRUFBMEU7SUFDMUUsbUNBQW1DO0lBQ25DLHNDQUFzQztJQUN0QyxpRUFBaUU7SUFDakUsdUNBQXVDO0lBQ3ZDLG9DQUFvQztJQUNwQyw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3Qix5Q0FBeUM7SUFDekMsNkJBQTZCO0lBQzdCLGlEQUFpRDtJQUNqRCxrQ0FBa0M7SUFDbEMsNkJBQTZCO0lBQzdCLDhDQUE4QztJQUM5QyxxREFBcUQ7SUFDckQsNENBQTRDO0lBQzVDLCtCQUErQjtJQUMvQixrREFBa0Q7SUFDbEQsNEVBQTRFO0lBQzVFLDZDQUE2QztJQUM3Qyw4QkFBOEI7SUFDOUIsbUZBQW1GO0lBQ25GLCtEQUErRDtJQUMvRCwwQ0FBMEM7SUFDMUMsMENBQTBDO0lBQzFDLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQywwRUFBMEU7SUFDMUUsNENBQTRDO0lBQzVDLDBDQUEwQztJQUMxQyxrREFBa0Q7SUFDbEQsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsc0NBQXNDO0lBQ3RDLHdFQUF3RTtJQUN4RSx1Q0FBdUM7SUFDdkMsb0NBQW9DO0lBQ3BDLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix1Q0FBdUM7SUFDdkMsZ0NBQWdDO0lBQ2hDLHlDQUF5QztJQUN6Qyw2QkFBNkI7SUFDN0Isb0RBQW9EO0lBQ3BELGtDQUFrQztJQUNsQywwRUFBMEU7SUFDMUUsbUNBQW1DO0lBQ25DLGlGQUFpRjtJQUNqRixvQ0FBb0M7SUFDcEMsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0RBQW9EO0lBQ3BELG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxPQUFPO0lBQ1AsSUFBSTtJQUVKLFNBQWdCLFFBQVE7UUFDdEIsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFwidXNlIGNsaWVudFwiO1xuXG4vLyBpbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJzb25uZXJcIjtcbi8vIGltcG9ydCB7IHVzZUhvb2tGb3JtTWFzayB9IGZyb20gXCJ1c2UtbWFzay1pbnB1dFwiO1xuLy8gaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVycy96b2RcIjtcbi8vIGltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG4vLyBpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuLy8gaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcbi8vIGltcG9ydCB7XG4vLyAgIEZvcm0sXG4vLyAgIEZvcm1Db250cm9sLFxuLy8gICBGb3JtRGVzY3JpcHRpb24sXG4vLyAgIEZvcm1GaWVsZCxcbi8vICAgRm9ybUl0ZW0sXG4vLyAgIEZvcm1MYWJlbCxcbi8vICAgRm9ybU1lc3NhZ2UsXG4vLyB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZm9ybVwiO1xuLy8gaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5cbi8vIGNvbnN0IGZvcm1TY2hlbWEgPSB6Lm9iamVjdCh7XG4vLyAgIGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKFwiTXVzdCBiZSBhIHZhbGlkIGVtYWlsLlwiKSxcbi8vICAgcGhvbmU6IHouc3RyaW5nKCkubWluKDEyLCB7XG4vLyAgICAgbWVzc2FnZTogXCJNdXN0IGJlIGEgdmFsaWQgcGhvbmUgbnVtYmVyLlwiLFxuLy8gICB9KSxcbi8vICAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDgsIHtcbi8vICAgICBtZXNzYWdlOiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLlwiLFxuLy8gICB9KSxcbi8vIH0pO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gRm9ybURlbW8oKSB7XG4vLyAgIC8vIDEuIERlZmluZSB5b3VyIGZvcm0uXG4vLyAgIGNvbnN0IGZvcm0gPSB1c2VGb3JtPHouaW5mZXI8dHlwZW9mIGZvcm1TY2hlbWE+Pih7XG4vLyAgICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKGZvcm1TY2hlbWEpLFxuLy8gICAgIGRlZmF1bHRWYWx1ZXM6IHtcbi8vICAgICAgIGVtYWlsOiBcIlwiLFxuLy8gICAgICAgcGhvbmU6IFwiXCIsXG4vLyAgICAgICBwYXNzd29yZDogXCJcIixcbi8vICAgICB9LFxuLy8gICB9KTtcblxuLy8gICAvLyAyLiBEZWZpbmUgYSBzdWJtaXQgaGFuZGxlci5cbi8vICAgZnVuY3Rpb24gb25TdWJtaXQodmFsdWVzOiB6LmluZmVyPHR5cGVvZiBmb3JtU2NoZW1hPikge1xuLy8gICAgIHRvYXN0KFwiU3VibWl0dGVkOlwiLCB7XG4vLyAgICAgICBkZXNjcmlwdGlvbjogSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSxcbi8vICAgICB9KTtcbi8vICAgfVxuXG4vLyAgIGNvbnN0IHJlZ2lzdGVyV2l0aE1hc2sgPSB1c2VIb29rRm9ybU1hc2soZm9ybS5yZWdpc3Rlcik7XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ3LTk2XCI+XG4vLyAgICAgICA8Q2FyZEhlYWRlcj5Gb3JtIERlbW88L0NhcmRIZWFkZXI+XG4vLyAgICAgICA8Q2FyZENvbnRlbnQ+XG4vLyAgICAgICAgIDxGb3JtIHsuLi5mb3JtfT5cbi8vICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybS5oYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJzcGFjZS15LThcIj5cbi8vICAgICAgICAgICAgIDxGb3JtRmllbGRcbi8vICAgICAgICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxuLy8gICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuLy8gICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbi8vICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4vLyAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkVtYWlsPC9Gb3JtTGFiZWw+XG4vLyAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cInRlc3RAZXhhbXBsZS5jb21cIiB7Li4uZmllbGR9IC8+XG4vLyAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuLy8gICAgICAgICAgICAgICAgICAgPEZvcm1EZXNjcmlwdGlvbj5cbi8vICAgICAgICAgICAgICAgICAgICAgVGhpcyBlbWFpbCB3aWxsIG5vdCBiZSBzaGFyZWQgd2l0aCBhbnlvbmUuXG4vLyAgICAgICAgICAgICAgICAgICA8L0Zvcm1EZXNjcmlwdGlvbj5cbi8vICAgICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSAvPlxuLy8gICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4vLyAgICAgICAgICAgICAgICl9XG4vLyAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgPEZvcm1GaWVsZFxuLy8gICAgICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4vLyAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4vLyAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxuLy8gICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cbi8vICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+UGhvbmU8L0Zvcm1MYWJlbD5cbi8vICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbi8vICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4vLyAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tb25vXCJcbi8vICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIig1NTUpIDU1NS01NTU1XCJcbi8vICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMCwgZS5jdXJyZW50VGFyZ2V0LnNlbGVjdGlvblN0YXJ0KVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmNsdWRlcyhcIl9cIilcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdEJsYW5rID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlLmluZGV4T2YoXCJfXCIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc2V0U2VsZWN0aW9uUmFuZ2UoXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RCbGFuayxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEJsYW5rLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuLy8gICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcldpdGhNYXNrKFwicGhvbmVcIiwgXCIoOTk5KSA5OTktOTk5OVwiLCB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJfXCIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNYXNrT25Ib3ZlcjogZmFsc2UsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4vLyAgICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuLy8gICAgICAgICAgICAgICAgICAgPEZvcm1EZXNjcmlwdGlvbj5cbi8vICAgICAgICAgICAgICAgICAgICAgVGhpcyBwaG9uZSBudW1iZXIgd2lsbCBub3QgYmUgc2hhcmVkIHdpdGggYW55b25lLlxuLy8gICAgICAgICAgICAgICAgICAgPC9Gb3JtRGVzY3JpcHRpb24+XG4vLyAgICAgICAgICAgICAgICAgICA8Rm9ybU1lc3NhZ2UgLz5cbi8vICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuLy8gICAgICAgICAgICAgICApfVxuLy8gICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgIDxGb3JtRmllbGRcbi8vICAgICAgICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxuLy8gICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuLy8gICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbi8vICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4vLyAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XG4vLyAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlwiIHsuLi5maWVsZH0gLz5cbi8vICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4vLyAgICAgICAgICAgICAgICAgICA8Rm9ybURlc2NyaXB0aW9uPkNob29zZSBhIHN0cm9uZyBwYXNzd29yZC48L0Zvcm1EZXNjcmlwdGlvbj5cbi8vICAgICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSAvPlxuLy8gICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4vLyAgICAgICAgICAgICAgICl9XG4vLyAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XG4vLyAgICAgICAgICAgPC9mb3JtPlxuLy8gICAgICAgICA8L0Zvcm0+XG4vLyAgICAgICA8L0NhcmRDb250ZW50PlxuLy8gICAgIDwvQ2FyZD5cbi8vICAgKTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1EZW1vKCkge1xuICByZXR1cm4gXCJGb3JtIERlbW9cIjtcbn1cbiJdfQ==