import {
  Skeleton as NextUISkeleton,
  useSkeleton as useNextUISkeleton,
} from "@nextui-org/skeleton";

import type { SkeletonProps as NextUISkeletonProps } from "@nextui-org/skeleton";

export type SkeletonProps = NextUISkeletonProps;

export const Skeleton = NextUISkeleton;
export const useSkeleton = useNextUISkeleton;
