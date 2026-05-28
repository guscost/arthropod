import * as React from "react";
import {
  SVGProps,
  CSSProperties,
  ReactElement,
  SyntheticEvent,
  MouseEvent as MouseEvent$1,
  TouchEvent,
  ReactNode,
  Ref,
  PropsWithoutRef,
  Key,
  AriaAttributes,
  ClipboardEvent,
  CompositionEvent,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
  DragEvent,
  PointerEvent,
  UIEvent,
  WheelEvent,
  AnimationEvent,
  TransitionEvent,
  SVGAttributes,
  FunctionComponent,
  Component,
  ComponentType,
} from "react";

interface DotProps {
  className?: string;
  /**
   * The x-coordinate of center in pixels.
   */
  cx?: number;
  /**
   * The y-coordinate of center in pixels.
   */
  cy?: number;
  /**
   * The radius of dot.
   */
  r?: number | string;
  clipDot?: boolean;
}
type Props$D = PresentationAttributesWithProps<DotProps, SVGCircleElement> &
  DotProps;
/**
 * Renders a dot in the chart.
 *
 * This component accepts X and Y coordinates in pixels.
 * If you need to position the rectangle based on your chart's data,
 * consider using the {@link ReferenceDot} component instead.
 *
 * @param props
 * @constructor
 */
declare const Dot: React.FC<Props$D>;

declare global {
  interface SymbolConstructor {
    readonly observable: symbol;
  }
}

/**
 * @inline
 */
type TextAnchor = "start" | "middle" | "end" | "inherit";
/**
 * @inline
 */
type TextVerticalAnchor = "start" | "middle" | "end";
/**
 * @inline
 */
type RenderableText = string | number | boolean | null | undefined;
interface TextProps {
  /**
   * When true, scales the text to fit within the specified width.
   * The text will be scaled down proportionally to fit the available space.
   *
   * **Important interactions:**
   * - Requires `width` to be defined to have any effect. If width is undefined, scaleToFit does nothing.
   * - When enabled, `maxLines` restrictions are bypassed and ellipsis truncation is disabled.
   * - Uses the first line's width to calculate the scale factor.
   * - The scaling transform is applied as `scale(width / lineWidth)`.
   *
   * @defaultValue false
   */
  scaleToFit?: boolean;
  /**
   * Text rotation angle in degrees.
   * Positive values rotate clockwise, negative values rotate counterclockwise.
   *
   * @defaultValue 0
   */
  angle?: number;
  /**
   * Horizontal text alignment within the text element.
   * - 'start': Text starts at the x coordinate (left-aligned for LTR text)
   * - 'middle': Text is centered on the x coordinate
   * - 'end': Text ends at the x coordinate (right-aligned for LTR text)
   * - 'inherit': Inherits the text-anchor from parent element
   *
   * **Note:** This controls horizontal alignment only and does not affect RTL text behavior.
   * @defaultValue 'start'
   */
  textAnchor?: TextAnchor;
  /**
   * Vertical text alignment relative to the y coordinate.
   * - 'start': Text baseline starts at y coordinate (text appears below the y position)
   * - 'middle': Text is vertically centered on the y coordinate
   * - 'end': Text baseline ends at y coordinate (text appears above the y position)
   *
   * **Note:** This controls vertical positioning only and does not affect RTL (right-to-left) text behavior.
   * The alignment calculation uses capHeight and lineHeight to determine the starting dy offset.
   *
   * @defaultValue 'end'
   */
  verticalAnchor?: TextVerticalAnchor;
  /**
   * CSS styles to apply to the text element.
   * These styles are used for text measurement calculations when width constraints or scaleToFit are used.
   * Font-related properties (fontSize, fontFamily, fontWeight, etc.) are particularly important for accurate measurements.
   */
  style?: CSSProperties;
  /**
   * Line height for multi-line text.
   * Can be a number (height in pixels) or a string with CSS units.
   * Used to calculate spacing between lines when text wraps to multiple lines.
   * Also used in verticalAnchor calculations for positioning the text block.
   * @defaultValue '1em'
   */
  lineHeight?: number | string;
  /**
   * When true, enables character-level breaking instead of word-level breaking.
   * - false: Text breaks at word boundaries (spaces, tabs, etc.)
   * - true: Text can break between any characters, useful for languages without spaces
   *
   * **Note:** Only effective when `width` is defined to enable line breaking.
   * @defaultValue false
   */
  breakAll?: boolean;
  /**
   * The text content to render.
   * Can be a string or number. Numbers will be converted to strings.
   * undefined or null values will result in no text being rendered.
   */
  children?: RenderableText;
  /**
   * Maximum number of lines to display when text wrapping is enabled.
   * When text exceeds this limit, it will be truncated with an ellipsis (…).
   *
   * **Important requirements for ellipsis truncation:**
   * - `width` must be defined (no effect when width is undefined)
   * - `scaleToFit` must be false (when scaleToFit is true, maxLines is bypassed)
   * - Text must actually overflow the specified maxLines or width constraints
   *
   * **Truncation behavior:**
   * - Uses binary search to find the optimal truncation point
   * - Adds ellipsis (…) at the end of the truncated text
   * - Ensures the truncated text + ellipsis fits within the constraints
   *
   * **Interaction with other props:**
   * - When `scaleToFit` is true, this property is ignored
   * - Requires `width` to be set for line breaking to occur
   */
  maxLines?: number;
  /**
   * When width is specified, the text will automatically wrap by calculating the width of text.
   */
  width?: number | string;
}
type Props$C = Omit<SVGProps<SVGTextElement>, "textAnchor" | "verticalAnchor"> &
  TextProps;
declare const Text: React.ForwardRefExoticComponent<
  Omit<Props$C, "ref"> & React.RefAttributes<SVGTextElement>
>;

/**
 * @since 3.4
 */
interface ZIndexable {
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 0
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
}
type ZIndexLayerProps = {
  /**
   * Z-Index of this component and its children.
   *
   * The higher the value, the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   *
   * If `undefined` or `0`, the content is rendered in the default layer without portals.
   */
  zIndex: number | undefined;
  /**
   * The content to render inside this zIndex layer.
   * Undefined children are allowed and will render nothing and will still report the zIndex to the portal system.
   */
  children?: React.ReactNode;
};
/**
 * A layer that renders its children into a portal corresponding to the given zIndex.
 * We can't use regular CSS `z-index` because SVG does not support it.
 * So instead, we create separate DOM nodes for each zIndex layer
 * and render the children into the corresponding DOM node using React portals.
 *
 * This component must be used inside a Chart component.
 *
 * @param zIndex numeric zIndex value, higher values are rendered on top of lower values
 * @param children the content to render inside this zIndex layer
 *
 * @since 3.4
 */
declare function ZIndexLayer({
  zIndex,
  children,
}: ZIndexLayerProps): React.ReactNode;

type CartesianLabelPosition =
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
      x?: number | string;
      y?: number | string;
    };

/**
 * @inline
 */
type LabelContentType =
  | ReactElement
  | ((props: Props$B) => RenderableText | ReactElement);
type PolarLabelPosition = "insideStart" | "insideEnd" | "end";
/**
 * @inline
 */
type LabelPosition = CartesianLabelPosition | PolarLabelPosition;
/**
 * @inline
 */
type LabelFormatter = (label: RenderableText) => RenderableText;
interface LabelProps extends ZIndexable {
  /**
   * The box of viewing area. Used for positioning.
   * If undefined, viewBox will be calculated based on surrounding context.
   */
  viewBox?: ViewBox;
  parentViewBox?: ViewBox;
  /**
   * Function to customize how content is serialized before rendering.
   *
   * This should return a renderable text - something that the {@link Text} component can render.
   * Typically, a string or number.
   * Custom components are not supported here - use the `content` prop instead.
   */
  formatter?: LabelFormatter;
  /**
   * The value of label can be set as children or as the `value` prop
   *
   * @example <Label value="foo" />
   */
  value?: RenderableText;
  /**
   * The offset to the specified "position". Direction of the offset depends on the position.
   *
   * @defaultValue 5
   */
  offset?: number;
  /**
   * The position of label relative to the view box.
   *
   * @defaultValue middle
   */
  position?: LabelPosition;
  /**
   * The value of label can be set as children or as the `value` prop
   *
   * @example <Label>foo</Label>
   */
  children?: RenderableText;
  className?: string;
  /**
   * If set a React element, the option is the custom react element of rendering label.
   * If set a function, the function will be called to render label content.
   *
   * @example <Label content={CustomizedLabel} />
   * @example
   * const renderCustomLabel = (props) => <text {...props}>Custom Label</text>;
   * <Label content={renderCustomLabel} />
   */
  content?: LabelContentType;
  /**
   * @defaultValue false
   */
  textBreakAll?: boolean;
  /**
   * Text rotation angle in degrees.
   * Positive values rotate clockwise, negative values rotate counterclockwise.
   *
   * @defaultValue 0
   */
  angle?: number;
  index?: number;
  labelRef?: React.RefObject<SVGTextElement> | null;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 2000
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  /**
   * Unique identifier of this component.
   * Used as an HTML attribute `id`.
   */
  id?: string;
}
type Props$B = Omit<SVGProps<SVGTextElement>, "viewBox"> & LabelProps;
type ImplicitLabelType =
  | boolean
  | string
  | number
  | ReactElement<SVGElement>
  | ((props: any) => RenderableText | ReactElement)
  | (Props$B & {
      dataKey?: DataKey<any>;
    });
/**
 * @consumes CartesianViewBoxContext
 * @consumes PolarViewBoxContext
 * @consumes CartesianLabelContext
 * @consumes PolarLabelContext
 */
declare function Label(outerProps: Props$B): React.JSX.Element | null;
declare namespace Label {
  var displayName: string;
}

/**
 * @fileOverview Cartesian Axis
 */

/** The orientation of the axis in correspondence to the chart */
type Orientation = XAxisOrientation | YAxisOrientation;
/** A unit to be appended to a value */
type Unit = string | number;
/** The formatter function of tick */
type TickFormatter = (value: any, index: number) => string;
interface CartesianAxisProps extends ZIndexable {
  className?: string;
  axisType?: "xAxis" | "yAxis";
  axisId?: AxisId;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  unit?: Unit;
  orientation?: Orientation;
  viewBox?: CartesianViewBox;
  tick?: TickProp<unknown>;
  /**
   * Additional props to spread to each tick Text element.
   * Optional, the CartesianAxis component will provide its own defaults calculated from other props.
   */
  tickTextProps?: Props$C;
  axisLine?: boolean | SVGProps<SVGLineElement>;
  tickLine?: boolean | SVGProps<SVGLineElement>;
  mirror?: boolean;
  tickMargin?: number;
  hide?: boolean;
  label?: ImplicitLabelType;
  /** Padding information passed to custom tick components */
  padding?: XAxisPadding | YAxisPadding;
  minTickGap?: number;
  /**
   * Careful - this is the same name as XAxis + YAxis `ticks` but completely different object!
   */
  ticks?: ReadonlyArray<CartesianTickItem>;
  tickSize?: number;
  tickFormatter?: TickFormatter;
  interval?: AxisInterval;
  /** Angle in which ticks will be rendered. */
  angle?: number;
  /**
   * CartesianAxis reads scale internally and this prop is ignored since 3.0
   * @deprecated
   */
  scale?: unknown;
  labelRef?: React.RefObject<SVGTextElement> | null;
  ref?: React.Ref<CartesianAxisRef>;
}
interface CartesianAxisRef {
  getCalculatedWidth(): number;
}
type Props$A = Omit<
  PresentationAttributesAdaptChildEvent<any, SVGElement>,
  "viewBox" | "scale" | "ref"
> &
  CartesianAxisProps;
/**
 * @deprecated
 *
 * This component is not meant to be used directly in app code.
 * Use XAxis or YAxis instead.
 *
 * Starting from Recharts v4.0 we will make this component internal only.
 */
declare const CartesianAxis: React.ForwardRefExoticComponent<
  Omit<Props$A, "ref"> & React.RefAttributes<CartesianAxisRef>
>;

/**
 * A subset of d3-scale. This is the external representation;
 * This is the type that we expect from `axis.scale` props, if users want to provide custom scales.
 *
 * The actual d3 scales have many more methods, but we don't need them all.
 * Specifically we want to avoid all the setters
 * - immutable API is preferred in Recharts and mutating state will lead to hard-to-debug issues.
 *
 * @see {@link ScaleType} and {@link RechartsScaleType} for string shortcuts that you can use instead of this interface.
 */
interface CustomScaleDefinition<
  Domain extends CategoricalDomainItem = CategoricalDomainItem,
> {
  /**
   * Returns the scale's current domain.
   * The domain could be:
   * - in categorical scales: an array of strings or categories
   * - in continuous scales: tuple of two numbers: [min, max]
   */
  domain(): ReadonlyArray<Domain>;
  /**
   * Sets the domain of the scale.
   */
  domain(newDomain: ReadonlyArray<Domain>): this;
  /**
   * Returns the scale’s current range.
   */
  range(): ReadonlyArray<number>;
  /**
   * Sets the range of the scale.
   */
  range(newRange: ReadonlyArray<number>): this;
  /**
   * Returns an exact copy of this scale. Changes to this scale will not affect the returned scale, and vice versa.
   * We use this method in Recharts to ensure immutability - changes to the scale outside should not affect the internal state,
   * as they won't trigger re-renders in React.
   */
  copy(): CustomScaleDefinition<Domain>;
  /**
   * Returns width of each band.
   * Most scales are not banded, so this method is optional.
   * Banded scales (like scaleBand from d3-scale) will implement this method.
   */
  bandwidth?: () => number;
  /**
   * Quantitative (continuous) scales provide a ticks method that returns representative values from the scale’s domain.
   * Ordinal and band scales do not have this method.
   *
   * An optional count argument requests more or fewer ticks.
   * The number of ticks returned, however, is not necessarily equal to the requested count.
   *
   * @see {@link https://d3js.org/d3-scale/linear#linear_ticks}
   * @see {@link https://observablehq.com/@d3/scale-ticks}
   *
   * @param count number of ticks
   */
  ticks?: (count: number | undefined) => ReadonlyArray<number>;
  /**
   * Given an arbitrary input, returns the corresponding point derived from the output range if the input is in the scale's domain.
   * If the input is not included in the domain, returns undefined.
   *
   * @param input
   */
  (input: Domain): number | undefined;
  /**
   * Given a value from the range, returns the corresponding value from the domain.
   *
   * This method is optional, as not all scales provide an inverse mapping.
   * Linear and time scales typically do, while band and ordinal scales may not.
   */
  invert?(value: number): Domain | undefined;
}

/**
 * @inline
 */
type AxisId = string | number;
type XAxisPadding =
  | {
      left?: number;
      right?: number;
    }
  | "gap"
  | "no-gap";
type YAxisPadding =
  | {
      top?: number;
      bottom?: number;
    }
  | "gap"
  | "no-gap";
type XAxisOrientation = "top" | "bottom";
type YAxisOrientation = "left" | "right";
/**
 * Properties shared in X, Y, and Z axes.
 * User defined axis settings, coming from props.
 */
type BaseCartesianAxis = {
  id: AxisId;
  scale:
    | ScaleType
    | CustomScaleDefinition
    | CustomScaleDefinition<string>
    | CustomScaleDefinition<number>
    | CustomScaleDefinition<Date>;
  /**
   * Before creating this object, evaluate the domain type based on the chart layout so that we have the 'auto' resolved.
   */
  type: EvaluatedAxisDomainType;
  /**
   * The axis functionality is severely restricted without a dataKey
   * - but there is still something left, and the prop is optional
   * so this can also be undefined even in real charts.
   * There are no defaults.
   */
  dataKey: DataKey<any> | undefined;
  unit: string | undefined;
  name: string | undefined;
  allowDuplicatedCategory: boolean;
  allowDataOverflow: boolean;
  reversed: boolean;
  includeHidden: boolean;
  domain: AxisDomain | undefined;
};
/**
 * Controls how Recharts calculates "nice" tick values for numerical axes.
 *
 * - `'none'`: Recharts does not apply any tick-rounding algorithm; tick positions are
 *   determined entirely by d3, evenly spaced but not rounded to human-friendly numbers.
 *   There is no domain-extension logic applied in this mode.
 *
 * - `'auto'` *(default)*: Recharts automatically decides whether and how to apply tick
 *   niceties based on the domain definition. When the domain contains an `'auto'` keyword,
 *   Recharts uses the `'adaptive'` algorithm and may extend the domain slightly to
 *   produce clean tick labels. Otherwise, it applies the same algorithm while keeping
 *   ticks within the fixed domain. This mirrors the default behavior from Recharts v2.
 *
 * - `'adaptive'`: Always applies the space-efficient algorithm (`getAdaptiveStep`),
 *   which fills the available range as densely as possible while still rounding steps
 *   to reasonable numbers (e.g. 10, 20, 25). May produce less "round-looking" labels
 *   than `'snap125'`, but wastes less space. The domain-extension logic still applies
 *   when the domain contains an `'auto'` keyword.
 *
 * - `'snap125'`: Always applies the round-numbers algorithm (`getSnap125Step`), which
 *   snaps step sizes to values from the set {1, 2, 2.5, 5} × 10ⁿ. Produces very
 *   human-friendly labels (e.g. 0, 5, 10, 15, 20) but may leave blank space at the
 *   edges of the chart. The domain-extension logic still applies when the domain
 *   contains an `'auto'` keyword.
 *
 * @see {@link https://recharts.github.io/guide/axisTicks/}
 * @inline
 */
type NiceTicksAlgorithm = "none" | "auto" | "adaptive" | "snap125";
type TicksSettings = {
  allowDecimals: boolean;
  /**
   * We pass the suggested number of ticks to d3 https://d3js.org/d3-scale/linear#linear_ticks
   * This number is a suggestion. d3 tries to accommodate it, but it might return more or less ticks than requested:
   * > The specified count is only a hint; the scale may return more or fewer values depending on the domain.
   *
   * If undefined, then d3 decides the number of ticks on its own. The default in d3 is 10,
   * but it can vary based on the domain size and other factors.
   */
  tickCount: number | undefined;
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   */
  ticks: ReadonlyArray<AxisTick> | undefined;
  tick: TickProp<any>;
  /**
   * Controls how Recharts calculates "nice" tick values for this axis.
   * See {@link NiceTicksAlgorithm} for a full description of each option.
   *
   * @defaultValue 'auto'
   */
  niceTicks: NiceTicksAlgorithm;
};
/**
 * These are the external props, visible for users as they set them using our public API.
 * There is all sorts of internal computed things based on these, but they will come through selectors.
 *
 * Properties shared between X and Y axes
 */
type CartesianAxisSettings = BaseCartesianAxis &
  TicksSettings & {
    interval: AxisInterval;
    mirror: boolean;
    minTickGap: number;
    angle: number;
    hide: boolean;
    tickFormatter: TickFormatter | undefined;
  };
type YAxisWidth = number | "auto";

type ActiveLabel = string | number | undefined;
/**
 * Despite the name, this type is used for all event types, not just mouse events.
 */
type MouseHandlerDataParam = {
  /**
   * Index of the active tick in the current chart. Only works with number-indexed one-dimensional data charts,
   * like Line, Area, Bar, Pie, etc.
   *
   * Doesn't work with two-dimensional data charts like Treemap, Sankey. But one day it will which is why the TooltipIndex type is here.
   */
  activeTooltipIndex: number | TooltipIndex | undefined;
  isTooltipActive: boolean;
  /**
   * Exactly the same as activeTooltipIndex - this was also duplicated in recharts@2 so let's keep both properties for better backwards compatibility.
   */
  activeIndex: number | TooltipIndex | undefined;
  /**
   * The category or domain value of the active tooltip entry.
   */
  activeLabel: ActiveLabel;
  activeDataKey: DataKey<any> | undefined;
  activeCoordinate: Coordinate | undefined;
};
/**
 * Allows customisation of how the charts will synchronize tooltips and brushes.
 * Default: index
 *
 * 'index': other charts will reuse current datum's index within the data array. In cases where data does not have the same length, this might yield unexpected results.
 * 'value': will try to match other charts values
 * custom function: will receive two arguments and should return an index of the active tick in the current chart:
 * argument 1: ticks from the current chart
 * argument 2: active tooltip state from the other chart
 */
type SyncMethod =
  | "index"
  | "value"
  | ((ticks: ReadonlyArray<TickItem>, data: MouseHandlerDataParam) => number);

type TooltipTrigger = "hover" | "click";
type CategoricalChartFunc<E = SyntheticEvent> = (
  nextState: MouseHandlerDataParam,
  event: E,
) => void;
interface ExternalMouseEvents {
  /**
   * The customized event handler of click in this chart.
   */
  onClick?: CategoricalChartFunc<MouseEvent$1<SVGGraphicsElement>>;
  /**
   * The customized event handler of mouseleave in this chart.
   */
  onMouseLeave?: CategoricalChartFunc<MouseEvent$1<SVGGraphicsElement>>;
  /**
   * The customized event handler of mouseenter in this chart.
   */
  onMouseEnter?: CategoricalChartFunc<MouseEvent$1<SVGGraphicsElement>>;
  /**
   * The customized event handler of mousemove in this chart.
   */
  onMouseMove?: CategoricalChartFunc<MouseEvent$1<SVGGraphicsElement>>;
  /**
   * The customized event handler of mousedown in this chart.
   */
  onMouseDown?: CategoricalChartFunc<MouseEvent$1<SVGGraphicsElement>>;
  /**
   * The customized event handler of mouseup in this chart.
   */
  onMouseUp?: CategoricalChartFunc<MouseEvent$1<SVGGraphicsElement>>;
  /**
   * The customized event handler of contextmenu in this chart.
   */
  onContextMenu?: CategoricalChartFunc<MouseEvent$1<SVGGraphicsElement>>;
  /**
   * The customized event handler of dblclick in this chart.
   */
  onDoubleClick?: CategoricalChartFunc<MouseEvent$1<SVGGraphicsElement>>;
  /**
   * The customized event handler of touchstart in this chart.
   */
  onTouchStart?: CategoricalChartFunc<TouchEvent<SVGGraphicsElement>>;
  /**
   * The customized event handler of touchmove in this chart.
   */
  onTouchMove?: CategoricalChartFunc<TouchEvent<SVGGraphicsElement>>;
  /**
   * The customized event handler of touchend in this chart.
   */
  onTouchEnd?: CategoricalChartFunc<TouchEvent<SVGGraphicsElement>>;
}

/**
 * @fileOverview Default Tooltip Content
 */

type TooltipType$1 = "none";
type ValueType = number | string | ReadonlyArray<number | string>;
type NameType = number | string;
type Formatter$1<
  TValue extends ValueType = ValueType,
  TName extends NameType = NameType,
> = (
  value: TValue | undefined,
  name: TName | undefined,
  item: Payload<TValue, TName>,
  index: number,
  payload: ReadonlyArray<Payload<TValue, TName>>,
) => [React.ReactNode, TName] | React.ReactNode;
interface Payload<
  TValue extends ValueType = ValueType,
  TName extends NameType = NameType,
> extends Omit<SVGProps<SVGElement>, "name"> {
  type?: TooltipType$1;
  color?: string;
  formatter?: Formatter$1<TValue, TName>;
  name?: TName;
  value?: TValue;
  unit?: ReactNode;
  fill?: string;
  dataKey?: DataKey<any>;
  nameKey?: DataKey<any>;
  payload?: any;
  chartType?: string;
  stroke?: string;
  strokeDasharray?: string | number;
  strokeWidth?: number | string;
  className?: string;
  hide?: boolean;
  /**
   * The id of the graphical item that the data point belongs to
   */
  graphicalItemId: string;
}
/**
 * @inline
 */
type TooltipItemSorter<
  TValue extends ValueType = ValueType,
  TName extends NameType = NameType,
> =
  | "dataKey"
  | "value"
  | "name"
  | ((item: Payload<TValue, TName>) => number | string | undefined);
interface Props$z<
  TValue extends ValueType = ValueType,
  TName extends NameType = NameType,
> {
  separator?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  formatter?: Formatter$1<TValue, TName>;
  contentStyle?: CSSProperties;
  itemStyle?: CSSProperties;
  labelStyle?: CSSProperties;
  labelFormatter?: (
    label: ReactNode,
    payload: ReadonlyArray<Payload<TValue, TName>>,
  ) => ReactNode;
  label?: ReactNode;
  payload?: ReadonlyArray<Payload<TValue, TName>>;
  itemSorter?: TooltipItemSorter<TValue, TName>;
  accessibilityLayer?: boolean;
}
/**
 * This component is by default rendered inside the {@link Tooltip} component. You would not use it directly.
 *
 * You can use this component to customize the content of the tooltip,
 * or you can provide your own completely independent content.
 */
declare const DefaultTooltipContent: (props: Props$z) => React.JSX.Element;

interface BrushStartEndIndex {
  startIndex: number;
  endIndex: number;
}
type OnBrushUpdate = (newState: BrushStartEndIndex) => void;

/**
 * This is the data that's coming through main chart `data` prop
 * Recharts is very flexible in what it accepts so the type is very flexible too.
 * This will typically be an object, and various components will provide various `dataKey`
 * that dictates how to pull data from that object.
 *
 * TL;DR: before dataKey
 *
 * @inline
 */
type ChartData<DataPointType = unknown> = ReadonlyArray<DataPointType>;

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
interface SymbolType$1 {
  /**
   * Renders this symbol type to the specified context with the specified size in square pixels. The context implements the CanvasPath interface.
   * (Note that this is a subset of the CanvasRenderingContext2D interface!)
   *
   * @param context A rendering context implementing CanvasPath.
   * @param size Size of the symbol to draw.
   */
  draw(context: CanvasPath_D3Shape, size: number): void;
}

/**
 * @fileOverview Curve
 */

/**
 * @inline
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
/**
 * @inline
 */
type BaseLineType = number | ReadonlyArray<NullableCoordinate>;
interface CurveProps {
  className?: string;
  /**
   * The interpolation type of curve. Allows custom interpolation function.
   *
   * @defaultValue linear
   * @link https://d3js.org/d3-shape/curve
   * @see {@link https://recharts.github.io/en-US/examples/CardinalAreaChart/ An AreaChart which has two area with different interpolation.}
   */
  type?: CurveType;
  /**
   * This option affects the interpolation algorithm when the `type` prop is set to 'monotone'.
   * It also specifies the type of baseline when the curve is closed.
   */
  layout?: LayoutType;
  /**
   * Baseline of the area:
   * - number: uses the corresponding axis value as a flat baseline;
   * - an array of coordinates: describes a custom baseline path.
   */
  baseLine?: BaseLineType;
  /**
   * The coordinates of all the points in the curve, like an array of objects with x and y coordinates.
   */
  points?: ReadonlyArray<NullableCoordinate>;
  /**
   * Whether to connect the curve across null points.
   *
   * @defaultValue false
   *
   * @see {@link https://recharts.github.io/en-US/examples/LineChartConnectNulls/ LineChart with connectNull true and false}
   * @see {@link https://recharts.github.io/en-US/examples/AreaChartConnectNulls/ AreaChart with connectNull true and false}
   */
  connectNulls?: boolean;
  path?: string;
  pathRef?: Ref<SVGPathElement>;
  /**
   * The pattern of dashes and gaps used to paint the line.
   *
   * @example strokeDasharray="5 5"
   * @example strokeDasharray={10}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray}
   */
  strokeDasharray?: string | number;
}
type CurveMouseEventHandler = RechartsMouseEventHandler<
  Props$y,
  SVGPathElement
>;
type CurveMouseEvents = {
  /**
   * The customized event handler of click on the curve
   */
  onClick?: CurveMouseEventHandler;
  /**
   * The customized event handler of mouseenter on the curve
   */
  onMouseEnter?: CurveMouseEventHandler;
  /**
   * The customized event handler of mouseleave on the curve
   */
  onMouseLeave?: CurveMouseEventHandler;
  /**
   * The customized event handler of mousedown on the curve
   */
  onMouseDown?: CurveMouseEventHandler;
  /**
   * The customized event handler of mouseup on the curve
   */
  onMouseUp?: CurveMouseEventHandler;
  /**
   * The customized event handler of mousemove on the curve
   */
  onMouseMove?: CurveMouseEventHandler;
  /**
   * The customized event handler of mouseover on the curve
   */
  onMouseOver?: CurveMouseEventHandler;
  /**
   * The customized event handler of mouseout on the curve
   */
  onMouseOut?: CurveMouseEventHandler;
};
type Props$y = Omit<
  PresentationAttributesWithProps<CurveProps, SVGPathElement>,
  | "type"
  | "points"
  | "onClick"
  | "onMouseEnter"
  | "onMouseLeave"
  | "onMouseDown"
  | "onMouseUp"
  | "onMouseMove"
  | "onMouseOver"
  | "onMouseOut"
> &
  CurveMouseEvents &
  CurveProps;
declare const Curve: React.FC<Props$y>;

interface LabelListEntry<DataPointItem = any> {
  /**
   * Value is what renders in the UI as the label content.
   * If undefined, then the LabelList will pull it from the payload using the dataKey.
   */
  value: unknown;
  /**
   * Payload is the source data object for this entry. The shape of this depends on what the user has passed
   * as the data prop to the chart.
   */
  payload: DataPointItem;
  fill: string | undefined;
}
/**
 * This is public API because we expose it as the valueAccessor parameter.
 *
 * The properties of "viewBox" are repeated as the root props of the entry object.
 * So it doesn't matter if you read entry.x or entry.viewBox.x, they are the same.
 *
 * It's not necessary to pass redundant data, but we keep it for backward compatibility.
 */
interface CartesianLabelListEntry extends LabelListEntry, TrapezoidViewBox {
  /**
   * The bounding box of the graphical element that this label is attached to.
   * This will be an individual Bar for example.
   */
  viewBox: TrapezoidViewBox;
  parentViewBox?: CartesianViewBoxRequired;
}
interface PolarLabelListEntry extends LabelListEntry {
  viewBox: PolarViewBoxRequired;
  parentViewBox?: PolarViewBoxRequired;
  clockWise?: boolean;
}
interface LabelListProps extends ZIndexable {
  /**
   * Unique identifier of this component.
   * Used as an HTML attribute `id`.
   */
  id?: string;
  /**
   * The accessor function to get the value of each label. Is ignored if dataKey is specified.
   * @param entry
   * @param index
   */
  valueAccessor?: (
    entry: CartesianLabelListEntry | PolarLabelListEntry,
    index: number,
  ) => RenderableText;
  /**
   * The parameter to calculate the view box of label in radial charts.
   */
  clockWise?: boolean;
  /**
   *
   * Decides how to extract the value of each label from the data:
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the value of each label.
   *
   * If set, then valueAccessor will be ignored.
   *
   * Scatter requires this prop to be set.
   * Other graphical components will show the same value as the dataKey of the component by default.
   */
  dataKey?: DataKey<any>;
  /**
   * If set a React element, the option is the customized React element of rendering each label.
   * If set to a function, the function is called once for each item
   *
   * @example <LabelList content={CustomizedLabel} />
   *
   * @see {@link https://recharts.github.io/en-US/examples/BarChartWithMinHeight/ Customized content of LabelList in a BarChart}
   */
  content?: LabelContentType;
  textBreakAll?: boolean;
  /**
   * The position of label relative to the view box.
   */
  position?: LabelPosition;
  /**
   * The offset to the specified "position".
   * Direction of the offset depends on the position.
   */
  offset?: Props$B["offset"];
  /**
   * Text rotation angle in degrees.
   * Positive values rotate clockwise, negative values rotate counterclockwise.
   *
   * @defaultValue 0
   */
  angle?: number;
  /**
   * Function to customize how content is serialized before rendering.
   *
   * This should return a renderable text - something that the {@link Text} component can render.
   * Typically, a string or number.
   * Custom components are not supported here - use the `content` prop instead.
   */
  formatter?: LabelFormatter;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 2000
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
}
/**
 * LabelList props do not allow refs because the same props are reused in multiple elements so we don't have a good single place to ref to.
 */
type SvgTextProps = PropsWithoutRef<SVGProps<SVGTextElement>>;
type Props$x = Omit<SvgTextProps, "children"> & LabelListProps;
/**
 * This is the type accepted for the `label` prop on various graphical items.
 * It accepts:
 *
 * boolean:
 *    true = labels show,
 *    false = labels don't show
 * React element:
 *    will be cloned with extra props
 * function:
 *    is used as <Label content={function} />, so this will be called once for each individual label (so typically once for each data point)
 * object:
 *    the props to be passed to a LabelList component
 *
 * @inline
 */
type ImplicitLabelListType = boolean | LabelContentType | Props$x;
/**
 * @consumes LabelListContext
 */
declare function LabelList({
  valueAccessor,
  ...restProps
}: Props$x): React.JSX.Element | null;
declare namespace LabelList {
  var displayName: string;
}

type ContentType$1 = ReactElement | ((props: Props$w) => ReactNode);
type HorizontalAlignmentType = "center" | "left" | "right";
type VerticalAlignmentType = "top" | "bottom" | "middle";
type Formatter = (value: any, entry: LegendPayload, index: number) => ReactNode;
interface LegendPayload {
  /**
   * This is the text that will be displayed in the legend in the DOM.
   * If undefined, the text will not be displayed, so the icon will be rendered without text.
   */
  value: string | undefined;
  type?: LegendType;
  color?: string;
  /**
   * Different graphical items put different information in the payload object
   * so double check in runtime what are you getting here.
   */
  payload?: object;
  formatter?: Formatter;
  inactive?: boolean;
  legendIcon?: ReactElement<SVGElement>;
  dataKey?: DataKey<any>;
}
interface DefaultLegendContentProps {
  /**
   * The size of icon in each legend item.
   * @defaultValue 14
   */
  iconSize?: number;
  /**
   * The type of icon in each legend item.
   */
  iconType?: LegendType;
  /**
   * The layout of legend items inside the legend container.
   * @defaultValue horizontal
   */
  layout?: CartesianLayout;
  /**
   * Horizontal alignment of the whole Legend container:
   *
   * - `left`: shows the Legend to the left of the chart, and chart width reduces automatically to make space for it.
   * - `right` shows the Legend to the right of the chart, and chart width reduces automatically.
   * - `center` shows the Legend in the middle of chart, and chart width remains unchanged.
   *
   * The exact behavior changes depending on 'verticalAlign' prop.
   *
   * @defaultValue center
   */
  align?: HorizontalAlignmentType;
  /**
   * Vertical alignment of the whole Legend container:
   *
   * - `bottom`: shows the Legend below chart, and chart height reduces automatically to make space for it.
   * - `top`: shows the Legend above chart, and chart height reduces automatically.
   * - `middle`:  shows the Legend in the middle of chart, covering other content, and chart height remains unchanged.
   * The exact behavior changes depending on `align` prop.
   *
   * @defaultValue middle
   */
  verticalAlign?: VerticalAlignmentType;
  /**
   * The color of the icon when the item is inactive.
   * @defaultValue #ccc
   */
  inactiveColor?: string;
  /**
   * Function to customize how content is serialized before rendering.
   *
   * This should return HTML elements, or strings.
   *
   * @example (value, entry, index) => <span style={{ color: 'red' }}>{value}</span>
   * @example https://codesandbox.io/s/legend-formatter-rmzp9
   */
  formatter?: Formatter;
  /**
   * The customized event handler of mouseenter on the items in this group
   * @example https://recharts.github.io/examples/LegendEffectOpacity
   */
  onMouseEnter?: (
    data: LegendPayload,
    index: number,
    event: MouseEvent$1<HTMLElement>,
  ) => void;
  /**
   * The customized event handler of mouseleave on the items in this group
   * @example https://recharts.github.io/examples/LegendEffectOpacity
   */
  onMouseLeave?: (
    data: LegendPayload,
    index: number,
    event: MouseEvent$1<HTMLElement>,
  ) => void;
  /**
   * The customized event handler of click on the items in this group
   */
  onClick?: (
    data: LegendPayload,
    index: number,
    event: MouseEvent$1<HTMLElement>,
  ) => void;
  /**
   * DefaultLegendContent.payload is omitted from Legend props.
   * A custom payload can be passed here if desired, or it can be passed from the Legend "content" callback.
   */
  payload?: ReadonlyArray<LegendPayload>;
  /**
   * The style of each text label which is a span element.
   * @defaultValue {}
   */
  labelStyle?: CSSProperties;
}
type Props$w = DefaultLegendContentProps &
  Omit<
    PresentationAttributesAdaptChildEvent<any, ReactElement>,
    keyof DefaultLegendContentProps
  >;
/**
 * This component is by default rendered inside the {@link Legend} component. You would not use it directly.
 *
 * You can use this component to customize the content of the legend,
 * or you can provide your own completely independent content.
 */
declare const DefaultLegendContent: (
  outsideProps: Props$w,
) => React.JSX.Element | null;

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
 * TODO this documentation does not reflect what this hook is doing, update it.
 * Stores the `offsetHeight`, `offsetLeft`, `offsetTop`, and `offsetWidth` of a DOM element.
 */
type ElementOffset = {
  /**
   * Height of an element, including vertical padding and borders, as an integer.
   *
   * Typically, offsetHeight is a measurement in pixels of the element's CSS height, including any borders, padding, and horizontal scrollbars (if rendered). It does not include the height of pseudo-elements such as ::before or ::after
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
   */
  height: number;
  /**
   * Number of pixels that the upper left corner of the current element is offset to the left within the HTMLElement.offsetParent node
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft
   */
  left: number;
  /**
   * Distance from the outer border of the current element (including its margin) to the top padding edge of the offsetParent, the closest positioned ancestor element.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
   */
  top: number;
  /**
   * Layout width of an element as an integer.
   *
   * Typically, offsetWidth is a measurement in pixels of the element's CSS width, including any borders, padding, and vertical scrollbars (if rendered). It does not include the width of pseudo-elements such as ::before or ::after.
   *
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth
   */
  width: number;
};

type LegendItemSorter =
  | "value"
  | "dataKey"
  | ((item: LegendPayload) => number | string);
type Props$v = Omit<Props$w, "payload" | "ref" | "verticalAlign"> & {
  /**
   * Renders the content of the legend.
   *
   * This should return HTML elements, not SVG elements.
   *
   * - If not set, the {@link DefaultLegendContent} component is used.
   * - If set to a React element, this element will be cloned and extra props will be passed in.
   * - If set to a function, the function will be called and should return HTML elements.
   *
   * @example <Legend content={CustomizedLegend} />
   * @example <Legend content={renderLegend} />
   */
  content?: ContentType$1;
  /**
   * CSS styles to be applied to the wrapper `div` element.
   */
  wrapperStyle?: CSSProperties;
  /**
   * Width of the legend.
   * Accept CSS style string values like `100%` or `fit-content`, or number values like `400`.
   */
  width?: number | string;
  /**
   * Height of the legend.
   * Accept CSS style string values like `100%` or `fit-content`, or number values like `400`.
   */
  height?: number | string;
  payloadUniqBy?: UniqueOption<LegendPayload>;
  onBBoxUpdate?: (box: ElementOffset | null) => void;
  /**
   * If portal is defined, then Legend will use this element as a target
   * for rendering using React Portal.
   *
   * If this is undefined then Legend renders inside the recharts-wrapper element.
   *
   * @see {@link https://react.dev/reference/react-dom/createPortal}
   */
  portal?: HTMLElement | null;
  /**
   * Sorts Legend items. Defaults to `value` which means it will sort alphabetically
   * by the label.
   *
   * If `null` is provided then the payload is not sorted. Be aware that without sort,
   * the order of items may change between renders!
   *
   * @defaultValue value
   */
  itemSorter?: LegendItemSorter | null;
  /**
   * The alignment of the whole Legend container:
   *
   * - `bottom`: shows the Legend below chart, and chart height reduces automatically to make space for it.
   * - `top`: shows the Legend above chart, and chart height reduces automatically.
   * - `middle`:  shows the Legend in the middle of chart, covering other content, and chart height remains unchanged.
   * The exact behavior changes depending on `align` prop.
   *
   * @defaultValue bottom
   */
  verticalAlign?: VerticalAlignmentType;
};
/**
 * @consumes CartesianChartContext
 * @consumes PolarChartContext
 */
declare function LegendImpl(outsideProps: Props$v): React.ReactPortal | null;
declare const Legend: React.MemoExoticComponent<typeof LegendImpl>;

/**
 * This is internal representation of scale used in Recharts.
 * Users will provide CustomScaleDefinition or a string, which we will parse into RechartsScale.
 * Most importantly, RechartsScale is fully immutable - there are no setters that mutate the scale in place.
 * This is important for React integration - if the scale changes, we want to trigger re-renders.
 * Mutating the scale in place would not trigger re-renders, leading to stale UI.
 */
interface RechartsScale<
  Domain extends CategoricalDomainItem = CategoricalDomainItem,
> {
  /**
   * Returns the scale's current domain.
   * The domain could be:
   * - in categorical scales: an array of strings or categories
   * - in continuous scales: tuple of two numbers: [min, max]
   */
  domain(): ReadonlyArray<Domain>;
  /**
   * Returns the scale’s current range.
   *
   * This should be a readonly tuple of two numbers: [min, max]
   * and so a better type would be `readonly [number, number]` but again - breaking changes,
   * so let's keep that for 4.0.
   */
  range(): ReadonlyArray<number>;
  /**
   * Returns the minimum value from the range.
   */
  rangeMin(): number;
  /**
   * Returns the maximum value from the range.
   */
  rangeMax(): number;
  /**
   * Returns true if the given value is within the scale's range.
   * @param value
   */
  isInRange(value: number): boolean;
  /**
   * Returns width of each band.
   * Most scales are not banded, so this method is optional.
   * Banded scales (like scaleBand from d3-scale) will implement this method.
   */
  bandwidth?: () => number;
  /**
   * Quantitative (continuous) scales provide a ticks method that returns representative values from the scale’s domain.
   * Ordinal and band scales do not have this method.
   *
   * An optional count argument requests more or fewer ticks.
   * The number of ticks returned, however, is not necessarily equal to the requested count.
   *
   * @see {@link https://d3js.org/d3-scale/linear#linear_ticks}
   * @see {@link https://observablehq.com/@d3/scale-ticks}
   *
   * @param count number of ticks
   */
  ticks?: (count: number | undefined) => ReadonlyArray<number>;
  /**
   * Given an arbitrary input, returns the corresponding point derived from the output range if the input is in the scale's domain.
   * If the input is not included in the domain, returns undefined.
   */
  map(
    input: unknown,
    options?: {
      position?: BandPosition;
    },
  ): number | undefined;
}
/**
 * Position within a band for banded scales.
 * In scales that are not banded, this parameter is ignored.
 *
 * @inline
 */
type BandPosition = "start" | "middle" | "end";

type AxisPropsNeededForTicksGenerator = {
  axisType?: AxisType;
  categoricalDomain?: ReadonlyArray<unknown>;
  duplicateDomain?: ReadonlyArray<unknown>;
  isCategorical?: boolean;
  niceTicks?: ReadonlyArray<AxisTick>;
  /**
   * The range appears to be only used in Angle Axis - needs further investigation
   */
  range?: AxisRange;
  realScaleType?: "scaleBand" | string;
  scale: RechartsScale | undefined;
  tickCount?: number;
  ticks?: ReadonlyArray<AxisTick>;
  type?: "number" | "category";
};
/**
 * Externally, we accept both strings and numbers as stack IDs
 * @inline
 */
type StackId = string | number;

/**
 * @inline
 */
type BaseValue = number | "dataMin" | "dataMax";
/**
 * External props, intended for end users to fill in
 */
interface AreaProps<DataPointType = any, DataValueType = any>
  extends
    DataProvider<DataPointType>,
    Required<DataConsumer<DataPointType, DataValueType>>,
    ZIndexable {
  /**
   * The active dot is rendered on the closest data point when user interacts with the chart. Options:
   *
   * - `false`: dots do not change on user activity; both active and inactive dots follow the `dot` prop (see below)
   * - `true`: renders the active dot with default settings
   * - `object`: the props of the active dot. This will be merged with the internal calculated props of the active dot
   * - `ReactElement`: the custom active dot element
   * - `function`: a render function of the custom active dot
   *
   * @defaultValue true
   * @example <Area dataKey="value" activeDot={false} />
   * @example <Area dataKey="value" activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }} />
   * @example <Area dataKey="value" activeDot={CustomizedActiveDot} />
   *
   * @see {@link https://recharts.github.io/en-US/examples/SimpleLineChart/ A line chart with customized active dot}
   */
  activeDot?: ActiveDotType;
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @defaultValue 1500
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue 'ease'
   */
  animationEasing?: AnimationTiming;
  /**
   * Baseline of the area:
   * - number: uses the corresponding axis value as a flat baseline;
   * - an array of coordinates: describes a custom baseline path.
   */
  baseLine?: BaseLineType;
  baseValue?: BaseValue;
  className?: string;
  /**
   * Whether to connect the area across null points.
   *
   * @defaultValue false
   * @see {@link https://recharts.github.io/en-US/examples/AreaChartConnectNulls/ AreaChart with connectNull true and false}
   */
  connectNulls?: boolean;
  /**
   * Renders a circle element at each data point. Options:
   *
   * - `false`: no dots are drawn;
   * - `true`: renders the dots with default settings;
   * - `object`: the props of the dot. This will be merged with the internal calculated props of each dot;
   * - `ReactElement`: the custom dot element;
   * - `function`: a render function of the custom dot.
   *
   * @defaultValue false
   */
  dot?: DotType;
  /**
   * Hides the whole graphical element when true.
   *
   * Hiding an element is different from removing it from the chart:
   * Hidden graphical elements are still visible in Legend,
   * and can be included in axis domain calculations,
   * depending on `includeHidden` props of your XAxis/YAxis.
   *
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * Unique identifier of this component.
   * Used as an HTML attribute `id`, and also to identify this element internally.
   *
   * If undefined, Recharts will generate a unique ID automatically.
   */
  id?: string;
  /**
   * If set false, animation of area will be disabled.
   * If set "auto", will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue 'auto'
   */
  isAnimationActive?: boolean | "auto";
  isRange?: boolean;
  /**
   * Renders one label for each data point. Options:
   *
   * - `true`: renders default labels
   * - `false`: no labels are rendered
   * - `object`: the props of LabelList component
   * - `ReactElement`: a custom label element
   * - `function`: a render function of custom label
   *
   * @defaultValue false
   */
  label?: ImplicitLabelListType;
  /**
   * The type of icon in legend.
   * If set to 'none', no legend item will be rendered.
   * @defaultValue 'line'
   */
  legendType?: LegendType;
  /**
   * The name of data.
   * This option will be used in tooltip and legend to represent this graphical item.
   * If no value was set to this option, the value of dataKey will be used alternatively.
   */
  name?: string | number;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  /**
   * When two Areas have the same axisId and same stackId, then the two Areas are stacked in the chart.
   */
  stackId?: StackId;
  /**
   * The stroke color. If "none", no line will be drawn.
   * @defaultValue '#3182bd'
   */
  stroke?: string;
  /**
   * The width of the stroke
   * @defaultValue 1
   */
  strokeWidth?: string | number;
  tooltipType?: TooltipType;
  /**
   * The interpolation type of curve. Allows custom interpolation function.
   *
   * @defaultValue linear
   * @link https://d3js.org/d3-shape/curve
   * @see {@link https://recharts.github.io/en-US/examples/CardinalAreaChart/ An AreaChart which has two area with different interpolation.}
   */
  type?: CurveType;
  /**
   * The unit of data. This option will be used in tooltip.
   */
  unit?: string | number;
  /**
   * The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.
   * @defaultValue 0
   */
  xAxisId?: AxisId;
  /**
   * The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.
   * @defaultValue 0
   */
  yAxisId?: AxisId;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 100
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
}
/**
 * Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
 */
type AreaSvgProps = Omit<
  Props$y,
  | "points"
  | "ref"
  | "layout"
  | "path"
  | "pathRef"
  | "baseLine"
  | "dangerouslySetInnerHTML"
>;
type Props$u<DataPointType, ValueAxisType> = AreaSvgProps &
  AreaProps<DataPointType, ValueAxisType>;
/**
 * @provides LabelListContext
 * @consumes CartesianChartContext
 */
declare const Area: <DataPointType = any, ValueAxisType = any>(
  props: Props$u<DataPointType, ValueAxisType>,
) => ReactElement;

type CubicBezierTemplate =
  `cubic-bezier(${number},${number},${number},${number})`;
type NamedBezier =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | CubicBezierTemplate;
type BezierEasingFunction = {
  isStepper: false;
  (t: number): number;
};
type SpringEasingFunction = {
  isStepper: true;
  dt: number;
  (currX: number, destX: number, currV: number): [number, number];
};
type EasingFunction = BezierEasingFunction | SpringEasingFunction;
type EasingInput = NamedBezier | "spring" | EasingFunction;

/**
 * @fileOverview Rectangle
 */

/**
 * @inline
 */
type RectRadius = number | [number, number, number, number];
interface RectangleProps {
  className?: string;
  /**
   * The x-coordinate of top left point of the rectangle.
   * @defaultValue 0
   */
  x?: number;
  /**
   * The y-coordinate of top left point of the rectangle.
   * @defaultValue 0
   */
  y?: number;
  /**
   * Width of the rectangle in pixels.
   * @defaultValue 0
   */
  width?: number;
  /**
   * Height of the rectangle in pixels.
   * @defaultValue 0
   */
  height?: number;
  /**
   * The radius of corners.
   *
   * If you provide a single number, it applies to all four corners.
   * If you provide an array of four numbers, they apply to top-left, top-right, bottom-right, bottom-left corners respectively.
   *
   * @see {@link https://recharts.github.io/en-US/guide/roundedBars/ Guide: Rounded bar corners}
   *
   * @defaultValue 0
   */
  radius?: RectRadius;
  /**
   * @defaultValue false
   */
  isAnimationActive?: boolean;
  /**
   * @defaultValue false
   */
  isUpdateAnimationActive?: boolean;
  /**
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * @defaultValue 1500
   */
  animationDuration?: AnimationDuration;
  /**
   * @defaultValue ease
   */
  animationEasing?: EasingInput;
  /**
   * The customized event handler of click on the rectangle
   */
  onClick?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mousedown on the rectangle
   */
  onMouseDown?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseup on the rectangle
   */
  onMouseUp?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mousemove on the rectangle
   */
  onMouseMove?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseover on the rectangle
   */
  onMouseOver?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseout on the rectangle
   */
  onMouseOut?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseenter on the rectangle
   */
  onMouseEnter?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseleave on the rectangle
   */
  onMouseLeave?: (e: React.MouseEvent<SVGPathElement>) => void;
}
type Props$t = Omit<SVGProps<SVGPathElement>, "radius"> & RectangleProps;
/**
 * Renders a rectangle element. Unlike the {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/rect rect SVG element}, this component supports rounded corners
 * and animation.
 *
 * This component accepts X and Y coordinates in pixels.
 * If you need to position the rectangle based on your chart's data,
 * consider using the {@link ReferenceArea} component instead.
 *
 * @param rectangleProps
 * @constructor
 */
declare const Rectangle: React.FC<Props$t>;

type BarRectangleType = {
  x: number | null;
  y: number | null;
  width: number;
  height: number;
};
interface BarRectangleItem extends Props$t {
  value: number | [number, number];
  /** the coordinate of background rectangle */
  background?: BarRectangleType;
  tooltipPosition: Coordinate;
  readonly payload?: any;
  parentViewBox: CartesianViewBoxRequired;
  x: number;
  y: number;
  width: number;
  height: number;
  /**
   * Chart range coordinate of the baseValue of the first bar in a stack.
   */
  stackedBarStart: number;
  /**
   * Stable pre-filter index within the currently displayed data slice.
   * Used for matching with activeIndex from tooltip and for BarStack clip-path indexing.
   */
  originalDataIndex: number;
}
type BarShapeProps = BarRectangleItem & {
  isActive: boolean;
  index: number;
  option?: ActiveShape<BarShapeProps, SVGPathElement> | undefined;
};
interface BarProps<DataPointType, ValueAxisType>
  extends DataConsumer<DataPointType, ValueAxisType>, ZIndexable {
  className?: string;
  index?: Key;
  /**
   * The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.
   *
   * @defaultValue 0
   */
  xAxisId?: AxisId;
  /**
   * The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.
   *
   * @defaultValue 0
   */
  yAxisId?: AxisId;
  /**
   * When two Bars have the same axisId and same stackId, then the two Bars are stacked in the chart.
   *
   * @see {@link https://recharts.github.io/en-US/examples/StackedBarChart/ Stacked bar chart example}
   * @see {@link https://recharts.github.io/en-US/examples/MixBarChart/ Chart with both stacked and non-stacked bars}
   * @see {@link BarStack}
   */
  stackId?: StackId;
  /**
   * The width or height of each bar. If the barSize is not specified, the size of bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.
   */
  barSize?: string | number;
  /**
   * The unit of data. This option will be used in tooltip.
   */
  unit?: string | number;
  /**
   * The name of data.
   * This option will be used in tooltip and legend to represent a bar.
   * If no value was set to this option, the value of dataKey will be used alternatively.
   */
  name?: string | number;
  tooltipType?: TooltipType;
  /**
   * The type of icon in legend. If set to 'none', no legend item will be rendered.
   *
   * @defaultValue rect
   */
  legendType?: LegendType;
  /**
   * The minimal height of a bar in a horizontal chart, or the minimal width of a bar in a vertical chart.
   *
   * By default, 0 values are not shown.
   * To visualize a 0 (or close to zero) point, set the minimal point size to a pixel value like 3.
   *
   * In stacked bar charts, minPointSize might not be respected for tightly packed values.
   * So we strongly recommend not using this props in stacked BarChart.
   *
   * You may provide a function to conditionally change this prop based on Bar value.
   *
   * @defaultValue 0
   *
   * @see {@link https://recharts.github.io/en-US/examples/BarChartWithMinHeight/ Chart with min bar height}
   */
  minPointSize?: MinPointSize;
  /**
   * The maximum width of bar in a horizontal chart, or maximum height in a vertical chart.
   */
  maxBarSize?: number;
  /**
   * Hides the whole graphical element when true.
   *
   * Hiding an element is different from removing it from the chart:
   * Hidden graphical elements are still visible in Legend,
   * and can be included in axis domain calculations,
   * depending on `includeHidden` props of your XAxis/YAxis.
   *
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * If set a ReactElement, the shape of bar can be customized.
   * If set a function, the function will be called to render customized shape.
   * By default, renders a rectangle.
   *
   * @see {@link https://recharts.github.io/en-US/examples/CustomShapeBarChart/ Custom shape bar chart example}
   */
  shape?: ActiveShape<BarShapeProps, SVGPathElement>;
  /**
   * The active bar is shown when a user enters a bar chart and this chart has tooltip. Options:
   * - `false`: all bars are passive, nothing happens on mouse events;
   * - `true`: active bar is rendered separately but the default props are the same as others: so mouse events do not change its appearance. className and zIndex are different though;
   * - `object`: the props of active bar;
   * - `function`: the render function of active bar;
   * - `ReactElement`: the active bar element.
   *
   * @defaultValue false
   *
   * @see {@link https://recharts.github.io/en-US/examples/SimpleBarChart/ activeBar example}
   *
   * @example <Bar activeBar={{ fill: 'red' }} />
   * @example <Bar activeBar={CustomActiveBarFn} />
   */
  activeBar?: ActiveShape<BarShapeProps, SVGPathElement>;
  /**
   * Renders a background for each bar. Options:
   *  - `false`: no background;
   *  - `true`: renders default background;
   *  - `object`: the props of background rectangle;
   *  - `ReactElement`: a custom background element;
   *  - `function`: a render function of custom background.
   *
   * @defaultValue false
   *
   * @see {@link https://recharts.github.io/en-US/examples/BarChartHasBackground/ BarChart with background example}
   */
  background?: ActiveShape<BarShapeProps, SVGPathElement> & ZIndexable;
  /**
   * The radius of corners.
   *
   * If you provide a single number, it applies to all four corners.
   * If you provide an array of four numbers, they apply to top-left, top-right, bottom-right, bottom-left corners respectively.
   *
   * @see {@link https://recharts.github.io/en-US/guide/roundedBars/ Guide: Rounded bar corners}
   */
  radius?: RectRadius;
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;
  /**
   * If set false, animation of bar will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   *
   * @defaultValue auto
   */
  isAnimationActive?: boolean | "auto";
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @defaultValue 400
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   *
   * @defaultValue 'ease'
   */
  animationEasing?: EasingInput;
  /**
   * The unique identifier of this component.
   * Used as an HTML attribute `id`, and also to identify this element internally.
   *
   * If undefined, Recharts will generate a unique ID automatically.
   */
  id?: string;
  /**
   * Renders one label for each bar. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object`: the props of LabelList component;
   * - `ReactElement`: a custom label element;
   * - `function`: a render function of custom label.
   *
   * @defaultValue false
   *
   * @example <Bar label />
   * @example <Bar label={{ position: 'top', fontSize: 20 }} />
   * @example <Bar label={CustomizedLabelFn} />
   */
  label?: ImplicitLabelListType;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 300
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
}
type BarMouseEvent = (
  data: BarRectangleItem,
  index: number,
  event: React.MouseEvent<SVGPathElement, MouseEvent>,
) => void;
interface BarEvents {
  /**
   * The customized event handler of click on the bars in this group
   *
   * @see {@link https://recharts.github.io/en-US/examples/BarChartWithCustomizedEvent/ Chart with customized event example}
   */
  onClick: BarMouseEvent;
  /**
   * The customized event handler of mouseenter on the bars in this group
   */
  onMouseEnter: BarMouseEvent;
  /**
   * The customized event handler of mouseleave on the bars in this group
   */
  onMouseLeave: BarMouseEvent;
  /**
   * The customized event handler of mousemove on the bars in this group
   */
  onMouseMove: BarMouseEvent;
  /**
   * The customized event handler of mousedown on the bars in this group
   */
  onMouseDown: BarMouseEvent;
  /**
   * The customized event handler of mouseup on the bars in this group
   */
  onMouseUp: BarMouseEvent;
  /**
   * The customized event handler of mouseover on the bars in this group
   */
  onMouseOver: BarMouseEvent;
  /**
   * The customized event handler of mouseout on the bars in this group
   */
  onMouseOut: BarMouseEvent;
}
type BarSvgProps = Omit<
  PresentationAttributesAdaptChildEvent<BarRectangleItem, SVGPathElement>,
  "radius" | "name" | "ref"
>;
type Props$s<DataPointType = any, ValueAxisType = any> = Partial<BarEvents> &
  BarProps<DataPointType, ValueAxisType> &
  Omit<BarSvgProps, keyof BarEvents>;
/**
 * @provides ErrorBarContext
 * @provides LabelListContext
 * @provides CellReader
 * @consumes CartesianChartContext
 * @consumes BarStackContext
 */
declare const Bar: <DataPointType = any, ValueAxisType = any>(
  props: Props$s<DataPointType, ValueAxisType>,
) => ReactElement;

type MinPointSize =
  | number
  | ((value: number | undefined | null, index: number) => number);

declare const SVGElementPropKeys: readonly [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle",
];
type SVGElementPropKeysType = (typeof SVGElementPropKeys)[number];
type DataAttributeKeyType = `data-${string}`;
type SVGPropsNoEvents<T> = Pick<
  T,
  Extract<keyof T, SVGElementPropKeysType | DataAttributeKeyType>
>;

/**
 * The useUniqueId hook returns a unique ID that is either reused from external props or generated internally.
 * Either way the ID is now guaranteed to be present so no more nulls or undefined.
 */
type WithIdRequired<T> = T & {
  id: string;
};
type WithoutId<T> = Omit<T, "id">;

type PiePresentationProps = SVGPropsNoEvents<
  WithoutId<SVGProps<SVGPathElement>>
>;

/**
 * Unique ID of the graphical item.
 * This is used to identify the graphical item in the state and in the React tree.
 * This is required for every graphical item - it's either provided by the user or generated automatically.
 */
type GraphicalItemId = string;

/**
 * One Tooltip can display multiple TooltipPayloadEntries at a time.
 */
type TooltipPayloadEntry = Payload<ValueType, NameType>;
/**
 * This is what Tooltip renders.
 */
type TooltipPayload = ReadonlyArray<TooltipPayloadEntry>;
/**
 * null means no active index
 * string means: whichever index from the chart data it is.
 * Different charts have different requirements on data shapes,
 * and are also responsible for providing a function that will accept this index
 * and return data.
 */
type TooltipIndex = string | null;

type IfOverflow = "hidden" | "visible" | "discard" | "extendDomain";
interface Overflowable {
  /**
   * Defines how to draw this component if it falls partly outside the canvas:
   *
   * - `discard`: the whole component will not be drawn at all
   * - `hidden`: the component will be clipped to the chart plot area
   * - `visible`: the component will be drawn completely
   * - `extendDomain`: the domain of the overflown axis will be extended such that the whole component fits into the plot area
   *
   * @defaultValue discard
   */
  ifOverflow?: IfOverflow;
}

/**
 * Helper type to extract the keys of T that are required.
 * It iterates through each key K in T. If Pick<T, K> cannot be assigned an empty object {},
 * it means K is required, so we keep K; otherwise, we discard it (never).
 * [keyof T] at the end creates a union of the kept keys.
 */
type RequiredKeys<T> = {
  [K in keyof T]-?: object extends Pick<T, K> ? never : K;
}[keyof T];
/**
 * Helper type to extract the keys of T that are optional.
 * It iterates through each key K in T. If Pick<T, K> can be assigned an empty object {},
 * it means K is optional (or potentially missing), so we keep K; otherwise, we discard it (never).
 * [keyof T] at the end creates a union of the kept keys.
 */
type OptionalKeys<T> = {
  [K in keyof T]-?: object extends Pick<T, K> ? K : never;
}[keyof T];
/**
 * This type will take a source type `Props` and a default type `Defaults` and will return a new type
 * where all properties that are optional in `Props` but required in `Defaults` are made required in the result.
 * Properties that are required in `Props` and optional in `Defaults` will remain required.
 * Properties that are optional in both `Props` and `Defaults` will remain optional.
 *
 * This is useful for creating a type that represents the resolved props of a component with default props.
 */
type RequiresDefaultProps<Props, Defaults extends Partial<Props>> = Pick<
  Props,
  RequiredKeys<Props>
> &
  Required<Pick<Props, Extract<OptionalKeys<Props>, RequiredKeys<Defaults>>>> &
  Pick<Props, Exclude<OptionalKeys<Props>, keyof Defaults>>;

/**
 * @fileOverview Reference Line
 */

/**
 * Single point that defines one end of a segment.
 * These coordinates are in data space, meaning that you should provide
 * values that correspond to the data domain of the axes.
 * So you would provide a value of `Page A` to indicate the data value `Page A`
 * and then recharts will convert that to pixels.
 *
 * Likewise for numbers. If your x-axis goes from 0 to 100,
 * and you want the line to end at 50, you would provide `50` here.
 *
 * @inline
 */
type ReferenceLineSegment = readonly [
  {
    x?: number | string;
    y?: number | string;
  },
  {
    x?: number | string;
    y?: number | string;
  },
];
type ReferenceCoordinateValue$2 = number | string;
interface ReferenceLineProps<
  XValueType extends ReferenceCoordinateValue$2 = any,
  YValueType extends ReferenceCoordinateValue$2 = any,
>
  extends Overflowable, ZIndexable {
  /**
   * If defined, renders a horizontal line on this position.
   *
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceLine will internally calculate the correct pixel position.
   *
   * @example <ReferenceLine y="Page D" />
   */
  y?: YValueType;
  /**
   * If defined, renders a vertical line on this position.
   *
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceLine will internally calculate the correct pixel position.
   *
   * @example <ReferenceLine x="Monday" />
   */
  x?: XValueType;
  /**
   * Tuple of coordinates. If defined, renders a diagonal line segment.
   */
  segment?: readonly [
    {
      x?: XValueType;
      y?: YValueType;
    },
    {
      x?: XValueType;
      y?: YValueType;
    },
  ];
  /**
   * The position of the reference line when the axis has bandwidth
   * (e.g., a band scale). This determines where within the band
   * the line is drawn.
   * @defaultValue 'middle'
   */
  position?: BandPosition;
  className?: number | string;
  /**
   * The id of y-axis which is corresponding to the data.
   * Required when there are multiple YAxes.
   * @defaultValue 0
   */
  yAxisId?: number | string;
  /**
   * The id of x-axis which is corresponding to the data.
   * Required when there are multiple XAxes.
   * @defaultValue 0
   */
  xAxisId?: number | string;
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  /**
   * Renders a single label.
   *
   * - `false`: no labels are rendered
   * - `string` | `number`: the content of the label
   * - `object`: the props of LabelList component
   * - `ReactElement`: a custom label element
   * - `function`: a render function of custom label
   *
   * @defaultValue false
   *
   * @see {@link https://recharts.github.io/en-US/examples/LineChartWithReferenceLines/ Reference elements with a label}
   */
  label?: ImplicitLabelType;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 400
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  /**
   * The width of the stroke
   * @defaultValue 1
   */
  strokeWidth?: number | string;
}
/**
 * This excludes `viewBox` prop from svg for two reasons:
 * 1. The components wants viewBox of object type, and svg wants string
 *    - so there's a conflict, and the component will throw if it gets string
 * 2. Internally the component calls `svgPropertiesNoEvents` which filters the viewBox away anyway
 */
type Props$r<
  XValueType extends ReferenceCoordinateValue$2 = any,
  YValueType extends ReferenceCoordinateValue$2 = any,
> = Omit<SVGProps<SVGLineElement>, "viewBox"> &
  ReferenceLineProps<XValueType, YValueType>;
/**
 * Draws a line on the chart connecting two points.
 *
 * This component, unlike {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/line line}, is aware of the cartesian coordinate system,
 * so you specify the dimensions by using data coordinates instead of pixels.
 *
 * ReferenceLine will calculate the pixels based on the provided data coordinates.
 *
 * If you prefer to render using pixels rather than data coordinates,
 * consider using the {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/line line SVG element} instead.
 *
 * @provides CartesianLabelContext
 * @consumes CartesianChartContext
 */
declare function ReferenceLine<
  XValueType extends ReferenceCoordinateValue$2 = any,
  YValueType extends ReferenceCoordinateValue$2 = any,
>(outsideProps: Props$r<XValueType, YValueType>): React.JSX.Element;
declare namespace ReferenceLine {
  var displayName: string;
}

/**
 * External props, intended for end users to fill in
 */
interface LineProps<DataPointType = any, DataValueType = any>
  extends
    DataProvider<DataPointType>,
    DataConsumer<DataPointType, DataValueType>,
    ZIndexable {
  /**
   * The active dot is rendered on the closest data point when user interacts with the chart. Options:
   *
   * - `false`: dots do not change on user activity; both active and inactive dots follow the `dot` prop (see below)
   * - `true`: renders the active dot with default settings
   * - `object`: the props of the active dot. This will be merged with the internal calculated props of the active dot
   * - `ReactElement`: the custom active dot element
   * - `function`: a render function of the custom active dot
   *
   * @defaultValue true
   * @example <Line dataKey="value" activeDot={false} />
   * @example <Line dataKey="value" activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }} />
   * @example <Line dataKey="value" activeDot={CustomizedActiveDot} />
   *
   * @see {@link https://recharts.github.io/en-US/examples/SimpleLineChart/ A line chart with customized active dot}
   */
  activeDot?: ActiveDotType;
  /**
   * @defaultValue true
   */
  animateNewValues?: boolean;
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @defaultValue 1500
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue ease
   */
  animationEasing?: AnimationTiming;
  className?: string;
  /**
   * Whether to connect the line across null points.
   * @defaultValue false
   *
   * @see {@link https://recharts.github.io/en-US/examples/LineChartConnectNulls/ LineChart with connectNull true and false}
   */
  connectNulls?: boolean;
  /**
   * Renders a circle element at each data point. Options:
   *
   * - `false`: no dots are drawn;
   * - `true`: renders the dots with default settings;
   * - `object`: the props of the dot. This will be merged with the internal calculated props of each dot;
   * - `ReactElement`: the custom dot element;
   * - `function`: a render function of the custom dot.
   *
   * @defaultValue true
   *
   * @example <Line dataKey="value" dot={false} />
   * @example <Line dataKey="value" dot={{ stroke: 'red', strokeWidth: 2 }} />
   * @example <Line dataKey="value" dot={CustomizedDot} />
   *
   * @see {@link https://recharts.github.io/en-US/examples/CustomizedDotLineChart/ A line chart with customized dot}
   */
  dot?: DotType;
  /**
   * Hides the whole graphical element when true.
   *
   * Hiding an element is different from removing it from the chart:
   * Hidden graphical elements are still visible in Legend,
   * and can be included in axis domain calculations,
   * depending on `includeHidden` props of your XAxis/YAxis.
   *
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * Unique identifier of this component.
   * Used as an HTML attribute `id`, and also to identify this element internally.
   *
   * If undefined, Recharts will generate a unique ID automatically.
   */
  id?: string;
  /**
   * If set false, animation of line will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue auto
   */
  isAnimationActive?: boolean | "auto";
  /**
   * Renders one label for each data point. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object`: the props of LabelList component;
   * - `ReactElement`: a custom label element;
   * - `function`: a render function of custom label.
   *
   * @defaultValue false
   * @example <Line dataKey="value" label />
   * @example <Line dataKey="value" label={{ fill: 'red', fontSize: 20 }} />
   * @example <Line dataKey="value" label={CustomizedLabel} />
   *
   * @see {@link https://recharts.github.io/en-US/examples/CustomizedLabelLineChart/ A line chart with customized label}
   */
  label?: ImplicitLabelListType;
  /**
   * The type of icon in legend.
   * If set to 'none', no legend item will be rendered.
   * @defaultValue line
   */
  legendType?: LegendType;
  /**
   * If set a ReactElement, the shape of line can be customized.
   * If set a function, the function will be called to render customized shape.
   *
   * @example <Line dataKey="value" shape={CustomizedShapeComponent} />
   * @example <Line dataKey="value" shape={renderShapeFunction} />
   */
  shape?: ActiveShape<Props$y, SVGPathElement>;
  /**
   * The name of data.
   * This option will be used in tooltip and legend to represent this graphical item.
   * If no value was set to this option, the value of dataKey will be used alternatively.
   */
  name?: string | number;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  tooltipType?: TooltipType;
  /**
   * The interpolation type of curve. Allows custom interpolation function.
   *
   * @defaultValue linear
   * @link https://d3js.org/d3-shape/curve
   * @see {@link https://recharts.github.io/en-US/examples/CardinalAreaChart/ An AreaChart which has two area with different interpolation.}
   */
  type?: CurveType;
  /**
   * The unit of data. This option will be used in tooltip.
   */
  unit?: string | number | null;
  /**
   * The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.
   * @defaultValue 0
   */
  xAxisId?: AxisId;
  /**
   * The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.
   * @defaultValue 0
   */
  yAxisId?: AxisId;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 400
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  /**
   * The stroke color. If `"none"`, no line will be drawn.
   *
   * @defaultValue #3182bd
   */
  stroke?: string;
  /**
   * The width of the stroke
   *
   * @defaultValue 1
   */
  strokeWidth?: string | number;
  /**
   * The pattern of dashes and gaps used to paint the line
   *
   * @example <Line strokeDasharray="4" />
   * @example <Line strokeDasharray="4 1" />
   * @example <Line strokeDasharray="4 1 2" />
   */
  strokeDasharray?: string | number;
}
/**
 * Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
 */
type LineSvgProps = Omit<
  Props$y,
  "points" | "pathRef" | "ref" | "layout" | "baseLine"
>;
type Props$q<DataPointType = any, ValueAxisType = any> = LineSvgProps &
  LineProps<DataPointType, ValueAxisType>;
/**
 * @provides LabelListContext
 * @provides ErrorBarContext
 * @consumes CartesianChartContext
 */
declare const Line: {
  <DataPointType = any, ValueAxisType = any>(
    props: Props$q<DataPointType, ValueAxisType>,
  ): ReactElement;
  (props: Props$q<any, any>): ReactElement;
};

/**
 * We use this attribute to identify which element is the one that the user is touching.
 * Unlike dataKey, or name, it is always unique.
 */
declare const DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME =
  "data-recharts-item-id";

type ScatterShapeProps = ScatterPointItem & {
  index: number;
  [DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]: GraphicalItemId;
};

type SizeType = "area" | "diameter";
interface InnerSymbolsProp {
  className?: string;
  type?: SymbolType;
  cx?: number;
  cy?: number;
  size?: number;
  sizeType?: SizeType;
}
type SymbolsProps = Omit<SVGProps<SVGPathElement>, "type"> & InnerSymbolsProp;
/**
 * Renders a symbol from a set of predefined shapes.
 */
declare const Symbols: {
  ({ type, size, sizeType, ...rest }: SymbolsProps): React.JSX.Element | null;
  registerSymbol: (key: string, factory: SymbolType$1) => void;
};

interface ScatterPointNode {
  x?: number | string;
  y?: number | string;
  z?: number | string;
}
/**
 * Scatter coordinates are nullable because sometimes the point value is out of the domain,
 * and we can't compute a valid coordinate for it.
 *
 * Scatter -> Symbol ignores points with null cx or cy so those won't render if using the default shapes.
 * However: the points are exposed via various props and can be used in custom shapes so we keep them around.
 */
interface ScatterPointItem {
  /**
   * The x coordinate of the point center in pixels.
   */
  cx: number | undefined;
  /**
   * The y coordinate of the point center in pixels.
   */
  cy: number | undefined;
  /**
   * The x coordinate (in pixels) of the top-left corner of the rectangle that wraps the point.
   */
  x: number | undefined;
  /**
   * The y coordinate (in pixels) of the top-left corner of the rectangle that wraps the point.
   */
  y: number | undefined;
  /**
   * ScatterPointItem size is an abstract number that is used to calculate the radius of the point.
   * It's not the radius itself, but rather a value that is used to calculate the radius.
   * Interacts with the zAxis range.
   */
  size: number;
  /**
   * Width of the point in pixels.
   */
  width: number;
  /**
   * Height of the point in pixels.
   */
  height: number;
  node: ScatterPointNode;
  payload?: any;
  tooltipPayload?: TooltipPayload;
  tooltipPosition: Coordinate;
}
type ScatterCustomizedShape =
  | ActiveShape<ScatterShapeProps, SVGPathElement & InnerSymbolsProp>
  | SymbolType;
/**
 * External props, intended for end users to fill in
 */
interface ScatterProps<DataPointType = any, DataValueType = any>
  extends
    DataProvider<DataPointType>,
    DataConsumer<DataPointType, DataValueType>,
    ZIndexable {
  /**
   * Unique identifier of this component.
   * Used as an HTML attribute `id`, and also to identify this element internally.
   *
   * If undefined, Recharts will generate a unique ID automatically.
   */
  id?: string;
  /**
   * The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.
   * @defaultValue 0
   */
  xAxisId?: AxisId;
  /**
   * The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.
   * @defaultValue 0
   */
  yAxisId?: AxisId;
  /**
   * The id of ZAxis which is corresponding to the data. Required when there are multiple ZAxes.
   *
   * ZAxis does not render directly, has no ticks and no tick line.
   * It is used to control the size of each scatter point.
   *
   * @defaultValue 0
   * @see {@link https://recharts.github.io/en-US/examples/ThreeDimScatterChart/ Scatter chart with Z axis}
   */
  zAxisId?: AxisId;
  /**
   * Renders line connecting individual points.
   * Options:
   * - `false`: no line is drawn.
   * - `true`: a default line is drawn.
   * - `ReactElement`: the option is the custom line element.
   * - `function`: the function will be called to render customized line.
   * - `object`: the option is the props of Curve element.
   *
   * Also see the `lineType` prop which controls how is this line calculated.
   *
   * @defaultValue false
   * @example <Scatter line />
   * @example <Scatter line={CustomizedLineComponent} />
   * @example <Scatter line={{ strokeDasharray: '5 5' }} />
   *
   * @see {@link https://recharts.github.io/en-US/examples/JointLineScatterChart/ Scatter chart with joint line}
   */
  line?:
    | ReactElement<SVGElement>
    | ((props: any) => ReactElement<SVGElement>)
    | Props$y
    | boolean;
  /**
   * Determines calculation method of the line if the `line` prop is set.
   * Options:
   * - `'joint'`: line will be generated by connecting all the points.
   * - `'fitting'`: line will be generated by fitting algorithm (linear regression).
   *
   * Has no effect if `line` prop is not set or is false.
   *
   * @defaultValue joint
   * @example <Scatter line lineType="fitting" />
   * @see {@link http://recharts.github.io/en-US/examples/JointLineScatterChart/ Scatter chart with joint line}
   */
  lineType?: "fitting" | "joint";
  /**
   * Determines the shape of joint line.
   * Same as `type` prop on Curve, Line and Area components.
   *
   * Has no effect if `line` prop is not set or is false or if `lineType` is 'fitting'.
   *
   * @defaultValue linear
   * @see {@link http://recharts.github.io/en-US/examples/JointLineScatterChart/ Scatter chart with joint line}
   */
  lineJointType?: CurveType;
  /**
   * The type of icon in legend.
   * If set to 'none', no legend item will be rendered.
   *
   * @defaultValue 'circle'
   * @example <Scatter legendType="diamond" />
   */
  legendType?: LegendType;
  tooltipType?: TooltipType$1;
  className?: string;
  /**
   * The name of data.
   * This option will be used in tooltip and legend to represent this graphical item.
   * If no value was set to this option, the value of dataKey will be used alternatively.
   */
  name?: string;
  /**
   * This component is rendered when this graphical item is activated
   * (could be by mouse hover, touch, keyboard, programmatically).
   *
   * @see {@link http://recharts.github.io/en-US/examples/SimpleScatterChart/ Scatter chart with custom active shape}
   * @example <Scatter activeShape={{ fill: 'red' }} />
   */
  activeShape?: ScatterCustomizedShape;
  /**
   * Determines the shape of individual data points.
   * - Can be one of the predefined shapes as a string, which will be passed to {@link Symbols} component.
   * - If set a ReactElement, the shape of point can be customized.
   * - If set a function, the function will be called to render customized shape.
   * @defaultValue circle
   *
   * @example <Scatter shape={CustomizedShapeComponent} />
   * @example <Scatter shape="diamond" />
   *
   * @see {@link https://recharts.github.io/en-US/examples/JointLineScatterChart/ Scatter chart with custom shapes}
   */
  shape?: ScatterCustomizedShape;
  /**
   * Hides the whole graphical element when true.
   *
   * Hiding an element is different from removing it from the chart:
   * Hidden graphical elements are still visible in Legend,
   * and can be included in axis domain calculations,
   * depending on `includeHidden` props of your XAxis/YAxis.
   *
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * Renders one label for each data point. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object`: the props of LabelList component;
   * - `ReactElement`: a custom label element;
   * - `function`: a render function of custom label.
   *
   * @defaultValue false
   */
  label?: ImplicitLabelListType;
  /**
   * If set false, animation of Scatter points will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue 'auto'
   */
  isAnimationActive?: boolean | "auto";
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @defaultValue 400
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue 'linear'
   */
  animationEasing?: AnimationTiming;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 600
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  children?: ReactNode;
}
/**
 * Because of naming conflict, we are forced to ignore certain (valid) SVG attributes.
 */
type BaseScatterSvgProps = Omit<
  PresentationAttributesAdaptChildEvent<ScatterPointItem, SVGGraphicsElement>,
  "points" | "ref" | "children" | "dangerouslySetInnerHTML"
>;
type Props$p<DataPointType = any, ValueAxisType = any> = BaseScatterSvgProps &
  ScatterProps<DataPointType, ValueAxisType>;
/**
 * @provides LabelListContext
 * @provides ErrorBarContext
 * @provides CellReader
 * @consumes CartesianChartContext
 */
declare const Scatter: {
  <DataPointType = any, ValueAxisType = any>(
    props: Props$p<DataPointType, ValueAxisType>,
  ): ReactElement;
  (props: Props$p<any, any>): ReactElement;
};

/**
 * @fileOverview Render a group of error bar
 */

/**
 * So usually the direction is decided by the chart layout.
 * Horizontal layout means error bars are vertical means direction=y
 * Vertical layout means error bars are horizontal means direction=x
 *
 * Except! In Scatter chart, error bars can go both ways.
 *
 * So this property is only ever used in Scatter chart, and ignored elsewhere.
 */
type ErrorBarDirection = "x" | "y";
/**
 * External ErrorBar props, visible for users of the library
 */
interface ErrorBarProps<
  DataPointType = any,
  DataValueType = any,
> extends ZIndexable {
  /**
   * Decides how to extract the value of this ErrorBar from the data:
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the value of this ErrorBar.
   *
   * The error values can be a single value for symmetric error bars;
   * or an array of a lower and upper error value for asymmetric error bars.
   */
  dataKey: DataKey<DataPointType, DataValueType>;
  /**
   * Width of the error bar ends (the serifs) in pixels.
   * This is not the total width of the error bar, but just the width of the little lines at the ends.
   *
   * The total width of the error bar is determined by the data value plus/minus the error value.
   *
   * @defaultValue 5
   */
  width?: number;
  /**
   * Direction of the error bar. Usually determined by chart layout, except in Scatter chart.
   * In Scatter chart, "x" means horizontal error bars, "y" means vertical error bars.
   */
  direction?: ErrorBarDirection;
  /**
   * @defaultValue true
   */
  isAnimationActive?: boolean;
  /**
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * @defaultValue 400
   */
  animationDuration?: number;
  /**
   * @defaultValue ease-in-out
   */
  animationEasing?: AnimationTiming;
  /**
   * The width of the stroke
   */
  strokeWidth?: number | string;
  /**
   * The stroke color. If "none", no line will be drawn.
   *
   * @defaultValue black
   */
  stroke?: string;
  /**
   * @defaultValue 400
   */
  zIndex?: number;
}
type Props$o = SVGProps<SVGLineElement> & ErrorBarProps;
/**
 * ErrorBar renders whiskers to represent error margins on a chart.
 *
 * It must be a child of a graphical element.
 *
 * ErrorBar expects data in one of the following forms:
 * - Symmetric error bars: a single error value representing both lower and upper bounds.
 * - Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound.
 *
 * The values provided are relative to the main data value.
 * For example, if the main data value is 10 and the error value is 2,
 * the error bar will extend from 8 to 12 for symmetric error bars.
 *
 * In other words, what ErrorBar will render is:
 * - For symmetric error bars: [value - errorVal, value + errorVal]
 * - For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]
 *
 * In stacked or ranged Bar charts, ErrorBar will use the higher data value
 * as the reference point for calculating the error bar positions.
 *
 * @consumes ErrorBarContext
 */
declare function ErrorBar(outsideProps: Props$o): React.JSX.Element;
declare namespace ErrorBar {
  var displayName: string;
}

type GetTicksInput = {
  angle?: number;
  interval: CartesianAxisSettings["interval"] | undefined;
  minTickGap: number;
  orientation: XAxisOrientation | YAxisOrientation;
  tick: CartesianAxisSettings["tick"];
  tickFormatter?: CartesianAxisSettings["tickFormatter"];
  ticks: ReadonlyArray<CartesianTickItem> | null;
  unit?: CartesianAxisSettings["unit"];
  viewBox: CartesianViewBoxRequired;
};

/**
 * The <CartesianGrid horizontal
 */
type GridLineTypeFunctionProps = Omit<LineItemProps, "key"> & {
  key: LineItemProps["key"] | undefined;
  offset: ChartOffsetInternal;
};
type AxisPropsForCartesianGridTicksGeneration =
  AxisPropsNeededForTicksGenerator & Omit<GetTicksInput, "ticks" | "viewBox">;
type GridLineType =
  | SVGProps<SVGLineElement>
  | ReactElement<SVGElement>
  | ((props: GridLineTypeFunctionProps) => ReactElement<SVGElement>)
  | boolean;
type HorizontalCoordinatesGenerator = (
  props: {
    yAxis: AxisPropsForCartesianGridTicksGeneration | undefined;
    width: number;
    height: number;
    offset: ChartOffsetInternal;
  },
  syncWithTicks: boolean,
) => number[];
type VerticalCoordinatesGenerator = (
  props: {
    xAxis: AxisPropsForCartesianGridTicksGeneration | undefined;
    width: number;
    height: number;
    offset: ChartOffsetInternal;
  },
  syncWithTicks: boolean,
) => number[];
interface CartesianGridProps extends ZIndexable {
  /**
   * The width of grid. If undefined, covers the full width of the chart plot area.
   */
  width?: number;
  /**
   * The height of grid. If undefined, covers the full height of the chart plot area.
   */
  height?: number;
  /**
   * A function that generates the y-coordinates of all horizontal lines.
   *
   * @see {@link https://codesandbox.io/p/sandbox/cartesian-grid-with-coordinate-generators-my38cg?file=%2Fsrc%2FApp.tsx Cartesian grid with coordinate generators}
   */
  horizontalCoordinatesGenerator?: HorizontalCoordinatesGenerator;
  /**
   * A function that generates the x-coordinates of all vertical lines.
   *
   * @see {@link https://codesandbox.io/p/sandbox/cartesian-grid-with-coordinate-generators-my38cg?file=%2Fsrc%2FApp.tsx Cartesian grid with coordinate generators}
   */
  verticalCoordinatesGenerator?: VerticalCoordinatesGenerator;
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
  /**
   * If set false, no horizontal grid lines will be drawn.
   *
   * @defaultValue true
   */
  horizontal?: GridLineType;
  /**
   * If set false, no vertical grid lines will be drawn.
   *
   * @defaultValue true
   */
  vertical?: GridLineType;
  /**
   * Array of coordinates in pixels where to draw horizontal grid lines.
   * Has priority over syncWithTicks and horizontalValues.
   *
   * @defaultValue []
   */
  horizontalPoints?: number[];
  /**
   * Array of coordinates in pixels where to draw vertical grid lines.
   * Has priority over syncWithTicks and verticalValues.
   *
   * @defaultValue []
   */
  verticalPoints?: number[];
  /**
   * The background color used to fill the space between grid lines
   *
   * @defaultValue none
   * @example <CartesianGrid fill="red" />
   * @example <CartesianGrid fill="#ccc" />
   */
  fill?: string;
  /**
   * The opacity of the background used to fill the space between grid lines
   *
   * @example <CartesianGrid fill="red" fillOpacity={0.6} />
   */
  fillOpacity?: number | string;
  /**
   * Defines background color of stripes.
   *
   * The values from this array will be passed in as the `fill` property in a `rect` SVG element.
   * For possible values see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect
   *
   * In case there are more stripes than colors, the colors will start from beginning.
   * So for example: verticalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black
   *
   * If this is undefined, or an empty array, then there is no background fill.
   * Note: Grid lines will be rendered above these background stripes.
   *
   * @defaultValue []
   */
  verticalFill?: string[];
  /**
   * Defines background color of stripes.
   *
   * The values from this array will be passed in as the `fill` property in a `rect` SVG element.
   * For possible values see: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill#rect
   *
   * In case there are more stripes than colors, the colors will start from beginning.
   * So for example: horizontalFill['yellow', 'black'] produces a pattern of yellow|black|yellow|black
   *
   * If this is undefined, or an empty array, then there is no background fill.
   * Note: Grid lines will be rendered above these background stripes.
   *
   * @defaultValue []
   */
  horizontalFill?: string[];
  /**
   * If true, only the lines that correspond to the axes ticks values will be drawn.
   * If false, extra lines could be added for each axis (at min and max coordinates), if there will not such ticks.
   * horizontalPoints, verticalPoints, horizontalValues, verticalValues have priority over syncWithTicks.
   *
   * @defaultValue false
   */
  syncWithTicks?: boolean;
  /**
   * Array of values, where horizontal lines will be drawn. Numbers or strings, in dependence on axis type.
   * Has priority over syncWithTicks but not over horizontalPoints.
   */
  horizontalValues?: number[] | string[];
  /**
   * Array of values, where vertical lines will be drawn. Numbers or strings, in dependence on axis type.
   * Has priority over syncWithTicks but not over verticalPoints.
   */
  verticalValues?: number[] | string[];
  /**
   * The pattern of dashes and gaps used to paint the lines of the grid
   *
   * @example <CartesianGrid strokeDasharray="3 3" />
   * @example <CartesianGrid strokeDasharray={[5, 5, 1, 5]} />
   * @example <CartesianGrid strokeDasharray="5 5 1 5" />
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray stroke-dasharray on MDN}
   */
  strokeDasharray?: string | number[];
  /**
   * The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.
   * @defaultValue 0
   */
  xAxisId?: AxisId;
  /**
   * The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.
   * @defaultValue 0
   */
  yAxisId?: AxisId;
  /**
   * @defaultValue -100
   */
  zIndex?: number;
}
type AcceptedSvgProps = Omit<SVGProps<SVGLineElement>, "offset">;
type Props$n = AcceptedSvgProps & CartesianGridProps;
type LineItemProps = Props$n & {
  offset: ChartOffsetInternal;
  xAxis: undefined | AxisPropsForCartesianGridTicksGeneration;
  yAxis: undefined | AxisPropsForCartesianGridTicksGeneration;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  key: string;
  index: number;
};
/**
 * Renders background grid with lines and fill colors in a Cartesian chart.
 *
 * @consumes CartesianChartContext
 */
declare function CartesianGrid(props: Props$n): React.JSX.Element | null;
declare namespace CartesianGrid {
  var displayName: string;
}

/**
 * Defines the blank space between the chart and the plot area.
 * This blank space is occupied by supporting elements like axes, legends, and brushes.
 * This also includes any margins that might be applied to the chart.
 */
type ChartOffset = {
  /**
   * Distance from the top edge of the chart to the top edge of the plot area.
   */
  readonly top: number;
  /**
   * Distance from the bottom edge of the chart to the bottom edge of the plot area.
   * Note that this is not a coordinate, this is a distance.
   * Meaning, `offset.bottom` could be 0 in a perfectly fine big chart.
   */
  readonly bottom: number;
  /**
   * Distance from the left edge of the chart to the left edge of the plot area.
   */
  readonly left: number;
  /**
   * Distance from the right edge of the chart to the right edge of the plot area.
   * Note that this is not a coordinate, this is a distance.
   * Meaning, `offset.right` could be 0 in a perfectly fine big chart.
   */
  readonly right: number;
};
/**
 * Plot area is the area where the actual chart data is rendered.
 * This means: bars, lines, scatter points, etc.
 */
type PlotArea = {
  /**
   * The width of the plot area.
   * This will be the same as `chartWidth - offset.left - offset.right`
   */
  readonly width: number;
  /**
   * The height of the plot area.
   * This will be the same as `chartHeight - offset.top - offset.bottom`
   */
  readonly height: number;
  /**
   * The x coordinate of the top-left corner of the plot area.
   * This will be the same as `offset.left`
   */
  readonly x: number;
  /**
   * The y coordinate of the top-left corner of the plot area.
   * This will be the same as `offset.top`
   */
  readonly y: number;
};

/**
 * A function that converts data values to pixel coordinates.
 * @param value - The data value to convert (number, string, or category).
 * @param options - Optional configuration for banded scales.
 * @param options.position - Position within a band: 'start', 'middle', or 'end'.
 * @returns The pixel coordinate, or `undefined` if the value is not in the domain.
 */
type ScaleFunction = (
  value: unknown,
  options?: {
    position?: BandPosition;
  },
) => number | undefined;
/**
 * A function that converts pixel coordinates back to data values.
 * @param pixelValue - The pixel coordinate to convert.
 * @returns The closest data value in the domain.
 */
type InverseScaleFunction = (pixelValue: number) => unknown;
/**
 * Returns a function to convert data values to pixel coordinates for an {@link XAxis}.
 *
 * This is useful for positioning annotations, custom shapes, or other elements
 * at specific data points on the chart.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @example
 * ```tsx
 * const xScale = useXAxisScale();
 * if (xScale) {
 *   const pixelX = xScale('Page A'); // Returns the pixel x-coordinate for 'Page A'
 * }
 * ```
 *
 * @param xAxisId The `xAxisId` of the XAxis. Defaults to `0` if not provided.
 * @returns A scale function that maps data values to pixel coordinates, or `undefined`.
 * @since 3.8
 */
declare const useXAxisScale: (xAxisId?: AxisId) => ScaleFunction | undefined;
/**
 * Returns a function to convert data values to pixel coordinates for a {@link YAxis}.
 *
 * This is useful for positioning annotations, custom shapes, or other elements
 * at specific data points on the chart.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @example
 * ```tsx
 * const yScale = useYAxisScale();
 * if (yScale) {
 *   const pixelY = yScale(1500); // Returns the pixel y-coordinate for value 1500
 * }
 * ```
 *
 * @param yAxisId The `yAxisId` of the YAxis. Defaults to `0` if not provided.
 * @returns A scale function that maps data values to pixel coordinates, or `undefined`.
 * @since 3.8
 */
declare const useYAxisScale: (yAxisId?: AxisId) => ScaleFunction | undefined;
/**
 * Returns a function to convert pixel coordinates back to data values for an {@link XAxis}.
 *
 * This is useful for implementing interactions like click-to-add-annotation,
 * drag interactions, or tooltips that need to determine what data point
 * corresponds to a mouse position.
 *
 * For continuous (numerical) scales, returns an interpolated value.
 * For categorical scales, returns the closest category in the domain - which is the same behaviour as {@link useXAxisInverseDataSnapScale}.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @example
 * ```tsx
 * const xInverseScale = useXAxisInverseScale();
 * if (xInverseScale) {
 *   const dataValue = xInverseScale(150); // Returns the data value at pixel x=150
 * }
 * ```
 *
 * @param xAxisId The `xAxisId` of the XAxis. Defaults to `0` if not provided.
 * @returns An inverse scale function that maps pixel coordinates to data values, or `undefined`.
 * @since 3.8
 */
declare const useXAxisInverseScale: (
  xAxisId?: AxisId,
) => InverseScaleFunction | undefined;
/**
 * Returns a function to convert pixel coordinates back to data values for an {@link XAxis},
 * but snapping to the closest data point.
 *
 * This is similar to {@link useXAxisInverseScale}, but instead of returning the exact data value
 * at the pixel position (interpolation), it returns the value of the closest data point.
 *
 * This is useful for implementing interactions where you want to select the closest data point
 * rather than an exact value or a tick.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @param xAxisId The `xAxisId` of the XAxis. Defaults to `0` if not provided.
 * @returns An inverse scale function that maps pixel coordinates to the closest data value, or `undefined`.
 * @since 3.8
 */
declare const useXAxisInverseDataSnapScale: (
  xAxisId?: AxisId,
) => InverseScaleFunction | undefined;
/**
 * Returns a function to convert pixel coordinates back to data values for an {@link XAxis},
 * but snapping to the closest axis tick.
 *
 * This is similar to {@link useXAxisInverseScale}, but instead of returning the exact data value
 * at the pixel position (interpolation), it returns the value of the closest tick.
 *
 * This is useful for implementing interactions where you want to select the closest tick
 * rather than an exact value or a data point.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @param xAxisId The `xAxisId` of the XAxis. Defaults to `0` if not provided.
 * @returns An inverse scale function that maps pixel coordinates to the closest tick value, or `undefined`.
 * @since 3.8
 */
declare const useXAxisInverseTickSnapScale: (
  xAxisId?: AxisId,
) => InverseScaleFunction | undefined;
/**
 * Returns a function to convert pixel coordinates back to data values for a {@link YAxis}.
 *
 * This is useful for implementing interactions like click-to-add-annotation,
 * drag interactions, or tooltips that need to determine what data point
 * corresponds to a mouse position.
 *
 * For continuous (numerical) scales, returns an interpolated value.
 * For categorical scales, returns the closest category in the domain - which is the same behaviour as {@link useYAxisInverseDataSnapScale}.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @example
 * ```tsx
 * const yInverseScale = useYAxisInverseScale();
 * if (yInverseScale) {
 *   const dataValue = yInverseScale(200); // Returns the data value at pixel y=200
 * }
 * ```
 *
 * @param yAxisId The `yAxisId` of the YAxis. Defaults to `0` if not provided.
 * @returns An inverse scale function that maps pixel coordinates to data values, or `undefined`.
 * @since 3.8
 */
declare const useYAxisInverseScale: (
  yAxisId?: AxisId,
) => InverseScaleFunction | undefined;
/**
 * Returns a function to convert pixel coordinates back to data values for a {@link YAxis},
 * but snapping to the closest data point.
 *
 * This is similar to {@link useYAxisInverseScale}, but instead of returning the exact data value
 * at the pixel position (interpolation), it returns the value of the closest data point.
 *
 * This is useful for implementing interactions where you want to select the closest data point
 * rather than an exact value or a tick.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @param yAxisId The `yAxisId` of the YAxis. Defaults to `0` if not provided.
 * @returns An inverse scale function that maps pixel coordinates to the closest data value, or `undefined`.
 * @since 3.8
 */
declare const useYAxisInverseDataSnapScale: (
  yAxisId?: AxisId,
) => InverseScaleFunction | undefined;
/**
 * Returns a function to convert pixel coordinates back to data values for a {@link YAxis},
 * but snapping to the closest axis tick.
 *
 * This is similar to {@link useYAxisInverseScale}, but instead of returning the exact data value
 * at the pixel position (interpolation), it returns the value of the closest tick.
 *
 * This is useful for implementing interactions where you want to select the closest tick
 * rather than an exact value or a data point.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist.
 *
 * @param yAxisId The `yAxisId` of the YAxis. Defaults to `0` if not provided.
 * @returns An inverse scale function that maps pixel coordinates to the closest tick value, or `undefined`.
 * @since 3.8
 */
declare const useYAxisInverseTickSnapScale: (
  yAxisId?: AxisId,
) => InverseScaleFunction | undefined;
/**
 * Returns the ticks of an {@link XAxis}.
 *
 * This hook is useful for accessing the calculated ticks of an XAxis.
 * The ticks are the same as the ones rendered by the XAxis component.
 *
 * @param xAxisId The `xAxisId` of the XAxis. Defaults to `0` if not provided.
 * @returns An array of ticks, or `undefined` if the axis doesn't exist or hasn't been calculated yet.
 * @since 3.8
 */
declare const useXAxisTicks: (
  xAxisId?: AxisId,
) => ReadonlyArray<TickItem> | undefined;
/**
 * Returns the ticks of a {@link YAxis}.
 *
 * This hook is useful for accessing the calculated ticks of a YAxis.
 * The ticks are the same as the ones rendered by the YAxis component.
 *
 * @param yAxisId The `yAxisId` of the YAxis. Defaults to `0` if not provided.
 * @returns An array of ticks, or `undefined` if the axis doesn't exist or hasn't been calculated yet.
 * @since 3.8
 */
declare const useYAxisTicks: (
  yAxisId?: AxisId,
) => ReadonlyArray<TickItem> | undefined;
/**
 * Data point with x and y values that can be converted to pixel coordinates.
 * The x and y values should be in the same format as your chart data.
 */
type CartesianDataPoint = {
  x: number | string;
  y: number | string;
};
/**
 * Converts a data point (in data coordinates) to pixel coordinates.
 *
 * This hook is useful for positioning annotations, custom shapes, or other elements
 * at specific data points on the chart. It uses the axis scales to convert
 * data values to their corresponding pixel positions within the chart area.
 *
 * This hook must be used within a chart context (inside a {@link LineChart}, {@link BarChart}, etc.).
 * Returns `undefined` if used outside a chart context, or if the axes don't exist, or if the data point
 * cannot be converted (e.g., if the data values are outside the axis domains).
 *
 * This is a convenience hook that combines {@link useXAxisScale} and {@link useYAxisScale} together in a single call.
 *
 * @example
 * ```tsx
 * // Position a marker at data point { x: 'Page C', y: 2500 }
 * const pixelCoords = useCartesianScale({ x: 'Page C', y: 2500 });
 * if (pixelCoords) {
 *   return <circle cx={pixelCoords.x} cy={pixelCoords.y} r={5} fill="red" />;
 * }
 * ```
 *
 * @param dataPoint The data point with x and y values in data coordinates.
 * @param xAxisId The `xAxisId` of the X-axis. Defaults to `0` if not provided.
 * @param yAxisId The `yAxisId` of the Y-axis. Defaults to `0` if not provided.
 * @returns The pixel x,y coordinates, or `undefined` if conversion is not possible.
 * @since 3.8
 */
declare const useCartesianScale: (
  dataPoint: CartesianDataPoint,
  xAxisId?: AxisId,
  yAxisId?: AxisId,
) => Coordinate | undefined;
/**
 * Returns the active tooltip label. The label is one of the values from the chart data,
 * and is used to display in the tooltip content.
 *
 * Returns undefined if there is no active user interaction or if used outside a chart context
 *
 * @returns ActiveLabel
 * @since 3.0
 */
declare const useActiveTooltipLabel: () => ActiveLabel;
/**
 * Returns the offset of the chart in pixels.
 *
 * Offset defines the blank space between the chart and the plot area.
 * This blank space is occupied by supporting elements like axes, legends, and brushes.
 *
 * The offset includes:
 *
 * - Margins
 * - Width and height of the axes
 * - Width and height of the legend
 * - Brush height
 *
 * If you are interested in the margin alone, use {@link useMargin} instead.
 *
 * The offset is independent of charts position on the page, meaning it does not change as the chart is scrolled or resized.
 *
 * It is also independent of the scale and zoom, meaning that as the user zooms in and out,
 * the numbers will not change as the chart gets visually larger or smaller.
 *
 * This hook must be used within a chart context (inside a `<LineChart>`, `<BarChart>`, etc.).
 * This hook returns `undefined` if used outside a chart context.
 *
 * @returns Offset of the chart in pixels, or undefined if used outside a chart context.
 * @since 3.1
 */
declare const useOffset: () => ChartOffset | undefined;
/**
 * Plot area is the area where the actual chart data is rendered.
 * This means: bars, lines, scatter points, etc.
 *
 * The plot area is calculated based on the chart dimensions and the offset.
 *
 * Plot area `width` and `height` are the dimensions in pixels;
 * `x` and `y` are the coordinates of the top-left corner of the plot area relative to the chart container.
 *
 * They are also independent of the scale and zoom, meaning that as the user zooms in and out,
 * the plot area dimensions will not change as the chart gets visually larger or smaller.
 *
 * This hook must be used within a chart context (inside a `<LineChart>`, `<BarChart>`, etc.).
 * This hook returns `undefined` if used outside a chart context.
 *
 * @returns Plot area of the chart in pixels, or undefined if used outside a chart context.
 * @since 3.1
 */
declare const usePlotArea: () => PlotArea | undefined;
/**
 * Returns the currently active data points being displayed in the Tooltip.
 * Active means that it is currently visible; this hook will return `undefined` if there is no current interaction.
 *
 * This follows the `<Tooltip />` props, if the Tooltip element is present in the chart.
 * If there is no `<Tooltip />` then this hook will follow the default Tooltip props.
 *
 * Data point is whatever you pass as an input to the chart using the `data={}` prop.
 *
 * This returns an array because a chart can have multiple graphical items in it (multiple Lines for example)
 * and tooltip with `shared={true}` will display all items at the same time.
 *
 * Returns undefined when used outside a chart context.
 *
 * @returns Data points that are currently visible in a Tooltip
 */
declare const useActiveTooltipDataPoints: <T = unknown>() =>
  | ReadonlyArray<T>
  | undefined;
/**
 * Returns the calculated domain of an X-axis.
 *
 * The domain can be numerical: `[min, max]`, or categorical: `['a', 'b', 'c']`.
 *
 * The type of the domain is defined by the `type` prop of the XAxis.
 *
 * The values of the domain are calculated based on the data and the `dataKey` of the axis.
 *
 * If the chart has a Brush, the domain will be filtered to the brushed indexes if the hook is used outside a Brush context,
 * and the full domain will be returned if the hook is used inside a Brush context.
 *
 * @param xAxisId The `xAxisId` of the X-axis. Defaults to `0` if not provided.
 * @returns The domain of the X-axis, or `undefined` if it cannot be calculated or if used outside a chart context.
 * @since 3.2
 */
declare const useXAxisDomain: (
  xAxisId?: AxisId,
) => NumberDomain | CategoricalDomain | undefined;
/**
 * Returns the calculated domain of a Y-axis.
 *
 * The domain can be numerical: `[min, max]`, or categorical: `['a', 'b', 'c']`.
 *
 * The type of the domain is defined by the `type` prop of the YAxis.
 *
 * The values of the domain are calculated based on the data and the `dataKey` of the axis.
 *
 * Does not interact with Brushes, as Y-axes do not support brushing.
 *
 * @param yAxisId The `yAxisId` of the Y-axis. Defaults to `0` if not provided.
 * @returns The domain of the Y-axis, or `undefined` if it cannot be calculated or if used outside a chart context.
 * @since 3.2
 */
declare const useYAxisDomain: (
  yAxisId?: AxisId,
) => NumberDomain | CategoricalDomain | undefined;
/**
 * Returns true if the {@link Tooltip} is currently active (visible).
 *
 * Returns false if the Tooltip is not active or if used outside a chart context.
 *
 * Recharts only allows one Tooltip per chart, so this hook does not take any parameters.
 * Weird things may happen if you have multiple Tooltip components in the same chart so please don't do that.
 *
 * @returns {boolean} True if the Tooltip is active, false otherwise.
 * @since 3.7
 */
declare const useIsTooltipActive: () => boolean;
/**
 * Returns the Cartesian `x` + `y` coordinates of the active {@link Tooltip}.
 *
 * Returns undefined if there is no active user interaction or if used outside a chart context.
 *
 * Recharts only allows one Tooltip per chart, so this hook does not take any parameters.
 * Weird things may happen if you have multiple Tooltip components in the same chart so please don't do that.
 *
 * @returns {Coordinate | undefined} The coordinate of the active Tooltip, or undefined.
 * @since 3.7
 */
declare const useActiveTooltipCoordinate: () => Coordinate | undefined;

type AxisRange = readonly [number, number];

interface DotPoint {
  readonly x: number | null;
  readonly y: number | null;
  readonly value?: any;
  readonly payload?: any;
}

/**
 * Extracts values from data objects.
 * Has two generics:
 * - DataPointType: The type of the data object.
 * - DataValueType: The type of the value to extract.
 *
 * The wall of text below may be simplified to:
 * - string (must be a key of DataPointType)
 * - number (must be a key of DataPointType)
 * - function that takes DataPointType and returns DataValueType `(obj: DataPointType) => DataValueType)`
 *
 * The actual implementation is more complex to allow for better type inference and autocomplete.
 */
type TypedDataKey<
  DataPointType = any,
  DataValueType = unknown,
> = unknown extends DataPointType
  ? string | number | ((obj: DataPointType) => DataValueType)
  : string extends keyof DataPointType
    ? string | number | ((obj: DataPointType) => DataValueType)
    :
        | {
            [K in keyof DataPointType]: DataPointType[K] extends DataValueType
              ? K extends string | number
                ? K
                : never
              : never;
          }[keyof DataPointType]
        | (DataPointType extends ReadonlyArray<infer E>
            ? E extends DataValueType
              ? `${number}`
              : never
            : never)
        | ((obj: DataPointType) => DataValueType);

/**
 * Determines how values are stacked:
 *
 * - `none` is the default, it adds values on top of each other. No smarts. Negative values will overlap.
 * - `expand` make it so that the values always add up to 1 - so the chart will look like a rectangle.
 * - `wiggle` and `silhouette` tries to keep the chart centered.
 * - `sign` stacks positive values above zero and negative values below zero. Similar to `none` but handles negatives.
 * - `positive` ignores all negative values, and then behaves like \`none\`.
 *
 * @see {@link https://d3js.org/d3-shape/stack#stack-offsets}
 * (note that the `diverging` offset in d3 is named `sign` in recharts)
 *
 * @inline
 */
type StackOffsetType =
  | "sign"
  | "expand"
  | "none"
  | "wiggle"
  | "silhouette"
  | "positive";
type CartesianLayout = "horizontal" | "vertical";
type PolarLayout = "centric" | "radial";
/**
 * @deprecated use either `CartesianLayout` or `PolarLayout` instead.
 * Mixing both charts families leads to ambiguity in the type system.
 * These two layouts share very few properties, so it is best to keep them separate.
 */
type LayoutType = CartesianLayout | PolarLayout;
type AxisType = "xAxis" | "yAxis" | "zAxis" | "angleAxis" | "radiusAxis";
/**
 * The type of axis.
 *
 * `category`: Treats data as distinct values.
 * Each value is in the same distance from its neighbors, regardless of their actual numeric difference.
 *
 * `number`: Treats data as continuous range.
 * Values that are numerically closer are placed closer together on the axis.
 *
 * `auto`: the type is inferred based on the chart layout.
 *
 * This is external type - users will provide this type in props.
 * Internally we will evaluate it to either 'category' or 'number' based on the layout,
 * before sending it to the store.
 *
 * @inline
 */
type AxisDomainTypeInput = "number" | "category" | "auto";
/**
 * Individual axes are responsible for resolving the 'auto' type to either 'number' or 'category',
 * based on the chart layout and axis kind. Then they can start using this type.
 */
type EvaluatedAxisDomainType = "number" | "category";
/**
 * Extracts values from data objects.
 *
 * @inline
 */
type DataKey<DataPointType, DataValueType = any> = TypedDataKey<
  DataPointType,
  DataValueType
>;
type PresentationAttributesWithProps<P, T> = AriaAttributes &
  DOMAttributesWithProps<P, T> &
  Omit<SVGProps<T>, keyof DOMAttributesWithProps<P, T>>;
type PresentationAttributesAdaptChildEvent<P, T> = AriaAttributes &
  DOMAttributesAdaptChildEvent<P, T> &
  Omit<SVGProps<T>, keyof DOMAttributesAdaptChildEvent<P, T>>;
/**
 * @inline
 */
type SymbolType =
  | "circle"
  | "cross"
  | "diamond"
  | "square"
  | "star"
  | "triangle"
  | "wye";
/**
 * @inline
 */
type LegendType =
  | "circle"
  | "cross"
  | "diamond"
  | "line"
  | "plainline"
  | "rect"
  | "square"
  | "star"
  | "triangle"
  | "wye"
  | "none";
type TooltipType = "none";
type AllowInDimension = {
  x?: boolean;
  y?: boolean;
};
interface Coordinate {
  x: number;
  y: number;
}
interface NullableCoordinate {
  x: number | null;
  y: number | null;
}
type PolarCoordinate = Coordinate & {
  angle: number;
  startAngle: number;
  endAngle: number;
  clockWise: boolean;
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  radius: number;
};
type RechartsScaleType =
  | "linear"
  | "pow"
  | "sqrt"
  | "log"
  | "symlog"
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
/**
 * String shortcuts for scale types.
 * In case none of these does what you want you can also provide your own scale function
 * @see {@link CustomScaleDefinition}
 */
type ScaleType = "auto" | RechartsScaleType;
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
type RechartsMouseEventHandler<P, T = Element> = EventHandler<
  P,
  MouseEvent$1<T>
>;
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
    __html: string | TrustedHTML;
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
  onAuxClick?: RechartsMouseEventHandler<P, T>;
  onAuxClickCapture?: RechartsMouseEventHandler<P, T>;
  onClick?: RechartsMouseEventHandler<P, T>;
  onClickCapture?: RechartsMouseEventHandler<P, T>;
  onContextMenu?: RechartsMouseEventHandler<P, T>;
  onContextMenuCapture?: RechartsMouseEventHandler<P, T>;
  onDoubleClick?: RechartsMouseEventHandler<P, T>;
  onDoubleClickCapture?: RechartsMouseEventHandler<P, T>;
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
  /**
   * The customized event handler of mousedown in this chart.
   */
  onMouseDown?: RechartsMouseEventHandler<P, T>;
  onMouseDownCapture?: RechartsMouseEventHandler<P, T>;
  /**
   * The customized event handler of mouseenter in this chart.
   */
  onMouseEnter?: RechartsMouseEventHandler<P, T>;
  /**
   * The customized event handler of mouseleave in this chart.
   */
  onMouseLeave?: RechartsMouseEventHandler<P, T>;
  /**
   * The customized event handler of mousemove in this chart.
   */
  onMouseMove?: RechartsMouseEventHandler<P, T>;
  onMouseMoveCapture?: RechartsMouseEventHandler<P, T>;
  /**
   * The customized event handler of mouseout in this chart.
   */
  onMouseOut?: RechartsMouseEventHandler<P, T>;
  onMouseOutCapture?: RechartsMouseEventHandler<P, T>;
  /**
   * The customized event handler of mouseover in this chart.
   */
  onMouseOver?: RechartsMouseEventHandler<P, T>;
  onMouseOverCapture?: RechartsMouseEventHandler<P, T>;
  /**
   * The customized event handler of mouseup in this chart.
   */
  onMouseUp?: RechartsMouseEventHandler<P, T>;
  onMouseUpCapture?: RechartsMouseEventHandler<P, T>;
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
/**
 * The type of easing function to use for animations
 *
 * @inline
 */
type AnimationTiming =
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "linear";
/** Specifies the duration of animation, the unit of this option is ms. */
type AnimationDuration = number;
/**
 * This object defines the offset of the chart area and width and height and brush and ... it's a bit too much information all in one.
 * We use it internally but let's not expose it to the outside world.
 * If you are looking for this information, instead import `ChartOffset` or `PlotArea` from `recharts`.
 */
type ChartOffsetInternal = {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
  brushBottom: number;
};
interface Padding {
  top: number;
  bottom: number;
  left: number;
  right: number;
}
interface GeometrySector {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
}
type AxisDomainItem =
  | string
  | number
  | ((d: number) => string | number)
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
  | ReadonlyArray<string>
  | ReadonlyArray<number>
  | Readonly<[AxisDomainItem, AxisDomainItem]>
  | ((
      [dataMin, dataMax]: NumberDomain,
      allowDataOverflow: boolean,
    ) => NumberDomain);
/**
 * NumberDomain is an evaluated {@link AxisDomain}.
 * Unlike {@link AxisDomain}, it has no variety - it's a tuple of two number.
 * This is after all the keywords and functions were evaluated and what is left is [min, max].
 *
 * Know that the min, max values are not guaranteed to be nice numbers - values like -Infinity or NaN are possible.
 *
 * There are also `category` axes that have different things than numbers in their domain.
 */
type NumberDomain = readonly [min: number, max: number];
type CategoricalDomainItem = number | string | Date;
type CategoricalDomain = ReadonlyArray<CategoricalDomainItem>;
type BaseTickContentProps = {
  angle: number;
  className?: string;
  fill: string | undefined;
  height?: number | string;
  index: number;
  name?: string;
  stroke: string;
  payload: CartesianTickItem;
  textAnchor: TextAnchor;
  tickFormatter: TickFormatter | undefined;
  verticalAnchor: TextVerticalAnchor;
  visibleTicksCount: number;
  width?: number | string;
  x: number | string;
  y: number | string;
};
type XAxisTickContentProps = BaseTickContentProps & {
  orientation: XAxisOrientation;
  padding: XAxisPadding | undefined;
};
type YAxisTickContentProps = BaseTickContentProps & {
  orientation: YAxisOrientation;
  padding: YAxisPadding | undefined;
};
type TickProp<T> = Props$C | ReactElement | ((props: T) => ReactNode) | boolean;
interface BaseAxisProps<DataPointType, DataValueType> extends DataConsumer<
  DataPointType,
  DataValueType
> {
  /**
   * The type of axis.
   *
   * `category`: Treats data as distinct values.
   * Each value is in the same distance from its neighbors, regardless of their actual numeric difference.
   *
   * `number`: Treats data as continuous range.
   * Values that are numerically closer are placed closer together on the axis.
   *
   * `auto`: the type is inferred based on the chart layout.
   */
  type?: AxisDomainTypeInput;
  /**
   * The name of data.
   * This option will be used in tooltip.
   * If no value was set to this option, the value of dataKey will be used alternatively.
   */
  name?: string;
  /**
   * The unit of data. This option will be used in tooltip.
   */
  unit?: string;
  /**
   * The data that you provide via the `data` prop is an array of objects.
   * Each object can have multiple properties, each representing a different data dimension.
   * Use the `dataKey` prop to specify which property (or dimension) to use for this component.
   *
   * Typically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,
   * where they extract different values from the same data objects.
   *
   * Decides how to extract the value of this Axis from the data:
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the value of this Axis.
   *
   * If undefined, it will reuse the dataKey of graphical items.
   */
  dataKey?: DataKey<DataPointType, DataValueType>;
  /**
   * Specify the domain of axis when the axis is a number axis.
   *
   * If undefined, then the domain is calculated based on the data and dataKeys.
   *
   * The length of domain should be 2, and we will validate the values in domain.
   *
   * Each element in the array can be a number, 'auto', 'dataMin', 'dataMax', a string like 'dataMin - 20', 'dataMax + 100',
   * or a function that accepts a single argument and returns a number.
   *
   * If any element of domain is set to be 'auto', comprehensible scale ticks will be calculated, and the final domain of axis is generated by the ticks.
   * If a function, receives '[dataMin, dataMax]', and must return a computed domain as '[min, max]'.
   *
   * @example <XAxis type="number" domain={['dataMin', 'dataMax']} />
   * @example <XAxis type="number" domain={[0, 'dataMax']} />
   * @example <XAxis type="number" domain={['auto', 'auto']} />
   * @example <XAxis type="number" domain={[0, 'dataMax + 1000']} />
   * @example <XAxis type="number" domain={['dataMin - 100', 'dataMax + 100']} />
   * @example <XAxis type="number" domain={[dataMin => (0 - Math.abs(dataMin)), dataMax => (dataMax * 2)]} />
   * @example <XAxis type="number" domain={([dataMin, dataMax]) => { const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax)); return [-absMax, absMax]; }} />
   * @example <XAxis type="number" domain={[0, 100]} allowDataOverflow />
   */
  domain?: AxisDomain;
  /**
   * Scale function determines how data values are mapped to visual values.
   * In other words, decided the mapping between data domain and coordinate range.
   *
   * If undefined, or 'auto', the scale function is created internally according to the type of axis and data.
   *
   * You can define a custom scale, either as a string shortcut to a d3 scale, or as a complete scale definition object.
   *
   * @defaultValue auto
   * @example <XAxis scale="log" />
   * @example
   * import { scaleLog } from 'd3-scale';
   * const scale = scaleLog().base(Math.E);
   * <YAxis scale={scale} />
   */
  scale?:
    | ScaleType
    | CustomScaleDefinition
    | CustomScaleDefinition<string>
    | CustomScaleDefinition<number>
    | CustomScaleDefinition<Date>;
}
/**
 * Props shared in all renderable axes - meaning the ones that are drawn on the chart,
 * can have ticks, axis line, etc.
 */
interface RenderableAxisProps<
  DataPointType,
  DataValueType,
> extends BaseAxisProps<DataPointType, DataValueType> {
  /**
   * Tick text rotation angle in degrees.
   * Positive values rotate clockwise, negative values rotate counterclockwise.
   *
   * @defaultValue 0
   */
  angle?: number;
  /**
   * If set true, the axis do not display in the chart.
   *
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * Defines how the individual label text is rendered.
   * This controls the settings for individual ticks; on a typical axis, there are multiple ticks, depending on your data.
   *
   * If you want to customize the overall axis label, use the `label` prop instead.
   *
   * Options:
   * - `false`: Do not render any tick labels.
   * - `true`: Render tick labels with default settings.
   * - `object`: An object of props to be merged into the internally calculated tick props.
   * - `ReactElement`: A custom React element to be used as the tick label.
   * - `function`: A function that returns a React element for custom rendering of tick labels.
   *
   * @defaultValue true
   */
  tick?: TickProp<unknown>;
  /**
   * The count of axis ticks. Not used if 'type' is 'category'.
   *
   * @see {@link https://recharts.github.io/guide/axisTicks/}
   * @defaultValue 5
   */
  tickCount?: number;
  /**
   * Determines how the axis line is drawn. Options:
   * - `true`: the axis line is drawn with default props;
   * - `false`: the axis line is not visible;
   * - `object`: passed as props to SVG `<line>` element representing the axis line.
   *
   * @defaultValue true
   */
  axisLine?: boolean | SVGProps<SVGLineElement>;
  /**
   * If false set, tick lines will not be drawn.
   * If true set, tick lines will be drawn which have the props calculated internally.
   * If object set, tick lines will be drawn which have the props merged
   * by the internal calculated props and the option.
   * @defaultValue true
   */
  tickLine?: boolean | SVGProps<SVGLineElement>;
  /**
   * The length of tick line.
   * @defaultValue 6
   */
  tickSize?: number;
  /**
   * The formatter function of tick.
   */
  tickFormatter?: (value: any, index: number) => string;
  /**
   * When domain of the axis is specified and the type of the axis is 'number',
   * if allowDataOverflow is set to be false,
   * the domain will be adjusted when the minimum value of data is smaller than domain[0] or
   * the maximum value of data is greater than domain[1] so that the axis displays all data values.
   * If set to true, graphic elements (line, area, bars) will be clipped to conform to the specified domain.
   *
   * @defaultValue false
   */
  allowDataOverflow?: boolean;
  /**
   * Allow the axis has duplicated categories or not when the type of axis is "category".
   * @defaultValue true
   */
  allowDuplicatedCategory?: boolean;
  /**
   * Allow the ticks of axis to be decimals or not.
   *
   * @defaultValue true
   */
  allowDecimals?: boolean;
  /**
   * Ensures that all datapoints within a chart contribute to its domain calculation, even when they are hidden
   * @defaultValue false
   */
  includeHidden?: boolean;
  /**
   * @deprecated Recharts computes the range automatically based on chart width or height
   *
   * Recharts ignores this prop since 3.0
   */
  range?: AxisRange;
  /**
   * Defines a single label for the whole axis.
   * This prop renders one label in the center of the axis line.
   * Useful for labeling the axis as a whole, like "Time (in seconds)" or "Distance (in meters)".
   *
   * This is not controlling tick labels.
   * If you want to customize tick labels, please see `tickFormatter` or `tick` props.
   *
   * - `false`: no label is rendered
   * - `string` | `number`: the content of the label
   * - `object`: the props of LabelList component
   * - `ReactElement`: a custom label element
   * - `function`: a render function of custom label
   *
   * @defaultValue false
   */
  label?: ImplicitLabelType;
  /** The HTML element's class name */
  className?: string;
  /**
   * If set to true, the ticks of this axis are reversed.
   * @defaultValue false
   */
  reversed?: boolean;
}
/** Defines how ticks are placed and whether / how tick collisions are handled.
 * 'preserveStart' keeps the left tick on collision and ensures that the first tick is always shown.
 * 'preserveEnd' keeps the right tick on collision and ensures that the last tick is always shown.
 * 'preserveStartEnd' keeps the left tick on collision and ensures that the first and last ticks always show.
 * 'equidistantPreserveStart' selects a number N such that every nTh tick will be shown without collision.
 * 'equidistantPreserveEnd' selects a number N such that every nTh tick will be shown, ensuring the last tick is always visible.
 */
type AxisInterval =
  | number
  | "preserveStart"
  | "preserveEnd"
  | "preserveStartEnd"
  | "equidistantPreserveStart"
  | "equidistantPreserveEnd";
/**
 * Ticks can be any type when the axis is the type of category.
 *
 * Ticks must be numbers when the axis is the type of number.
 *
 * @inline
 */
type AxisTick = number | string;
interface TickItem {
  value: any;
  coordinate: number;
  index: number;
  /**
   * How far this tick is offset from the start of a category band.
   * On axes that do not have bands, this will always be zero.
   *
   * We never read offset internally in Recharts,
   * but it has been part of the external API so let's keep it here for people who do use it.
   */
  offset?: number;
}
interface CartesianTickItem extends TickItem {
  tickCoord?: number;
  tickSize?: number;
  isShow?: boolean;
}
interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}
/**
 * @inline
 */
interface CartesianViewBox {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}
type CartesianViewBoxRequired = Required<CartesianViewBox>;
interface PolarViewBox {
  cx?: number;
  cy?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  clockWise?: boolean;
}
type PolarViewBoxRequired = Required<PolarViewBox>;
type TrapezoidViewBox = {
  /**
   * The x-coordinate of the upper left corner of the trapezoid.
   * If the upper side is shorter than the lower side, this will be the x-coordinate of the upper left corner,
   * meaning that the X does take into account the varying width of the trapezoid.
   */
  x: number;
  /**
   * The y-coordinate of the upper side of the trapezoid.
   * Nothing exciting happening here.
   */
  y: number;
  /**
   * The width of the upper side of the trapezoid.
   */
  upperWidth: number;
  /**
   * The width of the lower side of the trapezoid.
   */
  lowerWidth: number;
  /**
   * The overall width of the trapezoid: `Math.max(upperWidth, lowerWidth)`.
   */
  width: number;
  /**
   * The height of the trapezoid.
   */
  height: number;
};
/**
 * @inline
 */
type ViewBox = CartesianViewBoxRequired | PolarViewBoxRequired;
interface SankeyNode {
  dx: number;
  dy: number;
  name: string;
  value: any;
  x: number;
  y: number;
  depth: number;
  targetNodes: number[];
  targetLinks: number[];
  sourceNodes: number[];
  sourceLinks: number[];
}
interface SankeyLink {
  target: number;
  source: number;
  value: number;
  sy: number;
  dy: number;
  ty: number;
}
/**
 * These are the props we are going to pass to an `activeDot` or `dot` if it is a function or a custom Component
 */
type ActiveDotProps = Props$D & {
  payload: any;
  index: number;
  dataKey: DataKey<any> | undefined;
  cx: number | undefined;
  cy: number | undefined;
  r: number | string | undefined;
  fill: string;
  strokeWidth: number;
  stroke: string;
  value: any;
};
/**
 * This is the type of `activeDot` prop on:
 * - Area
 * - Line
 * - Radar
 *
 * @inline
 */
type ActiveDotType =
  /**
   * true | false will turn the default activeDot on and off, respectively
   */
  | boolean
  /**
   * activeDot can be a custom React Component.
   * It should return an SVG element because we are in SVG context - HTML won't work here.
   * Unfortunately, if you write a regular old functional component and have it return SVG element,
   * its default, inferred return type is `JSX.Element` and so if this return type was `SVGElement`
   * then it would look like a type error (even when doing the right thing).
   * So instead here we have ReactNode return type which is invalid in runtime
   * (remember, we are in SVG context so HTML elements won't work, we need SVGElement).
   * But better than forcing everyone to re-type their components I guess.
   */
  | ((props: ActiveDotProps) => ReactNode)
  /**
   * activeDot can be an object; props from here will be appended to the default active dot
   */
  | Partial<ActiveDotProps>
  /**
   * activeDot can be an element; it will get cloned and will receive new extra props.
   * I do not recommend this way! Use React component instead, that way you get more predictable props.
   */
  | ReactElement<SVGProps<SVGElement>>;
/**
 * Inside the dot event handlers we provide extra information about the dot point
 * that the Dot component itself does not need but users might find useful.
 */
type DotItemDotProps = SVGPropsNoEvents<Omit<Props$D, "points" | "ref">> & {
  points: ReadonlyArray<DotPoint>;
  index: number;
  payload: any;
  dataKey: DataKey<any> | undefined;
  value: any;
};
/**
 * This is the type of `dot` prop on:
 * - Area
 * - Line
 * - Radar
 *
 * @inline
 */
type DotType =
  /**
   * true | false will turn the default dot on and off, respectively
   */
  | boolean
  /**
   * dot can be a custom React Component.
   * It should return an SVG element because we are in SVG context - HTML won't work here.
   * Unfortunately, if you write a regular old functional component and have it return SVG element,
   * its default, inferred return type is `JSX.Element` and so if this return type was `SVGElement`
   * then it would look like a type error (even when doing the right thing).
   * So instead here we have ReactNode return type which is invalid in runtime
   * (remember, we are in SVG context so HTML elements won't work, we need SVGElement).
   * But better than forcing everyone to re-type their components I guess.
   *
   * Not that when a function, or a component is used, the props received are {@link DotItemDotProps}
   * which contain some extra information compared to {@link DotProps}.
   */
  | ((props: DotItemDotProps) => ReactNode)
  /**
   * dot can be an object; props from here will be appended to the default dot
   */
  | Partial<Props$D>
  /**
   * dot can be an element; it will get cloned and will receive new extra props.
   * I do not recommend this way! Use React component instead, that way you get more predictable props.
   */
  | ReactElement<SVGProps<SVGElement>>;
type ActiveShape<PropsType = Record<string, any>, ElementType = SVGElement> =
  | ReactElement<SVGProps<ElementType>>
  | ((props: PropsType) => ReactElement | null | undefined)
  | SVGProps<ElementType>
  | boolean;
type HTMLElementTarget = Pick<
  HTMLElement,
  "getBoundingClientRect" | "offsetWidth" | "offsetHeight"
>;
type SVGElementTarget = Pick<
  SVGGraphicsElement,
  "getBoundingClientRect" | "getBBox"
>;
/**
 * Simplified version of the MouseEvent so that we don't have to mock the whole thing in tests.
 *
 * This is meant to represent the React.MouseEvent
 * which is a wrapper on top of https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
 */
interface HTMLMousePointer {
  clientX: number;
  clientY: number;
  currentTarget: HTMLElementTarget;
}
interface HTMLTouchPointer {
  touches: ArrayLike<Pick<Touch, "clientX" | "clientY">>;
  currentTarget: HTMLElementTarget;
}
/**
 * Simplified version of the MouseEvent for SVG elements.
 *
 * Similar to MousePointer but uses SVGGraphicsElement properties instead of HTMLElement properties.
 * SVG elements use getBBox() to get the intrinsic size instead of offsetWidth/offsetHeight.
 */
interface SVGMousePointer {
  clientX: number;
  clientY: number;
  currentTarget: SVGElementTarget;
}
interface SVGTouchPointer {
  touches: ArrayLike<Pick<Touch, "clientX" | "clientY">>;
  currentTarget: SVGElementTarget;
}
/**
 * Recharts accepts mouse events from both HTML and SVG elements.
 */
type MousePointer = HTMLMousePointer | SVGMousePointer;
type TouchPointer = HTMLTouchPointer | SVGTouchPointer;
/**
 * Coordinates relative to the top-left corner of the active element.
 * Also include scale which means that element that's scaled will return the same coordinates as element that's not scaled.
 */
interface RelativePointer {
  relativeX: number;
  relativeY: number;
}
/**
 * Data provider means that this component accepts a `data` prop which is where you can input your data into the chart state.
 * The data is an array of objects, where each object represents a data point.
 *
 * DataPointType is the type of each data point object in the data array.
 *
 * The data is reused in multiple charts and components. Meaning if you provide data on the chart level,
 * then all child components, graphical items, legend, tooltip, axes ... will be able to access the data.
 *
 * Same goes for the graphical item. If you provide data on the graphical item level,
 * then that data is visible for the main chart, and all axes, tooltip, legend ... in the whole chart.
 * This is not scoped to the graphical item only.
 */
interface DataProvider<DataPointType> {
  /**
   * The source data. Each element should be an object.
   * The properties of each object represent the values of different data dimensions.
   *
   * Use the `dataKey` prop to specify which properties to use.
   *
   * @example data={[{ name: 'a', value: 12 }]}
   * @example data={[{ label: 'foo', measurements: [5, 12] }]}
   */
  data?: ChartData<DataPointType>;
}
/**
 * Data consumer means that this component accepts a `dataKey` prop which is how you specify
 * which dimension of the data to use for this component.
 *
 * DataPointType is the type of each data point object in the data array.
 * DataValueType is the type of the value that this dataKey extracts from each data point.
 */
interface DataConsumer<DataPointType, DataValueType> {
  /**
   * The data that you provide via the `data` prop is an array of objects.
   * Each object can have multiple properties, each representing a different data dimension.
   * Use the `dataKey` prop to specify which property (or dimension) to use for this component.
   *
   * Typically, you will want to have one dataKey on the X axis, and different dataKey on the Y axis,
   * where they extract different values from the same data objects.
   *
   * Decides how to extract the value from the data:
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the value.
   */
  dataKey?: DataKey<DataPointType, DataValueType>;
}
/**
 * Props shared with all Cartesian and Polar charts.
 * There are three charts that do not use these base props, and define their own:
 * - Treemap
 * - Sunburst
 * - Sankey
 */
interface BaseChartProps<DataPointType>
  extends DataProvider<DataPointType>, ExternalMouseEvents {
  /**
   * The width of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  width?: number | Percent;
  /**
   * The height of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  height?: number | Percent;
  id?: string;
  children?: ReactNode;
  className?: string;
  /**
   * Turn on accessibility support for keyboard-only and screen reader users.
   *
   * @defaultValue true
   */
  accessibilityLayer?: boolean;
  desc?: string;
  /**
   * Empty space around the container.
   *
   * @defaultValue {"top":5,"right":5,"bottom":5,"left":5}
   */
  margin?: Partial<Margin>;
  style?: CSSProperties;
  /**
   * The CSS cursor style applied to the chart container.
   * Useful for setting the mouse cursor when hovering over the chart (e.g. `"pointer"`, `"crosshair"`).
   */
  cursor?: CSSProperties["cursor"];
  /**
   * Charts with the same syncId will synchronize Tooltip and Brush events.
   *
   * @see {@link https://recharts.github.io/en-US/examples/SynchronizedAreaChart/ Synchronized Charts Example}
   */
  syncId?: number | string;
  /**
   * Customize how the charts will synchronize tooltips and brushes.
   * `index`: synchronize using the data index in the data array. Index expects that all data has the same length.
   * `value`: synchronize using the data value on categorical axis (categorical: XAxis in horizontal layout, YAxis in vertical layout).
   * function: a custom sync method which receives tick and data as argument and returns an index.
   *
   * @defaultValue index
   */
  syncMethod?: SyncMethod;
  /**
   * If and where the chart should appear in the tab order
   */
  tabIndex?: number;
  /**
   * If true, then it will listen to container size changes and adapt the SVG chart accordingly.
   * If false, then it renders the chart at the specified width and height and will stay that way
   * even if the container size changes.
   *
   * This is similar to ResponsiveContainer but without the need for an extra wrapper component.
   * The `responsive` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).
   * @default false
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  responsive?: boolean;
}
interface EventThrottlingProps {
  /**
   * Decides the time interval to throttle events.
   * Only events defined in `throttledEvents` prop are throttled.
   * All other events are executed immediately/synchronously.
   *
   * Options:
   * - `number`: the time interval in milliseconds
   * - `'raf'`: use requestAnimationFrame to schedule updates.
   *
   * @defaultValue 'raf'
   */
  throttleDelay?: number | "raf";
  /**
   * Defines which events should be throttled.
   * Events not in this list will not be throttled.
   *
   * Use the special value `'all'` to throttle all events. Empty array means no events are throttled.
   *
   * Use the prop `throttleDelay` to define the throttling interval.
   *
   * If an event is on this list, then you lose the opportunity to access the event synchronously.
   * Which means that if you want to call `e.preventDefault()` or `e.stopPropagation()` inside the event handler,
   * then that event handler must not be in this list.
   *
   * @defaultValue ["mousemove","touchmove","pointermove","scroll","wheel"]
   */
  throttledEvents?: ReadonlyArray<keyof GlobalEventHandlersEventMap> | "all";
}
interface CartesianChartProps<DataPointType = unknown>
  extends BaseChartProps<DataPointType>, EventThrottlingProps {
  /**
   * The gap between two bar categories, which can be a percent value or a fixed value.
   *
   * @defaultValue 10%
   *
   * @see {@link https://recharts.github.io/en-US/guide/barAlignment/ Bar Alignment Guide}
   */
  barCategoryGap?: number | string;
  /**
   * The gap between two bars in the same category.
   *
   * @defaultValue 4
   *
   * @see {@link https://recharts.github.io/en-US/guide/barAlignment/ Bar Alignment Guide}
   */
  barGap?: number | string;
  /**
   * The width or height of each bar. If the barSize is not specified, the size of the
   * bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.
   */
  barSize?: number | string;
  /**
   * The base value of area.
   */
  baseValue?: BaseValue;
  compact?: boolean;
  dataKey?: DataKey<any>;
  /**
   * The layout of chart defines the orientation of axes, graphical items, and tooltip.
   *
   * @defaultValue horizontal
   */
  layout?: CartesianLayout;
  /**
   * The maximum width of all the bars in a horizontal BarChart, or maximum height in a vertical BarChart.
   */
  maxBarSize?: number;
  /**
   * If `false`, stacked items will be rendered left to right.
   * If `true`, stacked items will be rendered right to left.
   *
   * Render direction affects SVG layering, not x position.
   *
   * @defaultValue false
   */
  reverseStackOrder?: boolean;
  /**
   * The ARIA role for the chart, which provides semantic information for screen reader users.
   */
  role?: string;
  /**
   * The type of offset function used to generate the lower and upper values in the series array.
   * The types are built-in offsets in d3-shape.
   * Only applicable for stacked Area or Bar charts.
   * Has no effect when the stackId prop is not set on Area or Bar components.
   *
   * @link https://d3js.org/d3-shape/stack#stack_offset
   * @see {@link https://recharts.github.io/en-US/examples/BarChartStackedBySign/ Chart with stackOffset=sign example}
   *
   * @defaultValue none
   */
  stackOffset?: StackOffsetType;
  title?: string;
}
interface PolarChartProps<DataPointType = unknown>
  extends BaseChartProps<DataPointType>, EventThrottlingProps {
  /**
   * The gap between two bar categories, which can be a percent value or a fixed value.
   *
   * @defaultValue 10%
   */
  barCategoryGap?: number | string;
  /**
   * The gap between two bars in the same category.
   *
   * @defaultValue 4
   */
  barGap?: number | string;
  /**
   * The width or height of each bar. If the barSize is not specified, the size of the
   * bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.
   */
  barSize?: number | string;
  /**
   * The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of width.
   * @defaultValue 50%
   */
  cx?: number | string;
  /**
   * The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of height.
   * @defaultValue 50%
   */
  cy?: number | string;
  dataKey?: DataKey<any>;
  /**
   * Angle, in degrees, at which the chart should end.
   */
  endAngle?: number;
  /**
   * The inner radius of the chart.
   * If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
   * @defaultValue 0
   */
  innerRadius?: number | string;
  /**
   * The layout of chart defines the orientation of axes, graphical items, and tooltip.
   */
  layout?: PolarLayout;
  maxBarSize?: number;
  /**
   * The outer radius of the chart.
   * If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
   * @defaultValue 80%
   */
  outerRadius?: number | string;
  reverseStackOrder?: boolean;
  role?: string;
  stackOffset?: StackOffsetType;
  /**
   * Angle in degrees from which the chart should start.
   */
  startAngle?: number;
  title?: string;
}
type Percent = `${number}%`;

interface SurfaceProps {
  width: number | string;
  height: number | string;
  viewBox?: CartesianViewBox;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  title?: string;
  desc?: string;
}
type Props$m = Omit<SVGProps<SVGSVGElement>, "viewBox"> & SurfaceProps;
/**
 * Renders an SVG element.
 *
 * All charts already include a Surface component, so you would not normally use this directly.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg
 */
declare const Surface: React.ForwardRefExoticComponent<
  Omit<Props$m, "ref"> & React.RefAttributes<SVGSVGElement>
>;

interface LayerProps {
  className?: string;
  children?: ReactNode;
}
type Props$l = SVGAttributes<SVGGElement> & LayerProps;
/**
 * Creates an SVG group element to group other SVG elements.
 *
 * Useful if you want to apply transformations or styles to a set of elements
 * without affecting other elements in the SVG.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/g
 */
declare const Layer: React.ForwardRefExoticComponent<
  React.SVGAttributes<SVGGElement> &
    LayerProps &
    React.RefAttributes<SVGGElement>
>;

/**
 * If set false, no cursor will be drawn when tooltip is active.
 * If set an object, the option is the configuration of cursor.
 * If set a React element, the option is the custom react element of drawing cursor
 */
type CursorDefinition = boolean | ReactElement | SVGProps<SVGElement>;

type ContentType<
  TValue extends ValueType = ValueType,
  TName extends NameType = NameType,
> = ReactElement | ((props: TooltipContentProps<TValue, TName>) => ReactNode);
type TooltipContentProps<
  TValue extends ValueType = ValueType,
  TName extends NameType = NameType,
> = TooltipProps<TValue, TName> & {
  label?: string | number;
  payload: TooltipPayload;
  coordinate: Coordinate | undefined;
  active: boolean;
  accessibilityLayer: boolean;
  activeIndex: TooltipIndex | undefined;
};
type PropertiesReadFromContext =
  | "viewBox"
  | "active"
  | "payload"
  | "coordinate"
  | "label"
  | "accessibilityLayer";
type TooltipProps<
  TValue extends ValueType = ValueType,
  TName extends NameType = NameType,
> = Omit<Props$z<TValue, TName>, PropertiesReadFromContext> & {
  /**
   * If true, then Tooltip is always displayed, once an activeIndex is set by mouse over, or programmatically.
   * If false, then Tooltip is never displayed.
   * If undefined, Recharts will control when the Tooltip displays. This includes mouse and keyboard controls.
   */
  active?: boolean;
  /**
   * This option allows the tooltip to extend beyond the viewBox of the chart itself.
   * @defaultValue {"x":false,"y":false}
   */
  allowEscapeViewBox?: AllowInDimension;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @defaultValue 400
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue ease
   */
  animationEasing?: AnimationTiming;
  /**
   * Tooltip always attaches itself to the "Tooltip" axis. Which axis is it? Depends on the layout:
   * - horizontal layout -> X axis
   * - vertical layout -> Y axis
   * - radial layout -> radial axis
   * - centric layout -> angle axis
   *
   * Tooltip will use the default axis for the layout, unless you specify an axisId.
   *
   * @defaultValue 0
   */
  axisId?: AxisId;
  /**
   * Renders the content of the tooltip.
   *
   * This should return HTML elements, not SVG elements.
   *
   * - If not set, the {@link DefaultTooltipContent} component is used.
   * - If set to a React element, this element will be cloned and extra props will be passed in.
   * - If set to a function, the function will be called and should return HTML elements.
   *
   * @see {@link https://recharts.github.io/en-US/examples/CustomContentOfTooltip/ Example with custom content}
   */
  content?: ContentType<TValue, TName>;
  /**
   * The style of tooltip content which is a dom element.
   * @defaultValue {}
   */
  contentStyle?: CSSProperties;
  /**
   * If set false, no cursor will be drawn when tooltip is active.
   * If set a object, the option is the configuration of cursor.
   * If set a React element, the option is the custom react element of drawing cursor.
   * @defaultValue true
   */
  cursor?: CursorDefinition;
  defaultIndex?: number | TooltipIndex;
  /**
   * When an item of the payload has value null or undefined, this item won't be displayed.
   * @defaultValue true
   */
  filterNull?: boolean;
  /**
   * Function to customize the value in the tooltip.
   * If you return an array, the first entry will be the formatted "value", and the second entry will be the formatted "name"
   */
  formatter?: (
    value: TValue,
    name: TName,
    item: TooltipPayloadEntry,
    index: number,
    payload: TooltipPayload,
  ) => ReactNode | [ReactNode, ReactNode];
  /**
   * If true, the tooltip will display information about hidden series.
   * Defaults to false.
   * Interacting with the hide property of Area, Bar, Line, Scatter.
   *
   * @defaultValue false
   */
  includeHidden?: boolean | undefined;
  /**
   * If set false, animation of tooltip will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue auto
   */
  isAnimationActive?: boolean | "auto";
  /**
   * Sorts tooltip items.
   * Defaults to 'name' which means it sorts alphabetically by graphical item `name` property.
   * @defaultValue name
   */
  itemSorter?: TooltipItemSorter;
  /**
   * The style of default tooltip content item which is a li element.
   * @defaultValue {}
   */
  itemStyle?: CSSProperties;
  /**
   * The formatter function of label in tooltip.
   */
  labelFormatter?: (label: any, payload: TooltipPayload) => ReactNode;
  /**
   * The style of default tooltip label which is a p element.
   * @defaultValue {}
   */
  labelStyle?: CSSProperties;
  /**
   * The offset size between the position of tooltip and the mouse cursor position.
   * When a number is provided, the same offset is applied to both x and y axes.
   *
   * When a Coordinate object is provided, you can specify different offsets for each axis (x and y as numbers)
   * @defaultValue 10
   */
  offset?: number | Coordinate;
  payloadUniqBy?: UniqueOption<TooltipPayloadEntry>;
  /**
   * If portal is defined, then Tooltip will use this element as a target
   * for rendering using React Portal: https://react.dev/reference/react-dom/createPortal
   *
   * If this is undefined then Tooltip renders inside the recharts-wrapper element.
   */
  portal?: HTMLElement | null;
  /**
   * If this field is set, the tooltip will be displayed at the specified position
   * regardless of the mouse position.
   *
   * You can set a single field (x or y) and let the other field be calculated automatically based
   * on the mouse position.
   */
  position?: Partial<Coordinate>;
  /**
   * @defaultValue {"x":false,"y":false}
   */
  reverseDirection?: AllowInDimension;
  /**
   * The separator between name and value.
   * @defaultValue ' : '
   */
  separator?: string;
  /**
   * Defines whether the tooltip is reacting to the current data point,
   * or to all data points at the current axis coordinate.
   *
   * - `true`: tooltip will appear on top of all bars on an axis tick.
   * - `false`: tooltip will appear on individual bars.
   *
   * Different chart types allow different modes, and have different defaults.
   *
   * @see {@link https://github.com/recharts/recharts/wiki/Tooltip-event-type-and-shared-prop Tooltip event type and shared prop wiki page}
   */
  shared?: boolean;
  /**
   * If `hover` then the Tooltip shows on mouse enter and hides on mouse leave.
   *
   * If `click` then the Tooltip shows after clicking and stays active.
   *
   * @defaultValue hover
   */
  trigger?: TooltipTrigger;
  /**
   * @defaultValue false
   */
  useTranslate3d?: boolean;
  /**
   * CSS styles to be applied to the wrapper `div` element.
   */
  wrapperStyle?: CSSProperties;
};
/**
 * The Tooltip component displays a floating box with data values when hovering over or clicking on chart elements.
 *
 * It can be configured to show information for individual data points or for all points at a specific axis coordinate.
 * The appearance and content of the tooltip can be customized via props.
 *
 * @see {@link https://github.com/recharts/recharts/wiki/Tooltip-event-type-and-shared-prop Tooltip event type and shared prop wiki page}
 * @see {@link https://recharts.github.io/en-US/guide/activeIndex/ Active index replacement when migrating from Recharts v2 to v3}
 *
 * @consumes CartesianChartContext
 * @consumes PolarChartContext
 * @consumes TooltipEntrySettings
 */
declare function Tooltip(
  outsideProps: TooltipProps<ValueType, NameType>,
): React.JSX.Element | null;

interface Props$k {
  /**
   * width / height. If specified, the height will be calculated by width / aspect.
   */
  aspect?: number;
  /**
   * The width of chart container.
   * Can be a number or a percent string like "100%".
   * @default '100%'
   */
  width?: Percent | number;
  /**
   * The height of chart container.
   * Can be a number or a percent string like "100%".
   * @default '100%'
   */
  height?: Percent | number;
  /**
   * The minimum width of the container.
   * @default 0
   */
  minWidth?: string | number;
  /**
   * The minimum height of the container.
   */
  minHeight?: string | number;
  /**
   * The initial width and height of the container.
   * @default {"width":-1,"height":-1}
   */
  initialDimension?: {
    width: number;
    height: number;
  };
  /** The maximum height of the container. It can be a number. */
  maxHeight?: number;
  /**
   * The content of the container.
   * It can contain multiple charts, and then they will all share the same dimensions.
   */
  children: ReactNode;
  /**
   * If specified a positive number, debounced function will be used to handle the resize event.
   * @default 0
   */
  debounce?: number;
  /**
   * Unique identifier of this component.
   * Used as an HTML attribute `id`.
   */
  id?: string | number;
  /** The HTML element's class name */
  className?: string | number;
  /** The style of the container. */
  style?: Omit<CSSProperties, keyof Props$k>;
  /**
   * If specified provides a callback providing the updated chart width and height values.
   */
  onResize?: (width: number, height: number) => void;
}
/**
 * The `ResponsiveContainer` component is a container that adjusts its width and height based on the size of its parent element.
 * It is used to create responsive charts that adapt to different screen sizes.
 *
 * This component uses the {@link https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver ResizeObserver} API to monitor changes to the size of its parent element.
 * If you need to support older browsers that do not support this API, you may need to include a polyfill.
 *
 * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart size guide}
 *
 * @provides ResponsiveContainerContext
 */
declare const ResponsiveContainer: React.ForwardRefExoticComponent<
  Props$k & React.RefAttributes<HTMLDivElement>
>;

interface Props$j extends SVGProps<SVGElement> {
  /**
   * The fill color.
   */
  fill?: string;
  /**
   * The stroke color.
   */
  stroke?: string;
}
/**
 * Cell component used to define colors and styles of chart elements.
 *
 * This component is now deprecated and will be removed in Recharts 4.0.
 *
 * Please use the `shape` prop or `content` prop on the respective chart components
 * to customize the rendering of chart elements instead of using `Cell`.
 *
 * @see {@link https://recharts.github.io/en-US/guide/cell/ Guide: Migrate from Cell component to shape prop}
 *
 * @deprecated
 * @consumes CellReader
 */
declare const Cell: FunctionComponent<Props$j>;

/**
 * @fileOverview Customized
 */

type Comp<P> = FunctionComponent<P> | Component<P> | ReactElement<P>;
type Props$i<P, C extends Comp<P>> = P & {
  /**
   * Render your components directly, without Customized wrapper. Will be removed in 4.0
   * @deprecated
   * @example Before: `<Customized component={<MyCustomComponent />} />`
   * @example After: `<MyCustomComponent />`
   */
  component: C;
};
/**
 * Customized component used to be necessary to render custom elements in Recharts 2.x.
 * Starting from Recharts 3.x, all charts are able to render arbitrary elements anywhere,
 * and Customized is no longer needed.
 *
 * @example Before: `<Customized component={<MyCustomComponent />} />`
 * @example After: `<MyCustomComponent />`
 *
 * @deprecated Just render your components directly. Will be removed in 4.0
 */
declare function Customized<P, C extends Comp<P>>({
  component,
  ...props
}: Props$i<P, C>): React.JSX.Element;
declare namespace Customized {
  var displayName: string;
}

interface SectorProps {
  className?: string;
  /**
   * The x-coordinate of center.
   * @default 0
   */
  cx?: number;
  /**
   * The y-coordinate of center.
   * @default 0
   */
  cy?: number;
  /**
   * The inner radius of the sector.
   * @default 0
   */
  innerRadius?: number;
  /**
   * The outer radius of the sector.
   * @default 0
   */
  outerRadius?: number;
  /**
   * The start angle of the sector.
   * @default 0
   */
  startAngle?: number;
  /**
   * The end angle of the sector.
   * @default 0
   */
  endAngle?: number;
  /**
   * The radius of corners.
   * @default 0
   */
  cornerRadius?: number;
  /**
   * Whether force to render round corner when the angle of sector is very small
   * @default false
   */
  forceCornerRadius?: boolean;
  cornerIsExternal?: boolean;
  /**
   * The customized event handler of click on the sector
   */
  onClick?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mousedown on the sector
   */
  onMouseDown?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseup on the sector
   */
  onMouseUp?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mousemove on the sector
   */
  onMouseMove?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseover on the sector
   */
  onMouseOver?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseout on the sector
   */
  onMouseOut?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseenter on the sector
   */
  onMouseEnter?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseleave on the sector
   */
  onMouseLeave?: (e: React.MouseEvent<SVGPathElement>) => void;
}
/**
 * SVG cx, cy are `string | number | undefined`, but internally we use `number` so let's
 * override the types here.
 */
type Props$h = Omit<
  SVGProps<SVGPathElement>,
  "cx" | "cy" | "dangerouslySetInnerHTML"
> &
  Partial<SectorProps>;
declare const Sector: React.FC<Props$h>;

/**
 * @fileOverview Polygon
 */

interface PolygonProps {
  className?: string;
  /**
   * The coordinates of all the vertexes of the polygon, like an array of objects with x and y coordinates.
   */
  points?: ReadonlyArray<Coordinate>;
  baseLinePoints?: ReadonlyArray<Coordinate>;
  connectNulls?: boolean;
  /**
   * The customized event handler of click on the polygon
   */
  onClick?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mousedown on the polygon
   */
  onMouseDown?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mouseup on the polygon
   */
  onMouseUp?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mousemove on the polygon
   */
  onMouseMove?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mouseover on the polygon
   */
  onMouseOver?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mouseout on the polygon
   */
  onMouseOut?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mouseenter on the polygon
   */
  onMouseEnter?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
  /**
   * The customized event handler of mouseleave on the polygon
   */
  onMouseLeave?: (e: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
}
type Props$g = Omit<SVGProps<SVGPolygonElement>, "points"> & PolygonProps;
declare const Polygon: React.FC<Props$g>;

/**
 * @fileOverview Cross
 */

interface CrossProps {
  /**
   * The x-coordinate of the vertical line of the cross in pixels.
   */
  x?: number;
  /**
   * The y-coordinate of the horizontal line of the cross in pixels.
   */
  y?: number;
  /**
   * Width of the cross in pixels.
   */
  width?: number;
  /**
   * Height of the cross in pixels.
   */
  height?: number;
  /**
   * The y-coordinate of the top left point in the boundary box of the cross.
   */
  top?: number;
  /**
   * The x-coordinate of the top left point in the boundary box of the cross.
   */
  left?: number;
  className?: number;
}
type Props$f = SVGProps<SVGPathElement> & CrossProps;
declare const Cross: React.FC<Props$f>;

interface PolarGridProps extends ZIndexable {
  /**
   * The x-coordinate of center.
   * When used inside a chart context, this prop is calculated based on the chart's dimensions,
   * and this prop is ignored.
   *
   * This is only used when rendered outside a chart context.
   */
  cx?: number;
  /**
   * The y-coordinate of center.
   * When used inside a chart context, this prop is calculated based on the chart's dimensions,
   * and this prop is ignored.
   *
   * This is only used when rendered outside a chart context.
   */
  cy?: number;
  /**
   * The radius of the inner polar grid.
   * When used inside a chart context, this prop is calculated based on the chart's dimensions,
   * and this prop is ignored.
   *
   * This is only used when rendered outside a chart context.
   */
  innerRadius?: number;
  /**
   * The radius of the outer polar grid.
   * When used inside a chart context, this prop is calculated based on the chart's dimensions,
   * and this prop is ignored.
   *
   * This is only used when rendered outside a chart context.
   */
  outerRadius?: number;
  /**
   * The array of every line grid's angle.
   */
  polarAngles?: ReadonlyArray<number>;
  /**
   * The array of every circle grid's radius.
   */
  polarRadius?: ReadonlyArray<number>;
  /**
   * The type of polar grids.
   * @defaultValue polygon
   */
  gridType?: "polygon" | "circle";
  /**
   * @defaultValue true
   */
  radialLines?: boolean;
  /**
   * @defaultValue 0
   */
  angleAxisId?: AxisId;
  /**
   * @defaultValue 0
   */
  radiusAxisId?: AxisId;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue -100
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  /**
   * The stroke color. If "none", no line will be drawn.
   * @defaultValue #ccc
   */
  stroke?: string;
  /**
   * The width of the stroke.
   * @defaultValue 1
   */
  strokeWidth?: number | string;
  /**
   * The pattern of dashes and gaps used to paint the lines of the grid.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray stroke-dasharray on MDN}
   */
  strokeDasharray?: string | number;
  /**
   * The background color used to fill the space between grid lines.
   * @defaultValue none
   */
  fill?: string;
  /**
   * The opacity of the background used to fill the space between grid lines.
   */
  fillOpacity?: number | string;
}
type Props$e = SVGProps<SVGLineElement> & PolarGridProps;
/**
 * @consumes PolarViewBoxContext
 */
declare const PolarGrid: {
  (outsideProps: Props$e): React.JSX.Element | null;
  displayName: string;
};

type TickOrientation = "left" | "right" | "middle";
interface PolarRadiusAxisProps<DataPointType = any, DataValueType = any>
  extends
    Omit<
      RenderableAxisProps<DataPointType, DataValueType>,
      "axisLine" | "angle" | "type" | "tickSize" | "domain" | "scale" | "tick"
    >,
    ZIndexable {
  /**
   * Determines how the axis line is drawn. Options:
   * - `true`: the axis line is drawn with default props;
   * - `false`: the axis line is not visible;
   * - `object`: passed as props to SVG `<line>` element representing the axis line.
   *
   * @example <PolarRadiusAxis axisLine={false} />
   * @example <PolarRadiusAxis axisLine={{ stroke: 'red', strokeWidth: 2 }} />
   * @defaultValue true
   */
  axisLine?: boolean | SVGProps<SVGLineElement>;
  /**
   * The angle of the whole axis: the line, ticks and labels, everything.
   *
   * This is different from other graphical elements where angle usually means
   * the angle of text. Here, it means the angle of everything.
   *
   * @defaultValue 0
   */
  angle?: number;
  /**
   * The type of axis.
   *
   * `category`: Treats data as distinct values.
   * Each value is in the same distance from its neighbors, regardless of their actual numeric difference.
   *
   * `number`: Treats data as continuous range.
   * Values that are numerically closer are placed closer together on the axis.
   *
   * `auto`: the type is inferred based on the chart layout.
   *
   * @defaultValue auto
   */
  type?: AxisDomainTypeInput;
  /**
   * The orientation of axis text.
   * @defaultValue right
   */
  orientation?: TickOrientation;
  /**
   * Specify the domain of axis when the axis is a number axis.
   *
   * If undefined, then the domain is calculated based on the data and dataKeys.
   *
   * The length of domain should be 2, and we will validate the values in domain.
   *
   * Each element in the array can be a number, 'auto', 'dataMin', 'dataMax', a string like 'dataMin - 20', 'dataMax + 100',
   * or a function that accepts a single argument and returns a number.
   *
   * If any element of domain is set to be 'auto', comprehensible scale ticks will be calculated, and the final domain of axis is generated by the ticks.
   * If a function, receives '[dataMin, dataMax]', and must return a computed domain as '[min, max]'.
   *
   * @example <PolarRadiusAxis type="number" domain={['dataMin', 'dataMax']} />
   * @example <PolarRadiusAxis type="number" domain={[0, 'dataMax']} />
   * @example <PolarRadiusAxis type="number" domain={['auto', 'auto']} />
   * @example <PolarRadiusAxis type="number" domain={[0, 'dataMax + 1000']} />
   * @example <PolarRadiusAxis type="number" domain={['dataMin - 100', 'dataMax + 100']} />
   * @example <PolarRadiusAxis type="number" domain={[dataMin => (0 - Math.abs(dataMin)), dataMax => (dataMax * 2)]} />
   * @example <PolarRadiusAxis type="number" domain={([dataMin, dataMax]) => { const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax)); return [-absMax, absMax]; }} />
   * @example <PolarRadiusAxis type="number" domain={[0, 100]} allowDataOverflow />
   */
  domain?: AxisDomain;
  /**
   * Scale function determines how data values are mapped to visual values.
   * In other words, decided the mapping between data domain and coordinate range.
   *
   * If undefined, or 'auto', the scale function is created internally according to the type of axis and data.
   *
   * You can define a custom scale, either as a string shortcut to a d3 scale, or as a complete scale definition object.
   *
   * @defaultValue auto
   * @example <PolarRadiusAxis scale="log" />
   * @example
   * import { scaleLog } from 'd3-scale';
   * const scale = scaleLog().base(Math.E);
   * <PolarRadiusAxis scale={scale} />
   */
  scale?:
    | ScaleType
    | CustomScaleDefinition
    | CustomScaleDefinition<string>
    | CustomScaleDefinition<number>
    | CustomScaleDefinition<Date>;
  /**
   * The customized event handler of click on the ticks of this axis
   */
  onClick?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mousedown on the ticks of this axis
   */
  onMouseDown?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mouseup on the ticks of this axis
   */
  onMouseUp?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mousemove on the ticks of this axis
   */
  onMouseMove?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mouseover on the ticks of this axis
   */
  onMouseOver?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mouseout on the ticks of this axis
   */
  onMouseOut?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mouseenter on the ticks of this axis
   */
  onMouseEnter?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * The customized event handler of mouseleave on the ticks of this axis
   */
  onMouseLeave?: (data: any, index: number, e: React.MouseEvent) => void;
  /**
   * Allow the ticks of axis to be decimals or not.
   *
   * @defaultValue false
   */
  allowDecimals?: boolean;
  /**
   * Controls how Recharts calculates "nice" tick values for this axis.
   * Options: `'none'`, `'auto'`, `'adaptive'`, `'snap125'`.
   * See {@link NiceTicksAlgorithm} for a full description of each option.
   *
   * @defaultValue 'auto'
   */
  niceTicks?: NiceTicksAlgorithm;
  /**
   * @defaultValue 0
   */
  radiusAxisId?: string | number;
  /**
   * Defines how the individual label text is rendered.
   * This controls the settings for individual ticks; on a typical axis, there are multiple ticks, depending on your data.
   *
   * If you want to customize the overall axis label, use the `label` prop instead.
   *
   * Options:
   * - `false`: Do not render any tick labels.
   * - `true`: Render tick labels with default settings.
   * - `object`: An object of props to be merged into the internally calculated tick props.
   * - `ReactElement`: A custom React element to be used as the tick label.
   * - `function`: A function that returns a React element for custom rendering of tick labels.
   *
   * @defaultValue true
   */
  tick?: TickProp<BaseTickContentProps>;
  ticks?: ReadonlyArray<AxisTick>;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 500
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
}
type AxisSvgProps$1 = Omit<
  PresentationAttributesAdaptChildEvent<any, SVGTextElement>,
  "scale" | "type"
>;
type Props$d<DataPointType = any, DataValueType = any> = AxisSvgProps$1 &
  PolarRadiusAxisProps<DataPointType, DataValueType>;
/**
 * @provides PolarLabelContext
 * @consumes PolarViewBoxContext
 */
declare function PolarRadiusAxis<DataPointType = any, DataValueType = any>(
  outsideProps: Props$d<DataPointType, DataValueType>,
): React.JSX.Element;
declare namespace PolarRadiusAxis {
  var displayName: string;
}

interface PolarAngleAxisProps<DataPointType = any, DataValueType = any>
  extends
    Omit<
      RenderableAxisProps<DataPointType, DataValueType>,
      "axisLine" | "tickCount" | "domain" | "scale" | "tick"
    >,
    ZIndexable {
  /**
   * Controls axis line element. These are be passed as props to SVG `<line>` element representing the axis line.
   * If `true` then the axis line is drawn using props of the PolarAngleAxis component.
   * If `false` then the axis line is not drawn.
   *
   * Also see `axisLineType` prop to change the shape of the axis line.
   *
   * @defaultValue true
   *
   * @example <PolarAngleAxis axisLine={{ stroke: 'red', strokeWidth: 2 }} />
   * @example <PolarAngleAxis axisLine={false} />
   * @example <PolarAngleAxis stroke='red' strokeWidth={2} strokeDasharray={4} />
   */
  axisLine?: boolean | SVGProps<SVGLineElement>;
  /**
   * @defaultValue false
   */
  allowDecimals?: boolean;
  /**
   * Allow the axis has duplicated categories or not when the type of axis is "category".
   * @defaultValue true
   */
  allowDuplicatedCategory?: boolean;
  /**
   * @defaultValue 0
   */
  angleAxisId?: string | number;
  /**
   * The type of axis line.
   * @defaultValue polygon
   */
  axisLineType?: "polygon" | "circle";
  /**
   * The x-coordinate of center.
   * When used inside a chart context, this prop is calculated based on the chart's dimensions,
   * and this prop is ignored.
   *
   * This is only used when rendered outside a chart context.
   */
  cx?: number;
  /**
   * The y-coordinate of center.
   * When used inside a chart context, this prop is calculated based on the chart's dimensions,
   * and this prop is ignored.
   *
   * This is only used when rendered outside a chart context.
   */
  cy?: number;
  /**
   * The orientation of axis text.
   * @defaultValue 'outer'
   */
  orientation?: "inner" | "outer";
  /**
   * Specify the domain of axis when the axis is a number axis.
   *
   * If undefined, then the domain is calculated based on the data and dataKeys.
   *
   * The length of domain should be 2, and we will validate the values in domain.
   *
   * Each element in the array can be a number, 'auto', 'dataMin', 'dataMax', a string like 'dataMin - 20', 'dataMax + 100',
   * or a function that accepts a single argument and returns a number.
   *
   * If any element of domain is set to be 'auto', comprehensible scale ticks will be calculated, and the final domain of axis is generated by the ticks.
   * If a function, receives '[dataMin, dataMax]', and must return a computed domain as '[min, max]'.
   *
   * @example <PolarAngleAxis type="number" domain={['dataMin', 'dataMax']} />
   * @example <PolarAngleAxis type="number" domain={[0, 'dataMax']} />
   * @example <PolarAngleAxis type="number" domain={['auto', 'auto']} />
   * @example <PolarAngleAxis type="number" domain={[0, 'dataMax + 1000']} />
   * @example <PolarAngleAxis type="number" domain={['dataMin - 100', 'dataMax + 100']} />
   * @example <PolarAngleAxis type="number" domain={[dataMin => (0 - Math.abs(dataMin)), dataMax => (dataMax * 2)]} />
   * @example <PolarAngleAxis type="number" domain={([dataMin, dataMax]) => { const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax)); return [-absMax, absMax]; }} />
   * @example <PolarAngleAxis type="number" domain={[0, 100]} allowDataOverflow />
   */
  domain?: AxisDomain;
  /**
   * Scale function determines how data values are mapped to visual values.
   * In other words, decided the mapping between data domain and coordinate range.
   *
   * If undefined, or 'auto', the scale function is created internally according to the type of axis and data.
   *
   * You can define a custom scale, either as a string shortcut to a d3 scale, or as a complete scale definition object.
   *
   * @defaultValue auto
   * @example <PolarAngleAxis scale="log" />
   * @example
   * import { scaleLog } from 'd3-scale';
   * const scale = scaleLog().base(Math.E);
   * <PolarAngleAxis scale={scale} />
   */
  scale?:
    | ScaleType
    | CustomScaleDefinition
    | CustomScaleDefinition<string>
    | CustomScaleDefinition<number>
    | CustomScaleDefinition<Date>;
  /**
   * The outer radius of circle grid.
   * If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
   */
  radius?: number | string;
  /**
   * Defines how the individual label text is rendered.
   * This controls the settings for individual ticks; on a typical axis, there are multiple ticks, depending on your data.
   *
   * If you want to customize the overall axis label, use the `label` prop instead.
   *
   * Options:
   * - `false`: Do not render any tick labels.
   * - `true`: Render tick labels with default settings.
   * - `object`: An object of props to be merged into the internally calculated tick props.
   * - `ReactElement`: A custom React element to be used as the tick label.
   * - `function`: A function that returns a React element for custom rendering of tick labels.
   *
   * @defaultValue true
   */
  tick?: TickProp<BaseTickContentProps>;
  /**
   * The count of axis ticks. Not used if 'type' is 'category'.
   */
  tickCount?: number;
  /**
   * Controls how Recharts calculates "nice" tick values for this axis.
   * Options: `'none'`, `'auto'`, `'adaptive'`, `'snap125'`.
   * See {@link NiceTicksAlgorithm} for a full description of each option.
   *
   * @defaultValue 'auto'
   */
  niceTicks?: NiceTicksAlgorithm;
  /**
   * The formatter function of ticks.
   */
  tickFormatter?: (value: any, index: number) => string;
  /**
   * The length of tick line.
   * @defaultValue 8
   */
  tickSize?: number;
  /**
   * The array of every tick's value and angle.
   */
  ticks?: ReadonlyArray<TickItem>;
  /**
   * The type of axis.
   *
   * `category`: Treats data as distinct values.
   * Each value is in the same distance from its neighbors, regardless of their actual numeric difference.
   *
   * `number`: Treats data as continuous range.
   * Values that are numerically closer are placed closer together on the axis.
   *
   * `auto`: the type is inferred based on the chart layout.
   *
   * @defaultValue auto
   */
  type?: AxisDomainTypeInput;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 500
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
}
type AxisSvgProps = Omit<
  PresentationAttributesAdaptChildEvent<TickItem, SVGTextElement>,
  "scale" | "type" | "dangerouslySetInnerHTML"
>;
type Props$c<DataPointType = any, DataValueType = any> = AxisSvgProps &
  PolarAngleAxisProps<DataPointType, DataValueType>;
/**
 * @provides PolarLabelContext
 * @consumes PolarViewBoxContext
 */
declare function PolarAngleAxis<DataPointType = any, DataValueType = any>(
  outsideProps: Props$c<DataPointType, DataValueType>,
): React.ReactNode;
declare namespace PolarAngleAxis {
  var displayName: string;
}

/**
 * Some graphical items choose to provide more information to the tooltip
 * and some do not.
 */
type TooltipTriggerInfo = {
  tooltipPayload?: TooltipPayload;
  tooltipPosition?: Coordinate;
};

interface PieDef {
  /**
   * The x-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of container width.
   */
  cx?: number | string;
  /**
   * The y-coordinate of center. If set a percentage, the final value is obtained by multiplying the percentage of container height.
   */
  cy?: number | string;
  /**
   * Angle in degrees from which the chart should start.
   */
  startAngle?: number;
  /**
   * Angle, in degrees, at which the chart should end.
   */
  endAngle?: number;
  /**
   * The angle between two sectors.
   *
   * @example <Pie paddingAngle={5} />
   * @example https://recharts.github.io/examples/PieChartWithPaddingAngle
   */
  paddingAngle?: number;
  /**
   * The inner radius of the sectors.
   * If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
   */
  innerRadius?: number | string;
  /**
   * The outer radius of the sectors.
   * If set a percentage, the final value is obtained by multiplying the percentage of maxRadius which is calculated by the width, height, cx, cy.
   * Function should return a string percentage or number.
   */
  outerRadius?: number | string | ((dataPoint: any) => number | string);
  cornerRadius?: number | string;
}
type PieLabelLine =
  | ReactElement<SVGElement>
  | ((props: any) => ReactElement<SVGElement>)
  | SVGProps<SVGPathElement>
  | boolean;
interface PieLabelExtraProps {
  stroke: string;
  index: number;
  textAnchor: string;
}
type PieLabelRenderProps = Omit<SVGPropsNoEvents<PieSvgAttributes>, "offset"> &
  Omit<PieSectorDataItem, "offset"> &
  PieLabelExtraProps &
  Coordinate;
type LabelListPropsWithPosition = Props$x & {
  position: Props$x["position"];
};
/**
 * The `label` prop in Pie accepts a variety of alternatives.
 */
type PieLabel =
  | boolean
  | LabelListPropsWithPosition
  | Partial<PieLabelRenderProps>
  | ((props: PieLabelRenderProps) => ReactNode | ReactElement<SVGElement>)
  | ReactElement<SVGElement>;
type PieSectorData = GeometrySector &
  TooltipTriggerInfo & {
    dataKey?: DataKey<any>;
    midAngle?: number;
    middleRadius?: number;
    name?: string | number;
    paddingAngle?: number;
    payload?: any;
    percent?: number;
    value: number;
  };
/**
 * We spread the data object into the sector data item,
 * so we can't really know what is going to be inside.
 *
 * This type represents our best effort, but it all depends on the input data
 * and what is inside of it.
 *
 * https://github.com/recharts/recharts/issues/6380
 * https://github.com/recharts/recharts/discussions/6375
 */
type PieSectorDataItem = PiePresentationProps &
  PieCoordinate &
  PieSectorData & {
    cornerRadius: number | undefined;
  };
type PieSectorShapeProps = PieSectorDataItem & {
  isActive: boolean;
  index: number;
};
type PieShape =
  | ReactNode
  | ((props: PieSectorShapeProps, index: number) => React.ReactElement);
interface PieEvents {
  /**
   * The customized event handler of click on the sectors in this group.
   */
  onClick?: (
    data: PieSectorDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mousedown on the sectors in this group.
   */
  onMouseDown?: (
    data: PieSectorDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mouseup on the sectors in this group.
   */
  onMouseUp?: (
    data: PieSectorDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mousemove on the sectors in this group.
   */
  onMouseMove?: (
    data: PieSectorDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mouseover on the sectors in this group.
   */
  onMouseOver?: (
    data: PieSectorDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mouseout on the sectors in this group.
   */
  onMouseOut?: (
    data: PieSectorDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mouseenter on the sectors in this group.
   */
  onMouseEnter?: (
    data: PieSectorDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mouseleave on the sectors in this group.
   */
  onMouseLeave?: (
    data: PieSectorDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  onTouchStart?: (
    data: PieSectorDataItem,
    index: number,
    e: React.TouchEvent<SVGGraphicsElement>,
  ) => void;
  onTouchMove?: (
    data: PieSectorDataItem,
    index: number,
    e: React.TouchEvent<SVGGraphicsElement>,
  ) => void;
  onTouchEnd?: (
    data: PieSectorDataItem,
    index: number,
    e: React.TouchEvent<SVGGraphicsElement>,
  ) => void;
}
interface PieProps<DataPointType = any, DataValueType = any>
  extends
    DataProvider<DataPointType>,
    DataConsumer<DataPointType, DataValueType>,
    PieDef,
    PieEvents,
    ZIndexable {
  /**
   * This component is rendered when this graphical item is activated
   * (could be by mouse hover, touch, keyboard, programmatically).
   *
   * @deprecated Use the `shape` prop to create each sector. `isActive` designates the "active" shape.
   * @example <Pie activeShape={<CustomActiveShape />} />
   * @example https://recharts.github.io/examples/CustomActiveShapePieChart
   */
  activeShape?: ActiveShape<PieSectorDataItem>;
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 400
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @defaultValue 1500
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue ease
   */
  animationEasing?: AnimationTiming;
  className?: string;
  /**
   * Hides the whole graphical element when true.
   *
   * Hiding an element is different from removing it from the chart:
   * Hidden graphical elements are still visible in Legend,
   * and can be included in axis domain calculations,
   * depending on `includeHidden` props of your XAxis/YAxis.
   *
   * @defaultValue false
   */
  hide?: boolean;
  id?: string;
  /**
   * The shape of inactive sector.
   * @deprecated Use the `shape` prop to modify each sector.
   */
  inactiveShape?: ActiveShape<PieSectorDataItem>;
  /**
   * If set false, animation will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue auto
   */
  isAnimationActive?: boolean | "auto";
  /**
   * Renders one label for each pie sector. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object` that has `position` prop: the props of LabelList component;
   * - `object` that does not have `position` prop: the props of a custom Pie label (similar to Label with position "outside"); this variant supports `labelLine`
   * - `ReactElement`: a custom label element;
   * - `function`: a render function of custom label.
   *
   * Also see the `labelLine` prop that draws a line connecting each label to the corresponding sector.
   *
   * @defaultValue false
   * @example <Pie label={<CustomizedLabel />} />
   * @example https://recharts.github.io/examples/PieChartWithCustomizedLabel
   */
  label?: PieLabel;
  /**
   * If false set, label lines will not be drawn. If true set, label lines will be drawn which have the props calculated internally.
   * If object set, label lines will be drawn which have the props merged by the internal calculated props and the option.
   * If ReactElement set, the option can be the custom label line element.
   * If set a function, the function will be called to render customized label line.
   * @defaultValue true
   * @example <Pie labelLine={<CustomizedLabelLine />} />
   * @example https://recharts.github.io/examples/PieChartWithCustomizedLabel
   */
  labelLine?: PieLabelLine;
  /**
   * The type of icon in legend. If set to 'none', no legend item will be rendered.
   * @defaultValue rect
   */
  legendType?: LegendType;
  /** the max radius of pie */
  maxRadius?: number;
  /**
   * The minimum angle of each unzero data.
   * @defaultValue 0
   */
  minAngle?: number;
  /**
   * Name represents each sector in the tooltip, and legend.
   * This allows you to extract the name from the data:
   *
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the name.
   *
   * @defaultValue name
   */
  nameKey?: DataKey<DataPointType, DataValueType>;
  /**
   * The customized event handler of animation end.
   */
  onAnimationEnd?: () => void;
  /**
   * The customized event handler of animation start.
   */
  onAnimationStart?: () => void;
  /**
   * The tabindex of wrapper surrounding the cells.
   * @defaultValue 0
   */
  rootTabIndex?: number;
  /**
   * The custom shape of a Pie Sector.
   * Can also be used to render active sector by checking isActive.
   * If undefined, renders {@link Sector} shape.
   */
  shape?: PieShape;
  tooltipType?: TooltipType;
  /**
   * @defaultValue 100
   */
  zIndex?: number;
}
type PieSvgAttributes = Omit<
  PresentationAttributesAdaptChildEvent<any, SVGElement>,
  "ref" | keyof PieEvents
>;
type Props$b<DataPointType = any, DataValueType = any> = PieSvgAttributes &
  PieProps<DataPointType, DataValueType>;
type PieCoordinate = {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  maxRadius: number;
};
declare const Pie: {
  <DataPointType = any, DataValueType = any>(
    outsideProps: Props$b<DataPointType, DataValueType>,
  ): ReactElement;
  (outsideProps: Props$b<any, any>): ReactElement;
};

interface RadarPoint {
  x: number;
  y: number;
  cx?: number;
  cy?: number;
  angle: number;
  radius?: number;
  value?: number;
  payload?: any;
  name?: string | number;
}
interface RadarProps<DataPointType = any, DataValueType = any>
  extends ZIndexable, DataConsumer<DataPointType, DataValueType> {
  /**
   * @defaultValue true
   */
  activeDot?: ActiveDotType;
  /**
   * @defaultValue 0
   */
  angleAxisId?: string | number;
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @defaultValue 1500
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue ease
   */
  animationEasing?: AnimationTiming;
  baseLinePoints?: RadarPoint[];
  className?: string;
  connectNulls?: boolean;
  /**
   * Renders a circle element at each data point. Options:
   *
   * - `false`: no dots are drawn;
   * - `true`: renders the dots with default settings;
   * - `object`: the props of the dot. This will be merged with the internal calculated props of each dot;
   * - `ReactElement`: the custom dot element;
   * - `function`: a render function of the custom dot.
   *
   * @defaultValue false
   */
  dot?: DotType;
  /**
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * If set false, animation of polygon will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue auto
   */
  isAnimationActive?: boolean | "auto";
  isRange?: boolean;
  /**
   * Renders one label for each point. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object`: the props of LabelList component;
   * - `ReactElement`: a custom label element;
   * - `function`: a render function of custom label.
   *
   * @defaultValue false
   */
  label?: ImplicitLabelListType;
  /**
   * The type of icon in legend.  If set to 'none', no legend item will be rendered.
   * @defaultValue rect
   */
  legendType?: LegendType;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  onMouseEnter?: (
    props: InternalRadarProps,
    e: MouseEvent$1<SVGPolygonElement>,
  ) => void;
  onMouseLeave?: (
    props: InternalRadarProps,
    e: MouseEvent$1<SVGPolygonElement>,
  ) => void;
  /**
   * @defaultValue 0
   */
  radiusAxisId?: string | number;
  /**
   * If set a ReactElement, the shape of radar can be customized.
   * If set a function, the function will be called to render customized shape.
   */
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  tooltipType?: TooltipType;
  /**
   * @defaultValue 100
   */
  zIndex?: number;
}
type Props$a<DataPointType = any, DataValueType = any> = Omit<
  SVGProps<SVGGraphicsElement>,
  "onMouseEnter" | "onMouseLeave" | "points" | "ref"
> &
  RadarProps<DataPointType, DataValueType>;
type RadarComposedData = {
  points: RadarPoint[];
  baseLinePoints: RadarPoint[];
  isRange: boolean;
};
declare const defaultRadarProps: {
  readonly activeDot: true;
  readonly angleAxisId: 0;
  readonly animationBegin: 0;
  readonly animationDuration: 1500;
  readonly animationEasing: "ease";
  readonly dot: false;
  readonly hide: false;
  readonly isAnimationActive: "auto";
  readonly label: false;
  readonly legendType: "rect";
  readonly radiusAxisId: 0;
  readonly zIndex: 100;
};
type PropsWithDefaults = RequiresDefaultProps<
  Props$a,
  typeof defaultRadarProps
>;
type InternalRadarProps = WithIdRequired<PropsWithDefaults> & RadarComposedData;
/**
 * @consumes PolarChartContext
 * @provides LabelListContext
 */
declare function Radar<DataPointType = any, DataValueType = any>(
  outsideProps: Props$a<DataPointType, DataValueType>,
): React.JSX.Element;
declare namespace Radar {
  var displayName: string;
}

interface RadialBarSectorProps extends RadialBarDataItem {
  index: number;
  option: RadialBarProps["activeShape"];
  isActive: boolean;
}

type RadialBarDataItem = Props$h &
  PolarViewBoxRequired &
  TooltipTriggerInfo & {
    value?: any;
    payload?: any;
    background?: Props$h;
  };
type RadialBarBackground = boolean | (ActiveShape<Props$h> & ZIndexable);
interface InternalRadialBarProps<DataPointType = any, DataValueType = any>
  extends DataConsumer<DataPointType, DataValueType>, ZIndexable {
  activeShape?: ActiveShape<RadialBarSectorProps, SVGPathElement>;
  /**
   * @defaultValue 0
   */
  angleAxisId?: AxisId;
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 0
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @defaultValue 1500
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue ease
   */
  animationEasing?: AnimationTiming;
  /**
   * Renders a background for each bar. Options:
   *  - `false`: no background;
   *  - `true`: renders default background;
   *  - `object`: the props of background rectangle;
   *  - `ReactElement`: a custom background element;
   *  - `function`: a render function of custom background.
   *
   * @defaultValue false
   */
  background?: RadialBarBackground;
  /**
   * The width or height of each bar. If the barSize is not specified, the size of the bar will be calculated by the barCategoryGap, barGap and the quantity of bar groups.
   */
  barSize?: number;
  className?: string;
  /**
   * @defaultValue false
   */
  cornerIsExternal?: boolean;
  /**
   * @defaultValue 0
   */
  cornerRadius?: string | number;
  /**
   * Calculated radial bar sectors
   */
  sectors: ReadonlyArray<RadialBarDataItem>;
  /**
   * @defaultValue false
   */
  forceCornerRadius?: boolean;
  /**
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * If set false, animation of radial bars will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue auto
   */
  isAnimationActive?: boolean | "auto";
  /**
   * Renders one label for each data point. Options:
   * - `true`: renders default labels;
   * - `false`: no labels are rendered;
   * - `object`: the props of LabelList component;
   * - `ReactElement`: a custom label element;
   * - `function`: a render function of custom label.
   *
   * @defaultValue false
   */
  label?: ImplicitLabelListType;
  /**
   * The type of icon in legend.  If set to 'none', no legend item will be rendered.
   * @defaultValue rect
   */
  legendType?: LegendType;
  maxBarSize?: number;
  /**
   * @defaultValue 0
   */
  minPointSize?: number;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  /**
   * The customized event handler of click in this chart.
   */
  onClick?: (
    data: RadialBarDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mousedown in this chart.
   */
  onMouseDown?: (
    data: RadialBarDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mouseup in this chart.
   */
  onMouseUp?: (
    data: RadialBarDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mousemove in this chart.
   */
  onMouseMove?: (
    data: RadialBarDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mouseover in this chart.
   */
  onMouseOver?: (
    data: RadialBarDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mouseout in this chart.
   */
  onMouseOut?: (
    data: RadialBarDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mouseenter in this chart.
   */
  onMouseEnter?: (
    data: RadialBarDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mouseleave in this chart.
   */
  onMouseLeave?: (
    data: RadialBarDataItem,
    index: number,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  onTouchStart?: (
    data: RadialBarDataItem,
    index: number,
    e: React.TouchEvent<SVGGraphicsElement>,
  ) => void;
  onTouchMove?: (
    data: RadialBarDataItem,
    index: number,
    e: React.TouchEvent<SVGGraphicsElement>,
  ) => void;
  onTouchEnd?: (
    data: RadialBarDataItem,
    index: number,
    e: React.TouchEvent<SVGGraphicsElement>,
  ) => void;
  /**
   * @defaultValue 0
   */
  radiusAxisId?: AxisId;
  shape?: ActiveShape<RadialBarSectorProps, SVGPathElement>;
  stackId?: string | number;
  tooltipType?: TooltipType;
  /**
   * @defaultValue 300
   */
  zIndex?: number;
}
type RadialBarProps<DataPointType = any, DataValueType = any> = Omit<
  PresentationAttributesAdaptChildEvent<RadialBarDataItem, SVGElement>,
  "ref" | keyof InternalRadialBarProps<DataPointType, DataValueType>
> &
  Omit<InternalRadialBarProps<DataPointType, DataValueType>, "sectors">;
/**
 * @consumes PolarChartContext
 * @provides LabelListContext
 * @provides CellReader
 */
declare function RadialBar<DataPointType = any, DataValueType = any>(
  outsideProps: RadialBarProps<DataPointType, DataValueType>,
): React.JSX.Element;
declare namespace RadialBar {
  var displayName: string;
}

type BrushTravellerType =
  | ReactElement<SVGElement>
  | ((props: TravellerProps) => ReactElement<SVGElement>);
type BrushTickFormatter = (value: any, index: number) => number | string;
interface BrushProps<
  DataPointType = any,
  DataValueType = any,
> extends DataConsumer<DataPointType, DataValueType> {
  /**
   * The x-coordinate of brush.
   * If left undefined, it will be computed from the chart's offset and margins.
   */
  x?: number;
  /**
   * The y-coordinate of brush.
   * If left undefined, it will be computed from the chart's offset and margins.
   */
  y?: number;
  dy?: number;
  /**
   * Width of the brush in pixels.
   * If undefined, defaults to the chart width.
   */
  width?: number;
  className?: string;
  ariaLabel?: string;
  /**
   * Height of the brush in pixels.
   *
   * @defaultValue 40
   */
  height?: number;
  /**
   * The width of each traveller.
   *
   * @defaultValue 5
   */
  travellerWidth?: number;
  traveller?: BrushTravellerType;
  /**
   * Number of data points to skip between chart refreshes.
   *
   * @defaultValue 1
   */
  gap?: number;
  padding?: Padding;
  /**
   * The default start index of brush.
   * If the option is not set, the start index will be 0.
   */
  startIndex?: number;
  /**
   * The default end index of brush.
   * If the option is not set, the end index will be calculated by the length of data.
   */
  endIndex?: number;
  /**
   * The formatter function of ticks.
   */
  tickFormatter?: BrushTickFormatter;
  children?: ReactElement;
  /**
   * The handler of changing the active scope of brush.
   */
  onChange?: OnBrushUpdate;
  onDragEnd?: OnBrushUpdate;
  /**
   * @defaultValue 1000
   */
  leaveTimeOut?: number;
  /**
   * @defaultValue false
   */
  alwaysShowText?: boolean;
}
type Props$9 = Omit<SVGProps<SVGElement>, "onChange" | "onDragEnd" | "ref"> &
  BrushProps;
type TravellerProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  stroke?: SVGAttributes<SVGElement>["stroke"];
};
/**
 * Renders a scrollbar that allows the user to zoom and pan in the chart along its XAxis.
 * It also allows you to render a small overview of the chart inside the brush that is always visible
 * and shows the full data set so that the user can see where they are zoomed in.
 *
 * If a chart is synchronized with other charts using the `syncId` prop on the chart,
 * the brush will also synchronize the zooming and panning between all synchronized charts.
 *
 * @see {@link https://recharts.github.io/en-US/examples/BrushBarChart/ BarChart with Brush}
 * @see {@link https://recharts.github.io/en-US/examples/SynchronizedLineChart/ Synchronized Brush}
 *
 * @consumes CartesianChartContext
 */
declare function Brush(outsideProps: Props$9): React.JSX.Element;
declare namespace Brush {
  var displayName: string;
}

type ReferenceCoordinateValue$1 = number | string;
interface ReferenceDotProps<
  XValueType extends ReferenceCoordinateValue$1 = any,
  YValueType extends ReferenceCoordinateValue$1 = any,
>
  extends Overflowable, ZIndexable {
  /**
   * The radius of the dot in pixels.
   *
   * @defaultValue 10
   */
  r?: number;
  /**
   * The x-coordinate of the center of the dot.
   *
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceDot will internally calculate the correct pixel position.
   *
   * @example <ReferenceDot x="January" y="2026" />
   */
  x?: XValueType;
  /**
   * The y-coordinate of the center of the dot.
   *
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceDot will internally calculate the correct pixel position.
   *
   * @example <ReferenceDot x="January" y="2026" />
   */
  y?: YValueType;
  className?: number | string;
  /**
   * The id of y-axis which is corresponding to the data.
   * Required when there are multiple YAxes.
   *
   * @defaultValue 0
   */
  yAxisId?: number | string;
  /**
   * The id of x-axis which is corresponding to the data.
   * Required when there are multiple XAxes.
   *
   * @defaultValue 0
   */
  xAxisId?: number | string;
  /**
   * If set a ReactElement, the shape of dot can be customized.
   * If set a function, the function will be called to render customized shape.
   */
  shape?:
    | ReactElement<SVGElement>
    | ((props: Props$D) => ReactElement<SVGElement>);
  /**
   * Renders a single label.
   *
   * - `false`: no labels are rendered
   * - `string` | `number`: the content of the label
   * - `object`: the props of LabelList component
   * - `ReactElement`: a custom label element
   * - `function`: a render function of custom label
   *
   * @defaultValue false
   */
  label?: ImplicitLabelType;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 600
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  /**
   * The customized event handler of click in this chart.
   */
  onClick?: (dotProps: Props$D, e: React.MouseEvent<SVGCircleElement>) => void;
  /**
   * The customized event handler of mousedown in this chart.
   */
  onMouseDown?: (
    dotProps: Props$D,
    e: React.MouseEvent<SVGCircleElement>,
  ) => void;
  /**
   * The customized event handler of mouseup in this chart.
   */
  onMouseUp?: (
    dotProps: Props$D,
    e: React.MouseEvent<SVGCircleElement>,
  ) => void;
  /**
   * The customized event handler of mouseover in this chart.
   */
  onMouseOver?: (
    dotProps: Props$D,
    e: React.MouseEvent<SVGCircleElement>,
  ) => void;
  /**
   * The customized event handler of mouseout in this chart.
   */
  onMouseOut?: (
    dotProps: Props$D,
    e: React.MouseEvent<SVGCircleElement>,
  ) => void;
  /**
   * The customized event handler of mouseenter in this chart.
   */
  onMouseEnter?: (
    dotProps: Props$D,
    e: React.MouseEvent<SVGCircleElement>,
  ) => void;
  /**
   * The customized event handler of mousemove in this chart.
   */
  onMouseMove?: (
    dotProps: Props$D,
    e: React.MouseEvent<SVGCircleElement>,
  ) => void;
  /**
   * The customized event handler of mouseleave in this chart.
   */
  onMouseLeave?: (
    dotProps: Props$D,
    e: React.MouseEvent<SVGCircleElement>,
  ) => void;
}
type Props$8<
  XValueType extends ReferenceCoordinateValue$1 = any,
  YValueType extends ReferenceCoordinateValue$1 = any,
> = Omit<Props$D, "cx" | "cy" | "clipDot" | "dangerouslySetInnerHTML"> &
  ReferenceDotProps<XValueType, YValueType>;
/**
 * Draws a circle on the chart to highlight a specific point.
 *
 * This component, unlike {@link Dot} or {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/circle circle}, is aware of the cartesian coordinate system,
 * so you specify its center by using data coordinates instead of pixels.
 *
 * ReferenceDot will calculate the pixels based on the provided data coordinates.
 *
 * If you prefer to render dots using pixels rather than data coordinates,
 * consider using the {@link Dot} component instead.
 *
 * @provides CartesianLabelContext
 * @consumes CartesianChartContext
 */
declare function ReferenceDot<
  XValueType extends ReferenceCoordinateValue$1 = any,
  YValueType extends ReferenceCoordinateValue$1 = any,
>(outsideProps: Props$8<XValueType, YValueType>): React.JSX.Element;
declare namespace ReferenceDot {
  var displayName: string;
}

declare const EventKeys: readonly [
  "dangerouslySetInnerHTML",
  "onCopy",
  "onCopyCapture",
  "onCut",
  "onCutCapture",
  "onPaste",
  "onPasteCapture",
  "onCompositionEnd",
  "onCompositionEndCapture",
  "onCompositionStart",
  "onCompositionStartCapture",
  "onCompositionUpdate",
  "onCompositionUpdateCapture",
  "onFocus",
  "onFocusCapture",
  "onBlur",
  "onBlurCapture",
  "onChange",
  "onChangeCapture",
  "onBeforeInput",
  "onBeforeInputCapture",
  "onInput",
  "onInputCapture",
  "onReset",
  "onResetCapture",
  "onSubmit",
  "onSubmitCapture",
  "onInvalid",
  "onInvalidCapture",
  "onLoad",
  "onLoadCapture",
  "onError",
  "onErrorCapture",
  "onKeyDown",
  "onKeyDownCapture",
  "onKeyPress",
  "onKeyPressCapture",
  "onKeyUp",
  "onKeyUpCapture",
  "onAbort",
  "onAbortCapture",
  "onCanPlay",
  "onCanPlayCapture",
  "onCanPlayThrough",
  "onCanPlayThroughCapture",
  "onDurationChange",
  "onDurationChangeCapture",
  "onEmptied",
  "onEmptiedCapture",
  "onEncrypted",
  "onEncryptedCapture",
  "onEnded",
  "onEndedCapture",
  "onLoadedData",
  "onLoadedDataCapture",
  "onLoadedMetadata",
  "onLoadedMetadataCapture",
  "onLoadStart",
  "onLoadStartCapture",
  "onPause",
  "onPauseCapture",
  "onPlay",
  "onPlayCapture",
  "onPlaying",
  "onPlayingCapture",
  "onProgress",
  "onProgressCapture",
  "onRateChange",
  "onRateChangeCapture",
  "onSeeked",
  "onSeekedCapture",
  "onSeeking",
  "onSeekingCapture",
  "onStalled",
  "onStalledCapture",
  "onSuspend",
  "onSuspendCapture",
  "onTimeUpdate",
  "onTimeUpdateCapture",
  "onVolumeChange",
  "onVolumeChangeCapture",
  "onWaiting",
  "onWaitingCapture",
  "onAuxClick",
  "onAuxClickCapture",
  "onClick",
  "onClickCapture",
  "onContextMenu",
  "onContextMenuCapture",
  "onDoubleClick",
  "onDoubleClickCapture",
  "onDrag",
  "onDragCapture",
  "onDragEnd",
  "onDragEndCapture",
  "onDragEnter",
  "onDragEnterCapture",
  "onDragExit",
  "onDragExitCapture",
  "onDragLeave",
  "onDragLeaveCapture",
  "onDragOver",
  "onDragOverCapture",
  "onDragStart",
  "onDragStartCapture",
  "onDrop",
  "onDropCapture",
  "onMouseDown",
  "onMouseDownCapture",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseMoveCapture",
  "onMouseOut",
  "onMouseOutCapture",
  "onMouseOver",
  "onMouseOverCapture",
  "onMouseUp",
  "onMouseUpCapture",
  "onSelect",
  "onSelectCapture",
  "onTouchCancel",
  "onTouchCancelCapture",
  "onTouchEnd",
  "onTouchEndCapture",
  "onTouchMove",
  "onTouchMoveCapture",
  "onTouchStart",
  "onTouchStartCapture",
  "onPointerDown",
  "onPointerDownCapture",
  "onPointerMove",
  "onPointerMoveCapture",
  "onPointerUp",
  "onPointerUpCapture",
  "onPointerCancel",
  "onPointerCancelCapture",
  "onPointerEnter",
  "onPointerEnterCapture",
  "onPointerLeave",
  "onPointerLeaveCapture",
  "onPointerOver",
  "onPointerOverCapture",
  "onPointerOut",
  "onPointerOutCapture",
  "onGotPointerCapture",
  "onGotPointerCaptureCapture",
  "onLostPointerCapture",
  "onLostPointerCaptureCapture",
  "onScroll",
  "onScrollCapture",
  "onWheel",
  "onWheelCapture",
  "onAnimationStart",
  "onAnimationStartCapture",
  "onAnimationEnd",
  "onAnimationEndCapture",
  "onAnimationIteration",
  "onAnimationIterationCapture",
  "onTransitionEnd",
  "onTransitionEndCapture",
];
type EventKeysType = (typeof EventKeys)[number];

type SVGElementPropsAndEventsType =
  | SVGElementPropKeysType
  | EventKeysType
  | DataAttributeKeyType;
type SVGPropsAndEvents<T> = Pick<
  T,
  Extract<keyof T, SVGElementPropsAndEventsType>
>;

type ReferenceCoordinateValue = number | string;
interface ReferenceAreaProps<
  XValueType extends ReferenceCoordinateValue = any,
  YValueType extends ReferenceCoordinateValue = any,
>
  extends Overflowable, ZIndexable {
  /**
   * Starting X-coordinate of the area.
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceArea will internally calculate the correct pixel position.
   *
   * If undefined then the area will extend to the left edge of the chart plot area.
   *
   * @example <ReferenceArea x1="Monday" x2="Friday" />
   * @example <ReferenceArea x1={10} x2={50} />
   * @example <ReferenceArea x1="Page C" />
   */
  x1?: XValueType;
  /**
   * Ending X-coordinate of the area.
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceArea will internally calculate the correct pixel position.
   *
   * If undefined then the area will extend to the right edge of the chart plot area.
   *
   * @example <ReferenceArea x1="Monday" x2="Friday" />
   * @example <ReferenceArea x1={10} x2={50} />
   * @example <ReferenceArea x2="Page C" />
   */
  x2?: XValueType;
  /**
   * Starting Y-coordinate of the area.
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceArea will internally calculate the correct pixel position.
   *
   * If undefined then the area will extend to the top edge of the chart plot area.
   *
   * @example <ReferenceArea y1={100} y2={500} />
   * @example <ReferenceArea y1="low" y2="high" />
   * @example <ReferenceArea y1={200} />
   */
  y1?: YValueType;
  /**
   * Ending Y-coordinate of the area.
   * This value is using your chart's domain, so you will provide a data value instead of a pixel value.
   * ReferenceArea will internally calculate the correct pixel position.
   *
   * If undefined then the area will extend to the bottom edge of the chart plot area.
   *
   * @example <ReferenceArea y1={100} y2={500} />
   * @example <ReferenceArea y1="low" y2="high" />
   * @example <ReferenceArea y2={400} />
   */
  y2?: YValueType;
  className?: number | string;
  /**
   * The id of YAxis which is corresponding to the data. Required when there are multiple YAxes.
   * @defaultValue 0
   */
  yAxisId?: number | string;
  /**
   * The id of XAxis which is corresponding to the data. Required when there are multiple XAxes.
   * @defaultValue 0
   */
  xAxisId?: number | string;
  /**
   * If set a ReactElement, the shape of the reference area can be customized.
   * If set a function, the function will be called to render customized shape.
   */
  shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
  /**
   * Renders a single label.
   *
   * - `false`: no labels are rendered
   * - `string` | `number`: the content of the label
   * - `object`: the props of LabelList component
   * - `ReactElement`: a custom label element
   * - `function`: a render function of custom label
   *
   * @defaultValue false
   *
   * @see {@link https://recharts.github.io/en-US/examples/LineChartWithReferenceLines/ Reference elements with a label}
   */
  label?: ImplicitLabelType;
  /**
   * Z-Index of this component and its children. The higher the value,
   * the more on top it will be rendered.
   * Components with higher zIndex will appear in front of components with lower zIndex.
   * If undefined or 0, the content is rendered in the default layer without portals.
   *
   * @since 3.4
   * @defaultValue 100
   * @see {@link https://recharts.github.io/en-US/guide/zIndex/ Z-Index and layers guide}
   */
  zIndex?: number;
  children?: React.ReactNode;
}
type Props$7<
  XValueType extends ReferenceCoordinateValue = any,
  YValueType extends ReferenceCoordinateValue = any,
> = Omit<SVGPropsAndEvents<Props$t>, "width" | "height" | "x" | "y"> &
  ReferenceAreaProps<XValueType, YValueType>;
/**
 * Draws a rectangular area on the chart to highlight a specific range.
 *
 * This component, unlike {@link Rectangle} or {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/rect rect}, is aware of the cartesian coordinate system,
 * so you specify the area by using data coordinates instead of pixels.
 *
 * ReferenceArea will calculate the pixels based on the provided data coordinates.
 *
 * If you prefer to render rectangles using pixels rather than data coordinates,
 * consider using the {@link Rectangle} component instead.
 *
 * @provides CartesianLabelContext
 * @consumes CartesianChartContext
 */
declare function ReferenceArea<
  XValueType extends ReferenceCoordinateValue = any,
  YValueType extends ReferenceCoordinateValue = any,
>(outsideProps: Props$7<XValueType, YValueType>): React.JSX.Element;
declare namespace ReferenceArea {
  var displayName: string;
}

type BarStackProps = {
  /**
   * When two Bars have the same axisId and same stackId, then the two Bars are stacked in the chart.
   * This prop sets the stack ID for all Bar components inside this BarStack component.
   * If undefined, a unique id will be generated automatically.
   *
   * When both BarStack and individual Bar components have stackId defined,
   * the BarStack's stackId wins, and the individual Bar's stackId is ignored.
   */
  stackId?: StackId;
  /**
   * Radius applies only once to all bars inside of this stack group,
   * as if they were one huge bar.
   * Meaning that if you have three bars stacked together, and you set
   * radius to 10, only the outer corners of the entire stack will be rounded: the middle bars will have square corners.
   *
   * Unless! The edge bars are smaller than the radius value, in which case the bars at the edge get a lot of radius
   * and the middle one gets a little bit of radius.
   *
   * You may want to combine this with setting individual Bar components' radius to their own values for best effect.
   * `Bar.radius` prop will round corners of individual bars, while `BarStack.radius` will round corners of the entire stack.
   *
   * If you provide a single number, it applies to all four corners.
   * If you provide an array of four numbers, they apply to top-left, top-right, bottom-right, bottom-left corners respectively.
   *
   * @defaultValue 0
   */
  radius?: RectRadius;
  children?: ReactNode;
};
/**
 * @provides BarStackContext
 * @since 3.6
 */
declare const BarStack: ComponentType<BarStackProps>;

interface XAxisProps<DataPointType = any, DataValueType = any> extends Omit<
  RenderableAxisProps<DataPointType, DataValueType>,
  "domain" | "scale" | "tick"
> {
  /**
   * The type of axis.
   *
   * `category`: Treats data as distinct values.
   * Each value is in the same distance from its neighbors, regardless of their actual numeric difference.
   *
   * `number`: Treats data as continuous range.
   * Values that are numerically closer are placed closer together on the axis.
   *
   * `auto`: the type is inferred based on the chart layout.
   *
   * @defaultValue category
   */
  type?: AxisDomainTypeInput;
  /**
   * Unique ID that represents this XAxis.
   * Required when there are multiple XAxes.
   *
   * @defaultValue 0
   */
  xAxisId?: string | number;
  /**
   * Height of the axis in pixels.
   *
   * @defaultValue 30
   */
  height?: number;
  /**
   * If set true, flips ticks around the axis line, displaying the labels inside the chart instead of outside.
   * @defaultValue false
   */
  mirror?: boolean;
  /**
   * The orientation of axis
   * @defaultValue bottom
   */
  orientation?: XAxisOrientation;
  /**
   * Specify the domain of axis when the axis is a number axis.
   *
   * If undefined, then the domain is calculated based on the data and dataKeys.
   *
   * The length of domain should be 2, and we will validate the values in domain.
   *
   * Each element in the array can be a number, 'auto', 'dataMin', 'dataMax', a string like 'dataMin - 20', 'dataMax + 100',
   * or a function that accepts a single argument and returns a number.
   *
   * If any element of domain is set to be 'auto', comprehensible scale ticks will be calculated, and the final domain of axis is generated by the ticks.
   * If a function, receives '[dataMin, dataMax]', and must return a computed domain as '[min, max]'.
   *
   * @example <XAxis type="number" domain={['dataMin', 'dataMax']} />
   * @example <XAxis type="number" domain={[0, 'dataMax']} />
   * @example <XAxis type="number" domain={['auto', 'auto']} />
   * @example <XAxis type="number" domain={[0, 'dataMax + 1000']} />
   * @example <XAxis type="number" domain={['dataMin - 100', 'dataMax + 100']} />
   * @example <XAxis type="number" domain={[dataMin => (0 - Math.abs(dataMin)), dataMax => (dataMax * 2)]} />
   * @example <XAxis type="number" domain={([dataMin, dataMax]) => { const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax)); return [-absMax, absMax]; }} />
   * @example <XAxis type="number" domain={[0, 100]} allowDataOverflow />
   */
  domain?: AxisDomain;
  /**
   * Scale function determines how data values are mapped to visual values.
   * In other words, decided the mapping between data domain and coordinate range.
   *
   * If undefined, or 'auto', the scale function is created internally according to the type of axis and data.
   *
   * You can define a custom scale, either as a string shortcut to a d3 scale, or as a complete scale definition object.
   *
   * @defaultValue auto
   * @example <XAxis scale="log" />
   * @example
   * import { scaleLog } from 'd3-scale';
   * const scale = scaleLog().base(Math.E);
   * <XAxis scale={scale} />
   */
  scale?:
    | ScaleType
    | CustomScaleDefinition
    | CustomScaleDefinition<string>
    | CustomScaleDefinition<number>
    | CustomScaleDefinition<Date>;
  /**
   * Defines how the individual label text is rendered.
   * This controls the settings for individual ticks; on a typical axis, there are multiple ticks, depending on your data.
   *
   * If you want to customize the overall axis label, use the `label` prop instead.
   *
   * Options:
   * - `false`: Do not render any tick labels.
   * - `true`: Render tick labels with default settings.
   * - `object`: An object of props to be merged into the internally calculated tick props.
   * - `ReactElement`: A custom React element to be used as the tick label.
   * - `function`: A function that returns a React element for custom rendering of tick labels.
   *
   * @defaultValue true
   */
  tick?: TickProp<XAxisTickContentProps>;
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   *
   * @see {@link https://recharts.github.io/guide/axisTicks/}
   */
  ticks?: ReadonlyArray<AxisTick>;
  /**
   * Axis padding is the distance between the edge of plot area and the first/last tick.
   *
   * @defaultValue {"left":0,"right":0}
   */
  padding?: XAxisPadding;
  /**
   * The minimum gap between two adjacent tick labels
   *
   * @defaultValue 5
   */
  minTickGap?: number;
  /**
   * If set 0, all the ticks will be shown. If set preserveStart", "preserveEnd" or "preserveStartEnd", the ticks which is to be shown or hidden will be calculated automatically.
   * @defaultValue preserveEnd
   */
  interval?: AxisInterval;
  /**
   * The margin between tick line and tick.
   */
  tickMargin?: number;
  /**
   * Specifies the font size of tick text.
   * If this prop is not specified, Recharts will read the default tick size from the DOM.
   *
   * Font size is used to calculate the width of the ticks, which in turn is used to determine how many ticks are rendered without overlapping.
   */
  fontSize?: number | string;
  /**
   * Specifies the letter spacing of ticks.
   * This is used in conjunction with fontSize to calculate the width of the ticks.
   * If this prop is not specified, Recharts will read the default letter spacing from the DOM.
   *
   * Letter spacing is used to calculate the width of the ticks, which in turn is used to determine how many ticks are rendered without overlapping.
   */
  letterSpacing?: number | string;
  /**
   * Controls how Recharts calculates "nice" tick values for this axis.
   * Options: `'none'`, `'auto'`, `'adaptive'`, `'snap125'`.
   * See {@link NiceTicksAlgorithm} for a full description of each option.
   *
   * @see {@link https://recharts.github.io/guide/axisTicks/}
   * @defaultValue 'auto'
   * @since 3.8
   */
  niceTicks?: NiceTicksAlgorithm;
}
type Props$6<DataPointType = any, DataValueType = any> = Omit<
  PresentationAttributesAdaptChildEvent<TickItem, SVGTextElement>,
  "scale" | "ref"
> &
  XAxisProps<DataPointType, DataValueType>;
/**
 * @consumes CartesianViewBoxContext
 * @provides CartesianLabelContext
 */
declare const XAxis: <DataPointType = any, DataValueType = any>(
  props: Props$6<DataPointType, DataValueType>,
) => ReactElement;

interface YAxisProps<DataPointType = any, DataValueType = any> extends Omit<
  RenderableAxisProps<DataPointType, DataValueType>,
  "axisLine" | "domain" | "scale" | "tick"
> {
  /**
   * Determines how the axis line is drawn. Options:
   * - `true`: the axis line is drawn with default props;
   * - `false`: the axis line is not visible;
   * - `object`: passed as props to SVG `<line>` element representing the axis line.
   *
   * @example <YAxis axisLine={false} />
   * @example <YAxis axisLine={{ stroke: 'red', strokeWidth: 2 }} />
   * @defaultValue true
   */
  axisLine?: boolean | SVGProps<SVGLineElement>;
  /**
   * The type of axis.
   *
   * `category`: Treats data as distinct values.
   * Each value is in the same distance from its neighbors, regardless of their actual numeric difference.
   *
   * `number`: Treats data as continuous range.
   * Values that are numerically closer are placed closer together on the axis.
   *
   * `auto`: the type is inferred based on the chart layout.
   *
   * @defaultValue number
   */
  type?: AxisDomainTypeInput;
  /**
   * Specify the domain of axis when the axis is a number axis.
   *
   * If undefined, then the domain is calculated based on the data and dataKeys.
   *
   * The length of domain should be 2, and we will validate the values in domain.
   *
   * Each element in the array can be a number, 'auto', 'dataMin', 'dataMax', a string like 'dataMin - 20', 'dataMax + 100',
   * or a function that accepts a single argument and returns a number.
   *
   * If any element of domain is set to be 'auto', comprehensible scale ticks will be calculated, and the final domain of axis is generated by the ticks.
   * If a function, receives '[dataMin, dataMax]', and must return a computed domain as '[min, max]'.
   *
   * @example <YAxis type="number" domain={['dataMin', 'dataMax']} />
   * @example <YAxis type="number" domain={[0, 'dataMax']} />
   * @example <YAxis type="number" domain={['auto', 'auto']} />
   * @example <YAxis type="number" domain={[0, 'dataMax + 1000']} />
   * @example <YAxis type="number" domain={['dataMin - 100', 'dataMax + 100']} />
   * @example <YAxis type="number" domain={[dataMin => (0 - Math.abs(dataMin)), dataMax => (dataMax * 2)]} />
   * @example <YAxis type="number" domain={([dataMin, dataMax]) => { const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax)); return [-absMax, absMax]; }} />
   * @example <YAxis type="number" domain={[0, 100]} allowDataOverflow />
   */
  domain?: AxisDomain;
  /**
   * Scale function determines how data values are mapped to visual values.
   * In other words, decided the mapping between data domain and coordinate range.
   *
   * If undefined, or 'auto', the scale function is created internally according to the type of axis and data.
   *
   * You can define a custom scale, either as a string shortcut to a d3 scale, or as a complete scale definition object.
   *
   * @defaultValue auto
   * @example <YAxis scale="log" />
   * @example
   * import { scaleLog } from 'd3-scale';
   * const scale = scaleLog().base(Math.E);
   * <YAxis scale={scale} />
   */
  scale?:
    | ScaleType
    | CustomScaleDefinition
    | CustomScaleDefinition<string>
    | CustomScaleDefinition<number>
    | CustomScaleDefinition<Date>;
  /**
   * Unique ID that represents this YAxis.
   * Required when there are multiple YAxes.
   *
   * @defaultValue 0
   */
  yAxisId?: string | number;
  /**
   * Defines how the individual label text is rendered.
   * This controls the settings for individual ticks; on a typical axis, there are multiple ticks, depending on your data.
   *
   * If you want to customize the overall axis label, use the `label` prop instead.
   *
   * Options:
   * - `false`: Do not render any tick labels.
   * - `true`: Render tick labels with default settings.
   * - `object`: An object of props to be merged into the internally calculated tick props.
   * - `ReactElement`: A custom React element to be used as the tick label.
   * - `function`: A function that returns a React element for custom rendering of tick labels.
   *
   * @defaultValue true
   */
  tick?: TickProp<YAxisTickContentProps>;
  /**
   * Ticks can be any type when the axis is the type of category
   * Ticks must be numbers when the axis is the type of number
   *
   * @see {@link https://recharts.github.io/guide/axisTicks/}
   */
  ticks?: ReadonlyArray<AxisTick>;
  /**
   * Width of the axis in pixels.
   * `auto` will attempt to resize the axis based on its content.
   *
   * @defaultValue 60
   */
  width?: YAxisWidth;
  /**
   * If set true, flips ticks around the axis line, displaying the labels inside the chart instead of outside.
   * @defaultValue false
   */
  mirror?: boolean;
  /**
   * The orientation of axis.
   * @defaultValue left
   */
  orientation?: YAxisOrientation;
  /**
   * Axis padding is the distance between the edge of plot area and the first/last tick.
   *
   * @defaultValue {"top":0,"bottom":0}
   */
  padding?: YAxisPadding;
  /**
   * The minimum gap between two adjacent tick labels
   *
   * @defaultValue 5
   */
  minTickGap?: number;
  /**
   * If set 0, all the ticks will be shown. If set "preserveStart", "preserveEnd" or "preserveStartEnd",
   * the ticks which is to be shown or hidden will be calculated automatically.
   *
   * @defaultValue preserveEnd
   */
  interval?: AxisInterval;
  /**
   * The margin between tick line and tick.
   */
  tickMargin?: number;
  /**
   * Specifies the font size of tick text.
   * If this prop is not specified, Recharts will read the default tick size from the DOM.
   *
   * Font size is used to calculate the width of the ticks, which in turn is used to determine how many ticks are rendered without overlapping.
   */
  fontSize?: number | string;
  /**
   * Specifies the letter spacing of ticks.
   * This is used in conjunction with fontSize to calculate the width of the ticks.
   * If this prop is not specified, Recharts will read the default letter spacing from the DOM.
   *
   * Letter spacing is used to calculate the width of the ticks, which in turn is used to determine how many ticks are rendered without overlapping.
   */
  letterSpacing?: number | string;
  /**
   * Controls how Recharts calculates "nice" tick values for this axis.
   * Options: `'none'`, `'auto'`, `'adaptive'`, `'snap125'`.
   * See {@link NiceTicksAlgorithm} for a full description of each option.
   *
   * @see {@link https://recharts.github.io/guide/axisTicks/}
   * @defaultValue 'auto'
   * @since 3.8
   */
  niceTicks?: NiceTicksAlgorithm;
}
type Props$5<DataPointType = any, DataValueType = any> = Omit<
  PresentationAttributesAdaptChildEvent<TickItem, SVGTextElement>,
  "scale" | "ref"
> &
  YAxisProps<DataPointType, DataValueType>;
/**
 * @consumes CartesianViewBoxContext
 * @provides CartesianLabelContext
 */
declare const YAxis: <DataPointType = any, DataValueType = any>(
  props: Props$5<DataPointType, DataValueType>,
) => ReactElement;

interface Props$4<DataPointType = any, DataValueType = any> extends Omit<
  BaseAxisProps<DataPointType, DataValueType>,
  "domain"
> {
  /**
   * The type of axis.
   *
   * `category`: Treats data as distinct values.
   * Each value is in the same distance from its neighbors, regardless of their actual numeric difference.
   *
   * `number`: Treats data as continuous range.
   * Values that are numerically closer are placed closer together on the axis.
   *
   * @defaultValue number
   */
  type?: "number" | "category";
  /**
   * The unique id of z-axis.
   *
   * @defaultValue 0
   */
  zAxisId?: AxisId;
  /**
   * The range of axis.
   * Unlike other axes, the range of z-axis is not informed by chart dimensions.
   *
   * @defaultValue [64,64]
   */
  range?: AxisRange;
  /**
   * Specify the domain of axis when the axis is a number axis.
   *
   * If undefined, then the domain is calculated based on the data and dataKeys.
   *
   * The length of domain should be 2, and we will validate the values in domain.
   *
   * Each element in the array can be a number, 'auto', 'dataMin', 'dataMax', a string like 'dataMin - 20', 'dataMax + 100',
   * or a function that accepts a single argument and returns a number.
   *
   * If any element of domain is set to be 'auto', comprehensible scale ticks will be calculated, and the final domain of axis is generated by the ticks.
   * If a function, receives '[dataMin, dataMax]', and must return a computed domain as '[min, max]'.
   *
   * @example <ZAxis type="number" domain={['dataMin', 'dataMax']} />
   * @example <ZAxis type="number" domain={[0, 'dataMax']} />
   * @example <ZAxis type="number" domain={['auto', 'auto']} />
   * @example <ZAxis type="number" domain={[0, 'dataMax + 1000']} />
   * @example <ZAxis type="number" domain={['dataMin - 100', 'dataMax + 100']} />
   * @example <ZAxis type="number" domain={[dataMin => (0 - Math.abs(dataMin)), dataMax => (dataMax * 2)]} />
   * @example <ZAxis type="number" domain={([dataMin, dataMax]) => { const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax)); return [-absMax, absMax]; }} />
   * @example <ZAxis type="number" domain={[0, 100]} allowDataOverflow />
   */
  domain?: AxisDomain;
  /**
   * Scale function determines how data values are mapped to visual values.
   * In other words, decided the mapping between data domain and coordinate range.
   *
   * If undefined, or 'auto', the scale function is created internally according to the type of axis and data.
   *
   * You can define a custom scale, either as a string shortcut to a d3 scale, or as a complete scale definition object.
   *
   * @defaultValue auto
   * @example <ZAxis scale="log" />
   * @example
   * import { scaleLog } from 'd3-scale';
   * const scale = scaleLog().base(Math.E);
   * <ZAxis scale={scale} />
   */
  scale?:
    | ScaleType
    | CustomScaleDefinition
    | CustomScaleDefinition<string>
    | CustomScaleDefinition<number>
    | CustomScaleDefinition<Date>;
}
/**
 * Virtual axis, does not render anything itself. Has no ticks, grid lines, or labels.
 * Useful for dynamically setting Scatter point size, based on data.
 *
 * @consumes CartesianViewBoxContext
 */
declare function ZAxis<DataPointType = any, DataValueType = any>(
  outsideProps: Props$4<DataPointType, DataValueType>,
): React.JSX.Element;
declare namespace ZAxis {
  var displayName: string;
}

/**
 * @consumes ResponsiveContainerContext
 * @provides CartesianViewBoxContext
 * @provides CartesianChartContext
 */
declare const LineChart: <DataPointType = any>(
  props: CartesianChartProps<DataPointType> & {
    ref?: React.Ref<SVGSVGElement>;
  },
) => React.ReactElement;

/**
 * @consumes ResponsiveContainerContext
 * @provides CartesianViewBoxContext
 * @provides CartesianChartContext
 */
declare const BarChart: <DataPointType = any>(
  props: CartesianChartProps<DataPointType> & {
    ref?: React.Ref<SVGSVGElement>;
  },
) => React.ReactElement;

/**
 * @consumes ResponsiveContainerContext
 * @provides PolarViewBoxContext
 * @provides PolarChartContext
 */
declare const PieChart: <DataPointType = any>(
  props: PolarChartProps<DataPointType> & {
    ref?: React.Ref<SVGSVGElement>;
  },
) => React.ReactElement;

/**
 * This is what end users defines as `data` on Treemap.
 */
interface TreemapDataType {
  children?: ReadonlyArray<TreemapDataType>;
  [key: string]: unknown;
}
/**
 * This is what is returned from `squarify`, the final treemap data structure
 * that gets rendered and is stored in
 */
interface TreemapNode {
  children: ReadonlyArray<TreemapNode> | null;
  value: number;
  depth: number;
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  tooltipIndex: TooltipIndex;
  root?: TreemapNode;
  [k: string]: unknown;
}
type TreemapContentType =
  | ReactNode
  | ((props: TreemapNode) => React.ReactElement);
interface Props$3<
  DataPointType extends TreemapDataType = TreemapDataType,
  DataValueType = any,
>
  extends DataConsumer<DataPointType, DataValueType>, EventThrottlingProps {
  /**
   * The width of chart container.
   * Can be a number or a percent string like "100%".
   */
  width?: number | Percent;
  /**
   * The height of chart container.
   * Can be a number or a percent string like "100%".
   */
  height?: number | Percent;
  /**
   * The source data. Each element should be an object.
   * The properties of each object represent the values of different data dimensions.
   *
   * Use the `dataKey` prop to specify which properties to use.
   *
   * If the `children` property is present on an element, it will be treated as a nested treemap.
   */
  data?: ReadonlyArray<DataPointType>;
  /**
   * @deprecated unused prop, doesn't do anything, use `key` instead
   */
  animationId?: number;
  style?: React.CSSProperties;
  /**
   * The treemap will try to keep every single rectangle's aspect ratio near the aspectRatio given.
   * @default 1.618033988749895
   */
  aspectRatio?: number;
  /**
   * If set to a React element, the option is the customized React element of rendering the content.
   * If set to a function, the function will be called to render the content.
   */
  content?: TreemapContentType;
  fill?: string;
  stroke?: string;
  className?: string;
  /**
   * Name represents each sector in the tooltip.
   * This allows you to extract the name from the data:
   *
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the name.
   *
   * @defaultValue 'name'
   */
  nameKey?: DataKey<DataPointType, DataValueType>;
  /**
   * Decides how to extract the value of this Treemap from the data:
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the value of this Treemap.
   *
   * @defaultValue 'value'
   */
  dataKey?: DataKey<DataPointType, DataValueType>;
  children?: ReactNode;
  /**
   * The type of treemap to render.
   *
   * - 'flat': Renders the entire treemap at once, with all leaf nodes visible.
   * - 'nest': Renders an interactive, nested treemap. Clicking on a parent node will "zoom in" to show its children,
   *   and a breadcrumb navigation will be displayed to allow navigating back up the hierarchy.
   *
   * @default 'flat'
   */
  type?: "flat" | "nest";
  colorPanel?: ReadonlyArray<string>;
  nestIndexContent?:
    | React.ReactElement
    | ((item: TreemapNode, i: number) => ReactNode);
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;
  onMouseEnter?: (
    node: TreemapNode,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  onMouseLeave?: (
    node: TreemapNode,
    e: React.MouseEvent<SVGGraphicsElement>,
  ) => void;
  onClick?: (node: TreemapNode) => void;
  /**
   * If set false, animation of treemap will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @default 'auto'
   */
  isAnimationActive?: boolean | "auto";
  isUpdateAnimationActive?: boolean | "auto";
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @default 0
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @default 1500
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @default 'linear'
   */
  animationEasing?: AnimationTiming;
  id?: string;
}
/**
 * The Treemap chart is used to visualize hierarchical data using nested rectangles.
 *
 * @consumes ResponsiveContainerContext
 * @provides TooltipEntrySettings
 */
declare function Treemap(outsideProps: Props$3): React.JSX.Element;

type SankeyVerticalAlign = "justify" | "top";
interface LinkDataItem {
  source: number;
  target: number;
  value: number;
}
interface NodeProps extends Omit<SVGProps<SVGRectElement>, "height" | "width"> {
  height: number;
  width: number;
  payload: SankeyNode;
  index: number;
  x: number;
  y: number;
}
interface LinkProps extends SVGProps<SVGPathElement> {
  sourceX: number;
  targetX: number;
  sourceY: number;
  targetY: number;
  sourceControlX: number;
  targetControlX: number;
  sourceRelativeY: number;
  targetRelativeY: number;
  linkWidth: number;
  index: number;
  payload: Omit<SankeyLink, "source" | "target"> & {
    source: SankeyNode;
    target: SankeyNode;
  };
}
interface SankeyData {
  nodes: any[];
  links: LinkDataItem[];
}
type SankeyNodeOptions =
  | ReactElement<SVGProps<SVGRectElement>>
  | ((props: NodeProps) => ReactNode)
  | Props$t;
type SankeyLinkOptions =
  | ReactElement<SVGProps<SVGPathElement>>
  | ((props: LinkProps) => ReactElement<SVGProps<SVGPathElement>>)
  | SVGProps<SVGPathElement>;
interface SankeyProps extends EventThrottlingProps {
  /**
   * Name represents each sector in the tooltip.
   * This allows you to extract the name from the data:
   *
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the name.
   *
   * @defaultValue name
   */
  nameKey?: DataKey<any>;
  /**
   * dataKey prop in Sankey defines which key in the link objects represents the value of the link _in Tooltip only_.
   *
   * Unlike other charts where dataKey is used to extract values from the data array, in Sankey charts,
   * the value of each link is directly taken from the 'value' property of the link objects.
   *
   * @default 'value'
   */
  dataKey?: DataKey<any>;
  /**
   * The width of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  width?: number | Percent;
  /**
   * The height of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  height?: number | Percent;
  /**
   * The source data, including the array of nodes, and the relationships, represented by links.
   *
   * Note that Sankey requires a specific data structure.
   * Each node should have a unique index in the nodes array, and each link should reference these nodes by their indices.
   * This is different from other chart types in Recharts, which accept arbitrary data.
   *
   * @example
   * nodes: [
   *   { name: 'Visit' },
   *   { name: 'Direct-Favourite' },
   *   { name: 'Page-Click' },
   *   { name: 'Detail-Favourite' },
   *   { name: 'Lost' },
   * ],
   * links: [
   *   { source: 0, target: 1, value: 3728.3 },
   *   { source: 0, target: 2, value: 354170 },
   *   { source: 2, target: 3, value: 62429 },
   *   { source: 2, target: 4, value: 291741 },
   * ],
   */
  data: SankeyData;
  /**
   * The padding between the nodes
   * @default 10
   */
  nodePadding?: number;
  /**
   * The width of node
   * @default 10
   */
  nodeWidth?: number;
  /**
   * The curvature of width
   * @default 0.5
   */
  linkCurvature?: number;
  /**
   * The number of the iterations between the links
   * @default 32
   */
  iterations?: number;
  /**
   * If set an object, the option is the configuration of nodes.
   * If set a React element, the option is the custom react element of drawing the nodes.
   *
   * @example <Sankey node={MyCustomComponent} />
   * @example <Sankey node={{stroke: #77c878, strokeWidth: 2}} />
   */
  node?: SankeyNodeOptions;
  /**
   * If set an object, the option is the configuration of links.
   * If set a React element, the option is the custom react element of drawing the links.
   *
   * @example <Sankey link={MyCustomComponent} />
   * @example <Sankey link={{ fill: #77c878 }} />
   */
  link?: SankeyLinkOptions;
  style?: React.CSSProperties;
  className?: string;
  children?: ReactNode;
  /**
   * Empty space around the container.
   *
   * @defaultValue {"top":5,"right":5,"bottom":5,"left":5}
   */
  margin?: Partial<Margin>;
  /**
   * The customized event handler of click on the area in this group
   */
  onClick?: (
    item: NodeProps | LinkProps,
    type: SankeyElementType,
    e: MouseEvent$1<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mouseenter on the area in this group
   */
  onMouseEnter?: (
    item: NodeProps | LinkProps,
    type: SankeyElementType,
    e: MouseEvent$1<SVGGraphicsElement>,
  ) => void;
  /**
   * The customized event handler of mouseleave on the area in this group
   */
  onMouseLeave?: (
    item: NodeProps | LinkProps,
    type: SankeyElementType,
    e: MouseEvent$1<SVGGraphicsElement>,
  ) => void;
  /**
   * Whether to sort the nodes on the y axis, or to display them as user-defined.
   * @default true
   */
  sort?: boolean;
  /**
   * Controls the vertical spacing of nodes within a depth. 'justify' distributes nodes evenly and balances link paths, while 'top' positions the group starting from the top edge of the chart.
   * @default 'justify'
   */
  verticalAlign?: SankeyVerticalAlign;
  /**
   * If set to 'justify', the start nodes will be aligned to the left edge of the chart and the end nodes will be aligned to the right edge of the chart. If set to 'left', the start nodes will be aligned to the left edge of the chart.
   * @default 'justify'
   */
  align?: "left" | "justify";
}
type Props$2 = Omit<SVGProps<SVGSVGElement>, keyof SankeyProps> & SankeyProps;
type SankeyElementType = "node" | "link";
/**
 * Flow diagram in which the width of the arrows is proportional to the flow rate.
 * It is typically used to visualize energy or material or cost transfers between processes.
 *
 * @consumes ResponsiveContainerContext
 * @provides TooltipEntrySettings
 */
declare function Sankey(outsideProps: Props$2): React.JSX.Element;
declare namespace Sankey {
  var displayName: string;
}

/**
 * @consumes ResponsiveContainerContext
 * @provides PolarViewBoxContext
 * @provides PolarChartContext
 */
declare const RadarChart: <DataPointType = any>(
  props: PolarChartProps<DataPointType> & {
    ref?: React.Ref<SVGSVGElement>;
  },
) => React.ReactElement;

/**
 * @consumes ResponsiveContainerContext
 * @provides CartesianViewBoxContext
 * @provides CartesianChartContext
 */
declare const ScatterChart: <DataPointType = any>(
  props: CartesianChartProps<DataPointType> & {
    ref?: React.Ref<SVGSVGElement>;
  },
) => React.ReactElement;

/**
 * @consumes ResponsiveContainerContext
 * @provides CartesianViewBoxContext
 * @provides CartesianChartContext
 */
declare const AreaChart: <DataPointType = any>(
  props: CartesianChartProps<DataPointType> & {
    ref?: React.Ref<SVGSVGElement>;
  },
) => React.ReactElement;

/**
 * @consumes ResponsiveContainerContext
 * @provides PolarViewBoxContext
 * @provides PolarChartContext
 */
declare const RadialBarChart: <DataPointType = any>(
  props: PolarChartProps<DataPointType> & {
    ref?: React.Ref<SVGSVGElement>;
  },
) => React.ReactElement;

/**
 * @consumes ResponsiveContainerContext
 * @provides CartesianViewBoxContext
 * @provides CartesianChartContext
 */
declare const ComposedChart: <DataPointType = any>(
  props: CartesianChartProps<DataPointType> & {
    ref?: React.Ref<SVGSVGElement>;
  },
) => React.ReactElement;

interface SunburstData {
  [key: string]: any;
  name: string;
  value?: number;
  fill?: string;
  tooltipIndex?: TooltipIndex;
  children?: SunburstData[];
}
interface SunburstChartProps extends EventThrottlingProps {
  className?: string;
  /**
   * The source data. Each element should be an object.
   * The properties of each object represent the values of different data dimensions.
   *
   * Use the `dataKey` prop to specify which properties to use.
   *
   * @example data={[{ name: 'a', value: 12, fill: '#8884d8' }, { name: 'b', value: 5, fill: '#83a6ed' }]}
   */
  data: SunburstData;
  /**
   * The width of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  width?: number | Percent;
  /**
   * The height of chart container.
   * Can be a number or a percent string like "100%".
   *
   * @see {@link https://recharts.github.io/en-US/guide/sizes/ Chart sizing guide}
   */
  height?: number | Percent;
  /**
   * If true, then it will listen to container size changes and adapt the SVG chart accordingly.
   * If false, then it renders the chart at the specified width and height and will stay that way
   * even if the container size changes.
   *
   * This is similar to ResponsiveContainer but without the need for an extra wrapper component.
   * The `responsive` prop also uses standard CSS sizing rules, instead of custom resolution logic (like ResponsiveContainer does).
   * @default false
   */
  responsive?: boolean;
  /**
   * Distance between sectors.
   *
   * @defaultValue 2
   */
  padding?: number;
  /**
   * Decides how to extract value from the data.
   *
   * @defaultValue value
   */
  dataKey?: string;
  /**
   * Name represents each sector in the tooltip.
   * This allows you to extract the name from the data:
   *
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the name.
   *
   * @defaultValue name
   */
  nameKey?: DataKey<any>;
  /**
   * Padding between each hierarchical level.
   */
  ringPadding?: number;
  /**
   * The radius of the inner circle at the center of the chart.
   *
   * @defaultValue 50
   */
  innerRadius?: number;
  /**
   * Outermost edge of the chart.
   * Defaults to the max possible radius for a circle inscribed in the chart container
   */
  outerRadius?: number;
  /**
   * The x-coordinate of center in pixels.
   * If undefined, it will be set to half of the chart width.
   */
  cx?: number;
  /**
   * The y-coordinate of center in pixels.
   * If undefined, it will be set to half of the chart height.
   */
  cy?: number;
  /** Angle in degrees from which the chart should start. */
  startAngle?: number;
  /** Angle, in degrees, at which the chart should end. */
  endAngle?: number;
  children?: React.ReactNode;
  fill?: string;
  stroke?: string;
  /**
   * An object with svg text options to control the appearance of the chart labels.
   */
  textOptions?: Props$C;
  onMouseEnter?: (node: SunburstData, e: React.MouseEvent) => void;
  onMouseLeave?: (node: SunburstData, e: React.MouseEvent) => void;
  onClick?: (node: SunburstData) => void;
  style?: CSSProperties;
  id?: string;
}
/**
 * The sunburst is a hierarchical chart, similar to a {@link Treemap}, plotted in polar coordinates.
 * Sunburst charts effectively convey the hierarchical relationships and proportions within each level.
 * It is easy to see all the middle layers in the hierarchy, which might get lost in other visualizations.
 * For some datasets, the radial layout may be more visually appealing and intuitive than a traditional {@link Treemap}.
 *
 * @consumes ResponsiveContainerContext
 * @provides TooltipEntrySettings
 */
declare const SunburstChart: (
  outsideProps: SunburstChartProps,
) => React.JSX.Element;

/**
 * @fileOverview Rectangle
 */

interface TrapezoidProps {
  className?: string;
  /**
   * The x-coordinate of top left point of the trapezoid.
   * @default 0
   */
  x?: number;
  /**
   * The y-coordinate of top left point of the trapezoid.
   * @default 0
   */
  y?: number;
  /**
   * Width of the upper horizontal side of the trapezoid in pixels.
   * @default 0
   */
  upperWidth?: number;
  /**
   * Width of the lower horizontal side of the trapezoid in pixels.
   * @default 0
   */
  lowerWidth?: number;
  /**
   * Height of the trapezoid in pixels.
   * @default 0
   */
  height?: number;
  /**
   * If set to true, trapezoid will update and render with a gradual fade-in animation from left to right.
   * @default false
   */
  isUpdateAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
  /**
   * The customized event handler of click on the trapezoid
   */
  onClick?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mousedown on the trapezoid
   */
  onMouseDown?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseup on the trapezoid
   */
  onMouseUp?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mousemove on the trapezoid
   */
  onMouseMove?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseover on the trapezoid
   */
  onMouseOver?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseout on the trapezoid
   */
  onMouseOut?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseenter on the trapezoid
   */
  onMouseEnter?: (e: React.MouseEvent<SVGPathElement>) => void;
  /**
   * The customized event handler of mouseleave on the trapezoid
   */
  onMouseLeave?: (e: React.MouseEvent<SVGPathElement>) => void;
}
type Props$1 = SVGProps<SVGPathElement> & TrapezoidProps;
declare const Trapezoid: React.FC<Props$1>;

type FunnelTrapezoidItem = Props$1 &
  TrapezoidViewBox & {
    value?: number | string;
    payload?: any;
    tooltipPosition: Coordinate;
    name: string;
    labelViewBox: TrapezoidViewBox;
    parentViewBox: CartesianViewBoxRequired;
    val: number | ReadonlyArray<number>;
    tooltipPayload: TooltipPayload;
  };
/**
 * External props, intended for end users to fill in
 */
interface FunnelProps<DataPointType = any, DataValueType = any>
  extends
    DataProvider<DataPointType>,
    Required<DataConsumer<DataPointType, DataValueType>> {
  /**
   * This component is rendered when this graphical item is activated
   * (could be by mouse hover, touch, keyboard, programmatically).
   */
  activeShape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
  /**
   * Specifies when the animation should begin, the unit of this option is ms.
   * @defaultValue 400
   */
  animationBegin?: number;
  /**
   * Specifies the duration of animation, the unit of this option is ms.
   * @defaultValue 1500
   */
  animationDuration?: AnimationDuration;
  /**
   * The type of easing function.
   * @defaultValue ease
   */
  animationEasing?: AnimationTiming;
  className?: string;
  /**
   * Hides the whole graphical element when true.
   *
   * Hiding an element is different from removing it from the chart:
   * Hidden graphical elements are still visible in Legend,
   * and can be included in axis domain calculations,
   * depending on `includeHidden` props of your XAxis/YAxis.
   *
   * @defaultValue false
   */
  hide?: boolean;
  /**
   * Unique identifier of this component.
   * Used as an HTML attribute `id`, and also to identify this element internally.
   *
   * If undefined, Recharts will generate a unique ID automatically.
   */
  id?: string;
  /**
   * If set false, animation of funnel will be disabled.
   * If set "auto", the animation will be disabled in SSR and will respect the user's prefers-reduced-motion system preference for accessibility.
   * @defaultValue auto
   */
  isAnimationActive?: boolean | "auto";
  label?: ImplicitLabelListType;
  /**
   * @defaultValue triangle
   */
  lastShapeType?: "triangle" | "rectangle";
  /**
   * The type of icon in legend.  If set to 'none', no legend item will be rendered.
   * @defaultValue rect
   */
  legendType?: LegendType;
  /**
   * Name represents each sector in the tooltip.
   * This allows you to extract the name from the data:
   *
   * - `string`: the name of the field in the data object;
   * - `number`: the index of the field in the data;
   * - `function`: a function that receives the data object and returns the name.
   *
   * @defaultValue name
   */
  nameKey?: DataKey<DataPointType, DataValueType>;
  /**
   * The customized event handler of animation end
   */
  onAnimationEnd?: () => void;
  /**
   * The customized event handler of animation start
   */
  onAnimationStart?: () => void;
  reversed?: boolean;
  /**
   * If set a ReactElement, the shape of funnel can be customized.
   * If set a function, the function will be called to render customized shape.
   */
  shape?: ActiveShape<FunnelTrapezoidItem, SVGPathElement>;
  tooltipType?: TooltipType;
  /**
   * The customized event handler of click on the area in this group
   */
  onClick?: (
    data: FunnelTrapezoidItem,
    index: number,
    e: React.MouseEvent<SVGPathElement>,
  ) => void;
  /**
   * The customized event handler of mousedown on the area in this group
   */
  onMouseDown?: (
    data: FunnelTrapezoidItem,
    index: number,
    e: React.MouseEvent<SVGPathElement>,
  ) => void;
  /**
   * The customized event handler of mouseup on the area in this group
   */
  onMouseUp?: (
    data: FunnelTrapezoidItem,
    index: number,
    e: React.MouseEvent<SVGPathElement>,
  ) => void;
  /**
   * The customized event handler of mousemove on the area in this group
   */
  onMouseMove?: (
    data: FunnelTrapezoidItem,
    index: number,
    e: React.MouseEvent<SVGPathElement>,
  ) => void;
  /**
   * The customized event handler of mouseover on the area in this group
   */
  onMouseOver?: (
    data: FunnelTrapezoidItem,
    index: number,
    e: React.MouseEvent<SVGPathElement>,
  ) => void;
  /**
   * The customized event handler of mouseout on the area in this group
   */
  onMouseOut?: (
    data: FunnelTrapezoidItem,
    index: number,
    e: React.MouseEvent<SVGPathElement>,
  ) => void;
  /**
   * The customized event handler of mouseenter on the area in this group
   */
  onMouseEnter?: (
    data: FunnelTrapezoidItem,
    index: number,
    e: React.MouseEvent<SVGPathElement>,
  ) => void;
  /**
   * The customized event handler of mouseleave on the area in this group
   */
  onMouseLeave?: (
    data: FunnelTrapezoidItem,
    index: number,
    e: React.MouseEvent<SVGPathElement>,
  ) => void;
}
type FunnelSvgProps = Omit<
  PresentationAttributesAdaptChildEvent<FunnelTrapezoidItem, SVGPathElement>,
  "ref"
>;
type Props<DataPointType = any, DataValueType = any> = FunnelSvgProps &
  FunnelProps<DataPointType, DataValueType>;
declare const Funnel: {
  <DataPointType = any, DataValueType = any>(
    outsideProps: Props<DataPointType, DataValueType>,
  ): ReactElement;
  (outsideProps: Props<any, any>): ReactElement;
};

/**
 * @consumes ResponsiveContainerContext
 * @provides CartesianViewBoxContext
 * @provides CartesianChartContext
 */
declare const FunnelChart: <DataPointType = any>(
  props: CartesianChartProps<DataPointType> & {
    ref?: React.Ref<SVGSVGElement>;
  },
) => React.ReactElement;

declare const Global: {
  devToolsEnabled: boolean;
  isSsr: boolean;
};

/**
 * A collection of all default zIndex values used by Recharts.
 *
 * You can reuse these, or you can define your own.
 */
declare const DefaultZIndexes: {
  /**
   * CartesianGrid and PolarGrid
   */
  readonly grid: -100;
  /**
   * Background of Bar and RadialBar.
   * This is not visible by default but can be enabled by setting background={true} on Bar or RadialBar.
   */
  readonly barBackground: -50;
  /**
   * Area, Pie, Radar, and ReferenceArea
   */
  readonly area: 100;
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area. CursorRectangle is a rectangle box.
   * It renders below bar so that in a stacked bar chart the cursor rectangle does not hide the other bars.
   */
  readonly cursorRectangle: 200;
  /**
   * Bar and RadialBar
   */
  readonly bar: 300;
  /**
   * Line and ReferenceLine, and ErrorBor
   */
  readonly line: 400;
  /**
   * XAxis and YAxis and PolarAngleAxis and PolarRadiusAxis ticks and lines and children
   */
  readonly axis: 500;
  /**
   * Scatter and ReferenceDot,
   * and Dots of Line and Area and Radar if they have dot=true
   */
  readonly scatter: 600;
  /**
   * Hovering over a Bar or RadialBar renders a highlight rectangle
   */
  readonly activeBar: 1000;
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area, usually a cross or a box.
   * CursorLine is a line cursor rendered in Line, Area, Scatter, Radar charts.
   * It renders above the Line and Scatter so that it is always visible.
   * It renders below active dot so that the dot is always visible and shows the current point.
   * We're also assuming that the active dot is small enough that it does not fully cover the cursor line.
   *
   * This also applies to the radial cursor in RadialBarChart.
   */
  readonly cursorLine: 1100;
  /**
   * Hovering over a Point in Line, Area, Scatter, Radar renders a highlight dot
   */
  readonly activeDot: 1200;
  /**
   * LabelList and Label, including Axis labels
   */
  readonly label: 2000;
};

/**
 * @fileOverview calculate tick values of scale
 * @author xile611, arcthur
 * @date 2015-09-17
 */

/**
 * Calculate the ticks of an interval. Ticks can appear outside the interval
 * if it makes them more rounded and nice.
 *
 * @param tuple of [min,max] min: The minimum value, max: The maximum value
 * @param tickCount     The count of ticks
 * @param allowDecimals Allow the ticks to be decimals or not
 * @param niceTicksMode The algorithm to use for calculating nice ticks.
 * @return array of ticks
 */
declare const getNiceTickValues: (
  [min, max]: NumberDomain,
  tickCount?: number,
  allowDecimals?: boolean,
  niceTicksMode?: NiceTicksAlgorithm,
) => number[];

/**
 * Returns the width of the chart in pixels.
 *
 * If you are using chart with hardcoded `width` prop, then the width returned will be the same
 * as the `width` prop on the main chart element.
 *
 * If you are using a chart with a `ResponsiveContainer`, the width will be the size of the chart
 * as the ResponsiveContainer has decided it would be.
 *
 * If the chart has any axes or legend, the `width` will be the size of the chart
 * including the axes and legend. Meaning: adding axes and legend will not change the width.
 *
 * The dimensions do not scale, meaning as user zoom in and out, the width number will not change
 * as the chart gets visually larger or smaller.
 *
 * Returns `undefined` if used outside a chart context.
 *
 * @returns {number | undefined} The width of the chart in pixels, or `undefined` if not in a chart context.
 */
declare const useChartWidth: () => number | undefined;
/**
 * Returns the height of the chart in pixels.
 *
 * If you are using chart with hardcoded `height` props, then the height returned will be the same
 * as the `height` prop on the main chart element.
 *
 * If you are using a chart with a `ResponsiveContainer`, the height will be the size of the chart
 * as the ResponsiveContainer has decided it would be.
 *
 * If the chart has any axes or legend, the `height` will be the size of the chart
 * including the axes and legend. Meaning: adding axes and legend will not change the height.
 *
 * The dimensions do not scale, meaning as user zoom in and out, the height number will not change
 * as the chart gets visually larger or smaller.
 *
 * Returns `undefined` if used outside a chart context.
 *
 * @returns {number | undefined} The height of the chart in pixels, or `undefined` if not in a chart context.
 */
declare const useChartHeight: () => number | undefined;
/**
 * Margin is the empty space around the chart. Excludes axes and legend and brushes and the like.
 * This is declared by the user in the chart props.
 * If you are interested in the space occupied by axes, legend, or brushes,
 * use {@link useOffset} instead, which also includes calculated widths and heights of axes and legends.
 *
 * Returns `undefined` if used outside a chart context.
 *
 * @returns {Margin | undefined} The margin of the chart in pixels, or `undefined` if not in a chart context.
 */
declare const useMargin: () => Margin | undefined;

/**
 * Computes relative element coordinates from mouse or touch event.
 *
 * The output coordinates are relative to the top-left corner of the active element (= currentTarget),
 * where the top-left corner is (0, 0).
 * Moving right, the x-coordinate increases, and moving down, the y-coordinate increases.
 *
 * The coordinates are rounded to the nearest integer and account for CSS transform scale.
 * So element that's scaled will return the same coordinates as element that's not scaled.
 *
 * In other words: you zoom in or out, numbers stay the same.
 *
 * This function works with both HTML elements and SVG elements.
 *
 * It works with both Mouse and Touch events.
 * For Touch events, it returns an array of coordinates, one for each touch point.
 * For Mouse events, it returns a single coordinate object.
 *
 * @example
 * ```tsx
 * // In an HTML element event handler. Legend passes the native event as the 3rd argument.
 * <Legend onMouseMove={(_data, _i, e) => {
 *   // These coordinates are relative to the top-left corner of the Legend element
 *   const { relativeX, relativeY } = getRelativeCoordinate(e);
 *   console.log(`Mouse at Legend position: (${relativeX}, ${relativeY})`);
 * }}>
 * ```
 *
 * @example
 * ```tsx
 * // In an SVG element event handler. Area is an SVG element, and passes the event as second argument.
 * <Area onMouseMove={(_, e) => {
 *   const { relativeX, relativeY } = getRelativeCoordinate(e);
 *   console.log(`Mouse at Area position: (${relativeX}, ${relativeY})`);
 *   // Here you can call usePlotArea to convert to chart coordinates
 * }}>
 * ```
 *
 * @example
 * ```tsx
 * // In a chart root touch handler. Chart root passes the event as second argument.
 * <LineChart onTouchMove={(_, e) => {
 *   const touchPoints = getRelativeCoordinate(e);
 *   touchPoints.forEach(({ relativeX, relativeY }, index) => {
 *     console.log(`Touch point ${index} at LineChart position: (${relativeX}, ${relativeY})`);
 *   });
 * }}>
 * ```
 *
 * @since 3.8
 * @param event The mouse or touch event from React event handlers (works with both HTML and SVG elements)
 * @returns Coordinates relative to the top-left corner of the element. Single object for Mouse events, array of objects for Touch events.
 */
declare function getRelativeCoordinate(event: MousePointer): RelativePointer;
declare function getRelativeCoordinate(
  event: TouchPointer,
): Array<RelativePointer>;

type TypedHorizontalChartContext<TData, TCategorical, TNumerical, TComponents> =
  {
    AreaChart: React.ComponentType<Omit<CartesianChartProps<TData>, "layout">>;
    BarChart: React.ComponentType<Omit<CartesianChartProps<TData>, "layout">>;
    LineChart: React.ComponentType<Omit<CartesianChartProps<TData>, "layout">>;
    ComposedChart: React.ComponentType<
      Omit<CartesianChartProps<TData>, "layout">
    >;
    ScatterChart: React.ComponentType<
      Omit<CartesianChartProps<TData>, "layout">
    >;
  } & Omit<
    {
      [K in keyof TComponents]: K extends "XAxis"
        ? React.ComponentType<Props$6<TData, TCategorical>>
        : K extends "YAxis"
          ? React.ComponentType<Props$5<TData, TNumerical>>
          : K extends "ZAxis"
            ? React.ComponentType<Props$4<TData, TNumerical>>
            : K extends "Area"
              ? React.ComponentType<Props$u<TData, TNumerical>>
              : K extends "Bar"
                ? React.ComponentType<Props$s<TData, TNumerical>>
                : K extends "Line"
                  ? React.ComponentType<Props$q<TData, TNumerical>>
                  : K extends "Scatter"
                    ? React.ComponentType<Props$p<TData, TNumerical>>
                    : TComponents[K];
    },
    "Funnel" | "FunnelChart"
  >;
type TypedVerticalChartContext<TData, TCategorical, TNumerical, TComponents> = {
  AreaChart: React.ComponentType<Omit<CartesianChartProps<TData>, "layout">>;
  BarChart: React.ComponentType<Omit<CartesianChartProps<TData>, "layout">>;
  LineChart: React.ComponentType<Omit<CartesianChartProps<TData>, "layout">>;
  ComposedChart: React.ComponentType<
    Omit<CartesianChartProps<TData>, "layout">
  >;
  ScatterChart: React.ComponentType<Omit<CartesianChartProps<TData>, "layout">>;
  FunnelChart: React.ComponentType<Omit<CartesianChartProps<TData>, "layout">>;
} & {
  [K in keyof TComponents]: K extends "XAxis"
    ? React.ComponentType<Props$6<TData, TNumerical>>
    : K extends "YAxis"
      ? React.ComponentType<Props$5<TData, TCategorical>>
      : K extends "ZAxis"
        ? React.ComponentType<Props$4<TData, TNumerical>>
        : K extends "Area"
          ? React.ComponentType<Props$u<TData, TNumerical>>
          : K extends "Bar"
            ? React.ComponentType<Props$s<TData, TNumerical>>
            : K extends "Line"
              ? React.ComponentType<Props$q<TData, TNumerical>>
              : K extends "Scatter"
                ? React.ComponentType<Props$p<TData, TNumerical>>
                : K extends "Funnel"
                  ? React.ComponentType<Props<TData, TNumerical>>
                  : TComponents[K];
};
type NoFunnel<T> = "Funnel" extends keyof T
  ? never
  : "FunnelChart" extends keyof T
    ? never
    : T;
/**
 * Creates a typed context for horizontal Cartesian charts.
 *
 * **Motivation:**
 * Recharts components fall back to `any` by default. While explicit typing using Generics (e.g. `<Area<MyDataType, number>>`)
 * works per-component, it becomes tedious and error-prone across an entire chart.
 *
 * This Chart Helper allows you to perfectly align your data properties and ensure all your charts, axes, and lines work in harmony.
 * Once you define the helper with your generic requirements, all returned components strictly enforce your data structure,
 * catching `dataKey` typos and shape errors early.
 *
 * **Layout Binding:**
 * Curries the chart definition to statically bind the `layout="horizontal"` property at the component level.
 * By stripping `layout` from the configuration options of generated wrapper components, developers avoid accidentally
 * overriding chart alignments. Evaluates `TComponents` generics at compile-time to reject strictly vertical components
 * natively (`Funnel`, `FunnelChart`) from being passed.
 *
 * @example
 * ```tsx
 * // 1. Lock in the Generics: Data = MyData, X-Axis = string, Y-Axis = number
 * const TypedCharts = createHorizontalChart<MyData, string, number>()({
 *   AreaChart,
 *   Area,
 *   XAxis,
 *   YAxis,
 * });
 * // 2. TypedCharts.AreaChart is now strictly horizontal.
 * // 3. TypedCharts.Area strictly expects string/number keys matching MyData.
 * ```
 *
 * @since 3.8
 * @see {@link https://recharts.github.io/en-US/guide/typescript/ Guide: Strong typing for Recharts components}
 */
declare function createHorizontalChart<
  TData,
  TCategorical = string,
  TNumerical = number,
>(): <TComponents extends Record<string, any>>(
  components: NoFunnel<TComponents>,
) => TypedHorizontalChartContext<TData, TCategorical, TNumerical, TComponents>;
/**
 * Creates a typed context for vertical Cartesian charts.
 *
 * **Motivation:**
 * Recharts components fall back to `any` by default. While explicit typing using Generics (e.g. `<Area<MyDataType, number>>`)
 * works per-component, it becomes tedious and error-prone across an entire chart.
 *
 * This Chart Helper allows you to perfectly align your data properties and ensure all your charts, axes, and lines work in harmony.
 * Once you define the helper with your generic requirements, all returned components strictly enforce your data structure,
 * catching `dataKey` typos and shape errors early.
 *
 * **Layout Binding:**
 * Curries the chart definition to statically bind the `layout="vertical"` property at the component level.
 * By stripping `layout` from the configuration options of generated wrapper components, developers avoid accidentally
 * overriding chart alignments. Natively supports strictly vertical components like `Funnel` and `FunnelChart`.
 *
 * @example
 * ```tsx
 * // 1. Lock in the Generics: Data = MyData, X-Axis = number, Y-Axis = string
 * const TypedCharts = createVerticalChart<MyData, number, string>()({
 *   BarChart,
 *   Bar,
 *   Funnel,
 *   XAxis,
 *   YAxis,
 * });
 * // 2. TypedCharts.BarChart is now strictly vertical.
 * // 3. `Funnel` evaluates safely inside vertical contexts exclusively and enforces MyData limits.
 * ```
 *
 * @since 3.8
 * @see {@link https://recharts.github.io/en-US/guide/typescript/ Guide: Strong typing for Recharts components}
 */
declare function createVerticalChart<
  TData,
  TCategorical = string,
  TNumerical = number,
>(): <TComponents extends Record<string, any>>(
  components: TComponents,
) => TypedVerticalChartContext<TData, TCategorical, TNumerical, TComponents>;

type TypedCentricChartContext<TData, TCategorical, TNumerical, TComponents> = {
  RadarChart: React.ComponentType<Omit<PolarChartProps<TData>, "layout">>;
} & Omit<
  {
    [K in keyof TComponents]: K extends "PolarAngleAxis"
      ? React.ComponentType<Props$c<TData, TCategorical>>
      : K extends "PolarRadiusAxis"
        ? React.ComponentType<Props$d<TData, TNumerical>>
        : K extends "RadialBar"
          ? React.ComponentType<RadialBarProps<TData, TNumerical>>
          : K extends "Radar"
            ? React.ComponentType<Props$a<TData, TNumerical>>
            : K extends "Pie"
              ? React.ComponentType<Props$b<TData, TNumerical>>
              : TComponents[K];
  },
  "RadialBar" | "RadialBarChart" | "Pie" | "PieChart"
>;
type TypedRadialChartContext<TData, TCategorical, TNumerical, TComponents> = {
  RadialBarChart: React.ComponentType<Omit<PolarChartProps<TData>, "layout">>;
  PieChart: React.ComponentType<Omit<PolarChartProps<TData>, "layout">>;
} & Omit<
  {
    [K in keyof TComponents]: K extends "PolarAngleAxis"
      ? React.ComponentType<Props$c<TData, TNumerical>>
      : K extends "PolarRadiusAxis"
        ? React.ComponentType<Props$d<TData, TCategorical>>
        : K extends "RadialBar"
          ? React.ComponentType<RadialBarProps<TData, TNumerical>>
          : K extends "Radar"
            ? React.ComponentType<Props$a<TData, TNumerical>>
            : K extends "Pie"
              ? React.ComponentType<Props$b<TData, TNumerical>>
              : TComponents[K];
  },
  "Radar" | "RadarChart"
>;
type NoRadial<T> = "RadialBar" extends keyof T
  ? never
  : "RadialBarChart" extends keyof T
    ? never
    : "Pie" extends keyof T
      ? never
      : "PieChart" extends keyof T
        ? never
        : T;
type NoCentric<T> = "Radar" extends keyof T
  ? never
  : "RadarChart" extends keyof T
    ? never
    : T;
/**
 * Creates a typed context for centric Polar charts.
 *
 * **Motivation:**
 * Recharts components fall back to `any` by default. While explicit typing using Generics works per-component,
 * it becomes tedious and error-prone across an entire chart.
 *
 * This Chart Helper allows you to perfectly align your data properties and ensure all your charts and axes work in harmony.
 * Once you define the helper with your generic requirements, all returned components strictly enforce your data structure,
 * catching `dataKey` typos and shape errors early.
 *
 * **Layout Binding:**
 * Curries chart definitions to strictly bind `layout="centric"` prop behavior statically onto components.
 * By wrapping the chart implementations, it completely masks the `layout` prop on initialization to prevent regressions.
 * Evaluates `TComponents` generics at compile-time to reject radial-only elements natively (`RadialBar`, `Pie`, etc.)
 *
 * @example
 * ```tsx
 * // 1. Lock in the Generics: Data = MyData
 * const TypedCentric = createCentricChart<MyData, string, number>()({
 *   RadarChart,
 *   Radar,
 * });
 * // 2. `layout` is permanently bound to "centric".
 * // 3. Passing `Pie` or `RadialBar` into the components map will explicitly trigger a TS error.
 * ```
 *
 * @since 3.8
 * @see {@link https://recharts.github.io/en-US/guide/typescript/ Guide: Strong typing for Recharts components}
 */
declare function createCentricChart<
  TData,
  TCategorical = string,
  TNumerical = number,
>(): <TComponents extends Record<string, any>>(
  components: NoRadial<TComponents>,
) => TypedCentricChartContext<TData, TCategorical, TNumerical, TComponents>;
/**
 * Creates a typed context for radial Polar charts.
 *
 * **Motivation:**
 * Recharts components fall back to `any` by default. While explicit typing using Generics works per-component,
 * it becomes tedious and error-prone across an entire chart.
 *
 * This Chart Helper allows you to perfectly align your data properties and ensure all your charts and layers work in harmony.
 * Once you define the helper with your generic requirements, all returned components strictly enforce your data structure,
 * catching `dataKey` typos and shape errors early.
 *
 * **Layout Binding:**
 * Curries chart definitions to strictly bind `layout="radial"` prop behavior statically onto components.
 * By wrapping the chart implementations, it completely masks the `layout` prop on initialization to prevent runtime faults.
 * Evaluates `TComponents` generics at compile-time to reject centric-only elements natively (`Radar`, `RadarChart`, etc.)
 *
 * @example
 * ```tsx
 * // 1. Lock in the Generics: Data = MyData
 * const TypedRadial = createRadialChart<MyData, string, number>()({
 *   RadialBarChart,
 *   RadialBar,
 * });
 * // 2. `layout` is permanently bound to "radial".
 * // 3. Passing `Radar` or `RadarChart` into the components map will explicitly trigger a TS error.
 * ```
 *
 * @since 3.8
 * @see {@link https://recharts.github.io/en-US/guide/typescript/ Guide: Strong typing for Recharts components}
 */
declare function createRadialChart<
  TData,
  TCategorical = string,
  TNumerical = number,
>(): <TComponents extends Record<string, any>>(
  components: NoCentric<TComponents>,
) => TypedRadialChartContext<TData, TCategorical, TNumerical, TComponents>;

export {
  type ActiveDotProps,
  type ActiveLabel,
  Area,
  AreaChart,
  type Props$u as AreaProps,
  type AxisDomainItem,
  type AxisId,
  type AxisInterval,
  type AxisRange,
  type BandPosition,
  Bar,
  BarChart,
  type Props$s as BarProps,
  type BarRectangleItem,
  type BarShapeProps,
  BarStack,
  type BarStackProps,
  type BaseTickContentProps,
  Brush,
  type Props$9 as BrushProps,
  CartesianAxis,
  type Props$A as CartesianAxisProps,
  type CartesianDataPoint,
  CartesianGrid,
  type Props$n as CartesianGridProps,
  type CartesianTickItem,
  type CartesianViewBox,
  Cell,
  type Props$j as CellProps,
  type ChartOffset,
  ComposedChart,
  type Coordinate,
  Cross,
  type Props$f as CrossProps,
  Curve,
  type Props$y as CurveProps,
  type CustomScaleDefinition,
  Customized,
  type Props$i as CustomizedProps,
  type DataKey,
  DefaultLegendContent,
  type Props$w as DefaultLegendContentProps,
  DefaultTooltipContent,
  type Props$z as DefaultTooltipContentProps,
  DefaultZIndexes,
  Dot,
  type DotItemDotProps,
  type Props$D as DotProps,
  ErrorBar,
  type Props$o as ErrorBarProps,
  Funnel,
  FunnelChart,
  type Props as FunnelProps,
  type FunnelTrapezoidItem,
  Global,
  type HTMLMousePointer,
  type HTMLTouchPointer,
  type IfOverflow,
  type InternalRadarProps,
  type InverseScaleFunction,
  Label,
  LabelList,
  type LabelListEntry,
  type Props$x as LabelListProps,
  type LabelListPropsWithPosition,
  type Props$B as LabelProps,
  Layer,
  type Props$l as LayerProps,
  Legend,
  type LegendPayload,
  type Props$v as LegendProps,
  type LegendType,
  Line,
  LineChart,
  type Props$q as LineProps,
  type Margin,
  type MouseHandlerDataParam,
  type MousePointer,
  type NiceTicksAlgorithm,
  type NoCentric,
  type NoFunnel,
  type NoRadial,
  type NumberDomain,
  type Padding,
  Pie,
  PieChart,
  type PieLabel,
  type PieLabelRenderProps,
  type Props$b as PieProps,
  type PieSectorDataItem,
  type PieSectorShapeProps,
  type PieShape,
  type PlotArea,
  PolarAngleAxis,
  type Props$c as PolarAngleAxisProps,
  type PolarCoordinate,
  PolarGrid,
  type Props$e as PolarGridProps,
  PolarRadiusAxis,
  type Props$d as PolarRadiusAxisProps,
  Polygon,
  type Props$g as PolygonProps,
  Radar,
  RadarChart,
  type RadarPoint,
  type Props$a as RadarProps,
  RadialBar,
  RadialBarChart,
  type RadialBarDataItem,
  type RadialBarProps,
  type RadialBarSectorProps,
  Rectangle,
  type Props$t as RectangleProps,
  ReferenceArea,
  type Props$7 as ReferenceAreaProps,
  ReferenceDot,
  type Props$8 as ReferenceDotProps,
  ReferenceLine,
  type Props$r as ReferenceLineProps,
  type ReferenceLineSegment,
  type RelativePointer,
  type RenderableText,
  ResponsiveContainer,
  type Props$k as ResponsiveContainerProps,
  type SVGMousePointer,
  type SVGTouchPointer,
  Sankey,
  type SankeyData,
  type SankeyElementType,
  type LinkProps as SankeyLinkProps,
  type SankeyNode,
  type SankeyNodeOptions,
  type NodeProps as SankeyNodeProps,
  type Props$2 as SankeyProps,
  type ScaleFunction,
  Scatter,
  ScatterChart,
  type ScatterPointItem,
  type ScatterPointNode,
  type Props$p as ScatterProps,
  type ScatterShapeProps,
  Sector,
  type Props$h as SectorProps,
  SunburstChart,
  type SunburstChartProps,
  type SunburstData,
  Surface,
  type Props$m as SurfaceProps,
  type SymbolType,
  Symbols,
  type SymbolsProps,
  Text,
  type TextAnchor,
  type Props$C as TextProps,
  type TextVerticalAnchor,
  type TickItem,
  Tooltip,
  type TooltipContentProps,
  type TooltipIndex,
  type TooltipItemSorter,
  type TooltipPayload,
  type Payload as TooltipPayloadEntry,
  type TooltipProps,
  type ValueType as TooltipValueType,
  type TouchPointer,
  Trapezoid,
  type Props$1 as TrapezoidProps,
  Treemap,
  type TreemapContentType,
  type TreemapNode,
  type Props$3 as TreemapProps,
  type TypedCentricChartContext,
  type TypedHorizontalChartContext,
  type TypedRadialChartContext,
  type TypedVerticalChartContext,
  XAxis,
  type XAxisOrientation,
  type XAxisPadding,
  type Props$6 as XAxisProps,
  type XAxisTickContentProps,
  YAxis,
  type YAxisOrientation,
  type YAxisPadding,
  type Props$5 as YAxisProps,
  type YAxisTickContentProps,
  ZAxis,
  type Props$4 as ZAxisProps,
  ZIndexLayer,
  createCentricChart,
  createHorizontalChart,
  createRadialChart,
  createVerticalChart,
  getNiceTickValues,
  getRelativeCoordinate,
  useActiveTooltipCoordinate,
  useActiveTooltipDataPoints,
  useActiveTooltipLabel,
  useCartesianScale,
  useChartHeight,
  useChartWidth,
  useIsTooltipActive,
  useMargin,
  useOffset,
  usePlotArea,
  useXAxisDomain,
  useXAxisInverseDataSnapScale,
  useXAxisInverseScale,
  useXAxisInverseTickSnapScale,
  useXAxisScale,
  useXAxisTicks,
  useYAxisDomain,
  useYAxisInverseDataSnapScale,
  useYAxisInverseScale,
  useYAxisInverseTickSnapScale,
  useYAxisScale,
  useYAxisTicks,
};
