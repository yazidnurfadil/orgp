import {
  Pagination as NextPagination,
  usePagination as NextUiUsePagination,
  PaginationItemType as NextUiPaginationItemType,
} from "@nextui-org/pagination";
import type {
  PaginationProps as NextPaginationProps,
  PaginationItemRenderProps as NextUiPaginationItemRenderProps,
} from "@nextui-org/pagination";

export const Pagination = NextPagination;
export const usePagination = NextUiUsePagination;

export type PaginationItemRenderProps = NextUiPaginationItemRenderProps;
export const PaginationItemType = NextUiPaginationItemType;
