import {
  Table as NextUiTable,
  TableBody as NextUiTableBody,
  TableCell as NextUiTableCell,
  TableColumn as NextUiTableColumn,
  TableHeader as NextUiTableHeader,
  TableRow as NextUiTableRow,
  useTable as NextUiuseTable,
} from "@nextui-org/table";

import type {
  TableProps as NextUiTableProps,
  TableBodyProps as NextUiTableBodyProps,
  TableCellProps as NextUiTableCellProps,
  TableColumnProps as NextUiTableColumnProps,
  TableHeaderProps as NextUiTableHeaderProps,
} from "@nextui-org/table";

export interface TableProps extends NextUiTableProps {}
export interface TableBodyProps<T> extends NextUiTableBodyProps<T> {}

export type TableCellProps = NextUiTableCellProps;
export type TableColumnProps<T> = NextUiTableColumnProps<T>;
export type TableHeaderProps<T> = NextUiTableHeaderProps<T>;

export const Table = NextUiTable;
export const TableBody = NextUiTableBody;
export const TableCell = NextUiTableCell;
export const TableColumn = NextUiTableColumn;
export const TableHeader = NextUiTableHeader;
export const TableRow = NextUiTableRow;
export const useTable = NextUiuseTable;
