import { ValidationLogicFn } from "./ValidationLogic";
import {
  AnyFieldLikeMeta,
  AnyFieldLikeMetaBase,
  FieldErrorMapFromValidator,
  FieldInfo,
  FieldLikeAPI,
  FieldLikeMeta,
  FieldLikeMetaBase,
  FieldLikeOptions,
  FormLikeAPI,
  ListenerCause,
  UpdateMetaOptions,
  ValidationCause,
  ValidationError,
  ValidationErrorMap,
} from "./types";
import { FormApi, FormAsyncValidateOrFn, FormValidateOrFn } from "./FormApi";
import { AnyFieldApi } from "./FieldApi";
import {
  StandardSchemaV1,
  TStandardSchemaValidatorValue,
} from "./standardSchemaValidator";
import { Updater } from "./utils";
import { ReadonlyStore } from "@tanstack/store";
import { DeepKeys, DeepKeysOfType, DeepValue } from "./util-types";
/**
 * @private
 */
export type FormGroupValidateFn<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> = (props: {
  value: TData;
  groupApi: FormGroupApi<
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
    any,
    any
  >;
}) => unknown;
/**
 * @private
 */
export type FormGroupValidateOrFn<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> =
  | FormGroupValidateFn<TParentData, TName, TData>
  | StandardSchemaV1<TData, unknown>;
/**
 * @private
 */
export type FormGroupValidateAsyncFn<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> = (options: {
  value: TData;
  groupApi: FormGroupApi<
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
    any,
    any
  >;
  signal: AbortSignal;
}) => unknown | Promise<unknown>;
/**
 * @private
 */
export type FormGroupAsyncValidateOrFn<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> =
  | FormGroupValidateAsyncFn<TParentData, TName, TData>
  | StandardSchemaV1<TData, unknown>;
/**
 * @private
 */
export type FormGroupListenerFn<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> = (props: {
  value: TData;
  groupApi: FormGroupApi<
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
    any,
    any
  >;
}) => void;
export interface FormGroupValidators<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName>,
  TOnMount extends undefined | FormGroupValidateOrFn<TParentData, TName, TData>,
  TOnChange extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  TOnChangeAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  TOnBlur extends undefined | FormGroupValidateOrFn<TParentData, TName, TData>,
  TOnBlurAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  TOnSubmit extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  TOnSubmitAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  TOnDynamic extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  TOnDynamicAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
> {
  /**
   * An optional function, that runs on the mount event of input.
   */
  onMount?: TOnMount;
  /**
   * An optional function, that runs on the change event of input.
   *
   * @example z.string().min(1)
   */
  onChange?: TOnChange;
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
  /**
   * An optional function, that runs on the blur event of input.
   *
   * @example z.string().min(1)
   */
  onBlur?: TOnBlur;
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
  /**
   * An optional function, that runs on the submit event of form.
   *
   * @example z.string().min(1)
   */
  onSubmit?: TOnSubmit;
  /**
   * An optional property similar to `onSubmit` but async validation.
   *
   * @example z.string().refine(async (val) => val.length > 3, { message: 'Testing 123' })
   */
  onSubmitAsync?: TOnSubmitAsync;
  onDynamic?: TOnDynamic;
  onDynamicAsync?: TOnDynamicAsync;
  onDynamicAsyncDebounceMs?: number;
}
export interface FormGroupListeners<
  TParentData,
  TName extends DeepKeys<TParentData>,
  TData extends DeepValue<TParentData, TName> = DeepValue<TParentData, TName>,
> {
  onChange?: FormGroupListenerFn<TParentData, TName, TData>;
  onChangeDebounceMs?: number;
  onBlur?: FormGroupListenerFn<TParentData, TName, TData>;
  onBlurDebounceMs?: number;
  onMount?: FormGroupListenerFn<TParentData, TName, TData>;
  onUnmount?: FormGroupListenerFn<TParentData, TName, TData>;
  onSubmit?: FormGroupListenerFn<TParentData, TName, TData>;
  onGroupSubmit?: FormGroupListenerFn<TParentData, TName, TData>;
}
interface FormGroupExtraOptions<
  in out TParentData,
  in out TName extends DeepKeys<TParentData>,
  in out TData extends DeepValue<TParentData, TName>,
  in out TOnMount extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnChange extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnChangeAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnBlur extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnBlurAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmit extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmitAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamic extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamicAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TSubmitMeta,
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
   * A list of validators to pass to the field
   */
  validators?: FormGroupValidators<
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
   * If true, allows the form to be submitted in an invalid state i.e. canSubmit will remain true regardless of validation errors. Defaults to undefined.
   */
  canSubmitWhenInvalid?: boolean;
  /**
   * A list of listeners which attach to the corresponding events
   */
  listeners?: FormGroupListeners<TParentData, TName, TData>;
  defaultState?: FormGroupState;
  /**
   * Optional validation logic strategy to use for this group's own
   * validators (e.g. `revalidateLogic()`). When omitted, the parent form's
   * `validationLogic` (or the default) is used.
   */
  validationLogic?: ValidationLogicFn;
  /**
   * onSubmitMeta, the data passed from the handleSubmit handler, to the onSubmit function props
   */
  onSubmitMeta?: TSubmitMeta;
  /**
   * A function to be called when the form is submitted, what should happen once the user submits a valid form returns `any` or a promise `Promise<any>`
   */
  onGroupSubmit?: (props: {
    value: TData;
    groupApi: FormGroupApi<
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
      TSubmitMeta,
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
    meta: TSubmitMeta;
  }) => any | Promise<any>;
  /**
   * Specify an action for scenarios where the user tries to submit an invalid form.
   */
  onGroupSubmitInvalid?: (props: {
    value: TData;
    groupApi: FormGroupApi<
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
      TSubmitMeta,
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
    meta: TSubmitMeta;
  }) => void;
}
export interface FormGroupOptions<
  in out TParentData,
  in out TName extends DeepKeys<TParentData>,
  in out TData extends DeepValue<TParentData, TName>,
  in out TOnMount extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnChange extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnChangeAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnBlur extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnBlurAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmit extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmitAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamic extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamicAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TSubmitMeta,
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
    >,
    FormGroupExtraOptions<
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
      TSubmitMeta,
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
    > {}
export interface FormGroupApiOptions<
  in out TParentData,
  in out TName extends DeepKeys<TParentData>,
  in out TData extends DeepValue<TParentData, TName>,
  in out TOnMount extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnChange extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnChangeAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnBlur extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnBlurAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmit extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmitAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamic extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamicAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TSubmitMeta,
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
> extends FormGroupOptions<
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
  TSubmitMeta,
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
export interface FormGroupState {
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
}
/**
 * @public
 *
 * A type representing the FormGroup API with all generics set to `any` for convenience.
 */
export type AnyFormGroupApi = FormGroupApi<
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
  any,
  any
>;
/**
 * @public
 *
 * The `meta` shape exposed on `FormGroupApi.state.meta`. Mirrors
 * `FieldApi.state.meta` (since `FormGroupMeta extends FieldLikeMeta`) but
 * additionally surfaces the group's submission lifecycle and aggregated
 * validity flags. All derivation lives on the parent `FormApi` (in
 * `formGroupMetaDerived`), keeping per-instance `FormGroupApi.store` as
 * minimal as `FieldApi.store`.
 *
 * Aggregated booleans (`isTouched`, `isBlurred`, `isDirty`, `isPristine`,
 * `isDefaultValue`) are computed across the group's descendant fields
 * rather than the group's own field-meta entry.
 */
export interface FormGroupMeta<
  in out TParentData,
  in out TName extends DeepKeys<TParentData>,
  in out TData extends DeepValue<TParentData, TName>,
  in out TOnMount extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnChange extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnChangeAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnBlur extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnBlurAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmit extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmitAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamic extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamicAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
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
>
  extends
    FieldLikeMeta<
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
    >,
    FormGroupState {
  isFieldsValidating: boolean;
  isFieldsValid: boolean;
  isGroupValid: boolean;
  isValid: boolean;
  canSubmit: boolean;
}
/**
 * @public
 *
 * `FormGroupMeta` with all generics widened to `any`.
 */
export type AnyFormGroupMeta = FormGroupMeta<
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
export interface FormGroupStoreState<
  in out TParentData,
  in out TName extends DeepKeys<TParentData>,
  in out TData extends DeepValue<TParentData, TName>,
  in out TOnMount extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnChange extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnChangeAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnBlur extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnBlurAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmit extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmitAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamic extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamicAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
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
> {
  /**
   * The current value of the form group.
   */
  value: TData;
  /**
   * The current metadata of the form group, including aggregated validity,
   * group-level errors, and submission lifecycle.
   */
  meta: FormGroupMeta<
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
}
/**
 * @private
 *
 * Builds a default `FormGroupMeta` value, used as a fallback when the
 * parent form's `formGroupMetaDerived` store has no entry for this group
 * yet (e.g. between `new FormGroupApi(...)` and `mount()`).
 */
export declare function getDefaultFormGroupMeta(
  defaultMeta?: Partial<AnyFieldLikeMetaBase>,
): AnyFormGroupMeta;
export declare class FormGroupApi<
  in out TParentData,
  in out TName extends DeepKeys<TParentData>,
  in out TData extends DeepValue<TParentData, TName>,
  in out TOnMount extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnChange extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnChangeAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnBlur extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnBlurAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmit extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnSubmitAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamic extends
    | undefined
    | FormGroupValidateOrFn<TParentData, TName, TData>,
  in out TOnDynamicAsync extends
    | undefined
    | FormGroupAsyncValidateOrFn<TParentData, TName, TData>,
  in out TSubmitMeta,
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
  implements
    FormLikeAPI<TParentData, TSubmitMeta>,
    FieldLikeAPI<
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
      FormGroupExtraOptions<
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
        TSubmitMeta,
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
      >
    >
{
  /**
   * A reference to the form API instance.
   */
  form: FormGroupApiOptions<
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
    TSubmitMeta,
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
  options: FormGroupApiOptions<
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
    TSubmitMeta,
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
    FormGroupStoreState<
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
  get state(): FormGroupStoreState<
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
   * @private
   *
   * Updates this group's submission lifecycle state on the parent form's
   * `baseStore` (where group state is now persisted), preserving entries
   * for any other mounted groups. After writing, the form's
   * `formGroupMetaDerived` re-derives so this group's `state.meta` picks
   * up the new lifecycle values automatically.
   */
  private setFormGroupState;
  timeoutIds: {
    validations: Record<ValidationCause, ReturnType<typeof setTimeout> | null>;
    listeners: Record<ListenerCause, ReturnType<typeof setTimeout> | null>;
    formListeners: Record<ListenerCause, ReturnType<typeof setTimeout> | null>;
  };
  /**
   * @private
   *
   * Tracks the set of fully-qualified child field names that this group's
   * validators last set form-source errors on, keyed by `errorMap` key.
   * Used to clear stale group-level field errors on subsequent runs without
   * trampling errors set by the parent form's validators.
   */
  private _lastDistributedFieldNames;
  private fieldInfo;
  constructor(
    opts: FormGroupApiOptions<
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
      TSubmitMeta,
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
   * Updates the field instance with new options.
   */
  update: (
    opts: FormGroupApiOptions<
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
      TSubmitMeta,
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
   * @private
   */
  runValidator<
    TValue extends TStandardSchemaValidatorValue<TData> & {
      groupApi: AnyFormGroupApi;
    },
    TType extends "validate" | "validateAsync",
  >(props: {
    validate: TType extends "validate"
      ? FormGroupValidateOrFn<any, any, any>
      : FormGroupAsyncValidateOrFn<any, any, any>;
    value: TValue;
    type: TType;
  }): unknown;
  mount: () => () => void;
  /**
   * Sets the field value and run the `change` validator.
   */
  setValue: (updater: Updater<TData>, options?: UpdateMetaOptions) => void;
  getMeta: () => FormGroupMeta<
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
   * @private
   */
  getRelatedFields: () => AnyFieldApi[];
  /**
   * @private
   */
  getRelatedFieldMetasDerived: () => (FieldLikeMetaBase<
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
  > &
    import("./types.js").FieldLikeMetaDerived<
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
    > & {
      name: string;
    })[];
  /**
   * @private
   *
   * Builds a fully-qualified field name from a path that is relative to this
   * group, supporting both dot (`name`, `nested.value`) and bracket
   * (`[0].name`) notation.
   */
  private buildChildFieldName;
  /**
   * @private
   *
   * Distributes a `{ fields: { ... } }` payload returned by one of this
   * group's own validators onto the corresponding child fields. Tracks
   * which fields have been touched so subsequent runs can clear stale
   * errors without trampling errors set by the parent form's validators.
   */
  private distributeFieldErrors;
  /**
   * @private
   */
  validateSync: (
    cause: ValidationCause,
    errorFromForm: ValidationErrorMap,
    opts?: {
      skipRelatedFieldValidation?: boolean;
    },
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
    opts?: {
      skipRelatedFieldValidation?: boolean;
    },
  ) => Promise<unknown[]>;
  /**
   * Validates all fields according to the FIELD level validators.
   * This will ignore FORM level validators, use form.validate({ValidationCause}) for a complete validation
   */
  validateAllFields: (cause: ValidationCause) => Promise<unknown[]>;
  validateArrayFieldsStartingFrom: <
    TField extends DeepKeysOfType<TParentData, any[]>,
  >(
    field: TField,
    index: number,
    cause: ValidationCause,
  ) => Promise<unknown[]>;
  validateField: <TField extends DeepKeysOfType<TParentData, any>>(
    field: TField,
    cause: ValidationCause,
  ) => any[] | Promise<any[]>;
  getFieldValue: <TField extends DeepKeysOfType<TParentData, any>>(
    field: TField,
  ) => DeepValue<TParentData, TField>;
  getFieldMeta: <TField extends DeepKeysOfType<TParentData, any>>(
    field: TField,
  ) => AnyFieldLikeMeta | undefined;
  setFieldMeta: <TField extends DeepKeysOfType<TParentData, any>>(
    field: TField,
    updater: Updater<AnyFieldLikeMetaBase>,
  ) => void;
  setFieldValue: <TField extends DeepKeysOfType<TParentData, any>>(
    field: TField,
    value: any,
  ) => void;
  deleteField: <TField extends DeepKeysOfType<TParentData, any>>(
    field: TField,
  ) => void;
  pushFieldValue: <TField extends DeepKeysOfType<TParentData, any[]>>(
    field: TField,
    value: any,
  ) => void;
  insertFieldValue: <TField extends DeepKeysOfType<TParentData, any[]>>(
    field: TField,
    index: number,
    value: any,
  ) => Promise<void>;
  replaceFieldValue: <TField extends DeepKeysOfType<TParentData, any[]>>(
    field: TField,
    index: number,
    value: any,
  ) => Promise<void>;
  swapFieldValues: <TField extends DeepKeysOfType<TParentData, any[]>>(
    field: TField,
    index1: number,
    index2: number,
  ) => void;
  moveFieldValues: <TField extends DeepKeysOfType<TParentData, any[]>>(
    field: TField,
    fromIndex: number,
    toIndex: number,
  ) => void;
  clearFieldValues: <TField extends DeepKeysOfType<TParentData, any[]>>(
    field: TField,
  ) => void;
  resetField: <TField extends DeepKeysOfType<TParentData, any>>(
    field: TField,
  ) => void;
  removeFieldValue: <TField extends DeepKeysOfType<TParentData, any[]>>(
    field: TField,
    index: number,
  ) => Promise<void>;
  areRelatedFieldsValid: () => boolean;
  /**
   * Validates the form group and all related children.
   */
  validate: (
    cause: ValidationCause,
    opts?: {
      skipFormValidation?: boolean;
      skipRelatedFieldValidation?: boolean;
    },
  ) => ValidationError[] | Promise<ValidationError[]>;
  /**
   * @private
   */
  triggerOnChangeListener: () => void;
  /**
   * @private
   */
  triggerOnSubmitListener: () => void;
  handleSubmit(): Promise<void>;
  handleSubmit(submitMeta: TSubmitMeta): Promise<void>;
  /**
   * Handles the form submission, performs validation, and calls the appropriate onSubmit or onSubmitInvalid callbacks.
   */
  _handleSubmit: (submitMeta?: TSubmitMeta) => Promise<void>;
}
export {};
