import {
  Progress as NextUIProgress,
  CircularProgress as NextUICircularProgress,
  useProgress as useNextUIProgress,
} from "@nextui-org/progress";

import type {
  ProgressProps as NextUIProgressProps,
  CircularProgressProps as NextUICircularProgressProps,
} from "@nextui-org/progress";

// export types
export type ProgressProps = NextUIProgressProps;
export type CircularProgressProps = NextUICircularProgressProps;

// export hooks
export const useProgress = useNextUIProgress;

// export component

export const Progress = NextUIProgress;
export const CircularProgress = NextUICircularProgress;
