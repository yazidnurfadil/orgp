import {
  Slider as NextUiSlider,
  useSlider as useNextUiSlider,
} from "@nextui-org/slider";

import type {
  SliderProps as NextUiSliderProps,
  SliderValue as NextUiSliderValue,
} from "@nextui-org/slider";

// export types

export type SliderProps = NextUiSliderProps;
export type SliderValue = NextUiSliderValue;

// export hooks
export const useSlider = useNextUiSlider;

// export component
export const Slider = NextUiSlider;
