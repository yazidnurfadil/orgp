import {
  Tab as NextUiTab,
  Tabs as NextUiTabs,
  useTabs as NextUiUseTabs,
} from "@nextui-org/tabs";

import type {
  TabsProps as NextUiTabsProps,
  TabItemProps as NextUiTabItemProps,
} from "@nextui-org/tabs";

export type TabsProps<T = object> = NextUiTabsProps<T>;
export type TabItemProps<T extends object> = NextUiTabItemProps<T>;

export const Tab = NextUiTab;
export const Tabs = NextUiTabs;
export const useTabs = NextUiUseTabs;
