import {
  // component
  Tooltip as NextUiTooltip,
  // hook
  useTooltip as nextUiUseTooltip,
} from "@nextui-org/tooltip";

// type
import type {
  TooltipProps as NextUiTooltipProps,
  TooltipPlacement as NextUiTooltipPlacement,
} from "@nextui-org/tooltip";

// export type
export interface TooltipProps extends NextUiTooltipProps {}
export type TooltipPlacement = NextUiTooltipPlacement;

// export component
export const Tooltip = NextUiTooltip;

// export hook
export const useTooltip = nextUiUseTooltip;
