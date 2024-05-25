import {
  // component
  Image as NextUiImage,
  // hook
  useImage as nextUiUseImage,
} from "@nextui-org/image";

// type
import type { ImageProps as NextUiImageProps } from "@nextui-org/image";

// export type
export interface ImageProps extends NextUiImageProps {}

// export component
export const Image = NextUiImage;

// export hook
export const useImage = nextUiUseImage;
