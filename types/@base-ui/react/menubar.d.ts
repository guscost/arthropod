import * as React$1 from "react";
import * as react_jsx_runtime from "react/jsx-runtime";

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

declare type AlignedPlacement = `${Side}-${Alignment}`;

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

declare type Placement = Prettify$1<Side | AlignedPlacement>;

declare type Prettify$1<T> = {
  [K in keyof T]: T[K];
} & {};

declare type Rect = Prettify$1<Coords & Dimensions>;

declare type Side = "top" | "right" | "bottom" | "left";

declare type SideObject = {
  [key in Side]: number;
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

type InteractionType = "mouse" | "touch" | "pen" | "keyboard" | "";

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

type TransitionStatus = "starting" | "ending" | "idle" | undefined;

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
interface MenubarProps extends BaseUIComponentProps<"div", MenubarState> {
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

export { Menubar, type MenubarProps, type MenubarState };
