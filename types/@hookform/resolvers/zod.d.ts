import { FieldValues, Resolver } from "react-hook-form";
import { z } from "zod";

declare function zodResolver<Input extends FieldValues, Context, Output>(
  schema: z.ZodSchema<Output, any, Input>,
  schemaOptions?: Partial<z.ParseParams>,
  resolverOptions?: {
    mode?: "async" | "sync";
    raw?: false;
  },
): Resolver<Input, Context, Output>;
declare function zodResolver<Input extends FieldValues, Context, Output>(
  schema: z.ZodSchema<Output, any, Input>,
  schemaOptions: Partial<z.ParseParams> | undefined,
  resolverOptions: {
    mode?: "async" | "sync";
    raw: true;
  },
): Resolver<Input, Context, Input>;

export { zodResolver };
