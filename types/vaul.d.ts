import * as React from "react";

declare const NODES$3: readonly [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul",
];
type Primitives$3 = {
  [E in (typeof NODES$3)[number]]: PrimitiveForwardRefComponent$3<E>;
};
type PrimitivePropsWithRef$3<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {
    asChild?: boolean;
  };
interface PrimitiveForwardRefComponent$3<
  E extends React.ElementType,
> extends React.ForwardRefExoticComponent<PrimitivePropsWithRef$3<E>> {}
declare const Primitive$3: Primitives$3;

type PrimitiveDivProps$3 = React.ComponentPropsWithoutRef<
  typeof Primitive$3.div
>;
interface DismissableLayerProps$1 extends PrimitiveDivProps$3 {
  /**
   * When `true`, hover/focus/click interactions will be disabled on elements outside
   * the `DismissableLayer`. Users will need to click twice on outside elements to
   * interact with them: once to close the `DismissableLayer`, and again to trigger the element.
   */
  disableOutsidePointerEvents?: boolean;
  /**
   * Event handler called when the escape key is down.
   * Can be prevented.
   */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  /**
   * Event handler called when the a `pointerdown` event happens outside of the `DismissableLayer`.
   * Can be prevented.
   */
  onPointerDownOutside?: (event: PointerDownOutsideEvent) => void;
  /**
   * Event handler called when the focus moves outside of the `DismissableLayer`.
   * Can be prevented.
   */
  onFocusOutside?: (event: FocusOutsideEvent) => void;
  /**
   * Event handler called when an interaction happens outside the `DismissableLayer`.
   * Specifically, when a `pointerdown` event happens outside or focus moves outside of it.
   * Can be prevented.
   */
  onInteractOutside?: (
    event: PointerDownOutsideEvent | FocusOutsideEvent,
  ) => void;
  /**
   * Handler called when the `DismissableLayer` should be dismissed
   */
  onDismiss?: () => void;
}
declare const DismissableLayer: React.ForwardRefExoticComponent<
  DismissableLayerProps$1 & React.RefAttributes<HTMLDivElement>
>;
type PointerDownOutsideEvent = CustomEvent<{
  originalEvent: PointerEvent;
}>;
type FocusOutsideEvent = CustomEvent<{
  originalEvent: FocusEvent;
}>;

declare const NODES$2: readonly [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul",
];
type Primitives$2 = {
  [E in (typeof NODES$2)[number]]: PrimitiveForwardRefComponent$2<E>;
};
type PrimitivePropsWithRef$2<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {
    asChild?: boolean;
  };
interface PrimitiveForwardRefComponent$2<
  E extends React.ElementType,
> extends React.ForwardRefExoticComponent<PrimitivePropsWithRef$2<E>> {}
declare const Primitive$2: Primitives$2;

type PrimitiveDivProps$2 = React.ComponentPropsWithoutRef<
  typeof Primitive$2.div
>;
interface FocusScopeProps$1 extends PrimitiveDivProps$2 {
  /**
   * When `true`, tabbing from last item will focus first tabbable
   * and shift+tab from first item will focus last tababble.
   * @defaultValue false
   */
  loop?: boolean;
  /**
   * When `true`, focus cannot escape the focus scope via keyboard,
   * pointer, or a programmatic focus.
   * @defaultValue false
   */
  trapped?: boolean;
  /**
   * Event handler called when auto-focusing on mount.
   * Can be prevented.
   */
  onMountAutoFocus?: (event: Event) => void;
  /**
   * Event handler called when auto-focusing on unmount.
   * Can be prevented.
   */
  onUnmountAutoFocus?: (event: Event) => void;
}
declare const FocusScope: React.ForwardRefExoticComponent<
  FocusScopeProps$1 & React.RefAttributes<HTMLDivElement>
>;

declare const NODES$1: readonly [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul",
];
type Primitives$1 = {
  [E in (typeof NODES$1)[number]]: PrimitiveForwardRefComponent$1<E>;
};
type PrimitivePropsWithRef$1<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {
    asChild?: boolean;
  };
interface PrimitiveForwardRefComponent$1<
  E extends React.ElementType,
> extends React.ForwardRefExoticComponent<PrimitivePropsWithRef$1<E>> {}
declare const Primitive$1: Primitives$1;

type PrimitiveDivProps$1 = React.ComponentPropsWithoutRef<
  typeof Primitive$1.div
>;
interface PortalProps$2 extends PrimitiveDivProps$1 {
  /**
   * An optional container where the portaled content should be appended.
   */
  container?: Element | DocumentFragment | null;
}
declare const Portal$2: React.ForwardRefExoticComponent<
  PortalProps$2 & React.RefAttributes<HTMLDivElement>
>;

declare const NODES: readonly [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul",
];
type Primitives = {
  [E in (typeof NODES)[number]]: PrimitiveForwardRefComponent<E>;
};
type PrimitivePropsWithRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {
    asChild?: boolean;
  };
interface PrimitiveForwardRefComponent<
  E extends React.ElementType,
> extends React.ForwardRefExoticComponent<PrimitivePropsWithRef<E>> {}
declare const Primitive: Primitives;

type PrimitiveButtonProps = React.ComponentPropsWithoutRef<
  typeof Primitive.button
>;
interface DialogTriggerProps extends PrimitiveButtonProps {}
type PortalProps$1 = React.ComponentPropsWithoutRef<typeof Portal$2>;
interface DialogPortalProps {
  children?: React.ReactNode;
  /**
   * Specify a container element to portal the content into.
   */
  container?: PortalProps$1["container"];
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}
interface DialogOverlayProps extends DialogOverlayImplProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}
type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
interface DialogOverlayImplProps extends PrimitiveDivProps {}
interface DialogContentProps extends DialogContentTypeProps {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: true;
}
interface DialogContentTypeProps extends Omit<
  DialogContentImplProps,
  "trapFocus" | "disableOutsidePointerEvents"
> {}
type DismissableLayerProps = React.ComponentPropsWithoutRef<
  typeof DismissableLayer
>;
type FocusScopeProps = React.ComponentPropsWithoutRef<typeof FocusScope>;
interface DialogContentImplProps extends Omit<
  DismissableLayerProps,
  "onDismiss"
> {
  /**
   * When `true`, focus cannot escape the `Content` via keyboard,
   * pointer, or a programmatic focus.
   * @defaultValue false
   */
  trapFocus?: FocusScopeProps["trapped"];
  /**
   * Event handler called when auto-focusing on open.
   * Can be prevented.
   */
  onOpenAutoFocus?: FocusScopeProps["onMountAutoFocus"];
  /**
   * Event handler called when auto-focusing on close.
   * Can be prevented.
   */
  onCloseAutoFocus?: FocusScopeProps["onUnmountAutoFocus"];
}
type PrimitiveHeading2Props = React.ComponentPropsWithoutRef<
  typeof Primitive.h2
>;
interface DialogTitleProps extends PrimitiveHeading2Props {}
type PrimitiveParagraphProps = React.ComponentPropsWithoutRef<
  typeof Primitive.p
>;
interface DialogDescriptionProps extends PrimitiveParagraphProps {}
interface DialogCloseProps extends PrimitiveButtonProps {}
declare const Portal$1: React.FC<DialogPortalProps>;
declare const Content$1: React.ForwardRefExoticComponent<
  DialogContentProps & React.RefAttributes<HTMLDivElement>
>;

interface WithFadeFromProps {
  /**
   * Array of numbers from 0 to 100 that corresponds to % of the screen a given snap point should take up.
   * Should go from least visible. Example `[0.2, 0.5, 0.8]`.
   * You can also use px values, which doesn't take screen height into account.
   */
  snapPoints: (number | string)[];
  /**
   * Index of a `snapPoint` from which the overlay fade should be applied. Defaults to the last snap point.
   */
  fadeFromIndex: number;
}
interface WithoutFadeFromProps {
  /**
   * Array of numbers from 0 to 100 that corresponds to % of the screen a given snap point should take up.
   * Should go from least visible. Example `[0.2, 0.5, 0.8]`.
   * You can also use px values, which doesn't take screen height into account.
   */
  snapPoints?: (number | string)[];
  fadeFromIndex?: never;
}
type DialogProps = {
  activeSnapPoint?: number | string | null;
  setActiveSnapPoint?: (snapPoint: number | string | null) => void;
  children?: React.ReactNode;
  open?: boolean;
  /**
   * Number between 0 and 1 that determines when the drawer should be closed.
   * Example: threshold of 0.5 would close the drawer if the user swiped for 50% of the height of the drawer or more.
   * @default 0.25
   */
  closeThreshold?: number;
  /**
   * When `true` the `body` doesn't get any styles assigned from Vaul
   */
  noBodyStyles?: boolean;
  onOpenChange?: (open: boolean) => void;
  shouldScaleBackground?: boolean;
  /**
   * When `false` we don't change body's background color when the drawer is open.
   * @default true
   */
  setBackgroundColorOnScale?: boolean;
  /**
   * Duration for which the drawer is not draggable after scrolling content inside of the drawer.
   * @default 500ms
   */
  scrollLockTimeout?: number;
  /**
   * When `true`, don't move the drawer upwards if there's space, but rather only change it's height so it's fully scrollable when the keyboard is open
   */
  fixed?: boolean;
  /**
   * When `true` only allows the drawer to be dragged by the `<Drawer.Handle />` component.
   * @default false
   */
  handleOnly?: boolean;
  /**
   * When `false` dragging, clicking outside, pressing esc, etc. will not close the drawer.
   * Use this in comination with the `open` prop, otherwise you won't be able to open/close the drawer.
   * @default true
   */
  dismissible?: boolean;
  onDrag?: (
    event: React.PointerEvent<HTMLDivElement>,
    percentageDragged: number,
  ) => void;
  onRelease?: (
    event: React.PointerEvent<HTMLDivElement>,
    open: boolean,
  ) => void;
  /**
   * When `false` it allows to interact with elements outside of the drawer without closing it.
   * @default true
   */
  modal?: boolean;
  nested?: boolean;
  onClose?: () => void;
  /**
   * Direction of the drawer. Can be `top` or `bottom`, `left`, `right`.
   * @default 'bottom'
   */
  direction?: "top" | "bottom" | "left" | "right";
  /**
   * Opened by default, skips initial enter animation. Still reacts to `open` state changes
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * When set to `true` prevents scrolling on the document body on mount, and restores it on unmount.
   * @default false
   */
  disablePreventScroll?: boolean;
  /**
   * When `true` Vaul will reposition inputs rather than scroll then into view if the keyboard is in the way.
   * Setting it to `false` will fall back to the default browser behavior.
   * @default true when {@link snapPoints} is defined
   */
  repositionInputs?: boolean;
  /**
   * Disabled velocity based swiping for snap points.
   * This means that a snap point won't be skipped even if the velocity is high enough.
   * Useful if each snap point in a drawer is equally important.
   * @default false
   */
  snapToSequentialPoint?: boolean;
  container?: HTMLElement | null;
  /**
   * Gets triggered after the open or close animation ends, it receives an `open` argument with the `open` state of the drawer by the time the function was triggered.
   * Useful to revert any state changes for example.
   */
  onAnimationEnd?: (open: boolean) => void;
  preventScrollRestoration?: boolean;
  autoFocus?: boolean;
} & (WithFadeFromProps | WithoutFadeFromProps);
declare function Root({
  open: openProp,
  onOpenChange,
  children,
  onDrag: onDragProp,
  onRelease: onReleaseProp,
  snapPoints,
  shouldScaleBackground,
  setBackgroundColorOnScale,
  closeThreshold,
  scrollLockTimeout,
  dismissible,
  handleOnly,
  fadeFromIndex,
  activeSnapPoint: activeSnapPointProp,
  setActiveSnapPoint: setActiveSnapPointProp,
  fixed,
  modal,
  onClose,
  nested,
  noBodyStyles,
  direction,
  defaultOpen,
  disablePreventScroll,
  snapToSequentialPoint,
  preventScrollRestoration,
  repositionInputs,
  onAnimationEnd,
  container,
  autoFocus,
}: DialogProps): React.JSX.Element;
declare const Overlay: React.ForwardRefExoticComponent<
  Omit<DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> &
    React.RefAttributes<HTMLDivElement>
>;
type ContentProps = React.ComponentPropsWithoutRef<typeof Content$1>;
declare const Content: React.ForwardRefExoticComponent<
  Omit<DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> &
    React.RefAttributes<HTMLDivElement>
>;
type HandleProps = React.ComponentPropsWithoutRef<"div"> & {
  preventCycle?: boolean;
};
declare const Handle: React.ForwardRefExoticComponent<
  Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > & {
    preventCycle?: boolean | undefined;
  } & React.RefAttributes<HTMLDivElement>
>;
declare function NestedRoot({
  onDrag,
  onOpenChange,
  open: nestedIsOpen,
  ...rest
}: DialogProps): React.JSX.Element;
type PortalProps = React.ComponentPropsWithoutRef<typeof Portal$1>;
declare function Portal(props: PortalProps): React.JSX.Element;
declare const Drawer: {
  Root: typeof Root;
  NestedRoot: typeof NestedRoot;
  Content: React.ForwardRefExoticComponent<
    Omit<DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> &
      React.RefAttributes<HTMLDivElement>
  >;
  Overlay: React.ForwardRefExoticComponent<
    Omit<DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> &
      React.RefAttributes<HTMLDivElement>
  >;
  Trigger: React.ForwardRefExoticComponent<
    DialogTriggerProps & React.RefAttributes<HTMLButtonElement>
  >;
  Portal: typeof Portal;
  Handle: React.ForwardRefExoticComponent<
    Omit<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >,
      "ref"
    > & {
      preventCycle?: boolean | undefined;
    } & React.RefAttributes<HTMLDivElement>
  >;
  Close: React.ForwardRefExoticComponent<
    DialogCloseProps & React.RefAttributes<HTMLButtonElement>
  >;
  Title: React.ForwardRefExoticComponent<
    DialogTitleProps & React.RefAttributes<HTMLHeadingElement>
  >;
  Description: React.ForwardRefExoticComponent<
    DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>
  >;
};

export {
  Content,
  type ContentProps,
  type DialogProps,
  Drawer,
  Handle,
  type HandleProps,
  NestedRoot,
  Overlay,
  Portal,
  Root,
  type WithFadeFromProps,
  type WithoutFadeFromProps,
};
