"use client";

import * as React from "react";
import {
  PreviousMonthButton as BtnPrev,
  PreviousMonthButtonProps as PrpPrev,
  NextMonthButton as BtnNext,
  NextMonthButtonProps as PrpNext,
  DateRange as InnerDateRange,
  DayPicker,
  DropdownProps,
} from "react-day-picker";

import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";
import { ScrollArea } from "./scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export type DateRange = InnerDateRange;
export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  compact?: boolean;
};

export const NO_BORDER =
  "ring-0 focus:ring-0 focus-visible:ring-0 shadow-none focus:shadow-none focus-visible:shadow-none outline-none focus:outline-none focus-visible:outline-none border-none focus:border-none focus-visible:border-none";

// Updated for react-day-picker v9 and mobile sizing
function Calendar({
  numberOfMonths = 1,
  showOutsideDays = true,
  compact = false,
  captionLayout = "dropdown",
  className = "w-fit",
  classNames,
  ...props
}: CalendarProps) {
  // Custom components for prev/next and date dropdowns
  const components = React.useMemo(() => {
    const pnc = compact
      ? "focus:underline focus:underline-offset-2 -mx-0.5 sm:mx-0"
      : "focus:underline focus:underline-offset-2 mx-0";

    const customComponents = {
      PreviousMonthButton: ({ tabIndex, className, ...props }: PrpPrev) => (
        <BtnPrev tabIndex={0} className={cn(className, pnc)} {...props} />
      ),
      NextMonthButton: ({ tabIndex, className, ...props }: PrpNext) => (
        <BtnNext tabIndex={0} className={cn(className, pnc)} {...props} />
      ),
      Dropdown: ({ value, options, onChange }: DropdownProps) => {
        const selected = options?.find((option) => option.value === value);
        const handleChange = (value: string) =>
          onChange?.({ target: { value } } as any);
        return (
          <Select value={value?.toString()} onValueChange={handleChange}>
            <SelectTrigger
              tabIndex={0}
              className={cn(
                NO_BORDER,
                compact ? "[&>svg]:-ml-[1px]" : "text-md",
                "focus:underline focus:underline-offset-2 h-7 -mr-2.5 pr-0 [&>svg]:opacity-15",
              )}
            >
              <SelectValue>{selected?.label}</SelectValue>
            </SelectTrigger>
            <SelectContent position="popper">
              <ScrollArea className="h-56">
                {options?.map(({ value: v, label }, i: number) => (
                  <SelectItem key={`${v}-${i}`} value={v?.toString() ?? ""}>
                    {label}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
        );
      },
    };
    return props.components
      ? {
          ...customComponents,
          ...props.components,
        }
      : customComponents;
  }, [compact, props.components]);

  const btnSize = compact ? "h-5 w-5" : "h-6 w-6";
  const isLabel = captionLayout === "label";

  return (
    <DayPicker
      mode={props.mode || "single"}
      captionLayout={captionLayout}
      numberOfMonths={numberOfMonths}
      showOutsideDays={showOutsideDays}
      components={components}
      className={className}
      classNames={{
        months: "flex gap-4 relative",
        month_grid: compact ? undefined : isLabel ? "mt-2.5" : "mt-2",
        month_caption: cn(
          "flex relative items-center font-medium",
          compact ? "text-sm mt-1 ml-1 sm:ml-[5.5px]" : "text-md mt-0.5 ml-1.5",
          isLabel ? "mb-2" : "-ml-2 sm:-ml-2 mb-1 mt-0",
        ),
        dropdowns: compact ? "flex sm:ml-0.5" : "flex ml-0.5",
        years_dropdown: "after:none",
        nav: "absolute right-0 z-50 flex items-center h-7",
        button_previous: cn(NO_BORDER, btnSize, "group [&>svg]:fill-primary"),
        button_next: cn(NO_BORDER, btnSize, "group [&>svg]:fill-primary"),
        chevron: cn(
          "border-b border-transparent group-focus:border-current",
          btnSize,
        ),
        weeks: "w-full border-collapse space-y-1",
        week: "flex w-full mt-2",
        weekdays: "flex",
        weekday: cn(
          "text-muted-foreground rounded-md font-normal",
          compact ? "w-6 sm:w-7 text-xs sm:text-sm" : "w-8 text-sm",
        ),
        day: cn(
          "relative p-0 focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].outside)]:bg-accent/50",
          props.mode === "range"
            ? "[&.range-end]:rounded-r-md [&.range-start]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "rounded-md",
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "[&:hover]:bg-transparent [&:hover]:text-inherit", // Disable the ghost button hover
          compact
            ? "h-6 w-6 sm:h-7 sm:w-7 p-0 text-xs sm:text-sm"
            : "h-8 w-8 p-0.5 text-sm",
          "text-center font-normal",
        ),
        range_start: "range-start",
        range_end: "range-end",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground",
        outside:
          "outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
