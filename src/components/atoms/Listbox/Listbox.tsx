import {
  // component
  Listbox as NextUiListbox,
  ListboxItem as NextUiListboxItem,
  ListboxSection as NextUiListboxSection,
  // hook
  useListbox as nextUiUseListbox,
} from "@nextui-org/listbox";

// type
import type {
  ListboxProps as NextUiListboxProps,
  ListboxItemProps as NextUiListboxItemProps,
  ListboxSectionProps as NextUiListboxSectionProps,
} from "@nextui-org/listbox";

// export type
export type ListboxProps<T = object> = NextUiListboxProps<T>
export type ListboxItemProps= NextUiListboxItemProps
export interface ListboxSectionProps extends NextUiListboxSectionProps{}

// export component
export const Listbox = NextUiListbox
export const ListboxItem = NextUiListboxItem
export const ListboxSection = NextUiListboxSection

// export hook
export const useListbox = nextUiUseListbox