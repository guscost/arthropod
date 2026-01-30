import { JSX, MutableRefObject } from "react";

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
interface Transition {
  property: string;
  easing: string;
  duration: number;
}

declare type Translate = Coordinates;

interface Collision {
  id: UniqueIdentifier;
  data?: Data;
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

declare type KeyboardCoordinateGetter = (
  event: KeyboardEvent,
  args: {
    active: UniqueIdentifier;
    currentCoordinates: Coordinates;
    context: SensorContext;
  },
) => Coordinates | void;

declare type UniqueIdentifier = string | number;

interface ClientRect {
  width: number;
  height: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
}

declare type SyntheticListenerMap = Record<string, Function>;

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

interface Disabled {
  draggable?: boolean;
  droppable?: boolean;
}

declare type SortableData = {
  sortable: {
    containerId: UniqueIdentifier;
    items: UniqueIdentifier[];
    index: number;
  };
};

declare type SortingStrategy = (args: {
  activeNodeRect: ClientRect | null;
  activeIndex: number;
  index: number;
  rects: ClientRect[];
  overIndex: number;
}) => Transform | null;

declare function hasSortableData<
  T extends Active | Over | DraggableNode | DroppableContainer,
>(
  entry: T | null | undefined,
): entry is T & {
  data: {
    current: Data<SortableData>;
  };
};

interface Props {
  children: React.ReactNode;
  items: (
    | UniqueIdentifier
    | {
        id: UniqueIdentifier;
      }
  )[];
  strategy?: SortingStrategy;
  id?: string;
  disabled?: boolean | Disabled;
}
declare function SortableContext({
  children,
  id,
  items: userDefinedItems,
  strategy,
  disabled: disabledProp,
}: Props): JSX.Element;

declare type SortableTransition = Pick<Transition, "easing" | "duration">;
declare type AnimateLayoutChanges = (args: {
  active: Active | null;
  containerId: UniqueIdentifier;
  isDragging: boolean;
  isSorting: boolean;
  id: UniqueIdentifier;
  index: number;
  items: UniqueIdentifier[];
  previousItems: UniqueIdentifier[];
  previousContainerId: UniqueIdentifier;
  newIndex: number;
  transition: SortableTransition | null;
  wasDragging: boolean;
}) => boolean;
interface NewIndexGetterArguments {
  id: UniqueIdentifier;
  items: UniqueIdentifier[];
  activeIndex: number;
  overIndex: number;
}
declare type NewIndexGetter = (args: NewIndexGetterArguments) => number;

interface Arguments
  extends
    Omit<UseDraggableArguments, "disabled">,
    Pick<UseDroppableArguments, "resizeObserverConfig"> {
  animateLayoutChanges?: AnimateLayoutChanges;
  disabled?: boolean | Disabled;
  getNewIndex?: NewIndexGetter;
  strategy?: SortingStrategy;
  transition?: SortableTransition | null;
}
declare function useSortable({
  animateLayoutChanges,
  attributes: userDefinedAttributes,
  disabled: localDisabled,
  data: customData,
  getNewIndex,
  id,
  strategy: localStrategy,
  resizeObserverConfig,
  transition,
}: Arguments): {
  active: Active | null;
  activeIndex: number;
  attributes: DraggableAttributes;
  data: SortableData & {
    [x: string]: any;
  };
  rect: React.MutableRefObject<ClientRect | null>;
  index: number;
  newIndex: number;
  items: UniqueIdentifier[];
  isOver: boolean;
  isSorting: boolean;
  isDragging: boolean;
  listeners: SyntheticListenerMap | undefined;
  node: React.MutableRefObject<HTMLElement | null>;
  overIndex: number;
  over: Over | null;
  setNodeRef: (node: HTMLElement | null) => void;
  setActivatorNodeRef: (element: HTMLElement | null) => void;
  setDroppableNodeRef: (element: HTMLElement | null) => void;
  setDraggableNodeRef: (element: HTMLElement | null) => void;
  transform: Transform | null;
  transition: string | undefined;
};

declare const defaultNewIndexGetter: NewIndexGetter;
declare const defaultAnimateLayoutChanges: AnimateLayoutChanges;

declare const horizontalListSortingStrategy: SortingStrategy;

declare const rectSortingStrategy: SortingStrategy;

declare const rectSwappingStrategy: SortingStrategy;

declare const verticalListSortingStrategy: SortingStrategy;

declare const sortableKeyboardCoordinates: KeyboardCoordinateGetter;

/**
 * Move an array item to a different position. Returns a new array with the item moved to the new position.
 */
declare function arrayMove<T>(array: T[], from: number, to: number): T[];

/**
 * Swap an array item to a different position. Returns a new array with the item swapped to the new position.
 */
declare function arraySwap<T>(array: T[], from: number, to: number): T[];

export {
  type AnimateLayoutChanges,
  type NewIndexGetter,
  SortableContext,
  type Props as SortableContextProps,
  type SortableData,
  type SortingStrategy,
  type Arguments as UseSortableArguments,
  arrayMove,
  arraySwap,
  defaultAnimateLayoutChanges,
  defaultNewIndexGetter,
  hasSortableData,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  rectSwappingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
};
