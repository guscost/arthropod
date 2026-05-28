import * as React$1 from "react";
import * as react_jsx_runtime from "react/jsx-runtime";

declare type AlignedPlacement = `${Side$1}-${Alignment}`;

declare type Alignment = "start" | "end";

declare type Axis = "x" | "y";

declare type ClientRectObject = Prettify$1<Rect & SideObject>;

declare type Coords = {
  [key in Axis]: number;
};

declare type Dimensions = {
  [key in Length]: number;
};

declare type Length = "width" | "height";

declare type Padding = number | Prettify$1<Partial<SideObject>>;

declare type Placement = Prettify$1<Side$1 | AlignedPlacement>;

declare type Prettify$1<T> = {
  [K in keyof T]: T[K];
} & {};

declare type Rect = Prettify$1<Coords & Dimensions>;

declare type Side$1 = "top" | "right" | "bottom" | "left";

declare type SideObject = {
  [key in Side$1]: number;
};

declare type Strategy = "absolute" | "fixed";

declare interface ComputePositionReturn extends Coords {
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

declare interface MiddlewareData {
  [key: string]: any;
  arrow?: Partial<Coords> & {
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
  offset?: Coords & {
    placement: Placement;
  };
  shift?: Coords & {
    enabled: {
      [key in Axis]: boolean;
    };
  };
}

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */
declare interface VirtualElement {
  getBoundingClientRect(): ClientRectObject;
  getClientRects?(): Array<ClientRectObject> | DOMRectList;
  contextElement?: Element;
}

declare type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

declare type ReferenceType$1 = Element | VirtualElement;

declare type UseFloatingData = Prettify<
  ComputePositionReturn & {
    isPositioned: boolean;
  }
>;

declare type UseFloatingReturn<RT extends ReferenceType$1 = ReferenceType$1> =
  Prettify<
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
 * Stores and manages floating elements in a tree structure.
 * This is a backing store for the `FloatingTree` component.
 */
declare class FloatingTreeStore {
  readonly nodesRef: React.RefObject<Array<FloatingNodeType>>;
  readonly events: FloatingEvents;
  addNode(node: FloatingNodeType): void;
  removeNode(node: FloatingNodeType): void;
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

type TransitionStatus = "starting" | "ending" | "idle" | undefined;

type InteractionType = "mouse" | "touch" | "pen" | "keyboard" | "";

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

type HTMLProps<T = any> = React$1.HTMLAttributes<T> & {
  ref?: React$1.Ref<T> | undefined;
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
) => React$1.ReactElement<unknown>;
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
 * Props shared by all Base UI components.
 * Contains `className` (string or callback taking the component's state as an argument) and `render` (function to customize rendering).
 */
type BaseUIComponentProps<
  ElementType extends React$1.ElementType,
  State,
  RenderFunctionProps = HTMLProps,
> = Omit<
  WithBaseUIEvent<React$1.ComponentPropsWithRef<ElementType>>,
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
    | React$1.ReactElement
    | ComponentRenderFn<RenderFunctionProps, State>
    | undefined;
  /**
   * Style applied to the element, or a function that
   * returns a style object based on the component's state.
   */
  style?:
    | React$1.CSSProperties
    | ((state: State) => React$1.CSSProperties | undefined)
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
  floatingId: string | undefined;
  /**
   * Number of trigger elements currently registered for this popup.
   */
  triggerCount: number;
  /**
   * Whether to prevent unmounting the popup when closed.
   * Useful for interacting with JS animation libraries that control unmounting themselves.
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

interface FloatingRootState {
  open: boolean;
  transitionStatus: TransitionStatus | undefined;
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
  readonly triggerElements: PopupTriggerMap;
}
declare const selectors$1: {
  open: (state: FloatingRootState) => boolean;
  transitionStatus: (state: FloatingRootState) => TransitionStatus;
  domReferenceElement: (state: FloatingRootState) => Element | null;
  referenceElement: (state: FloatingRootState) => ReferenceType | null;
  floatingElement: (state: FloatingRootState) => HTMLElement | null;
  floatingId: (state: FloatingRootState) => string | undefined;
};
interface FloatingRootStoreOptions {
  open: boolean;
  transitionStatus: TransitionStatus | undefined;
  referenceElement: ReferenceType | null;
  floatingElement: HTMLElement | null;
  triggerElements: PopupTriggerMap;
  floatingId: string | undefined;
  /**
   * When true, `setOpen` only forwards to `onOpenChange`.
   * The popup store owns `dispatchOpenChange(...)` in this mode.
   */
  syncOnly: boolean;
  nested: boolean;
  onOpenChange:
    | ((open: boolean, eventDetails: BaseUIChangeEventDetails<string>) => void)
    | undefined;
}
declare class FloatingRootStore extends ReactStore<
  Readonly<FloatingRootState>,
  FloatingRootStoreContext,
  typeof selectors$1
> {
  private readonly syncOnly;
  constructor(options: FloatingRootStoreOptions);
  /**
   * Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
   */
  syncOpenEvent: (newOpen: boolean, event: Event | undefined) => void;
  /**
   * Runs the root-owned side effects for an open state change.
   */
  dispatchOpenChange: (
    newOpen: boolean,
    eventDetails: BaseUIChangeEventDetails<string>,
  ) => void;
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
    | React$1.ReactElement
    | ComponentRenderFn<React$1.HTMLAttributes<any>, State>;
  /**
   * The style to apply to the rendered element.
   * Can be a style object or a function that accepts the state and returns a style object.
   */
  style?:
    | React$1.CSSProperties
    | ((state: State) => React$1.CSSProperties | undefined)
    | undefined;
}

interface UseFloatingPortalNodeProps {
  ref?: React$1.Ref<HTMLDivElement> | undefined;
  container?:
    | HTMLElement
    | ShadowRoot
    | null
    | React$1.RefObject<HTMLElement | ShadowRoot | null>
    | undefined;
  componentProps?: UseRenderElementComponentProps<any> | undefined;
  elementProps?: React$1.HTMLAttributes<HTMLDivElement> | undefined;
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
  type State = FloatingPortalState;
  interface Props<TState> extends BaseUIComponentProps<"div", TState> {
    /**
     * A parent element to render the portal element into.
     */
    container?: UseFloatingPortalNodeProps["container"] | undefined;
  }
}

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
  [key: string]: any;
}
type FloatingRootContext = FloatingRootStore;
type FloatingContext = Omit<
  UseFloatingReturn<ReferenceType>,
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
    | React$1.RefObject<Element | null>
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

interface MenuArrowState {
  /**
   * Whether the menu is currently open.
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
interface MenuArrowProps extends BaseUIComponentProps<"div", MenuArrowState> {}
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
  /**
   * The transition status of the component.
   */
  transitionStatus: TransitionStatus;
}
interface MenuBackdropProps extends BaseUIComponentProps<
  "div",
  MenuBackdropState
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

type State<Payload> = PopupStoreState<Payload> & {
  disabled: boolean;
  modal: boolean;
  openMethod: InteractionType | null;
  allowMouseEnter: boolean;
  parent: MenuParent;
  rootId: string | undefined;
  activeIndex: number | null;
  hoverEnabled: boolean;
  stickIfOpen: boolean;
  instantType: "dismiss" | "click" | "group" | "trigger-change" | undefined;
  openChangeReason: MenuRoot.ChangeEventReason | null;
  floatingTreeRoot: FloatingTreeStore;
  floatingNodeId: string | undefined;
  floatingParentNodeId: string | null;
  itemProps: HTMLProps;
  closeDelay: number;
  keyboardEventRelay: ((event: React$1.KeyboardEvent<any>) => void) | undefined;
  hasViewport: boolean;
};
type Context = PopupStoreContext<MenuRoot.ChangeEventDetails> & {
  readonly positionerRef: React$1.RefObject<HTMLElement | null>;
  readonly popupRef: React$1.RefObject<HTMLElement | null>;
  readonly typingRef: React$1.RefObject<boolean>;
  readonly itemDomElements: React$1.RefObject<(HTMLElement | null)[]>;
  readonly itemLabels: React$1.RefObject<(string | null)[]>;
  allowMouseUpTriggerRef: React$1.RefObject<boolean>;
  readonly triggerFocusTargetRef: React$1.RefObject<HTMLElement | null>;
  readonly beforeContentFocusGuardRef: React$1.RefObject<HTMLElement | null>;
};
declare const selectors: {
  disabled: (state: State<unknown>) => boolean;
  modal: (state: State<unknown>) => boolean;
  openMethod: (state: State<unknown>) => InteractionType | null;
  allowMouseEnter: (state: State<unknown>) => boolean;
  stickIfOpen: (state: State<unknown>) => boolean;
  parent: (state: State<unknown>) => MenuParent;
  rootId: (state: State<unknown>) => string | undefined;
  activeIndex: (state: State<unknown>) => number | null;
  isActive: (state: State<unknown>, itemIndex: number) => boolean;
  hoverEnabled: (state: State<unknown>) => boolean;
  instantType: (
    state: State<unknown>,
  ) => "group" | "click" | "dismiss" | "trigger-change" | undefined;
  lastOpenChangeReason: (
    state: State<unknown>,
  ) => MenuRootChangeEventReason | null;
  floatingTreeRoot: (state: State<unknown>) => FloatingTreeStore;
  floatingNodeId: (state: State<unknown>) => string | undefined;
  floatingParentNodeId: (state: State<unknown>) => string | null;
  itemProps: (state: State<unknown>) => HTMLProps;
  closeDelay: (state: State<unknown>) => number;
  hasViewport: (state: State<unknown>) => boolean;
  keyboardEventRelay: (
    state: State<unknown>,
  ) => React$1.KeyboardEventHandler<any> | undefined;
  open: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    floatingId: string | undefined;
    triggerCount: number;
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
    floatingId: string | undefined;
    triggerCount: number;
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
    floatingId: string | undefined;
    triggerCount: number;
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
    floatingId: string | undefined;
    triggerCount: number;
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
  triggerCount: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    floatingId: string | undefined;
    triggerCount: number;
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
  }) => number;
  preventUnmountingOnClose: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    floatingId: string | undefined;
    triggerCount: number;
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
    floatingId: string | undefined;
    triggerCount: number;
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
    floatingId: string | undefined;
    triggerCount: number;
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
    floatingId: string | undefined;
    triggerCount: number;
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
  popupId: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    floatingId: string | undefined;
    triggerCount: number;
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
  }) => string | undefined;
  isTriggerActive: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      floatingId: string | undefined;
      triggerCount: number;
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
      floatingId: string | undefined;
      triggerCount: number;
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
      floatingId: string | undefined;
      triggerCount: number;
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
      floatingId: string | undefined;
      triggerCount: number;
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
  triggerPopupId: (
    state: {
      open: boolean;
      readonly openProp: boolean | undefined;
      mounted: boolean;
      transitionStatus: TransitionStatus;
      floatingRootContext: FloatingRootContext;
      floatingId: string | undefined;
      triggerCount: number;
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
  ) => string | undefined;
  popupProps: (state: {
    open: boolean;
    readonly openProp: boolean | undefined;
    mounted: boolean;
    transitionStatus: TransitionStatus;
    floatingRootContext: FloatingRootContext;
    floatingId: string | undefined;
    triggerCount: number;
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
    floatingId: string | undefined;
    triggerCount: number;
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
    floatingId: string | undefined;
    triggerCount: number;
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
  Readonly<State<Payload>>,
  Context,
  typeof selectors
> {
  constructor(initialState?: Partial<State<Payload>>);
  setOpen(
    open: boolean,
    eventDetails: Omit<MenuRoot.ChangeEventDetails, "preventUnmountOnClose">,
  ): void;
  static useStore<Payload>(
    externalStore: MenuStore<Payload> | undefined,
    initialState: Partial<State<Payload>>,
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
type ContextMenuRootActions = MenuRoot.Actions;
type ContextMenuRootChangeEventReason = MenuRoot.ChangeEventReason;
type ContextMenuRootChangeEventDetails =
  BaseUIChangeEventDetails<ContextMenuRoot.ChangeEventReason>;
/**
 * A component that creates a context menu activated by right clicking or long pressing.
 * Doesn't render its own HTML element.
 *
 * Documentation: [Base UI Context Menu](https://base-ui.com/react/components/context-menu)
 */
declare function ContextMenuRoot(
  props: ContextMenuRoot.Props,
): react_jsx_runtime.JSX.Element;
declare namespace ContextMenuRoot {
  type State = ContextMenuRootState;
  type Props = ContextMenuRootProps;
  type Actions = ContextMenuRootActions;
  type ChangeEventReason = ContextMenuRootChangeEventReason;
  type ChangeEventDetails = ContextMenuRootChangeEventDetails;
}

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

interface MenuRootState {}
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
   * There's no need to specify this prop when the popover is uncontrolled (that is, when the `open` prop is not set).
   */
  triggerId?: string | null | undefined;
  /**
   * ID of the trigger that the popover is associated with.
   * This is useful in conjunction with the `defaultOpen` prop to create an initially open popover.
   */
  defaultTriggerId?: string | null | undefined;
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
 * Doesn't render its own HTML element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuRoot: <Payload>(
  props: MenuRoot.Props<Payload>,
) => react_jsx_runtime.JSX.Element;
declare namespace MenuRoot {
  type State = MenuRootState;
  type Props<Payload = unknown> = MenuRootProps<Payload>;
  type Actions = MenuRootActions;
  type ChangeEventReason = MenuRootChangeEventReason;
  type ChangeEventDetails = MenuRootChangeEventDetails;
  type Orientation = MenuRootOrientation;
}

interface MenuCheckboxItemState {
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
}
interface MenuCheckboxItemProps
  extends
    NonNativeButtonProps,
    BaseUIComponentProps<"div", MenuCheckboxItemState> {
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
  MenuCheckboxItemIndicatorState
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
  /**
   * Whether the item is highlighted.
   */
  highlighted: boolean;
  /**
   * The transition status of the component.
   */
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

interface MenuGroupProps extends BaseUIComponentProps<"div", MenuGroupState> {
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
  MenuGroupLabelState
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
  extends NonNativeButtonProps, BaseUIComponentProps<"div", MenuItemState> {
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
  MenuLinkItemState
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

interface MenuPopupProps extends BaseUIComponentProps<"div", MenuPopupState> {
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
    | boolean
    | React$1.RefObject<HTMLElement | null>
    | ((closeType: InteractionType) => boolean | HTMLElement | null | void)
    | undefined;
}
interface MenuPopupState {
  /**
   * The transition status of the component.
   */
  transitionStatus: TransitionStatus;
  /**
   * The side of the anchor the component is placed on.
   */
  side: Side;
  /**
   * The alignment of the component relative to the anchor.
   */
  align: Align;
  /**
   * Whether the menu is currently open.
   */
  open: boolean;
  /**
   * Whether the component is nested.
   */
  nested: boolean;
  /**
   * Whether transitions should be skipped.
   */
  instant: "dismiss" | "click" | "group" | "trigger-change" | undefined;
}
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

interface MenuPortalState {}
interface MenuPortalProps extends FloatingPortal.Props<MenuPortalState> {
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
  type State = MenuPortalState;
  type Props = MenuPortalProps;
}

interface MenuPositionerState {
  /**
   * Whether the menu is currently open.
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
   * Whether the component is nested.
   */
  nested: boolean;
  /**
   * Whether CSS transitions should be disabled.
   */
  instant: string | undefined;
}
interface MenuPositionerProps
  extends
    UseAnchorPositioningSharedParameters,
    BaseUIComponentProps<"div", MenuPositionerState> {}
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
  MenuRadioGroupState
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
interface MenuRadioGroupState {
  /**
   * Whether the component is disabled.
   */
  disabled: boolean;
}
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

interface MenuRadioItemState {
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
}
interface MenuRadioItemProps
  extends
    NonNativeButtonProps,
    BaseUIComponentProps<"div", MenuRadioItemState> {
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
  MenuRadioItemIndicatorState
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
  /**
   * Whether the item is highlighted.
   */
  highlighted: boolean;
  /**
   * The transition status of the component.
   */
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
 * Doesn't render its own HTML element.
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
  extends NativeButtonProps, BaseUIComponentProps<"button", MenuTriggerState> {
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
interface MenuTriggerState {
  /**
   * Whether the menu is currently open.
   */
  open: boolean;
  /**
   * Whether the trigger is disabled.
   */
  disabled: boolean;
}
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

/**
 * A viewport for displaying content transitions.
 * This component is only required if one popup can be opened by multiple triggers, its content
 * changes based on the trigger, and switching between them is animated.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Menu](https://base-ui.com/react/components/menu)
 */
declare const MenuViewport: React$1.ForwardRefExoticComponent<
  Omit<MenuViewport.Props, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace MenuViewport {
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
    instant: "dismiss" | "click" | "group" | "trigger-change" | undefined;
  }
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
declare const Separator: React$1.ForwardRefExoticComponent<
  Omit<SeparatorProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace Separator {
  type Props = SeparatorProps;
  type State = SeparatorState;
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

declare namespace index_parts {
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
    MenuViewport as Viewport,
    createMenuHandle as createHandle,
  };
}

export {
  index_parts as Menu,
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
  type MenuPortalState,
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
  type MenuRootState,
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
  MenuViewport,
  useMenuSubmenuRootContext,
};
