import React from "react";
import { Meta } from "@storybook/react";
import { dateInput, button } from "@nextui-org/theme";
import {
  endOfMonth,
  endOfWeek,
  getLocalTimeZone,
  isWeekend,
  parseAbsoluteToLocal,
  parseDate,
  parseZonedDateTime,
  startOfMonth,
  startOfWeek,
  today,
} from "@internationalized/date";
import { RangeValue, ValidationResult } from "@react-types/shared";
import { DateValue } from "@react-types/datepicker";
import { I18nProvider, useDateFormatter, useLocale } from "@react-aria/i18n";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Radio, RadioGroup, RadioProps } from "@nextui-org/radio";
import { cn } from "@nextui-org/theme";

import { DateRangePicker, DateRangePickerProps } from "@nextui-org/date-picker";

export default {
  title: "Components/DateRangePicker",
  component: DateRangePicker,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["flat", "faded", "bordered", "underlined"],
    },
    color: {
      control: {
        type: "select",
      },
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    labelPlacement: {
      control: {
        type: "select",
      },
      options: ["inside", "outside", "outside-left"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    validationBehavior: {
      control: {
        type: "select",
      },
      options: ["aria", "native"],
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-start">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof DateRangePicker>;

const defaultProps = {
  label: "Stay duration",
  ...dateInput.defaultVariants,
};

const Template = (args: DateRangePickerProps) => <DateRangePicker {...args} />;

const FormTemplate = (args: DateRangePickerProps) => (
  <form
    className="flex flex-col gap-2 w-full"
    onSubmit={(e) => {
      e.preventDefault();
      alert(
        `Submitted: start -> ${
          (e.target as HTMLFormElement)["start-date"].value
        } end -> ${(e.target as HTMLFormElement)["end-date"].value}`
      );
    }}
  >
    <DateRangePicker {...args} endName="end-date" startName="start-date" />
    <button className={button({ className: "max-w-fit" })} type="submit">
      Submit
    </button>
  </form>
);

const LabelPlacementTemplate = (args: DateRangePickerProps) => (
  <div className="w-full max-w-xl flex flex-col items-start gap-4">
    <DateRangePicker {...args} description="inside" />
    <DateRangePicker {...args} description="outside" labelPlacement="outside" />
    <DateRangePicker
      {...args}
      description="outside-left"
      labelPlacement="outside-left"
    />
  </div>
);

const ControlledTemplate = (args: DateRangePickerProps) => {
  const [value, setValue] = React.useState<RangeValue<DateValue>>({
    start: parseDate("2024-04-01"),
    end: parseDate("2024-04-08"),
  });

  const formatter = useDateFormatter({ dateStyle: "long" });

  return (
    <div className="flex flex-row gap-2">
      <div className="w-full flex flex-col gap-y-2">
        <DateRangePicker
          {...args}
          label="Date range (controlled)"
          value={value}
          onChange={setValue}
        />
        <p className="text-default-500 text-sm">
          Selected date:{" "}
          {value
            ? formatter.formatRange(
                value.start.toDate(getLocalTimeZone()),
                value.end.toDate(getLocalTimeZone())
              )
            : "--"}
        </p>
      </div>
      <DateRangePicker
        {...args}
        defaultValue={{
          start: parseDate("2024-04-01"),
          end: parseDate("2024-04-08"),
        }}
        label="Date range (uncontrolled)"
      />
    </div>
  );
};

const TimeZonesTemplate = (args: DateRangePickerProps) => (
  <div className="w-full max-w-xl flex flex-col items-start gap-4">
    <DateRangePicker
      {...args}
      className="max-w-xs"
      defaultValue={{
        start: parseZonedDateTime("2024-04-01T00:45[America/Los_Angeles]"),
        end: parseZonedDateTime("2024-04-14T11:15[America/Los_Angeles]"),
      }}
      labelPlacement="outside"
    />
    <DateRangePicker
      // {...args}
      aria-label="Event date"
      className="max-w-xs"
      defaultValue={{
        start: parseAbsoluteToLocal("2024-04-01T07:45:00Z"),
        end: parseAbsoluteToLocal("2024-04-14T19:15:00Z"),
      }}
      labelPlacement="outside"
    />
  </div>
);

const GranularityTemplate = (args: DateRangePickerProps) => {
  const [date, setDate] = React.useState<RangeValue<DateValue>>({
    start: parseAbsoluteToLocal("2024-04-01T18:45:22Z"),
    end: parseAbsoluteToLocal("2024-04-08T19:15:22Z"),
  });

  return (
    <div className="w-full max-w-xl flex flex-col items-start gap-4">
      <DateRangePicker
        {...args}
        fullWidth
        granularity="second"
        label="Date and time range"
        value={date}
        onChange={setDate}
      />
      <DateRangePicker
        {...args}
        fullWidth
        granularity="day"
        label="Date range"
        value={date}
        onChange={setDate}
      />
    </div>
  );
};

const InternationalCalendarsTemplate = (args: DateRangePickerProps) => {
  const [date, setDate] = React.useState<RangeValue<DateValue>>({
    start: parseAbsoluteToLocal("2021-04-01T18:45:22Z"),
    end: parseAbsoluteToLocal("2021-04-14T19:15:22Z"),
  });

  return (
    <div className="flex flex-col gap-4">
      <I18nProvider locale="hi-IN-u-ca-indian">
        <DateRangePicker
          {...args}
          label="Appointment date"
          value={date}
          onChange={setDate}
        />
      </I18nProvider>
    </div>
  );
};

const UnavailableDatesTemplate = (args: DateRangePickerProps) => {
  const now = today(getLocalTimeZone());

  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  return (
    <DateRangePicker
      aria-label="Appointment date"
      isDateUnavailable={(date) =>
        disabledRanges.some(
          (interval) =>
            date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
        )
      }
      minValue={today(getLocalTimeZone())}
      validate={(value) =>
        disabledRanges.some(
          (interval) =>
            value &&
            value.end.compare(interval[0]) >= 0 &&
            value.start.compare(interval[1]) <= 0
        )
          ? "Selected date range may not include unavailable dates."
          : null
      }
      {...args}
    />
  );
};

const NonContiguousRangesTemplate = (args: DateRangePickerProps) => {
  const { locale } = useLocale();

  return (
    <DateRangePicker
      {...args}
      allowsNonContiguousRanges
      isDateUnavailable={(date) => isWeekend(date, locale)}
      label="Time off request"
      minValue={today(getLocalTimeZone())}
      visibleMonths={2}
    />
  );
};

const PresetsTemplate = (args: DateRangePickerProps) => {
  const defaultDate = {
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ days: 7 }),
  };

  const [value, setValue] = React.useState<RangeValue<DateValue>>(defaultDate);

  const { locale } = useLocale();
  const formatter = useDateFormatter({ dateStyle: "full" });

  const now = today(getLocalTimeZone());
  const nextWeek = {
    start: startOfWeek(now.add({ weeks: 1 }), locale),
    end: endOfWeek(now.add({ weeks: 1 }), locale),
  };
  const nextMonth = {
    start: startOfMonth(now.add({ months: 1 })),
    end: endOfMonth(now.add({ months: 1 })),
  };

  const CustomRadio = (props: RadioProps) => {
    const { children, ...otherProps } = props;

    return (
      <Radio
        {...otherProps}
        classNames={{
          base: cn(
            "flex-none m-0 h-8 bg-content1 hover:bg-content2 items-center justify-between",
            "cursor-pointer rounded-full border-2 border-default-200/60",
            "data-[selected=true]:border-primary"
          ),
          label: "text-tiny text-default-500",
          labelWrapper: "px-1 m-0",
          wrapper: "hidden",
        }}
      >
        {children}
      </Radio>
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <DateRangePicker
        CalendarBottomContent={
          <RadioGroup
            aria-label="Date precision"
            classNames={{
              base: "w-full pb-2",
              wrapper:
                "-my-2.5 py-2.5 px-3 gap-1 flex-nowrap max-w-[w-[calc(var(--visible-months)_*_var(--calendar-width))]] overflow-scroll",
            }}
            defaultValue="exact_dates"
            orientation="horizontal"
          >
            <CustomRadio value="exact_dates">Exact dates</CustomRadio>
            <CustomRadio value="1_day">1 day</CustomRadio>
            <CustomRadio value="2_days">2 days</CustomRadio>
            <CustomRadio value="3_days">3 days</CustomRadio>
            <CustomRadio value="7_days">7 days</CustomRadio>
            <CustomRadio value="14_days">14 days</CustomRadio>
          </RadioGroup>
        }
        CalendarTopContent={
          <ButtonGroup
            fullWidth
            className="px-3 pb-2 pt-3 bg-content1 [&>button]:text-default-500 [&>button]:border-default-200/60"
            radius="full"
            size="sm"
            variant="bordered"
          >
            <Button
              onPress={() =>
                setValue({
                  start: now,
                  end: now.add({ days: 7 }),
                })
              }
            >
              This week
            </Button>
            <Button onPress={() => setValue(nextWeek)}>Next week</Button>
            <Button onPress={() => setValue(nextMonth)}>Next month</Button>
          </ButtonGroup>
        }
        calendarProps={{
          focusedValue: value?.start,
          onFocusChange: (val) => setValue({ ...value, start: val }),
          nextButtonProps: {
            variant: "bordered",
          },
          prevButtonProps: {
            variant: "bordered",
          },
        }}
        value={value}
        onChange={setValue}
        {...args}
        label="Event date"
      />
      <p className="text-default-500 text-sm">
        Selected date:{" "}
        {value
          ? formatter.formatRange(
              value.start.toDate(getLocalTimeZone()),
              value.end.toDate(getLocalTimeZone())
            )
          : "--"}
      </p>
    </div>
  );
};

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

export const VisibleMonths = {
  render: Template,
  args: {
    ...defaultProps,
    visibleMonths: 2,
  },
};

export const LabelPlacement = {
  render: LabelPlacementTemplate,

  args: {
    ...defaultProps,
  },
};

export const WithTimeField = {
  render: Template,
  args: {
    ...defaultProps,
    label: "Event duration",
    hideTimeZone: true,
    visibleMonths: 2,
    defaultValue: {
      start: parseZonedDateTime("2024-04-01T00:45[America/Los_Angeles]"),
      end: parseZonedDateTime("2024-04-08T11:15[America/Los_Angeles]"),
    },
  },
};

export const Controlled = {
  render: ControlledTemplate,
  args: {
    ...defaultProps,
  },
};

export const Required = {
  render: FormTemplate,
  args: {
    ...defaultProps,
    isRequired: true,
  },
};

export const Disabled = {
  render: Template,
  args: {
    ...defaultProps,
    isDisabled: true,
    defaultValue: {
      start: parseDate("2024-04-01"),
      end: parseDate("2024-04-08"),
    },
  },
};

export const ReadOnly = {
  render: Template,
  args: {
    ...defaultProps,
    isReadOnly: true,
    defaultValue: {
      start: parseDate("2024-04-01"),
      end: parseDate("2024-04-08"),
    },
  },
};

export const WithoutLabel = {
  render: Template,

  args: {
    ...defaultProps,
    label: null,
    "aria-label": "Stay duration",
  },
};

export const WithDescription = {
  render: Template,

  args: {
    ...defaultProps,
    description: "Please enter your stay duration",
  },
};

export const SelectorIcon = {
  render: Template,

  args: {
    ...defaultProps,
    selectorIcon: (
      <svg height="1em" viewBox="0 0 24 24" width="1em">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M8 2v4m8-4v4" />
          <rect height="18" rx="2" width="18" x="3" y="4" />
          <path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
        </g>
      </svg>
    ),
  },
};

export const WithErrorMessage = {
  render: Template,

  args: {
    ...defaultProps,
    isInvalid: true,
    errorMessage: "Please enter a valid date range",
  },
};

export const WithErrorMessageFunction = {
  render: Template,

  args: {
    ...defaultProps,
    isInvalid: true,
    errorMessage: (value: ValidationResult) => {
      if (value.isInvalid) {
        return "Please enter a valid date range";
      }
    },
  },
};

export const IsInvalid = {
  render: Template,

  args: {
    ...defaultProps,
    variant: "bordered",
    isInvalid: true,
    defaultValue: {
      start: parseDate("2024-04-01"),
      end: parseDate("2024-04-08"),
    },
    errorMessage: "Please enter a valid date",
  },
};

export const TimeZones = {
  render: TimeZonesTemplate,

  args: {
    ...defaultProps,
    label: "Event date",
    defaultValue: parseZonedDateTime("2022-11-07T00:45[America/Los_Angeles]"),
  },
};

export const Granularity = {
  render: GranularityTemplate,

  args: {
    ...defaultProps,
    visibleMonths: 2,
  },
};

export const InternationalCalendars = {
  render: InternationalCalendarsTemplate,

  args: {
    ...defaultProps,
    hideTimeZone: true,
  },
};

export const MinDateValue = {
  render: Template,

  args: {
    ...defaultProps,
    minValue: today(getLocalTimeZone()),
    defaultValue: {
      start: today(getLocalTimeZone()).subtract({ days: 1 }),
      end: parseDate("2024-04-08"),
    },
  },
};

export const MaxDateValue = {
  render: Template,

  args: {
    ...defaultProps,
    maxValue: today(getLocalTimeZone()),
    defaultValue: {
      start: parseDate("2024-04-01"),
      end: today(getLocalTimeZone()).add({ days: 1 }),
    },
  },
};

export const UnavailableDates = {
  render: UnavailableDatesTemplate,
  args: {
    ...defaultProps,
  },
};

export const PageBehavior = {
  render: Template,
  args: {
    ...defaultProps,
    visibleMonths: 2,
    pageBehavior: "single",
  },
};

export const NonContiguous = {
  render: NonContiguousRangesTemplate,
  args: {
    ...defaultProps,
  },
};

export const Presets = {
  render: PresetsTemplate,
  args: {
    ...defaultProps,
    visibleMonths: 2,
  },
};

export const WithValidation = {
  render: FormTemplate,

  args: {
    ...defaultProps,
    validate: (value: RangeValue<DateValue>) => {
      if (!value || !value.start || !value.end) {
        return "Please enter a valid date range";
      }
      const { start, end } = value;

      if (start.year < 2024 || end.year < 2024) {
        return "Both start and end dates must be in the year 2024 or later";
      }
    },
    label: "Date Range (Year 2024 or later)",
  },
};

export const CustomStyles = {
  render: Template,

  args: {
    ...defaultProps,
    variant: "bordered",
    className: "max-w-xs",
    calendarProps: {
      classNames: {
        base: "bg-background",
        headerWrapper: "pt-4 bg-background",
        prevButton: "border-1 border-default-200 rounded-small",
        nextButton: "border-1 border-default-200 rounded-small",
        gridHeader: "bg-background shadow-none border-b-1 border-default-100",
        cellButton: [
          "data-[today=true]:bg-default-100 data-[selected=true]:bg-transparent rounded-small",
          // start (pseudo)
          "data-[range-start=true]:before:rounded-l-small",
          "data-[selection-start=true]:before:rounded-l-small",

          // end (pseudo)
          "data-[range-end=true]:before:rounded-r-small",
          "data-[selection-end=true]:before:rounded-r-small",

          // start (selected)
          "data-[selected=true]:data-[selection-start=true]:data-[range-selection=true]:rounded-small",

          // end (selected)
          "data-[selected=true]:data-[selection-end=true]:data-[range-selection=true]:rounded-small",
        ],
      },
    },
  },
};
