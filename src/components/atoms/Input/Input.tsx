import {
  Input as NextUiButton,
  useInput as nextUiUseInput,
} from "@nextui-org/input";
import type { InputProps as NextUiInputProps } from "@nextui-org/input";

export type InputProps = NextUiInputProps;
export const Input = NextUiButton;
export const useInput = nextUiUseInput;
