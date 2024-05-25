// // export types
// export type {CardProps} from "./card";
// export type {CardFooterProps} from "./card-footer";

// // export hooks
// export {useCard} from "./use-card";

// // export context
// export {CardProvider, useCardContext} from "./card-context";

// // export components
// export {default as Card} from "./card";
// export {default as CardHeader} from "./card-header";
// export {default as CardBody} from "./card-body";
// export {default as CardFooter} from "./card-footer";

import {
  // component
  Card as NextUiCard,
  CardHeader as NextUiCardHeader,
  CardBody as NextUiCardBody,
  CardFooter as NextUiCardFooter,
  // hook
  useCard as nextUiUseCard,
} from "@nextui-org/card";

// type
import type {
  CardProps as NextUiCardProps,
  CardFooterProps as NextUiCardFooterProps,
} from "@nextui-org/card";

// export type
export interface CardProps extends NextUiCardProps {}
export interface CardFooterProps extends NextUiCardFooterProps {}

// export component
export const Card = NextUiCard;
export const CardHeader = NextUiCardHeader;
export const CardBody = NextUiCardBody;
export const CardFooter = NextUiCardFooter;

// export hook
export const useCard = nextUiUseCard;
