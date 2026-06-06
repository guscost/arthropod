import {
  FieldErrorMapFromValidator,
  FieldInfo,
  FieldLikeAPI,
  FieldLikeApiOptions,
  FieldLikeMetaBase,
  FieldLikeOptions,
  FieldLikeState,
  ListenerCause,
  UnwrapFieldAsyncValidateOrFn,
  UnwrapFieldValidateOrFn,
  UpdateMetaOptions,
  ValidationCause,
  ValidationError,
  ValidationErrorMap,
} from "./types";
import { ReadonlyStore } from "@tanstack/store";
import { DeepKeys, DeepValue, RejectPromiseValidator } from "./util-types";
import {
  StandardSchemaV1,
  TStandardSchemaValidatorValue,
} from "./standardSchemaValidator";
import { FormAsyncValidateOrFn, FormValidateOrFn } from "./FormApi";
import { Updater } from "./utils";
/**
 * @private
 */
export type FieldValidateFn<
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
export type FieldValidateAsyncFn<
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
export type FieldListenerFn<
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
/**
 * @private
 */
export type FieldValidateOrFn<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> =
  | FieldValidateFn<TParentData, TName, TData>
  | StandardSchemaV1<TData, unknown>;
/**
 * @private
 */
export type FieldAsyncValidateOrFn<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> =
  | FieldValidateAsyncFn<TParentData, TName, TData>
  | StandardSchemaV1<TData, unknown>;
export interface FieldValidators<
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
export interface FieldListeners<
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
  onGroupSubmit?: FieldListenerFn<TParentData, TName, TData>;
}
interface FieldExtraOptions<
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
   * A list of listeners which attach to the corresponding events
   */
  listeners?: FieldListeners<TParentData, TName, TData>;
}
/**
 * An object type representing the options for a field in a form.
 */
export interface FieldOptions<
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
>
  extends
    FieldExtraOptions<
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
    FieldLikeOptions<
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
    > {}
export interface FieldApiOptions<
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
>
  extends
    FieldLikeApiOptions<
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
    FieldExtraOptions<
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
    > {}
/**
 * @public
 *
 * A type representing the Field API with all generics set to `any` for convenience.
 */
export type AnyFieldApi = FieldApi<
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
export declare class FieldApi<
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
> implements FieldLikeAPI<
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
  TParentSubmitMeta,
  FieldExtraOptions<
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
  >
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
    FieldLikeState<
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
  get state(): FieldLikeState<
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
  getMeta: () => import("./types.js").FieldLikeMeta<
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
      FieldLikeMetaBase<
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
      skipGroupValidation?: boolean;
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
  ) =>
    | import("./standardSchemaValidator.js").StandardSchemaV1Issue[]
    | undefined;
  /**
   * Parses the field's value with the given schema and returns
   * issues (if any). This method does NOT set any internal errors.
   * @param schema The standard schema to parse this field's value with.
   */
  parseValueWithSchemaAsync: (
    schema: StandardSchemaV1<TData, unknown>,
  ) => Promise<
    import("./standardSchemaValidator.js").StandardSchemaV1Issue[] | undefined
  >;
  private triggerOnBlurListener;
  /**
   * @private
   */
  triggerOnChangeListener: () => void;
  /**
   * @private
   */
  triggerOnSubmitListener: () => void;
}
export {};
