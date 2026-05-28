import * as React$1 from "react";

declare type AlignedPlacement = `${Side}-${Alignment}`;

declare type Alignment = "start" | "end";

declare type Axis = "x" | "y";

declare type ClientRectObject = Prettify$3<Rect & SideObject>;

declare type Coords = {
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

declare type Placement = Prettify$3<Side | AlignedPlacement>;

declare type Prettify$3<T> = {
  [K in keyof T]: T[K];
} & {};

declare type Rect = Prettify$3<Coords & Dimensions>;

declare type Side = "top" | "right" | "bottom" | "left";

declare type SideObject = {
  [key in Side]: number;
};

declare type Strategy = "absolute" | "fixed";

declare interface AutoPlacementOptions$1 extends DetectOverflowOptions$1 {
  /**
   * The axis that runs along the alignment of the floating element. Determines
   * whether to check for most space along this axis.
   * @default false
   */
  crossAxis?: boolean;
  /**
   * Choose placements with a particular alignment.
   * @default undefined
   */
  alignment?: Alignment | null;
  /**
   * Whether to choose placements with the opposite alignment if the preferred
   * alignment does not fit.
   * @default true
   */
  autoAlignment?: boolean;
  /**
   * Which placements are allowed to be chosen. Placements must be within the
   * `alignment` option if explicitly set.
   * @default allPlacements (variable)
   */
  allowedPlacements?: Array<Placement>;
}

declare type Boundary$1 = any;

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

/**
 * Function option to derive middleware options from state.
 */
declare type Derivable$1<T> = (state: MiddlewareState$1) => T;

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
declare function detectOverflow$1(
  state: MiddlewareState$1,
  options?: DetectOverflowOptions$1 | Derivable$1<DetectOverflowOptions$1>,
): Promise<SideObject>;

declare interface DetectOverflowOptions$1 {
  /**
   * The clipping element(s) or area in which overflow will be checked.
   * @default 'clippingAncestors'
   */
  boundary?: Boundary$1;
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

declare interface FlipOptions$1 extends DetectOverflowOptions$1 {
  /**
   * The axis that runs along the side of the floating element. Determines
   * whether overflow along this axis is checked to perform a flip.
   * @default true
   */
  mainAxis?: boolean;
  /**
   * The axis that runs along the alignment of the floating element. Determines
   * whether overflow along this axis is checked to perform a flip.
   * - `true`: Whether to check cross axis overflow for both side and alignment flipping.
   * - `false`: Whether to disable all cross axis overflow checking.
   * - `'alignment'`: Whether to check cross axis overflow for alignment flipping only.
   * @default true
   */
  crossAxis?: boolean | "alignment";
  /**
   * Placements to try sequentially if the preferred `placement` does not fit.
   * @default [oppositePlacement] (computed)
   */
  fallbackPlacements?: Array<Placement>;
  /**
   * What strategy to use when no placements fit.
   * @default 'bestFit'
   */
  fallbackStrategy?: "bestFit" | "initialPlacement";
  /**
   * Whether to allow fallback to the perpendicular axis of the preferred
   * placement, and if so, which side direction along the axis to prefer.
   * @default 'none' (disallow fallback)
   */
  fallbackAxisSideDirection?: "none" | "start" | "end";
  /**
   * Whether to flip to placements with the opposite alignment if they fit
   * better.
   * @default true
   */
  flipAlignment?: boolean;
}

declare type FloatingElement$1 = any;

declare interface HideOptions$1 extends DetectOverflowOptions$1 {
  /**
   * The strategy used to determine when to hide the floating element.
   */
  strategy?: "referenceHidden" | "escaped";
}

declare interface InlineOptions {
  /**
   * Viewport-relative `x` coordinate to choose a `ClientRect`.
   * @default undefined
   */
  x?: number;
  /**
   * Viewport-relative `y` coordinate to choose a `ClientRect`.
   * @default undefined
   */
  y?: number;
  /**
   * Represents the padding around a disjoined rect when choosing it.
   * @default 2
   */
  padding?: Padding;
}

declare type LimitShiftOffset =
  | number
  | {
      /**
       * Offset the limiting of the axis that runs along the alignment of the
       * floating element.
       */
      mainAxis?: number;
      /**
       * Offset the limiting of the axis that runs along the side of the
       * floating element.
       */
      crossAxis?: number;
    };

declare interface LimitShiftOptions {
  /**
   * Offset when limiting starts. `0` will limit when the opposite edges of the
   * reference and floating elements are aligned.
   * - positive = start limiting earlier
   * - negative = start limiting later
   */
  offset?: LimitShiftOffset | Derivable$1<LimitShiftOffset>;
  /**
   * Whether to limit the axis that runs along the alignment of the floating
   * element.
   */
  mainAxis?: boolean;
  /**
   * Whether to limit the axis that runs along the side of the floating element.
   */
  crossAxis?: boolean;
}

declare type Middleware$1 = {
  name: string;
  options?: any;
  fn: (state: MiddlewareState$1) => Promisable$1<MiddlewareReturn>;
};

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

declare interface MiddlewareReturn extends Partial<Coords> {
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

declare interface MiddlewareState$1 extends Coords {
  initialPlacement: Placement;
  placement: Placement;
  strategy: Strategy;
  middlewareData: MiddlewareData;
  elements: Elements$1;
  rects: ElementRects;
  platform: {
    detectOverflow: typeof detectOverflow$1;
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
    boundary: Boundary$1;
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
  detectOverflow?: typeof detectOverflow$1;
}

declare type Promisable$1<T> = T | Promise<T>;

declare type ReferenceElement$1 = any;

declare type RootBoundary = "viewport" | "document" | Rect;

declare interface ShiftOptions$1 extends DetectOverflowOptions$1 {
  /**
   * The axis that runs along the alignment of the floating element. Determines
   * whether overflow along this axis is checked to perform shifting.
   * @default true
   */
  mainAxis?: boolean;
  /**
   * The axis that runs along the side of the floating element. Determines
   * whether overflow along this axis is checked to perform shifting.
   * @default false
   */
  crossAxis?: boolean;
  /**
   * Accepts a function that limits the shifting done in order to prevent
   * detachment.
   */
  limiter?: {
    fn: (state: MiddlewareState$1) => Coords;
    options?: any;
  };
}

declare interface SizeOptions$1 extends DetectOverflowOptions$1 {
  /**
   * Function that is called to perform style mutations to the floating element
   * to change its size.
   * @default undefined
   */
  apply?(
    args: MiddlewareState$1 & {
      availableWidth: number;
      availableHeight: number;
    },
  ): void | Promise<void>;
}

declare function getOverflowAncestors(
  node: Node,
  list?: OverflowAncestors,
  traverseIframes?: boolean,
): OverflowAncestors;

declare type OverflowAncestors = Array<Element | Window | VisualViewport>;

declare type AutoPlacementOptions = Prettify$2<
  Omit<AutoPlacementOptions$1, "boundary"> & DetectOverflowOptions
>;

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
declare function autoUpdate(
  reference: ReferenceElement,
  floating: FloatingElement | null,
  update: () => void,
  options?: AutoUpdateOptions,
): () => void;

declare interface AutoUpdateOptions {
  /**
   * Whether to update the position when an overflow ancestor is scrolled.
   * @default true
   */
  ancestorScroll?: boolean;
  /**
   * Whether to update the position when an overflow ancestor is resized. This
   * uses the native `resize` event.
   * @default true
   */
  ancestorResize?: boolean;
  /**
   * Whether to update the position when either the reference or floating
   * elements resized. This uses a `ResizeObserver`.
   * @default true
   */
  elementResize?: boolean;
  /**
   * Whether to update the position when the reference relocated on the screen
   * due to layout shift.
   * @default true
   */
  layoutShift?: boolean;
  /**
   * Whether to update on every animation frame if necessary. Only use if you
   * need to update the position in response to an animation using transforms.
   * @default false
   */
  animationFrame?: boolean;
}

/**
 * The clipping boundary area of the floating element.
 */
declare type Boundary = "clippingAncestors" | Element | Array<Element> | Rect;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
declare const computePosition: (
  reference: ReferenceElement,
  floating: FloatingElement,
  options?: Partial<ComputePositionConfig>,
) => Promise<ComputePositionReturn>;

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

declare type Derivable<T> = (state: MiddlewareState) => T;

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
declare const detectOverflow: (
  state: MiddlewareState,
  options?: DetectOverflowOptions | Derivable<DetectOverflowOptions>,
) => Promise<SideObject>;

declare type DetectOverflowOptions = Prettify$2<
  Omit<DetectOverflowOptions$1, "boundary"> & {
    boundary?: Boundary;
  }
>;

declare interface Elements {
  reference: ReferenceElement;
  floating: FloatingElement;
}

declare type FlipOptions = Prettify$2<
  Omit<FlipOptions$1, "boundary"> & DetectOverflowOptions
>;

declare type FloatingElement = HTMLElement;

declare type HideOptions = Prettify$2<
  Omit<HideOptions$1, "boundary"> & DetectOverflowOptions
>;

declare type Middleware = Prettify$2<
  Omit<Middleware$1, "fn"> & {
    fn(state: MiddlewareState): Promisable<MiddlewareReturn>;
  }
>;

/**
 * @deprecated use `MiddlewareState` instead.
 */
declare type MiddlewareArguments = MiddlewareState;

declare type MiddlewareState = Prettify$2<
  Omit<MiddlewareState$1, "elements"> & {
    elements: Elements;
  }
>;

declare interface NodeScroll {
  scrollLeft: number;
  scrollTop: number;
}

declare type OffsetOptions = OffsetValue | Derivable<OffsetValue>;

declare type OffsetValue =
  | number
  | {
      /**
       * The axis that runs along the side of the floating element. Represents
       * the distance (gutter or margin) between the reference and floating
       * element.
       * @default 0
       */
      mainAxis?: number;
      /**
       * The axis that runs along the alignment of the floating element.
       * Represents the skidding between the reference and floating element.
       * @default 0
       */
      crossAxis?: number;
      /**
       * The same axis as `crossAxis` but applies only to aligned placements
       * and inverts the `end` alignment. When set to a number, it overrides the
       * `crossAxis` value.
       *
       * A positive number will move the floating element in the direction of
       * the opposite edge to the one that is aligned, while a negative number
       * the reverse.
       * @default null
       */
      alignmentAxis?: number | null;
    };

declare interface Platform {
  getElementRects: (args: {
    reference: ReferenceElement;
    floating: FloatingElement;
    strategy: Strategy;
  }) => Promisable<ElementRects>;
  getClippingRect: (args: {
    element: Element;
    boundary: Boundary;
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
  detectOverflow?: typeof detectOverflow$1;
}

declare const platform: Platform;

declare type Prettify$2<T> = {
  [K in keyof T]: T[K];
} & {};

declare type Promisable<T> = T | Promise<T>;

declare type ReferenceElement = Element | VirtualElement;

declare type ShiftOptions = Prettify$2<
  Omit<ShiftOptions$1, "boundary"> & DetectOverflowOptions
>;

declare type SizeOptions = Prettify$2<
  Omit<SizeOptions$1, "apply" | "boundary"> &
    DetectOverflowOptions & {
      /**
       * Function that is called to perform style mutations to the floating element
       * to change its size.
       * @default undefined
       */
      apply?(
        args: MiddlewareState & {
          availableWidth: number;
          availableHeight: number;
        },
      ): Promisable<void>;
    }
>;

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */
declare interface VirtualElement {
  getBoundingClientRect(): ClientRectObject;
  getClientRects?(): Array<ClientRectObject> | DOMRectList;
  contextElement?: Element;
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */
declare const arrow: (
  options: ArrowOptions | Derivable<ArrowOptions>,
  deps?: React$1.DependencyList,
) => Middleware;

declare interface ArrowOptions {
  /**
   * The arrow element to be positioned.
   * @default undefined
   */
  element: React$1.MutableRefObject<Element | null> | Element | null;
  /**
   * The padding between the arrow element and the floating element edges.
   * Useful when the floating element has rounded corners.
   * @default 0
   */
  padding?: Padding;
}

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
declare const autoPlacement: (
  options?: AutoPlacementOptions | Derivable<AutoPlacementOptions>,
  deps?: React$1.DependencyList,
) => Middleware;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
declare const flip: (
  options?: FlipOptions | Derivable<FlipOptions>,
  deps?: React$1.DependencyList,
) => Middleware;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
declare const hide: (
  options?: HideOptions | Derivable<HideOptions>,
  deps?: React$1.DependencyList,
) => Middleware;

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
declare const inline: (
  options?: InlineOptions | Derivable<InlineOptions>,
  deps?: React$1.DependencyList,
) => Middleware;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
declare const limitShift: (
  options?: LimitShiftOptions | Derivable<LimitShiftOptions>,
  deps?: React$1.DependencyList,
) => {
  fn: (state: MiddlewareState) => Coords;
  options: any;
};

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
declare const offset: (
  options?: OffsetOptions,
  deps?: React$1.DependencyList,
) => Middleware;

declare type Prettify$1<T> = {
  [K in keyof T]: T[K];
} & {};

declare type ReferenceType$1 = Element | VirtualElement;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
declare const shift: (
  options?: ShiftOptions | Derivable<ShiftOptions>,
  deps?: React$1.DependencyList,
) => Middleware;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
declare const size: (
  options?: SizeOptions | Derivable<SizeOptions>,
  deps?: React$1.DependencyList,
) => Middleware;

declare type UseFloatingData$1 = Prettify$1<
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
    UseFloatingData$1 & {
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
type S = PopupStoreState<unknown>;
declare const popupStoreSelectors: {
  open: (state: S) => boolean;
  mounted: (state: S) => boolean;
  transitionStatus: (state: S) => TransitionStatus;
  floatingRootContext: (state: S) => FloatingRootStore;
  triggerCount: (state: S) => number;
  preventUnmountingOnClose: (state: S) => boolean;
  payload: (state: S) => unknown;
  activeTriggerId: (state: S) => string | null;
  activeTriggerElement: (state: S) => Element | null;
  popupId: (state: S) => string | undefined;
  /**
   * Whether the trigger with the given ID was used to open the popup.
   */
  isTriggerActive: (state: S, triggerId: string | undefined) => boolean;
  /**
   * Whether the popup is open and was activated by a trigger with the given ID.
   */
  isOpenedByTrigger: (state: S, triggerId: string | undefined) => boolean;
  /**
   * Whether the popup is mounted and was activated by a trigger with the given ID.
   */
  isMountedByTrigger: (state: S, triggerId: string | undefined) => boolean;
  triggerProps: (state: S, isActive: boolean) => HTMLProps;
  /**
   * Popup id for the trigger that currently owns the open popup.
   */
  triggerPopupId: (
    state: S,
    triggerId: string | undefined,
  ) => string | undefined;
  popupProps: (state: S) => HTMLProps;
  popupElement: (state: S) => HTMLElement | null;
  positionerElement: (state: S) => HTMLElement | null;
};
type PopupStoreSelectors = typeof popupStoreSelectors;

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
declare const selectors: {
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
  typeof selectors
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

interface FloatingFocusManagerProps {
  children: React$1.JSX.Element;
  /**
   * The floating context returned from `useFloatingRootContext`.
   */
  context: FloatingRootContext | FloatingContext;
  /**
   * The interaction type used to open the floating element.
   */
  openInteractionType?: InteractionType | null | undefined;
  /**
   * Whether or not the focus manager should be disabled. Useful to delay focus
   * management until after a transition completes or some other conditional
   * state.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * Determines the element to focus when the floating element is opened.
   *
   * - `false`: Do not move focus.
   * - `true`: Move focus based on the default behavior (first tabbable element or floating element).
   * - `RefObject`: Move focus to the ref element.
   * - `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).
   *   Return an element to focus, `true` to use default behavior, `null` to fallback to default behavior,
   *   or `false`/`undefined` to do nothing.
   * @default true
   */
  initialFocus?:
    | boolean
    | React$1.RefObject<HTMLElement | null>
    | ((openType: InteractionType) => boolean | HTMLElement | null | void)
    | undefined;
  /**
   * Determines the element to focus when the floating element is closed.
   *
   * - `false`: Do not move focus.
   * - `true`: Move focus based on the default behavior (reference or previously focused element).
   * - `RefObject`: Move focus to the ref element.
   * - `function`: Called with the interaction type (`mouse`, `touch`, `pen`, or `keyboard`).
   *   Return an element to focus, `true` to use the default behavior, `null` to fallback to default behavior,
   *   or `false`/`undefined` to do nothing.
   * @default true
   */
  returnFocus?:
    | boolean
    | React$1.RefObject<HTMLElement | null>
    | ((closeType: InteractionType) => boolean | HTMLElement | null | void)
    | undefined;
  /**
   * Determines where focus should be restored if focus inside the floating element is lost
   * (such as due to the removal of the currently focused element from the DOM).
   *
   * - `true`: restore to the nearest tabbable element inside the floating tree (previous
   *   tabbable if possible, otherwise the last tabbable, then the floating element itself)
   * - `'popup'`: restore directly to the floating element (container) itself
   * - `false`: do not restore focus
   * @default false
   */
  restoreFocus?: boolean | "popup" | undefined;
  /**
   * Determines if focus is “modal”, meaning focus is fully trapped inside the
   * floating element and outside content cannot be accessed. This includes
   * screen reader virtual cursors.
   * @default true
   */
  modal?: boolean | undefined;
  /**
   * Determines whether `focusout` event listeners that control whether the
   * floating element should be closed if the focus moves outside of it are
   * attached to the reference and floating elements. This affects non-modal
   * focus management.
   * @default true
   */
  closeOnFocusOut?: boolean | undefined;
  /**
   * Overrides the element to focus when tabbing forward out of the floating element.
   */
  nextFocusableElement?:
    | HTMLElement
    | React$1.RefObject<HTMLElement | null>
    | null
    | undefined;
  /**
   * Overrides the element to focus when tabbing backward out of the floating element.
   */
  previousFocusableElement?:
    | HTMLElement
    | React$1.RefObject<HTMLElement | null>
    | null
    | undefined;
  /**
   * Ref to the focus guard preceding the floating element content.
   * Can be useful to focus the popup programmatically.
   */
  beforeContentFocusGuardRef?:
    | React$1.RefObject<HTMLSpanElement | null>
    | undefined;
  /**
   * External FloatingTree to use when the one provided by context can't be used.
   */
  externalTree?: FloatingTreeStore | undefined;
  /**
   * Additional elements that should be treated as part of the floating subtree
   * even if they are rendered outside the floating element itself.
   */
  getInsideElements?: (() => Array<Element | null | undefined>) | undefined;
}
/**
 * Provides focus management for the floating element.
 * @see https://floating-ui.com/docs/FloatingFocusManager
 * @internal
 */
declare function FloatingFocusManager(
  props: FloatingFocusManagerProps,
): React$1.JSX.Element;

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
interface UseFloatingPortalNodeResult {
  portalNode: HTMLElement | null;
  portalSubtree: React$1.ReactPortal | null;
}
declare function useFloatingPortalNode(
  props?: UseFloatingPortalNodeProps,
): UseFloatingPortalNodeResult;
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

interface UseClientPointProps {
  /**
   * Whether the Hook is enabled, including all internal Effects and event
   * handlers.
   * @default true
   */
  enabled?: boolean | undefined;
  /**
   * Whether to restrict the client point to an axis and use the reference
   * element (if it exists) as the other axis. This can be useful if the
   * floating element is also interactive.
   * @default 'both'
   */
  axis?: "x" | "y" | "both" | undefined;
}
/**
 * Positions the floating element relative to a client point (in the viewport),
 * such as the mouse position. By default, it follows the mouse cursor.
 * @see https://floating-ui.com/docs/useClientPoint
 */
declare function useClientPoint(
  context: FloatingRootContext | FloatingContext,
  props?: UseClientPointProps,
): ElementProps;

type PressType = "intentional" | "sloppy";
interface UseDismissProps {
  /**
   * Whether the Hook is enabled, including all internal Effects and event
   * handlers.
   * @default true
   */
  enabled?: boolean | undefined;
  /**
   * Whether to dismiss the floating element upon pressing the `esc` key.
   * @default true
   */
  escapeKey?: boolean | undefined;
  /**
   * Whether to dismiss the floating element upon pressing the reference
   * element. You likely want to ensure the `move` option in the `useHover()`
   * Hook has been disabled when this is in use.
   *
   * A lazy getter invoked when handling reference press events.
   * @default false
   */
  referencePress?: (() => boolean) | undefined;
  /**
   * The type of event to use to determine a "press".
   * - `down` is `pointerdown` on mouse input, but special iOS-like touch handling on touch input.
   * - `up` is lazy on both mouse + touch input (equivalent to `click`).
   * @default 'down'
   */
  referencePressEvent?: PressType | undefined;
  /**
   * Whether to dismiss the floating element upon pressing outside of the
   * floating element.
   * If you have another element, like a toast, that is rendered outside the
   * floating element's React tree and don't want the floating element to close
   * when pressing it, you can guard the check like so:
   * ```jsx
   * useDismiss(context, {
   *   outsidePress: (event) => !event.target.closest('.toast'),
   * });
   * ```
   * @default true
   */
  outsidePress?:
    | boolean
    | ((event: MouseEvent | TouchEvent) => boolean)
    | undefined;
  /**
   * The type of event to use to determine an outside "press".
   * - `intentional` requires the user to click outside intentionally, firing on `pointerup` for mouse, and requiring minimal `touchmove`s for touch.
   * - `sloppy` fires on `pointerdown` for mouse, while for touch it fires on `touchend` (within 1 second) or while scrolling away after `touchstart`.
   */
  outsidePressEvent?:
    | PressType
    | {
        mouse: PressType;
        touch: PressType;
      }
    | (() =>
        | PressType
        | {
            mouse: PressType;
            touch: PressType;
          })
    | undefined;
  /**
   * Determines whether event listeners bubble upwards through a tree of
   * floating elements.
   */
  bubbles?:
    | boolean
    | {
        escapeKey?: boolean | undefined;
        outsidePress?: boolean | undefined;
      }
    | undefined;
  /**
   * External FloatingTree to use when the one provided by context can't be used.
   */
  externalTree?: FloatingTreeStore | undefined;
}
/**
 * Closes the floating element when a dismissal is requested — by default, when
 * the user presses the `escape` key or outside of the floating element.
 * @see https://floating-ui.com/docs/useDismiss
 */
declare function useDismiss(
  context: FloatingRootContext | FloatingContext,
  props?: UseDismissProps,
): ElementProps;

interface UseFocusProps {
  /**
   * Whether the Hook is enabled, including all internal Effects and event
   * handlers.
   * @default true
   */
  enabled?: boolean | undefined;
  /**
   * Waits for the specified time before opening.
   * @default undefined
   */
  delay?: number | (() => number | undefined) | undefined;
}
/**
 * Opens the floating element while the reference element has focus, like CSS
 * `:focus`.
 * @see https://floating-ui.com/docs/useFocus
 */
declare function useFocus(
  context: FloatingRootContext | FloatingContext,
  props?: UseFocusProps,
): ElementProps;

interface HandleCloseOptions {
  blockPointerEvents?: boolean | undefined;
  getScope?: (() => HTMLElement | SVGSVGElement | null) | undefined;
}
interface HandleCloseContext {
  x: number | null;
  y: number | null;
  placement: Placement | null;
  elements: Pick<ExtendedElements, "domReference" | "floating">;
  onClose: () => void;
  nodeId?: string | undefined;
  tree?: FloatingTreeType | null | undefined;
  leave?: boolean | undefined;
}
type HandleCloseContextBase = Omit<
  HandleCloseContext,
  "onClose" | "tree" | "x" | "y"
>;
interface HandleClose {
  (context: HandleCloseContext): (event: MouseEvent) => void;
  __options?: HandleCloseOptions | undefined;
}

interface UseHoverProps {
  /**
   * Accepts an event handler that runs on `mousemove` to control when the
   * floating element closes once the cursor leaves the reference element.
   * @default null
   */
  handleClose?: HandleClose | null | undefined;
  /**
   * Waits until the user's cursor is at “rest” over the reference element
   * before changing the `open` state.
   * @default 0
   */
  restMs?: number | (() => number) | undefined;
  /**
   * Waits for the specified time when the event listener runs before changing
   * the `open` state.
   * @default 0
   */
  delay?: Delay | (() => Delay) | undefined;
  /**
   * Whether moving the cursor over the floating element will open it, without a
   * regular hover event required.
   * @default true
   */
  move?: boolean | undefined;
}
/**
 * Opens the floating element while hovering over the reference element, like
 * CSS `:hover`.
 * @see https://floating-ui.com/docs/useHover
 */
declare function useHover(
  context: FloatingRootContext | FloatingContext,
  props?: UseHoverProps,
): ElementProps;

type UseHoverFloatingInteractionProps = {
  /**
   * Whether the Hook is enabled, including all internal Effects and event
   * handlers.
   * @default true
   */
  enabled?: boolean | undefined;
  /**
   * Waits for the specified time when the event listener runs before changing
   * the `open` state.
   * @default 0
   */
  closeDelay?: number | (() => number) | undefined;
  /**
   * Tree node id override for floating elements that participate in the tree
   * without a `FloatingContext`, such as inline nested navigation menus.
   */
  nodeId?: string | undefined;
};
/**
 * Provides hover interactions that should be attached to the floating element.
 */
declare function useHoverFloatingInteraction(
  context: FloatingRootContext | FloatingContext,
  parameters?: UseHoverFloatingInteractionProps,
): void;

interface UseHoverReferenceInteractionProps {
  enabled?: boolean | undefined;
  handleClose?: HandleClose | null | undefined;
  restMs?: number | (() => number) | undefined;
  delay?: Delay | (() => Delay) | undefined;
  move?: boolean | undefined;
  mouseOnly?: boolean | undefined;
  externalTree?: FloatingTreeStore | undefined;
  /**
   * Whether the hook controls the active trigger. When false, the props are
   * returned under the `trigger` key so they can be applied to inactive
   * triggers via `getTriggerProps`.
   * @default true
   */
  isActiveTrigger?: boolean | undefined;
  triggerElementRef?: Readonly<React$1.RefObject<Element | null>> | undefined;
  getHandleCloseContext?: (() => HandleCloseContextBase | null) | undefined;
  isClosing?: (() => boolean) | undefined;
  /**
   * Called before each hover-driven open attempt (immediate, delayed, and rest-ms
   * paths). Return `false` to veto; any other return value permits the open.
   */
  shouldOpen?: (() => boolean) | undefined;
}
/**
 * Provides hover interactions that should be attached to reference or trigger
 * elements.
 */
declare function useHoverReferenceInteraction(
  context: FloatingRootContext | FloatingContext,
  props?: UseHoverReferenceInteractionProps,
): HTMLProps | undefined;

interface UseListNavigationProps {
  /**
   * A ref that holds an array of list items.
   * @default empty list
   */
  listRef: React$1.RefObject<Array<HTMLElement | null>>;
  /**
   * The index of the currently active (focused or highlighted) item, which may
   * or may not be selected.
   * @default null
   */
  activeIndex: number | null;
  /**
   * A callback that is called when the user navigates to a new active item,
   * passed in a new `activeIndex`.
   */
  onNavigate?:
    | ((
        activeIndex: number | null,
        event: React$1.SyntheticEvent | undefined,
      ) => void)
    | undefined;
  /**
   * Whether the Hook is enabled, including all internal Effects and event
   * handlers.
   * @default true
   */
  enabled?: boolean | undefined;
  /**
   * The currently selected item index, which may or may not be active.
   * @default null
   */
  selectedIndex?: number | null | undefined;
  /**
   * Whether to focus the item upon opening the floating element. 'auto' infers
   * what to do based on the input type (keyboard vs. pointer), while a boolean
   * value will force the value.
   * @default 'auto'
   */
  focusItemOnOpen?: boolean | "auto" | undefined;
  /**
   * Whether hovering an item synchronizes the focus.
   * @default true
   */
  focusItemOnHover?: boolean | undefined;
  /**
   * Whether pressing an arrow key on the navigation's main axis opens the
   * floating element.
   * @default true
   */
  openOnArrowKeyDown?: boolean | undefined;
  /**
   * By default elements with either a `disabled` or `aria-disabled` attribute
   * are skipped in the list navigation — however, this requires the items to
   * be rendered.
   * This prop allows you to manually specify indices which should be disabled,
   * overriding the default logic.
   * For Windows-style select popups, where the menu does not open when
   * navigating via arrow keys, specify an empty array.
   * @default undefined
   */
  disabledIndices?:
    | ReadonlyArray<number>
    | ((index: number) => boolean)
    | undefined;
  /**
   * Determines whether focus can escape the list, such that nothing is selected
   * after navigating beyond the boundary of the list. In some
   * autocomplete/combobox components, this may be desired, as screen
   * readers will return to the input.
   * `loopFocus` must be `true`.
   * @default false
   */
  allowEscape?: boolean | undefined;
  /**
   * Determines whether focus should loop around when navigating past the first
   * or last item.
   * @default false
   */
  loopFocus?: boolean | undefined;
  /**
   * If the list is nested within another one (e.g. a nested submenu), the
   * navigation semantics change.
   * @default false
   */
  nested?: boolean | undefined;
  /**
   * Allows to specify the orientation of the parent list, which is used to
   * determine the direction of the navigation.
   * This is useful when list navigation is used within a Composite,
   * as the hook can't determine the orientation of the parent list automatically.
   */
  parentOrientation?: UseListNavigationProps["orientation"] | undefined;
  /**
   * Whether the direction of the floating element's navigation is in RTL
   * layout.
   * @default false
   */
  rtl?: boolean | undefined;
  /**
   * Whether the focus is virtual (using `aria-activedescendant`).
   * Use this if you need focus to remain on the reference element
   * (such as an input), but allow arrow keys to navigate list items.
   * This is common in autocomplete listbox components.
   * Your virtually-focused list items must have a unique `id` set on them.
   * @default false
   */
  virtual?: boolean | undefined;
  /**
   * The orientation in which navigation occurs.
   * @default 'vertical'
   */
  orientation?: "vertical" | "horizontal" | "both" | undefined;
  /**
   * Specifies how many columns the list has (i.e., it's a grid). Use an
   * orientation of 'horizontal' (e.g. for an emoji picker/date picker, where
   * pressing ArrowRight or ArrowLeft can change rows), or 'both' (where the
   * current row cannot be escaped with ArrowRight or ArrowLeft, only ArrowUp
   * and ArrowDown).
   * @default 1
   */
  cols?: number | undefined;
  /**
   * The id of the root component.
   */
  id?: string | undefined;
  /**
   * Whether to clear the active index when the pointer leaves an item.
   * @default true
   */
  resetOnPointerLeave?: boolean | undefined;
  /**
   * External FloatingTree to use when the one provided by context can't be used.
   */
  externalTree?: FloatingTreeStore | undefined;
}
/**
 * Adds arrow key-based navigation of a list of items, either using real DOM
 * focus or virtual focus.
 * @see https://floating-ui.com/docs/useListNavigation
 */
declare function useListNavigation(
  context: FloatingRootContext | FloatingContext,
  props: UseListNavigationProps,
): ElementProps;

interface UseTypeaheadProps {
  /**
   * A ref which contains an array of strings whose indices match the HTML
   * elements of the list.
   * @default empty list
   */
  listRef: React$1.RefObject<Array<string | null>>;
  /**
   * The index of the active (focused or highlighted) item in the list.
   * @default null
   */
  activeIndex: number | null;
  /**
   * Callback invoked with the matching index if found as the user types.
   */
  onMatch?: ((index: number) => void) | undefined;
  /**
   * Optional list of item elements that correspond to `listRef` indices.
   * When an element exists for an index, typeahead skips it if it is hidden by
   * `display: none`, `visibility: hidden|collapse`, or other
   * browser-reported visibility checks.
   */
  elementsRef?: React$1.RefObject<Array<HTMLElement | null>> | undefined;
  /**
   * Callback invoked with the current typing activity as the user types.
   */
  onTyping?: ((isTyping: boolean) => void) | undefined;
  /**
   * Whether the Hook is enabled, including all internal Effects and event
   * handlers.
   * @default true
   */
  enabled?: boolean | undefined;
  /**
   * The number of milliseconds to wait before resetting the typed string.
   * @default 750
   */
  resetMs?: number | undefined;
  /**
   * The index of the selected item in the list, if available.
   * @default null
   */
  selectedIndex?: number | null | undefined;
}
/**
 * Provides a matching callback that can be used to focus an item as the user
 * types, often used in tandem with `useListNavigation()`.
 * @see https://floating-ui.com/docs/useTypeahead
 */
declare function useTypeahead(
  context: FloatingRootContext | FloatingContext,
  props: UseTypeaheadProps,
): ElementProps;

interface UseFloatingRootContextOptions {
  open?: boolean | undefined;
  onOpenChange?(
    open: boolean,
    eventDetails: BaseUIChangeEventDetails<string>,
  ): void;
  elements?:
    | {
        reference?: ReferenceType | null | undefined;
        floating?: HTMLElement | null | undefined;
      }
    | undefined;
}
declare function useFloatingRootContext(
  options: UseFloatingRootContextOptions,
): FloatingRootStore;

interface SafePolygonOptions extends HandleCloseOptions {}
/**
 * Generates a safe polygon area that the user can traverse without closing the
 * floating element once leaving the reference element.
 * @see https://floating-ui.com/docs/useHover#safepolygon
 */
declare function safePolygon(options?: SafePolygonOptions): HandleClose;

/**
 * Returns the parent node id for nested floating elements, if available.
 * Returns `null` for top-level floating elements.
 */
declare const useFloatingParentNodeId: () => string | null;
/**
 * Returns the nearest floating tree context, if available.
 */
declare const useFloatingTree: (
  externalTree?: FloatingTreeStore,
) => FloatingTreeType | null;
/**
 * Registers a node into the `FloatingTree`, returning its id.
 * @see https://floating-ui.com/docs/FloatingTree
 */
declare function useFloatingNodeId(
  externalTree?: FloatingTreeStore,
): string | undefined;
interface FloatingNodeProps {
  children?: React$1.ReactNode;
  id: string | undefined;
}
/**
 * Provides parent node context for nested floating elements.
 * @see https://floating-ui.com/docs/FloatingTree
 * @internal
 */
declare function FloatingNode(props: FloatingNodeProps): React$1.JSX.Element;
interface FloatingTreeProps {
  children?: React$1.ReactNode;
  externalTree?: FloatingTreeStore | undefined;
}
/**
 * Provides context for nested floating elements when they are not children of
 * each other on the DOM.
 * This is not necessary in all cases, except when there must be explicit communication between parent and child floating elements. It is necessary for:
 * - The `bubbles` option in the `useDismiss()` Hook
 * - Nested virtual list navigation
 * - Nested floating elements that each open on hover
 * - Custom communication between parent and child floating elements
 * @see https://floating-ui.com/docs/FloatingTree
 * @internal
 */
declare function FloatingTree(props: FloatingTreeProps): React$1.JSX.Element;

type Prettify<T> = { [K in keyof T]: T[K] } & {};
type Delay =
  | number
  | Partial<{
      open: number;
      close: number;
    }>;
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
type FloatingTreeType = FloatingTreeStore;
interface ElementProps {
  reference?: React$1.HTMLProps<Element> | undefined;
  floating?: React$1.HTMLProps<HTMLElement> | undefined;
  item?: React$1.HTMLProps<HTMLElement> | undefined;
  trigger?: React$1.HTMLProps<Element> | undefined;
}
type ReferenceType = Element | VirtualElement;
type UseFloatingData = Prettify<UseFloatingReturn>;
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
        reference?: ReferenceType | null | undefined;
        /**
         * Externally passed floating element. Store in state.
         */
        floating?: HTMLElement | null | undefined;
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
   * External FloatingTree to use when the one provided by context can't be used.
   */
  externalTree?: FloatingTreeStore | undefined;
}

interface FloatingDelayGroupProps {
  children?: React$1.ReactNode;
  /**
   * The delay to use for the group when it's not in the instant phase.
   */
  delay: Delay;
  /**
   * An optional explicit timeout to use for the group, which represents when
   * grouping logic will no longer be active after the close delay completes.
   * This is useful if you want grouping to “last” longer than the close delay,
   * for example if there is no close delay at all.
   */
  timeoutMs?: number | undefined;
}
/**
 * Experimental next version of `FloatingDelayGroup` to become the default
 * in the future. This component is not yet stable.
 * Provides context for a group of floating elements that should share a
 * `delay`. Unlike `FloatingDelayGroup`, `useDelayGroup` with this
 * component does not cause a re-render of unrelated consumers of the
 * context when the delay changes.
 * @see https://floating-ui.com/docs/FloatingDelayGroup
 * @internal
 */
declare function FloatingDelayGroup(
  props: FloatingDelayGroupProps,
): React$1.JSX.Element;
interface UseDelayGroupOptions {
  /**
   * Whether the trigger this hook is used in has opened the tooltip.
   */
  open: boolean;
}
interface UseDelayGroupReturn {
  /**
   * The delay reference object.
   */
  delayRef: React$1.RefObject<Delay>;
  /**
   * Whether animations should be removed.
   */
  isInstantPhase: boolean;
  /**
   * Whether a `<FloatingDelayGroup>` provider is present.
   */
  hasProvider: boolean;
}
/**
 * Enables grouping when called inside a component that's a child of a
 * `FloatingDelayGroup`.
 * @see https://floating-ui.com/docs/FloatingDelayGroup
 * @internal
 */
declare function useDelayGroup(
  context: FloatingRootContext | FloatingContext,
  options?: UseDelayGroupOptions,
): UseDelayGroupReturn;

interface UseClickProps {
  /**
   * Whether the Hook is enabled, including all internal Effects and event
   * handlers.
   * @default true
   */
  enabled?: boolean | undefined;
  /**
   * The type of event to use to determine a “click” with mouse input.
   * Keyboard clicks work as normal.
   * @default 'click'
   */
  event?: "click" | "mousedown" | "mousedown-only" | undefined;
  /**
   * Whether to toggle the open state with repeated clicks.
   * @default true
   */
  toggle?: boolean | undefined;
  /**
   * Whether to ignore the logic for mouse input (for example, if `useHover()`
   * is also being used).
   * @default false
   */
  ignoreMouse?: boolean | undefined;
  /**
   * If already open from another event such as the `useHover()` Hook,
   * determines whether to keep the floating element open when clicking the
   * reference element for the first time.
   * @default true
   */
  stickIfOpen?: boolean | undefined;
  /**
   * Touch-only delay (ms) before opening. Useful to allow mobile viewport/keyboard to settle.
   * @default 0
   */
  touchOpenDelay?: number | undefined;
  /**
   * The reason for the click.
   * @default REASONS.triggerPress
   */
  reason?: typeof triggerPress | typeof inputPress | undefined;
}
/**
 * Opens or closes the floating element when clicking the reference element.
 * @see https://floating-ui.com/docs/useClick
 */
declare function useClick(
  context: FloatingRootContext | FloatingContext,
  props?: UseClickProps,
): ElementProps;

/**
 * Provides data to position a floating element and context to add interactions.
 * @see https://floating-ui.com/docs/useFloating
 */
declare function useFloating(options?: UseFloatingOptions): UseFloatingReturn;

interface UseSyncedFloatingRootContextOptions<
  State extends PopupStoreState<unknown>,
  ContextEventDetails extends BaseUIChangeEventDetails<string>,
  OpenChangeEventDetails extends BaseUIChangeEventDetails<string>,
> {
  popupStore: ReactStore<
    State,
    PopupStoreContext<ContextEventDetails>,
    PopupStoreSelectors
  >;
  /**
   * Whether the Popup element is passed to Floating UI as the floating element instead of the default Positioner.
   */
  treatPopupAsFloatingElement?: boolean | undefined;
  floatingRootContext?: FloatingRootStore | undefined;
  floatingId: string | undefined;
  nested: boolean;
  onOpenChange(open: boolean, eventDetails: OpenChangeEventDetails): void;
}
/**
 * Keeps a FloatingRootStore in sync with the provided PopupStore.
 * Uses the provided FloatingRootStore when one exists, otherwise creates one once and updates it on every render.
 */
declare function useSyncedFloatingRootContext<
  State extends PopupStoreState<unknown>,
  ContextEventDetails extends BaseUIChangeEventDetails<string>,
  OpenChangeEventDetails extends BaseUIChangeEventDetails<string>,
>(
  options: UseSyncedFloatingRootContextOptions<
    State,
    ContextEventDetails,
    OpenChangeEventDetails
  >,
): FloatingRootStore;

export {
  type AlignedPlacement,
  type Alignment,
  type ArrowOptions,
  type AutoPlacementOptions,
  type AutoUpdateOptions,
  type Axis,
  type Boundary,
  type ClientRectObject,
  type ComputePositionConfig,
  type ComputePositionReturn,
  type ContextData,
  type Coords,
  type Delay,
  type DetectOverflowOptions,
  type Dimensions,
  type ElementContext,
  type ElementProps,
  type ElementRects,
  type Elements,
  type ExtendedElements,
  type ExtendedRefs,
  type FlipOptions,
  type FloatingContext,
  FloatingDelayGroup,
  type FloatingDelayGroupProps,
  type FloatingElement,
  type FloatingEvents,
  FloatingFocusManager,
  type FloatingFocusManagerProps,
  FloatingNode,
  type FloatingNodeProps,
  type FloatingNodeType,
  FloatingPortal,
  type FloatingRootContext,
  FloatingTree,
  type FloatingTreeProps,
  FloatingTreeStore,
  type FloatingTreeType,
  type HandleClose,
  type HandleCloseContext,
  type HideOptions,
  type InlineOptions,
  type Length,
  type Middleware,
  type MiddlewareArguments,
  type MiddlewareData,
  type MiddlewareReturn,
  type MiddlewareState,
  type NarrowedElement,
  type NodeScroll,
  type OffsetOptions,
  type Padding,
  type Placement,
  type Platform,
  type Rect,
  type ReferenceElement,
  type ReferenceType,
  type RootBoundary,
  type SafePolygonOptions,
  type ShiftOptions,
  type Side,
  type SideObject,
  type SizeOptions,
  type Strategy,
  type UseClientPointProps,
  type UseDismissProps,
  type UseFloatingData,
  type UseFloatingOptions,
  type UseFloatingPortalNodeProps,
  type UseFloatingReturn,
  type UseFloatingRootContextOptions,
  type UseFocusProps,
  type UseHoverFloatingInteractionProps,
  type UseHoverProps,
  type UseHoverReferenceInteractionProps,
  type UseListNavigationProps,
  type UseTypeaheadProps,
  type VirtualElement,
  arrow,
  autoPlacement,
  autoUpdate,
  computePosition,
  detectOverflow,
  flip,
  getOverflowAncestors,
  hide,
  inline,
  limitShift,
  offset,
  platform,
  safePolygon,
  shift,
  size,
  useClick,
  useClientPoint,
  useDelayGroup,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingPortalNode,
  useFloatingRootContext,
  useFloatingTree,
  useFocus,
  useHover,
  useHoverFloatingInteraction,
  useHoverReferenceInteraction,
  useListNavigation,
  useSyncedFloatingRootContext,
  useTypeahead,
};
