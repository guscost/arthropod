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

type ProgressStatus = "indeterminate" | "progressing" | "complete";
interface ProgressRootState {
  /**
   * The current status.
   */
  status: ProgressStatus;
}
interface ProgressRootProps extends BaseUIComponentProps<
  "div",
  ProgressRootState
> {
  /**
   * A string value that provides a user-friendly name for `aria-valuenow`, the current value of the progress bar.
   */
  "aria-valuetext"?: React.AriaAttributes["aria-valuetext"] | undefined;
  /**
   * Options to format the value.
   */
  format?: Intl.NumberFormatOptions | undefined;
  /**
   * Accepts a function which returns a string value that provides a human-readable text alternative for the current value of the progress bar.
   */
  getAriaValueText?:
    | ((formattedValue: string | null, value: number | null) => string)
    | undefined;
  /**
   * The locale used by `Intl.NumberFormat` when formatting the value.
   * Defaults to the user's runtime locale.
   */
  locale?: Intl.LocalesArgument | undefined;
  /**
   * The maximum value.
   * @default 100
   */
  max?: number | undefined;
  /**
   * The minimum value.
   * @default 0
   */
  min?: number | undefined;
  /**
   * The current value. The component is indeterminate when value is `null`.
   * @default null
   */
  value: number | null;
}
/**
 * Groups all parts of the progress bar and provides the task completion status to screen readers.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
 */
declare const ProgressRoot: React.ForwardRefExoticComponent<
  Omit<ProgressRootProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ProgressRoot {
  type State = ProgressRootState;
  type Props = ProgressRootProps;
}

interface ProgressTrackState extends ProgressRootState {}
interface ProgressTrackProps extends BaseUIComponentProps<
  "div",
  ProgressTrackState
> {}
/**
 * Contains the progress bar indicator.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
 */
declare const ProgressTrack: React.ForwardRefExoticComponent<
  Omit<ProgressTrackProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ProgressTrack {
  type State = ProgressTrackState;
  type Props = ProgressTrackProps;
}

interface ProgressIndicatorState extends ProgressRootState {}
interface ProgressIndicatorProps extends BaseUIComponentProps<
  "div",
  ProgressIndicatorState
> {}
/**
 * Visualizes the completion status of the task.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
 */
declare const ProgressIndicator: React.ForwardRefExoticComponent<
  Omit<ProgressIndicatorProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ProgressIndicator {
  type State = ProgressIndicatorState;
  type Props = ProgressIndicatorProps;
}

interface ProgressValueState extends ProgressRootState {}
interface ProgressValueProps extends Omit<
  BaseUIComponentProps<"span", ProgressValueState>,
  "children"
> {
  children?:
    | null
    | ((formattedValue: string | null, value: number | null) => React.ReactNode)
    | undefined;
}
/**
 * A text label displaying the current value.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
 */
declare const ProgressValue: React.ForwardRefExoticComponent<
  Omit<ProgressValueProps, "ref"> & React.RefAttributes<HTMLSpanElement>
>;
declare namespace ProgressValue {
  type State = ProgressValueState;
  type Props = ProgressValueProps;
}

interface ProgressLabelState extends ProgressRootState {}
interface ProgressLabelProps extends BaseUIComponentProps<
  "span",
  ProgressLabelState
> {}
/**
 * An accessible label for the progress bar.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
 */
declare const ProgressLabel: React.ForwardRefExoticComponent<
  Omit<ProgressLabelProps, "ref"> & React.RefAttributes<HTMLSpanElement>
>;
declare namespace ProgressLabel {
  type State = ProgressLabelState;
  type Props = ProgressLabelProps;
}

declare namespace index_parts {
  export {
    ProgressIndicator as Indicator,
    ProgressLabel as Label,
    ProgressRoot as Root,
    type ProgressStatus as Status,
    ProgressTrack as Track,
    ProgressValue as Value,
  };
}

export {
  index_parts as Progress,
  ProgressIndicator,
  type ProgressIndicatorProps,
  type ProgressIndicatorState,
  ProgressLabel,
  type ProgressLabelProps,
  type ProgressLabelState,
  ProgressRoot,
  type ProgressRootProps,
  type ProgressRootState,
  type ProgressStatus,
  ProgressTrack,
  type ProgressTrackProps,
  type ProgressTrackState,
  ProgressValue,
  type ProgressValueProps,
  type ProgressValueState,
};
