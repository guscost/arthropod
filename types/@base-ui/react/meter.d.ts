import * as React from "react";

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

interface MeterRootState {}
interface MeterRootProps extends BaseUIComponentProps<"div", MeterRootState> {
  /**
   * A string value that provides a user-friendly name for `aria-valuenow`, the current value of the meter.
   */
  "aria-valuetext"?: React.AriaAttributes["aria-valuetext"] | undefined;
  /**
   * Options to format the value.
   */
  format?: Intl.NumberFormatOptions | undefined;
  /**
   * A function that returns a string value that provides a human-readable text alternative for `aria-valuenow`, the current value of the meter.
   */
  getAriaValueText?:
    | ((formattedValue: string, value: number) => string)
    | undefined;
  /**
   * The locale used by `Intl.NumberFormat` when formatting the value.
   * Defaults to the user's runtime locale.
   */
  locale?: Intl.LocalesArgument | undefined;
  /**
   * The maximum value
   * @default 100
   */
  max?: number | undefined;
  /**
   * The minimum value
   * @default 0
   */
  min?: number | undefined;
  /**
   * The current value.
   */
  value: number;
}
/**
 * Groups all parts of the meter and provides the value for screen readers.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
 */
declare const MeterRoot: React.ForwardRefExoticComponent<
  Omit<MeterRootProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace MeterRoot {
  type State = MeterRootState;
  type Props = MeterRootProps;
}

interface MeterTrackState extends MeterRootState {}
interface MeterTrackProps extends BaseUIComponentProps<
  "div",
  MeterTrackState
> {}
/**
 * Contains the meter indicator and represents the entire range of the meter.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
 */
declare const MeterTrack: React.ForwardRefExoticComponent<
  Omit<MeterTrackProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace MeterTrack {
  type State = MeterTrackState;
  type Props = MeterTrackProps;
}

interface MeterIndicatorState extends MeterRootState {}
interface MeterIndicatorProps extends BaseUIComponentProps<
  "div",
  MeterIndicatorState
> {}
/**
 * Visualizes the position of the value along the range.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
 */
declare const MeterIndicator: React.ForwardRefExoticComponent<
  Omit<MeterIndicatorProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace MeterIndicator {
  type State = MeterIndicatorState;
  type Props = MeterIndicatorProps;
}

interface MeterValueState extends MeterRootState {}
interface MeterValueProps extends Omit<
  BaseUIComponentProps<"span", MeterValueState>,
  "children"
> {
  children?:
    | null
    | ((formattedValue: string, value: number) => React.ReactNode)
    | undefined;
}
/**
 * A text element displaying the current value.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
 */
declare const MeterValue: React.ForwardRefExoticComponent<
  Omit<MeterValueProps, "ref"> & React.RefAttributes<HTMLSpanElement>
>;
declare namespace MeterValue {
  type State = MeterValueState;
  type Props = MeterValueProps;
}

interface MeterLabelState extends MeterRootState {}
interface MeterLabelProps extends BaseUIComponentProps<
  "span",
  MeterLabelState
> {}
/**
 * An accessible label for the meter.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Meter](https://base-ui.com/react/components/meter)
 */
declare const MeterLabel: React.ForwardRefExoticComponent<
  Omit<MeterLabelProps, "ref"> & React.RefAttributes<HTMLSpanElement>
>;
declare namespace MeterLabel {
  type State = MeterLabelState;
  type Props = MeterLabelProps;
}

declare namespace index_parts {
  export {
    MeterIndicator as Indicator,
    MeterLabel as Label,
    MeterRoot as Root,
    MeterTrack as Track,
    MeterValue as Value,
  };
}

export {
  index_parts as Meter,
  MeterIndicator,
  type MeterIndicatorProps,
  type MeterIndicatorState,
  MeterLabel,
  type MeterLabelProps,
  type MeterLabelState,
  MeterRoot,
  type MeterRootProps,
  type MeterRootState,
  MeterTrack,
  type MeterTrackProps,
  type MeterTrackState,
  MeterValue,
  type MeterValueProps,
  type MeterValueState,
};
