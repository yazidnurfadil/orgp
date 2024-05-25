// import Checkbox from "./checkbox";
// import CheckboxGroup from "./checkbox-group";

// // export hooks
// export { useCheckbox } from "./use-checkbox";
// export { useCheckboxGroup } from "./use-checkbox-group";

// // export types
// export type { CheckboxProps } from "./checkbox";
// export type { CheckboxGroupProps } from "./checkbox-group";
// export type { CheckboxIconProps } from "./use-checkbox";

// // export context
// export {
//   CheckboxGroupProvider,
//   useCheckboxGroupContext,
// } from "./checkbox-group-context";

// // export components
// export { Checkbox, CheckboxGroup };
// export { CheckboxIcon } from "./checkbox-icon";

import {
  // component
  Checkbox as NextUiCheckbox,
  CheckboxGroup as NextUiCheckboxGroup,
  CheckboxIcon as NextUiCheckboxIcon,
  // hook
  useCheckbox as nextUiUseCheckbox,
  useCheckboxGroup as nextUiUseCheckboxGroup,
} from "@nextui-org/checkbox";

// type
import type {
  CheckboxProps as NextUiCheckboxProps,
  CheckboxGroupProps as NextUiCheckboxGroupProps,
  CheckboxIconProps as NextUiCheckboxIconProps,
} from "@nextui-org/checkbox";

// export type
export interface CheckboxProps extends NextUiCheckboxProps {}
export interface CardFooterProps extends NextUiCheckboxGroupProps {}
export type CheckboxIconProps = NextUiCheckboxIconProps;

// export component
export const Checkbox = NextUiCheckbox;
export const CheckboxGroup = NextUiCheckboxGroup;
export const CheckboxIcon = NextUiCheckboxIcon;

// export hook
export const useCheckbox = nextUiUseCheckbox;
export const useCheckboxGroup = nextUiUseCheckboxGroup;
