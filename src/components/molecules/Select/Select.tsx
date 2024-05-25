import {
  ListboxItem,
  ListboxSection,
} from "@/components/atoms/Listbox/Listbox";
import {
  Select as SelectComponent,
  useSelect as useSelectComponent,
} from "@nextui-org/select";

export type { SelectedItems } from "@nextui-org/select";
export type { SelectProps } from "@nextui-org/select";

export const Select = SelectComponent;
export const useSelect = useSelectComponent;
export const SelectItem = ListboxItem;
export const SelectSection = ListboxSection;
