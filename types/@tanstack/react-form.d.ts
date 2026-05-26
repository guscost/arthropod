import {
  Observer,
  Subscription,
  ValidationSource,
  ValidationCause,
  ValidationError,
  GlobalFormValidationError,
  ListenerCause,
  UpdateMetaOptions,
  ValidationErrorMap,
  ValidationErrorMapSource,
  FieldManipulator,
  ExtractGlobalFormError,
  ValidationErrorMapKeys,
  FormValidationErrorMap,
  FormValidationError,
  AnyAtom,
  UseFieldOptionsBound,
  UseFieldOptions,
} from "./types.js";
export * from "./types.js";
import {
  DeepKeys,
  DeepValue,
  RejectPromiseValidator,
  UnwrapOneLevelOfArray,
  DeepKeysOfType,
  FieldsMap,
} from "./util-types.js";
export * from "./util-types.js";
import {
  ReactNode,
  FunctionComponent,
  ComponentType,
  PropsWithChildren,
  Context,
  useLayoutEffect,
} from "react";

declare class Store<T> {
  private atom;
  constructor(getValue: (prev?: NoInfer<T>) => T);
  constructor(initialValue: T);
  setState(updater: (prev: T) => T): void;
  get state(): T;
  get(): T;
  subscribe(observerOrFn: Observer<T> | ((value: T) => void)): Subscription;
}
declare class ReadonlyStore<T> implements Omit<Store<T>, "setState"> {
  private atom;
  constructor(getValue: (prev?: NoInfer<T>) => T);
  constructor(initialValue: T);
  get state(): T;
  get(): T;
  subscribe(observerOrFn: Observer<T> | ((value: T) => void)): Subscription;
}

interface ValidationLogicValidatorsFn {
  fn: FormValidators<
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >[keyof FormValidators<any, any, any, any, any, any, any, any, any, any>];
  cause: "change" | "blur" | "submit" | "mount" | "server" | "dynamic";
}
interface ValidationLogicProps {
  form: AnyFormApi;
  validators:
    | FormValidators<any, any, any, any, any, any, any, any, any, any>
    | undefined
    | null;
  event: {
    type: "blur" | "change" | "submit" | "mount" | "server";
    fieldName?: string;
    async: boolean;
  };
  runValidation: (props: {
    validators: Array<ValidationLogicValidatorsFn | undefined>;
    form: AnyFormApi;
  }) => void;
}
interface RevalidateLogicProps {
  /**
   * @default 'submit'
   *
   * This is the mode that will be used before the form has been submitted.
   * It will run the validation logic on `submit` by default, but can be set to `change` or `blur`.
   */
  mode?: "change" | "blur" | "submit";
  /**
   * @default 'change'
   *
   * This is the mode that will be used after the form has been submitted.
   * It will run the validation logic on `change` by default, but can be set to `blur` or `submit`.
   */
  modeAfterSubmission?: "change" | "blur" | "submit";
}
type ValidationLogicFn = (props: ValidationLogicProps) => void;
/**
 * This forces a form's validation logic to be ran as if it were a React Hook Form validation logic.
 *
 * This means that it will only run the `onDynamic` validator, and it will not run any other validators and changes the validation
 * type based on the state of the form itself.
 *
 * When the form is not yet submitted, it will not run the validation logic.
 * When the form is submitted, it will run the validation logic on `change`
 */
declare const revalidateLogic: ({
  mode,
  modeAfterSubmission,
}?: RevalidateLogicProps) => ValidationLogicFn;
declare const defaultValidationLogic: ValidationLogicFn;

type TStandardSchemaValidatorValue<
  TData,
  TSource extends ValidationSource = ValidationSource,
> = {
  value: TData;
  validationSource: TSource;
};
type TStandardSchemaValidatorIssue<
  TSource extends ValidationSource = ValidationSource,
> = TSource extends "form"
  ? {
      form: Record<string, StandardSchemaV1Issue[]>;
      fields: Record<string, StandardSchemaV1Issue[]>;
    }
  : TSource extends "field"
    ? StandardSchemaV1Issue[]
    : never;
declare const standardSchemaValidators: {
  validate<TSource extends ValidationSource = ValidationSource>(
    {
      value,
      validationSource,
    }: TStandardSchemaValidatorValue<unknown, TSource>,
    schema: StandardSchemaV1,
  ): TStandardSchemaValidatorIssue<TSource> | undefined;
  validateAsync<TSource extends ValidationSource>(
    {
      value,
      validationSource,
    }: TStandardSchemaValidatorValue<unknown, TSource>,
    schema: StandardSchemaV1,
  ): Promise<TStandardSchemaValidatorIssue<TSource> | undefined>;
};
declare const isStandardSchemaValidator: (
  validator: unknown,
) => validator is StandardSchemaV1;
/**
 * The Standard Schema interface.
 */
type StandardSchemaV1<Input = unknown, Output = Input> = {
  /**
   * The Standard Schema properties.
   */
  readonly "~standard": StandardSchemaV1Props<Input, Output>;
};
/**
 * The Standard Schema properties interface.
 */
interface StandardSchemaV1Props<Input = unknown, Output = Input> {
  /**
   * The version number of the standard.
   */
  readonly version: 1;
  /**
   * The vendor name of the schema library.
   */
  readonly vendor: string;
  /**
   * Validates unknown input values.
   */
  readonly validate: (
    value: unknown,
  ) => StandardSchemaV1Result<Output> | Promise<StandardSchemaV1Result<Output>>;
  /**
   * Inferred types associated with the schema.
   */
  readonly types?: StandardSchemaV1Types<Input, Output> | undefined;
}
/**
 * The result interface of the validate function.
 */
type StandardSchemaV1Result<Output> =
  | StandardSchemaV1SuccessResult<Output>
  | StandardSchemaV1FailureResult;
/**
 * The result interface if validation succeeds.
 */
interface StandardSchemaV1SuccessResult<Output> {
  /**
   * The typed output value.
   */
  readonly value: Output;
  /**
   * The non-existent issues.
   */
  readonly issues?: undefined;
}
/**
 * The result interface if validation fails.
 */
interface StandardSchemaV1FailureResult {
  /**
   * The issues of failed validation.
   */
  readonly issues: ReadonlyArray<StandardSchemaV1Issue>;
}
/**
 * The issue interface of the failure output.
 */
interface StandardSchemaV1Issue {
  /**
   * The error message of the issue.
   */
  readonly message: string;
  /**
   * The path of the issue, if any.
   */
  readonly path?:
    | ReadonlyArray<PropertyKey | StandardSchemaV1PathSegment>
    | undefined;
}
/**
 * The path segment interface of the issue.
 */
interface StandardSchemaV1PathSegment {
  /**
   * The key representing a path segment.
   */
  readonly key: PropertyKey;
}
/**
 * The Standard Schema types interface.
 */
interface StandardSchemaV1Types<Input = unknown, Output = Input> {
  /**
   * The input type of the schema.
   */
  readonly input: Input;
  /**
   * The output type of the schema.
   */
  readonly output: Output;
}

type UpdaterFn<TInput, TOutput = TInput> = (input: TInput) => TOutput;
type Updater<TInput, TOutput = TInput> = TOutput | UpdaterFn<TInput, TOutput>;
/**
 * @private
 */
declare function functionalUpdate<TInput, TOutput = TInput>(
  updater: Updater<TInput, TOutput>,
  input: TInput,
): TOutput;
/**
 * Get a value from an object using a path, including dot notation.
 * @private
 */
declare function getBy(obj: unknown, path: string | (string | number)[]): any;
/**
 * Set a value on an object using a path, including dot notation.
 * @private
 */
declare function setBy(obj: any, _path: any, updater: Updater<any>): any;
/**
 * Delete a field on an object using a path, including dot notation.
 * @private
 */
declare function deleteBy(obj: any, _path: any): any;
/**
 * @private
 */
declare function makePathArray(
  str: string | Array<string | number>,
): (string | number)[];
/**
 * @private
 */
declare function concatenatePaths(path1: string, path2: string): string;
/**
 * @private
 */
declare function isNonEmptyArray(obj: any): boolean;
interface AsyncValidatorArrayPartialOptions<T> {
  validators?: T;
  asyncDebounceMs?: number;
}
/**
 * @private
 */
interface AsyncValidator<T> {
  cause: ValidationCause;
  validate: T;
  debounceMs: number;
}
interface SyncValidatorArrayPartialOptions<T> {
  validators?: T;
}
/**
 * @private
 */
interface SyncValidator<T> {
  cause: ValidationCause;
  validate: T;
}
/**
 * @private
 */
declare function getSyncValidatorArray<T>(
  cause: ValidationCause,
  options: SyncValidatorArrayPartialOptions<T> & {
    validationLogic?: any;
    form?: any;
    fieldName?: string;
  },
): T extends FieldValidators<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>
  ? Array<
      SyncValidator<
        | T["onChange"]
        | T["onBlur"]
        | T["onSubmit"]
        | T["onMount"]
        | T["onDynamic"]
      >
    >
  : T extends FormValidators<any, any, any, any, any, any, any, any, any, any>
    ? Array<
        SyncValidator<
          | T["onChange"]
          | T["onBlur"]
          | T["onSubmit"]
          | T["onMount"]
          | T["onDynamic"]
        >
      >
    : never;
/**
 * @private
 */
declare function getAsyncValidatorArray<T>(
  cause: ValidationCause,
  options: AsyncValidatorArrayPartialOptions<T> & {
    validationLogic?: any;
    form?: any;
    fieldName?: string;
  },
): T extends FieldValidators<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>
  ? Array<
      AsyncValidator<
        | T["onChangeAsync"]
        | T["onBlurAsync"]
        | T["onSubmitAsync"]
        | T["onDynamicAsync"]
      >
    >
  : T extends FormValidators<any, any, any, any, any, any, any, any, any, any>
    ? Array<
        AsyncValidator<
          | T["onChangeAsync"]
          | T["onBlurAsync"]
          | T["onSubmitAsync"]
          | T["onDynamicAsync"]
        >
      >
    : never;
declare const isGlobalFormValidationError: (
  error: unknown,
) => error is GlobalFormValidationError<unknown>;
declare function evaluate<T>(objA: T, objB: T): boolean;
/**
 * Determines the logic for determining the error source and value to set on the field meta within the form level sync/async validation.
 * @private
 */
declare const determineFormLevelErrorSourceAndValue: ({
  newFormValidatorError,
  isPreviousErrorFromFormValidator,
  previousErrorValue,
}: {
  newFormValidatorError: ValidationError;
  isPreviousErrorFromFormValidator: boolean;
  previousErrorValue: ValidationError;
}) => {
  newErrorValue: ValidationError;
  newSource: ValidationSource | undefined;
};
/**
 * Determines the logic for determining the error source and value to set on the field meta within the field level sync/async validation.
 * @private
 */
declare const determineFieldLevelErrorSourceAndValue: ({
  formLevelError,
  fieldLevelError,
}: {
  formLevelError: ValidationError;
  fieldLevelError: ValidationError;
}) => {
  newErrorValue: ValidationError;
  newSource: ValidationSource | undefined;
};
declare function createFieldMap<T>(values: Readonly<T>): {
  [K in keyof T]: K;
};
/**
 * Merge the first parameter with the given overrides.
 * @private
 */
declare function mergeOpts<T>(
  originalOpts: T | undefined | null,
  overrides: T,
): T;
declare function uuid(): string;
declare const throttleFormState: (form: AnyFormApi) => void;
declare function deepCopy<T>(obj: T): T;

/**
 * @private
 */
type FieldErrorMapFromValidator<
  TFormData,
  TName extends DeepKeys<TFormData>,
  TData extends DeepValue<TFormData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TFormData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TFormData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TFormData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TFormData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TFormData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TFormData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TFormData, TName, TData>,
> = Partial<
  Record<
    DeepKeys<TFormData>,
    ValidationErrorMap<
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync
    >
  >
>;
/**
 * @private
 */
type FieldValidateFn<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> = (props: {
  value: TData;
  fieldApi: FieldApi<
    TParentData,
    TName,
    TData,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >;
}) => unknown;
/**
 * @private
 */
type FieldValidateOrFn<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> =
  | FieldValidateFn<TParentData, TName, TData>
  | StandardSchemaV1<TData, unknown>;
type StandardBrandedSchemaV1<T> = T & {
  __standardSchemaV1: true;
};
type UnwrapFormValidateOrFnForInner<
  TValidateOrFn extends undefined | FormValidateOrFn<any>,
> = [TValidateOrFn] extends [FormValidateFn<any>]
  ? ReturnType<TValidateOrFn>
  : [TValidateOrFn] extends [StandardSchemaV1<infer TOut, any>]
    ? StandardBrandedSchemaV1<TOut>
    : undefined;
type UnwrapFieldValidateOrFn<
  TName extends string,
  TValidateOrFn extends undefined | FieldValidateOrFn<any, any, any>,
  TFormValidateOrFn extends undefined | FormValidateOrFn<any>,
> =
  | ([TFormValidateOrFn] extends [StandardSchemaV1<any, infer TStandardOut>]
      ? TName extends keyof TStandardOut
        ? StandardSchemaV1Issue[]
        : undefined
      : undefined)
  | (UnwrapFormValidateOrFnForInner<TFormValidateOrFn> extends infer TFormValidateVal
      ? TFormValidateVal extends {
          __standardSchemaV1: true;
        }
        ? [DeepValue<TFormValidateVal, TName>] extends [never]
          ? undefined
          : StandardSchemaV1Issue[]
        : TFormValidateVal extends {
              fields: any;
            }
          ? TName extends keyof TFormValidateVal["fields"]
            ? TFormValidateVal["fields"][TName]
            : undefined
          : undefined
      : never)
  | ([TValidateOrFn] extends [FieldValidateFn<any, any, any>]
      ? ReturnType<TValidateOrFn>
      : [TValidateOrFn] extends [StandardSchemaV1<any, any>]
        ? StandardSchemaV1Issue[]
        : undefined);
/**
 * @private
 */
type FieldValidateAsyncFn<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> = (options: {
  value: TData;
  fieldApi: FieldApi<
    TParentData,
    TName,
    TData,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >;
  signal: AbortSignal;
}) => unknown | Promise<unknown>;
/**
 * @private
 */
type FieldAsyncValidateOrFn<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> =
  | FieldValidateAsyncFn<TParentData, TName, TData>
  | StandardSchemaV1<TData, unknown>;
type UnwrapFormAsyncValidateOrFnForInner<
  TValidateOrFn extends undefined | FormAsyncValidateOrFn<any>,
> = [TValidateOrFn] extends [FormValidateAsyncFn<any>]
  ? Awaited<ReturnType<TValidateOrFn>>
  : [TValidateOrFn] extends [StandardSchemaV1<infer TOut, any>]
    ? StandardBrandedSchemaV1<TOut>
    : undefined;
type UnwrapFieldAsyncValidateOrFn<
  TName extends string,
  TValidateOrFn extends undefined | FieldAsyncValidateOrFn<any, any, any>,
  TFormValidateOrFn extends undefined | FormAsyncValidateOrFn<any>,
> =
  | ([TFormValidateOrFn] extends [StandardSchemaV1<any, infer TStandardOut>]
      ? TName extends keyof TStandardOut
        ? StandardSchemaV1Issue[]
        : undefined
      : undefined)
  | (UnwrapFormAsyncValidateOrFnForInner<TFormValidateOrFn> extends infer TFormValidateVal
      ? TFormValidateVal extends {
          __standardSchemaV1: true;
        }
        ? [DeepValue<TFormValidateVal, TName>] extends [never]
          ? undefined
          : StandardSchemaV1Issue[]
        : TFormValidateVal extends {
              fields: any;
            }
          ? TName extends keyof TFormValidateVal["fields"]
            ? TFormValidateVal["fields"][TName]
            : undefined
          : undefined
      : never)
  | ([TValidateOrFn] extends [FieldValidateAsyncFn<any, any, any>]
      ? Awaited<ReturnType<TValidateOrFn>>
      : [TValidateOrFn] extends [StandardSchemaV1<any, any>]
        ? StandardSchemaV1Issue[]
        : undefined);
/**
 * @private
 */
type FieldListenerFn<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> = (props: {
  value: TData;
  fieldApi: FieldApi<
    TParentData,
    TName,
    TData,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >;
}) => void;
interface FieldValidators<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
> {
  /**
   * An optional function, that runs on the mount event of input.
   */
  onMount?: RejectPromiseValidator<TOnMount>;
  /**
   * An optional function, that runs on the change event of input.
   *
   * @example z.string().min(1)
   */
  onChange?: RejectPromiseValidator<TOnChange>;
  /**
   * An optional property similar to `onChange` but async validation
   *
   * @example z.string().refine(async (val) => val.length > 3, { message: 'Testing 123' })
   */
  onChangeAsync?: TOnChangeAsync;
  /**
   * An optional number to represent how long the `onChangeAsync` should wait before running
   *
   * If set to a number larger than 0, will debounce the async validation event by this length of time in milliseconds
   */
  onChangeAsyncDebounceMs?: number;
  /**
   * An optional list of field names that should trigger this field's `onChange` and `onChangeAsync` events when its value changes
   */
  onChangeListenTo?: DeepKeys<TParentData>[];
  /**
   * An optional function, that runs on the blur event of input.
   *
   * @example z.string().min(1)
   */
  onBlur?: RejectPromiseValidator<TOnBlur>;
  /**
   * An optional property similar to `onBlur` but async validation.
   *
   * @example z.string().refine(async (val) => val.length > 3, { message: 'Testing 123' })
   */
  onBlurAsync?: TOnBlurAsync;
  /**
   * An optional number to represent how long the `onBlurAsync` should wait before running
   *
   * If set to a number larger than 0, will debounce the async validation event by this length of time in milliseconds
   */
  onBlurAsyncDebounceMs?: number;
  /**
   * An optional list of field names that should trigger this field's `onBlur` and `onBlurAsync` events when its value changes
   */
  onBlurListenTo?: DeepKeys<TParentData>[];
  /**
   * An optional function, that runs on the submit event of form.
   *
   * @example z.string().min(1)
   */
  onSubmit?: RejectPromiseValidator<TOnSubmit>;
  /**
   * An optional property similar to `onSubmit` but async validation.
   *
   * @example z.string().refine(async (val) => val.length > 3, { message: 'Testing 123' })
   */
  onSubmitAsync?: TOnSubmitAsync;
  onDynamic?: RejectPromiseValidator<TOnDynamic>;
  onDynamicAsync?: TOnDynamicAsync;
  onDynamicAsyncDebounceMs?: number;
}
interface FieldListeners<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> {
  onChange?: FieldListenerFn<TParentData, TName, TData>;
  onChangeDebounceMs?: number;
  onBlur?: FieldListenerFn<TParentData, TName, TData>;
  onBlurDebounceMs?: number;
  onMount?: FieldListenerFn<TParentData, TName, TData>;
  onUnmount?: FieldListenerFn<TParentData, TName, TData>;
  onSubmit?: FieldListenerFn<TParentData, TName, TData>;
}
/**
 * An object type representing the options for a field in a form.
 */
interface FieldOptions<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
> {
  /**
   * The field name. The type will be `DeepKeys<TParentData>` to ensure your name is a deep key of the parent dataset.
   */
  name: TName;
  /**
   * An optional default value for the field.
   */
  defaultValue?: NoInfer<TData>;
  /**
   * The default time to debounce async validation if there is not a more specific debounce time passed.
   */
  asyncDebounceMs?: number;
  /**
   * If `true`, always run async validation, even if there are errors emitted during synchronous validation.
   */
  asyncAlways?: boolean;
  /**
   * A list of validators to pass to the field
   */
  validators?: FieldValidators<
    TParentData,
    TName,
    TData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync
  >;
  /**
   * An optional object with default metadata for the field.
   */
  defaultMeta?: Partial<
    FieldMeta<
      TParentData,
      TName,
      TData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any
    >
  >;
  /**
   * A list of listeners which attach to the corresponding events
   */
  listeners?: FieldListeners<TParentData, TName, TData>;
  /**
   * Disable the `flat(1)` operation on `field.errors`. This is useful if you want to keep the error structure as is. Not suggested for most use-cases.
   */
  disableErrorFlat?: boolean;
}
/**
 * An object type representing the required options for the FieldApi class.
 */
interface FieldApiOptions<
  in out TParentData,
  in out TName extends DeepKeys<TParentData>,
  in out TData extends DeepValue<TParentData, TName>,
  in out TOnMount extends
    | undefined
    | FieldValidateOrFn<TParentData, TName, TData>,
  in out TOnChange extends
    | undefined
    | FieldValidateOrFn<TParentData, TName, TData>,
  in out TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnBlur extends
    | undefined
    | FieldValidateOrFn<TParentData, TName, TData>,
  in out TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmit extends
    | undefined
    | FieldValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamic extends
    | undefined
    | FieldValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  in out TFormOnMount extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnChange extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnChangeAsync extends
    | undefined
    | FormAsyncValidateOrFn<TParentData>,
  in out TFormOnBlur extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnBlurAsync extends
    | undefined
    | FormAsyncValidateOrFn<TParentData>,
  in out TFormOnSubmit extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnSubmitAsync extends
    | undefined
    | FormAsyncValidateOrFn<TParentData>,
  in out TFormOnDynamic extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnDynamicAsync extends
    | undefined
    | FormAsyncValidateOrFn<TParentData>,
  in out TFormOnServer extends undefined | FormAsyncValidateOrFn<TParentData>,
  in out TParentSubmitMeta,
> extends FieldOptions<
  TParentData,
  TName,
  TData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync
> {
  form: FormApi<
    TParentData,
    TFormOnMount,
    TFormOnChange,
    TFormOnChangeAsync,
    TFormOnBlur,
    TFormOnBlurAsync,
    TFormOnSubmit,
    TFormOnSubmitAsync,
    TFormOnDynamic,
    TFormOnDynamicAsync,
    TFormOnServer,
    TParentSubmitMeta
  >;
}
type FieldMetaBase<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TFormOnMount extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChange extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChangeAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnBlur extends undefined | FormValidateOrFn<TParentData>,
  TFormOnBlurAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnSubmit extends undefined | FormValidateOrFn<TParentData>,
  TFormOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnDynamic extends undefined | FormValidateOrFn<TParentData>,
  TFormOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
> = {
  /**
   * A flag indicating whether the field has been touched.
   */
  isTouched: boolean;
  /**
   * A flag indicating whether the field has been blurred.
   */
  isBlurred: boolean;
  /**
   * A flag that is `true` if the field's value has been modified by the user. Opposite of `isPristine`.
   */
  isDirty: boolean;
  /**
   * A map of errors related to the field value.
   */
  errorMap: ValidationErrorMap<
    UnwrapFieldValidateOrFn<TName, TOnMount, TFormOnMount>,
    UnwrapFieldValidateOrFn<TName, TOnChange, TFormOnChange>,
    UnwrapFieldAsyncValidateOrFn<TName, TOnChangeAsync, TFormOnChangeAsync>,
    UnwrapFieldValidateOrFn<TName, TOnBlur, TFormOnBlur>,
    UnwrapFieldAsyncValidateOrFn<TName, TOnBlurAsync, TFormOnBlurAsync>,
    UnwrapFieldValidateOrFn<TName, TOnSubmit, TFormOnSubmit>,
    UnwrapFieldAsyncValidateOrFn<TName, TOnSubmitAsync, TFormOnSubmitAsync>,
    UnwrapFieldValidateOrFn<TName, TOnDynamic, TFormOnDynamic>,
    UnwrapFieldAsyncValidateOrFn<TName, TOnDynamicAsync, TFormOnDynamicAsync>
  >;
  /**
   * @private allows tracking the source of the errors in the error map
   */
  errorSourceMap: ValidationErrorMapSource;
  /**
   * A flag indicating whether the field is currently being validated.
   */
  isValidating: boolean;
  /**
   * @private a counter that is incremented every time a structural array
   * operation (push, insert, remove, swap, move, replace, clear) modifies
   * the value of an array field. Adapters can subscribe to this to trigger
   * re-renders for `mode="array"` fields without having to subscribe to the
   * full field value.
   */
  _arrayVersion: number;
};
type AnyFieldMetaBase = FieldMetaBase<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>;
type FieldMetaDerived<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TFormOnMount extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChange extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChangeAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnBlur extends undefined | FormValidateOrFn<TParentData>,
  TFormOnBlurAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnSubmit extends undefined | FormValidateOrFn<TParentData>,
  TFormOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnDynamic extends undefined | FormValidateOrFn<TParentData>,
  TFormOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
> = {
  /**
   * An array of errors related to the field value.
   */
  errors: Array<
    | UnwrapOneLevelOfArray<
        UnwrapFieldValidateOrFn<TName, TOnMount, TFormOnMount>
      >
    | UnwrapOneLevelOfArray<
        UnwrapFieldValidateOrFn<TName, TOnChange, TFormOnChange>
      >
    | UnwrapOneLevelOfArray<
        UnwrapFieldAsyncValidateOrFn<TName, TOnChangeAsync, TFormOnChangeAsync>
      >
    | UnwrapOneLevelOfArray<
        UnwrapFieldValidateOrFn<TName, TOnBlur, TFormOnBlur>
      >
    | UnwrapOneLevelOfArray<
        UnwrapFieldAsyncValidateOrFn<TName, TOnBlurAsync, TFormOnBlurAsync>
      >
    | UnwrapOneLevelOfArray<
        UnwrapFieldValidateOrFn<TName, TOnSubmit, TFormOnSubmit>
      >
    | UnwrapOneLevelOfArray<
        UnwrapFieldAsyncValidateOrFn<TName, TOnSubmitAsync, TFormOnSubmitAsync>
      >
    | UnwrapOneLevelOfArray<
        UnwrapFieldValidateOrFn<TName, TOnDynamic, TFormOnDynamic>
      >
    | UnwrapOneLevelOfArray<
        UnwrapFieldAsyncValidateOrFn<
          TName,
          TOnDynamicAsync,
          TFormOnDynamicAsync
        >
      >
  >;
  /**
   * A flag that is `true` if the field's value has not been modified by the user. Opposite of `isDirty`.
   */
  isPristine: boolean;
  /**
   * A boolean indicating if the field is valid. Evaluates `true` if there are no field errors.
   */
  isValid: boolean;
  /**
   * A flag indicating whether the field's current value is the default value
   */
  isDefaultValue: boolean;
};
type AnyFieldMetaDerived = FieldMetaDerived<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>;
/**
 * An object type representing the metadata of a field in a form.
 */
type FieldMeta<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TFormOnMount extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChange extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChangeAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnBlur extends undefined | FormValidateOrFn<TParentData>,
  TFormOnBlurAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnSubmit extends undefined | FormValidateOrFn<TParentData>,
  TFormOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnDynamic extends undefined | FormValidateOrFn<TParentData>,
  TFormOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
> = FieldMetaBase<
  TParentData,
  TName,
  TData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TFormOnMount,
  TFormOnChange,
  TFormOnChangeAsync,
  TFormOnBlur,
  TFormOnBlurAsync,
  TFormOnSubmit,
  TFormOnSubmitAsync,
  TFormOnDynamic,
  TFormOnDynamicAsync
> &
  FieldMetaDerived<
    TParentData,
    TName,
    TData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TFormOnMount,
    TFormOnChange,
    TFormOnChangeAsync,
    TFormOnBlur,
    TFormOnBlurAsync,
    TFormOnSubmit,
    TFormOnSubmitAsync,
    TFormOnDynamic,
    TFormOnDynamicAsync
  >;
type AnyFieldMeta = FieldMeta<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>;
/**
 * An object type representing the state of a field.
 */
type FieldState<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TFormOnMount extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChange extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChangeAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnBlur extends undefined | FormValidateOrFn<TParentData>,
  TFormOnBlurAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnSubmit extends undefined | FormValidateOrFn<TParentData>,
  TFormOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnDynamic extends undefined | FormValidateOrFn<TParentData>,
  TFormOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
> = {
  /**
   * The current value of the field.
   */
  value: TData;
  /**
   * The current metadata of the field.
   */
  meta: FieldMeta<
    TParentData,
    TName,
    TData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TFormOnMount,
    TFormOnChange,
    TFormOnChangeAsync,
    TFormOnBlur,
    TFormOnBlurAsync,
    TFormOnSubmit,
    TFormOnSubmitAsync,
    TFormOnDynamic,
    TFormOnDynamicAsync
  >;
};
/**
 * @public
 *
 * A type representing the Field API with all generics set to `any` for convenience.
 */
type AnyFieldApi = FieldApi<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>;
/**
 * We cannot use methods and must use arrow functions. Otherwise, our React adapters
 * will break due to loss of the method when using spread.
 */
/**
 * A class representing the API for managing a form field.
 *
 * Normally, you will not need to create a new `FieldApi` instance directly.
 * Instead, you will use a framework hook/function like `useField` or `createField`
 * to create a new instance for you that uses your framework's reactivity model.
 * However, if you need to create a new instance manually, you can do so by calling
 * the `new FieldApi` constructor.
 */
declare class FieldApi<
  in out TParentData,
  in out TName extends DeepKeys<TParentData>,
  in out TData extends DeepValue<TParentData, TName>,
  in out TOnMount extends
    | undefined
    | FieldValidateOrFn<TParentData, TName, TData>,
  in out TOnChange extends
    | undefined
    | FieldValidateOrFn<TParentData, TName, TData>,
  in out TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnBlur extends
    | undefined
    | FieldValidateOrFn<TParentData, TName, TData>,
  in out TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmit extends
    | undefined
    | FieldValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamic extends
    | undefined
    | FieldValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  in out TFormOnMount extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnChange extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnChangeAsync extends
    | undefined
    | FormAsyncValidateOrFn<TParentData>,
  in out TFormOnBlur extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnBlurAsync extends
    | undefined
    | FormAsyncValidateOrFn<TParentData>,
  in out TFormOnSubmit extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnSubmitAsync extends
    | undefined
    | FormAsyncValidateOrFn<TParentData>,
  in out TFormOnDynamic extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnDynamicAsync extends
    | undefined
    | FormAsyncValidateOrFn<TParentData>,
  in out TFormOnServer extends undefined | FormAsyncValidateOrFn<TParentData>,
  in out TParentSubmitMeta,
> {
  /**
   * A reference to the form API instance.
   */
  form: FieldApiOptions<
    TParentData,
    TName,
    TData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TFormOnMount,
    TFormOnChange,
    TFormOnChangeAsync,
    TFormOnBlur,
    TFormOnBlurAsync,
    TFormOnSubmit,
    TFormOnSubmitAsync,
    TFormOnDynamic,
    TFormOnDynamicAsync,
    TFormOnServer,
    TParentSubmitMeta
  >["form"];
  /**
   * The field name.
   */
  name: TName;
  /**
   * The field options.
   */
  options: FieldApiOptions<
    TParentData,
    TName,
    TData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TFormOnMount,
    TFormOnChange,
    TFormOnChangeAsync,
    TFormOnBlur,
    TFormOnBlurAsync,
    TFormOnSubmit,
    TFormOnSubmitAsync,
    TFormOnDynamic,
    TFormOnDynamicAsync,
    TFormOnServer,
    TParentSubmitMeta
  >;
  /**
   * The field state store.
   */
  store: ReadonlyStore<
    FieldState<
      TParentData,
      TName,
      TData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TFormOnMount,
      TFormOnChange,
      TFormOnChangeAsync,
      TFormOnBlur,
      TFormOnBlurAsync,
      TFormOnSubmit,
      TFormOnSubmitAsync,
      TFormOnDynamic,
      TFormOnDynamicAsync
    >
  >;
  /**
   * The current field state.
   */
  get state(): FieldState<
    TParentData,
    TName,
    TData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TFormOnMount,
    TFormOnChange,
    TFormOnChangeAsync,
    TFormOnBlur,
    TFormOnBlurAsync,
    TFormOnSubmit,
    TFormOnSubmitAsync,
    TFormOnDynamic,
    TFormOnDynamicAsync
  >;
  timeoutIds: {
    validations: Record<ValidationCause, ReturnType<typeof setTimeout> | null>;
    listeners: Record<ListenerCause, ReturnType<typeof setTimeout> | null>;
    formListeners: Record<ListenerCause, ReturnType<typeof setTimeout> | null>;
  };
  /**
   * Initializes a new `FieldApi` instance.
   */
  constructor(
    opts: FieldApiOptions<
      TParentData,
      TName,
      TData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TFormOnMount,
      TFormOnChange,
      TFormOnChangeAsync,
      TFormOnBlur,
      TFormOnBlurAsync,
      TFormOnSubmit,
      TFormOnSubmitAsync,
      TFormOnDynamic,
      TFormOnDynamicAsync,
      TFormOnServer,
      TParentSubmitMeta
    >,
  );
  /**
   * @private
   */
  runValidator<
    TValue extends TStandardSchemaValidatorValue<TData> & {
      fieldApi: AnyFieldApi;
    },
    TType extends "validate" | "validateAsync",
  >(props: {
    validate: TType extends "validate"
      ? FieldValidateOrFn<any, any, any>
      : FieldAsyncValidateOrFn<any, any, any>;
    value: TValue;
    type: TType;
  }): unknown;
  /**
   * Mounts the field instance to the form.
   * @returns A function to unmount the field instance.
   */
  mount: () => () => void;
  /**
   * Updates the field instance with new options.
   */
  update: (
    opts: FieldApiOptions<
      TParentData,
      TName,
      TData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TFormOnMount,
      TFormOnChange,
      TFormOnChangeAsync,
      TFormOnBlur,
      TFormOnBlurAsync,
      TFormOnSubmit,
      TFormOnSubmitAsync,
      TFormOnDynamic,
      TFormOnDynamicAsync,
      TFormOnServer,
      TParentSubmitMeta
    >,
  ) => void;
  /**
   * Gets the current field value.
   * @deprecated Use `field.state.value` instead.
   */
  getValue: () => TData;
  /**
   * Sets the field value and run the `change` validator.
   */
  setValue: (updater: Updater<TData>, options?: UpdateMetaOptions) => void;
  getMeta: () => FieldMeta<
    TParentData,
    TName,
    TData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TFormOnMount,
    TFormOnChange,
    TFormOnChangeAsync,
    TFormOnBlur,
    TFormOnBlurAsync,
    TFormOnSubmit,
    TFormOnSubmitAsync,
    TFormOnDynamic,
    TFormOnDynamicAsync
  >;
  /**
   * Sets the field metadata.
   */
  setMeta: (
    updater: Updater<
      FieldMetaBase<
        TParentData,
        TName,
        TData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync,
        TOnDynamic,
        TOnDynamicAsync,
        TFormOnMount,
        TFormOnChange,
        TFormOnChangeAsync,
        TFormOnBlur,
        TFormOnBlurAsync,
        TFormOnSubmit,
        TFormOnSubmitAsync,
        TFormOnDynamic,
        TFormOnDynamicAsync
      >
    >,
  ) => void;
  /**
   * Gets the field information object.
   */
  getInfo: () => FieldInfo<TParentData>;
  /**
   * Pushes a new value to the field.
   */
  pushValue: (
    value: TData extends any[] ? TData[number] : never,
    options?: UpdateMetaOptions,
  ) => void;
  /**
   * Inserts a value at the specified index, shifting the subsequent values to the right.
   */
  insertValue: (
    index: number,
    value: TData extends any[] ? TData[number] : never,
    options?: UpdateMetaOptions,
  ) => void;
  /**
   * Replaces a value at the specified index.
   */
  replaceValue: (
    index: number,
    value: TData extends any[] ? TData[number] : never,
    options?: UpdateMetaOptions,
  ) => void;
  /**
   * Removes a value at the specified index.
   */
  removeValue: (index: number, options?: UpdateMetaOptions) => void;
  /**
   * Swaps the values at the specified indices.
   */
  swapValues: (
    aIndex: number,
    bIndex: number,
    options?: UpdateMetaOptions,
  ) => void;
  /**
   * Moves the value at the first specified index to the second specified index.
   */
  moveValue: (
    aIndex: number,
    bIndex: number,
    options?: UpdateMetaOptions,
  ) => void;
  /**
   * Clear all values from the array.
   */
  clearValues: (options?: UpdateMetaOptions) => void;
  /**
   * @private
   */
  getLinkedFields: (cause: ValidationCause) => AnyFieldApi[];
  /**
   * @private
   */
  validateSync: (
    cause: ValidationCause,
    errorFromForm: ValidationErrorMap,
  ) => {
    hasErrored: boolean;
  };
  /**
   * @private
   */
  validateAsync: (
    cause: ValidationCause,
    formValidationResultPromise: Promise<
      FieldErrorMapFromValidator<
        TParentData,
        TName,
        TData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync
      >
    >,
  ) => Promise<unknown[]>;
  /**
   * Validates the field value.
   */
  validate: (
    cause: ValidationCause,
    opts?: {
      skipFormValidation?: boolean;
    },
  ) => ValidationError[] | Promise<ValidationError[]>;
  /**
   * Handles the change event.
   */
  handleChange: (updater: Updater<TData>) => void;
  /**
   * Handles the blur event.
   */
  handleBlur: () => void;
  /**
   * Updates the field's errorMap
   */
  setErrorMap: (
    errorMap: ValidationErrorMap<
      UnwrapFieldValidateOrFn<TName, TOnMount, TFormOnMount>,
      UnwrapFieldValidateOrFn<TName, TOnChange, TFormOnChange>,
      UnwrapFieldAsyncValidateOrFn<TName, TOnChangeAsync, TFormOnChangeAsync>,
      UnwrapFieldValidateOrFn<TName, TOnBlur, TFormOnBlur>,
      UnwrapFieldAsyncValidateOrFn<TName, TOnBlurAsync, TFormOnBlurAsync>,
      UnwrapFieldValidateOrFn<TName, TOnSubmit, TFormOnSubmit>,
      UnwrapFieldAsyncValidateOrFn<TName, TOnSubmitAsync, TFormOnSubmitAsync>,
      UnwrapFieldValidateOrFn<TName, TOnDynamic, TFormOnDynamic>,
      UnwrapFieldAsyncValidateOrFn<TName, TOnDynamicAsync, TFormOnDynamicAsync>
    >,
  ) => void;
  /**
   * Parses the field's value with the given schema and returns
   * issues (if any). This method does NOT set any internal errors.
   * @param schema The standard schema to parse this field's value with.
   */
  parseValueWithSchema: (
    schema: StandardSchemaV1<TData, unknown>,
  ) => StandardSchemaV1Issue[] | undefined;
  /**
   * Parses the field's value with the given schema and returns
   * issues (if any). This method does NOT set any internal errors.
   * @param schema The standard schema to parse this field's value with.
   */
  parseValueWithSchemaAsync: (
    schema: StandardSchemaV1<TData, unknown>,
  ) => Promise<StandardSchemaV1Issue[] | undefined>;
  private triggerOnBlurListener;
  /**
   * @private
   */
  triggerOnChangeListener: () => void;
}

/**
 * @private
 */
type FormErrorMapFromValidator<
  TFormData,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
> = Partial<
  Record<
    DeepKeys<TFormData>,
    ValidationErrorMap<
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync
    >
  >
>;
type FormValidateFn<TFormData> = (props: {
  value: TFormData;
  formApi: FormApi<
    TFormData,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >;
}) => unknown;
/**
 * @private
 */
type FormValidateOrFn<TFormData> =
  | FormValidateFn<TFormData>
  | StandardSchemaV1<TFormData, unknown>;
type UnwrapFormValidateOrFn<
  TValidateOrFn extends undefined | FormValidateOrFn<any>,
> = [TValidateOrFn] extends [FormValidateFn<any>]
  ? ExtractGlobalFormError<ReturnType<TValidateOrFn>>
  : [TValidateOrFn] extends [StandardSchemaV1<any, any>]
    ? Record<string, StandardSchemaV1Issue[]>
    : undefined;
/**
 * @private
 */
type FormValidateAsyncFn<TFormData> = (props: {
  value: TFormData;
  formApi: FormApi<
    TFormData,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >;
  signal: AbortSignal;
}) => unknown | Promise<unknown>;
type FormValidator<TFormData, TType, TFn = unknown> = {
  validate(
    options: {
      value: TType;
    },
    fn: TFn,
  ): ValidationError;
  validateAsync(
    options: {
      value: TType;
    },
    fn: TFn,
  ): Promise<FormValidationError<TFormData>>;
};
/**
 * @private
 */
type FormAsyncValidateOrFn<TFormData> =
  | FormValidateAsyncFn<TFormData>
  | StandardSchemaV1<TFormData, unknown>;
type UnwrapFormAsyncValidateOrFn<
  TValidateOrFn extends undefined | FormAsyncValidateOrFn<any>,
> = [TValidateOrFn] extends [FormValidateAsyncFn<any>]
  ? ExtractGlobalFormError<Awaited<ReturnType<TValidateOrFn>>>
  : [TValidateOrFn] extends [StandardSchemaV1<any, any>]
    ? Record<string, StandardSchemaV1Issue[]>
    : undefined;
interface FormValidators<
  TFormData,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
> {
  /**
   * Optional function that fires as soon as the component mounts.
   */
  onMount?: RejectPromiseValidator<TOnMount>;
  /**
   * Optional function that checks the validity of your data whenever a value changes
   */
  onChange?: RejectPromiseValidator<TOnChange>;
  /**
   * Optional onChange asynchronous counterpart to onChange. Useful for more complex validation logic that might involve server requests.
   */
  onChangeAsync?: TOnChangeAsync;
  /**
   * The default time in milliseconds that if set to a number larger than 0, will debounce the async validation event by this length of time in milliseconds.
   */
  onChangeAsyncDebounceMs?: number;
  /**
   * Optional function that validates the form data when a field loses focus, returns a `FormValidationError`
   */
  onBlur?: RejectPromiseValidator<TOnBlur>;
  /**
   * Optional onBlur asynchronous validation method for when a field loses focus returns a ` FormValidationError` or a promise of `Promise<FormValidationError>`
   */
  onBlurAsync?: TOnBlurAsync;
  /**
   * The default time in milliseconds that if set to a number larger than 0, will debounce the async validation event by this length of time in milliseconds.
   */
  onBlurAsyncDebounceMs?: number;
  onSubmit?: RejectPromiseValidator<TOnSubmit>;
  onSubmitAsync?: TOnSubmitAsync;
  onDynamic?: RejectPromiseValidator<TOnDynamic>;
  onDynamicAsync?: TOnDynamicAsync;
  onDynamicAsyncDebounceMs?: number;
}
interface FormListeners<
  TFormData,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  TSubmitMeta = never,
> {
  onChange?: (props: {
    formApi: FormApi<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >;
    fieldApi: AnyFieldApi;
  }) => void;
  onChangeDebounceMs?: number;
  onBlur?: (props: {
    formApi: FormApi<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >;
    fieldApi: AnyFieldApi;
  }) => void;
  onBlurDebounceMs?: number;
  onMount?: (props: {
    formApi: FormApi<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >;
  }) => void;
  onSubmit?: (props: {
    formApi: FormApi<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >;
    meta: TSubmitMeta;
  }) => void;
  onFieldUnmount?: (props: {
    formApi: FormApi<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >;
    fieldApi: AnyFieldApi;
  }) => void;
}
/**
 * An object representing the base properties of a form, unrelated to any validators
 */
interface BaseFormOptions<in out TFormData, in out TSubmitMeta = never> {
  /**
   * Set initial values for your form.
   */
  defaultValues?: TFormData;
  /**
   * onSubmitMeta, the data passed from the handleSubmit handler, to the onSubmit function props
   */
  onSubmitMeta?: TSubmitMeta;
}
/**
 * An object representing the options for a form.
 */
interface FormOptions<
  in out TFormData,
  in out TOnMount extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChange extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  in out TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  in out TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  in out TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TSubmitMeta = never,
> extends BaseFormOptions<TFormData, TSubmitMeta> {
  /**
   * The form name, used for devtools and identification
   */
  formId?: string;
  /**
   * The default state for the form.
   */
  defaultState?: Partial<
    FormState<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer
    >
  >;
  /**
   * If true, always run async validation, even when sync validation has produced an error. Defaults to undefined.
   */
  asyncAlways?: boolean;
  /**
   * Optional time in milliseconds if you want to introduce a delay before firing off an async action.
   */
  asyncDebounceMs?: number;
  /**
   * If true, allows the form to be submitted in an invalid state i.e. canSubmit will remain true regardless of validation errors. Defaults to undefined.
   */
  canSubmitWhenInvalid?: boolean;
  /**
   * A list of validators to pass to the form
   */
  validators?: FormValidators<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync
  >;
  validationLogic?: ValidationLogicFn;
  /**
   * form level listeners
   */
  listeners?: FormListeners<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta
  >;
  /**
   * A function to be called when the form is submitted, what should happen once the user submits a valid form returns `any` or a promise `Promise<any>`
   */
  onSubmit?: (props: {
    value: TFormData;
    formApi: FormApi<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >;
    meta: TSubmitMeta;
  }) => any | Promise<any>;
  /**
   * Specify an action for scenarios where the user tries to submit an invalid form.
   */
  onSubmitInvalid?: (props: {
    value: TFormData;
    formApi: FormApi<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >;
    meta: TSubmitMeta;
  }) => void;
  transform?: (data: unknown) => unknown;
}
type AnyFormOptions = FormOptions<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>;
/**
 * An object representing the validation metadata for a field. Not intended for public usage.
 */
type ValidationMeta = {
  /**
   * An abort controller stored in memory to cancel previous async validation attempts.
   */
  lastAbortController: AbortController;
};
/**
 * An object representing the field information for a specific field within the form.
 */
type FieldInfo<TFormData> = {
  /**
   * An instance of the FieldAPI.
   */
  instance: FieldApi<
    TFormData,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  > | null;
  /**
   * A record of field validation internal handling.
   */
  validationMetaMap: Record<ValidationErrorMapKeys, ValidationMeta | undefined>;
};
/**
 * An object representing the current state of the form.
 */
type BaseFormState<
  in out TFormData,
  in out TOnMount extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChange extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  in out TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  in out TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  in out TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
> = {
  /**
   * The current values of the form fields.
   */
  values: TFormData;
  /**
   * The error map for the form itself.
   */
  errorMap: ValidationErrorMap<
    UnwrapFormValidateOrFn<TOnMount>,
    UnwrapFormValidateOrFn<TOnChange>,
    UnwrapFormAsyncValidateOrFn<TOnChangeAsync>,
    UnwrapFormValidateOrFn<TOnBlur>,
    UnwrapFormAsyncValidateOrFn<TOnBlurAsync>,
    UnwrapFormValidateOrFn<TOnSubmit>,
    UnwrapFormAsyncValidateOrFn<TOnSubmitAsync>,
    UnwrapFormValidateOrFn<TOnDynamic>,
    UnwrapFormAsyncValidateOrFn<TOnDynamicAsync>,
    UnwrapFormAsyncValidateOrFn<TOnServer>
  >;
  /**
   * An internal mechanism used for keeping track of validation logic in a form.
   */
  validationMetaMap: Record<ValidationErrorMapKeys, ValidationMeta | undefined>;
  /**
   * A record of field metadata for each field in the form, not including the derived properties, like `errors` and such
   */
  fieldMetaBase: Partial<Record<DeepKeys<TFormData>, AnyFieldMetaBase>>;
  /**
   * A boolean indicating if the form is currently in the process of being submitted after `handleSubmit` is called.
   *
   * Goes back to `false` when submission completes for one of the following reasons:
   * - the validation step returned errors.
   * - the `onSubmit` function has completed.
   *
   * Note: if you're running async operations in your `onSubmit` function make sure to await them to ensure `isSubmitting` is set to `false` only when the async operation completes.
   *
   * This is useful for displaying loading indicators or disabling form inputs during submission.
   *
   */
  isSubmitting: boolean;
  /**
   * A boolean indicating if the `onSubmit` function has completed successfully.
   *
   * Goes back to `false` at each new submission attempt.
   *
   * Note: you can use isSubmitting to check if the form is currently submitting.
   */
  isSubmitted: boolean;
  /**
   * A boolean indicating if the form or any of its fields are currently validating.
   */
  isValidating: boolean;
  /**
   * A counter for tracking the number of submission attempts.
   */
  submissionAttempts: number;
  /**
   * A boolean indicating if the last submission was successful.
   */
  isSubmitSuccessful: boolean;
  /**
   * @private, used to force a re-evaluation of the form state when options change
   */
  _force_re_eval?: boolean;
};
type AnyBaseFormState = BaseFormState<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>;
type DerivedFormState<
  in out TFormData,
  in out TOnMount extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChange extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  in out TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  in out TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  in out TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
> = {
  /**
   * A boolean indicating if the form is currently validating.
   */
  isFormValidating: boolean;
  /**
   * A boolean indicating if the form is valid.
   */
  isFormValid: boolean;
  /**
   * The error array for the form itself.
   */
  errors: Array<
    NonNullable<
      | UnwrapFormValidateOrFn<TOnMount>
      | UnwrapFormValidateOrFn<TOnChange>
      | UnwrapFormAsyncValidateOrFn<TOnChangeAsync>
      | UnwrapFormValidateOrFn<TOnBlur>
      | UnwrapFormAsyncValidateOrFn<TOnBlurAsync>
      | UnwrapFormValidateOrFn<TOnSubmit>
      | UnwrapFormAsyncValidateOrFn<TOnSubmitAsync>
      | UnwrapFormValidateOrFn<TOnDynamic>
      | UnwrapFormAsyncValidateOrFn<TOnDynamicAsync>
      | UnwrapFormAsyncValidateOrFn<TOnServer>
    >
  >;
  /**
   * A boolean indicating if any of the form fields are currently validating.
   */
  isFieldsValidating: boolean;
  /**
   * A boolean indicating if all the form fields are valid. Evaluates `true` if there are no field errors.
   */
  isFieldsValid: boolean;
  /**
   * A boolean indicating if any of the form fields have been touched.
   */
  isTouched: boolean;
  /**
   * A boolean indicating if any of the form fields have been blurred.
   */
  isBlurred: boolean;
  /**
   * A boolean indicating if any of the form's fields' values have been modified by the user. Evaluates `true` if the user have modified at least one of the fields. Opposite of `isPristine`.
   */
  isDirty: boolean;
  /**
   * A boolean indicating if none of the form's fields' values have been modified by the user. Evaluates `true` if the user have not modified any of the fields. Opposite of `isDirty`.
   */
  isPristine: boolean;
  /**
   * A boolean indicating if all of the form's fields are the same as default values.
   */
  isDefaultValue: boolean;
  /**
   * A boolean indicating if the form and all its fields are valid. Evaluates `true` if there are no errors.
   */
  isValid: boolean;
  /**
   * A boolean indicating if the form can be submitted based on its current state.
   */
  canSubmit: boolean;
  /**
   * A record of field metadata for each field in the form.
   */
  fieldMeta: Partial<Record<DeepKeys<TFormData>, AnyFieldMeta>>;
};
interface FormState<
  in out TFormData,
  in out TOnMount extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChange extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  in out TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  in out TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  in out TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
>
  extends
    BaseFormState<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer
    >,
    DerivedFormState<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer
    > {}
type AnyFormState = FormState<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>;
/**
 * @public
 *
 * A type representing the Form API with all generics set to `any` for convenience.
 */
type AnyFormApi = FormApi<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>;
/**
 * We cannot use methods and must use arrow functions. Otherwise, our React adapters
 * will break due to loss of the method when using spread.
 */
/**
 * A class representing the Form API. It handles the logic and interactions with the form state.
 *
 * Normally, you will not need to create a new `FormApi` instance directly. Instead, you will use a framework
 * hook/function like `useForm` or `createForm` to create a new instance for you that uses your framework's reactivity model.
 * However, if you need to create a new instance manually, you can do so by calling the `new FormApi` constructor.
 */
declare class FormApi<
  in out TFormData,
  in out TOnMount extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChange extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  in out TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  in out TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  in out TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TSubmitMeta = never,
> implements FieldManipulator<TFormData, TSubmitMeta> {
  /**
   * The options for the form.
   */
  options: FormOptions<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta
  >;
  baseStore: Store<
    BaseFormState<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer
    >
  >;
  fieldMetaDerived: Store<
    FormState<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer
    >["fieldMeta"]
  >;
  store: ReadonlyStore<
    FormState<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer
    >
  >;
  /**
   * A record of field information for each field in the form.
   */
  fieldInfo: Partial<Record<DeepKeys<TFormData>, FieldInfo<TFormData>>>;
  get state(): FormState<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer
  >;
  /**
   * @private
   */
  timeoutIds: {
    validations: Record<ValidationCause, ReturnType<typeof setTimeout> | null>;
    listeners: Record<ListenerCause, ReturnType<typeof setTimeout> | null>;
    formListeners: Record<ListenerCause, ReturnType<typeof setTimeout> | null>;
  };
  /**
   * @private
   */
  _formId: string;
  /**
   * @private
   */
  private _devtoolsSubmissionOverride;
  /**
   * Constructs a new `FormApi` instance with the given form options.
   */
  constructor(
    opts?: FormOptions<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >,
  );
  get formId(): string;
  /**
   * @private
   */
  runValidator<
    TValue extends TStandardSchemaValidatorValue<TFormData> & {
      formApi: AnyFormApi;
    },
    TType extends "validate" | "validateAsync",
  >(props: {
    validate: TType extends "validate"
      ? FormValidateOrFn<TFormData>
      : FormAsyncValidateOrFn<TFormData>;
    value: TValue;
    type: TType;
  }): unknown;
  mount: () => () => void;
  /**
   * Updates the form options and form state.
   */
  update: (
    options?: FormOptions<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >,
  ) => void;
  /**
   * Resets the form state to the default values.
   * If values are provided, the form will be reset to those values instead and the default values will be updated.
   *
   * @param values - Optional values to reset the form to.
   * @param opts - Optional options to control the reset behavior.
   */
  reset: (
    values?: TFormData,
    opts?: {
      keepDefaultValues?: boolean;
    },
  ) => void;
  /**
   * Validates all fields according to the FIELD level validators.
   * This will ignore FORM level validators, use form.validate({ValidationCause}) for a complete validation
   */
  validateAllFields: (cause: ValidationCause) => Promise<unknown[]>;
  /**
   * Validates the children of a specified array in the form starting from a given index until the end using the correct handlers for a given validation type.
   */
  validateArrayFieldsStartingFrom: <
    TField extends DeepKeysOfType<TFormData, any[]>,
  >(
    field: TField,
    index: number,
    cause: ValidationCause,
  ) => Promise<unknown[]>;
  /**
   * Validates a specified field in the form using the correct handlers for a given validation type.
   */
  validateField: <TField extends DeepKeys<TFormData>>(
    field: TField,
    cause: ValidationCause,
  ) => any[] | Promise<any[]>;
  /**
   * TODO: This code is copied from FieldApi, we should refactor to share
   * @private
   */
  validateSync: (cause: ValidationCause) => {
    hasErrored: boolean;
    fieldsErrorMap: FormErrorMapFromValidator<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync
    >;
  };
  /**
   * @private
   */
  validateAsync: (
    cause: ValidationCause,
  ) => Promise<
    FormErrorMapFromValidator<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync
    >
  >;
  /**
   * @private
   */
  validate: (
    cause: ValidationCause,
  ) =>
    | FormErrorMapFromValidator<
        TFormData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync,
        TOnDynamic,
        TOnDynamicAsync
      >
    | Promise<
        FormErrorMapFromValidator<
          TFormData,
          TOnMount,
          TOnChange,
          TOnChangeAsync,
          TOnBlur,
          TOnBlurAsync,
          TOnSubmit,
          TOnSubmitAsync,
          TOnDynamic,
          TOnDynamicAsync
        >
      >;
  handleSubmit(): Promise<void>;
  handleSubmit(submitMeta: TSubmitMeta): Promise<void>;
  /**
   * Handles the form submission, performs validation, and calls the appropriate onSubmit or onSubmitInvalid callbacks.
   */
  _handleSubmit: (submitMeta?: TSubmitMeta) => Promise<void>;
  /**
   * Gets the value of the specified field.
   */
  getFieldValue: <TField extends DeepKeys<TFormData>>(
    field: TField,
  ) => DeepValue<TFormData, TField>;
  /**
   * Gets the metadata of the specified field.
   */
  getFieldMeta: <TField extends DeepKeys<TFormData>>(
    field: TField,
  ) => AnyFieldMeta | undefined;
  /**
   * Gets the field info of the specified field.
   */
  getFieldInfo: <TField extends DeepKeys<TFormData>>(
    field: TField,
  ) => FieldInfo<TFormData>;
  /**
   * Updates the metadata of the specified field.
   */
  setFieldMeta: <TField extends DeepKeys<TFormData>>(
    field: TField,
    updater: Updater<AnyFieldMetaBase>,
  ) => void;
  /**
   * resets every field's meta
   */
  resetFieldMeta: <TField extends DeepKeys<TFormData>>(
    fieldMeta: Partial<Record<TField, AnyFieldMeta>>,
  ) => Partial<Record<TField, AnyFieldMeta>>;
  /**
   * Sets the value of the specified field and optionally updates the touched state.
   */
  setFieldValue: <TField extends DeepKeys<TFormData>>(
    field: TField,
    updater: Updater<DeepValue<TFormData, TField>>,
    opts?: UpdateMetaOptions,
  ) => void;
  deleteField: <TField extends DeepKeys<TFormData>>(field: TField) => void;
  /**
   * Pushes a value into an array field.
   */
  pushFieldValue: <TField extends DeepKeysOfType<TFormData, any[]>>(
    field: TField,
    value: DeepValue<TFormData, TField> extends any[]
      ? DeepValue<TFormData, TField>[number]
      : never,
    options?: UpdateMetaOptions,
  ) => void;
  insertFieldValue: <TField extends DeepKeysOfType<TFormData, any[]>>(
    field: TField,
    index: number,
    value: DeepValue<TFormData, TField> extends any[]
      ? DeepValue<TFormData, TField>[number]
      : never,
    options?: UpdateMetaOptions,
  ) => Promise<void>;
  /**
   * Replaces a value into an array field at the specified index.
   */
  replaceFieldValue: <TField extends DeepKeysOfType<TFormData, any[]>>(
    field: TField,
    index: number,
    value: DeepValue<TFormData, TField> extends any[]
      ? DeepValue<TFormData, TField>[number]
      : never,
    options?: UpdateMetaOptions,
  ) => Promise<void>;
  /**
   * Removes a value from an array field at the specified index.
   */
  removeFieldValue: <TField extends DeepKeysOfType<TFormData, any[]>>(
    field: TField,
    index: number,
    options?: UpdateMetaOptions,
  ) => Promise<void>;
  /**
   * Swaps the values at the specified indices within an array field.
   */
  swapFieldValues: <TField extends DeepKeysOfType<TFormData, any[]>>(
    field: TField,
    index1: number,
    index2: number,
    options?: UpdateMetaOptions,
  ) => void;
  /**
   * Moves the value at the first specified index to the second specified index within an array field.
   */
  moveFieldValues: <TField extends DeepKeysOfType<TFormData, any[]>>(
    field: TField,
    index1: number,
    index2: number,
    options?: UpdateMetaOptions,
  ) => void;
  /**
   * Clear all values within an array field.
   */
  clearFieldValues: <TField extends DeepKeysOfType<TFormData, any[]>>(
    field: TField,
    options?: UpdateMetaOptions,
  ) => void;
  /**
   * Resets the field value and meta to default state
   */
  resetField: <TField extends DeepKeys<TFormData>>(field: TField) => void;
  /**
   * Updates the form's errorMap
   */
  setErrorMap: (
    errorMap: FormValidationErrorMap<
      TFormData,
      UnwrapFormValidateOrFn<TOnMount>,
      UnwrapFormValidateOrFn<TOnChange>,
      UnwrapFormAsyncValidateOrFn<TOnChangeAsync>,
      UnwrapFormValidateOrFn<TOnBlur>,
      UnwrapFormAsyncValidateOrFn<TOnBlurAsync>,
      UnwrapFormValidateOrFn<TOnSubmit>,
      UnwrapFormAsyncValidateOrFn<TOnSubmitAsync>,
      UnwrapFormValidateOrFn<TOnDynamic>,
      UnwrapFormAsyncValidateOrFn<TOnDynamicAsync>,
      UnwrapFormAsyncValidateOrFn<TOnServer>
    >,
  ) => void;
  /**
   * Returns form and field level errors
   */
  getAllErrors: () => {
    form: {
      errors: Array<
        NonNullable<
          | UnwrapFormValidateOrFn<TOnMount>
          | UnwrapFormValidateOrFn<TOnChange>
          | UnwrapFormAsyncValidateOrFn<TOnChangeAsync>
          | UnwrapFormValidateOrFn<TOnBlur>
          | UnwrapFormAsyncValidateOrFn<TOnBlurAsync>
          | UnwrapFormValidateOrFn<TOnSubmit>
          | UnwrapFormAsyncValidateOrFn<TOnSubmitAsync>
          | UnwrapFormValidateOrFn<TOnDynamic>
          | UnwrapFormAsyncValidateOrFn<TOnDynamicAsync>
          | UnwrapFormAsyncValidateOrFn<TOnServer>
        >
      >;
      errorMap: ValidationErrorMap<
        UnwrapFormValidateOrFn<TOnMount>,
        UnwrapFormValidateOrFn<TOnChange>,
        UnwrapFormAsyncValidateOrFn<TOnChangeAsync>,
        UnwrapFormValidateOrFn<TOnBlur>,
        UnwrapFormAsyncValidateOrFn<TOnBlurAsync>,
        UnwrapFormValidateOrFn<TOnSubmit>,
        UnwrapFormAsyncValidateOrFn<TOnSubmitAsync>,
        UnwrapFormValidateOrFn<TOnDynamic>,
        UnwrapFormAsyncValidateOrFn<TOnDynamicAsync>,
        UnwrapFormAsyncValidateOrFn<TOnServer>
      >;
    };
    fields: Record<
      DeepKeys<TFormData>,
      {
        errors: ValidationError[];
        errorMap: ValidationErrorMap;
      }
    >;
  };
  /**
   * Parses the form's values with a given standard schema and returns
   * issues (if any). This method does NOT set any internal errors.
   * @param schema The standard schema to parse the form values with.
   */
  parseValuesWithSchema: (schema: StandardSchemaV1<TFormData, unknown>) =>
    | {
        form: Record<string, StandardSchemaV1Issue[]>;
        fields: Record<string, StandardSchemaV1Issue[]>;
      }
    | undefined;
  /**
   * Parses the form's values with a given standard schema and returns
   * issues (if any). This method does NOT set any internal errors.
   * @param schema The standard schema to parse the form values with.
   */
  parseValuesWithSchemaAsync: (
    schema: StandardSchemaV1<TFormData, unknown>,
  ) => Promise<
    | {
        form: Record<string, StandardSchemaV1Issue[]>;
        fields: Record<string, StandardSchemaV1Issue[]>;
      }
    | undefined
  >;
}

/**
 * @private
 */
declare function mutateMergeDeep(
  target: object | null | undefined,
  source: object | null | undefined,
): object;
declare function mergeForm<
  TFormData,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  TSubmitMeta = never,
>(
  baseForm: FormApi<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta
  >,
  state: Partial<
    FormApi<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >["state"]
  >,
): FormApi<
  TFormData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TOnServer,
  TSubmitMeta
>;

declare function formOptions<
  TOptions extends Partial<
    FormOptions<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >
  >,
  TFormData,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  TSubmitMeta = never,
>(
  defaultOpts: Partial<
    FormOptions<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >
  > &
    TOptions,
): TOptions;

type AnyFieldGroupApi = FieldGroupApi<
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>;
interface FieldGroupState<in out TFieldGroupData> {
  /**
   * The current values of the field group
   */
  values: TFieldGroupData;
}
/**
 * An object representing the options for a field group.
 */
interface FieldGroupOptions<
  in out TFormData,
  in out TFieldGroupData,
  in out TFields extends
    | DeepKeysOfType<TFormData, TFieldGroupData | null | undefined>
    | FieldsMap<TFormData, TFieldGroupData>,
  in out TOnMount extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChange extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  in out TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  in out TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  in out TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TSubmitMeta = never,
> {
  form:
    | FormApi<
        TFormData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync,
        TOnDynamic,
        TOnDynamicAsync,
        TOnServer,
        TSubmitMeta
      >
    | FieldGroupApi<
        any,
        TFormData,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        TSubmitMeta
      >;
  /**
   * The path to the field group data.
   */
  fields: TFields;
  /**
   * The expected subsetValues that the form must provide.
   */
  defaultValues?: TFieldGroupData;
  /**
   * onSubmitMeta, the data passed from the handleSubmit handler, to the onSubmit function props
   */
  onSubmitMeta?: TSubmitMeta;
}
declare class FieldGroupApi<
  in out TFormData,
  in out TFieldGroupData,
  in out TFields extends
    | DeepKeysOfType<TFormData, TFieldGroupData | null | undefined>
    | FieldsMap<TFormData, TFieldGroupData>,
  in out TOnMount extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChange extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  in out TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  in out TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  in out TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TSubmitMeta = never,
> implements FieldManipulator<TFieldGroupData, TSubmitMeta> {
  /**
   * The form that called this field group.
   */
  readonly form: FormApi<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta
  >;
  readonly fieldsMap: TFields;
  /**
   * Get the true name of the field. Not required within `Field` or `AppField`.
   * @private
   */
  getFormFieldName: <TField extends DeepKeys<TFieldGroupData>>(
    subfield: TField,
  ) => DeepKeys<TFormData>;
  /**
   * Get the field options with the true form DeepKeys for validators
   * @private
   */
  getFormFieldOptions: <
    TOptions extends FieldOptions<
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any,
      any
    >,
  >(
    props: TOptions,
  ) => TOptions;
  store: ReadonlyStore<FieldGroupState<TFieldGroupData>>;
  get state(): FieldGroupState<TFieldGroupData>;
  /**
   * Constructs a new `FieldGroupApi` instance with the given form options.
   */
  constructor(
    opts: FieldGroupOptions<
      TFormData,
      TFieldGroupData,
      TFields,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >,
  );
  /**
   * Mounts the field group instance to listen to value changes.
   *
   * TODO: Remove
   */
  mount: () => () => void;
  /**
   * Validates the children of a specified array in the form starting from a given index until the end using the correct handlers for a given validation type.
   */
  validateArrayFieldsStartingFrom: <
    TField extends DeepKeysOfType<TFieldGroupData, any[]>,
  >(
    field: TField,
    index: number,
    cause: ValidationCause,
  ) => Promise<unknown[]>;
  /**
   * Validates a specified field in the form using the correct handlers for a given validation type.
   */
  validateField: <TField extends DeepKeys<TFieldGroupData>>(
    field: TField,
    cause: ValidationCause,
  ) => any[] | Promise<any[]>;
  /**
   * Handles the form submission, performs validation, and calls the appropriate onSubmit or onSubmitInvalid callbacks.
   */
  handleSubmit(): Promise<void>;
  handleSubmit(submitMeta: TSubmitMeta): Promise<void>;
  /**
   * Gets the value of the specified field.
   */
  getFieldValue: <TField extends DeepKeys<TFieldGroupData>>(
    field: TField,
  ) => DeepValue<TFieldGroupData, TField>;
  /**
   * Gets the metadata of the specified field.
   */
  getFieldMeta: <TField extends DeepKeys<TFieldGroupData>>(
    field: TField,
  ) => AnyFieldMeta | undefined;
  /**
   * Updates the metadata of the specified field.
   */
  setFieldMeta: <TField extends DeepKeys<TFieldGroupData>>(
    field: TField,
    updater: Updater<AnyFieldMetaBase>,
  ) => void;
  /**
   * Sets the value of the specified field and optionally updates the touched state.
   */
  setFieldValue: <TField extends DeepKeys<TFieldGroupData>>(
    field: TField,
    updater: Updater<DeepValue<TFieldGroupData, TField>>,
    opts?: UpdateMetaOptions,
  ) => void;
  /**
   * Delete a field and its subfields.
   */
  deleteField: <TField extends DeepKeys<TFieldGroupData>>(
    field: TField,
  ) => void;
  /**
   * Pushes a value into an array field.
   */
  pushFieldValue: <TField extends DeepKeysOfType<TFieldGroupData, any[]>>(
    field: TField,
    value: DeepValue<TFieldGroupData, TField> extends any[]
      ? DeepValue<TFieldGroupData, TField>[number]
      : never,
    opts?: UpdateMetaOptions,
  ) => void;
  /**
   * Insert a value into an array field at the specified index.
   */
  insertFieldValue: <TField extends DeepKeysOfType<TFieldGroupData, any[]>>(
    field: TField,
    index: number,
    value: DeepValue<TFieldGroupData, TField> extends any[]
      ? DeepValue<TFieldGroupData, TField>[number]
      : never,
    opts?: UpdateMetaOptions,
  ) => Promise<void>;
  /**
   * Replaces a value into an array field at the specified index.
   */
  replaceFieldValue: <TField extends DeepKeysOfType<TFieldGroupData, any[]>>(
    field: TField,
    index: number,
    value: DeepValue<TFieldGroupData, TField> extends any[]
      ? DeepValue<TFieldGroupData, TField>[number]
      : never,
    opts?: UpdateMetaOptions,
  ) => Promise<void>;
  /**
   * Removes a value from an array field at the specified index.
   */
  removeFieldValue: <TField extends DeepKeysOfType<TFieldGroupData, any[]>>(
    field: TField,
    index: number,
    opts?: UpdateMetaOptions,
  ) => Promise<void>;
  /**
   * Swaps the values at the specified indices within an array field.
   */
  swapFieldValues: <TField extends DeepKeysOfType<TFieldGroupData, any[]>>(
    field: TField,
    index1: number,
    index2: number,
    opts?: UpdateMetaOptions,
  ) => void;
  /**
   * Moves the value at the first specified index to the second specified index within an array field.
   */
  moveFieldValues: <TField extends DeepKeysOfType<TFieldGroupData, any[]>>(
    field: TField,
    index1: number,
    index2: number,
    opts?: UpdateMetaOptions,
  ) => void;
  clearFieldValues: <TField extends DeepKeysOfType<TFieldGroupData, any[]>>(
    field: TField,
    opts?: UpdateMetaOptions,
  ) => void;
  /**
   * Resets the field value and meta to default state
   */
  resetField: <TField extends DeepKeys<TFieldGroupData>>(field: TField) => void;
  validateAllFields: (cause: ValidationCause) => Promise<unknown[]>;
}

interface TanStackDevtoolsEvent<TEventName extends string, TPayload = any> {
  type: TEventName;
  payload: TPayload;
  pluginId?: string;
}
declare global {
  var __TANSTACK_EVENT_TARGET__: EventTarget | null;
}
type AllDevtoolsEvents<TEventMap extends Record<string, any>> = {
  [Key in keyof TEventMap & string]: TanStackDevtoolsEvent<Key, TEventMap[Key]>;
}[keyof TEventMap & string];
declare class EventClient<TEventMap extends Record<string, any>> {
  #private;
  constructor({
    pluginId,
    debug,
    enabled,
    reconnectEveryMs,
  }: {
    pluginId: string;
    debug?: boolean;
    reconnectEveryMs?: number;
    enabled?: boolean;
  });
  private startConnectLoop;
  private stopConnectLoop;
  private debugLog;
  private getGlobalTarget;
  getPluginId(): string;
  private dispatchCustomEventShim;
  private dispatchCustomEvent;
  private emitEventToBus;
  createEventPayload<TEvent extends keyof TEventMap & string>(
    eventSuffix: TEvent,
    payload: TEventMap[TEvent],
  ): {
    type: string;
    payload: TEventMap[TEvent];
    pluginId: string;
  };
  emit<TEvent extends keyof TEventMap & string>(
    eventSuffix: TEvent,
    payload: TEventMap[TEvent],
  ): void;
  on<TEvent extends keyof TEventMap & string>(
    eventSuffix: TEvent,
    cb: (event: TanStackDevtoolsEvent<TEvent, TEventMap[TEvent]>) => void,
    options?: {
      withEventTarget?: boolean;
    },
  ): () => void;
  onAll(cb: (event: TanStackDevtoolsEvent<string, any>) => void): () => void;
  onAllPluginEvents(
    cb: (event: AllDevtoolsEvents<TEventMap>) => void,
  ): () => void;
}

type ExtractEventNames<T> = T extends `${string}:${infer EventName}`
  ? EventName
  : never;
type BroadcastFormState = {
  id: string;
  state: AnyFormState;
};
type BroadcastFormApi = {
  id: string;
  state: AnyFormState;
  options: AnyFormOptions;
};
type BroadcastFormSubmissionState =
  | {
      id: string;
      submissionAttempt: number;
      successful: false;
      stage: "validateAllFields" | "validate";
      errors: any[];
    }
  | {
      id: string;
      submissionAttempt: number;
      successful: false;
      stage: "inflight";
      onError: unknown;
    }
  | {
      id: string;
      submissionAttempt: number;
      successful: true;
    };
type BroadcastFormId = {
  id: string;
};
type EventMap = {
  "form-state": BroadcastFormState;
  "form-api": BroadcastFormApi;
  "form-submission": BroadcastFormSubmissionState;
  "request-form-state": BroadcastFormId;
  "request-form-reset": BroadcastFormId;
  "request-form-force-submit": BroadcastFormId;
  "form-unmounted": BroadcastFormId;
};
type EventClientEventMap = keyof EventMap;
type EventClientEventNames = ExtractEventNames<EventClientEventMap>;
declare class FormEventClient extends EventClient<EventMap> {
  constructor();
}
declare const formEventClient: FormEventClient;

/**
 * @private
 */
type FormTransform<
  TFormData,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  TSubmitMeta = never,
> = (
  formBase: FormApi<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta
  >,
) => FormApi<
  TFormData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TOnServer,
  TSubmitMeta
>;
/**
 * @private
 */
declare function mergeAndUpdate<
  TFormData,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  TSubmitMeta = never,
>(
  form: FormApi<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta
  >,
  fn?: FormTransform<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta
  >,
):
  | (FormApi<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    > & {
      state: FormState<
        TFormData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync,
        TOnDynamic,
        TOnDynamicAsync,
        TOnServer
      >;
    })
  | undefined;

declare function useStore<TAtom extends AnyAtom | undefined, T>(
  atom: TAtom,
  selector: (
    snapshot: TAtom extends {
      get: () => infer TSnapshot;
    }
      ? TSnapshot
      : undefined,
  ) => T,
  compare?: (a: T, b: T) => boolean,
): T;

/**
 * A type representing a hook for using a field in a form with the given form data type.
 *
 * A function that takes an optional object with a `name` property and field options, and returns a `FieldApi` instance for the specified field.
 */
type UseField<
  TParentData,
  TFormOnMount extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChange extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChangeAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnBlur extends undefined | FormValidateOrFn<TParentData>,
  TFormOnBlurAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnSubmit extends undefined | FormValidateOrFn<TParentData>,
  TFormOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnDynamic extends undefined | FormValidateOrFn<TParentData>,
  TFormOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnServer extends undefined | FormAsyncValidateOrFn<TParentData>,
  TPatentSubmitMeta,
> = <
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
>(
  opts: UseFieldOptionsBound<
    TParentData,
    TName,
    TData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync
  >,
) => FieldApi<
  TParentData,
  TName,
  TData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TFormOnMount,
  TFormOnChange,
  TFormOnChangeAsync,
  TFormOnBlur,
  TFormOnBlurAsync,
  TFormOnSubmit,
  TFormOnSubmitAsync,
  TFormOnDynamic,
  TFormOnDynamicAsync,
  TFormOnServer,
  TPatentSubmitMeta
>;
/**
 * A hook for managing a field in a form.
 * @param opts An object with field options.
 *
 * @returns The `FieldApi` instance for the specified field.
 */
declare function useField<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TFormOnMount extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChange extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChangeAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnBlur extends undefined | FormValidateOrFn<TParentData>,
  TFormOnBlurAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnSubmit extends undefined | FormValidateOrFn<TParentData>,
  TFormOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnDynamic extends undefined | FormValidateOrFn<TParentData>,
  TFormOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnServer extends undefined | FormAsyncValidateOrFn<TParentData>,
  TPatentSubmitMeta,
>(
  opts: UseFieldOptions<
    TParentData,
    TName,
    TData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TFormOnMount,
    TFormOnChange,
    TFormOnChangeAsync,
    TFormOnBlur,
    TFormOnBlurAsync,
    TFormOnSubmit,
    TFormOnSubmitAsync,
    TFormOnDynamic,
    TFormOnDynamicAsync,
    TFormOnServer,
    TPatentSubmitMeta
  >,
): FieldApi<
  TParentData,
  TName,
  TData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TFormOnMount,
  TFormOnChange,
  TFormOnChangeAsync,
  TFormOnBlur,
  TFormOnBlurAsync,
  TFormOnSubmit,
  TFormOnSubmitAsync,
  TFormOnDynamic,
  TFormOnDynamicAsync,
  TFormOnServer,
  TPatentSubmitMeta
>;
/**
 * @param children A render function that takes a field API instance and returns a React element.
 */
interface FieldComponentProps<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TFormOnMount extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChange extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChangeAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnBlur extends undefined | FormValidateOrFn<TParentData>,
  TFormOnBlurAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnSubmit extends undefined | FormValidateOrFn<TParentData>,
  TFormOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnDynamic extends undefined | FormValidateOrFn<TParentData>,
  TFormOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnServer extends undefined | FormAsyncValidateOrFn<TParentData>,
  TPatentSubmitMeta,
  ExtendedApi = {},
> extends UseFieldOptions<
  TParentData,
  TName,
  TData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TFormOnMount,
  TFormOnChange,
  TFormOnChangeAsync,
  TFormOnBlur,
  TFormOnBlurAsync,
  TFormOnSubmit,
  TFormOnSubmitAsync,
  TFormOnDynamic,
  TFormOnDynamicAsync,
  TFormOnServer,
  TPatentSubmitMeta
> {
  children: (
    fieldApi: FieldApi<
      TParentData,
      TName,
      TData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TFormOnMount,
      TFormOnChange,
      TFormOnChangeAsync,
      TFormOnBlur,
      TFormOnBlurAsync,
      TFormOnSubmit,
      TFormOnSubmitAsync,
      TFormOnDynamic,
      TFormOnDynamicAsync,
      TFormOnServer,
      TPatentSubmitMeta
    > &
      ExtendedApi,
  ) => ReactNode;
}
interface FieldComponentBoundProps<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TFormOnMount extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChange extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChangeAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnBlur extends undefined | FormValidateOrFn<TParentData>,
  TFormOnBlurAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnSubmit extends undefined | FormValidateOrFn<TParentData>,
  TFormOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnDynamic extends undefined | FormValidateOrFn<TParentData>,
  TFormOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnServer extends undefined | FormAsyncValidateOrFn<TParentData>,
  TPatentSubmitMeta,
  ExtendedApi = {},
> extends UseFieldOptionsBound<
  TParentData,
  TName,
  TData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync
> {
  children: (
    fieldApi: FieldApi<
      TParentData,
      TName,
      TData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TFormOnMount,
      TFormOnChange,
      TFormOnChangeAsync,
      TFormOnBlur,
      TFormOnBlurAsync,
      TFormOnSubmit,
      TFormOnSubmitAsync,
      TFormOnDynamic,
      TFormOnDynamicAsync,
      TFormOnServer,
      TPatentSubmitMeta
    > &
      ExtendedApi,
  ) => ReactNode;
}
/**
 * A type alias representing a field component for a specific form data type.
 */
type FieldComponent<
  in out TParentData,
  in out TFormOnMount extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnChange extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnChangeAsync extends
    | undefined
    | FormAsyncValidateOrFn<TParentData>,
  in out TFormOnBlur extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnBlurAsync extends
    | undefined
    | FormAsyncValidateOrFn<TParentData>,
  in out TFormOnSubmit extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnSubmitAsync extends
    | undefined
    | FormAsyncValidateOrFn<TParentData>,
  in out TFormOnDynamic extends undefined | FormValidateOrFn<TParentData>,
  in out TFormOnDynamicAsync extends
    | undefined
    | FormAsyncValidateOrFn<TParentData>,
  in out TFormOnServer extends undefined | FormAsyncValidateOrFn<TParentData>,
  in out TPatentSubmitMeta,
  in out ExtendedApi = {},
> = <
  const TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
>({
  children,
  ...fieldOptions
}: FieldComponentBoundProps<
  TParentData,
  TName,
  TData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TFormOnMount,
  TFormOnChange,
  TFormOnChangeAsync,
  TFormOnBlur,
  TFormOnBlurAsync,
  TFormOnSubmit,
  TFormOnSubmitAsync,
  TFormOnDynamic,
  TFormOnDynamicAsync,
  TFormOnServer,
  TPatentSubmitMeta,
  ExtendedApi
>) => ReturnType<FunctionComponent>;
/**
 * A type alias representing a field component for a form lens data type.
 */
type LensFieldComponent<
  in out TLensData,
  in out TParentSubmitMeta,
  in out ExtendedApi = {},
> = <
  const TName extends DeepKeys<TLensData>,
  TData extends DeepValue<TLensData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<unknown, string, TData>,
  TOnChange extends undefined | FieldValidateOrFn<unknown, string, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<unknown, string, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<unknown, string, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<unknown, string, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<unknown, string, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<unknown, string, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<unknown, string, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<unknown, string, TData>,
>({
  children,
  ...fieldOptions
}: Omit<
  FieldComponentBoundProps<
    unknown,
    string,
    TData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    undefined | FormValidateOrFn<unknown>,
    undefined | FormValidateOrFn<unknown>,
    undefined | FormAsyncValidateOrFn<unknown>,
    undefined | FormValidateOrFn<unknown>,
    undefined | FormAsyncValidateOrFn<unknown>,
    undefined | FormValidateOrFn<unknown>,
    undefined | FormAsyncValidateOrFn<unknown>,
    undefined | FormValidateOrFn<unknown>,
    undefined | FormAsyncValidateOrFn<unknown>,
    undefined | FormAsyncValidateOrFn<unknown>,
    TParentSubmitMeta,
    ExtendedApi
  >,
  "name" | "validators"
> & {
  name: TName;
  validators?: Omit<
    FieldValidators<
      unknown,
      string,
      TData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync
    >,
    "onChangeListenTo" | "onBlurListenTo"
  > & {
    /**
     * An optional list of field names that should trigger this field's `onChange` and `onChangeAsync` events when its value changes
     */
    onChangeListenTo?: DeepKeys<TLensData>[];
    /**
     * An optional list of field names that should trigger this field's `onBlur` and `onBlurAsync` events when its value changes
     */
    onBlurListenTo?: DeepKeys<TLensData>[];
  };
}) => ReturnType<FunctionComponent>;
/**
 * A function component that takes field options and a render function as children and returns a React component.
 *
 * The `Field` component uses the `useField` hook internally to manage the field instance.
 */
declare const Field: <
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChange extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends undefined | FieldValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FieldAsyncValidateOrFn<TParentData, TName, TData>,
  TFormOnMount extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChange extends undefined | FormValidateOrFn<TParentData>,
  TFormOnChangeAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnBlur extends undefined | FormValidateOrFn<TParentData>,
  TFormOnBlurAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnSubmit extends undefined | FormValidateOrFn<TParentData>,
  TFormOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnDynamic extends undefined | FormValidateOrFn<TParentData>,
  TFormOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TParentData>,
  TFormOnServer extends undefined | FormAsyncValidateOrFn<TParentData>,
  TPatentSubmitMeta,
>({
  children,
  ...fieldOptions
}: FieldComponentProps<
  TParentData,
  TName,
  TData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TFormOnMount,
  TFormOnChange,
  TFormOnChangeAsync,
  TFormOnBlur,
  TFormOnBlurAsync,
  TFormOnSubmit,
  TFormOnSubmitAsync,
  TFormOnDynamic,
  TFormOnDynamicAsync,
  TFormOnServer,
  TPatentSubmitMeta
>) => ReturnType<FunctionComponent>;

/**
 * Fields that are added onto the `FormAPI` from `@tanstack/form-core` and returned from `useForm`
 */
interface ReactFormApi<
  in out TFormData,
  in out TOnMount extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChange extends undefined | FormValidateOrFn<TFormData>,
  in out TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  in out TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  in out TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  in out TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  in out TSubmitMeta,
> {
  /**
   * A React component to render form fields. With this, you can render and manage individual form fields.
   */
  Field: FieldComponent<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta
  >;
  /**
   * A `Subscribe` function that allows you to listen and react to changes in the form's state. It's especially useful when you need to execute side effects or render specific components in response to state updates.
   */
  Subscribe: <
    TSelected = NoInfer<
      FormState<
        TFormData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync,
        TOnDynamic,
        TOnDynamicAsync,
        TOnServer
      >
    >,
  >(props: {
    selector?: (
      state: NoInfer<
        FormState<
          TFormData,
          TOnMount,
          TOnChange,
          TOnChangeAsync,
          TOnBlur,
          TOnBlurAsync,
          TOnSubmit,
          TOnSubmitAsync,
          TOnDynamic,
          TOnDynamicAsync,
          TOnServer
        >
      >,
    ) => TSelected;
    children: ((state: NoInfer<TSelected>) => ReactNode) | ReactNode;
  }) => ReturnType<FunctionComponent>;
}
/**
 * An extended version of the `FormApi` class that includes React-specific functionalities from `ReactFormApi`
 */
type ReactFormExtendedApi<
  TFormData,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  TSubmitMeta,
> = FormApi<
  TFormData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TOnServer,
  TSubmitMeta
> &
  ReactFormApi<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta
  >;
/**
 * A custom React Hook that returns an extended instance of the `FormApi` class.
 *
 * This API encapsulates all the necessary functionalities related to the form. It allows you to manage form state, handle submissions, and interact with form fields
 */
declare function useForm<
  TFormData,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  TSubmitMeta,
>(
  opts?: FormOptions<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta
  >,
): ReactFormExtendedApi<
  TFormData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TOnServer,
  TSubmitMeta
>;

/**
 * @private
 */
type AppFieldExtendedReactFieldGroupApi<
  TFormData,
  TFieldGroupData,
  TFields extends
    | DeepKeysOfType<TFormData, TFieldGroupData | null | undefined>
    | FieldsMap<TFormData, TFieldGroupData>,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  TSubmitMeta,
  TFieldComponents extends Record<string, ComponentType<any>>,
  TFormComponents extends Record<string, ComponentType<any>>,
> = FieldGroupApi<
  TFormData,
  TFieldGroupData,
  TFields,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TOnServer,
  TSubmitMeta
> &
  NoInfer<TFormComponents> & {
    AppField: LensFieldComponent<
      TFieldGroupData,
      TSubmitMeta,
      NoInfer<TFieldComponents>
    >;
    AppForm: ComponentType<PropsWithChildren<{}>>;
    /**
     * A React component to render form fields. With this, you can render and manage individual form fields.
     */
    Field: LensFieldComponent<TFieldGroupData, TSubmitMeta>;
    /**
     * A `Subscribe` function that allows you to listen and react to changes in the form's state. It's especially useful when you need to execute side effects or render specific components in response to state updates.
     */
    Subscribe: <TSelected = NoInfer<FieldGroupState<TFieldGroupData>>>(props: {
      selector?: (
        state: NoInfer<FieldGroupState<TFieldGroupData>>,
      ) => TSelected;
      children: ((state: NoInfer<TSelected>) => ReactNode) | ReactNode;
    }) => ReturnType<FunctionComponent>;
  };
declare function useFieldGroup<
  TFormData,
  TFieldGroupData,
  TFields extends
    | DeepKeysOfType<TFormData, TFieldGroupData | null | undefined>
    | FieldsMap<TFormData, TFieldGroupData>,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  TComponents extends Record<string, ComponentType<any>>,
  TFormComponents extends Record<string, ComponentType<any>>,
  TSubmitMeta = never,
>(opts: {
  form:
    | AppFieldExtendedReactFormApi<
        TFormData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync,
        TOnDynamic,
        TOnDynamicAsync,
        TOnServer,
        TSubmitMeta,
        TComponents,
        TFormComponents
      >
    | AppFieldExtendedReactFieldGroupApi<
        unknown,
        TFormData,
        string | FieldsMap<unknown, TFormData>,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        TSubmitMeta,
        TComponents,
        TFormComponents
      >;
  fields: TFields;
  defaultValues?: TFieldGroupData;
  onSubmitMeta?: TSubmitMeta;
  formComponents: TFormComponents;
}): AppFieldExtendedReactFieldGroupApi<
  TFormData,
  TFieldGroupData,
  TFields,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TOnServer,
  TSubmitMeta,
  TComponents,
  TFormComponents
>;

/**
 * TypeScript inferencing is weird.
 *
 * If you have:
 *
 * @example
 *
 * interface Args<T> {
 *     arg?: T
 * }
 *
 * function test<T>(arg?: Partial<Args<T>>): T {
 *     return 0 as any;
 * }
 *
 * const a = test({});
 *
 * Then `T` will default to `unknown`.
 *
 * However, if we change `test` to be:
 *
 * @example
 *
 * function test<T extends undefined>(arg?: Partial<Args<T>>): T;
 *
 * Then `T` becomes `undefined`.
 *
 * Here, we are checking if the passed type `T` extends `DefaultT` and **only**
 * `DefaultT`, as if that's the case we assume that inferencing has not occurred.
 */
type UnwrapOrAny<T> = [unknown] extends [T] ? any : T;
type UnwrapDefaultOrAny<DefaultT, T> = [DefaultT] extends [T]
  ? [T] extends [DefaultT]
    ? any
    : T
  : T;
declare function useFormContext(): ReactFormExtendedApi<
  Record<string, never>,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
>;
declare function createFormHookContexts(): {
  fieldContext: Context<AnyFieldApi>;
  useFieldContext: <TData>() => FieldApi<
    any,
    string,
    TData,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >;
  useFormContext: typeof useFormContext;
  formContext: Context<AnyFormApi>;
};
interface CreateFormHookProps<
  TFieldComponents extends Record<string, ComponentType<any>>,
  TFormComponents extends Record<string, ComponentType<any>>,
> {
  fieldComponents: TFieldComponents;
  fieldContext: Context<AnyFieldApi>;
  formComponents: TFormComponents;
  formContext: Context<AnyFormApi>;
}
/**
 * @private
 */
type AppFieldExtendedReactFormApi<
  TFormData,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  TSubmitMeta,
  TFieldComponents extends Record<string, ComponentType<any>>,
  TFormComponents extends Record<string, ComponentType<any>>,
> = ReactFormExtendedApi<
  TFormData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TOnServer,
  TSubmitMeta
> &
  NoInfer<TFormComponents> & {
    AppField: FieldComponent<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta,
      NoInfer<TFieldComponents>
    >;
    AppForm: ComponentType<PropsWithChildren<{}>>;
  };
interface WithFormProps<
  TFormData,
  TOnMount extends undefined | FormValidateOrFn<TFormData>,
  TOnChange extends undefined | FormValidateOrFn<TFormData>,
  TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnBlur extends undefined | FormValidateOrFn<TFormData>,
  TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
  TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
  TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
  TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
  TSubmitMeta,
  TFieldComponents extends Record<string, ComponentType<any>>,
  TFormComponents extends Record<string, ComponentType<any>>,
  TRenderProps extends object = Record<string, never>,
> extends FormOptions<
  TFormData,
  TOnMount,
  TOnChange,
  TOnChangeAsync,
  TOnBlur,
  TOnBlurAsync,
  TOnSubmit,
  TOnSubmitAsync,
  TOnDynamic,
  TOnDynamicAsync,
  TOnServer,
  TSubmitMeta
> {
  props?: TRenderProps;
  render: FunctionComponent<
    PropsWithChildren<
      NoInfer<TRenderProps> & {
        form: AppFieldExtendedReactFormApi<
          TFormData,
          TOnMount,
          TOnChange,
          TOnChangeAsync,
          TOnBlur,
          TOnBlurAsync,
          TOnSubmit,
          TOnSubmitAsync,
          TOnDynamic,
          TOnDynamicAsync,
          TOnServer,
          TSubmitMeta,
          TFieldComponents,
          TFormComponents
        >;
      }
    >
  >;
}
interface WithFieldGroupProps<
  TFieldGroupData,
  TFieldComponents extends Record<string, ComponentType<any>>,
  TFormComponents extends Record<string, ComponentType<any>>,
  TSubmitMeta,
  TRenderProps extends object = Record<string, never>,
> extends BaseFormOptions<TFieldGroupData, TSubmitMeta> {
  props?: TRenderProps;
  render: FunctionComponent<
    PropsWithChildren<
      NoInfer<TRenderProps> & {
        group: AppFieldExtendedReactFieldGroupApi<
          unknown,
          TFieldGroupData,
          string | FieldsMap<unknown, TFieldGroupData>,
          undefined | FormValidateOrFn<unknown>,
          undefined | FormValidateOrFn<unknown>,
          undefined | FormAsyncValidateOrFn<unknown>,
          undefined | FormValidateOrFn<unknown>,
          undefined | FormAsyncValidateOrFn<unknown>,
          undefined | FormValidateOrFn<unknown>,
          undefined | FormAsyncValidateOrFn<unknown>,
          undefined | FormValidateOrFn<unknown>,
          undefined | FormAsyncValidateOrFn<unknown>,
          undefined | FormAsyncValidateOrFn<unknown>,
          unknown extends TSubmitMeta ? never : TSubmitMeta,
          TFieldComponents,
          TFormComponents
        >;
      }
    >
  >;
}
declare function createFormHook<
  const TComponents extends Record<string, ComponentType<any>>,
  const TFormComponents extends Record<string, ComponentType<any>>,
>({
  fieldComponents,
  fieldContext,
  formContext,
  formComponents,
}: CreateFormHookProps<TComponents, TFormComponents>): {
  useAppForm: <
    TFormData,
    TOnMount extends undefined | FormValidateOrFn<TFormData>,
    TOnChange extends undefined | FormValidateOrFn<TFormData>,
    TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnBlur extends undefined | FormValidateOrFn<TFormData>,
    TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
    TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
    TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
    TSubmitMeta,
  >(
    props: FormOptions<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >,
  ) => AppFieldExtendedReactFormApi<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta,
    TComponents,
    TFormComponents
  >;
  withForm: <
    TFormData,
    TOnMount extends undefined | FormValidateOrFn<TFormData>,
    TOnChange extends undefined | FormValidateOrFn<TFormData>,
    TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnBlur extends undefined | FormValidateOrFn<TFormData>,
    TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
    TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
    TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
    TSubmitMeta,
    TRenderProps extends object = {},
  >({
    render,
    props,
  }: WithFormProps<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta,
    TComponents,
    TFormComponents,
    TRenderProps
  >) => WithFormProps<
    UnwrapOrAny<TFormData>,
    UnwrapDefaultOrAny<undefined | FormValidateOrFn<TFormData>, TOnMount>,
    UnwrapDefaultOrAny<undefined | FormValidateOrFn<TFormData>, TOnChange>,
    UnwrapDefaultOrAny<undefined | FormValidateOrFn<TFormData>, TOnChangeAsync>,
    UnwrapDefaultOrAny<undefined | FormValidateOrFn<TFormData>, TOnBlur>,
    UnwrapDefaultOrAny<undefined | FormValidateOrFn<TFormData>, TOnBlurAsync>,
    UnwrapDefaultOrAny<undefined | FormValidateOrFn<TFormData>, TOnSubmit>,
    UnwrapDefaultOrAny<undefined | FormValidateOrFn<TFormData>, TOnSubmitAsync>,
    UnwrapDefaultOrAny<undefined | FormValidateOrFn<TFormData>, TOnDynamic>,
    UnwrapDefaultOrAny<
      undefined | FormValidateOrFn<TFormData>,
      TOnDynamicAsync
    >,
    UnwrapDefaultOrAny<undefined | FormValidateOrFn<TFormData>, TOnServer>,
    UnwrapOrAny<TSubmitMeta>,
    UnwrapOrAny<TComponents>,
    UnwrapOrAny<TFormComponents>,
    UnwrapOrAny<TRenderProps>
  >["render"];
  withFieldGroup: <
    TFieldGroupData,
    TSubmitMeta,
    TRenderProps extends object = {},
  >({
    render,
    props,
    defaultValues,
  }: WithFieldGroupProps<
    TFieldGroupData,
    TComponents,
    TFormComponents,
    TSubmitMeta,
    TRenderProps
  >) => <
    TFormData,
    TFields extends
      | DeepKeysOfType<TFormData, TFieldGroupData | null | undefined>
      | FieldsMap<TFormData, TFieldGroupData>,
    TOnMount extends undefined | FormValidateOrFn<TFormData>,
    TOnChange extends undefined | FormValidateOrFn<TFormData>,
    TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnBlur extends undefined | FormValidateOrFn<TFormData>,
    TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
    TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
    TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
    TFormSubmitMeta,
  >(
    params: PropsWithChildren<
      NoInfer<TRenderProps> & {
        form:
          | AppFieldExtendedReactFormApi<
              TFormData,
              TOnMount,
              TOnChange,
              TOnChangeAsync,
              TOnBlur,
              TOnBlurAsync,
              TOnSubmit,
              TOnSubmitAsync,
              TOnDynamic,
              TOnDynamicAsync,
              TOnServer,
              unknown extends TSubmitMeta ? TFormSubmitMeta : TSubmitMeta,
              TComponents,
              TFormComponents
            >
          | AppFieldExtendedReactFieldGroupApi<
              unknown,
              TFormData,
              string | FieldsMap<unknown, TFormData>,
              any,
              any,
              any,
              any,
              any,
              any,
              any,
              any,
              any,
              any,
              unknown extends TSubmitMeta ? TFormSubmitMeta : TSubmitMeta,
              TComponents,
              TFormComponents
            >;
        fields: TFields;
      }
    >,
  ) => ReturnType<FunctionComponent>;
  useTypedAppFormContext: <
    TFormData,
    TOnMount extends undefined | FormValidateOrFn<TFormData>,
    TOnChange extends undefined | FormValidateOrFn<TFormData>,
    TOnChangeAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnBlur extends undefined | FormValidateOrFn<TFormData>,
    TOnBlurAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnSubmit extends undefined | FormValidateOrFn<TFormData>,
    TOnSubmitAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnDynamic extends undefined | FormValidateOrFn<TFormData>,
    TOnDynamicAsync extends undefined | FormAsyncValidateOrFn<TFormData>,
    TOnServer extends undefined | FormAsyncValidateOrFn<TFormData>,
    TSubmitMeta,
  >(
    _props: FormOptions<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta
    >,
  ) => AppFieldExtendedReactFormApi<
    TFormData,
    TOnMount,
    TOnChange,
    TOnChangeAsync,
    TOnBlur,
    TOnBlurAsync,
    TOnSubmit,
    TOnSubmitAsync,
    TOnDynamic,
    TOnDynamicAsync,
    TOnServer,
    TSubmitMeta,
    TComponents,
    TFormComponents
  >;
  extendForm: <
    const TNewField extends Record<string, ComponentType<any>> & {
      [K in keyof TComponents]?: "Error: field component names must be unique \u2014 this key already exists in the base form";
    },
    const TNewForm extends Record<string, ComponentType<any>> & {
      [K in keyof TFormComponents]?: "Error: form component names must be unique \u2014 this key already exists in the base form";
    },
  >(extension: {
    fieldComponents?: TNewField;
    formComponents?: TNewForm;
  }) => {
    useAppForm: <
      TFormData,
      TOnMount extends FormValidateOrFn<TFormData> | undefined,
      TOnChange extends FormValidateOrFn<TFormData> | undefined,
      TOnChangeAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnBlur extends FormValidateOrFn<TFormData> | undefined,
      TOnBlurAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnSubmit extends FormValidateOrFn<TFormData> | undefined,
      TOnSubmitAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnDynamic extends FormValidateOrFn<TFormData> | undefined,
      TOnDynamicAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnServer extends FormAsyncValidateOrFn<TFormData> | undefined,
      TSubmitMeta,
    >(
      props: FormOptions<
        TFormData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync,
        TOnDynamic,
        TOnDynamicAsync,
        TOnServer,
        TSubmitMeta
      >,
    ) => AppFieldExtendedReactFormApi<
      TFormData,
      TOnMount,
      TOnChange,
      TOnChangeAsync,
      TOnBlur,
      TOnBlurAsync,
      TOnSubmit,
      TOnSubmitAsync,
      TOnDynamic,
      TOnDynamicAsync,
      TOnServer,
      TSubmitMeta,
      TComponents & TNewField,
      TFormComponents & TNewForm
    >;
    withForm: <
      TFormData,
      TOnMount_1 extends FormValidateOrFn<TFormData> | undefined,
      TOnChange_1 extends FormValidateOrFn<TFormData> | undefined,
      TOnChangeAsync_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnBlur_1 extends FormValidateOrFn<TFormData> | undefined,
      TOnBlurAsync_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnSubmit_1 extends FormValidateOrFn<TFormData> | undefined,
      TOnSubmitAsync_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnDynamic_1 extends FormValidateOrFn<TFormData> | undefined,
      TOnDynamicAsync_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnServer_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TSubmitMeta_1,
      TRenderProps extends object = {},
    >({
      render,
      props,
    }: WithFormProps<
      TFormData,
      TOnMount_1,
      TOnChange_1,
      TOnChangeAsync_1,
      TOnBlur_1,
      TOnBlurAsync_1,
      TOnSubmit_1,
      TOnSubmitAsync_1,
      TOnDynamic_1,
      TOnDynamicAsync_1,
      TOnServer_1,
      TSubmitMeta_1,
      TComponents & TNewField,
      TFormComponents & TNewForm,
      TRenderProps
    >) => FunctionComponent<
      PropsWithChildren<
        NoInfer<UnwrapOrAny<TRenderProps>> & {
          form: AppFieldExtendedReactFormApi<
            UnwrapOrAny<TFormData>,
            UnwrapDefaultOrAny<
              FormValidateOrFn<TFormData> | undefined,
              TOnMount_1
            >,
            UnwrapDefaultOrAny<
              FormValidateOrFn<TFormData> | undefined,
              TOnChange_1
            >,
            UnwrapDefaultOrAny<
              FormValidateOrFn<TFormData> | undefined,
              TOnChangeAsync_1
            >,
            UnwrapDefaultOrAny<
              FormValidateOrFn<TFormData> | undefined,
              TOnBlur_1
            >,
            UnwrapDefaultOrAny<
              FormValidateOrFn<TFormData> | undefined,
              TOnBlurAsync_1
            >,
            UnwrapDefaultOrAny<
              FormValidateOrFn<TFormData> | undefined,
              TOnSubmit_1
            >,
            UnwrapDefaultOrAny<
              FormValidateOrFn<TFormData> | undefined,
              TOnSubmitAsync_1
            >,
            UnwrapDefaultOrAny<
              FormValidateOrFn<TFormData> | undefined,
              TOnDynamic_1
            >,
            UnwrapDefaultOrAny<
              FormValidateOrFn<TFormData> | undefined,
              TOnDynamicAsync_1
            >,
            UnwrapDefaultOrAny<
              FormValidateOrFn<TFormData> | undefined,
              TOnServer_1
            >,
            UnwrapOrAny<TSubmitMeta_1>,
            UnwrapOrAny<TComponents & TNewField>,
            UnwrapOrAny<TFormComponents & TNewForm>
          >;
        }
      >
    >;
    withFieldGroup: <
      TFieldGroupData,
      TSubmitMeta_2,
      TRenderProps_1 extends object = {},
    >({
      render,
      props,
      defaultValues,
    }: WithFieldGroupProps<
      TFieldGroupData,
      TComponents & TNewField,
      TFormComponents & TNewForm,
      TSubmitMeta_2,
      TRenderProps_1
    >) => <
      TFormData,
      TFields extends
        | DeepKeysOfType<TFormData, TFieldGroupData | null | undefined>
        | FieldsMap<TFormData, TFieldGroupData>,
      TOnMount_2 extends FormValidateOrFn<TFormData> | undefined,
      TOnChange_2 extends FormValidateOrFn<TFormData> | undefined,
      TOnChangeAsync_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnBlur_2 extends FormValidateOrFn<TFormData> | undefined,
      TOnBlurAsync_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnSubmit_2 extends FormValidateOrFn<TFormData> | undefined,
      TOnSubmitAsync_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnDynamic_2 extends FormValidateOrFn<TFormData> | undefined,
      TOnDynamicAsync_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnServer_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TFormSubmitMeta,
    >(
      params: PropsWithChildren<
        NoInfer<TRenderProps_1> & {
          form:
            | AppFieldExtendedReactFormApi<
                TFormData,
                TOnMount_2,
                TOnChange_2,
                TOnChangeAsync_2,
                TOnBlur_2,
                TOnBlurAsync_2,
                TOnSubmit_2,
                TOnSubmitAsync_2,
                TOnDynamic_2,
                TOnDynamicAsync_2,
                TOnServer_2,
                unknown extends TSubmitMeta_2 ? TFormSubmitMeta : TSubmitMeta_2,
                TComponents & TNewField,
                TFormComponents & TNewForm
              >
            | AppFieldExtendedReactFieldGroupApi<
                unknown,
                TFormData,
                string | FieldsMap<unknown, TFormData>,
                any,
                any,
                any,
                any,
                any,
                any,
                any,
                any,
                any,
                any,
                unknown extends TSubmitMeta_2 ? TFormSubmitMeta : TSubmitMeta_2,
                TComponents & TNewField,
                TFormComponents & TNewForm
              >;
          fields: TFields;
        }
      >,
    ) => ReturnType<FunctionComponent>;
    useTypedAppFormContext: <
      TFormData,
      TOnMount_3 extends FormValidateOrFn<TFormData> | undefined,
      TOnChange_3 extends FormValidateOrFn<TFormData> | undefined,
      TOnChangeAsync_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnBlur_3 extends FormValidateOrFn<TFormData> | undefined,
      TOnBlurAsync_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnSubmit_3 extends FormValidateOrFn<TFormData> | undefined,
      TOnSubmitAsync_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnDynamic_3 extends FormValidateOrFn<TFormData> | undefined,
      TOnDynamicAsync_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TOnServer_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
      TSubmitMeta_3,
    >(
      _props: FormOptions<
        TFormData,
        TOnMount_3,
        TOnChange_3,
        TOnChangeAsync_3,
        TOnBlur_3,
        TOnBlurAsync_3,
        TOnSubmit_3,
        TOnSubmitAsync_3,
        TOnDynamic_3,
        TOnDynamicAsync_3,
        TOnServer_3,
        TSubmitMeta_3
      >,
    ) => AppFieldExtendedReactFormApi<
      TFormData,
      TOnMount_3,
      TOnChange_3,
      TOnChangeAsync_3,
      TOnBlur_3,
      TOnBlurAsync_3,
      TOnSubmit_3,
      TOnSubmitAsync_3,
      TOnDynamic_3,
      TOnDynamicAsync_3,
      TOnServer_3,
      TSubmitMeta_3,
      TComponents & TNewField,
      TFormComponents & TNewForm
    >;
    extendForm: <
      const TNewField_1 extends Record<string, ComponentType<any>> &
        (TComponents & TNewField extends infer T
          ? {
              [K in keyof T]?:
                | "Error: field component names must be unique — this key already exists in the base form"
                | undefined;
            }
          : never),
      const TNewForm_1 extends Record<string, ComponentType<any>> &
        (TFormComponents & TNewForm extends infer T_1
          ? {
              [K_1 in keyof T_1]?:
                | "Error: form component names must be unique — this key already exists in the base form"
                | undefined;
            }
          : never),
    >(extension: {
      fieldComponents?: TNewField_1 | undefined;
      formComponents?: TNewForm_1 | undefined;
    }) => {
      useAppForm: <
        TFormData,
        TOnMount extends FormValidateOrFn<TFormData> | undefined,
        TOnChange extends FormValidateOrFn<TFormData> | undefined,
        TOnChangeAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnBlur extends FormValidateOrFn<TFormData> | undefined,
        TOnBlurAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnSubmit extends FormValidateOrFn<TFormData> | undefined,
        TOnSubmitAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnDynamic extends FormValidateOrFn<TFormData> | undefined,
        TOnDynamicAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnServer extends FormAsyncValidateOrFn<TFormData> | undefined,
        TSubmitMeta,
      >(
        props: FormOptions<
          TFormData,
          TOnMount,
          TOnChange,
          TOnChangeAsync,
          TOnBlur,
          TOnBlurAsync,
          TOnSubmit,
          TOnSubmitAsync,
          TOnDynamic,
          TOnDynamicAsync,
          TOnServer,
          TSubmitMeta
        >,
      ) => AppFieldExtendedReactFormApi<
        TFormData,
        TOnMount,
        TOnChange,
        TOnChangeAsync,
        TOnBlur,
        TOnBlurAsync,
        TOnSubmit,
        TOnSubmitAsync,
        TOnDynamic,
        TOnDynamicAsync,
        TOnServer,
        TSubmitMeta,
        TComponents & TNewField & TNewField_1,
        TFormComponents & TNewForm & TNewForm_1
      >;
      withForm: <
        TFormData,
        TOnMount_1 extends FormValidateOrFn<TFormData> | undefined,
        TOnChange_1 extends FormValidateOrFn<TFormData> | undefined,
        TOnChangeAsync_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnBlur_1 extends FormValidateOrFn<TFormData> | undefined,
        TOnBlurAsync_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnSubmit_1 extends FormValidateOrFn<TFormData> | undefined,
        TOnSubmitAsync_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnDynamic_1 extends FormValidateOrFn<TFormData> | undefined,
        TOnDynamicAsync_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnServer_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TSubmitMeta_1,
        TRenderProps extends object = {},
      >({
        render,
        props,
      }: WithFormProps<
        TFormData,
        TOnMount_1,
        TOnChange_1,
        TOnChangeAsync_1,
        TOnBlur_1,
        TOnBlurAsync_1,
        TOnSubmit_1,
        TOnSubmitAsync_1,
        TOnDynamic_1,
        TOnDynamicAsync_1,
        TOnServer_1,
        TSubmitMeta_1,
        TComponents & TNewField & TNewField_1,
        TFormComponents & TNewForm & TNewForm_1,
        TRenderProps
      >) => FunctionComponent<
        PropsWithChildren<
          NoInfer<UnwrapOrAny<TRenderProps>> & {
            form: AppFieldExtendedReactFormApi<
              UnwrapOrAny<TFormData>,
              UnwrapDefaultOrAny<
                FormValidateOrFn<TFormData> | undefined,
                TOnMount_1
              >,
              UnwrapDefaultOrAny<
                FormValidateOrFn<TFormData> | undefined,
                TOnChange_1
              >,
              UnwrapDefaultOrAny<
                FormValidateOrFn<TFormData> | undefined,
                TOnChangeAsync_1
              >,
              UnwrapDefaultOrAny<
                FormValidateOrFn<TFormData> | undefined,
                TOnBlur_1
              >,
              UnwrapDefaultOrAny<
                FormValidateOrFn<TFormData> | undefined,
                TOnBlurAsync_1
              >,
              UnwrapDefaultOrAny<
                FormValidateOrFn<TFormData> | undefined,
                TOnSubmit_1
              >,
              UnwrapDefaultOrAny<
                FormValidateOrFn<TFormData> | undefined,
                TOnSubmitAsync_1
              >,
              UnwrapDefaultOrAny<
                FormValidateOrFn<TFormData> | undefined,
                TOnDynamic_1
              >,
              UnwrapDefaultOrAny<
                FormValidateOrFn<TFormData> | undefined,
                TOnDynamicAsync_1
              >,
              UnwrapDefaultOrAny<
                FormValidateOrFn<TFormData> | undefined,
                TOnServer_1
              >,
              UnwrapOrAny<TSubmitMeta_1>,
              UnwrapOrAny<TComponents & TNewField & TNewField_1>,
              UnwrapOrAny<TFormComponents & TNewForm & TNewForm_1>
            >;
          }
        >
      >;
      withFieldGroup: <
        TFieldGroupData,
        TSubmitMeta_2,
        TRenderProps_1 extends object = {},
      >({
        render,
        props,
        defaultValues,
      }: WithFieldGroupProps<
        TFieldGroupData,
        TComponents & TNewField & TNewField_1,
        TFormComponents & TNewForm & TNewForm_1,
        TSubmitMeta_2,
        TRenderProps_1
      >) => <
        TFormData,
        TFields extends
          | DeepKeysOfType<TFormData, TFieldGroupData | null | undefined>
          | FieldsMap<TFormData, TFieldGroupData>,
        TOnMount_2 extends FormValidateOrFn<TFormData> | undefined,
        TOnChange_2 extends FormValidateOrFn<TFormData> | undefined,
        TOnChangeAsync_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnBlur_2 extends FormValidateOrFn<TFormData> | undefined,
        TOnBlurAsync_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnSubmit_2 extends FormValidateOrFn<TFormData> | undefined,
        TOnSubmitAsync_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnDynamic_2 extends FormValidateOrFn<TFormData> | undefined,
        TOnDynamicAsync_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnServer_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TFormSubmitMeta,
      >(
        params: PropsWithChildren<
          NoInfer<TRenderProps_1> & {
            form:
              | AppFieldExtendedReactFormApi<
                  TFormData,
                  TOnMount_2,
                  TOnChange_2,
                  TOnChangeAsync_2,
                  TOnBlur_2,
                  TOnBlurAsync_2,
                  TOnSubmit_2,
                  TOnSubmitAsync_2,
                  TOnDynamic_2,
                  TOnDynamicAsync_2,
                  TOnServer_2,
                  unknown extends TSubmitMeta_2
                    ? TFormSubmitMeta
                    : TSubmitMeta_2,
                  TComponents & TNewField & TNewField_1,
                  TFormComponents & TNewForm & TNewForm_1
                >
              | AppFieldExtendedReactFieldGroupApi<
                  unknown,
                  TFormData,
                  string | FieldsMap<unknown, TFormData>,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  any,
                  unknown extends TSubmitMeta_2
                    ? TFormSubmitMeta
                    : TSubmitMeta_2,
                  TComponents & TNewField & TNewField_1,
                  TFormComponents & TNewForm & TNewForm_1
                >;
            fields: TFields;
          }
        >,
      ) => ReturnType<FunctionComponent>;
      useTypedAppFormContext: <
        TFormData,
        TOnMount_3 extends FormValidateOrFn<TFormData> | undefined,
        TOnChange_3 extends FormValidateOrFn<TFormData> | undefined,
        TOnChangeAsync_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnBlur_3 extends FormValidateOrFn<TFormData> | undefined,
        TOnBlurAsync_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnSubmit_3 extends FormValidateOrFn<TFormData> | undefined,
        TOnSubmitAsync_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnDynamic_3 extends FormValidateOrFn<TFormData> | undefined,
        TOnDynamicAsync_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TOnServer_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
        TSubmitMeta_3,
      >(
        _props: FormOptions<
          TFormData,
          TOnMount_3,
          TOnChange_3,
          TOnChangeAsync_3,
          TOnBlur_3,
          TOnBlurAsync_3,
          TOnSubmit_3,
          TOnSubmitAsync_3,
          TOnDynamic_3,
          TOnDynamicAsync_3,
          TOnServer_3,
          TSubmitMeta_3
        >,
      ) => AppFieldExtendedReactFormApi<
        TFormData,
        TOnMount_3,
        TOnChange_3,
        TOnChangeAsync_3,
        TOnBlur_3,
        TOnBlurAsync_3,
        TOnSubmit_3,
        TOnSubmitAsync_3,
        TOnDynamic_3,
        TOnDynamicAsync_3,
        TOnServer_3,
        TSubmitMeta_3,
        TComponents & TNewField & TNewField_1,
        TFormComponents & TNewForm & TNewForm_1
      >;
      extendForm: <
        const TNewField_2 extends Record<string, ComponentType<any>> &
          (TComponents & TNewField & TNewField_1 extends infer T_2
            ? {
                [K_2 in keyof T_2]?:
                  | "Error: field component names must be unique — this key already exists in the base form"
                  | undefined;
              }
            : never),
        const TNewForm_2 extends Record<string, ComponentType<any>> &
          (TFormComponents & TNewForm & TNewForm_1 extends infer T_3
            ? {
                [K_3 in keyof T_3]?:
                  | "Error: form component names must be unique — this key already exists in the base form"
                  | undefined;
              }
            : never),
      >(extension: {
        fieldComponents?: TNewField_2 | undefined;
        formComponents?: TNewForm_2 | undefined;
      }) => {
        useAppForm: <
          TFormData,
          TOnMount extends FormValidateOrFn<TFormData> | undefined,
          TOnChange extends FormValidateOrFn<TFormData> | undefined,
          TOnChangeAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnBlur extends FormValidateOrFn<TFormData> | undefined,
          TOnBlurAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnSubmit extends FormValidateOrFn<TFormData> | undefined,
          TOnSubmitAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnDynamic extends FormValidateOrFn<TFormData> | undefined,
          TOnDynamicAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnServer extends FormAsyncValidateOrFn<TFormData> | undefined,
          TSubmitMeta,
        >(
          props: FormOptions<
            TFormData,
            TOnMount,
            TOnChange,
            TOnChangeAsync,
            TOnBlur,
            TOnBlurAsync,
            TOnSubmit,
            TOnSubmitAsync,
            TOnDynamic,
            TOnDynamicAsync,
            TOnServer,
            TSubmitMeta
          >,
        ) => AppFieldExtendedReactFormApi<
          TFormData,
          TOnMount,
          TOnChange,
          TOnChangeAsync,
          TOnBlur,
          TOnBlurAsync,
          TOnSubmit,
          TOnSubmitAsync,
          TOnDynamic,
          TOnDynamicAsync,
          TOnServer,
          TSubmitMeta,
          TComponents & TNewField & TNewField_1 & TNewField_2,
          TFormComponents & TNewForm & TNewForm_1 & TNewForm_2
        >;
        withForm: <
          TFormData,
          TOnMount_1 extends FormValidateOrFn<TFormData> | undefined,
          TOnChange_1 extends FormValidateOrFn<TFormData> | undefined,
          TOnChangeAsync_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnBlur_1 extends FormValidateOrFn<TFormData> | undefined,
          TOnBlurAsync_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnSubmit_1 extends FormValidateOrFn<TFormData> | undefined,
          TOnSubmitAsync_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnDynamic_1 extends FormValidateOrFn<TFormData> | undefined,
          TOnDynamicAsync_1 extends
            | FormAsyncValidateOrFn<TFormData>
            | undefined,
          TOnServer_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
          TSubmitMeta_1,
          TRenderProps extends object = {},
        >({
          render,
          props,
        }: WithFormProps<
          TFormData,
          TOnMount_1,
          TOnChange_1,
          TOnChangeAsync_1,
          TOnBlur_1,
          TOnBlurAsync_1,
          TOnSubmit_1,
          TOnSubmitAsync_1,
          TOnDynamic_1,
          TOnDynamicAsync_1,
          TOnServer_1,
          TSubmitMeta_1,
          TComponents & TNewField & TNewField_1 & TNewField_2,
          TFormComponents & TNewForm & TNewForm_1 & TNewForm_2,
          TRenderProps
        >) => FunctionComponent<
          PropsWithChildren<
            NoInfer<UnwrapOrAny<TRenderProps>> & {
              form: AppFieldExtendedReactFormApi<
                UnwrapOrAny<TFormData>,
                UnwrapDefaultOrAny<
                  FormValidateOrFn<TFormData> | undefined,
                  TOnMount_1
                >,
                UnwrapDefaultOrAny<
                  FormValidateOrFn<TFormData> | undefined,
                  TOnChange_1
                >,
                UnwrapDefaultOrAny<
                  FormValidateOrFn<TFormData> | undefined,
                  TOnChangeAsync_1
                >,
                UnwrapDefaultOrAny<
                  FormValidateOrFn<TFormData> | undefined,
                  TOnBlur_1
                >,
                UnwrapDefaultOrAny<
                  FormValidateOrFn<TFormData> | undefined,
                  TOnBlurAsync_1
                >,
                UnwrapDefaultOrAny<
                  FormValidateOrFn<TFormData> | undefined,
                  TOnSubmit_1
                >,
                UnwrapDefaultOrAny<
                  FormValidateOrFn<TFormData> | undefined,
                  TOnSubmitAsync_1
                >,
                UnwrapDefaultOrAny<
                  FormValidateOrFn<TFormData> | undefined,
                  TOnDynamic_1
                >,
                UnwrapDefaultOrAny<
                  FormValidateOrFn<TFormData> | undefined,
                  TOnDynamicAsync_1
                >,
                UnwrapDefaultOrAny<
                  FormValidateOrFn<TFormData> | undefined,
                  TOnServer_1
                >,
                UnwrapOrAny<TSubmitMeta_1>,
                UnwrapOrAny<
                  TComponents & TNewField & TNewField_1 & TNewField_2
                >,
                UnwrapOrAny<
                  TFormComponents & TNewForm & TNewForm_1 & TNewForm_2
                >
              >;
            }
          >
        >;
        withFieldGroup: <
          TFieldGroupData,
          TSubmitMeta_2,
          TRenderProps_1 extends object = {},
        >({
          render,
          props,
          defaultValues,
        }: WithFieldGroupProps<
          TFieldGroupData,
          TComponents & TNewField & TNewField_1 & TNewField_2,
          TFormComponents & TNewForm & TNewForm_1 & TNewForm_2,
          TSubmitMeta_2,
          TRenderProps_1
        >) => <
          TFormData,
          TFields extends
            | DeepKeysOfType<TFormData, TFieldGroupData | null | undefined>
            | FieldsMap<TFormData, TFieldGroupData>,
          TOnMount_2 extends FormValidateOrFn<TFormData> | undefined,
          TOnChange_2 extends FormValidateOrFn<TFormData> | undefined,
          TOnChangeAsync_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnBlur_2 extends FormValidateOrFn<TFormData> | undefined,
          TOnBlurAsync_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnSubmit_2 extends FormValidateOrFn<TFormData> | undefined,
          TOnSubmitAsync_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnDynamic_2 extends FormValidateOrFn<TFormData> | undefined,
          TOnDynamicAsync_2 extends
            | FormAsyncValidateOrFn<TFormData>
            | undefined,
          TOnServer_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
          TFormSubmitMeta,
        >(
          params: PropsWithChildren<
            NoInfer<TRenderProps_1> & {
              form:
                | AppFieldExtendedReactFormApi<
                    TFormData,
                    TOnMount_2,
                    TOnChange_2,
                    TOnChangeAsync_2,
                    TOnBlur_2,
                    TOnBlurAsync_2,
                    TOnSubmit_2,
                    TOnSubmitAsync_2,
                    TOnDynamic_2,
                    TOnDynamicAsync_2,
                    TOnServer_2,
                    unknown extends TSubmitMeta_2
                      ? TFormSubmitMeta
                      : TSubmitMeta_2,
                    TComponents & TNewField & TNewField_1 & TNewField_2,
                    TFormComponents & TNewForm & TNewForm_1 & TNewForm_2
                  >
                | AppFieldExtendedReactFieldGroupApi<
                    unknown,
                    TFormData,
                    string | FieldsMap<unknown, TFormData>,
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    any,
                    unknown extends TSubmitMeta_2
                      ? TFormSubmitMeta
                      : TSubmitMeta_2,
                    TComponents & TNewField & TNewField_1 & TNewField_2,
                    TFormComponents & TNewForm & TNewForm_1 & TNewForm_2
                  >;
              fields: TFields;
            }
          >,
        ) => ReturnType<FunctionComponent>;
        useTypedAppFormContext: <
          TFormData,
          TOnMount_3 extends FormValidateOrFn<TFormData> | undefined,
          TOnChange_3 extends FormValidateOrFn<TFormData> | undefined,
          TOnChangeAsync_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnBlur_3 extends FormValidateOrFn<TFormData> | undefined,
          TOnBlurAsync_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnSubmit_3 extends FormValidateOrFn<TFormData> | undefined,
          TOnSubmitAsync_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
          TOnDynamic_3 extends FormValidateOrFn<TFormData> | undefined,
          TOnDynamicAsync_3 extends
            | FormAsyncValidateOrFn<TFormData>
            | undefined,
          TOnServer_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
          TSubmitMeta_3,
        >(
          _props: FormOptions<
            TFormData,
            TOnMount_3,
            TOnChange_3,
            TOnChangeAsync_3,
            TOnBlur_3,
            TOnBlurAsync_3,
            TOnSubmit_3,
            TOnSubmitAsync_3,
            TOnDynamic_3,
            TOnDynamicAsync_3,
            TOnServer_3,
            TSubmitMeta_3
          >,
        ) => AppFieldExtendedReactFormApi<
          TFormData,
          TOnMount_3,
          TOnChange_3,
          TOnChangeAsync_3,
          TOnBlur_3,
          TOnBlurAsync_3,
          TOnSubmit_3,
          TOnSubmitAsync_3,
          TOnDynamic_3,
          TOnDynamicAsync_3,
          TOnServer_3,
          TSubmitMeta_3,
          TComponents & TNewField & TNewField_1 & TNewField_2,
          TFormComponents & TNewForm & TNewForm_1 & TNewForm_2
        >;
        extendForm: <
          const TNewField_3 extends Record<string, ComponentType<any>> &
            (TComponents &
              TNewField &
              TNewField_1 &
              TNewField_2 extends infer T_4
              ? {
                  [K_4 in keyof T_4]?:
                    | "Error: field component names must be unique — this key already exists in the base form"
                    | undefined;
                }
              : never),
          const TNewForm_3 extends Record<string, ComponentType<any>> &
            (TFormComponents &
              TNewForm &
              TNewForm_1 &
              TNewForm_2 extends infer T_5
              ? {
                  [K_5 in keyof T_5]?:
                    | "Error: form component names must be unique — this key already exists in the base form"
                    | undefined;
                }
              : never),
        >(extension: {
          fieldComponents?: TNewField_3 | undefined;
          formComponents?: TNewForm_3 | undefined;
        }) => {
          useAppForm: <
            TFormData,
            TOnMount extends FormValidateOrFn<TFormData> | undefined,
            TOnChange extends FormValidateOrFn<TFormData> | undefined,
            TOnChangeAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
            TOnBlur extends FormValidateOrFn<TFormData> | undefined,
            TOnBlurAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
            TOnSubmit extends FormValidateOrFn<TFormData> | undefined,
            TOnSubmitAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
            TOnDynamic extends FormValidateOrFn<TFormData> | undefined,
            TOnDynamicAsync extends
              | FormAsyncValidateOrFn<TFormData>
              | undefined,
            TOnServer extends FormAsyncValidateOrFn<TFormData> | undefined,
            TSubmitMeta,
          >(
            props: FormOptions<
              TFormData,
              TOnMount,
              TOnChange,
              TOnChangeAsync,
              TOnBlur,
              TOnBlurAsync,
              TOnSubmit,
              TOnSubmitAsync,
              TOnDynamic,
              TOnDynamicAsync,
              TOnServer,
              TSubmitMeta
            >,
          ) => AppFieldExtendedReactFormApi<
            TFormData,
            TOnMount,
            TOnChange,
            TOnChangeAsync,
            TOnBlur,
            TOnBlurAsync,
            TOnSubmit,
            TOnSubmitAsync,
            TOnDynamic,
            TOnDynamicAsync,
            TOnServer,
            TSubmitMeta,
            TComponents & TNewField & TNewField_1 & TNewField_2 & TNewField_3,
            TFormComponents & TNewForm & TNewForm_1 & TNewForm_2 & TNewForm_3
          >;
          withForm: <
            TFormData,
            TOnMount_1 extends FormValidateOrFn<TFormData> | undefined,
            TOnChange_1 extends FormValidateOrFn<TFormData> | undefined,
            TOnChangeAsync_1 extends
              | FormAsyncValidateOrFn<TFormData>
              | undefined,
            TOnBlur_1 extends FormValidateOrFn<TFormData> | undefined,
            TOnBlurAsync_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
            TOnSubmit_1 extends FormValidateOrFn<TFormData> | undefined,
            TOnSubmitAsync_1 extends
              | FormAsyncValidateOrFn<TFormData>
              | undefined,
            TOnDynamic_1 extends FormValidateOrFn<TFormData> | undefined,
            TOnDynamicAsync_1 extends
              | FormAsyncValidateOrFn<TFormData>
              | undefined,
            TOnServer_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
            TSubmitMeta_1,
            TRenderProps extends object = {},
          >({
            render,
            props,
          }: WithFormProps<
            TFormData,
            TOnMount_1,
            TOnChange_1,
            TOnChangeAsync_1,
            TOnBlur_1,
            TOnBlurAsync_1,
            TOnSubmit_1,
            TOnSubmitAsync_1,
            TOnDynamic_1,
            TOnDynamicAsync_1,
            TOnServer_1,
            TSubmitMeta_1,
            TComponents & TNewField & TNewField_1 & TNewField_2 & TNewField_3,
            TFormComponents & TNewForm & TNewForm_1 & TNewForm_2 & TNewForm_3,
            TRenderProps
          >) => FunctionComponent<
            PropsWithChildren<
              NoInfer<UnwrapOrAny<TRenderProps>> & {
                form: AppFieldExtendedReactFormApi<
                  UnwrapOrAny<TFormData>,
                  UnwrapDefaultOrAny<
                    FormValidateOrFn<TFormData> | undefined,
                    TOnMount_1
                  >,
                  UnwrapDefaultOrAny<
                    FormValidateOrFn<TFormData> | undefined,
                    TOnChange_1
                  >,
                  UnwrapDefaultOrAny<
                    FormValidateOrFn<TFormData> | undefined,
                    TOnChangeAsync_1
                  >,
                  UnwrapDefaultOrAny<
                    FormValidateOrFn<TFormData> | undefined,
                    TOnBlur_1
                  >,
                  UnwrapDefaultOrAny<
                    FormValidateOrFn<TFormData> | undefined,
                    TOnBlurAsync_1
                  >,
                  UnwrapDefaultOrAny<
                    FormValidateOrFn<TFormData> | undefined,
                    TOnSubmit_1
                  >,
                  UnwrapDefaultOrAny<
                    FormValidateOrFn<TFormData> | undefined,
                    TOnSubmitAsync_1
                  >,
                  UnwrapDefaultOrAny<
                    FormValidateOrFn<TFormData> | undefined,
                    TOnDynamic_1
                  >,
                  UnwrapDefaultOrAny<
                    FormValidateOrFn<TFormData> | undefined,
                    TOnDynamicAsync_1
                  >,
                  UnwrapDefaultOrAny<
                    FormValidateOrFn<TFormData> | undefined,
                    TOnServer_1
                  >,
                  UnwrapOrAny<TSubmitMeta_1>,
                  UnwrapOrAny<
                    TComponents &
                      TNewField &
                      TNewField_1 &
                      TNewField_2 &
                      TNewField_3
                  >,
                  UnwrapOrAny<
                    TFormComponents &
                      TNewForm &
                      TNewForm_1 &
                      TNewForm_2 &
                      TNewForm_3
                  >
                >;
              }
            >
          >;
          withFieldGroup: <
            TFieldGroupData,
            TSubmitMeta_2,
            TRenderProps_1 extends object = {},
          >({
            render,
            props,
            defaultValues,
          }: WithFieldGroupProps<
            TFieldGroupData,
            TComponents & TNewField & TNewField_1 & TNewField_2 & TNewField_3,
            TFormComponents & TNewForm & TNewForm_1 & TNewForm_2 & TNewForm_3,
            TSubmitMeta_2,
            TRenderProps_1
          >) => <
            TFormData,
            TFields extends
              | DeepKeysOfType<TFormData, TFieldGroupData | null | undefined>
              | FieldsMap<TFormData, TFieldGroupData>,
            TOnMount_2 extends FormValidateOrFn<TFormData> | undefined,
            TOnChange_2 extends FormValidateOrFn<TFormData> | undefined,
            TOnChangeAsync_2 extends
              | FormAsyncValidateOrFn<TFormData>
              | undefined,
            TOnBlur_2 extends FormValidateOrFn<TFormData> | undefined,
            TOnBlurAsync_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
            TOnSubmit_2 extends FormValidateOrFn<TFormData> | undefined,
            TOnSubmitAsync_2 extends
              | FormAsyncValidateOrFn<TFormData>
              | undefined,
            TOnDynamic_2 extends FormValidateOrFn<TFormData> | undefined,
            TOnDynamicAsync_2 extends
              | FormAsyncValidateOrFn<TFormData>
              | undefined,
            TOnServer_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
            TFormSubmitMeta,
          >(
            params: PropsWithChildren<
              NoInfer<TRenderProps_1> & {
                form:
                  | AppFieldExtendedReactFormApi<
                      TFormData,
                      TOnMount_2,
                      TOnChange_2,
                      TOnChangeAsync_2,
                      TOnBlur_2,
                      TOnBlurAsync_2,
                      TOnSubmit_2,
                      TOnSubmitAsync_2,
                      TOnDynamic_2,
                      TOnDynamicAsync_2,
                      TOnServer_2,
                      unknown extends TSubmitMeta_2
                        ? TFormSubmitMeta
                        : TSubmitMeta_2,
                      TComponents &
                        TNewField &
                        TNewField_1 &
                        TNewField_2 &
                        TNewField_3,
                      TFormComponents &
                        TNewForm &
                        TNewForm_1 &
                        TNewForm_2 &
                        TNewForm_3
                    >
                  | AppFieldExtendedReactFieldGroupApi<
                      unknown,
                      TFormData,
                      string | FieldsMap<unknown, TFormData>,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      unknown extends TSubmitMeta_2
                        ? TFormSubmitMeta
                        : TSubmitMeta_2,
                      TComponents &
                        TNewField &
                        TNewField_1 &
                        TNewField_2 &
                        TNewField_3,
                      TFormComponents &
                        TNewForm &
                        TNewForm_1 &
                        TNewForm_2 &
                        TNewForm_3
                    >;
                fields: TFields;
              }
            >,
          ) => ReturnType<FunctionComponent>;
          useTypedAppFormContext: <
            TFormData,
            TOnMount_3 extends FormValidateOrFn<TFormData> | undefined,
            TOnChange_3 extends FormValidateOrFn<TFormData> | undefined,
            TOnChangeAsync_3 extends
              | FormAsyncValidateOrFn<TFormData>
              | undefined,
            TOnBlur_3 extends FormValidateOrFn<TFormData> | undefined,
            TOnBlurAsync_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
            TOnSubmit_3 extends FormValidateOrFn<TFormData> | undefined,
            TOnSubmitAsync_3 extends
              | FormAsyncValidateOrFn<TFormData>
              | undefined,
            TOnDynamic_3 extends FormValidateOrFn<TFormData> | undefined,
            TOnDynamicAsync_3 extends
              | FormAsyncValidateOrFn<TFormData>
              | undefined,
            TOnServer_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
            TSubmitMeta_3,
          >(
            _props: FormOptions<
              TFormData,
              TOnMount_3,
              TOnChange_3,
              TOnChangeAsync_3,
              TOnBlur_3,
              TOnBlurAsync_3,
              TOnSubmit_3,
              TOnSubmitAsync_3,
              TOnDynamic_3,
              TOnDynamicAsync_3,
              TOnServer_3,
              TSubmitMeta_3
            >,
          ) => AppFieldExtendedReactFormApi<
            TFormData,
            TOnMount_3,
            TOnChange_3,
            TOnChangeAsync_3,
            TOnBlur_3,
            TOnBlurAsync_3,
            TOnSubmit_3,
            TOnSubmitAsync_3,
            TOnDynamic_3,
            TOnDynamicAsync_3,
            TOnServer_3,
            TSubmitMeta_3,
            TComponents & TNewField & TNewField_1 & TNewField_2 & TNewField_3,
            TFormComponents & TNewForm & TNewForm_1 & TNewForm_2 & TNewForm_3
          >;
          extendForm: <
            const TNewField_4 extends Record<string, ComponentType<any>> &
              (TComponents &
                TNewField &
                TNewField_1 &
                TNewField_2 &
                TNewField_3 extends infer T_6
                ? {
                    [K_6 in keyof T_6]?:
                      | "Error: field component names must be unique — this key already exists in the base form"
                      | undefined;
                  }
                : never),
            const TNewForm_4 extends Record<string, ComponentType<any>> &
              (TFormComponents &
                TNewForm &
                TNewForm_1 &
                TNewForm_2 &
                TNewForm_3 extends infer T_7
                ? {
                    [K_7 in keyof T_7]?:
                      | "Error: form component names must be unique — this key already exists in the base form"
                      | undefined;
                  }
                : never),
          >(extension: {
            fieldComponents?: TNewField_4 | undefined;
            formComponents?: TNewForm_4 | undefined;
          }) => {
            useAppForm: <
              TFormData,
              TOnMount extends FormValidateOrFn<TFormData> | undefined,
              TOnChange extends FormValidateOrFn<TFormData> | undefined,
              TOnChangeAsync extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnBlur extends FormValidateOrFn<TFormData> | undefined,
              TOnBlurAsync extends FormAsyncValidateOrFn<TFormData> | undefined,
              TOnSubmit extends FormValidateOrFn<TFormData> | undefined,
              TOnSubmitAsync extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnDynamic extends FormValidateOrFn<TFormData> | undefined,
              TOnDynamicAsync extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnServer extends FormAsyncValidateOrFn<TFormData> | undefined,
              TSubmitMeta,
            >(
              props: FormOptions<
                TFormData,
                TOnMount,
                TOnChange,
                TOnChangeAsync,
                TOnBlur,
                TOnBlurAsync,
                TOnSubmit,
                TOnSubmitAsync,
                TOnDynamic,
                TOnDynamicAsync,
                TOnServer,
                TSubmitMeta
              >,
            ) => AppFieldExtendedReactFormApi<
              TFormData,
              TOnMount,
              TOnChange,
              TOnChangeAsync,
              TOnBlur,
              TOnBlurAsync,
              TOnSubmit,
              TOnSubmitAsync,
              TOnDynamic,
              TOnDynamicAsync,
              TOnServer,
              TSubmitMeta,
              TComponents &
                TNewField &
                TNewField_1 &
                TNewField_2 &
                TNewField_3 &
                TNewField_4,
              TFormComponents &
                TNewForm &
                TNewForm_1 &
                TNewForm_2 &
                TNewForm_3 &
                TNewForm_4
            >;
            withForm: <
              TFormData,
              TOnMount_1 extends FormValidateOrFn<TFormData> | undefined,
              TOnChange_1 extends FormValidateOrFn<TFormData> | undefined,
              TOnChangeAsync_1 extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnBlur_1 extends FormValidateOrFn<TFormData> | undefined,
              TOnBlurAsync_1 extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnSubmit_1 extends FormValidateOrFn<TFormData> | undefined,
              TOnSubmitAsync_1 extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnDynamic_1 extends FormValidateOrFn<TFormData> | undefined,
              TOnDynamicAsync_1 extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnServer_1 extends FormAsyncValidateOrFn<TFormData> | undefined,
              TSubmitMeta_1,
              TRenderProps extends object = {},
            >({
              render,
              props,
            }: WithFormProps<
              TFormData,
              TOnMount_1,
              TOnChange_1,
              TOnChangeAsync_1,
              TOnBlur_1,
              TOnBlurAsync_1,
              TOnSubmit_1,
              TOnSubmitAsync_1,
              TOnDynamic_1,
              TOnDynamicAsync_1,
              TOnServer_1,
              TSubmitMeta_1,
              TComponents &
                TNewField &
                TNewField_1 &
                TNewField_2 &
                TNewField_3 &
                TNewField_4,
              TFormComponents &
                TNewForm &
                TNewForm_1 &
                TNewForm_2 &
                TNewForm_3 &
                TNewForm_4,
              TRenderProps
            >) => FunctionComponent<
              PropsWithChildren<
                NoInfer<UnwrapOrAny<TRenderProps>> & {
                  form: AppFieldExtendedReactFormApi<
                    UnwrapOrAny<TFormData>,
                    UnwrapDefaultOrAny<
                      FormValidateOrFn<TFormData> | undefined,
                      TOnMount_1
                    >,
                    UnwrapDefaultOrAny<
                      FormValidateOrFn<TFormData> | undefined,
                      TOnChange_1
                    >,
                    UnwrapDefaultOrAny<
                      FormValidateOrFn<TFormData> | undefined,
                      TOnChangeAsync_1
                    >,
                    UnwrapDefaultOrAny<
                      FormValidateOrFn<TFormData> | undefined,
                      TOnBlur_1
                    >,
                    UnwrapDefaultOrAny<
                      FormValidateOrFn<TFormData> | undefined,
                      TOnBlurAsync_1
                    >,
                    UnwrapDefaultOrAny<
                      FormValidateOrFn<TFormData> | undefined,
                      TOnSubmit_1
                    >,
                    UnwrapDefaultOrAny<
                      FormValidateOrFn<TFormData> | undefined,
                      TOnSubmitAsync_1
                    >,
                    UnwrapDefaultOrAny<
                      FormValidateOrFn<TFormData> | undefined,
                      TOnDynamic_1
                    >,
                    UnwrapDefaultOrAny<
                      FormValidateOrFn<TFormData> | undefined,
                      TOnDynamicAsync_1
                    >,
                    UnwrapDefaultOrAny<
                      FormValidateOrFn<TFormData> | undefined,
                      TOnServer_1
                    >,
                    UnwrapOrAny<TSubmitMeta_1>,
                    UnwrapOrAny<
                      TComponents &
                        TNewField &
                        TNewField_1 &
                        TNewField_2 &
                        TNewField_3 &
                        TNewField_4
                    >,
                    UnwrapOrAny<
                      TFormComponents &
                        TNewForm &
                        TNewForm_1 &
                        TNewForm_2 &
                        TNewForm_3 &
                        TNewForm_4
                    >
                  >;
                }
              >
            >;
            withFieldGroup: <
              TFieldGroupData,
              TSubmitMeta_2,
              TRenderProps_1 extends object = {},
            >({
              render,
              props,
              defaultValues,
            }: WithFieldGroupProps<
              TFieldGroupData,
              TComponents &
                TNewField &
                TNewField_1 &
                TNewField_2 &
                TNewField_3 &
                TNewField_4,
              TFormComponents &
                TNewForm &
                TNewForm_1 &
                TNewForm_2 &
                TNewForm_3 &
                TNewForm_4,
              TSubmitMeta_2,
              TRenderProps_1
            >) => <
              TFormData,
              TFields extends
                | DeepKeysOfType<TFormData, TFieldGroupData | null | undefined>
                | FieldsMap<TFormData, TFieldGroupData>,
              TOnMount_2 extends FormValidateOrFn<TFormData> | undefined,
              TOnChange_2 extends FormValidateOrFn<TFormData> | undefined,
              TOnChangeAsync_2 extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnBlur_2 extends FormValidateOrFn<TFormData> | undefined,
              TOnBlurAsync_2 extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnSubmit_2 extends FormValidateOrFn<TFormData> | undefined,
              TOnSubmitAsync_2 extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnDynamic_2 extends FormValidateOrFn<TFormData> | undefined,
              TOnDynamicAsync_2 extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnServer_2 extends FormAsyncValidateOrFn<TFormData> | undefined,
              TFormSubmitMeta,
            >(
              params: PropsWithChildren<
                NoInfer<TRenderProps_1> & {
                  form:
                    | AppFieldExtendedReactFormApi<
                        TFormData,
                        TOnMount_2,
                        TOnChange_2,
                        TOnChangeAsync_2,
                        TOnBlur_2,
                        TOnBlurAsync_2,
                        TOnSubmit_2,
                        TOnSubmitAsync_2,
                        TOnDynamic_2,
                        TOnDynamicAsync_2,
                        TOnServer_2,
                        unknown extends TSubmitMeta_2
                          ? TFormSubmitMeta
                          : TSubmitMeta_2,
                        TComponents &
                          TNewField &
                          TNewField_1 &
                          TNewField_2 &
                          TNewField_3 &
                          TNewField_4,
                        TFormComponents &
                          TNewForm &
                          TNewForm_1 &
                          TNewForm_2 &
                          TNewForm_3 &
                          TNewForm_4
                      >
                    | AppFieldExtendedReactFieldGroupApi<
                        unknown,
                        TFormData,
                        string | FieldsMap<unknown, TFormData>,
                        any,
                        any,
                        any,
                        any,
                        any,
                        any,
                        any,
                        any,
                        any,
                        any,
                        unknown extends TSubmitMeta_2
                          ? TFormSubmitMeta
                          : TSubmitMeta_2,
                        TComponents &
                          TNewField &
                          TNewField_1 &
                          TNewField_2 &
                          TNewField_3 &
                          TNewField_4,
                        TFormComponents &
                          TNewForm &
                          TNewForm_1 &
                          TNewForm_2 &
                          TNewForm_3 &
                          TNewForm_4
                      >;
                  fields: TFields;
                }
              >,
            ) => ReturnType<FunctionComponent>;
            useTypedAppFormContext: <
              TFormData,
              TOnMount_3 extends FormValidateOrFn<TFormData> | undefined,
              TOnChange_3 extends FormValidateOrFn<TFormData> | undefined,
              TOnChangeAsync_3 extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnBlur_3 extends FormValidateOrFn<TFormData> | undefined,
              TOnBlurAsync_3 extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnSubmit_3 extends FormValidateOrFn<TFormData> | undefined,
              TOnSubmitAsync_3 extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnDynamic_3 extends FormValidateOrFn<TFormData> | undefined,
              TOnDynamicAsync_3 extends
                | FormAsyncValidateOrFn<TFormData>
                | undefined,
              TOnServer_3 extends FormAsyncValidateOrFn<TFormData> | undefined,
              TSubmitMeta_3,
            >(
              _props: FormOptions<
                TFormData,
                TOnMount_3,
                TOnChange_3,
                TOnChangeAsync_3,
                TOnBlur_3,
                TOnBlurAsync_3,
                TOnSubmit_3,
                TOnSubmitAsync_3,
                TOnDynamic_3,
                TOnDynamicAsync_3,
                TOnServer_3,
                TSubmitMeta_3
              >,
            ) => AppFieldExtendedReactFormApi<
              TFormData,
              TOnMount_3,
              TOnChange_3,
              TOnChangeAsync_3,
              TOnBlur_3,
              TOnBlurAsync_3,
              TOnSubmit_3,
              TOnSubmitAsync_3,
              TOnDynamic_3,
              TOnDynamicAsync_3,
              TOnServer_3,
              TSubmitMeta_3,
              TComponents &
                TNewField &
                TNewField_1 &
                TNewField_2 &
                TNewField_3 &
                TNewField_4,
              TFormComponents &
                TNewForm &
                TNewForm_1 &
                TNewForm_2 &
                TNewForm_3 &
                TNewForm_4
            >;
            extendForm: <
              const TNewField_5 extends Record<string, ComponentType<any>> &
                (TComponents &
                  TNewField &
                  TNewField_1 &
                  TNewField_2 &
                  TNewField_3 &
                  TNewField_4 extends infer T_8
                  ? {
                      [K_8 in keyof T_8]?:
                        | "Error: field component names must be unique — this key already exists in the base form"
                        | undefined;
                    }
                  : never),
              const TNewForm_5 extends Record<string, ComponentType<any>> &
                (TFormComponents &
                  TNewForm &
                  TNewForm_1 &
                  TNewForm_2 &
                  TNewForm_3 &
                  TNewForm_4 extends infer T_9
                  ? {
                      [K_9 in keyof T_9]?:
                        | "Error: form component names must be unique — this key already exists in the base form"
                        | undefined;
                    }
                  : never),
            >(extension: {
              fieldComponents?: TNewField_5 | undefined;
              formComponents?: TNewForm_5 | undefined;
            }) => {
              useAppForm: <
                TFormData,
                TOnMount extends FormValidateOrFn<TFormData> | undefined,
                TOnChange extends FormValidateOrFn<TFormData> | undefined,
                TOnChangeAsync extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnBlur extends FormValidateOrFn<TFormData> | undefined,
                TOnBlurAsync extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnSubmit extends FormValidateOrFn<TFormData> | undefined,
                TOnSubmitAsync extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnDynamic extends FormValidateOrFn<TFormData> | undefined,
                TOnDynamicAsync extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnServer extends FormAsyncValidateOrFn<TFormData> | undefined,
                TSubmitMeta,
              >(
                props: FormOptions<
                  TFormData,
                  TOnMount,
                  TOnChange,
                  TOnChangeAsync,
                  TOnBlur,
                  TOnBlurAsync,
                  TOnSubmit,
                  TOnSubmitAsync,
                  TOnDynamic,
                  TOnDynamicAsync,
                  TOnServer,
                  TSubmitMeta
                >,
              ) => AppFieldExtendedReactFormApi<
                TFormData,
                TOnMount,
                TOnChange,
                TOnChangeAsync,
                TOnBlur,
                TOnBlurAsync,
                TOnSubmit,
                TOnSubmitAsync,
                TOnDynamic,
                TOnDynamicAsync,
                TOnServer,
                TSubmitMeta,
                TComponents &
                  TNewField &
                  TNewField_1 &
                  TNewField_2 &
                  TNewField_3 &
                  TNewField_4 &
                  TNewField_5,
                TFormComponents &
                  TNewForm &
                  TNewForm_1 &
                  TNewForm_2 &
                  TNewForm_3 &
                  TNewForm_4 &
                  TNewForm_5
              >;
              withForm: <
                TFormData,
                TOnMount_1 extends FormValidateOrFn<TFormData> | undefined,
                TOnChange_1 extends FormValidateOrFn<TFormData> | undefined,
                TOnChangeAsync_1 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnBlur_1 extends FormValidateOrFn<TFormData> | undefined,
                TOnBlurAsync_1 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnSubmit_1 extends FormValidateOrFn<TFormData> | undefined,
                TOnSubmitAsync_1 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnDynamic_1 extends FormValidateOrFn<TFormData> | undefined,
                TOnDynamicAsync_1 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnServer_1 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TSubmitMeta_1,
                TRenderProps extends object = {},
              >({
                render,
                props,
              }: WithFormProps<
                TFormData,
                TOnMount_1,
                TOnChange_1,
                TOnChangeAsync_1,
                TOnBlur_1,
                TOnBlurAsync_1,
                TOnSubmit_1,
                TOnSubmitAsync_1,
                TOnDynamic_1,
                TOnDynamicAsync_1,
                TOnServer_1,
                TSubmitMeta_1,
                TComponents &
                  TNewField &
                  TNewField_1 &
                  TNewField_2 &
                  TNewField_3 &
                  TNewField_4 &
                  TNewField_5,
                TFormComponents &
                  TNewForm &
                  TNewForm_1 &
                  TNewForm_2 &
                  TNewForm_3 &
                  TNewForm_4 &
                  TNewForm_5,
                TRenderProps
              >) => FunctionComponent<
                PropsWithChildren<
                  NoInfer<UnwrapOrAny<TRenderProps>> & {
                    form: AppFieldExtendedReactFormApi<
                      UnwrapOrAny<TFormData>,
                      UnwrapDefaultOrAny<
                        FormValidateOrFn<TFormData> | undefined,
                        TOnMount_1
                      >,
                      UnwrapDefaultOrAny<
                        FormValidateOrFn<TFormData> | undefined,
                        TOnChange_1
                      >,
                      UnwrapDefaultOrAny<
                        FormValidateOrFn<TFormData> | undefined,
                        TOnChangeAsync_1
                      >,
                      UnwrapDefaultOrAny<
                        FormValidateOrFn<TFormData> | undefined,
                        TOnBlur_1
                      >,
                      UnwrapDefaultOrAny<
                        FormValidateOrFn<TFormData> | undefined,
                        TOnBlurAsync_1
                      >,
                      UnwrapDefaultOrAny<
                        FormValidateOrFn<TFormData> | undefined,
                        TOnSubmit_1
                      >,
                      UnwrapDefaultOrAny<
                        FormValidateOrFn<TFormData> | undefined,
                        TOnSubmitAsync_1
                      >,
                      UnwrapDefaultOrAny<
                        FormValidateOrFn<TFormData> | undefined,
                        TOnDynamic_1
                      >,
                      UnwrapDefaultOrAny<
                        FormValidateOrFn<TFormData> | undefined,
                        TOnDynamicAsync_1
                      >,
                      UnwrapDefaultOrAny<
                        FormValidateOrFn<TFormData> | undefined,
                        TOnServer_1
                      >,
                      UnwrapOrAny<TSubmitMeta_1>,
                      UnwrapOrAny<
                        TComponents &
                          TNewField &
                          TNewField_1 &
                          TNewField_2 &
                          TNewField_3 &
                          TNewField_4 &
                          TNewField_5
                      >,
                      UnwrapOrAny<
                        TFormComponents &
                          TNewForm &
                          TNewForm_1 &
                          TNewForm_2 &
                          TNewForm_3 &
                          TNewForm_4 &
                          TNewForm_5
                      >
                    >;
                  }
                >
              >;
              withFieldGroup: <
                TFieldGroupData,
                TSubmitMeta_2,
                TRenderProps_1 extends object = {},
              >({
                render,
                props,
                defaultValues,
              }: WithFieldGroupProps<
                TFieldGroupData,
                TComponents &
                  TNewField &
                  TNewField_1 &
                  TNewField_2 &
                  TNewField_3 &
                  TNewField_4 &
                  TNewField_5,
                TFormComponents &
                  TNewForm &
                  TNewForm_1 &
                  TNewForm_2 &
                  TNewForm_3 &
                  TNewForm_4 &
                  TNewForm_5,
                TSubmitMeta_2,
                TRenderProps_1
              >) => <
                TFormData,
                TFields extends
                  | DeepKeysOfType<
                      TFormData,
                      TFieldGroupData | null | undefined
                    >
                  | FieldsMap<TFormData, TFieldGroupData>,
                TOnMount_2 extends FormValidateOrFn<TFormData> | undefined,
                TOnChange_2 extends FormValidateOrFn<TFormData> | undefined,
                TOnChangeAsync_2 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnBlur_2 extends FormValidateOrFn<TFormData> | undefined,
                TOnBlurAsync_2 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnSubmit_2 extends FormValidateOrFn<TFormData> | undefined,
                TOnSubmitAsync_2 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnDynamic_2 extends FormValidateOrFn<TFormData> | undefined,
                TOnDynamicAsync_2 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnServer_2 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TFormSubmitMeta,
              >(
                params: PropsWithChildren<
                  NoInfer<TRenderProps_1> & {
                    form:
                      | AppFieldExtendedReactFormApi<
                          TFormData,
                          TOnMount_2,
                          TOnChange_2,
                          TOnChangeAsync_2,
                          TOnBlur_2,
                          TOnBlurAsync_2,
                          TOnSubmit_2,
                          TOnSubmitAsync_2,
                          TOnDynamic_2,
                          TOnDynamicAsync_2,
                          TOnServer_2,
                          unknown extends TSubmitMeta_2
                            ? TFormSubmitMeta
                            : TSubmitMeta_2,
                          TComponents &
                            TNewField &
                            TNewField_1 &
                            TNewField_2 &
                            TNewField_3 &
                            TNewField_4 &
                            TNewField_5,
                          TFormComponents &
                            TNewForm &
                            TNewForm_1 &
                            TNewForm_2 &
                            TNewForm_3 &
                            TNewForm_4 &
                            TNewForm_5
                        >
                      | AppFieldExtendedReactFieldGroupApi<
                          unknown,
                          TFormData,
                          string | FieldsMap<unknown, TFormData>,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          any,
                          unknown extends TSubmitMeta_2
                            ? TFormSubmitMeta
                            : TSubmitMeta_2,
                          TComponents &
                            TNewField &
                            TNewField_1 &
                            TNewField_2 &
                            TNewField_3 &
                            TNewField_4 &
                            TNewField_5,
                          TFormComponents &
                            TNewForm &
                            TNewForm_1 &
                            TNewForm_2 &
                            TNewForm_3 &
                            TNewForm_4 &
                            TNewForm_5
                        >;
                    fields: TFields;
                  }
                >,
              ) => ReturnType<FunctionComponent>;
              useTypedAppFormContext: <
                TFormData,
                TOnMount_3 extends FormValidateOrFn<TFormData> | undefined,
                TOnChange_3 extends FormValidateOrFn<TFormData> | undefined,
                TOnChangeAsync_3 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnBlur_3 extends FormValidateOrFn<TFormData> | undefined,
                TOnBlurAsync_3 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnSubmit_3 extends FormValidateOrFn<TFormData> | undefined,
                TOnSubmitAsync_3 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnDynamic_3 extends FormValidateOrFn<TFormData> | undefined,
                TOnDynamicAsync_3 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TOnServer_3 extends
                  | FormAsyncValidateOrFn<TFormData>
                  | undefined,
                TSubmitMeta_3,
              >(
                _props: FormOptions<
                  TFormData,
                  TOnMount_3,
                  TOnChange_3,
                  TOnChangeAsync_3,
                  TOnBlur_3,
                  TOnBlurAsync_3,
                  TOnSubmit_3,
                  TOnSubmitAsync_3,
                  TOnDynamic_3,
                  TOnDynamicAsync_3,
                  TOnServer_3,
                  TSubmitMeta_3
                >,
              ) => AppFieldExtendedReactFormApi<
                TFormData,
                TOnMount_3,
                TOnChange_3,
                TOnChangeAsync_3,
                TOnBlur_3,
                TOnBlurAsync_3,
                TOnSubmit_3,
                TOnSubmitAsync_3,
                TOnDynamic_3,
                TOnDynamicAsync_3,
                TOnServer_3,
                TSubmitMeta_3,
                TComponents &
                  TNewField &
                  TNewField_1 &
                  TNewField_2 &
                  TNewField_3 &
                  TNewField_4 &
                  TNewField_5,
                TFormComponents &
                  TNewForm &
                  TNewForm_1 &
                  TNewForm_2 &
                  TNewForm_3 &
                  TNewForm_4 &
                  TNewForm_5
              >;
              extendForm: <
                const TNewField_6 extends Record<string, ComponentType<any>> &
                  (TComponents &
                    TNewField &
                    TNewField_1 &
                    TNewField_2 &
                    TNewField_3 &
                    TNewField_4 &
                    TNewField_5 extends infer T_10
                    ? {
                        [K_10 in keyof T_10]?:
                          | "Error: field component names must be unique — this key already exists in the base form"
                          | undefined;
                      }
                    : never),
                const TNewForm_6 extends Record<string, ComponentType<any>> &
                  (TFormComponents &
                    TNewForm &
                    TNewForm_1 &
                    TNewForm_2 &
                    TNewForm_3 &
                    TNewForm_4 &
                    TNewForm_5 extends infer T_11
                    ? {
                        [K_11 in keyof T_11]?:
                          | "Error: form component names must be unique — this key already exists in the base form"
                          | undefined;
                      }
                    : never),
              >(extension: {
                fieldComponents?: TNewField_6 | undefined;
                formComponents?: TNewForm_6 | undefined;
              }) => {
                useAppForm: <
                  TFormData,
                  TOnMount extends FormValidateOrFn<TFormData> | undefined,
                  TOnChange extends FormValidateOrFn<TFormData> | undefined,
                  TOnChangeAsync extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnBlur extends FormValidateOrFn<TFormData> | undefined,
                  TOnBlurAsync extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnSubmit extends FormValidateOrFn<TFormData> | undefined,
                  TOnSubmitAsync extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnDynamic extends FormValidateOrFn<TFormData> | undefined,
                  TOnDynamicAsync extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnServer extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TSubmitMeta,
                >(
                  props: FormOptions<
                    TFormData,
                    TOnMount,
                    TOnChange,
                    TOnChangeAsync,
                    TOnBlur,
                    TOnBlurAsync,
                    TOnSubmit,
                    TOnSubmitAsync,
                    TOnDynamic,
                    TOnDynamicAsync,
                    TOnServer,
                    TSubmitMeta
                  >,
                ) => AppFieldExtendedReactFormApi<
                  TFormData,
                  TOnMount,
                  TOnChange,
                  TOnChangeAsync,
                  TOnBlur,
                  TOnBlurAsync,
                  TOnSubmit,
                  TOnSubmitAsync,
                  TOnDynamic,
                  TOnDynamicAsync,
                  TOnServer,
                  TSubmitMeta,
                  TComponents &
                    TNewField &
                    TNewField_1 &
                    TNewField_2 &
                    TNewField_3 &
                    TNewField_4 &
                    TNewField_5 &
                    TNewField_6,
                  TFormComponents &
                    TNewForm &
                    TNewForm_1 &
                    TNewForm_2 &
                    TNewForm_3 &
                    TNewForm_4 &
                    TNewForm_5 &
                    TNewForm_6
                >;
                withForm: <
                  TFormData,
                  TOnMount_1 extends FormValidateOrFn<TFormData> | undefined,
                  TOnChange_1 extends FormValidateOrFn<TFormData> | undefined,
                  TOnChangeAsync_1 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnBlur_1 extends FormValidateOrFn<TFormData> | undefined,
                  TOnBlurAsync_1 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnSubmit_1 extends FormValidateOrFn<TFormData> | undefined,
                  TOnSubmitAsync_1 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnDynamic_1 extends FormValidateOrFn<TFormData> | undefined,
                  TOnDynamicAsync_1 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnServer_1 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TSubmitMeta_1,
                  TRenderProps extends object = {},
                >({
                  render,
                  props,
                }: WithFormProps<
                  TFormData,
                  TOnMount_1,
                  TOnChange_1,
                  TOnChangeAsync_1,
                  TOnBlur_1,
                  TOnBlurAsync_1,
                  TOnSubmit_1,
                  TOnSubmitAsync_1,
                  TOnDynamic_1,
                  TOnDynamicAsync_1,
                  TOnServer_1,
                  TSubmitMeta_1,
                  TComponents &
                    TNewField &
                    TNewField_1 &
                    TNewField_2 &
                    TNewField_3 &
                    TNewField_4 &
                    TNewField_5 &
                    TNewField_6,
                  TFormComponents &
                    TNewForm &
                    TNewForm_1 &
                    TNewForm_2 &
                    TNewForm_3 &
                    TNewForm_4 &
                    TNewForm_5 &
                    TNewForm_6,
                  TRenderProps
                >) => FunctionComponent<
                  PropsWithChildren<
                    NoInfer<UnwrapOrAny<TRenderProps>> & {
                      form: AppFieldExtendedReactFormApi<
                        UnwrapOrAny<TFormData>,
                        UnwrapDefaultOrAny<
                          FormValidateOrFn<TFormData> | undefined,
                          TOnMount_1
                        >,
                        UnwrapDefaultOrAny<
                          FormValidateOrFn<TFormData> | undefined,
                          TOnChange_1
                        >,
                        UnwrapDefaultOrAny<
                          FormValidateOrFn<TFormData> | undefined,
                          TOnChangeAsync_1
                        >,
                        UnwrapDefaultOrAny<
                          FormValidateOrFn<TFormData> | undefined,
                          TOnBlur_1
                        >,
                        UnwrapDefaultOrAny<
                          FormValidateOrFn<TFormData> | undefined,
                          TOnBlurAsync_1
                        >,
                        UnwrapDefaultOrAny<
                          FormValidateOrFn<TFormData> | undefined,
                          TOnSubmit_1
                        >,
                        UnwrapDefaultOrAny<
                          FormValidateOrFn<TFormData> | undefined,
                          TOnSubmitAsync_1
                        >,
                        UnwrapDefaultOrAny<
                          FormValidateOrFn<TFormData> | undefined,
                          TOnDynamic_1
                        >,
                        UnwrapDefaultOrAny<
                          FormValidateOrFn<TFormData> | undefined,
                          TOnDynamicAsync_1
                        >,
                        UnwrapDefaultOrAny<
                          FormValidateOrFn<TFormData> | undefined,
                          TOnServer_1
                        >,
                        UnwrapOrAny<TSubmitMeta_1>,
                        UnwrapOrAny<
                          TComponents &
                            TNewField &
                            TNewField_1 &
                            TNewField_2 &
                            TNewField_3 &
                            TNewField_4 &
                            TNewField_5 &
                            TNewField_6
                        >,
                        UnwrapOrAny<
                          TFormComponents &
                            TNewForm &
                            TNewForm_1 &
                            TNewForm_2 &
                            TNewForm_3 &
                            TNewForm_4 &
                            TNewForm_5 &
                            TNewForm_6
                        >
                      >;
                    }
                  >
                >;
                withFieldGroup: <
                  TFieldGroupData,
                  TSubmitMeta_2,
                  TRenderProps_1 extends object = {},
                >({
                  render,
                  props,
                  defaultValues,
                }: WithFieldGroupProps<
                  TFieldGroupData,
                  TComponents &
                    TNewField &
                    TNewField_1 &
                    TNewField_2 &
                    TNewField_3 &
                    TNewField_4 &
                    TNewField_5 &
                    TNewField_6,
                  TFormComponents &
                    TNewForm &
                    TNewForm_1 &
                    TNewForm_2 &
                    TNewForm_3 &
                    TNewForm_4 &
                    TNewForm_5 &
                    TNewForm_6,
                  TSubmitMeta_2,
                  TRenderProps_1
                >) => <
                  TFormData,
                  TFields extends
                    | DeepKeysOfType<
                        TFormData,
                        TFieldGroupData | null | undefined
                      >
                    | FieldsMap<TFormData, TFieldGroupData>,
                  TOnMount_2 extends FormValidateOrFn<TFormData> | undefined,
                  TOnChange_2 extends FormValidateOrFn<TFormData> | undefined,
                  TOnChangeAsync_2 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnBlur_2 extends FormValidateOrFn<TFormData> | undefined,
                  TOnBlurAsync_2 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnSubmit_2 extends FormValidateOrFn<TFormData> | undefined,
                  TOnSubmitAsync_2 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnDynamic_2 extends FormValidateOrFn<TFormData> | undefined,
                  TOnDynamicAsync_2 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnServer_2 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TFormSubmitMeta,
                >(
                  params: PropsWithChildren<
                    NoInfer<TRenderProps_1> & {
                      form:
                        | AppFieldExtendedReactFormApi<
                            TFormData,
                            TOnMount_2,
                            TOnChange_2,
                            TOnChangeAsync_2,
                            TOnBlur_2,
                            TOnBlurAsync_2,
                            TOnSubmit_2,
                            TOnSubmitAsync_2,
                            TOnDynamic_2,
                            TOnDynamicAsync_2,
                            TOnServer_2,
                            unknown extends TSubmitMeta_2
                              ? TFormSubmitMeta
                              : TSubmitMeta_2,
                            TComponents &
                              TNewField &
                              TNewField_1 &
                              TNewField_2 &
                              TNewField_3 &
                              TNewField_4 &
                              TNewField_5 &
                              TNewField_6,
                            TFormComponents &
                              TNewForm &
                              TNewForm_1 &
                              TNewForm_2 &
                              TNewForm_3 &
                              TNewForm_4 &
                              TNewForm_5 &
                              TNewForm_6
                          >
                        | AppFieldExtendedReactFieldGroupApi<
                            unknown,
                            TFormData,
                            string | FieldsMap<unknown, TFormData>,
                            any,
                            any,
                            any,
                            any,
                            any,
                            any,
                            any,
                            any,
                            any,
                            any,
                            unknown extends TSubmitMeta_2
                              ? TFormSubmitMeta
                              : TSubmitMeta_2,
                            TComponents &
                              TNewField &
                              TNewField_1 &
                              TNewField_2 &
                              TNewField_3 &
                              TNewField_4 &
                              TNewField_5 &
                              TNewField_6,
                            TFormComponents &
                              TNewForm &
                              TNewForm_1 &
                              TNewForm_2 &
                              TNewForm_3 &
                              TNewForm_4 &
                              TNewForm_5 &
                              TNewForm_6
                          >;
                      fields: TFields;
                    }
                  >,
                ) => ReturnType<FunctionComponent>;
                useTypedAppFormContext: <
                  TFormData,
                  TOnMount_3 extends FormValidateOrFn<TFormData> | undefined,
                  TOnChange_3 extends FormValidateOrFn<TFormData> | undefined,
                  TOnChangeAsync_3 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnBlur_3 extends FormValidateOrFn<TFormData> | undefined,
                  TOnBlurAsync_3 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnSubmit_3 extends FormValidateOrFn<TFormData> | undefined,
                  TOnSubmitAsync_3 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnDynamic_3 extends FormValidateOrFn<TFormData> | undefined,
                  TOnDynamicAsync_3 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TOnServer_3 extends
                    | FormAsyncValidateOrFn<TFormData>
                    | undefined,
                  TSubmitMeta_3,
                >(
                  _props: FormOptions<
                    TFormData,
                    TOnMount_3,
                    TOnChange_3,
                    TOnChangeAsync_3,
                    TOnBlur_3,
                    TOnBlurAsync_3,
                    TOnSubmit_3,
                    TOnSubmitAsync_3,
                    TOnDynamic_3,
                    TOnDynamicAsync_3,
                    TOnServer_3,
                    TSubmitMeta_3
                  >,
                ) => AppFieldExtendedReactFormApi<
                  TFormData,
                  TOnMount_3,
                  TOnChange_3,
                  TOnChangeAsync_3,
                  TOnBlur_3,
                  TOnBlurAsync_3,
                  TOnSubmit_3,
                  TOnSubmitAsync_3,
                  TOnDynamic_3,
                  TOnDynamicAsync_3,
                  TOnServer_3,
                  TSubmitMeta_3,
                  TComponents &
                    TNewField &
                    TNewField_1 &
                    TNewField_2 &
                    TNewField_3 &
                    TNewField_4 &
                    TNewField_5 &
                    TNewField_6,
                  TFormComponents &
                    TNewForm &
                    TNewForm_1 &
                    TNewForm_2 &
                    TNewForm_3 &
                    TNewForm_4 &
                    TNewForm_5 &
                    TNewForm_6
                >;
                extendForm: <
                  const TNewField_7 extends Record<string, ComponentType<any>> &
                    (TComponents &
                      TNewField &
                      TNewField_1 &
                      TNewField_2 &
                      TNewField_3 &
                      TNewField_4 &
                      TNewField_5 &
                      TNewField_6 extends infer T_12
                      ? {
                          [K_12 in keyof T_12]?:
                            | "Error: field component names must be unique — this key already exists in the base form"
                            | undefined;
                        }
                      : never),
                  const TNewForm_7 extends Record<string, ComponentType<any>> &
                    (TFormComponents &
                      TNewForm &
                      TNewForm_1 &
                      TNewForm_2 &
                      TNewForm_3 &
                      TNewForm_4 &
                      TNewForm_5 &
                      TNewForm_6 extends infer T_13
                      ? {
                          [K_13 in keyof T_13]?:
                            | "Error: form component names must be unique — this key already exists in the base form"
                            | undefined;
                        }
                      : never),
                >(extension: {
                  fieldComponents?: TNewField_7 | undefined;
                  formComponents?: TNewForm_7 | undefined;
                }) => {
                  useAppForm: <
                    TFormData,
                    TOnMount extends FormValidateOrFn<TFormData> | undefined,
                    TOnChange extends FormValidateOrFn<TFormData> | undefined,
                    TOnChangeAsync extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnBlur extends FormValidateOrFn<TFormData> | undefined,
                    TOnBlurAsync extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnSubmit extends FormValidateOrFn<TFormData> | undefined,
                    TOnSubmitAsync extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnDynamic extends FormValidateOrFn<TFormData> | undefined,
                    TOnDynamicAsync extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnServer extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TSubmitMeta,
                  >(
                    props: FormOptions<
                      TFormData,
                      TOnMount,
                      TOnChange,
                      TOnChangeAsync,
                      TOnBlur,
                      TOnBlurAsync,
                      TOnSubmit,
                      TOnSubmitAsync,
                      TOnDynamic,
                      TOnDynamicAsync,
                      TOnServer,
                      TSubmitMeta
                    >,
                  ) => AppFieldExtendedReactFormApi<
                    TFormData,
                    TOnMount,
                    TOnChange,
                    TOnChangeAsync,
                    TOnBlur,
                    TOnBlurAsync,
                    TOnSubmit,
                    TOnSubmitAsync,
                    TOnDynamic,
                    TOnDynamicAsync,
                    TOnServer,
                    TSubmitMeta,
                    TComponents &
                      TNewField &
                      TNewField_1 &
                      TNewField_2 &
                      TNewField_3 &
                      TNewField_4 &
                      TNewField_5 &
                      TNewField_6 &
                      TNewField_7,
                    TFormComponents &
                      TNewForm &
                      TNewForm_1 &
                      TNewForm_2 &
                      TNewForm_3 &
                      TNewForm_4 &
                      TNewForm_5 &
                      TNewForm_6 &
                      TNewForm_7
                  >;
                  withForm: <
                    TFormData,
                    TOnMount_1 extends FormValidateOrFn<TFormData> | undefined,
                    TOnChange_1 extends FormValidateOrFn<TFormData> | undefined,
                    TOnChangeAsync_1 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnBlur_1 extends FormValidateOrFn<TFormData> | undefined,
                    TOnBlurAsync_1 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnSubmit_1 extends FormValidateOrFn<TFormData> | undefined,
                    TOnSubmitAsync_1 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnDynamic_1 extends
                      | FormValidateOrFn<TFormData>
                      | undefined,
                    TOnDynamicAsync_1 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnServer_1 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TSubmitMeta_1,
                    TRenderProps extends object = {},
                  >({
                    render,
                    props,
                  }: WithFormProps<
                    TFormData,
                    TOnMount_1,
                    TOnChange_1,
                    TOnChangeAsync_1,
                    TOnBlur_1,
                    TOnBlurAsync_1,
                    TOnSubmit_1,
                    TOnSubmitAsync_1,
                    TOnDynamic_1,
                    TOnDynamicAsync_1,
                    TOnServer_1,
                    TSubmitMeta_1,
                    TComponents &
                      TNewField &
                      TNewField_1 &
                      TNewField_2 &
                      TNewField_3 &
                      TNewField_4 &
                      TNewField_5 &
                      TNewField_6 &
                      TNewField_7,
                    TFormComponents &
                      TNewForm &
                      TNewForm_1 &
                      TNewForm_2 &
                      TNewForm_3 &
                      TNewForm_4 &
                      TNewForm_5 &
                      TNewForm_6 &
                      TNewForm_7,
                    TRenderProps
                  >) => FunctionComponent<
                    PropsWithChildren<
                      NoInfer<UnwrapOrAny<TRenderProps>> & {
                        form: AppFieldExtendedReactFormApi<
                          UnwrapOrAny<TFormData>,
                          UnwrapDefaultOrAny<
                            FormValidateOrFn<TFormData> | undefined,
                            TOnMount_1
                          >,
                          UnwrapDefaultOrAny<
                            FormValidateOrFn<TFormData> | undefined,
                            TOnChange_1
                          >,
                          UnwrapDefaultOrAny<
                            FormValidateOrFn<TFormData> | undefined,
                            TOnChangeAsync_1
                          >,
                          UnwrapDefaultOrAny<
                            FormValidateOrFn<TFormData> | undefined,
                            TOnBlur_1
                          >,
                          UnwrapDefaultOrAny<
                            FormValidateOrFn<TFormData> | undefined,
                            TOnBlurAsync_1
                          >,
                          UnwrapDefaultOrAny<
                            FormValidateOrFn<TFormData> | undefined,
                            TOnSubmit_1
                          >,
                          UnwrapDefaultOrAny<
                            FormValidateOrFn<TFormData> | undefined,
                            TOnSubmitAsync_1
                          >,
                          UnwrapDefaultOrAny<
                            FormValidateOrFn<TFormData> | undefined,
                            TOnDynamic_1
                          >,
                          UnwrapDefaultOrAny<
                            FormValidateOrFn<TFormData> | undefined,
                            TOnDynamicAsync_1
                          >,
                          UnwrapDefaultOrAny<
                            FormValidateOrFn<TFormData> | undefined,
                            TOnServer_1
                          >,
                          UnwrapOrAny<TSubmitMeta_1>,
                          UnwrapOrAny<
                            TComponents &
                              TNewField &
                              TNewField_1 &
                              TNewField_2 &
                              TNewField_3 &
                              TNewField_4 &
                              TNewField_5 &
                              TNewField_6 &
                              TNewField_7
                          >,
                          UnwrapOrAny<
                            TFormComponents &
                              TNewForm &
                              TNewForm_1 &
                              TNewForm_2 &
                              TNewForm_3 &
                              TNewForm_4 &
                              TNewForm_5 &
                              TNewForm_6 &
                              TNewForm_7
                          >
                        >;
                      }
                    >
                  >;
                  withFieldGroup: <
                    TFieldGroupData,
                    TSubmitMeta_2,
                    TRenderProps_1 extends object = {},
                  >({
                    render,
                    props,
                    defaultValues,
                  }: WithFieldGroupProps<
                    TFieldGroupData,
                    TComponents &
                      TNewField &
                      TNewField_1 &
                      TNewField_2 &
                      TNewField_3 &
                      TNewField_4 &
                      TNewField_5 &
                      TNewField_6 &
                      TNewField_7,
                    TFormComponents &
                      TNewForm &
                      TNewForm_1 &
                      TNewForm_2 &
                      TNewForm_3 &
                      TNewForm_4 &
                      TNewForm_5 &
                      TNewForm_6 &
                      TNewForm_7,
                    TSubmitMeta_2,
                    TRenderProps_1
                  >) => <
                    TFormData,
                    TFields extends
                      | DeepKeysOfType<
                          TFormData,
                          TFieldGroupData | null | undefined
                        >
                      | FieldsMap<TFormData, TFieldGroupData>,
                    TOnMount_2 extends FormValidateOrFn<TFormData> | undefined,
                    TOnChange_2 extends FormValidateOrFn<TFormData> | undefined,
                    TOnChangeAsync_2 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnBlur_2 extends FormValidateOrFn<TFormData> | undefined,
                    TOnBlurAsync_2 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnSubmit_2 extends FormValidateOrFn<TFormData> | undefined,
                    TOnSubmitAsync_2 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnDynamic_2 extends
                      | FormValidateOrFn<TFormData>
                      | undefined,
                    TOnDynamicAsync_2 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnServer_2 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TFormSubmitMeta,
                  >(
                    params: PropsWithChildren<
                      NoInfer<TRenderProps_1> & {
                        form:
                          | AppFieldExtendedReactFormApi<
                              TFormData,
                              TOnMount_2,
                              TOnChange_2,
                              TOnChangeAsync_2,
                              TOnBlur_2,
                              TOnBlurAsync_2,
                              TOnSubmit_2,
                              TOnSubmitAsync_2,
                              TOnDynamic_2,
                              TOnDynamicAsync_2,
                              TOnServer_2,
                              unknown extends TSubmitMeta_2
                                ? TFormSubmitMeta
                                : TSubmitMeta_2,
                              TComponents &
                                TNewField &
                                TNewField_1 &
                                TNewField_2 &
                                TNewField_3 &
                                TNewField_4 &
                                TNewField_5 &
                                TNewField_6 &
                                TNewField_7,
                              TFormComponents &
                                TNewForm &
                                TNewForm_1 &
                                TNewForm_2 &
                                TNewForm_3 &
                                TNewForm_4 &
                                TNewForm_5 &
                                TNewForm_6 &
                                TNewForm_7
                            >
                          | AppFieldExtendedReactFieldGroupApi<
                              unknown,
                              TFormData,
                              string | FieldsMap<unknown, TFormData>,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              any,
                              unknown extends TSubmitMeta_2
                                ? TFormSubmitMeta
                                : TSubmitMeta_2,
                              TComponents &
                                TNewField &
                                TNewField_1 &
                                TNewField_2 &
                                TNewField_3 &
                                TNewField_4 &
                                TNewField_5 &
                                TNewField_6 &
                                TNewField_7,
                              TFormComponents &
                                TNewForm &
                                TNewForm_1 &
                                TNewForm_2 &
                                TNewForm_3 &
                                TNewForm_4 &
                                TNewForm_5 &
                                TNewForm_6 &
                                TNewForm_7
                            >;
                        fields: TFields;
                      }
                    >,
                  ) => ReturnType<FunctionComponent>;
                  useTypedAppFormContext: <
                    TFormData,
                    TOnMount_3 extends FormValidateOrFn<TFormData> | undefined,
                    TOnChange_3 extends FormValidateOrFn<TFormData> | undefined,
                    TOnChangeAsync_3 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnBlur_3 extends FormValidateOrFn<TFormData> | undefined,
                    TOnBlurAsync_3 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnSubmit_3 extends FormValidateOrFn<TFormData> | undefined,
                    TOnSubmitAsync_3 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnDynamic_3 extends
                      | FormValidateOrFn<TFormData>
                      | undefined,
                    TOnDynamicAsync_3 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TOnServer_3 extends
                      | FormAsyncValidateOrFn<TFormData>
                      | undefined,
                    TSubmitMeta_3,
                  >(
                    _props: FormOptions<
                      TFormData,
                      TOnMount_3,
                      TOnChange_3,
                      TOnChangeAsync_3,
                      TOnBlur_3,
                      TOnBlurAsync_3,
                      TOnSubmit_3,
                      TOnSubmitAsync_3,
                      TOnDynamic_3,
                      TOnDynamicAsync_3,
                      TOnServer_3,
                      TSubmitMeta_3
                    >,
                  ) => AppFieldExtendedReactFormApi<
                    TFormData,
                    TOnMount_3,
                    TOnChange_3,
                    TOnChangeAsync_3,
                    TOnBlur_3,
                    TOnBlurAsync_3,
                    TOnSubmit_3,
                    TOnSubmitAsync_3,
                    TOnDynamic_3,
                    TOnDynamicAsync_3,
                    TOnServer_3,
                    TSubmitMeta_3,
                    TComponents &
                      TNewField &
                      TNewField_1 &
                      TNewField_2 &
                      TNewField_3 &
                      TNewField_4 &
                      TNewField_5 &
                      TNewField_6 &
                      TNewField_7,
                    TFormComponents &
                      TNewForm &
                      TNewForm_1 &
                      TNewForm_2 &
                      TNewForm_3 &
                      TNewForm_4 &
                      TNewForm_5 &
                      TNewForm_6 &
                      TNewForm_7
                  >;
                  extendForm: <
                    const TNewField_8 extends Record<
                      string,
                      ComponentType<any>
                    > &
                      (TComponents &
                        TNewField &
                        TNewField_1 &
                        TNewField_2 &
                        TNewField_3 &
                        TNewField_4 &
                        TNewField_5 &
                        TNewField_6 &
                        TNewField_7 extends infer T_14
                        ? {
                            [K_14 in keyof T_14]?:
                              | "Error: field component names must be unique — this key already exists in the base form"
                              | undefined;
                          }
                        : never),
                    const TNewForm_8 extends Record<
                      string,
                      ComponentType<any>
                    > &
                      (TFormComponents &
                        TNewForm &
                        TNewForm_1 &
                        TNewForm_2 &
                        TNewForm_3 &
                        TNewForm_4 &
                        TNewForm_5 &
                        TNewForm_6 &
                        TNewForm_7 extends infer T_15
                        ? {
                            [K_15 in keyof T_15]?:
                              | "Error: form component names must be unique — this key already exists in the base form"
                              | undefined;
                          }
                        : never),
                  >(extension: {
                    fieldComponents?: TNewField_8 | undefined;
                    formComponents?: TNewForm_8 | undefined;
                  }) => {
                    useAppForm: <
                      TFormData,
                      TOnMount extends FormValidateOrFn<TFormData> | undefined,
                      TOnChange extends FormValidateOrFn<TFormData> | undefined,
                      TOnChangeAsync extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnBlur extends FormValidateOrFn<TFormData> | undefined,
                      TOnBlurAsync extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnSubmit extends FormValidateOrFn<TFormData> | undefined,
                      TOnSubmitAsync extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnDynamic extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnDynamicAsync extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnServer extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TSubmitMeta,
                    >(
                      props: FormOptions<
                        TFormData,
                        TOnMount,
                        TOnChange,
                        TOnChangeAsync,
                        TOnBlur,
                        TOnBlurAsync,
                        TOnSubmit,
                        TOnSubmitAsync,
                        TOnDynamic,
                        TOnDynamicAsync,
                        TOnServer,
                        TSubmitMeta
                      >,
                    ) => AppFieldExtendedReactFormApi<
                      TFormData,
                      TOnMount,
                      TOnChange,
                      TOnChangeAsync,
                      TOnBlur,
                      TOnBlurAsync,
                      TOnSubmit,
                      TOnSubmitAsync,
                      TOnDynamic,
                      TOnDynamicAsync,
                      TOnServer,
                      TSubmitMeta,
                      TComponents &
                        TNewField &
                        TNewField_1 &
                        TNewField_2 &
                        TNewField_3 &
                        TNewField_4 &
                        TNewField_5 &
                        TNewField_6 &
                        TNewField_7 &
                        TNewField_8,
                      TFormComponents &
                        TNewForm &
                        TNewForm_1 &
                        TNewForm_2 &
                        TNewForm_3 &
                        TNewForm_4 &
                        TNewForm_5 &
                        TNewForm_6 &
                        TNewForm_7 &
                        TNewForm_8
                    >;
                    withForm: <
                      TFormData,
                      TOnMount_1 extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnChange_1 extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnChangeAsync_1 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnBlur_1 extends FormValidateOrFn<TFormData> | undefined,
                      TOnBlurAsync_1 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnSubmit_1 extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnSubmitAsync_1 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnDynamic_1 extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnDynamicAsync_1 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnServer_1 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TSubmitMeta_1,
                      TRenderProps extends object = {},
                    >({
                      render,
                      props,
                    }: WithFormProps<
                      TFormData,
                      TOnMount_1,
                      TOnChange_1,
                      TOnChangeAsync_1,
                      TOnBlur_1,
                      TOnBlurAsync_1,
                      TOnSubmit_1,
                      TOnSubmitAsync_1,
                      TOnDynamic_1,
                      TOnDynamicAsync_1,
                      TOnServer_1,
                      TSubmitMeta_1,
                      TComponents &
                        TNewField &
                        TNewField_1 &
                        TNewField_2 &
                        TNewField_3 &
                        TNewField_4 &
                        TNewField_5 &
                        TNewField_6 &
                        TNewField_7 &
                        TNewField_8,
                      TFormComponents &
                        TNewForm &
                        TNewForm_1 &
                        TNewForm_2 &
                        TNewForm_3 &
                        TNewForm_4 &
                        TNewForm_5 &
                        TNewForm_6 &
                        TNewForm_7 &
                        TNewForm_8,
                      TRenderProps
                    >) => FunctionComponent<
                      PropsWithChildren<
                        NoInfer<UnwrapOrAny<TRenderProps>> & {
                          form: AppFieldExtendedReactFormApi<
                            UnwrapOrAny<TFormData>,
                            UnwrapDefaultOrAny<
                              FormValidateOrFn<TFormData> | undefined,
                              TOnMount_1
                            >,
                            UnwrapDefaultOrAny<
                              FormValidateOrFn<TFormData> | undefined,
                              TOnChange_1
                            >,
                            UnwrapDefaultOrAny<
                              FormValidateOrFn<TFormData> | undefined,
                              TOnChangeAsync_1
                            >,
                            UnwrapDefaultOrAny<
                              FormValidateOrFn<TFormData> | undefined,
                              TOnBlur_1
                            >,
                            UnwrapDefaultOrAny<
                              FormValidateOrFn<TFormData> | undefined,
                              TOnBlurAsync_1
                            >,
                            UnwrapDefaultOrAny<
                              FormValidateOrFn<TFormData> | undefined,
                              TOnSubmit_1
                            >,
                            UnwrapDefaultOrAny<
                              FormValidateOrFn<TFormData> | undefined,
                              TOnSubmitAsync_1
                            >,
                            UnwrapDefaultOrAny<
                              FormValidateOrFn<TFormData> | undefined,
                              TOnDynamic_1
                            >,
                            UnwrapDefaultOrAny<
                              FormValidateOrFn<TFormData> | undefined,
                              TOnDynamicAsync_1
                            >,
                            UnwrapDefaultOrAny<
                              FormValidateOrFn<TFormData> | undefined,
                              TOnServer_1
                            >,
                            UnwrapOrAny<TSubmitMeta_1>,
                            UnwrapOrAny<
                              TComponents &
                                TNewField &
                                TNewField_1 &
                                TNewField_2 &
                                TNewField_3 &
                                TNewField_4 &
                                TNewField_5 &
                                TNewField_6 &
                                TNewField_7 &
                                TNewField_8
                            >,
                            UnwrapOrAny<
                              TFormComponents &
                                TNewForm &
                                TNewForm_1 &
                                TNewForm_2 &
                                TNewForm_3 &
                                TNewForm_4 &
                                TNewForm_5 &
                                TNewForm_6 &
                                TNewForm_7 &
                                TNewForm_8
                            >
                          >;
                        }
                      >
                    >;
                    withFieldGroup: <
                      TFieldGroupData,
                      TSubmitMeta_2,
                      TRenderProps_1 extends object = {},
                    >({
                      render,
                      props,
                      defaultValues,
                    }: WithFieldGroupProps<
                      TFieldGroupData,
                      TComponents &
                        TNewField &
                        TNewField_1 &
                        TNewField_2 &
                        TNewField_3 &
                        TNewField_4 &
                        TNewField_5 &
                        TNewField_6 &
                        TNewField_7 &
                        TNewField_8,
                      TFormComponents &
                        TNewForm &
                        TNewForm_1 &
                        TNewForm_2 &
                        TNewForm_3 &
                        TNewForm_4 &
                        TNewForm_5 &
                        TNewForm_6 &
                        TNewForm_7 &
                        TNewForm_8,
                      TSubmitMeta_2,
                      TRenderProps_1
                    >) => <
                      TFormData,
                      TFields extends
                        | DeepKeysOfType<
                            TFormData,
                            TFieldGroupData | null | undefined
                          >
                        | FieldsMap<TFormData, TFieldGroupData>,
                      TOnMount_2 extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnChange_2 extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnChangeAsync_2 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnBlur_2 extends FormValidateOrFn<TFormData> | undefined,
                      TOnBlurAsync_2 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnSubmit_2 extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnSubmitAsync_2 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnDynamic_2 extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnDynamicAsync_2 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnServer_2 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TFormSubmitMeta,
                    >(
                      params: PropsWithChildren<
                        NoInfer<TRenderProps_1> & {
                          form:
                            | AppFieldExtendedReactFormApi<
                                TFormData,
                                TOnMount_2,
                                TOnChange_2,
                                TOnChangeAsync_2,
                                TOnBlur_2,
                                TOnBlurAsync_2,
                                TOnSubmit_2,
                                TOnSubmitAsync_2,
                                TOnDynamic_2,
                                TOnDynamicAsync_2,
                                TOnServer_2,
                                unknown extends TSubmitMeta_2
                                  ? TFormSubmitMeta
                                  : TSubmitMeta_2,
                                TComponents &
                                  TNewField &
                                  TNewField_1 &
                                  TNewField_2 &
                                  TNewField_3 &
                                  TNewField_4 &
                                  TNewField_5 &
                                  TNewField_6 &
                                  TNewField_7 &
                                  TNewField_8,
                                TFormComponents &
                                  TNewForm &
                                  TNewForm_1 &
                                  TNewForm_2 &
                                  TNewForm_3 &
                                  TNewForm_4 &
                                  TNewForm_5 &
                                  TNewForm_6 &
                                  TNewForm_7 &
                                  TNewForm_8
                              >
                            | AppFieldExtendedReactFieldGroupApi<
                                unknown,
                                TFormData,
                                string | FieldsMap<unknown, TFormData>,
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                any,
                                unknown extends TSubmitMeta_2
                                  ? TFormSubmitMeta
                                  : TSubmitMeta_2,
                                TComponents &
                                  TNewField &
                                  TNewField_1 &
                                  TNewField_2 &
                                  TNewField_3 &
                                  TNewField_4 &
                                  TNewField_5 &
                                  TNewField_6 &
                                  TNewField_7 &
                                  TNewField_8,
                                TFormComponents &
                                  TNewForm &
                                  TNewForm_1 &
                                  TNewForm_2 &
                                  TNewForm_3 &
                                  TNewForm_4 &
                                  TNewForm_5 &
                                  TNewForm_6 &
                                  TNewForm_7 &
                                  TNewForm_8
                              >;
                          fields: TFields;
                        }
                      >,
                    ) => ReturnType<FunctionComponent>;
                    useTypedAppFormContext: <
                      TFormData,
                      TOnMount_3 extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnChange_3 extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnChangeAsync_3 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnBlur_3 extends FormValidateOrFn<TFormData> | undefined,
                      TOnBlurAsync_3 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnSubmit_3 extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnSubmitAsync_3 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnDynamic_3 extends
                        | FormValidateOrFn<TFormData>
                        | undefined,
                      TOnDynamicAsync_3 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TOnServer_3 extends
                        | FormAsyncValidateOrFn<TFormData>
                        | undefined,
                      TSubmitMeta_3,
                    >(
                      _props: FormOptions<
                        TFormData,
                        TOnMount_3,
                        TOnChange_3,
                        TOnChangeAsync_3,
                        TOnBlur_3,
                        TOnBlurAsync_3,
                        TOnSubmit_3,
                        TOnSubmitAsync_3,
                        TOnDynamic_3,
                        TOnDynamicAsync_3,
                        TOnServer_3,
                        TSubmitMeta_3
                      >,
                    ) => AppFieldExtendedReactFormApi<
                      TFormData,
                      TOnMount_3,
                      TOnChange_3,
                      TOnChangeAsync_3,
                      TOnBlur_3,
                      TOnBlurAsync_3,
                      TOnSubmit_3,
                      TOnSubmitAsync_3,
                      TOnDynamic_3,
                      TOnDynamicAsync_3,
                      TOnServer_3,
                      TSubmitMeta_3,
                      TComponents &
                        TNewField &
                        TNewField_1 &
                        TNewField_2 &
                        TNewField_3 &
                        TNewField_4 &
                        TNewField_5 &
                        TNewField_6 &
                        TNewField_7 &
                        TNewField_8,
                      TFormComponents &
                        TNewForm &
                        TNewForm_1 &
                        TNewForm_2 &
                        TNewForm_3 &
                        TNewForm_4 &
                        TNewForm_5 &
                        TNewForm_6 &
                        TNewForm_7 &
                        TNewForm_8
                    >;
                    extendForm: <
                      const TNewField_9 extends Record<
                        string,
                        ComponentType<any>
                      > &
                        (TComponents &
                          TNewField &
                          TNewField_1 &
                          TNewField_2 &
                          TNewField_3 &
                          TNewField_4 &
                          TNewField_5 &
                          TNewField_6 &
                          TNewField_7 &
                          TNewField_8 extends infer T_16
                          ? {
                              [K_16 in keyof T_16]?:
                                | "Error: field component names must be unique — this key already exists in the base form"
                                | undefined;
                            }
                          : never),
                      const TNewForm_9 extends Record<
                        string,
                        ComponentType<any>
                      > &
                        (TFormComponents &
                          TNewForm &
                          TNewForm_1 &
                          TNewForm_2 &
                          TNewForm_3 &
                          TNewForm_4 &
                          TNewForm_5 &
                          TNewForm_6 &
                          TNewForm_7 &
                          TNewForm_8 extends infer T_17
                          ? {
                              [K_17 in keyof T_17]?:
                                | "Error: form component names must be unique — this key already exists in the base form"
                                | undefined;
                            }
                          : never),
                    >(extension: {
                      fieldComponents?: TNewField_9 | undefined;
                      formComponents?: TNewForm_9 | undefined;
                    }) => {
                      useAppForm: <
                        TFormData,
                        TOnMount extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnChange extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnChangeAsync extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnBlur extends FormValidateOrFn<TFormData> | undefined,
                        TOnBlurAsync extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnSubmit extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnSubmitAsync extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnDynamic extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnDynamicAsync extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnServer extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TSubmitMeta,
                      >(
                        props: FormOptions<
                          TFormData,
                          TOnMount,
                          TOnChange,
                          TOnChangeAsync,
                          TOnBlur,
                          TOnBlurAsync,
                          TOnSubmit,
                          TOnSubmitAsync,
                          TOnDynamic,
                          TOnDynamicAsync,
                          TOnServer,
                          TSubmitMeta
                        >,
                      ) => AppFieldExtendedReactFormApi<
                        TFormData,
                        TOnMount,
                        TOnChange,
                        TOnChangeAsync,
                        TOnBlur,
                        TOnBlurAsync,
                        TOnSubmit,
                        TOnSubmitAsync,
                        TOnDynamic,
                        TOnDynamicAsync,
                        TOnServer,
                        TSubmitMeta,
                        TComponents &
                          TNewField &
                          TNewField_1 &
                          TNewField_2 &
                          TNewField_3 &
                          TNewField_4 &
                          TNewField_5 &
                          TNewField_6 &
                          TNewField_7 &
                          TNewField_8 &
                          TNewField_9,
                        TFormComponents &
                          TNewForm &
                          TNewForm_1 &
                          TNewForm_2 &
                          TNewForm_3 &
                          TNewForm_4 &
                          TNewForm_5 &
                          TNewForm_6 &
                          TNewForm_7 &
                          TNewForm_8 &
                          TNewForm_9
                      >;
                      withForm: <
                        TFormData,
                        TOnMount_1 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnChange_1 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnChangeAsync_1 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnBlur_1 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnBlurAsync_1 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnSubmit_1 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnSubmitAsync_1 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnDynamic_1 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnDynamicAsync_1 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnServer_1 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TSubmitMeta_1,
                        TRenderProps extends object = {},
                      >({
                        render,
                        props,
                      }: WithFormProps<
                        TFormData,
                        TOnMount_1,
                        TOnChange_1,
                        TOnChangeAsync_1,
                        TOnBlur_1,
                        TOnBlurAsync_1,
                        TOnSubmit_1,
                        TOnSubmitAsync_1,
                        TOnDynamic_1,
                        TOnDynamicAsync_1,
                        TOnServer_1,
                        TSubmitMeta_1,
                        TComponents &
                          TNewField &
                          TNewField_1 &
                          TNewField_2 &
                          TNewField_3 &
                          TNewField_4 &
                          TNewField_5 &
                          TNewField_6 &
                          TNewField_7 &
                          TNewField_8 &
                          TNewField_9,
                        TFormComponents &
                          TNewForm &
                          TNewForm_1 &
                          TNewForm_2 &
                          TNewForm_3 &
                          TNewForm_4 &
                          TNewForm_5 &
                          TNewForm_6 &
                          TNewForm_7 &
                          TNewForm_8 &
                          TNewForm_9,
                        TRenderProps
                      >) => FunctionComponent<
                        PropsWithChildren<
                          NoInfer<UnwrapOrAny<TRenderProps>> & {
                            form: AppFieldExtendedReactFormApi<
                              UnwrapOrAny<TFormData>,
                              UnwrapDefaultOrAny<
                                FormValidateOrFn<TFormData> | undefined,
                                TOnMount_1
                              >,
                              UnwrapDefaultOrAny<
                                FormValidateOrFn<TFormData> | undefined,
                                TOnChange_1
                              >,
                              UnwrapDefaultOrAny<
                                FormValidateOrFn<TFormData> | undefined,
                                TOnChangeAsync_1
                              >,
                              UnwrapDefaultOrAny<
                                FormValidateOrFn<TFormData> | undefined,
                                TOnBlur_1
                              >,
                              UnwrapDefaultOrAny<
                                FormValidateOrFn<TFormData> | undefined,
                                TOnBlurAsync_1
                              >,
                              UnwrapDefaultOrAny<
                                FormValidateOrFn<TFormData> | undefined,
                                TOnSubmit_1
                              >,
                              UnwrapDefaultOrAny<
                                FormValidateOrFn<TFormData> | undefined,
                                TOnSubmitAsync_1
                              >,
                              UnwrapDefaultOrAny<
                                FormValidateOrFn<TFormData> | undefined,
                                TOnDynamic_1
                              >,
                              UnwrapDefaultOrAny<
                                FormValidateOrFn<TFormData> | undefined,
                                TOnDynamicAsync_1
                              >,
                              UnwrapDefaultOrAny<
                                FormValidateOrFn<TFormData> | undefined,
                                TOnServer_1
                              >,
                              UnwrapOrAny<TSubmitMeta_1>,
                              UnwrapOrAny<
                                TComponents &
                                  TNewField &
                                  TNewField_1 &
                                  TNewField_2 &
                                  TNewField_3 &
                                  TNewField_4 &
                                  TNewField_5 &
                                  TNewField_6 &
                                  TNewField_7 &
                                  TNewField_8 &
                                  TNewField_9
                              >,
                              UnwrapOrAny<
                                TFormComponents &
                                  TNewForm &
                                  TNewForm_1 &
                                  TNewForm_2 &
                                  TNewForm_3 &
                                  TNewForm_4 &
                                  TNewForm_5 &
                                  TNewForm_6 &
                                  TNewForm_7 &
                                  TNewForm_8 &
                                  TNewForm_9
                              >
                            >;
                          }
                        >
                      >;
                      withFieldGroup: <
                        TFieldGroupData,
                        TSubmitMeta_2,
                        TRenderProps_1 extends object = {},
                      >({
                        render,
                        props,
                        defaultValues,
                      }: WithFieldGroupProps<
                        TFieldGroupData,
                        TComponents &
                          TNewField &
                          TNewField_1 &
                          TNewField_2 &
                          TNewField_3 &
                          TNewField_4 &
                          TNewField_5 &
                          TNewField_6 &
                          TNewField_7 &
                          TNewField_8 &
                          TNewField_9,
                        TFormComponents &
                          TNewForm &
                          TNewForm_1 &
                          TNewForm_2 &
                          TNewForm_3 &
                          TNewForm_4 &
                          TNewForm_5 &
                          TNewForm_6 &
                          TNewForm_7 &
                          TNewForm_8 &
                          TNewForm_9,
                        TSubmitMeta_2,
                        TRenderProps_1
                      >) => <
                        TFormData,
                        TFields extends
                          | DeepKeysOfType<
                              TFormData,
                              TFieldGroupData | null | undefined
                            >
                          | FieldsMap<TFormData, TFieldGroupData>,
                        TOnMount_2 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnChange_2 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnChangeAsync_2 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnBlur_2 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnBlurAsync_2 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnSubmit_2 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnSubmitAsync_2 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnDynamic_2 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnDynamicAsync_2 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnServer_2 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TFormSubmitMeta,
                      >(
                        params: PropsWithChildren<
                          NoInfer<TRenderProps_1> & {
                            form:
                              | AppFieldExtendedReactFormApi<
                                  TFormData,
                                  TOnMount_2,
                                  TOnChange_2,
                                  TOnChangeAsync_2,
                                  TOnBlur_2,
                                  TOnBlurAsync_2,
                                  TOnSubmit_2,
                                  TOnSubmitAsync_2,
                                  TOnDynamic_2,
                                  TOnDynamicAsync_2,
                                  TOnServer_2,
                                  unknown extends TSubmitMeta_2
                                    ? TFormSubmitMeta
                                    : TSubmitMeta_2,
                                  TComponents &
                                    TNewField &
                                    TNewField_1 &
                                    TNewField_2 &
                                    TNewField_3 &
                                    TNewField_4 &
                                    TNewField_5 &
                                    TNewField_6 &
                                    TNewField_7 &
                                    TNewField_8 &
                                    TNewField_9,
                                  TFormComponents &
                                    TNewForm &
                                    TNewForm_1 &
                                    TNewForm_2 &
                                    TNewForm_3 &
                                    TNewForm_4 &
                                    TNewForm_5 &
                                    TNewForm_6 &
                                    TNewForm_7 &
                                    TNewForm_8 &
                                    TNewForm_9
                                >
                              | AppFieldExtendedReactFieldGroupApi<
                                  unknown,
                                  TFormData,
                                  string | FieldsMap<unknown, TFormData>,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  any,
                                  unknown extends TSubmitMeta_2
                                    ? TFormSubmitMeta
                                    : TSubmitMeta_2,
                                  TComponents &
                                    TNewField &
                                    TNewField_1 &
                                    TNewField_2 &
                                    TNewField_3 &
                                    TNewField_4 &
                                    TNewField_5 &
                                    TNewField_6 &
                                    TNewField_7 &
                                    TNewField_8 &
                                    TNewField_9,
                                  TFormComponents &
                                    TNewForm &
                                    TNewForm_1 &
                                    TNewForm_2 &
                                    TNewForm_3 &
                                    TNewForm_4 &
                                    TNewForm_5 &
                                    TNewForm_6 &
                                    TNewForm_7 &
                                    TNewForm_8 &
                                    TNewForm_9
                                >;
                            fields: TFields;
                          }
                        >,
                      ) => ReturnType<FunctionComponent>;
                      useTypedAppFormContext: <
                        TFormData,
                        TOnMount_3 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnChange_3 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnChangeAsync_3 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnBlur_3 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnBlurAsync_3 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnSubmit_3 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnSubmitAsync_3 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnDynamic_3 extends
                          | FormValidateOrFn<TFormData>
                          | undefined,
                        TOnDynamicAsync_3 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TOnServer_3 extends
                          | FormAsyncValidateOrFn<TFormData>
                          | undefined,
                        TSubmitMeta_3,
                      >(
                        _props: FormOptions<
                          TFormData,
                          TOnMount_3,
                          TOnChange_3,
                          TOnChangeAsync_3,
                          TOnBlur_3,
                          TOnBlurAsync_3,
                          TOnSubmit_3,
                          TOnSubmitAsync_3,
                          TOnDynamic_3,
                          TOnDynamicAsync_3,
                          TOnServer_3,
                          TSubmitMeta_3
                        >,
                      ) => AppFieldExtendedReactFormApi<
                        TFormData,
                        TOnMount_3,
                        TOnChange_3,
                        TOnChangeAsync_3,
                        TOnBlur_3,
                        TOnBlurAsync_3,
                        TOnSubmit_3,
                        TOnSubmitAsync_3,
                        TOnDynamic_3,
                        TOnDynamicAsync_3,
                        TOnServer_3,
                        TSubmitMeta_3,
                        TComponents &
                          TNewField &
                          TNewField_1 &
                          TNewField_2 &
                          TNewField_3 &
                          TNewField_4 &
                          TNewField_5 &
                          TNewField_6 &
                          TNewField_7 &
                          TNewField_8 &
                          TNewField_9,
                        TFormComponents &
                          TNewForm &
                          TNewForm_1 &
                          TNewForm_2 &
                          TNewForm_3 &
                          TNewForm_4 &
                          TNewForm_5 &
                          TNewForm_6 &
                          TNewForm_7 &
                          TNewForm_8 &
                          TNewForm_9
                      >;
                      extendForm: <
                        const TNewField_10 extends Record<
                          string,
                          ComponentType<any>
                        > &
                          (TComponents &
                            TNewField &
                            TNewField_1 &
                            TNewField_2 &
                            TNewField_3 &
                            TNewField_4 &
                            TNewField_5 &
                            TNewField_6 &
                            TNewField_7 &
                            TNewField_8 &
                            TNewField_9 extends infer T_18
                            ? {
                                [K_18 in keyof T_18]?:
                                  | "Error: field component names must be unique — this key already exists in the base form"
                                  | undefined;
                              }
                            : never),
                        const TNewForm_10 extends Record<
                          string,
                          ComponentType<any>
                        > &
                          (TFormComponents &
                            TNewForm &
                            TNewForm_1 &
                            TNewForm_2 &
                            TNewForm_3 &
                            TNewForm_4 &
                            TNewForm_5 &
                            TNewForm_6 &
                            TNewForm_7 &
                            TNewForm_8 &
                            TNewForm_9 extends infer T_19
                            ? {
                                [K_19 in keyof T_19]?:
                                  | "Error: form component names must be unique — this key already exists in the base form"
                                  | undefined;
                              }
                            : never),
                      >(extension: {
                        fieldComponents?: TNewField_10 | undefined;
                        formComponents?: TNewForm_10 | undefined;
                      }) => /*elided*/ any;
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
};

declare const useIsomorphicLayoutEffect: typeof useLayoutEffect;

export {
  type AnyBaseFormState,
  type AnyFieldApi,
  type AnyFieldGroupApi,
  type AnyFieldMeta,
  type AnyFieldMetaBase,
  type AnyFieldMetaDerived,
  type AnyFormApi,
  type AnyFormOptions,
  type AnyFormState,
  type AppFieldExtendedReactFieldGroupApi,
  type AppFieldExtendedReactFormApi,
  type AsyncValidator,
  type BaseFormOptions,
  type BaseFormState,
  type BroadcastFormApi,
  type BroadcastFormId,
  type BroadcastFormState,
  type BroadcastFormSubmissionState,
  type DerivedFormState,
  type EventClientEventMap,
  type EventClientEventNames,
  Field,
  FieldApi,
  type FieldApiOptions,
  type FieldAsyncValidateOrFn,
  type FieldComponent,
  FieldGroupApi,
  type FieldGroupOptions,
  type FieldGroupState,
  type FieldInfo,
  type FieldListenerFn,
  type FieldListeners,
  type FieldMeta,
  type FieldMetaBase,
  type FieldMetaDerived,
  type FieldOptions,
  type FieldState,
  type FieldValidateAsyncFn,
  type FieldValidateFn,
  type FieldValidateOrFn,
  type FieldValidators,
  FormApi,
  type FormAsyncValidateOrFn,
  type FormListeners,
  type FormOptions,
  type FormState,
  type FormTransform,
  type FormValidateAsyncFn,
  type FormValidateFn,
  type FormValidateOrFn,
  type FormValidator,
  type FormValidators,
  type LensFieldComponent,
  type ReactFormApi,
  type ReactFormExtendedApi,
  type StandardSchemaV1,
  type StandardSchemaV1Issue,
  type SyncValidator,
  type TStandardSchemaValidatorIssue,
  type TStandardSchemaValidatorValue,
  type UnwrapFieldAsyncValidateOrFn,
  type UnwrapFieldValidateOrFn,
  type UnwrapFormAsyncValidateOrFn,
  type UnwrapFormValidateOrFn,
  type Updater,
  type UpdaterFn,
  type UseField,
  type ValidationLogicFn,
  type ValidationLogicProps,
  type ValidationLogicValidatorsFn,
  type ValidationMeta,
  type WithFieldGroupProps,
  type WithFormProps,
  concatenatePaths,
  createFieldMap,
  createFormHook,
  createFormHookContexts,
  deepCopy,
  defaultValidationLogic,
  deleteBy,
  determineFieldLevelErrorSourceAndValue,
  determineFormLevelErrorSourceAndValue,
  evaluate,
  formEventClient,
  formOptions,
  functionalUpdate,
  getAsyncValidatorArray,
  getBy,
  getSyncValidatorArray,
  isGlobalFormValidationError,
  isNonEmptyArray,
  isStandardSchemaValidator,
  makePathArray,
  mergeAndUpdate,
  mergeForm,
  mergeOpts,
  mutateMergeDeep,
  revalidateLogic,
  setBy,
  standardSchemaValidators,
  throttleFormState,
  useField,
  useFieldGroup,
  useForm,
  useIsomorphicLayoutEffect,
  useStore,
  uuid,
};
