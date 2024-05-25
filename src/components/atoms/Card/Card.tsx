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
