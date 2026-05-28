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

type ImageLoadingStatus$1 = "idle" | "loading" | "loaded" | "error";
interface AvatarRootState {
  /**
   * The image loading status.
   */
  imageLoadingStatus: ImageLoadingStatus$1;
}
interface AvatarRootProps extends BaseUIComponentProps<
  "span",
  AvatarRootState
> {}
/**
 * Displays a user's profile picture, initials, or fallback icon.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
 */
declare const AvatarRoot: React.ForwardRefExoticComponent<
  Omit<AvatarRootProps, "ref"> & React.RefAttributes<HTMLSpanElement>
>;
declare namespace AvatarRoot {
  type State = AvatarRootState;
  type Props = AvatarRootProps;
}

type TransitionStatus = "starting" | "ending" | "idle" | undefined;

type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error";

interface AvatarImageState extends AvatarRootState {
  /**
   * The transition status of the component.
   */
  transitionStatus: TransitionStatus;
}
interface AvatarImageProps extends BaseUIComponentProps<
  "img",
  AvatarImageState
> {
  /**
   * Callback fired when the loading status changes.
   */
  onLoadingStatusChange?: ((status: ImageLoadingStatus) => void) | undefined;
}
/**
 * The image to be displayed in the avatar.
 * Renders an `<img>` element.
 *
 * Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
 */
declare const AvatarImage: React.ForwardRefExoticComponent<
  Omit<AvatarImageProps, "ref"> & React.RefAttributes<HTMLImageElement>
>;
declare namespace AvatarImage {
  type State = AvatarImageState;
  type Props = AvatarImageProps;
}

interface AvatarFallbackState extends AvatarRootState {}
interface AvatarFallbackProps extends BaseUIComponentProps<
  "span",
  AvatarFallbackState
> {
  /**
   * How long to wait before showing the fallback. Specified in milliseconds.
   */
  delay?: number | undefined;
}
/**
 * Rendered when the image fails to load or when no image is provided.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Avatar](https://base-ui.com/react/components/avatar)
 */
declare const AvatarFallback: React.ForwardRefExoticComponent<
  Omit<AvatarFallbackProps, "ref"> & React.RefAttributes<HTMLSpanElement>
>;
declare namespace AvatarFallback {
  type State = AvatarFallbackState;
  type Props = AvatarFallbackProps;
}

declare namespace index_parts {
  export {
    AvatarFallback as Fallback,
    AvatarImage as Image,
    AvatarRoot as Root,
  };
}

export {
  index_parts as Avatar,
  AvatarFallback,
  type AvatarFallbackProps,
  type AvatarFallbackState,
  AvatarImage,
  type AvatarImageProps,
  type AvatarImageState,
  AvatarRoot,
  type AvatarRootProps,
  type AvatarRootState,
  type ImageLoadingStatus$1 as ImageLoadingStatus,
};
