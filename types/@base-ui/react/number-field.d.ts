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

type Direction = -1 | 1;
interface ChangeEventCustomProperties {
  direction?: Direction | undefined;
}

interface NumberFieldRootProps extends Omit<
  BaseUIComponentProps<"div", NumberFieldRootState>,
  "onChange"
> {
  /**
   * The id of the input element.
   */
  id?: string | undefined;
  /**
   * The minimum value of the input element.
   */
  min?: number | undefined;
  /**
   * The maximum value of the input element.
   */
  max?: number | undefined;
  /**
   * When true, direct text entry may be outside the `min`/`max` range without clamping,
   * so native range underflow/overflow validation can occur.
   * Step-based interactions (keyboard arrows, buttons, wheel, scrub) still clamp.
   * @default false
   */
  allowOutOfRange?: boolean | undefined;
  /**
   * The small step value of the input element when incrementing while the meta key is held. Snaps
   * to multiples of this value.
   * @default 0.1
   */
  smallStep?: number | undefined;
  /**
   * Amount to increment and decrement with the buttons and arrow keys, or to scrub with pointer movement in the scrub area.
   * To always enable step validation on form submission, specify the `min` prop explicitly in conjunction with this prop.
   * Specify `step="any"` to always disable step validation.
   * @default 1
   */
  step?: number | "any" | undefined;
  /**
   * The large step value of the input element when incrementing while the shift key is held. Snaps
   * to multiples of this value.
   * @default 10
   */
  largeStep?: number | undefined;
  /**
   * Whether the user must enter a value before submitting a form.
   * @default false
   */
  required?: boolean | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Whether the user should be unable to change the field value.
   * @default false
   */
  readOnly?: boolean | undefined;
  /**
   * Identifies the field when a form is submitted.
   */
  name?: string | undefined;
  /**
   * Identifies the form that owns the hidden input.
   * Useful when the number field is rendered outside the form.
   */
  form?: string | undefined;
  /**
   * The raw numeric value of the field.
   */
  value?: number | null | undefined;
  /**
   * The uncontrolled value of the field when it's initially rendered.
   *
   * To render a controlled number field, use the `value` prop instead.
   */
  defaultValue?: number | undefined;
  /**
   * Whether to allow the user to scrub the input value with the mouse wheel while focused and
   * hovering over the input.
   * @default false
   */
  allowWheelScrub?: boolean | undefined;
  /**
   * Whether the value should snap to the nearest step when incrementing or decrementing.
   * @default false
   */
  snapOnStep?: boolean | undefined;
  /**
   * Options to format the input value.
   */
  format?: Intl.NumberFormatOptions | undefined;
  /**
   * Callback fired when the number value changes.
   *
   * The `eventDetails.reason` indicates what triggered the change:
   * - `'input-change'` for parseable typing or programmatic text updates
   * - `'input-clear'` when the field becomes empty
   * - `'input-blur'` when formatting (and clamping, if enabled) occurs on blur
   * - `'input-paste'` for paste interactions
   * - `'keyboard'` for keyboard input
   * - `'increment-press'` / `'decrement-press'` for button presses on the increment and decrement controls
   * - `'wheel'` for wheel-based scrubbing
   * - `'scrub'` for scrub area drags
   */
  onValueChange?:
    | ((
        value: number | null,
        eventDetails: NumberFieldRoot.ChangeEventDetails,
      ) => void)
    | undefined;
  /**
   * Callback function that is fired when the value is committed.
   * It runs later than `onValueChange`, when:
   * - The input is blurred after typing a value.
   * - The pointer is released after scrubbing or pressing the increment/decrement buttons.
   *
   * It runs simultaneously with `onValueChange` when interacting with the keyboard.
   *
   * **Warning**: This is a generic event not a change event.
   */
  onValueCommitted?:
    | ((
        value: number | null,
        eventDetails: NumberFieldRoot.CommitEventDetails,
      ) => void)
    | undefined;
  /**
   * The locale of the input element.
   * Defaults to the user's runtime locale.
   */
  locale?: Intl.LocalesArgument | undefined;
  /**
   * A ref to access the hidden input element.
   */
  inputRef?: React.Ref<HTMLInputElement> | undefined;
}
interface NumberFieldRootState extends FieldRootState {
  /**
   * The raw numeric value of the field.
   */
  value: number | null;
  /**
   * The formatted string value presented in the input element.
   */
  inputValue: string;
  /**
   * Whether the user must enter a value before submitting a form.
   */
  required: boolean;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the user should be unable to change the field value.
   */
  readOnly: boolean;
  /**
   * Whether the user is currently scrubbing the field.
   */
  scrubbing: boolean;
}
type NumberFieldRootChangeEventReason =
  | typeof inputChange
  | typeof inputClear
  | typeof inputBlur
  | typeof inputPaste
  | typeof keyboard
  | typeof incrementPress
  | typeof decrementPress
  | typeof wheel
  | typeof scrub
  | typeof none;
type NumberFieldRootChangeEventDetails = BaseUIChangeEventDetails<
  NumberFieldRootChangeEventReason,
  ChangeEventCustomProperties
>;
type NumberFieldRootCommitEventReason =
  | typeof inputBlur
  | typeof inputClear
  | typeof keyboard
  | typeof incrementPress
  | typeof decrementPress
  | typeof wheel
  | typeof scrub
  | typeof none;
type NumberFieldRootCommitEventDetails =
  BaseUIGenericEventDetails<NumberFieldRoot.CommitEventReason>;
/**
 * Groups all parts of the number field and manages its state.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
 */
declare const NumberFieldRoot: React.ForwardRefExoticComponent<
  Omit<NumberFieldRootProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace NumberFieldRoot {
  type State = NumberFieldRootState;
  type Props = NumberFieldRootProps;
  type ChangeEventReason = NumberFieldRootChangeEventReason;
  type ChangeEventDetails = NumberFieldRootChangeEventDetails;
  type CommitEventReason = NumberFieldRootCommitEventReason;
  type CommitEventDetails = NumberFieldRootCommitEventDetails;
}

interface NumberFieldGroupState extends NumberFieldRootState {}
interface NumberFieldGroupProps extends BaseUIComponentProps<
  "div",
  NumberFieldGroupState
> {}
/**
 * Groups the input with the increment and decrement buttons.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
 */
declare const NumberFieldGroup: React.ForwardRefExoticComponent<
  Omit<NumberFieldGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace NumberFieldGroup {
  type State = NumberFieldGroupState;
  type Props = NumberFieldGroupProps;
}

interface NumberFieldIncrementState extends NumberFieldRootState {}
interface NumberFieldIncrementProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", NumberFieldIncrementState> {}
/**
 * A stepper button that increases the field value when clicked.
 * Renders an `<button>` element.
 *
 * Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
 */
declare const NumberFieldIncrement: React.ForwardRefExoticComponent<
  Omit<NumberFieldIncrementProps, "ref"> &
    React.RefAttributes<HTMLButtonElement>
>;
declare namespace NumberFieldIncrement {
  type State = NumberFieldIncrementState;
  type Props = NumberFieldIncrementProps;
}

interface NumberFieldDecrementState extends NumberFieldRootState {}
interface NumberFieldDecrementProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", NumberFieldDecrementState> {}
/**
 * A stepper button that decreases the field value when clicked.
 * Renders an `<button>` element.
 *
 * Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
 */
declare const NumberFieldDecrement: React.ForwardRefExoticComponent<
  Omit<NumberFieldDecrementProps, "ref"> &
    React.RefAttributes<HTMLButtonElement>
>;
declare namespace NumberFieldDecrement {
  type State = NumberFieldDecrementState;
  type Props = NumberFieldDecrementProps;
}

interface NumberFieldInputState extends NumberFieldRootState {}
interface NumberFieldInputProps extends BaseUIComponentProps<
  "input",
  NumberFieldInputState
> {
  /**
   * A string value that provides a user-friendly name for the role of the input.
   * @default 'Number field'
   */
  "aria-roledescription"?:
    | React.AriaAttributes["aria-roledescription"]
    | undefined;
}
/**
 * The native input control in the number field.
 * Renders an `<input>` element.
 *
 * Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
 */
declare const NumberFieldInput: React.ForwardRefExoticComponent<
  Omit<NumberFieldInputProps, "ref"> & React.RefAttributes<HTMLInputElement>
>;
declare namespace NumberFieldInput {
  type State = NumberFieldInputState;
  type Props = NumberFieldInputProps;
}

interface NumberFieldScrubAreaState extends NumberFieldRootState {}
interface NumberFieldScrubAreaProps extends BaseUIComponentProps<
  "span",
  NumberFieldScrubAreaState
> {
  /**
   * Cursor movement direction in the scrub area.
   * @default 'horizontal'
   */
  direction?: "horizontal" | "vertical" | undefined;
  /**
   * Determines how many pixels the cursor must move before the value changes.
   * A higher value will make scrubbing less sensitive.
   * @default 2
   */
  pixelSensitivity?: number | undefined;
  /**
   * If specified, determines the distance that the cursor may move from the center
   * of the scrub area before it will loop back around.
   */
  teleportDistance?: number | undefined;
}
/**
 * An interactive area where the user can click and drag to change the field value.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
 */
declare const NumberFieldScrubArea: React.ForwardRefExoticComponent<
  Omit<NumberFieldScrubAreaProps, "ref"> & React.RefAttributes<HTMLSpanElement>
>;
declare namespace NumberFieldScrubArea {
  type State = NumberFieldScrubAreaState;
  type Props = NumberFieldScrubAreaProps;
}

interface NumberFieldScrubAreaCursorState extends NumberFieldRootState {}
interface NumberFieldScrubAreaCursorProps extends BaseUIComponentProps<
  "span",
  NumberFieldScrubAreaCursorState
> {}
/**
 * A custom element to display instead of the native cursor while using the scrub area.
 * Renders a `<span>` element.
 *
 * This component uses the [Pointer Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API), which may prompt the browser to display a related notification. It is disabled
 * in Safari to avoid a layout shift that this notification causes there.
 *
 * Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
 */
declare const NumberFieldScrubAreaCursor: React.ForwardRefExoticComponent<
  Omit<NumberFieldScrubAreaCursorProps, "ref"> &
    React.RefAttributes<HTMLSpanElement>
>;
declare namespace NumberFieldScrubAreaCursor {
  type State = NumberFieldScrubAreaCursorState;
  type Props = NumberFieldScrubAreaCursorProps;
}

declare namespace index_parts {
  export {
    NumberFieldDecrement as Decrement,
    NumberFieldGroup as Group,
    NumberFieldIncrement as Increment,
    NumberFieldInput as Input,
    NumberFieldRoot as Root,
    NumberFieldScrubArea as ScrubArea,
    NumberFieldScrubAreaCursor as ScrubAreaCursor,
  };
}

export {
  index_parts as NumberField,
  NumberFieldDecrement,
  type NumberFieldDecrementProps,
  type NumberFieldDecrementState,
  NumberFieldGroup,
  type NumberFieldGroupProps,
  type NumberFieldGroupState,
  NumberFieldIncrement,
  type NumberFieldIncrementProps,
  type NumberFieldIncrementState,
  NumberFieldInput,
  type NumberFieldInputProps,
  type NumberFieldInputState,
  NumberFieldRoot,
  type NumberFieldRootChangeEventDetails,
  type NumberFieldRootChangeEventReason,
  type NumberFieldRootCommitEventDetails,
  type NumberFieldRootCommitEventReason,
  type NumberFieldRootProps,
  type NumberFieldRootState,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
  type NumberFieldScrubAreaCursorProps,
  type NumberFieldScrubAreaCursorState,
  type NumberFieldScrubAreaProps,
  type NumberFieldScrubAreaState,
};
