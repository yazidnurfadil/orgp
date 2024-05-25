import {
  // component
  DatePicker as NextUiDatePicker,
  DateRangePicker as NextUiDateRangePicker,
  DateRangePickerField as NextUiDateRangePickerField,
  // hook
  useDatePicker as nextUiUseDatePicker,
  useDateRangePicker as nextUiUseDateRangePicker,
} from "@nextui-org/date-picker";

// type
import type {
  DatePickerProps as NextUiDatePickerProps,
  DateRangePickerProps as NextUiDateRangePickerProps,
} from "@nextui-org/date-picker";
import type {
  DateInputValue as NextUiDateValue,
  TimeInputValue as NextUiTimeValue,
} from "@nextui-org/date-input";

// export type
export type DatePickerProps<T extends NextUiDateValue = NextUiDateValue> =
  NextUiDatePickerProps<T>;
export type DateRangePickerProps<T extends NextUiDateValue = NextUiDateValue> =
  NextUiDateRangePickerProps<T>;

// export component
export const DatePicker = NextUiDatePicker;
export const DateRangePicker = NextUiDateRangePicker;
export const DateRangePickerField = NextUiDateRangePickerField;

// export hook
export const useDatePicker = nextUiUseDatePicker;
export const useDateRangePicker = nextUiUseDateRangePicker;
