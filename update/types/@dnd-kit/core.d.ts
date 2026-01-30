import {
  JSX,
  Context,
  PointerEvent,
  MutableRefObject,
  MouseEvent,
  TouchEvent,
  ContextType,
} from "react";

declare type Coordinates = {
  x: number;
  y: number;
};

declare type Transform = {
  x: number;
  y: number;
  scaleX: number;
  scaleY: number;
};

declare type DeepRequired<T> = {
  [K in keyof T]-?: Required<T[K]>;
};
declare type FirstArgument<T> = T extends (
  firstArg: infer U,
  ...args: Array<any>
) => any
  ? U
  : never;
declare type Without<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

declare type DistanceMeasurement =
  | number
  | Coordinates
  | Pick<Coordinates, "x">
  | Pick<Coordinates, "y">;
declare type Translate = Coordinates;

interface Collision {
  id: UniqueIdentifier;
  data?: Data;
}
interface CollisionDescriptor extends Collision {
  data: {
    droppableContainer: DroppableContainer;
    value: number;
    [key: string]: any;
  };
}
declare type CollisionDetection = (args: {
  active: Active;
  collisionRect: ClientRect;
  droppableRects: RectMap;
  droppableContainers: DroppableContainer[];
  pointerCoordinates: Coordinates | null;
}) => Collision[];

/**
 * Returns the closest rectangles from an array of rectangles to the center of a given
 * rectangle.
 */
declare const closestCenter: CollisionDetection;

/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
 */
declare const closestCorners: CollisionDetection;

/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */
declare const rectIntersection: CollisionDetection;

/**
 * Returns the rectangles that the pointer is hovering over
 */
declare const pointerWithin: CollisionDetection;

/**
 * Returns the first collision, or null if there isn't one.
 * If a property is specified, returns the specified property of the first collision.
 */
declare function getFirstCollision(
  collisions: Collision[] | null | undefined,
): Collision | null;
declare function getFirstCollision<T extends keyof Collision>(
  collisions: Collision[] | null | undefined,
  property: T,
): Collision[T] | null;

interface DistanceConstraint {
  distance: DistanceMeasurement;
  tolerance?: DistanceMeasurement;
}
interface DelayConstraint {
  delay: number;
  tolerance: DistanceMeasurement;
}
interface EventDescriptor {
  name: keyof DocumentEventMap;
  passive?: boolean;
}
interface PointerEventHandlers {
  cancel?: EventDescriptor;
  move: EventDescriptor;
  end: EventDescriptor;
}
declare type PointerActivationConstraint =
  | DelayConstraint
  | DistanceConstraint
  | (DelayConstraint & DistanceConstraint);
interface AbstractPointerSensorOptions extends SensorOptions {
  activationConstraint?: PointerActivationConstraint;
  bypassActivationConstraint?(
    props: Pick<AbstractPointerSensorProps, "activeNode" | "event" | "options">,
  ): boolean;
  onActivation?({ event }: { event: Event }): void;
}
declare type AbstractPointerSensorProps =
  SensorProps<AbstractPointerSensorOptions>;
declare class AbstractPointerSensor implements SensorInstance {
  private props;
  private events;
  autoScrollEnabled: boolean;
  private document;
  private activated;
  private initialCoordinates;
  private timeoutId;
  private listeners;
  private documentListeners;
  private windowListeners;
  constructor(
    props: AbstractPointerSensorProps,
    events: PointerEventHandlers,
    listenerTarget?: Document | EventTarget,
  );
  private attach;
  private detach;
  private handlePending;
  private handleStart;
  private handleMove;
  private handleEnd;
  private handleCancel;
  private handleKeydown;
  private removeTextSelection;
}

interface PointerSensorOptions extends AbstractPointerSensorOptions {}
declare type PointerSensorProps = SensorProps<PointerSensorOptions>;
declare class PointerSensor extends AbstractPointerSensor {
  constructor(props: PointerSensorProps);
  static activators: {
    eventName: "onPointerDown";
    handler: (
      { nativeEvent: event }: PointerEvent,
      { onActivation }: PointerSensorOptions,
    ) => boolean;
  }[];
}

declare enum Response {
  Start = "start",
  Move = "move",
  End = "end",
}
declare type SensorContext = {
  activatorEvent: Event | null;
  active: Active | null;
  activeNode: HTMLElement | null;
  collisionRect: ClientRect | null;
  collisions: Collision[] | null;
  draggableNodes: DraggableNodes;
  draggingNode: HTMLElement | null;
  draggingNodeRect: ClientRect | null;
  droppableRects: RectMap;
  droppableContainers: DroppableContainers;
  over: Over | null;
  scrollableAncestors: Element[];
  scrollAdjustedTranslate: Translate | null;
};
declare type SensorOptions = {};
interface SensorProps<T> {
  active: UniqueIdentifier;
  activeNode: DraggableNode;
  event: Event;
  context: MutableRefObject<SensorContext>;
  options: T;
  onAbort(id: UniqueIdentifier): void;
  onPending(
    id: UniqueIdentifier,
    constraint: PointerActivationConstraint,
    initialCoordinates: Coordinates,
    offset?: Coordinates | undefined,
  ): void;
  onStart(coordinates: Coordinates): void;
  onCancel(): void;
  onMove(coordinates: Coordinates): void;
  onEnd(): void;
}
declare type SensorInstance = {
  autoScrollEnabled: boolean;
};
declare type SensorActivatorFunction<T> = (
  event: any,
  options: T,
  context: {
    active: DraggableNode;
  },
) => boolean | undefined;
declare type Activator<T> = {
  eventName: SyntheticEventName;
  handler: SensorActivatorFunction<T>;
};
declare type Activators<T> = Activator<T>[];
declare type Teardown = () => void;
interface Sensor<T extends Object> {
  new (props: SensorProps<T>): SensorInstance;
  activators: Activators<T>;
  setup?(): Teardown | undefined;
}
declare type Sensors = Sensor<any>[];
declare type SensorDescriptor<T extends Object> = {
  sensor: Sensor<T>;
  options: T;
};
declare type SensorHandler = (
  event: React.SyntheticEvent,
  active: UniqueIdentifier,
) => boolean | void;

declare function useSensor<T extends SensorOptions>(
  sensor: Sensor<T>,
  options?: T,
): SensorDescriptor<T>;

declare function useSensors(
  ...sensors: (SensorDescriptor<any> | undefined | null)[]
): SensorDescriptor<SensorOptions>[];

interface MouseSensorOptions extends AbstractPointerSensorOptions {}
declare type MouseSensorProps = SensorProps<MouseSensorOptions>;
declare class MouseSensor extends AbstractPointerSensor {
  constructor(props: MouseSensorProps);
  static activators: {
    eventName: "onMouseDown";
    handler: (
      { nativeEvent: event }: MouseEvent,
      { onActivation }: MouseSensorOptions,
    ) => boolean;
  }[];
}

interface TouchSensorOptions extends PointerSensorOptions {}
declare class TouchSensor extends AbstractPointerSensor {
  constructor(props: PointerSensorProps);
  static activators: {
    eventName: "onTouchStart";
    handler: (
      { nativeEvent: event }: TouchEvent,
      { onActivation }: TouchSensorOptions,
    ) => boolean;
  }[];
  static setup(): () => void;
}

declare enum KeyboardCode {
  Space = "Space",
  Down = "ArrowDown",
  Right = "ArrowRight",
  Left = "ArrowLeft",
  Up = "ArrowUp",
  Esc = "Escape",
  Enter = "Enter",
  Tab = "Tab",
}
declare type KeyboardCodes = {
  start: KeyboardEvent["code"][];
  cancel: KeyboardEvent["code"][];
  end: KeyboardEvent["code"][];
};
declare type KeyboardCoordinateGetter = (
  event: KeyboardEvent,
  args: {
    active: UniqueIdentifier;
    currentCoordinates: Coordinates;
    context: SensorContext;
  },
) => Coordinates | void;

interface KeyboardSensorOptions extends SensorOptions {
  keyboardCodes?: KeyboardCodes;
  coordinateGetter?: KeyboardCoordinateGetter;
  scrollBehavior?: ScrollBehavior;
  onActivation?({ event }: { event: KeyboardEvent }): void;
}
declare type KeyboardSensorProps = SensorProps<KeyboardSensorOptions>;
declare class KeyboardSensor implements SensorInstance {
  private props;
  autoScrollEnabled: boolean;
  private referenceCoordinates;
  private listeners;
  private windowListeners;
  constructor(props: KeyboardSensorProps);
  private attach;
  private handleStart;
  private handleKeyDown;
  private handleMove;
  private handleEnd;
  private handleCancel;
  private detach;
  static activators: Activators<KeyboardSensorOptions>;
}

declare const defaultKeyboardCoordinateGetter: KeyboardCoordinateGetter;

interface DragEvent {
  activatorEvent: Event;
  active: Active;
  collisions: Collision[] | null;
  delta: Translate;
  over: Over | null;
}
/**
 * Fired if a pending drag was aborted before it started.
 * Only meaningful in the context of activation constraints.
 **/
interface DragAbortEvent {
  id: UniqueIdentifier;
}
/**
 * Fired when a drag is about to start pending activation constraints.
 * @note For pointer events, it will be fired repeatedly with updated
 * coordinates when pointer is moved until the drag starts.
 */
interface DragPendingEvent {
  id: UniqueIdentifier;
  constraint: PointerActivationConstraint;
  initialCoordinates: Coordinates;
  offset?: Coordinates | undefined;
}
interface DragStartEvent extends Pick<DragEvent, "active" | "activatorEvent"> {}
interface DragMoveEvent extends DragEvent {}
interface DragOverEvent extends DragMoveEvent {}
interface DragEndEvent extends DragEvent {}
interface DragCancelEvent extends DragEndEvent {}

declare type UniqueIdentifier = string | number;

declare type SyntheticEventName = keyof Without<
  React.DOMAttributes<any>,
  "children" | "dangerouslySetInnerHTML"
>;

interface ClientRect {
  width: number;
  height: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}

declare enum AutoScrollActivator {
  Pointer = 0,
  DraggableRect = 1,
}
interface Options$1 {
  acceleration?: number;
  activator?: AutoScrollActivator;
  canScroll?: CanScroll;
  enabled?: boolean;
  interval?: number;
  layoutShiftCompensation?:
    | boolean
    | {
        x: boolean;
        y: boolean;
      };
  order?: TraversalOrder;
  threshold?: {
    x: number;
    y: number;
  };
}
declare type CanScroll = (element: Element) => boolean;
declare enum TraversalOrder {
  TreeOrder = 0,
  ReversedTreeOrder = 1,
}

declare type SyntheticListenerMap = Record<string, Function>;

declare enum MeasuringStrategy {
  Always = 0,
  BeforeDragging = 1,
  WhileDragging = 2,
}
declare enum MeasuringFrequency {
  Optimized = "optimized",
}
declare type MeasuringFunction$1 = (element: HTMLElement) => ClientRect;
interface DroppableMeasuring {
  measure: MeasuringFunction$1;
  strategy: MeasuringStrategy;
  frequency: MeasuringFrequency | number;
}

declare type Identifier = UniqueIdentifier | null | undefined;
declare class DroppableContainersMap extends Map<
  UniqueIdentifier,
  DroppableContainer
> {
  get(id: Identifier): DroppableContainer | undefined;
  toArray(): DroppableContainer[];
  getEnabled(): DroppableContainer[];
  getNodeFor(id: Identifier): HTMLElement | undefined;
}

declare type AnyData = Record<string, any>;
declare type Data<T = AnyData> = T & AnyData;
declare type DataRef<T = AnyData> = MutableRefObject<Data<T> | undefined>;
interface DroppableContainer {
  id: UniqueIdentifier;
  key: UniqueIdentifier;
  data: DataRef;
  disabled: boolean;
  node: MutableRefObject<HTMLElement | null>;
  rect: MutableRefObject<ClientRect | null>;
}
interface Active {
  id: UniqueIdentifier;
  data: DataRef;
  rect: MutableRefObject<{
    initial: ClientRect | null;
    translated: ClientRect | null;
  }>;
}
interface Over {
  id: UniqueIdentifier;
  rect: ClientRect;
  disabled: boolean;
  data: DataRef;
}
declare type DraggableNode = {
  id: UniqueIdentifier;
  key: UniqueIdentifier;
  node: MutableRefObject<HTMLElement | null>;
  activatorNode: MutableRefObject<HTMLElement | null>;
  data: DataRef;
};
declare type DraggableNodes = Map<UniqueIdentifier, DraggableNode | undefined>;
declare type DroppableContainers = DroppableContainersMap;
declare type RectMap = Map<UniqueIdentifier, ClientRect>;
interface PublicContextDescriptor {
  activatorEvent: Event | null;
  active: Active | null;
  activeNode: HTMLElement | null;
  activeNodeRect: ClientRect | null;
  collisions: Collision[] | null;
  containerNodeRect: ClientRect | null;
  draggableNodes: DraggableNodes;
  droppableContainers: DroppableContainers;
  droppableRects: RectMap;
  over: Over | null;
  dragOverlay: {
    nodeRef: MutableRefObject<HTMLElement | null>;
    rect: ClientRect | null;
    setRef: (element: HTMLElement | null) => void;
  };
  scrollableAncestors: Element[];
  scrollableAncestorRects: ClientRect[];
  measuringConfiguration: DeepRequired<MeasuringConfiguration>;
  measureDroppableContainers(ids: UniqueIdentifier[]): void;
  measuringScheduled: boolean;
  windowRect: ClientRect | null;
}

declare const PublicContext: Context<PublicContextDescriptor>;

interface Arguments {
  active: Active;
  over: Over | null;
}
interface Announcements {
  onDragStart({ active }: Pick<Arguments, "active">): string | undefined;
  onDragMove?({ active, over }: Arguments): string | undefined;
  onDragOver({ active, over }: Arguments): string | undefined;
  onDragEnd({ active, over }: Arguments): string | undefined;
  onDragCancel({ active, over }: Arguments): string | undefined;
}
interface ScreenReaderInstructions {
  draggable: string;
}

declare const defaultScreenReaderInstructions: ScreenReaderInstructions;
declare const defaultAnnouncements: Announcements;

declare const defaultCoordinates: Coordinates;

interface Options {
  ignoreTransform?: boolean;
}
/**
 * Returns the bounding client rect of an element relative to the viewport.
 */
declare function getClientRect(
  element: Element,
  options?: Options,
): {
  top: number;
  left: number;
  width: number;
  height: number;
  bottom: number;
  right: number;
};

declare function getScrollableAncestors(
  element: Node | null,
  limit?: number,
): Element[];

declare type Modifier = (args: {
  activatorEvent: Event | null;
  active: Active | null;
  activeNodeRect: ClientRect | null;
  draggingNodeRect: ClientRect | null;
  containerNodeRect: ClientRect | null;
  over: Over | null;
  overlayNodeRect: ClientRect | null;
  scrollableAncestors: Element[];
  scrollableAncestorRects: ClientRect[];
  transform: Transform;
  windowRect: ClientRect | null;
}) => Transform;
declare type Modifiers = Modifier[];

declare function applyModifiers(
  modifiers: Modifiers | undefined,
  { transform, ...args }: FirstArgument<Modifier>,
): Transform;

declare type MeasuringFunction = (node: HTMLElement) => ClientRect;
interface Measuring {
  measure: MeasuringFunction;
}
interface DraggableMeasuring extends Measuring {}
interface DragOverlayMeasuring extends Measuring {}
interface MeasuringConfiguration {
  draggable?: Partial<DraggableMeasuring>;
  droppable?: Partial<DroppableMeasuring>;
  dragOverlay?: Partial<DragOverlayMeasuring>;
}

interface Props$2 {
  id?: string;
  accessibility?: {
    announcements?: Announcements;
    container?: Element;
    restoreFocus?: boolean;
    screenReaderInstructions?: ScreenReaderInstructions;
  };
  autoScroll?: boolean | Options$1;
  cancelDrop?: CancelDrop;
  children?: React.ReactNode;
  collisionDetection?: CollisionDetection;
  measuring?: MeasuringConfiguration;
  modifiers?: Modifiers;
  sensors?: SensorDescriptor<any>[];
  onDragAbort?(event: DragAbortEvent): void;
  onDragPending?(event: DragPendingEvent): void;
  onDragStart?(event: DragStartEvent): void;
  onDragMove?(event: DragMoveEvent): void;
  onDragOver?(event: DragOverEvent): void;
  onDragEnd?(event: DragEndEvent): void;
  onDragCancel?(event: DragCancelEvent): void;
}
interface CancelDropArguments extends DragEndEvent {}
declare type CancelDrop = (
  args: CancelDropArguments,
) => boolean | Promise<boolean>;
declare const DndContext: React.NamedExoticComponent<Props$2>;

interface DndMonitorListener {
  onDragAbort?(event: DragAbortEvent): void;
  onDragPending?(event: DragPendingEvent): void;
  onDragStart?(event: DragStartEvent): void;
  onDragMove?(event: DragMoveEvent): void;
  onDragOver?(event: DragOverEvent): void;
  onDragEnd?(event: DragEndEvent): void;
  onDragCancel?(event: DragCancelEvent): void;
}

declare function useDndMonitor(listener: DndMonitorListener): void;

declare type TransitionGetter = (
  activatorEvent: Event | null,
) => React.CSSProperties["transition"] | undefined;
interface Props$1 {
  as: keyof JSX.IntrinsicElements;
  activatorEvent: Event | null;
  adjustScale?: boolean;
  children?: React.ReactNode;
  className?: string;
  id: UniqueIdentifier;
  rect: ClientRect | null;
  style?: React.CSSProperties;
  transition?: string | TransitionGetter;
  transform: Transform;
}

interface SharedParameters {
  active: {
    id: UniqueIdentifier;
    data: Active["data"];
    node: HTMLElement;
    rect: ClientRect;
  };
  dragOverlay: {
    node: HTMLElement;
    rect: ClientRect;
  };
  draggableNodes: DraggableNodes;
  droppableContainers: DroppableContainers;
  measuringConfiguration: DeepRequired<MeasuringConfiguration>;
}
interface KeyframeResolverParameters extends SharedParameters {
  transform: {
    initial: Transform;
    final: Transform;
  };
}
declare type KeyframeResolver = (
  parameters: KeyframeResolverParameters,
) => Keyframe[];
interface DropAnimationOptions {
  keyframes?: KeyframeResolver;
  duration?: number;
  easing?: string;
  sideEffects?: DropAnimationSideEffects | null;
}
declare type DropAnimation = DropAnimationFunction | DropAnimationOptions;
interface DropAnimationFunctionArguments extends SharedParameters {
  transform: Transform;
}
declare type DropAnimationFunction = (
  args: DropAnimationFunctionArguments,
) => Promise<void> | void;
declare type CleanupFunction = () => void;
interface DropAnimationSideEffectsParameters extends SharedParameters {}
declare type DropAnimationSideEffects = (
  parameters: DropAnimationSideEffectsParameters,
) => CleanupFunction | void;
declare type ExtractStringProperties<T> = {
  [K in keyof T]?: T[K] extends string ? string : never;
};
declare type Styles = ExtractStringProperties<CSSStyleDeclaration>;
interface DefaultDropAnimationSideEffectsOptions {
  className?: {
    active?: string;
    dragOverlay?: string;
  };
  styles?: {
    active?: Styles;
    dragOverlay?: Styles;
  };
}
declare const defaultDropAnimationSideEffects: (
  options: DefaultDropAnimationSideEffectsOptions,
) => DropAnimationSideEffects;
declare const defaultDropAnimationConfiguration: Required<DropAnimationOptions>;

interface Props extends Pick<
  Props$1,
  "adjustScale" | "children" | "className" | "style" | "transition"
> {
  dropAnimation?: DropAnimation | null | undefined;
  modifiers?: Modifiers;
  wrapperElement?: keyof JSX.IntrinsicElements;
  zIndex?: number;
}
declare const DragOverlay: React.MemoExoticComponent<
  ({
    adjustScale,
    children,
    dropAnimation: dropAnimationConfig,
    style,
    transition,
    modifiers,
    wrapperElement,
    className,
    zIndex,
  }: Props) => JSX.Element
>;

interface UseDraggableArguments {
  id: UniqueIdentifier;
  data?: Data;
  disabled?: boolean;
  attributes?: {
    role?: string;
    roleDescription?: string;
    tabIndex?: number;
  };
}
interface DraggableAttributes {
  role: string;
  tabIndex: number;
  "aria-disabled": boolean;
  "aria-pressed": boolean | undefined;
  "aria-roledescription": string;
  "aria-describedby": string;
}
declare type DraggableSyntheticListeners = SyntheticListenerMap | undefined;
declare function useDraggable({
  id,
  data,
  disabled,
  attributes,
}: UseDraggableArguments): {
  active: Active | null;
  activatorEvent: Event | null;
  activeNodeRect: ClientRect | null;
  attributes: DraggableAttributes;
  isDragging: boolean;
  listeners: SyntheticListenerMap | undefined;
  node: MutableRefObject<HTMLElement | null>;
  over: Over | null;
  setNodeRef: (element: HTMLElement | null) => void;
  setActivatorNodeRef: (element: HTMLElement | null) => void;
  transform: Transform | null;
};

declare function useDndContext(): PublicContextDescriptor;
declare type UseDndContextReturnValue = ContextType<typeof PublicContext>;

interface ResizeObserverConfig {
  /** Whether the ResizeObserver should be disabled entirely */
  disabled?: boolean;
  /** Resize events may affect the layout and position of other droppable containers.
   * Specify an array of `UniqueIdentifier` of droppable containers that should also be re-measured
   * when this droppable container resizes. Specifying an empty array re-measures all droppable containers.
   */
  updateMeasurementsFor?: UniqueIdentifier[];
  /** Represents the debounce timeout between when resize events are observed and when elements are re-measured */
  timeout?: number;
}
interface UseDroppableArguments {
  id: UniqueIdentifier;
  disabled?: boolean;
  data?: Data;
  resizeObserverConfig?: ResizeObserverConfig;
}
declare function useDroppable({
  data,
  disabled,
  id,
  resizeObserverConfig,
}: UseDroppableArguments): {
  active: Active | null;
  rect: MutableRefObject<ClientRect | null>;
  isOver: boolean;
  node: MutableRefObject<HTMLElement | null>;
  over: Over | null;
  setNodeRef: (element: HTMLElement | null) => void;
};

export {
  type Activator,
  type Activators,
  type Active,
  type Announcements,
  AutoScrollActivator,
  type Options$1 as AutoScrollOptions,
  type CancelDrop,
  type ClientRect,
  type Collision,
  type CollisionDescriptor,
  type CollisionDetection,
  type Data,
  type DataRef,
  type DistanceMeasurement,
  DndContext,
  type PublicContextDescriptor as DndContextDescriptor,
  type Props$2 as DndContextProps,
  type DndMonitorListener as DndMonitorArguments,
  type DndMonitorListener,
  type DragAbortEvent,
  type DragCancelEvent,
  type DragEndEvent,
  type DragMoveEvent,
  type DragOverEvent,
  DragOverlay,
  type Props as DragOverlayProps,
  type DragPendingEvent,
  type DragStartEvent,
  type DraggableAttributes,
  type DraggableMeasuring,
  type DraggableNode,
  type DraggableSyntheticListeners,
  type DropAnimation,
  type DropAnimationFunction,
  type DropAnimationFunctionArguments,
  type KeyframeResolver as DropAnimationKeyframeResolver,
  type DropAnimationSideEffects,
  type DroppableContainer,
  type DroppableContainers,
  type DroppableMeasuring,
  KeyboardCode,
  type KeyboardCodes,
  type KeyboardCoordinateGetter,
  KeyboardSensor,
  type KeyboardSensorOptions,
  type KeyboardSensorProps,
  type MeasuringConfiguration,
  MeasuringFrequency,
  MeasuringStrategy,
  type Modifier,
  type Modifiers,
  MouseSensor,
  type MouseSensorOptions,
  type Over,
  type PointerActivationConstraint,
  type PointerEventHandlers,
  PointerSensor,
  type PointerSensorOptions,
  type PointerSensorProps,
  type ScreenReaderInstructions,
  type Sensor,
  type SensorContext,
  type SensorDescriptor,
  type SensorHandler,
  type SensorInstance,
  type SensorOptions,
  type SensorProps,
  Response as SensorResponse,
  type Sensors,
  TouchSensor,
  type TouchSensorOptions,
  type Translate,
  TraversalOrder,
  type UniqueIdentifier,
  type UseDndContextReturnValue,
  type UseDraggableArguments,
  type UseDroppableArguments,
  applyModifiers,
  closestCenter,
  closestCorners,
  defaultAnnouncements,
  defaultCoordinates,
  defaultDropAnimationConfiguration as defaultDropAnimation,
  defaultDropAnimationSideEffects,
  defaultKeyboardCoordinateGetter,
  defaultScreenReaderInstructions,
  getClientRect,
  getFirstCollision,
  getScrollableAncestors,
  pointerWithin,
  rectIntersection,
  useDndContext,
  useDndMonitor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
};
