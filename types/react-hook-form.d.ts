import * as React from "react";

declare const VALIDATION_MODE: {
  readonly onBlur: "onBlur";
  readonly onChange: "onChange";
  readonly onSubmit: "onSubmit";
  readonly onTouched: "onTouched";
  readonly all: "all";
};
declare const INPUT_VALIDATION_RULES: {
  readonly max: "max";
  readonly min: "min";
  readonly maxLength: "maxLength";
  readonly minLength: "minLength";
  readonly pattern: "pattern";
  readonly required: "required";
  readonly validate: "validate";
};

type Observer<T> = {
  next: (value: T) => void;
};
type Subscription = {
  unsubscribe: Noop;
};
type Subject<T> = {
  readonly observers: Observer<T>[];
  subscribe: (value: Observer<T>) => Subscription;
  unsubscribe: Noop;
} & Observer<T>;

type EventType =
  | "focus"
  | "blur"
  | "change"
  | "changeText"
  | "valueChange"
  | "contentSizeChange"
  | "endEditing"
  | "keyPress"
  | "submitEditing"
  | "layout"
  | "selectionChange"
  | "longPress"
  | "press"
  | "pressIn"
  | "pressOut"
  | "momentumScrollBegin"
  | "momentumScrollEnd"
  | "scroll"
  | "scrollBeginDrag"
  | "scrollEndDrag"
  | "load"
  | "error"
  | "progress"
  | "custom";

/**
 * Type alias to `string` which describes a lodash-like path through an object.
 * E.g. `'foo.bar.0.baz'`
 */
type PathString = string;
/**
 * Type to query whether an array type T is a tuple type.
 * @typeParam T - type which may be an array or tuple
 * @example
 * ```
 * IsTuple<[number]> = true
 * IsTuple<number[]> = false
 * ```
 */
type IsTuple<T extends ReadonlyArray<any>> = number extends T["length"]
  ? false
  : true;
/**
 * Type which can be used to index an array or tuple type.
 */
type ArrayKey = number;
/**
 * Type which given a tuple type returns its own keys, i.e. only its indices.
 * @typeParam T - tuple type
 * @example
 * ```
 * TupleKeys<[number, string]> = '0' | '1'
 * ```
 */
type TupleKeys<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;

/**
 * Helper function to break apart T1 and check if any are equal to T2
 *
 * See {@link IsEqual}
 */
type AnyIsEqual<T1, T2> = T1 extends T2
  ? IsEqual<T1, T2> extends true
    ? true
    : never
  : never;
/**
 * Helper type for recursively constructing paths through a type.
 * This actually constructs the strings and recurses into nested
 * object types.
 *
 * See {@link Path}
 */
type PathImpl<K extends string | number, V, TraversedTypes> = V extends
  | Primitive
  | BrowserNativeObject
  ? `${K}`
  : true extends AnyIsEqual<TraversedTypes, V>
    ? `${K}`
    : `${K}` | `${K}.${PathInternal<V, TraversedTypes | V>}`;
/**
 * Helper type for recursively constructing paths through a type.
 * This obscures the internal type param TraversedTypes from exported contract.
 *
 * See {@link Path}
 */
type PathInternal<T, TraversedTypes = T> =
  T extends ReadonlyArray<infer V>
    ? IsTuple<T> extends true
      ? {
          [K in TupleKeys<T>]-?: PathImpl<K & string, T[K], TraversedTypes>;
        }[TupleKeys<T>]
      : PathImpl<ArrayKey, V, TraversedTypes>
    : {
        [K in keyof T]-?: PathImpl<K & string, T[K], TraversedTypes>;
      }[keyof T];
/**
 * Type which eagerly collects all paths through a type
 * @typeParam T - type which should be introspected
 * @example
 * ```
 * Path<{foo: {bar: string}}> = 'foo' | 'foo.bar'
 * ```
 */
type Path<T> = T extends any ? PathInternal<T> : never;
/**
 * See {@link Path}
 */
type FieldPath<TFieldValues extends FieldValues> = Path<TFieldValues>;
/**
 * Helper type for recursively constructing paths through a type.
 * This actually constructs the strings and recurses into nested
 * object types.
 *
 * See {@link ArrayPath}
 */
type ArrayPathImpl<K extends string | number, V, TraversedTypes> = V extends
  | Primitive
  | BrowserNativeObject
  ? IsAny<V> extends true
    ? string
    : never
  : V extends ReadonlyArray<infer U>
    ? U extends Primitive | BrowserNativeObject
      ? IsAny<V> extends true
        ? string
        : never
      : true extends AnyIsEqual<TraversedTypes, V>
        ? never
        : `${K}` | `${K}.${ArrayPathInternal<V, TraversedTypes | V>}`
    : true extends AnyIsEqual<TraversedTypes, V>
      ? never
      : `${K}.${ArrayPathInternal<V, TraversedTypes | V>}`;
/**
 * Helper type for recursively constructing paths through a type.
 * This obscures the internal type param TraversedTypes from exported contract.
 *
 * See {@link ArrayPath}
 */
type ArrayPathInternal<T, TraversedTypes = T> =
  T extends ReadonlyArray<infer V>
    ? IsTuple<T> extends true
      ? {
          [K in TupleKeys<T>]-?: ArrayPathImpl<
            K & string,
            T[K],
            TraversedTypes
          >;
        }[TupleKeys<T>]
      : ArrayPathImpl<ArrayKey, V, TraversedTypes>
    : {
        [K in keyof T]-?: ArrayPathImpl<K & string, T[K], TraversedTypes>;
      }[keyof T];
/**
 * Type which eagerly collects all paths through a type which point to an array
 * type.
 * @typeParam T - type which should be introspected.
 * @example
 * ```
 * Path<{foo: {bar: string[], baz: number[]}}> = 'foo.bar' | 'foo.baz'
 * ```
 */
type ArrayPath<T> = T extends any ? ArrayPathInternal<T> : never;
/**
 * See {@link ArrayPath}
 */
type FieldArrayPath<TFieldValues extends FieldValues> = ArrayPath<TFieldValues>;
/**
 * Type to evaluate the type which the given path points to.
 * @typeParam T - deeply nested type which is indexed by the path
 * @typeParam P - path into the deeply nested type
 * @example
 * ```
 * PathValue<{foo: {bar: string}}, 'foo.bar'> = string
 * PathValue<[number, string], '1'> = string
 * ```
 */
type PathValue<T, P extends Path<T> | ArrayPath<T>> = PathValueImpl<T, P>;
type PathValueImpl<T, P extends string> = T extends any
  ? P extends `${infer K}.${infer R}`
    ? K extends keyof T
      ? PathValueImpl<T[K], R>
      : K extends `${ArrayKey}`
        ? T extends ReadonlyArray<infer V>
          ? PathValueImpl<V, R>
          : never
        : never
    : P extends keyof T
      ? T[P]
      : P extends `${ArrayKey}`
        ? T extends ReadonlyArray<infer V>
          ? V
          : never
        : never
  : never;
/**
 * See {@link PathValue}
 */
type FieldPathValue<
  TFieldValues extends FieldValues,
  TFieldPath extends FieldPath<TFieldValues>,
> = PathValue<TFieldValues, TFieldPath>;
/**
 * See {@link PathValue}
 */
type FieldArrayPathValue<
  TFieldValues extends FieldValues,
  TFieldArrayPath extends FieldArrayPath<TFieldValues>,
> = PathValue<TFieldValues, TFieldArrayPath>;
/**
 * Type to evaluate the type which the given paths point to.
 * @typeParam TFieldValues - field values which are indexed by the paths
 * @typeParam TPath        - paths into the deeply nested field values
 * @example
 * ```
 * FieldPathValues<{foo: {bar: string}}, ['foo', 'foo.bar']>
 *   = [{bar: string}, string]
 * ```
 */
type FieldPathValues<
  TFieldValues extends FieldValues,
  TPath extends FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[],
> = {} & {
  [K in keyof TPath]: FieldPathValue<
    TFieldValues,
    TPath[K] & FieldPath<TFieldValues>
  >;
};
/**
 * Type which eagerly collects all paths through a fieldType that matches a give type
 * @typeParam TFieldValues - field values which are indexed by the paths
 * @typeParam TValue       - the value you want to match into each type
 * @example
 * ```typescript
 * FieldPathByValue<{foo: {bar: number}, baz: number, bar: string}, number>
 *   = 'foo.bar' | 'baz'
 * ```
 */
type FieldPathByValue<TFieldValues extends FieldValues, TValue> = {
  [Key in FieldPath<TFieldValues>]: FieldPathValue<
    TFieldValues,
    Key
  > extends TValue
    ? Key
    : never;
}[FieldPath<TFieldValues>];
/**
 * Type which eagerly collects all array paths through a fieldType that matches a give type
 * @typeParam TFieldValues - field values which are indexed by the paths
 * @typeParam TValue       - the value you want to match into each type
 * @example
 * ```typescript
 * FieldArrayPathByValue<{foo: {bar: number}[], baz: number, bar: string}, {bar: number}[]>
 *   = 'foo'
 * ```
 */
type FieldArrayPathByValue<TFieldValues extends FieldValues, TValue> = {
  [Key in FieldArrayPath<TFieldValues>]: FieldArrayPathValue<
    TFieldValues,
    Key
  > extends TValue
    ? Key
    : never;
}[FieldArrayPath<TFieldValues>];

type UseFieldArrayProps<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends
    FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
  TKeyName extends string = "id",
  TTransformedValues = TFieldValues,
> = {
  name: TFieldArrayName;
  keyName?: TKeyName;
  control?: Control<TFieldValues, any, TTransformedValues>;
  rules?: {
    validate?:
      | Validate<FieldArray<TFieldValues, TFieldArrayName>[], TFieldValues>
      | Record<
          string,
          Validate<FieldArray<TFieldValues, TFieldArrayName>[], TFieldValues>
        >;
  } & Pick<
    RegisterOptions<TFieldValues>,
    "maxLength" | "minLength" | "required"
  >;
  shouldUnregister?: boolean;
};
/**
 * `useFieldArray` returned `fields` with unique id
 */
type FieldArrayWithId<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends
    FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
  TKeyName extends string = "id",
> = FieldArray<TFieldValues, TFieldArrayName> & Record<TKeyName, string>;
type FieldArray<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends
    FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
> =
  FieldArrayPathValue<TFieldValues, TFieldArrayName> extends
    | ReadonlyArray<infer U>
    | null
    | undefined
    ? U
    : never;
/**
 * `useFieldArray` focus option, ability to toggle focus on and off with `shouldFocus` and setting focus by either field index or name.
 */
type FieldArrayMethodProps = {
  shouldFocus?: boolean;
  focusIndex?: number;
  focusName?: string;
};
/**
 * Swap field array by supplying from and to index
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/calc-i231d)
 *
 * @param indexA - from index
 * @param indexB - to index
 *
 * @example
 * ```tsx
 * <button type="button" onClick={() => swap(0, 1)}>swap</button>
 * ```
 */
type UseFieldArraySwap = (indexA: number, indexB: number) => void;
/**
 * Move field array by supplying from and to index
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/calc-i231d)
 *
 * @param indexA - from index
 * @param indexB - to index
 *
 * @example
 * ```tsx
 * <button type="button" onClick={() => move(0, 1)}>swap</button>
 * ```
 */
type UseFieldArrayMove = (indexA: number, indexB: number) => void;
/**
 * Prepend field/fields to the start of the fields and optionally focus. The input value will be registered during this action.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/calc-i231d)
 *
 * @param value - prepend items or items
 * @param options - focus options
 *
 * @example
 * ```tsx
 * <button type="button" onClick={() => prepend({ name: "data" })}>Prepend</button>
 * <button type="button" onClick={() => prepend({ name: "data" }, { shouldFocus: false })}>Prepend</button>
 * <button
 *   type="button"
 *   onClick={() => prepend([{ name: "data" }, { name: "data" }])}
 * >
 *   Prepend
 * </button>
 * ```
 */
type UseFieldArrayPrepend<
  TFieldValues extends FieldValues,
  TFieldArrayName extends
    FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
> = (
  value:
    | FieldArray<TFieldValues, TFieldArrayName>
    | FieldArray<TFieldValues, TFieldArrayName>[],
  options?: FieldArrayMethodProps,
) => void;
/**
 * Append field/fields to the end of your fields and focus. The input value will be registered during this action.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/calc-i231d)
 *
 * @param value - append items or items.
 * @param options - focus options
 *
 * @example
 * ```tsx
 * <button type="button" onClick={() => append({ name: "data" })}>Append</button>
 * <button type="button" onClick={() => append({ name: "data" }, { shouldFocus: false })}>Append</button>
 * <button
 *   type="button"
 *   onClick={() => append([{ name: "data" }, { name: "data" }])}
 * >
 *   Append
 * </button>
 * ```
 */
type UseFieldArrayAppend<
  TFieldValues extends FieldValues,
  TFieldArrayName extends
    FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
> = (
  value:
    | FieldArray<TFieldValues, TFieldArrayName>
    | FieldArray<TFieldValues, TFieldArrayName>[],
  options?: FieldArrayMethodProps,
) => void;
/**
 * Remove field/fields at particular position.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/calc-i231d)
 *
 * @param index - index to remove at, or remove all when no index provided.
 *
 * @example
 * ```tsx
 * <button type="button" onClick={() => remove(0)}>Remove</button>
 * <button
 *   type="button"
 *   onClick={() => remove()}
 * >
 *   Remove all
 * </button>
 * ```
 */
type UseFieldArrayRemove = (index?: number | number[]) => void;
/**
 * Insert field/fields at particular position and focus.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/calc-i231d)
 *
 * @param index - insert position
 * @param value - insert field or fields
 * @param options - focus options
 *
 * @example
 * ```tsx
 * <button type="button" onClick={() => insert(1, { name: "data" })}>Insert</button>
 * <button type="button" onClick={() => insert(1, { name: "data" }, { shouldFocus: false })}>Insert</button>
 * <button
 *   type="button"
 *   onClick={() => insert(1, [{ name: "data" }, { name: "data" }])}
 * >
 *   Insert
 * </button>
 * ```
 */
type UseFieldArrayInsert<
  TFieldValues extends FieldValues,
  TFieldArrayName extends
    FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
> = (
  index: number,
  value:
    | FieldArray<TFieldValues, TFieldArrayName>
    | FieldArray<TFieldValues, TFieldArrayName>[],
  options?: FieldArrayMethodProps,
) => void;
/**
 * Update field/fields at particular position.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/calc-i231d)
 *
 * @param index - insert position
 * @param value - insert field or fields
 *
 * @example
 * ```tsx
 * <button type="button" onClick={() => update(1, { name: "data" })}>Update</button>
 * <button
 *   type="button"
 *   onClick={() => update(1, [{ name: "data" }, { name: "data" }])}
 * >
 *   Update
 * </button>
 * ```
 */
type UseFieldArrayUpdate<
  TFieldValues extends FieldValues,
  TFieldArrayName extends
    FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
> = (index: number, value: FieldArray<TFieldValues, TFieldArrayName>) => void;
/**
 * Replace the entire field array values.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/calc-i231d)
 *
 * @param value - the entire field values.
 *
 * @example
 * ```tsx
 * <button
 *   type="button"
 *   onClick={() => replace([{ name: "data" }, { name: "data" }])}
 * >
 *   Replace
 * </button>
 * ```
 */
type UseFieldArrayReplace<
  TFieldValues extends FieldValues,
  TFieldArrayName extends
    FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
> = (
  value:
    | FieldArray<TFieldValues, TFieldArrayName>
    | FieldArray<TFieldValues, TFieldArrayName>[],
) => void;
type UseFieldArrayReturn<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends
    FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
  TKeyName extends string = "id",
> = {
  swap: UseFieldArraySwap;
  move: UseFieldArrayMove;
  prepend: UseFieldArrayPrepend<TFieldValues, TFieldArrayName>;
  append: UseFieldArrayAppend<TFieldValues, TFieldArrayName>;
  remove: UseFieldArrayRemove;
  insert: UseFieldArrayInsert<TFieldValues, TFieldArrayName>;
  update: UseFieldArrayUpdate<TFieldValues, TFieldArrayName>;
  replace: UseFieldArrayReplace<TFieldValues, TFieldArrayName>;
  fields: FieldArrayWithId<TFieldValues, TFieldArrayName, TKeyName>[];
};

type ResolverSuccess<TTransformedValues> = {
  values: TTransformedValues;
  errors: {};
};
type ResolverError<TFieldValues extends FieldValues = FieldValues> = {
  values: {};
  errors: FieldErrors<TFieldValues>;
};
type ResolverResult<
  TFieldValues extends FieldValues = FieldValues,
  TTransformedValues = TFieldValues,
> = ResolverSuccess<TTransformedValues> | ResolverError<TFieldValues>;
interface ResolverOptions<TFieldValues extends FieldValues> {
  criteriaMode?: CriteriaMode;
  fields: Record<InternalFieldName, Field["_f"]>;
  names?: FieldName<TFieldValues>[];
  shouldUseNativeValidation: boolean | undefined;
}
type Resolver<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
> = (
  values: TFieldValues,
  context: TContext | undefined,
  options: ResolverOptions<TFieldValues>,
) =>
  | Promise<ResolverResult<TFieldValues, TTransformedValues>>
  | ResolverResult<TFieldValues, TTransformedValues>;

declare const $NestedValue: unique symbol;
/**
 * @deprecated to be removed in the next major version
 */
type NestedValue<TValue extends object = object> = {
  [$NestedValue]: never;
} & TValue;
type DefaultValues<TFieldValues> =
  TFieldValues extends AsyncDefaultValues<TFieldValues>
    ? DeepPartial<Awaited<TFieldValues>>
    : DeepPartial<TFieldValues>;
type InternalNameSet = Set<InternalFieldName>;
type ValidationMode = typeof VALIDATION_MODE;
type Mode = keyof ValidationMode;
type ValidationModeFlags = {
  isOnSubmit: boolean;
  isOnBlur: boolean;
  isOnChange: boolean;
  isOnAll: boolean;
  isOnTouch: boolean;
};
type CriteriaMode = "firstError" | "all";
type SubmitHandler<T> = (
  data: T,
  event?: React.BaseSyntheticEvent,
) => unknown | Promise<unknown>;
type FormSubmitHandler<TTransformedValues> = (payload: {
  data: TTransformedValues;
  event?: React.BaseSyntheticEvent;
  formData: FormData;
  formDataJson: string;
  method?: "post" | "put" | "delete";
}) => unknown | Promise<unknown>;
type SubmitErrorHandler<TFieldValues extends FieldValues> = (
  errors: FieldErrors<TFieldValues>,
  event?: React.BaseSyntheticEvent,
) => unknown | Promise<unknown>;
type SetValueConfig = Partial<{
  shouldValidate: boolean;
  shouldDirty: boolean;
  shouldTouch: boolean;
}>;
type TriggerConfig = Partial<{
  shouldFocus: boolean;
}>;
type UseFormResetFieldOptions<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Partial<{
  keepDirty: boolean;
  keepTouched: boolean;
  keepError: boolean;
  defaultValue: FieldPathValue<TFieldValues, TFieldName>;
}>;
type ChangeHandler = (event: {
  target: any;
  type?: any;
}) => Promise<void | boolean>;
type DelayCallback = (wait: number) => void;
type AsyncDefaultValues<TFieldValues> = (
  payload?: unknown,
) => Promise<TFieldValues>;
type UseFormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
> = Partial<{
  mode: Mode;
  disabled: boolean;
  reValidateMode: Exclude<Mode, "onTouched" | "all">;
  defaultValues: DefaultValues<TFieldValues> | AsyncDefaultValues<TFieldValues>;
  values: TFieldValues;
  errors: FieldErrors<TFieldValues>;
  resetOptions: Parameters<UseFormReset<TFieldValues>>[1];
  resolver: Resolver<TFieldValues, TContext, TTransformedValues>;
  context: TContext;
  shouldFocusError: boolean;
  shouldUnregister: boolean;
  shouldUseNativeValidation: boolean;
  progressive: boolean;
  criteriaMode: CriteriaMode;
  delayError: number;
  formControl?: Omit<
    UseFormReturn<TFieldValues, TContext, TTransformedValues>,
    "formState"
  >;
}>;
type FieldNamesMarkedBoolean<TFieldValues extends FieldValues> = DeepMap<
  DeepPartial<TFieldValues>,
  boolean
>;
type FormStateProxy<TFieldValues extends FieldValues = FieldValues> = {
  isDirty: boolean;
  isValidating: boolean;
  dirtyFields: FieldNamesMarkedBoolean<TFieldValues>;
  touchedFields: FieldNamesMarkedBoolean<TFieldValues>;
  validatingFields: FieldNamesMarkedBoolean<TFieldValues>;
  errors: boolean;
  isValid: boolean;
};
type ReadFormState = {
  [K in keyof FormStateProxy]: boolean | "all";
} & {
  values?: boolean;
};
type FormState<TFieldValues extends FieldValues> = {
  isDirty: boolean;
  isLoading: boolean;
  isSubmitted: boolean;
  isSubmitSuccessful: boolean;
  isSubmitting: boolean;
  isValidating: boolean;
  isValid: boolean;
  disabled: boolean;
  submitCount: number;
  defaultValues?: undefined | Readonly<DeepPartial<TFieldValues>>;
  dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<TFieldValues>>>;
  touchedFields: Partial<Readonly<FieldNamesMarkedBoolean<TFieldValues>>>;
  validatingFields: Partial<Readonly<FieldNamesMarkedBoolean<TFieldValues>>>;
  errors: FieldErrors<TFieldValues>;
  isReady: boolean;
};
type KeepStateOptions = Partial<{
  keepDirtyValues: boolean;
  keepErrors: boolean;
  keepDirty: boolean;
  keepValues: boolean;
  keepDefaultValues: boolean;
  keepIsSubmitted: boolean;
  keepIsSubmitSuccessful: boolean;
  keepTouched: boolean;
  keepIsValidating: boolean;
  keepIsValid: boolean;
  keepSubmitCount: boolean;
}>;
type SetFieldValue<TFieldValues extends FieldValues> = FieldValue<TFieldValues>;
type RefCallBack = (instance: any) => void;
type UseFormRegisterReturn<
  TFieldName extends InternalFieldName = InternalFieldName,
> = {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  ref: RefCallBack;
  name: TFieldName;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
};
/**
 * Register field into hook form with or without the actual DOM ref. You can invoke register anywhere in the component including at `useEffect`.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/register) • [Demo](https://codesandbox.io/s/react-hook-form-register-ts-ip2j3) • [Video](https://www.youtube.com/watch?v=JFIpCoajYkA)
 *
 * @param name - the path name to the form field value, name is required and unique
 * @param options - register options include validation, disabled, unregister, value as and dependent validation
 *
 * @returns onChange, onBlur, name, ref, and native contribute attribute if browser validation is enabled.
 *
 * @example
 * ```tsx
 * // Register HTML native input
 * <input {...register("input")} />
 * <select {...register("select")} />
 *
 * // Register options
 * <textarea {...register("textarea", { required: "This is required.", maxLength: 20 })} />
 * <input type="number" {...register("name2", { valueAsNumber: true })} />
 * <input {...register("name3", { deps: ["name2"] })} />
 *
 * // Register custom field at useEffect
 * useEffect(() => {
 *   register("name4");
 *   register("name5", { value: "hiddenValue" });
 * }, [register])
 *
 * // Register without ref
 * const { onChange, onBlur, name } = register("name6")
 * <input onChange={onChange} onBlur={onBlur} name={name} />
 * ```
 */
type UseFormRegister<TFieldValues extends FieldValues> = <
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  name: TFieldName,
  options?: RegisterOptions<TFieldValues, TFieldName>,
) => UseFormRegisterReturn<TFieldName>;
type SetFocusOptions = Partial<{
  shouldSelect: boolean;
}>;
/**
 * Set focus on a registered field. You can start to invoke this method after all fields are mounted to the DOM.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/setfocus) • [Demo](https://codesandbox.io/s/setfocus-rolus)
 *
 * @param name - the path name to the form field value.
 * @param options - input focus behavior options
 *
 * @example
 * ```tsx
 * useEffect(() => {
 *   setFocus("name");
 * }, [setFocus])
 * // shouldSelect allows to select input's content on focus
 * <button onClick={() => setFocus("name", { shouldSelect: true })}>Focus</button>
 * ```
 */
type UseFormSetFocus<TFieldValues extends FieldValues> = <
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  name: TFieldName,
  options?: SetFocusOptions,
) => void;
type UseFormGetValues<TFieldValues extends FieldValues> = {
  /**
   * Get the entire form values when no argument is supplied to this function.
   *
   * @remarks
   * [API](https://react-hook-form.com/docs/useform/getvalues) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-getvalues-txsfg)
   *
   * @returns form values
   *
   * @example
   * ```tsx
   * <button onClick={() => getValues()}>getValues</button>
   *
   * <input {...register("name", {
   *   validate: (value, formValues) => formValues.otherField === value;
   * })} />
   * ```
   */
  (): TFieldValues;
  /**
   * Get a single field value.
   *
   * @remarks
   * [API](https://react-hook-form.com/docs/useform/getvalues) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-getvalues-txsfg)
   *
   * @param name - the path name to the form field value.
   *
   * @returns the single field value
   *
   * @example
   * ```tsx
   * <button onClick={() => getValues("name")}>getValues</button>
   *
   * <input {...register("name", {
   *   validate: () => getValues('otherField') === "test";
   * })} />
   * ```
   */
  <TFieldName extends FieldPath<TFieldValues>>(
    name: TFieldName,
  ): FieldPathValue<TFieldValues, TFieldName>;
  /**
   * Get an array of field values.
   *
   * @remarks
   * [API](https://react-hook-form.com/docs/useform/getvalues) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-getvalues-txsfg)
   *
   * @param names - an array of field names
   *
   * @returns An array of field values
   *
   * @example
   * ```tsx
   * <button onClick={() => getValues(["name", "name1"])}>getValues</button>
   *
   * <input {...register("name", {
   *   validate: () => getValues(["fieldA", "fieldB"]).includes("test");
   * })} />
   * ```
   */
  <TFieldNames extends FieldPath<TFieldValues>[]>(
    names: readonly [...TFieldNames],
  ): [...FieldPathValues<TFieldValues, TFieldNames>];
};
/**
 * This method will return individual field states. It will be useful when you are trying to retrieve the nested value field state in a typesafe approach.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/getfieldstate) • [Demo](https://codesandbox.io/s/getfieldstate-jvekk)
 *
 * @param name - the path name to the form field value.
 *
 * @returns invalid, isDirty, isTouched and error object
 *
 * @example
 * ```tsx
 * // those formState has to be subscribed
 * const { formState: { dirtyFields, errors, touchedFields } } = formState();
 * getFieldState('name')
 * // Get field state when form state is not subscribed yet
 * getFieldState('name', formState)
 *
 * // It's ok to combine with useFormState
 * const formState = useFormState();
 * getFieldState('name')
 * getFieldState('name', formState)
 * ```
 */
type UseFormGetFieldState<TFieldValues extends FieldValues> = <
  TFieldName extends FieldPath<TFieldValues>,
>(
  name: TFieldName,
  formState?: FormState<TFieldValues>,
) => {
  invalid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  isValidating: boolean;
  error?: FieldError;
};
/**
 * This method will allow you to subscribe to formState without component render
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/subscribe) • [Demo](https://codesandbox.io/s/subscribe)
 *
 * @param options - subscription options on which formState subscribe to
 *
 * @example
 * ```tsx
const { subscribe } = useForm()

useEffect(() => {
 subscribe({
   formState: { isDirty: true },
   callback: () => {}
 })
})
 * ```
 */
type UseFromSubscribe<TFieldValues extends FieldValues> = <
  TFieldNames extends readonly FieldPath<TFieldValues>[],
>(payload: {
  name?: readonly [...TFieldNames] | TFieldNames[number];
  formState?: Partial<ReadFormState>;
  callback: (
    data: Partial<FormState<TFieldValues>> & {
      values: TFieldValues;
      name?: InternalFieldName;
    },
  ) => void;
  exact?: boolean;
}) => () => void;
type UseFormWatch<TFieldValues extends FieldValues> = {
  /**
   * Watch and subscribe to the entire form update/change based on onChange and re-render at the useForm.
   *
   * @remarks
   * [API](https://react-hook-form.com/docs/useform/watch) • [Demo](https://codesandbox.io/s/react-hook-form-watch-v7-ts-8et1d) • [Video](https://www.youtube.com/watch?v=3qLd69WMqKk)
   *
   * @returns return the entire form values
   *
   * @example
   * ```tsx
   * const formValues = watch();
   * ```
   */
  (): TFieldValues;
  /**
   * Watch and subscribe to an array of fields used outside of render.
   *
   * @remarks
   * [API](https://react-hook-form.com/docs/useform/watch) • [Demo](https://codesandbox.io/s/react-hook-form-watch-v7-ts-8et1d) • [Video](https://www.youtube.com/watch?v=3qLd69WMqKk)
   *
   * @param names - an array of field names
   * @param defaultValue - defaultValues for the entire form
   *
   * @returns return an array of field values
   *
   * @example
   * ```tsx
   * const [name, name1] = watch(["name", "name1"]);
   * ```
   */
  <TFieldNames extends readonly FieldPath<TFieldValues>[]>(
    names: readonly [...TFieldNames],
    defaultValue?: DeepPartial<TFieldValues>,
  ): FieldPathValues<TFieldValues, TFieldNames>;
  /**
   * Watch and subscribe to a single field used outside of render.
   *
   * @remarks
   * [API](https://react-hook-form.com/docs/useform/watch) • [Demo](https://codesandbox.io/s/react-hook-form-watch-v7-ts-8et1d) • [Video](https://www.youtube.com/watch?v=3qLd69WMqKk)
   *
   * @param name - the path name to the form field value.
   * @param defaultValue - defaultValues for the entire form
   *
   * @returns return the single field value
   *
   * @example
   * ```tsx
   * const name = watch("name");
   * ```
   */
  <TFieldName extends FieldPath<TFieldValues>>(
    name: TFieldName,
    defaultValue?: FieldPathValue<TFieldValues, TFieldName>,
  ): FieldPathValue<TFieldValues, TFieldName>;
  /**
   * Subscribe to field update/change without trigger re-render
   *
   * @remarks
   * [API](https://react-hook-form.com/docs/useform/watch) • [Demo](https://codesandbox.io/s/react-hook-form-watch-v7-ts-8et1d) • [Video](https://www.youtube.com/watch?v=3qLd69WMqKk)
   *
   * @param callback - call back function to subscribe all fields change and return unsubscribe function
   * @param defaultValues - defaultValues for the entire form
   *
   * @returns unsubscribe function
   *
   * @example
   * ```tsx
   * useEffect(() => {
   *   const { unsubscribe } = watch((value) => {
   *     console.log(value);
   *   });
   *   return () => unsubscribe();
   * }, [watch])
   * ```
   */
  (
    callback: WatchObserver<TFieldValues>,
    defaultValues?: DeepPartial<TFieldValues>,
  ): Subscription;
};
/**
 * Trigger field or form validation
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/trigger) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-triggervalidation-forked-xs7hl) • [Video](https://www.youtube.com/watch?v=-bcyJCDjksE)
 *
 * @param name - provide empty argument will trigger the entire form validation, an array of field names will validate an array of fields, and a single field name will only trigger that field's validation.
 * @param options - should focus on the error field
 *
 * @returns validation result
 *
 * @example
 * ```tsx
 * useEffect(() => {
 *   trigger();
 * }, [trigger])
 *
 * <button onClick={async () => {
 *   const result = await trigger(); // result will be a boolean value
 * }}>
 *  trigger
 *  </button>
 * ```
 */
type UseFormTrigger<TFieldValues extends FieldValues> = (
  name?:
    | FieldPath<TFieldValues>
    | FieldPath<TFieldValues>[]
    | readonly FieldPath<TFieldValues>[],
  options?: TriggerConfig,
) => Promise<boolean>;
/**
 * Clear the entire form errors.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/clearerrors) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-clearerrors-w3ymx)
 *
 * @param name - the path name to the form field value.
 *
 * @example
 * Clear all errors
 * ```tsx
 * clearErrors(); // clear the entire form error
 * clearErrors(["name", "name1"]) // clear an array of fields' error
 * clearErrors("name2"); // clear a single field error
 * ```
 */
type UseFormClearErrors<TFieldValues extends FieldValues> = (
  name?:
    | FieldPath<TFieldValues>
    | FieldPath<TFieldValues>[]
    | readonly FieldPath<TFieldValues>[]
    | `root.${string}`
    | "root",
) => void;
/**
 * Set a single field value, or a group of fields value.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/setvalue) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-setvalue-8z9hx) • [Video](https://www.youtube.com/watch?v=qpv51sCH3fI)
 *
 * @param name - the path name to the form field value.
 * @param value - field value
 * @param options - should validate or update form state
 *
 * @example
 * ```tsx
 * // Update a single field
 * setValue('name', 'value', {
 *   shouldValidate: true, // trigger validation
 *   shouldTouch: true, // update touched fields form state
 *   shouldDirty: true, // update dirty and dirty fields form state
 * });
 *
 * // Update a group fields
 * setValue('root', {
 *   a: 'test', // setValue('root.a', 'data')
 *   b: 'test1', // setValue('root.b', 'data')
 * });
 *
 * // Update a nested object field
 * setValue('select', { label: 'test', value: 'Test' });
 * ```
 */
type UseFormSetValue<TFieldValues extends FieldValues> = <
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  name: TFieldName,
  value: FieldPathValue<TFieldValues, TFieldName>,
  options?: SetValueConfig,
) => void;
/**
 * Set an error for the field. When set an error which is not associated to a field then manual `clearErrors` invoke is required.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/seterror) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-seterror-nfxxu) • [Video](https://www.youtube.com/watch?v=raMqvE0YyIY)
 *
 * @param name - the path name to the form field value.
 * @param error - an error object which contains type and optional message
 * @param options - whether or not to focus on the field
 *
 * @example
 * ```tsx
 * // when the error is not associated with any fields, `clearError` will need to invoke to clear the error
 * const onSubmit = () => setError("serverError", { type: "server", message: "Error occurred"})
 *
 * <button onClick={() => setError("name", { type: "min" })} />
 *
 * // focus on the input after setting the error
 * <button onClick={() => setError("name", { type: "max" }, { shouldFocus: true })} />
 * ```
 */
type UseFormSetError<TFieldValues extends FieldValues> = (
  name: FieldPath<TFieldValues> | `root.${string}` | "root",
  error: ErrorOption,
  options?: {
    shouldFocus: boolean;
  },
) => void;
/**
 * Unregister a field reference and remove its value.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/unregister) • [Demo](https://codesandbox.io/s/react-hook-form-unregister-4k2ey) • [Video](https://www.youtube.com/watch?v=TM99g_NW5Gk&feature=emb_imp_woyt)
 *
 * @param name - the path name to the form field value.
 * @param options - keep form state options
 *
 * @example
 * ```tsx
 * register("name", { required: true })
 *
 * <button onClick={() => unregister("name")} />
 * // there are various keep options to retain formState
 * <button onClick={() => unregister("name", { keepErrors: true })} />
 * ```
 */
type UseFormUnregister<TFieldValues extends FieldValues> = (
  name?:
    | FieldPath<TFieldValues>
    | FieldPath<TFieldValues>[]
    | readonly FieldPath<TFieldValues>[],
  options?: Omit<
    KeepStateOptions,
    | "keepIsSubmitted"
    | "keepSubmitCount"
    | "keepValues"
    | "keepDefaultValues"
    | "keepErrors"
  > & {
    keepValue?: boolean;
    keepDefaultValue?: boolean;
    keepError?: boolean;
  },
) => void;
/**
 * Validate the entire form. Handle submit and error callback.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/handlesubmit) • [Demo](https://codesandbox.io/s/react-hook-form-handlesubmit-ts-v7-lcrtu) • [Video](https://www.youtube.com/watch?v=KzcPKB9SOEk)
 *
 * @param onValid - callback function invoked after form pass validation
 * @param onInvalid - callback function invoked when form failed validation
 *
 * @returns callback - return callback function
 *
 * @example
 * ```tsx
 * const onSubmit = (data) => console.log(data);
 * const onError = (error) => console.log(error);
 *
 * <form onSubmit={handleSubmit(onSubmit, onError)} />
 * ```
 */
type UseFormHandleSubmit<
  TFieldValues extends FieldValues,
  TTransformedValues = TFieldValues,
> = (
  onValid: SubmitHandler<TTransformedValues>,
  onInvalid?: SubmitErrorHandler<TFieldValues>,
) => (e?: React.BaseSyntheticEvent) => Promise<void>;
/**
 * Reset a field state and reference.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/resetfield) • [Demo](https://codesandbox.io/s/priceless-firefly-d0kuv) • [Video](https://www.youtube.com/watch?v=IdLFcNaEFEo)
 *
 * @param name - the path name to the form field value.
 * @param options - keep form state options
 *
 * @example
 * ```tsx
 * <input {...register("firstName", { required: true })} />
 * <button type="button" onClick={() => resetField("firstName"))}>Reset</button>
 * ```
 */
type UseFormResetField<TFieldValues extends FieldValues> = <
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  name: TFieldName,
  options?: UseFormResetFieldOptions<TFieldValues, TFieldName>,
) => void;
type ResetAction<TFieldValues> = (formValues: TFieldValues) => TFieldValues;
/**
 * Reset at the entire form state.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform/reset) • [Demo](https://codesandbox.io/s/react-hook-form-reset-v7-ts-pu901) • [Video](https://www.youtube.com/watch?v=qmCLBjyPwVk)
 *
 * @param values - the entire form values to be reset
 * @param keepStateOptions - keep form state options
 *
 * @example
 * ```tsx
 * useEffect(() => {
 *   // reset the entire form after component mount or form defaultValues is ready
 *   reset({
 *     fieldA: "test"
 *     fieldB: "test"
 *   });
 * }, [reset])
 *
 * // reset by combine with existing form values
 * reset({
 *   ...getValues(),
 *  fieldB: "test"
 *});
 *
 * // reset and keep form state
 * reset({
 *   ...getValues(),
 *}, {
 *   keepErrors: true,
 *   keepDirty: true
 *});
 * ```
 */
type UseFormReset<TFieldValues extends FieldValues> = (
  values?:
    | DefaultValues<TFieldValues>
    | TFieldValues
    | ResetAction<TFieldValues>,
  keepStateOptions?: KeepStateOptions,
) => void;
type WatchInternal<TFieldValues> = (
  fieldNames?: InternalFieldName | InternalFieldName[],
  defaultValue?: DeepPartial<TFieldValues>,
  isMounted?: boolean,
  isGlobal?: boolean,
) =>
  | FieldPathValue<FieldValues, InternalFieldName>
  | FieldPathValues<FieldValues, InternalFieldName[]>;
type GetIsDirty = <TName extends InternalFieldName, TData>(
  name?: TName,
  data?: TData,
) => boolean;
type FormStateSubjectRef<TFieldValues extends FieldValues> = Subject<
  Partial<FormState<TFieldValues>> & {
    name?: InternalFieldName;
    values?: TFieldValues;
    type?: EventType;
  }
>;
type Subjects<TFieldValues extends FieldValues = FieldValues> = {
  array: Subject<{
    name?: InternalFieldName;
    values?: FieldValues;
  }>;
  state: FormStateSubjectRef<TFieldValues>;
};
type Names = {
  mount: InternalNameSet;
  unMount: InternalNameSet;
  disabled: InternalNameSet;
  array: InternalNameSet;
  watch: InternalNameSet;
  focus?: InternalFieldName;
  watchAll?: boolean;
};
type BatchFieldArrayUpdate = <
  T extends Function,
  TFieldValues extends FieldValues,
  TFieldArrayName extends
    FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
>(
  name: InternalFieldName,
  updatedFieldArrayValues?: Partial<
    FieldArray<TFieldValues, TFieldArrayName>
  >[],
  method?: T,
  args?: Partial<{
    argA: unknown;
    argB: unknown;
  }>,
  shouldSetValue?: boolean,
  shouldUpdateFieldsAndErrors?: boolean,
) => void;
type FromSubscribe<TFieldValues extends FieldValues> = <
  TFieldNames extends readonly FieldPath<TFieldValues>[],
>(payload: {
  name?: readonly [...TFieldNames] | TFieldNames[number];
  formState?: Partial<ReadFormState>;
  callback: (
    data: Partial<FormState<TFieldValues>> & {
      values: TFieldValues;
      name?: InternalFieldName;
    },
  ) => void;
  exact?: boolean;
  reRenderRoot?: boolean;
}) => () => void;
type Control<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
> = {
  _subjects: Subjects<TFieldValues>;
  _removeUnmounted: Noop;
  _names: Names;
  _state: {
    mount: boolean;
    action: boolean;
    watch: boolean;
  };
  _reset: UseFormReset<TFieldValues>;
  _options: UseFormProps<TFieldValues, TContext, TTransformedValues>;
  _getDirty: GetIsDirty;
  _resetDefaultValues: Noop;
  _formState: FormState<TFieldValues>;
  _setValid: (shouldUpdateValid?: boolean) => void;
  _fields: FieldRefs;
  _formValues: FieldValues;
  _proxyFormState: ReadFormState;
  _defaultValues: Partial<DefaultValues<TFieldValues>>;
  _getWatch: WatchInternal<TFieldValues>;
  _setFieldArray: BatchFieldArrayUpdate;
  _getFieldArray: <TFieldArrayValues>(
    name: InternalFieldName,
  ) => Partial<TFieldArrayValues>[];
  _setErrors: (errors: FieldErrors<TFieldValues>) => void;
  _setDisabledField: (props: {
    disabled?: boolean;
    name: FieldName<any>;
  }) => void;
  _runSchema: (names: InternalFieldName[]) => Promise<{
    errors: FieldErrors;
  }>;
  _focusError: () => boolean | undefined;
  _disableForm: (disabled?: boolean) => void;
  _subscribe: FromSubscribe<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues, TTransformedValues>;
  unregister: UseFormUnregister<TFieldValues>;
  getFieldState: UseFormGetFieldState<TFieldValues>;
  setError: UseFormSetError<TFieldValues>;
};
type WatchObserver<TFieldValues extends FieldValues> = (
  value: DeepPartial<TFieldValues>,
  info: {
    name?: FieldPath<TFieldValues>;
    type?: EventType;
    values?: unknown;
  },
) => void;
type UseFormReturn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
> = {
  watch: UseFormWatch<TFieldValues>;
  getValues: UseFormGetValues<TFieldValues>;
  getFieldState: UseFormGetFieldState<TFieldValues>;
  setError: UseFormSetError<TFieldValues>;
  clearErrors: UseFormClearErrors<TFieldValues>;
  setValue: UseFormSetValue<TFieldValues>;
  trigger: UseFormTrigger<TFieldValues>;
  formState: FormState<TFieldValues>;
  resetField: UseFormResetField<TFieldValues>;
  reset: UseFormReset<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues, TTransformedValues>;
  unregister: UseFormUnregister<TFieldValues>;
  control: Control<TFieldValues, TContext, TTransformedValues>;
  register: UseFormRegister<TFieldValues>;
  setFocus: UseFormSetFocus<TFieldValues>;
  subscribe: UseFromSubscribe<TFieldValues>;
};
type UseFormStateProps<
  TFieldValues extends FieldValues,
  TTransformedValues = TFieldValues,
> = Partial<{
  control?: Control<TFieldValues, any, TTransformedValues>;
  disabled?: boolean;
  name?:
    | FieldPath<TFieldValues>
    | FieldPath<TFieldValues>[]
    | readonly FieldPath<TFieldValues>[];
  exact?: boolean;
}>;
type UseFormStateReturn<TFieldValues extends FieldValues> =
  FormState<TFieldValues>;
type UseWatchProps<TFieldValues extends FieldValues = FieldValues> = {
  defaultValue?: unknown;
  disabled?: boolean;
  name?:
    | FieldPath<TFieldValues>
    | FieldPath<TFieldValues>[]
    | readonly FieldPath<TFieldValues>[];
  control?: Control<TFieldValues>;
  exact?: boolean;
};
type FormProviderProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
> = {
  children: React.ReactNode | React.ReactNode[];
} & UseFormReturn<TFieldValues, TContext, TTransformedValues>;
type FormProps<
  TFieldValues extends FieldValues,
  TTransformedValues = TFieldValues,
> = Omit<React.FormHTMLAttributes<HTMLFormElement>, "onError" | "onSubmit"> &
  Partial<{
    control: Control<TFieldValues, any, TTransformedValues>;
    headers: Record<string, string>;
    validateStatus: (status: number) => boolean;
    onError: ({
      response,
      error,
    }:
      | {
          response: Response;
          error?: undefined;
        }
      | {
          response?: undefined;
          error: unknown;
        }) => void;
    onSuccess: ({ response }: { response: Response }) => void;
    onSubmit: FormSubmitHandler<TTransformedValues>;
    method: "post" | "put" | "delete";
    children: React.ReactNode | React.ReactNode[];
    render: (props: {
      submit: (e?: React.FormEvent) => void;
    }) => React.ReactNode | React.ReactNode[];
    encType:
      | "application/x-www-form-urlencoded"
      | "multipart/form-data"
      | "text/plain"
      | "application/json";
  }>;

type Noop = () => void;
interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
}
interface FileList$1 {
  readonly length: number;
  item(index: number): File | null;
  [index: number]: File;
}
type Primitive = null | undefined | string | number | boolean | symbol | bigint;
type BrowserNativeObject = Date | FileList$1 | File;
type EmptyObject = {
  [K in string | number]: never;
};
type NonUndefined<T> = T extends undefined ? never : T;
type LiteralUnion<T extends U, U extends Primitive> =
  | T
  | (U & {
      _?: never;
    });
type ExtractObjects<T> = T extends infer U
  ? U extends object
    ? U
    : never
  : never;
type DeepPartial<T> = T extends BrowserNativeObject | NestedValue
  ? T
  : {
      [K in keyof T]?: ExtractObjects<T[K]> extends never
        ? T[K]
        : DeepPartial<T[K]>;
    };
type DeepPartialSkipArrayKey<T> = T extends BrowserNativeObject | NestedValue
  ? T
  : T extends ReadonlyArray<any>
    ? {
        [K in keyof T]: DeepPartialSkipArrayKey<T[K]>;
      }
    : {
        [K in keyof T]?: DeepPartialSkipArrayKey<T[K]>;
      };
/**
 * Checks whether the type is any
 * See {@link https://stackoverflow.com/a/49928360/3406963}
 * @typeParam T - type which may be any
 * ```
 * IsAny<any> = true
 * IsAny<string> = false
 * ```
 */
type IsAny<T> = 0 extends 1 & T ? true : false;
/**
 * Checks whether the type is never
 * @typeParam T - type which may be never
 * ```
 * IsAny<never> = true
 * IsAny<string> = false
 * ```
 */
type IsNever<T> = [T] extends [never] ? true : false;
/**
 * Checks whether T1 can be exactly (mutually) assigned to T2
 * @typeParam T1 - type to check
 * @typeParam T2 - type to check against
 * ```
 * IsEqual<string, string> = true
 * IsEqual<'foo', 'foo'> = true
 * IsEqual<string, number> = false
 * IsEqual<string, number> = false
 * IsEqual<string, 'foo'> = false
 * IsEqual<'foo', string> = false
 * IsEqual<'foo' | 'bar', 'foo'> = boolean // 'foo' is assignable, but 'bar' is not (true | false) -> boolean
 * ```
 */
type IsEqual<T1, T2> = T1 extends T2
  ? (<G>() => G extends T1 ? 1 : 2) extends <G>() => G extends T2 ? 1 : 2
    ? true
    : false
  : false;
type DeepMap<T, TValue> =
  IsAny<T> extends true
    ? any
    : T extends BrowserNativeObject | NestedValue
      ? TValue
      : T extends object
        ? {
            [K in keyof T]: DeepMap<NonUndefined<T[K]>, TValue>;
          }
        : TValue;
type IsFlatObject<T extends object> =
  Extract<
    Exclude<T[keyof T], NestedValue | Date | FileList$1>,
    any[] | object
  > extends never
    ? true
    : false;
type Merge<A, B> = {
  [K in keyof A | keyof B]?: K extends keyof A & keyof B
    ? [A[K], B[K]] extends [object, object]
      ? Merge<A[K], B[K]>
      : A[K] | B[K]
    : K extends keyof A
      ? A[K]
      : K extends keyof B
        ? B[K]
        : never;
};

type InternalFieldName = string;
type FieldName<TFieldValues extends FieldValues> =
  IsFlatObject<TFieldValues> extends true
    ? Extract<keyof TFieldValues, string>
    : string;
type CustomElement<TFieldValues extends FieldValues> = Partial<HTMLElement> & {
  name: FieldName<TFieldValues>;
  type?: string;
  value?: any;
  disabled?: boolean;
  checked?: boolean;
  options?: HTMLOptionsCollection;
  files?: FileList | null;
  focus?: Noop;
};
type FieldValue<TFieldValues extends FieldValues> =
  TFieldValues[InternalFieldName];
type FieldValues = Record<string, any>;
type NativeFieldValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | unknown[];
type FieldElement<TFieldValues extends FieldValues = FieldValues> =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement
  | CustomElement<TFieldValues>;
type Ref = FieldElement;
type Field = {
  _f: {
    ref: Ref;
    name: InternalFieldName;
    refs?: HTMLInputElement[];
    mount?: boolean;
  } & RegisterOptions;
};
type FieldRefs = Partial<{
  [key: InternalFieldName]: Field | FieldRefs;
}>;

type Message = string;
type MultipleFieldErrors = {
  [K in keyof RegisterOptions]?: ValidateResult;
} & {
  [key: string]: ValidateResult;
};
type FieldError = {
  type: LiteralUnion<keyof RegisterOptions, string>;
  root?: FieldError;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};
type ErrorOption = {
  message?: Message;
  type?: LiteralUnion<keyof RegisterOptions, string>;
  types?: MultipleFieldErrors;
};
type DeepRequired<T> = T extends BrowserNativeObject | Blob
  ? T
  : {
      [K in keyof T]-?: NonNullable<DeepRequired<T[K]>>;
    };
type FieldErrorsImpl<T extends FieldValues = FieldValues> = {
  [K in keyof T]?: T[K] extends BrowserNativeObject | Blob
    ? FieldError
    : K extends "root" | `root.${string}`
      ? GlobalError
      : T[K] extends object
        ? Merge<FieldError, FieldErrorsImpl<T[K]>>
        : FieldError;
};
type GlobalError = Partial<{
  type: string | number;
  message: Message;
}>;
type FieldErrors<T extends FieldValues = FieldValues> = Partial<
  FieldValues extends IsAny<FieldValues>
    ? any
    : FieldErrorsImpl<DeepRequired<T>>
> & {
  root?: Record<string, GlobalError> & GlobalError;
};
type InternalFieldErrors = Partial<Record<InternalFieldName, FieldError>>;

type ValidationValue = boolean | number | string | RegExp;
type ValidationRule<
  TValidationValue extends ValidationValue = ValidationValue,
> = TValidationValue | ValidationValueMessage<TValidationValue>;
type ValidationValueMessage<
  TValidationValue extends ValidationValue = ValidationValue,
> = {
  value: TValidationValue;
  message: Message;
};
type ValidateResult = Message | Message[] | boolean | undefined;
type Validate<TFieldValue, TFormValues> = (
  value: TFieldValue,
  formValues: TFormValues,
) => ValidateResult | Promise<ValidateResult>;
type RegisterOptions<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Partial<{
  required: Message | ValidationRule<boolean>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number>;
  minLength: ValidationRule<number>;
  validate:
    | Validate<FieldPathValue<TFieldValues, TFieldName>, TFieldValues>
    | Record<
        string,
        Validate<FieldPathValue<TFieldValues, TFieldName>, TFieldValues>
      >;
  value: FieldPathValue<TFieldValues, TFieldName>;
  setValueAs: (value: any) => any;
  shouldUnregister?: boolean;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  disabled: boolean;
  deps: FieldPath<TFieldValues> | FieldPath<TFieldValues>[];
}> &
  (
    | {
        pattern?: ValidationRule<RegExp>;
        valueAsNumber?: false;
        valueAsDate?: false;
      }
    | {
        pattern?: undefined;
        valueAsNumber?: false;
        valueAsDate?: true;
      }
    | {
        pattern?: undefined;
        valueAsNumber?: true;
        valueAsDate?: false;
      }
  );
type InputValidationRules = typeof INPUT_VALIDATION_RULES;
type MaxType = InputValidationRules["max"] | InputValidationRules["maxLength"];
type MinType = InputValidationRules["min"] | InputValidationRules["minLength"];

type ControllerFieldState = {
  invalid: boolean;
  isTouched: boolean;
  isDirty: boolean;
  isValidating: boolean;
  error?: FieldError;
};
type ControllerRenderProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  value: FieldPathValue<TFieldValues, TName>;
  disabled?: boolean;
  name: TName;
  ref: RefCallBack;
};
type UseControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> = {
  name: TName;
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  shouldUnregister?: boolean;
  defaultValue?: FieldPathValue<TFieldValues, TName>;
  control?: Control<TFieldValues, any, TTransformedValues>;
  disabled?: boolean;
};
type UseControllerReturn<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  field: ControllerRenderProps<TFieldValues, TName>;
  formState: UseFormStateReturn<TFieldValues>;
  fieldState: ControllerFieldState;
};
/**
 * Render function to provide the control for the field.
 *
 * @returns all the event handlers, and relevant field and form state.
 *
 * @example
 * ```tsx
 * const { field, fieldState, formState } = useController();
 *
 * <Controller
 *   render={({ field, formState, fieldState }) => ({
 *     <input
 *       onChange={field.onChange}
 *       onBlur={field.onBlur}
 *       name={field.name}
 *       ref={field.ref} // optional for focus management
 *     />
 *   })}
 * />
 * ```
 */
type ControllerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
> = {
  render: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<TFieldValues, TName>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
  }) => React.ReactElement;
} & UseControllerProps<TFieldValues, TName, TTransformedValues>;

/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */
declare const Controller: <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
>(
  props: ControllerProps<TFieldValues, TName, TTransformedValues>,
) => React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
//# sourceMappingURL=controller.d.ts.map

/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control, formState: { errors } } = useForm();
 *
 *   return (
 *     <Form action="/api" control={control}>
 *       <input {...register("name")} />
 *       <p>{errors?.root?.server && 'Server error'}</p>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */
declare function Form<
  TFieldValues extends FieldValues,
  TTransformedValues = TFieldValues,
>(props: FormProps<TFieldValues, TTransformedValues>): React.JSX.Element;
//# sourceMappingURL=form.d.ts.map

declare const _default$2: (
  name: InternalFieldName,
  validateAllFieldCriteria: boolean,
  errors: InternalFieldErrors,
  type: string,
  message: ValidateResult,
) => {};
//# sourceMappingURL=appendErrors.d.ts.map

declare function createFormControl<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
>(
  props?: UseFormProps<TFieldValues, TContext, TTransformedValues>,
): Omit<
  UseFormReturn<TFieldValues, TContext, TTransformedValues>,
  "formState"
> & {
  formControl: Omit<
    UseFormReturn<TFieldValues, TContext, TTransformedValues>,
    "formState"
  >;
};

/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */
declare function useController<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
>(
  props: UseControllerProps<TFieldValues, TName, TTransformedValues>,
): UseControllerReturn<TFieldValues, TName>;

/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
declare function useFieldArray<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends
    FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
  TKeyName extends string = "id",
  TTransformedValues = TFieldValues,
>(
  props: UseFieldArrayProps<
    TFieldValues,
    TFieldArrayName,
    TKeyName,
    TTransformedValues
  >,
): UseFieldArrayReturn<TFieldValues, TFieldArrayName, TKeyName>;

/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */
declare function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
>(
  props?: UseFormProps<TFieldValues, TContext, TTransformedValues>,
): UseFormReturn<TFieldValues, TContext, TTransformedValues>;

/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
declare const useFormContext: <
  TFieldValues extends FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
>() => UseFormReturn<TFieldValues, TContext, TTransformedValues>;
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */
declare const FormProvider: <
  TFieldValues extends FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
>(
  props: FormProviderProps<TFieldValues, TContext, TTransformedValues>,
) => React.JSX.Element;

/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */
declare function useFormState<
  TFieldValues extends FieldValues = FieldValues,
  TTransformedValues = TFieldValues,
>(
  props?: UseFormStateProps<TFieldValues, TTransformedValues>,
): UseFormStateReturn<TFieldValues>;

/**
 * Subscribe to the entire form values change and re-render at the hook level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @param props - defaultValue, disable subscription and match exact name.
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   control,
 *   defaultValue: {
 *     name: "data"
 *   },
 *   exact: false,
 * })
 * ```
 */
declare function useWatch<
  TFieldValues extends FieldValues = FieldValues,
  TTransformedValues = TFieldValues,
>(props: {
  defaultValue?: DeepPartialSkipArrayKey<TFieldValues>;
  control?: Control<TFieldValues, any, TTransformedValues>;
  disabled?: boolean;
  exact?: boolean;
}): DeepPartialSkipArrayKey<TFieldValues>;
/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @param props - defaultValue, disable subscription and match exact name.
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   control,
 *   name: "fieldA",
 *   defaultValue: "default value",
 *   exact: false,
 * })
 * ```
 */
declare function useWatch<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TTransformedValues = TFieldValues,
>(props: {
  name: TFieldName;
  defaultValue?: FieldPathValue<TFieldValues, TFieldName>;
  control?: Control<TFieldValues, any, TTransformedValues>;
  disabled?: boolean;
  exact?: boolean;
}): FieldPathValue<TFieldValues, TFieldName>;
/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @param props - defaultValue, disable subscription and match exact name.
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   control,
 *   name: ["fieldA", "fieldB"],
 *   defaultValue: {
 *     fieldA: "data",
 *     fieldB: "data"
 *   },
 *   exact: false,
 * })
 * ```
 */
declare function useWatch<
  TFieldValues extends FieldValues = FieldValues,
  TFieldNames extends
    readonly FieldPath<TFieldValues>[] = readonly FieldPath<TFieldValues>[],
  TTransformedValues = TFieldValues,
>(props: {
  name: readonly [...TFieldNames];
  defaultValue?: DeepPartialSkipArrayKey<TFieldValues>;
  control?: Control<TFieldValues, any, TTransformedValues>;
  disabled?: boolean;
  exact?: boolean;
}): FieldPathValues<TFieldValues, TFieldNames>;
/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * // can skip passing down the control into useWatch if the form is wrapped with the FormProvider
 * const values = useWatch()
 * ```
 */
declare function useWatch<
  TFieldValues extends FieldValues = FieldValues,
>(): DeepPartialSkipArrayKey<TFieldValues>;

declare const _default$1: <T>(
  object: T,
  path?: string | null,
  defaultValue?: unknown,
) => any;
//# sourceMappingURL=get.d.ts.map

declare const _default: (
  object: FieldValues,
  path: FieldPath<FieldValues>,
  value?: unknown,
) => void;
//# sourceMappingURL=set.d.ts.map

export {
  type ArrayPath,
  type BatchFieldArrayUpdate,
  type BrowserNativeObject,
  type ChangeHandler,
  type Control,
  Controller,
  type ControllerFieldState,
  type ControllerProps,
  type ControllerRenderProps,
  type CriteriaMode,
  type CustomElement,
  type DeepMap,
  type DeepPartial,
  type DeepPartialSkipArrayKey,
  type DeepRequired,
  type DefaultValues,
  type DelayCallback,
  type EmptyObject,
  type ErrorOption,
  type EventType,
  type ExtractObjects,
  type Field,
  type FieldArray,
  type FieldArrayMethodProps,
  type FieldArrayPath,
  type FieldArrayPathByValue,
  type FieldArrayPathValue,
  type FieldArrayWithId,
  type FieldElement,
  type FieldError,
  type FieldErrors,
  type FieldErrorsImpl,
  type FieldName,
  type FieldNamesMarkedBoolean,
  type FieldPath,
  type FieldPathByValue,
  type FieldPathValue,
  type FieldPathValues,
  type FieldRefs,
  type FieldValue,
  type FieldValues,
  Form,
  type FormProps,
  FormProvider,
  type FormProviderProps,
  type FormState,
  type FormStateProxy,
  type FormStateSubjectRef,
  type FormSubmitHandler,
  type FromSubscribe,
  type GetIsDirty,
  type GlobalError,
  type InputValidationRules,
  type InternalFieldErrors,
  type InternalFieldName,
  type InternalNameSet,
  type IsAny,
  type IsEqual,
  type IsFlatObject,
  type IsNever,
  type KeepStateOptions,
  type LiteralUnion,
  type MaxType,
  type Merge,
  type Message,
  type MinType,
  type Mode,
  type MultipleFieldErrors,
  type Names,
  type NativeFieldValue,
  type NestedValue,
  type NonUndefined,
  type Noop,
  type Path,
  type PathString,
  type PathValue,
  type Primitive,
  type ReadFormState,
  type Ref,
  type RefCallBack,
  type RegisterOptions,
  type Resolver,
  type ResolverError,
  type ResolverOptions,
  type ResolverResult,
  type ResolverSuccess,
  type SetFieldValue,
  type SetFocusOptions,
  type SetValueConfig,
  type Subjects,
  type SubmitErrorHandler,
  type SubmitHandler,
  type TriggerConfig,
  type UseControllerProps,
  type UseControllerReturn,
  type UseFieldArrayAppend,
  type UseFieldArrayInsert,
  type UseFieldArrayMove,
  type UseFieldArrayPrepend,
  type UseFieldArrayProps,
  type UseFieldArrayRemove,
  type UseFieldArrayReplace,
  type UseFieldArrayReturn,
  type UseFieldArraySwap,
  type UseFieldArrayUpdate,
  type UseFormClearErrors,
  type UseFormGetFieldState,
  type UseFormGetValues,
  type UseFormHandleSubmit,
  type UseFormProps,
  type UseFormRegister,
  type UseFormRegisterReturn,
  type UseFormReset,
  type UseFormResetField,
  type UseFormResetFieldOptions,
  type UseFormReturn,
  type UseFormSetError,
  type UseFormSetFocus,
  type UseFormSetValue,
  type UseFormStateProps,
  type UseFormStateReturn,
  type UseFormTrigger,
  type UseFormUnregister,
  type UseFormWatch,
  type UseFromSubscribe,
  type UseWatchProps,
  type Validate,
  type ValidateResult,
  type ValidationMode,
  type ValidationModeFlags,
  type ValidationRule,
  type ValidationValue,
  type ValidationValueMessage,
  type WatchInternal,
  type WatchObserver,
  _default$2 as appendErrors,
  createFormControl,
  _default$1 as get,
  _default as set,
  useController,
  useFieldArray,
  useForm,
  useFormContext,
  useFormState,
  useWatch,
};
