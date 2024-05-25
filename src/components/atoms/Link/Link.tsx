import {
  // component
  Link as NextUiLink,
  // hook
  useLink as nextUiUseLink,
} from "@nextui-org/link";

// type
import type { LinkProps as NextUiLinkProps } from "@nextui-org/link";

// export type
export interface LinkProps extends NextUiLinkProps {}

// export component
export const Link = NextUiLink;

// export hook
export const useLink = nextUiUseLink;
