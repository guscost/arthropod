import * as React$1 from "react";
import * as react_jsx_runtime from "react/jsx-runtime";

type HTMLProps<T = any> = React$1.HTMLAttributes<T> & {
  ref?: React$1.Ref<T> | undefined;
};
type BaseUIEvent<E extends React$1.SyntheticEvent<Element, Event>> = E & {
  preventBaseUIHandler: () => void;
  readonly baseUIHandlerPrevented?: boolean | undefined;
};
type WithPreventBaseUIHandler<T> = T extends (event: infer E) => any
  ? E extends React$1.SyntheticEvent<Element, Event>
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
 * Shape of the render prop: a function that takes props to be spread on the element and component's state and returns a React element.
 *
 * @template Props Props to be spread on the rendered element.
 * @template State Component's internal state.
 */
type ComponentRenderFn<Props, State> = (
  props: Props,
  state: State,
) => React$1.ReactElement<unknown>;
/**
 * Props shared by all Base UI components.
 * Contains `className` (string or callback taking the component's state as an argument) and `render` (function to customize rendering).
 */
type BaseUIComponentProps<
  ElementType extends React$1.ElementType,
  State,
  RenderFunctionProps = HTMLProps,
> = Omit<
  WithBaseUIEvent<React$1.ComponentPropsWithRef<ElementType>>,
  "className" | "color" | "defaultValue" | "defaultChecked"
> & {
  /**
   * CSS class applied to the element, or a function that
   * returns a class based on the component’s state.
   */
  className?: (string | ((state: State) => string | undefined)) | undefined;
  /**
   * Allows you to replace the component’s HTML element
   * with a different tag, or compose it with another component.
   *
   * Accepts a `ReactElement` or a function that returns the element to render.
   */
  render?:
    | (React$1.ReactElement | ComponentRenderFn<RenderFunctionProps, State>)
    | undefined;
  /**
   * Style applied to the element, or a function that
   * returns a style object based on the component’s state.
   */
  style?:
    | (
        | React$1.CSSProperties
        | ((state: State) => React$1.CSSProperties | undefined)
      )
    | undefined;
};
interface NativeButtonProps {
  /**
   * Whether the component renders a native `<button>` element when replacing it
   * via the `render` prop.
   * Set to `false` if the rendered element is not a button (e.g. `<div>`).
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
  ? BaseUIChangeEventDetail<Reason, CustomProperties>
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
  ? BaseUIGenericEventDetail<Reason, CustomProperties>
  : never;

type AccordionValue = (any | null)[];
interface AccordionRootState {
  value: AccordionValue;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  orientation: Orientation;
}
interface AccordionRootProps extends BaseUIComponentProps<
  "div",
  AccordionRoot.State
> {
  /**
   * The controlled value of the item(s) that should be expanded.
   *
   * To render an uncontrolled accordion, use the `defaultValue` prop instead.
   */
  value?: AccordionValue | undefined;
  /**
   * The uncontrolled value of the item(s) that should be initially expanded.
   *
   * To render a controlled accordion, use the `value` prop instead.
   */
  defaultValue?: AccordionValue | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Allows the browser’s built-in page search to find and expand the panel contents.
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
        value: AccordionValue,
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
declare const AccordionRoot: React$1.ForwardRefExoticComponent<
  Omit<AccordionRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace AccordionRoot {
  type State = AccordionRootState;
  type Props = AccordionRootProps;
  type ChangeEventReason = AccordionRootChangeEventReason;
  type ChangeEventDetails = AccordionRootChangeEventDetails;
}

type TransitionStatus = "starting" | "ending" | "idle" | undefined;

interface CollapsibleRootState extends Pick<
  useCollapsibleRoot.ReturnValue,
  "open" | "disabled"
> {}
interface CollapsibleRootProps extends BaseUIComponentProps<
  "div",
  CollapsibleRoot.State
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
declare const CollapsibleRoot: React$1.ForwardRefExoticComponent<
  Omit<CollapsibleRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace CollapsibleRoot {
  type State = CollapsibleRootState;
  type Props = CollapsibleRootProps;
  type ChangeEventReason = CollapsibleRootChangeEventReason;
  type ChangeEventDetails = CollapsibleRootChangeEventDetails;
}

type AnimationType = "css-transition" | "css-animation" | "none" | null;
interface Dimensions$1 {
  height: number | undefined;
  width: number | undefined;
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
  abortControllerRef: React$1.RefObject<AbortController | null>;
  animationTypeRef: React$1.RefObject<AnimationType>;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  handleTrigger: (event: React$1.MouseEvent | React$1.KeyboardEvent) => void;
  /**
   * The height of the panel.
   */
  height: number | undefined;
  /**
   * Whether the collapsible panel is currently mounted.
   */
  mounted: boolean;
  /**
   * Whether the collapsible panel is currently open.
   */
  open: boolean;
  panelId: React$1.HTMLAttributes<Element>["id"];
  panelRef: React$1.RefObject<HTMLElement | null>;
  runOnceAnimationsFinish: (
    fnToExecute: () => void,
    signal?: AbortSignal | null,
  ) => void;
  setDimensions: React$1.Dispatch<React$1.SetStateAction<Dimensions$1>>;
  setHiddenUntilFound: React$1.Dispatch<React$1.SetStateAction<boolean>>;
  setKeepMounted: React$1.Dispatch<React$1.SetStateAction<boolean>>;
  setMounted: (open: boolean) => void;
  setOpen: (open: boolean) => void;
  setPanelIdState: (id: string | undefined) => void;
  setVisible: React$1.Dispatch<React$1.SetStateAction<boolean>>;
  transitionDimensionRef: React$1.RefObject<"height" | "width" | null>;
  transitionStatus: TransitionStatus;
  /**
   * The visible state of the panel used to determine the `[hidden]` attribute
   * only when CSS keyframe animations are used.
   */
  visible: boolean;
  /**
   * The width of the panel.
   */
  width: number | undefined;
}
declare function useCollapsibleRoot(
  parameters: useCollapsibleRoot.Parameters,
): useCollapsibleRoot.ReturnValue;
declare namespace useCollapsibleRoot {
  type Parameters = UseCollapsibleRootParameters;
  type ReturnValue = UseCollapsibleRootReturnValue;
}

interface AccordionItemState extends AccordionRoot.State {
  index: number;
  open: boolean;
}
interface AccordionItemProps
  extends
    BaseUIComponentProps<"div", AccordionItem.State>,
    Partial<Pick<useCollapsibleRoot.Parameters, "disabled">> {
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
declare const AccordionItem: React$1.ForwardRefExoticComponent<
  Omit<AccordionItemProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace AccordionItem {
  type State = AccordionItemState;
  type Props = AccordionItemProps;
  type ChangeEventReason = AccordionItemChangeEventReason;
  type ChangeEventDetails = AccordionItemChangeEventDetails;
}

interface AccordionHeaderProps extends BaseUIComponentProps<
  "h3",
  AccordionItem.State
> {}
/**
 * A heading that labels the corresponding panel.
 * Renders an `<h3>` element.
 *
 * Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
 */
declare const AccordionHeader: React$1.ForwardRefExoticComponent<
  Omit<AccordionHeaderProps, "ref"> & React$1.RefAttributes<HTMLHeadingElement>
>;
declare namespace AccordionHeader {
  type Props = AccordionHeaderProps;
}

interface AccordionTriggerProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", AccordionItem.State> {}
/**
 * A button that opens and closes the corresponding panel.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
 */
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<
  Omit<AccordionTriggerProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace AccordionTrigger {
  type Props = AccordionTriggerProps;
}

interface AccordionPanelState extends AccordionItem.State {
  transitionStatus: TransitionStatus;
}
interface AccordionPanelProps
  extends
    BaseUIComponentProps<"div", AccordionPanel.State>,
    Pick<AccordionRoot.Props, "hiddenUntilFound" | "keepMounted"> {}
/**
 * A collapsible panel with the accordion item contents.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Accordion](https://base-ui.com/react/components/accordion)
 */
declare const AccordionPanel: React$1.ForwardRefExoticComponent<
  Omit<AccordionPanelProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace AccordionPanel {
  type State = AccordionPanelState;
  type Props = AccordionPanelProps;
}

declare namespace index_parts$r {
  export {
    AccordionHeader as Header,
    AccordionItem as Item,
    AccordionPanel as Panel,
    AccordionRoot as Root,
    AccordionTrigger as Trigger,
  };
}

type Listener<T> = (state: T) => void;
/**
 * A data store implementation that allows subscribing to state changes and updating the state.
 * It uses an observer pattern to notify subscribers when the state changes.
 */
declare class Store<State> {
  /**
   * The current state of the store.
   * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
   * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
   * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
   *
   * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
   */
  state: State;
  private listeners;
  private updateTick;
  constructor(state: State);
  /**
   * Registers a listener that will be called whenever the store's state changes.
   *
   * @param fn The listener function to be called on state changes.
   * @returns A function to unsubscribe the listener.
   */
  subscribe: (fn: Listener<State>) => () => void;
  /**
   * Returns the current state of the store.
   */
  getSnapshot: () => State;
  /**
   * Updates the entire store's state and notifies all registered listeners.
   *
   * @param newState The new state to set for the store.
   */
  setState(newState: State): void;
  /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   *
   * @param changes An object containing the changes to apply to the current state.
   */
  update(changes: Partial<State>): void;
  /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   *
   * @param key The key in the store's state to update.
   * @param value The new value to set for the specified key.
   */
  set<T>(key: keyof State, value: T): void;
  /**
   * Gives the state a new reference and updates all registered listeners.
   */
  notifyAll(): void;
  use<F extends (...args: any) => any>(
    selector: F,
    ...args: SelectorArgs$1<F>
  ): ReturnType<F>;
}
type SelectorArgs$1<Selector> = Selector extends (
  ...params: infer Params
) => any
  ? Tail$1<Params>
  : never;
type Tail$1<T extends readonly any[]> = T extends readonly [any, ...infer Rest]
  ? Rest
  : [];

/**
 * A Store that supports controlled state keys, non-reactive values and provides utility methods for React.
 */
declare class ReactStore<
  State extends object,
  Context = Record<string, never>,
  Selectors extends Record<string, SelectorFunction<State>> = Record<
    string,
    never
  >,
> extends Store<State> {
  /**
   * Creates a new ReactStore instance.
   *
   * @param state Initial state of the store.
   * @param context Non-reactive context values.
   * @param selectors Optional selectors for use with `useState`.
   */
  constructor(state: State, context?: Context, selectors?: Selectors);
  /**
   * Non-reactive values such as refs, callbacks, etc.
   */
  readonly context: Context;
  private selectors;
  /**
   * Synchronizes a single external value into the store.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValue<Key extends keyof State, Value extends State[Key]>(
    key: keyof State,
    value: Value,
  ): void;
  /**
   * Synchronizes a single external value into the store and
   * cleans it up (sets to `undefined`) on unmount.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValueWithCleanup<Key extends KeysAllowingUndefined<State>>(
    key: Key,
    value: State[Key],
  ): void;
  /**
   * Synchronizes multiple external values into the store.
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   */
  useSyncedValues(statePart: Partial<State>): void;
  /**
   * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
   * is non-undefined, the store's state at `key` is updated to match `controlled`.
   */
  useControlledProp<Key extends keyof State, Value extends State[Key]>(
    key: keyof State,
    controlled: Value | undefined,
  ): void;
  /** Gets the current value from the store using a selector with the provided key.
   *
   * @param key Key of the selector to use.
   */
  select<Key extends keyof Selectors>(
    key: Key,
    ...args: SelectorArgs<Selectors[Key]>
  ): ReturnType<Selectors[Key]>;
  /**
   * Returns a value from the store's state using a selector function.
   * Used to subscribe to specific parts of the state.
   * This methods causes a rerender whenever the selected state changes.
   *
   * @param key Key of the selector to use.
   */
  useState<Key extends keyof Selectors>(
    key: Key,
    ...args: SelectorArgs<Selectors[Key]>
  ): ReturnType<Selectors[Key]>;
  /**
   * Wraps a function with `useStableCallback` to ensure it has a stable reference
   * and assigns it to the context.
   *
   * @param key Key of the event callback. Must be a function in the context.
   * @param fn Function to assign.
   */
  useContextCallback<Key extends ContextFunctionKeys<Context>>(
    key: Key,
    fn: ContextFunction<Context, Key> | undefined,
  ): void;
  /**
   * Returns a stable setter function for a specific key in the store's state.
   * It's commonly used to pass as a ref callback to React elements.
   *
   * @param key Key of the state to set.
   */
  useStateSetter<const Key extends keyof State, Value extends State[Key]>(
    key: keyof State,
  ): (v: Value) => void;
  /**
   * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
   *
   * @param key Key of the selector to observe.
   * @param listener Listener function called when the selector result changes.
   */
  observe<Key extends keyof Selectors>(
    selector: Key,
    listener: (
      newValue: ReturnType<Selectors[Key]>,
      oldValue: ReturnType<Selectors[Key]>,
      store: this,
    ) => void,
  ): () => void;
  observe<Selector extends ObserveSelector<State>>(
    selector: Selector,
    listener: (
      newValue: ReturnType<Selector>,
      oldValue: ReturnType<Selector>,
      store: this,
    ) => void,
  ): () => void;
}
type MaybeCallable = (...args: any[]) => any;
type ContextFunctionKeys<Context> = {
  [Key in keyof Context]-?: Extract<Context[Key], MaybeCallable> extends never
    ? never
    : Key;
}[keyof Context];
type ContextFunction<Context, Key extends keyof Context> = Extract<
  Context[Key],
  MaybeCallable
>;
type KeysAllowingUndefined<State> = {
  [Key in keyof State]-?: undefined extends State[Key] ? Key : never;
}[keyof State];
type ObserveSelector<State> = (state: State) => any;
type SelectorFunction<State> = (state: State, ...args: any[]) => any;
type Tail<T extends readonly any[]> = T extends readonly [any, ...infer Rest]
  ? Rest
  : [];
type SelectorArgs<Selector> = Selector extends (...params: infer Params) => any
  ? Tail<Params>
  : never;

declare type AlignedPlacement = `${Side$1}-${Alignment}`;

declare type Alignment = "start" | "end";

declare type Axis = "x" | "y";

declare type ClientRectObject = Prettify$3<Rect & SideObject>;

declare type Coords$1 = {
  [key in Axis]: number;
};

declare type Dimensions = {
  [key in Length]: number;
};

declare interface ElementRects {
  reference: Rect;
  floating: Rect;
}

declare type Length = "width" | "height";

declare type Padding = number | Prettify$3<Partial<SideObject>>;

declare type Placement = Prettify$3<Side$1 | AlignedPlacement>;

declare type Prettify$3<T> = {
  [K in keyof T]: T[K];
} & {};

declare type Rect = Prettify$3<Coords$1 & Dimensions>;

declare type Side$1 = "top" | "right" | "bottom" | "left";

declare type SideObject = {
  [key in Side$1]: number;
};

declare type Strategy = "absolute" | "fixed";

declare type Boundary$2 = any;

declare interface ComputePositionConfig$1 {
  /**
   * Object to interface with the current platform.
   */
  platform: Platform$1;
  /**
   * Where to place the floating element relative to the reference element.
   */
  placement?: Placement;
  /**
   * The strategy to use when positioning the floating element.
   */
  strategy?: Strategy;
  /**
   * Array of middleware objects to modify the positioning or provide data for
   * rendering.
   */
  middleware?: Array<Middleware$1 | null | undefined | false>;
}

declare interface ComputePositionReturn extends Coords$1 {
  /**
   * The final chosen placement of the floating element.
   */
  placement: Placement;
  /**
   * The strategy used to position the floating element.
   */
  strategy: Strategy;
  /**
   * Object containing data returned from all middleware, keyed by their name.
   */
  middlewareData: MiddlewareData;
}

/**
 * Function option to derive middleware options from state.
 */
declare type Derivable<T> = (state: MiddlewareState$1) => T;

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
declare function detectOverflow(
  state: MiddlewareState$1,
  options?: DetectOverflowOptions | Derivable<DetectOverflowOptions>,
): Promise<SideObject>;

declare interface DetectOverflowOptions {
  /**
   * The clipping element(s) or area in which overflow will be checked.
   * @default 'clippingAncestors'
   */
  boundary?: Boundary$2;
  /**
   * The root clipping area in which overflow will be checked.
   * @default 'viewport'
   */
  rootBoundary?: RootBoundary;
  /**
   * The element in which overflow is being checked relative to a boundary.
   * @default 'floating'
   */
  elementContext?: ElementContext;
  /**
   * Whether to check for overflow using the alternate element's boundary
   * (`clippingAncestors` boundary only).
   * @default false
   */
  altBoundary?: boolean;
  /**
   * Virtual padding for the resolved overflow detection offsets.
   * @default 0
   */
  padding?: Padding;
}

declare type ElementContext = "reference" | "floating";

declare interface Elements$1 {
  reference: ReferenceElement$1;
  floating: FloatingElement$1;
}

declare type FloatingElement$1 = any;

declare type Middleware$1 = {
  name: string;
  options?: any;
  fn: (state: MiddlewareState$1) => Promisable$1<MiddlewareReturn>;
};

declare interface MiddlewareData {
  [key: string]: any;
  arrow?: Partial<Coords$1> & {
    centerOffset: number;
    alignmentOffset?: number;
  };
  autoPlacement?: {
    index?: number;
    overflows: Array<{
      placement: Placement;
      overflows: Array<number>;
    }>;
  };
  flip?: {
    index?: number;
    overflows: Array<{
      placement: Placement;
      overflows: Array<number>;
    }>;
  };
  hide?: {
    referenceHidden?: boolean;
    escaped?: boolean;
    referenceHiddenOffsets?: SideObject;
    escapedOffsets?: SideObject;
  };
  offset?: Coords$1 & {
    placement: Placement;
  };
  shift?: Coords$1 & {
    enabled: {
      [key in Axis]: boolean;
    };
  };
}

declare interface MiddlewareReturn extends Partial<Coords$1> {
  data?: {
    [key: string]: any;
  };
  reset?:
    | boolean
    | {
        placement?: Placement;
        rects?: boolean | ElementRects;
      };
}

declare interface MiddlewareState$1 extends Coords$1 {
  initialPlacement: Placement;
  placement: Placement;
  strategy: Strategy;
  middlewareData: MiddlewareData;
  elements: Elements$1;
  rects: ElementRects;
  platform: {
    detectOverflow: typeof detectOverflow;
  } & Platform$1;
}

/**
 * Platform interface methods to work with the current platform.
 * @see https://floating-ui.com/docs/platform
 */
declare interface Platform$1 {
  getElementRects: (args: {
    reference: ReferenceElement$1;
    floating: FloatingElement$1;
    strategy: Strategy;
  }) => Promisable$1<ElementRects>;
  getClippingRect: (args: {
    element: any;
    boundary: Boundary$2;
    rootBoundary: RootBoundary;
    strategy: Strategy;
  }) => Promisable$1<Rect>;
  getDimensions: (element: any) => Promisable$1<Dimensions>;
  convertOffsetParentRelativeRectToViewportRelativeRect?: (args: {
    elements?: Elements$1;
    rect: Rect;
    offsetParent: any;
    strategy: Strategy;
  }) => Promisable$1<Rect>;
  getOffsetParent?: (element: any) => Promisable$1<any>;
  isElement?: (value: any) => Promisable$1<boolean>;
  getDocumentElement?: (element: any) => Promisable$1<any>;
  getClientRects?: (element: any) => Promisable$1<Array<ClientRectObject>>;
  isRTL?: (element: any) => Promisable$1<boolean>;
  getScale?: (element: any) => Promisable$1<{
    x: number;
    y: number;
  }>;
  detectOverflow?: typeof detectOverflow;
}

declare type Promisable$1<T> = T | Promise<T>;

declare type ReferenceElement$1 = any;

declare type RootBoundary = "viewport" | "document" | Rect;

/**
 * The clipping boundary area of the floating element.
 */
declare type Boundary$1 = "clippingAncestors" | Element | Array<Element> | Rect;

declare type ComputePositionConfig = Prettify$2<
  Omit<ComputePositionConfig$1, "middleware" | "platform"> & {
    /**
     * Array of middleware objects to modify the positioning or provide data for
     * rendering.
     */
    middleware?: Array<Middleware | null | undefined | false>;
    /**
     * Custom or extended platform object.
     */
    platform?: Platform;
  }
>;

declare interface Elements {
  reference: ReferenceElement;
  floating: FloatingElement;
}

declare type FloatingElement = HTMLElement;

declare type Middleware = Prettify$2<
  Omit<Middleware$1, "fn"> & {
    fn(state: MiddlewareState): Promisable<MiddlewareReturn>;
  }
>;

declare type MiddlewareState = Prettify$2<
  Omit<MiddlewareState$1, "elements"> & {
    elements: Elements;
  }
>;

declare interface Platform {
  getElementRects: (args: {
    reference: ReferenceElement;
    floating: FloatingElement;
    strategy: Strategy;
  }) => Promisable<ElementRects>;
  getClippingRect: (args: {
    element: Element;
    boundary: Boundary$1;
    rootBoundary: RootBoundary;
    strategy: Strategy;
  }) => Promisable<Rect>;
  getDimensions: (element: Element) => Promisable<Dimensions>;
  convertOffsetParentRelativeRectToViewportRelativeRect: (args: {
    elements?: Elements;
    rect: Rect;
    offsetParent: Element;
    strategy: Strategy;
  }) => Promisable<Rect>;
  getOffsetParent: (
    element: Element,
    polyfill?: (element: HTMLElement) => Element | null,
  ) => Promisable<Element | Window>;
  isElement: (value: unknown) => Promisable<boolean>;
  getDocumentElement: (element: Element) => Promisable<HTMLElement>;
  getClientRects: (element: Element) => Promisable<Array<ClientRectObject>>;
  isRTL: (element: Element) => Promisable<boolean>;
  getScale: (element: HTMLElement) => Promisable<{
    x: number;
    y: number;
  }>;
}

declare type Prettify$2<T> = {
  [K in keyof T]: T[K];
} & {};

declare type Promisable<T> = T | Promise<T>;

declare type ReferenceElement = Element | VirtualElement;

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */
declare interface VirtualElement {
  getBoundingClientRect(): ClientRectObject;
  getClientRects?(): Array<ClientRectObject> | DOMRectList;
  contextElement?: Element;
}

declare type Prettify$1<T> = {
  [K in keyof T]: T[K];
} & {};

declare type ReferenceType$1 = Element | VirtualElement;

declare type UseFloatingData = Prettify$1<
  ComputePositionReturn & {
    isPositioned: boolean;
  }
>;

declare type UseFloatingOptions$1<
  RT extends ReferenceType$1 = ReferenceType$1,
> = Prettify$1<
  Partial<ComputePositionConfig> & {
    /**
     * A callback invoked when both the reference and floating elements are
     * mounted, and cleaned up when either is unmounted. This is useful for
     * setting up event listeners (e.g. pass `autoUpdate`).
     */
    whileElementsMounted?: (
      reference: RT,
      floating: HTMLElement,
      update: () => void,
    ) => () => void;
    /**
     * Object containing the reference and floating elements.
     */
    elements?: {
      reference?: RT | null;
      floating?: HTMLElement | null;
    };
    /**
     * The `open` state of the floating element to synchronize with the
     * `isPositioned` value.
     * @default false
     */
    open?: boolean;
    /**
     * Whether to use `transform` for positioning instead of `top` and `left`
     * (layout) in the `floatingStyles` object.
     * @default true
     */
    transform?: boolean;
  }
>;

declare type UseFloatingReturn$1<RT extends ReferenceType$1 = ReferenceType$1> =
  Prettify$1<
    UseFloatingData & {
      /**
       * Update the position of the floating element, re-rendering the component
       * if required.
       */
      update: () => void;
      /**
       * Pre-configured positioning styles to apply to the floating element.
       */
      floatingStyles: React$1.CSSProperties;
      /**
       * Object containing the reference and floating refs and reactive setters.
       */
      refs: {
        /**
         * A React ref to the reference element.
         */
        reference: React$1.MutableRefObject<RT | null>;
        /**
         * A React ref to the floating element.
         */
        floating: React$1.MutableRefObject<HTMLElement | null>;
        /**
         * A callback to set the reference element (reactive).
         */
        setReference: (node: RT | null) => void;
        /**
         * A callback to set the floating element (reactive).
         */
        setFloating: (node: HTMLElement | null) => void;
      };
      /**
       * Object containing the reference and floating elements.
       */
      elements: {
        reference: RT | null;
        floating: HTMLElement | null;
      };
    }
  >;

/**
 * Stores and manages floating elements in a tree structure.
 * This is a backing store for the `FloatingTree` component.
 */
declare class FloatingTreeStore {
  readonly nodesRef: React.RefObject<Array<FloatingNodeType>>;
  readonly events: FloatingEvents;
  addNode(node: FloatingNodeType): void;
  removeNode(node: FloatingNodeType): void;
}

type InteractionType = "mouse" | "touch" | "pen" | "keyboard" | "";

type StateAttributesMapping<State> = {
  [Property in keyof State]?: (
    state: State[Property],
  ) => Record<string, string> | null;
};

type IntrinsicTagName = keyof React$1.JSX.IntrinsicElements;
type RenderFunctionProps<TagName> =
  TagName extends keyof React$1.JSX.IntrinsicElements
    ? React$1.JSX.IntrinsicElements[TagName]
    : React$1.HTMLAttributes<any>;
type UseRenderElementParameters<
  State,
  RenderedElementType extends Element,
  TagName,
  Enabled extends boolean | undefined,
> = {
  /**
   * If `false`, the hook will skip most of its internal logic and return `null`.
   * This is useful for rendering a component conditionally.
   * @default true
   */
  enabled?: Enabled | undefined;
  /**
   * @deprecated
   */
  propGetter?: ((externalProps: HTMLProps) => HTMLProps) | undefined;
  /**
   * The ref to apply to the rendered element.
   */
  ref?:
    | (
        | React$1.Ref<RenderedElementType>
        | (React$1.Ref<RenderedElementType> | undefined)[]
      )
    | undefined;
  /**
   * The state of the component.
   */
  state?: State | undefined;
  /**
   * Intrinsic props to be spread on the rendered element.
   */
  props?:
    | (
        | RenderFunctionProps<TagName>
        | Array<
            | RenderFunctionProps<TagName>
            | undefined
            | ((
                props: RenderFunctionProps<TagName>,
              ) => RenderFunctionProps<TagName>)
          >
      )
    | undefined;
  /**
   * A mapping of state to `data-*` attributes.
   */
  stateAttributesMapping?: StateAttributesMapping<State> | undefined;
};
interface UseRenderElementComponentProps<State> {
  /**
   * The class name to apply to the rendered element.
   * Can be a string or a function that accepts the state and returns a string.
   */
  className?: (string | ((state: State) => string | undefined)) | undefined;
  /**
   * The render prop or React element to override the default element.
   */
  render?:
    | undefined
    | React$1.ReactElement
    | ComponentRenderFn<React$1.HTMLAttributes<any>, State>;
  /**
   * The style to apply to the rendered element.
   * Can be a style object or a function that accepts the state and returns a style object.
   */
  style?:
    | (
        | React$1.CSSProperties
        | ((state: State) => React$1.CSSProperties | undefined)
      )
    | undefined;
}
/**
 * Renders a Base UI element.
 *
 * @param element The default HTML element to render. Can be overridden by the `render` prop.
 * @param componentProps An object containing the `render` and `className` props to be used for element customization. Other props are ignored.
 * @param params Additional parameters for rendering the element.
 */
declare function useRenderElement<
  State extends Record<string, any>,
  RenderedElementType extends Element,
  TagName extends IntrinsicTagName | undefined,
  Enabled extends boolean | undefined = undefined,
>(
  element: TagName,
  componentProps: useRenderElement.ComponentProps<State>,
  params?: useRenderElement.Parameters<
    State,
    RenderedElementType,
    TagName,
    Enabled
  >,
): Enabled extends false ? null : React$1.ReactElement;
declare namespace useRenderElement {
  type Parameters<
    State,
    RenderedElementType extends Element,
    TagName,
    Enabled extends boolean | undefined,
  > = UseRenderElementParameters<State, RenderedElementType, TagName, Enabled>;
  type ComponentProps<State> = UseRenderElementComponentProps<State>;
}

interface UseFloatingPortalNodeProps {
  ref?: React$1.Ref<HTMLDivElement> | undefined;
  container?:
    | (
        | HTMLElement
        | ShadowRoot
        | null
        | React$1.RefObject<HTMLElement | ShadowRoot | null>
      )
    | undefined;
  componentProps?: useRenderElement.ComponentProps<any> | undefined;
  elementProps?: React$1.HTMLAttributes<HTMLDivElement> | undefined;
}
/**
 * Portals the floating element into a given container element — by default,
 * outside of the app root and into the body.
 * This is necessary to ensure the floating element can appear outside any
 * potential parent containers that cause clipping (such as `overflow: hidden`),
 * while retaining its location in the React tree.
 * @see https://floating-ui.com/docs/FloatingPortal
 * @internal
 */
declare const FloatingPortal: React$1.ForwardRefExoticComponent<
  Omit<
    FloatingPortal.Props<any> & {
      renderGuards?: boolean | undefined;
    },
    "ref"
  > &
    React$1.RefAttributes<HTMLDivElement>
>;
declare namespace FloatingPortal {
  interface Props<State> extends BaseUIComponentProps<"div", State> {
    /**
     * A parent element to render the portal element into.
     */
    container?: UseFloatingPortalNodeProps["container"] | undefined;
  }
}

/**
 * Provides data to position a floating element and context to add interactions.
 * @see https://floating-ui.com/docs/useFloating
 */
declare function useFloating(options?: UseFloatingOptions): UseFloatingReturn;

/**
 * Data structure to keep track of popup trigger elements by their IDs.
 * Uses both a set of Elements and a map of IDs to Elements for efficient lookups.
 */
declare class PopupTriggerMap {
  private elementsSet;
  private idMap;
  constructor();
  /**
   * Adds a trigger element with the given ID.
   *
   * Note: The provided element is assumed to not be registered under multiple IDs.
   */
  add(id: string, element: Element): void;
  /**
   * Removes the trigger element with the given ID.
   */
  delete(id: string): void;
  /**
   * Whether the given element is registered as a trigger.
   */
  hasElement(element: Element): boolean;
  /**
   * Whether there is a registered trigger element matching the given predicate.
   */
  hasMatchingElement(predicate: (el: Element) => boolean): boolean;
  /**
   * Returns the trigger element associated with the given ID, or undefined if no such element exists.
   */
  getById(id: string): Element | undefined;
  /**
   * Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
   */
  entries(): IterableIterator<[string, Element]>;
  /**
   * Returns an iterable of all registered trigger elements.
   */
  elements(): IterableIterator<Element>;
  /**
   * Returns the number of registered trigger elements.
   */
  get size(): number;
}

/**
 * State common to all popup stores.
 */
type PopupStoreState<Payload> = {
  /**
   * Whether the popup is open (internal state).
   */
  open: boolean;
  /**
   * Whether the popup is open (external prop).
   */
  readonly openProp: boolean | undefined;
  /**
   * Whether the popup should be mounted in the DOM.
   * This usually follows `open` but can be different during exit transitions.
   */
  mounted: boolean;
  /**
   * The current enter/exit transition status of the popup.
   */
  transitionStatus: TransitionStatus;
  floatingRootContext: FloatingRootContext;
  /**
   * Whether to prevent unmounting the popup when closed.
   * Useful for interactling with JS animation libraries that control unmounting themselves.
   */
  preventUnmountingOnClose: boolean;
  /**
   * Optional payload set by the trigger.
   */
  payload: Payload | undefined;
  /**
   * ID of the currently active trigger.
   */
  activeTriggerId: string | null;
  /**
   * The currently active trigger DOM element.
   */
  activeTriggerElement: Element | null;
  /**
   * ID of the trigger (external prop).
   */
  readonly triggerIdProp: string | null | undefined;
  /**
   * The popup DOM element.
   */
  popupElement: HTMLElement | null;
  /**
   * The positioner DOM element.
   */
  positionerElement: HTMLElement | null;
  /**
   * Props to spread onto the active trigger element.
   */
  activeTriggerProps: HTMLProps;
  /**
   * Props to spread onto inactive trigger elements.
   */
  inactiveTriggerProps: HTMLProps;
  /**
   * Props to spread onto the popup element.
   */
  popupProps: HTMLProps;
};
type PopupStoreContext<ChangeEventDetails> = {
  /**
   * Map of registered trigger elements.
   */
  readonly triggerElements: PopupTriggerMap;
  /**
   * Reference to the popup element.
   */
  readonly popupRef: React.RefObject<HTMLElement | null>;
  /**
   * Callback fired when the open state changes.
   */
  onOpenChange?:
    | ((open: boolean, eventDetails: ChangeEventDetails) => void)
    | undefined;
  /**
   * Callback fired when the open state change animation completes.
   */
  onOpenChangeComplete: ((open: boolean) => void) | undefined;
};

type PayloadChildRenderFunction<Payload> = (arg: {
  payload: Payload | undefined;
}) => React$1.ReactNode;

type Prettify<T> = { [K in keyof T]: T[K] } & {};
type NarrowedElement<T> = T extends Element ? T : Element;
interface ExtendedRefs {
  reference: React$1.RefObject<ReferenceType | null>;
  floating: React$1.RefObject<HTMLElement | null>;
  domReference: React$1.RefObject<NarrowedElement<ReferenceType> | null>;
  setReference(node: ReferenceType | null): void;
  setFloating(node: HTMLElement | null): void;
  setPositionReference(node: ReferenceType | null): void;
}
interface ExtendedElements {
  reference: ReferenceType | null;
  floating: HTMLElement | null;
  domReference: NarrowedElement<ReferenceType> | null;
}
interface FloatingEvents {
  emit<T extends string>(event: T, data?: any): void;
  on(event: string, handler: (data: any) => void): void;
  off(event: string, handler: (data: any) => void): void;
}
interface ContextData {
  openEvent?: Event | undefined;
  floatingContext?: FloatingContext | undefined;
  /** @deprecated use `onTypingChange` prop in `useTypeahead` */
  typing?: boolean | undefined;
  [key: string]: any;
}
type FloatingRootContext = FloatingRootStore;
type FloatingContext = Omit<
  UseFloatingReturn$1<ReferenceType>,
  "refs" | "elements"
> & {
  open: boolean;
  onOpenChange(
    open: boolean,
    eventDetails: BaseUIChangeEventDetails<string>,
  ): void;
  events: FloatingEvents;
  dataRef: React$1.RefObject<ContextData>;
  nodeId: string | undefined;
  floatingId: string | undefined;
  refs: ExtendedRefs;
  elements: ExtendedElements;
  rootStore: FloatingRootContext;
};
interface FloatingNodeType {
  id: string | undefined;
  parentId: string | null;
  context?: FloatingContext | undefined;
}
type ReferenceType = Element | VirtualElement;
type UseFloatingReturn = Prettify<
  UseFloatingReturn$1 & {
    /**
     * `FloatingContext`
     */
    context: Prettify<FloatingContext>;
    /**
     * Object containing the reference and floating refs and reactive setters.
     */
    refs: ExtendedRefs;
    elements: ExtendedElements;
  }
>;
interface UseFloatingOptions extends Omit<UseFloatingOptions$1, "elements"> {
  rootContext?: FloatingRootContext | undefined;
  /**
   * Object of external elements as an alternative to the `refs` object setters.
   */
  elements?:
    | {
        /**
         * Externally passed reference element. Store in state.
         */
        reference?: (ReferenceType | null) | undefined;
        /**
         * Externally passed floating element. Store in state.
         */
        floating?: (HTMLElement | null) | undefined;
      }
    | undefined;
  /**
   * An event callback that is invoked when the floating element is opened or
   * closed.
   */
  onOpenChange?(
    open: boolean,
    eventDetails: BaseUIChangeEventDetails<string>,
  ): void;
  /**
   * Unique node id when using `FloatingTree`.
   */
  nodeId?: string | undefined;
  /**
   * External FlatingTree to use when the one provided by context can't be used.
   */
  externalTree?: FloatingTreeStore | undefined;
}

interface FloatingRootState {
  open: boolean;
  domReferenceElement: Element | null;
  referenceElement: ReferenceType | null;
  floatingElement: HTMLElement | null;
  positionReference: ReferenceType | null;
  /**
   * The ID of the floating element.
   */
  floatingId: string | undefined;
}
interface FloatingRootStoreContext {
  onOpenChange:
    | ((open: boolean, eventDetails: BaseUIChangeEventDetails<string>) => void)
    | undefined;
  readonly dataRef: React$1.RefObject<ContextData>;
  readonly events: FloatingEvents;
  nested: boolean;
  noEmit: boolean;
  readonly triggerElements: PopupTriggerMap;
}
declare const selectors$5: {
  open: (state: FloatingRootState) => boolean;
  domReferenceElement: (state: FloatingRootState) => Element | null;
  referenceElement: (state: FloatingRootState) => ReferenceType | null;
  floatingElement: (state: FloatingRootState) => HTMLElement | null;
  floatingId: (state: FloatingRootState) => string | undefined;
};
interface FloatingRootStoreOptions {
  open: boolean;
  referenceElement: ReferenceType | null;
  floatingElement: HTMLElement | null;
  triggerElements: PopupTriggerMap;
  floatingId: string | undefined;
  nested: boolean;
  noEmit: boolean;
  onOpenChange:
    | ((open: boolean, eventDetails: BaseUIChangeEventDetails<string>) => void)
    | undefined;
}
declare class FloatingRootStore extends ReactStore<
  Readonly<FloatingRootState>,
  FloatingRootStoreContext,
  typeof selectors$5
> {
  constructor(options: FloatingRootStoreOptions);
  /**
   * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
   *
   * @param newOpen The new open state.
   * @param eventDetails Details about the event that triggered the open state change.
   */
  setOpen: (
    newOpen: boolean,
    eventDetails: BaseUIChangeEventDetails<string>,
  ) => void;
}

interface DialogRootProps<Payload = unknown> {
  /**
   * Whether the dialog is currently open.
   */
  open?: boolean | undefined;
  /**
   * Whether the dialog is initially open.
   *
   * To render a controlled dialog, use the `open` prop instead.
   * @default false
   */
  defaultOpen?: boolean | undefined;
  /**
   * Determines if the dialog enters a modal state when open.
   * - `true`: user interaction is limited to just the dialog: focus is trapped, document page scroll is locked, and pointer interactions on outside elements are disabled.
   * - `false`: user interaction with the rest of the document is allowed.
   * - `'trap-focus'`: focus is trapped inside the dialog, but document page scroll is not locked and pointer interactions outside of it remain enabled.
   * @default true
   */
  modal?: (boolean | "trap-focus") | undefined;
  /**
   * Event handler called when the dialog is opened or closed.
   */
  onOpenChange?:
    | ((open: boolean, eventDetails: DialogRoot.ChangeEventDetails) => void)
    | undefined;
  /**
   * Event handler called after any animations complete when the dialog is opened or closed.
   */
  onOpenChangeComplete?: ((open: boolean) => void) | undefined;
  /**
   * Determines whether the dialog should close on outside clicks.
   * @default false
   */
  disablePointerDismissal?: boolean | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: When specified, the dialog will not be unmounted when closed.
   * Instead, the `unmount` function must be called to unmount the dialog manually.
   * Useful when the dialog's animation is controlled by an external library.
   * - `close`: Closes the dialog imperatively when called.
   */
  actionsRef?: React$1.RefObject<DialogRoot.Actions | null> | undefined;
  /**
   * A handle to associate the dialog with a trigger.
   * If specified, allows external triggers to control the dialog's open state.
   * Can be created with the Dialog.createHandle() method.
   */
  handle?: DialogHandle<Payload> | undefined;
  /**
   * The content of the dialog.
   * This can be a regular React node or a render function that receives the `payload` of the active trigger.
   */
  children?: React$1.ReactNode | PayloadChildRenderFunction<Payload>;
  /**
   * ID of the trigger that the dialog is associated with.
   * This is useful in conjunction with the `open` prop to create a controlled dialog.
   * There's no need to specify this prop when the popover is uncontrolled (i.e. when the `open` prop is not set).
   */
  triggerId?: (string | null) | undefined;
  /**
   * ID of the trigger that the dialog is associated with.
   * This is useful in conjunction with the `defaultOpen` prop to create an initially open dialog.
   */
  defaultTriggerId?: (string | null) | undefined;
}
interface DialogRootActions {
  unmount: () => void;
  close: () => void;
}
type DialogRootChangeEventReason =
  | typeof triggerPress
  | typeof outsidePress
  | typeof escapeKey
  | typeof closePress
  | typeof focusOut
  | typeof imperativeAction
  | typeof none;
type DialogRootChangeEventDetails =
  BaseUIChangeEventDetails<DialogRoot.ChangeEventReason> & {
    preventUnmountOnClose(): void;
  };
/**
 * Groups all parts of the dialog.
 * Doesn’t render its own HTML element.
 *
 * Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
 */
declare function DialogRoot<Payload>(
  props: DialogRoot.Props<Payload>,
): react_jsx_runtime.JSX.Element;
declare namespace DialogRoot {
  type Props<Payload = unknown> = DialogRootProps<Payload>;
  type Actions = DialogRootActions;
  type ChangeEventReason = DialogRootChangeEventReason;
  type ChangeEventDetails = DialogRootChangeEventDetails;
}

type State$4<Payload> = PopupStoreState<Payload> & {
  modal: boolean | "trap-focus";
  disablePointerDismissal: boolean;
  openMethod: InteractionType | null;
  nested: boolean;
  nestedOpenDialogCount: number;
  titleElementId: string | undefined;
  descriptionElementId: string | undefined;
  viewportElement: HTMLElement | null;
  role: "dialog" | "alertdialog";
};
type Context$4 = PopupStoreContext<DialogRoot.ChangeEventDetails> & {
  readonly popupRef: React$1.RefObject<HTMLElement | null>;
  readonly backdropRef: React$1.RefObject<HTMLDivElement | null>;
  readonly internalBackdropRef: React$1.RefObject<HTMLDivElement | null>;
  readonly outsidePressEnabledRef: React$1.MutableRefObject<boolean>;
  readonly onNestedDialogOpen?:
    | ((ownChildrenCount: number) => void)
    | undefined;
  readonly onNestedDialogClose?: (() => void) | undefined;
};
declare const selectors$4: {
  modal: (state: State$4<unknown>) => boolean | "trap-focus";
  nested: (state: State$4<unknown>) => boolean;
  nestedOpenDialogCount: (state: State$4<unknown>) => number;
  disablePointerDismissal: (state: State$4<unknown>) => boolean;
  openMethod: (state: State$4<unknown>) => InteractionType | null;
  descriptionElementId: (state: State$4<unknown>) => string | undefined;
  titleElementId: (state: State$4<unknown>) => string | undefined;
  viewportElement: (state: State$4<unknown>) => HTMLElement | null;
  role: (state: State$4<unknown>) => "dialog" | "alertdialog";
  open: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  mounted: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  transitionStatus: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => TransitionStatus;
  floatingRootContext: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => FloatingRootStore;
  preventUnmountingOnClose: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  payload: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => unknown;
  activeTriggerId: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => string | null;
  activeTriggerElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => Element | null;
  isTriggerActive: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  isOpenedByTrigger: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  isMountedByTrigger: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  triggerProps: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    isActive: boolean,
  ) => HTMLProps;
  popupProps: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLProps;
  popupElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLElement | null;
  positionerElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLElement | null;
};
declare class DialogStore<Payload> extends ReactStore<
  Readonly<State$4<Payload>>,
  Context$4,
  typeof selectors$4
> {
  constructor(initialState?: Partial<State$4<Payload>>);
  setOpen: (
    nextOpen: boolean,
    eventDetails: Omit<DialogRoot.ChangeEventDetails, "preventUnmountOnClose">,
  ) => void;
}

/**
 * A handle to control a Dialog imperatively and to associate detached triggers with it.
 */
declare class DialogHandle<Payload> {
  /**
   * Internal store holding the dialog state.
   * @internal
   */
  readonly store: DialogStore<Payload>;
  constructor(store?: DialogStore<Payload>);
  /**
   * Opens the dialog and associates it with the trigger with the given id.
   * The trigger, if provided, must be a Dialog.Trigger component with this handle passed as a prop.
   *
   * This method should only be called in an event handler or an effect (not during rendering).
   *
   * @param triggerId ID of the trigger to associate with the dialog. If null, the dialog will open without a trigger association.
   */
  open(triggerId: string | null): void;
  /**
   * Opens the dialog and sets the payload.
   * Does not associate the dialog with any trigger.
   *
   * @param payload Payload to set when opening the dialog.
   */
  openWithPayload(payload: Payload): void;
  /**
   * Closes the dialog.
   */
  close(): void;
  /**
   * Indicates whether the dialog is currently open.
   */
  get isOpen(): boolean;
}
/**
 * Creates a new handle to connect a Dialog.Root with detached Dialog.Trigger components.
 */
declare function createDialogHandle<Payload>(): DialogHandle<Payload>;

interface AlertDialogRootProps<Payload = unknown> extends Omit<
  DialogRoot.Props<Payload>,
  "modal" | "disablePointerDismissal" | "onOpenChange" | "actionsRef" | "handle"
> {
  /**
   * Event handler called when the dialog is opened or closed.
   */
  onOpenChange?:
    | ((
        open: boolean,
        eventDetails: AlertDialogRoot.ChangeEventDetails,
      ) => void)
    | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: When specified, the dialog will not be unmounted when closed.
   * Instead, the `unmount` function must be called to unmount the dialog manually.
   * Useful when the dialog's animation is controlled by an external library.
   * - `close`: Closes the dialog imperatively when called.
   */
  actionsRef?: React$1.RefObject<AlertDialogRoot.Actions | null> | undefined;
  /**
   * A handle to associate the alert dialog with a trigger.
   * If specified, allows external triggers to control the alert dialog's open state.
   * Can be created with the AlertDialog.createHandle() method.
   */
  handle?: DialogHandle<Payload> | undefined;
}
type AlertDialogRootActions = DialogRoot.Actions;
type AlertDialogRootChangeEventReason = DialogRoot.ChangeEventReason;
type AlertDialogRootChangeEventDetails =
  BaseUIChangeEventDetails<AlertDialogRoot.ChangeEventReason> & {
    preventUnmountOnClose(): void;
  };
/**
 * Groups all parts of the alert dialog.
 * Doesn’t render its own HTML element.
 *
 * Documentation: [Base UI Alert Dialog](https://base-ui.com/react/components/alert-dialog)
 */
declare function AlertDialogRoot<Payload>(
  props: AlertDialogRoot.Props<Payload>,
): react_jsx_runtime.JSX.Element;
declare namespace AlertDialogRoot {
  type Props<Payload = unknown> = AlertDialogRootProps<Payload>;
  type Actions = AlertDialogRootActions;
  type ChangeEventReason = AlertDialogRootChangeEventReason;
  type ChangeEventDetails = AlertDialogRootChangeEventDetails;
}

interface DialogBackdropProps extends BaseUIComponentProps<
  "div",
  DialogBackdrop.State
> {
  /**
   * Whether the backdrop is forced to render even when nested.
   * @default false
   */
  forceRender?: boolean | undefined;
}
interface DialogBackdropState {
  /**
   * Whether the dialog is currently open.
   */
  open: boolean;
  transitionStatus: TransitionStatus;
}
/**
 * An overlay displayed beneath the popup.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
 */
declare const DialogBackdrop: React$1.ForwardRefExoticComponent<
  Omit<DialogBackdropProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace DialogBackdrop {
  type Props = DialogBackdropProps;
  type State = DialogBackdropState;
}

interface DialogCloseProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", DialogClose.State> {}
interface DialogCloseState {
  /**
   * Whether the button is currently disabled.
   */
  disabled: boolean;
}
/**
 * A button that closes the dialog.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
 */
declare const DialogClose: React$1.ForwardRefExoticComponent<
  Omit<DialogCloseProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace DialogClose {
  type Props = DialogCloseProps;
  type State = DialogCloseState;
}

interface DialogDescriptionProps extends BaseUIComponentProps<
  "p",
  DialogDescription.State
> {}
interface DialogDescriptionState {}
/**
 * A paragraph with additional information about the dialog.
 * Renders a `<p>` element.
 *
 * Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
 */
declare const DialogDescription: React$1.ForwardRefExoticComponent<
  Omit<DialogDescriptionProps, "ref"> &
    React$1.RefAttributes<HTMLParagraphElement>
>;
declare namespace DialogDescription {
  type Props = DialogDescriptionProps;
  type State = DialogDescriptionState;
}

interface DialogPopupProps extends BaseUIComponentProps<
  "div",
  DialogPopup.State
> {
  /**
   * Determines the element to focus when the dialog is opened.
   *
   * - `false`: Do not move focus.
   * - `true`: Move focus based on the default behavior (first tabbable element or popup).
   * - `RefObject`: Move focus to the ref element.
   * - `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).
   *   Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.
   */
  initialFocus?:
    | (
        | boolean
        | React$1.RefObject<HTMLElement | null>
        | ((openType: InteractionType) => boolean | HTMLElement | null | void)
      )
    | undefined;
  /**
   * Determines the element to focus when the dialog is closed.
   *
   * - `false`: Do not move focus.
   * - `true`: Move focus based on the default behavior (trigger or previously focused element).
   * - `RefObject`: Move focus to the ref element.
   * - `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).
   *   Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.
   */
  finalFocus?:
    | (
        | boolean
        | React$1.RefObject<HTMLElement | null>
        | ((closeType: InteractionType) => boolean | HTMLElement | null | void)
      )
    | undefined;
}
interface DialogPopupState {
  /**
   * Whether the dialog is currently open.
   */
  open: boolean;
  transitionStatus: TransitionStatus;
  /**
   * Whether the dialog is nested within a parent dialog.
   */
  nested: boolean;
  /**
   * Whether the dialog has nested dialogs open.
   */
  nestedDialogOpen: boolean;
}
/**
 * A container for the dialog contents.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
 */
declare const DialogPopup: React$1.ForwardRefExoticComponent<
  Omit<DialogPopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace DialogPopup {
  type Props = DialogPopupProps;
  type State = DialogPopupState;
}

interface DialogPortalProps extends FloatingPortal.Props<DialogPortal.State> {
  /**
   * Whether to keep the portal mounted in the DOM while the popup is hidden.
   * @default false
   */
  keepMounted?: boolean | undefined;
  /**
   * A parent element to render the portal element into.
   */
  container?: FloatingPortal.Props<DialogPortal.State>["container"] | undefined;
}
/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
 */
declare const DialogPortal: React$1.ForwardRefExoticComponent<
  Omit<DialogPortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace DialogPortal {
  interface State {}
}
declare namespace DialogPortal {
  type Props = DialogPortalProps;
}

interface DialogTitleProps extends BaseUIComponentProps<
  "h2",
  DialogTitle.State
> {}
interface DialogTitleState {}
/**
 * A heading that labels the dialog.
 * Renders an `<h2>` element.
 *
 * Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
 */
declare const DialogTitle: React$1.ForwardRefExoticComponent<
  Omit<DialogTitleProps, "ref"> & React$1.RefAttributes<HTMLHeadingElement>
>;
declare namespace DialogTitle {
  type Props = DialogTitleProps;
  type State = DialogTitleState;
}

interface DialogTriggerProps<Payload = unknown>
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", DialogTrigger.State> {
  /**
   * A handle to associate the trigger with a dialog.
   * Can be created with the Dialog.createHandle() method.
   */
  handle?: DialogHandle<Payload> | undefined;
  /**
   * A payload to pass to the dialog when it is opened.
   */
  payload?: Payload | undefined;
  /**
   * ID of the trigger. In addition to being forwarded to the rendered element,
   * it is also used to specify the active trigger for the dialogs in controlled mode (with the DialogRoot `triggerId` prop).
   */
  id?: string | undefined;
}
interface DialogTriggerState {
  /**
   * Whether the dialog is currently disabled.
   */
  disabled: boolean;
  /**
   * Whether the dialog is currently open.
   */
  open: boolean;
}
/**
 * A button that opens the dialog.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
 */
declare const DialogTrigger: DialogTrigger;
interface DialogTrigger {
  <Payload>(
    componentProps: DialogTriggerProps<Payload> &
      React$1.RefAttributes<HTMLElement>,
  ): React$1.JSX.Element;
}
declare namespace DialogTrigger {
  type Props<Payload = unknown> = DialogTriggerProps<Payload>;
  type State = DialogTriggerState;
}

interface DialogViewportState {
  /**
   * Whether the dialog is currently open.
   */
  open: boolean;
  transitionStatus: TransitionStatus;
  /**
   * Whether the dialog is nested within another dialog.
   */
  nested: boolean;
  /**
   * Whether the dialog has nested dialogs open.
   */
  nestedDialogOpen: boolean;
}
interface DialogViewportProps extends BaseUIComponentProps<
  "div",
  DialogViewportState
> {}
/**
 * A positioning container for the dialog popup that can be made scrollable.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
 */
declare const DialogViewport: React$1.ForwardRefExoticComponent<
  Omit<DialogViewportProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace DialogViewport {
  type State = DialogViewportState;
  type Props = DialogViewportProps;
}

declare function createAlertDialogHandle<Payload>(): DialogHandle<Payload>;

declare namespace index_parts$q {
  export {
    DialogBackdrop as Backdrop,
    DialogClose as Close,
    DialogDescription as Description,
    DialogHandle as Handle,
    DialogPopup as Popup,
    DialogPortal as Portal,
    AlertDialogRoot as Root,
    DialogTitle as Title,
    DialogTrigger as Trigger,
    DialogViewport as Viewport,
    createAlertDialogHandle as createHandle,
  };
}

interface Group<Item = any> {
  value: unknown;
  items: Item[];
}

type SelectionMode = "single" | "multiple" | "none";
type ComboboxItemValueType<
  ItemValue,
  Mode extends SelectionMode,
> = Mode extends "multiple" ? ItemValue[] : ItemValue;
interface ComboboxRootProps$1<ItemValue> {
  children?: React$1.ReactNode;
  /**
   * Identifies the field when a form is submitted.
   */
  name?: string | undefined;
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
  autoHighlight?: (boolean | "always") | undefined;
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
  inputValue?: React$1.ComponentProps<"input">["value"] | undefined;
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
  defaultInputValue?:
    | React$1.ComponentProps<"input">["defaultValue"]
    | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: When specified, the combobox will not be unmounted when closed.
   * Instead, the `unmount` function must be called to unmount the combobox manually.
   * Useful when the combobox's animation is controlled by an external library.
   */
  actionsRef?: React$1.RefObject<AriaCombobox.Actions | null> | undefined;
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
  inputRef?: React$1.Ref<HTMLInputElement> | undefined;
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
  items?: (readonly any[] | readonly Group<any>[]) | undefined;
  /**
   * Filtered items to display in the list.
   * When provided, the list will use these items instead of filtering the `items` prop internally.
   * Use when you want to control filtering logic externally with the `useFilter()` hook.
   */
  filteredItems?: (readonly any[] | readonly Group<any>[]) | undefined;
  /**
   * Filter function used to match items vs input query.
   */
  filter?:
    | (
        | null
        | ((
            itemValue: ItemValue,
            query: string,
            itemToString?: (itemValue: ItemValue) => string,
          ) => boolean)
      )
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
  autoComplete?: ("list" | "both" | "inline" | "none") | undefined;
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
  defaultSelectedValue?:
    | (ComboboxItemValueType<Value, Mode> | null)
    | undefined;
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
): React$1.JSX.Element;
declare function AriaCombobox<Value, Mode extends SelectionMode = "none">(
  props: Omit<AriaComboboxProps<Value, Mode>, "items"> & {
    items?: readonly any[] | undefined;
  },
): React$1.JSX.Element;
declare namespace AriaCombobox {
  type Props<Value, Mode extends SelectionMode = "none"> = AriaComboboxProps<
    Value,
    Mode
  >;
  interface State {}
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

type AutocompleteRootState = AriaCombobox.State;
interface AutocompleteRootActions {
  unmount: () => void;
}
type AutocompleteRootChangeEventReason = AriaCombobox.ChangeEventReason;
type AutocompleteRootChangeEventDetails = AriaCombobox.ChangeEventDetails;
type AutocompleteRootHighlightEventReason = AriaCombobox.HighlightEventReason;
type AutocompleteRootHighlightEventDetails = AriaCombobox.HighlightEventDetails;
interface AutocompleteRootProps<ItemValue> extends Omit<
  AriaCombobox.Props<ItemValue, "none">,
  | "selectionMode"
  | "selectedValue"
  | "defaultSelectedValue"
  | "onSelectedValueChange"
  | "fillInputOnItemPress"
  | "itemToStringValue"
  | "isItemEqualToValue"
  | "inputValue"
  | "defaultInputValue"
  | "onInputValueChange"
  | "autoComplete"
  | "formAutoComplete"
  | "itemToStringLabel"
  | "autoHighlight"
  | "keepHighlight"
  | "highlightItemOnHover"
  | "actionsRef"
  | "onOpenChange"
  | "openOnInputClick"
> {
  /**
   * Controls how the autocomplete behaves with respect to list filtering and inline autocompletion.
   * - `list` (default): items are dynamically filtered based on the input value. The input value does not change based on the active item.
   * - `both`: items are dynamically filtered based on the input value, which will temporarily change based on the active item (inline autocompletion).
   * - `inline`: items are static (not filtered), and the input value will temporarily change based on the active item (inline autocompletion).
   * - `none`: items are static (not filtered), and the input value will not change based on the active item.
   * @default 'list'
   */
  mode?: ("list" | "both" | "inline" | "none") | undefined;
  /**
   * Whether the first matching item is highlighted automatically.
   * - `true`: highlight after the user types and keep the highlight while the query changes.
   * - `'always'`: always highlight the first item.
   * @default false
   */
  autoHighlight?: (boolean | "always") | undefined;
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
   * The uncontrolled input value of the autocomplete when it's initially rendered.
   *
   * To render a controlled autocomplete, use the `value` prop instead.
   */
  defaultValue?:
    | AriaCombobox.Props<
        React$1.ComponentProps<"input">["defaultValue"],
        "none"
      >["defaultInputValue"]
    | undefined;
  /**
   * The input value of the autocomplete. Use when controlled.
   */
  value?:
    | AriaCombobox.Props<
        React$1.ComponentProps<"input">["value"],
        "none"
      >["inputValue"]
    | undefined;
  /**
   * Event handler called when the input value of the autocomplete changes.
   */
  onValueChange?:
    | ((
        value: string,
        eventDetails: AutocompleteRootChangeEventDetails,
      ) => void)
    | undefined;
  /**
   * Whether clicking an item should submit the autocomplete's owning form.
   * By default, clicking an item via a pointer or <kbd>Enter</kbd> key does not submit the owning form.
   * Useful when the autocomplete is used as a single-field form search input.
   * @default false
   */
  submitOnItemClick?:
    | AriaCombobox.Props<ItemValue, "none">["submitOnItemClick"]
    | undefined;
  /**
   * When the item values are objects (`<Autocomplete.Item value={object}>`), this function converts the object value to a string representation for both display in the input and form submission.
   * If the shape of the object is `{ value, label }`, the label will be used automatically without needing to specify this prop.
   */
  itemToStringValue?: ((itemValue: ItemValue) => string) | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: When specified, the autocomplete will not be unmounted when closed.
   * Instead, the `unmount` function must be called to unmount the autocomplete manually.
   * Useful when the autocomplete's animation is controlled by an external library.
   */
  actionsRef?: React$1.RefObject<AutocompleteRootActions | null> | undefined;
  /**
   * Event handler called when the popup is opened or closed.
   */
  onOpenChange?:
    | ((
        open: boolean,
        eventDetails: AutocompleteRootChangeEventDetails,
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
        highlightedValue: ItemValue | undefined,
        eventDetails: AutocompleteRootHighlightEventDetails,
      ) => void)
    | undefined;
  /**
   * Whether the popup opens when clicking the input.
   * @default false
   */
  openOnInputClick?: boolean | undefined;
}
/**
 * Groups all parts of the autocomplete.
 * Doesn't render its own HTML element.
 *
 * Documentation: [Base UI Autocomplete](https://base-ui.com/react/components/autocomplete)
 */
declare function AutocompleteRoot<
  Items extends readonly {
    items: readonly any[];
  }[],
>(
  props: Omit<
    AutocompleteRoot.Props<Items[number]["items"][number]>,
    "items"
  > & {
    /**
     * The items to be displayed in the list.
     * Can be either a flat array of items or an array of groups with items.
     */
    items: Items;
  },
): React$1.JSX.Element;
declare function AutocompleteRoot<ItemValue>(
  props: Omit<AutocompleteRoot.Props<ItemValue>, "items"> & {
    /**
     * The items to be displayed in the list.
     * Can be either a flat array of items or an array of groups with items.
     */
    items?: readonly ItemValue[] | undefined;
  },
): React$1.JSX.Element;
declare namespace AutocompleteRoot {
  type Props<ItemValue> = AutocompleteRootProps<ItemValue>;
  type State = AutocompleteRootState;
  type Actions = AutocompleteRootActions;
  type ChangeEventReason = AutocompleteRootChangeEventReason;
  type ChangeEventDetails = AutocompleteRootChangeEventDetails;
  type HighlightEventReason = AutocompleteRootHighlightEventReason;
  type HighlightEventDetails = AutocompleteRootHighlightEventDetails;
}

interface AutocompleteValueState {}
interface AutocompleteValueProps {
  children?: React$1.ReactNode | ((value: string) => React$1.ReactNode);
}
/**
 * The current value of the autocomplete.
 * Doesn't render its own HTML element.
 *
 * Documentation: [Base UI Autocomplete](https://base-ui.com/react/components/autocomplete)
 */
declare function AutocompleteValue(
  props: AutocompleteValue.Props,
): React$1.ReactElement;
declare namespace AutocompleteValue {
  type State = AutocompleteValueState;
  type Props = AutocompleteValueProps;
}

type Errors = Record<string, string | string[]>;
interface FormContext {
  errors: Errors;
  clearErrors: (name: string | undefined) => void;
  formRef: React$1.RefObject<{
    fields: Map<
      string,
      {
        name: string | undefined;
        validate: (flushSync?: boolean | undefined) => void;
        validityData: FieldValidityData;
        controlRef: React$1.RefObject<HTMLElement | null>;
        getValue: () => unknown;
      }
    >;
  }>;
  validationMode: Form.ValidationMode;
  submitAttemptedRef: React$1.RefObject<boolean>;
}
declare const FormContext: React$1.Context<FormContext>;

type FormSubmitEventReason = typeof none;
type FormSubmitEventDetails = BaseUIGenericEventDetails<Form.SubmitEventReason>;
type FormValidationMode = "onSubmit" | "onBlur" | "onChange";
interface FormActions {
  validate: (fieldName?: string | undefined) => void;
}
interface FormState {}
interface FormProps<
  FormValues extends Record<string, any> = Record<string, any>,
> extends BaseUIComponentProps<"form", Form.State> {
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
  actionsRef?: React$1.RefObject<Form.Actions | null> | undefined;
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
      ref?: React$1.Ref<HTMLFormElement> | undefined;
    },
  ): React$1.JSX.Element;
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
  /** Whether the component should ignore user interaction. */
  disabled: boolean;
  touched: boolean;
  dirty: boolean;
  valid: boolean | null;
  filled: boolean;
  focused: boolean;
}
interface FieldRootProps extends BaseUIComponentProps<"div", FieldRoot.State> {
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
  actionsRef?: React$1.RefObject<FieldRoot.Actions | null> | undefined;
}
/**
 * Groups all parts of the field.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */
declare const FieldRoot: React$1.ForwardRefExoticComponent<
  Omit<FieldRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace FieldRoot {
  type State = FieldRootState;
  type Props = FieldRootProps;
  type Actions = FieldRootActions;
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
   */
  side?: ("flip" | "none") | undefined;
  /**
   * How to avoid collisions on the align axis.
   */
  align?: ("flip" | "shift" | "none") | undefined;
  /**
   * If both sides on the preferred axis do not fit, determines whether to fallback
   * to a side on the perpendicular axis and which logical side to prefer.
   */
  fallbackAxisSide?: ("start" | "end" | "none") | undefined;
}
interface SideShiftMode {
  /**
   * How to avoid collisions on the side axis.
   */
  side?: ("shift" | "none") | undefined;
  /**
   * How to avoid collisions on the align axis.
   */
  align?: ("shift" | "none") | undefined;
  /**
   * If both sides on the preferred axis do not fit, determines whether to fallback
   * to a side on the perpendicular axis and which logical side to prefer.
   */
  fallbackAxisSide?: ("start" | "end" | "none") | undefined;
}
type CollisionAvoidance = SideFlipMode | SideShiftMode;
interface UseAnchorPositioningSharedParameters {
  /**
   * An element to position the popup against.
   * By default, the popup will be positioned against the trigger.
   */
  anchor?:
    | (
        | Element
        | null
        | VirtualElement
        | React$1.RefObject<Element | null>
        | (() => Element | VirtualElement | null)
      )
    | undefined;
  /**
   * Determines which CSS `position` property to use.
   * @default 'absolute'
   */
  positionMethod?: ("absolute" | "fixed") | undefined;
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
  sideOffset?: (number | OffsetFunction) | undefined;
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
  alignOffset?: (number | OffsetFunction) | undefined;
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
interface UseAnchorPositioningParameters
  extends useAnchorPositioning.SharedParameters {
  keepMounted?: boolean | undefined;
  trackCursorAxis?: ("none" | "x" | "y" | "both") | undefined;
  floatingRootContext?: FloatingRootContext | undefined;
  mounted: boolean;
  disableAnchorTracking: boolean;
  nodeId?: string | undefined;
  adaptiveOrigin?: Middleware | undefined;
  collisionAvoidance: CollisionAvoidance;
  shiftCrossAxis?: boolean | undefined;
  lazyFlip?: boolean | undefined;
  externalTree?: FloatingTreeStore | undefined;
}
interface UseAnchorPositioningReturnValue {
  positionerStyles: React$1.CSSProperties;
  arrowStyles: React$1.CSSProperties;
  arrowRef: React$1.RefObject<Element | null>;
  arrowUncentered: boolean;
  side: Side;
  align: Align;
  physicalSide: Side$1;
  anchorHidden: boolean;
  refs: ReturnType<typeof useFloating>["refs"];
  context: FloatingContext;
  isPositioned: boolean;
  update: () => void;
}
/**
 * Provides standardized anchor positioning behavior for floating elements. Wraps Floating UI's
 * `useFloating` hook.
 */
declare function useAnchorPositioning(
  params: useAnchorPositioning.Parameters,
): useAnchorPositioning.ReturnValue;
declare namespace useAnchorPositioning {
  type SharedParameters = UseAnchorPositioningSharedParameters;
  type Parameters = UseAnchorPositioningParameters;
  type ReturnValue = UseAnchorPositioningReturnValue;
}

interface ComboboxTriggerState extends FieldRoot.State {
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
    BaseUIComponentProps<"button", ComboboxTrigger.State> {
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
}
/**
 * A button that opens the popup.
 * Renders a `<button>` element.
 */
declare const ComboboxTrigger: React$1.ForwardRefExoticComponent<
  Omit<ComboboxTriggerProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace ComboboxTrigger {
  type State = ComboboxTriggerState;
  type Props = ComboboxTriggerProps;
}

interface ComboboxInputState extends FieldRoot.State {
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
  ComboboxInput.State
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
 */
declare const ComboboxInput: React$1.ForwardRefExoticComponent<
  Omit<ComboboxInputProps, "ref"> & React$1.RefAttributes<HTMLInputElement>
>;
declare namespace ComboboxInput {
  type State = ComboboxInputState;
  type Props = ComboboxInputProps;
}

interface ComboboxIconState {}
interface ComboboxIconProps extends BaseUIComponentProps<
  "span",
  ComboboxIcon.State
> {}
/**
 * An icon that indicates that the trigger button opens the popup.
 * Renders a `<span>` element.
 */
declare const ComboboxIcon: React$1.ForwardRefExoticComponent<
  Omit<ComboboxIconProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace ComboboxIcon {
  type State = ComboboxIconState;
  type Props = ComboboxIconProps;
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
  transitionStatus: TransitionStatus;
}
interface ComboboxClearProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", ComboboxClear.State> {
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
 */
declare const ComboboxClear: React$1.ForwardRefExoticComponent<
  Omit<ComboboxClearProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace ComboboxClear {
  type State = ComboboxClearState;
  type Props = ComboboxClearProps;
}

interface ComboboxListState {
  /**
   * Whether the list is empty.
   */
  empty: boolean;
}
interface ComboboxListProps extends Omit<
  BaseUIComponentProps<"div", ComboboxList.State>,
  "children"
> {
  children?:
    | React$1.ReactNode
    | ((item: any, index: number) => React$1.ReactNode);
}
/**
 * A list container for the items.
 * Renders a `<div>` element.
 */
declare const ComboboxList: React$1.ForwardRefExoticComponent<
  Omit<ComboboxListProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxList {
  type State = ComboboxListState;
  type Props = ComboboxListProps;
}

interface ComboboxStatusState {}
interface ComboboxStatusProps extends BaseUIComponentProps<
  "div",
  ComboboxStatus.State
> {}
/**
 * Displays a status message whose content changes are announced politely to screen readers.
 * Useful for conveying the status of an asynchronously loaded list.
 * Renders a `<div>` element.
 */
declare const ComboboxStatus: React$1.ForwardRefExoticComponent<
  Omit<ComboboxStatusProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxStatus {
  type State = ComboboxStatusState;
  type Props = ComboboxStatusProps;
}

interface ComboboxPortalProps extends FloatingPortal.Props<ComboboxPortal.State> {
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
 */
declare const ComboboxPortal: React$1.ForwardRefExoticComponent<
  Omit<ComboboxPortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxPortal {
  interface State {}
}
declare namespace ComboboxPortal {
  type Props = ComboboxPortalProps;
}

interface ComboboxBackdropProps extends BaseUIComponentProps<
  "div",
  ComboboxBackdrop.State
> {}
interface ComboboxBackdropState {
  /**
   * Whether the popup is currently open.
   */
  open: boolean;
  transitionStatus: TransitionStatus;
}
/**
 * An overlay displayed beneath the popup.
 * Renders a `<div>` element.
 */
declare const ComboboxBackdrop: React$1.ForwardRefExoticComponent<
  Omit<ComboboxBackdropProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
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
  side: Side;
  align: Align;
  anchorHidden: boolean;
  empty: boolean;
}
interface ComboboxPositionerProps
  extends
    useAnchorPositioning.SharedParameters,
    BaseUIComponentProps<"div", ComboboxPositioner.State> {}
/**
 * Positions the popup against the trigger.
 * Renders a `<div>` element.
 */
declare const ComboboxPositioner: React$1.ForwardRefExoticComponent<
  Omit<ComboboxPositionerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxPositioner {
  type State = ComboboxPositionerState;
  type Props = ComboboxPositionerProps;
}

interface ComboboxPopupState {
  open: boolean;
  side: Side;
  align: Align;
  anchorHidden: boolean;
  transitionStatus: TransitionStatus;
  empty: boolean;
}
interface ComboboxPopupProps extends BaseUIComponentProps<
  "div",
  ComboboxPopup.State
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
    | (
        | boolean
        | React$1.RefObject<HTMLElement | null>
        | ((openType: InteractionType) => void | boolean | HTMLElement | null)
      )
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
    | (
        | boolean
        | React$1.RefObject<HTMLElement | null>
        | ((closeType: InteractionType) => void | boolean | HTMLElement | null)
      )
    | undefined;
}
/**
 * A container for the list.
 * Renders a `<div>` element.
 */
declare const ComboboxPopup: React$1.ForwardRefExoticComponent<
  Omit<ComboboxPopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
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
  side: Side;
  align: Align;
  uncentered: boolean;
}
interface ComboboxArrowProps extends BaseUIComponentProps<
  "div",
  ComboboxArrow.State
> {}
/**
 * Displays an element positioned against the anchor.
 * Renders a `<div>` element.
 */
declare const ComboboxArrow: React$1.ForwardRefExoticComponent<
  Omit<ComboboxArrowProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxArrow {
  type State = ComboboxArrowState;
  type Props = ComboboxArrowProps;
}

interface ComboboxGroupState {}
interface ComboboxGroupProps extends BaseUIComponentProps<
  "div",
  ComboboxGroup.State
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
 */
declare const ComboboxGroup: React$1.ForwardRefExoticComponent<
  Omit<ComboboxGroupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxGroup {
  type State = ComboboxGroupState;
  type Props = ComboboxGroupProps;
}

interface ComboboxGroupLabelState {}
interface ComboboxGroupLabelProps extends BaseUIComponentProps<
  "div",
  ComboboxGroupLabel.State
> {}
/**
 * An accessible label that is automatically associated with its parent group.
 * Renders a `<div>` element.
 */
declare const ComboboxGroupLabel: React$1.ForwardRefExoticComponent<
  Omit<ComboboxGroupLabelProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
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
    Omit<BaseUIComponentProps<"div", ComboboxItem.State>, "id"> {
  children?: React$1.ReactNode;
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
 */
declare const ComboboxItem: React$1.NamedExoticComponent<
  Omit<ComboboxItemProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxItem {
  type State = ComboboxItemState;
  type Props = ComboboxItemProps;
}

interface ComboboxRowState {}
interface ComboboxRowProps extends BaseUIComponentProps<
  "div",
  ComboboxRow.State
> {}
/**
 * Displays a single row of items in a grid list.
 * Enable `grid` on the root component to turn the listbox into a grid.
 * Renders a `<div>` element.
 */
declare const ComboboxRow: React$1.ForwardRefExoticComponent<
  Omit<ComboboxRowProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxRow {
  type State = ComboboxRowState;
  type Props = ComboboxRowProps;
}

interface ComboboxCollectionProps {
  children: (item: any, index: number) => React$1.ReactNode;
}
/**
 * Renders filtered list items.
 * Doesn't render its own HTML element.
 *
 * If rendering a flat list, pass a function child to the `List` component instead, which implicitly wraps it.
 */
declare function ComboboxCollection(
  props: ComboboxCollection.Props,
): React$1.JSX.Element | null;
declare namespace ComboboxCollection {
  type Props = ComboboxCollectionProps;
}

interface ComboboxEmptyState {}
interface ComboboxEmptyProps extends BaseUIComponentProps<
  "div",
  ComboboxEmpty.State
> {}
/**
 * Renders its children only when the list is empty.
 * Requires the `items` prop on the root component.
 * Announces changes politely to screen readers.
 * Renders a `<div>` element.
 */
declare const ComboboxEmpty: React$1.ForwardRefExoticComponent<
  Omit<ComboboxEmptyProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ComboboxEmpty {
  type State = ComboboxEmptyState;
  type Props = ComboboxEmptyProps;
}

interface SeparatorProps extends BaseUIComponentProps<"div", Separator.State> {
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
declare const Separator: React$1.ForwardRefExoticComponent<
  Omit<SeparatorProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace Separator {
  type Props = SeparatorProps;
  type State = SeparatorState;
}

interface UseFilterOptions extends Intl.CollatorOptions {
  /**
   * The locale to use for string comparison.
   * Defaults to the user's runtime locale.
   */
  locale?: Intl.LocalesArgument | undefined;
}
interface Filter {
  contains: <Item>(
    item: Item,
    query: string,
    itemToString?: (item: Item) => string,
  ) => boolean;
  startsWith: <Item>(
    item: Item,
    query: string,
    itemToString?: (item: Item) => string,
  ) => boolean;
  endsWith: <Item>(
    item: Item,
    query: string,
    itemToString?: (item: Item) => string,
  ) => boolean;
}
declare function getFilter(options?: UseFilterOptions): Filter;
/**
 * Matches items against a query using `Intl.Collator` for robust string matching.
 */
declare const useCoreFilter: typeof getFilter;
interface UseComboboxFilterOptions extends UseFilterOptions {
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

declare const index_parts$p_useFilteredItems: typeof useFilteredItems;
declare namespace index_parts$p {
  export {
    ComboboxArrow as Arrow,
    ComboboxBackdrop as Backdrop,
    ComboboxClear as Clear,
    ComboboxCollection as Collection,
    ComboboxEmpty as Empty,
    ComboboxGroup as Group,
    ComboboxGroupLabel as GroupLabel,
    ComboboxIcon as Icon,
    ComboboxInput as Input,
    ComboboxItem as Item,
    ComboboxList as List,
    ComboboxPopup as Popup,
    ComboboxPortal as Portal,
    ComboboxPositioner as Positioner,
    AutocompleteRoot as Root,
    ComboboxRow as Row,
    Separator,
    ComboboxStatus as Status,
    ComboboxTrigger as Trigger,
    AutocompleteValue as Value,
    useCoreFilter as useFilter,
    index_parts$p_useFilteredItems as useFilteredItems,
  };
}

type ImageLoadingStatus$1 = "idle" | "loading" | "loaded" | "error";
interface AvatarRootState {
  imageLoadingStatus: ImageLoadingStatus$1;
}
interface AvatarRootProps extends BaseUIComponentProps<
  "span",
  AvatarRoot.State
> {}
/**
 * Displays a user's profile picture, initials, or fallback icon.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
 */
declare const AvatarRoot: React$1.ForwardRefExoticComponent<
  Omit<AvatarRootProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace AvatarRoot {
  type State = AvatarRootState;
  type Props = AvatarRootProps;
}

type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error";

interface AvatarImageState extends AvatarRoot.State {
  transitionStatus: TransitionStatus;
}
interface AvatarImageProps extends BaseUIComponentProps<
  "img",
  AvatarImage.State
> {
  /**
   * Callback fired when the loading status changes.
   */
  onLoadingStatusChange?: ((status: ImageLoadingStatus) => void) | undefined;
}
/**
 * The image to be displayed in the avatar.
 * Renders an `<img>` element.
 *
 * Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
 */
declare const AvatarImage: React$1.ForwardRefExoticComponent<
  Omit<AvatarImageProps, "ref"> & React$1.RefAttributes<HTMLImageElement>
>;
declare namespace AvatarImage {
  type State = AvatarImageState;
  type Props = AvatarImageProps;
}

interface AvatarFallbackState extends AvatarRoot.State {
  transitionStatus: TransitionStatus;
}
interface AvatarFallbackProps extends BaseUIComponentProps<
  "span",
  AvatarFallback.State
> {
  /**
   * How long to wait before showing the fallback. Specified in milliseconds.
   */
  delay?: number | undefined;
}
/**
 * Rendered when the image fails to load or when no image is provided.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
 */
declare const AvatarFallback: React$1.ForwardRefExoticComponent<
  Omit<AvatarFallbackProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace AvatarFallback {
  type State = AvatarFallbackState;
  type Props = AvatarFallbackProps;
}

declare namespace index_parts$o {
  export {
    AvatarFallback as Fallback,
    AvatarImage as Image,
    AvatarRoot as Root,
  };
}

interface ButtonState {
  /**
   * Whether the button should ignore user interaction.
   */
  disabled: boolean;
}
interface ButtonProps
  extends NativeButtonProps, BaseUIComponentProps<"button", ButtonState> {
  /**
   * Whether the button should be focusable when disabled.
   * @default false
   */
  focusableWhenDisabled?: boolean | undefined;
}
/**
 * A button component that can be used to trigger actions.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Button](https://base-ui.com/react/components/button)
 */
declare const Button: React$1.ForwardRefExoticComponent<
  Omit<ButtonProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace Button {
  type State = ButtonState;
  type Props = ButtonProps;
}

declare const PARENT_CHECKBOX = "data-parent";
interface CheckboxRootState extends FieldRoot.State {
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
      BaseUIComponentProps<"span", CheckboxRoot.State>,
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
  inputRef?: React$1.Ref<HTMLInputElement> | undefined;
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
declare const CheckboxRoot: React$1.ForwardRefExoticComponent<
  Omit<CheckboxRootProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace CheckboxRoot {
  type State = CheckboxRootState;
  type Props = CheckboxRootProps;
  type ChangeEventReason = CheckboxRootChangeEventReason;
  type ChangeEventDetails = CheckboxRootChangeEventDetails;
}

interface CheckboxIndicatorState extends CheckboxRoot.State {
  transitionStatus: TransitionStatus;
}
interface CheckboxIndicatorProps extends BaseUIComponentProps<
  "span",
  CheckboxIndicator.State
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
declare const CheckboxIndicator: React$1.ForwardRefExoticComponent<
  Omit<CheckboxIndicatorProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace CheckboxIndicator {
  type State = CheckboxIndicatorState;
  type Props = CheckboxIndicatorProps;
}

declare namespace index_parts$n {
  export { CheckboxIndicator as Indicator, CheckboxRoot as Root };
}

interface CheckboxGroupState extends FieldRoot.State {
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
}
interface CheckboxGroupProps extends BaseUIComponentProps<
  "div",
  CheckboxGroup.State
> {
  /**
   * Names of the checkboxes in the group that should be ticked.
   *
   * To render an uncontrolled checkbox group, use the `defaultValue` prop instead.
   */
  value?: string[] | undefined;
  /**
   * Names of the checkboxes in the group that should be initially ticked.
   *
   * To render a controlled checkbox group, use the `value` prop instead.
   */
  defaultValue?: string[] | undefined;
  /**
   * Event handler called when a checkbox in the group is ticked or unticked.
   * Provides the new value as an argument.
   */
  onValueChange?:
    | ((value: string[], eventDetails: CheckboxGroupChangeEventDetails) => void)
    | undefined;
  /**
   * Names of all checkboxes in the group. Use this when creating a parent checkbox.
   */
  allValues?: string[] | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
}
type CheckboxGroupChangeEventReason = typeof none;
type CheckboxGroupChangeEventDetails =
  BaseUIChangeEventDetails<CheckboxGroup.ChangeEventReason>;
/**
 * Provides a shared state to a series of checkboxes.
 *
 * Documentation: [Base UI Checkbox Group](https://base-ui.com/react/components/checkbox-group)
 */
declare const CheckboxGroup: React$1.ForwardRefExoticComponent<
  Omit<CheckboxGroupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace CheckboxGroup {
  type State = CheckboxGroupState;
  type Props = CheckboxGroupProps;
  type ChangeEventReason = CheckboxGroupChangeEventReason;
  type ChangeEventDetails = CheckboxGroupChangeEventDetails;
}

interface CollapsibleTriggerProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", CollapsibleRoot.State> {}
/**
 * A button that opens and closes the collapsible panel.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
 */
declare const CollapsibleTrigger: React$1.ForwardRefExoticComponent<
  Omit<CollapsibleTriggerProps, "ref"> &
    React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace CollapsibleTrigger {
  type Props = CollapsibleTriggerProps;
}

interface CollapsiblePanelState extends CollapsibleRoot.State {
  transitionStatus: TransitionStatus;
}
interface CollapsiblePanelProps extends BaseUIComponentProps<
  "div",
  CollapsiblePanel.State
> {
  /**
   * Allows the browser’s built-in page search to find and expand the panel contents.
   *
   * Overrides the `keepMounted` prop and uses `hidden="until-found"`
   * to hide the element without removing it from the DOM.
   *
   * @default false
   */
  hiddenUntilFound?: boolean | undefined;
  /**
   * Whether to keep the element in the DOM while the panel is hidden.
   * This prop is ignored when `hiddenUntilFound` is used.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
/**
 * A panel with the collapsible contents.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
 */
declare const CollapsiblePanel: React$1.ForwardRefExoticComponent<
  Omit<CollapsiblePanelProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace CollapsiblePanel {
  type State = CollapsiblePanelState;
  type Props = CollapsiblePanelProps;
}

declare namespace index_parts$m {
  export {
    CollapsiblePanel as Panel,
    CollapsibleRoot as Root,
    CollapsibleTrigger as Trigger,
  };
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
  defaultValue?: (ComboboxValueType<Value, Multiple> | null) | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: When specified, the combobox will not be unmounted when closed.
   * Instead, the `unmount` function must be called to unmount the combobox manually.
   * Useful when the combobox's animation is controlled by an external library.
   */
  actionsRef?: React$1.RefObject<ComboboxRoot.Actions | null> | undefined;
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
  value?: (ComboboxValueType<Value, Multiple> | null) | undefined;
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
type ComboboxRootState = AriaCombobox.State;
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
>(props: ComboboxRoot.Props<Value, Multiple>): React$1.JSX.Element;
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

interface ComboboxValueState {}
interface ComboboxValueProps {
  children?: React$1.ReactNode | ((selectedValue: any) => React$1.ReactNode);
  /**
   * The placeholder value to display when no value is selected.
   * This is overridden by `children` if specified, or by a null item's label in `items`.
   */
  placeholder?: React$1.ReactNode;
}
/**
 * The current value of the combobox.
 * Doesn't render its own HTML element.
 *
 * Documentation: [Base UI Combobox](https://base-ui.com/react/components/combobox)
 */
declare function ComboboxValue(
  props: ComboboxValue.Props,
): React$1.ReactElement;
declare namespace ComboboxValue {
  type State = ComboboxValueState;
  type Props = ComboboxValueProps;
}

interface ComboboxItemIndicatorProps extends BaseUIComponentProps<
  "span",
  ComboboxItemIndicator.State
> {
  children?: React$1.ReactNode;
  /**
   * Whether to keep the HTML element in the DOM when the item is not selected.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
interface ComboboxItemIndicatorState {
  selected: boolean;
  transitionStatus: TransitionStatus;
}
/**
 * Indicates whether the item is selected.
 * Renders a `<span>` element.
 */
declare const ComboboxItemIndicator: React$1.ForwardRefExoticComponent<
  Omit<ComboboxItemIndicatorProps, "ref"> &
    React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace ComboboxItemIndicator {
  type Props = ComboboxItemIndicatorProps;
  type State = ComboboxItemIndicatorState;
}

interface ComboboxChipsState {}
interface ComboboxChipsProps extends BaseUIComponentProps<
  "div",
  ComboboxChips.State
> {}
/**
 * A container for the chips in a multiselectable input.
 * Renders a `<div>` element.
 */
declare const ComboboxChips: React$1.ForwardRefExoticComponent<
  Omit<ComboboxChipsProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
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
  ComboboxChip.State
> {}
/**
 * An individual chip that represents a value in a multiselectable input.
 * Renders a `<div>` element.
 */
declare const ComboboxChip: React$1.ForwardRefExoticComponent<
  Omit<ComboboxChipProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
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
    BaseUIComponentProps<"button", ComboboxChipRemove.State> {}
/**
 * A button to remove a chip.
 * Renders a `<button>` element.
 */
declare const ComboboxChipRemove: React$1.ForwardRefExoticComponent<
  Omit<ComboboxChipRemoveProps, "ref"> &
    React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace ComboboxChipRemove {
  type State = ComboboxChipRemoveState;
  type Props = ComboboxChipRemoveProps;
}

declare const index_parts$l_useFilteredItems: typeof useFilteredItems;
declare namespace index_parts$l {
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
    ComboboxItem as Item,
    ComboboxItemIndicator as ItemIndicator,
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
    index_parts$l_useFilteredItems as useFilteredItems,
  };
}

interface MenuArrowState {
  /**
   * Whether the menu is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  uncentered: boolean;
}
interface MenuArrowProps extends BaseUIComponentProps<"div", MenuArrow.State> {}
/**
 * Displays an element positioned against the menu anchor.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuArrow: React$1.ForwardRefExoticComponent<
  Omit<MenuArrowProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace MenuArrow {
  type State = MenuArrowState;
  type Props = MenuArrowProps;
}

interface MenuBackdropState {
  /**
   * Whether the menu is currently open.
   */
  open: boolean;
  transitionStatus: TransitionStatus;
}
interface MenuBackdropProps extends BaseUIComponentProps<
  "div",
  MenuBackdrop.State
> {}
/**
 * An overlay displayed beneath the menu popup.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuBackdrop: React$1.ForwardRefExoticComponent<
  Omit<MenuBackdropProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace MenuBackdrop {
  type State = MenuBackdropState;
  type Props = MenuBackdropProps;
}

type State$3<Payload> = PopupStoreState<Payload> & {
  disabled: boolean;
  modal: boolean;
  allowMouseEnter: boolean;
  parent: MenuParent;
  rootId: string | undefined;
  activeIndex: number | null;
  hoverEnabled: boolean;
  stickIfOpen: boolean;
  instantType: "dismiss" | "click" | "group" | undefined;
  openChangeReason: MenuRoot.ChangeEventReason | null;
  floatingTreeRoot: FloatingTreeStore;
  floatingNodeId: string | undefined;
  floatingParentNodeId: string | null;
  itemProps: HTMLProps;
  closeDelay: number;
  keyboardEventRelay: ((event: React$1.KeyboardEvent<any>) => void) | undefined;
};
type Context$3 = PopupStoreContext<MenuRoot.ChangeEventDetails> & {
  readonly positionerRef: React$1.RefObject<HTMLElement | null>;
  readonly popupRef: React$1.RefObject<HTMLElement | null>;
  readonly typingRef: React$1.RefObject<boolean>;
  readonly itemDomElements: React$1.RefObject<(HTMLElement | null)[]>;
  readonly itemLabels: React$1.RefObject<(string | null)[]>;
  allowMouseUpTriggerRef: React$1.RefObject<boolean>;
  readonly triggerFocusTargetRef: React$1.RefObject<HTMLElement | null>;
  readonly beforeContentFocusGuardRef: React$1.RefObject<HTMLElement | null>;
};
declare const selectors$3: {
  disabled: (state: State$3<unknown>) => boolean;
  modal: (state: State$3<unknown>) => boolean;
  allowMouseEnter: (state: State$3<unknown>) => boolean;
  stickIfOpen: (state: State$3<unknown>) => boolean;
  parent: (state: State$3<unknown>) => MenuParent;
  rootId: (state: State$3<unknown>) => string | undefined;
  activeIndex: (state: State$3<unknown>) => number | null;
  isActive: (state: State$3<unknown>, itemIndex: number) => boolean;
  hoverEnabled: (state: State$3<unknown>) => boolean;
  instantType: (
    state: State$3<unknown>,
  ) => "group" | "click" | "dismiss" | undefined;
  lastOpenChangeReason: (
    state: State$3<unknown>,
  ) => MenuRootChangeEventReason | null;
  floatingTreeRoot: (state: State$3<unknown>) => FloatingTreeStore;
  floatingNodeId: (state: State$3<unknown>) => string | undefined;
  floatingParentNodeId: (state: State$3<unknown>) => string | null;
  itemProps: (state: State$3<unknown>) => HTMLProps;
  closeDelay: (state: State$3<unknown>) => number;
  keyboardEventRelay: (
    state: State$3<unknown>,
  ) => React$1.KeyboardEventHandler<any> | undefined;
  open: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  mounted: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  transitionStatus: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => TransitionStatus;
  floatingRootContext: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => FloatingRootStore;
  preventUnmountingOnClose: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  payload: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => unknown;
  activeTriggerId: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => string | null;
  activeTriggerElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => Element | null;
  isTriggerActive: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  isOpenedByTrigger: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  isMountedByTrigger: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  triggerProps: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    isActive: boolean,
  ) => HTMLProps;
  popupProps: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLProps;
  popupElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLElement | null;
  positionerElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLElement | null;
};
declare class MenuStore<Payload> extends ReactStore<
  Readonly<State$3<Payload>>,
  Context$3,
  typeof selectors$3
> {
  constructor(initialState?: Partial<State$3<Payload>>);
  setOpen(
    open: boolean,
    eventDetails: Omit<MenuRoot.ChangeEventDetails, "preventUnmountOnClose">,
  ): void;
  static useStore<Payload>(
    externalStore: MenuStore<Payload> | undefined,
    initialState: Partial<State$3<Payload>>,
  ): MenuStore<Payload>;
  private unsubscribeParentListener;
}

interface MenuRootContext<Payload = unknown> {
  store: MenuStore<Payload>;
  parent: MenuParent;
}
declare const MenuRootContext: React$1.Context<
  MenuRootContext<unknown> | undefined
>;

interface MenubarContext {
  modal: boolean;
  disabled: boolean;
  contentElement: HTMLElement | null;
  setContentElement: (element: HTMLElement | null) => void;
  hasSubmenuOpen: boolean;
  setHasSubmenuOpen: (open: boolean) => void;
  orientation: MenuRoot.Orientation;
  allowMouseUpTriggerRef: React$1.RefObject<boolean>;
  rootId: string | undefined;
}
declare const MenubarContext: React$1.Context<MenubarContext | null>;

interface ContextMenuRootContext {
  anchor: {
    getBoundingClientRect: () => DOMRect;
  };
  setAnchor: React$1.Dispatch<
    React$1.SetStateAction<ContextMenuRootContext["anchor"]>
  >;
  backdropRef: React$1.RefObject<HTMLDivElement | null>;
  internalBackdropRef: React$1.RefObject<HTMLDivElement | null>;
  actionsRef: React$1.RefObject<{
    setOpen: (
      nextOpen: boolean,
      eventDetails: ContextMenuRoot.ChangeEventDetails,
    ) => void;
  } | null>;
  positionerRef: React$1.RefObject<HTMLElement | null>;
  allowMouseUpTriggerRef: React$1.RefObject<boolean>;
  initialCursorPointRef: React$1.RefObject<{
    x: number;
    y: number;
  } | null>;
  rootId: string | undefined;
}
declare const ContextMenuRootContext: React$1.Context<
  ContextMenuRootContext | undefined
>;

declare class MenuHandle<Payload> {
  /**
   * Internal store holding the menu's state.
   * @internal
   */
  readonly store: MenuStore<Payload>;
  constructor();
  /**
   * Opens the menu and associates it with the trigger with the given id.
   * The trigger must be a Menu.Trigger component with this handle passed as a prop.
   *
   * @param triggerId ID of the trigger to associate with the menu.
   */
  open(triggerId: string): void;
  /**
   * Closes the menu.
   */
  close(): void;
  /**
   * Indicates whether the menu is currently open.
   */
  get isOpen(): boolean;
}
/**
 * Creates a new handle to connect a Menu.Root with detached Menu.Trigger components.
 */
declare function createMenuHandle<Payload>(): MenuHandle<Payload>;

interface MenuRootProps<Payload = unknown> {
  /**
   * Whether the menu is initially open.
   *
   * To render a controlled menu, use the `open` prop instead.
   * @default false
   */
  defaultOpen?: boolean | undefined;
  /**
   * Whether to loop keyboard focus back to the first item
   * when the end of the list is reached while using the arrow keys.
   * @default true
   */
  loopFocus?: boolean | undefined;
  /**
   * Whether moving the pointer over items should highlight them.
   * Disabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.
   * @default true
   */
  highlightItemOnHover?: boolean | undefined;
  /**
   * Determines if the menu enters a modal state when open.
   * - `true`: user interaction is limited to the menu: document page scroll is locked and pointer interactions on outside elements are disabled.
   * - `false`: user interaction with the rest of the document is allowed.
   * @default true
   */
  modal?: boolean | undefined;
  /**
   * Event handler called when the menu is opened or closed.
   */
  onOpenChange?:
    | ((open: boolean, eventDetails: MenuRoot.ChangeEventDetails) => void)
    | undefined;
  /**
   * Event handler called after any animations complete when the menu is closed.
   */
  onOpenChangeComplete?: ((open: boolean) => void) | undefined;
  /**
   * Whether the menu is currently open.
   */
  open?: boolean | undefined;
  /**
   * The visual orientation of the menu.
   * Controls whether roving focus uses up/down or left/right arrow keys.
   * @default 'vertical'
   */
  orientation?: MenuRoot.Orientation | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * When in a submenu, determines whether pressing the Escape key
   * closes the entire menu, or only the current child menu.
   * @default false
   */
  closeParentOnEsc?: boolean | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: When specified, the menu will not be unmounted when closed.
   *    Instead, the `unmount` function must be called to unmount the menu manually.
   *   Useful when the menu's animation is controlled by an external library.
   * - `close`: When specified, the menu can be closed imperatively.
   */
  actionsRef?: React$1.RefObject<MenuRoot.Actions | null> | undefined;
  /**
   * ID of the trigger that the popover is associated with.
   * This is useful in conjunction with the `open` prop to create a controlled popover.
   * There's no need to specify this prop when the popover is uncontrolled (i.e. when the `open` prop is not set).
   */
  triggerId?: (string | null) | undefined;
  /**
   * ID of the trigger that the popover is associated with.
   * This is useful in conjunction with the `defaultOpen` prop to create an initially open popover.
   */
  defaultTriggerId?: (string | null) | undefined;
  /**
   * A handle to associate the menu with a trigger.
   * If specified, allows external triggers to control the menu's open state.
   */
  handle?: MenuHandle<Payload> | undefined;
  /**
   * The content of the popover.
   * This can be a regular React node or a render function that receives the `payload` of the active trigger.
   */
  children?: React$1.ReactNode | PayloadChildRenderFunction<Payload>;
}
interface MenuRootActions {
  unmount: () => void;
  close: () => void;
}
type MenuRootChangeEventReason =
  | typeof triggerHover
  | typeof triggerFocus
  | typeof triggerPress
  | typeof outsidePress
  | typeof focusOut
  | typeof listNavigation
  | typeof escapeKey
  | typeof itemPress
  | typeof closePress
  | typeof siblingOpen
  | typeof cancelOpen
  | typeof imperativeAction
  | typeof none;
type MenuRootChangeEventDetails =
  BaseUIChangeEventDetails<MenuRoot.ChangeEventReason> & {
    preventUnmountOnClose(): void;
  };
type MenuRootOrientation = "horizontal" | "vertical";
type MenuParent =
  | {
      type: "menu";
      store: MenuStore<unknown>;
    }
  | {
      type: "menubar";
      context: MenubarContext;
    }
  | {
      type: "context-menu";
      context: ContextMenuRootContext;
    }
  | {
      type: "nested-context-menu";
      context: ContextMenuRootContext;
      menuContext: MenuRootContext;
    }
  | {
      type: undefined;
    };
/**
 * Groups all parts of the menu.
 * Doesn’t render its own HTML element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuRoot: <Payload>(
  props: MenuRoot.Props<Payload>,
) => react_jsx_runtime.JSX.Element;
declare namespace MenuRoot {
  type Props<Payload = unknown> = MenuRootProps<Payload>;
  type Actions = MenuRootActions;
  type ChangeEventReason = MenuRootChangeEventReason;
  type ChangeEventDetails = MenuRootChangeEventDetails;
  type Orientation = MenuRootOrientation;
}

type MenuCheckboxItemState = {
  /**
   * Whether the checkbox item should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the checkbox item is currently highlighted.
   */
  highlighted: boolean;
  /**
   * Whether the checkbox item is currently ticked.
   */
  checked: boolean;
};
interface MenuCheckboxItemProps
  extends
    NonNativeButtonProps,
    BaseUIComponentProps<"div", MenuCheckboxItem.State> {
  /**
   * Whether the checkbox item is currently ticked.
   *
   * To render an uncontrolled checkbox item, use the `defaultChecked` prop instead.
   */
  checked?: boolean | undefined;
  /**
   * Whether the checkbox item is initially ticked.
   *
   * To render a controlled checkbox item, use the `checked` prop instead.
   * @default false
   */
  defaultChecked?: boolean | undefined;
  /**
   * Event handler called when the checkbox item is ticked or unticked.
   */
  onCheckedChange?:
    | ((
        checked: boolean,
        eventDetails: MenuCheckboxItem.ChangeEventDetails,
      ) => void)
    | undefined;
  /**
   * The click handler for the menu item.
   */
  onClick?:
    | BaseUIComponentProps<"div", MenuCheckboxItemState>["onClick"]
    | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Overrides the text label to use when the item is matched during keyboard text navigation.
   */
  label?: string | undefined;
  /**
   * @ignore
   */
  id?: string | undefined;
  /**
   * Whether to close the menu when the item is clicked.
   * @default false
   */
  closeOnClick?: boolean | undefined;
}
type MenuCheckboxItemChangeEventReason = MenuRoot.ChangeEventReason;
type MenuCheckboxItemChangeEventDetails = MenuRoot.ChangeEventDetails;
/**
 * A menu item that toggles a setting on or off.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuCheckboxItem: React$1.ForwardRefExoticComponent<
  Omit<MenuCheckboxItemProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace MenuCheckboxItem {
  type State = MenuCheckboxItemState;
  type Props = MenuCheckboxItemProps;
  type ChangeEventReason = MenuCheckboxItemChangeEventReason;
  type ChangeEventDetails = MenuCheckboxItemChangeEventDetails;
}

interface MenuCheckboxItemIndicatorProps extends BaseUIComponentProps<
  "span",
  MenuCheckboxItemIndicator.State
> {
  /**
   * Whether to keep the HTML element in the DOM when the checkbox item is not checked.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
interface MenuCheckboxItemIndicatorState {
  /**
   * Whether the checkbox item is currently ticked.
   */
  checked: boolean;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  highlighted: boolean;
  transitionStatus: TransitionStatus;
}
/**
 * Indicates whether the checkbox item is ticked.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuCheckboxItemIndicator: React$1.ForwardRefExoticComponent<
  Omit<MenuCheckboxItemIndicatorProps, "ref"> &
    React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace MenuCheckboxItemIndicator {
  type Props = MenuCheckboxItemIndicatorProps;
  type State = MenuCheckboxItemIndicatorState;
}

interface MenuGroupProps extends BaseUIComponentProps<"div", MenuGroup.State> {
  /**
   * The content of the component.
   */
  children?: React$1.ReactNode;
}
interface MenuGroupState {}
/**
 * Groups related menu items with the corresponding label.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuGroup: React$1.ForwardRefExoticComponent<
  Omit<MenuGroupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace MenuGroup {
  type Props = MenuGroupProps;
  type State = MenuGroupState;
}

interface MenuGroupLabelProps extends BaseUIComponentProps<
  "div",
  MenuGroupLabel.State
> {}
interface MenuGroupLabelState {}
/**
 * An accessible label that is automatically associated with its parent group.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuGroupLabel: React$1.ForwardRefExoticComponent<
  Omit<MenuGroupLabelProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace MenuGroupLabel {
  type Props = MenuGroupLabelProps;
  type State = MenuGroupLabelState;
}

interface MenuItemState {
  /**
   * Whether the item should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the item is highlighted.
   */
  highlighted: boolean;
}
interface MenuItemProps
  extends NonNativeButtonProps, BaseUIComponentProps<"div", MenuItem.State> {
  /**
   * The click handler for the menu item.
   */
  onClick?: BaseUIComponentProps<"div", MenuItemState>["onClick"] | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Overrides the text label to use when the item is matched during keyboard text navigation.
   */
  label?: string | undefined;
  /**
   * @ignore
   */
  id?: string | undefined;
  /**
   * Whether to close the menu when the item is clicked.
   *
   * @default true
   */
  closeOnClick?: boolean | undefined;
}
/**
 * An individual interactive item in the menu.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuItem: React$1.ForwardRefExoticComponent<
  Omit<MenuItemProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace MenuItem {
  type State = MenuItemState;
  type Props = MenuItemProps;
}

interface MenuLinkItemState {
  /**
   * Whether the item is highlighted.
   */
  highlighted: boolean;
}
interface MenuLinkItemProps extends BaseUIComponentProps<
  "a",
  MenuLinkItem.State
> {
  /**
   * Overrides the text label to use when the item is matched during keyboard text navigation.
   */
  label?: string | undefined;
  /**
   * @ignore
   */
  id?: string | undefined;
  /**
   * Whether to close the menu when the item is clicked.
   * @default false
   */
  closeOnClick?: boolean | undefined;
}
/**
 * A link in the menu that can be used to navigate to a different page or section.
 * Renders an `<a>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuLinkItem: React$1.ForwardRefExoticComponent<
  Omit<MenuLinkItemProps, "ref"> & React$1.RefAttributes<Element>
>;
declare namespace MenuLinkItem {
  type State = MenuLinkItemState;
  type Props = MenuLinkItemProps;
}

interface MenuPopupProps extends BaseUIComponentProps<"div", MenuPopup.State> {
  children?: React$1.ReactNode;
  /**
   * @ignore
   */
  id?: string | undefined;
  /**
   * Determines the element to focus when the menu is closed.
   *
   * - `false`: Do not move focus.
   * - `true`: Move focus based on the default behavior (trigger or previously focused element).
   * - `RefObject`: Move focus to the ref element.
   * - `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).
   *   Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.
   */
  finalFocus?:
    | (
        | boolean
        | React$1.RefObject<HTMLElement | null>
        | ((closeType: InteractionType) => boolean | HTMLElement | null | void)
      )
    | undefined;
}
type MenuPopupState = {
  transitionStatus: TransitionStatus;
  side: Side;
  align: Align;
  /**
   * Whether the menu is currently open.
   */
  open: boolean;
  nested: boolean;
  instant: "dismiss" | "click" | "group" | undefined;
};
/**
 * A container for the menu items.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuPopup: React$1.ForwardRefExoticComponent<
  Omit<MenuPopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace MenuPopup {
  type Props = MenuPopupProps;
  type State = MenuPopupState;
}

interface MenuPortalProps extends FloatingPortal.Props<MenuPortal.State> {
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
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuPortal: React$1.ForwardRefExoticComponent<
  Omit<MenuPortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace MenuPortal {
  interface State {}
}
declare namespace MenuPortal {
  type Props = MenuPortalProps;
}

interface MenuPositionerState {
  /**
   * Whether the menu is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  anchorHidden: boolean;
  nested: boolean;
}
interface MenuPositionerProps
  extends
    useAnchorPositioning.SharedParameters,
    BaseUIComponentProps<"div", MenuPositioner.State> {}
/**
 * Positions the menu popup against the trigger.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuPositioner: React$1.ForwardRefExoticComponent<
  Omit<MenuPositionerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace MenuPositioner {
  type State = MenuPositionerState;
  type Props = MenuPositionerProps;
}

interface MenuRadioGroupProps extends BaseUIComponentProps<
  "div",
  MenuRadioGroup.State
> {
  /**
   * The content of the component.
   */
  children?: React$1.ReactNode;
  /**
   * The controlled value of the radio item that should be currently selected.
   *
   * To render an uncontrolled radio group, use the `defaultValue` prop instead.
   */
  value?: any;
  /**
   * The uncontrolled value of the radio item that should be initially selected.
   *
   * To render a controlled radio group, use the `value` prop instead.
   */
  defaultValue?: any;
  /**
   * Function called when the selected value changes.
   */
  onValueChange?:
    | ((value: any, eventDetails: MenuRadioGroup.ChangeEventDetails) => void)
    | undefined;
  /**
   * Whether the component should ignore user interaction.
   *
   * @default false
   */
  disabled?: boolean | undefined;
}
type MenuRadioGroupState = {
  disabled: boolean;
};
type MenuRadioGroupChangeEventReason = MenuRoot.ChangeEventReason;
type MenuRadioGroupChangeEventDetails = MenuRoot.ChangeEventDetails;
/**
 * Groups related radio items.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuRadioGroup: React$1.NamedExoticComponent<
  Omit<MenuRadioGroupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace MenuRadioGroup {
  type Props = MenuRadioGroupProps;
  type State = MenuRadioGroupState;
  type ChangeEventReason = MenuRadioGroupChangeEventReason;
  type ChangeEventDetails = MenuRadioGroupChangeEventDetails;
}

type MenuRadioItemState = {
  /**
   * Whether the radio item should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the radio item is currently highlighted.
   */
  highlighted: boolean;
  /**
   * Whether the radio item is currently selected.
   */
  checked: boolean;
};
interface MenuRadioItemProps
  extends
    NonNativeButtonProps,
    BaseUIComponentProps<"div", MenuRadioItem.State> {
  /**
   * Value of the radio item.
   * This is the value that will be set in the MenuRadioGroup when the item is selected.
   */
  value: any;
  /**
   * The click handler for the menu item.
   */
  onClick?:
    | BaseUIComponentProps<"div", MenuRadioItemState>["onClick"]
    | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Overrides the text label to use when the item is matched during keyboard text navigation.
   */
  label?: string | undefined;
  /**
   * @ignore
   */
  id?: string | undefined;
  /**
   * Whether to close the menu when the item is clicked.
   * @default false
   */
  closeOnClick?: boolean | undefined;
}
/**
 * A menu item that works like a radio button in a given group.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuRadioItem: React$1.ForwardRefExoticComponent<
  Omit<MenuRadioItemProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace MenuRadioItem {
  type State = MenuRadioItemState;
  type Props = MenuRadioItemProps;
}

interface MenuRadioItemIndicatorProps extends BaseUIComponentProps<
  "span",
  MenuRadioItemIndicator.State
> {
  /**
   * Whether to keep the HTML element in the DOM when the radio item is inactive.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
interface MenuRadioItemIndicatorState {
  /**
   * Whether the radio item is currently selected.
   */
  checked: boolean;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  highlighted: boolean;
  transitionStatus: TransitionStatus;
}
/**
 * Indicates whether the radio item is selected.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuRadioItemIndicator: React$1.ForwardRefExoticComponent<
  Omit<MenuRadioItemIndicatorProps, "ref"> &
    React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace MenuRadioItemIndicator {
  type Props = MenuRadioItemIndicatorProps;
  type State = MenuRadioItemIndicatorState;
}

declare const MenuSubmenuRootContext: React$1.Context<
  MenuSubmenuRootContext | undefined
>;
interface MenuSubmenuRootContext {
  parentMenu: MenuStore<unknown>;
}
declare function useMenuSubmenuRootContext():
  | MenuSubmenuRootContext
  | undefined;

interface MenuSubmenuRootProps extends Omit<
  MenuRoot.Props,
  "modal" | "openOnHover" | "onOpenChange"
> {
  /**
   * Event handler called when the menu is opened or closed.
   */
  onOpenChange?:
    | ((
        open: boolean,
        eventDetails: MenuSubmenuRoot.ChangeEventDetails,
      ) => void)
    | undefined;
  /**
   * When in a submenu, determines whether pressing the Escape key
   * closes the entire menu, or only the current child menu.
   * @default false
   */
  closeParentOnEsc?: boolean | undefined;
}
interface MenuSubmenuRootState {}
type MenuSubmenuRootChangeEventReason = MenuRoot.ChangeEventReason;
type MenuSubmenuRootChangeEventDetails = MenuRoot.ChangeEventDetails;
/**
 * Groups all parts of a submenu.
 * Doesn’t render its own HTML element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare function MenuSubmenuRoot(
  props: MenuSubmenuRoot.Props,
): react_jsx_runtime.JSX.Element;
declare namespace MenuSubmenuRoot {
  type Props = MenuSubmenuRootProps;
  type State = MenuSubmenuRootState;
  type ChangeEventReason = MenuSubmenuRootChangeEventReason;
  type ChangeEventDetails = MenuSubmenuRootChangeEventDetails;
}

interface MenuTriggerProps<Payload = unknown>
  extends NativeButtonProps, BaseUIComponentProps<"button", MenuTrigger.State> {
  children?: React$1.ReactNode;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * A handle to associate the trigger with a menu.
   */
  handle?: MenuHandle<Payload> | undefined;
  /**
   * A payload to pass to the menu when it is opened.
   */
  payload?: Payload | undefined;
  /**
   * How long to wait before the menu may be opened on hover. Specified in milliseconds.
   *
   * Requires the `openOnHover` prop.
   * @default 100
   */
  delay?: number | undefined;
  /**
   * How long to wait before closing the menu that was opened on hover.
   * Specified in milliseconds.
   *
   * Requires the `openOnHover` prop.
   * @default 0
   */
  closeDelay?: number | undefined;
  /**
   * Whether the menu should also open when the trigger is hovered.
   */
  openOnHover?: boolean | undefined;
}
type MenuTriggerState = {
  /**
   * Whether the menu is currently open.
   */
  open: boolean;
  /**
   * Whether the trigger is disabled.
   */
  disabled: boolean;
};
/**
 * A button that opens the menu.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuTrigger: MenuTrigger;
interface MenuTrigger {
  <Payload>(
    componentProps: MenuTriggerProps<Payload> &
      React$1.RefAttributes<HTMLElement>,
  ): React$1.JSX.Element;
}
declare namespace MenuTrigger {
  type Props<Payload = unknown> = MenuTriggerProps<Payload>;
  type State = MenuTriggerState;
}

interface MenuSubmenuTriggerState {
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the item is highlighted.
   */
  highlighted: boolean;
  /**
   * Whether the menu is currently open.
   */
  open: boolean;
}
interface MenuSubmenuTriggerProps
  extends
    NonNativeButtonProps,
    BaseUIComponentProps<"div", MenuSubmenuTriggerState> {
  onClick?:
    | BaseUIComponentProps<"div", MenuSubmenuTriggerState>["onClick"]
    | undefined;
  /**
   * Overrides the text label to use when the item is matched during keyboard text navigation.
   */
  label?: string | undefined;
  /**
   * @ignore
   */
  id?: string | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * How long to wait before the menu may be opened on hover. Specified in milliseconds.
   *
   * Requires the `openOnHover` prop.
   * @default 100
   */
  delay?: number | undefined;
  /**
   * How long to wait before closing the menu that was opened on hover.
   * Specified in milliseconds.
   *
   * Requires the `openOnHover` prop.
   * @default 0
   */
  closeDelay?: number | undefined;
  /**
   * Whether the menu should also open when the trigger is hovered.
   */
  openOnHover?: boolean | undefined;
}
/**
 * A menu item that opens a submenu.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuSubmenuTrigger: React$1.ForwardRefExoticComponent<
  Omit<MenuSubmenuTriggerProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace MenuSubmenuTrigger {
  type Props = MenuSubmenuTriggerProps;
  type State = MenuSubmenuTriggerState;
}

declare namespace index_parts$k {
  export {
    MenuArrow as Arrow,
    MenuBackdrop as Backdrop,
    MenuCheckboxItem as CheckboxItem,
    MenuCheckboxItemIndicator as CheckboxItemIndicator,
    MenuGroup as Group,
    MenuGroupLabel as GroupLabel,
    MenuHandle as Handle,
    MenuItem as Item,
    MenuLinkItem as LinkItem,
    MenuPopup as Popup,
    MenuPortal as Portal,
    MenuPositioner as Positioner,
    MenuRadioGroup as RadioGroup,
    MenuRadioItem as RadioItem,
    MenuRadioItemIndicator as RadioItemIndicator,
    MenuRoot as Root,
    Separator,
    MenuSubmenuRoot as SubmenuRoot,
    MenuSubmenuTrigger as SubmenuTrigger,
    MenuTrigger as Trigger,
    createMenuHandle as createHandle,
  };
}

interface ContextMenuRootState {}
interface ContextMenuRootProps extends Omit<
  MenuRoot.Props,
  "modal" | "openOnHover" | "delay" | "closeDelay" | "onOpenChange"
> {
  /**
   * Event handler called when the menu is opened or closed.
   */
  onOpenChange?:
    | ((
        open: boolean,
        eventDetails: ContextMenuRoot.ChangeEventDetails,
      ) => void)
    | undefined;
}
type ContextMenuRootChangeEventReason = MenuRoot.ChangeEventReason;
type ContextMenuRootChangeEventDetails =
  BaseUIChangeEventDetails<ContextMenuRoot.ChangeEventReason>;
/**
 * A component that creates a context menu activated by right clicking or long pressing.
 * Doesn’t render its own HTML element.
 *
 * Documentation: [Base UI Context Menu](https://base-ui.com/react/components/context-menu)
 */
declare function ContextMenuRoot(
  props: ContextMenuRoot.Props,
): react_jsx_runtime.JSX.Element;
declare namespace ContextMenuRoot {
  type State = ContextMenuRootState;
  type Props = ContextMenuRootProps;
  type ChangeEventReason = ContextMenuRootChangeEventReason;
  type ChangeEventDetails = ContextMenuRootChangeEventDetails;
}

type ContextMenuTriggerState = {
  /**
   * Whether the context menu is currently open.
   */
  open: boolean;
};
interface ContextMenuTriggerProps extends BaseUIComponentProps<
  "div",
  ContextMenuTrigger.State
> {}
/**
 * An area that opens the menu on right click or long press.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Context Menu](https://base-ui.com/react/components/context-menu)
 */
declare const ContextMenuTrigger: React$1.ForwardRefExoticComponent<
  Omit<ContextMenuTriggerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ContextMenuTrigger {
  type State = ContextMenuTriggerState;
  type Props = ContextMenuTriggerProps;
}

declare namespace index_parts$j {
  export {
    MenuArrow as Arrow,
    MenuBackdrop as Backdrop,
    MenuCheckboxItem as CheckboxItem,
    MenuCheckboxItemIndicator as CheckboxItemIndicator,
    MenuGroup as Group,
    MenuGroupLabel as GroupLabel,
    MenuItem as Item,
    MenuLinkItem as LinkItem,
    MenuPopup as Popup,
    MenuPortal as Portal,
    MenuPositioner as Positioner,
    MenuRadioGroup as RadioGroup,
    MenuRadioItem as RadioItem,
    MenuRadioItemIndicator as RadioItemIndicator,
    ContextMenuRoot as Root,
    Separator,
    MenuSubmenuRoot as SubmenuRoot,
    MenuSubmenuTrigger as SubmenuTrigger,
    ContextMenuTrigger as Trigger,
  };
}

interface CSPProviderState {}
interface CSPProviderProps {
  children?: React$1.ReactNode;
  /**
   * The nonce value to apply to inline `<style>` and `<script>` tags.
   */
  nonce?: string | undefined;
  /**
   * Whether inline `<style>` elements created by Base UI components should not be rendered. Instead, components must specify the CSS styles via custom class names or other methods.
   * @default false
   */
  disableStyleElements?: boolean | undefined;
}
/**
 * Provides a default Content Security Policy (CSP) configuration for Base UI components that
 * require inline `<style>` or `<script>` tags.
 *
 * Documentation: [Base UI CSP Provider](https://base-ui.com/react/utils/csp-provider)
 */
declare function CSPProvider(
  props: CSPProvider.Props,
): react_jsx_runtime.JSX.Element;
declare namespace CSPProvider {
  type State = CSPProviderState;
  type Props = CSPProviderProps;
}

declare namespace index_parts$i {
  export {
    DialogBackdrop as Backdrop,
    DialogClose as Close,
    DialogDescription as Description,
    DialogHandle as Handle,
    DialogPopup as Popup,
    DialogPortal as Portal,
    DialogRoot as Root,
    DialogTitle as Title,
    DialogTrigger as Trigger,
    DialogViewport as Viewport,
    createDialogHandle as createHandle,
  };
}

type TextDirection = "ltr" | "rtl";
declare function useDirection(): TextDirection;

interface DirectionProviderProps {
  children?: React$1.ReactNode;
  /**
   * The reading direction of the text
   * @default 'ltr'
   */
  direction?: TextDirection | undefined;
}
/**
 * Enables RTL behavior for Base UI components.
 *
 * Documentation: [Base UI Direction Provider](https://base-ui.com/react/utils/direction-provider)
 */
declare const DirectionProvider: React$1.FC<DirectionProvider.Props>;
declare namespace DirectionProvider {
  type Props = DirectionProviderProps;
}

interface DrawerBackdropProps extends BaseUIComponentProps<
  "div",
  DrawerBackdrop.State
> {
  /**
   * Whether the backdrop is forced to render even when nested.
   * @default false
   */
  forceRender?: boolean | undefined;
}
interface DrawerBackdropState {
  /**
   * Whether the drawer is currently open.
   */
  open: boolean;
  transitionStatus: TransitionStatus;
}
/**
 * An overlay displayed beneath the popup.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
 */
declare const DrawerBackdrop: React$1.ForwardRefExoticComponent<
  Omit<DrawerBackdropProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace DrawerBackdrop {
  type Props = DrawerBackdropProps;
  type State = DrawerBackdropState;
}

interface DrawerCloseProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", DrawerClose.State> {}
interface DrawerCloseState {
  /**
   * Whether the button is currently disabled.
   */
  disabled: boolean;
}
/**
 * A button that closes the drawer.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
 */
declare const DrawerClose: DrawerClose;
interface DrawerClose {
  (componentProps: DrawerCloseProps): React$1.JSX.Element;
}
declare namespace DrawerClose {
  type Props = DrawerCloseProps;
  type State = DrawerCloseState;
}

interface DrawerContentProps extends BaseUIComponentProps<
  "div",
  DrawerContent.State
> {}
interface DrawerContentState {}
/**
 * A container for the drawer contents.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
 */
declare const DrawerContent: React$1.ForwardRefExoticComponent<
  Omit<DrawerContentProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace DrawerContent {
  type Props = DrawerContentProps;
  type State = DrawerContentState;
}

interface DrawerDescriptionProps extends BaseUIComponentProps<
  "p",
  DrawerDescription.State
> {}
interface DrawerDescriptionState {}
/**
 * A paragraph with additional information about the drawer.
 * Renders a `<p>` element.
 *
 * Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
 */
declare const DrawerDescription: DrawerDescription;
interface DrawerDescription {
  (componentProps: DrawerDescriptionProps): React$1.JSX.Element;
}
declare namespace DrawerDescription {
  type Props = DrawerDescriptionProps;
  type State = DrawerDescriptionState;
}

interface DrawerIndentState {
  /**
   * Whether any drawer within the nearest <Drawer.Provider> is open.
   */
  active: boolean;
}
interface DrawerIndentProps extends BaseUIComponentProps<
  "div",
  DrawerIndent.State
> {}
/**
 * A wrapper element intended to contain your app's main UI.
 * Applies `data-active` when any drawer within the nearest <Drawer.Provider> is open.
 *
 * Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
 */
declare const DrawerIndent: React$1.ForwardRefExoticComponent<
  Omit<DrawerIndentProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace DrawerIndent {
  type State = DrawerIndentState;
  type Props = DrawerIndentProps;
}

interface DrawerIndentBackgroundState {
  /**
   * Whether any drawer within the nearest <Drawer.Provider> is open.
   */
  active: boolean;
}
interface DrawerIndentBackgroundProps extends BaseUIComponentProps<
  "div",
  DrawerIndentBackground.State
> {}
/**
 * An element placed before <Drawer.Indent> to render a background layer
 * that can be styled based on whether any drawer is open.
 */
declare const DrawerIndentBackground: React$1.ForwardRefExoticComponent<
  Omit<DrawerIndentBackgroundProps, "ref"> &
    React$1.RefAttributes<HTMLDivElement>
>;
declare namespace DrawerIndentBackground {
  type State = DrawerIndentBackgroundState;
  type Props = DrawerIndentBackgroundProps;
}

type SwipeDirection = "up" | "down" | "left" | "right";

interface DrawerRootProps<Payload = unknown> {
  /**
   * Whether the drawer is currently open.
   */
  open?: boolean | undefined;
  /**
   * Whether the drawer is initially open.
   *
   * To render a controlled drawer, use the `open` prop instead.
   * @default false
   */
  defaultOpen?: boolean | undefined;
  /**
   * Determines if the drawer enters a modal state when open.
   * - `true`: user interaction is limited to just the drawer: focus is trapped, document page scroll is locked, and pointer interactions on outside elements are disabled.
   * - `false`: user interaction with the rest of the document is allowed.
   * - `'trap-focus'`: focus is trapped inside the drawer, but document page scroll is not locked and pointer interactions outside of it remain enabled.
   * @default true
   */
  modal?: (boolean | "trap-focus") | undefined;
  /**
   * Event handler called when the drawer is opened or closed.
   */
  onOpenChange?:
    | ((open: boolean, eventDetails: DrawerRoot.ChangeEventDetails) => void)
    | undefined;
  /**
   * Event handler called after any animations complete when the drawer is opened or closed.
   */
  onOpenChangeComplete?: ((open: boolean) => void) | undefined;
  /**
   * Determines whether the drawer should close on outside clicks.
   * @default false
   */
  disablePointerDismissal?: boolean | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: When specified, the drawer will not be unmounted when closed.
   * Instead, the `unmount` function must be called to unmount the drawer manually.
   * Useful when the drawer's animation is controlled by an external library.
   * - `close`: Closes the drawer imperatively when called.
   */
  actionsRef?: React$1.RefObject<DrawerRoot.Actions | null> | undefined;
  /**
   * A handle to associate the drawer with a trigger.
   * If specified, allows detached triggers to control the drawer's open state.
   * Can be created with the Drawer.createHandle() method.
   */
  handle?: DialogHandle<Payload> | undefined;
  /**
   * ID of the trigger that the drawer is associated with.
   * This is useful in conjunction with the `open` prop to create a controlled drawer.
   * There's no need to specify this prop when the drawer is uncontrolled (i.e. when the `open` prop is not set).
   */
  triggerId?: (string | null) | undefined;
  /**
   * ID of the trigger that the drawer is associated with.
   * This is useful in conjunction with the `defaultOpen` prop to create an initially open drawer.
   */
  defaultTriggerId?: (string | null) | undefined;
  /**
   * The content of the drawer.
   */
  children?: React$1.ReactNode | PayloadChildRenderFunction<Payload>;
  /**
   * The swipe direction used to dismiss the drawer.
   * @default 'down'
   */
  swipeDirection?: DrawerSwipeDirection | undefined;
  /**
   * Snap points used to position the drawer.
   * Use numbers between 0 and 1 to represent fractions of the viewport height,
   * numbers greater than 1 as pixel values, or strings in `px`/`rem` units
   * (for example, `'148px'` or `'30rem'`).
   */
  snapPoints?: DrawerSnapPoint[] | undefined;
  /**
   * Disables velocity-based snap skipping so drag distance determines the next snap point.
   * @default false
   */
  snapToSequentialPoints?: boolean | undefined;
  /**
   * The currently active snap point. Use with `onSnapPointChange` to control the snap point.
   */
  snapPoint?: DrawerSnapPoint | null | undefined;
  /**
   * The initial snap point value when uncontrolled.
   */
  defaultSnapPoint?: DrawerSnapPoint | null | undefined;
  /**
   * Callback fired when the snap point changes.
   */
  onSnapPointChange?:
    | ((
        snapPoint: DrawerSnapPoint | null,
        eventDetails: DrawerRoot.SnapPointChangeEventDetails,
      ) => void)
    | undefined;
}
interface DrawerRootActions {
  unmount: () => void;
  close: () => void;
}
type DrawerRootChangeEventReason =
  | typeof triggerPress
  | typeof outsidePress
  | typeof escapeKey
  | typeof closeWatcher
  | typeof closePress
  | typeof focusOut
  | typeof imperativeAction
  | typeof swipe
  | typeof none;
type DrawerRootChangeEventDetails =
  BaseUIChangeEventDetails<DrawerRoot.ChangeEventReason> & {
    preventUnmountOnClose(): void;
  };
type DrawerRootSnapPointChangeEventReason = DrawerRootChangeEventReason;
type DrawerRootSnapPointChangeEventDetails =
  BaseUIChangeEventDetails<DrawerRootSnapPointChangeEventReason>;
/**
 * Groups all parts of the drawer.
 * Doesn't render its own HTML element.
 *
 * Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
 */
declare function DrawerRoot<Payload = unknown>(
  props: DrawerRoot.Props<Payload>,
): react_jsx_runtime.JSX.Element;
declare namespace DrawerRoot {
  type Props<Payload = unknown> = DrawerRootProps<Payload>;
  type Actions = DrawerRootActions;
  type ChangeEventReason = DrawerRootChangeEventReason;
  type ChangeEventDetails = DrawerRootChangeEventDetails;
  type SnapPointChangeEventReason = DrawerRootSnapPointChangeEventReason;
  type SnapPointChangeEventDetails = DrawerRootSnapPointChangeEventDetails;
  type SnapPoint = DrawerSnapPoint;
}

type DrawerSwipeDirection = SwipeDirection;
type DrawerSnapPoint = number | string;

interface DrawerPopupProps extends BaseUIComponentProps<
  "div",
  DrawerPopup.State
> {
  /**
   * Determines the element to focus when the drawer is opened.
   *
   * - `false`: Do not move focus.
   * - `true`: Move focus based on the default behavior (first tabbable element or popup).
   * - `RefObject`: Move focus to the ref element.
   * - `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).
   *   Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.
   */
  initialFocus?:
    | (
        | boolean
        | React$1.RefObject<HTMLElement | null>
        | ((openType: InteractionType) => boolean | HTMLElement | null | void)
      )
    | undefined;
  /**
   * Determines the element to focus when the drawer is closed.
   *
   * - `false`: Do not move focus.
   * - `true`: Move focus based on the default behavior (trigger or previously focused element).
   * - `RefObject`: Move focus to the ref element.
   * - `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).
   *   Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.
   */
  finalFocus?:
    | (
        | boolean
        | React$1.RefObject<HTMLElement | null>
        | ((closeType: InteractionType) => boolean | HTMLElement | null | void)
      )
    | undefined;
}
interface DrawerPopupState {
  /**
   * Whether the drawer is currently open.
   */
  open: boolean;
  transitionStatus: TransitionStatus;
  /**
   * Whether the active snap point is the full-height expanded state.
   */
  expanded: boolean;
  /**
   * Whether the drawer is nested within a parent drawer.
   */
  nested: boolean;
  /**
   * Whether the drawer has nested drawers open.
   */
  nestedDrawerOpen: boolean;
  /**
   * Whether a nested drawer is currently being swiped.
   */
  nestedDrawerSwiping: boolean;
  /**
   * The swipe direction used to dismiss the drawer.
   */
  swipeDirection: DrawerSwipeDirection;
  /**
   * Whether the drawer is being swiped.
   */
  swiping: boolean;
}
/**
 * A container for the drawer contents.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
 */
declare const DrawerPopup: React$1.ForwardRefExoticComponent<
  Omit<DrawerPopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace DrawerPopup {
  type Props = DrawerPopupProps;
  type State = DrawerPopupState;
}

interface DrawerPortalState {}
interface DrawerPortalProps extends FloatingPortal.Props<DrawerPortal.State> {
  /**
   * Whether to keep the portal mounted in the DOM while the popup is hidden.
   * @default false
   */
  keepMounted?: boolean | undefined;
  /**
   * A parent element to render the portal element into.
   */
  container?: FloatingPortal.Props<DrawerPortal.State>["container"] | undefined;
}
/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
 */
declare const DrawerPortal: DrawerPortal;
interface DrawerPortal {
  (
    componentProps: DrawerPortalProps & React$1.RefAttributes<HTMLDivElement>,
  ): React$1.JSX.Element | null;
}
declare namespace DrawerPortal {
  type Props = DrawerPortalProps;
  type State = DrawerPortalState;
}

interface DrawerProviderState {}
interface DrawerProviderProps {
  children?: React$1.ReactNode;
}
/**
 * Provides a shared context for coordinating global Drawer UI,
 * such as indent/background effects based on whether any Drawer is open.
 *
 * Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
 */
declare function DrawerProvider(
  props: DrawerProvider.Props,
): react_jsx_runtime.JSX.Element;
declare namespace DrawerProvider {
  type State = DrawerProviderState;
  type Props = DrawerProviderProps;
}

interface DrawerTitleProps extends BaseUIComponentProps<
  "h2",
  DrawerTitle.State
> {}
interface DrawerTitleState {}
/**
 * A heading that labels the drawer.
 * Renders an `<h2>` element.
 *
 * Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
 */
declare const DrawerTitle: DrawerTitle;
interface DrawerTitle {
  (componentProps: DrawerTitleProps): React$1.JSX.Element;
}
declare namespace DrawerTitle {
  type Props = DrawerTitleProps;
  type State = DrawerTitleState;
}

interface DrawerTriggerProps<Payload = unknown>
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", DrawerTrigger.State> {
  /**
   * A handle to associate the trigger with a drawer.
   * Can be created with the Drawer.createHandle() method.
   */
  handle?: DialogHandle<Payload> | undefined;
  /**
   * A payload to pass to the drawer when it is opened.
   */
  payload?: Payload | undefined;
  /**
   * ID of the trigger. In addition to being forwarded to the rendered element,
   * it is also used to specify the active trigger for drawers in controlled mode (with the Drawer.Root `triggerId` prop).
   */
  id?: string | undefined;
}
interface DrawerTriggerState {
  /**
   * Whether the drawer is currently disabled.
   */
  disabled: boolean;
  /**
   * Whether the drawer is currently open.
   */
  open: boolean;
}
/**
 * A button that opens the drawer.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
 */
declare const DrawerTrigger: DrawerTrigger;
interface DrawerTrigger {
  <Payload>(
    componentProps: DrawerTriggerProps<Payload> &
      React$1.RefAttributes<HTMLElement>,
  ): React$1.JSX.Element;
}
declare namespace DrawerTrigger {
  type Props<Payload = unknown> = DrawerTriggerProps<Payload>;
  type State = DrawerTriggerState;
}

interface DrawerViewportState {
  /**
   * Whether the drawer is currently open.
   */
  open: boolean;
  transitionStatus: TransitionStatus;
  /**
   * Whether the drawer is nested within another drawer.
   */
  nested: boolean;
  /**
   * Whether the drawer has nested drawers open.
   */
  nestedDialogOpen: boolean;
}
interface DrawerViewportProps extends BaseUIComponentProps<
  "div",
  DrawerViewport.State
> {}
/**
 * A positioning container for the drawer popup that can be made scrollable.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Drawer](https://base-ui.com/react/components/drawer)
 */
declare const DrawerViewport: React$1.ForwardRefExoticComponent<
  Omit<DrawerViewportProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace DrawerViewport {
  type Props = DrawerViewportProps;
  type State = DrawerViewportState;
}

declare namespace index_parts$h {
  export {
    DrawerBackdrop as Backdrop,
    DrawerClose as Close,
    DrawerContent as Content,
    DrawerDescription as Description,
    DialogHandle as Handle,
    DrawerIndent as Indent,
    DrawerIndentBackground as IndentBackground,
    DrawerPopup as Popup,
    DrawerPortal as Portal,
    DrawerProvider as Provider,
    DrawerRoot as Root,
    DrawerTitle as Title,
    DrawerTrigger as Trigger,
    DrawerViewport as Viewport,
    createDialogHandle as createHandle,
  };
}

type FieldLabelState = FieldRoot.State;
interface FieldLabelProps extends BaseUIComponentProps<
  "label",
  FieldLabel.State
> {
  /**
   * Whether the component renders a native `<label>` element when replacing it via the `render` prop.
   * Set to `false` if the rendered element is not a label (e.g. `<div>`).
   *
   * This is useful to avoid inheriting label behaviors on `<button>` controls (such as `<Select.Trigger>` and `<Combobox.Trigger>`), including avoiding `:hover` on the button when hovering the label, and preventing clicks on the label from firing on the button.
   * @default true
   */
  nativeLabel?: boolean | undefined;
}
/**
 * An accessible label that is automatically associated with the field control.
 * Renders a `<label>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */
declare const FieldLabel: React$1.ForwardRefExoticComponent<
  Omit<FieldLabelProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace FieldLabel {
  type State = FieldLabelState;
  type Props = FieldLabelProps;
}

interface FieldErrorState extends FieldRoot.State {
  transitionStatus: TransitionStatus;
}
interface FieldErrorProps extends BaseUIComponentProps<
  "div",
  FieldError.State
> {
  /**
   * Determines whether to show the error message according to the field’s
   * [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState).
   * Specifying `true` will always show the error message, and lets external libraries
   * control the visibility.
   */
  match?: (boolean | keyof ValidityState) | undefined;
}
/**
 * An error message displayed if the field control fails validation.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */
declare const FieldError: React$1.ForwardRefExoticComponent<
  Omit<FieldErrorProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace FieldError {
  type State = FieldErrorState;
  type Props = FieldErrorProps;
}

type FieldDescriptionState = FieldRoot.State;
interface FieldDescriptionProps extends BaseUIComponentProps<
  "p",
  FieldDescription.State
> {}
/**
 * A paragraph with additional information about the field.
 * Renders a `<p>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */
declare const FieldDescription: React$1.ForwardRefExoticComponent<
  Omit<FieldDescriptionProps, "ref"> &
    React$1.RefAttributes<HTMLParagraphElement>
>;
declare namespace FieldDescription {
  type State = FieldDescriptionState;
  type Props = FieldDescriptionProps;
}

type FieldControlState = FieldRoot.State;
interface FieldControlProps extends BaseUIComponentProps<
  "input",
  FieldControl.State
> {
  /**
   * Callback fired when the `value` changes. Use when controlled.
   */
  onValueChange?:
    | ((value: string, eventDetails: FieldControl.ChangeEventDetails) => void)
    | undefined;
  defaultValue?: React$1.ComponentProps<"input">["defaultValue"] | undefined;
}
type FieldControlChangeEventReason = typeof none;
type FieldControlChangeEventDetails =
  BaseUIChangeEventDetails<FieldControl.ChangeEventReason>;
/**
 * The form control to label and validate.
 * Renders an `<input>` element.
 *
 * You can omit this part and use any Base UI input component instead. For example,
 * [Input](https://base-ui.com/react/components/input), [Checkbox](https://base-ui.com/react/components/checkbox),
 * or [Select](https://base-ui.com/react/components/select), among others, will work with Field out of the box.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */
declare const FieldControl: React$1.ForwardRefExoticComponent<
  Omit<FieldControlProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace FieldControl {
  type State = FieldControlState;
  type Props = FieldControlProps;
  type ChangeEventReason = FieldControlChangeEventReason;
  type ChangeEventDetails = FieldControlChangeEventDetails;
}

interface FieldValidityState extends Omit<FieldValidityData, "state"> {
  validity: FieldValidityData["state"];
  transitionStatus: TransitionStatus;
}
interface FieldValidityProps {
  /**
   * A function that accepts the field validity state as an argument.
   *
   * ```jsx
   * <Field.Validity>
   *   {(validity) => {
   *     return <div>...</div>
   *   }}
   * </Field.Validity>
   * ```
   */
  children: (state: FieldValidity.State) => React$1.ReactNode;
}
/**
 * Used to display a custom message based on the field’s validity.
 * Requires `children` to be a function that accepts field validity state as an argument.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */
declare const FieldValidity: React$1.FC<FieldValidity.Props>;
declare namespace FieldValidity {
  type State = FieldValidityState;
  type Props = FieldValidityProps;
}

interface FieldItemProps extends BaseUIComponentProps<"div", FieldItem.State> {
  /**
   * Whether the wrapped control should ignore user interaction.
   * The `disabled` prop on `<Field.Root>` takes precedence over this.
   * @default false
   */
  disabled?: boolean | undefined;
}
/**
 * Groups individual items in a checkbox group or radio group with a label and description.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */
declare const FieldItem: React$1.ForwardRefExoticComponent<
  Omit<FieldItemProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace FieldItem {
  type State = FieldRoot.State;
  type Props = FieldItemProps;
}

declare namespace index_parts$g {
  export {
    FieldControl as Control,
    FieldDescription as Description,
    FieldError as Error,
    FieldItem as Item,
    FieldLabel as Label,
    FieldRoot as Root,
    FieldValidity as Validity,
    type FieldValidityData as ValidityData,
  };
}

interface FieldsetRootState {
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
}
interface FieldsetRootProps extends BaseUIComponentProps<
  "fieldset",
  FieldsetRoot.State
> {}
/**
 * Groups a shared legend with related controls.
 * Renders a `<fieldset>` element.
 *
 * Documentation: [Base UI Fieldset](https://base-ui.com/react/components/fieldset)
 */
declare const FieldsetRoot: React$1.ForwardRefExoticComponent<
  Omit<FieldsetRootProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace FieldsetRoot {
  type State = FieldsetRootState;
  type Props = FieldsetRootProps;
}

interface FieldsetLegendState {
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
}
interface FieldsetLegendProps extends BaseUIComponentProps<
  "div",
  FieldsetLegend.State
> {}
/**
 * An accessible label that is automatically associated with the fieldset.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Fieldset](https://base-ui.com/react/components/fieldset)
 */
declare const FieldsetLegend: React$1.ForwardRefExoticComponent<
  Omit<FieldsetLegendProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace FieldsetLegend {
  type State = FieldsetLegendState;
  type Props = FieldsetLegendProps;
}

declare namespace index_parts$f {
  export { FieldsetLegend as Legend, FieldsetRoot as Root };
}

interface InputProps$1 extends BaseUIComponentProps<"input", Input.State> {
  /**
   * Callback fired when the `value` changes. Use when controlled.
   */
  onValueChange?: FieldControl.Props["onValueChange"] | undefined;
  defaultValue?: FieldControl.Props["defaultValue"] | undefined;
}
interface InputState extends FieldControl.State {}
type InputChangeEventReason = FieldControl.ChangeEventReason;
type InputChangeEventDetails = FieldControl.ChangeEventDetails;
/**
 * A native input element that automatically works with [Field](https://base-ui.com/react/components/field).
 * Renders an `<input>` element.
 *
 * Documentation: [Base UI Input](https://base-ui.com/react/components/input)
 */
declare const Input: React$1.ForwardRefExoticComponent<
  Omit<InputProps$1, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace Input {
  type Props = InputProps$1;
  type State = InputState;
  type ChangeEventReason = InputChangeEventReason;
  type ChangeEventDetails = InputChangeEventDetails;
}

interface MenubarState {
  /**
   * The orientation of the menubar.
   */
  orientation: MenuRoot.Orientation;
  /**
   * Whether the menubar is modal.
   */
  modal: boolean;
  /**
   * Whether any submenu within the menubar is open.
   */
  hasSubmenuOpen: boolean;
}
interface MenubarProps extends BaseUIComponentProps<"div", Menubar.State> {
  /**
   * Whether the menubar is modal.
   * @default true
   */
  modal?: boolean | undefined;
  /**
   * Whether the whole menubar is disabled.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * The orientation of the menubar.
   * @default 'horizontal'
   */
  orientation?: MenuRoot.Orientation | undefined;
  /**
   * Whether to loop keyboard focus back to the first item
   * when the end of the list is reached while using the arrow keys.
   * @default true
   */
  loopFocus?: boolean | undefined;
}
/**
 * The container for menus.
 *
 * Documentation: [Base UI Menubar](https://base-ui.com/react/components/menubar)
 */
declare const Menubar: React$1.ForwardRefExoticComponent<
  Omit<MenubarProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace Menubar {
  type State = MenubarState;
  type Props = MenubarProps;
}

type ElementType = React$1.ElementType;
type PropsOf<T extends React$1.ElementType> = WithBaseUIEvent<
  React$1.ComponentPropsWithRef<T>
>;
type InputProps<T extends React$1.ElementType> =
  | PropsOf<T>
  | ((otherProps: PropsOf<T>) => PropsOf<T>)
  | undefined;
/**
 * Merges multiple sets of React props. It follows the Object.assign pattern where the rightmost object's fields overwrite
 * the conflicting ones from others. This doesn't apply to event handlers, `className` and `style` props.
 *
 * Event handlers are merged and called in right-to-left order (rightmost handler executes first, leftmost last).
 * For React synthetic events, the rightmost handler can prevent prior (left-positioned) handlers from executing
 * by calling `event.preventBaseUIHandler()`. For non-synthetic events (custom events with primitive/object values),
 * all handlers always execute without prevention capability.
 *
 * The `className` prop is merged by concatenating classes in right-to-left order (rightmost class appears first in the string).
 * The `style` prop is merged with rightmost styles overwriting the prior ones.
 *
 * Props can either be provided as objects or as functions that take the previous props as an argument.
 * The function will receive the merged props up to that point (going from left to right):
 * so in the case of `(obj1, obj2, fn, obj3)`, `fn` will receive the merged props of `obj1` and `obj2`.
 * The function is responsible for chaining event handlers if needed (i.e. we don't run the merge logic).
 *
 * Event handlers returned by the functions are not automatically prevented when `preventBaseUIHandler` is called.
 * They must check `event.baseUIHandlerPrevented` themselves and bail out if it's true.
 *
 * @important **`ref` is not merged.**
 * @param a Props object to merge.
 * @param b Props object to merge. The function will overwrite conflicting props from `a`.
 * @param c Props object to merge. The function will overwrite conflicting props from previous parameters.
 * @param d Props object to merge. The function will overwrite conflicting props from previous parameters.
 * @param e Props object to merge. The function will overwrite conflicting props from previous parameters.
 * @returns The merged props.
 * @public
 */
declare function mergeProps<T extends ElementType>(
  a: InputProps<T>,
  b: InputProps<T>,
  c: InputProps<T>,
  d: InputProps<T>,
  e: InputProps<T>,
): PropsOf<T>;
declare function mergeProps<T extends ElementType>(
  a: InputProps<T>,
  b: InputProps<T>,
  c: InputProps<T>,
  d: InputProps<T>,
): PropsOf<T>;
declare function mergeProps<T extends ElementType>(
  a: InputProps<T>,
  b: InputProps<T>,
  c: InputProps<T>,
): PropsOf<T>;
declare function mergeProps<T extends ElementType>(
  a: InputProps<T>,
  b: InputProps<T>,
): PropsOf<T>;
/**
 * Merges an arbitrary number of React props using the same logic as {@link mergeProps}.
 * This function accepts an array of props instead of individual arguments.
 *
 * This has slightly lower performance than {@link mergeProps} due to accepting an array
 * instead of a fixed number of arguments. Prefer {@link mergeProps} when merging 5 or
 * fewer prop sets for better performance.
 *
 * @param props Array of props to merge.
 * @returns The merged props.
 * @see mergeProps
 * @public
 */
declare function mergePropsN<T extends ElementType>(
  props: InputProps<T>[],
): PropsOf<T>;
declare function makeEventPreventable<T extends React$1.SyntheticEvent>(
  event: BaseUIEvent<T>,
): BaseUIEvent<T>;
declare function mergeClassNames(
  ourClassName: string | undefined,
  theirClassName: string | undefined,
): string | undefined;

interface MeterRootState {}
interface MeterRootProps extends BaseUIComponentProps<"div", MeterRoot.State> {
  /**
   * A string value that provides a user-friendly name for `aria-valuenow`, the current value of the meter.
   */
  "aria-valuetext"?: React$1.AriaAttributes["aria-valuetext"] | undefined;
  /**
   * Options to format the value.
   */
  format?: Intl.NumberFormatOptions | undefined;
  /**
   * A function that returns a string value that provides a human-readable text alternative for `aria-valuenow`, the current value of the meter.
   */
  getAriaValueText?:
    | ((formattedValue: string, value: number) => string)
    | undefined;
  /**
   * The locale used by `Intl.NumberFormat` when formatting the value.
   * Defaults to the user's runtime locale.
   */
  locale?: Intl.LocalesArgument | undefined;
  /**
   * The maximum value
   * @default 100
   */
  max?: number | undefined;
  /**
   * The minimum value
   * @default 0
   */
  min?: number | undefined;
  /**
   * The current value.
   */
  value: number;
}
/**
 * Groups all parts of the meter and provides the value for screen readers.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
 */
declare const MeterRoot: React$1.ForwardRefExoticComponent<
  Omit<MeterRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace MeterRoot {
  type State = MeterRootState;
  type Props = MeterRootProps;
}

interface MeterTrackProps extends BaseUIComponentProps<
  "div",
  MeterRoot.State
> {}
/**
 * Contains the meter indicator and represents the entire range of the meter.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
 */
declare const MeterTrack: React$1.ForwardRefExoticComponent<
  Omit<MeterTrackProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace MeterTrack {
  type Props = MeterTrackProps;
}

interface MeterIndicatorProps extends BaseUIComponentProps<
  "div",
  MeterRoot.State
> {}
/**
 * Visualizes the position of the value along the range.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
 */
declare const MeterIndicator: React$1.ForwardRefExoticComponent<
  Omit<MeterIndicatorProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace MeterIndicator {
  type Props = MeterIndicatorProps;
}

interface MeterValueProps extends Omit<
  BaseUIComponentProps<"span", MeterRoot.State>,
  "children"
> {
  children?:
    | (null | ((formattedValue: string, value: number) => React$1.ReactNode))
    | undefined;
}
/**
 * A text element displaying the current value.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
 */
declare const MeterValue: React$1.ForwardRefExoticComponent<
  Omit<MeterValueProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace MeterValue {
  type Props = MeterValueProps;
}

interface MeterLabelProps extends BaseUIComponentProps<
  "span",
  MeterRoot.State
> {}
/**
 * An accessible label for the meter.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
 */
declare const MeterLabel: React$1.ForwardRefExoticComponent<
  Omit<MeterLabelProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace MeterLabel {
  type Props = MeterLabelProps;
}

declare namespace index_parts$e {
  export {
    MeterIndicator as Indicator,
    MeterLabel as Label,
    MeterRoot as Root,
    MeterTrack as Track,
    MeterValue as Value,
  };
}

interface NavigationMenuRootState {
  /**
   * If `true`, the popup is open.
   */
  open: boolean;
  /**
   * Whether the navigation menu is nested.
   */
  nested: boolean;
}
interface NavigationMenuRootProps extends BaseUIComponentProps<
  "nav",
  NavigationMenuRoot.State
> {
  /**
   * A ref to imperative actions.
   */
  actionsRef?: React$1.RefObject<NavigationMenuRoot.Actions | null> | undefined;
  /**
   * Event handler called after any animations complete when the navigation menu is closed.
   */
  onOpenChangeComplete?: ((open: boolean) => void) | undefined;
  /**
   * The controlled value of the navigation menu item that should be currently open.
   * When non-nullish, the menu will be open. When nullish, the menu will be closed.
   *
   * To render an uncontrolled navigation menu, use the `defaultValue` prop instead.
   * @default null
   */
  value?: any;
  /**
   * The uncontrolled value of the item that should be initially selected.
   *
   * To render a controlled navigation menu, use the `value` prop instead.
   * @default null
   */
  defaultValue?: any;
  /**
   * Callback fired when the value changes.
   */
  onValueChange?:
    | ((
        value: any,
        eventDetails: NavigationMenuRoot.ChangeEventDetails,
      ) => void)
    | undefined;
  /**
   * How long to wait before opening the navigation menu. Specified in milliseconds.
   * @default 50
   */
  delay?: number | undefined;
  /**
   * How long to wait before closing the navigation menu. Specified in milliseconds.
   * @default 50
   */
  closeDelay?: number | undefined;
  /**
   * The orientation of the navigation menu.
   * @default 'horizontal'
   */
  orientation?: ("horizontal" | "vertical") | undefined;
}
interface NavigationMenuRootActions {
  unmount: () => void;
}
type NavigationMenuRootChangeEventReason =
  | typeof triggerPress
  | typeof triggerHover
  | typeof outsidePress
  | typeof listNavigation
  | typeof focusOut
  | typeof escapeKey
  | typeof linkPress
  | typeof none;
type NavigationMenuRootChangeEventDetails =
  BaseUIChangeEventDetails<NavigationMenuRoot.ChangeEventReason>;
/**
 * Groups all parts of the navigation menu.
 * Renders a `<nav>` element at the root, or `<div>` element when nested.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuRoot: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuRootProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace NavigationMenuRoot {
  type State = NavigationMenuRootState;
  type Props = NavigationMenuRootProps;
  type Actions = NavigationMenuRootActions;
  type ChangeEventReason = NavigationMenuRootChangeEventReason;
  type ChangeEventDetails = NavigationMenuRootChangeEventDetails;
}

interface NavigationMenuListState {
  /**
   * If `true`, the popup is open.
   */
  open: boolean;
}
interface NavigationMenuListProps extends BaseUIComponentProps<
  "ul",
  NavigationMenuList.State
> {}
/**
 * Contains a list of navigation menu items.
 * Renders a `<ul>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuList: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuListProps, "ref"> & React$1.RefAttributes<HTMLUListElement>
>;
declare namespace NavigationMenuList {
  type State = NavigationMenuListState;
  type Props = NavigationMenuListProps;
}

interface NavigationMenuItemState {}
interface NavigationMenuItemProps extends BaseUIComponentProps<
  "li",
  NavigationMenuItem.State
> {
  /**
   * A unique value that identifies this navigation menu item.
   * If no value is provided, a unique ID will be generated automatically.
   * Use when controlling the navigation menu programmatically.
   */
  value?: any;
}
/**
 * An individual navigation menu item.
 * Renders a `<li>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuItem: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuItemProps, "ref"> & React$1.RefAttributes<HTMLLIElement>
>;
declare namespace NavigationMenuItem {
  type State = NavigationMenuItemState;
  type Props = NavigationMenuItemProps;
}

interface NavigationMenuContentState {
  /**
   * If `true`, the component is open.
   */
  open: boolean;
  /**
   * The transition status of the component.
   */
  transitionStatus: TransitionStatus;
  /**
   * The direction of the activation.
   */
  activationDirection: "left" | "right" | "up" | "down" | null;
}
interface NavigationMenuContentProps extends BaseUIComponentProps<
  "div",
  NavigationMenuContent.State
> {
  /**
   * Whether to keep the content mounted in the DOM while the popup is closed.
   * Ensures the content is present during server-side rendering for web crawlers.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
/**
 * A container for the content of the navigation menu item that is moved into the popup
 * when the item is active.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuContent: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuContentProps, "ref"> &
    React$1.RefAttributes<HTMLDivElement>
>;
declare namespace NavigationMenuContent {
  type State = NavigationMenuContentState;
  type Props = NavigationMenuContentProps;
}

interface NavigationMenuTriggerState {
  /**
   * If `true`, the popup is open and the item is active.
   */
  open: boolean;
}
interface NavigationMenuTriggerProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", NavigationMenuTrigger.State> {}
/**
 * Opens the navigation menu popup when hovered or clicked, revealing the
 * associated content.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuTrigger: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuTriggerProps, "ref"> &
    React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace NavigationMenuTrigger {
  type State = NavigationMenuTriggerState;
  type Props = NavigationMenuTriggerProps;
}

interface NavigationMenuPortalProps extends FloatingPortal.Props<NavigationMenuPortal.State> {
  /**
   * Whether to keep the portal mounted in the DOM while the popup is hidden.
   * @default false
   */
  keepMounted?: boolean | undefined;
  /**
   * A parent element to render the portal element into.
   */
  container?:
    | FloatingPortal.Props<NavigationMenuPortal.State>["container"]
    | undefined;
}
/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuPortal: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuPortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace NavigationMenuPortal {
  interface State {}
}
declare namespace NavigationMenuPortal {
  type Props = NavigationMenuPortalProps;
}

interface NavigationMenuPositionerState {
  /**
   * Whether the navigation menu is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  anchorHidden: boolean;
  /**
   * Whether CSS transitions should be disabled.
   */
  instant: boolean;
}
interface NavigationMenuPositionerProps
  extends
    useAnchorPositioning.SharedParameters,
    BaseUIComponentProps<"div", NavigationMenuPositioner.State> {}
/**
 * Positions the navigation menu against the currently active trigger.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuPositioner: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuPositionerProps, "ref"> &
    React$1.RefAttributes<HTMLDivElement>
>;
declare namespace NavigationMenuPositioner {
  type State = NavigationMenuPositionerState;
  type Props = NavigationMenuPositionerProps;
}

interface NavigationMenuViewportState {}
interface NavigationMenuViewportProps extends BaseUIComponentProps<
  "div",
  NavigationMenuViewport.State
> {}
/**
 * The clipping viewport of the navigation menu's current content.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuViewport: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuViewportProps, "ref"> &
    React$1.RefAttributes<HTMLDivElement>
>;
declare namespace NavigationMenuViewport {
  type State = NavigationMenuViewportState;
  type Props = NavigationMenuViewportProps;
}

interface NavigationMenuBackdropState {
  /**
   * If `true`, the popup is open.
   */
  open: boolean;
  /**
   * The transition status of the popup.
   */
  transitionStatus: TransitionStatus;
}
interface NavigationMenuBackdropProps extends BaseUIComponentProps<
  "div",
  NavigationMenuBackdrop.State
> {}
/**
 * A backdrop for the navigation menu popup.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuBackdrop: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuBackdropProps, "ref"> &
    React$1.RefAttributes<HTMLDivElement>
>;
declare namespace NavigationMenuBackdrop {
  type State = NavigationMenuBackdropState;
  type Props = NavigationMenuBackdropProps;
}

interface NavigationMenuPopupState {
  /**
   * If `true`, the popup is open.
   */
  open: boolean;
  /**
   * The transition status of the popup.
   */
  transitionStatus: TransitionStatus;
  /**
   * The side of the anchor the popup is positioned on.
   */
  side: Side;
  /**
   * The alignment of the popup relative to the anchor.
   */
  align: Align;
  /**
   * Whether the anchor element is hidden.
   */
  anchorHidden: boolean;
}
interface NavigationMenuPopupProps extends BaseUIComponentProps<
  "nav",
  NavigationMenuPopup.State
> {}
/**
 * A container for the navigation menu contents.
 * Renders a `<nav>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuPopup: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuPopupProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace NavigationMenuPopup {
  type State = NavigationMenuPopupState;
  type Props = NavigationMenuPopupProps;
}

interface NavigationMenuArrowState {
  /**
   * Whether the popup is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  uncentered: boolean;
}
interface NavigationMenuArrowProps extends BaseUIComponentProps<
  "div",
  NavigationMenuArrow.State
> {}
/**
 * Displays an element pointing toward the navigation menu's current anchor.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuArrow: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuArrowProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace NavigationMenuArrow {
  type State = NavigationMenuArrowState;
  type Props = NavigationMenuArrowProps;
}

interface NavigationMenuLinkState {
  /**
   * Whether the link is the currently active page.
   */
  active: boolean;
}
interface NavigationMenuLinkProps extends BaseUIComponentProps<
  "a",
  NavigationMenuLink.State
> {
  /**
   * Whether the link is the currently active page.
   * @default false
   */
  active?: boolean | undefined;
  /**
   * Whether to close the navigation menu when the link is clicked.
   * @default false
   */
  closeOnClick?: boolean | undefined;
}
/**
 * A link in the navigation menu that can be used to navigate to a different page or section.
 * Renders an `<a>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuLink: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuLinkProps, "ref"> &
    React$1.RefAttributes<HTMLAnchorElement>
>;
declare namespace NavigationMenuLink {
  type State = NavigationMenuLinkState;
  type Props = NavigationMenuLinkProps;
}

interface NavigationMenuIconState {
  /**
   * Whether the navigation menu is open and the item is active.
   */
  open: boolean;
}
interface NavigationMenuIconProps extends BaseUIComponentProps<
  "span",
  NavigationMenuIcon.State
> {}
/**
 * An icon that indicates that the trigger button opens a menu.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuIcon: React$1.ForwardRefExoticComponent<
  Omit<NavigationMenuIconProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace NavigationMenuIcon {
  type State = NavigationMenuIconState;
  type Props = NavigationMenuIconProps;
}

declare namespace index_parts$d {
  export {
    NavigationMenuArrow as Arrow,
    NavigationMenuBackdrop as Backdrop,
    NavigationMenuContent as Content,
    NavigationMenuIcon as Icon,
    NavigationMenuItem as Item,
    NavigationMenuLink as Link,
    NavigationMenuList as List,
    NavigationMenuPopup as Popup,
    NavigationMenuPortal as Portal,
    NavigationMenuPositioner as Positioner,
    NavigationMenuRoot as Root,
    NavigationMenuTrigger as Trigger,
    NavigationMenuViewport as Viewport,
  };
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
  step?: (number | "any") | undefined;
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
   * The raw numeric value of the field.
   */
  value?: (number | null) | undefined;
  /**
   * The uncontrolled value of the field when it’s initially rendered.
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
  inputRef?: React$1.Ref<HTMLInputElement> | undefined;
}
interface NumberFieldRootState extends FieldRoot.State {
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
declare const NumberFieldRoot: React$1.ForwardRefExoticComponent<
  Omit<NumberFieldRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace NumberFieldRoot {
  type State = NumberFieldRootState;
  type Props = NumberFieldRootProps;
  type ChangeEventReason = NumberFieldRootChangeEventReason;
  type ChangeEventDetails = NumberFieldRootChangeEventDetails;
  type CommitEventReason = NumberFieldRootCommitEventReason;
  type CommitEventDetails = NumberFieldRootCommitEventDetails;
}

interface NumberFieldGroupState extends NumberFieldRoot.State {}
interface NumberFieldGroupProps extends BaseUIComponentProps<
  "div",
  NumberFieldGroup.State
> {}
/**
 * Groups the input with the increment and decrement buttons.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
 */
declare const NumberFieldGroup: React$1.ForwardRefExoticComponent<
  Omit<NumberFieldGroupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace NumberFieldGroup {
  type State = NumberFieldGroupState;
  type Props = NumberFieldGroupProps;
}

interface NumberFieldIncrementState extends NumberFieldRoot.State {}
interface NumberFieldIncrementProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", NumberFieldIncrement.State> {}
/**
 * A stepper button that increases the field value when clicked.
 * Renders an `<button>` element.
 *
 * Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
 */
declare const NumberFieldIncrement: React$1.ForwardRefExoticComponent<
  Omit<NumberFieldIncrementProps, "ref"> &
    React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace NumberFieldIncrement {
  type State = NumberFieldIncrementState;
  type Props = NumberFieldIncrementProps;
}

interface NumberFieldDecrementState extends NumberFieldRoot.State {}
interface NumberFieldDecrementProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", NumberFieldDecrement.State> {}
/**
 * A stepper button that decreases the field value when clicked.
 * Renders an `<button>` element.
 *
 * Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
 */
declare const NumberFieldDecrement: React$1.ForwardRefExoticComponent<
  Omit<NumberFieldDecrementProps, "ref"> &
    React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace NumberFieldDecrement {
  type State = NumberFieldDecrementState;
  type Props = NumberFieldDecrementProps;
}

interface NumberFieldInputState extends NumberFieldRoot.State {}
interface NumberFieldInputProps extends BaseUIComponentProps<
  "input",
  NumberFieldInput.State
> {
  /**
   * A string value that provides a user-friendly name for the role of the input.
   * @default 'Number field'
   */
  "aria-roledescription"?:
    | React$1.AriaAttributes["aria-roledescription"]
    | undefined;
}
/**
 * The native input control in the number field.
 * Renders an `<input>` element.
 *
 * Documentation: [Base UI Number Field](https://base-ui.com/react/components/number-field)
 */
declare const NumberFieldInput: React$1.ForwardRefExoticComponent<
  Omit<NumberFieldInputProps, "ref"> & React$1.RefAttributes<HTMLInputElement>
>;
declare namespace NumberFieldInput {
  type State = NumberFieldInputState;
  type Props = NumberFieldInputProps;
}

interface NumberFieldScrubAreaState extends NumberFieldRoot.State {}
interface NumberFieldScrubAreaProps extends BaseUIComponentProps<
  "span",
  NumberFieldScrubArea.State
> {
  /**
   * Cursor movement direction in the scrub area.
   * @default 'horizontal'
   */
  direction?: ("horizontal" | "vertical") | undefined;
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
declare const NumberFieldScrubArea: React$1.ForwardRefExoticComponent<
  Omit<NumberFieldScrubAreaProps, "ref"> &
    React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace NumberFieldScrubArea {
  type State = NumberFieldScrubAreaState;
  type Props = NumberFieldScrubAreaProps;
}

interface NumberFieldScrubAreaCursorState extends NumberFieldRoot.State {}
interface NumberFieldScrubAreaCursorProps extends BaseUIComponentProps<
  "span",
  NumberFieldScrubAreaCursor.State
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
declare const NumberFieldScrubAreaCursor: React$1.ForwardRefExoticComponent<
  Omit<NumberFieldScrubAreaCursorProps, "ref"> &
    React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace NumberFieldScrubAreaCursor {
  type State = NumberFieldScrubAreaCursorState;
  type Props = NumberFieldScrubAreaCursorProps;
}

declare namespace index_parts$c {
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

type TimeoutId = number;
declare class Timeout {
  static create(): Timeout;
  currentId: TimeoutId;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay: number, fn: Function): void;
  isStarted(): boolean;
  clear: () => void;
  disposeEffect: () => () => void;
}

type State$2<Payload> = PopupStoreState<Payload> & {
  disabled: boolean;
  instantType: "dismiss" | "click" | undefined;
  modal: boolean | "trap-focus";
  openMethod: InteractionType | null;
  openChangeReason: PopoverRoot.ChangeEventReason | null;
  stickIfOpen: boolean;
  nested: boolean;
  titleElementId: string | undefined;
  descriptionElementId: string | undefined;
  openOnHover: boolean;
  closeDelay: number;
  hasViewport: boolean;
};
type Context$2 = PopupStoreContext<PopoverRoot.ChangeEventDetails> & {
  readonly popupRef: React$1.RefObject<HTMLElement | null>;
  readonly backdropRef: React$1.RefObject<HTMLDivElement | null>;
  readonly internalBackdropRef: React$1.RefObject<HTMLDivElement | null>;
  readonly triggerFocusTargetRef: React$1.RefObject<HTMLElement | null>;
  readonly beforeContentFocusGuardRef: React$1.RefObject<HTMLElement | null>;
  readonly stickIfOpenTimeout: Timeout;
};
declare const selectors$2: {
  disabled: (state: State$2<unknown>) => boolean;
  instantType: (state: State$2<unknown>) => "click" | "dismiss" | undefined;
  openMethod: (state: State$2<unknown>) => InteractionType | null;
  openChangeReason: (
    state: State$2<unknown>,
  ) => PopoverRootChangeEventReason | null;
  modal: (state: State$2<unknown>) => boolean | "trap-focus";
  stickIfOpen: (state: State$2<unknown>) => boolean;
  titleElementId: (state: State$2<unknown>) => string | undefined;
  descriptionElementId: (state: State$2<unknown>) => string | undefined;
  openOnHover: (state: State$2<unknown>) => boolean;
  closeDelay: (state: State$2<unknown>) => number;
  hasViewport: (state: State$2<unknown>) => boolean;
  open: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  mounted: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  transitionStatus: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => TransitionStatus;
  floatingRootContext: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => FloatingRootStore;
  preventUnmountingOnClose: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  payload: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => unknown;
  activeTriggerId: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => string | null;
  activeTriggerElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => Element | null;
  isTriggerActive: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  isOpenedByTrigger: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  isMountedByTrigger: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  triggerProps: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    isActive: boolean,
  ) => HTMLProps;
  popupProps: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLProps;
  popupElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLElement | null;
  positionerElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLElement | null;
};
declare class PopoverStore<Payload> extends ReactStore<
  Readonly<State$2<Payload>>,
  Context$2,
  Selectors
> {
  constructor(initialState?: Partial<State$2<Payload>>);
  setOpen: (
    nextOpen: boolean,
    eventDetails: Omit<PopoverRoot.ChangeEventDetails, "preventUnmountOnClose">,
  ) => void;
  static useStore<Payload>(
    externalStore: PopoverStore<Payload> | undefined,
    initialState: Partial<State$2<Payload>>,
  ): PopoverStore<Payload>;
  private disposeEffect;
}
type Selectors = typeof selectors$2;

declare class PopoverHandle<Payload> {
  /**
   * Internal store holding the popover's state.
   * @internal
   */
  readonly store: PopoverStore<Payload>;
  constructor();
  /**
   * Opens the popover and associates it with the trigger with the given id.
   * The trigger must be a Popover.Trigger component with this handle passed as a prop.
   *
   * @param triggerId ID of the trigger to associate with the popover.
   */
  open(triggerId: string): void;
  /**
   * Closes the popover.
   */
  close(): void;
  /**
   * Indicates whether the popover is currently open.
   */
  get isOpen(): boolean;
}
/**
 * Creates a new handle to connect a Popover.Root with detached Popover.Trigger components.
 */
declare function createPopoverHandle<Payload>(): PopoverHandle<Payload>;

interface PopoverRootState {}
interface PopoverRootProps<Payload = unknown> {
  /**
   * Whether the popover is initially open.
   *
   * To render a controlled popover, use the `open` prop instead.
   * @default false
   */
  defaultOpen?: boolean | undefined;
  /**
   * Whether the popover is currently open.
   */
  open?: boolean | undefined;
  /**
   * Event handler called when the popover is opened or closed.
   */
  onOpenChange?:
    | ((open: boolean, eventDetails: PopoverRoot.ChangeEventDetails) => void)
    | undefined;
  /**
   * Event handler called after any animations complete when the popover is opened or closed.
   */
  onOpenChangeComplete?: ((open: boolean) => void) | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: When specified, the popover will not be unmounted when closed.
   * Instead, the `unmount` function must be called to unmount the popover manually.
   * Useful when the popover's animation is controlled by an external library.
   * - `close`: Closes the dialog imperatively when called.
   */
  actionsRef?: React$1.RefObject<PopoverRoot.Actions | null> | undefined;
  /**
   * Determines if the popover enters a modal state when open.
   * - `true`: user interaction is limited to the popover: document page scroll is locked, and pointer interactions on outside elements are disabled.
   * - `false`: user interaction with the rest of the document is allowed.
   * - `'trap-focus'`: focus is trapped inside the popover, but document page scroll is not locked and pointer interactions outside of it remain enabled.
   * @default false
   */
  modal?: (boolean | "trap-focus") | undefined;
  /**
   * ID of the trigger that the popover is associated with.
   * This is useful in conjunction with the `open` prop to create a controlled popover.
   * There's no need to specify this prop when the popover is uncontrolled (i.e. when the `open` prop is not set).
   */
  triggerId?: (string | null) | undefined;
  /**
   * ID of the trigger that the popover is associated with.
   * This is useful in conjunction with the `defaultOpen` prop to create an initially open popover.
   */
  defaultTriggerId?: (string | null) | undefined;
  /**
   * A handle to associate the popover with a trigger.
   * If specified, allows external triggers to control the popover's open state.
   */
  handle?: PopoverHandle<Payload> | undefined;
  /**
   * The content of the popover.
   * This can be a regular React node or a render function that receives the `payload` of the active trigger.
   */
  children?: React$1.ReactNode | PayloadChildRenderFunction<Payload>;
}
interface PopoverRootActions {
  unmount: () => void;
  close: () => void;
}
type PopoverRootChangeEventReason =
  | typeof triggerHover
  | typeof triggerFocus
  | typeof triggerPress
  | typeof outsidePress
  | typeof escapeKey
  | typeof closePress
  | typeof focusOut
  | typeof imperativeAction
  | typeof none;
type PopoverRootChangeEventDetails =
  BaseUIChangeEventDetails<PopoverRoot.ChangeEventReason> & {
    preventUnmountOnClose(): void;
  };
/**
 * Groups all parts of the popover.
 * Doesn’t render its own HTML element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
declare function PopoverRoot<Payload = unknown>(
  props: PopoverRoot.Props<Payload>,
): react_jsx_runtime.JSX.Element;
declare namespace PopoverRoot {
  type State = PopoverRootState;
  type Props<Payload = unknown> = PopoverRootProps<Payload>;
  type Actions = PopoverRootActions;
  type ChangeEventReason = PopoverRootChangeEventReason;
  type ChangeEventDetails = PopoverRootChangeEventDetails;
}

interface PopoverTriggerState {
  /**
   * Whether the popover is currently disabled.
   */
  disabled: boolean;
  /**
   * Whether the popover is currently open.
   */
  open: boolean;
}
type PopoverTriggerProps<Payload = unknown> = NativeButtonProps &
  BaseUIComponentProps<"button", PopoverTriggerState> & {
    /**
     * Whether the component renders a native `<button>` element when replacing it
     * via the `render` prop.
     * Set to `false` if the rendered element is not a button (e.g. `<div>`).
     * @default true
     */
    nativeButton?: boolean | undefined;
    /**
     * A handle to associate the trigger with a popover.
     */
    handle?: PopoverHandle<Payload> | undefined;
    /**
     * A payload to pass to the popover when it is opened.
     */
    payload?: Payload | undefined;
    /**
     * ID of the trigger. In addition to being forwarded to the rendered element,
     * it is also used to specify the active trigger for the popover in controlled mode (with the PopoverRoot `triggerId` prop).
     */
    id?: string | undefined;
    /**
     * Whether the popover should also open when the trigger is hovered.
     * @default false
     */
    openOnHover?: boolean | undefined;
    /**
     * How long to wait before the popover may be opened on hover. Specified in milliseconds.
     *
     * Requires the `openOnHover` prop.
     * @default 300
     */
    delay?: number | undefined;
    /**
     * How long to wait before closing the popover that was opened on hover.
     * Specified in milliseconds.
     *
     * Requires the `openOnHover` prop.
     * @default 0
     */
    closeDelay?: number | undefined;
  };
/**
 * A button that opens the popover.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
declare const PopoverTrigger: PopoverTrigger;
interface PopoverTrigger {
  <Payload>(
    componentProps: PopoverTriggerProps<Payload> &
      React$1.RefAttributes<HTMLElement>,
  ): React$1.JSX.Element;
}
declare namespace PopoverTrigger {
  type State = PopoverTriggerState;
  type Props<Payload = unknown> = PopoverTriggerProps<Payload>;
}

interface PopoverPortalProps extends FloatingPortal.Props<PopoverPortal.State> {
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
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
declare const PopoverPortal: React$1.ForwardRefExoticComponent<
  Omit<PopoverPortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace PopoverPortal {
  interface State {}
}
declare namespace PopoverPortal {
  type Props = PopoverPortalProps;
}

interface PopoverPositionerState {
  /**
   * Whether the popover is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  anchorHidden: boolean;
  /**
   * Whether CSS transitions should be disabled.
   */
  instant: string | undefined;
}
interface PopoverPositionerProps
  extends
    useAnchorPositioning.SharedParameters,
    BaseUIComponentProps<"div", PopoverPositioner.State> {}
/**
 * Positions the popover against the trigger.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
declare const PopoverPositioner: React$1.ForwardRefExoticComponent<
  Omit<PopoverPositionerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace PopoverPositioner {
  type State = PopoverPositionerState;
  type Props = PopoverPositionerProps;
}

interface PopoverPopupState {
  /**
   * Whether the popover is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  transitionStatus: TransitionStatus;
  instant: "dismiss" | "click" | undefined;
}
interface PopoverPopupProps extends BaseUIComponentProps<
  "div",
  PopoverPopup.State
> {
  /**
   * Determines the element to focus when the popover is opened.
   *
   * - `false`: Do not move focus.
   * - `true`: Move focus based on the default behavior (first tabbable element or popup).
   * - `RefObject`: Move focus to the ref element.
   * - `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).
   *   Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.
   */
  initialFocus?:
    | (
        | boolean
        | React$1.RefObject<HTMLElement | null>
        | ((openType: InteractionType) => void | boolean | HTMLElement | null)
      )
    | undefined;
  /**
   * Determines the element to focus when the popover is closed.
   *
   * - `false`: Do not move focus.
   * - `true`: Move focus based on the default behavior (trigger or previously focused element).
   * - `RefObject`: Move focus to the ref element.
   * - `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).
   *   Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.
   */
  finalFocus?:
    | (
        | boolean
        | React$1.RefObject<HTMLElement | null>
        | ((closeType: InteractionType) => void | boolean | HTMLElement | null)
      )
    | undefined;
}
/**
 * A container for the popover contents.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
declare const PopoverPopup: React$1.ForwardRefExoticComponent<
  Omit<PopoverPopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace PopoverPopup {
  type State = PopoverPopupState;
  type Props = PopoverPopupProps;
}

interface PopoverArrowState {
  /**
   * Whether the popover is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  uncentered: boolean;
}
interface PopoverArrowProps extends BaseUIComponentProps<
  "div",
  PopoverArrow.State
> {}
/**
 * Displays an element positioned against the popover anchor.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
declare const PopoverArrow: React$1.ForwardRefExoticComponent<
  Omit<PopoverArrowProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace PopoverArrow {
  type State = PopoverArrowState;
  type Props = PopoverArrowProps;
}

interface PopoverBackdropState {
  /**
   * Whether the popover is currently open.
   */
  open: boolean;
  transitionStatus: TransitionStatus;
}
interface PopoverBackdropProps extends BaseUIComponentProps<
  "div",
  PopoverBackdrop.State
> {}
/**
 * An overlay displayed beneath the popover.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
declare const PopoverBackdrop: React$1.ForwardRefExoticComponent<
  Omit<PopoverBackdropProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace PopoverBackdrop {
  type State = PopoverBackdropState;
  type Props = PopoverBackdropProps;
}

interface PopoverTitleState {}
interface PopoverTitleProps extends BaseUIComponentProps<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  PopoverTitle.State
> {}
/**
 * A heading that labels the popover.
 * Renders an `<h2>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
declare const PopoverTitle: React$1.ForwardRefExoticComponent<
  Omit<PopoverTitleProps, "ref"> & React$1.RefAttributes<HTMLHeadingElement>
>;
declare namespace PopoverTitle {
  type State = PopoverTitleState;
  type Props = PopoverTitleProps;
}

interface PopoverDescriptionState {}
interface PopoverDescriptionProps extends BaseUIComponentProps<
  "p",
  PopoverDescription.State
> {}
/**
 * A paragraph with additional information about the popover.
 * Renders a `<p>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
declare const PopoverDescription: React$1.ForwardRefExoticComponent<
  Omit<PopoverDescriptionProps, "ref"> &
    React$1.RefAttributes<HTMLParagraphElement>
>;
declare namespace PopoverDescription {
  type State = PopoverDescriptionState;
  type Props = PopoverDescriptionProps;
}

interface PopoverCloseState {}
interface PopoverCloseProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", PopoverClose.State> {}
/**
 * A button that closes the popover.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
declare const PopoverClose: React$1.ForwardRefExoticComponent<
  Omit<PopoverCloseProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace PopoverClose {
  type State = PopoverCloseState;
  type Props = PopoverCloseProps;
}

/**
 * A viewport for displaying content transitions.
 * This component is only required if one popup can be opened by multiple triggers, its content change based on the trigger
 * and switching between them is animated.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
 */
declare const PopoverViewport: React$1.ForwardRefExoticComponent<
  Omit<PopoverViewport.Props, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace PopoverViewport {
  interface Props extends BaseUIComponentProps<"div", State> {
    /**
     * The content to render inside the transition container.
     */
    children?: React$1.ReactNode;
  }
  interface State {
    activationDirection: string | undefined;
    /**
     * Whether the viewport is currently transitioning between contents.
     */
    transitioning: boolean;
    /**
     * Present if animations should be instant.
     */
    instant: "dismiss" | "click" | undefined;
  }
}

declare namespace index_parts$b {
  export {
    PopoverArrow as Arrow,
    PopoverBackdrop as Backdrop,
    PopoverClose as Close,
    PopoverDescription as Description,
    PopoverHandle as Handle,
    PopoverPopup as Popup,
    PopoverPortal as Portal,
    PopoverPositioner as Positioner,
    PopoverRoot as Root,
    PopoverTitle as Title,
    PopoverTrigger as Trigger,
    PopoverViewport as Viewport,
    createPopoverHandle as createHandle,
  };
}

type State$1<Payload> = PopupStoreState<Payload> & {
  instantType: "dismiss" | "focus" | undefined;
  hasViewport: boolean;
};
type Context$1 = PopupStoreContext<PreviewCardRoot.ChangeEventDetails> & {
  closeDelayRef: React$1.RefObject<number>;
};
declare const selectors$1: {
  instantType: (state: State$1<unknown>) => "focus" | "dismiss" | undefined;
  hasViewport: (state: State$1<unknown>) => boolean;
  open: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  mounted: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  transitionStatus: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => TransitionStatus;
  floatingRootContext: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => FloatingRootStore;
  preventUnmountingOnClose: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  payload: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => unknown;
  activeTriggerId: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => string | null;
  activeTriggerElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => Element | null;
  isTriggerActive: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  isOpenedByTrigger: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  isMountedByTrigger: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  triggerProps: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    isActive: boolean,
  ) => HTMLProps;
  popupProps: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLProps;
  popupElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLElement | null;
  positionerElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLElement | null;
};
declare class PreviewCardStore<Payload> extends ReactStore<
  Readonly<State$1<Payload>>,
  Context$1,
  typeof selectors$1
> {
  constructor(initialState?: Partial<State$1<Payload>>);
  setOpen: (
    nextOpen: boolean,
    eventDetails: Omit<
      PreviewCardRoot.ChangeEventDetails,
      "preventUnmountOnClose"
    >,
  ) => void;
  static useStore<Payload>(
    externalStore: PreviewCardStore<Payload> | undefined,
    initialState?: Partial<State$1<Payload>>,
  ): PreviewCardStore<Payload>;
}

/**
 * A handle to control a preview card imperatively and to associate detached triggers with it.
 */
declare class PreviewCardHandle<Payload> {
  /**
   * Internal store holding the preview card state.
   * @internal
   */
  readonly store: PreviewCardStore<Payload>;
  constructor();
  /**
   * Opens the preview card and associates it with the trigger with the given ID.
   * The trigger must be a PreviewCard.Trigger component with this handle passed as a prop.
   *
   * This method should only be called in an event handler or an effect (not during rendering).
   *
   * @param triggerId ID of the trigger to associate with the preview card.
   */
  open(triggerId: string): void;
  /**
   * Closes the preview card.
   */
  close(): void;
  /**
   * Indicates whether the preview card is currently open.
   */
  get isOpen(): boolean;
}
/**
 * Creates a new handle to connect a PreviewCard.Root with detached PreviewCard.Trigger components.
 */
declare function createPreviewCardHandle<Payload>(): PreviewCardHandle<Payload>;

interface PreviewCardRootState {}
interface PreviewCardRootProps<Payload = unknown> {
  /**
   * Whether the preview card is initially open.
   *
   * To render a controlled preview card, use the `open` prop instead.
   * @default false
   */
  defaultOpen?: boolean | undefined;
  /**
   * Whether the preview card is currently open.
   */
  open?: boolean | undefined;
  /**
   * Event handler called when the preview card is opened or closed.
   */
  onOpenChange?:
    | ((
        open: boolean,
        eventDetails: PreviewCardRoot.ChangeEventDetails,
      ) => void)
    | undefined;
  /**
   * Event handler called after any animations complete when the preview card is opened or closed.
   */
  onOpenChangeComplete?: ((open: boolean) => void) | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: Unmounts the preview card popup.
   * - `close`: Closes the preview card imperatively when called.
   */
  actionsRef?: React$1.RefObject<PreviewCardRoot.Actions | null> | undefined;
  /**
   * A handle to associate the preview card with a trigger.
   * If specified, allows external triggers to control the card's open state.
   * Can be created with the PreviewCard.createHandle() method.
   */
  handle?: PreviewCardHandle<Payload> | undefined;
  /**
   * The content of the preview card.
   * This can be a regular React node or a render function that receives the `payload` of the active trigger.
   */
  children?: React$1.ReactNode | PayloadChildRenderFunction<Payload>;
  /**
   * ID of the trigger that the preview card is associated with.
   * This is useful in conjuntion with the `open` prop to create a controlled preview card.
   * There's no need to specify this prop when the preview card is uncontrolled (i.e. when the `open` prop is not set).
   */
  triggerId?: (string | null) | undefined;
  /**
   * ID of the trigger that the preview card is associated with.
   * This is useful in conjunction with the `defaultOpen` prop to create an initially open preview card.
   */
  defaultTriggerId?: (string | null) | undefined;
}
interface PreviewCardRootActions {
  unmount: () => void;
  close: () => void;
}
type PreviewCardRootChangeEventReason =
  | typeof triggerHover
  | typeof triggerFocus
  | typeof triggerPress
  | typeof outsidePress
  | typeof escapeKey
  | typeof imperativeAction
  | typeof none;
type PreviewCardRootChangeEventDetails =
  BaseUIChangeEventDetails<PreviewCardRoot.ChangeEventReason> & {
    preventUnmountOnClose(): void;
  };
/**
 * Groups all parts of the preview card.
 * Doesn’t render its own HTML element.
 *
 * Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
 */
declare function PreviewCardRoot<Payload>(
  props: PreviewCardRoot.Props<Payload>,
): react_jsx_runtime.JSX.Element;
declare namespace PreviewCardRoot {
  type State = PreviewCardRootState;
  type Props<Payload = unknown> = PreviewCardRootProps<Payload>;
  type Actions = PreviewCardRootActions;
  type ChangeEventReason = PreviewCardRootChangeEventReason;
  type ChangeEventDetails = PreviewCardRootChangeEventDetails;
}

interface FloatingPortalLiteProps<State> extends FloatingPortal.Props<State> {}
/**
 * `FloatingPortal` includes tabbable logic handling for focus management.
 * For components that don't need tabbable logic, use `FloatingPortalLite`.
 * @internal
 */
declare const FloatingPortalLite: React$1.ForwardRefExoticComponent<
  Omit<FloatingPortalLite.Props<any>, "ref"> &
    React$1.RefAttributes<HTMLDivElement>
>;
declare namespace FloatingPortalLite {
  type Props<State> = FloatingPortalLiteProps<State>;
}

interface PreviewCardPortalProps extends FloatingPortalLite.Props<PreviewCardPortal.State> {
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
 * Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
 */
declare const PreviewCardPortal: React$1.ForwardRefExoticComponent<
  Omit<PreviewCardPortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace PreviewCardPortal {
  interface State {}
}
declare namespace PreviewCardPortal {
  type Props = PreviewCardPortalProps;
}

interface PreviewCardTriggerState {
  /**
   * Whether the preview card is currently open.
   */
  open: boolean;
}
interface PreviewCardTriggerProps<
  Payload = unknown,
> extends BaseUIComponentProps<"a", PreviewCardTrigger.State> {
  /**
   * A handle to associate the trigger with a preview card.
   */
  handle?: PreviewCardHandle<Payload> | undefined;
  /**
   * A payload to pass to the preview card when it is opened.
   */
  payload?: Payload | undefined;
  /**
   * How long to wait before the preview card opens. Specified in milliseconds.
   * @default 600
   */
  delay?: number | undefined;
  /**
   * How long to wait before closing the preview card. Specified in milliseconds.
   * @default 300
   */
  closeDelay?: number | undefined;
}
/**
 * A link that opens the preview card.
 * Renders an `<a>` element.
 *
 * Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
 */
declare const PreviewCardTrigger: PreviewCardTrigger;
interface PreviewCardTrigger {
  <Payload>(
    componentProps: PreviewCardTrigger.Props<Payload> &
      React$1.RefAttributes<HTMLElement>,
  ): React$1.JSX.Element;
}
declare namespace PreviewCardTrigger {
  type State = PreviewCardTriggerState;
  type Props<Payload = unknown> = PreviewCardTriggerProps<Payload>;
}

interface PreviewCardPositionerState {
  /**
   * Whether the preview card is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  anchorHidden: boolean;
  instant: "dismiss" | "focus" | undefined;
}
interface PreviewCardPositionerProps
  extends
    useAnchorPositioning.SharedParameters,
    BaseUIComponentProps<"div", PreviewCardPositioner.State> {}
/**
 * Positions the popup against the trigger.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
 */
declare const PreviewCardPositioner: React$1.ForwardRefExoticComponent<
  Omit<PreviewCardPositionerProps, "ref"> &
    React$1.RefAttributes<HTMLDivElement>
>;
declare namespace PreviewCardPositioner {
  type State = PreviewCardPositionerState;
  type Props = PreviewCardPositionerProps;
}

interface PreviewCardPopupState {
  /**
   * Whether the preview card is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  instant: "dismiss" | "focus" | undefined;
  transitionStatus: TransitionStatus;
}
interface PreviewCardPopupProps extends BaseUIComponentProps<
  "div",
  PreviewCardPopup.State
> {}
/**
 * A container for the preview card contents.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
 */
declare const PreviewCardPopup: React$1.ForwardRefExoticComponent<
  Omit<PreviewCardPopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace PreviewCardPopup {
  type State = PreviewCardPopupState;
  type Props = PreviewCardPopupProps;
}

interface PreviewCardArrowState {
  /**
   * Whether the preview card is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  uncentered: boolean;
}
interface PreviewCardArrowProps extends BaseUIComponentProps<
  "div",
  PreviewCardArrow.State
> {}
/**
 * Displays an element positioned against the preview card anchor.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
 */
declare const PreviewCardArrow: React$1.ForwardRefExoticComponent<
  Omit<PreviewCardArrowProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace PreviewCardArrow {
  type State = PreviewCardArrowState;
  type Props = PreviewCardArrowProps;
}

interface PreviewCardBackdropState {
  /**
   * Whether the preview card is currently open.
   */
  open: boolean;
  transitionStatus: TransitionStatus;
}
interface PreviewCardBackdropProps extends BaseUIComponentProps<
  "div",
  PreviewCardBackdrop.State
> {}
/**
 * An overlay displayed beneath the popup.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
 */
declare const PreviewCardBackdrop: React$1.ForwardRefExoticComponent<
  Omit<PreviewCardBackdropProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace PreviewCardBackdrop {
  type State = PreviewCardBackdropState;
  type Props = PreviewCardBackdropProps;
}

/**
 * A viewport for displaying content transitions.
 * This component is only required if one popup can be opened by multiple triggers, its content change based on the trigger
 * and switching between them is animated.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Preview Card](https://base-ui.com/react/components/preview-card)
 */
declare const PreviewCardViewport: React$1.ForwardRefExoticComponent<
  Omit<PreviewCardViewport.Props, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace PreviewCardViewport {
  interface Props extends BaseUIComponentProps<"div", State> {
    /**
     * The content to render inside the transition container.
     */
    children?: React$1.ReactNode;
  }
  interface State {
    activationDirection: string | undefined;
    /**
     * Whether the viewport is currently transitioning between contents.
     */
    transitioning: boolean;
    instant: "dismiss" | "focus" | undefined;
  }
}

declare namespace index_parts$a {
  export {
    PreviewCardArrow as Arrow,
    PreviewCardBackdrop as Backdrop,
    PreviewCardHandle as Handle,
    PreviewCardPopup as Popup,
    PreviewCardPortal as Portal,
    PreviewCardPositioner as Positioner,
    PreviewCardRoot as Root,
    PreviewCardTrigger as Trigger,
    PreviewCardViewport as Viewport,
    createPreviewCardHandle as createHandle,
  };
}

type ProgressStatus = "indeterminate" | "progressing" | "complete";
interface ProgressRootState {
  status: ProgressStatus;
}
interface ProgressRootProps extends BaseUIComponentProps<
  "div",
  ProgressRoot.State
> {
  /**
   * A string value that provides a user-friendly name for `aria-valuenow`, the current value of the meter.
   */
  "aria-valuetext"?: React$1.AriaAttributes["aria-valuetext"] | undefined;
  /**
   * Options to format the value.
   */
  format?: Intl.NumberFormatOptions | undefined;
  /**
   * Accepts a function which returns a string value that provides a human-readable text alternative for the current value of the progress bar.
   */
  getAriaValueText?:
    | ((formattedValue: string | null, value: number | null) => string)
    | undefined;
  /**
   * The locale used by `Intl.NumberFormat` when formatting the value.
   * Defaults to the user's runtime locale.
   */
  locale?: Intl.LocalesArgument | undefined;
  /**
   * The maximum value.
   * @default 100
   */
  max?: number | undefined;
  /**
   * The minimum value.
   * @default 0
   */
  min?: number | undefined;
  /**
   * The current value. The component is indeterminate when value is `null`.
   * @default null
   */
  value: number | null;
}
/**
 * Groups all parts of the progress bar and provides the task completion status to screen readers.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
 */
declare const ProgressRoot: React$1.ForwardRefExoticComponent<
  Omit<ProgressRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ProgressRoot {
  type State = ProgressRootState;
  type Props = ProgressRootProps;
}

interface ProgressTrackProps extends BaseUIComponentProps<
  "div",
  ProgressRoot.State
> {}
/**
 * Contains the progress bar indicator.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
 */
declare const ProgressTrack: React$1.ForwardRefExoticComponent<
  Omit<ProgressTrackProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ProgressTrack {
  type Props = ProgressTrackProps;
}

interface ProgressIndicatorProps extends BaseUIComponentProps<
  "div",
  ProgressRoot.State
> {}
/**
 * Visualizes the completion status of the task.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
 */
declare const ProgressIndicator: React$1.ForwardRefExoticComponent<
  Omit<ProgressIndicatorProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ProgressIndicator {
  type Props = ProgressIndicatorProps;
}

interface ProgressValueProps extends Omit<
  BaseUIComponentProps<"span", ProgressRoot.State>,
  "children"
> {
  children?:
    | (
        | null
        | ((
            formattedValue: string | null,
            value: number | null,
          ) => React$1.ReactNode)
      )
    | undefined;
}
/**
 * A text label displaying the current value.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
 */
declare const ProgressValue: React$1.ForwardRefExoticComponent<
  Omit<ProgressValueProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace ProgressValue {
  type Props = ProgressValueProps;
}

interface ProgressLabelProps extends BaseUIComponentProps<
  "span",
  ProgressRoot.State
> {}
/**
 * An accessible label for the progress bar.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
 */
declare const ProgressLabel: React$1.ForwardRefExoticComponent<
  Omit<ProgressLabelProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace ProgressLabel {
  type Props = ProgressLabelProps;
}

declare namespace index_parts$9 {
  export {
    ProgressIndicator as Indicator,
    ProgressLabel as Label,
    ProgressRoot as Root,
    type ProgressStatus as Status,
    ProgressTrack as Track,
    ProgressValue as Value,
  };
}

interface RadioRootState extends FieldRoot.State {
  /**
   * Whether the radio button is currently selected.
   */
  checked: boolean;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the user should be unable to select the radio button.
   */
  readOnly: boolean;
  /**
   * Whether the user must choose a value before submitting a form.
   */
  required: boolean;
}
interface RadioRootProps<Value = any>
  extends
    NonNativeButtonProps,
    Omit<BaseUIComponentProps<"span", RadioRoot.State>, "value"> {
  /**
   * The unique identifying value of the radio in a group.
   */
  value: Value;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled?: boolean | undefined;
  /**
   * Whether the user must choose a value before submitting a form.
   */
  required?: boolean | undefined;
  /**
   * Whether the user should be unable to select the radio button.
   */
  readOnly?: boolean | undefined;
  /**
   * A ref to access the hidden input element.
   */
  inputRef?: React$1.Ref<HTMLInputElement> | undefined;
}
/**
 * Represents the radio button itself.
 * Renders a `<span>` element and a hidden `<input>` beside.
 *
 * Documentation: [Base UI Radio](https://base-ui.com/react/components/radio)
 */
declare const RadioRoot: {
  <Value>(props: RadioRoot.Props<Value>): React$1.JSX.Element;
};
declare namespace RadioRoot {
  type State = RadioRootState;
  type Props<TValue = any> = RadioRootProps<TValue>;
}

interface RadioIndicatorProps extends BaseUIComponentProps<
  "span",
  RadioIndicator.State
> {
  /**
   * Whether to keep the HTML element in the DOM when the radio button is inactive.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
interface RadioIndicatorState {
  /**
   * Whether the radio button is currently selected.
   */
  checked: boolean;
  transitionStatus: TransitionStatus;
}
/**
 * Indicates whether the radio button is selected.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Radio](https://base-ui.com/react/components/radio)
 */
declare const RadioIndicator: React$1.ForwardRefExoticComponent<
  Omit<RadioIndicatorProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace RadioIndicator {
  type Props = RadioIndicatorProps;
  type State = RadioIndicatorState;
}

declare namespace index_parts$8 {
  export { RadioIndicator as Indicator, RadioRoot as Root };
}

interface RadioGroupState extends FieldRoot.State {
  /**
   * Whether the user should be unable to select a different radio button in the group.
   */
  readOnly: boolean;
  /**
   * Whether the user must tick a radio button within the group before submitting a form.
   */
  required: boolean;
}
interface RadioGroupProps<Value = any> extends Omit<
  BaseUIComponentProps<"div", RadioGroup.State>,
  "value"
> {
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Whether the user should be unable to select a different radio button in the group.
   * @default false
   */
  readOnly?: boolean | undefined;
  /**
   * Whether the user must choose a value before submitting a form.
   * @default false
   */
  required?: boolean | undefined;
  /**
   * Identifies the field when a form is submitted.
   */
  name?: string | undefined;
  /**
   * The controlled value of the radio item that should be currently selected.
   *
   * To render an uncontrolled radio group, use the `defaultValue` prop instead.
   */
  value?: Value | undefined;
  /**
   * The uncontrolled value of the radio button that should be initially selected.
   *
   * To render a controlled radio group, use the `value` prop instead.
   */
  defaultValue?: Value | undefined;
  /**
   * Callback fired when the value changes.
   */
  onValueChange?:
    | ((value: Value, eventDetails: RadioGroup.ChangeEventDetails) => void)
    | undefined;
  /**
   * A ref to access the hidden input element.
   */
  inputRef?: React$1.Ref<HTMLInputElement> | undefined;
}
type RadioGroupChangeEventReason = typeof none;
type RadioGroupChangeEventDetails =
  BaseUIChangeEventDetails<RadioGroup.ChangeEventReason>;
/**
 * Provides a shared state to a series of radio buttons.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Radio Group](https://base-ui.com/react/components/radio)
 */
declare const RadioGroup: {
  <Value>(props: RadioGroup.Props<Value>): React$1.JSX.Element;
};
declare namespace RadioGroup {
  type State = RadioGroupState;
  type Props<TValue = any> = RadioGroupProps<TValue>;
  type ChangeEventReason = RadioGroupChangeEventReason;
  type ChangeEventDetails = RadioGroupChangeEventDetails;
}

declare const DEFAULT_COORDS: {
  x: number;
  y: number;
};
declare const DEFAULT_SIZE: {
  width: number;
  height: number;
};
declare const DEFAULT_OVERFLOW_EDGES: {
  xStart: boolean;
  xEnd: boolean;
  yStart: boolean;
  yEnd: boolean;
};
declare const DEFAULT_HIDDEN_STATE: {
  x: boolean;
  y: boolean;
  corner: boolean;
};
type HiddenState = typeof DEFAULT_HIDDEN_STATE;
type OverflowEdges = typeof DEFAULT_OVERFLOW_EDGES;
type Size = typeof DEFAULT_SIZE;
type Coords = typeof DEFAULT_COORDS;
interface ScrollAreaRootState {
  /** Whether the scroll area is being scrolled. */
  scrolling: boolean;
  /** Whether horizontal overflow is present. */
  hasOverflowX: boolean;
  /** Whether vertical overflow is present. */
  hasOverflowY: boolean;
  /** Whether there is overflow on the inline start side for the horizontal axis. */
  overflowXStart: boolean;
  /** Whether there is overflow on the inline end side for the horizontal axis. */
  overflowXEnd: boolean;
  /** Whether there is overflow on the block start side. */
  overflowYStart: boolean;
  /** Whether there is overflow on the block end side. */
  overflowYEnd: boolean;
  /** Whether the scrollbar corner is hidden. */
  cornerHidden: boolean;
}
interface ScrollAreaRootProps extends BaseUIComponentProps<
  "div",
  ScrollAreaRoot.State
> {
  /**
   * The threshold in pixels that must be passed before the overflow edge attributes are applied.
   * Accepts a single number for all edges or an object to configure them individually.
   * @default 0
   */
  overflowEdgeThreshold?:
    | (
        | number
        | Partial<{
            xStart: number;
            xEnd: number;
            yStart: number;
            yEnd: number;
          }>
      )
    | undefined;
}
/**
 * Groups all parts of the scroll area.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
 */
declare const ScrollAreaRoot: React$1.ForwardRefExoticComponent<
  Omit<ScrollAreaRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ScrollAreaRoot {
  type State = ScrollAreaRootState;
  type Props = ScrollAreaRootProps;
}

interface ScrollAreaViewportProps extends BaseUIComponentProps<
  "div",
  ScrollAreaViewport.State
> {}
interface ScrollAreaViewportState extends ScrollAreaRoot.State {}
/**
 * The actual scrollable container of the scroll area.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
 */
declare const ScrollAreaViewport: React$1.ForwardRefExoticComponent<
  Omit<ScrollAreaViewportProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ScrollAreaViewport {
  type Props = ScrollAreaViewportProps;
  type State = ScrollAreaViewportState;
}

interface ScrollAreaScrollbarState extends ScrollAreaRoot.State {
  /** Whether the scroll area is being hovered. */
  hovering: boolean;
  /** Whether the scroll area is being scrolled. */
  scrolling: boolean;
  /** The orientation of the scrollbar. */
  orientation: "vertical" | "horizontal";
}
interface ScrollAreaScrollbarProps extends BaseUIComponentProps<
  "div",
  ScrollAreaScrollbar.State
> {
  /**
   * Whether the scrollbar controls vertical or horizontal scroll.
   * @default 'vertical'
   */
  orientation?: ("vertical" | "horizontal") | undefined;
  /**
   * Whether to keep the HTML element in the DOM when the viewport isn’t scrollable.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
/**
 * A vertical or horizontal scrollbar for the scroll area.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
 */
declare const ScrollAreaScrollbar: React$1.ForwardRefExoticComponent<
  Omit<ScrollAreaScrollbarProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ScrollAreaScrollbar {
  type State = ScrollAreaScrollbarState;
  type Props = ScrollAreaScrollbarProps;
}

interface ScrollAreaContentState extends ScrollAreaRoot.State {}
interface ScrollAreaContentProps extends BaseUIComponentProps<
  "div",
  ScrollAreaContent.State
> {}
/**
 * A container for the content of the scroll area.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
 */
declare const ScrollAreaContent: React$1.ForwardRefExoticComponent<
  Omit<ScrollAreaContentProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ScrollAreaContent {
  type State = ScrollAreaContentState;
  type Props = ScrollAreaContentProps;
}

interface ScrollAreaThumbState {
  orientation?: ("horizontal" | "vertical") | undefined;
}
interface ScrollAreaThumbProps extends BaseUIComponentProps<
  "div",
  ScrollAreaThumb.State
> {}
/**
 * The draggable part of the scrollbar that indicates the current scroll position.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
 */
declare const ScrollAreaThumb: React$1.ForwardRefExoticComponent<
  Omit<ScrollAreaThumbProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ScrollAreaThumb {
  type State = ScrollAreaThumbState;
  type Props = ScrollAreaThumbProps;
}

interface ScrollAreaCornerState {}
interface ScrollAreaCornerProps extends BaseUIComponentProps<
  "div",
  ScrollAreaCorner.State
> {}
/**
 * A small rectangular area that appears at the intersection of horizontal and vertical scrollbars.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
 */
declare const ScrollAreaCorner: React$1.ForwardRefExoticComponent<
  Omit<ScrollAreaCornerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ScrollAreaCorner {
  type State = ScrollAreaCornerState;
  type Props = ScrollAreaCornerProps;
}

declare namespace index_parts$7 {
  export {
    ScrollAreaContent as Content,
    ScrollAreaCorner as Corner,
    ScrollAreaRoot as Root,
    ScrollAreaScrollbar as Scrollbar,
    ScrollAreaThumb as Thumb,
    ScrollAreaViewport as Viewport,
  };
}

type SelectValueType<
  Value,
  Multiple extends boolean | undefined,
> = Multiple extends true ? Value[] : Value;
interface SelectRootProps<Value, Multiple extends boolean | undefined = false> {
  children?: React$1.ReactNode;
  /**
   * A ref to access the hidden input element.
   */
  inputRef?: React$1.Ref<HTMLInputElement> | undefined;
  /**
   * Identifies the field when a form is submitted.
   */
  name?: string | undefined;
  /**
   * Provides a hint to the browser for autofill.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete
   */
  autoComplete?: string | undefined;
  /**
   * The id of the Select.
   */
  id?: string | undefined;
  /**
   * Whether the user must choose a value before submitting a form.
   * @default false
   */
  required?: boolean | undefined;
  /**
   * Whether the user should be unable to choose a different option from the select popup.
   * @default false
   */
  readOnly?: boolean | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Whether multiple items can be selected.
   * @default false
   */
  multiple?: Multiple | undefined;
  /**
   * Whether moving the pointer over items should highlight them.
   * Disabling this prop allows CSS `:hover` to be differentiated from the `:focus` (`data-highlighted`) state.
   * @default true
   */
  highlightItemOnHover?: boolean | undefined;
  /**
   * Whether the select popup is initially open.
   *
   * To render a controlled select popup, use the `open` prop instead.
   * @default false
   */
  defaultOpen?: boolean | undefined;
  /**
   * Event handler called when the select popup is opened or closed.
   */
  onOpenChange?:
    | ((open: boolean, eventDetails: SelectRootChangeEventDetails) => void)
    | undefined;
  /**
   * Event handler called after any animations complete when the select popup is opened or closed.
   */
  onOpenChangeComplete?: ((open: boolean) => void) | undefined;
  /**
   * Whether the select popup is currently open.
   */
  open?: boolean | undefined;
  /**
   * Determines if the select enters a modal state when open.
   * - `true`: user interaction is limited to the select: document page scroll is locked and pointer interactions on outside elements are disabled.
   * - `false`: user interaction with the rest of the document is allowed.
   * @default true
   */
  modal?: boolean | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: When specified, the select will not be unmounted when closed.
   * Instead, the `unmount` function must be called to unmount the select manually.
   * Useful when the select's animation is controlled by an external library.
   */
  actionsRef?: React$1.RefObject<SelectRootActions | null> | undefined;
  /**
   * Data structure of the items rendered in the select popup.
   * When specified, `<Select.Value>` renders the label of the selected item instead of the raw value.
   * @example
   * ```tsx
   * const items = {
   *   sans: 'Sans-serif',
   *   serif: 'Serif',
   *   mono: 'Monospace',
   *   cursive: 'Cursive',
   * };
   * <Select.Root items={items} />
   * ```
   */
  items?:
    | (
        | Record<string, React$1.ReactNode>
        | ReadonlyArray<{
            label: React$1.ReactNode;
            value: any;
          }>
      )
    | undefined;
  /**
   * When the item values are objects (`<Select.Item value={object}>`), this function converts the object value to a string representation for display in the trigger.
   * If the shape of the object is `{ value, label }`, the label will be used automatically without needing to specify this prop.
   */
  itemToStringLabel?: ((itemValue: Value) => string) | undefined;
  /**
   * When the item values are objects (`<Select.Item value={object}>`), this function converts the object value to a string representation for form submission.
   * If the shape of the object is `{ value, label }`, the value will be used automatically without needing to specify this prop.
   */
  itemToStringValue?: ((itemValue: Value) => string) | undefined;
  /**
   * Custom comparison logic used to determine if a select item value matches the current selected value. Useful when item values are objects without matching referentially.
   * Defaults to `Object.is` comparison.
   */
  isItemEqualToValue?:
    | ((itemValue: Value, value: Value) => boolean)
    | undefined;
  /**
   * The uncontrolled value of the select when it’s initially rendered.
   *
   * To render a controlled select, use the `value` prop instead.
   */
  defaultValue?: (SelectValueType<Value, Multiple> | null) | undefined;
  /**
   * The value of the select. Use when controlled.
   */
  value?: (SelectValueType<Value, Multiple> | null) | undefined;
  /**
   * Event handler called when the value of the select changes.
   */
  onValueChange?:
    | ((
        value:
          | SelectValueType<Value, Multiple>
          | (Multiple extends true ? never : null),
        eventDetails: SelectRootChangeEventDetails,
      ) => void)
    | undefined;
}
interface SelectRootState {}
interface SelectRootActions {
  unmount: () => void;
}
type SelectRootChangeEventReason =
  | typeof triggerPress
  | typeof outsidePress
  | typeof escapeKey
  | typeof windowResize
  | typeof itemPress
  | typeof focusOut
  | typeof listNavigation
  | typeof cancelOpen
  | typeof none;
type SelectRootChangeEventDetails =
  BaseUIChangeEventDetails<SelectRootChangeEventReason>;
/**
 * Groups all parts of the select.
 * Doesn’t render its own HTML element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare function SelectRoot<
  Value,
  Multiple extends boolean | undefined = false,
>(props: SelectRoot.Props<Value, Multiple>): React$1.JSX.Element;
declare namespace SelectRoot {
  type Props<
    Value,
    Multiple extends boolean | undefined = false,
  > = SelectRootProps<Value, Multiple>;
  type State = SelectRootState;
  type Actions = SelectRootActions;
  type ChangeEventReason = SelectRootChangeEventReason;
  type ChangeEventDetails = SelectRootChangeEventDetails;
}

interface SelectTriggerState extends FieldRoot.State {
  /**
   * Whether the select popup is currently open.
   */
  open: boolean;
  /**
   * Whether the select popup is readonly.
   */
  readOnly: boolean;
  /**
   * The value of the currently selected item.
   */
  value: any;
  /**
   * Whether the select doesn't have a value.
   */
  placeholder: boolean;
}
interface SelectTriggerProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", SelectTrigger.State> {
  children?: React$1.ReactNode;
  /** Whether the component should ignore user interaction. */
  disabled?: boolean | undefined;
}
/**
 * A button that opens the select popup.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectTrigger: React$1.ForwardRefExoticComponent<
  Omit<SelectTriggerProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace SelectTrigger {
  type State = SelectTriggerState;
  type Props = SelectTriggerProps;
}

interface SelectValueState {
  /**
   * The value of the currently selected item.
   */
  value: any;
  /**
   * Whether the placeholder is being displayed.
   */
  placeholder: boolean;
}
interface SelectValueProps extends Omit<
  BaseUIComponentProps<"span", SelectValue.State>,
  "children"
> {
  /**
   * Accepts a function that returns a `ReactNode` to format the selected value.
   * @example
   * ```tsx
   * <Select.Value>
   *   {(value: string | null) => value ? labels[value] : 'No value'}
   * </Select.Value>
   * ```
   */
  children?: React$1.ReactNode | ((value: any) => React$1.ReactNode);
  /**
   * The placeholder value to display when no value is selected.
   * This is overridden by `children` if specified, or by a null item's label in `items`.
   */
  placeholder?: React$1.ReactNode;
}
/**
 * A text label of the currently selected item.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectValue: React$1.ForwardRefExoticComponent<
  Omit<SelectValueProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace SelectValue {
  type State = SelectValueState;
  type Props = SelectValueProps;
}

interface SelectIconState {
  /**
   * Whether the select popup is currently open.
   */
  open: boolean;
}
interface SelectIconProps extends BaseUIComponentProps<
  "span",
  SelectIcon.State
> {}
/**
 * An icon that indicates that the trigger button opens a select popup.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectIcon: React$1.ForwardRefExoticComponent<
  Omit<SelectIconProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace SelectIcon {
  type State = SelectIconState;
  type Props = SelectIconProps;
}

interface SelectPortalProps extends FloatingPortal.Props<SelectPortal.State> {}
/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectPortal: React$1.ForwardRefExoticComponent<
  Omit<SelectPortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SelectPortal {
  interface State {}
}
declare namespace SelectPortal {
  type Props = SelectPortalProps;
}

interface SelectBackdropState {
  open: boolean;
  transitionStatus: TransitionStatus;
}
interface SelectBackdropProps extends BaseUIComponentProps<
  "div",
  SelectBackdrop.State
> {}
/**
 * An overlay displayed beneath the menu popup.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectBackdrop: React$1.ForwardRefExoticComponent<
  Omit<SelectBackdropProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SelectBackdrop {
  type State = SelectBackdropState;
  type Props = SelectBackdropProps;
}

interface SelectPositionerState {
  open: boolean;
  side: Side | "none";
  align: Align;
  anchorHidden: boolean;
}
interface SelectPositionerProps
  extends
    useAnchorPositioning.SharedParameters,
    BaseUIComponentProps<"div", SelectPositioner.State> {
  /**
   * Whether the positioner overlaps the trigger so the selected item's text is aligned with the trigger's value text. This only applies to mouse input and is automatically disabled if there is not enough space.
   * @default true
   */
  alignItemWithTrigger?: boolean | undefined;
}
/**
 * Positions the select popup.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectPositioner: React$1.ForwardRefExoticComponent<
  Omit<SelectPositionerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SelectPositioner {
  type State = SelectPositionerState;
  type Props = SelectPositionerProps;
}

interface SelectPopupProps extends BaseUIComponentProps<
  "div",
  SelectPopup.State
> {
  children?: React$1.ReactNode;
  /**
   * Determines the element to focus when the select popup is closed.
   *
   * - `false`: Do not move focus.
   * - `true`: Move focus based on the default behavior (trigger or previously focused element).
   * - `RefObject`: Move focus to the ref element.
   * - `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).
   *   Return an element to focus, `true` to use the default behavior, or `false`/`undefined` to do nothing.
   */
  finalFocus?:
    | (
        | boolean
        | React$1.RefObject<HTMLElement | null>
        | ((closeType: InteractionType) => boolean | HTMLElement | null | void)
      )
    | undefined;
}
interface SelectPopupState {
  side: Side | "none";
  align: Align;
  open: boolean;
  transitionStatus: TransitionStatus;
}
/**
 * A container for the select list.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectPopup: React$1.ForwardRefExoticComponent<
  Omit<SelectPopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SelectPopup {
  type Props = SelectPopupProps;
  type State = SelectPopupState;
}

interface SelectListProps extends BaseUIComponentProps<
  "div",
  SelectList.State
> {}
interface SelectListState {}
/**
 * A container for the select items.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectList: React$1.ForwardRefExoticComponent<
  Omit<SelectListProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SelectList {
  type Props = SelectListProps;
  type State = SelectListState;
}

interface SelectItemState {
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
interface SelectItemProps
  extends
    NonNativeButtonProps,
    Omit<BaseUIComponentProps<"div", SelectItem.State>, "id"> {
  children?: React$1.ReactNode;
  /**
   * A unique value that identifies this select item.
   * @default null
   */
  value?: any;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Specifies the text label to use when the item is matched during keyboard text navigation.
   *
   * Defaults to the item text content if not provided.
   */
  label?: string | undefined;
}
/**
 * An individual option in the select popup.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectItem: React$1.NamedExoticComponent<
  Omit<SelectItemProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace SelectItem {
  type State = SelectItemState;
  type Props = SelectItemProps;
}

interface SelectItemIndicatorState {
  selected: boolean;
  transitionStatus: TransitionStatus;
}
interface SelectItemIndicatorProps extends BaseUIComponentProps<
  "span",
  SelectItemIndicator.State
> {
  children?: React$1.ReactNode;
  /** Whether to keep the HTML element in the DOM when the item is not selected. */
  keepMounted?: boolean | undefined;
}
/**
 * Indicates whether the select item is selected.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectItemIndicator: React$1.ForwardRefExoticComponent<
  Omit<SelectItemIndicatorProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace SelectItemIndicator {
  type State = SelectItemIndicatorState;
  type Props = SelectItemIndicatorProps;
}

interface SelectItemTextState {}
interface SelectItemTextProps extends BaseUIComponentProps<
  "div",
  SelectItemText.State
> {}
/**
 * A text label of the select item.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectItemText: React$1.NamedExoticComponent<
  Omit<SelectItemTextProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SelectItemText {
  type State = SelectItemTextState;
  type Props = SelectItemTextProps;
}

interface SelectArrowState {
  /**
   * Whether the select popup is currently open.
   */
  open: boolean;
  side: Side | "none";
  align: Align;
  uncentered: boolean;
}
interface SelectArrowProps extends BaseUIComponentProps<
  "div",
  SelectArrow.State
> {}
/**
 * Displays an element positioned against the select popup anchor.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectArrow: React$1.ForwardRefExoticComponent<
  Omit<SelectArrowProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SelectArrow {
  type State = SelectArrowState;
  type Props = SelectArrowProps;
}

interface SelectScrollDownArrowState {}
interface SelectScrollDownArrowProps extends BaseUIComponentProps<
  "div",
  SelectScrollDownArrow.State
> {
  /**
   * Whether to keep the HTML element in the DOM while the select popup is not scrollable.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
/**
 * An element that scrolls the select popup down when hovered. Does not render when using touch input.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectScrollDownArrow: React$1.ForwardRefExoticComponent<
  Omit<SelectScrollDownArrowProps, "ref"> &
    React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SelectScrollDownArrow {
  type State = SelectScrollDownArrowState;
  type Props = SelectScrollDownArrowProps;
}

interface SelectScrollUpArrowState {}
interface SelectScrollUpArrowProps extends BaseUIComponentProps<
  "div",
  SelectScrollUpArrow.State
> {
  /**
   * Whether to keep the HTML element in the DOM while the select popup is not scrollable.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
/**
 * An element that scrolls the select popup up when hovered. Does not render when using touch input.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectScrollUpArrow: React$1.ForwardRefExoticComponent<
  Omit<SelectScrollUpArrowProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SelectScrollUpArrow {
  type State = SelectScrollUpArrowState;
  type Props = SelectScrollUpArrowProps;
}

interface SelectGroupState {}
interface SelectGroupProps extends BaseUIComponentProps<
  "div",
  SelectGroup.State
> {}
/**
 * Groups related select items with the corresponding label.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectGroup: React$1.ForwardRefExoticComponent<
  Omit<SelectGroupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SelectGroup {
  type State = SelectGroupState;
  type Props = SelectGroupProps;
}

interface SelectGroupLabelState {}
interface SelectGroupLabelProps extends BaseUIComponentProps<
  "div",
  SelectGroupLabel.State
> {}
/**
 * An accessible label that is automatically associated with its parent group.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Select](https://base-ui.com/react/components/select)
 */
declare const SelectGroupLabel: React$1.ForwardRefExoticComponent<
  Omit<SelectGroupLabelProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SelectGroupLabel {
  type State = SelectGroupLabelState;
  type Props = SelectGroupLabelProps;
}

declare namespace index_parts$6 {
  export {
    SelectArrow as Arrow,
    SelectBackdrop as Backdrop,
    SelectGroup as Group,
    SelectGroupLabel as GroupLabel,
    SelectIcon as Icon,
    SelectItem as Item,
    SelectItemIndicator as ItemIndicator,
    SelectItemText as ItemText,
    SelectList as List,
    SelectPopup as Popup,
    SelectPortal as Portal,
    SelectPositioner as Positioner,
    SelectRoot as Root,
    SelectScrollDownArrow as ScrollDownArrow,
    SelectScrollUpArrow as ScrollUpArrow,
    Separator,
    SelectTrigger as Trigger,
    SelectValue as Value,
  };
}

interface SliderRootState extends FieldRoot.State {
  /**
   * The index of the active thumb.
   */
  activeThumbIndex: number;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the thumb is currently being dragged.
   */
  dragging: boolean;
  max: number;
  min: number;
  /**
   * The minimum steps between values in a range slider.
   * @default 0
   */
  minStepsBetweenValues: number;
  /**
   * The component orientation.
   */
  orientation: Orientation;
  /**
   * The step increment of the slider when incrementing or decrementing. It will snap
   * to multiples of this value. Decimal values are supported.
   * @default 1
   */
  step: number;
  /**
   * The raw number value of the slider.
   */
  values: readonly number[];
}
interface SliderRootProps<
  Value extends number | readonly number[] = number | readonly number[],
> extends BaseUIComponentProps<"div", SliderRoot.State> {
  /**
   * The uncontrolled value of the slider when it’s initially rendered.
   *
   * To render a controlled slider, use the `value` prop instead.
   */
  defaultValue?: Value | undefined;
  /**
   * Whether the slider should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Options to format the input value.
   */
  format?: Intl.NumberFormatOptions | undefined;
  /**
   * The locale used by `Intl.NumberFormat` when formatting the value.
   * Defaults to the user's runtime locale.
   */
  locale?: Intl.LocalesArgument | undefined;
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max?: number | undefined;
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min?: number | undefined;
  /**
   * The minimum steps between values in a range slider.
   * @default 0
   */
  minStepsBetweenValues?: number | undefined;
  /**
   * Identifies the field when a form is submitted.
   */
  name?: string | undefined;
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation?: Orientation | undefined;
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   * @default 1
   */
  step?: number | undefined;
  /**
   * The granularity with which the slider can step through values when using Page Up/Page Down or Shift + Arrow Up/Arrow Down.
   * @default 10
   */
  largeStep?: number | undefined;
  /**
   * How the thumb(s) are aligned relative to `Slider.Control` when the value is at `min` or `max`:
   * - `center`: The center of the thumb is aligned with the control edge
   * - `edge`: The thumb is inset within the control such that its edge is aligned with the control edge
   * - `edge-client-only`: Same as `edge` but renders after React hydration on the client, reducing bundle size in return
   * @default 'center'
   */
  thumbAlignment?: ("center" | "edge" | "edge-client-only") | undefined;
  /**
   * Controls how thumbs behave when they collide during pointer interactions.
   *
   * - `'push'` (default): Thumbs push each other without restoring their previous positions when dragged back.
   * - `'swap'`: Thumbs swap places when dragged past each other.
   * - `'none'`: Thumbs cannot move past each other; excess movement is ignored.
   *
   * @default 'push'
   */
  thumbCollisionBehavior?: ("push" | "swap" | "none") | undefined;
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value?: Value | undefined;
  /**
   * Callback function that is fired when the slider's value changed.
   * You can pull out the new value by accessing `event.target.value` (any).
   *
   * The `eventDetails.reason` indicates what triggered the change:
   *
   * - `'input-change'` when the hidden range input emits a change event (for example, via form integration)
   * - `'track-press'` when the control track is pressed
   * - `'drag'` while dragging a thumb
   * - `'keyboard'` for keyboard input
   * - `'none'` when the change is triggered without a specific interaction
   */
  onValueChange?:
    | ((
        value: Value extends number ? number : Value,
        eventDetails: SliderRoot.ChangeEventDetails,
      ) => void)
    | undefined;
  /**
   * Callback function that is fired when the `pointerup` is triggered.
   * **Warning**: This is a generic event not a change event.
   *
   * The `eventDetails.reason` indicates what triggered the commit:
   *
   * - `'drag'` while dragging a thumb
   * - `'track-press'` when the control track is pressed
   * - `'keyboard'` for keyboard input
   * - `'input-change'` when the hidden range input emits a change event (for example, via form integration)
   * - `'none'` when the commit occurs without a specific interaction
   */
  onValueCommitted?:
    | ((
        value: Value extends number ? number : Value,
        eventDetails: SliderRoot.CommitEventDetails,
      ) => void)
    | undefined;
}
interface SliderRootChangeEventCustomProperties {
  /**
   * The index of the active thumb at the time of the change.
   */
  activeThumbIndex: number;
}
type SliderRootChangeEventReason =
  | typeof inputChange
  | typeof trackPress
  | typeof drag
  | typeof keyboard
  | typeof none;
type SliderRootChangeEventDetails = BaseUIChangeEventDetails<
  SliderRoot.ChangeEventReason,
  SliderRootChangeEventCustomProperties
>;
type SliderRootCommitEventReason =
  | typeof inputChange
  | typeof trackPress
  | typeof drag
  | typeof keyboard
  | typeof none;
type SliderRootCommitEventDetails =
  BaseUIGenericEventDetails<SliderRoot.CommitEventReason>;
/**
 * Groups all parts of the slider.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
 */
declare const SliderRoot: {
  <Value extends number | readonly number[]>(
    props: SliderRoot.Props<Value> & {
      ref?: React$1.Ref<HTMLDivElement> | undefined;
    },
  ): React$1.JSX.Element;
};
declare namespace SliderRoot {
  type State = SliderRootState;
  type Props<
    Value extends number | readonly number[] = number | readonly number[],
  > = SliderRootProps<Value>;
  type ChangeEventReason = SliderRootChangeEventReason;
  type ChangeEventDetails = SliderRootChangeEventDetails;
  type CommitEventReason = SliderRootCommitEventReason;
  type CommitEventDetails = SliderRootCommitEventDetails;
}

interface SliderValueProps extends Omit<
  BaseUIComponentProps<"output", SliderRoot.State>,
  "children"
> {
  children?:
    | (
        | null
        | ((
            formattedValues: readonly string[],
            values: readonly number[],
          ) => React$1.ReactNode)
      )
    | undefined;
}
/**
 * Displays the current value of the slider as text.
 * Renders an `<output>` element.
 *
 * Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
 */
declare const SliderValue: React$1.ForwardRefExoticComponent<
  Omit<SliderValueProps, "ref"> & React$1.RefAttributes<HTMLOutputElement>
>;
declare namespace SliderValue {
  type Props = SliderValueProps;
}

interface SliderControlProps extends BaseUIComponentProps<
  "div",
  SliderRoot.State
> {}
/**
 * The clickable, interactive part of the slider.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
 */
declare const SliderControl: React$1.ForwardRefExoticComponent<
  Omit<SliderControlProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SliderControl {
  type State = SliderRoot.State;
  type Props = SliderControlProps;
}

interface SliderTrackProps extends BaseUIComponentProps<
  "div",
  SliderRoot.State
> {}
/**
 * Contains the slider indicator and represents the entire range of the slider.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
 */
declare const SliderTrack: React$1.ForwardRefExoticComponent<
  Omit<SliderTrackProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SliderTrack {
  type Props = SliderTrackProps;
}

interface LabelableContext {
  /**
   * The `id` of the labelable element.
   * When `null` the association is implicit.
   */
  controlId: string | null | undefined;
  registerControlId: (source: symbol, id: string | null | undefined) => void;
  /**
   * The `id` of the label.
   */
  labelId: string | undefined;
  setLabelId: React$1.Dispatch<React$1.SetStateAction<string | undefined>>;
  /**
   * An array of `id`s of elements that provide an accessible description.
   */
  messageIds: string[];
  setMessageIds: React$1.Dispatch<React$1.SetStateAction<string[]>>;
  getDescriptionProps: (externalProps: HTMLProps) => HTMLProps;
}
/**
 * A context for providing [labelable elements](https://html.spec.whatwg.org/multipage/forms.html#category-label)\
 * with an accessible name (label) and description.
 */
declare const LabelableContext: React$1.Context<LabelableContext>;

interface ThumbMetadata {
  inputId: LabelableContext["controlId"];
}
interface SliderThumbState extends SliderRoot.State {}
interface SliderThumbProps extends Omit<
  BaseUIComponentProps<"div", SliderThumb.State>,
  "onBlur" | "onFocus"
> {
  /**
   * Whether the thumb should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * A function which returns a string value for the [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) attribute of the `input`.
   */
  getAriaLabel?: (((index: number) => string) | null) | undefined;
  /**
   * A function which returns a string value for the [`aria-valuetext`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) attribute of the `input`.
   * This is important for screen reader users.
   */
  getAriaValueText?:
    | (
        | ((formattedValue: string, value: number, index: number) => string)
        | null
      )
    | undefined;
  /**
   * The index of the thumb which corresponds to the index of its value in the
   * `value` or `defaultValue` array.
   * This prop is required to support server-side rendering for range sliders
   * with multiple thumbs.
   * @example
   * ```tsx
   * <Slider.Root value={[10, 20]}>
   *   <Slider.Thumb index={0} />
   *   <Slider.Thumb index={1} />
   * </Slider.Root>
   * ```
   */
  index?: number | undefined;
  /**
   * A ref to access the nested input element.
   */
  inputRef?: React$1.Ref<HTMLInputElement> | undefined;
  /**
   * A blur handler forwarded to the `input`.
   */
  onBlur?: React$1.FocusEventHandler<HTMLInputElement> | undefined;
  /**
   * A focus handler forwarded to the `input`.
   */
  onFocus?: React$1.FocusEventHandler<HTMLInputElement> | undefined;
  /**
   * Optional tab index attribute forwarded to the `input`.
   */
  tabIndex?: number | undefined;
}
/**
 * The draggable part of the slider at the tip of the indicator.
 * Renders a `<div>` element and a nested `<input type="range">`.
 *
 * Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
 */
declare const SliderThumb: React$1.ForwardRefExoticComponent<
  Omit<SliderThumbProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SliderThumb {
  type State = SliderThumbState;
  type Props = SliderThumbProps;
}

interface SliderIndicatorProps extends BaseUIComponentProps<
  "div",
  SliderRoot.State
> {}
/**
 * Visualizes the current value of the slider.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
 */
declare const SliderIndicator: React$1.ForwardRefExoticComponent<
  Omit<SliderIndicatorProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace SliderIndicator {
  type Props = SliderIndicatorProps;
}

declare namespace index_parts$5 {
  export {
    SliderControl as Control,
    SliderIndicator as Indicator,
    SliderRoot as Root,
    SliderThumb as Thumb,
    SliderTrack as Track,
    SliderValue as Value,
  };
}

interface SwitchRootState extends FieldRoot.State {
  /**
   * Whether the switch is currently active.
   */
  checked: boolean;
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  /**
   * Whether the user should be unable to activate or deactivate the switch.
   */
  readOnly: boolean;
  /**
   * Whether the user must activate the switch before submitting a form.
   */
  required: boolean;
}
interface SwitchRootProps
  extends
    NonNativeButtonProps,
    Omit<BaseUIComponentProps<"span", SwitchRoot.State>, "onChange"> {
  /**
   * The id of the switch element.
   */
  id?: string | undefined;
  /**
   * Whether the switch is currently active.
   *
   * To render an uncontrolled switch, use the `defaultChecked` prop instead.
   */
  checked?: boolean | undefined;
  /**
   * Whether the switch is initially active.
   *
   * To render a controlled switch, use the `checked` prop instead.
   * @default false
   */
  defaultChecked?: boolean | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * A ref to access the hidden `<input>` element.
   */
  inputRef?: React$1.Ref<HTMLInputElement> | undefined;
  /**
   * Identifies the field when a form is submitted.
   */
  name?: string | undefined;
  /**
   * Event handler called when the switch is activated or deactivated.
   */
  onCheckedChange?:
    | ((checked: boolean, eventDetails: SwitchRoot.ChangeEventDetails) => void)
    | undefined;
  /**
   * Whether the user should be unable to activate or deactivate the switch.
   * @default false
   */
  readOnly?: boolean | undefined;
  /**
   * Whether the user must activate the switch before submitting a form.
   * @default false
   */
  required?: boolean | undefined;
  /**
   * The value submitted with the form when the switch is on.
   * By default, switch submits the "on" value, matching native checkbox behavior.
   */
  value?: string | undefined;
  /**
   * The value submitted with the form when the switch is off.
   * By default, unchecked switches do not submit any value, matching native checkbox behavior.
   */
  uncheckedValue?: string | undefined;
}
type SwitchRootChangeEventReason = typeof none;
type SwitchRootChangeEventDetails =
  BaseUIChangeEventDetails<SwitchRoot.ChangeEventReason>;
/**
 * Represents the switch itself.
 * Renders a `<span>` element and a hidden `<input>` beside.
 *
 * Documentation: [Base UI Switch](https://base-ui.com/react/components/switch)
 */
declare const SwitchRoot: React$1.ForwardRefExoticComponent<
  Omit<SwitchRootProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace SwitchRoot {
  type State = SwitchRootState;
  type Props = SwitchRootProps;
  type ChangeEventReason = SwitchRootChangeEventReason;
  type ChangeEventDetails = SwitchRootChangeEventDetails;
}

interface SwitchThumbProps extends BaseUIComponentProps<
  "span",
  SwitchThumb.State
> {}
interface SwitchThumbState extends SwitchRoot.State {}
/**
 * The movable part of the switch that indicates whether the switch is on or off.
 * Renders a `<span>`.
 *
 * Documentation: [Base UI Switch](https://base-ui.com/react/components/switch)
 */
declare const SwitchThumb: React$1.ForwardRefExoticComponent<
  Omit<SwitchThumbProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace SwitchThumb {
  type Props = SwitchThumbProps;
  type State = SwitchThumbState;
}

declare namespace index_parts$4 {
  export { SwitchRoot as Root, SwitchThumb as Thumb };
}

type TabsTabValue = any | null;
type TabsTabActivationDirection = "left" | "right" | "up" | "down" | "none";
interface TabsTabPosition {
  left: number;
  right: number;
  top: number;
  bottom: number;
}
interface TabsTabSize {
  width: number;
  height: number;
}
interface TabsTabMetadata {
  disabled: boolean;
  id: string | undefined;
  value: TabsTab.Value | undefined;
}
interface TabsTabState {
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  active: boolean;
  orientation: TabsRoot.Orientation;
}
interface TabsTabProps
  extends NativeButtonProps, BaseUIComponentProps<"button", TabsTab.State> {
  /**
   * The value of the Tab.
   */
  value: TabsTab.Value;
  /**
   * Whether the Tab is disabled.
   *
   * If a first Tab on a `<Tabs.List>` is disabled, it won't initially be selected.
   * Instead, the next enabled Tab will be selected.
   * However, it does not work like this during server-side rendering, as it is not known
   * during pre-rendering which Tabs are disabled.
   * To work around it, ensure that `defaultValue` or `value` on `<Tabs.Root>` is set to an enabled Tab's value.
   */
  disabled?: boolean | undefined;
}
/**
 * An individual interactive tab button that toggles the corresponding panel.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
 */
declare const TabsTab: React$1.ForwardRefExoticComponent<
  Omit<TabsTabProps, "ref"> & React$1.RefAttributes<HTMLElement>
>;
declare namespace TabsTab {
  type Value = TabsTabValue;
  type ActivationDirection = TabsTabActivationDirection;
  type Position = TabsTabPosition;
  type Size = TabsTabSize;
  type Metadata = TabsTabMetadata;
  type State = TabsTabState;
  type Props = TabsTabProps;
}

type TabsRootOrientation = Orientation;
interface TabsRootState {
  orientation: TabsRoot.Orientation;
  tabActivationDirection: TabsTab.ActivationDirection;
}
interface TabsRootProps extends BaseUIComponentProps<"div", TabsRoot.State> {
  /**
   * The value of the currently active `Tab`. Use when the component is controlled.
   * When the value is `null`, no Tab will be active.
   */
  value?: TabsTab.Value | undefined;
  /**
   * The default value. Use when the component is not controlled.
   * When the value is `null`, no Tab will be active.
   * @default 0
   */
  defaultValue?: TabsTab.Value | undefined;
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation?: TabsRoot.Orientation | undefined;
  /**
   * Callback invoked when new value is being set.
   */
  onValueChange?:
    | ((
        value: TabsTab.Value,
        eventDetails: TabsRoot.ChangeEventDetails,
      ) => void)
    | undefined;
}
type TabsRootChangeEventReason = typeof none;
type TabsRootChangeEventDetails = BaseUIChangeEventDetails<
  TabsRoot.ChangeEventReason,
  {
    activationDirection: TabsTab.ActivationDirection;
  }
>;
/**
 * Groups the tabs and the corresponding panels.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
 */
declare const TabsRoot: React$1.ForwardRefExoticComponent<
  Omit<TabsRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace TabsRoot {
  type State = TabsRootState;
  type Props = TabsRootProps;
  type Orientation = TabsRootOrientation;
  type ChangeEventReason = TabsRootChangeEventReason;
  type ChangeEventDetails = TabsRootChangeEventDetails;
}

interface TabsIndicatorState extends TabsRoot.State {
  activeTabPosition: TabsTab.Position | null;
  activeTabSize: TabsTab.Size | null;
  orientation: TabsRoot.Orientation;
}
interface TabsIndicatorProps extends BaseUIComponentProps<
  "span",
  TabsIndicator.State
> {
  /**
   * Whether to render itself before React hydrates.
   * This minimizes the time that the indicator isn’t visible after server-side rendering.
   * @default false
   */
  renderBeforeHydration?: boolean | undefined;
}
/**
 * A visual indicator that can be styled to match the position of the currently active tab.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
 */
declare const TabsIndicator: React$1.ForwardRefExoticComponent<
  Omit<TabsIndicatorProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>
>;
declare namespace TabsIndicator {
  type State = TabsIndicatorState;
  type Props = TabsIndicatorProps;
}

interface TabsPanelMetadata {
  id?: string | undefined;
  value: TabsTab.Value;
}
interface TabsPanelState extends TabsRoot.State {
  hidden: boolean;
  transitionStatus: TransitionStatus;
}
interface TabsPanelProps extends BaseUIComponentProps<"div", TabsPanel.State> {
  /**
   * The value of the TabPanel. It will be shown when the Tab with the corresponding value is active.
   */
  value: TabsTab.Value;
  /**
   * Whether to keep the HTML element in the DOM while the panel is hidden.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
/**
 * A panel displayed when the corresponding tab is active.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
 */
declare const TabsPanel: React$1.ForwardRefExoticComponent<
  Omit<TabsPanelProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace TabsPanel {
  type Metadata = TabsPanelMetadata;
  type State = TabsPanelState;
  type Props = TabsPanelProps;
}

interface TabsListState extends TabsRoot.State {}
interface TabsListProps extends BaseUIComponentProps<"div", TabsList.State> {
  /**
   * Whether to automatically change the active tab on arrow key focus.
   * Otherwise, tabs will be activated using <kbd>Enter</kbd> or <kbd>Space</kbd> key press.
   * @default false
   */
  activateOnFocus?: boolean | undefined;
  /**
   * Whether to loop keyboard focus back to the first item
   * when the end of the list is reached while using the arrow keys.
   * @default true
   */
  loopFocus?: boolean | undefined;
}
/**
 * Groups the individual tab buttons.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
 */
declare const TabsList: React$1.ForwardRefExoticComponent<
  Omit<TabsListProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace TabsList {
  type State = TabsListState;
  type Props = TabsListProps;
}

declare namespace index_parts$3 {
  export {
    TabsIndicator as Indicator,
    TabsList as List,
    TabsPanel as Panel,
    TabsRoot as Root,
    TabsTab as Tab,
  };
}

interface ToastPositionerState {
  side: Side;
  align: Align;
  anchorHidden: boolean;
}
interface ToastPositionerProps
  extends
    BaseUIComponentProps<"div", ToastPositioner.State>,
    Omit<useAnchorPositioning.SharedParameters, "side" | "anchor"> {
  /**
   * An element to position the toast against.
   */
  anchor?: (Element | null) | undefined;
  /**
   * Which side of the anchor element to align the toast against.
   * May automatically change to avoid collisions.
   * @default 'top'
   */
  side?: Side | undefined;
  /**
   * The toast object associated with the positioner.
   */
  toast: ToastObject<any>;
}
/**
 * Positions the toast against the anchor.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastPositioner: React$1.ForwardRefExoticComponent<
  Omit<ToastPositionerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ToastPositioner {
  type State = ToastPositionerState;
  type Props = ToastPositionerProps;
}

/**
 * Returns the array of toasts and methods to manage them.
 */
declare function useToastManager<
  Data extends object = any,
>(): UseToastManagerReturnValue<Data>;
interface ToastObject<Data extends object> {
  /**
   * The unique identifier for the toast.
   */
  id: string;
  /**
   * The ref for the toast.
   */
  ref?: React$1.RefObject<HTMLElement | null> | undefined;
  /**
   * The title of the toast.
   */
  title?: React$1.ReactNode;
  /**
   * The type of the toast. Used to conditionally style the toast,
   * including conditionally rendering elements based on the type.
   */
  type?: string | undefined;
  /**
   * The description of the toast.
   */
  description?: React$1.ReactNode;
  /**
   * The amount of time (in ms) before the toast is auto dismissed.
   * A value of `0` will prevent the toast from being dismissed automatically.
   * @default 5000
   */
  timeout?: number | undefined;
  /**
   * The priority of the toast.
   * - `low` - The toast will be announced politely.
   * - `high` - The toast will be announced urgently.
   * @default 'low'
   */
  priority?: ("low" | "high") | undefined;
  /**
   * The transition status of the toast.
   */
  transitionStatus?: "starting" | "ending" | undefined;
  /**
   * Determines if the toast was closed due to the limit being reached.
   */
  limited?: boolean | undefined;
  /**
   * The height of the toast.
   */
  height?: number | undefined;
  /**
   * Callback function to be called when the toast is closed.
   */
  onClose?: (() => void) | undefined;
  /**
   * Callback function to be called when the toast is removed from the list after any animations are complete when closed.
   */
  onRemove?: (() => void) | undefined;
  /**
   * The props for the action button.
   */
  actionProps?: React$1.ComponentPropsWithoutRef<"button"> | undefined;
  /**
   * The props forwarded to the toast positioner element when rendering anchored toasts.
   */
  positionerProps?: ToastManagerPositionerProps | undefined;
  /**
   * Custom data for the toast.
   */
  data?: Data | undefined;
}
interface ToastManagerPositionerProps extends Omit<
  ToastPositionerProps,
  "anchor" | "toast"
> {
  /**
   * An element to position the toast against.
   */
  anchor?: (Element | null) | undefined;
}
interface UseToastManagerReturnValue<Data extends object = any> {
  toasts: ToastObject<Data>[];
  add: <T extends Data = Data>(options: ToastManagerAddOptions<T>) => string;
  close: (toastId: string) => void;
  update: <T extends Data = Data>(
    toastId: string,
    options: ToastManagerUpdateOptions<T>,
  ) => void;
  promise: <Value, T extends Data = Data>(
    promise: Promise<Value>,
    options: ToastManagerPromiseOptions<Value, T>,
  ) => Promise<Value>;
}
interface ToastManagerAddOptions<Data extends object> extends Omit<
  ToastObject<Data>,
  "id" | "animation" | "height" | "ref" | "limited"
> {
  id?: string | undefined;
}
interface ToastManagerUpdateOptions<Data extends object> extends Partial<
  Omit<
    ToastObject<Data>,
    "id" | "ref" | "height" | "transitionStatus" | "limited"
  >
> {}
interface ToastManagerPromiseOptions<Value, Data extends object> {
  loading: string | ToastManagerUpdateOptions<Data>;
  success:
    | string
    | ToastManagerUpdateOptions<Data>
    | ((result: Value) => string | ToastManagerUpdateOptions<Data>);
  error:
    | string
    | ToastManagerUpdateOptions<Data>
    | ((error: any) => string | ToastManagerUpdateOptions<Data>);
}

/**
 * Creates a new toast manager.
 */
declare function createToastManager<
  Data extends object = any,
>(): ToastManager<Data>;
interface ToastManager<Data extends object = any> {
  " subscribe": (listener: (data: ToastManagerEvent) => void) => () => void;
  add: <T extends Data = Data>(options: ToastManagerAddOptions<T>) => string;
  close: (id: string) => void;
  update: <T extends Data = Data>(
    id: string,
    updates: ToastManagerUpdateOptions<T>,
  ) => void;
  promise: <Value, T extends Data = Data>(
    promiseValue: Promise<Value>,
    options: ToastManagerPromiseOptions<Value, T>,
  ) => Promise<Value>;
}
interface ToastManagerEvent {
  action: "add" | "close" | "update" | "promise";
  options: any;
}

interface ToastProviderProps {
  children?: React$1.ReactNode;
  /**
   * The default amount of time (in ms) before a toast is auto dismissed.
   * A value of `0` will prevent the toast from being dismissed automatically.
   * @default 5000
   */
  timeout?: number | undefined;
  /**
   * The maximum number of toasts that can be displayed at once.
   * When the limit is reached, the oldest toast will be removed to make room for the new one.
   * @default 3
   */
  limit?: number | undefined;
  /**
   * A global manager for toasts to use outside of a React component.
   */
  toastManager?: ToastManager | undefined;
}
/**
 * Provides a context for creating and managing toasts.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastProvider: React$1.FC<ToastProvider.Props>;
declare namespace ToastProvider {
  type Props = ToastProviderProps;
}

interface ToastViewportState {
  /**
   * Whether toasts are expanded in the viewport.
   */
  expanded: boolean;
}
interface ToastViewportProps extends BaseUIComponentProps<
  "div",
  ToastViewport.State
> {}
/**
 * A container viewport for toasts.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastViewport: React$1.ForwardRefExoticComponent<
  Omit<ToastViewportProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ToastViewport {
  type State = ToastViewportState;
  type Props = ToastViewportProps;
}

type ToastRootToastObject<Data extends object = any> = ToastObject<Data>;
interface ToastRootState {
  transitionStatus: TransitionStatus;
  /** Whether the toasts in the viewport are expanded. */
  expanded: boolean;
  /** Whether the toast was removed due to exceeding the limit. */
  limited: boolean;
  /** The type of the toast. */
  type: string | undefined;
  /** Whether the toast is being swiped. */
  swiping: boolean;
  /** The direction the toast is being swiped. */
  swipeDirection: "up" | "down" | "left" | "right" | undefined;
}
interface ToastRootProps extends BaseUIComponentProps<"div", ToastRoot.State> {
  /**
   * The toast to render.
   */
  toast: ToastRootToastObject<any>;
  /**
   * Direction(s) in which the toast can be swiped to dismiss.
   * @default ['down', 'right']
   */
  swipeDirection?:
    | ("up" | "down" | "left" | "right" | ("up" | "down" | "left" | "right")[])
    | undefined;
}
/**
 * Groups all parts of an individual toast.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastRoot: React$1.ForwardRefExoticComponent<
  Omit<ToastRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ToastRoot {
  type ToastObject<Data extends object = any> = ToastRootToastObject<Data>;
  type State = ToastRootState;
  type Props = ToastRootProps;
}

interface ToastContentState {
  /**
   * Whether the toast viewport is expanded.
   */
  expanded: boolean;
  /**
   * Whether the toast is behind the frontmost toast in the stack.
   */
  behind: boolean;
}
interface ToastContentProps extends BaseUIComponentProps<
  "div",
  ToastContent.State
> {}
/**
 * A container for the contents of a toast.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastContent: React$1.ForwardRefExoticComponent<
  Omit<ToastContentProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ToastContent {
  type State = ToastContentState;
  type Props = ToastContentProps;
}

interface ToastDescriptionState {
  /**
   * The type of the toast.
   */
  type: string | undefined;
}
interface ToastDescriptionProps extends BaseUIComponentProps<
  "p",
  ToastDescription.State
> {}
/**
 * A description that describes the toast.
 * Can be used as the default message for the toast when no title is provided.
 * Renders a `<p>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastDescription: React$1.ForwardRefExoticComponent<
  Omit<ToastDescriptionProps, "ref"> &
    React$1.RefAttributes<HTMLParagraphElement>
>;
declare namespace ToastDescription {
  type State = ToastDescriptionState;
  type Props = ToastDescriptionProps;
}

interface ToastTitleState {
  /**
   * The type of the toast.
   */
  type: string | undefined;
}
interface ToastTitleProps extends BaseUIComponentProps<
  "h2",
  ToastTitle.State
> {}
/**
 * A title that labels the toast.
 * Renders an `<h2>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastTitle: React$1.ForwardRefExoticComponent<
  Omit<ToastTitleProps, "ref"> & React$1.RefAttributes<HTMLHeadingElement>
>;
declare namespace ToastTitle {
  type State = ToastTitleState;
  type Props = ToastTitleProps;
}

interface ToastCloseState {
  /**
   * The type of the toast.
   */
  type: string | undefined;
}
interface ToastCloseProps
  extends NativeButtonProps, BaseUIComponentProps<"button", ToastClose.State> {}
/**
 * Closes the toast when clicked.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastClose: React$1.ForwardRefExoticComponent<
  Omit<ToastCloseProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace ToastClose {
  type State = ToastCloseState;
  type Props = ToastCloseProps;
}

interface ToastActionState {
  /**
   * The type of the toast.
   */
  type: string | undefined;
}
interface ToastActionProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", ToastAction.State> {}
/**
 * Performs an action when clicked.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastAction: React$1.ForwardRefExoticComponent<
  Omit<ToastActionProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace ToastAction {
  type State = ToastActionState;
  type Props = ToastActionProps;
}

interface ToastPortalProps extends FloatingPortalLite.Props<ToastPortal.State> {}
/**
 * A portal element that moves the viewport to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastPortal: React$1.ForwardRefExoticComponent<
  Omit<FloatingPortalLite.Props<any>, "ref"> &
    React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ToastPortal {
  interface State {}
}
declare namespace ToastPortal {
  type Props = ToastPortalProps;
}

interface ToastArrowState {
  side: Side;
  align: Align;
  uncentered: boolean;
}
interface ToastArrowProps extends BaseUIComponentProps<
  "div",
  ToastArrow.State
> {}
/**
 * Displays an element positioned against the toast anchor.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastArrow: React$1.ForwardRefExoticComponent<
  Omit<ToastArrowProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ToastArrow {
  type State = ToastArrowState;
  type Props = ToastArrowProps;
}

declare const index_parts$2_createToastManager: typeof createToastManager;
declare const index_parts$2_useToastManager: typeof useToastManager;
declare namespace index_parts$2 {
  export {
    ToastAction as Action,
    ToastArrow as Arrow,
    ToastClose as Close,
    ToastContent as Content,
    ToastDescription as Description,
    ToastPortal as Portal,
    ToastPositioner as Positioner,
    ToastProvider as Provider,
    ToastRoot as Root,
    ToastTitle as Title,
    ToastViewport as Viewport,
    index_parts$2_createToastManager as createToastManager,
    index_parts$2_useToastManager as useToastManager,
  };
}

interface ToggleState {
  /**
   * Whether the toggle is currently pressed.
   */
  pressed: boolean;
  /**
   * Whether the toggle should ignore user interaction.
   */
  disabled: boolean;
}
interface ToggleProps<Value extends string>
  extends NativeButtonProps, BaseUIComponentProps<"button", Toggle.State> {
  /**
   * Whether the toggle button is currently pressed.
   * This is the controlled counterpart of `defaultPressed`.
   */
  pressed?: boolean | undefined;
  /**
   * Whether the toggle button is currently pressed.
   * This is the uncontrolled counterpart of `pressed`.
   * @default false
   */
  defaultPressed?: boolean | undefined;
  /**
   * Whether the component should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Callback fired when the pressed state is changed.
   */
  onPressedChange?:
    | ((pressed: boolean, eventDetails: Toggle.ChangeEventDetails) => void)
    | undefined;
  /**
   * A unique string that identifies the toggle when used
   * inside a toggle group.
   */
  value?: Value | undefined;
}
type ToggleChangeEventReason = typeof none;
type ToggleChangeEventDetails =
  BaseUIChangeEventDetails<Toggle.ChangeEventReason>;
/**
 * A two-state button that can be on or off.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Toggle](https://base-ui.com/react/components/toggle)
 */
declare const Toggle: {
  <Value extends string>(
    props: Toggle.Props<Value> & React$1.RefAttributes<HTMLButtonElement>,
  ): React$1.JSX.Element;
};
declare namespace Toggle {
  type State = ToggleState;
  type Props<TValue extends string = string> = ToggleProps<TValue>;
  type ChangeEventReason = ToggleChangeEventReason;
  type ChangeEventDetails = ToggleChangeEventDetails;
}

interface ToggleGroupState {
  /**
   * Whether the component should ignore user interaction.
   */
  disabled: boolean;
  /**
   * When `false` only one item in the group can be pressed. If any item in
   * the group becomes pressed, the others will become unpressed.
   * When `true` multiple items can be pressed.
   * @default false
   */
  multiple: boolean;
  /**
   * The orientation of the toggle group.
   */
  orientation: Orientation;
}
interface ToggleGroupProps<Value extends string> extends BaseUIComponentProps<
  "div",
  ToggleGroup.State
> {
  /**
   * The open state of the toggle group represented by an array of
   * the values of all pressed toggle buttons.
   * This is the controlled counterpart of `defaultValue`.
   */
  value?: readonly Value[] | undefined;
  /**
   * The open state of the toggle group represented by an array of
   * the values of all pressed toggle buttons.
   * This is the uncontrolled counterpart of `value`.
   */
  defaultValue?: readonly Value[] | undefined;
  /**
   * Callback fired when the pressed states of the toggle group changes.
   */
  onValueChange?:
    | ((
        groupValue: Value[],
        eventDetails: ToggleGroup.ChangeEventDetails,
      ) => void)
    | undefined;
  /**
   * Whether the toggle group should ignore user interaction.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * @default 'horizontal'
   */
  orientation?: Orientation | undefined;
  /**
   * Whether to loop keyboard focus back to the first item
   * when the end of the list is reached while using the arrow keys.
   * @default true
   */
  loopFocus?: boolean | undefined;
  /**
   * When `false` only one item in the group can be pressed. If any item in
   * the group becomes pressed, the others will become unpressed.
   * When `true` multiple items can be pressed.
   * @default false
   */
  multiple?: boolean | undefined;
}
type ToggleGroupChangeEventReason = typeof none;
type ToggleGroupChangeEventDetails =
  BaseUIChangeEventDetails<ToggleGroup.ChangeEventReason>;
/**
 * Provides a shared state to a series of toggle buttons.
 *
 * Documentation: [Base UI Toggle Group](https://base-ui.com/react/components/toggle-group)
 */
declare const ToggleGroup: {
  <Value extends string>(
    props: ToggleGroup.Props<Value> & React$1.RefAttributes<HTMLDivElement>,
  ): React$1.JSX.Element;
};
declare namespace ToggleGroup {
  type State = ToggleGroupState;
  type Props<Value extends string = string> = ToggleGroupProps<Value>;
  type ChangeEventReason = ToggleGroupChangeEventReason;
  type ChangeEventDetails = ToggleGroupChangeEventDetails;
}

interface ToolbarSeparatorProps
  extends BaseUIComponentProps<"div", Separator.State>, Separator.Props {}
/**
 * A separator element accessible to screen readers.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
 */
declare const ToolbarSeparator: React$1.ForwardRefExoticComponent<
  Omit<ToolbarSeparatorProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ToolbarSeparator {
  type Props = ToolbarSeparatorProps;
}

interface ToolbarRootItemMetadata {
  focusableWhenDisabled: boolean;
}
type ToolbarRootOrientation = Orientation;
interface ToolbarRootState {
  disabled: boolean;
  orientation: ToolbarRoot.Orientation;
}
interface ToolbarRootProps extends BaseUIComponentProps<
  "div",
  ToolbarRoot.State
> {
  disabled?: boolean | undefined;
  /**
   * The orientation of the toolbar.
   * @default 'horizontal'
   */
  orientation?: ToolbarRoot.Orientation | undefined;
  /**
   * If `true`, using keyboard navigation will wrap focus to the other end of the toolbar once the end is reached.
   *
   * @default true
   */
  loopFocus?: boolean | undefined;
}
/**
 * A container for grouping a set of controls, such as buttons, toggle groups, or menus.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
 */
declare const ToolbarRoot: React$1.ForwardRefExoticComponent<
  Omit<ToolbarRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ToolbarRoot {
  type ItemMetadata = ToolbarRootItemMetadata;
  type Orientation = ToolbarRootOrientation;
  type State = ToolbarRootState;
  type Props = ToolbarRootProps;
}

interface ToolbarGroupProps extends BaseUIComponentProps<
  "div",
  ToolbarRoot.State
> {
  /**
   * When `true` all toolbar items in the group are disabled.
   * @default false
   */
  disabled?: boolean | undefined;
}
/**
 * Groups several toolbar items or toggles.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
 */
declare const ToolbarGroup: React$1.ForwardRefExoticComponent<
  Omit<ToolbarGroupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace ToolbarGroup {
  type Props = ToolbarGroupProps;
}

interface ToolbarButtonState extends ToolbarRoot.State {
  disabled: boolean;
  focusable: boolean;
}
interface ToolbarButtonProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", ToolbarButton.State> {
  /**
   * When `true` the item is disabled.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * When `true` the item remains focuseable when disabled.
   * @default true
   */
  focusableWhenDisabled?: boolean | undefined;
}
/**
 * A button that can be used as-is or as a trigger for other components.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
 */
declare const ToolbarButton: React$1.ForwardRefExoticComponent<
  Omit<ToolbarButtonProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>
>;
declare namespace ToolbarButton {
  type State = ToolbarButtonState;
  type Props = ToolbarButtonProps;
}

interface ToolbarLinkState {
  orientation: ToolbarRoot.Orientation;
}
interface ToolbarLinkProps extends BaseUIComponentProps<
  "a",
  ToolbarLink.State
> {}
/**
 * A link component.
 * Renders an `<a>` element.
 *
 * Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
 */
declare const ToolbarLink: React$1.ForwardRefExoticComponent<
  Omit<ToolbarLinkProps, "ref"> & React$1.RefAttributes<HTMLAnchorElement>
>;
declare namespace ToolbarLink {
  type State = ToolbarLinkState;
  type Props = ToolbarLinkProps;
}

interface ToolbarInputState extends ToolbarRoot.State {
  disabled: boolean;
  focusable: boolean;
}
interface ToolbarInputProps extends BaseUIComponentProps<
  "input",
  ToolbarInput.State
> {
  /**
   * When `true` the item is disabled.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * When `true` the item remains focuseable when disabled.
   * @default true
   */
  focusableWhenDisabled?: boolean | undefined;
  defaultValue?: React$1.ComponentProps<"input">["defaultValue"] | undefined;
}
/**
 * A native input element that integrates with Toolbar keyboard navigation.
 * Renders an `<input>` element.
 *
 * Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
 */
declare const ToolbarInput: React$1.ForwardRefExoticComponent<
  Omit<ToolbarInputProps, "ref"> & React$1.RefAttributes<HTMLInputElement>
>;
declare namespace ToolbarInput {
  type State = ToolbarInputState;
  type Props = ToolbarInputProps;
}

type index_parts$1_Orientation = Orientation;
declare namespace index_parts$1 {
  export {
    ToolbarButton as Button,
    ToolbarGroup as Group,
    ToolbarInput as Input,
    ToolbarLink as Link,
    type index_parts$1_Orientation as Orientation,
    ToolbarRoot as Root,
    ToolbarSeparator as Separator,
  };
}

type State<Payload> = PopupStoreState<Payload> & {
  disabled: boolean;
  instantType: "delay" | "dismiss" | "focus" | undefined;
  isInstantPhase: boolean;
  trackCursorAxis: "none" | "x" | "y" | "both";
  disableHoverablePopup: boolean;
  openChangeReason: TooltipRoot.ChangeEventReason | null;
  closeDelay: number;
  hasViewport: boolean;
};
type Context = PopupStoreContext<TooltipRoot.ChangeEventDetails> & {
  readonly popupRef: React$1.RefObject<HTMLElement | null>;
};
declare const selectors: {
  disabled: (state: State<unknown>) => boolean;
  instantType: (
    state: State<unknown>,
  ) => "focus" | "delay" | "dismiss" | undefined;
  isInstantPhase: (state: State<unknown>) => boolean;
  trackCursorAxis: (state: State<unknown>) => "none" | "both" | "x" | "y";
  disableHoverablePopup: (state: State<unknown>) => boolean;
  lastOpenChangeReason: (
    state: State<unknown>,
  ) => TooltipRootChangeEventReason | null;
  closeDelay: (state: State<unknown>) => number;
  hasViewport: (state: State<unknown>) => boolean;
  open: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  mounted: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  transitionStatus: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => TransitionStatus;
  floatingRootContext: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => FloatingRootStore;
  preventUnmountingOnClose: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => boolean;
  payload: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => unknown;
  activeTriggerId: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => string | null;
  activeTriggerElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => Element | null;
  isTriggerActive: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  isOpenedByTrigger: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  isMountedByTrigger: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    triggerId: string | undefined,
  ) => boolean;
  triggerProps: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      preventUnmountingOnClose: boolean;
      payload: unknown;
      activeTriggerId: string | null;
      activeTriggerElement: Element | null;
      readonly triggerIdProp: string | null | undefined;
      popupElement: HTMLElement | null;
      positionerElement: HTMLElement | null;
      activeTriggerProps: HTMLProps;
      inactiveTriggerProps: HTMLProps;
      popupProps: HTMLProps;
    },
    isActive: boolean,
  ) => HTMLProps;
  popupProps: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLProps;
  popupElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLElement | null;
  positionerElement: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    preventUnmountingOnClose: boolean;
    payload: unknown;
    activeTriggerId: string | null;
    activeTriggerElement: Element | null;
    readonly triggerIdProp: string | null | undefined;
    popupElement: HTMLElement | null;
    positionerElement: HTMLElement | null;
    activeTriggerProps: HTMLProps;
    inactiveTriggerProps: HTMLProps;
    popupProps: HTMLProps;
  }) => HTMLElement | null;
};
declare class TooltipStore<Payload> extends ReactStore<
  Readonly<State<Payload>>,
  Context,
  typeof selectors
> {
  constructor(initialState?: Partial<State<Payload>>);
  setOpen: (
    nextOpen: boolean,
    eventDetails: Omit<TooltipRoot.ChangeEventDetails, "preventUnmountOnClose">,
  ) => void;
  static useStore<Payload>(
    externalStore: TooltipStore<Payload> | undefined,
    initialState?: Partial<State<Payload>>,
  ): TooltipStore<Payload>;
}

/**
 * A handle to control a tooltip imperatively and to associate detached triggers with it.
 */
declare class TooltipHandle<Payload> {
  /**
   * Internal store holding the tooltip state.
   * @internal
   */
  readonly store: TooltipStore<Payload>;
  constructor();
  /**
   * Opens the tooltip and associates it with the trigger with the given ID.
   * The trigger must be a Tooltip.Trigger component with this handle passed as a prop.
   *
   * This method should only be called in an event handler or an effect (not during rendering).
   *
   * @param triggerId ID of the trigger to associate with the tooltip.
   */
  open(triggerId: string): void;
  /**
   * Closes the tooltip.
   */
  close(): void;
  /**
   * Indicates whether the tooltip is currently open.
   */
  get isOpen(): boolean;
}
/**
 * Creates a new handle to connect a Tooltip.Root with detached Tooltip.Trigger components.
 */
declare function createTooltipHandle<Payload>(): TooltipHandle<Payload>;

interface TooltipRootState {}
interface TooltipRootProps<Payload = unknown> {
  /**
   * Whether the tooltip is initially open.
   *
   * To render a controlled tooltip, use the `open` prop instead.
   * @default false
   */
  defaultOpen?: boolean | undefined;
  /**
   * Whether the tooltip is currently open.
   */
  open?: boolean | undefined;
  /**
   * Event handler called when the tooltip is opened or closed.
   */
  onOpenChange?:
    | ((open: boolean, eventDetails: TooltipRoot.ChangeEventDetails) => void)
    | undefined;
  /**
   * Event handler called after any animations complete when the tooltip is opened or closed.
   */
  onOpenChangeComplete?: ((open: boolean) => void) | undefined;
  /**
   * Whether the tooltip contents can be hovered without closing the tooltip.
   * @default false
   */
  disableHoverablePopup?: boolean | undefined;
  /**
   * Determines which axis the tooltip should track the cursor on.
   * @default 'none'
   */
  trackCursorAxis?: ("none" | "x" | "y" | "both") | undefined;
  /**
   * A ref to imperative actions.
   * - `unmount`: Unmounts the tooltip popup.
   * - `close`: Closes the tooltip imperatively when called.
   */
  actionsRef?: React$1.RefObject<TooltipRoot.Actions | null> | undefined;
  /**
   * Whether the tooltip is disabled.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * A handle to associate the tooltip with a trigger.
   * If specified, allows external triggers to control the tooltip's open state.
   * Can be created with the Tooltip.createHandle() method.
   */
  handle?: TooltipHandle<Payload> | undefined;
  /**
   * The content of the tooltip.
   * This can be a regular React node or a render function that receives the `payload` of the active trigger.
   */
  children?: React$1.ReactNode | PayloadChildRenderFunction<Payload>;
  /**
   * ID of the trigger that the tooltip is associated with.
   * This is useful in conjunction with the `open` prop to create a controlled tooltip.
   * There's no need to specify this prop when the tooltip is uncontrolled (i.e. when the `open` prop is not set).
   */
  triggerId?: (string | null) | undefined;
  /**
   * ID of the trigger that the tooltip is associated with.
   * This is useful in conjunction with the `defaultOpen` prop to create an initially open tooltip.
   */
  defaultTriggerId?: (string | null) | undefined;
}
interface TooltipRootActions {
  unmount: () => void;
  close: () => void;
}
type TooltipRootChangeEventReason =
  | typeof triggerHover
  | typeof triggerFocus
  | typeof triggerPress
  | typeof outsidePress
  | typeof escapeKey
  | typeof disabled
  | typeof imperativeAction
  | typeof none;
type TooltipRootChangeEventDetails =
  BaseUIChangeEventDetails<TooltipRoot.ChangeEventReason> & {
    preventUnmountOnClose(): void;
  };
/**
 * Groups all parts of the tooltip.
 * Doesn’t render its own HTML element.
 *
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */
declare const TooltipRoot: <Payload>(
  props: TooltipRoot.Props<Payload>,
) => react_jsx_runtime.JSX.Element;
declare namespace TooltipRoot {
  type State = TooltipRootState;
  type Props<Payload = unknown> = TooltipRootProps<Payload>;
  type Actions = TooltipRootActions;
  type ChangeEventReason = TooltipRootChangeEventReason;
  type ChangeEventDetails = TooltipRootChangeEventDetails;
}

interface TooltipTriggerState {
  /**
   * Whether the tooltip is currently open.
   */
  open: boolean;
}
interface TooltipTriggerProps<Payload = unknown> extends BaseUIComponentProps<
  "button",
  TooltipTrigger.State
> {
  /**
   * A handle to associate the trigger with a tooltip.
   */
  handle?: TooltipHandle<Payload> | undefined;
  /**
   * A payload to pass to the tooltip when it is opened.
   */
  payload?: Payload | undefined;
  /**
   * How long to wait before opening the tooltip. Specified in milliseconds.
   * @default 600
   */
  delay?: number | undefined;
  /**
   * How long to wait before closing the tooltip. Specified in milliseconds.
   * @default 0
   */
  closeDelay?: number | undefined;
  /**
   * If `true`, the tooltip will not open when interacting with this trigger.
   * Note that this doesn't apply the `disabled` attribute to the trigger element.
   * If you want to disable the trigger element itself, you can pass the `disabled` prop to the trigger element via the `render` prop.
   * @default false
   */
  disabled?: boolean | undefined;
}
/**
 * An element to attach the tooltip to.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */
declare const TooltipTrigger: TooltipTrigger;
interface TooltipTrigger {
  <Payload>(
    componentProps: TooltipTrigger.Props<Payload> &
      React$1.RefAttributes<HTMLElement>,
  ): React$1.JSX.Element;
}
declare namespace TooltipTrigger {
  type State = TooltipTriggerState;
  type Props<Payload = unknown> = TooltipTriggerProps<Payload>;
}

interface TooltipPortalProps extends FloatingPortalLite.Props<TooltipPortal.State> {
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
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */
declare const TooltipPortal: React$1.ForwardRefExoticComponent<
  Omit<TooltipPortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace TooltipPortal {
  interface State {}
}
declare namespace TooltipPortal {
  type Props = TooltipPortalProps;
}

interface TooltipPositionerState {
  /**
   * Whether the tooltip is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  anchorHidden: boolean;
  /**
   * Whether CSS transitions should be disabled.
   */
  instant: string | undefined;
}
interface TooltipPositionerProps
  extends
    BaseUIComponentProps<"div", TooltipPositioner.State>,
    Omit<useAnchorPositioning.SharedParameters, "side"> {
  /**
   * Which side of the anchor element to align the popup against.
   * May automatically change to avoid collisions.
   * @default 'top'
   */
  side?: Side | undefined;
}
/**
 * Positions the tooltip against the trigger.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */
declare const TooltipPositioner: React$1.ForwardRefExoticComponent<
  Omit<TooltipPositionerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace TooltipPositioner {
  type State = TooltipPositionerState;
  type Props = TooltipPositionerProps;
}

interface TooltipPopupState {
  /**
   * Whether the tooltip is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  instant: "delay" | "focus" | "dismiss" | undefined;
  transitionStatus: TransitionStatus;
}
interface TooltipPopupProps extends BaseUIComponentProps<
  "div",
  TooltipPopup.State
> {}
/**
 * A container for the tooltip contents.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */
declare const TooltipPopup: React$1.ForwardRefExoticComponent<
  Omit<TooltipPopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace TooltipPopup {
  type State = TooltipPopupState;
  type Props = TooltipPopupProps;
}

interface TooltipArrowState {
  /**
   * Whether the tooltip is currently open.
   */
  open: boolean;
  side: Side;
  align: Align;
  uncentered: boolean;
  instant: "delay" | "dismiss" | "focus" | undefined;
}
interface TooltipArrowProps extends BaseUIComponentProps<
  "div",
  TooltipArrow.State
> {}
/**
 * Displays an element positioned against the tooltip anchor.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */
declare const TooltipArrow: React$1.ForwardRefExoticComponent<
  Omit<TooltipArrowProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace TooltipArrow {
  type State = TooltipArrowState;
  type Props = TooltipArrowProps;
}

interface TooltipProviderProps {
  children?: React$1.ReactNode;
  /**
   * How long to wait before opening a tooltip. Specified in milliseconds.
   */
  delay?: number | undefined;
  /**
   * How long to wait before closing a tooltip. Specified in milliseconds.
   */
  closeDelay?: number | undefined;
  /**
   * Another tooltip will open instantly if the previous tooltip
   * is closed within this timeout. Specified in milliseconds.
   * @default 400
   */
  timeout?: number | undefined;
}
/**
 * Provides a shared delay for multiple tooltips. The grouping logic ensures that
 * once a tooltip becomes visible, the adjacent tooltips will be shown instantly.
 *
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */
declare const TooltipProvider: React$1.FC<TooltipProvider.Props>;
declare namespace TooltipProvider {
  type Props = TooltipProviderProps;
}

/**
 * A viewport for displaying content transitions.
 * This component is only required if one popup can be opened by multiple triggers, its content change based on the trigger
 * and switching between them is animated.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */
declare const TooltipViewport: React$1.ForwardRefExoticComponent<
  Omit<TooltipViewport.Props, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace TooltipViewport {
  interface Props extends BaseUIComponentProps<"div", State> {
    /**
     * The content to render inside the transition container.
     */
    children?: React$1.ReactNode;
  }
  interface State {
    activationDirection: string | undefined;
    /**
     * Whether the viewport is currently transitioning between contents.
     */
    transitioning: boolean;
    /**
     * Present if animations should be instant.
     */
    instant: "delay" | "dismiss" | "focus" | undefined;
  }
}

declare namespace index_parts {
  export {
    TooltipArrow as Arrow,
    TooltipHandle as Handle,
    TooltipPopup as Popup,
    TooltipPortal as Portal,
    TooltipPositioner as Positioner,
    TooltipProvider as Provider,
    TooltipRoot as Root,
    TooltipTrigger as Trigger,
    TooltipViewport as Viewport,
    createTooltipHandle as createHandle,
  };
}

type UseRenderRenderProp<State = Record<string, unknown>> =
  | React$1.ReactElement
  | ComponentRenderFn<React$1.HTMLAttributes<any>, State>;
type UseRenderElementProps<ElementType extends React$1.ElementType> =
  React$1.ComponentPropsWithRef<ElementType>;
type UseRenderComponentProps<
  ElementType extends React$1.ElementType,
  State = {},
  RenderFunctionProps = HTMLProps,
> = React$1.ComponentPropsWithRef<ElementType> & {
  /**
   * Allows you to replace the component’s HTML element
   * with a different tag, or compose it with another component.
   *
   * Accepts a `ReactElement` or a function that returns the element to render.
   */
  render?:
    | (React$1.ReactElement | ComponentRenderFn<RenderFunctionProps, State>)
    | undefined;
};
interface UseRenderParameters<
  State,
  RenderedElementType extends Element,
  Enabled extends boolean | undefined,
> {
  /**
   * The React element or a function that returns one to override the default element.
   */
  render?: UseRenderRenderProp<State> | undefined;
  /**
   * The ref to apply to the rendered element.
   */
  ref?:
    | (React$1.Ref<RenderedElementType> | React$1.Ref<RenderedElementType>[])
    | undefined;
  /**
   * The state of the component, passed as the second argument to the `render` callback.
   * State properties are automatically converted to data-* attributes.
   */
  state?: State | undefined;
  /**
   * Custom mapping for converting state properties to data-* attributes.
   * @example
   * { isActive: (value) => (value ? { 'data-is-active': '' } : null) }
   */
  stateAttributesMapping?: StateAttributesMapping<State> | undefined;
  /**
   * Props to be spread on the rendered element.
   * They are merged with the internal props of the component, so that event handlers
   * are merged, `className` strings and `style` properties are joined, while other external props overwrite the
   * internal ones.
   */
  props?: Record<string, unknown> | undefined;
  /**
   * If `false`, the hook will skip most of its internal logic and return `null`.
   * This is useful for rendering a component conditionally.
   * @default true
   */
  enabled?: Enabled | undefined;
  /**
   * The default tag name to use for the rendered element when `render` is not provided.
   * @default 'div'
   */
  defaultTagName?: keyof React$1.JSX.IntrinsicElements | undefined;
}
type UseRenderReturnValue<Enabled extends boolean | undefined> =
  Enabled extends false ? null : React$1.ReactElement;
/**
 * Renders a Base UI element.
 *
 * @public
 */
declare function useRender<
  State extends Record<string, unknown>,
  RenderedElementType extends Element,
  Enabled extends boolean | undefined = undefined,
>(
  params: useRender.Parameters<State, RenderedElementType, Enabled>,
): useRender.ReturnValue<Enabled>;
declare namespace useRender {
  type RenderProp<State = Record<string, unknown>> = UseRenderRenderProp<State>;
  type ElementProps<ElementType extends React$1.ElementType> =
    UseRenderElementProps<ElementType>;
  type ComponentProps<
    ElementType extends React$1.ElementType,
    State = {},
    RenderFunctionProps = HTMLProps,
  > = UseRenderComponentProps<ElementType, State, RenderFunctionProps>;
  type Parameters<
    State,
    RenderedElementType extends Element,
    Enabled extends boolean | undefined,
  > = UseRenderParameters<State, RenderedElementType, Enabled>;
  type ReturnValue<Enabled extends boolean | undefined> =
    UseRenderReturnValue<Enabled>;
}

export {
  index_parts$r as Accordion,
  AccordionHeader,
  type AccordionHeaderProps,
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
  type AccordionValue,
  index_parts$q as AlertDialog,
  AlertDialogRoot,
  type AlertDialogRootActions,
  type AlertDialogRootChangeEventDetails,
  type AlertDialogRootChangeEventReason,
  type AlertDialogRootProps,
  index_parts$p as Autocomplete,
  type ComboboxArrowProps as AutocompleteArrowProps,
  type ComboboxArrowState as AutocompleteArrowState,
  type ComboboxBackdropProps as AutocompleteBackdropProps,
  type ComboboxBackdropState as AutocompleteBackdropState,
  type ComboboxCollectionProps as AutocompleteCollectionProps,
  type ComboboxEmptyProps as AutocompleteEmptyProps,
  type ComboboxEmptyState as AutocompleteEmptyState,
  type Filter as AutocompleteFilter,
  type UseFilterOptions as AutocompleteFilterOptions,
  type ComboboxGroupLabelProps as AutocompleteGroupLabelProps,
  type ComboboxGroupLabelState as AutocompleteGroupLabelState,
  type ComboboxGroupProps as AutocompleteGroupProps,
  type ComboboxGroupState as AutocompleteGroupState,
  type ComboboxInputProps as AutocompleteInputProps,
  type ComboboxInputState as AutocompleteInputState,
  type ComboboxItemProps as AutocompleteItemProps,
  type ComboboxItemState as AutocompleteItemState,
  type ComboboxListProps as AutocompleteListProps,
  type ComboboxListState as AutocompleteListState,
  type ComboboxPopupProps as AutocompletePopupProps,
  type ComboboxPopupState as AutocompletePopupState,
  type ComboboxPortalProps as AutocompletePortalProps,
  type ComboboxPositionerProps as AutocompletePositionerProps,
  type ComboboxPositionerState as AutocompletePositionerState,
  AutocompleteRoot,
  type AutocompleteRootActions,
  type AutocompleteRootChangeEventDetails,
  type AutocompleteRootChangeEventReason,
  type AutocompleteRootHighlightEventDetails,
  type AutocompleteRootHighlightEventReason,
  type AutocompleteRootProps,
  type AutocompleteRootState,
  type ComboboxStatusProps as AutocompleteStatusProps,
  type ComboboxStatusState as AutocompleteStatusState,
  type ComboboxTriggerProps as AutocompleteTriggerProps,
  type ComboboxTriggerState as AutocompleteTriggerState,
  AutocompleteValue,
  type AutocompleteValueProps,
  type AutocompleteValueState,
  index_parts$o as Avatar,
  AvatarFallback,
  type AvatarFallbackProps,
  type AvatarFallbackState,
  AvatarImage,
  type AvatarImageProps,
  type AvatarImageState,
  AvatarRoot,
  type AvatarRootProps,
  type AvatarRootState,
  type BaseUIChangeEventDetails,
  type BaseUIGenericEventDetails,
  Button,
  type ButtonProps,
  type ButtonState,
  CSPProvider,
  type CSPProviderProps,
  type CSPProviderState,
  index_parts$n as Checkbox,
  CheckboxGroup,
  type CheckboxGroupChangeEventDetails,
  type CheckboxGroupChangeEventReason,
  type CheckboxGroupProps,
  type CheckboxGroupState,
  CheckboxIndicator,
  type CheckboxIndicatorProps,
  type CheckboxIndicatorState,
  CheckboxRoot,
  type CheckboxRootChangeEventDetails,
  type CheckboxRootChangeEventReason,
  type CheckboxRootProps,
  type CheckboxRootState,
  index_parts$m as Collapsible,
  CollapsiblePanel,
  type CollapsiblePanelProps,
  type CollapsiblePanelState,
  CollapsibleRoot,
  type CollapsibleRootChangeEventDetails,
  type CollapsibleRootChangeEventReason,
  type CollapsibleRootProps,
  type CollapsibleRootState,
  CollapsibleTrigger,
  type CollapsibleTriggerProps,
  index_parts$l as Combobox,
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
  type ComboboxInputProps,
  type ComboboxInputState,
  ComboboxItem,
  ComboboxItemIndicator,
  type ComboboxItemIndicatorProps,
  type ComboboxItemIndicatorState,
  type ComboboxItemProps,
  type ComboboxItemState,
  ComboboxList,
  type ComboboxListProps,
  type ComboboxListState,
  ComboboxPopup,
  type ComboboxPopupProps,
  type ComboboxPopupState,
  ComboboxPortal,
  type ComboboxPortalProps,
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
  type ComponentRenderFn,
  index_parts$j as ContextMenu,
  type MenuArrowProps as ContextMenuArrowProps,
  type MenuArrowState as ContextMenuArrowState,
  type MenuBackdropProps as ContextMenuBackdropProps,
  type MenuBackdropState as ContextMenuBackdropState,
  type MenuCheckboxItemIndicatorProps as ContextMenuCheckboxItemIndicatorProps,
  type MenuCheckboxItemIndicatorState as ContextMenuCheckboxItemIndicatorState,
  type MenuCheckboxItemProps as ContextMenuCheckboxItemProps,
  type MenuCheckboxItemState as ContextMenuCheckboxItemState,
  type MenuGroupLabelProps as ContextMenuGroupLabelProps,
  type MenuGroupLabelState as ContextMenuGroupLabelState,
  type MenuGroupProps as ContextMenuGroupProps,
  type MenuGroupState as ContextMenuGroupState,
  type MenuItemProps as ContextMenuItemProps,
  type MenuItemState as ContextMenuItemState,
  type MenuLinkItemProps as ContextMenuLinkItemProps,
  type MenuLinkItemState as ContextMenuLinkItemState,
  type MenuPopupProps as ContextMenuPopupProps,
  type MenuPopupState as ContextMenuPopupState,
  type MenuPortalProps as ContextMenuPortalProps,
  type MenuPositionerProps as ContextMenuPositionerProps,
  type MenuPositionerState as ContextMenuPositionerState,
  type MenuRadioGroupProps as ContextMenuRadioGroupProps,
  type MenuRadioGroupState as ContextMenuRadioGroupState,
  type MenuRadioItemIndicatorProps as ContextMenuRadioItemIndicatorProps,
  type MenuRadioItemIndicatorState as ContextMenuRadioItemIndicatorState,
  type MenuRadioItemProps as ContextMenuRadioItemProps,
  type MenuRadioItemState as ContextMenuRadioItemState,
  ContextMenuRoot,
  type ContextMenuRootChangeEventDetails,
  type ContextMenuRootChangeEventReason,
  type ContextMenuRootProps,
  type ContextMenuRootState,
  type MenuSubmenuRootProps as ContextMenuSubmenuRootProps,
  type MenuSubmenuRootState as ContextMenuSubmenuRootState,
  type MenuSubmenuTriggerProps as ContextMenuSubmenuTriggerProps,
  type MenuSubmenuTriggerState as ContextMenuSubmenuTriggerState,
  ContextMenuTrigger,
  type ContextMenuTriggerProps,
  type ContextMenuTriggerState,
  type Coords,
  index_parts$i as Dialog,
  DialogBackdrop,
  type DialogBackdropProps,
  type DialogBackdropState,
  DialogClose,
  type DialogCloseProps,
  type DialogCloseState,
  DialogDescription,
  type DialogDescriptionProps,
  type DialogDescriptionState,
  DialogPopup,
  type DialogPopupProps,
  type DialogPopupState,
  DialogPortal,
  type DialogPortalProps,
  DialogRoot,
  type DialogRootActions,
  type DialogRootChangeEventDetails,
  type DialogRootChangeEventReason,
  type DialogRootProps,
  DialogTitle,
  type DialogTitleProps,
  type DialogTitleState,
  DialogTrigger,
  type DialogTriggerProps,
  type DialogTriggerState,
  DialogViewport,
  type DialogViewportProps,
  type DialogViewportState,
  DirectionProvider,
  type DirectionProviderProps,
  DrawerBackdrop,
  type DrawerBackdropProps,
  type DrawerBackdropState,
  DrawerClose,
  type DrawerCloseProps,
  type DrawerCloseState,
  DrawerContent,
  type DrawerContentProps,
  type DrawerContentState,
  DrawerDescription,
  type DrawerDescriptionProps,
  type DrawerDescriptionState,
  DrawerIndent,
  DrawerIndentBackground,
  type DrawerIndentBackgroundProps,
  type DrawerIndentBackgroundState,
  type DrawerIndentProps,
  type DrawerIndentState,
  DrawerPopup,
  type DrawerPopupProps,
  type DrawerPopupState,
  DrawerPortal,
  type DrawerPortalProps,
  type DrawerPortalState,
  index_parts$h as DrawerPreview,
  DrawerProvider,
  type DrawerProviderProps,
  type DrawerProviderState,
  DrawerRoot,
  type DrawerRootActions,
  type DrawerRootChangeEventDetails,
  type DrawerRootChangeEventReason,
  type DrawerRootProps,
  type DrawerRootSnapPointChangeEventDetails,
  type DrawerRootSnapPointChangeEventReason,
  DrawerTitle,
  type DrawerTitleProps,
  type DrawerTitleState,
  DrawerTrigger,
  type DrawerTriggerProps,
  type DrawerTriggerState,
  DrawerViewport,
  type DrawerViewportProps,
  type DrawerViewportState,
  index_parts$g as Field,
  FieldControl,
  type FieldControlChangeEventDetails,
  type FieldControlChangeEventReason,
  type FieldControlProps,
  type FieldControlState,
  FieldDescription,
  type FieldDescriptionProps,
  type FieldDescriptionState,
  FieldError,
  type FieldErrorProps,
  type FieldErrorState,
  FieldItem,
  type FieldItemProps,
  FieldLabel,
  type FieldLabelProps,
  type FieldLabelState,
  FieldRoot,
  type FieldRootActions,
  type FieldRootProps,
  type FieldRootState,
  FieldValidity,
  type FieldValidityData,
  type FieldValidityProps,
  type FieldValidityState,
  index_parts$f as Fieldset,
  FieldsetLegend,
  type FieldsetLegendProps,
  type FieldsetLegendState,
  FieldsetRoot,
  type FieldsetRootProps,
  type FieldsetRootState,
  Form,
  type FormActions,
  type FormProps,
  type FormState,
  type FormSubmitEventDetails,
  type FormSubmitEventReason,
  type FormValidationMode,
  type HTMLProps,
  type HiddenState,
  type ImageLoadingStatus$1 as ImageLoadingStatus,
  Input,
  type InputChangeEventDetails,
  type InputChangeEventReason,
  type InputProps$1 as InputProps,
  type InputState,
  index_parts$k as Menu,
  MenuArrow,
  type MenuArrowProps,
  type MenuArrowState,
  MenuBackdrop,
  type MenuBackdropProps,
  type MenuBackdropState,
  MenuCheckboxItem,
  type MenuCheckboxItemChangeEventDetails,
  type MenuCheckboxItemChangeEventReason,
  MenuCheckboxItemIndicator,
  type MenuCheckboxItemIndicatorProps,
  type MenuCheckboxItemIndicatorState,
  type MenuCheckboxItemProps,
  type MenuCheckboxItemState,
  MenuGroup,
  MenuGroupLabel,
  type MenuGroupLabelProps,
  type MenuGroupLabelState,
  type MenuGroupProps,
  type MenuGroupState,
  MenuItem,
  type MenuItemProps,
  type MenuItemState,
  MenuLinkItem,
  type MenuLinkItemProps,
  type MenuLinkItemState,
  type MenuParent,
  MenuPopup,
  type MenuPopupProps,
  type MenuPopupState,
  MenuPortal,
  type MenuPortalProps,
  MenuPositioner,
  type MenuPositionerProps,
  type MenuPositionerState,
  MenuRadioGroup,
  type MenuRadioGroupChangeEventDetails,
  type MenuRadioGroupChangeEventReason,
  type MenuRadioGroupProps,
  type MenuRadioGroupState,
  MenuRadioItem,
  MenuRadioItemIndicator,
  type MenuRadioItemIndicatorProps,
  type MenuRadioItemIndicatorState,
  type MenuRadioItemProps,
  type MenuRadioItemState,
  MenuRoot,
  type MenuRootActions,
  type MenuRootChangeEventDetails,
  type MenuRootChangeEventReason,
  type MenuRootOrientation,
  type MenuRootProps,
  MenuSubmenuRoot,
  type MenuSubmenuRootChangeEventDetails,
  type MenuSubmenuRootChangeEventReason,
  type MenuSubmenuRootProps,
  type MenuSubmenuRootState,
  MenuSubmenuTrigger,
  type MenuSubmenuTriggerProps,
  type MenuSubmenuTriggerState,
  MenuTrigger,
  type MenuTriggerProps,
  type MenuTriggerState,
  Menubar,
  type MenubarProps,
  type MenubarState,
  index_parts$e as Meter,
  MeterIndicator,
  type MeterIndicatorProps,
  MeterLabel,
  type MeterLabelProps,
  MeterRoot,
  type MeterRootProps,
  type MeterRootState,
  MeterTrack,
  type MeterTrackProps,
  MeterValue,
  type MeterValueProps,
  index_parts$d as NavigationMenu,
  NavigationMenuArrow,
  type NavigationMenuArrowProps,
  type NavigationMenuArrowState,
  NavigationMenuBackdrop,
  type NavigationMenuBackdropProps,
  type NavigationMenuBackdropState,
  NavigationMenuContent,
  type NavigationMenuContentProps,
  type NavigationMenuContentState,
  NavigationMenuIcon,
  type NavigationMenuIconProps,
  type NavigationMenuIconState,
  NavigationMenuItem,
  type NavigationMenuItemProps,
  type NavigationMenuItemState,
  NavigationMenuLink,
  type NavigationMenuLinkProps,
  type NavigationMenuLinkState,
  NavigationMenuList,
  type NavigationMenuListProps,
  type NavigationMenuListState,
  NavigationMenuPopup,
  type NavigationMenuPopupProps,
  type NavigationMenuPopupState,
  NavigationMenuPortal,
  type NavigationMenuPortalProps,
  NavigationMenuPositioner,
  type NavigationMenuPositionerProps,
  type NavigationMenuPositionerState,
  NavigationMenuRoot,
  type NavigationMenuRootActions,
  type NavigationMenuRootChangeEventDetails,
  type NavigationMenuRootChangeEventReason,
  type NavigationMenuRootProps,
  type NavigationMenuRootState,
  NavigationMenuTrigger,
  type NavigationMenuTriggerProps,
  type NavigationMenuTriggerState,
  NavigationMenuViewport,
  type NavigationMenuViewportProps,
  type NavigationMenuViewportState,
  index_parts$c as NumberField,
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
  type Orientation,
  type OverflowEdges,
  PARENT_CHECKBOX,
  index_parts$b as Popover,
  PopoverArrow,
  type PopoverArrowProps,
  type PopoverArrowState,
  PopoverBackdrop,
  type PopoverBackdropProps,
  type PopoverBackdropState,
  PopoverClose,
  type PopoverCloseProps,
  type PopoverCloseState,
  PopoverDescription,
  type PopoverDescriptionProps,
  type PopoverDescriptionState,
  PopoverPopup,
  type PopoverPopupProps,
  type PopoverPopupState,
  PopoverPortal,
  type PopoverPortalProps,
  PopoverPositioner,
  type PopoverPositionerProps,
  type PopoverPositionerState,
  PopoverRoot,
  type PopoverRootActions,
  type PopoverRootChangeEventDetails,
  type PopoverRootChangeEventReason,
  type PopoverRootProps,
  type PopoverRootState,
  PopoverTitle,
  type PopoverTitleProps,
  type PopoverTitleState,
  PopoverTrigger,
  type PopoverTriggerProps,
  type PopoverTriggerState,
  PopoverViewport,
  index_parts$a as PreviewCard,
  PreviewCardArrow,
  type PreviewCardArrowProps,
  type PreviewCardArrowState,
  PreviewCardBackdrop,
  type PreviewCardBackdropProps,
  type PreviewCardBackdropState,
  PreviewCardPopup,
  type PreviewCardPopupProps,
  type PreviewCardPopupState,
  PreviewCardPortal,
  type PreviewCardPortalProps,
  PreviewCardPositioner,
  type PreviewCardPositionerProps,
  type PreviewCardPositionerState,
  PreviewCardRoot,
  type PreviewCardRootActions,
  type PreviewCardRootChangeEventDetails,
  type PreviewCardRootChangeEventReason,
  type PreviewCardRootProps,
  type PreviewCardRootState,
  PreviewCardTrigger,
  type PreviewCardTriggerProps,
  type PreviewCardTriggerState,
  index_parts$9 as Progress,
  ProgressIndicator,
  type ProgressIndicatorProps,
  ProgressLabel,
  type ProgressLabelProps,
  ProgressRoot,
  type ProgressRootProps,
  type ProgressRootState,
  type ProgressStatus,
  ProgressTrack,
  type ProgressTrackProps,
  ProgressValue,
  type ProgressValueProps,
  index_parts$8 as Radio,
  RadioGroup,
  type RadioGroupChangeEventDetails,
  type RadioGroupChangeEventReason,
  type RadioGroupProps,
  type RadioGroupState,
  RadioIndicator,
  type RadioIndicatorProps,
  type RadioIndicatorState,
  RadioRoot,
  type RadioRootProps,
  type RadioRootState,
  index_parts$7 as ScrollArea,
  ScrollAreaContent,
  type ScrollAreaContentProps,
  type ScrollAreaContentState,
  ScrollAreaCorner,
  type ScrollAreaCornerProps,
  type ScrollAreaCornerState,
  ScrollAreaRoot,
  type ScrollAreaRootProps,
  type ScrollAreaRootState,
  ScrollAreaScrollbar,
  type ScrollAreaScrollbarProps,
  type ScrollAreaScrollbarState,
  ScrollAreaThumb,
  type ScrollAreaThumbProps,
  type ScrollAreaThumbState,
  ScrollAreaViewport,
  type ScrollAreaViewportProps,
  type ScrollAreaViewportState,
  index_parts$6 as Select,
  SelectArrow,
  type SelectArrowProps,
  type SelectArrowState,
  SelectBackdrop,
  type SelectBackdropProps,
  type SelectBackdropState,
  SelectGroup,
  SelectGroupLabel,
  type SelectGroupLabelProps,
  type SelectGroupLabelState,
  type SelectGroupProps,
  type SelectGroupState,
  SelectIcon,
  type SelectIconProps,
  type SelectIconState,
  SelectItem,
  SelectItemIndicator,
  type SelectItemIndicatorProps,
  type SelectItemIndicatorState,
  type SelectItemProps,
  type SelectItemState,
  SelectItemText,
  type SelectItemTextProps,
  type SelectItemTextState,
  SelectList,
  type SelectListProps,
  type SelectListState,
  SelectPopup,
  type SelectPopupProps,
  type SelectPopupState,
  SelectPortal,
  type SelectPortalProps,
  SelectPositioner,
  type SelectPositionerProps,
  type SelectPositionerState,
  SelectRoot,
  type SelectRootActions,
  type SelectRootChangeEventDetails,
  type SelectRootChangeEventReason,
  type SelectRootProps,
  type SelectRootState,
  SelectScrollDownArrow,
  type SelectScrollDownArrowProps,
  type SelectScrollDownArrowState,
  SelectScrollUpArrow,
  type SelectScrollUpArrowProps,
  type SelectScrollUpArrowState,
  SelectTrigger,
  type SelectTriggerProps,
  type SelectTriggerState,
  SelectValue,
  type SelectValueProps,
  type SelectValueState,
  Separator,
  type SeparatorProps,
  type SeparatorState,
  type Size,
  index_parts$5 as Slider,
  SliderControl,
  type SliderControlProps,
  SliderIndicator,
  type SliderIndicatorProps,
  SliderRoot,
  type SliderRootChangeEventCustomProperties,
  type SliderRootChangeEventDetails,
  type SliderRootChangeEventReason,
  type SliderRootCommitEventDetails,
  type SliderRootCommitEventReason,
  type SliderRootProps,
  type SliderRootState,
  SliderThumb,
  type SliderThumbProps,
  type SliderThumbState,
  SliderTrack,
  type SliderTrackProps,
  SliderValue,
  type SliderValueProps,
  index_parts$4 as Switch,
  SwitchRoot,
  type SwitchRootChangeEventDetails,
  type SwitchRootChangeEventReason,
  type SwitchRootProps,
  type SwitchRootState,
  SwitchThumb,
  type SwitchThumbProps,
  type SwitchThumbState,
  index_parts$3 as Tabs,
  TabsIndicator,
  type TabsIndicatorProps,
  type TabsIndicatorState,
  TabsList,
  type TabsListProps,
  type TabsListState,
  TabsPanel,
  type TabsPanelMetadata,
  type TabsPanelProps,
  type TabsPanelState,
  TabsRoot,
  type TabsRootChangeEventDetails,
  type TabsRootChangeEventReason,
  type TabsRootOrientation,
  type TabsRootProps,
  type TabsRootState,
  TabsTab,
  type TabsTabActivationDirection,
  type TabsTabMetadata,
  type TabsTabPosition,
  type TabsTabProps,
  type TabsTabSize,
  type TabsTabState,
  type TabsTabValue,
  type TextDirection,
  type ThumbMetadata,
  index_parts$2 as Toast,
  ToastAction,
  type ToastActionProps,
  type ToastActionState,
  ToastArrow,
  type ToastArrowProps,
  type ToastArrowState,
  ToastClose,
  type ToastCloseProps,
  type ToastCloseState,
  ToastContent,
  type ToastContentProps,
  type ToastContentState,
  ToastDescription,
  type ToastDescriptionProps,
  type ToastDescriptionState,
  type ToastManager,
  type ToastManagerAddOptions,
  type ToastManagerEvent,
  type ToastManagerPositionerProps,
  type ToastManagerPromiseOptions,
  type ToastManagerUpdateOptions,
  type ToastObject,
  ToastPortal,
  type ToastPortalProps,
  ToastPositioner,
  type ToastPositionerProps,
  type ToastPositionerState,
  ToastProvider,
  type ToastProviderProps,
  ToastRoot,
  type ToastRootProps,
  type ToastRootState,
  type ToastRootToastObject,
  ToastTitle,
  type ToastTitleProps,
  type ToastTitleState,
  ToastViewport,
  type ToastViewportProps,
  type ToastViewportState,
  Toggle,
  type ToggleChangeEventDetails,
  type ToggleChangeEventReason,
  ToggleGroup,
  type ToggleGroupChangeEventDetails,
  type ToggleGroupChangeEventReason,
  type ToggleGroupProps,
  type ToggleGroupState,
  type ToggleProps,
  type ToggleState,
  index_parts$1 as Toolbar,
  ToolbarButton,
  type ToolbarButtonProps,
  type ToolbarButtonState,
  ToolbarGroup,
  type ToolbarGroupProps,
  ToolbarInput,
  type ToolbarInputProps,
  type ToolbarInputState,
  ToolbarLink,
  type ToolbarLinkProps,
  type ToolbarLinkState,
  ToolbarRoot,
  type ToolbarRootItemMetadata,
  type ToolbarRootOrientation,
  type ToolbarRootProps,
  type ToolbarRootState,
  ToolbarSeparator,
  type ToolbarSeparatorProps,
  index_parts as Tooltip,
  TooltipArrow,
  type TooltipArrowProps,
  type TooltipArrowState,
  TooltipPopup,
  type TooltipPopupProps,
  type TooltipPopupState,
  TooltipPortal,
  type TooltipPortalProps,
  TooltipPositioner,
  type TooltipPositionerProps,
  type TooltipPositionerState,
  TooltipProvider,
  type TooltipProviderProps,
  TooltipRoot,
  type TooltipRootActions,
  type TooltipRootChangeEventDetails,
  type TooltipRootChangeEventReason,
  type TooltipRootProps,
  type TooltipRootState,
  TooltipTrigger,
  type TooltipTriggerProps,
  type TooltipTriggerState,
  type UseRenderComponentProps,
  type UseRenderElementProps,
  type UseRenderParameters,
  type UseRenderRenderProp,
  type UseRenderReturnValue,
  type UseToastManagerReturnValue,
  createToastManager,
  makeEventPreventable,
  mergeClassNames,
  mergeProps,
  mergePropsN,
  useDirection,
  useMenuSubmenuRootContext,
  useRender,
  useToastManager,
};
