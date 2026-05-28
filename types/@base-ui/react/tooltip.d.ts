import * as react_jsx_runtime from "react/jsx-runtime";
import * as React$1 from "react";

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

type TransitionStatus = "starting" | "ending" | "idle" | undefined;

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
type ReferenceType = Element | VirtualElement;

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

interface FloatingPortalLiteState {}
interface FloatingPortalLiteProps<
  TState,
> extends FloatingPortal.Props<TState> {}
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
  type State = FloatingPortalLiteState;
  type Props<TState> = FloatingPortalLiteProps<TState>;
}

type State<Payload> = PopupStoreState<Payload> & {
  disabled: boolean;
  instantType: "delay" | "dismiss" | "focus" | undefined;
  isInstantPhase: boolean;
  trackCursorAxis: "none" | "x" | "y" | "both";
  disableHoverablePopup: boolean;
  openChangeReason: TooltipRoot.ChangeEventReason | null;
  closeOnClick: boolean;
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
  ) => "delay" | "focus" | "dismiss" | undefined;
  isInstantPhase: (state: State<unknown>) => boolean;
  trackCursorAxis: (state: State<unknown>) => "none" | "both" | "x" | "y";
  disableHoverablePopup: (state: State<unknown>) => boolean;
  lastOpenChangeReason: (
    state: State<unknown>,
  ) => TooltipRootChangeEventReason | null;
  closeOnClick: (state: State<unknown>) => boolean;
  closeDelay: (state: State<unknown>) => number;
  hasViewport: (state: State<unknown>) => boolean;
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
declare class TooltipStore<Payload> extends ReactStore<
  Readonly<State<Payload>>,
  Context,
  typeof selectors
> {
  constructor(
    initialState?: Partial<State<Payload>>,
    floatingId?: string | undefined,
    nested?: boolean,
  );
  setOpen: (
    nextOpen: boolean,
    eventDetails: Omit<TooltipRoot.ChangeEventDetails, "preventUnmountOnClose">,
  ) => void;
  cancelPendingOpen(event: MouseEvent | PointerEvent): void;
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
  trackCursorAxis?: "none" | "x" | "y" | "both" | undefined;
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
   * There's no need to specify this prop when the tooltip is uncontrolled (that is, when the `open` prop is not set).
   */
  triggerId?: string | null | undefined;
  /**
   * ID of the trigger that the tooltip is associated with.
   * This is useful in conjunction with the `defaultOpen` prop to create an initially open tooltip.
   */
  defaultTriggerId?: string | null | undefined;
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
 * Doesn't render its own HTML element.
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
  TooltipTriggerState
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
   * Whether the tooltip should close when this trigger is clicked.
   * @default true
   */
  closeOnClick?: boolean | undefined;
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

interface TooltipPortalState {}
interface TooltipPortalProps extends FloatingPortalLite.Props<TooltipPortalState> {
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
  type State = TooltipPortalState;
  type Props = TooltipPortalProps;
}

interface TooltipPositionerState {
  /**
   * Whether the tooltip is currently open.
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
   * Whether CSS transitions should be disabled.
   */
  instant: string | undefined;
}
interface TooltipPositionerProps
  extends
    BaseUIComponentProps<"div", TooltipPositionerState>,
    Omit<UseAnchorPositioningSharedParameters, "side"> {
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
  /**
   * The side of the anchor the component is placed on.
   */
  side: Side;
  /**
   * The alignment of the component relative to the anchor.
   */
  align: Align;
  /**
   * Whether transitions should be skipped.
   */
  instant: "delay" | "focus" | "dismiss" | undefined;
  /**
   * The transition status of the component.
   */
  transitionStatus: TransitionStatus;
}
interface TooltipPopupProps extends BaseUIComponentProps<
  "div",
  TooltipPopupState
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
  /**
   * Whether transitions should be skipped.
   */
  instant: "delay" | "dismiss" | "focus" | undefined;
}
interface TooltipArrowProps extends BaseUIComponentProps<
  "div",
  TooltipArrowState
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

interface TooltipProviderState {}
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
  type State = TooltipProviderState;
  type Props = TooltipProviderProps;
}

interface TooltipViewportState {
  /**
   * The activation direction of the transitioned content.
   */
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
/**
 * A viewport for displaying content transitions.
 * This component is only required if one popup can be opened by multiple triggers, its content
 * changes based on the trigger, and switching between them is animated.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Tooltip](https://base-ui.com/react/components/tooltip)
 */
declare const TooltipViewport: React$1.ForwardRefExoticComponent<
  Omit<TooltipViewport.Props, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;
declare namespace TooltipViewport {
  interface Props extends BaseUIComponentProps<"div", TooltipViewportState> {
    /**
     * The content to render inside the transition container.
     */
    children?: React$1.ReactNode;
  }
  type State = TooltipViewportState;
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

export {
  index_parts as Tooltip,
  TooltipArrow,
  type TooltipArrowProps,
  type TooltipArrowState,
  TooltipPopup,
  type TooltipPopupProps,
  type TooltipPopupState,
  TooltipPortal,
  type TooltipPortalProps,
  type TooltipPortalState,
  TooltipPositioner,
  type TooltipPositionerProps,
  type TooltipPositionerState,
  TooltipProvider,
  type TooltipProviderProps,
  type TooltipProviderState,
  TooltipRoot,
  type TooltipRootActions,
  type TooltipRootChangeEventDetails,
  type TooltipRootChangeEventReason,
  type TooltipRootProps,
  type TooltipRootState,
  TooltipTrigger,
  type TooltipTriggerProps,
  type TooltipTriggerState,
  TooltipViewport,
  type TooltipViewportState,
};
