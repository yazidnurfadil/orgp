import type { MenuItemProps, MenuSectionProps } from "@nextui-org/menu";
import { MenuItem, MenuSection } from "@nextui-org/menu";

import {
  // component
  Dropdown as NextAutoDropdown,
  DropdownTrigger as NextUiDropdownTrigger,
  DropdownMenu as NextUiDropdownMenu,
  // hook
  useDropdown as nextUiUseDropdown,
} from "@nextui-org/dropdown";

// type
import type {
  DropdownProps as NextUiDropdownProps,
  DropdownTriggerProps as NextUiDropdownTriggerProps,
  DropdownMenuProps as NextUiDropdownMenuProps,
} from "@nextui-org/dropdown";

// export type
export interface DropdownProps extends NextUiDropdownProps {}
export interface DropdownTriggerProps extends NextUiDropdownTriggerProps {}
export type DropdownMenuProps<T = object> = NextUiDropdownMenuProps<T>;
export type DropdownItemProps<T extends object> = MenuItemProps<T>;
export type DropdownSectionProps<T extends object> = NextUiDropdownMenuProps<T>;

// export component
export const Dropdown = NextAutoDropdown;
export const DropdownTrigger = NextUiDropdownTrigger;
export const DropdownMenu = NextUiDropdownMenu;
export const DropdownItem = MenuItem;
export const DropdownSection = MenuSection;

// export hook
export const useDropdown = nextUiUseDropdown;
