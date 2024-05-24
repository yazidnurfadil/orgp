import {
  // component
  Calendar as NextUiCalendar,
  RangeCalendar as NextUiRangeCalendar,
  // hook
  useCalendar as nextUiUseCalendar,
  useRangeCalendar as nextUiUseRangeCalendar,
  // context
  CalendarProvider as NextUiCalendarProvider,
  useCalendarContext as nextUiUseCalendarContext,
  // class
  CalendarDate as NextUiCalendarDate,
} from "@nextui-org/calendar";

// type
import type {
  CalendarProps as NextUiCalendarProps,
  RangeCalendarProps as NextUiRangeCalendarProps,
  DateValue as NextUiDateValue,
  RangeValue as NextUiRangeValue,
} from "@nextui-org/calendar";

// export type
export type CalendarProps = NextUiCalendarProps;
export type RangeCalendarProps = NextUiRangeCalendarProps;
export type DateValue = NextUiDateValue;
export interface RangeValue<T> extends NextUiRangeValue<T> {}

// export context
export const CalendarProvider = NextUiCalendarProvider;
export const useCalendarContext = nextUiUseCalendarContext;

// export hook
export const useCalendar = nextUiUseCalendar;
export const useRangeCalendar = nextUiUseRangeCalendar;

// export component
export const CalendarDate = NextUiCalendarDate;
export const Calendar = NextUiCalendar;
export const RangeCalendar = NextUiRangeCalendar;
