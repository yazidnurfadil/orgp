// import Code from "./code";

// // export types
// export type { CodeProps } from "./code";

// // export hooks
// export { useCode } from "./use-code";

// // export component
// export { Code };

import {
  // component
  Code as NextUiCode,
  // hook
  useCode as nextUiUseCode,
} from "@nextui-org/code";

// type
import type { CodeProps as NextUiCodeProps } from "@nextui-org/code";

// export type
export interface CodeProps extends NextUiCodeProps {}

// export component
export const Code = NextUiCode;

// export hook
export const useCode = nextUiUseCode;
