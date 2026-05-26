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
interface NativeButtonProps {
  /**
   * Whether the component renders a native `<button>` element when replacing it
   * via the `render` prop.
   * Set to `false` if the rendered element is not a button (for example, `<div>`).
   * @default true
   */
  nativeButton?: boolean | undefined;
}
type Orientation = "horizontal" | "vertical";

interface SeparatorProps extends BaseUIComponentProps<"div", SeparatorState> {
  /**
   * The orientation of the separator.
   * @default 'horizontal'
   */
  orientation?: Orientation | undefined;
}
interface SeparatorState {
  /**
   * The orientation of the separator.
   */
  orientation: Orientation;
}
/**
 * A separator element accessible to screen readers.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Separator](https://base-ui.com/react/components/separator)
 */
declare const Separator: React.ForwardRefExoticComponent<
  Omit<SeparatorProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace Separator {
  type Props = SeparatorProps;
  type State = SeparatorState;
}

interface ToolbarSeparatorState extends SeparatorState {}
interface ToolbarSeparatorProps
  extends BaseUIComponentProps<"div", ToolbarSeparatorState>, Separator.Props {}
/**
 * A separator element accessible to screen readers.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
 */
declare const ToolbarSeparator: React.ForwardRefExoticComponent<
  Omit<ToolbarSeparatorProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ToolbarSeparator {
  type State = ToolbarSeparatorState;
  type Props = ToolbarSeparatorProps;
}

interface ToolbarRootItemMetadata {
  focusableWhenDisabled: boolean;
}
type ToolbarRootOrientation = Orientation;
interface ToolbarRootState {
  /**
   * Whether the component is disabled.
   */
  disabled: boolean;
  /**
   * The component orientation.
   */
  orientation: ToolbarRoot.Orientation;
}
interface ToolbarRootProps extends BaseUIComponentProps<
  "div",
  ToolbarRootState
> {
  disabled?: boolean | undefined;
  /**
   * The orientation of the toolbar.
   * @default 'horizontal'
   */
  orientation?: ToolbarRoot.Orientation | undefined;
  /**
   * If `true`, using keyboard navigation will wrap focus to the other end of the toolbar once the end is reached.
   *
   * @default true
   */
  loopFocus?: boolean | undefined;
}
/**
 * A container for grouping a set of controls, such as buttons, toggle groups, or menus.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
 */
declare const ToolbarRoot: React.ForwardRefExoticComponent<
  Omit<ToolbarRootProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ToolbarRoot {
  type ItemMetadata = ToolbarRootItemMetadata;
  type Orientation = ToolbarRootOrientation;
  type State = ToolbarRootState;
  type Props = ToolbarRootProps;
}

interface ToolbarGroupState extends ToolbarRootState {}
interface ToolbarGroupProps extends BaseUIComponentProps<
  "div",
  ToolbarGroupState
> {
  /**
   * When `true` all toolbar items in the group are disabled.
   * @default false
   */
  disabled?: boolean | undefined;
}
/**
 * Groups several toolbar items or toggles.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
 */
declare const ToolbarGroup: React.ForwardRefExoticComponent<
  Omit<ToolbarGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ToolbarGroup {
  type State = ToolbarGroupState;
  type Props = ToolbarGroupProps;
}

interface ToolbarButtonState extends ToolbarRootState {
  /**
   * Whether the component is disabled.
   */
  disabled: boolean;
  /**
   * Whether the component remains focusable when disabled.
   */
  focusable: boolean;
}
interface ToolbarButtonProps
  extends
    NativeButtonProps,
    BaseUIComponentProps<"button", ToolbarButtonState> {
  /**
   * When `true` the item is disabled.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * When `true` the item remains focusable when disabled.
   * @default true
   */
  focusableWhenDisabled?: boolean | undefined;
}
/**
 * A button that can be used as-is or as a trigger for other components.
 * Renders a `<button>` element.
 *
 * Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
 */
declare const ToolbarButton: React.ForwardRefExoticComponent<
  Omit<ToolbarButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>
>;
declare namespace ToolbarButton {
  type State = ToolbarButtonState;
  type Props = ToolbarButtonProps;
}

interface ToolbarLinkState {
  /**
   * The component orientation.
   */
  orientation: ToolbarRoot.Orientation;
}
interface ToolbarLinkProps extends BaseUIComponentProps<
  "a",
  ToolbarLinkState
> {}
/**
 * A link component.
 * Renders an `<a>` element.
 *
 * Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
 */
declare const ToolbarLink: React.ForwardRefExoticComponent<
  Omit<ToolbarLinkProps, "ref"> & React.RefAttributes<HTMLAnchorElement>
>;
declare namespace ToolbarLink {
  type State = ToolbarLinkState;
  type Props = ToolbarLinkProps;
}

interface ToolbarInputState extends ToolbarRootState {
  /**
   * Whether the component is disabled.
   */
  disabled: boolean;
  /**
   * Whether the component remains focusable when disabled.
   */
  focusable: boolean;
}
interface ToolbarInputProps extends BaseUIComponentProps<
  "input",
  ToolbarInputState
> {
  /**
   * When `true` the item is disabled.
   * @default false
   */
  disabled?: boolean | undefined;
  /**
   * When `true` the item remains focusable when disabled.
   * @default true
   */
  focusableWhenDisabled?: boolean | undefined;
  defaultValue?: React.ComponentProps<"input">["defaultValue"] | undefined;
}
/**
 * A native input element that integrates with Toolbar keyboard navigation.
 * Renders an `<input>` element.
 *
 * Documentation: [Base UI Toolbar](https://base-ui.com/react/components/toolbar)
 */
declare const ToolbarInput: React.ForwardRefExoticComponent<
  Omit<ToolbarInputProps, "ref"> & React.RefAttributes<HTMLInputElement>
>;
declare namespace ToolbarInput {
  type State = ToolbarInputState;
  type Props = ToolbarInputProps;
}

type index_parts_Orientation = Orientation;
declare namespace index_parts {
  export {
    ToolbarButton as Button,
    ToolbarGroup as Group,
    ToolbarInput as Input,
    ToolbarLink as Link,
    type index_parts_Orientation as Orientation,
    ToolbarRoot as Root,
    ToolbarSeparator as Separator,
  };
}

export {
  type Orientation,
  index_parts as Toolbar,
  ToolbarButton,
  type ToolbarButtonProps,
  type ToolbarButtonState,
  ToolbarGroup,
  type ToolbarGroupProps,
  type ToolbarGroupState,
  ToolbarInput,
  type ToolbarInputProps,
  type ToolbarInputState,
  ToolbarLink,
  type ToolbarLinkProps,
  type ToolbarLinkState,
  ToolbarRoot,
  type ToolbarRootItemMetadata,
  type ToolbarRootOrientation,
  type ToolbarRootProps,
  type ToolbarRootState,
  ToolbarSeparator,
  type ToolbarSeparatorProps,
  type ToolbarSeparatorState,
};
