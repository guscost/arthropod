import {
  FC,
  MouseEvent,
  ReactInstance,
  ErrorInfo,
  JSXElementConstructor,
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
  CSSProperties,
  ReactNode,
  SVGAttributes,
  AriaAttributes,
  SyntheticEvent,
  ClipboardEvent,
  CompositionEvent,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent as MouseEvent$1,
  DragEvent,
  TouchEvent,
  PointerEvent,
  UIEvent,
  WheelEvent,
  AnimationEvent,
  TransitionEvent,
  ReactElement,
  JSX,
  PureComponent,
  FunctionComponent,
  Component,
  Key,
} from "react";

declare namespace lodash {
  type DebouncedFunc<T> = T;
}

/**
 * @fileOverview Surface
 */

interface SurfaceProps {
  width: number;
  height: number;
  viewBox?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  title?: string;
  desc?: string;
}
type Props$C = Omit<SVGProps<SVGSVGElement>, "viewBox"> & SurfaceProps;
declare function Surface(props: Props$C): JSX.Element;

interface LayerProps {
  className?: string;
  children?: ReactNode;
}
type Props$B = SVGAttributes<SVGGElement> & LayerProps;
declare const Layer: ForwardRefExoticComponent<
  SVGAttributes<SVGGElement> & LayerProps & RefAttributes<SVGGElement>
>;

// Last module patch version validated against: 4.0.2

type NumberValue = number | { valueOf(): number };

/**
 * A helper interface for a continuous scale defined over a numeric domain.
 */
interface ScaleContinuousNumeric<Range, Output, Unknown = never> {
  /**
   * Given a value from the domain, returns the corresponding value from the range, subject to interpolation, if any.
   *
   * If the given value is outside the domain, and clamping is not enabled, the mapping may be extrapolated such that the returned value is outside the range.
   *
   * Note: The interpolation function applied by the scale may change the output type from the range type as part of the interpolation.
   *
   * @param value A numeric value from the domain.
   */
  (value: NumberValue): Output | Unknown;

  /**
   * Given a value from the range, returns the corresponding value from the domain. Inversion is useful for interaction,
   * say to determine the data value corresponding to the position of the mouse.
   *
   * If the given value is outside the range, and clamping is not enabled, the mapping may be extrapolated such that the returned value is outside the domain.
   *
   * IMPORTANT: This method is only supported if the range is numeric. If the range is not numeric, returns NaN.
   *
   * For a valid value y in the range, continuous(continuous.invert(y)) approximately equals y;
   * similarly, for a valid value x in the domain, continuous.invert(continuous(x)) approximately equals x.
   * The scale and its inverse may not be exact due to the limitations of floating point precision.
   *
   * @param value A numeric value from the range.
   */
  invert(value: NumberValue): number;

  /**
   * Returns a copy of the scale’s current domain.
   */
  domain(): number[];
  /**
   * Sets the scale’s domain to the specified array of numbers. The array must contain two or more elements.
   * If the elements in the given array are not numbers, they will be coerced to numbers
   *
   * Although continuous scales typically have two values each in their domain and range, specifying more than two values produces a piecewise scale.
   *
   * Internally, a piecewise scale performs a binary search for the range interpolator corresponding to the given domain value.
   * Thus, the domain must be in ascending or descending order. If the domain and range have different lengths N and M, only the first min(N,M) elements in each are observed.
   *
   * @param domain Array of numeric domain values.
   */
  domain(domain: Iterable<NumberValue>): this;

  /**
   * Returns a copy of the scale’s current range.
   */
  range(): Range[];
  /**
   * Sets the scale’s range to the specified array of values.
   *
   * The array must contain two or more elements. Unlike the domain, elements in the given array need not be numbers;
   * any value that is supported by the underlying interpolator will work, though note that numeric ranges are required for invert.
   *
   * @param range Array of range values.
   */
  range(range: Iterable<Range>): this;

  /**
   * Sets the scale’s range to the specified array of values while also setting the scale’s interpolator to interpolateRound.
   *
   * The rounding interpolator is sometimes useful for avoiding antialiasing artifacts,
   * though also consider the shape-rendering “crispEdges” styles. Note that this interpolator can only be used with numeric ranges.
   *
   * The array must contain two or more elements. Unlike the domain, elements in the given array need not be numbers;
   * any value that is supported by the underlying interpolator will work, though note that numeric ranges are required for invert.
   *
   * @param range Array of range values.
   */
  rangeRound(range: Iterable<NumberValue>): this;

  /**
   * Returns whether or not the scale currently clamps values to within the range.
   */
  clamp(): boolean;
  /**
   * Enables or disables clamping, respectively. If clamping is disabled and the scale is passed a value outside the domain,
   * the scale may return a value outside the range through extrapolation.
   *
   * If clamping is enabled, the return value of the scale is always within the scale’s range. Clamping similarly applies to the "invert" method.
   *
   * @param clamp A flag to enable (true) or disable (false) clamping.
   */
  clamp(clamp: boolean): this;

  /**
   * Returns approximately count representative values from the scale’s domain.
   *
   * If count is not specified, it defaults to 10.
   *
   * The returned tick values are uniformly spaced, have human-readable values (such as multiples of powers of 10),
   * and are guaranteed to be within the extent of the domain. Ticks are often used to display reference lines, or tick marks, in conjunction with the visualized data.
   * The specified count is only a hint; the scale may return more or fewer values depending on the domain. See also d3-array’s ticks.
   *
   * @param count Optional approximate number of ticks to be returned. If count is not specified, it defaults to 10.
   */
  ticks(count?: number): number[];

  /**
   * Returns a number format function suitable for displaying a tick value, automatically computing the appropriate precision based on the fixed interval between tick values.
   * The specified count should have the same value as the count that is used to generate the tick values.
   *
   * @param count Approximate number of ticks to be used when calculating precision for the number format function.
   * @param specifier An optional valid format specifier string which allows a custom format where the precision of the format is automatically set by the scale as appropriate for the tick interval.
   * If specifier uses the format type "s", the scale will return a SI-prefix format based on the largest value in the domain.
   * If the specifier already specifies a precision, this method is equivalent to locale.format.
   */
  tickFormat(count?: number, specifier?: string): (d: NumberValue) => string;

  /**
   * Extends the domain so that it starts and ends on nice round values.
   * This method typically modifies the scale’s domain, and may only extend the bounds to the nearest round value.
   * An optional tick count argument allows greater control over the step size used to extend the bounds,
   * guaranteeing that the returned ticks will exactly cover the domain.
   * Nicing is useful if the domain is computed from data, say using extent, and may be irregular.
   * For example, for a domain of [0.201479…, 0.996679…], a nice domain might be [0.2, 1.0].
   * If the domain has more than two values, nicing the domain only affects the first and last value.
   *
   * Nicing a scale only modifies the current domain; it does not automatically nice domains that are subsequently set using continuous.domain.
   * You must re-nice the scale after setting the new domain, if desired.
   *
   * @param count An optional number of ticks expected to be used.
   */
  nice(count?: number): this;

  /**
   * Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.
   */
  copy(): this;
}

// -------------------------------------------------------------------------------
// Point Scale Factory
// -------------------------------------------------------------------------------

/**
 * Point scales are a variant of band scales with the bandwidth fixed to zero.
 * Point scales are typically used for scatterplots with an ordinal or categorical dimension.
 * The unknown value of a point scale is always undefined: they do not allow implicit domain construction.
 *
 * The generic corresponds to the data type of domain elements.
 */
interface ScalePoint<Domain extends { toString(): string }> {
  /**
   * Given a value in the input domain, returns the corresponding point derived from the output range.
   * If the given value is not in the scale’s domain, returns undefined.
   *
   * @param x  A value from the domain.
   */
  (x: Domain): number | undefined;

  /**
   * Returns the scale's current domain.
   */
  domain(): Domain[];
  /**
   * Sets the domain to the specified array of values. The first element in domain will be mapped to the first point, the second domain value to the second point, and so on.
   * Domain values are stored internally in an InternMap from primitive value to index; the resulting index is then used to determine the point.
   * Thus, a point scale’s values must be coercible to a primitive value, and the primitive domain value uniquely identifies the corresponding point.
   *
   * @param domain Array of domain values.
   */
  domain(domain: Iterable<Domain>): this;

  /**
   * Returns the scale’s current range, which defaults to [0, 1].
   */
  range(): [number, number];
  /**
   * Sets the scale’s range to the specified two-element array of numbers.
   * If the elements in the given array are not numbers, they will be coerced to numbers.
   * The default range is [0, 1].
   *
   * @param range A two-element array of numeric values.
   */
  range(range: Iterable<NumberValue>): this;

  /**
   * Sets the scale’s range to the specified two-element array of numbers while also enabling rounding.
   * If the elements in the given array are not numbers, they will be coerced to numbers.
   *
   * Rounding is sometimes useful for avoiding antialiasing artifacts, though also consider the shape-rendering “crispEdges” styles.
   *
   * @param range A two-element array of numeric values.
   */
  rangeRound(range: Iterable<NumberValue>): this;

  /**
   * Returns the current rounding status for the scale: enabled (= true) or disabled (= false).
   */
  round(): boolean;
  /**
   * Enables or disables rounding accordingly. If rounding is enabled, the position of each point will be integers.
   * Rounding is sometimes useful for avoiding antialiasing artifacts, though also consider the shape-rendering “crispEdges” styles.
   * Note that if the width of the domain is not a multiple of the cardinality of the range, there may be leftover unused space, even without padding!
   * Use point.align to specify how the leftover space is distributed.
   *
   * @param round Enable rounding (= true), disable rounding (= false).
   */
  round(round: boolean): this;

  /**
   * Returns the current outer padding which defaults to 0.
   * The outer padding determines the ratio of the range that is reserved for blank space
   * before the first point and after the last point.
   */
  padding(): number;
  /**
   * Sets the outer padding to the specified value which must be in the range [0, 1].
   * The outer padding determines the ratio of the range that is reserved for blank space
   * before the first point and after the last point.
   *
   * The default is 0.
   *
   * @param padding Value for outer padding in [0, 1] interval.
   */
  padding(padding: number): this;

  /**
   * Returns the current alignment which defaults to 0.5.
   */
  align(): number;
  /**
   * Sets the alignment to the specified value which must be in the range [0, 1].
   *
   * The alignment determines how any leftover unused space in the range is distributed.
   * A value of 0.5 indicates that the leftover space should be equally distributed before the first point and after the last point;
   * i.e., the points should be centered within the range. A value of 0 or 1 may be used to shift the points to one side, say to position them adjacent to an axis.
   *
   * The default value is 0.5.
   *
   * @param align Value for alignment setting in [0, 1] interval.
   */
  align(align: number): this;

  /**
   * Return 0.
   */
  bandwidth(): number;

  /**
   * Returns the distance between the starts of adjacent points.
   */
  step(): number;

  /**
   * Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.
   */
  copy(): this;
}

/**
 * @fileOverview X Axis
 */

/** Define of XAxis props */
interface XAxisProps extends BaseAxisProps {
  /** The unique id of x-axis */
  xAxisId?: string | number;
  /** The width of axis which is usually calculated internally */
  width?: number;
  /** The height of axis, which need to be set by the user */
  height?: number;
  mirror?: boolean;
  orientation?: "top" | "bottom";
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks?: (string | number)[];
  padding?:
    | {
        left?: number;
        right?: number;
      }
    | "gap"
    | "no-gap";
  minTickGap?: number;
  interval?: AxisInterval;
  reversed?: boolean;
  /** the rotate angle of tick */
  angle?: number;
  tickMargin?: number;
}
type Props$A = Omit<
  PresentationAttributesAdaptChildEvent<any, SVGElement>,
  "scale" | "ref"
> &
  XAxisProps;
declare class XAxis extends Component<Props$A> {
  static displayName: string;
  static defaultProps: {
    allowDecimals: boolean;
    hide: boolean;
    orientation: string;
    width: number;
    height: number;
    mirror: boolean;
    xAxisId: number;
    tickCount: number;
    type: string;
    padding: {
      left: number;
      right: number;
    };
    allowDataOverflow: boolean;
    scale: string;
    reversed: boolean;
    allowDuplicatedCategory: boolean;
  };
  render(): JSX.Element;
}

/**
 * @fileOverview Y Axis
 */

interface YAxisProps extends BaseAxisProps {
  /** The unique id of y-axis */
  yAxisId?: string | number;
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks?: (string | number)[];
  /** The width of axis, which need to be set by the user */
  width?: number;
  /** The height of axis which is usually calculated in Chart */
  height?: number;
  mirror?: boolean;
  /** The orientation of axis */
  orientation?: "left" | "right";
  padding?: {
    top?: number;
    bottom?: number;
  };
  minTickGap?: number;
  interval?: AxisInterval;
  reversed?: boolean;
  tickMargin?: number;
}
type Props$z = Omit<
  PresentationAttributesAdaptChildEvent<any, SVGElement>,
  "scale" | "ref"
> &
  YAxisProps;
declare class YAxis extends Component<Props$z> {
  static displayName: string;
  static defaultProps: {
    allowDuplicatedCategory: boolean;
    allowDecimals: boolean;
    hide: boolean;
    orientation: string;
    width: number;
    height: number;
    mirror: boolean;
    yAxisId: number;
    tickCount: number;
    type: string;
    padding: {
      top: number;
      bottom: number;
    };
    allowDataOverflow: boolean;
    scale: string;
    reversed: boolean;
  };
  render(): JSX.Element;
}

/**
 * Determines how values are stacked:
 *
 * - `none` is the default, it adds values on top of each other. No smarts. Negative values will overlap.
 * - `expand` make it so that the values always add up to 1 - so the chart will look like a rectangle.
 * - `wiggle` and `silhouette` tries to keep the chart centered.
 * - `sign` stacks positive values above zero and negative values below zero. Similar to `none` but handles negatives.
 * - `positive` ignores all negative values, and then behaves like \`none\`.
 *
 * Also see https://d3js.org/d3-shape/stack#stack-offsets
 * (note that the `diverging` offset in d3 is named `sign` in recharts)
 */
type StackOffsetType =
  | "sign"
  | "expand"
  | "none"
  | "wiggle"
  | "silhouette"
  | "positive";
type LayoutType = "horizontal" | "vertical" | "centric" | "radial";
type AxisType = "xAxis" | "yAxis" | "zAxis" | "angleAxis" | "radiusAxis";
type DataKey<T> = string | number | ((obj: T) => any);
type PresentationAttributesWithProps<P, T> = AriaAttributes &
  DOMAttributesWithProps<P, T> &
  Omit<SVGProps<T>, keyof DOMAttributesWithProps<P, T>>;
type PresentationAttributesAdaptChildEvent<P, T> = AriaAttributes &
  DOMAttributesAdaptChildEvent<P, T> &
  Omit<SVGProps<T>, keyof DOMAttributesAdaptChildEvent<P, T>>;
type SymbolType$1 =
  | "circle"
  | "cross"
  | "diamond"
  | "square"
  | "star"
  | "triangle"
  | "wye";
type LegendType =
  | "plainline"
  | "line"
  | "square"
  | "rect"
  | "circle"
  | "cross"
  | "diamond"
  | "star"
  | "triangle"
  | "wye"
  | "none";
type TooltipType$1 = "none";
type AllowInDimension = {
  x?: boolean;
  y?: boolean;
};
interface Coordinate {
  x: number;
  y: number;
}
interface ChartCoordinate extends Coordinate {
  xAxis?: any;
  yAxis?: any;
  width?: any;
  height?: any;
  offset?: ChartOffset;
  angle?: number;
  radius?: number;
  cx?: number;
  cy?: number;
  startAngle?: number;
  endAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
}
type ScaleType =
  | "auto"
  | "linear"
  | "pow"
  | "sqrt"
  | "log"
  | "identity"
  | "time"
  | "band"
  | "point"
  | "ordinal"
  | "quantile"
  | "quantize"
  | "utc"
  | "sequential"
  | "threshold";
type EventHandler<P, E extends SyntheticEvent<any>> = {
  bivarianceHack(props: P, event: E): void;
}["bivarianceHack"];
type ReactEventHandler<P, T = Element> = EventHandler<P, SyntheticEvent<T>>;
type ClipboardEventHandler<P, T = Element> = EventHandler<P, ClipboardEvent<T>>;
type CompositionEventHandler<P, T = Element> = EventHandler<
  P,
  CompositionEvent<T>
>;
type DragEventHandler<P, T = Element> = EventHandler<P, DragEvent<T>>;
type FocusEventHandler<P, T = Element> = EventHandler<P, FocusEvent<T>>;
type FormEventHandler<P, T = Element> = EventHandler<P, FormEvent<T>>;
type KeyboardEventHandler<P, T = Element> = EventHandler<P, KeyboardEvent<T>>;
type MouseEventHandler<P, T = Element> = EventHandler<P, MouseEvent$1<T>>;
type TouchEventHandler<P, T = Element> = EventHandler<P, TouchEvent<T>>;
type PointerEventHandler<P, T = Element> = EventHandler<P, PointerEvent<T>>;
type UIEventHandler<P, T = Element> = EventHandler<P, UIEvent<T>>;
type WheelEventHandler<P, T = Element> = EventHandler<P, WheelEvent<T>>;
type AnimationEventHandler<P, T = Element> = EventHandler<P, AnimationEvent<T>>;
type TransitionEventHandler<P, T = Element> = EventHandler<
  P,
  TransitionEvent<T>
>;
interface DOMAttributesWithProps<P, T> {
  children?: ReactNode;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  onCopy?: ClipboardEventHandler<P, T>;
  onCopyCapture?: ClipboardEventHandler<P, T>;
  onCut?: ClipboardEventHandler<P, T>;
  onCutCapture?: ClipboardEventHandler<P, T>;
  onPaste?: ClipboardEventHandler<P, T>;
  onPasteCapture?: ClipboardEventHandler<P, T>;
  onCompositionEnd?: CompositionEventHandler<P, T>;
  onCompositionEndCapture?: CompositionEventHandler<P, T>;
  onCompositionStart?: CompositionEventHandler<P, T>;
  onCompositionStartCapture?: CompositionEventHandler<P, T>;
  onCompositionUpdate?: CompositionEventHandler<P, T>;
  onCompositionUpdateCapture?: CompositionEventHandler<P, T>;
  onFocus?: FocusEventHandler<P, T>;
  onFocusCapture?: FocusEventHandler<P, T>;
  onBlur?: FocusEventHandler<P, T>;
  onBlurCapture?: FocusEventHandler<P, T>;
  onChange?: FormEventHandler<P, T>;
  onChangeCapture?: FormEventHandler<P, T>;
  onBeforeInput?: FormEventHandler<P, T>;
  onBeforeInputCapture?: FormEventHandler<P, T>;
  onInput?: FormEventHandler<P, T>;
  onInputCapture?: FormEventHandler<P, T>;
  onReset?: FormEventHandler<P, T>;
  onResetCapture?: FormEventHandler<P, T>;
  onSubmit?: FormEventHandler<P, T>;
  onSubmitCapture?: FormEventHandler<P, T>;
  onInvalid?: FormEventHandler<P, T>;
  onInvalidCapture?: FormEventHandler<P, T>;
  onLoad?: ReactEventHandler<P, T>;
  onLoadCapture?: ReactEventHandler<P, T>;
  onError?: ReactEventHandler<P, T>;
  onErrorCapture?: ReactEventHandler<P, T>;
  onKeyDown?: KeyboardEventHandler<P, T>;
  onKeyDownCapture?: KeyboardEventHandler<P, T>;
  onKeyPress?: KeyboardEventHandler<P, T>;
  onKeyPressCapture?: KeyboardEventHandler<P, T>;
  onKeyUp?: KeyboardEventHandler<P, T>;
  onKeyUpCapture?: KeyboardEventHandler<P, T>;
  onAbort?: ReactEventHandler<P, T>;
  onAbortCapture?: ReactEventHandler<P, T>;
  onCanPlay?: ReactEventHandler<P, T>;
  onCanPlayCapture?: ReactEventHandler<P, T>;
  onCanPlayThrough?: ReactEventHandler<P, T>;
  onCanPlayThroughCapture?: ReactEventHandler<P, T>;
  onDurationChange?: ReactEventHandler<P, T>;
  onDurationChangeCapture?: ReactEventHandler<P, T>;
  onEmptied?: ReactEventHandler<P, T>;
  onEmptiedCapture?: ReactEventHandler<P, T>;
  onEncrypted?: ReactEventHandler<P, T>;
  onEncryptedCapture?: ReactEventHandler<P, T>;
  onEnded?: ReactEventHandler<P, T>;
  onEndedCapture?: ReactEventHandler<P, T>;
  onLoadedData?: ReactEventHandler<P, T>;
  onLoadedDataCapture?: ReactEventHandler<P, T>;
  onLoadedMetadata?: ReactEventHandler<P, T>;
  onLoadedMetadataCapture?: ReactEventHandler<P, T>;
  onLoadStart?: ReactEventHandler<P, T>;
  onLoadStartCapture?: ReactEventHandler<P, T>;
  onPause?: ReactEventHandler<P, T>;
  onPauseCapture?: ReactEventHandler<P, T>;
  onPlay?: ReactEventHandler<P, T>;
  onPlayCapture?: ReactEventHandler<P, T>;
  onPlaying?: ReactEventHandler<P, T>;
  onPlayingCapture?: ReactEventHandler<P, T>;
  onProgress?: ReactEventHandler<P, T>;
  onProgressCapture?: ReactEventHandler<P, T>;
  onRateChange?: ReactEventHandler<P, T>;
  onRateChangeCapture?: ReactEventHandler<P, T>;
  onSeeked?: ReactEventHandler<P, T>;
  onSeekedCapture?: ReactEventHandler<P, T>;
  onSeeking?: ReactEventHandler<P, T>;
  onSeekingCapture?: ReactEventHandler<P, T>;
  onStalled?: ReactEventHandler<P, T>;
  onStalledCapture?: ReactEventHandler<P, T>;
  onSuspend?: ReactEventHandler<P, T>;
  onSuspendCapture?: ReactEventHandler<P, T>;
  onTimeUpdate?: ReactEventHandler<P, T>;
  onTimeUpdateCapture?: ReactEventHandler<P, T>;
  onVolumeChange?: ReactEventHandler<P, T>;
  onVolumeChangeCapture?: ReactEventHandler<P, T>;
  onWaiting?: ReactEventHandler<P, T>;
  onWaitingCapture?: ReactEventHandler<P, T>;
  onAuxClick?: MouseEventHandler<P, T>;
  onAuxClickCapture?: MouseEventHandler<P, T>;
  onClick?: MouseEventHandler<P, T>;
  onClickCapture?: MouseEventHandler<P, T>;
  onContextMenu?: MouseEventHandler<P, T>;
  onContextMenuCapture?: MouseEventHandler<P, T>;
  onDoubleClick?: MouseEventHandler<P, T>;
  onDoubleClickCapture?: MouseEventHandler<P, T>;
  onDrag?: DragEventHandler<P, T>;
  onDragCapture?: DragEventHandler<P, T>;
  onDragEnd?: DragEventHandler<P, T>;
  onDragEndCapture?: DragEventHandler<P, T>;
  onDragEnter?: DragEventHandler<P, T>;
  onDragEnterCapture?: DragEventHandler<P, T>;
  onDragExit?: DragEventHandler<P, T>;
  onDragExitCapture?: DragEventHandler<P, T>;
  onDragLeave?: DragEventHandler<P, T>;
  onDragLeaveCapture?: DragEventHandler<P, T>;
  onDragOver?: DragEventHandler<P, T>;
  onDragOverCapture?: DragEventHandler<P, T>;
  onDragStart?: DragEventHandler<P, T>;
  onDragStartCapture?: DragEventHandler<P, T>;
  onDrop?: DragEventHandler<P, T>;
  onDropCapture?: DragEventHandler<P, T>;
  onMouseDown?: MouseEventHandler<P, T>;
  onMouseDownCapture?: MouseEventHandler<P, T>;
  onMouseEnter?: MouseEventHandler<P, T>;
  onMouseLeave?: MouseEventHandler<P, T>;
  onMouseMove?: MouseEventHandler<P, T>;
  onMouseMoveCapture?: MouseEventHandler<P, T>;
  onMouseOut?: MouseEventHandler<P, T>;
  onMouseOutCapture?: MouseEventHandler<P, T>;
  onMouseOver?: MouseEventHandler<P, T>;
  onMouseOverCapture?: MouseEventHandler<P, T>;
  onMouseUp?: MouseEventHandler<P, T>;
  onMouseUpCapture?: MouseEventHandler<P, T>;
  onSelect?: ReactEventHandler<P, T>;
  onSelectCapture?: ReactEventHandler<P, T>;
  onTouchCancel?: TouchEventHandler<P, T>;
  onTouchCancelCapture?: TouchEventHandler<P, T>;
  onTouchEnd?: TouchEventHandler<P, T>;
  onTouchEndCapture?: TouchEventHandler<P, T>;
  onTouchMove?: TouchEventHandler<P, T>;
  onTouchMoveCapture?: TouchEventHandler<P, T>;
  onTouchStart?: TouchEventHandler<P, T>;
  onTouchStartCapture?: TouchEventHandler<P, T>;
  onPointerDown?: PointerEventHandler<P, T>;
  onPointerDownCapture?: PointerEventHandler<P, T>;
  onPointerMove?: PointerEventHandler<P, T>;
  onPointerMoveCapture?: PointerEventHandler<P, T>;
  onPointerUp?: PointerEventHandler<P, T>;
  onPointerUpCapture?: PointerEventHandler<P, T>;
  onPointerCancel?: PointerEventHandler<P, T>;
  onPointerCancelCapture?: PointerEventHandler<P, T>;
  onPointerEnter?: PointerEventHandler<P, T>;
  onPointerEnterCapture?: PointerEventHandler<P, T>;
  onPointerLeave?: PointerEventHandler<P, T>;
  onPointerLeaveCapture?: PointerEventHandler<P, T>;
  onPointerOver?: PointerEventHandler<P, T>;
  onPointerOverCapture?: PointerEventHandler<P, T>;
  onPointerOut?: PointerEventHandler<P, T>;
  onPointerOutCapture?: PointerEventHandler<P, T>;
  onGotPointerCapture?: PointerEventHandler<P, T>;
  onGotPointerCaptureCapture?: PointerEventHandler<P, T>;
  onLostPointerCapture?: PointerEventHandler<P, T>;
  onLostPointerCaptureCapture?: PointerEventHandler<P, T>;
  onScroll?: UIEventHandler<P, T>;
  onScrollCapture?: UIEventHandler<P, T>;
  onWheel?: WheelEventHandler<P, T>;
  onWheelCapture?: WheelEventHandler<P, T>;
  onAnimationStart?: AnimationEventHandler<P, T>;
  onAnimationStartCapture?: AnimationEventHandler<P, T>;
  onAnimationEnd?: AnimationEventHandler<P, T>;
  onAnimationEndCapture?: AnimationEventHandler<P, T>;
  onAnimationIteration?: AnimationEventHandler<P, T>;
  onAnimationIterationCapture?: AnimationEventHandler<P, T>;
  onTransitionEnd?: TransitionEventHandler<P, T>;
  onTransitionEndCapture?: TransitionEventHandler<P, T>;
}
type AdaptChildEventHandler<P, E extends SyntheticEvent<any>> = {
  bivarianceHack(data: P, index: number, event: E): void;
}["bivarianceHack"];
type AdaptChildReactEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  SyntheticEvent<T>
>;
type AdaptChildClipboardEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  ClipboardEvent<T>
>;
type AdaptChildCompositionEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  CompositionEvent<T>
>;
type AdaptChildDragEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  DragEvent<T>
>;
type AdaptChildFocusEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  FocusEvent<T>
>;
type AdaptChildFormEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  FormEvent<T>
>;
type AdaptChildKeyboardEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  KeyboardEvent<T>
>;
type AdaptChildMouseEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  MouseEvent$1<T>
>;
type AdaptChildTouchEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  TouchEvent<T>
>;
type AdaptChildPointerEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  PointerEvent<T>
>;
type AdaptChildUIEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  UIEvent<T>
>;
type AdaptChildWheelEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  WheelEvent<T>
>;
type AdaptChildAnimationEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  AnimationEvent<T>
>;
type AdaptChildTransitionEventHandler<P, T = Element> = AdaptChildEventHandler<
  P,
  TransitionEvent<T>
>;
type DOMAttributesAdaptChildEvent<P, T> = {
  children?: ReactNode;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
  onCopy?: AdaptChildClipboardEventHandler<P, T>;
  onCopyCapture?: AdaptChildClipboardEventHandler<P, T>;
  onCut?: AdaptChildClipboardEventHandler<P, T>;
  onCutCapture?: AdaptChildClipboardEventHandler<P, T>;
  onPaste?: AdaptChildClipboardEventHandler<P, T>;
  onPasteCapture?: AdaptChildClipboardEventHandler<P, T>;
  onCompositionEnd?: AdaptChildCompositionEventHandler<P, T>;
  onCompositionEndCapture?: AdaptChildCompositionEventHandler<P, T>;
  onCompositionStart?: AdaptChildCompositionEventHandler<P, T>;
  onCompositionStartCapture?: AdaptChildCompositionEventHandler<P, T>;
  onCompositionUpdate?: AdaptChildCompositionEventHandler<P, T>;
  onCompositionUpdateCapture?: AdaptChildCompositionEventHandler<P, T>;
  onFocus?: AdaptChildFocusEventHandler<P, T>;
  onFocusCapture?: AdaptChildFocusEventHandler<P, T>;
  onBlur?: AdaptChildFocusEventHandler<P, T>;
  onBlurCapture?: AdaptChildFocusEventHandler<P, T>;
  onChange?: AdaptChildFormEventHandler<P, T>;
  onChangeCapture?: AdaptChildFormEventHandler<P, T>;
  onBeforeInput?: AdaptChildFormEventHandler<P, T>;
  onBeforeInputCapture?: AdaptChildFormEventHandler<P, T>;
  onInput?: AdaptChildFormEventHandler<P, T>;
  onInputCapture?: AdaptChildFormEventHandler<P, T>;
  onReset?: AdaptChildFormEventHandler<P, T>;
  onResetCapture?: AdaptChildFormEventHandler<P, T>;
  onSubmit?: AdaptChildFormEventHandler<P, T>;
  onSubmitCapture?: AdaptChildFormEventHandler<P, T>;
  onInvalid?: AdaptChildFormEventHandler<P, T>;
  onInvalidCapture?: AdaptChildFormEventHandler<P, T>;
  onLoad?: AdaptChildReactEventHandler<P, T>;
  onLoadCapture?: AdaptChildReactEventHandler<P, T>;
  onError?: AdaptChildReactEventHandler<P, T>;
  onErrorCapture?: AdaptChildReactEventHandler<P, T>;
  onKeyDown?: AdaptChildKeyboardEventHandler<P, T>;
  onKeyDownCapture?: AdaptChildKeyboardEventHandler<P, T>;
  onKeyPress?: AdaptChildKeyboardEventHandler<P, T>;
  onKeyPressCapture?: AdaptChildKeyboardEventHandler<P, T>;
  onKeyUp?: AdaptChildKeyboardEventHandler<P, T>;
  onKeyUpCapture?: AdaptChildKeyboardEventHandler<P, T>;
  onAbort?: AdaptChildReactEventHandler<P, T>;
  onAbortCapture?: AdaptChildReactEventHandler<P, T>;
  onCanPlay?: AdaptChildReactEventHandler<P, T>;
  onCanPlayCapture?: AdaptChildReactEventHandler<P, T>;
  onCanPlayThrough?: AdaptChildReactEventHandler<P, T>;
  onCanPlayThroughCapture?: AdaptChildReactEventHandler<P, T>;
  onDurationChange?: AdaptChildReactEventHandler<P, T>;
  onDurationChangeCapture?: AdaptChildReactEventHandler<P, T>;
  onEmptied?: AdaptChildReactEventHandler<P, T>;
  onEmptiedCapture?: AdaptChildReactEventHandler<P, T>;
  onEncrypted?: AdaptChildReactEventHandler<P, T>;
  onEncryptedCapture?: AdaptChildReactEventHandler<P, T>;
  onEnded?: AdaptChildReactEventHandler<P, T>;
  onEndedCapture?: AdaptChildReactEventHandler<P, T>;
  onLoadedData?: AdaptChildReactEventHandler<P, T>;
  onLoadedDataCapture?: AdaptChildReactEventHandler<P, T>;
  onLoadedMetadata?: AdaptChildReactEventHandler<P, T>;
  onLoadedMetadataCapture?: AdaptChildReactEventHandler<P, T>;
  onLoadStart?: AdaptChildReactEventHandler<P, T>;
  onLoadStartCapture?: AdaptChildReactEventHandler<P, T>;
  onPause?: AdaptChildReactEventHandler<P, T>;
  onPauseCapture?: AdaptChildReactEventHandler<P, T>;
  onPlay?: AdaptChildReactEventHandler<P, T>;
  onPlayCapture?: AdaptChildReactEventHandler<P, T>;
  onPlaying?: AdaptChildReactEventHandler<P, T>;
  onPlayingCapture?: AdaptChildReactEventHandler<P, T>;
  onProgress?: AdaptChildReactEventHandler<P, T>;
  onProgressCapture?: AdaptChildReactEventHandler<P, T>;
  onRateChange?: AdaptChildReactEventHandler<P, T>;
  onRateChangeCapture?: AdaptChildReactEventHandler<P, T>;
  onSeeked?: AdaptChildReactEventHandler<P, T>;
  onSeekedCapture?: AdaptChildReactEventHandler<P, T>;
  onSeeking?: AdaptChildReactEventHandler<P, T>;
  onSeekingCapture?: AdaptChildReactEventHandler<P, T>;
  onStalled?: AdaptChildReactEventHandler<P, T>;
  onStalledCapture?: AdaptChildReactEventHandler<P, T>;
  onSuspend?: AdaptChildReactEventHandler<P, T>;
  onSuspendCapture?: AdaptChildReactEventHandler<P, T>;
  onTimeUpdate?: AdaptChildReactEventHandler<P, T>;
  onTimeUpdateCapture?: AdaptChildReactEventHandler<P, T>;
  onVolumeChange?: AdaptChildReactEventHandler<P, T>;
  onVolumeChangeCapture?: AdaptChildReactEventHandler<P, T>;
  onWaiting?: AdaptChildReactEventHandler<P, T>;
  onWaitingCapture?: AdaptChildReactEventHandler<P, T>;
  onAuxClick?: AdaptChildMouseEventHandler<P, T>;
  onAuxClickCapture?: AdaptChildMouseEventHandler<P, T>;
  onClick?: AdaptChildMouseEventHandler<P, T>;
  onClickCapture?: AdaptChildMouseEventHandler<P, T>;
  onContextMenu?: AdaptChildMouseEventHandler<P, T>;
  onContextMenuCapture?: AdaptChildMouseEventHandler<P, T>;
  onDoubleClick?: AdaptChildMouseEventHandler<P, T>;
  onDoubleClickCapture?: AdaptChildMouseEventHandler<P, T>;
  onDrag?: AdaptChildDragEventHandler<P, T>;
  onDragCapture?: AdaptChildDragEventHandler<P, T>;
  onDragEnd?: AdaptChildDragEventHandler<P, T>;
  onDragEndCapture?: AdaptChildDragEventHandler<P, T>;
  onDragEnter?: AdaptChildDragEventHandler<P, T>;
  onDragEnterCapture?: AdaptChildDragEventHandler<P, T>;
  onDragExit?: AdaptChildDragEventHandler<P, T>;
  onDragExitCapture?: AdaptChildDragEventHandler<P, T>;
  onDragLeave?: AdaptChildDragEventHandler<P, T>;
  onDragLeaveCapture?: AdaptChildDragEventHandler<P, T>;
  onDragOver?: AdaptChildDragEventHandler<P, T>;
  onDragOverCapture?: AdaptChildDragEventHandler<P, T>;
  onDragStart?: AdaptChildDragEventHandler<P, T>;
  onDragStartCapture?: AdaptChildDragEventHandler<P, T>;
  onDrop?: AdaptChildDragEventHandler<P, T>;
  onDropCapture?: AdaptChildDragEventHandler<P, T>;
  onMouseDown?: AdaptChildMouseEventHandler<P, T>;
  onMouseDownCapture?: AdaptChildMouseEventHandler<P, T>;
  onMouseEnter?: AdaptChildMouseEventHandler<P, T>;
  onMouseLeave?: AdaptChildMouseEventHandler<P, T>;
  onMouseMove?: AdaptChildMouseEventHandler<P, T>;
  onMouseMoveCapture?: AdaptChildMouseEventHandler<P, T>;
  onMouseOut?: AdaptChildMouseEventHandler<P, T>;
  onMouseOutCapture?: AdaptChildMouseEventHandler<P, T>;
  onMouseOver?: AdaptChildMouseEventHandler<P, T>;
  onMouseOverCapture?: AdaptChildMouseEventHandler<P, T>;
  onMouseUp?: AdaptChildMouseEventHandler<P, T>;
  onMouseUpCapture?: AdaptChildMouseEventHandler<P, T>;
  onSelect?: AdaptChildReactEventHandler<P, T>;
  onSelectCapture?: AdaptChildReactEventHandler<P, T>;
  onTouchCancel?: AdaptChildTouchEventHandler<P, T>;
  onTouchCancelCapture?: AdaptChildTouchEventHandler<P, T>;
  onTouchEnd?: AdaptChildTouchEventHandler<P, T>;
  onTouchEndCapture?: AdaptChildTouchEventHandler<P, T>;
  onTouchMove?: AdaptChildTouchEventHandler<P, T>;
  onTouchMoveCapture?: AdaptChildTouchEventHandler<P, T>;
  onTouchStart?: AdaptChildTouchEventHandler<P, T>;
  onTouchStartCapture?: AdaptChildTouchEventHandler<P, T>;
  onPointerDown?: AdaptChildPointerEventHandler<P, T>;
  onPointerDownCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerMove?: AdaptChildPointerEventHandler<P, T>;
  onPointerMoveCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerUp?: AdaptChildPointerEventHandler<P, T>;
  onPointerUpCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerCancel?: AdaptChildPointerEventHandler<P, T>;
  onPointerCancelCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerEnter?: AdaptChildPointerEventHandler<P, T>;
  onPointerEnterCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerLeave?: AdaptChildPointerEventHandler<P, T>;
  onPointerLeaveCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerOver?: AdaptChildPointerEventHandler<P, T>;
  onPointerOverCapture?: AdaptChildPointerEventHandler<P, T>;
  onPointerOut?: AdaptChildPointerEventHandler<P, T>;
  onPointerOutCapture?: AdaptChildPointerEventHandler<P, T>;
  onGotPointerCapture?: AdaptChildPointerEventHandler<P, T>;
  onGotPointerCaptureCapture?: AdaptChildPointerEventHandler<P, T>;
  onLostPointerCapture?: AdaptChildPointerEventHandler<P, T>;
  onLostPointerCaptureCapture?: AdaptChildPointerEventHandler<P, T>;
  onScroll?: AdaptChildUIEventHandler<P, T>;
  onScrollCapture?: AdaptChildUIEventHandler<P, T>;
  onWheel?: AdaptChildWheelEventHandler<P, T>;
  onWheelCapture?: AdaptChildWheelEventHandler<P, T>;
  onAnimationStart?: AdaptChildAnimationEventHandler<P, T>;
  onAnimationStartCapture?: AdaptChildAnimationEventHandler<P, T>;
  onAnimationEnd?: AdaptChildAnimationEventHandler<P, T>;
  onAnimationEndCapture?: AdaptChildAnimationEventHandler<P, T>;
  onAnimationIteration?: AdaptChildAnimationEventHandler<P, T>;
  onAnimationIterationCapture?: AdaptChildAnimationEventHandler<P, T>;
  onTransitionEnd?: AdaptChildTransitionEventHandler<P, T>;
  onTransitionEndCapture?: AdaptChildTransitionEventHandler<P, T>;
};
/** The type of easing function to use for animations */
type AnimationTiming =
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "linear";
/** Specifies the duration of animation, the unit of this option is ms. */
type AnimationDuration = number;
/** the offset of a chart, which define the blank space all around */
interface ChartOffset {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  width?: number;
  height?: number;
  brushBottom?: number;
}
interface Padding {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}
interface GeometrySector {
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  cornerRadius?: number;
  forceCornerRadius?: boolean;
  cornerIsExternal?: boolean;
}
type D3Scale<T> = ScaleContinuousNumeric<T, number>;
type AxisDomainItem =
  | string
  | number
  | Function
  | "auto"
  | "dataMin"
  | "dataMax";
/**
 * The domain of axis.
 * This is the definition
 *
 * Numeric domain is always defined by an array of exactly two values, for the min and the max of the axis.
 * Categorical domain is defined as array of all possible values.
 *
 * Can be specified in many ways:
 * - array of numbers
 * - with special strings like 'dataMin' and 'dataMax'
 * - with special string math like 'dataMin - 100'
 * - with keyword 'auto'
 * - or a function
 * - array of functions
 * - or a combination of the above
 */
type AxisDomain =
  | string[]
  | number[]
  | [AxisDomainItem, AxisDomainItem]
  | ((
      [dataMin, dataMax]: [number, number],
      allowDataOverflow: boolean,
    ) => [number, number]);
/** The props definition of base axis */
interface BaseAxisProps {
  /** The type of axis */
  type?: "number" | "category";
  /** The key of data displayed in the axis */
  dataKey?: DataKey<any>;
  /** Whether or not display the axis */
  hide?: boolean;
  /** The scale type or functor of scale */
  scale?: ScaleType | Function;
  /** The option for tick */
  tick?:
    | SVGProps<SVGTextElement>
    | ReactElement<SVGElement>
    | ((props: any) => ReactElement<SVGElement>)
    | boolean;
  /** The count of ticks */
  tickCount?: number;
  /** The option for axisLine */
  axisLine?: boolean | SVGProps<SVGLineElement>;
  /** The option for tickLine */
  tickLine?: boolean | SVGProps<SVGTextElement>;
  /** The size of tick line */
  tickSize?: number;
  /** The formatter function of tick */
  tickFormatter?: (value: any, index: number) => string;
  /**
   * When domain of the axis is specified and the type of the axis is 'number',
   * if allowDataOverflow is set to be false,
   * the domain will be adjusted when the minimum value of data is smaller than domain[0] or
   * the maximum value of data is greater than domain[1] so that the axis displays all data values.
   * If set to true, graphic elements (line, area, bars) will be clipped to conform to the specified domain.
   */
  allowDataOverflow?: boolean;
  /**
   * Allow the axis has duplicated categories or not when the type of axis is "category".
   */
  allowDuplicatedCategory?: boolean;
  /**
   * Allow the ticks of axis to be decimals or not.
   */
  allowDecimals?: boolean;
  /** The domain of scale in this axis */
  domain?: AxisDomain;
  /** Consider hidden elements when computing the domain (defaults to false) */
  includeHidden?: boolean;
  /** The name of data displayed in the axis */
  name?: string;
  /** The unit of data displayed in the axis */
  unit?: string | number;
  /** The type of axis */
  axisType?: AxisType;
  range?: Array<number>;
  /** axis react component */
  AxisComp?: any;
  /** Needed to allow usage of the label prop on the X and Y axis */
  label?: string | number | ReactElement | object;
  /** The HTML element's class name */
  className?: string;
}
/** Defines how ticks are placed and whether / how tick collisions are handled.
 * 'preserveStart' keeps the left tick on collision and ensures that the first tick is always shown.
 * 'preserveEnd' keeps the right tick on collision and ensures that the last tick is always shown.
 * 'preserveStartEnd' keeps the left tick on collision and ensures that the first and last ticks are always shown.
 * 'equidistantPreserveStart' selects a number N such that every nTh tick will be shown without collision.
 */
type AxisInterval =
  | number
  | "preserveStart"
  | "preserveEnd"
  | "preserveStartEnd"
  | "equidistantPreserveStart";
interface TickItem {
  value?: any;
  coordinate: number;
  index?: number;
}
interface CartesianTickItem extends TickItem {
  tickCoord?: number;
  tickSize?: number;
  isShow?: boolean;
}
interface Margin {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}
interface CartesianViewBox {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}
interface PolarViewBox {
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  clockWise?: boolean;
}
type ViewBox = CartesianViewBox | PolarViewBox;
type TooltipEventType = "axis" | "item";
interface TreemapNode {
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  index: number;
  children?: any;
  name: string;
  value: number;
  [k: string]: any;
}
interface SankeyNode {
  x: number;
  y: number;
  dx: number;
  dy: number;
  depth: number;
  value: number;
}
interface SankeyLink {
  target: number;
  source: number;
  value: number;
  sy: number;
  dy: number;
  ty: number;
}
type ActiveShape<PropsType = Record<string, any>, ElementType = SVGElement> =
  | ReactElement<SVGProps<ElementType>>
  | ((props: PropsType) => ReactElement<SVGProps<ElementType>>)
  | ((props: unknown) => JSX.Element)
  | SVGProps<ElementType>
  | boolean;

/**
 * @fileOverview Default Legend Content
 */

type ContentType$2 = ReactElement | ((props: Props$y) => ReactNode);
type IconType = Exclude<LegendType, "none">;
type HorizontalAlignmentType = "center" | "left" | "right";
type VerticalAlignmentType = "top" | "bottom" | "middle";
type Formatter$1 = (
  value: any,
  entry: {
    value: any;
    id?: string;
    type?: LegendType;
    color?: string;
    payload?: {
      strokeDasharray: string | number;
      value?: any;
    };
    dataKey?: DataKey<any>;
  },
  index: number,
) => ReactNode;
interface Payload$1 {
  value: any;
  id?: string;
  type?: LegendType;
  color?: string;
  payload?: {
    strokeDasharray: string | number;
    value?: any;
  };
  formatter?: Formatter$1;
  inactive?: boolean;
  legendIcon?: ReactElement<SVGElement>;
  dataKey?: DataKey<any>;
}
interface InternalProps {
  content?: ContentType$2;
  iconSize?: number;
  iconType?: IconType;
  layout?: LayoutType;
  align?: HorizontalAlignmentType;
  verticalAlign?: VerticalAlignmentType;
  payload?: Array<Payload$1>;
  inactiveColor?: string;
  formatter?: Formatter$1;
  onMouseEnter?: (data: Payload$1, index: number, event: MouseEvent$1) => void;
  onMouseLeave?: (data: Payload$1, index: number, event: MouseEvent$1) => void;
  onClick?: (data: Payload$1, index: number, event: MouseEvent$1) => void;
}
type Props$y = InternalProps &
  Omit<
    PresentationAttributesAdaptChildEvent<any, ReactElement>,
    keyof InternalProps
  >;
declare class DefaultLegendContent extends PureComponent<Props$y> {
  static displayName: string;
  static defaultProps: {
    iconSize: number;
    layout: string;
    align: string;
    verticalAlign: string;
    inactiveColor: string;
  };
  /**
   * Render the path of icon
   * @param {Object} data Data of each legend item
   * @return {String} Path element
   */
  renderIcon(data: Payload$1): JSX.Element;
  /**
   * Draw items of legend
   * @return {ReactElement} Items
   */
  renderItems(): JSX.Element[];
  render(): JSX.Element;
}

type UniqueFunc<T> = (entry: T) => unknown;
/**
 * This is configuration option that decides how to filter for unique values only:
 *
 * - `false` means "no filter"
 * - `true` means "use recharts default filter"
 * - function means "use return of this function as the default key"
 */
type UniqueOption<T> = boolean | UniqueFunc<T>;

/**
 * @fileOverview Legend
 */

type Props$x = Props$y & {
  wrapperStyle?: CSSProperties;
  chartWidth?: number;
  chartHeight?: number;
  width?: number;
  height?: number;
  margin?: {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
  };
  payloadUniqBy?: UniqueOption<Payload$1>;
  onBBoxUpdate?: (box: DOMRect | null) => void;
};
interface State$b {
  boxWidth: number;
  boxHeight: number;
}
declare class Legend extends PureComponent<Props$x, State$b> {
  static displayName: string;
  static defaultProps: {
    iconSize: number;
    layout: string;
    align: string;
    verticalAlign: string;
  };
  private wrapperNode;
  static getWithHeight(
    item: {
      props: {
        layout?: LayoutType;
        height?: number;
        width?: number;
      };
    },
    chartWidth: number,
  ):
    | null
    | {
        height: number;
      }
    | {
        width: number;
      };
  lastBoundingBox: {
    width: number;
    height: number;
  };
  componentDidMount(): void;
  componentDidUpdate(): void;
  getBBox(): DOMRect;
  private updateBBox;
  private getBBoxSnapshot;
  private getDefaultPosition;
  render(): JSX.Element;
}

/**
 * @fileOverview Default Tooltip Content
 */

type TooltipType = "none";
type ValueType = number | string | Array<number | string>;
type NameType = number | string;
type Formatter<TValue extends ValueType, TName extends NameType> = (
  value: TValue,
  name: TName,
  item: Payload<TValue, TName>,
  index: number,
  payload: Array<Payload<TValue, TName>>,
) => [ReactNode, TName] | ReactNode;
interface Payload<TValue extends ValueType, TName extends NameType>
  extends Omit<SVGProps<SVGElement>, "name"> {
  type?: TooltipType;
  color?: string;
  formatter?: Formatter<TValue, TName>;
  name?: TName;
  value?: TValue;
  unit?: ReactNode;
  dataKey?: string | number;
  payload?: any;
  chartType?: string;
  stroke?: string;
  strokeDasharray?: string | number;
  strokeWidth?: number | string;
  className?: string;
  hide?: boolean;
}
interface Props$w<TValue extends ValueType, TName extends NameType> {
  separator?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  formatter?: Formatter<TValue, TName>;
  contentStyle?: CSSProperties;
  itemStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  labelFormatter?: (
    label: any,
    payload: Array<Payload<TValue, TName>>,
  ) => ReactNode;
  label?: any;
  payload?: Array<Payload<TValue, TName>>;
  itemSorter?: (item: Payload<TValue, TName>) => number | string;
  accessibilityLayer?: boolean;
}
declare const DefaultTooltipContent: <
  TValue extends ValueType,
  TName extends NameType,
>(
  props: Props$w<TValue, TName>,
) => JSX.Element;

/**
 * @fileOverview Tooltip
 */

type ContentType$1<TValue extends ValueType, TName extends NameType> =
  | ReactElement
  | ((props: TooltipProps<TValue, TName>) => ReactNode);
type TooltipProps<TValue extends ValueType, TName extends NameType> = Props$w<
  TValue,
  TName
> & {
  accessibilityLayer?: boolean;
  /**
   * If true, then Tooltip is always displayed, once an activeIndex is set by mouse over, or programmatically.
   * If false, then Tooltip is never displayed.
   * If active is undefined, Recharts will control when the Tooltip displays. This includes mouse and keyboard controls.
   */
  active?: boolean | undefined;
  /**
   * If true, then Tooltip will information about hidden series (defaults to false). Interacting with the hide property of Area, Bar, Line, Scatter.
   */
  includeHidden?: boolean | undefined;
  allowEscapeViewBox?: AllowInDimension;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  content?: ContentType$1<TValue, TName>;
  coordinate?: Partial<Coordinate>;
  cursor?: boolean | ReactElement | SVGProps<SVGElement>;
  filterNull?: boolean;
  defaultIndex?: number;
  isAnimationActive?: boolean;
  offset?: number;
  payloadUniqBy?: UniqueOption<Payload<TValue, TName>>;
  position?: Partial<Coordinate>;
  reverseDirection?: AllowInDimension;
  shared?: boolean;
  trigger?: "hover" | "click";
  useTranslate3d?: boolean;
  viewBox?: CartesianViewBox;
  wrapperStyle?: CSSProperties;
};
declare class Tooltip<
  TValue extends ValueType,
  TName extends NameType,
> extends PureComponent<TooltipProps<TValue, TName>> {
  static displayName: string;
  static defaultProps: {
    accessibilityLayer: boolean;
    allowEscapeViewBox: {
      x: boolean;
      y: boolean;
    };
    animationDuration: number;
    animationEasing: string;
    contentStyle: {};
    coordinate: {
      x: number;
      y: number;
    };
    cursor: boolean;
    cursorStyle: {};
    filterNull: boolean;
    isAnimationActive: boolean;
    itemStyle: {};
    labelStyle: {};
    offset: number;
    reverseDirection: {
      x: boolean;
      y: boolean;
    };
    separator: string;
    trigger: string;
    useTranslate3d: boolean;
    viewBox: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
    wrapperStyle: {};
  };
  render(): JSX.Element;
}

interface Props$v {
  aspect?: number;
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  initialDimension?: {
    width: number;
    height: number;
  };
  maxHeight?: number;
  children: ReactElement;
  debounce?: number;
  id?: string | number;
  className?: string | number;
  style?: Omit<CSSProperties, keyof Props$v>;
  onResize?: (width: number, height: number) => void;
}
declare const ResponsiveContainer: ForwardRefExoticComponent<
  Props$v &
    RefAttributes<
      | HTMLDivElement
      | {
          current: HTMLDivElement;
        }
    >
>;

/**
 * @fileOverview Cross
 */

type Props$u = SVGProps<SVGElement>;
declare const Cell: FunctionComponent<Props$u>;

interface TextProps {
  scaleToFit?: boolean;
  angle?: number;
  textAnchor?: "start" | "middle" | "end" | "inherit";
  verticalAnchor?: "start" | "middle" | "end";
  style?: CSSProperties;
  lineHeight?: number | string;
  breakAll?: boolean;
  children?: string | number;
  maxLines?: number;
}
type Props$t = Omit<SVGProps<SVGTextElement>, "textAnchor" | "verticalAnchor"> &
  TextProps;
declare const Text: ({
  x: propsX,
  y: propsY,
  lineHeight,
  capHeight,
  scaleToFit,
  textAnchor,
  verticalAnchor,
  fill,
  ...props
}: Props$t) => JSX.Element;

type ContentType = ReactElement | ((props: Props$s) => ReactNode);
type LabelPosition =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "inside"
  | "outside"
  | "insideLeft"
  | "insideRight"
  | "insideTop"
  | "insideBottom"
  | "insideTopLeft"
  | "insideBottomLeft"
  | "insideTopRight"
  | "insideBottomRight"
  | "insideStart"
  | "insideEnd"
  | "end"
  | "center"
  | "centerTop"
  | "centerBottom"
  | "middle"
  | {
      x?: number;
      y?: number;
    };
interface LabelProps {
  viewBox?: ViewBox;
  parentViewBox?: ViewBox;
  formatter?: Function;
  value?: number | string;
  offset?: number;
  position?: LabelPosition;
  children?: ReactNode;
  className?: string;
  content?: ContentType;
  textBreakAll?: boolean;
  angle?: number;
  index?: number;
}
type Props$s = Omit<SVGProps<SVGTextElement>, "viewBox"> & LabelProps;
type ImplicitLabelType =
  | boolean
  | string
  | number
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | Props$s;
declare function Label({ offset, ...restProps }: Props$s): JSX.Element;
declare namespace Label {
  var displayName: string;
  var parseViewBox: (props: any) => ViewBox;
  var renderCallByParent: (
    parentProps: {
      children?: ReactNode;
      label?: unknown;
    },
    viewBox?: ViewBox,
    checkPropsLabel?: boolean,
  ) => ReactElement<any, string | JSXElementConstructor<any>>[];
}

interface Data {
  value?: number | string | Array<number | string>;
  payload?: any;
  parentViewBox?: ViewBox;
}
interface LabelListProps<T extends Data> {
  id?: string;
  data?: Array<T>;
  valueAccessor?: Function;
  clockWise?: boolean;
  dataKey?: DataKey<Record<string, any>>;
  content?: ContentType;
  textBreakAll?: boolean;
  position?: LabelPosition;
  offset?: Props$s["offset"];
  angle?: number;
  formatter?: Function;
}
type Props$r<T extends Data> = SVGProps<SVGTextElement> & LabelListProps<T>;
type ImplicitLabelListType<T extends Data> =
  | boolean
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | Props$r<T>;
declare function LabelList<T extends Data>({
  valueAccessor,
  ...restProps
}: Props$r<T>): JSX.Element;
declare namespace LabelList {
  var displayName: string;
  var renderCallByParent: <T extends Data>(
    parentProps: {
      children?: ReactNode;
      label?: unknown;
    },
    data: T[],
    checkPropsLabel?: boolean,
  ) => JSX.Element[];
}

/**
 * @fileOverview Customized
 */

type Comp<P> = FunctionComponent<P> | Component<P> | ReactElement<P>;
type Props$q<P, C extends Comp<P>> = P & {
  component: C;
};
/**
 * custom svg elements by rechart instance props and state.
 * @returns {Object}   svg elements
 */
declare function Customized<P, C extends Comp<P>>({
  component,
  ...props
}: Props$q<P, C>): JSX.Element;
declare namespace Customized {
  var displayName: string;
}

/**
 * @fileOverview Sector
 */

interface SectorProps extends GeometrySector {
  className?: string;
}
type Props$p = SVGProps<SVGPathElement> & SectorProps;
declare const Sector: FC<Props$p>;

// Last module patch version validated against: 3.1.0

/**
 * A D3 path serializer implementing CanvasPathMethods
 */
interface Path {
  /**
   * Move to the specified point ⟨x, y⟩. Equivalent to context.moveTo and SVG’s “moveto” command.
   *
   * @param x x-Coordinate of point to move to
   * @param y y-Coordinate of point to move to
   */
  moveTo(x: number, y: number): void;

  /**
   * Ends the current subpath and causes an automatic straight line to be drawn from the current point to the initial point of the current subpath.
   * Equivalent to context.closePath and SVG’s “closepath” command.
   */
  closePath(): void;

  /**
   * Draws a straight line from the current point to the specified point ⟨x, y⟩.
   * Equivalent to context.lineTo and SVG’s “lineto” command.
   *
   * @param x x-Coordinate of point to draw the line to
   * @param y y-Coordinate of point to draw the line to
   */
  lineTo(x: number, y: number): void;

  /**
   * Draws a quadratic Bézier segment from the current point to the specified point ⟨x, y⟩, with the specified control point ⟨cpx, cpy⟩.
   * Equivalent to context.quadraticCurveTo and SVG’s quadratic Bézier curve commands.
   *
   * @param cpx x-Coordinate of the control point for the quadratic Bézier curve
   * @param cpy y-Coordinate of the control point for the quadratic Bézier curve
   * @param x x-Coordinate of point to draw the curve to
   * @param y y-Coordinate of point to draw the curve to
   */
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;

  /**
   * Draws a cubic Bézier segment from the current point to the specified point ⟨x, y⟩, with the specified control points ⟨cpx1, cpy1⟩ and ⟨cpx2, cpy2⟩.
   * Equivalent to context.bezierCurveTo and SVG’s cubic Bézier curve commands.
   *
   * @param cpx1 x-Coordinate of the first control point for the Bézier curve
   * @param cpy1 y-Coordinate of the first control point for the Bézier curve
   * @param cpx2 x-Coordinate of the second control point for the Bézier curve
   * @param cpy2 y-Coordinate of the second control point for the Bézier curve
   * @param x x-Coordinate of point to draw the curve to
   * @param y y-Coordinate of point to draw the curve to
   */
  bezierCurveTo(
    cpx1: number,
    cpy1: number,
    cpx2: number,
    cpy2: number,
    x: number,
    y: number,
  ): void;

  /**
   * Draws a circular arc segment with the specified radius that starts tangent to the line between the current point and the specified point ⟨x1, y1⟩
   * and ends tangent to the line between the specified points ⟨x1, y1⟩ and ⟨x2, y2⟩. If the first tangent point is not equal to the current point,
   * a straight line is drawn between the current point and the first tangent point. Equivalent to context.arcTo and uses SVG’s elliptical arc curve commands.
   *
   * @param x1 x-Coordinate of the first tangent point
   * @param y1 y-Coordinate of the first tangent point
   * @param x2 x-Coordinate of the second tangent point
   * @param y2 y-Coordinate of the second tangent point
   * @param radius  Radius of the arc segment
   */
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;

  /**
   * Draws a circular arc segment with the specified center ⟨x, y⟩, radius, startAngle and endAngle. If anticlockwise is true,
   * the arc is drawn in the anticlockwise direction; otherwise, it is drawn in the clockwise direction.
   * If the current point is not equal to the starting point of the arc, a straight line is drawn from the current point to the start of the arc.
   * Equivalent to context.arc and uses SVG’s elliptical arc curve commands.
   *
   * @param x x-Coordinate of the center point of the arc segment
   * @param y y-Coordinate of the center point of the arc segment
   * @param radius Radius of the arc segment
   * @param startAngle Start angle of arc segment
   * @param endAngle End angle of arc segment
   * @param anticlockwise Flag indicating directionality (true = anti-clockwise, false = clockwise)
   */
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise?: boolean,
  ): void;

  /**
   * Creates a new subpath containing just the four points ⟨x, y⟩, ⟨x + w, y⟩, ⟨x + w, y + h⟩, ⟨x, y + h⟩,
   * with those four points connected by straight lines, and then marks the subpath as closed. Equivalent to context.rect and uses SVG’s “lineto” commands.
   *
   * @param x x-Coordinate of starting point for drawing the rectangle
   * @param y y-Coordinate of starting point for drawing the rectangle
   * @param w Width of rectangle
   * @param h Height of rectangle
   */
  rect(x: number, y: number, w: number, h: number): void;

  /**
   * Returns the string representation of this path according to SVG’s path data specification.
   */
  toString(): string;
}

// Last module patch version validated against: 3.1.0

declare global {
  interface CanvasRenderingContext2D {} // eslint-disable-line @typescript-eslint/no-empty-interface
}

// -----------------------------------------------------------------------------------
// Shared Types and Interfaces
// -----------------------------------------------------------------------------------

/**
 * @deprecated
 * This interface is used to bridge the gap between two incompatible versions of TypeScript (see [#25944](https://github.com/Microsoft/TypeScript/pull/25944)).
 * Use `CanvasPathMethods` instead with TS <= 3.0 and `CanvasPath` with TS >= 3.1.
 */
interface CanvasPath_D3Shape {
  arc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
    anticlockwise?: boolean,
  ): void;
  arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
  bezierCurveTo(
    cp1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number,
  ): void;
  closePath(): void;
  ellipse(
    x: number,
    y: number,
    radiusX: number,
    radiusY: number,
    rotation: number,
    startAngle: number,
    endAngle: number,
    anticlockwise?: boolean,
  ): void;
  lineTo(x: number, y: number): void;
  moveTo(x: number, y: number): void;
  quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
  rect(x: number, y: number, w: number, h: number): void;
}

// -----------------------------------------------------------------------------------
// Curve Factories
// -----------------------------------------------------------------------------------

/**
 * A minimal interface for a curve generator which supports only the rendering of lines.
 * Methods for related to the rendering of areas are not implemented in this minimal interface.
 *
 * While lines are defined as a sequence of two-dimensional [x, y] points,
 * there remains the task of transforming this discrete representation into a continuous shape: i.e., how to interpolate between the points.
 * A curve generator serves this purpose.
 *
 * Curves are typically not constructed or used directly, instead being passed to line.curve.
 */
interface CurveGeneratorLineOnly {
  /**
   * Indicates the start of a new line segment. Zero or more points will follow.
   */
  lineStart(): void;
  /**
   * Indicates the end of the current line segment.
   */
  lineEnd(): void;
  /**
   * Indicates a new point in the current line segment with the given x- and y-values.
   */
  point(x: number, y: number): void;
}

/**
 * A minimal interface for a curve generator which supports the rendering of lines and areas.
 *
 * While lines are defined as a sequence of two-dimensional [x, y] points,
 * and areas are similarly defined by a topline and a baseline,
 * there remains the task of transforming this discrete representation into a continuous shape: i.e., how to interpolate between the points.
 * A curve generator serves this purpose.
 *
 * Curves are typically not constructed or used directly, instead being passed to line.curve and area.curve.
 */
interface CurveGenerator extends CurveGeneratorLineOnly {
  /**
   * Indicates the start of a new area segment.
   * Each area segment consists of exactly two line segments: the topline, followed by the baseline, with the baseline points in reverse order.
   */
  areaStart(): void;
  /**
   * Indicates the end of the current area segment.
   */
  areaEnd(): void;
}

/**
 * A factory for curve generators addressing both lines and areas.
 */
type CurveFactory =
  /**
   * Returns a curve generator which renders to the specified context.
   *
   * @param context A rendering context.
   */
  (context: CanvasRenderingContext2D | Path) => CurveGenerator;

// -----------------------------------------------------------------------------------
// SYMBOLS
// -----------------------------------------------------------------------------------

/**
 * A Symbol Type.
 *
 * Symbol types are typically not used directly, instead being passed to symbol.type.
 * However, you can define your own symbol type implementation should none of the built-in types satisfy your needs using the following interface.
 * You can also use this low-level interface with a built-in symbol type as an alternative to the symbol generator.
 */
interface SymbolType {
  /**
   * Renders this symbol type to the specified context with the specified size in square pixels. The context implements the CanvasPath interface.
   * (Note that this is a subset of the CanvasRenderingContext2D interface!)
   *
   * @param context A rendering context implementing CanvasPath.
   * @param size Size of the symbol to draw.
   */
  draw(context: CanvasPath_D3Shape, size: number): void;
}

// -----------------------------------------------------------------------------------
// STACKS
// -----------------------------------------------------------------------------------

/**
 * Each series point j in a stack chart corresponds to the jth element in the input data.
 * Each point is represented as an array [y0, y1] where y0 is the lower value (baseline) and y1 is the upper value (topline);
 * the difference between y0 and y1 corresponds to the computed value for this point.
 *
 * SeriesPoint is a [number, number] two-element Array with added data and index properties
 * related to the data element which formed the basis for theSeriesPoint.
 */
interface SeriesPoint<Datum> extends Array<number> {
  /**
   * Corresponds to y0, the lower value (baseline).
   */
  0: number;
  /**
   * Corresponds to y1, the upper value (topline).
   */
  1: number;
  /**
   * The data element underlying the series point.
   */
  data: Datum;
}

/**
 * The series are determined by the keys accessor; each series i in the returned array corresponds to the ith key.
 * Each series is an array of points, where each point j corresponds to the jth element in the input data.
 *
 * The key for each series is available as series.key, and the index as series.index.
 */
interface Series<Datum, Key> extends Array<SeriesPoint<Datum>> {
  /**
   * Key of the series.
   */
  key: Key;
  /**
   * Index of the series in the series array returned by stack generator.
   */
  index: number;
}

/**
 * @fileOverview Curve
 */

type CurveType =
  | "basis"
  | "basisClosed"
  | "basisOpen"
  | "bumpX"
  | "bumpY"
  | "bump"
  | "linear"
  | "linearClosed"
  | "natural"
  | "monotoneX"
  | "monotoneY"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter"
  | CurveFactory;
interface Point {
  x: number;
  y: number;
}
interface CurveProps {
  className?: string;
  type?: CurveType;
  layout?: LayoutType;
  baseLine?: number | Array<Point>;
  points?: Array<Point>;
  connectNulls?: boolean;
  path?: string;
  pathRef?: (ref: SVGPathElement) => void;
}
type Props$o = Omit<
  PresentationAttributesWithProps<CurveProps, SVGPathElement>,
  "type" | "points"
> &
  CurveProps;
declare const Curve: FC<Props$o>;

/**
 * @fileOverview Rectangle
 */

type RectRadius = [number, number, number, number];
interface RectangleProps {
  className?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  radius?: number | RectRadius;
  isAnimationActive?: boolean;
  isUpdateAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
}
type Props$n = Omit<SVGProps<SVGPathElement>, "radius"> & RectangleProps;
declare const Rectangle: FC<Props$n>;

/**
 * @fileOverview Polygon
 */

interface PolygonProps {
  className?: string;
  points?: Coordinate[];
  baseLinePoints?: Coordinate[];
  connectNulls?: boolean;
}
type Props$m = Omit<SVGProps<SVGPolygonElement>, "points"> & PolygonProps;
declare const Polygon: FC<Props$m>;

/**
 * @fileOverview Dot
 */

interface DotProps {
  className?: string;
  cx?: number;
  cy?: number;
  r?: number;
  clipDot?: boolean;
}
type Props$l = PresentationAttributesWithProps<DotProps, SVGCircleElement> &
  DotProps;
declare const Dot: FC<Props$l>;

/**
 * @fileOverview Cross
 */

interface CrossProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  className?: number;
}
type Props$k = SVGProps<SVGPathElement> & CrossProps;
declare const Cross: FC<Props$k>;

/**
 * @fileOverview Curve
 */

type SizeType = "area" | "diameter";
interface InnerSymbolsProp {
  className?: string;
  type: SymbolType$1;
  cx?: number;
  cy?: number;
  size?: number;
  sizeType?: SizeType;
}
type SymbolsProps = SVGProps<SVGPathElement> & InnerSymbolsProp;
declare const Symbols: {
  ({ type, size, sizeType, ...rest }: SymbolsProps): JSX.Element;
  registerSymbol: (key: string, factory: SymbolType) => void;
};

/**
 * @fileOverview Polar Grid
 */

interface PolarGridProps {
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  polarAngles?: number[];
  polarRadius?: number[];
  gridType?: "polygon" | "circle";
  radialLines?: boolean;
}
type Props$j = SVGProps<SVGPathElement> & PolarGridProps;
declare const PolarGrid: {
  ({
    cx,
    cy,
    innerRadius,
    outerRadius,
    gridType,
    radialLines,
    ...props
  }: Props$j): JSX.Element;
  displayName: string;
};

interface PolarRadiusAxisProps extends Omit<BaseAxisProps, "unit"> {
  cx?: number;
  cy?: number;
  radiusAxisId?: string | number;
  angle?: number;
  orientation?: "left" | "right" | "middle";
  ticks?: TickItem[];
  reversed?: boolean;
}
type Props$i = PresentationAttributesAdaptChildEvent<any, SVGElement> &
  PolarRadiusAxisProps;
declare class PolarRadiusAxis extends PureComponent<Props$i> {
  static displayName: string;
  static axisType: string;
  static defaultProps: {
    type: string;
    radiusAxisId: number;
    cx: number;
    cy: number;
    angle: number;
    orientation: string;
    stroke: string;
    axisLine: boolean;
    tick: boolean;
    tickCount: number;
    allowDataOverflow: boolean;
    scale: string;
    allowDuplicatedCategory: boolean;
  };
  /**
   * Calculate the coordinate of tick
   * @param  {Number} coordinate The radius of tick
   * @return {Object} (x, y)
   */
  getTickValueCoord({ coordinate }: TickItem): Coordinate;
  getTickTextAnchor(): string;
  getViewBox(): {
    cx: number;
    cy: number;
    startAngle: number;
    endAngle: number;
    innerRadius: number;
    outerRadius: number;
  };
  renderAxisLine(): JSX.Element;
  static renderTickItem(
    option: Props$i["tick"],
    props: any,
    value: string | number,
  ): JSX.Element;
  renderTicks(): JSX.Element;
  render(): JSX.Element;
}

/**
 * @fileOverview Axis of radial direction
 */

interface PolarAngleAxisProps extends BaseAxisProps {
  angleAxisId?: string | number;
  cx?: number;
  cy?: number;
  radius?: number;
  axisLineType?: "polygon" | "circle";
  ticks?: TickItem[];
  orientation?: "inner" | "outer";
}
type Props$h = PresentationAttributesAdaptChildEvent<any, SVGTextElement> &
  PolarAngleAxisProps;
declare class PolarAngleAxis extends PureComponent<Props$h> {
  static displayName: string;
  static axisType: string;
  static defaultProps: {
    type: string;
    angleAxisId: number;
    scale: string;
    cx: number;
    cy: number;
    orientation: string;
    axisLine: boolean;
    tickLine: boolean;
    tickSize: number;
    tick: boolean;
    hide: boolean;
    allowDuplicatedCategory: boolean;
  };
  /**
   * Calculate the coordinate of line endpoint
   * @param  {Object} data The Data if ticks
   * @return {Object} (x0, y0): The start point of text,
   *                  (x1, y1): The end point close to text,
   *                  (x2, y2): The end point close to axis
   */
  getTickLineCoord(data: TickItem): {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
  /**
   * Get the text-anchor of each tick
   * @param  {Object} data Data of ticks
   * @return {String} text-anchor
   */
  getTickTextAnchor(data: TickItem): string;
  renderAxisLine(): JSX.Element;
  static renderTickItem(
    option: PolarAngleAxisProps["tick"],
    props: any,
    value: string | number,
  ): JSX.Element;
  renderTicks(): JSX.Element;
  render(): JSX.Element;
}

/**
 * @fileOverview Render sectors of a pie
 */

interface PieDef {
  /** The abscissa of pole in polar coordinate  */
  cx?: number | string;
  /** The ordinate of pole in polar coordinate  */
  cy?: number | string;
  /** The start angle of first sector */
  startAngle?: number;
  /** The end angle of last sector */
  endAngle?: number;
  paddingAngle?: number;
  /** The inner radius of sectors */
  innerRadius?: number | string;
  /** The outer radius of sectors */
  outerRadius?: number | string;
  cornerRadius?: number | string;
}
type PieLabelLine =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | SVGProps<SVGPathElement>
  | boolean;
type PieLabel<P = any> =
  | ReactElement<SVGElement>
  | ((props: P) => ReactNode | ReactElement<SVGElement>)
  | (SVGProps<SVGTextElement> & {
      offsetRadius?: number;
    })
  | boolean;
type PieSectorDataItem = Props$p & {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: any;
};
interface PieProps extends PieDef {
  className?: string;
  animationId?: number;
  dataKey: DataKey<any>;
  nameKey?: DataKey<any>;
  valueKey?: DataKey<any>;
  /** Match each sector's stroke color to it's fill color */
  blendStroke?: boolean;
  /** The minimum angle for no-zero element */
  minAngle?: number;
  legendType?: LegendType;
  tooltipType?: TooltipType$1;
  /** the max radius of pie */
  maxRadius?: number;
  hide?: boolean;
  /** the input data */
  data?: any[];
  sectors?: PieSectorDataItem[];
  activeShape?: ActiveShape<PieSectorDataItem>;
  inactiveShape?: ActiveShape<PieSectorDataItem>;
  labelLine?: PieLabelLine;
  label?: PieLabel;
  activeIndex?: number | number[];
  animationEasing?: AnimationTiming;
  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  onAnimationEnd?: () => void;
  onAnimationStart?: () => void;
  id?: string;
  onMouseEnter?: (data: any, index: number, e: MouseEvent) => void;
  onMouseLeave?: (data: any, index: number, e: MouseEvent) => void;
  onClick?: (data: any, index: number, e: MouseEvent) => void;
  rootTabIndex?: number;
}
interface PieLabelRenderProps extends PieDef {
  name: string;
  percent?: number;
  stroke: string;
  index?: number;
  textAnchor: string;
  x: number;
  y: number;
  [key: string]: any;
}
interface State$a {
  isAnimationFinished?: boolean;
  prevIsAnimationActive?: boolean;
  prevSectors?: PieSectorDataItem[];
  curSectors?: PieSectorDataItem[];
  prevAnimationId?: number;
  sectorToFocus?: number;
}
type Props$g = PresentationAttributesAdaptChildEvent<any, SVGElement> &
  PieProps;
declare class Pie extends PureComponent<Props$g, State$a> {
  pieRef: SVGGElement;
  sectorRefs: SVGGElement[];
  static displayName: string;
  static defaultProps: {
    stroke: string;
    fill: string;
    legendType: string;
    cx: string;
    cy: string;
    startAngle: number;
    endAngle: number;
    innerRadius: number;
    outerRadius: string;
    paddingAngle: number;
    labelLine: boolean;
    hide: boolean;
    minAngle: number;
    isAnimationActive: boolean;
    animationBegin: number;
    animationDuration: number;
    animationEasing: string;
    nameKey: string;
    blendStroke: boolean;
    rootTabIndex: number;
  };
  static parseDeltaAngle: (startAngle: number, endAngle: number) => number;
  static getRealPieData: (itemProps: Props$g) => any[];
  static parseCoordinateOfPie: (
    itemProps: Props$g,
    offset: ChartOffset,
  ) => {
    cx: number;
    cy: number;
    innerRadius: number;
    outerRadius: number;
    maxRadius: number;
  };
  static getComposedData: ({
    item,
    offset,
  }: {
    item: ReactElement<Props$g>;
    offset: ChartOffset;
  }) => Omit<Props$g, "dataKey">;
  constructor(props: Props$g);
  state: State$a;
  static getDerivedStateFromProps(
    nextProps: Props$g,
    prevState: State$a,
  ): State$a;
  static getTextAnchor(x: number, cx: number): "start" | "middle" | "end";
  id: string;
  isActiveIndex(i: number): boolean;
  hasActiveIndex(): number | boolean;
  handleAnimationEnd: () => void;
  handleAnimationStart: () => void;
  static renderLabelLineItem(
    option: PieLabelLine,
    props: any,
    key: string,
  ): JSX.Element;
  static renderLabelItem(option: PieLabel, props: any, value: any): JSX.Element;
  renderLabels(sectors: PieSectorDataItem[]): JSX.Element;
  renderSectorsStatically(sectors: PieSectorDataItem[]): JSX.Element[];
  renderSectorsWithAnimation(): JSX.Element;
  attachKeyboardHandlers(pieRef: SVGGElement): void;
  renderSectors(): JSX.Element | JSX.Element[];
  componentDidMount(): void;
  render(): JSX.Element;
}

/**
 * @fileOverview Radar
 */

interface RadarPoint {
  x: number;
  y: number;
  cx?: number;
  cy?: number;
  angle?: number;
  radius?: number;
  value?: number;
  payload?: any;
  name?: string;
}
type RadarDot =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | Props$l
  | boolean;
interface RadarProps {
  className?: string;
  dataKey: DataKey<any>;
  angleAxisId?: string | number;
  radiusAxisId?: string | number;
  points?: RadarPoint[];
  baseLinePoints?: RadarPoint[];
  isRange?: boolean;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  activeDot?: RadarDot;
  dot?: RadarDot;
  legendType?: LegendType;
  tooltipType?: TooltipType$1;
  hide?: boolean;
  connectNulls?: boolean;
  label?: any;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  isAnimationActive?: boolean;
  animationId?: number;
  animationEasing?: AnimationTiming;
  onMouseEnter?: (props: any, e: MouseEvent$1<SVGPolygonElement>) => void;
  onMouseLeave?: (props: any, e: MouseEvent$1<SVGPolygonElement>) => void;
}
type RadiusAxis = Props$i & {
  scale: (value: any) => number;
};
type AngleAxis = Props$h & {
  scale: (value: any) => number;
};
type Props$f = Omit<
  SVGProps<SVGElement>,
  "onMouseEnter" | "onMouseLeave" | "points"
> &
  RadarProps;
interface State$9 {
  isAnimationFinished?: boolean;
  prevPoints?: RadarPoint[];
  curPoints?: RadarPoint[];
  prevAnimationId?: number;
}
declare class Radar extends PureComponent<Props$f, State$9> {
  static displayName: string;
  static defaultProps: {
    angleAxisId: number;
    radiusAxisId: number;
    hide: boolean;
    activeDot: boolean;
    dot: boolean;
    legendType: string;
    isAnimationActive: boolean;
    animationBegin: number;
    animationDuration: number;
    animationEasing: string;
  };
  static getComposedData: ({
    radiusAxis,
    angleAxis,
    displayedData,
    dataKey,
    bandSize,
  }: {
    radiusAxis: RadiusAxis;
    angleAxis: AngleAxis;
    displayedData: any[];
    dataKey: RadarProps["dataKey"];
    bandSize: number;
  }) => {
    points: RadarPoint[];
    isRange: boolean;
    baseLinePoints: RadarPoint[];
  };
  state: State$9;
  static getDerivedStateFromProps(
    nextProps: Props$f,
    prevState: State$9,
  ): State$9;
  handleAnimationEnd: () => void;
  handleAnimationStart: () => void;
  handleMouseEnter: (e: MouseEvent$1<SVGPolygonElement>) => void;
  handleMouseLeave: (e: MouseEvent$1<SVGPolygonElement>) => void;
  static renderDotItem(option: RadarDot, props: any): JSX.Element;
  renderDots(points: RadarPoint[]): JSX.Element;
  renderPolygonStatically(points: RadarPoint[]): JSX.Element;
  renderPolygonWithAnimation(): JSX.Element;
  renderPolygon(): JSX.Element;
  render(): JSX.Element;
}

/**
 * @fileOverview Render a group of radial bar
 */

type RadialBarDataItem = Props$p & {
  value?: any;
  payload?: any;
  background?: Props$p;
};
type RadialBarBackground = ActiveShape<Props$p>;
interface InternalRadialBarProps {
  animationId?: string | number;
  className?: string;
  angleAxisId?: string | number;
  radiusAxisId?: string | number;
  startAngle?: number;
  endAngle?: number;
  shape?: ActiveShape<Props$p, SVGPathElement>;
  activeShape?: ActiveShape<Props$p, SVGPathElement>;
  activeIndex?: number;
  dataKey: string | number | ((obj: any) => any);
  cornerRadius?: string | number;
  forceCornerRadius?: boolean;
  cornerIsExternal?: boolean;
  minPointSize?: number;
  maxBarSize?: number;
  data?: RadialBarDataItem[];
  legendType?: LegendType;
  tooltipType?: TooltipType$1;
  hide?: boolean;
  label?: ImplicitLabelListType<any>;
  stackId?: string | number;
  background?: RadialBarBackground;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
}
type RadialBarProps = PresentationAttributesAdaptChildEvent<any, SVGElement> &
  InternalRadialBarProps;
interface State$8 {
  readonly isAnimationFinished?: boolean;
  readonly prevData?: RadialBarDataItem[];
  readonly curData?: RadialBarDataItem[];
  readonly prevAnimationId?: string | number;
}
declare class RadialBar extends PureComponent<RadialBarProps, State$8> {
  static displayName: string;
  static defaultProps: {
    angleAxisId: number;
    radiusAxisId: number;
    minPointSize: number;
    hide: boolean;
    legendType: string;
    data: RadialBarDataItem[];
    isAnimationActive: boolean;
    animationBegin: number;
    animationDuration: number;
    animationEasing: string;
    forceCornerRadius: boolean;
    cornerIsExternal: boolean;
  };
  static getComposedData: ({
    item,
    props,
    radiusAxis,
    radiusAxisTicks,
    angleAxis,
    angleAxisTicks,
    displayedData,
    dataKey,
    stackedData,
    barPosition,
    bandSize,
    dataStartIndex,
  }: {
    item: ReactElement;
    props: any;
    radiusAxis: any;
    radiusAxisTicks: Array<TickItem>;
    angleAxis: any;
    angleAxisTicks: Array<TickItem>;
    displayedData: any[];
    dataKey: RadialBarProps["dataKey"];
    stackedData?: any[];
    barPosition?: any[];
    bandSize?: number;
    dataStartIndex: number;
  }) => {
    data: any[];
    layout: any;
  };
  state: State$8;
  static getDerivedStateFromProps(
    nextProps: RadialBarProps,
    prevState: State$8,
  ): State$8;
  getDeltaAngle(): number;
  handleAnimationEnd: () => void;
  handleAnimationStart: () => void;
  renderSectorsStatically(sectors: Props$p[]): JSX.Element[];
  renderSectorsWithAnimation(): JSX.Element;
  renderSectors(): JSX.Element | JSX.Element[];
  renderBackground(sectors?: RadialBarDataItem[]): JSX.Element[];
  render(): JSX.Element;
}

/**
 * @fileOverview Brush
 */

type BrushTravellerType =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>);
interface BrushStartEndIndex {
  startIndex?: number;
  endIndex?: number;
}
interface InternalBrushProps {
  x?: number;
  y?: number;
  width?: number;
  data?: any[];
  updateId?: string | number;
}
interface BrushProps extends InternalBrushProps {
  className?: string;
  ariaLabel?: string;
  height: number;
  travellerWidth?: number;
  traveller?: BrushTravellerType;
  gap?: number;
  padding?: Padding;
  dataKey?: DataKey<any>;
  startIndex?: number;
  endIndex?: number;
  tickFormatter?: (value: any, index: number) => string | number;
  children?: ReactElement;
  onChange?: (newIndex: BrushStartEndIndex) => void;
  onDragEnd?: (newIndex: BrushStartEndIndex) => void;
  leaveTimeOut?: number;
  alwaysShowText?: boolean;
}
type Props$e = Omit<SVGProps<SVGElement>, "onChange"> & BrushProps;
type BrushTravellerId = "startX" | "endX";
interface State$7 {
  isTravellerMoving?: boolean;
  isTravellerFocused?: boolean;
  isSlideMoving?: boolean;
  startX?: number;
  endX?: number;
  slideMoveStartX?: number;
  movingTravellerId?: BrushTravellerId;
  isTextActive?: boolean;
  brushMoveStartX?: number;
  scale?: ScalePoint<number>;
  scaleValues?: number[];
  prevData?: any[];
  prevWidth?: number;
  prevX?: number;
  prevTravellerWidth?: number;
  prevUpdateId?: string | number;
}
declare class Brush extends PureComponent<Props$e, State$7> {
  static displayName: string;
  static defaultProps: {
    height: number;
    travellerWidth: number;
    gap: number;
    fill: string;
    stroke: string;
    padding: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    leaveTimeOut: number;
    alwaysShowText: boolean;
  };
  constructor(props: Props$e);
  leaveTimer?: number;
  travellerDragStartHandlers?: Record<
    BrushTravellerId,
    (event: MouseEvent<SVGGElement> | TouchEvent<SVGGElement>) => void
  >;
  static renderDefaultTraveller(props: any): JSX.Element;
  static renderTraveller(option: BrushTravellerType, props: any): JSX.Element;
  static getDerivedStateFromProps(
    nextProps: Props$e,
    prevState: State$7,
  ): State$7;
  componentWillUnmount(): void;
  static getIndexInRange(valueRange: number[], x: number): number;
  getIndex({ startX, endX }: { startX: number; endX: number }): {
    startIndex: number;
    endIndex: number;
  };
  getTextOfTick(index: number): any;
  handleDrag: (e: Touch | MouseEvent<SVGGElement> | MouseEvent) => void;
  handleTouchMove: (e: TouchEvent<SVGGElement>) => void;
  attachDragEndListener(): void;
  detachDragEndListener(): void;
  handleDragEnd: () => void;
  handleLeaveWrapper: () => void;
  handleEnterSlideOrTraveller: () => void;
  handleLeaveSlideOrTraveller: () => void;
  handleSlideDragStart: (
    e: TouchEvent<SVGRectElement> | MouseEvent<SVGRectElement>,
  ) => void;
  handleSlideDrag(e: Touch | MouseEvent<SVGGElement> | MouseEvent): void;
  handleTravellerDragStart(
    id: BrushTravellerId,
    e: MouseEvent<SVGGElement> | TouchEvent<SVGGElement>,
  ): void;
  handleTravellerMove(e: Touch | MouseEvent<SVGGElement> | MouseEvent): void;
  handleTravellerMoveKeyboard(direction: 1 | -1, id: BrushTravellerId): void;
  renderBackground(): JSX.Element;
  renderPanorama(): ReactElement<any, string | JSXElementConstructor<any>>;
  renderTravellerLayer(travellerX: number, id: BrushTravellerId): JSX.Element;
  renderSlide(startX: number, endX: number): JSX.Element;
  renderText(): JSX.Element;
  render(): JSX.Element;
}

type IfOverflow = "hidden" | "visible" | "discard" | "extendDomain";

/**
 * @fileOverview Reference Line
 */

interface InternalReferenceLineProps {
  viewBox?: CartesianViewBox;
  xAxis?: Omit<Props$A, "scale"> & {
    scale: D3Scale<string | number>;
  };
  yAxis?: Omit<Props$z, "scale"> & {
    scale: D3Scale<string | number>;
  };
  clipPathId?: number | string;
}
type Segment = {
  x?: number | string;
  y?: number | string;
};
type ReferenceLinePosition = "middle" | "start" | "end";
interface ReferenceLineProps extends InternalReferenceLineProps {
  isFront?: boolean;
  /** @deprecated use ifOverflow="extendDomain"  */
  alwaysShow?: boolean;
  ifOverflow?: IfOverflow;
  x?: number | string;
  y?: number | string;
  segment?: ReadonlyArray<Segment>;
  position?: ReferenceLinePosition;
  className?: number | string;
  yAxisId?: number | string;
  xAxisId?: number | string;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  label?: ImplicitLabelType;
}
/**
 * This excludes `viewBox` prop from svg for two reasons:
 * 1. The components wants viewBox of object type, and svg wants string
 *    - so there's a conflict, and the component will throw if it gets string
 * 2. Internally the component calls `filterProps` which filters the viewBox away anyway
 */
type Props$d = Omit<SVGProps<SVGLineElement>, "viewBox"> & ReferenceLineProps;
declare class ReferenceLine extends Component<Props$d> {
  static displayName: string;
  static defaultProps: {
    isFront: boolean;
    ifOverflow: string;
    xAxisId: number;
    yAxisId: number;
    fill: string;
    stroke: string;
    fillOpacity: number;
    strokeWidth: number;
    position: string;
  };
  render(): JSX.Element;
}

/**
 * @fileOverview Reference Dot
 */

interface InternalReferenceDotProps {
  xAxis?: Omit<Props$A, "scale"> & {
    scale: D3Scale<string | number>;
  };
  yAxis?: Omit<Props$z, "scale"> & {
    scale: D3Scale<string | number>;
  };
  clipPathId?: number | string;
}
interface ReferenceDotProps extends InternalReferenceDotProps {
  r?: number;
  isFront?: boolean;
  /** @deprecated use ifOverflow="extendDomain"  */
  alwaysShow?: boolean;
  ifOverflow?: IfOverflow;
  x?: number | string;
  y?: number | string;
  className?: number | string;
  yAxisId?: number | string;
  xAxisId?: number | string;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  label?: ImplicitLabelType;
}
type Props$c = Props$l & ReferenceDotProps;
declare class ReferenceDot extends Component<Props$c> {
  static displayName: string;
  static defaultProps: {
    isFront: boolean;
    ifOverflow: string;
    xAxisId: number;
    yAxisId: number;
    r: number;
    fill: string;
    stroke: string;
    fillOpacity: number;
    strokeWidth: number;
  };
  static renderDot: (option: Props$c["shape"], props: any) => JSX.Element;
  render(): JSX.Element;
}

/**
 * @fileOverview Reference Line
 */

interface InternalReferenceAreaProps {
  viewBox?: CartesianViewBox;
  xAxis?: Omit<Props$A, "scale"> & {
    scale: D3Scale<string | number>;
  };
  yAxis?: Omit<Props$z, "scale"> & {
    scale: D3Scale<string | number>;
  };
  clipPathId?: number | string;
}
interface ReferenceAreaProps extends InternalReferenceAreaProps {
  isFront?: boolean;
  /** @deprecated use ifOverflow="extendDomain"  */
  alwaysShow?: boolean;
  ifOverflow?: IfOverflow;
  x1?: number | string;
  x2?: number | string;
  y1?: number | string;
  y2?: number | string;
  className?: number | string;
  yAxisId?: number | string;
  xAxisId?: number | string;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  label?: ImplicitLabelType;
}
type Props$b = Props$n & ReferenceAreaProps;
declare class ReferenceArea extends Component<Props$b> {
  static displayName: string;
  static defaultProps: {
    isFront: boolean;
    ifOverflow: string;
    xAxisId: number;
    yAxisId: number;
    r: number;
    fill: string;
    fillOpacity: number;
    stroke: string;
    strokeWidth: number;
  };
  static renderRect: (
    option: ReferenceAreaProps["shape"],
    props: any,
  ) => JSX.Element;
  render(): JSX.Element;
}

/**
 * @fileOverview Cartesian Axis
 */

/** The orientation of the axis in correspondence to the chart */
type Orientation = "top" | "bottom" | "left" | "right";
/** A unit to be appended to a value */
type Unit = string | number;
/** The formatter function of tick */
type TickFormatter = (value: any, index: number) => string;
interface CartesianAxisProps {
  className?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  unit?: Unit;
  orientation?: Orientation;
  viewBox?: CartesianViewBox;
  tick?:
    | SVGProps<SVGTextElement>
    | ReactElement<SVGElement>
    | ((props: any) => ReactElement<SVGElement>)
    | boolean;
  axisLine?: boolean | SVGProps<SVGLineElement>;
  tickLine?: boolean | SVGProps<SVGLineElement>;
  mirror?: boolean;
  tickMargin?: number;
  hide?: boolean;
  label?: any;
  minTickGap?: number;
  ticks?: CartesianTickItem[];
  tickSize?: number;
  tickFormatter?: TickFormatter;
  ticksGenerator?: (props?: CartesianAxisProps) => CartesianTickItem[];
  interval?: AxisInterval;
  /** Angle in which ticks will be rendered. */
  angle?: number;
}
interface IState {
  fontSize: string;
  letterSpacing: string;
}
type Props$a = Omit<
  PresentationAttributesAdaptChildEvent<any, SVGElement>,
  "viewBox"
> &
  CartesianAxisProps;
declare class CartesianAxis extends Component<Props$a, IState> {
  static displayName: string;
  static defaultProps: {
    x: number;
    y: number;
    width: number;
    height: number;
    viewBox: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    orientation: string;
    ticks: CartesianTickItem[];
    stroke: string;
    tickLine: boolean;
    axisLine: boolean;
    tick: boolean;
    mirror: boolean;
    minTickGap: number;
    tickSize: number;
    tickMargin: number;
    interval: string;
  };
  private layerReference;
  constructor(props: Props$a);
  shouldComponentUpdate(
    { viewBox, ...restProps }: Props$a,
    nextState: IState,
  ): boolean;
  componentDidMount(): void;
  /**
   * Calculate the coordinates of endpoints in ticks
   * @param  {Object} data The data of a simple tick
   * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
   *  (x2, y2): The coordinate of endpoint close to axis
   */
  getTickLineCoord(data: CartesianTickItem): {
    line: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    };
    tick: {
      x: number;
      y: number;
    };
  };
  getTickTextAnchor(): string;
  getTickVerticalAnchor(): string;
  renderAxisLine(): JSX.Element;
  static renderTickItem(
    option: Props$a["tick"],
    props: any,
    value: ReactNode,
  ): JSX.Element;
  /**
   * render the ticks
   * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
   * @param {string} fontSize Fontsize to consider for tick spacing
   * @param {string} letterSpacing Letterspacing to consider for tick spacing
   * @return {ReactComponent} renderedTicks
   */
  renderTicks(
    ticks: CartesianTickItem[],
    fontSize: string,
    letterSpacing: string,
  ): JSX.Element;
  render(): JSX.Element;
}

/**
 * @fileOverview Cartesian Grid
 */

type XAxisWithD3Scale = Omit<Props$A, "scale"> & {
  scale: D3Scale<string | number>;
};
type YAxisWithD3Scale = Omit<Props$z, "scale"> & {
  scale: D3Scale<string | number>;
};
/**
 * The <CartesianGrid horizontal
 */
type GridLineTypeFunctionProps = Omit<LineItemProps, "key"> & {
  key: LineItemProps["key"] | undefined;
  offset: ChartOffset;
  /**
   * The first available xAxis. This is rather arbitrary - if there's one XAxis then it's the first one,
   * if there are multiple then it's a random one.
   *
   * If there are no XAxis present then this will be null.
   */
  xAxis: null | XAxisWithD3Scale;
  /**
   * The first available yAxis. The axes with finite domain will be preferred.
   *
   * If there are no YAxis present then this will be null.
   */
  yAxis: null | YAxisWithD3Scale;
};
type GridLineType =
  | SVGProps<SVGLineElement>
  | ReactElement<SVGElement>
  | ((props: GridLineTypeFunctionProps) => ReactElement<SVGElement>)
  | boolean;
type HorizontalCoordinatesGenerator = (
  props: {
    yAxis: any;
    width: number;
    height: number;
    offset: ChartOffset;
  },
  syncWithTicks: boolean,
) => number[];
type VerticalCoordinatesGenerator = (
  props: {
    xAxis: any;
    width: number;
    height: number;
    offset: ChartOffset;
  },
  syncWithTicks: boolean,
) => number[];
interface InternalCartesianGridProps {
  width?: number;
  height?: number;
  horizontalCoordinatesGenerator?: HorizontalCoordinatesGenerator;
  verticalCoordinatesGenerator?: VerticalCoordinatesGenerator;
}
interface CartesianGridProps extends InternalCartesianGridProps {
  /**
   * The x-coordinate of grid.
   * If left undefined, it will be computed from the chart's offset and margins.
   */
  x?: number;
  /**
   * The y-coordinate of grid.
   * If left undefined, it will be computed from the chart's offset and margins.
   */
  y?: number;
  horizontal?: GridLineType;
  vertical?: GridLineType;
  /**
   * Array of coordinates in pixels where to draw horizontal grid lines.
   * Has priority over syncWithTicks and horizontalValues.
   */
  horizontalPoints?: number[];
  /**
   * Array of coordinates in pixels where to draw vertical grid lines.
   * Has priority over syncWithTicks and horizontalValues.
   */
  verticalPoints?: number[];
  /**
   * Defines background color of stripes.
   *
   * The values from this array will be passed in as the `fill` property in a `rect` SVG element.
   * For possible values see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect
   *
   * In case there are more stripes than colors, the colors will start from beginning
   * So for example: verticalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black
   *
   * If this is undefined, or an empty array, then there is no background fill.
   */
  verticalFill?: string[];
  /**
   * Defines background color of stripes.
   *
   * The values from this array will be passed in as the `fill` property in a `rect` SVG element.
   * For possible values see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect
   *
   * In case there are more stripes than colors, the colors will start from beginning
   * So for example: horizontalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black
   *
   * If this is undefined, or an empty array, then there is no background fill.
   */
  horizontalFill?: string[];
  /**
   * If true, only the lines that correspond to the axes ticks values will be drawn.
   * If false, extra lines could be added for each axis (at min and max coordinates), if there will not such ticks.
   * horizontalPoints, verticalPoints, horizontalValues, verticalValues have priority over syncWithTicks.
   */
  syncWithTicks?: boolean;
  /**
   * Array of values, where horizontal lines will be drawn. Numbers or strings, in dependence on axis type.
   * Has priority over syncWithTicks but not over horizontalValues.
   */
  horizontalValues?: number[] | string[];
  /**
   * Array of values, where vertical lines will be drawn. Numbers or strings, in dependence on axis type.
   * Has priority over syncWithTicks but not over verticalValues.
   */
  verticalValues?: number[] | string[];
}
type AcceptedSvgProps = Omit<SVGProps<SVGRectElement>, "offset">;
type Props$9 = AcceptedSvgProps & CartesianGridProps;
type LineItemProps = Props$9 & {
  offset: ChartOffset;
  xAxis: null | XAxisWithD3Scale;
  yAxis: null | YAxisWithD3Scale;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  key: string;
  index: number;
};
declare function CartesianGrid(props: Props$9): JSX.Element;
declare namespace CartesianGrid {
  var displayName: string;
}

/**
 * @fileOverview Line
 */

type LineDot =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | Props$l
  | boolean;
interface LinePointItem extends Point {
  value?: number;
  payload?: any;
}
interface InternalLineProps {
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  points?: LinePointItem[];
  xAxis?: Omit<Props$A, "scale"> & {
    scale: D3Scale<string | number>;
  };
  yAxis?: Omit<Props$z, "scale"> & {
    scale: D3Scale<string | number>;
  };
}
interface LineProps extends InternalLineProps {
  className?: string;
  data?: any;
  type?: CurveType;
  unit?: string | number;
  name?: string | number;
  yAxisId?: string | number;
  xAxisId?: string | number;
  dataKey?: DataKey<any>;
  legendType?: LegendType;
  tooltipType?: TooltipType$1;
  layout?: "horizontal" | "vertical";
  connectNulls?: boolean;
  hide?: boolean;
  activeDot?: ActiveShape<Props$l> | Props$l;
  dot?: LineDot;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  isAnimationActive?: boolean;
  animateNewValues?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  animationId?: number;
  id?: string;
  label?: ImplicitLabelType;
}
type Props$8 = Omit<Props$o, "points" | "pathRef"> & LineProps;
interface State$6 {
  isAnimationFinished?: boolean;
  totalLength?: number;
  prevPoints?: LinePointItem[];
  curPoints?: LinePointItem[];
  prevAnimationId?: number;
}
declare class Line extends PureComponent<Props$8, State$6> {
  static displayName: string;
  static defaultProps: {
    xAxisId: number;
    yAxisId: number;
    connectNulls: boolean;
    activeDot: boolean;
    dot: boolean;
    legendType: string;
    stroke: string;
    strokeWidth: number;
    fill: string;
    points: LinePointItem[];
    isAnimationActive: boolean;
    animateNewValues: boolean;
    animationBegin: number;
    animationDuration: number;
    animationEasing: string;
    hide: boolean;
    label: boolean;
  };
  /**
   * Compose the data of each group
   * @param {Object} props The props from the component
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */
  static getComposedData: ({
    props,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    dataKey,
    bandSize,
    displayedData,
    offset,
  }: {
    props: Props$8;
    xAxis: Props$8["xAxis"];
    yAxis: Props$8["yAxis"];
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    dataKey: Props$8["dataKey"];
    bandSize: number;
    displayedData: any[];
    offset: ChartOffset;
  }) => {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    width?: number;
    height?: number;
    brushBottom?: number;
    points: {
      x: number;
      y: number;
      value: any;
      payload: any;
    }[];
    layout: "horizontal" | "vertical";
  };
  mainCurve?: SVGPathElement;
  state: State$6;
  componentDidMount(): void;
  componentDidUpdate(): void;
  static getDerivedStateFromProps(
    nextProps: Props$8,
    prevState: State$6,
  ): State$6;
  getTotalLength(): number;
  generateSimpleStrokeDasharray: (
    totalLength: number,
    length: number,
  ) => string;
  getStrokeDasharray: (
    length: number,
    totalLength: number,
    lines: number[],
  ) => string;
  id: string;
  pathRef: (node: SVGPathElement) => void;
  static repeat(lines: number[], count: number): number[];
  handleAnimationEnd: () => void;
  handleAnimationStart: () => void;
  renderErrorBar(needClip: boolean, clipPathId: string): JSX.Element;
  static renderDotItem(option: LineDot, props: any): JSX.Element;
  renderDots(
    needClip: boolean,
    clipDot: boolean,
    clipPathId: string,
  ): JSX.Element;
  renderCurveStatically(
    points: LinePointItem[],
    needClip: boolean,
    clipPathId: string,
    props?: {
      strokeDasharray: string;
    },
  ): JSX.Element;
  renderCurveWithAnimation(needClip: boolean, clipPathId: string): JSX.Element;
  renderCurve(needClip: boolean, clipPathId: string): JSX.Element;
  render(): JSX.Element;
}

/**
 * @fileOverview Area
 */

type AreaDot =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | Props$l
  | boolean;
interface AreaPointItem extends Point {
  value?: number | number[];
  payload?: any;
}
interface InternalAreaProps {
  xAxis?: Omit<Props$A, "scale"> & {
    scale: D3Scale<string | number>;
  };
  yAxis?: Omit<Props$z, "scale"> & {
    scale: D3Scale<string | number>;
  };
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  points?: AreaPointItem[];
  baseLine?: number | Coordinate[];
}
interface AreaProps extends InternalAreaProps {
  className?: string;
  dataKey: DataKey<any>;
  data?: any[];
  type?: CurveType;
  unit?: string | number;
  name?: string | number;
  xAxisId?: string | number;
  yAxisId?: string | number;
  stackId?: string | number;
  legendType?: LegendType;
  tooltipType?: TooltipType$1;
  connectNulls?: boolean;
  activeDot?: AreaDot;
  dot?: AreaDot;
  label?: any;
  layout?: "horizontal" | "vertical";
  hide?: boolean;
  baseValue?: number | "dataMin" | "dataMax";
  isRange?: boolean;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  isAnimationActive?: boolean;
  animateNewValues?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  animationId?: number;
  id?: string;
}
type Props$7 = Omit<SVGProps<SVGElement>, "type" | "points"> & AreaProps;
interface State$5 {
  prevAnimationId?: number;
  prevPoints?: AreaPointItem[];
  prevBaseLine?: number | Coordinate[];
  curPoints?: AreaPointItem[];
  curBaseLine?: number | Coordinate[];
  isAnimationFinished?: boolean;
  totalLength?: number;
}
declare class Area extends PureComponent<Props$7, State$5> {
  static displayName: string;
  static defaultProps: {
    stroke: string;
    fill: string;
    fillOpacity: number;
    xAxisId: number;
    yAxisId: number;
    legendType: string;
    connectNulls: boolean;
    points: AreaPointItem[];
    dot: boolean;
    activeDot: boolean;
    hide: boolean;
    isAnimationActive: boolean;
    animationBegin: number;
    animationDuration: number;
    animationEasing: string;
  };
  static getBaseValue: (
    props: Props$7,
    item: Area,
    xAxis: Props$7["xAxis"],
    yAxis: Props$7["yAxis"],
  ) => number;
  static getComposedData: ({
    props,
    item,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    bandSize,
    dataKey,
    stackedData,
    dataStartIndex,
    displayedData,
    offset,
  }: {
    props: Props$7;
    item: Area;
    bandSize: number;
    xAxis: InternalAreaProps["xAxis"];
    yAxis: InternalAreaProps["yAxis"];
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    stackedData: number[][];
    dataStartIndex: number;
    offset: ChartOffset;
    displayedData: any[];
    dataKey: Props$7["dataKey"];
  }) => {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    width?: number;
    height?: number;
    brushBottom?: number;
    points: {
      x: number;
      y: number;
      value: any[];
      payload: any;
    }[];
    baseLine:
      | number
      | {
          x: number;
          y: number;
        }[];
    layout: "horizontal" | "vertical";
    isRange: boolean;
  };
  static renderDotItem: (option: AreaDot, props: any) => JSX.Element;
  state: State$5;
  static getDerivedStateFromProps(
    nextProps: Props$7,
    prevState: State$5,
  ): State$5;
  id: string;
  handleAnimationEnd: () => void;
  handleAnimationStart: () => void;
  renderDots(
    needClip: boolean,
    clipDot: boolean,
    clipPathId: string,
  ): JSX.Element;
  renderHorizontalRect(alpha: number): JSX.Element;
  renderVerticalRect(alpha: number): JSX.Element;
  renderClipRect(alpha: number): JSX.Element;
  renderAreaStatically(
    points: AreaPointItem[],
    baseLine: Props$7["baseLine"],
    needClip: boolean,
    clipPathId: string,
  ): JSX.Element;
  renderAreaWithAnimation(needClip: boolean, clipPathId: string): JSX.Element;
  renderArea(needClip: boolean, clipPathId: string): JSX.Element;
  render(): JSX.Element;
}

type MinPointSize = number | ((value: number, index: number) => number);

/**
 * @fileOverview Render a group of bar
 */

interface BarRectangleItem extends Props$n {
  value?: number | [number, number];
  /** the coordinate of background rectangle */
  background?: {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
  };
}
interface InternalBarProps {
  xAxis?: Omit<Props$A, "scale"> & {
    scale: D3Scale<string | number>;
    x?: number;
    width?: number;
  };
  yAxis?: Omit<Props$z, "scale"> & {
    scale: D3Scale<string | number>;
    y?: number;
    height?: number;
  };
  data?: BarRectangleItem[];
  top?: number;
  left?: number;
  width?: number;
  height?: number;
}
interface BarProps extends InternalBarProps {
  className?: string;
  index?: Key;
  activeIndex?: number;
  layout?: "horizontal" | "vertical";
  xAxisId?: string | number;
  yAxisId?: string | number;
  stackId?: string | number;
  barSize?: string | number;
  unit?: string | number;
  name?: string | number;
  dataKey: DataKey<any>;
  tooltipType?: TooltipType$1;
  legendType?: LegendType;
  minPointSize?: MinPointSize;
  maxBarSize?: number;
  hide?: boolean;
  shape?: ActiveShape<BarProps, SVGPathElement>;
  activeBar?: ActiveShape<BarProps, SVGPathElement>;
  background?: ActiveShape<BarProps, SVGPathElement>;
  radius?: number | [number, number, number, number];
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  isAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  animationId?: number;
  id?: string;
  label?: ImplicitLabelType;
}
type Props$6 = Omit<
  PresentationAttributesAdaptChildEvent<any, SVGPathElement>,
  "radius" | "name"
> &
  BarProps;
interface State$4 {
  readonly isAnimationFinished?: boolean;
  readonly prevData?: BarRectangleItem[];
  readonly curData?: BarRectangleItem[];
  readonly prevAnimationId?: number;
}
declare class Bar extends PureComponent<Props$6, State$4> {
  static displayName: string;
  static defaultProps: {
    xAxisId: number;
    yAxisId: number;
    legendType: string;
    minPointSize: number;
    hide: boolean;
    data: BarRectangleItem[];
    layout: string;
    activeBar: boolean;
    isAnimationActive: boolean;
    animationBegin: number;
    animationDuration: number;
    animationEasing: string;
  };
  /**
   * Compose the data of each group
   * @param {Object} props Props for the component
   * @param {Object} item        An instance of Bar
   * @param {Array} barPosition  The offset and size of each bar
   * @param {Object} xAxis       The configuration of x-axis
   * @param {Object} yAxis       The configuration of y-axis
   * @param {Array} stackedData  The stacked data of a bar item
   * @return{Array} Composed data
   */
  static getComposedData: ({
    props,
    item,
    barPosition,
    bandSize,
    xAxis,
    yAxis,
    xAxisTicks,
    yAxisTicks,
    stackedData,
    dataStartIndex,
    displayedData,
    offset,
  }: {
    props: Props$6;
    item: ReactElement;
    barPosition: any;
    bandSize: number;
    xAxis: InternalBarProps["xAxis"];
    yAxis: InternalBarProps["yAxis"];
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    stackedData: Array<[number, number]>;
    dataStartIndex: number;
    offset: ChartOffset;
    displayedData: any[];
  }) => {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    width?: number;
    height?: number;
    brushBottom?: number;
    data: any[];
    layout: "horizontal" | "vertical";
  };
  state: State$4;
  static getDerivedStateFromProps(
    nextProps: Props$6,
    prevState: State$4,
  ): State$4;
  id: string;
  handleAnimationEnd: () => void;
  handleAnimationStart: () => void;
  renderRectanglesStatically(data: BarRectangleItem[]): JSX.Element[];
  renderRectanglesWithAnimation(): JSX.Element;
  renderRectangles(): JSX.Element | JSX.Element[];
  renderBackground(): JSX.Element[];
  renderErrorBar(needClip: boolean, clipPathId: string): JSX.Element;
  render(): JSX.Element;
}

/**
 * @fileOverview Z Axis
 */

interface Props$5 {
  type?: "number" | "category";
  /** The name of data displayed in the axis */
  name?: string | number;
  /** The unit of data displayed in the axis */
  unit?: string | number;
  /** The unique id of z-axis */
  zAxisId?: string | number;
  /** The key of data displayed in the axis */
  dataKey?: DataKey<any>;
  /** The range of axis */
  range?: number[];
  scale?: ScaleType | Function;
  /** The domain of scale in this axis */
  domain?: AxisDomain;
}
declare class ZAxis extends Component<Props$5> {
  static displayName: string;
  static defaultProps: {
    zAxisId: number;
    range: number[];
    scale: string;
    type: string;
  };
  render(): ReactNode;
}

/**
 * @fileOverview Render a group of error bar
 */

interface ErrorBarDataItem {
  x: number;
  y: number;
  value: number;
  errorVal?: number[] | number;
}
type ErrorBarDataPointFormatter = (
  entry: BarRectangleItem | LinePointItem | ScatterPointItem,
  dataKey: DataKey<any>,
) => ErrorBarDataItem;
interface InternalErrorBarProps {
  xAxis?: Omit<Props$A, "scale"> & {
    scale: D3Scale<string | number>;
  };
  yAxis?: Omit<Props$z, "scale"> & {
    scale: D3Scale<string | number>;
  };
  data?: any[];
  layout?: "horizontal" | "vertical";
  dataPointFormatter?: ErrorBarDataPointFormatter;
  /** The offset between central and the given coordinate, often set by <Bar/> */
  offset?: number;
}
interface ErrorBarProps extends InternalErrorBarProps {
  dataKey: DataKey<any>;
  /** the width of the error bar ends */
  width?: number;
  /**
   * Only used for ScatterChart with error bars in two directions.
   * Only accepts a value of "x" or "y" and makes the error bars lie in that direction.
   */
  direction?: "x" | "y";
}
type Props$4 = SVGProps<SVGLineElement> & ErrorBarProps;
declare class ErrorBar extends Component<Props$4> {
  static defaultProps: {
    stroke: string;
    strokeWidth: number;
    width: number;
    offset: number;
    layout: string;
  };
  static displayName: string;
  render(): JSX.Element;
}

/**
 * @fileOverview Render a group of scatters
 */

interface ScattterPointNode {
  x?: number | string;
  y?: number | string;
  z?: number | string;
}
interface ScatterPointItem {
  cx?: number;
  cy?: number;
  size?: number;
  node?: ScattterPointNode;
  payload?: any;
}
type ScatterCustomizedShape =
  | ActiveShape<ScatterPointItem, SVGPathElement & InnerSymbolsProp>
  | SymbolType$1;
interface ScatterProps {
  data?: any[];
  xAxisId?: string | number;
  yAxisId?: string | number;
  zAxisId?: string | number;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  xAxis?: Omit<Props$A, "scale"> & {
    scale: D3Scale<string | number>;
  };
  yAxis?: Omit<Props$z, "scale"> & {
    scale: D3Scale<string | number>;
  };
  zAxis?: Omit<Props$5, "scale"> & {
    scale: D3Scale<string | number>;
  };
  dataKey?: DataKey<any>;
  line?:
    | ReactElement<SVGElement>
    | ((props: any) => ReactElement<SVGElement>)
    | Props$o
    | boolean;
  lineType?: "fitting" | "joint";
  lineJointType?: CurveType;
  legendType?: LegendType;
  tooltipType?: TooltipType;
  className?: string;
  name?: string | number;
  activeIndex?: number;
  activeShape?: ScatterCustomizedShape;
  shape?: ScatterCustomizedShape;
  points?: ScatterPointItem[];
  hide?: boolean;
  label?: ImplicitLabelListType<any>;
  isAnimationActive?: boolean;
  animationId?: number;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
}
type Props$3 = PresentationAttributesAdaptChildEvent<any, SVGElement> &
  ScatterProps;
interface State$3 {
  isAnimationFinished?: boolean;
  prevPoints?: ScatterPointItem[];
  curPoints?: ScatterPointItem[];
  prevAnimationId?: number;
}
declare class Scatter extends PureComponent<Props$3, State$3> {
  static displayName: string;
  static defaultProps: {
    xAxisId: number;
    yAxisId: number;
    zAxisId: number;
    legendType: string;
    lineType: string;
    lineJointType: string;
    data: any[];
    shape: string;
    hide: boolean;
    isAnimationActive: boolean;
    animationBegin: number;
    animationDuration: number;
    animationEasing: string;
  };
  /**
   * Compose the data of each group
   * @param  {Object} xAxis   The configuration of x-axis
   * @param  {Object} yAxis   The configuration of y-axis
   * @param  {String} dataKey The unique key of a group
   * @return {Array}  Composed data
   */
  static getComposedData: ({
    xAxis,
    yAxis,
    zAxis,
    item,
    displayedData,
    xAxisTicks,
    yAxisTicks,
    offset,
  }: {
    props: Props$3;
    xAxis: Props$3["xAxis"];
    yAxis: Props$3["yAxis"];
    zAxis: Props$3["zAxis"];
    xAxisTicks: TickItem[];
    yAxisTicks: TickItem[];
    item: Scatter;
    bandSize: number;
    displayedData: any[];
    offset: ChartOffset;
  }) => {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    width?: number;
    height?: number;
    brushBottom?: number;
    points: any[];
  };
  state: State$3;
  static getDerivedStateFromProps(
    nextProps: Props$3,
    prevState: State$3,
  ): State$3;
  handleAnimationEnd: () => void;
  handleAnimationStart: () => void;
  id: string;
  renderSymbolsStatically(points: ScatterPointItem[]): JSX.Element[];
  renderSymbolsWithAnimation(): JSX.Element;
  renderSymbols(): JSX.Element | JSX.Element[];
  renderErrorBar(): ReactElement<
    Props$4,
    string | JSXElementConstructor<any>
  >[];
  renderLine(): JSX.Element;
  render(): JSX.Element;
}

type AxisId = string;
type StackId = string | number | symbol;
type ParentStackGroup = {
  hasStack: boolean;
  stackGroups: Record<StackId, ChildStackGroup>;
};
type GenericChildStackGroup<T> = {
  numericAxisId: string;
  cateAxisId: string;
  items: Array<ReactElement>;
  stackedData?: ReadonlyArray<T>;
};
type ChildStackGroup = GenericChildStackGroup<
  Series<Record<string, unknown>, string>
>;
type AxisStackGroups = Record<AxisId, ParentStackGroup>;

type AxisMap = {
  [axisId: string]: BaseAxisProps;
};
interface CategoricalChartState {
  chartX?: number;
  chartY?: number;
  dataStartIndex?: number;
  dataEndIndex?: number;
  activeTooltipIndex?: number;
  isTooltipActive?: boolean;
  updateId?: number;
  xAxisMap?: AxisMap;
  yAxisMap?: AxisMap;
  zAxisMap?: AxisMap;
  orderedTooltipTicks?: any;
  tooltipAxis?: BaseAxisProps;
  tooltipTicks?: TickItem[];
  graphicalItems?: ReadonlyArray<ReactElement>;
  activeCoordinate?: ChartCoordinate;
  offset?: ChartOffset;
  angleAxisMap?: any;
  radiusAxisMap?: any;
  formattedGraphicalItems?: any;
  /** active tooltip payload */
  activePayload?: any[];
  tooltipAxisBandSize?: number;
  /** active item */
  activeItem?: any;
  /** Active label of data */
  activeLabel?: string;
  activeIndex?: number;
  xValue?: number;
  yValue?: number;
  legendBBox?: DOMRect | null;
  prevDataKey?: DataKey<any>;
  prevData?: any[];
  prevWidth?: number;
  prevHeight?: number;
  prevLayout?: LayoutType;
  prevStackOffset?: StackOffsetType;
  prevMargin?: Margin;
  prevChildren?: any;
  stackGroups?: AxisStackGroups;
}

interface ContainerOffset {
  top: number;
  left: number;
}
interface InitiableOptions {
  coordinateList?: TickItem[];
  mouseHandlerCallback?: (e: Partial<MouseEvent>) => void;
  container?: HTMLElement;
  layout?: LayoutType;
  offset?: ContainerOffset;
}
declare class AccessibilityManager {
  private activeIndex;
  private coordinateList;
  private mouseHandlerCallback;
  private container;
  private layout;
  private offset;
  setDetails({
    coordinateList,
    container,
    layout,
    offset,
    mouseHandlerCallback,
  }: InitiableOptions): void;
  focus(): void;
  keyboardEvent(e: any): void;
  setIndex(newIndex: number): void;
  private spoofMouse;
}

interface MousePointer {
  pageX: number;
  pageY: number;
}
type CategoricalChartFunc = (
  nextState: CategoricalChartState,
  event: any,
) => void;
interface CategoricalChartProps {
  syncId?: number | string;
  syncMethod?: "index" | "value" | Function;
  compact?: boolean;
  width?: number;
  height?: number;
  dataKey?: DataKey<any>;
  data?: any[];
  layout?: LayoutType;
  stackOffset?: StackOffsetType;
  throttleDelay?: number;
  margin?: Margin;
  barCategoryGap?: number | string;
  barGap?: number | string;
  barSize?: number | string;
  maxBarSize?: number;
  style?: any;
  className?: string;
  children?: any;
  defaultShowTooltip?: boolean;
  onClick?: CategoricalChartFunc;
  onMouseLeave?: CategoricalChartFunc;
  onMouseEnter?: CategoricalChartFunc;
  onMouseMove?: CategoricalChartFunc;
  onMouseDown?: CategoricalChartFunc;
  onMouseUp?: CategoricalChartFunc;
  onContextMenu?: CategoricalChartFunc;
  onDoubleClick?: CategoricalChartFunc;
  reverseStackOrder?: boolean;
  id?: string;
  startAngle?: number;
  endAngle?: number;
  cx?: number | string;
  cy?: number | string;
  innerRadius?: number | string;
  outerRadius?: number | string;
  title?: string;
  desc?: string;
  accessibilityLayer?: boolean;
  role?: string;
  tabIndex?: number;
}

declare const LineChart: ForwardRefExoticComponent<
  CategoricalChartProps &
    RefAttributes<{
      readonly eventEmitterSymbol: Symbol;
      clipPathId: string;
      accessibilityManager: AccessibilityManager;
      throttleTriggeredAfterMouseMove: lodash.DebouncedFunc<
        (e: MousePointer) => any
      >;
      container?: HTMLElement;
      componentDidMount(): void;
      displayDefaultTooltip(): void;
      getSnapshotBeforeUpdate(
        prevProps: Readonly<CategoricalChartProps>,
        prevState: Readonly<CategoricalChartState>,
      ): null;
      componentDidUpdate(prevProps: CategoricalChartProps): void;
      componentWillUnmount(): void;
      getTooltipEventType(): TooltipEventType;
      getMouseInfo(event: MousePointer):
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            xValue: any;
            yValue: any;
            chartX: number;
            chartY: number;
          }
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            chartX: number;
            chartY: number;
          };
      inRange(x: number, y: number, scale?: number): any;
      parseEventsOfWrapper(): any;
      addListener(): void;
      removeListener(): void;
      handleLegendBBoxUpdate: (box: DOMRect) => void;
      handleReceiveSyncEvent: (
        cId: string | number,
        data: CategoricalChartState,
        emitter: Symbol,
      ) => void;
      handleBrushChange: ({
        startIndex,
        endIndex,
      }: {
        startIndex: number;
        endIndex: number;
      }) => void;
      handleMouseEnter: (e: MouseEvent<Element, MouseEvent>) => void;
      triggeredAfterMouseMove: (e: MousePointer) => any;
      handleItemMouseEnter: (el: any) => void;
      handleItemMouseLeave: () => void;
      handleMouseMove: (
        e: MousePointer &
          Partial<Omit<MouseEvent<Element, MouseEvent>, keyof MousePointer>>,
      ) => void;
      handleMouseLeave: (e: any) => void;
      handleOuterEvent: (
        e: MouseEvent<Element, MouseEvent> | TouchEvent<Element>,
      ) => void;
      handleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleMouseDown: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleMouseUp: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleTouchMove: (e: TouchEvent<Element>) => void;
      handleTouchStart: (e: TouchEvent<Element>) => void;
      handleTouchEnd: (e: TouchEvent<Element>) => void;
      handleDoubleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleContextMenu: (e: MouseEvent<Element, MouseEvent>) => void;
      triggerSyncEvent: (data: CategoricalChartState) => void;
      applySyncEvent: (data: CategoricalChartState) => void;
      filterFormatItem(item: any, displayName: any, childIndex: any): any;
      renderCursor: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => JSX.Element;
      renderPolarAxis: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderPolarGrid: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderLegend: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderTooltip: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderBrush: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderReferenceElement: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderActivePoints: ({
        item,
        activePoint,
        basePoint,
        childIndex,
        isRange,
      }: any) => ReactElement<any, string | JSXElementConstructor<any>>[];
      renderGraphicChild: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => any[];
      renderCustomized: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderClipPath(): JSX.Element;
      getXScales(): {
        [x: string]: Function | ScaleType;
      };
      getYScales(): {
        [x: string]: Function | ScaleType;
      };
      getXScaleByAxisId(axisId: string): Function | ScaleType;
      getYScaleByAxisId(axisId: string): Function | ScaleType;
      getItemByXY(chartXY: { x: number; y: number }): {
        graphicalItem: any;
        payload: any;
      };
      renderMap: {
        CartesianGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        ReferenceArea: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceLine: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceDot: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        XAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        YAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Brush: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        Bar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Line: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Area: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Radar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        RadialBar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Scatter: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Pie: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Funnel: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Tooltip: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => JSX.Element;
          once: boolean;
        };
        PolarGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        PolarAngleAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        PolarRadiusAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Customized: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
      };
      render(): JSX.Element;
      context: unknown;
      setState<K extends keyof CategoricalChartState>(
        state:
          | CategoricalChartState
          | ((
              prevState: Readonly<CategoricalChartState>,
              props: Readonly<CategoricalChartProps>,
            ) => CategoricalChartState | Pick<CategoricalChartState, K>)
          | Pick<CategoricalChartState, K>,
        callback?: () => void,
      ): void;
      forceUpdate(callback?: () => void): void;
      readonly props: Readonly<CategoricalChartProps>;
      state: Readonly<CategoricalChartState>;
      refs: {
        [key: string]: ReactInstance;
      };
      shouldComponentUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): boolean;
      componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
      componentWillMount?(): void;
      UNSAFE_componentWillMount?(): void;
      componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
    }>
>;

declare const BarChart: ForwardRefExoticComponent<
  CategoricalChartProps &
    RefAttributes<{
      readonly eventEmitterSymbol: Symbol;
      clipPathId: string;
      accessibilityManager: AccessibilityManager;
      throttleTriggeredAfterMouseMove: lodash.DebouncedFunc<
        (e: MousePointer) => any
      >;
      container?: HTMLElement;
      componentDidMount(): void;
      displayDefaultTooltip(): void;
      getSnapshotBeforeUpdate(
        prevProps: Readonly<CategoricalChartProps>,
        prevState: Readonly<CategoricalChartState>,
      ): null;
      componentDidUpdate(prevProps: CategoricalChartProps): void;
      componentWillUnmount(): void;
      getTooltipEventType(): TooltipEventType;
      getMouseInfo(event: MousePointer):
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            xValue: any;
            yValue: any;
            chartX: number;
            chartY: number;
          }
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            chartX: number;
            chartY: number;
          };
      inRange(x: number, y: number, scale?: number): any;
      parseEventsOfWrapper(): any;
      addListener(): void;
      removeListener(): void;
      handleLegendBBoxUpdate: (box: DOMRect) => void;
      handleReceiveSyncEvent: (
        cId: string | number,
        data: CategoricalChartState,
        emitter: Symbol,
      ) => void;
      handleBrushChange: ({
        startIndex,
        endIndex,
      }: {
        startIndex: number;
        endIndex: number;
      }) => void;
      handleMouseEnter: (e: MouseEvent<Element, MouseEvent>) => void;
      triggeredAfterMouseMove: (e: MousePointer) => any;
      handleItemMouseEnter: (el: any) => void;
      handleItemMouseLeave: () => void;
      handleMouseMove: (
        e: MousePointer &
          Partial<Omit<MouseEvent<Element, MouseEvent>, keyof MousePointer>>,
      ) => void;
      handleMouseLeave: (e: any) => void;
      handleOuterEvent: (
        e: MouseEvent<Element, MouseEvent> | TouchEvent<Element>,
      ) => void;
      handleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleMouseDown: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleMouseUp: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleTouchMove: (e: TouchEvent<Element>) => void;
      handleTouchStart: (e: TouchEvent<Element>) => void;
      handleTouchEnd: (e: TouchEvent<Element>) => void;
      handleDoubleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleContextMenu: (e: MouseEvent<Element, MouseEvent>) => void;
      triggerSyncEvent: (data: CategoricalChartState) => void;
      applySyncEvent: (data: CategoricalChartState) => void;
      filterFormatItem(item: any, displayName: any, childIndex: any): any;
      renderCursor: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => JSX.Element;
      renderPolarAxis: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderPolarGrid: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderLegend: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderTooltip: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderBrush: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderReferenceElement: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderActivePoints: ({
        item,
        activePoint,
        basePoint,
        childIndex,
        isRange,
      }: any) => ReactElement<any, string | JSXElementConstructor<any>>[];
      renderGraphicChild: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => any[];
      renderCustomized: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderClipPath(): JSX.Element;
      getXScales(): {
        [x: string]: Function | ScaleType;
      };
      getYScales(): {
        [x: string]: Function | ScaleType;
      };
      getXScaleByAxisId(axisId: string): Function | ScaleType;
      getYScaleByAxisId(axisId: string): Function | ScaleType;
      getItemByXY(chartXY: { x: number; y: number }): {
        graphicalItem: any;
        payload: any;
      };
      renderMap: {
        CartesianGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        ReferenceArea: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceLine: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceDot: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        XAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        YAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Brush: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        Bar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Line: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Area: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Radar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        RadialBar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Scatter: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Pie: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Funnel: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Tooltip: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => JSX.Element;
          once: boolean;
        };
        PolarGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        PolarAngleAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        PolarRadiusAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Customized: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
      };
      render(): JSX.Element;
      context: unknown;
      setState<K extends keyof CategoricalChartState>(
        state:
          | CategoricalChartState
          | ((
              prevState: Readonly<CategoricalChartState>,
              props: Readonly<CategoricalChartProps>,
            ) => CategoricalChartState | Pick<CategoricalChartState, K>)
          | Pick<CategoricalChartState, K>,
        callback?: () => void,
      ): void;
      forceUpdate(callback?: () => void): void;
      readonly props: Readonly<CategoricalChartProps>;
      state: Readonly<CategoricalChartState>;
      refs: {
        [key: string]: ReactInstance;
      };
      shouldComponentUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): boolean;
      componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
      componentWillMount?(): void;
      UNSAFE_componentWillMount?(): void;
      componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
    }>
>;

declare const PieChart: ForwardRefExoticComponent<
  CategoricalChartProps &
    RefAttributes<{
      readonly eventEmitterSymbol: Symbol;
      clipPathId: string;
      accessibilityManager: AccessibilityManager;
      throttleTriggeredAfterMouseMove: lodash.DebouncedFunc<
        (e: MousePointer) => any
      >;
      container?: HTMLElement;
      componentDidMount(): void;
      displayDefaultTooltip(): void;
      getSnapshotBeforeUpdate(
        prevProps: Readonly<CategoricalChartProps>,
        prevState: Readonly<CategoricalChartState>,
      ): null;
      componentDidUpdate(prevProps: CategoricalChartProps): void;
      componentWillUnmount(): void;
      getTooltipEventType(): TooltipEventType;
      getMouseInfo(event: MousePointer):
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            xValue: any;
            yValue: any;
            chartX: number;
            chartY: number;
          }
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            chartX: number;
            chartY: number;
          };
      inRange(x: number, y: number, scale?: number): any;
      parseEventsOfWrapper(): any;
      addListener(): void;
      removeListener(): void;
      handleLegendBBoxUpdate: (box: DOMRect) => void;
      handleReceiveSyncEvent: (
        cId: string | number,
        data: CategoricalChartState,
        emitter: Symbol,
      ) => void;
      handleBrushChange: ({
        startIndex,
        endIndex,
      }: {
        startIndex: number;
        endIndex: number;
      }) => void;
      handleMouseEnter: (e: MouseEvent<Element, MouseEvent>) => void;
      triggeredAfterMouseMove: (e: MousePointer) => any;
      handleItemMouseEnter: (el: any) => void;
      handleItemMouseLeave: () => void;
      handleMouseMove: (
        e: MousePointer &
          Partial<Omit<MouseEvent<Element, MouseEvent>, keyof MousePointer>>,
      ) => void;
      handleMouseLeave: (e: any) => void;
      handleOuterEvent: (
        e: MouseEvent<Element, MouseEvent> | TouchEvent<Element>,
      ) => void;
      handleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleMouseDown: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleMouseUp: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleTouchMove: (e: TouchEvent<Element>) => void;
      handleTouchStart: (e: TouchEvent<Element>) => void;
      handleTouchEnd: (e: TouchEvent<Element>) => void;
      handleDoubleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleContextMenu: (e: MouseEvent<Element, MouseEvent>) => void;
      triggerSyncEvent: (data: CategoricalChartState) => void;
      applySyncEvent: (data: CategoricalChartState) => void;
      filterFormatItem(item: any, displayName: any, childIndex: any): any;
      renderCursor: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => JSX.Element;
      renderPolarAxis: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderPolarGrid: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderLegend: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderTooltip: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderBrush: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderReferenceElement: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderActivePoints: ({
        item,
        activePoint,
        basePoint,
        childIndex,
        isRange,
      }: any) => ReactElement<any, string | JSXElementConstructor<any>>[];
      renderGraphicChild: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => any[];
      renderCustomized: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderClipPath(): JSX.Element;
      getXScales(): {
        [x: string]: Function | ScaleType;
      };
      getYScales(): {
        [x: string]: Function | ScaleType;
      };
      getXScaleByAxisId(axisId: string): Function | ScaleType;
      getYScaleByAxisId(axisId: string): Function | ScaleType;
      getItemByXY(chartXY: { x: number; y: number }): {
        graphicalItem: any;
        payload: any;
      };
      renderMap: {
        CartesianGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        ReferenceArea: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceLine: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceDot: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        XAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        YAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Brush: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        Bar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Line: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Area: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Radar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        RadialBar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Scatter: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Pie: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Funnel: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Tooltip: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => JSX.Element;
          once: boolean;
        };
        PolarGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        PolarAngleAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        PolarRadiusAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Customized: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
      };
      render(): JSX.Element;
      context: unknown;
      setState<K extends keyof CategoricalChartState>(
        state:
          | CategoricalChartState
          | ((
              prevState: Readonly<CategoricalChartState>,
              props: Readonly<CategoricalChartProps>,
            ) => CategoricalChartState | Pick<CategoricalChartState, K>)
          | Pick<CategoricalChartState, K>,
        callback?: () => void,
      ): void;
      forceUpdate(callback?: () => void): void;
      readonly props: Readonly<CategoricalChartProps>;
      state: Readonly<CategoricalChartState>;
      refs: {
        [key: string]: ReactInstance;
      };
      shouldComponentUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): boolean;
      componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
      componentWillMount?(): void;
      UNSAFE_componentWillMount?(): void;
      componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
    }>
>;

/**
 * @fileOverview TreemapChart
 */

interface Props$2 {
  width?: number;
  height?: number;
  data?: any[];
  animationId?: number;
  style?: any;
  aspectRatio?: number;
  content?: ReactElement;
  fill?: string;
  stroke?: string;
  className?: string;
  nameKey?: DataKey<any>;
  dataKey?: DataKey<any>;
  children?: any;
  type?: "flat" | "nest";
  colorPanel?: [];
  nestIndexContent?: ReactElement | ((item: any, i: number) => any);
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  onMouseEnter?: (node: TreemapNode, e: any) => void;
  onMouseLeave?: (node: TreemapNode, e: any) => void;
  onClick?: (node: TreemapNode) => void;
  isAnimationActive?: boolean;
  isUpdateAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
}
interface State$2 {
  isTooltipActive: boolean;
  isAnimationFinished: boolean;
  activeNode?: TreemapNode;
  formatRoot?: TreemapNode;
  currentRoot?: TreemapNode;
  nestIndex?: TreemapNode[];
  prevData?: any[];
  prevType?: "flat" | "nest";
  prevWidth?: number;
  prevHeight?: number;
  prevDataKey?: DataKey<any>;
  prevAspectRatio?: number;
}
declare class Treemap extends PureComponent<Props$2, State$2> {
  static displayName: string;
  static defaultProps: {
    aspectRatio: number;
    dataKey: string;
    type: string;
    isAnimationActive: boolean;
    isUpdateAnimationActive: boolean;
    animationBegin: number;
    animationDuration: number;
    animationEasing: string;
  };
  state: {
    isTooltipActive: boolean;
    isAnimationFinished: boolean;
    activeNode?: TreemapNode;
    formatRoot?: TreemapNode;
    currentRoot?: TreemapNode;
    nestIndex?: TreemapNode[];
    prevData?: any[];
    prevType?: "flat" | "nest";
    prevWidth?: number;
    prevHeight?: number;
    prevDataKey?: DataKey<any>;
    prevAspectRatio?: number;
  };
  static getDerivedStateFromProps(
    nextProps: Props$2,
    prevState: State$2,
  ): State$2;
  handleMouseEnter(node: TreemapNode, e: any): void;
  handleMouseLeave(node: TreemapNode, e: any): void;
  handleAnimationEnd: () => void;
  handleAnimationStart: () => void;
  handleClick(node: TreemapNode): void;
  handleNestIndex(node: TreemapNode, i: number): void;
  renderItem(
    content: any,
    nodeProps: TreemapNode,
    isLeaf: boolean,
  ): ReactElement;
  static renderContentItem(
    content: any,
    nodeProps: TreemapNode,
    type: string,
    colorPanel: string[],
  ): ReactElement;
  renderNode(root: TreemapNode, node: TreemapNode): ReactElement;
  renderAllNodes(): ReactElement;
  renderTooltip(): ReactElement;
  renderNestIndex(): ReactElement;
  render(): JSX.Element;
}

/**
 * @file TreemapChart
 */

interface LinkDataItem {
  source: number;
  target: number;
  [key: string]: any;
}
interface SankeyData {
  nodes: any[];
  links: LinkDataItem[];
}
type SankeyNodeOptions =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | Props$n;
type SankeyLinkOptions =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | SVGProps<SVGPathElement>;
interface SankeyProps {
  nameKey?: DataKey<any>;
  dataKey?: DataKey<any>;
  width?: number;
  height?: number;
  data: SankeyData;
  nodePadding?: number;
  nodeWidth?: number;
  linkCurvature?: number;
  iterations?: number;
  node?: SankeyNodeOptions;
  link?: SankeyLinkOptions;
  style?: any;
  className?: string;
  children?: any;
  margin?: Margin;
  onClick?: any;
  onMouseEnter?: any;
  onMouseLeave?: any;
  sort?: boolean;
}
type Props$1 = SVGProps<SVGElement> & SankeyProps;
interface State$1 {
  activeElement?: any;
  activeElementType?: any;
  isTooltipActive: boolean;
  nodes: SankeyNode[];
  links: SankeyLink[];
  sort?: boolean;
  prevData?: SankeyData;
  prevWidth?: number;
  prevHeight?: number;
  prevMargin?: Margin;
  prevIterations?: number;
  prevNodeWidth?: number;
  prevNodePadding?: number;
  prevSort?: boolean;
}
declare class Sankey extends PureComponent<Props$1, State$1> {
  static displayName: string;
  static defaultProps: {
    nameKey: string;
    dataKey: string;
    nodePadding: number;
    nodeWidth: number;
    linkCurvature: number;
    iterations: number;
    margin: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    sort: boolean;
  };
  state: {
    activeElement: any;
    activeElementType: any;
    isTooltipActive: boolean;
    nodes: SankeyNode[];
    links: SankeyLink[];
  };
  static getDerivedStateFromProps(
    nextProps: Props$1,
    prevState: State$1,
  ): State$1;
  handleMouseEnter(el: ReactElement, type: string, e: any): void;
  handleMouseLeave(el: ReactElement, type: string, e: any): void;
  handleClick(el: ReactElement, type: string, e: any): void;
  static renderLinkItem(option: any, props: any): any;
  renderLinks(links: SankeyLink[], nodes: SankeyNode[]): JSX.Element;
  static renderNodeItem(option: any, props: Props$1): any;
  renderNodes(nodes: SankeyNode[]): JSX.Element;
  renderTooltip(): ReactElement;
  render(): JSX.Element;
}

declare const RadarChart: ForwardRefExoticComponent<
  CategoricalChartProps &
    RefAttributes<{
      readonly eventEmitterSymbol: Symbol;
      clipPathId: string;
      accessibilityManager: AccessibilityManager;
      throttleTriggeredAfterMouseMove: lodash.DebouncedFunc<
        (e: MousePointer) => any
      >;
      container?: HTMLElement;
      componentDidMount(): void;
      displayDefaultTooltip(): void;
      getSnapshotBeforeUpdate(
        prevProps: Readonly<CategoricalChartProps>,
        prevState: Readonly<CategoricalChartState>,
      ): null;
      componentDidUpdate(prevProps: CategoricalChartProps): void;
      componentWillUnmount(): void;
      getTooltipEventType(): TooltipEventType;
      getMouseInfo(event: MousePointer):
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            xValue: any;
            yValue: any;
            chartX: number;
            chartY: number;
          }
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            chartX: number;
            chartY: number;
          };
      inRange(x: number, y: number, scale?: number): any;
      parseEventsOfWrapper(): any;
      addListener(): void;
      removeListener(): void;
      handleLegendBBoxUpdate: (box: DOMRect) => void;
      handleReceiveSyncEvent: (
        cId: string | number,
        data: CategoricalChartState,
        emitter: Symbol,
      ) => void;
      handleBrushChange: ({
        startIndex,
        endIndex,
      }: {
        startIndex: number;
        endIndex: number;
      }) => void;
      handleMouseEnter: (e: MouseEvent<Element, MouseEvent>) => void;
      triggeredAfterMouseMove: (e: MousePointer) => any;
      handleItemMouseEnter: (el: any) => void;
      handleItemMouseLeave: () => void;
      handleMouseMove: (
        e: MousePointer &
          Partial<Omit<MouseEvent<Element, MouseEvent>, keyof MousePointer>>,
      ) => void;
      handleMouseLeave: (e: any) => void;
      handleOuterEvent: (
        e: MouseEvent<Element, MouseEvent> | TouchEvent<Element>,
      ) => void;
      handleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleMouseDown: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleMouseUp: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleTouchMove: (e: TouchEvent<Element>) => void;
      handleTouchStart: (e: TouchEvent<Element>) => void;
      handleTouchEnd: (e: TouchEvent<Element>) => void;
      handleDoubleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleContextMenu: (e: MouseEvent<Element, MouseEvent>) => void;
      triggerSyncEvent: (data: CategoricalChartState) => void;
      applySyncEvent: (data: CategoricalChartState) => void;
      filterFormatItem(item: any, displayName: any, childIndex: any): any;
      renderCursor: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => JSX.Element;
      renderPolarAxis: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderPolarGrid: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderLegend: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderTooltip: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderBrush: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderReferenceElement: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderActivePoints: ({
        item,
        activePoint,
        basePoint,
        childIndex,
        isRange,
      }: any) => ReactElement<any, string | JSXElementConstructor<any>>[];
      renderGraphicChild: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => any[];
      renderCustomized: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderClipPath(): JSX.Element;
      getXScales(): {
        [x: string]: Function | ScaleType;
      };
      getYScales(): {
        [x: string]: Function | ScaleType;
      };
      getXScaleByAxisId(axisId: string): Function | ScaleType;
      getYScaleByAxisId(axisId: string): Function | ScaleType;
      getItemByXY(chartXY: { x: number; y: number }): {
        graphicalItem: any;
        payload: any;
      };
      renderMap: {
        CartesianGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        ReferenceArea: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceLine: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceDot: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        XAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        YAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Brush: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        Bar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Line: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Area: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Radar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        RadialBar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Scatter: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Pie: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Funnel: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Tooltip: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => JSX.Element;
          once: boolean;
        };
        PolarGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        PolarAngleAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        PolarRadiusAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Customized: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
      };
      render(): JSX.Element;
      context: unknown;
      setState<K extends keyof CategoricalChartState>(
        state:
          | CategoricalChartState
          | ((
              prevState: Readonly<CategoricalChartState>,
              props: Readonly<CategoricalChartProps>,
            ) => CategoricalChartState | Pick<CategoricalChartState, K>)
          | Pick<CategoricalChartState, K>,
        callback?: () => void,
      ): void;
      forceUpdate(callback?: () => void): void;
      readonly props: Readonly<CategoricalChartProps>;
      state: Readonly<CategoricalChartState>;
      refs: {
        [key: string]: ReactInstance;
      };
      shouldComponentUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): boolean;
      componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
      componentWillMount?(): void;
      UNSAFE_componentWillMount?(): void;
      componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
    }>
>;

declare const ScatterChart: ForwardRefExoticComponent<
  CategoricalChartProps &
    RefAttributes<{
      readonly eventEmitterSymbol: Symbol;
      clipPathId: string;
      accessibilityManager: AccessibilityManager;
      throttleTriggeredAfterMouseMove: lodash.DebouncedFunc<
        (e: MousePointer) => any
      >;
      container?: HTMLElement;
      componentDidMount(): void;
      displayDefaultTooltip(): void;
      getSnapshotBeforeUpdate(
        prevProps: Readonly<CategoricalChartProps>,
        prevState: Readonly<CategoricalChartState>,
      ): null;
      componentDidUpdate(prevProps: CategoricalChartProps): void;
      componentWillUnmount(): void;
      getTooltipEventType(): TooltipEventType;
      getMouseInfo(event: MousePointer):
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            xValue: any;
            yValue: any;
            chartX: number;
            chartY: number;
          }
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            chartX: number;
            chartY: number;
          };
      inRange(x: number, y: number, scale?: number): any;
      parseEventsOfWrapper(): any;
      addListener(): void;
      removeListener(): void;
      handleLegendBBoxUpdate: (box: DOMRect) => void;
      handleReceiveSyncEvent: (
        cId: string | number,
        data: CategoricalChartState,
        emitter: Symbol,
      ) => void;
      handleBrushChange: ({
        startIndex,
        endIndex,
      }: {
        startIndex: number;
        endIndex: number;
      }) => void;
      handleMouseEnter: (e: MouseEvent<Element, MouseEvent>) => void;
      triggeredAfterMouseMove: (e: MousePointer) => any;
      handleItemMouseEnter: (el: any) => void;
      handleItemMouseLeave: () => void;
      handleMouseMove: (
        e: MousePointer &
          Partial<Omit<MouseEvent<Element, MouseEvent>, keyof MousePointer>>,
      ) => void;
      handleMouseLeave: (e: any) => void;
      handleOuterEvent: (
        e: MouseEvent<Element, MouseEvent> | TouchEvent<Element>,
      ) => void;
      handleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleMouseDown: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleMouseUp: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleTouchMove: (e: TouchEvent<Element>) => void;
      handleTouchStart: (e: TouchEvent<Element>) => void;
      handleTouchEnd: (e: TouchEvent<Element>) => void;
      handleDoubleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleContextMenu: (e: MouseEvent<Element, MouseEvent>) => void;
      triggerSyncEvent: (data: CategoricalChartState) => void;
      applySyncEvent: (data: CategoricalChartState) => void;
      filterFormatItem(item: any, displayName: any, childIndex: any): any;
      renderCursor: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => JSX.Element;
      renderPolarAxis: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderPolarGrid: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderLegend: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderTooltip: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderBrush: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderReferenceElement: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderActivePoints: ({
        item,
        activePoint,
        basePoint,
        childIndex,
        isRange,
      }: any) => ReactElement<any, string | JSXElementConstructor<any>>[];
      renderGraphicChild: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => any[];
      renderCustomized: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderClipPath(): JSX.Element;
      getXScales(): {
        [x: string]: Function | ScaleType;
      };
      getYScales(): {
        [x: string]: Function | ScaleType;
      };
      getXScaleByAxisId(axisId: string): Function | ScaleType;
      getYScaleByAxisId(axisId: string): Function | ScaleType;
      getItemByXY(chartXY: { x: number; y: number }): {
        graphicalItem: any;
        payload: any;
      };
      renderMap: {
        CartesianGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        ReferenceArea: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceLine: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceDot: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        XAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        YAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Brush: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        Bar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Line: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Area: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Radar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        RadialBar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Scatter: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Pie: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Funnel: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Tooltip: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => JSX.Element;
          once: boolean;
        };
        PolarGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        PolarAngleAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        PolarRadiusAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Customized: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
      };
      render(): JSX.Element;
      context: unknown;
      setState<K extends keyof CategoricalChartState>(
        state:
          | CategoricalChartState
          | ((
              prevState: Readonly<CategoricalChartState>,
              props: Readonly<CategoricalChartProps>,
            ) => CategoricalChartState | Pick<CategoricalChartState, K>)
          | Pick<CategoricalChartState, K>,
        callback?: () => void,
      ): void;
      forceUpdate(callback?: () => void): void;
      readonly props: Readonly<CategoricalChartProps>;
      state: Readonly<CategoricalChartState>;
      refs: {
        [key: string]: ReactInstance;
      };
      shouldComponentUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): boolean;
      componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
      componentWillMount?(): void;
      UNSAFE_componentWillMount?(): void;
      componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
    }>
>;

declare const AreaChart: ForwardRefExoticComponent<
  CategoricalChartProps &
    RefAttributes<{
      readonly eventEmitterSymbol: Symbol;
      clipPathId: string;
      accessibilityManager: AccessibilityManager;
      throttleTriggeredAfterMouseMove: lodash.DebouncedFunc<
        (e: MousePointer) => any
      >;
      container?: HTMLElement;
      componentDidMount(): void;
      displayDefaultTooltip(): void;
      getSnapshotBeforeUpdate(
        prevProps: Readonly<CategoricalChartProps>,
        prevState: Readonly<CategoricalChartState>,
      ): null;
      componentDidUpdate(prevProps: CategoricalChartProps): void;
      componentWillUnmount(): void;
      getTooltipEventType(): TooltipEventType;
      getMouseInfo(event: MousePointer):
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            xValue: any;
            yValue: any;
            chartX: number;
            chartY: number;
          }
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            chartX: number;
            chartY: number;
          };
      inRange(x: number, y: number, scale?: number): any;
      parseEventsOfWrapper(): any;
      addListener(): void;
      removeListener(): void;
      handleLegendBBoxUpdate: (box: DOMRect) => void;
      handleReceiveSyncEvent: (
        cId: string | number,
        data: CategoricalChartState,
        emitter: Symbol,
      ) => void;
      handleBrushChange: ({
        startIndex,
        endIndex,
      }: {
        startIndex: number;
        endIndex: number;
      }) => void;
      handleMouseEnter: (e: MouseEvent<Element, MouseEvent>) => void;
      triggeredAfterMouseMove: (e: MousePointer) => any;
      handleItemMouseEnter: (el: any) => void;
      handleItemMouseLeave: () => void;
      handleMouseMove: (
        e: MousePointer &
          Partial<Omit<MouseEvent<Element, MouseEvent>, keyof MousePointer>>,
      ) => void;
      handleMouseLeave: (e: any) => void;
      handleOuterEvent: (
        e: MouseEvent<Element, MouseEvent> | TouchEvent<Element>,
      ) => void;
      handleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleMouseDown: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleMouseUp: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleTouchMove: (e: TouchEvent<Element>) => void;
      handleTouchStart: (e: TouchEvent<Element>) => void;
      handleTouchEnd: (e: TouchEvent<Element>) => void;
      handleDoubleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleContextMenu: (e: MouseEvent<Element, MouseEvent>) => void;
      triggerSyncEvent: (data: CategoricalChartState) => void;
      applySyncEvent: (data: CategoricalChartState) => void;
      filterFormatItem(item: any, displayName: any, childIndex: any): any;
      renderCursor: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => JSX.Element;
      renderPolarAxis: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderPolarGrid: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderLegend: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderTooltip: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderBrush: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderReferenceElement: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderActivePoints: ({
        item,
        activePoint,
        basePoint,
        childIndex,
        isRange,
      }: any) => ReactElement<any, string | JSXElementConstructor<any>>[];
      renderGraphicChild: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => any[];
      renderCustomized: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderClipPath(): JSX.Element;
      getXScales(): {
        [x: string]: Function | ScaleType;
      };
      getYScales(): {
        [x: string]: Function | ScaleType;
      };
      getXScaleByAxisId(axisId: string): Function | ScaleType;
      getYScaleByAxisId(axisId: string): Function | ScaleType;
      getItemByXY(chartXY: { x: number; y: number }): {
        graphicalItem: any;
        payload: any;
      };
      renderMap: {
        CartesianGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        ReferenceArea: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceLine: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceDot: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        XAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        YAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Brush: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        Bar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Line: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Area: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Radar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        RadialBar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Scatter: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Pie: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Funnel: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Tooltip: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => JSX.Element;
          once: boolean;
        };
        PolarGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        PolarAngleAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        PolarRadiusAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Customized: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
      };
      render(): JSX.Element;
      context: unknown;
      setState<K extends keyof CategoricalChartState>(
        state:
          | CategoricalChartState
          | ((
              prevState: Readonly<CategoricalChartState>,
              props: Readonly<CategoricalChartProps>,
            ) => CategoricalChartState | Pick<CategoricalChartState, K>)
          | Pick<CategoricalChartState, K>,
        callback?: () => void,
      ): void;
      forceUpdate(callback?: () => void): void;
      readonly props: Readonly<CategoricalChartProps>;
      state: Readonly<CategoricalChartState>;
      refs: {
        [key: string]: ReactInstance;
      };
      shouldComponentUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): boolean;
      componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
      componentWillMount?(): void;
      UNSAFE_componentWillMount?(): void;
      componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
    }>
>;

declare const RadialBarChart: ForwardRefExoticComponent<
  CategoricalChartProps &
    RefAttributes<{
      readonly eventEmitterSymbol: Symbol;
      clipPathId: string;
      accessibilityManager: AccessibilityManager;
      throttleTriggeredAfterMouseMove: lodash.DebouncedFunc<
        (e: MousePointer) => any
      >;
      container?: HTMLElement;
      componentDidMount(): void;
      displayDefaultTooltip(): void;
      getSnapshotBeforeUpdate(
        prevProps: Readonly<CategoricalChartProps>,
        prevState: Readonly<CategoricalChartState>,
      ): null;
      componentDidUpdate(prevProps: CategoricalChartProps): void;
      componentWillUnmount(): void;
      getTooltipEventType(): TooltipEventType;
      getMouseInfo(event: MousePointer):
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            xValue: any;
            yValue: any;
            chartX: number;
            chartY: number;
          }
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            chartX: number;
            chartY: number;
          };
      inRange(x: number, y: number, scale?: number): any;
      parseEventsOfWrapper(): any;
      addListener(): void;
      removeListener(): void;
      handleLegendBBoxUpdate: (box: DOMRect) => void;
      handleReceiveSyncEvent: (
        cId: string | number,
        data: CategoricalChartState,
        emitter: Symbol,
      ) => void;
      handleBrushChange: ({
        startIndex,
        endIndex,
      }: {
        startIndex: number;
        endIndex: number;
      }) => void;
      handleMouseEnter: (e: MouseEvent<Element, MouseEvent>) => void;
      triggeredAfterMouseMove: (e: MousePointer) => any;
      handleItemMouseEnter: (el: any) => void;
      handleItemMouseLeave: () => void;
      handleMouseMove: (
        e: MousePointer &
          Partial<Omit<MouseEvent<Element, MouseEvent>, keyof MousePointer>>,
      ) => void;
      handleMouseLeave: (e: any) => void;
      handleOuterEvent: (
        e: MouseEvent<Element, MouseEvent> | TouchEvent<Element>,
      ) => void;
      handleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleMouseDown: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleMouseUp: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleTouchMove: (e: TouchEvent<Element>) => void;
      handleTouchStart: (e: TouchEvent<Element>) => void;
      handleTouchEnd: (e: TouchEvent<Element>) => void;
      handleDoubleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleContextMenu: (e: MouseEvent<Element, MouseEvent>) => void;
      triggerSyncEvent: (data: CategoricalChartState) => void;
      applySyncEvent: (data: CategoricalChartState) => void;
      filterFormatItem(item: any, displayName: any, childIndex: any): any;
      renderCursor: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => JSX.Element;
      renderPolarAxis: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderPolarGrid: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderLegend: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderTooltip: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderBrush: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderReferenceElement: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderActivePoints: ({
        item,
        activePoint,
        basePoint,
        childIndex,
        isRange,
      }: any) => ReactElement<any, string | JSXElementConstructor<any>>[];
      renderGraphicChild: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => any[];
      renderCustomized: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderClipPath(): JSX.Element;
      getXScales(): {
        [x: string]: Function | ScaleType;
      };
      getYScales(): {
        [x: string]: Function | ScaleType;
      };
      getXScaleByAxisId(axisId: string): Function | ScaleType;
      getYScaleByAxisId(axisId: string): Function | ScaleType;
      getItemByXY(chartXY: { x: number; y: number }): {
        graphicalItem: any;
        payload: any;
      };
      renderMap: {
        CartesianGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        ReferenceArea: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceLine: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceDot: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        XAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        YAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Brush: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        Bar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Line: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Area: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Radar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        RadialBar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Scatter: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Pie: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Funnel: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Tooltip: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => JSX.Element;
          once: boolean;
        };
        PolarGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        PolarAngleAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        PolarRadiusAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Customized: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
      };
      render(): JSX.Element;
      context: unknown;
      setState<K extends keyof CategoricalChartState>(
        state:
          | CategoricalChartState
          | ((
              prevState: Readonly<CategoricalChartState>,
              props: Readonly<CategoricalChartProps>,
            ) => CategoricalChartState | Pick<CategoricalChartState, K>)
          | Pick<CategoricalChartState, K>,
        callback?: () => void,
      ): void;
      forceUpdate(callback?: () => void): void;
      readonly props: Readonly<CategoricalChartProps>;
      state: Readonly<CategoricalChartState>;
      refs: {
        [key: string]: ReactInstance;
      };
      shouldComponentUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): boolean;
      componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
      componentWillMount?(): void;
      UNSAFE_componentWillMount?(): void;
      componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
    }>
>;

declare const ComposedChart: ForwardRefExoticComponent<
  CategoricalChartProps &
    RefAttributes<{
      readonly eventEmitterSymbol: Symbol;
      clipPathId: string;
      accessibilityManager: AccessibilityManager;
      throttleTriggeredAfterMouseMove: lodash.DebouncedFunc<
        (e: MousePointer) => any
      >;
      container?: HTMLElement;
      componentDidMount(): void;
      displayDefaultTooltip(): void;
      getSnapshotBeforeUpdate(
        prevProps: Readonly<CategoricalChartProps>,
        prevState: Readonly<CategoricalChartState>,
      ): null;
      componentDidUpdate(prevProps: CategoricalChartProps): void;
      componentWillUnmount(): void;
      getTooltipEventType(): TooltipEventType;
      getMouseInfo(event: MousePointer):
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            xValue: any;
            yValue: any;
            chartX: number;
            chartY: number;
          }
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            chartX: number;
            chartY: number;
          };
      inRange(x: number, y: number, scale?: number): any;
      parseEventsOfWrapper(): any;
      addListener(): void;
      removeListener(): void;
      handleLegendBBoxUpdate: (box: DOMRect) => void;
      handleReceiveSyncEvent: (
        cId: string | number,
        data: CategoricalChartState,
        emitter: Symbol,
      ) => void;
      handleBrushChange: ({
        startIndex,
        endIndex,
      }: {
        startIndex: number;
        endIndex: number;
      }) => void;
      handleMouseEnter: (e: MouseEvent<Element, MouseEvent>) => void;
      triggeredAfterMouseMove: (e: MousePointer) => any;
      handleItemMouseEnter: (el: any) => void;
      handleItemMouseLeave: () => void;
      handleMouseMove: (
        e: MousePointer &
          Partial<Omit<MouseEvent<Element, MouseEvent>, keyof MousePointer>>,
      ) => void;
      handleMouseLeave: (e: any) => void;
      handleOuterEvent: (
        e: MouseEvent<Element, MouseEvent> | TouchEvent<Element>,
      ) => void;
      handleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleMouseDown: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleMouseUp: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleTouchMove: (e: TouchEvent<Element>) => void;
      handleTouchStart: (e: TouchEvent<Element>) => void;
      handleTouchEnd: (e: TouchEvent<Element>) => void;
      handleDoubleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleContextMenu: (e: MouseEvent<Element, MouseEvent>) => void;
      triggerSyncEvent: (data: CategoricalChartState) => void;
      applySyncEvent: (data: CategoricalChartState) => void;
      filterFormatItem(item: any, displayName: any, childIndex: any): any;
      renderCursor: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => JSX.Element;
      renderPolarAxis: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderPolarGrid: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderLegend: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderTooltip: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderBrush: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderReferenceElement: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderActivePoints: ({
        item,
        activePoint,
        basePoint,
        childIndex,
        isRange,
      }: any) => ReactElement<any, string | JSXElementConstructor<any>>[];
      renderGraphicChild: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => any[];
      renderCustomized: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderClipPath(): JSX.Element;
      getXScales(): {
        [x: string]: Function | ScaleType;
      };
      getYScales(): {
        [x: string]: Function | ScaleType;
      };
      getXScaleByAxisId(axisId: string): Function | ScaleType;
      getYScaleByAxisId(axisId: string): Function | ScaleType;
      getItemByXY(chartXY: { x: number; y: number }): {
        graphicalItem: any;
        payload: any;
      };
      renderMap: {
        CartesianGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        ReferenceArea: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceLine: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceDot: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        XAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        YAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Brush: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        Bar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Line: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Area: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Radar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        RadialBar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Scatter: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Pie: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Funnel: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Tooltip: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => JSX.Element;
          once: boolean;
        };
        PolarGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        PolarAngleAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        PolarRadiusAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Customized: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
      };
      render(): JSX.Element;
      context: unknown;
      setState<K extends keyof CategoricalChartState>(
        state:
          | CategoricalChartState
          | ((
              prevState: Readonly<CategoricalChartState>,
              props: Readonly<CategoricalChartProps>,
            ) => CategoricalChartState | Pick<CategoricalChartState, K>)
          | Pick<CategoricalChartState, K>,
        callback?: () => void,
      ): void;
      forceUpdate(callback?: () => void): void;
      readonly props: Readonly<CategoricalChartProps>;
      state: Readonly<CategoricalChartState>;
      refs: {
        [key: string]: ReactInstance;
      };
      shouldComponentUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): boolean;
      componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
      componentWillMount?(): void;
      UNSAFE_componentWillMount?(): void;
      componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
    }>
>;

interface SunburstData {
  [key: string]: any;
  name: string;
  value?: number;
  fill?: string;
  children?: SunburstData[];
}
interface TextOptions {
  fontFamily?: string;
  fontWeight?: string;
  paintOrder?: string;
  stroke?: string;
  fill?: string;
  fontSize?: string;
  pointerEvents?: string;
}
interface SunburstChartProps {
  className?: string;
  data?: SunburstData;
  width?: number;
  height?: number;
  padding?: number;
  dataKey?: string;
  ringPadding?: number;
  innerRadius?: number;
  outerRadius?: number;
  /** The abscissa of pole in polar coordinate  */
  cx?: number;
  /** The ordinate of pole in polar coordinate  */
  cy?: number;
  /** Angle in degrees from which the chart should start.  */
  startAngle?: number;
  /** Angle, in degrees, at which the chart should end. Can be used to generate partial sunbursts.  */
  endAngle?: number;
  children?: ReactNode;
  fill?: string;
  stroke?: string;
  textOptions?: TextOptions;
  onMouseEnter?: (node: SunburstData, e: MouseEvent) => void;
  onMouseLeave?: (node: SunburstData, e: MouseEvent) => void;
  onClick?: (node: SunburstData) => void;
}
declare const SunburstChart: ({
  className,
  data,
  children,
  width,
  height,
  padding,
  dataKey,
  ringPadding,
  innerRadius,
  fill,
  stroke,
  textOptions,
  outerRadius,
  cx,
  cy,
  startAngle,
  endAngle,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: SunburstChartProps) => JSX.Element;

/**
 * @fileOverview Rectangle
 */

interface TrapezoidProps {
  className?: string;
  x?: number;
  y?: number;
  upperWidth?: number;
  lowerWidth?: number;
  height?: number;
  isUpdateAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
}
type Props = SVGProps<SVGPathElement> & TrapezoidProps;
declare const Trapezoid: FC<Props>;

/**
 * @fileOverview Render sectors of a funnel
 */

interface FunnelTrapezoidItem extends Props {
  value?: number | string;
  payload?: any;
  isActive: boolean;
}
interface InternalFunnelProps {
  className?: string;
  dataKey: DataKey<any>;
  nameKey?: DataKey<any>;
  data?: any[];
  hide?: boolean;
  shape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
  activeShape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
  legendType?: LegendType;
  tooltipType?: TooltipType$1;
  activeIndex?: number | number[];
  lastShapeType?: "triangle" | "rectangle";
  reversed?: boolean;
  onAnimationStart?: () => void;
  onAnimationEnd?: () => void;
  isAnimationActive?: boolean;
  animateNewValues?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  id?: string;
  trapezoids?: FunnelTrapezoidItem[];
  animationId?: number;
}
type FunnelProps = PresentationAttributesAdaptChildEvent<any, SVGElement> &
  Props &
  InternalFunnelProps;
interface State {
  readonly prevTrapezoids?: FunnelTrapezoidItem[];
  readonly curTrapezoids?: FunnelTrapezoidItem[];
  readonly prevAnimationId?: number;
  readonly isAnimationFinished?: boolean;
}
declare class Funnel extends PureComponent<FunnelProps, State> {
  static displayName: string;
  static defaultProps: {
    stroke: string;
    fill: string;
    legendType: string;
    labelLine: boolean;
    hide: boolean;
    isAnimationActive: boolean;
    animationBegin: number;
    animationDuration: number;
    animationEasing: string;
    nameKey: string;
    lastShapeType: string;
  };
  static getRealFunnelData: (item: Funnel) => any[];
  static getRealWidthHeight: (
    item: Funnel,
    offset: ChartOffset,
  ) => {
    realWidth: number;
    realHeight: number;
    offsetX: number;
    offsetY: number;
  };
  static getComposedData: ({
    item,
    offset,
  }: {
    item: Funnel;
    offset: ChartOffset;
  }) => {
    trapezoids: {
      payload: any;
      parentViewBox: {
        x: number;
        y: number;
        width: number;
        height: number;
      };
      labelViewBox: {
        x: number;
        y: number;
        width: number;
        height: number;
      };
      x: number;
      y: number;
      width: number;
      upperWidth: number;
      lowerWidth: number;
      height: number;
      name: any;
      val: any;
      tooltipPayload: {
        name: any;
        value: any;
        payload: any;
        dataKey: DataKey<any>;
        type: "none";
      }[];
      tooltipPosition: {
        x: number;
        y: number;
      };
    }[];
    data: any[];
  };
  state: State;
  static getDerivedStateFromProps(
    nextProps: FunnelProps,
    prevState: State,
  ): State;
  handleAnimationEnd: () => void;
  handleAnimationStart: () => void;
  isActiveIndex(i: number): boolean;
  renderTrapezoidsStatically(trapezoids: FunnelTrapezoidItem[]): JSX.Element[];
  renderTrapezoidsWithAnimation(): JSX.Element;
  renderTrapezoids(): JSX.Element | JSX.Element[];
  render(): JSX.Element;
}

declare const FunnelChart: ForwardRefExoticComponent<
  CategoricalChartProps &
    RefAttributes<{
      readonly eventEmitterSymbol: Symbol;
      clipPathId: string;
      accessibilityManager: AccessibilityManager;
      throttleTriggeredAfterMouseMove: lodash.DebouncedFunc<
        (e: MousePointer) => any
      >;
      container?: HTMLElement;
      componentDidMount(): void;
      displayDefaultTooltip(): void;
      getSnapshotBeforeUpdate(
        prevProps: Readonly<CategoricalChartProps>,
        prevState: Readonly<CategoricalChartState>,
      ): null;
      componentDidUpdate(prevProps: CategoricalChartProps): void;
      componentWillUnmount(): void;
      getTooltipEventType(): TooltipEventType;
      getMouseInfo(event: MousePointer):
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            xValue: any;
            yValue: any;
            chartX: number;
            chartY: number;
          }
        | {
            activeTooltipIndex: number;
            activeLabel: any;
            activePayload: any[];
            activeCoordinate: ChartCoordinate;
            chartX: number;
            chartY: number;
          };
      inRange(x: number, y: number, scale?: number): any;
      parseEventsOfWrapper(): any;
      addListener(): void;
      removeListener(): void;
      handleLegendBBoxUpdate: (box: DOMRect) => void;
      handleReceiveSyncEvent: (
        cId: string | number,
        data: CategoricalChartState,
        emitter: Symbol,
      ) => void;
      handleBrushChange: ({
        startIndex,
        endIndex,
      }: {
        startIndex: number;
        endIndex: number;
      }) => void;
      handleMouseEnter: (e: MouseEvent<Element, MouseEvent>) => void;
      triggeredAfterMouseMove: (e: MousePointer) => any;
      handleItemMouseEnter: (el: any) => void;
      handleItemMouseLeave: () => void;
      handleMouseMove: (
        e: MousePointer &
          Partial<Omit<MouseEvent<Element, MouseEvent>, keyof MousePointer>>,
      ) => void;
      handleMouseLeave: (e: any) => void;
      handleOuterEvent: (
        e: MouseEvent<Element, MouseEvent> | TouchEvent<Element>,
      ) => void;
      handleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleMouseDown: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleMouseUp: (e: MouseEvent<Element, MouseEvent> | Touch) => void;
      handleTouchMove: (e: TouchEvent<Element>) => void;
      handleTouchStart: (e: TouchEvent<Element>) => void;
      handleTouchEnd: (e: TouchEvent<Element>) => void;
      handleDoubleClick: (e: MouseEvent<Element, MouseEvent>) => void;
      handleContextMenu: (e: MouseEvent<Element, MouseEvent>) => void;
      triggerSyncEvent: (data: CategoricalChartState) => void;
      applySyncEvent: (data: CategoricalChartState) => void;
      filterFormatItem(item: any, displayName: any, childIndex: any): any;
      renderCursor: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => JSX.Element;
      renderPolarAxis: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderPolarGrid: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderLegend: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderTooltip: () => ReactElement<
        any,
        string | JSXElementConstructor<any>
      >;
      renderBrush: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderReferenceElement: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderActivePoints: ({
        item,
        activePoint,
        basePoint,
        childIndex,
        isRange,
      }: any) => ReactElement<any, string | JSXElementConstructor<any>>[];
      renderGraphicChild: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => any[];
      renderCustomized: (
        element: ReactElement<any, string | JSXElementConstructor<any>>,
        displayName: string,
        index: number,
      ) => ReactElement<any, string | JSXElementConstructor<any>>;
      renderClipPath(): JSX.Element;
      getXScales(): {
        [x: string]: Function | ScaleType;
      };
      getYScales(): {
        [x: string]: Function | ScaleType;
      };
      getXScaleByAxisId(axisId: string): Function | ScaleType;
      getYScaleByAxisId(axisId: string): Function | ScaleType;
      getItemByXY(chartXY: { x: number; y: number }): {
        graphicalItem: any;
        payload: any;
      };
      renderMap: {
        CartesianGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        ReferenceArea: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceLine: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        ReferenceDot: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        XAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        YAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Brush: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        Bar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Line: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Area: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Radar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        RadialBar: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Scatter: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Pie: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Funnel: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => any[];
        };
        Tooltip: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => JSX.Element;
          once: boolean;
        };
        PolarGrid: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
          once: boolean;
        };
        PolarAngleAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        PolarRadiusAxis: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
        Customized: {
          handler: (
            element: ReactElement<any, string | JSXElementConstructor<any>>,
            displayName: string,
            index: number,
          ) => ReactElement<any, string | JSXElementConstructor<any>>;
        };
      };
      render(): JSX.Element;
      context: unknown;
      setState<K extends keyof CategoricalChartState>(
        state:
          | CategoricalChartState
          | ((
              prevState: Readonly<CategoricalChartState>,
              props: Readonly<CategoricalChartProps>,
            ) => CategoricalChartState | Pick<CategoricalChartState, K>)
          | Pick<CategoricalChartState, K>,
        callback?: () => void,
      ): void;
      forceUpdate(callback?: () => void): void;
      readonly props: Readonly<CategoricalChartProps>;
      state: Readonly<CategoricalChartState>;
      refs: {
        [key: string]: ReactInstance;
      };
      shouldComponentUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): boolean;
      componentDidCatch?(error: Error, errorInfo: ErrorInfo): void;
      componentWillMount?(): void;
      UNSAFE_componentWillMount?(): void;
      componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillReceiveProps?(
        nextProps: Readonly<CategoricalChartProps>,
        nextContext: any,
      ): void;
      componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
      UNSAFE_componentWillUpdate?(
        nextProps: Readonly<CategoricalChartProps>,
        nextState: Readonly<CategoricalChartState>,
        nextContext: any,
      ): void;
    }>
>;

interface GlobalConfig {
  isSsr?: boolean;
}
type GlobalConfigKeys = "isSsr";
declare const Global: {
  isSsr: boolean;
  get: (key: "isSsr") => boolean;
  set: (key: GlobalConfigKeys | GlobalConfig, value?: any) => void;
};

export {
  Area,
  AreaChart,
  type Props$7 as AreaProps,
  Bar,
  BarChart,
  type Props$6 as BarProps,
  Brush,
  type Props$e as BrushProps,
  CartesianAxis,
  type Props$a as CartesianAxisProps,
  CartesianGrid,
  type Props$9 as CartesianGridProps,
  Cell,
  type Props$u as CellProps,
  ComposedChart,
  Cross,
  type Props$k as CrossProps,
  Curve,
  type Props$o as CurveProps,
  Customized,
  type Props$q as CustomizedProps,
  DefaultLegendContent,
  type Props$y as DefaultLegendContentProps,
  DefaultTooltipContent,
  type Props$w as DefaultTooltipContentProps,
  Dot,
  type Props$l as DotProps,
  ErrorBar,
  type Props$4 as ErrorBarProps,
  Funnel,
  FunnelChart,
  type FunnelProps,
  Global,
  Label,
  LabelList,
  type Props$r as LabelListProps,
  type Props$s as LabelProps,
  Layer,
  type Props$B as LayerProps,
  Legend,
  type Props$x as LegendProps,
  type LegendType,
  Line,
  LineChart,
  type Props$8 as LineProps,
  Pie,
  PieChart,
  type PieLabel,
  type PieLabelRenderProps,
  type Props$g as PieProps,
  PolarAngleAxis,
  type Props$h as PolarAngleAxisProps,
  PolarGrid,
  type Props$j as PolarGridProps,
  PolarRadiusAxis,
  type Props$i as PolarRadiusAxisProps,
  Polygon,
  type Props$m as PolygonProps,
  Radar,
  RadarChart,
  type Props$f as RadarProps,
  RadialBar,
  RadialBarChart,
  type RadialBarProps,
  Rectangle,
  type Props$n as RectangleProps,
  ReferenceArea,
  type Props$b as ReferenceAreaProps,
  ReferenceDot,
  type Props$c as ReferenceDotProps,
  ReferenceLine,
  type Props$d as ReferenceLineProps,
  ResponsiveContainer,
  type Props$v as ResponsiveContainerProps,
  Sankey,
  Scatter,
  ScatterChart,
  type Props$3 as ScatterProps,
  Sector,
  type Props$p as SectorProps,
  SunburstChart,
  Surface,
  type Props$C as SurfaceProps,
  Symbols,
  type SymbolsProps,
  Text,
  type Props$t as TextProps,
  Tooltip,
  type TooltipProps,
  Trapezoid,
  type Props as TrapezoidProps,
  Treemap,
  type Props$2 as TreemapProps,
  XAxis,
  type Props$A as XAxisProps,
  YAxis,
  type Props$z as YAxisProps,
  ZAxis,
  type Props$5 as ZAxisProps,
};
