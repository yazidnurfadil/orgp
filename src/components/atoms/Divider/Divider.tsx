import {
  // component
  Divider as NextUiDivider,
  // hook
  useDivider as nextUiUseDivider,
} from "@nextui-org/divider";

// type
import type { DividerProps as NextUiDividerProps } from "@nextui-org/divider";

// export type
export interface DividerProps extends NextUiDividerProps {}

// export component
export const Divider = NextUiDivider;

// export hook
export const useDivider = nextUiUseDivider;
