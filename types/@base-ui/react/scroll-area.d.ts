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

declare const DEFAULT_COORDS: {
  x: number;
  y: number;
};
declare const DEFAULT_SIZE: {
  width: number;
  height: number;
};
declare const DEFAULT_OVERFLOW_EDGES: {
  xStart: boolean;
  xEnd: boolean;
  yStart: boolean;
  yEnd: boolean;
};
declare const DEFAULT_HIDDEN_STATE: {
  x: boolean;
  y: boolean;
  corner: boolean;
};
type HiddenState = typeof DEFAULT_HIDDEN_STATE;
type OverflowEdges = typeof DEFAULT_OVERFLOW_EDGES;
type Size = typeof DEFAULT_SIZE;
type Coords = typeof DEFAULT_COORDS;
interface ScrollAreaRootState {
  /**
   * Whether the scroll area is being scrolled.
   */
  scrolling: boolean;
  /**
   * Whether horizontal overflow is present.
   */
  hasOverflowX: boolean;
  /**
   * Whether vertical overflow is present.
   */
  hasOverflowY: boolean;
  /**
   * Whether there is overflow on the inline start side for the horizontal axis.
   */
  overflowXStart: boolean;
  /**
   * Whether there is overflow on the inline end side for the horizontal axis.
   */
  overflowXEnd: boolean;
  /**
   * Whether there is overflow on the block start side.
   */
  overflowYStart: boolean;
  /**
   * Whether there is overflow on the block end side.
   */
  overflowYEnd: boolean;
  /**
   * Whether the scrollbar corner is hidden.
   */
  cornerHidden: boolean;
}
interface ScrollAreaRootProps extends BaseUIComponentProps<
  "div",
  ScrollAreaRootState
> {
  /**
   * The threshold in pixels that must be passed before the overflow edge attributes are applied.
   * Accepts a single number for all edges or an object to configure them individually.
   * @default 0
   */
  overflowEdgeThreshold?:
    | number
    | Partial<{
        xStart: number;
        xEnd: number;
        yStart: number;
        yEnd: number;
      }>
    | undefined;
}
/**
 * Groups all parts of the scroll area.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
 */
declare const ScrollAreaRoot: React.ForwardRefExoticComponent<
  Omit<ScrollAreaRootProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ScrollAreaRoot {
  type State = ScrollAreaRootState;
  type Props = ScrollAreaRootProps;
}

interface ScrollAreaViewportProps extends BaseUIComponentProps<
  "div",
  ScrollAreaViewportState
> {}
interface ScrollAreaViewportState extends ScrollAreaRootState {}
/**
 * The actual scrollable container of the scroll area.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
 */
declare const ScrollAreaViewport: React.ForwardRefExoticComponent<
  Omit<ScrollAreaViewportProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ScrollAreaViewport {
  type Props = ScrollAreaViewportProps;
  type State = ScrollAreaViewportState;
}

interface ScrollAreaScrollbarState extends ScrollAreaRootState {
  /**
   * Whether the scroll area is being hovered.
   */
  hovering: boolean;
  /**
   * Whether the scroll area is being scrolled.
   */
  scrolling: boolean;
  /**
   * The orientation of the scrollbar.
   */
  orientation: "vertical" | "horizontal";
}
interface ScrollAreaScrollbarProps extends BaseUIComponentProps<
  "div",
  ScrollAreaScrollbarState
> {
  /**
   * Whether the scrollbar controls vertical or horizontal scroll.
   * @default 'vertical'
   */
  orientation?: "vertical" | "horizontal" | undefined;
  /**
   * Whether to keep the HTML element in the DOM when the viewport isn't scrollable.
   * @default false
   */
  keepMounted?: boolean | undefined;
}
/**
 * A vertical or horizontal scrollbar for the scroll area.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
 */
declare const ScrollAreaScrollbar: React.ForwardRefExoticComponent<
  Omit<ScrollAreaScrollbarProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ScrollAreaScrollbar {
  type State = ScrollAreaScrollbarState;
  type Props = ScrollAreaScrollbarProps;
}

interface ScrollAreaContentState extends ScrollAreaRootState {}
interface ScrollAreaContentProps extends BaseUIComponentProps<
  "div",
  ScrollAreaContentState
> {}
/**
 * A container for the content of the scroll area.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
 */
declare const ScrollAreaContent: React.ForwardRefExoticComponent<
  Omit<ScrollAreaContentProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ScrollAreaContent {
  type State = ScrollAreaContentState;
  type Props = ScrollAreaContentProps;
}

interface ScrollAreaThumbState {
  /**
   * The component orientation.
   */
  orientation?: "horizontal" | "vertical" | undefined;
}
interface ScrollAreaThumbProps extends BaseUIComponentProps<
  "div",
  ScrollAreaThumbState
> {}
/**
 * The draggable part of the scrollbar that indicates the current scroll position.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
 */
declare const ScrollAreaThumb: React.ForwardRefExoticComponent<
  Omit<ScrollAreaThumbProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ScrollAreaThumb {
  type State = ScrollAreaThumbState;
  type Props = ScrollAreaThumbProps;
}

interface ScrollAreaCornerState {}
interface ScrollAreaCornerProps extends BaseUIComponentProps<
  "div",
  ScrollAreaCornerState
> {}
/**
 * A small rectangular area that appears at the intersection of horizontal and vertical scrollbars.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
 */
declare const ScrollAreaCorner: React.ForwardRefExoticComponent<
  Omit<ScrollAreaCornerProps, "ref"> & React.RefAttributes<HTMLDivElement>
>;
declare namespace ScrollAreaCorner {
  type State = ScrollAreaCornerState;
  type Props = ScrollAreaCornerProps;
}

declare namespace index_parts {
  export {
    ScrollAreaContent as Content,
    ScrollAreaCorner as Corner,
    ScrollAreaRoot as Root,
    ScrollAreaScrollbar as Scrollbar,
    ScrollAreaThumb as Thumb,
    ScrollAreaViewport as Viewport,
  };
}

export {
  type Coords,
  type HiddenState,
  type OverflowEdges,
  index_parts as ScrollArea,
  ScrollAreaContent,
  type ScrollAreaContentProps,
  type ScrollAreaContentState,
  ScrollAreaCorner,
  type ScrollAreaCornerProps,
  type ScrollAreaCornerState,
  ScrollAreaRoot,
  type ScrollAreaRootProps,
  type ScrollAreaRootState,
  ScrollAreaScrollbar,
  type ScrollAreaScrollbarProps,
  type ScrollAreaScrollbarState,
  ScrollAreaThumb,
  type ScrollAreaThumbProps,
  type ScrollAreaThumbState,
  ScrollAreaViewport,
  type ScrollAreaViewportProps,
  type ScrollAreaViewportState,
  type Size,
};
