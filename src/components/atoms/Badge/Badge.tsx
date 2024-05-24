import {
  // component
  Badge as NextUiBadge,
  // hook
  useBadge as nextUiUseBadge,
} from "@nextui-org/badge";

// type
import type { BadgeProps as NextUiBadgeProps } from "@nextui-org/badge";

// export type
export type BadgeProps = NextUiBadgeProps;

// export component
export const Badge = NextUiBadge;

// export hook
export const useBadge = nextUiUseBadge;
