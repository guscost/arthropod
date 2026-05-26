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
interface NavigationMenuRootProps<Value = any> extends BaseUIComponentProps<
  "nav",
  NavigationMenuRootState
> {
  /**
   * A ref to imperative actions.
   */
  actionsRef?: React.RefObject<NavigationMenuRoot.Actions | null> | undefined;
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
  value?: Value | null | undefined;
  /**
   * The uncontrolled value of the item that should be initially selected.
   *
   * To render a controlled navigation menu, use the `value` prop instead.
   * @default null
   */
  defaultValue?: Value | null | undefined;
  /**
   * Callback fired when the value changes.
   */
  onValueChange?:
    | ((
        value: Value | null,
        eventDetails: NavigationMenuRoot.ChangeEventDetails,
      ) => void)
    | undefined;
  /**
   * How long to wait before opening the navigation popup. Specified in milliseconds.
   * @default 50
   */
  delay?: number | undefined;
  /**
   * How long to wait before closing the navigation popup. Specified in milliseconds.
   * @default 50
   */
  closeDelay?: number | undefined;
  /**
   * The orientation of the navigation menu.
   * @default 'horizontal'
   */
  orientation?: "horizontal" | "vertical" | undefined;
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
declare const NavigationMenuRoot: {
  <Value = any>(props: NavigationMenuRoot.Props<Value>): React.JSX.Element;
};
declare namespace NavigationMenuRoot {
  type State = NavigationMenuRootState;
  type Props<TValue = any> = NavigationMenuRootProps<TValue>;
  type Value<TValue = any> = TValue | null;
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
  NavigationMenuListState
> {}
/**
 * Contains a list of navigation menu items.
 * Renders a `<ul>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuList: React.ForwardRefExoticComponent<
  Omit<NavigationMenuListProps, "ref"> & React.RefAttributes<HTMLUListElement>
>;
declare namespace NavigationMenuList {
  type State = NavigationMenuListState;
  type Props = NavigationMenuListProps;
}

interface NavigationMenuItemState {}
interface NavigationMenuItemProps extends BaseUIComponentProps<
  "li",
  NavigationMenuItemState
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
declare const NavigationMenuItem: React.ForwardRefExoticComponent<
  Omit<NavigationMenuItemProps, "ref"> & React.RefAttributes<HTMLLIElement>
>;
declare namespace NavigationMenuItem {
  type State = NavigationMenuItemState;
  type Props = NavigationMenuItemProps;
}

type TransitionStatus = "starting" | "ending" | "idle" | undefined;

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
  NavigationMenuContentState
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
declare const NavigationMenuContent: React.ForwardRefExoticComponent<
  Omit<NavigationMenuContentProps, "ref"> & React.RefAttributes<HTMLDivElement>
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
    BaseUIComponentProps<"button", NavigationMenuTriggerState> {}
/**
 * Opens the navigation menu popup when hovered or clicked, revealing the
 * associated content.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuTrigger: React.ForwardRefExoticComponent<
  Omit<NavigationMenuTriggerProps, "ref"> &
    React.RefAttributes<HTMLButtonElement>
>;
declare namespace NavigationMenuTrigger {
  type State = NavigationMenuTriggerState;
  type Props = NavigationMenuTriggerProps;
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

interface NavigationMenuPortalState {}
interface NavigationMenuPortalProps extends FloatingPortal.Props<NavigationMenuPortalState> {
  /**
   * Whether to keep the portal mounted in the DOM while the popup is hidden.
   * @default false
   */
  keepMounted?: boolean | undefined;
  /**
   * A parent element to render the portal element into.
   */
  container?:
    | FloatingPortal.Props<NavigationMenuPortalState>["container"]
    | undefined;
}
/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuPortal: React.ForwardRefExoticComponent<
  Omit<NavigationMenuPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace NavigationMenuPortal {
  type State = NavigationMenuPortalState;
  type Props = NavigationMenuPortalProps;
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

interface NavigationMenuPositionerState {
  /**
   * Whether the navigation menu is currently open.
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
  instant: boolean;
}
interface NavigationMenuPositionerProps
  extends
    UseAnchorPositioningSharedParameters,
    BaseUIComponentProps<"div", NavigationMenuPositionerState> {}
/**
 * Positions the navigation menu against the currently active trigger.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuPositioner: React.ForwardRefExoticComponent<
  Omit<NavigationMenuPositionerProps, "ref"> &
    React.RefAttributes<HTMLDivElement>
>;
declare namespace NavigationMenuPositioner {
  type State = NavigationMenuPositionerState;
  type Props = NavigationMenuPositionerProps;
}

interface NavigationMenuViewportState {}
interface NavigationMenuViewportProps extends BaseUIComponentProps<
  "div",
  NavigationMenuViewportState
> {}
/**
 * The clipping viewport of the navigation menu's current content.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuViewport: React.ForwardRefExoticComponent<
  Omit<NavigationMenuViewportProps, "ref"> & React.RefAttributes<HTMLDivElement>
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
  NavigationMenuBackdropState
> {}
/**
 * A backdrop for the navigation menu popup.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuBackdrop: React.ForwardRefExoticComponent<
  Omit<NavigationMenuBackdropProps, "ref"> & React.RefAttributes<HTMLDivElement>
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
  NavigationMenuPopupState
> {}
/**
 * A container for the navigation menu contents.
 * Renders a `<nav>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuPopup: React.ForwardRefExoticComponent<
  Omit<NavigationMenuPopupProps, "ref"> & React.RefAttributes<HTMLElement>
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
interface NavigationMenuArrowProps extends BaseUIComponentProps<
  "div",
  NavigationMenuArrowState
> {}
/**
 * Displays an element pointing toward the navigation menu's current anchor.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuArrow: React.ForwardRefExoticComponent<
  Omit<NavigationMenuArrowProps, "ref"> & React.RefAttributes<HTMLDivElement>
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
  NavigationMenuLinkState
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
declare const NavigationMenuLink: React.ForwardRefExoticComponent<
  Omit<NavigationMenuLinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>
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
  NavigationMenuIconState
> {}
/**
 * An icon that indicates that the trigger button opens a menu.
 *
 * Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
 */
declare const NavigationMenuIcon: React.ForwardRefExoticComponent<
  Omit<NavigationMenuIconProps, "ref"> & React.RefAttributes<HTMLSpanElement>
>;
declare namespace NavigationMenuIcon {
  type State = NavigationMenuIconState;
  type Props = NavigationMenuIconProps;
}

declare namespace index_parts {
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

export {
  index_parts as NavigationMenu,
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
  type NavigationMenuPortalState,
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
};
