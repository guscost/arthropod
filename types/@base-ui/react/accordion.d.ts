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
interface NativeButtonProps {
  /**
   * Whether the component renders a native `<button>` element when replacing it
   * via the `render` prop.
   * Set to `false` if the rendered element is not a button (for example, `<div>`).
   * @default true
   */
  nativeButton?: boolean | undefined;
}
type Orientation = "horizontal" | "vertical";

type AccordionValue<Value = any> = Value[];
interface AccordionRootState<Value = any> {
  /**
   * The current value.
   */
  value: AccordionValue<Value>;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  /**
   * The component orientation.
   */
  orientation: Orientation;
}
interface AccordionRootProps<Value = any> extends BaseUIComponentProps<
  "div",
  AccordionRoot.State<Value>
> {
  /**
   * The controlled value of the item(s) that should be expanded.
   *
   * To render an uncontrolled accordion, use the `defaultValue` prop instead.
   */
  value?: AccordionValue<Value> | undefined;
  /**
   * The uncontrolled value of the item(s) that should be initially expanded.
   *
   * To render a controlled accordion, use the `value` prop instead.
   */
  defaultValue?: AccordionValue<Value> | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Allows the browser's built-in page search to find and expand the panel contents.
   *
   * Overrides the `keepMounted` prop and uses `hidden="until-found"`
   * to hide the element without removing it from the DOM.
   * @default false
   */
  hiddenUntilFound?: boolean | undefined;
  /**
   * Whether to keep the element in the DOM while the panel is closed.
   * This prop is ignored when `hiddenUntilFound` is used.
   * @default false
   */
  keepMounted?: boolean | undefined;
  /**
   * Whether to loop keyboard focus back to the first item
   * when the end of the list is reached while using the arrow keys.
   * @default true
   */
  loopFocus?: boolean | undefined;
  /**
   * Event handler called when an accordion item is expanded or collapsed.
   * Provides the new value as an argument.
   */
  onValueChange?:
    | ((
        value: AccordionValue<Value>,
        eventDetails: AccordionRootChangeEventDetails,
      ) => void)
    | undefined;
  /**
   * Whether multiple items can be open at the same time.
   * @default false
   */
  multiple?: boolean | undefined;
  /**
   * The visual orientation of the accordion.
   * Controls whether roving focus uses left/right or up/down arrow keys.
   * @default 'vertical'
   */
  orientation?: Orientation | undefined;
}
type AccordionRootChangeEventReason = typeof triggerPress | typeof none;
type AccordionRootChangeEventDetails =
  BaseUIChangeEventDetails<AccordionRoot.ChangeEventReason>;
/**
 * Groups all parts of the accordion.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
 */
declare const AccordionRoot: {
  <Value = any>(props: AccordionRoot.Props<Value>): React.JSX.Element;
};
declare namespace AccordionRoot {
  type Value<TValue = any> = AccordionValue<TValue>;
  type State<TValue = any> = AccordionRootState<TValue>;
  type Props<TValue = any> = AccordionRootProps<TValue>;
  type ChangeEventReason = AccordionRootChangeEventReason;
  type ChangeEventDetails = AccordionRootChangeEventDetails;
}

type TransitionStatus = "starting" | "ending" | "idle" | undefined;

interface CollapsibleRootState extends Pick<
  UseCollapsibleRootReturnValue,
  "open" | "disabled" | "transitionStatus"
> {}
interface CollapsibleRootProps extends BaseUIComponentProps<
  "div",
  CollapsibleRootState
> {
  /**
   * Whether the collapsible panel is currently open.
   *
   * To render an uncontrolled collapsible, use the `defaultOpen` prop instead.
   */
  open?: boolean | undefined;
  /**
   * Whether the collapsible panel is initially open.
   *
   * To render a controlled collapsible, use the `open` prop instead.
   * @default false
   */
  defaultOpen?: boolean | undefined;
  /**
   * Event handler called when the panel is opened or closed.
   */
  onOpenChange?:
    | ((open: boolean, eventDetails: CollapsibleRootChangeEventDetails) => void)
    | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
}
type CollapsibleRootChangeEventReason = typeof triggerPress | typeof none;
type CollapsibleRootChangeEventDetails =
  BaseUIChangeEventDetails<CollapsibleRootChangeEventReason>;
/**
 * Groups all parts of the collapsible.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
 */
declare const CollapsibleRoot: React.ForwardRefExoticComponent<
  Omit<CollapsibleRootProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace CollapsibleRoot {
  type State = CollapsibleRootState;
  type Props = CollapsibleRootProps;
  type ChangeEventReason = CollapsibleRootChangeEventReason;
  type ChangeEventDetails = CollapsibleRootChangeEventDetails;
}

interface UseCollapsibleRootParameters {
  /**
   * Whether the collapsible panel is currently open.
   *
   * To render an uncontrolled collapsible, use the `defaultOpen` prop instead.
   */
  open?: boolean | undefined;
  /**
   * Whether the collapsible panel is initially open.
   *
   * To render a controlled collapsible, use the `open` prop instead.
   * @default false
   */
  defaultOpen?: boolean | undefined;
  /**
   * Event handler called when the panel is opened or closed.
   */
  onOpenChange: (
    open: boolean,
    eventDetails: CollapsibleRoot.ChangeEventDetails,
  ) => void;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled: boolean;
}
interface UseCollapsibleRootReturnValue {
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  handleTrigger: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /**
   * Whether the collapsible panel is mounted for transition and hidden-state
   * purposes. This can be `false` while the element remains in the DOM when
   * `keepMounted` or `hiddenUntilFound` is enabled.
   */
  mounted: boolean;
  /**
   * Whether the collapsible panel is currently open.
   */
  open: boolean;
  panelId: React.HTMLAttributes<Element>["id"];
  setMounted: (nextMounted: boolean) => void;
  setOpen: (open: boolean) => void;
  setPanelIdState: (id: string | undefined) => void;
  transitionStatus: TransitionStatus;
}

interface AccordionItemState extends AccordionRootState {
  /**
   * Whether the accordion item's panel is currently hidden.
   */
  hidden: boolean;
  /**
   * The item index.
   */
  index: number;
  /**
   * Whether the component is open.
   */
  open: boolean;
}
interface AccordionItemProps
  extends
    BaseUIComponentProps<"div", AccordionItemState>,
    Partial<Pick<UseCollapsibleRootParameters, "disabled">> {
  /**
   * A unique value that identifies this accordion item.
   * If no value is provided, a unique ID will be generated automatically.
   * Use when controlling the accordion programmatically, or to set an initial
   * open state.
   * @example
   * ```tsx
   * <Accordion.Root value={['a']}>
   *   <Accordion.Item value="a" /> // initially open
   *   <Accordion.Item value="b" /> // initially closed
   * </Accordion.Root>
   * ```
   */
  value?: any;
  /**
   * Event handler called when the panel is opened or closed.
   */
  onOpenChange?:
    | ((open: boolean, eventDetails: AccordionItem.ChangeEventDetails) => void)
    | undefined;
}
type AccordionItemChangeEventReason = typeof triggerPress | typeof none;
type AccordionItemChangeEventDetails =
  BaseUIChangeEventDetails<AccordionItem.ChangeEventReason>;
/**
 * Groups an accordion header with the corresponding panel.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
 */
declare const AccordionItem: React.ForwardRefExoticComponent<
  Omit<AccordionItemProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace AccordionItem {
  type State = AccordionItemState;
  type Props = AccordionItemProps;
  type ChangeEventReason = AccordionItemChangeEventReason;
  type ChangeEventDetails = AccordionItemChangeEventDetails;
}

interface AccordionHeaderState extends AccordionItemState {}
interface AccordionHeaderProps extends BaseUIComponentProps<
  "h3",
  AccordionHeaderState
> {}
/**
 * A heading that labels the corresponding panel.
 * Renders an `<h3>` element.
 *
 * Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
 */
declare const AccordionHeader: React.ForwardRefExoticComponent<
  Omit<AccordionHeaderProps, "ref"> & React.RefAttributes<HTMLHeadingElement>
>;
declare namespace AccordionHeader {
  type State = AccordionHeaderState;
  type Props = AccordionHeaderProps;
}

interface AccordionTriggerState extends AccordionItemState {}
interface AccordionTriggerProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", AccordionTriggerState> {}
/**
 * A button that opens and closes the corresponding panel.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
 */
declare const AccordionTrigger: React.ForwardRefExoticComponent<
  Omit<AccordionTriggerProps, "ref"> & React.RefAttributes<HTMLElement>
>;
declare namespace AccordionTrigger {
  type State = AccordionTriggerState;
  type Props = AccordionTriggerProps;
}

interface AccordionPanelState extends AccordionItemState {
  /**
   * The transition status of the component.
   */
  transitionStatus: TransitionStatus;
}
interface AccordionPanelProps
  extends
    BaseUIComponentProps<"div", AccordionPanelState>,
    Pick<AccordionRoot.Props, "hiddenUntilFound" | "keepMounted"> {}
/**
 * A collapsible panel with the accordion item contents.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
 */
declare const AccordionPanel: React.ForwardRefExoticComponent<
  Omit<AccordionPanelProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace AccordionPanel {
  type State = AccordionPanelState;
  type Props = AccordionPanelProps;
}

declare namespace index_parts {
  export {
    AccordionHeader as Header,
    AccordionItem as Item,
    AccordionPanel as Panel,
    AccordionRoot as Root,
    AccordionTrigger as Trigger,
  };
}

export {
  index_parts as Accordion,
  AccordionHeader,
  type AccordionHeaderProps,
  type AccordionHeaderState,
  AccordionItem,
  type AccordionItemChangeEventDetails,
  type AccordionItemChangeEventReason,
  type AccordionItemProps,
  type AccordionItemState,
  AccordionPanel,
  type AccordionPanelProps,
  type AccordionPanelState,
  AccordionRoot,
  type AccordionRootChangeEventDetails,
  type AccordionRootChangeEventReason,
  type AccordionRootProps,
  type AccordionRootState,
  AccordionTrigger,
  type AccordionTriggerProps,
  type AccordionTriggerState,
  type AccordionValue,
};
