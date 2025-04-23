import {
  ForwardedRef,
  CSSProperties,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  RefAttributes,
  ForwardRefExoticComponent,
} from "react";

export type Direction = "horizontal" | "vertical";
export type ResizeEvent = KeyboardEvent | PointerEvent | MouseEvent;
export type ResizeHandler = (event: ResizeEvent) => void;

export type ResizeHandlerAction = "down" | "move" | "up";
export type SetResizeHandlerState = (
  action: ResizeHandlerAction,
  isActive: boolean,
  event: ResizeEvent | null,
) => void;
export type PointerHitAreaMargins = {
  coarse: number;
  fine: number;
};
export type ResizeHandlerData = {
  direction: Direction;
  element: HTMLElement;
  hitAreaMargins: PointerHitAreaMargins;
  setResizeHandlerState: SetResizeHandlerState;
};
export declare const EXCEEDED_HORIZONTAL_MIN = 1;
export declare const EXCEEDED_HORIZONTAL_MAX = 2;
export declare const EXCEEDED_VERTICAL_MIN = 4;
export declare const EXCEEDED_VERTICAL_MAX = 8;
export declare function registerResizeHandle(
  resizeHandleId: string,
  element: HTMLElement,
  direction: Direction,
  hitAreaMargins: PointerHitAreaMargins,
  setResizeHandlerState: SetResizeHandlerState,
): () => void;
export declare function reportConstraintsViolation(
  resizeHandleId: string,
  flag: number,
): void;

export type PanelResizeHandleOnDragging = (isDragging: boolean) => void;
export type ResizeHandlerState = "drag" | "hover" | "inactive";
export type PanelResizeHandleProps = Omit<
  HTMLAttributes<keyof HTMLElementTagNameMap>,
  "id" | "onBlur" | "onClick" | "onFocus" | "onPointerDown" | "onPointerUp"
> &
  PropsWithChildren<{
    className?: string;
    disabled?: boolean;
    hitAreaMargins?: PointerHitAreaMargins;
    id?: string | null;
    onBlur?: () => void;
    onClick?: () => void;
    onDragging?: PanelResizeHandleOnDragging;
    onFocus?: () => void;
    onPointerDown?: () => void;
    onPointerUp?: () => void;
    style?: CSSProperties;
    tabIndex?: number;
    tagName?: keyof HTMLElementTagNameMap;
  }>;
export declare function PanelResizeHandle({
  children,
  className: classNameFromProps,
  disabled,
  hitAreaMargins,
  id: idFromProps,
  onBlur,
  onClick,
  onDragging,
  onFocus,
  onPointerDown,
  onPointerUp,
  style: styleFromProps,
  tabIndex,
  tagName: Type,
  ...rest
}: PanelResizeHandleProps): ReactElement;
export declare namespace PanelResizeHandle {
  var displayName: string;
}

export type ImperativePanelGroupHandle = {
  getId: () => string;
  getLayout: () => number[];
  setLayout: (layout: number[]) => void;
};
export type PanelGroupStorage = {
  getItem(name: string): string | null;
  setItem(name: string, value: string): void;
};
export type PanelGroupOnLayout = (layout: number[]) => void;
export type PanelGroupProps = Omit<
  HTMLAttributes<keyof HTMLElementTagNameMap>,
  "id"
> &
  PropsWithChildren<{
    autoSaveId?: string | null;
    className?: string;
    direction: Direction;
    id?: string | null;
    keyboardResizeBy?: number | null;
    onLayout?: PanelGroupOnLayout | null;
    storage?: PanelGroupStorage;
    style?: CSSProperties;
    tagName?: keyof HTMLElementTagNameMap;
    dir?: "auto" | "ltr" | "rtl" | undefined;
  }>;
export declare const PanelGroup: ForwardRefExoticComponent<
  Omit<HTMLAttributes<keyof HTMLElementTagNameMap>, "id"> & {
    autoSaveId?: string | null | undefined;
    className?: string | undefined;
    direction: Direction;
    id?: string | null | undefined;
    keyboardResizeBy?: number | null | undefined;
    onLayout?: PanelGroupOnLayout | null | undefined;
    storage?: PanelGroupStorage | undefined;
    style?: CSSProperties | undefined;
    tagName?: keyof HTMLElementTagNameMap | undefined;
    dir?: "auto" | "ltr" | "rtl" | undefined;
  } & {
    children?: ReactNode;
  } & RefAttributes<ImperativePanelGroupHandle>
>;

export type PanelOnCollapse = () => void;
export type PanelOnExpand = () => void;
export type PanelOnResize = (
  size: number,
  prevSize: number | undefined,
) => void;
export type PanelCallbacks = {
  onCollapse?: PanelOnCollapse;
  onExpand?: PanelOnExpand;
  onResize?: PanelOnResize;
};
export type PanelConstraints = {
  collapsedSize?: number | undefined;
  collapsible?: boolean | undefined;
  defaultSize?: number | undefined;
  maxSize?: number | undefined;
  minSize?: number | undefined;
};
export type PanelData = {
  callbacks: PanelCallbacks;
  constraints: PanelConstraints;
  id: string;
  idIsFromProps: boolean;
  order: number | undefined;
};
export type ImperativePanelHandle = {
  collapse: () => void;
  expand: (minSize?: number) => void;
  getId(): string;
  getSize(): number;
  isCollapsed: () => boolean;
  isExpanded: () => boolean;
  resize: (size: number) => void;
};
export type PanelProps<
  T extends keyof HTMLElementTagNameMap = keyof HTMLElementTagNameMap,
> = Omit<HTMLAttributes<HTMLElementTagNameMap[T]>, "id" | "onResize"> &
  PropsWithChildren<{
    className?: string;
    collapsedSize?: number | undefined;
    collapsible?: boolean | undefined;
    defaultSize?: number | undefined;
    id?: string;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    onCollapse?: PanelOnCollapse;
    onExpand?: PanelOnExpand;
    onResize?: PanelOnResize;
    order?: number;
    style?: object;
    tagName?: T;
  }>;
export declare function PanelWithForwardedRef({
  children,
  className: classNameFromProps,
  collapsedSize,
  collapsible,
  defaultSize,
  forwardedRef,
  id: idFromProps,
  maxSize,
  minSize,
  onCollapse,
  onExpand,
  onResize,
  order,
  style: styleFromProps,
  tagName: Type,
  ...rest
}: PanelProps & {
  forwardedRef: ForwardedRef<ImperativePanelHandle>;
}): ReactElement;
export declare namespace PanelWithForwardedRef {
  var displayName: string;
}
export declare const Panel: ForwardRefExoticComponent<
  Omit<
    HTMLAttributes<
      | HTMLObjectElement
      | HTMLElement
      | HTMLSlotElement
      | HTMLStyleElement
      | HTMLTitleElement
      | HTMLAnchorElement
      | HTMLAreaElement
      | HTMLAudioElement
      | HTMLBaseElement
      | HTMLQuoteElement
      | HTMLBodyElement
      | HTMLBRElement
      | HTMLButtonElement
      | HTMLCanvasElement
      | HTMLTableCaptionElement
      | HTMLTableColElement
      | HTMLDataElement
      | HTMLDataListElement
      | HTMLModElement
      | HTMLDetailsElement
      | HTMLDialogElement
      | HTMLDivElement
      | HTMLDListElement
      | HTMLEmbedElement
      | HTMLFieldSetElement
      | HTMLFormElement
      | HTMLHeadingElement
      | HTMLHeadElement
      | HTMLHRElement
      | HTMLHtmlElement
      | HTMLIFrameElement
      | HTMLImageElement
      | HTMLInputElement
      | HTMLLabelElement
      | HTMLLegendElement
      | HTMLLIElement
      | HTMLLinkElement
      | HTMLMapElement
      | HTMLMenuElement
      | HTMLMetaElement
      | HTMLMeterElement
      | HTMLOListElement
      | HTMLOptGroupElement
      | HTMLOptionElement
      | HTMLOutputElement
      | HTMLParagraphElement
      | HTMLPictureElement
      | HTMLPreElement
      | HTMLProgressElement
      | HTMLScriptElement
      | HTMLSelectElement
      | HTMLSourceElement
      | HTMLSpanElement
      | HTMLTableElement
      | HTMLTableSectionElement
      | HTMLTableCellElement
      | HTMLTemplateElement
      | HTMLTextAreaElement
      | HTMLTimeElement
      | HTMLTableRowElement
      | HTMLTrackElement
      | HTMLUListElement
      | HTMLVideoElement
    >,
    "id" | "onResize"
  > & {
    className?: string | undefined;
    collapsedSize?: number | undefined;
    collapsible?: boolean | undefined;
    defaultSize?: number | undefined;
    id?: string | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    onCollapse?: PanelOnCollapse | undefined;
    onExpand?: PanelOnExpand | undefined;
    onResize?: PanelOnResize | undefined;
    order?: number | undefined;
    style?: object | undefined;
    tagName?: keyof HTMLElementTagNameMap | undefined;
  } & {
    children?: ReactNode;
  } & RefAttributes<ImperativePanelHandle>
>;

type CursorState = "horizontal" | "intersection" | "vertical";
export declare function disableGlobalCursorStyles(): void;
export declare function enableGlobalCursorStyles(): void;
export declare function getCursorStyle(
  state: CursorState,
  constraintFlags: number,
): string;
export declare function resetGlobalCursorStyle(): void;
export declare function setGlobalCursorStyle(
  state: CursorState,
  constraintFlags: number,
): void;

export declare function getNonce(): string | null;
export declare function setNonce(value: string | null): void;

export declare function assert(
  expectedCondition: any,
  message: string,
): asserts expectedCondition;

export interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export declare function intersects(
  rectOne: Rectangle,
  rectTwo: Rectangle,
  strict: boolean,
): boolean;

export declare function getIntersectingRectangle(
  rectOne: Rectangle,
  rectTwo: Rectangle,
  strict: boolean,
): Rectangle;

export declare function getResizeHandlePanelIds(
  groupId: string,
  handleId: string,
  panelsArray: PanelData[],
  scope?: ParentNode | HTMLElement,
): [idBefore: string | null, idAfter: string | null];

export declare function getResizeHandleElementsForGroup(
  groupId: string,
  scope?: ParentNode | HTMLElement,
): HTMLElement[];

export declare function getResizeHandleElementIndex(
  groupId: string,
  id: string,
  scope?: ParentNode | HTMLElement,
): number | null;

export declare function getResizeHandleElement(
  id: string,
  scope?: ParentNode | HTMLElement,
): HTMLElement | null;

export declare function getPanelGroupElement(
  id: string,
  rootElement?: ParentNode | HTMLElement,
): HTMLElement | null;

export declare function getPanelElementsForGroup(
  groupId: string,
  scope?: ParentNode | HTMLElement,
): HTMLElement[];

export declare function getPanelElement(
  id: string,
  scope?: ParentNode | HTMLElement,
): HTMLElement | null;
