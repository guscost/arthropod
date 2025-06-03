// NOTE: Users of the `experimental` builds of React should add a reference
// to 'react-dom/experimental' in their project. See experimental.d.ts's top comment
// for reference and documentation on how exactly to do it.

export as namespace ReactDOM;

import { Key, ReactNode, ReactPortal } from "react";

export function createPortal(
  children: ReactNode,
  container: Element | DocumentFragment,
  key?: Key | null,
): ReactPortal;

export const version: string;

export function flushSync<R>(fn: () => R): R;

export function unstable_batchedUpdates<A, R>(callback: (a: A) => R, a: A): R;
export function unstable_batchedUpdates<R>(callback: () => R): R;

export interface FormStatusNotPending {
  pending: false;
  data: null;
  method: null;
  action: null;
}

export interface FormStatusPending {
  pending: true;
  data: FormData;
  method: string;
  action: string | ((formData: FormData) => void | Promise<void>);
}

export type FormStatus = FormStatusPending | FormStatusNotPending;

export function useFormStatus(): FormStatus;

export function useFormState<State>(
  action: (state: Awaited<State>) => State | Promise<State>,
  initialState: Awaited<State>,
  permalink?: string,
): [state: Awaited<State>, dispatch: () => void, isPending: boolean];
export function useFormState<State, Payload>(
  action: (state: Awaited<State>, payload: Payload) => State | Promise<State>,
  initialState: Awaited<State>,
  permalink?: string,
): [
  state: Awaited<State>,
  dispatch: (payload: Payload) => void,
  isPending: boolean,
];

export function prefetchDNS(href: string): void;

export interface PreconnectOptions {
  // Don't create a helper type.
  // It would have to be in module scope to be inlined in TS tooltips.
  // But then it becomes part of the public API.
  // TODO: Upstream to microsoft/TypeScript-DOM-lib-generator -> w3c/webref
  // since the spec has a notion of a dedicated type: https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute
  crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
}
export function preconnect(href: string, options?: PreconnectOptions): void;

export type PreloadAs =
  | "audio"
  | "document"
  | "embed"
  | "fetch"
  | "font"
  | "image"
  | "object"
  | "track"
  | "script"
  | "style"
  | "video"
  | "worker";
export interface PreloadOptions {
  as: PreloadAs;
  crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
  fetchPriority?: "high" | "low" | "auto" | undefined;
  // TODO: These should only be allowed with `as: 'image'` but it's not trivial to write tests against the full TS support matrix.
  imageSizes?: string | undefined;
  imageSrcSet?: string | undefined;
  integrity?: string | undefined;
  type?: string | undefined;
  nonce?: string | undefined;
  referrerPolicy?: ReferrerPolicy | undefined;
  media?: string | undefined;
}
export function preload(href: string, options?: PreloadOptions): void;

// https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload
export type PreloadModuleAs = RequestDestination;
export interface PreloadModuleOptions {
  /**
   * @default "script"
   */
  as: PreloadModuleAs;
  crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
  integrity?: string | undefined;
  nonce?: string | undefined;
}
export function preloadModule(
  href: string,
  options?: PreloadModuleOptions,
): void;

export type PreinitAs = "script" | "style";
export interface PreinitOptions {
  as: PreinitAs;
  crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
  fetchPriority?: "high" | "low" | "auto" | undefined;
  precedence?: string | undefined;
  integrity?: string | undefined;
  nonce?: string | undefined;
}
export function preinit(href: string, options?: PreinitOptions): void;

// Will be expanded to include all of https://github.com/tc39/proposal-import-attributes
export type PreinitModuleAs = "script";
export interface PreinitModuleOptions {
  /**
   * @default "script"
   */
  as?: PreinitModuleAs;
  crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
  integrity?: string | undefined;
  nonce?: string | undefined;
}
export function preinitModule(
  href: string,
  options?: PreinitModuleOptions,
): void;

export function requestFormReset(form: HTMLFormElement): void;

/**
 * WARNING: This entrypoint is only available starting with `react-dom@18.0.0-rc.1`
 */

// See https://github.com/facebook/react/blob/main/packages/react-dom/client.js to see how the exports are declared,

import React = require("react");

export {};

declare const REACT_FORM_STATE_SIGIL: unique symbol;
export interface ReactFormState {
  [REACT_FORM_STATE_SIGIL]: never;
}

export interface HydrationOptions {
  formState?: ReactFormState | null;
  /**
   * Prefix for `useId`.
   */
  identifierPrefix?: string;
  onUncaughtError?:
    | ((
        error: unknown,
        errorInfo: { componentStack?: string | undefined },
      ) => void)
    | undefined;
  onRecoverableError?: (error: unknown, errorInfo: ErrorInfo) => void;
  onCaughtError?:
    | ((
        error: unknown,
        errorInfo: {
          componentStack?: string | undefined;
          errorBoundary?: React.Component<unknown> | undefined;
        },
      ) => void)
    | undefined;
}

export interface RootOptions {
  /**
   * Prefix for `useId`.
   */
  identifierPrefix?: string;
  onUncaughtError?:
    | ((
        error: unknown,
        errorInfo: { componentStack?: string | undefined },
      ) => void)
    | undefined;
  onRecoverableError?: (error: unknown, errorInfo: ErrorInfo) => void;
  onCaughtError?:
    | ((
        error: unknown,
        errorInfo: {
          componentStack?: string | undefined;
          errorBoundary?: React.Component<unknown> | undefined;
        },
      ) => void)
    | undefined;
}

export interface ErrorInfo {
  componentStack?: string;
}

export interface Root {
  render(children: React.ReactNode): void;
  unmount(): void;
}

/**
 * Different release channels declare additional types of ReactNode this particular release channel accepts.
 * App or library types should never augment this interface.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_CREATE_ROOT_CONTAINERS {}

export type Container =
  | Element
  | DocumentFragment
  | Document
  | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_CREATE_ROOT_CONTAINERS[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_CREATE_ROOT_CONTAINERS];

/**
 * createRoot lets you create a root to display React components inside a browser DOM node.
 *
 * @see {@link https://react.dev/reference/react-dom/client/createRoot API Reference for `createRoot`}
 */
export function createRoot(container: Container, options?: RootOptions): Root;

/**
 * Same as `createRoot()`, but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer.
 *
 * React will attempt to attach event listeners to the existing markup.
 *
 * **Example Usage**
 *
 * ```jsx
 * hydrateRoot(document.querySelector('#root'), <App />)
 * ```
 *
 * @see https://reactjs.org/docs/react-dom-client.html#hydrateroot
 */
export function hydrateRoot(
  container: Element | Document,
  initialChildren: React.ReactNode,
  options?: HydrationOptions,
): Root;
