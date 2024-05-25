import {
  // component
  DateInputGroup as NextUiDateInputGroup,
  DateInputField as NextUiDateInputField,
  DateInputSegment as NextUiDateInputSegment,
  DateInput as NextUiDateInput,
  TimeInput as NextUiTimeInput,
  // hook
  useDateInput as nextUiUseDateInput,
  useTimeInput as nextUiUseTimeInput,
} from "@nextui-org/date-input";

// type
import type {
  DateInputValue as NextUiDateValue,
  TimeInputValue as NextUiTimeValue,
  DateInputProps as NextUiDateInputProps,
  TimeInputProps as NextUiTimeInputProps,
  DateInputGroupProps as NextUiDateInputGroupProps,
  DateInputFieldProps as NextUiDateInputFieldProps,
} from "@nextui-org/date-input";

// export type

export type DateInputValue = NextUiDateValue;
export type TimeInputValue = NextUiTimeValue;
export type DateInputProps<T extends DateInputValue = DateInputValue> =
  NextUiDateInputProps<T>;
export type TimeInputProps<T extends TimeInputValue = TimeInputValue> =
  NextUiTimeInputProps<T>;
export interface DateInputGroupProps extends NextUiDateInputGroupProps {}
export interface DateInputFieldProps extends NextUiDateInputFieldProps {}

// export component
export const DateInputGroup = NextUiDateInputGroup;
export const DateInputField = NextUiDateInputField;
export const DateInputSegment = NextUiDateInputSegment;
export const DateInput = NextUiDateInput;
export const TimeInput = NextUiTimeInput;

// export hook
export const useDateInput = nextUiUseDateInput;
export const useTimeInput = nextUiUseTimeInput;
