import { M, O, U, I } from "./index-F3rlTTTe";
export { I as Input, M as Mask, O as Options } from "./index-F3rlTTTe";
import {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  Path,
  UseFormRegisterReturn,
} from "react-hook-form";
export { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface UseMaskInputOptions {
  mask: M;
  register?: (element: HTMLElement) => void;
  options?: O;
}
/**
 * React hook for applying input masks to form elements.
 * Works with Ant Design and other wrapped components too.
 *
 * @param props - Configuration object
 * @param props.mask - The mask pattern to apply
 * @param props.register - Optional callback that receives the element
 * @param props.options - Optional mask configuration options
 * @returns A ref callback function to attach to the input element
 */
declare function useMaskInput(
  props: UseMaskInputOptions,
): (input: I | null) => void;

/**
 * Creates a masked version of React Hook Form's register function.
 * Takes react-hook-form's register and adds automatic masking. Like an upgrade.
 *
 * @template T - The form data type
 * @template D - The register options type
 * @param registerFn - The register function from useForm hook
 * @returns A function that registers a field with mask support
 */
declare function useHookFormMask<
  T extends FieldValues,
  D extends RegisterOptions,
>(
  registerFn: UseFormRegister<T>,
): (fieldName: Path<T>, mask: M, options?: (D & O) | O | D) => U<T>;

/**
 * Higher-order function that creates a ref callback for applying input masks.
 * Simple function to apply mask via ref. No hooks, no drama.
 *
 * @param mask - The mask pattern to apply
 * @param options - Optional mask configuration options
 * @returns A ref callback function that applies the mask
 */
declare function withMask(mask: M, options?: O): (input: I | null) => void;

/**
 * Enhances a React Hook Form register return object with mask support.
 * Takes an already registered field and adds mask to it.
 * Useful when you registered the field before.
 *
 * @param register - The register return object from React Hook Form
 * @param mask - The mask pattern to apply
 * @param options - Optional mask configuration options
 * @returns A new register return object with mask applied
 */
declare function withHookFormMask(
  register: UseFormRegisterReturn,
  mask: M,
  options?: O,
): U<FieldValues>;

export { useHookFormMask, useMaskInput, withHookFormMask, withMask };
