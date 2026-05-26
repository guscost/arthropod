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
interface NonNativeButtonProps {
  /**
   * Whether the component renders a native `<button>` element when replacing it
   * via the `render` prop.
   * Set to `true` if the rendered element is a native button.
   * @default false
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

declare const PARENT_CHECKBOX = "data-parent";
interface CheckboxRootState extends FieldRootState {
  /**
   * Whether the checkbox is currently ticked.
   */
  checked: boolean;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the user should be unable to tick or untick the checkbox.
   */
  readOnly: boolean;
  /**
   * Whether the user must tick the checkbox before submitting a form.
   */
  required: boolean;
  /**
   * Whether the checkbox is in a mixed state: neither ticked, nor unticked.
   */
  indeterminate: boolean;
}
interface CheckboxRootProps
  extends
    NonNativeButtonProps,
    Omit<
      BaseUIComponentProps<"span", CheckboxRootState>,
      "onChange" | "value"
    > {
  /**
   * The id of the input element.
   */
  id?: string | undefined;
  /**
   * Identifies the field when a form is submitted.
   * @default undefined
   */
  name?: string | undefined;
  /**
   * Identifies the form that owns the hidden input.
   * Useful when the checkbox is rendered outside the form.
   */
  form?: string | undefined;
  /**
   * Whether the checkbox is currently ticked.
   *
   * To render an uncontrolled checkbox, use the `defaultChecked` prop instead.
   * @default undefined
   */
  checked?: boolean | undefined;
  /**
   * Whether the checkbox is initially ticked.
   *
   * To render a controlled checkbox, use the `checked` prop instead.
   * @default false
   */
  defaultChecked?: boolean | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Event handler called when the checkbox is ticked or unticked.
   */
  onCheckedChange?:
    | ((checked: boolean, eventDetails: CheckboxRootChangeEventDetails) => void)
    | undefined;
  /**
   * Whether the user should be unable to tick or untick the checkbox.
   * @default false
   */
  readOnly?: boolean | undefined;
  /**
   * Whether the user must tick the checkbox before submitting a form.
   * @default false
   */
  required?: boolean | undefined;
  /**
   * Whether the checkbox is in a mixed state: neither ticked, nor unticked.
   * @default false
   */
  indeterminate?: boolean | undefined;
  /**
   * A ref to access the hidden `<input>` element.
   */
  inputRef?: React.Ref<HTMLInputElement> | undefined;
  /**
   * Whether the checkbox controls a group of child checkboxes.
   *
   * Must be used in a [Checkbox Group](https://base-ui.com/react/components/checkbox-group).
   * @default false
   */
  parent?: boolean | undefined;
  /**
   * The value submitted with the form when the checkbox is unchecked.
   * By default, unchecked checkboxes do not submit any value, matching native checkbox behavior.
   */
  uncheckedValue?: string | undefined;
  /**
   * The value of the selected checkbox.
   */
  value?: string | undefined;
}
type CheckboxRootChangeEventReason = typeof none;
type CheckboxRootChangeEventDetails =
  BaseUIChangeEventDetails<CheckboxRoot.ChangeEventReason>;
/**
 * Represents the checkbox itself.
 * Renders a `<span>` element and a hidden `<input>` beside.
 *
 * Documentation: [Base UI Checkbox](https://base-ui.com/react/components/checkbox)
 */
declare const CheckboxRoot: React.ForwardRefExoticComponent<
  Omit<CheckboxRootProps, "ref"> & React.RefAttributes<HTMLElement>
>;
declare namespace CheckboxRoot {
  type State = CheckboxRootState;
  type Props = CheckboxRootProps;
  type ChangeEventReason = CheckboxRootChangeEventReason;
  type ChangeEventDetails = CheckboxRootChangeEventDetails;
}

type TransitionStatus = "starting" | "ending" | "idle" | undefined;

interface CheckboxIndicatorState extends CheckboxRootState {
  /**
   * The transition status of the component.
   */
  transitionStatus: TransitionStatus;
}
interface CheckboxIndicatorProps extends BaseUIComponentProps<
  "span",
  CheckboxIndicatorState
> {
  /**
   * Whether to keep the element in the DOM when the checkbox is not checked.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
/**
 * Indicates whether the checkbox is ticked.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Checkbox](https://base-ui.com/react/components/checkbox)
 */
declare const CheckboxIndicator: React.ForwardRefExoticComponent<
  Omit<CheckboxIndicatorProps, "ref"> & React.RefAttributes<HTMLSpanElement>
>;
declare namespace CheckboxIndicator {
  type State = CheckboxIndicatorState;
  type Props = CheckboxIndicatorProps;
}

declare namespace index_parts {
  export { CheckboxIndicator as Indicator, CheckboxRoot as Root };
}

export {
  index_parts as Checkbox,
  CheckboxIndicator,
  type CheckboxIndicatorProps,
  type CheckboxIndicatorState,
  CheckboxRoot,
  type CheckboxRootChangeEventDetails,
  type CheckboxRootChangeEventReason,
  type CheckboxRootProps,
  type CheckboxRootState,
  PARENT_CHECKBOX,
};
