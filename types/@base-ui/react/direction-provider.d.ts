import * as React from "react";

type TextDirection = "ltr" | "rtl";
declare function useDirection(): TextDirection;

interface DirectionProviderState {}
interface DirectionProviderProps {
  children?: React.ReactNode;
  /**
   * The reading direction of the text
   * @default 'ltr'
   */
  direction?: TextDirection | undefined;
}
/**
 * Enables RTL behavior for Base UI components.
 *
 * Documentation: [Base UI Direction Provider](https://base-ui.com/react/utils/direction-provider)
 */
declare const DirectionProvider: React.FC<DirectionProvider.Props>;
declare namespace DirectionProvider {
  type State = DirectionProviderState;
  type Props = DirectionProviderProps;
}

export {
  DirectionProvider,
  type DirectionProviderProps,
  type TextDirection,
  useDirection,
};
