import {
  // component
  Autocomplete as NextAutocomplete,
  AutocompleteItem as NextAutocompleteItem,
  AutocompleteSection as NextAutocompleteSection,
  // hook
  useAutocomplete as nextUiUseAutocomplete,
} from "@nextui-org/autocomplete";

// type
import type {
  AutocompleteProps as NextUiAutocompleteProps,
  AutocompleteItemProps as NextUiAutocompleteItemProps,
  AutocompleteSectionProps as NextUiAutocompleteSectionProps,
  MenuTriggerAction as NextUiMenuTriggerAction,
} from "@nextui-org/autocomplete";

// export type
export type AutocompleteProps<T = object> = NextUiAutocompleteProps<T>;
export type AutocompleteItemProps<T extends object = {}> =
  NextUiAutocompleteItemProps<T>;
export type MenuTriggerAction = NextUiMenuTriggerAction;
export interface AutocompleteSectionProps
  extends NextUiAutocompleteSectionProps {}

// export component
export const Autocomplete = NextAutocomplete;
export const AutocompleteItem = NextAutocompleteItem;
export const AutocompleteSection = NextAutocompleteSection;

// export hook
export const useAutocomplete = nextUiUseAutocomplete;
