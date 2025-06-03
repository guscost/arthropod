import * as react from "react";
import {
  HTMLAttributes,
  PropsWithChildren,
  CSSProperties,
  ReactElement,
} from "react";

type PanelOnCollapse = () => void;
type PanelOnExpand = () => void;
type PanelOnResize = (size: number, prevSize: number | undefined) => void;
type PanelCallbacks = {
  onCollapse?: PanelOnCollapse;
  onExpand?: PanelOnExpand;
  onResize?: PanelOnResize;
};
type PanelConstraints = {
  collapsedSize?: number | undefined;
  collapsible?: boolean | undefined;
  defaultSize?: number | undefined;
  maxSize?: number | undefined;
  minSize?: number | undefined;
};
type PanelData = {
  callbacks: PanelCallbacks;
  constraints: PanelConstraints;
  id: string;
  idIsFromProps: boolean;
  order: number | undefined;
};
type ImperativePanelHandle = {
  collapse: () => void;
  expand: (minSize?: number) => void;
  getId(): string;
  getSize(): number;
  isCollapsed: () => boolean;
  isExpanded: () => boolean;
  resize: (size: number) => void;
};
type PanelProps<
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
declare const Panel: react.ForwardRefExoticComponent<
  Omit<
    HTMLAttributes<
      | HTMLObjectElement
      | HTMLElement
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
      | HTMLSlotElement
      | HTMLSourceElement
      | HTMLSpanElement
      | HTMLStyleElement
      | HTMLTableElement
      | HTMLTableSectionElement
      | HTMLTableCellElement
      | HTMLTemplateElement
      | HTMLTextAreaElement
      | HTMLTimeElement
      | HTMLTitleElement
      | HTMLTableRowElement
      | HTMLTrackElement
      | HTMLUListElement
      | HTMLVideoElement
    >,
    "id" | "onResize"
  > & {
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
    tagName?: keyof HTMLElementTagNameMap | undefined;
  } & {
    children?: react.ReactNode | undefined;
  } & react.RefAttributes<ImperativePanelHandle>
>;

type Direction = "horizontal" | "vertical";

type ImperativePanelGroupHandle = {
  getId: () => string;
  getLayout: () => number[];
  setLayout: (layout: number[]) => void;
};
type PanelGroupStorage = {
  getItem(name: string): string | null;
  setItem(name: string, value: string): void;
};
type PanelGroupOnLayout = (layout: number[]) => void;
type PanelGroupProps = Omit<HTMLAttributes<keyof HTMLElementTagNameMap>, "id"> &
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
declare const PanelGroup: react.ForwardRefExoticComponent<
  Omit<HTMLAttributes<keyof HTMLElementTagNameMap>, "id"> & {
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
  } & {
    children?: react.ReactNode | undefined;
  } & react.RefAttributes<ImperativePanelGroupHandle>
>;

type PointerHitAreaMargins = {
  coarse: number;
  fine: number;
};

type PanelResizeHandleOnDragging = (isDragging: boolean) => void;
type PanelResizeHandleProps = Omit<
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
declare function PanelResizeHandle({
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
declare namespace PanelResizeHandle {
  var displayName: string;
}

declare const DATA_ATTRIBUTES: {
  readonly group: "data-panel-group";
  readonly groupDirection: "data-panel-group-direction";
  readonly groupId: "data-panel-group-id";
  readonly panel: "data-panel";
  readonly panelCollapsible: "data-panel-collapsible";
  readonly panelId: "data-panel-id";
  readonly panelSize: "data-panel-size";
  readonly resizeHandle: "data-resize-handle";
  readonly resizeHandleActive: "data-resize-handle-active";
  readonly resizeHandleEnabled: "data-panel-resize-handle-enabled";
  readonly resizeHandleId: "data-panel-resize-handle-id";
  readonly resizeHandleState: "data-resize-handle-state";
};

declare function usePanelGroupContext(): {
  direction: "horizontal" | "vertical" | undefined;
  groupId: string | undefined;
};

declare function assert(
  expectedCondition: any,
  message: string,
): asserts expectedCondition;

declare function setNonce(value: string | null): void;

declare function disableGlobalCursorStyles(): void;
declare function enableGlobalCursorStyles(): void;

declare function getPanelElement(
  id: string,
  scope?: ParentNode | HTMLElement,
): HTMLElement | null;

declare function getPanelElementsForGroup(
  groupId: string,
  scope?: ParentNode | HTMLElement,
): HTMLElement[];

declare function getPanelGroupElement(
  id: string,
  rootElement?: ParentNode | HTMLElement,
): HTMLElement | null;

declare function getResizeHandleElement(
  id: string,
  scope?: ParentNode | HTMLElement,
): HTMLElement | null;

declare function getResizeHandleElementIndex(
  groupId: string,
  id: string,
  scope?: ParentNode | HTMLElement,
): number | null;

declare function getResizeHandleElementsForGroup(
  groupId: string,
  scope?: ParentNode | HTMLElement,
): HTMLElement[];

declare function getResizeHandlePanelIds(
  groupId: string,
  handleId: string,
  panelsArray: PanelData[],
  scope?: ParentNode | HTMLElement,
): [idBefore: string | null, idAfter: string | null];

interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

declare function getIntersectingRectangle(
  rectOne: Rectangle,
  rectTwo: Rectangle,
  strict: boolean,
): Rectangle;

declare function intersects(
  rectOne: Rectangle,
  rectTwo: Rectangle,
  strict: boolean,
): boolean;

export {
  DATA_ATTRIBUTES,
  type ImperativePanelGroupHandle,
  type ImperativePanelHandle,
  Panel,
  PanelGroup,
  type PanelGroupOnLayout,
  type PanelGroupProps,
  type PanelGroupStorage,
  type PanelOnCollapse,
  type PanelOnExpand,
  type PanelOnResize,
  type PanelProps,
  PanelResizeHandle,
  type PanelResizeHandleOnDragging,
  type PanelResizeHandleProps,
  type PointerHitAreaMargins,
  assert,
  disableGlobalCursorStyles,
  enableGlobalCursorStyles,
  getIntersectingRectangle,
  getPanelElement,
  getPanelElementsForGroup,
  getPanelGroupElement,
  getResizeHandleElement,
  getResizeHandleElementIndex,
  getResizeHandleElementsForGroup,
  getResizeHandlePanelIds,
  intersects,
  setNonce,
  usePanelGroupContext,
};
