import {
  // component
  Chip as NextUiChip,
  // hook
  useChip as nextUiUseChip,
} from "@nextui-org/chip";

// type
import type { ChipProps as NextUiChipProps } from "@nextui-org/chip";

// export type
export interface ChipProps extends NextUiChipProps {}

// export component
export const Chip = NextUiChip;

// export hook
export const useChip = nextUiUseChip;
