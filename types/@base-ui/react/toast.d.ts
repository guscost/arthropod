import * as React from "react";

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

interface ToastPositionerState {
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
}
interface ToastPositionerProps
  extends
    BaseUIComponentProps<"div", ToastPositionerState>,
    Omit<UseAnchorPositioningSharedParameters, "side" | "anchor"> {
  /**
   * An element to position the toast against.
   */
  anchor?: Element | null | undefined;
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
declare const ToastPositioner: React.ForwardRefExoticComponent<
  Omit<ToastPositionerProps, "ref"> & React.RefAttributes<HTMLDivElement>
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
  ref?: React.RefObject<HTMLElement | null> | undefined;
  /**
   * The title of the toast.
   */
  title?: React.ReactNode;
  /**
   * The type of the toast. Used to conditionally style the toast,
   * including conditionally rendering elements based on the type.
   */
  type?: string | undefined;
  /**
   * The description of the toast.
   */
  description?: React.ReactNode;
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
  priority?: "low" | "high" | undefined;
  /**
   * The transition status of the toast.
   */
  transitionStatus?: "starting" | "ending" | undefined;
  /**
   * A counter that increments whenever the toast is updated or upserted.
   */
  updateKey?: number | undefined;
  /**
   * Determines if the toast was limited because the toast limit was exceeded.
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
  actionProps?: React.ComponentPropsWithoutRef<"button"> | undefined;
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
  anchor?: Element | null | undefined;
}
interface UseToastManagerReturnValue<Data extends object = any> {
  toasts: ToastObject<Data>[];
  add: <T extends Data = Data>(options: ToastManagerAddOptions<T>) => string;
  close: (toastId?: string) => void;
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
  "id" | "animation" | "height" | "ref" | "limited" | "updateKey"
> {
  /**
   * The unique identifier for the toast. Adding a toast with an existing ID
   * updates it in place and refreshes its auto-dismiss timer.
   */
  id?: string | undefined;
}
interface ToastManagerUpdateOptions<Data extends object> extends Partial<
  Omit<
    ToastObject<Data>,
    "id" | "ref" | "height" | "transitionStatus" | "limited" | "updateKey"
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
  close: (id?: string) => void;
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

interface ToastProviderState {}
interface ToastProviderProps {
  children?: React.ReactNode;
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
declare const ToastProvider: React.FC<ToastProvider.Props>;
declare namespace ToastProvider {
  type State = ToastProviderState;
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
  ToastViewportState
> {}
/**
 * A container viewport for toasts.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastViewport: React.ForwardRefExoticComponent<
  Omit<ToastViewportProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ToastViewport {
  type State = ToastViewportState;
  type Props = ToastViewportProps;
}

type ToastRootToastObject<Data extends object = any> = ToastObject<Data>;
interface ToastRootState {
  /**
   * The transition status of the component.
   */
  transitionStatus: TransitionStatus;
  /**
   * Whether the toasts in the viewport are expanded.
   */
  expanded: boolean;
  /**
   * Whether the toast was limited because the toast limit was exceeded.
   */
  limited: boolean;
  /**
   * The type of the toast.
   */
  type: string | undefined;
  /**
   * Whether the toast is being swiped.
   */
  swiping: boolean;
  /**
   * The direction the toast is being swiped.
   */
  swipeDirection: "up" | "down" | "left" | "right" | undefined;
}
interface ToastRootProps extends BaseUIComponentProps<"div", ToastRootState> {
  /**
   * The toast to render.
   */
  toast: ToastRootToastObject<any>;
  /**
   * Direction(s) in which the toast can be swiped to dismiss.
   * @default ['down', 'right']
   */
  swipeDirection?:
    | "up"
    | "down"
    | "left"
    | "right"
    | ("up" | "down" | "left" | "right")[]
    | undefined;
}
/**
 * Groups all parts of an individual toast.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastRoot: React.ForwardRefExoticComponent<
  Omit<ToastRootProps, "ref"> & React.RefAttributes<HTMLDivElement>
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
  ToastContentState
> {}
/**
 * A container for the contents of a toast.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastContent: React.ForwardRefExoticComponent<
  Omit<ToastContentProps, "ref"> & React.RefAttributes<HTMLDivElement>
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
  ToastDescriptionState
> {}
/**
 * A description that describes the toast.
 * Can be used as the default message for the toast when no title is provided.
 * Renders a `<p>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastDescription: React.ForwardRefExoticComponent<
  Omit<ToastDescriptionProps, "ref"> & React.RefAttributes<HTMLParagraphElement>
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
interface ToastTitleProps extends BaseUIComponentProps<"h2", ToastTitleState> {}
/**
 * A title that labels the toast.
 * Renders an `<h2>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastTitle: React.ForwardRefExoticComponent<
  Omit<ToastTitleProps, "ref"> & React.RefAttributes<HTMLHeadingElement>
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
  extends NativeButtonProps, BaseUIComponentProps<"button", ToastCloseState> {}
/**
 * Closes the toast when clicked.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastClose: React.ForwardRefExoticComponent<
  Omit<ToastCloseProps, "ref"> & React.RefAttributes<HTMLButtonElement>
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
  extends NativeButtonProps, BaseUIComponentProps<"button", ToastActionState> {}
/**
 * Performs an action when clicked.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastAction: React.ForwardRefExoticComponent<
  Omit<ToastActionProps, "ref"> & React.RefAttributes<HTMLButtonElement>
>;
declare namespace ToastAction {
  type State = ToastActionState;
  type Props = ToastActionProps;
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
declare const FloatingPortalLite: React.ForwardRefExoticComponent<
  Omit<FloatingPortalLite.Props<any>, "ref"> &
    React.RefAttributes<HTMLDivElement>
>;
declare namespace FloatingPortalLite {
  type State = FloatingPortalLiteState;
  type Props<TState> = FloatingPortalLiteProps<TState>;
}

interface ToastPortalState {}
interface ToastPortalProps extends FloatingPortalLite.Props<ToastPortalState> {}
/**
 * A portal element that moves the viewport to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastPortal: React.ForwardRefExoticComponent<
  Omit<FloatingPortalLite.Props<any>, "ref"> &
    React.RefAttributes<HTMLDivElement>
>;
declare namespace ToastPortal {
  type State = ToastPortalState;
  type Props = ToastPortalProps;
}

interface ToastArrowState {
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
interface ToastArrowProps extends BaseUIComponentProps<
  "div",
  ToastArrowState
> {}
/**
 * Displays an element positioned against the toast anchor.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toast](https://base-ui.com/react/components/toast)
 */
declare const ToastArrow: React.ForwardRefExoticComponent<
  Omit<ToastArrowProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ToastArrow {
  type State = ToastArrowState;
  type Props = ToastArrowProps;
}

declare const index_parts_createToastManager: typeof createToastManager;
declare const index_parts_useToastManager: typeof useToastManager;
declare namespace index_parts {
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
    index_parts_createToastManager as createToastManager,
    index_parts_useToastManager as useToastManager,
  };
}

export {
  index_parts as Toast,
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
  type ToastPortalState,
  ToastPositioner,
  type ToastPositionerProps,
  type ToastPositionerState,
  ToastProvider,
  type ToastProviderProps,
  type ToastProviderState,
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
  type UseToastManagerReturnValue,
  createToastManager,
  useToastManager,
};
