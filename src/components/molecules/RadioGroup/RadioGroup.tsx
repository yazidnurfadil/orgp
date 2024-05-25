import {
  Radio as NextUIRadio,
  RadioGroup as NextUiRadioGroup,
  useRadio as NextUiUseRadio,
  useRadioGroup as NextUiUseRadioGroup,
  useRadioGroupContext as NextUiUseRadioGroupContext,
} from "@nextui-org/radio";

import type {
  RadioProps as NextUiRadioProps,
  RadioGroupProps as NextUiRadioGroupProps,
} from "@nextui-org/radio";

// export types
export type RadioProps = NextUiRadioProps;
export type RadioGroupProps = NextUiRadioGroupProps;

// export hooks
export const useRadio = NextUiUseRadio;
export const useRadioGroup = NextUiUseRadioGroup;
export const useRadioGroupContext = NextUiUseRadioGroupContext;

// export component
export const Radio = NextUIRadio;
export const RadioGroup = NextUiRadioGroup;
