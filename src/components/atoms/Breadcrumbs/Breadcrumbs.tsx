import {
  // component
  Breadcrumbs as NextUiBreadcrumbs,
  BreadcrumbItem as NextUiBreadcrumbItem,
  // hook
  useBreadcrumbs as nextUiUseBreadcrumbs,
  useBreadcrumbItem as nextUiUseBreadcrumbItem,
} from "@nextui-org/breadcrumbs";

// type
import type {
  BreadcrumbsProps as NextUiBreadcrumbsProps,
  BreadcrumbItemProps as NextUiBreadcrumbItemProps,
} from "@nextui-org/breadcrumbs";

// export type
export interface BreadcrumbsProps extends NextUiBreadcrumbsProps {}
export interface BreadcrumbItemProps extends NextUiBreadcrumbItemProps {}

// export component
export const Breadcrumbs = NextUiBreadcrumbs;
export const BreadcrumbItem = NextUiBreadcrumbItem;

// export hook
export const useBreadcrumbs = nextUiUseBreadcrumbs;
export const useBreadcrumbItem = nextUiUseBreadcrumbItem;
