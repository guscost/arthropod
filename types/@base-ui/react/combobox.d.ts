import * as React from "react";

declare const none: "none";
declare const triggerPress: "trigger-press";
declare const triggerHover: "trigger-hover";
declare const triggerFocus: "trigger-focus";
declare const outsidePress: "outside-press";
declare const itemPress: "item-press";
declare const closePress: "close-press";
declare const linkPress: "link-press";
declare const clearPress: "clear-press";
declare const chipRemovePress: "chip-remove-press";
declare const trackPress: "track-press";
declare const incrementPress: "increment-press";
declare const decrementPress: "decrement-press";
declare const inputChange: "input-change";
declare const inputClear: "input-clear";
declare const inputBlur: "input-blur";
declare const inputPaste: "input-paste";
declare const inputPress: "input-press";
declare const focusOut: "focus-out";
declare const escapeKey: "escape-key";
declare const closeWatcher: "close-watcher";
declare const listNavigation: "list-navigation";
declare const keyboard: "keyboard";
declare const pointer: "pointer";
declare const drag: "drag";
declare const wheel: "wheel";
declare const scrub: "scrub";
declare const cancelOpen: "cancel-open";
declare const siblingOpen: "sibling-open";
declare const disabled: "disabled";
declare const missing: "missing";
declare const initial: "initial";
declare const imperativeAction: "imperative-action";
declare const swipe: "swipe";
declare const windowResize: "window-resize";

interface ReasonToEventMap {
  [none]: Event;
  [triggerPress]: MouseEvent | PointerEvent | TouchEvent | KeyboardEvent;
  [triggerHover]: MouseEvent;
  [triggerFocus]: FocusEvent;
  [outsidePress]: MouseEvent | PointerEvent | TouchEvent;
  [itemPress]: MouseEvent | KeyboardEvent | PointerEvent;
  [closePress]: MouseEvent | KeyboardEvent | PointerEvent;
  [linkPress]: MouseEvent | PointerEvent;
  [clearPress]: PointerEvent | MouseEvent | KeyboardEvent;
  [chipRemovePress]: PointerEvent | MouseEvent | KeyboardEvent;
  [trackPress]: PointerEvent | MouseEvent | TouchEvent;
  [incrementPress]: PointerEvent | MouseEvent | TouchEvent;
  [decrementPress]: PointerEvent | MouseEvent | TouchEvent;
  [inputChange]: InputEvent | Event;
  [inputClear]: InputEvent | FocusEvent | Event;
  [inputBlur]: FocusEvent;
  [inputPaste]: ClipboardEvent;
  [inputPress]: MouseEvent | PointerEvent | TouchEvent | KeyboardEvent;
  [focusOut]: FocusEvent | KeyboardEvent;
  [escapeKey]: KeyboardEvent;
  [closeWatcher]: Event;
  [listNavigation]: KeyboardEvent;
  [keyboard]: KeyboardEvent;
  [pointer]: PointerEvent;
  [drag]: PointerEvent | TouchEvent;
  [swipe]: PointerEvent | TouchEvent;
  [wheel]: WheelEvent;
  [scrub]: PointerEvent;
  [cancelOpen]: MouseEvent;
  [siblingOpen]: Event;
  [disabled]: Event;
  [missing]: Event;
  [initial]: Event;
  [imperativeAction]: Event;
  [windowResize]: UIEvent;
}
/**
 * Maps a change `reason` string to the corresponding native event type.
 */
type ReasonToEvent<Reason extends string> =
  Reason extends keyof ReasonToEventMap ? ReasonToEventMap[Reason] : Event;
type BaseUIChangeEventDetail<
  Reason extends string,
  CustomProperties extends object,
> = {
  /**
   * The reason for the event.
   */
  reason: Reason;
  /**
   * The native event associated with the custom event.
   */
  event: ReasonToEvent<Reason>;
  /**
   * Cancels Base UI from handling the event.
   */
  cancel: () => void;
  /**
   * Allows the event to propagate in cases where Base UI will stop the propagation.
   */
  allowPropagation: () => void;
  /**
   * Indicates whether the event has been canceled.
   */
  isCanceled: boolean;
  /**
   * Indicates whether the event is allowed to propagate.
   */
  isPropagationAllowed: boolean;
  /**
   * The element that triggered the event, if applicable.
   */
  trigger: Element | undefined;
} & CustomProperties;
/**
 * Details of custom change events emitted by Base UI components.
 */
type BaseUIChangeEventDetails<
  Reason extends string,
  CustomProperties extends object = {},
> = Reason extends string
  ? BaseUIChangeEventDetail<Reason, CustomProperties> & {}
  : never;
/**
 * Details of custom generic events emitted by Base UI components.
 */
type BaseUIGenericEventDetail<
  Reason extends string,
  CustomProperties extends object,
> = {
  /**
   * The reason for the event.
   */
  reason: Reason;
  /**
   * The native event associated with the custom event.
   */
  event: ReasonToEvent<Reason>;
} & CustomProperties;
type BaseUIGenericEventDetails<
  Reason extends string,
  CustomProperties extends object = {},
> = Reason extends string
  ? BaseUIGenericEventDetail<Reason, CustomProperties> & {}
  : never;

interface Group<Item = any> {
  [key: string]: unknown;
  items: ReadonlyArray<Item>;
}

type SelectionMode = "single" | "multiple" | "none";
type ComboboxItemValueType<
  ItemValue,
  Mode extends SelectionMode,
> = Mode extends "multiple" ? ItemValue[] : ItemValue;
interface ComboboxRootProps$1<ItemValue> {
  children?: React.ReactNode;
  /**
   * Identifies the field when a form is submitted.
   */
  name?: string | undefined;
  /**
   * Identifies the form that owns the internal input.
   * Useful when the combobox is rendered outside the form.
   */
  form?: string | undefined;
  /**
   * The id of the component.
   */
  id?: string | undefined;
  /**
   * Whether the user must choose a value before submitting a form.
   * @default false
   */
  required?: boolean | undefined;
  /**
   * Whether the user should be unable to choose a different option from the popup.
   * @default false
   */
  readOnly?: boolean | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Whether the popup is initially open.
   *
   * To render a controlled popup, use the `open` prop instead.
   * @default false
   */
  defaultOpen?: boolean | undefined;
  /**
   * Whether the popup is currently open. Use when controlled.
   */
  open?: boolean | undefined;
  /**
   * Event handler called when the popup is opened or closed.
   */
  onOpenChange?:
    | ((open: boolean, eventDetails: AriaCombobox.ChangeEventDetails) => void)
    | undefined;
  /**
   * Event handler called after any animations complete when the popup is opened or closed.
   */
  onOpenChangeComplete?: ((open: boolean) => void) | undefined;
  /**
   * Whether the popup opens when clicking the input.
   * @default true
   */
  openOnInputClick?: boolean | undefined;
  /**
   * Whether the first matching item is highlighted automatically.
   * - `false`: do not highlight automatically.
   * - `true`: highlight after the user types and keep the highlight while the query changes.
   * - `'always'`: highlight the first item as soon as the list opens.
   * @default false
   */
  autoHighlight?: boolean | "always" | undefined;
  /**
   * Whether the highlighted item should be preserved when the pointer leaves the list.
   * @default false
   */
  keepHighlight?: boolean | undefined;
  /**
   * Whether moving the pointer over items should highlight them.
   * Disabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.
   * @default true
   */
  highlightItemOnHover?: boolean | undefined;
  /**
   * Whether to loop keyboard focus back to the input when the end of the list is reached while using the arrow keys. The first item can then be reached by pressing <kbd>ArrowDown</kbd> again from the input, or the last item can be reached by pressing <kbd>ArrowUp</kbd> from the input.
   * The input is always included in the focus loop per [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).
   * When disabled, focus does not move when on the last element and the user presses <kbd>ArrowDown</kbd>, or when on the first element and the user presses <kbd>ArrowUp</kbd>.
   * @default true
   */
  loopFocus?: boolean | undefined;
  /**
   * The input value of the combobox. Use when controlled.
   */
  inputValue?: React.ComponentProps<"input">["value"] | undefined;
  /**
   * Callback fired when the input value of the combobox changes.
   */
  onInputValueChange?:
    | ((value: string, eventDetails: AriaCombobox.ChangeEventDetails) => void)
    | undefined;
  /**
   * The uncontrolled input value when initially rendered.
   *
   * To render a controlled input, use the `inputValue` prop instead.
   */
  defaultInputValue?: React.ComponentProps<"input">["defaultValue"] | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: When specified, the combobox will not be unmounted when closed.
   * Instead, the `unmount` function must be called to unmount the combobox manually.
   * Useful when the combobox's animation is controlled by an external library.
   */
  actionsRef?: React.RefObject<AriaCombobox.Actions | null> | undefined;
  /**
   * Callback fired when an item is highlighted or unhighlighted.
   * Receives the highlighted item value (or `undefined` if no item is highlighted) and event details with a `reason` property describing why the highlight changed.
   * The `reason` can be:
   * - `'keyboard'`: the highlight changed due to keyboard navigation.
   * - `'pointer'`: the highlight changed due to pointer hovering.
   * - `'none'`: the highlight changed programmatically.
   */
  onItemHighlighted?:
    | ((
        itemValue: ItemValue | undefined,
        eventDetails: AriaCombobox.HighlightEventDetails,
      ) => void)
    | undefined;
  /**
   * A ref to the hidden input element.
   */
  inputRef?: React.Ref<HTMLInputElement> | undefined;
  /**
   * Whether list items are presented in a grid layout.
   * When enabled, arrow keys navigate across rows and columns inferred from DOM rows.
   * @default false
   */
  grid?: boolean | undefined;
  /**
   * The items to be displayed in the list.
   * Can be either a flat array of items or an array of groups with items.
   */
  items?: readonly any[] | readonly Group<any>[] | undefined;
  /**
   * Filtered items to display in the list.
   * When provided, the list will use these items instead of filtering the `items` prop internally.
   * Use when you want to control filtering logic externally with the `useFilter()` hook.
   */
  filteredItems?: readonly any[] | readonly Group<any>[] | undefined;
  /**
   * Filter function used to match items vs input query.
   */
  filter?:
    | null
    | ((
        itemValue: ItemValue,
        query: string,
        itemToString?: (itemValue: ItemValue) => string,
      ) => boolean)
    | undefined;
  /**
   * When the item values are objects (`<Combobox.Item value={object}>`), this function converts the object value to a string representation for display in the input.
   * If the shape of the object is `{ value, label }`, the label will be used automatically without needing to specify this prop.
   */
  itemToStringLabel?: ((itemValue: ItemValue) => string) | undefined;
  /**
   * When the item values are objects (`<Combobox.Item value={object}>`), this function converts the object value to a string representation for form submission.
   * If the shape of the object is `{ value, label }`, the value will be used automatically without needing to specify this prop.
   */
  itemToStringValue?: ((itemValue: ItemValue) => string) | undefined;
  /**
   * Custom comparison logic used to determine if a combobox item value matches the current selected value. Useful when item values are objects without matching referentially.
   * Defaults to `Object.is` comparison.
   */
  isItemEqualToValue?:
    | ((itemValue: ItemValue, value: ItemValue) => boolean)
    | undefined;
  /**
   * Whether the items are being externally virtualized.
   * @default false
   */
  virtualized?: boolean | undefined;
  /**
   * Whether the list is rendered inline without using the popup.
   * @default false
   */
  inline?: boolean | undefined;
  /**
   * Determines if the popup enters a modal state when open.
   * - `true`: user interaction is limited to the popup: document page scroll is locked and pointer interactions on outside elements are disabled.
   * - `false`: user interaction with the rest of the document is allowed.
   * @default false
   */
  modal?: boolean | undefined;
  /**
   * The maximum number of items to display in the list.
   * @default -1
   */
  limit?: number | undefined;
  /**
   * Controls how the component behaves with respect to list filtering and inline autocompletion.
   * - `list` (default): items are dynamically filtered based on the input value. The input value does not change based on the active item.
   * - `both`: items are dynamically filtered based on the input value, which will temporarily change based on the active item (inline autocompletion).
   * - `inline`: items are static (not filtered), and the input value will temporarily change based on the active item (inline autocompletion).
   * - `none`: items are static (not filtered), and the input value will not change based on the active item.
   * @default 'list'
   */
  autoComplete?: "list" | "both" | "inline" | "none" | undefined;
  /**
   * Provides a hint to the browser for autofill on the hidden input element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete
   */
  formAutoComplete?: string | undefined;
  /**
   * The locale to use for string comparison.
   * Defaults to the user's runtime locale.
   */
  locale?: Intl.LocalesArgument | undefined;
  /**
   * Whether clicking an item should submit the owning form.
   * @default false
   */
  submitOnItemClick?: boolean | undefined;
  /**
   * INTERNAL: When `selectionMode` is `none`, controls whether selecting an item fills the input.
   */
  fillInputOnItemPress?: boolean | undefined;
}
interface AriaComboboxState {}
type AriaComboboxProps<
  Value,
  Mode extends SelectionMode = "none",
> = ComboboxRootProps$1<Value> & {
  /**
   * How the combobox should remember the selected value.
   * - `single`: Remembers the last selected value.
   * - `multiple`: Remember all selected values.
   * - `none`: Do not remember the selected value.
   * @default 'none'
   */
  selectionMode?: Mode | undefined;
  /**
   * The selected value of the combobox. Use when controlled.
   */
  selectedValue?: ComboboxItemValueType<Value, Mode> | undefined;
  /**
   * The uncontrolled selected value of the combobox when it's initially rendered.
   *
   * To render a controlled combobox, use the `selectedValue` prop instead.
   */
  defaultSelectedValue?: ComboboxItemValueType<Value, Mode> | null | undefined;
  /**
   * Callback fired when the selected value of the combobox changes.
   */
  onSelectedValueChange?:
    | ((
        value: ComboboxItemValueType<Value, Mode>,
        eventDetails: AriaCombobox.ChangeEventDetails,
      ) => void)
    | undefined;
};
/**
 * @internal
 */
declare function AriaCombobox<Value, Mode extends SelectionMode = "none">(
  props: Omit<AriaComboboxProps<Value, Mode>, "items"> & {
    items: readonly Group<any>[];
  },
): React.JSX.Element;
declare function AriaCombobox<Value, Mode extends SelectionMode = "none">(
  props: Omit<AriaComboboxProps<Value, Mode>, "items"> & {
    items?: readonly any[] | undefined;
  },
): React.JSX.Element;
declare namespace AriaCombobox {
  type Props<Value, Mode extends SelectionMode = "none"> = AriaComboboxProps<
    Value,
    Mode
  >;
  type State = AriaComboboxState;
  interface Actions {
    unmount: () => void;
  }
  type HighlightEventReason = "keyboard" | "pointer" | "none";
  type HighlightEventDetails = BaseUIGenericEventDetails<
    HighlightEventReason,
    {
      index: number;
    }
  >;
  type ChangeEventReason =
    | typeof triggerPress
    | typeof outsidePress
    | typeof itemPress
    | typeof closePress
    | typeof escapeKey
    | typeof listNavigation
    | typeof focusOut
    | typeof inputChange
    | typeof inputClear
    | typeof clearPress
    | typeof chipRemovePress
    | typeof none;
  type ChangeEventDetails = BaseUIChangeEventDetails<ChangeEventReason>;
}

type ModeFromMultiple<Multiple extends boolean | undefined> =
  Multiple extends true ? "multiple" : "single";
type ComboboxValueType<
  Value,
  Multiple extends boolean | undefined,
> = Multiple extends true ? Value[] : Value;
type ComboboxRootProps<
  Value,
  Multiple extends boolean | undefined = false,
> = Omit<
  AriaCombobox.Props<Value, ModeFromMultiple<Multiple>>,
  | "fillInputOnItemPress"
  | "autoComplete"
  | "formAutoComplete"
  | "submitOnItemClick"
  | "autoHighlight"
  | "keepHighlight"
  | "highlightItemOnHover"
  | "itemToStringLabel"
  | "itemToStringValue"
  | "isItemEqualToValue"
  | "selectionMode"
  | "defaultSelectedValue"
  | "selectedValue"
  | "onSelectedValueChange"
  | "actionsRef"
  | "onOpenChange"
  | "onInputValueChange"
  | "onItemHighlighted"
> & {
  /**
   * Whether multiple items can be selected.
   * @default false
   */
  multiple?: Multiple | undefined;
  /**
   * Provides a hint to the browser for autofill.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete
   */
  autoComplete?: string | undefined;
  /**
   * Whether the first matching item is highlighted automatically while filtering.
   * @default false
   */
  autoHighlight?: boolean | undefined;
  /**
   * Whether moving the pointer over items should highlight them.
   * Disabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.
   * @default true
   */
  highlightItemOnHover?: boolean | undefined;
  /**
   * When the item values are objects (`<Combobox.Item value={object}>`), this function converts the object value to a string representation for display in the input.
   * If the shape of the object is `{ value, label }`, the label will be used automatically without needing to specify this prop.
   */
  itemToStringLabel?: ((itemValue: Value) => string) | undefined;
  /**
   * When the item values are objects (`<Combobox.Item value={object}>`), this function converts the object value to a string representation for form submission.
   * If the shape of the object is `{ value, label }`, the value will be used automatically without needing to specify this prop.
   */
  itemToStringValue?: ((itemValue: Value) => string) | undefined;
  /**
   * Custom comparison logic used to determine if a combobox item value matches the current selected value. Useful when item values are objects without matching referentially.
   * Defaults to `Object.is` comparison.
   */
  isItemEqualToValue?:
    | ((itemValue: Value, value: Value) => boolean)
    | undefined;
  /**
   * The uncontrolled selected value of the combobox when it's initially rendered.
   *
   * To render a controlled combobox, use the `value` prop instead.
   */
  defaultValue?: ComboboxValueType<Value, Multiple> | null | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: When specified, the combobox will not be unmounted when closed.
   * Instead, the `unmount` function must be called to unmount the combobox manually.
   * Useful when the combobox's animation is controlled by an external library.
   */
  actionsRef?: React.RefObject<ComboboxRoot.Actions | null> | undefined;
  /**
   * Event handler called when the popup is opened or closed.
   */
  onOpenChange?:
    | ((open: boolean, eventDetails: ComboboxRoot.ChangeEventDetails) => void)
    | undefined;
  /**
   * Event handler called when the input value changes.
   */
  onInputValueChange?:
    | ((
        inputValue: string,
        eventDetails: ComboboxRoot.ChangeEventDetails,
      ) => void)
    | undefined;
  /**
   * Callback fired when an item is highlighted or unhighlighted.
   * Receives the highlighted item value (or `undefined` if no item is highlighted) and event details with a `reason` property describing why the highlight changed.
   * The `reason` can be:
   * - `'keyboard'`: the highlight changed due to keyboard navigation.
   * - `'pointer'`: the highlight changed due to pointer hovering.
   * - `'none'`: the highlight changed programmatically.
   */
  onItemHighlighted?:
    | ((
        highlightedValue: Value | undefined,
        eventDetails: ComboboxRoot.HighlightEventDetails,
      ) => void)
    | undefined;
  /**
   * The selected value of the combobox. Use when controlled.
   */
  value?: ComboboxValueType<Value, Multiple> | null | undefined;
  /**
   * Event handler called when the selected value of the combobox changes.
   */
  onValueChange?:
    | ((
        value:
          | ComboboxValueType<Value, Multiple>
          | (Multiple extends true ? never : null),
        eventDetails: ComboboxRoot.ChangeEventDetails,
      ) => void)
    | undefined;
};
interface ComboboxRootState extends AriaComboboxState {}
type ComboboxRootActions = AriaCombobox.Actions;
type ComboboxRootChangeEventReason = AriaCombobox.ChangeEventReason;
type ComboboxRootChangeEventDetails = AriaCombobox.ChangeEventDetails;
type ComboboxRootHighlightEventReason = AriaCombobox.HighlightEventReason;
type ComboboxRootHighlightEventDetails = AriaCombobox.HighlightEventDetails;
/**
 * Groups all parts of the combobox.
 * Doesn't render its own HTML element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare function ComboboxRoot<
  Value,
  Multiple extends boolean | undefined = false,
>(props: ComboboxRoot.Props<Value, Multiple>): React.JSX.Element;
declare namespace ComboboxRoot {
  type Props<
    Value,
    Multiple extends boolean | undefined = false,
  > = ComboboxRootProps<Value, Multiple>;
  type State = ComboboxRootState;
  type Actions = ComboboxRootActions;
  type ChangeEventReason = ComboboxRootChangeEventReason;
  type ChangeEventDetails = ComboboxRootChangeEventDetails;
  type HighlightEventReason = ComboboxRootHighlightEventReason;
  type HighlightEventDetails = ComboboxRootHighlightEventDetails;
}

type HTMLProps<T = any> = React.HTMLAttributes<T> & {
  ref?: React.Ref<T> | undefined;
};
/**
 * Shape of the render prop: a function that takes props to be spread on the element and component's state and returns a React element.
 *
 * @template Props Props to be spread on the rendered element.
 * @template State Component's internal state.
 */
type ComponentRenderFn<Props, State> = (
  props: Props,
  state: State,
) => React.ReactElement<unknown>;
type BaseUIEvent<E extends React.SyntheticEvent<Element, Event>> = E & {
  preventBaseUIHandler: () => void;
  readonly baseUIHandlerPrevented?: boolean | undefined;
};

type WithPreventBaseUIHandler<T> = T extends (event: infer E) => any
  ? E extends React.SyntheticEvent<Element, Event>
    ? (event: BaseUIEvent<E>) => ReturnType<T>
    : T
  : T extends undefined
    ? undefined
    : T;
/**
 * Adds a `preventBaseUIHandler` method to all event handlers.
 */
type WithBaseUIEvent<T> = { [K in keyof T]: WithPreventBaseUIHandler<T[K]> };
/**
 * Props shared by all Base UI components.
 * Contains `className` (string or callback taking the component's state as an argument) and `render` (function to customize rendering).
 */
type BaseUIComponentProps<
  ElementType extends React.ElementType,
  State,
  RenderFunctionProps = HTMLProps,
> = Omit<
  WithBaseUIEvent<React.ComponentPropsWithRef<ElementType>>,
  "className" | "color" | "defaultValue" | "defaultChecked" | "style"
> & {
  /**
   * CSS class applied to the element, or a function that
   * returns a class based on the component's state.
   */
  className?: string | ((state: State) => string | undefined) | undefined;
  /**
   * Allows you to replace the component's HTML element
   * with a different tag, or compose it with another component.
   *
   * Accepts a `ReactElement` or a function that returns the element to render.
   */
  render?:
    | React.ReactElement
    | ComponentRenderFn<RenderFunctionProps, State>
    | undefined;
  /**
   * Style applied to the element, or a function that
   * returns a style object based on the component's state.
   */
  style?:
    | React.CSSProperties
    | ((state: State) => React.CSSProperties | undefined)
    | undefined;
};
interface NativeButtonProps {
  /**
   * Whether the component renders a native `<button>` element when replacing it
   * via the `render` prop.
   * Set to `false` if the rendered element is not a button (for example, `<div>`).
   * @default true
   */
  nativeButton?: boolean | undefined;
}
interface NonNativeButtonProps {
  /**
   * Whether the component renders a native `<button>` element when replacing it
   * via the `render` prop.
   * Set to `true` if the rendered element is a native button.
   * @default false
   */
  nativeButton?: boolean | undefined;
}
type Orientation = "horizontal" | "vertical";

type Errors = Record<string, string | string[]>;
interface FormContext {
  errors: Errors;
  clearErrors: (name: string | undefined) => void;
  formRef: React.RefObject<{
    fields: Map<
      string,
      {
        name: string | undefined;
        /**
         * After this returns, the field registry entry reflects the latest synchronous
         * validity verdict. Async validators do not block submit.
         */
        validate: () => void;
        validityData: FieldValidityData;
        controlRef: React.RefObject<HTMLElement | null>;
        getValue: () => unknown;
      }
    >;
  }>;
  validationMode: Form.ValidationMode;
  submitAttemptedRef: React.RefObject<boolean>;
}
declare const FormContext: React.Context<FormContext>;

type FormSubmitEventReason = typeof none;
type FormSubmitEventDetails = BaseUIGenericEventDetails<Form.SubmitEventReason>;
type FormValidationMode = "onSubmit" | "onBlur" | "onChange";
interface FormActions {
  validate: (fieldName?: string | undefined) => void;
}
interface FormState {}
interface FormProps<
  FormValues extends Record<string, any> = Record<string, any>,
> extends BaseUIComponentProps<"form", FormState> {
  /**
   * Determines when the form should be validated.
   * The `validationMode` prop on `<Field.Root>` takes precedence over this.
   *
   * - `onSubmit` (default): validates the field when the form is submitted, afterwards fields will re-validate on change.
   * - `onBlur`: validates a field when it loses focus.
   * - `onChange`: validates the field on every change to its value.
   *
   * @default 'onSubmit'
   */
  validationMode?: FormValidationMode | undefined;
  /**
   * Validation errors returned externally, typically after submission by a server or a form action.
   * This should be an object where keys correspond to the `name` attribute on `<Field.Root>`,
   * and values correspond to error(s) related to that field.
   */
  errors?: FormContext["errors"] | undefined;
  /**
   * Event handler called when the form is submitted.
   * `preventDefault()` is called on the native submit event when used.
   */
  onFormSubmit?:
    | ((formValues: FormValues, eventDetails: Form.SubmitEventDetails) => void)
    | undefined;
  /**
   * A ref to imperative actions.
   * - `validate`: Validates all fields when called. Optionally pass a field name to validate a single field.
   * @example
   * ```tsx
   * // validate all fields
   * actionsRef.current.validate();
   *
   * // validate one field
   * actionsRef.current.validate('email');
   * ```
   */
  actionsRef?: React.RefObject<Form.Actions | null> | undefined;
}
/**
 * A native form element with consolidated error handling.
 * Renders a `<form>` element.
 *
 * Documentation: [Base UI Form](https://base-ui.com/react/components/form)
 */
declare const Form: {
  <FormValues extends Record<string, any> = Record<string, any>>(
    props: Form.Props<FormValues> & {
      ref?: React.Ref<HTMLFormElement> | undefined;
    },
  ): React.JSX.Element;
};
declare namespace Form {
  type Props<FormValues extends Record<string, any> = Record<string, any>> =
    FormProps<FormValues>;
  type State = FormState;
  type Actions = FormActions;
  type ValidationMode = FormValidationMode;
  type SubmitEventReason = FormSubmitEventReason;
  type SubmitEventDetails = FormSubmitEventDetails;
  type Values<FormValues extends Record<string, any> = Record<string, any>> =
    FormValues;
}

interface FieldValidityData {
  state: {
    badInput: boolean;
    customError: boolean;
    patternMismatch: boolean;
    rangeOverflow: boolean;
    rangeUnderflow: boolean;
    stepMismatch: boolean;
    tooLong: boolean;
    tooShort: boolean;
    typeMismatch: boolean;
    valueMissing: boolean;
    valid: boolean | null;
  };
  error: string;
  errors: string[];
  value: unknown;
  initialValue: unknown;
}
interface FieldRootActions {
  validate: () => void;
}
interface FieldRootState {
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the field has been touched.
   */
  touched: boolean;
  /**
   * Whether the field value has changed from its initial value.
   */
  dirty: boolean;
  /**
   * Whether the field is valid.
   */
  valid: boolean | null;
  /**
   * Whether the field has a value.
   */
  filled: boolean;
  /**
   * Whether the field is focused.
   */
  focused: boolean;
}
interface FieldRootProps extends BaseUIComponentProps<"div", FieldRootState> {
  /**
   * Whether the component should ignore user interaction.
   * Takes precedence over the `disabled` prop on the `<Field.Control>` component.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Identifies the field when a form is submitted.
   * Takes precedence over the `name` prop on the `<Field.Control>` component.
   */
  name?: string | undefined;
  /**
   * A function for custom validation. Return a string or an array of strings with
   * the error message(s) if the value is invalid, or `null` if the value is valid.
   * Asynchronous functions are supported, but they do not prevent form submission
   * when using `validationMode="onSubmit"`.
   */
  validate?:
    | ((
        value: unknown,
        formValues: Form.Values,
      ) => string | string[] | null | Promise<string | string[] | null>)
    | undefined;
  /**
   * Determines when the field should be validated.
   * This takes precedence over the `validationMode` prop on `<Form>`.
   *
   * - `onSubmit`: triggers validation when the form is submitted, and re-validates on change after submission.
   * - `onBlur`: triggers validation when the control loses focus.
   * - `onChange`: triggers validation on every change to the control value.
   *
   * @default 'onSubmit'
   */
  validationMode?: Form.ValidationMode | undefined;
  /**
   * How long to wait between `validate` callbacks if
   * `validationMode="onChange"` is used. Specified in milliseconds.
   * @default 0
   */
  validationDebounceTime?: number | undefined;
  /**
   * Whether the field is invalid.
   * Useful when the field state is controlled by an external library.
   */
  invalid?: boolean | undefined;
  /**
   * Whether the field's value has been changed from its initial value.
   * Useful when the field state is controlled by an external library.
   */
  dirty?: boolean | undefined;
  /**
   * Whether the field has been touched.
   * Useful when the field state is controlled by an external library.
   */
  touched?: boolean | undefined;
  /**
   * A ref to imperative actions.
   * - `validate`: Validates the field when called.
   */
  actionsRef?: React.RefObject<FieldRoot.Actions | null> | undefined;
}
/**
 * Groups all parts of the field.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */
declare const FieldRoot: React.ForwardRefExoticComponent<
  Omit<FieldRootProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace FieldRoot {
  type State = FieldRootState;
  type Props = FieldRootProps;
  type Actions = FieldRootActions;
}

type ComboboxLabelState = FieldRoot.State;
interface ComboboxLabelProps extends Omit<
  BaseUIComponentProps<"div", ComboboxLabel.State>,
  "id"
> {}
/**
 * An accessible label that is automatically associated with the combobox trigger.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxLabel: React.ForwardRefExoticComponent<
  Omit<ComboboxLabelProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxLabel {
  type State = ComboboxLabelState;
  type Props = ComboboxLabelProps;
}

interface ComboboxValueState {}
interface ComboboxValueProps {
  children?: React.ReactNode | ((selectedValue: any) => React.ReactNode);
  /**
   * The placeholder value to display when no value is selected.
   * This is overridden by `children` if specified, or by a null item's label in `items`.
   */
  placeholder?: React.ReactNode;
}
/**
 * The current value of the combobox.
 * Doesn't render its own HTML element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare function ComboboxValue(props: ComboboxValue.Props): React.ReactElement;
declare namespace ComboboxValue {
  type State = ComboboxValueState;
  type Props = ComboboxValueProps;
}

declare type Axis = "x" | "y";

declare type ClientRectObject = Prettify<Rect & SideObject>;

declare type Coords = {
  [key in Axis]: number;
};

declare type Dimensions = {
  [key in Length]: number;
};

declare type Length = "width" | "height";

declare type Padding = number | Prettify<Partial<SideObject>>;

declare type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

declare type Rect = Prettify<Coords & Dimensions>;

declare type Side$1 = "top" | "right" | "bottom" | "left";

declare type SideObject = {
  [key in Side$1]: number;
};

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */
declare interface VirtualElement {
  getBoundingClientRect(): ClientRectObject;
  getClientRects?(): Array<ClientRectObject> | DOMRectList;
  contextElement?: Element;
}

type TransitionStatus = "starting" | "ending" | "idle" | undefined;

type InteractionType = "mouse" | "touch" | "pen" | "keyboard" | "";

interface UseRenderElementComponentProps<State> {
  /**
   * The class name to apply to the rendered element.
   * Can be a string or a function that accepts the state and returns a string.
   */
  className?: string | ((state: State) => string | undefined) | undefined;
  /**
   * The render prop or React element to override the default element.
   */
  render?:
    | undefined
    | React.ReactElement
    | ComponentRenderFn<React.HTMLAttributes<any>, State>;
  /**
   * The style to apply to the rendered element.
   * Can be a style object or a function that accepts the state and returns a style object.
   */
  style?:
    | React.CSSProperties
    | ((state: State) => React.CSSProperties | undefined)
    | undefined;
}

interface UseFloatingPortalNodeProps {
  ref?: React.Ref<HTMLDivElement> | undefined;
  container?:
    | HTMLElement
    | ShadowRoot
    | null
    | React.RefObject<HTMLElement | ShadowRoot | null>
    | undefined;
  componentProps?: UseRenderElementComponentProps<any> | undefined;
  elementProps?: React.HTMLAttributes<HTMLDivElement> | undefined;
}
interface FloatingPortalState {}
/**
 * Portals the floating element into a given container element — by default,
 * outside of the app root and into the body.
 * This is necessary to ensure the floating element can appear outside any
 * potential parent containers that cause clipping (such as `overflow: hidden`),
 * while retaining its location in the React tree.
 * @see https://floating-ui.com/docs/FloatingPortal
 * @internal
 */
declare const FloatingPortal: React.ForwardRefExoticComponent<
  Omit<
    FloatingPortal.Props<any> & {
      renderGuards?: boolean | undefined;
    },
    "ref"
  > &
    React.RefAttributes<HTMLDivElement>
>;
declare namespace FloatingPortal {
  type State = FloatingPortalState;
  interface Props<TState> extends BaseUIComponentProps<"div", TState> {
    /**
     * A parent element to render the portal element into.
     */
    container?: UseFloatingPortalNodeProps["container"] | undefined;
  }
}

type Side = "top" | "bottom" | "left" | "right" | "inline-end" | "inline-start";
type Align = "start" | "center" | "end";
type Boundary = "clipping-ancestors" | Element | Element[] | Rect;
type OffsetFunction = (data: {
  side: Side;
  align: Align;
  anchor: {
    width: number;
    height: number;
  };
  positioner: {
    width: number;
    height: number;
  };
}) => number;
interface SideFlipMode {
  /**
   * How to avoid collisions on the side axis.
   * - `'flip'`: If there is not enough space, place the popup on the opposite side.
   * - `'none'`: Keep the preferred side even if it overflows.
   */
  side?: "flip" | "none" | undefined;
  /**
   * How to avoid collisions on the align axis.
   * - `'flip'`: If there is not enough space, swap `'start'` and `'end'` alignment.
   * - `'shift'`: Keep the alignment and shift the popup to fit within the boundary.
   * - `'none'`: Keep the preferred alignment even if it overflows.
   */
  align?: "flip" | "shift" | "none" | undefined;
  /**
   * If both sides on the preferred axis do not fit, determines whether to fallback
   * to a side on the perpendicular axis and which logical side to prefer.
   * - `'start'`: Prefer the logical start side on the perpendicular axis.
   * - `'end'`: Prefer the logical end side on the perpendicular axis.
   * - `'none'`: Do not fallback to the perpendicular axis.
   */
  fallbackAxisSide?: "start" | "end" | "none" | undefined;
}
interface SideShiftMode {
  /**
   * How to avoid collisions on the side axis.
   * - `'shift'`: Keep the preferred side and shift the popup to fit within the boundary.
   * - `'none'`: Keep the preferred side even if it overflows.
   */
  side?: "shift" | "none" | undefined;
  /**
   * How to avoid collisions on the align axis.
   * - `'shift'`: Keep the alignment and shift the popup to fit within the boundary.
   * - `'none'`: Keep the preferred alignment even if it overflows.
   */
  align?: "shift" | "none" | undefined;
  /**
   * If both sides on the preferred axis do not fit, determines whether to fallback
   * to a side on the perpendicular axis and which logical side to prefer.
   * - `'start'`: Prefer the logical start side on the perpendicular axis.
   * - `'end'`: Prefer the logical end side on the perpendicular axis.
   * - `'none'`: Do not fallback to the perpendicular axis.
   */
  fallbackAxisSide?: "start" | "end" | "none" | undefined;
}
type CollisionAvoidance = SideFlipMode | SideShiftMode;
interface UseAnchorPositioningSharedParameters {
  /**
   * An element to position the popup against.
   * By default, the popup will be positioned against the trigger.
   */
  anchor?:
    | Element
    | null
    | VirtualElement
    | React.RefObject<Element | null>
    | (() => Element | VirtualElement | null)
    | undefined;
  /**
   * Determines which CSS `position` property to use.
   * @default 'absolute'
   */
  positionMethod?: "absolute" | "fixed" | undefined;
  /**
   * Which side of the anchor element to align the popup against.
   * May automatically change to avoid collisions.
   * @default 'bottom'
   */
  side?: Side | undefined;
  /**
   * Distance between the anchor and the popup in pixels.
   * Also accepts a function that returns the distance to read the dimensions of the anchor
   * and positioner elements, along with its side and alignment.
   *
   * The function takes a `data` object parameter with the following properties:
   * - `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.
   * - `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.
   * - `data.side`: which side of the anchor element the positioner is aligned against.
   * - `data.align`: how the positioner is aligned relative to the specified side.
   *
   * @example
   * ```jsx
   * <Positioner
   *   sideOffset={({ side, align, anchor, positioner }) => {
   *     return side === 'top' || side === 'bottom'
   *       ? anchor.height
   *       : anchor.width;
   *   }}
   * />
   * ```
   *
   * @default 0
   */
  sideOffset?: number | OffsetFunction | undefined;
  /**
   * How to align the popup relative to the specified side.
   * @default 'center'
   */
  align?: Align | undefined;
  /**
   * Additional offset along the alignment axis in pixels.
   * Also accepts a function that returns the offset to read the dimensions of the anchor
   * and positioner elements, along with its side and alignment.
   *
   * The function takes a `data` object parameter with the following properties:
   * - `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.
   * - `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.
   * - `data.side`: which side of the anchor element the positioner is aligned against.
   * - `data.align`: how the positioner is aligned relative to the specified side.
   *
   * @example
   * ```jsx
   * <Positioner
   *   alignOffset={({ side, align, anchor, positioner }) => {
   *     return side === 'top' || side === 'bottom'
   *       ? anchor.width
   *       : anchor.height;
   *   }}
   * />
   * ```
   *
   * @default 0
   */
  alignOffset?: number | OffsetFunction | undefined;
  /**
   * An element or a rectangle that delimits the area that the popup is confined to.
   * @default 'clipping-ancestors'
   */
  collisionBoundary?: Boundary | undefined;
  /**
   * Additional space to maintain from the edge of the collision boundary.
   * @default 5
   */
  collisionPadding?: Padding | undefined;
  /**
   * Whether to maintain the popup in the viewport after
   * the anchor element was scrolled out of view.
   * @default false
   */
  sticky?: boolean | undefined;
  /**
   * Minimum distance to maintain between the arrow and the edges of the popup.
   *
   * Use it to prevent the arrow element from hanging out of the rounded corners of a popup.
   * @default 5
   */
  arrowPadding?: number | undefined;
  /**
   * Whether to disable the popup from tracking any layout shift of its positioning anchor.
   * @default false
   */
  disableAnchorTracking?: boolean | undefined;
  /**
   * Determines how to handle collisions when positioning the popup.
   *
   * `side` controls overflow on the preferred placement axis (`top`/`bottom` or `left`/`right`):
   * - `'flip'`: keep the requested side when it fits; otherwise try the opposite side
   *   (`top` and `bottom`, or `left` and `right`).
   * - `'shift'`: never change side; keep the requested side and move the popup within
   *   the clipping boundary so it stays visible.
   * - `'none'`: do not correct side-axis overflow.
   *
   * `align` controls overflow on the alignment axis (`start`/`center`/`end`):
   * - `'flip'`: keep side, but swap `start` and `end` when the requested alignment overflows.
   * - `'shift'`: keep side and requested alignment, then nudge the popup along the
   *   alignment axis to fit.
   * - `'none'`: do not correct alignment-axis overflow.
   *
   * `fallbackAxisSide` controls fallback behavior on the perpendicular axis when the
   * preferred axis cannot fit:
   * - `'start'`: allow perpendicular fallback and try the logical start side first
   *   (`top` before `bottom`, or `left` before `right` in LTR).
   * - `'end'`: allow perpendicular fallback and try the logical end side first
   *   (`bottom` before `top`, or `right` before `left` in LTR).
   * - `'none'`: do not fallback to the perpendicular axis.
   *
   * When `side` is `'shift'`, explicitly setting `align` only supports `'shift'` or `'none'`.
   * If `align` is omitted, it defaults to `'flip'`.
   *
   * @example
   * ```jsx
   * <Positioner
   *   collisionAvoidance={{
   *     side: 'shift',
   *     align: 'shift',
   *     fallbackAxisSide: 'none',
   *   }}
   * />
   * ```
   *
   */
  collisionAvoidance?: CollisionAvoidance | undefined;
}

interface ComboboxInputState extends FieldRootState {
  /**
   * Whether the corresponding popup is open.
   */
  open: boolean;
  /**
   * Indicates which side the corresponding popup is positioned relative to its anchor.
   */
  popupSide: Side | null;
  /**
   * Present when the corresponding items list is empty.
   */
  listEmpty: boolean;
  /**
   * Whether the component should ignore user edits.
   */
  readOnly: boolean;
}
interface ComboboxInputProps extends BaseUIComponentProps<
  "input",
  ComboboxInputState
> {
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
}
/**
 * A text input to search for items in the list.
 * Renders an `<input>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxInput: React.ForwardRefExoticComponent<
  Omit<ComboboxInputProps, "ref"> & React.RefAttributes<HTMLInputElement>
>;
declare namespace ComboboxInput {
  type State = ComboboxInputState;
  type Props = ComboboxInputProps;
}

interface ComboboxInputGroupState extends FieldRoot.State {
  /**
   * Whether the corresponding popup is open.
   */
  open: boolean;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the component should ignore user edits.
   */
  readOnly: boolean;
  /**
   * Indicates which side the corresponding popup is positioned relative to its anchor.
   */
  popupSide: Side | null;
  /**
   * Present when the corresponding items list is empty.
   */
  listEmpty: boolean;
  /**
   * Whether the combobox doesn't have a value.
   */
  placeholder: boolean;
}
interface ComboboxInputGroupProps extends BaseUIComponentProps<
  "div",
  ComboboxInputGroup.State
> {}
/**
 * A wrapper for the input and its associated controls.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxInputGroup: React.ForwardRefExoticComponent<
  Omit<ComboboxInputGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxInputGroup {
  type State = ComboboxInputGroupState;
  type Props = ComboboxInputGroupProps;
}

interface ComboboxTriggerState extends FieldRootState {
  /**
   * Whether the popup is open.
   */
  open: boolean;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Indicates which side the corresponding popup is positioned relative to its anchor.
   */
  popupSide: Side | null;
  /**
   * Present when the corresponding items list is empty.
   */
  listEmpty: boolean;
  /**
   * Whether the combobox doesn't have a value.
   */
  placeholder: boolean;
}
interface ComboboxTriggerProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", ComboboxTriggerState> {
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
}
/**
 * A button that opens the popup.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxTrigger: React.ForwardRefExoticComponent<
  Omit<ComboboxTriggerProps, "ref"> & React.RefAttributes<HTMLButtonElement>
>;
declare namespace ComboboxTrigger {
  type State = ComboboxTriggerState;
  type Props = ComboboxTriggerProps;
}

interface ComboboxListState {
  /**
   * Whether the list is empty.
   */
  empty: boolean;
}
interface ComboboxListProps extends Omit<
  BaseUIComponentProps<"div", ComboboxListState>,
  "children"
> {
  children?: React.ReactNode | ((item: any, index: number) => React.ReactNode);
}
/**
 * A list container for the items.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxList: React.ForwardRefExoticComponent<
  Omit<ComboboxListProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxList {
  type State = ComboboxListState;
  type Props = ComboboxListProps;
}

interface ComboboxStatusState {}
interface ComboboxStatusProps extends BaseUIComponentProps<
  "div",
  ComboboxStatusState
> {}
/**
 * Displays a status message whose content changes are announced politely to screen readers.
 * Useful for conveying the status of an asynchronously loaded list.
 * This component's root element must remain mounted in the DOM to announce
 * changes consistently across screen readers. Avoid hiding or removing the
 * component itself with `display: none`, `hidden`, `aria-hidden`, or conditional
 * rendering. Prefer updating or conditionally rendering its children instead.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxStatus: React.ForwardRefExoticComponent<
  Omit<ComboboxStatusProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxStatus {
  type State = ComboboxStatusState;
  type Props = ComboboxStatusProps;
}

interface ComboboxPortalState {}
interface ComboboxPortalProps extends FloatingPortal.Props<ComboboxPortalState> {
  /**
   * Whether to keep the portal mounted in the DOM while the popup is hidden.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxPortal: React.ForwardRefExoticComponent<
  Omit<ComboboxPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxPortal {
  type State = ComboboxPortalState;
  type Props = ComboboxPortalProps;
}

interface ComboboxBackdropProps extends BaseUIComponentProps<
  "div",
  ComboboxBackdropState
> {}
interface ComboboxBackdropState {
  /**
   * Whether the popup is currently open.
   */
  open: boolean;
  /**
   * The transition status of the component.
   */
  transitionStatus: TransitionStatus;
}
/**
 * An overlay displayed beneath the popup.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxBackdrop: React.ForwardRefExoticComponent<
  Omit<ComboboxBackdropProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxBackdrop {
  type Props = ComboboxBackdropProps;
  type State = ComboboxBackdropState;
}

interface ComboboxPositionerState {
  /**
   * Whether the popup is currently open.
   */
  open: boolean;
  /**
   * The side of the anchor the component is placed on.
   */
  side: Side;
  /**
   * The alignment of the component relative to the anchor.
   */
  align: Align;
  /**
   * Whether the anchor element is hidden.
   */
  anchorHidden: boolean;
  /**
   * Whether there are no items to display.
   */
  empty: boolean;
}
interface ComboboxPositionerProps
  extends
    UseAnchorPositioningSharedParameters,
    BaseUIComponentProps<"div", ComboboxPositionerState> {}
/**
 * Positions the popup against the trigger.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxPositioner: React.ForwardRefExoticComponent<
  Omit<ComboboxPositionerProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxPositioner {
  type State = ComboboxPositionerState;
  type Props = ComboboxPositionerProps;
}

interface ComboboxPopupState {
  /**
   * Whether the component is open.
   */
  open: boolean;
  /**
   * The side of the anchor the component is placed on.
   */
  side: Side;
  /**
   * The alignment of the component relative to the anchor.
   */
  align: Align;
  /**
   * Whether the anchor element is hidden.
   */
  anchorHidden: boolean;
  /**
   * The transition status of the component.
   */
  transitionStatus: TransitionStatus;
  /**
   * Whether there are no items to display.
   */
  empty: boolean;
}
interface ComboboxPopupProps extends BaseUIComponentProps<
  "div",
  ComboboxPopupState
> {
  /**
   * Determines the element to focus when the popup is opened.
   *
   * - `false`: Do not move focus.
   * - `true`: Move focus based on the default behavior (first tabbable element or popup).
   * - `RefObject`: Move focus to the ref element.
   * - `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).
   *   Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.
   */
  initialFocus?:
    | boolean
    | React.RefObject<HTMLElement | null>
    | ((openType: InteractionType) => void | boolean | HTMLElement | null)
    | undefined;
  /**
   * Determines the element to focus when the popup is closed.
   *
   * - `false`: Do not move focus.
   * - `true`: Move focus based on the default behavior (trigger or previously focused element).
   * - `RefObject`: Move focus to the ref element.
   * - `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).
   *   Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.
   */
  finalFocus?:
    | boolean
    | React.RefObject<HTMLElement | null>
    | ((closeType: InteractionType) => void | boolean | HTMLElement | null)
    | undefined;
}
/**
 * A container for the list.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxPopup: React.ForwardRefExoticComponent<
  Omit<ComboboxPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxPopup {
  type State = ComboboxPopupState;
  type Props = ComboboxPopupProps;
}

interface ComboboxArrowState {
  /**
   * Whether the popup is currently open.
   */
  open: boolean;
  /**
   * The side of the anchor the component is placed on.
   */
  side: Side;
  /**
   * The alignment of the component relative to the anchor.
   */
  align: Align;
  /**
   * Whether the arrow cannot be centered on the anchor.
   */
  uncentered: boolean;
}
interface ComboboxArrowProps extends BaseUIComponentProps<
  "div",
  ComboboxArrowState
> {}
/**
 * Displays an element positioned against the anchor.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxArrow: React.ForwardRefExoticComponent<
  Omit<ComboboxArrowProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxArrow {
  type State = ComboboxArrowState;
  type Props = ComboboxArrowProps;
}

interface ComboboxIconState {}
interface ComboboxIconProps extends BaseUIComponentProps<
  "span",
  ComboboxIconState
> {}
/**
 * An icon that indicates that the trigger button opens the popup.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxIcon: React.ForwardRefExoticComponent<
  Omit<ComboboxIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>
>;
declare namespace ComboboxIcon {
  type State = ComboboxIconState;
  type Props = ComboboxIconProps;
}

interface ComboboxGroupState {}
interface ComboboxGroupProps extends BaseUIComponentProps<
  "div",
  ComboboxGroupState
> {
  /**
   * Items to be rendered within this group.
   * When provided, child `Collection` components will use these items.
   */
  items?: readonly any[] | undefined;
}
/**
 * Groups related items with the corresponding label.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxGroup: React.ForwardRefExoticComponent<
  Omit<ComboboxGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxGroup {
  type State = ComboboxGroupState;
  type Props = ComboboxGroupProps;
}

interface ComboboxGroupLabelState {}
interface ComboboxGroupLabelProps extends BaseUIComponentProps<
  "div",
  ComboboxGroupLabelState
> {}
/**
 * An accessible label that is automatically associated with its parent group.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxGroupLabel: React.ForwardRefExoticComponent<
  Omit<ComboboxGroupLabelProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxGroupLabel {
  type State = ComboboxGroupLabelState;
  type Props = ComboboxGroupLabelProps;
}

interface ComboboxItemState {
  /**
   * Whether the item should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the item is selected.
   */
  selected: boolean;
  /**
   * Whether the item is highlighted.
   */
  highlighted: boolean;
}
interface ComboboxItemProps
  extends
    NonNativeButtonProps,
    Omit<BaseUIComponentProps<"div", ComboboxItemState>, "id"> {
  children?: React.ReactNode;
  /**
   * An optional click handler for the item when selected.
   * It fires when clicking the item with the pointer, as well as when pressing `Enter` with the keyboard if the item is highlighted when the `Input` or `List` element has focus.
   */
  onClick?:
    | BaseUIComponentProps<"div", ComboboxItemState>["onClick"]
    | undefined;
  /**
   * The index of the item in the list. Improves performance when specified by avoiding the need to calculate the index automatically from the DOM.
   */
  index?: number | undefined;
  /**
   * A unique value that identifies this item.
   * @default null
   */
  value?: any;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
}
/**
 * An individual item in the list.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxItem: React.NamedExoticComponent<
  Omit<ComboboxItemProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxItem {
  type State = ComboboxItemState;
  type Props = ComboboxItemProps;
}

interface ComboboxItemIndicatorProps extends BaseUIComponentProps<
  "span",
  ComboboxItemIndicatorState
> {
  children?: React.ReactNode;
  /**
   * Whether to keep the HTML element in the DOM when the item is not selected.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
interface ComboboxItemIndicatorState {
  /**
   * Whether the item is selected.
   */
  selected: boolean;
  /**
   * The transition status of the component.
   */
  transitionStatus: TransitionStatus;
}
/**
 * Indicates whether the item is selected.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxItemIndicator: React.ForwardRefExoticComponent<
  Omit<ComboboxItemIndicatorProps, "ref"> & React.RefAttributes<HTMLSpanElement>
>;
declare namespace ComboboxItemIndicator {
  type Props = ComboboxItemIndicatorProps;
  type State = ComboboxItemIndicatorState;
}

interface ComboboxChipsState {}
interface ComboboxChipsProps extends BaseUIComponentProps<
  "div",
  ComboboxChipsState
> {}
/**
 * A container for the chips in a multiselectable input.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxChips: React.ForwardRefExoticComponent<
  Omit<ComboboxChipsProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxChips {
  type State = ComboboxChipsState;
  type Props = ComboboxChipsProps;
}

interface ComboboxChipState {
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
}
interface ComboboxChipProps extends BaseUIComponentProps<
  "div",
  ComboboxChipState
> {}
/**
 * An individual chip that represents a value in a multiselectable input.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxChip: React.ForwardRefExoticComponent<
  Omit<ComboboxChipProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxChip {
  type State = ComboboxChipState;
  type Props = ComboboxChipProps;
}

interface ComboboxChipRemoveState {
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
}
interface ComboboxChipRemoveProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", ComboboxChipRemoveState> {}
/**
 * A button to remove a chip.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxChipRemove: React.ForwardRefExoticComponent<
  Omit<ComboboxChipRemoveProps, "ref"> & React.RefAttributes<HTMLButtonElement>
>;
declare namespace ComboboxChipRemove {
  type State = ComboboxChipRemoveState;
  type Props = ComboboxChipRemoveProps;
}

interface ComboboxRowState {}
interface ComboboxRowProps extends BaseUIComponentProps<
  "div",
  ComboboxRowState
> {}
/**
 * Displays a single row of items in a grid list.
 * Enable `grid` on the root component to turn the listbox into a grid.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxRow: React.ForwardRefExoticComponent<
  Omit<ComboboxRowProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxRow {
  type State = ComboboxRowState;
  type Props = ComboboxRowProps;
}

interface ComboboxCollectionState {}
interface ComboboxCollectionProps {
  children: (item: any, index: number) => React.ReactNode;
}
/**
 * Renders filtered list items.
 * Doesn't render its own HTML element.
 *
 * If rendering a flat list, pass a function child to the `List` component instead, which implicitly wraps it.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare function ComboboxCollection(
  props: ComboboxCollection.Props,
): React.JSX.Element | null;
declare namespace ComboboxCollection {
  type State = ComboboxCollectionState;
  type Props = ComboboxCollectionProps;
}

interface ComboboxEmptyState {}
interface ComboboxEmptyProps extends BaseUIComponentProps<
  "div",
  ComboboxEmptyState
> {}
/**
 * Renders its children only when the list is empty.
 * Requires the `items` prop on the root component.
 * Announces changes politely to screen readers.
 * This component's root element must remain mounted in the DOM to announce
 * changes consistently across screen readers. Avoid hiding or removing the
 * component itself with `display: none`, `hidden`, `aria-hidden`, or conditional
 * rendering. Prefer updating or conditionally rendering its children instead.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxEmpty: React.ForwardRefExoticComponent<
  Omit<ComboboxEmptyProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxEmpty {
  type State = ComboboxEmptyState;
  type Props = ComboboxEmptyProps;
}

interface ComboboxClearState {
  /**
   * Whether the popup is open.
   */
  open: boolean;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the clear button should be visible.
   */
  visible: boolean;
  /**
   * The transition status of the component.
   */
  transitionStatus: TransitionStatus;
}
interface ComboboxClearProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", ComboboxClearState> {
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Whether the component should remain mounted in the DOM when not visible.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
/**
 * Clears the value when clicked.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare const ComboboxClear: React.ForwardRefExoticComponent<
  Omit<ComboboxClearProps, "ref"> & React.RefAttributes<HTMLButtonElement>
>;
declare namespace ComboboxClear {
  type State = ComboboxClearState;
  type Props = ComboboxClearProps;
}

interface SeparatorProps extends BaseUIComponentProps<"div", SeparatorState> {
  /**
   * The orientation of the separator.
   * @default 'horizontal'
   */
  orientation?: Orientation | undefined;
}
interface SeparatorState {
  /**
   * The orientation of the separator.
   */
  orientation: Orientation;
}
/**
 * A separator element accessible to screen readers.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Separator](https://base-ui.com/react/components/separator)
 */
declare const Separator: React.ForwardRefExoticComponent<
  Omit<SeparatorProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace Separator {
  type Props = SeparatorProps;
  type State = SeparatorState;
}

interface GetFilterParameters extends Intl.CollatorOptions {
  /**
   * The locale to use for string comparison.
   * Defaults to the user's runtime locale.
   */
  locale?: Intl.LocalesArgument | undefined;
}
interface Filter {
  /** Returns whether the item matches the query anywhere. */
  contains: <Item>(
    item: Item,
    query: string,
    itemToString?: (item: Item) => string,
  ) => boolean;
  /** Returns whether the item starts with the query. */
  startsWith: <Item>(
    item: Item,
    query: string,
    itemToString?: (item: Item) => string,
  ) => boolean;
  /** Returns whether the item ends with the query. */
  endsWith: <Item>(
    item: Item,
    query: string,
    itemToString?: (item: Item) => string,
  ) => boolean;
}

interface UseComboboxFilterOptions extends GetFilterParameters {
  /**
   * Whether the combobox is in multiple selection mode.
   * @default false
   */
  multiple?: boolean | undefined;
  /**
   * The current value of the combobox.
   */
  value?: any;
}
/**
 * Matches items against a query using `Intl.Collator` for robust string matching.
 */
declare function useComboboxFilter(options?: UseComboboxFilterOptions): Filter;

/**
 * Returns the internally filtered items.
 */
declare function useFilteredItems<T>(): T[];

declare namespace index_parts {
  export {
    ComboboxArrow as Arrow,
    ComboboxBackdrop as Backdrop,
    ComboboxChip as Chip,
    ComboboxChipRemove as ChipRemove,
    ComboboxChips as Chips,
    ComboboxClear as Clear,
    ComboboxCollection as Collection,
    ComboboxEmpty as Empty,
    ComboboxGroup as Group,
    ComboboxGroupLabel as GroupLabel,
    ComboboxIcon as Icon,
    ComboboxInput as Input,
    ComboboxInputGroup as InputGroup,
    ComboboxItem as Item,
    ComboboxItemIndicator as ItemIndicator,
    ComboboxLabel as Label,
    ComboboxList as List,
    ComboboxPopup as Popup,
    ComboboxPortal as Portal,
    ComboboxPositioner as Positioner,
    ComboboxRoot as Root,
    ComboboxRow as Row,
    Separator,
    ComboboxStatus as Status,
    ComboboxTrigger as Trigger,
    ComboboxValue as Value,
    useComboboxFilter as useFilter,
    useFilteredItems,
  };
}

export {
  index_parts as Combobox,
  ComboboxArrow,
  type ComboboxArrowProps,
  type ComboboxArrowState,
  ComboboxBackdrop,
  type ComboboxBackdropProps,
  type ComboboxBackdropState,
  ComboboxChip,
  type ComboboxChipProps,
  ComboboxChipRemove,
  type ComboboxChipRemoveProps,
  type ComboboxChipRemoveState,
  type ComboboxChipState,
  ComboboxChips,
  type ComboboxChipsProps,
  type ComboboxChipsState,
  ComboboxClear,
  type ComboboxClearProps,
  type ComboboxClearState,
  ComboboxCollection,
  type ComboboxCollectionProps,
  type ComboboxCollectionState,
  ComboboxEmpty,
  type ComboboxEmptyProps,
  type ComboboxEmptyState,
  type Filter as ComboboxFilter,
  type UseComboboxFilterOptions as ComboboxFilterOptions,
  ComboboxGroup,
  ComboboxGroupLabel,
  type ComboboxGroupLabelProps,
  type ComboboxGroupLabelState,
  type ComboboxGroupProps,
  type ComboboxGroupState,
  ComboboxIcon,
  type ComboboxIconProps,
  type ComboboxIconState,
  ComboboxInput,
  ComboboxInputGroup,
  type ComboboxInputGroupProps,
  type ComboboxInputGroupState,
  type ComboboxInputProps,
  type ComboboxInputState,
  ComboboxItem,
  ComboboxItemIndicator,
  type ComboboxItemIndicatorProps,
  type ComboboxItemIndicatorState,
  type ComboboxItemProps,
  type ComboboxItemState,
  ComboboxLabel,
  type ComboboxLabelProps,
  type ComboboxLabelState,
  ComboboxList,
  type ComboboxListProps,
  type ComboboxListState,
  ComboboxPopup,
  type ComboboxPopupProps,
  type ComboboxPopupState,
  ComboboxPortal,
  type ComboboxPortalProps,
  type ComboboxPortalState,
  ComboboxPositioner,
  type ComboboxPositionerProps,
  type ComboboxPositionerState,
  ComboboxRoot,
  type ComboboxRootActions,
  type ComboboxRootChangeEventDetails,
  type ComboboxRootChangeEventReason,
  type ComboboxRootHighlightEventDetails,
  type ComboboxRootHighlightEventReason,
  type ComboboxRootProps,
  type ComboboxRootState,
  ComboboxRow,
  type ComboboxRowProps,
  type ComboboxRowState,
  ComboboxStatus,
  type ComboboxStatusProps,
  type ComboboxStatusState,
  ComboboxTrigger,
  type ComboboxTriggerProps,
  type ComboboxTriggerState,
  ComboboxValue,
  type ComboboxValueProps,
  type ComboboxValueState,
};
