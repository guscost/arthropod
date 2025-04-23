import {
  CSSProperties,
  ButtonHTMLAttributes,
  HTMLAttributes,
  SelectHTMLAttributes,
  TableHTMLAttributes,
  MouseEventHandler,
  OptionHTMLAttributes,
  Ref,
  ThHTMLAttributes,
  Context,
  JSX,
  ReactNode,
  FocusEvent,
  MouseEvent,
  KeyboardEvent,
  PointerEvent,
  TouchEvent,
} from "react";

declare const constructFromSymbol: unique symbol;

/**
 * The UI elements composing DayPicker. These elements are mapped to
 * {@link CustomComponents}, the {@link ClassNames} and the {@link Styles} used by
 * DayPicker.
 *
 * Some of these elements are extended by flags and modifiers.
 */
declare enum UI {
  /** The root component displaying the months and the navigation bar. */
  Root = "root",
  /** The Chevron SVG element used by navigation buttons and dropdowns. */
  Chevron = "chevron",
  /**
   * The grid cell with the day's date. Extended by {@link DayFlag} and
   * {@link SelectionState}.
   */
  Day = "day",
  /** The button containing the formatted day's date, inside the grid cell. */
  DayButton = "day_button",
  /** The caption label of the month (when not showing the dropdown navigation). */
  CaptionLabel = "caption_label",
  /** The container of the dropdown navigation (when enabled). */
  Dropdowns = "dropdowns",
  /** The dropdown element to select for years and months. */
  Dropdown = "dropdown",
  /** The container element of the dropdown. */
  DropdownRoot = "dropdown_root",
  /** The root element of the footer. */
  Footer = "footer",
  /** The month grid. */
  MonthGrid = "month_grid",
  /** Contains the dropdown navigation or the caption label. */
  MonthCaption = "month_caption",
  /** The dropdown with the months. */
  MonthsDropdown = "months_dropdown",
  /** Wrapper of the month grid. */
  Month = "month",
  /** The container of the displayed months. */
  Months = "months",
  /** The navigation bar with the previous and next buttons. */
  Nav = "nav",
  /**
   * The next month button in the navigation. *
   *
   * @since 9.1.0
   */
  NextMonthButton = "button_next",
  /**
   * The previous month button in the navigation.
   *
   * @since 9.1.0
   */
  PreviousMonthButton = "button_previous",
  /** The row containing the week. */
  Week = "week",
  /** The group of row weeks in a month (`tbody`). */
  Weeks = "weeks",
  /** The column header with the weekday. */
  Weekday = "weekday",
  /** The row grouping the weekdays in the column headers. */
  Weekdays = "weekdays",
  /** The cell containing the week number. */
  WeekNumber = "week_number",
  /** The cell header of the week numbers column. */
  WeekNumberHeader = "week_number_header",
  /** The dropdown with the years. */
  YearsDropdown = "years_dropdown",
}
/** The flags for the {@link UI.Day}. */
declare enum DayFlag {
  /** The day is disabled. */
  disabled = "disabled",
  /** The day is hidden. */
  hidden = "hidden",
  /** The day is outside the current month. */
  outside = "outside",
  /** The day is focused. */
  focused = "focused",
  /** The day is today. */
  today = "today",
}
/**
 * The state that can be applied to the {@link UI.Day} element when in selection
 * mode.
 */
declare enum SelectionState {
  /** The day is at the end of a selected range. */
  range_end = "range_end",
  /** The day is at the middle of a selected range. */
  range_middle = "range_middle",
  /** The day is at the start of a selected range. */
  range_start = "range_start",
  /** The day is selected. */
  selected = "selected",
}
/** CSS classes used for animating months and captions. */
/**
 * Enum representing different animation states for transitioning between
 * months.
 */
declare enum Animation {
  /** The entering weeks when they appear before the exiting month. */
  weeks_before_enter = "weeks_before_enter",
  /** The exiting weeks when they disappear before the entering month. */
  weeks_before_exit = "weeks_before_exit",
  /** The entering weeks when they appear after the exiting month. */
  weeks_after_enter = "weeks_after_enter",
  /** The exiting weeks when they disappear after the entering month. */
  weeks_after_exit = "weeks_after_exit",
  /** The entering caption when it appears after the exiting month. */
  caption_after_enter = "caption_after_enter",
  /** The exiting caption when it disappears after the entering month. */
  caption_after_exit = "caption_after_exit",
  /** The entering caption when it appears before the exiting month. */
  caption_before_enter = "caption_before_enter",
  /** The exiting caption when it disappears before the entering month. */
  caption_before_exit = "caption_before_exit",
}
/**
 * Deprecated UI elements and flags.
 *
 * These elements were used in previous version of DayPicker and are kept here
 * to help the transition to the new {@link UI | UI elements}.
 *
 * ```diff
 *   <DayPicker classNames={{
 * -  cell: "my-cell",
 * +  day: "my-cell",
 * -  day: "my-day",
 * +  day_button: "my-day",
 * -  day_disabled: "my-day_disabled",
 * +  disabled: "my-day_disabled",
 *    // etc.
 *   }}/>
 * ```
 *
 * @deprecated
 * @since 9.0.1
 * @see https://daypicker.dev/upgrading
 * @see https://daypicker.dev/docs/styling
 */
type DeprecatedUI<T extends CSSProperties | string> = {
  /**
   * This element was applied to the style of any button in DayPicker and it is
   * replaced by {@link UI.PreviousMonthButton} and {@link UI.NextMonthButton}.
   *
   * @deprecated
   */
  button: T;
  /**
   * This element was resetting the style of any button in DayPicker and it is
   * replaced by {@link UI.PreviousMonthButton} and {@link UI.NextMonthButton}.
   *
   * @deprecated
   */
  button_reset: T;
  /**
   * This element has been renamed to {@link UI.MonthCaption}.
   *
   * @deprecated
   */
  caption: T;
  /**
   * This element has been removed. Captions are styled via
   * {@link UI.MonthCaption}.
   *
   * @deprecated
   */
  caption_between: T;
  /**
   * This element has been renamed to {@link UI.Dropdowns}.
   *
   * @deprecated
   */
  caption_dropdowns: T;
  /**
   * This element has been removed. Captions are styled via
   * {@link UI.MonthCaption}.
   *
   * @deprecated
   */
  caption_end: T;
  /**
   * This element has been removed.
   *
   * @deprecated
   */
  caption_start: T;
  /**
   * This element has been renamed to {@link UI.Day}.
   *
   * @deprecated
   */
  cell: T;
  /**
   * This element has been renamed to {@link DayFlag.disabled}.
   *
   * @deprecated
   */
  day_disabled: T;
  /**
   * This element has been renamed to {@link DayFlag.hidden}.
   *
   * @deprecated
   */
  day_hidden: T;
  /**
   * This element has been renamed to {@link DayFlag.outside}.
   *
   * @deprecated
   */
  day_outside: T;
  /**
   * This element has been renamed to {@link SelectionState.range_end}.
   *
   * @deprecated
   */
  day_range_end: T;
  /**
   * This element has been renamed to {@link SelectionState.range_middle}.
   *
   * @deprecated
   */
  day_range_middle: T;
  /**
   * This element has been renamed to {@link SelectionState.range_start}.
   *
   * @deprecated
   */
  day_range_start: T;
  /**
   * This element has been renamed to {@link SelectionState.selected}.
   *
   * @deprecated
   */
  day_selected: T;
  /**
   * This element has been renamed to {@link DayFlag.today}.
   *
   * @deprecated
   */
  day_today: T;
  /**
   * This element has been removed. The dropdown icon is now {@link UI.Chevron}
   * inside a {@link UI.CaptionLabel}.
   *
   * @deprecated
   */
  dropdown_icon: T;
  /**
   * This element has been renamed to {@link UI.MonthsDropdown}.
   *
   * @deprecated
   */
  dropdown_month: T;
  /**
   * This element has been renamed to {@link UI.YearsDropdown}.
   *
   * @deprecated
   */
  dropdown_year: T;
  /**
   * This element has been removed.
   *
   * @deprecated
   */
  head: T;
  /**
   * This element has been renamed to {@link UI.Weekday}.
   *
   * @deprecated
   */
  head_cell: T;
  /**
   * This element has been renamed to {@link UI.Weekdays}.
   *
   * @deprecated
   */
  head_row: T;
  /**
   * This flag has been removed. Use `data-multiple-months` in your CSS
   * selectors.
   *
   * @deprecated
   */
  multiple_months: T;
  /**
   * This element has been removed. To style the navigation buttons, use
   * {@link UI.PreviousMonthButton} and {@link UI.NextMonthButton}.
   *
   * @deprecated
   */
  nav_button: T;
  /**
   * This element has been renamed to {@link UI.NextMonthButton}.
   *
   * @deprecated
   */
  nav_button_next: T;
  /**
   * This element has been renamed to {@link UI.PreviousMonthButton}.
   *
   * @deprecated
   */
  nav_button_previous: T;
  /**
   * This element has been removed. The dropdown icon is now {@link UI.Chevron}
   * inside a {@link UI.NextMonthButton} or a {@link UI.PreviousMonthButton}.
   *
   * @deprecated
   */
  nav_icon: T;
  /**
   * This element has been renamed to {@link UI.Week}.
   *
   * @deprecated
   */
  row: T;
  /**
   * This element has been renamed to {@link UI.MonthGrid}.
   *
   * @deprecated
   */
  table: T;
  /**
   * This element has been renamed to {@link UI.Weeks}.
   *
   * @deprecated
   */
  tbody: T;
  /**
   * This element has been removed. The {@link UI.Footer} is now a single element
   * below the months.
   *
   * @deprecated
   */
  tfoot: T;
  /**
   * This flag has been removed. There are no "visually hidden" elements in
   * DayPicker 9.
   *
   * @deprecated
   */
  vhidden: T;
  /**
   * This element has been renamed. Use {@link UI.WeekNumber} instead.
   *
   * @deprecated
   */
  weeknumber: T;
  /**
   * This flag has been removed. Use `data-week-numbers` in your CSS.
   *
   * @deprecated
   */
  with_weeknumber: T;
};

/**
 * The locale object with all functions and data needed to parse and format
 * dates. This is what each locale implements and exports.
 */
interface Locale {
  /** The locale code (ISO 639-1 + optional country code) */
  code: string;
  /** The function to format distance */
  formatDistance: FormatDistanceFn;
  /** The function to relative time */
  formatRelative: FormatRelativeFn;
  /** The object with functions used to localize various values */
  localize: Localize;
  /** The object with functions that return localized formats */
  formatLong: FormatLong;
  /** The object with functions used to match and parse various localized values */
  match: Match;
  /** An object with locale options */
  options?: LocaleOptions;
}
/**
 * The locale options.
 */
interface LocaleOptions extends WeekOptions, FirstWeekContainsDateOptions {}
/**
 * The function that takes a token (i.e. halfAMinute) passed by `formatDistance`
 * or `formatDistanceStrict` and payload, and returns localized distance.
 *
 * @param token - The token to localize
 * @param count - The distance number
 * @param options - The object with options
 *
 * @returns The localized distance in words
 */
type FormatDistanceFn = (
  token: FormatDistanceToken,
  count: number,
  options?: FormatDistanceFnOptions,
) => string;
/**
 * The {@link FormatDistanceFn} function options.
 */
interface FormatDistanceFnOptions {
  /** Add "X ago"/"in X" in the locale language */
  addSuffix?: boolean;
  /** The distance vector. -1 represents past and 1 future. Tells which suffix
   * to use. */
  comparison?: -1 | 0 | 1;
}
/**
 * The token used in the format distance function. Represents the distance unit
 * with prespecified precision.
 */
type FormatDistanceToken =
  | "lessThanXSeconds"
  | "xSeconds"
  | "halfAMinute"
  | "lessThanXMinutes"
  | "xMinutes"
  | "aboutXHours"
  | "xHours"
  | "xDays"
  | "aboutXWeeks"
  | "xWeeks"
  | "aboutXMonths"
  | "xMonths"
  | "aboutXYears"
  | "xYears"
  | "overXYears"
  | "almostXYears";
/**
 * The locale function that does the work for the `formatRelative` function.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param token - The token to localize
 * @param date - The date to format
 * @param baseDate - The date to compare with
 * @param options - The object with options
 *
 * @returns The localized relative date format
 */
type FormatRelativeFn = <DateType extends Date>(
  token: FormatRelativeToken,
  date: DateType,
  baseDate: DateType,
  options?: FormatRelativeFnOptions,
) => string;
/**
 * The {@link FormatRelativeFn} function options.
 */
interface FormatRelativeFnOptions
  extends WeekOptions,
    LocalizedOptions<"options" | "formatRelative"> {}
/**
 * The token used in format relative function. Represents the time unit.
 */
type FormatRelativeToken =
  | "lastWeek"
  | "yesterday"
  | "today"
  | "tomorrow"
  | "nextWeek"
  | "other";
/**
 * A format part that represents a token or string literal, used by format parser/tokenizer
 */
interface FormatPart {
  /** If the part is a format token. */
  isToken: boolean;
  /** The format part value (i.e. `"do"`). */
  value: string;
}
/**
 * The object with functions used to localize various values. Part of the public
 * locale API.
 */
interface Localize {
  /** The function that localizes an ordinal number */
  ordinalNumber: LocalizeFn<number>;
  /** The function that localized the era */
  era: LocalizeFn<Era>;
  /** The function that localizes the quarter */
  quarter: LocalizeFn<Quarter>;
  /** The function that localizes the month */
  month: LocalizeFn<Month$1>;
  /** The function that localizes the day of the week */
  day: LocalizeFn<Day$1>;
  /** The function that localizes the day period */
  dayPeriod: LocalizeFn<LocaleDayPeriod>;
  /** The function that can preprocess parts/tokens **/
  preprocessor?: <DateType extends Date>(
    date: DateType,
    parts: FormatPart[],
  ) => FormatPart[];
}
/**
 * Individual localize function. Part of {@link Localize}.
 *
 * @typeParam Value - The value type to localize.
 *
 * @param value - The value to localize
 * @param options - The object with options
 *
 * @returns The localized string
 */
type LocalizeFn<Value extends LocaleUnitValue | number> = (
  value: Value,
  options?: LocalizeFnOptions,
) => string;
/**
 * The {@link LocalizeFn} function options.
 */
interface LocalizeFnOptions {
  /** The width to use formatting the value, defines how short or long
   * the formatted string might be. */
  width?: LocaleWidth;
  /** The context where the formatted value is used - standalone: the result
   * should make grammatical sense as is and formatting: the result is a part
   * of the formatted string. See: https://date-fns.org/docs/I18n-Contribution-Guide */
  context?: "formatting" | "standalone";
  /** The unit to format */
  unit?: LocaleUnit;
}
/**
 * The object with functions used to match and parse various localized values.
 */
interface Match {
  /** The function that parses a localized ordinal number. */
  ordinalNumber: MatchFn<
    number,
    {
      unit: LocaleUnit;
    }
  >;
  /** The function that parses a localized era. */
  era: MatchFn<Era>;
  /** The function that parses a localized quarter. */
  quarter: MatchFn<Quarter>;
  /** The function that parses a localized month. */
  month: MatchFn<Month$1>;
  /** The function that parses a localized day of the week. */
  day: MatchFn<Day$1>;
  /** The function that parses a localized time of the day. */
  dayPeriod: MatchFn<LocaleDayPeriod>;
}
/**
 * The match function. Part of {@link Match}. Implements matcher for particular
 * unit type.
 *
 * @typeParam Result - The matched value type.
 * @typeParam ExtraOptions - The the extra options type.
 *
 * @param str - The string to match
 * @param options - The object with options
 *
 * @returns The match result or null if match failed
 */
type MatchFn<Result, ExtraOptions = Record<string, unknown>> = (
  str: string,
  options?: MatchFnOptions<Result> & ExtraOptions,
) => MatchFnResult<Result> | null;
/**
 * The {@link MatchFn} function options.
 *
 * @typeParam Result - The matched value type.
 */
interface MatchFnOptions<Result> {
  /** The width to use matching the value, defines how short or long
   * the matched string might be. */
  width?: LocaleWidth;
  /**
   * @deprecated Map the value manually instead.
   * @example
   * const matchResult = locale.match.ordinalNumber('1st')
   * if (matchResult) {
   *   matchResult.value = valueCallback(matchResult.value)
   * }
   */
  valueCallback?: MatchValueCallback<string, Result>;
}
/**
 * The function that allows to map the matched value to the actual type.
 *
 * @typeParam Arg - The argument type.
 * @typeParam Result - The matched value type.
 *
 * @param arg - The value to match
 *
 * @returns The matched value
 */
type MatchValueCallback<Arg, Result> = (value: Arg) => Result;
/**
 * The {@link MatchFn} function result.
 *
 * @typeParam Result - The matched value type.
 */
interface MatchFnResult<Result> {
  /** The matched value parsed as the corresponding unit type */
  value: Result;
  /** The remaining string after parsing */
  rest: string;
}
/**
 * The object with functions that return localized formats. Long stands for
 * sequence of tokens (i.e. PPpp) that allows to define how format both date
 * and time at once. Part of the public locale API.
 */
interface FormatLong {
  /** The function that returns a localized long date format */
  date: FormatLongFn;
  /** The function that returns a localized long time format */
  time: FormatLongFn;
  /** The function that returns a localized format of date and time combined */
  dateTime: FormatLongFn;
}
/**
 * The format long function. Formats date, time or both.
 *
 * @param options - The object with options
 *
 * @returns The localized string
 */
type FormatLongFn = (options: FormatLongFnOptions) => string;
/**
 * The {@link FormatLongFn} function options.
 */
interface FormatLongFnOptions {
  /** Format width to set */
  width?: FormatLongWidth;
}
/**
 * The format long width token, defines how short or long the formnatted value
 * might be. The actual result length is defined by the locale.
 */
type FormatLongWidth = "full" | "long" | "medium" | "short" | "any";
/**
 * The formatting unit value, represents the raw value that can be formatted.
 */
type LocaleUnitValue = Era | Quarter | Month$1 | Day$1 | LocaleDayPeriod;
/**
 * The format width. Defines how short or long the formatted string might be.
 * The actual result length depends on the locale.
 */
type LocaleWidth = "narrow" | "short" | "abbreviated" | "wide" | "any";
/**
 * Token representing particular period of the day.
 */
type LocaleDayPeriod =
  | "am"
  | "pm"
  | "midnight"
  | "noon"
  | "morning"
  | "afternoon"
  | "evening"
  | "night";
/**
 * The units commonly used in the date formatting or parsing.
 */
type LocaleUnit =
  | "second"
  | "minute"
  | "hour"
  | "day"
  | "dayOfYear"
  | "date"
  | "week"
  | "month"
  | "quarter"
  | "year";

/**
 * The argument type.
 */
type DateArg<DateType extends Date> = DateType | number | string;
/**
 * An object that combines two dates to represent the time interval.
 *
 * @typeParam StartDate - The start `Date` type.
 * @typeParam EndDate - The end `Date` type.
 */
interface Interval<
  StartType extends DateArg<Date> = DateArg<Date>,
  EndType extends DateArg<Date> = DateArg<Date>,
> {
  /** The start of the interval. */
  start: StartType;
  /** The end of the interval. */
  end: EndType;
}
/**
 * The era. Can be either 0 (AD - Anno Domini) or 1 (BC - Before Christ).
 */
type Era = 0 | 1;
/**
 * The year quarter. Goes from 1 to 4.
 */
type Quarter = 1 | 2 | 3 | 4;
/**
 * The day of the week type alias. Unlike the date (the number of days since
 * the beginning of the month), which begins with 1 and is dynamic (can go up to
 * 28, 30, or 31), the day starts with 0 and static (always ends at 6). Look at
 * it as an index in an array where Sunday is the first element and Saturday
 * is the last.
 */
type Day$1 = 0 | 1 | 2 | 3 | 4 | 5 | 6;
/**
 * The month type alias. Goes from 0 to 11, where 0 is January and 11 is
 * December.
 */
type Month$1 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
/**
 * FirstWeekContainsDate is used to determine which week is the first week of
 * the year, based on what day the January, 1 is in that week.
 *
 * The day in that week can only be 1 (Monday) or 4 (Thursday).
 *
 * Please see https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system for more information.
 */
type FirstWeekContainsDate = 1 | 4;
/**
 * The step function options. Used to build function options.
 */
interface StepOptions {
  /** The step to use when iterating */
  step?: number;
}
/**
 * The week function options. Used to build function options.
 */
interface WeekOptions {
  /** Which day the week starts on. */
  weekStartsOn?: Day$1;
}
/**
 * The first week contains date options. Used to build function options.
 */
interface FirstWeekContainsDateOptions {
  /** See {@link FirstWeekContainsDate} for more details. */
  firstWeekContainsDate?: FirstWeekContainsDate;
}
/**
 * The localized function options. Used to build function options.
 *
 * @typeParam LocaleFields - The locale fields used in the relevant function. Defines the minimum set of locale fields that must be provided.
 */
interface LocalizedOptions<LocaleFields extends keyof Locale> {
  /** The locale to use in the function. */
  locale?: Pick<Locale, LocaleFields>;
}
/**
 * Additional tokens options. Used to build function options.
 */
interface AdditionalTokensOptions {
  /** If true, allows usage of the week-numbering year tokens `YY` and `YYYY`.
   * See: https://date-fns.org/docs/Unicode-Tokens */
  useAdditionalWeekYearTokens?: boolean;
  /** If true, allows usage of the day of year tokens `D` and `DD`.
   * See: https://date-fns.org/docs/Unicode-Tokens */
  useAdditionalDayOfYearTokens?: boolean;
}
/**
 * The context options. Used to build function options.
 */
interface ContextOptions<DateType extends Date> {
  /**
   * The context to use in the function. It allows to normalize the arguments
   * to a specific date instance, which is useful for extensions like [`TZDate`](https://github.com/date-fns/tz).
   */
  in?: ContextFn<DateType> | undefined;
}
/**
  /**
   * The context function type. It's used to normalize the input arguments to
   * a specific date instance, which is useful for extensions like [`TZDate`](https://github.com/date-fns/tz).
   */
type ContextFn<DateType extends Date> = (value: DateArg<Date> & {}) => DateType;

/**
 * The {@link addDays} function options.
 */
interface AddDaysOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
declare function addDays<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddDaysOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link addMonths} function options.
 */
interface AddMonthsOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
declare function addMonths<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddMonthsOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link addWeeks} function options.
 */
interface AddWeeksOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of weeks to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 * @param options - An object with options
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
declare function addWeeks<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddWeeksOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link addYears} function options.
 */
interface AddYearsOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
declare function addYears<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddYearsOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link differenceInCalendarDays} function options.
 */
interface DifferenceInCalendarDaysOptions extends ContextOptions<Date> {}
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
declare function differenceInCalendarDays(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarDaysOptions | undefined,
): number;

/**
 * The {@link differenceInCalendarMonths} function options.
 */
interface DifferenceInCalendarMonthsOptions extends ContextOptions<Date> {}
/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
declare function differenceInCalendarMonths(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarMonthsOptions | undefined,
): number;

/**
 * The {@link eachMonthOfInterval} function options.
 */
interface EachMonthOfIntervalOptions<DateType extends Date = Date>
  extends StepOptions,
    ContextOptions<DateType> {}
/**
 * The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
 */
type EachMonthOfIntervalResult<
  IntervalType extends Interval,
  Options extends EachMonthOfIntervalOptions | undefined,
> = Array<
  Options extends EachMonthOfIntervalOptions<infer DateType>
    ? DateType
    : IntervalType["start"] extends Date
      ? IntervalType["start"]
      : IntervalType["end"] extends Date
        ? IntervalType["end"]
        : Date
>;
/**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */
declare function eachMonthOfInterval<
  IntervalType extends Interval,
  Options extends EachMonthOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachMonthOfIntervalResult<IntervalType, Options>;

/**
 * The {@link endOfISOWeek} function options.
 */
interface EndOfISOWeekOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */
declare function endOfISOWeek<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfISOWeekOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link endOfMonth} function options.
 */
interface EndOfMonthOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
declare function endOfMonth<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfMonthOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link endOfWeek} function options.
 */
interface EndOfWeekOptions<DateType extends Date = Date>
  extends WeekOptions,
    LocalizedOptions<"options">,
    ContextOptions<DateType> {}
/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
declare function endOfWeek<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(date: DateArg<DateType>, options?: EndOfWeekOptions<ResultDate>): ResultDate;

/**
 * The {@link endOfYear} function options.
 */
interface EndOfYearOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
declare function endOfYear<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(date: DateArg<DateType>, options?: EndOfYearOptions<ResultDate>): ResultDate;

/**
 * The {@link format} function options.
 */
interface FormatOptions$1
  extends LocalizedOptions<"options" | "localize" | "formatLong">,
    WeekOptions,
    FirstWeekContainsDateOptions,
    AdditionalTokensOptions,
    ContextOptions<Date> {}
/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
declare function format(
  date: DateArg<Date> & {},
  formatStr: string,
  options?: FormatOptions$1,
): string;

/**
 * The {@link getISOWeek} function options.
 */
interface GetISOWeekOptions extends ContextOptions<Date> {}
/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
declare function getISOWeek(
  date: DateArg<Date> & {},
  options?: GetISOWeekOptions | undefined,
): number;

/**
 * The {@link getMonth} function options.
 */
interface GetMonthOptions extends ContextOptions<Date> {}
/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The month index (0-11)
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
declare function getMonth(
  date: DateArg<Date> & {},
  options?: GetMonthOptions | undefined,
): number;

/**
 * The {@link getWeek} function options.
 */
interface GetWeekOptions
  extends LocalizedOptions<"options">,
    WeekOptions,
    FirstWeekContainsDateOptions,
    ContextOptions<Date> {}
/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */
declare function getWeek(
  date: DateArg<Date> & {},
  options?: GetWeekOptions | undefined,
): number;

/**
 * The {@link getYear} function options.
 */
interface GetYearOptions extends ContextOptions<Date> {}
/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
declare function getYear(
  date: DateArg<Date> & {},
  options?: GetYearOptions | undefined,
): number;

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
declare function isAfter(
  date: DateArg<Date> & {},
  dateToCompare: DateArg<Date> & {},
): boolean;

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
declare function isBefore(
  date: DateArg<Date> & {},
  dateToCompare: DateArg<Date> & {},
): boolean;

/**
 * The {@link isSameDay} function options.
 */
interface IsSameDayOptions extends ContextOptions<Date> {}
/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
declare function isSameDay(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: IsSameDayOptions | undefined,
): boolean;

/**
 * The {@link isSameMonth} function options.
 */
interface IsSameMonthOptions extends ContextOptions<Date> {}
/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
declare function isSameMonth(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: IsSameMonthOptions | undefined,
): boolean;

/**
 * The {@link isSameYear} function options.
 */
interface IsSameYearOptions extends ContextOptions<Date> {}
/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */
declare function isSameYear(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: IsSameYearOptions | undefined,
): boolean;

/**
 * The {@link max} function options.
 */
interface MaxOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */
declare function max<DateType extends Date, ResultDate extends Date = DateType>(
  dates: DateArg<DateType>[],
  options?: MaxOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link min} function options.
 */
interface MinOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */
declare function min<DateType extends Date, ResultDate extends Date = DateType>(
  dates: Array<DateArg<DateType>>,
  options?: MinOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link setMonth} function options.
 */
interface SetMonthOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 * @param options - The options
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
declare function setMonth<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  month: number,
  options?: SetMonthOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link setYear} function options.
 */
interface SetYearOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
declare function setYear<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  year: number,
  options?: SetYearOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link startOfDay} function options.
 */
interface StartOfDayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
declare function startOfDay<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: StartOfDayOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link startOfISOWeek} function options.
 */
interface StartOfISOWeekOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
declare function startOfISOWeek<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: StartOfISOWeekOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link startOfMonth} function options.
 */
interface StartOfMonthOptions<ResultDate extends Date>
  extends ContextOptions<ResultDate> {}
/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date. The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
 * Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
 * or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
declare function startOfMonth<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: StartOfMonthOptions<ResultDate> | undefined,
): ResultDate;

/**
 * The {@link startOfWeek} function options.
 */
interface StartOfWeekOptions<DateType extends Date = Date>
  extends LocalizedOptions<"options">,
    WeekOptions,
    ContextOptions<DateType> {}
/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
declare function startOfWeek<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: StartOfWeekOptions<ResultDate>,
): ResultDate;

/**
 * The {@link startOfYear} function options.
 */
interface StartOfYearOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
declare function startOfYear<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: StartOfYearOptions<ResultDate> | undefined,
): ResultDate;

/**
 * Return the end date of the week in the broadcast calendar.
 *
 * @since 9.4.0
 */
declare function endOfBroadcastWeek(date: Date, dateLib: DateLib): Date;

/**
 * Return the start date of the week in the broadcast calendar.
 *
 * @since 9.4.0
 */
declare function startOfBroadcastWeek(date: Date, dateLib: DateLib): Date;

/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */
declare function Button(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
): JSX.Element;
type ButtonProps = Parameters<typeof Button>[0];

/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function CaptionLabel(
  props: HTMLAttributes<HTMLSpanElement>,
): JSX.Element;
type CaptionLabelProps = Parameters<typeof CaptionLabel>[0];

/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Chevron(props: {
  className?: string;
  /**
   * The size of the chevron.
   *
   * @defaultValue 24
   */
  size?: number;
  /** Set to `true` to disable the chevron. */
  disabled?: boolean;
  /** The orientation of the chevron. */
  orientation?: "up" | "down" | "left" | "right";
}): JSX.Element;
type ChevronProps = Parameters<typeof Chevron>[0];

/**
 * Render the gridcell of a day in the calendar and handle the interaction and
 * the focus with they day.
 *
 * If you need to just change the content of the day cell, consider swapping the
 * `DayButton` component instead.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Day(
  props: {
    /** The day to render. */
    day: CalendarDay;
    /** The modifiers to apply to the day. */
    modifiers: Modifiers;
  } & HTMLAttributes<HTMLDivElement>,
): JSX.Element;
type DayProps = Parameters<typeof Day>[0];

/**
 * Render the button for a day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function DayButton(
  props: {
    /** The day to render. */
    day: CalendarDay;
    /** The modifiers for the day. */
    modifiers: Modifiers;
  } & ButtonHTMLAttributes<HTMLButtonElement>,
): JSX.Element;
type DayButtonProps = Parameters<typeof DayButton>[0];

/** An option to use in the dropdown. Maps to the `<option>` HTML element. */
type DropdownOption = {
  /** The value of the option. */
  value: number;
  /** The label of the option. */
  label: string;
  /**
   * The dropdown option is disabled when it cannot be selected because out of
   * the calendar range.
   */
  disabled: boolean;
};
/**
 * Render a dropdown component to use in the navigation bar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Dropdown(
  props: {
    /**
     * @deprecated Use{@link useDayPicker} hook to get the list of internal
     *   components.
     */
    components: CustomComponents;
    /**
     * @deprecated Use {@link useDayPicker} hook to get the list of internal
     *   class names.
     */
    classNames: ClassNames;
    options?: DropdownOption[] | undefined;
  } & Omit<SelectHTMLAttributes<HTMLSelectElement>, "children">,
): JSX.Element;
type DropdownProps = Parameters<typeof Dropdown>[0];

/**
 * Render the the navigation dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function DropdownNav(
  props: HTMLAttributes<HTMLDivElement>,
): JSX.Element;
type DropdownNavProps = Parameters<typeof DropdownNav>[0];

/**
 * Component wrapping the footer.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Footer(props: HTMLAttributes<HTMLDivElement>): JSX.Element;
type FooterProps = Parameters<typeof Footer>[0];

/** Represent a week in a calendar month. */
declare class CalendarWeek {
  constructor(weekNumber: number, days: CalendarDay[]);
  /** The number of the week within the year. */
  weekNumber: number;
  /** The days within the week. */
  days: CalendarDay[];
}

/** Represent a month in a calendar year. Contains the weeks within the month. */
declare class CalendarMonth {
  constructor(month: Date, weeks: CalendarWeek[]);
  /** The date of the month. */
  date: Date;
  /** The weeks within the month. */
  weeks: CalendarWeek[];
}

/**
 * Render the grid with the weekday header row and the weeks for the given
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Month(
  props: {
    /** The month where the grid is displayed. */
    calendarMonth: CalendarMonth;
    /** The index where this month is displayed. */
    displayIndex: number;
  } & HTMLAttributes<HTMLDivElement>,
): JSX.Element;
type MonthProps = Parameters<typeof Month>[0];

/**
 * Render the grid of days in a month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function MonthGrid(
  props: TableHTMLAttributes<HTMLTableElement>,
): JSX.Element;
type MonthGridProps = Parameters<typeof MonthGrid>[0];

/**
 * Component wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Months(props: HTMLAttributes<HTMLDivElement>): JSX.Element;
type MonthsProps = Parameters<typeof Months>[0];

/**
 * Render the dropdown to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function MonthsDropdown(props: DropdownProps): JSX.Element;

/**
 * Render the toolbar with the navigation button.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Nav(
  props: {
    onPreviousClick?: MouseEventHandler<HTMLButtonElement>;
    onNextClick?: MouseEventHandler<HTMLButtonElement>;
    previousMonth?: Date | undefined;
    nextMonth?: Date | undefined;
  } & HTMLAttributes<HTMLElement>,
): JSX.Element;
type NavProps = Parameters<typeof Nav>[0];

/**
 * Render the next month button element in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function NextMonthButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
): JSX.Element;
type NextMonthButtonProps = Parameters<typeof NextMonthButton>[0];

/**
 * Render the `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Option(
  props: OptionHTMLAttributes<HTMLOptionElement>,
): JSX.Element;
type OptionProps = Parameters<typeof Option>[0];

/**
 * Render the previous month button element in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function PreviousMonthButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
): JSX.Element;
type PreviousMonthButtonProps = Parameters<typeof PreviousMonthButton>[0];

/**
 * Render the root element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Root(
  props: {
    /** Ref for root element used when `animate` is `true`. */
    rootRef?: Ref<HTMLDivElement>;
  } & HTMLAttributes<HTMLDivElement>,
): JSX.Element;
type RootProps = Parameters<typeof Root>[0];

/**
 * Render the `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Select(
  props: SelectHTMLAttributes<HTMLSelectElement>,
): JSX.Element;
type SelectProps = Parameters<typeof Select>[0];

/**
 * Render a row in the calendar, with the days and the week number.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Week(
  props: {
    week: CalendarWeek;
  } & HTMLAttributes<HTMLTableRowElement>,
): JSX.Element;
type WeekProps = Parameters<typeof Week>[0];

/**
 * Render the column header with the weekday name (e.g. "Mo", "Tu", etc.).
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Weekday(
  props: ThHTMLAttributes<HTMLTableCellElement>,
): JSX.Element;
type WeekdayProps = Parameters<typeof Weekday>[0];

/**
 * Render the row with the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Weekdays(
  props: HTMLAttributes<HTMLTableRowElement>,
): JSX.Element;
type WeekdaysProps = Parameters<typeof Weekdays>[0];

/**
 * Render the cell with the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function WeekNumber(
  props: {
    /** The week to render. */
    week: CalendarWeek;
  } & ThHTMLAttributes<HTMLTableCellElement>,
): JSX.Element;
type WeekNumberProps = Parameters<typeof WeekNumber>[0];

/**
 * Render the column header for the week numbers.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function WeekNumberHeader(
  props: ThHTMLAttributes<HTMLTableCellElement>,
): JSX.Element;
type WeekNumberHeaderProps = Parameters<typeof WeekNumberHeader>[0];

/**
 * Render the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Weeks(
  props: HTMLAttributes<HTMLTableSectionElement>,
): JSX.Element;
type WeeksProps = Parameters<typeof Weeks>[0];

/**
 * Render the dropdown to navigate between years.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function YearsDropdown(props: DropdownProps): JSX.Element;

/**
 * Format the caption of the month.
 *
 * @defaultValue `LLLL y` (e.g. "November 2022")
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
declare function formatCaption(
  month: Date,
  options?: DateLibOptions,
  dateLib?: DateLib,
): string;
/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */
declare const formatMonthCaption: typeof formatCaption;

/**
 * Format the day date shown in the day cell.
 *
 * @defaultValue `d` (e.g. "1")
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
declare function formatDay(
  date: Date,
  options?: DateLibOptions,
  dateLib?: DateLib,
): string;

/**
 * Format the month number for the dropdown option label.
 *
 * @defaultValue The localized month name
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
declare function formatMonthDropdown(month: Date, dateLib?: DateLib): string;

/**
 * Format the week number.
 *
 * @defaultValue `weekNumber.toLocaleString()` with a leading zero for single-digit numbers
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
declare function formatWeekNumber(weekNumber: number): string;

/**
 * Format the week number header.
 *
 * @defaultValue `""`
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
declare function formatWeekNumberHeader(): string;

/**
 * Format the weekday name to be displayed in the weekdays header.
 *
 * @defaultValue `cccccc` (e.g. "Mo" for Monday)
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
declare function formatWeekdayName(
  weekday: Date,
  options?: DateLibOptions,
  dateLib?: DateLib,
): string;

/**
 * Format the years for the dropdown option label.
 *
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
declare function formatYearDropdown(year: Date, dateLib?: DateLib): string;
/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */
declare const formatYearCaption: typeof formatYearDropdown;

/**
 * The ARIA label for the month grid, that will be announced when entering the
 * grid.
 *
 * @defaultValue `LLLL y` (e.g. "November 2022")
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelGrid(
  date: Date,
  options?: DateLibOptions,
  dateLib?: DateLib,
): string;
/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */
declare const labelCaption: typeof labelGrid;

/**
 * The label for the day gridcell when the calendar is not interactive.
 *
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelGridcell(
  date: Date,
  /** The modifiers for the day. */
  modifiers?: Modifiers,
  options?: DateLibOptions,
  dateLib?: DateLib,
): string;

/**
 * The ARIA label for the day button.
 *
 * Use the `modifiers` argument to add additional context to the label, e.g.
 * when a day is selected or is today.
 *
 * @defaultValue The formatted date.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelDayButton(
  date: Date,
  /** The modifiers for the day. */
  modifiers: Modifiers,
  options?: DateLibOptions,
  dateLib?: DateLib,
): string;
/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */
declare const labelDay: typeof labelDayButton;

/**
 * The ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelNav(): string;

/**
 * The ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelMonthDropdown(options?: DateLibOptions): string;

/**
 * The ARIA label for next month button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelNext(
  /** `undefined` where there's no next month to navigate to. */
  month: Date | undefined,
): string;

/**
 * The ARIA label for previous month button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelPrevious(
  /** Undefined where there's no previous month to navigate to. */
  month: Date | undefined,
): string;

/**
 * The ARIA label for the Weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelWeekday(
  date: Date,
  options?: DateLibOptions,
  dateLib?: DateLib,
): string;

/**
 * The ARIA label for the week number cell (the first cell in the row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelWeekNumber(
  weekNumber: number,
  options?: DateLibOptions,
): string;

/**
 * The ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelWeekNumberHeader(options?: DateLibOptions): string;

/**
 * The ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelYearDropdown(options?: DateLibOptions): string;

/**
 * Selection modes supported by DayPicker.
 *
 * - `single`: use DayPicker to select single days.
 * - `multiple`: allow selecting multiple days.
 * - `range`: use DayPicker to select a range of days.
 *
 * @see https://daypicker.dev/docs/selection-modes
 */
type Mode = "single" | "multiple" | "range";
/**
 * The components that can be changed using the `components` prop.
 *
 * @see https://daypicker.dev/guides/custom-components
 */
type CustomComponents = {
  /**
   * Render any button element in DayPicker.
   *
   * @deprecated Use {@link CustomComponents.NextMonthButton} or
   *   {@link CustomComponents.PreviousMonthButton} instead.
   */
  Button: typeof Button;
  /** Render the chevron icon used in the navigation buttons and dropdowns. */
  Chevron: typeof Chevron;
  /** Render the caption label of the month grid. */
  CaptionLabel: typeof CaptionLabel;
  /** Render the day cell in the month grid. */
  Day: typeof Day;
  /** Render the button containing the day in the day cell. */
  DayButton: typeof DayButton;
  /** Render the dropdown element to select years and months. */
  Dropdown: typeof Dropdown;
  /** Render the container of the dropdowns. */
  DropdownNav: typeof DropdownNav;
  /** Render the footer element announced by screen readers. */
  Footer: typeof Footer;
  /** Render the container of the MonthGrid. */
  Month: typeof Month;
  /** Render the caption of the month grid. */
  MonthCaption: typeof MonthCaption;
  /** Render the grid of days in a month. */
  MonthGrid: typeof MonthGrid;
  /** Wrapper of the month grids. */
  Months: typeof Months;
  /** Render the navigation element with the next and previous buttons. */
  Nav: typeof Nav;
  /** Render the `<option>` HTML element in the dropdown. */
  Option: typeof Option;
  /** Render the previous month button element in the navigation. */
  PreviousMonthButton: typeof PreviousMonthButton;
  /** Render the next month button element in the navigation. */
  NextMonthButton: typeof NextMonthButton;
  /** Render the root element of the calendar. */
  Root: typeof Root;
  /** Render the select element in the dropdowns. */
  Select: typeof Select;
  /** Render the weeks section in the month grid. */
  Weeks: typeof Weeks;
  /** Render the week rows. */
  Week: typeof Week;
  /** Render the weekday name in the header. */
  Weekday: typeof Weekday;
  /** Render the row containing the week days. */
  Weekdays: typeof Weekdays;
  /** Render the cell with the number of the week. */
  WeekNumber: typeof WeekNumber;
  /** Render the header of the week number column. */
  WeekNumberHeader: typeof WeekNumberHeader;
  /** Render the dropdown with the months. */
  MonthsDropdown: typeof MonthsDropdown;
  /** Render the dropdown with the years. */
  YearsDropdown: typeof YearsDropdown;
};
/** Represent a map of formatters used to render localized content. */
type Formatters = {
  /** Format the caption of a month grid. */
  formatCaption: typeof formatCaption;
  /** Format the day in the day cell. */
  formatDay: typeof formatDay;
  /** Format the label in the month dropdown. */
  formatMonthDropdown: typeof formatMonthDropdown;
  /**
   * @ignore
   * @deprecated Use {@link Formatters.formatCaption} instead.
   */
  formatMonthCaption: typeof formatMonthCaption;
  /** Format the week number. */
  formatWeekNumber: typeof formatWeekNumber;
  /** Format the header of the week number column. */
  formatWeekNumberHeader: typeof formatWeekNumberHeader;
  /** Format the week day name in the header. */
  formatWeekdayName: typeof formatWeekdayName;
  /** Format the label in the year dropdown. */
  formatYearDropdown: typeof formatYearDropdown;
  /**
   * @ignore
   * @deprecated Use {@link Formatters.formatYearDropdown} instead.
   */
  formatYearCaption: typeof formatYearCaption;
};
/** Map of functions to translate ARIA labels for the relative elements. */
type Labels = {
  /** The label for the navigation toolbar. */
  labelNav: typeof labelNav;
  /** The label for the month grid. */
  labelGrid: typeof labelGrid;
  /** The label for the gridcell, when the calendar is not interactive. */
  labelGridcell: typeof labelGridcell;
  /** The label for the month dropdown. */
  labelMonthDropdown: typeof labelMonthDropdown;
  /** The label for the year dropdown. */
  labelYearDropdown: typeof labelYearDropdown;
  /** The label for the "next month" button. */
  labelNext: typeof labelNext;
  /** The label for the "previous month" button. */
  labelPrevious: typeof labelPrevious;
  /** The label for the day button. */
  labelDayButton: typeof labelDayButton;
  /**
   * @ignore
   * @deprecated Use {@link labelDayButton} instead.
   */
  labelDay: typeof labelDayButton;
  /** The label for the weekday. */
  labelWeekday: typeof labelWeekday;
  /** The label for the week number. */
  labelWeekNumber: typeof labelWeekNumber;
  /**
   * Return the label for the column of the week number.
   *
   * @since 9.0.0
   */
  labelWeekNumberHeader: typeof labelWeekNumberHeader;
};
/**
 * A value or a function that matches a specific day.
 *
 * @example
 *   // will always match the day
 *   const booleanMatcher: Matcher = true;
 *
 *   // will match the today's date
 *   const dateMatcher: Matcher = new Date();
 *
 *   // will match the days in the array
 *   const arrayMatcher: Matcher = [
 *     new Date(2019, 1, 2),
 *     new Date(2019, 1, 4)
 *   ];
 *
 *   // will match days after the 2nd of February 2019
 *   const afterMatcher: DateAfter = { after: new Date(2019, 1, 2) };
 *
 *   // will match days before the 2nd of February 2019 }
 *   const beforeMatcher: DateBefore = { before: new Date(2019, 1, 2) };
 *
 *   // will match Sundays
 *   const dayOfWeekMatcher: DayOfWeek = {
 *     dayOfWeek: 0
 *   };
 *
 *   // will match the included days, except the two dates
 *   const intervalMatcher: DateInterval = {
 *     after: new Date(2019, 1, 2),
 *     before: new Date(2019, 1, 5)
 *   };
 *
 *   // will match the included days, including the two dates
 *   const rangeMatcher: DateRange = {
 *     from: new Date(2019, 1, 2),
 *     to: new Date(2019, 1, 5)
 *   };
 *
 *   // will match when the function return true
 *   const functionMatcher: Matcher = (day: Date) => {
 *     return day.getMonth() === 2; // match when month is March
 *   };
 */
type Matcher =
  | boolean
  | ((date: Date) => boolean)
  | Date
  | Date[]
  | DateRange
  | DateBefore
  | DateAfter
  | DateInterval
  | DayOfWeek;
/**
 * Match a day falling after the specified date, with the date not included.
 *
 * @example
 *   // Match days after the 2nd of February 2019
 *   const matcher: DateAfter = { after: new Date(2019, 1, 2) };
 */
type DateAfter = {
  after: Date;
};
/**
 * Match a day falling before the specified date, with the date not included.
 *
 * @example
 *   // Match days before the 2nd of February 2019
 *   const matcher: DateBefore = { before: new Date(2019, 1, 2) };
 */
type DateBefore = {
  before: Date;
};
/**
 * An interval of dates. Differently from {@link DateRange}, the range ends here
 * are not included.
 *
 * @example
 *   // Match the days between the 2nd and the 5th of February 2019
 *   const matcher: DateInterval = {
 *     after: new Date(2019, 1, 2),
 *     before: new Date(2019, 1, 5)
 *   };
 */
type DateInterval = {
  before: Date;
  after: Date;
};
/**
 * A range of dates. The range can be open. Differently from
 * {@link DateInterval}, the range ends here are included.
 *
 * @example
 *   // Match the days between the 2nd and the 5th of February 2019
 *   const matcher: DateRange = {
 *     from: new Date(2019, 1, 2),
 *     to: new Date(2019, 1, 5)
 *   };
 */
type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};
/**
 * Match dates being one of the specified days of the week (`0-6`, where `0` is
 * Sunday).
 *
 * @example
 *   // Match Sundays
 *   const matcher: DayOfWeek = { dayOfWeek: 0 };
 *   // Match weekends
 *   const matcher: DayOfWeek = { dayOfWeek: [0, 6] };
 */
type DayOfWeek = {
  dayOfWeek: number | number[];
};
/**
 * The event handler triggered when clicking or interacting with a day.
 *
 * @template EventType - The event type that triggered the event (e.g.
 *   `MouseEvent`, `KeyboardEvent`, etc.).
 * @param date - The date that has triggered the event.
 * @param modifiers - The modifiers belonging to the date.
 * @param e - The DOM event that triggered the event.
 */
type DayEventHandler<EventType> = (
  date: Date,
  modifiers: Modifiers,
  e: EventType,
) => void;
/**
 * The event handler when a month is changed in the calendar.
 *
 * ```tsx
 * <DayPicker onMonthChange={(month) => console.log(month)} />
 * ```
 *
 * @see https://daypicker.dev/docs/navigation
 */
type MonthChangeEventHandler = (month: Date) => void;
/**
 * The CSS classnames to use for the {@link UI} elements, the
 * {@link SelectionState} and the {@link DayFlag}.
 *
 * @example
 *   const classNames: ClassNames = {
 *     [UI.Root]: "root",
 *     [UI.Outside]: "outside",
 *     [UI.Nav]: "nav"
 *     // etc.
 *   };
 */
type ClassNames = {
  [key in UI | SelectionState | DayFlag | Animation]: string;
};
/**
 * The CSS styles to use for the {@link UI} elements, the {@link SelectionState}
 * and the {@link DayFlag}.
 */
type Styles = {
  [key in UI | SelectionState | DayFlag]: CSSProperties | undefined;
};
/**
 * Represents the modifiers that match a specific day in the calendar.
 *
 * - Retrieve modifiers using the {@link OnSelectHandler} via the `onSelect` prop,
 *   or within custom components using the {@link useDayPicker} hook.
 * - Includes built-in modifiers from {@link DayFlag} and {@link SelectionState}.
 * - Add custom modifiers using the `modifiers` prop.
 *
 * @example
 *   const modifiers: Modifiers = {
 *   today: false, // the day is not today
 *   selected: true, // the day is selected
 *   disabled: false, // the day is not disabled
 *   outside: false, // the day is not outside the month
 *   focused: false, // the day is not focused
 *
 *   weekend: false // custom modifier example for matching a weekend
 *   booked: true // custom modifier example for matching a booked day
 *   available: false // custom modifier example for matching an available day
 *   };
 *
 * @see https://daypicker.dev/guides/custom-modifiers
 */
type Modifiers = Record<string, boolean>;
/**
 * The style to apply to each day element matching a modifier.
 *
 * @example
 *   const modifiersStyles: ModifiersStyles = {
 *     today: { color: "red" },
 *     selected: { backgroundColor: "blue" },
 *     weekend: { color: "green" }
 *   };
 */
type ModifiersStyles = Record<string, CSSProperties>;
/**
 * The classnames to assign to each day element matching a modifier.
 *
 * @example
 *   const modifiersClassNames: ModifiersClassNames = {
 *     today: "today", // Use the "today" class for the today's day
 *     selected: "highlight", // Use the "highlight" class for the selected day
 *     weekend: "weekend" // Use the "weekend" class for the weekend days
 *   };
 */
type ModifiersClassNames = Record<string, string>;
/**
 * The props that have been deprecated since version 9.0.0.
 *
 * @private
 * @since 9.0.0
 * @see https://daypicker.dev/upgrading
 */
type V9DeprecatedProps =
  /** Use `hidden` prop instead. */
  | "fromDate"
  /** Use `hidden` prop instead. */
  | "toDate"
  /** Use `startMonth` instead. */
  | "fromMonth"
  /** Use `endMonth` instead. */
  | "toMonth"
  /** Use `startMonth` instead. */
  | "fromYear"
  /** Use `endMonth` instead. */
  | "toYear";
/** The direction to move the focus relative to the current focused date. */
type MoveFocusDir = "after" | "before";
/** The temporal unit to move the focus by. */
type MoveFocusBy =
  | "day"
  | "week"
  | "startOfWeek"
  | "endOfWeek"
  | "month"
  | "year";
/**
 * The numbering system supported by DayPicker.
 *
 * - `latn`: Latin (Western Arabic)
 * - `arab`: Arabic-Indic
 * - `arabext`: Eastern Arabic-Indic (Persian)
 * - `deva`: Devanagari
 * - `beng`: Bengali
 * - `guru`: Gurmukhi
 * - `gujr`: Gujarati
 * - `orya`: Oriya
 * - `tamldec`: Tamil
 * - `telu`: Telugu
 * - `knda`: Kannada
 * - `mlym`: Malayalam
 *
 * @see https://daypicker.dev/docs/translation#numeral-systems
 */
type Numerals =
  | "latn"
  | "arab"
  | "arabext"
  | "deva"
  | "beng"
  | "guru"
  | "gujr"
  | "orya"
  | "tamldec"
  | "telu"
  | "knda"
  | "mlym";

/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
declare const enUS: Locale;

/**
 * @ignore
 * @deprecated Use {@link DateLibOptions} instead.
 */
type FormatOptions = DateLibOptions;
/**
 * @ignore
 * @deprecated Use {@link DateLibOptions} instead.
 */
type LabelOptions = DateLibOptions;
/**
 * The options for the `DateLib` class.
 *
 * Extends `date-fns` [format](https://date-fns.org/docs/format),
 * [startOfWeek](https://date-fns.org/docs/startOfWeek) and
 * [endOfWeek](https://date-fns.org/docs/endOfWeek) options.
 *
 * @since 9.2.0
 */
interface DateLibOptions
  extends FormatOptions$1,
    StartOfWeekOptions,
    EndOfWeekOptions {
  /** A constructor for the `Date` object. */
  Date?: typeof Date;
  /** A locale to use for formatting dates. */
  locale?: Locale;
  /**
   * A time zone to use for dates.
   *
   * @since 9.5.0
   */
  timeZone?: string;
  /**
   * The numbering system to use for formatting numbers.
   *
   * @since 9.5.0
   */
  numerals?: Numerals;
}
/**
 * A wrapper class around [date-fns](http://date-fns.org) sharing the same
 * options.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */
declare class DateLib {
  /** The options for the date library. */
  readonly options: DateLibOptions;
  /** Overrides for the date library functions. */
  readonly overrides?: Partial<typeof DateLib.prototype>;
  /**
   * Creates an instance of DateLib.
   *
   * @param options The options for the date library.
   * @param overrides Overrides for the date library functions.
   */
  constructor(
    options?: DateLibOptions,
    overrides?: Partial<typeof DateLib.prototype>,
  );
  /**
   * Generate digit map dynamically using Intl.NumberFormat.
   *
   * @since 9.5.0
   */
  private getDigitMap;
  /**
   * Replace Arabic digits with the target numbering system digits.
   *
   * @since 9.5.0
   */
  private replaceDigits;
  /**
   * Format number using the custom numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number.
   */
  formatNumber(value: number): string;
  /**
   * Reference to the built-in Date constructor.
   *
   * @deprecated Use `newDate()` or `today()`.
   */
  Date: typeof Date;
  /**
   * Creates a new date object to the today's date.
   *
   * @since 9.5.0
   * @returns The new date object.
   */
  today: () => Date;
  /**
   * Creates a new date object with the specified year, month and date.
   *
   * @since 9.5.0
   * @param year The year.
   * @param monthIndex The month (0-11).
   * @param date The day of the month.
   * @returns The new date object.
   */
  newDate: (year: number, monthIndex: number, date: number) => Date;
  /**
   * Adds the specified number of days to the given date.
   *
   * @param date The date to add days to.
   * @param amount The number of days to add.
   * @returns The new date with the days added.
   */
  addDays: typeof addDays;
  /**
   * Adds the specified number of months to the given date.
   *
   * @param date The date to add months to.
   * @param amount The number of months to add.
   * @returns The new date with the months added.
   */
  addMonths: typeof addMonths;
  /**
   * Adds the specified number of weeks to the given date.
   *
   * @param date The date to add weeks to.
   * @param amount The number of weeks to add.
   * @returns The new date with the weeks added.
   */
  addWeeks: typeof addWeeks;
  /**
   * Adds the specified number of years to the given date.
   *
   * @param date The date to add years to.
   * @param amount The number of years to add.
   * @returns The new date with the years added.
   */
  addYears: typeof addYears;
  /**
   * Returns the number of calendar days between the given dates.
   *
   * @param dateLeft The later date.
   * @param dateRight The earlier date.
   * @returns The number of calendar days between the dates.
   */
  differenceInCalendarDays: typeof differenceInCalendarDays;
  /**
   * Returns the number of calendar months between the given dates.
   *
   * @param dateLeft The later date.
   * @param dateRight The earlier date.
   * @returns The number of calendar months between the dates.
   */
  differenceInCalendarMonths: typeof differenceInCalendarMonths;
  /**
   * Returns the months between the given dates.
   *
   * @param interval The interval to get the months for.
   */
  eachMonthOfInterval: typeof eachMonthOfInterval;
  /**
   * Returns the end of the broadcast week for the given date.
   *
   * @param date The original date.
   * @returns The end of the broadcast week.
   */
  endOfBroadcastWeek: typeof endOfBroadcastWeek;
  /**
   * Returns the end of the ISO week for the given date.
   *
   * @param date The original date.
   * @returns The end of the ISO week.
   */
  endOfISOWeek: typeof endOfISOWeek;
  /**
   * Returns the end of the month for the given date.
   *
   * @param date The original date.
   * @returns The end of the month.
   */
  endOfMonth: typeof endOfMonth;
  /**
   * Returns the end of the week for the given date.
   *
   * @param date The original date.
   * @returns The end of the week.
   */
  endOfWeek: typeof endOfWeek;
  /**
   * Returns the end of the year for the given date.
   *
   * @param date The original date.
   * @returns The end of the year.
   */
  endOfYear: typeof endOfYear;
  /**
   * Formats the given date using the specified format string.
   *
   * @param date The date to format.
   * @param formatStr The format string.
   * @returns The formatted date string.
   */
  format: typeof format;
  /**
   * Returns the ISO week number for the given date.
   *
   * @param date The date to get the ISO week number for.
   * @returns The ISO week number.
   */
  getISOWeek: typeof getISOWeek;
  /**
   * Returns the month of the given date.
   *
   * @param date The date to get the month for.
   * @returns The month.
   */
  getMonth: typeof getMonth;
  /**
   * Returns the year of the given date.
   *
   * @param date The date to get the year for.
   * @returns The year.
   */
  getYear: typeof getYear;
  /**
   * Returns the local week number for the given date.
   *
   * @param date The date to get the week number for.
   * @returns The week number.
   */
  getWeek: typeof getWeek;
  /**
   * Checks if the first date is after the second date.
   *
   * @param date The date to compare.
   * @param dateToCompare The date to compare with.
   * @returns True if the first date is after the second date.
   */
  isAfter: typeof isAfter;
  /**
   * Checks if the first date is before the second date.
   *
   * @param date The date to compare.
   * @param dateToCompare The date to compare with.
   * @returns True if the first date is before the second date.
   */
  isBefore: typeof isBefore;
  /**
   * Checks if the given value is a Date object.
   *
   * @param value The value to check.
   * @returns True if the value is a Date object.
   */
  isDate: (value: unknown) => value is Date;
  /**
   * Checks if the given dates are on the same day.
   *
   * @param dateLeft The first date to compare.
   * @param dateRight The second date to compare.
   * @returns True if the dates are on the same day.
   */
  isSameDay: typeof isSameDay;
  /**
   * Checks if the given dates are in the same month.
   *
   * @param dateLeft The first date to compare.
   * @param dateRight The second date to compare.
   * @returns True if the dates are in the same month.
   */
  isSameMonth: typeof isSameMonth;
  /**
   * Checks if the given dates are in the same year.
   *
   * @param dateLeft The first date to compare.
   * @param dateRight The second date to compare.
   * @returns True if the dates are in the same year.
   */
  isSameYear: typeof isSameYear;
  /**
   * Returns the latest date in the given array of dates.
   *
   * @param dates The array of dates to compare.
   * @returns The latest date.
   */
  max: typeof max;
  /**
   * Returns the earliest date in the given array of dates.
   *
   * @param dates The array of dates to compare.
   * @returns The earliest date.
   */
  min: typeof min;
  /**
   * Sets the month of the given date.
   *
   * @param date The date to set the month on.
   * @param month The month to set (0-11).
   * @returns The new date with the month set.
   */
  setMonth: typeof setMonth;
  /**
   * Sets the year of the given date.
   *
   * @param date The date to set the year on.
   * @param year The year to set.
   * @returns The new date with the year set.
   */
  setYear: typeof setYear;
  /**
   * Returns the start of the broadcast week for the given date.
   *
   * @param date The original date.
   * @returns The start of the broadcast week.
   */
  startOfBroadcastWeek: typeof startOfBroadcastWeek;
  /**
   * Returns the start of the day for the given date.
   *
   * @param date The original date.
   * @returns The start of the day.
   */
  startOfDay: typeof startOfDay;
  /**
   * Returns the start of the ISO week for the given date.
   *
   * @param date The original date.
   * @returns The start of the ISO week.
   */
  startOfISOWeek: typeof startOfISOWeek;
  /**
   * Returns the start of the month for the given date.
   *
   * @param date The original date.
   * @returns The start of the month.
   */
  startOfMonth: typeof startOfMonth;
  /**
   * Returns the start of the week for the given date.
   *
   * @param date The original date.
   * @returns The start of the week.
   */
  startOfWeek: typeof startOfWeek;
  /**
   * Returns the start of the year for the given date.
   *
   * @param date The original date.
   * @returns The start of the year.
   */
  startOfYear: typeof startOfYear;
}

/**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */
declare const defaultDateLib: DateLib;
/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */
declare const dateLib: DateLib;

/**
 * Represent the day displayed in the calendar.
 *
 * In DayPicker, a `Day` is a `Date` that can be displayed in the calendar. It
 * is used as extension of the native `Date` object to provide additional
 * information about the day.
 */
declare class CalendarDay {
  constructor(date: Date, displayMonth: Date, dateLib?: DateLib);
  /**
   * The utility functions to manipulate dates.
   *
   * @private
   */
  readonly dateLib: DateLib;
  /**
   * Whether the day is not belonging to the displayed month.
   *
   * When `outside` is `true`, use `displayMonth` to know to which month the day
   * belongs.
   */
  readonly outside: boolean;
  /**
   * The months where the day is displayed.
   *
   * In DayPicker, days can fall out the displayed months (e.g. when
   * `showOutsideDays` is `true`). This property is useful to know if the day is
   * in the same month of the displayed month.
   */
  readonly displayMonth: Date;
  /** The date represented by this day. */
  readonly date: Date;
  /**
   * Check if the day is the same as the given day: considering if it is in the
   * same display month.
   */
  isEqualTo(day: CalendarDay): boolean;
}

/**
 * Render the caption of a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function MonthCaption(
  props: {
    /** The month where the grid is displayed. */
    calendarMonth: CalendarMonth;
    /** The index where this month is displayed. */
    displayIndex: number;
  } & HTMLAttributes<HTMLDivElement>,
): JSX.Element;
type MonthCaptionProps = Parameters<typeof MonthCaption>[0];

/**
 * The props for the `<DayPicker />` component.
 *
 * @group DayPicker
 */
type DayPickerProps = PropsBase &
  (
    | PropsSingle
    | PropsSingleRequired
    | PropsMulti
    | PropsMultiRequired
    | PropsRange
    | PropsRangeRequired
    | {
        mode?: undefined;
        required?: undefined;
      }
  );
/**
 * Props for customizing the calendar, handling localization, and managing
 * events. These exclude the selection mode props.
 *
 * @group DayPicker
 * @see https://daypicker.dev/api/interfaces/PropsBase
 */
interface PropsBase {
  /**
   * Enable the selection of a single day, multiple days, or a range of days.
   *
   * @see https://daypicker.dev/docs/selection-modes
   */
  mode?: Mode | undefined;
  /**
   * Whether the selection is required.
   *
   * @see https://daypicker.dev/docs/selection-modes
   */
  required?: boolean | undefined;
  /** Class name to add to the root element. */
  className?: string;
  /**
   * Change the class names used by DayPicker.
   *
   * Use this prop when you need to change the default class names — for
   * example, when importing the style via CSS modules or when using a CSS
   * framework.
   *
   * @see https://daypicker.dev/docs/styling
   */
  classNames?: Partial<ClassNames> & Partial<DeprecatedUI<string>>;
  /**
   * Change the class name for the day matching the `modifiers`.
   *
   * @see https://daypicker.dev/guides/custom-modifiers
   */
  modifiersClassNames?: ModifiersClassNames;
  /** Style to apply to the root element. */
  style?: CSSProperties;
  /**
   * Change the inline styles of the HTML elements.
   *
   * @see https://daypicker.dev/docs/styling
   */
  styles?: Partial<Styles> & Partial<DeprecatedUI<CSSProperties>>;
  /**
   * Change the class name for the day matching the {@link modifiers}.
   *
   * @see https://daypicker.dev/guides/custom-modifiers
   */
  modifiersStyles?: ModifiersStyles;
  /** A unique id to add to the root element. */
  id?: string;
  /**
   * The initial month to show in the calendar.
   *
   * Use this prop to let DayPicker control the current month. If you need to
   * set the month programmatically, use {@link month} and {@link onMonthChange}.
   *
   * @defaultValue The current month
   * @see https://daypicker.dev/docs/navigation
   */
  defaultMonth?: Date;
  /**
   * The month displayed in the calendar.
   *
   * As opposed to `defaultMonth`, use this prop with `onMonthChange` to change
   * the month programmatically.
   *
   * @see https://daypicker.dev/docs/navigation
   */
  month?: Date;
  /**
   * The number of displayed months.
   *
   * @defaultValue 1
   * @see https://daypicker.dev/docs/customization#multiplemonths
   */
  numberOfMonths?: number;
  /**
   * The earliest month to start the month navigation.
   *
   * @since 9.0.0
   * @see https://daypicker.dev/docs/navigation#start-and-end-dates
   */
  startMonth?: Date | undefined;
  /**
   * @private
   * @deprecated This prop has been removed. Use `hidden={{ before: date }}`
   *   instead.
   * @see https://daypicker.dev/docs/navigation#start-and-end-dates
   */
  fromDate?: Date | undefined;
  /**
   * @private
   * @deprecated This prop has been renamed to `startMonth`.
   * @see https://daypicker.dev/docs/navigation#start-and-end-dates
   */
  fromMonth?: Date | undefined;
  /**
   * @private
   * @deprecated Use `startMonth` instead. E.g. `startMonth={new Date(year,
   *   0)}`.
   * @see https://daypicker.dev/docs/navigation#start-and-end-dates
   */
  fromYear?: number | undefined;
  /**
   * The latest month to end the month navigation.
   *
   * @since 9.0.0
   * @see https://daypicker.dev/docs/navigation#start-and-end-dates
   */
  endMonth?: Date;
  /**
   * @private
   * @deprecated This prop has been removed. Use `hidden={{ after: date }}`
   *   instead.
   * @see https://daypicker.dev/docs/navigation#start-and-end-dates
   */
  toDate?: Date;
  /**
   * @private
   * @deprecated This prop has been renamed to `endMonth`.
   * @see https://daypicker.dev/docs/navigation#start-and-end-dates
   */
  toMonth?: Date;
  /**
   * @private
   * @deprecated Use `endMonth` instead. E.g. `endMonth={new Date(year, 0)}`.
   * @see https://daypicker.dev/docs/navigation#start-and-end-dates
   */
  toYear?: number;
  /**
   * Paginate the month navigation displaying the `numberOfMonths` at a time.
   *
   * @see https://daypicker.dev/docs/customization#multiplemonths
   */
  pagedNavigation?: boolean;
  /**
   * Render the months in reversed order (when {@link numberOfMonths} is set) to
   * display the most recent month first.
   *
   * @see https://daypicker.dev/docs/customization#multiplemonths
   */
  reverseMonths?: boolean;
  /**
   * Hide the navigation buttons. This prop won't disable the navigation: to
   * disable the navigation, use {@link disableNavigation}.
   *
   * @since 9.0.0
   * @see https://daypicker.dev/docs/navigation#hidenavigation
   */
  hideNavigation?: boolean;
  /**
   * Disable the navigation between months. This prop won't hide the navigation:
   * to hide the navigation, use {@link hideNavigation}.
   *
   * @see https://daypicker.dev/docs/navigation#disablenavigation
   */
  disableNavigation?: boolean;
  /**
   * Show dropdowns to navigate between months or years.
   *
   * - `true`: display the dropdowns for both month and year
   * - `label`: display the month and the year as a label. Change the label with
   *   the `formatCaption` formatter.
   * - `month`: display only the dropdown for the months
   * - `year`: display only the dropdown for the years
   *
   * **Note:** showing the dropdown will set the start/end months
   * {@link startMonth} to 100 years ago, and {@link endMonth} to the end of the
   * current year.
   *
   * @see https://daypicker.dev/docs/customization#caption-layouts
   */
  captionLayout?: "label" | "dropdown" | "dropdown-months" | "dropdown-years";
  /**
   * Display always 6 weeks per each month, regardless of the month’s number of
   * weeks. Weeks will be filled with the days from the next month.
   *
   * @see https://daypicker.dev/docs/customization#fixed-weeks
   */
  fixedWeeks?: boolean;
  /**
   * Hide the row displaying the weekday row header.
   *
   * @since 9.0.0
   */
  hideWeekdays?: boolean;
  /**
   * Show the outside days (days falling in the next or the previous month).
   *
   * **Note:** when a {@link broadcastCalendar} is set, this prop defaults to
   * true.
   *
   * @see https://daypicker.dev/docs/customization#outside-days
   */
  showOutsideDays?: boolean;
  /**
   * Show the week numbers column. Weeks are numbered according to the local
   * week index.
   *
   * @see https://daypicker.dev/docs/customization#showweeknumber
   */
  showWeekNumber?: boolean;
  /**
   * Animate navigating between months.
   *
   * @since 9.6.0
   * @see https://daypicker.dev/docs/navigation#animate
   */
  animate?: boolean;
  /**
   * Display the weeks in the month following the broadcast calendar. Setting
   * this prop will ignore {@link weekStartsOn} (always Monday) and
   * {@link showOutsideDays} will default to true.
   *
   * @since 9.4.0
   * @see https://daypicker.dev/docs/localization#broadcast-calendar
   * @see https://en.wikipedia.org/wiki/Broadcast_calendar
   */
  broadcastCalendar?: boolean;
  /**
   * Use ISO week dates instead of the locale setting. Setting this prop will
   * ignore `weekStartsOn` and `firstWeekContainsDate`.
   *
   * @see https://daypicker.dev/docs/localization#iso-week-dates
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   */
  ISOWeek?: boolean;
  /**
   * The time zone (IANA or UTC offset) to use in the calendar (experimental).
   * See
   * [Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
   * for the possible values.
   *
   * Time zones are supported by the `TZDate` object by the
   * [@date-fns/tz](https://github.com/date-fns/tz) package. Please refer to the
   * package documentation for more information.
   *
   * @since 9.1.1
   * @experimental
   * @see https://daypicker.dev/docs/time-zone
   */
  timeZone?: string | undefined;
  /**
   * Change the components used for rendering the calendar elements.
   *
   * @see https://daypicker.dev/guides/custom-components
   */
  components?: Partial<CustomComponents>;
  /**
   * Add a footer to the calendar, acting as a live region.
   *
   * Use this prop to communicate the calendar's status to screen readers.
   * Prefer strings over complex UI elements.
   *
   * @see https://daypicker.dev/guides/accessibility#footer
   */
  footer?: ReactNode | string;
  /**
   * When a selection mode is set, DayPicker will focus the first selected day
   * (if set) or today's date (if not disabled).
   *
   * Use this prop when you need to focus DayPicker after a user action, for
   * improved accessibility.
   *
   * @see https://daypicker.dev/guides/accessibility#autofocus
   */
  autoFocus?: boolean;
  /**
   * @private
   * @deprecated This prop will be removed. Use {@link autoFocus} instead.
   */
  initialFocus?: boolean;
  /**
   * Apply the `disabled` modifier to the matching days.
   *
   * @see https://daypicker.dev/docs/selection-modes#disabling-dates
   */
  disabled?: Matcher | Matcher[] | undefined;
  /**
   * Apply the `hidden` modifier to the matching days. Will hide them from the
   * calendar.
   *
   * @see https://daypicker.dev/guides/custom-modifiers#hidden-modifier
   */
  hidden?: Matcher | Matcher[] | undefined;
  /**
   * The today’s date. Default is the current date. This date will get the
   * `today` modifier to style the day.
   *
   * @see https://daypicker.dev/guides/custom-modifiers#today-modifier
   */
  today?: Date;
  /**
   * Add modifiers to the matching days.
   *
   * @see https://daypicker.dev/guides/custom-modifiers
   */
  modifiers?: Record<string, Matcher | Matcher[] | undefined> | undefined;
  /**
   * Labels creators to override the defaults. Use this prop to customize the
   * aria-label attributes in DayPicker.
   *
   * @see https://daypicker.dev/docs/translation#aria-labels
   */
  labels?: Partial<Labels>;
  /**
   * Formatters used to format dates to strings. Use this prop to override the
   * default functions.
   *
   * @see https://daypicker.dev/docs/translation#custom-formatters
   */
  formatters?: Partial<Formatters>;
  /**
   * The text direction of the calendar. Use `ltr` for left-to-right (default)
   * or `rtl` for right-to-left.
   *
   * @see https://daypicker.dev/docs/translation#rtl-text-direction
   */
  dir?: HTMLDivElement["dir"];
  /**
   * The aria-label attribute to add to the container element.
   *
   * @since 9.4.1
   * @see https://daypicker.dev/guides/accessibility
   */
  ["aria-label"]?: string;
  /**
   * The role attribute to add to the container element.
   *
   * @since 9.4.1
   * @see https://daypicker.dev/guides/accessibility
   */
  role?: "application" | "dialog" | undefined;
  /**
   * A cryptographic nonce ("number used once") which can be used by Content
   * Security Policy for the inline `style` attributes.
   */
  nonce?: HTMLDivElement["nonce"];
  /** Add a `title` attribute to the container element. */
  title?: HTMLDivElement["title"];
  /** Add the language tag to the container element. */
  lang?: HTMLDivElement["lang"];
  /**
   * The locale object used to localize dates. Pass a locale from
   * `react-day-picker/locale` to localize the calendar.
   *
   * @example
   *   import { es } from "react-day-picker/locale";
   *   <DayPicker locale={es} />
   *
   * @defaultValue enUS - The English locale default of `date-fns`.
   * @see https://daypicker.dev/docs/localization
   * @see https://github.com/date-fns/date-fns/tree/main/src/locale for a list of the supported locales
   */
  locale?: Partial<Locale> | undefined;
  /**
   * The numeral system to use when formatting dates.
   *
   * - `latn`: Latin (Western Arabic)
   * - `arab`: Arabic-Indic
   * - `arabext`: Eastern Arabic-Indic (Persian)
   * - `deva`: Devanagari
   * - `beng`: Bengali
   * - `guru`: Gurmukhi
   * - `gujr`: Gujarati
   * - `orya`: Oriya
   * - `tamldec`: Tamil
   * - `telu`: Telugu
   * - `knda`: Kannada
   * - `mlym`: Malayalam
   *
   * @defaultValue `latn` Latin (Western Arabic)
   * @see https://daypicker.dev/docs/translation#numeral-systems
   */
  numerals?: Numerals | undefined;
  /**
   * The index of the first day of the week (0 - Sunday). Overrides the locale's
   * one.
   *
   * @see https://daypicker.dev/docs/localization#first-date-of-the-week
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  /**
   * The day of January, which is always in the first week of the year.
   *
   * @see https://daypicker.dev/docs/localization#first-week-contains-date
   */
  firstWeekContainsDate?: 1 | 4;
  /**
   * Enable `DD` and `DDDD` for week year tokens when formatting or parsing
   * dates.
   *
   * @see https://date-fns.org/docs/Unicode-Tokens
   */
  useAdditionalWeekYearTokens?: boolean | undefined;
  /**
   * Enable `YY` and `YYYY` for day of year tokens when formatting or parsing
   * dates.
   *
   * @see https://date-fns.org/docs/Unicode-Tokens
   */
  useAdditionalDayOfYearTokens?: boolean | undefined;
  /**
   * Event fired when the user navigates between months.
   *
   * @see https://daypicker.dev/docs/navigation#onmonthchange
   */
  onMonthChange?: MonthChangeEventHandler;
  /**
   * Event handler when the next month button is clicked.
   *
   * @see https://daypicker.dev/docs/navigation
   */
  onNextClick?: MonthChangeEventHandler;
  /**
   * Event handler when the previous month button is clicked.
   *
   * @see https://daypicker.dev/docs/navigation
   */
  onPrevClick?: MonthChangeEventHandler;
  /**
   * Event handler when a week number is clicked.
   *
   * @private
   * @deprecated Use a custom `WeekNumber` component instead.
   * @see https://daypicker.dev/docs/customization#showweeknumber
   */
  onWeekNumberClick?: any;
  /** Event handler when a day is clicked. */
  onDayClick?: DayEventHandler<MouseEvent>;
  /** Event handler when a day is focused. */
  onDayFocus?: DayEventHandler<FocusEvent>;
  /** Event handler when a day is blurred. */
  onDayBlur?: DayEventHandler<FocusEvent>;
  /** Event handler when a key is pressed on a day. */
  onDayKeyDown?: DayEventHandler<KeyboardEvent>;
  /** Event handler when the mouse enters a day. */
  onDayMouseEnter?: DayEventHandler<MouseEvent>;
  /** Event handler when the mouse leaves a day. */
  onDayMouseLeave?: DayEventHandler<MouseEvent>;
  /**
   * Replace the default date library with a custom one. Experimental: not
   * guaranteed to be stable (may not respect semver).
   *
   * @since 9.0.0
   * @experimental
   */
  dateLib?: Partial<typeof DateLib.prototype> | undefined;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayKeyUp?: DayEventHandler<KeyboardEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayKeyPress?: DayEventHandler<KeyboardEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayPointerEnter?: DayEventHandler<PointerEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayPointerLeave?: DayEventHandler<PointerEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayTouchCancel?: DayEventHandler<TouchEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayTouchEnd?: DayEventHandler<TouchEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayTouchMove?: DayEventHandler<TouchEvent>;
  /**
   * @private
   * @deprecated Use a custom `DayButton` component instead.
   */
  onDayTouchStart?: DayEventHandler<TouchEvent>;
}
/**
 * Shared handler type for `onSelect` callback when a selection mode is set.
 *
 * @template T - The type of the selected item.
 * @callback OnSelectHandler
 * @param {T} selected - The selected item after the event.
 * @param {Date} triggerDate - The date when the event was triggered.
 * @param {Modifiers} modifiers - The modifiers associated with the event.
 * @param {MouseEvent | KeyboardEvent} e - The event object.
 */
type OnSelectHandler<T> = (
  selected: T,
  triggerDate: Date,
  modifiers: Modifiers,
  e: MouseEvent | KeyboardEvent,
) => void;
/**
 * The props when the single selection is required.
 *
 * @group DayPicker
 * @see https://daypicker.dev/docs/selection-modes#single-mode
 */
interface PropsSingleRequired {
  mode: "single";
  required: true;
  /** The selected date. */
  selected: Date | undefined;
  /** Event handler when a day is selected. */
  onSelect?: OnSelectHandler<Date>;
}
/**
 * The props when the single selection is optional.
 *
 * @group DayPicker
 * @see https://daypicker.dev/docs/selection-modes#single-mode
 */
interface PropsSingle {
  mode: "single";
  required?: false | undefined;
  /** The selected date. */
  selected?: Date | undefined;
  /** Event handler when a day is selected. */
  onSelect?: OnSelectHandler<Date | undefined>;
}
/**
 * The props when the multiple selection is required.
 *
 * @group DayPicker
 * @see https://daypicker.dev/docs/selection-modes#multiple-mode
 */
interface PropsMultiRequired {
  mode: "multiple";
  required: true;
  /** The selected dates. */
  selected: Date[] | undefined;
  /** Event handler when days are selected. */
  onSelect?: OnSelectHandler<Date[]>;
  /** The minimum number of selectable days. */
  min?: number;
  /** The maximum number of selectable days. */
  max?: number;
}
/**
 * The props when the multiple selection is optional.
 *
 * @group DayPicker
 * @see https://daypicker.dev/docs/selection-modes#multiple-mode
 */
interface PropsMulti {
  mode: "multiple";
  required?: false | undefined;
  /** The selected dates. */
  selected?: Date[] | undefined;
  /** Event handler when days are selected. */
  onSelect?: OnSelectHandler<Date[] | undefined>;
  /** The minimum number of selectable days. */
  min?: number;
  /** The maximum number of selectable days. */
  max?: number;
}
/**
 * The props when the range selection is required.
 *
 * @group DayPicker
 * @see https://daypicker.dev/docs/selection-modes#range-mode
 */
interface PropsRangeRequired {
  mode: "range";
  required: true;
  disabled?: Matcher | Matcher[] | undefined;
  /**
   * When `true`, the range will reset when including a disabled day.
   *
   * @since V9.0.2
   */
  excludeDisabled?: boolean | undefined;
  /** The selected range. */
  selected: DateRange | undefined;
  /** Event handler when a range is selected. */
  onSelect?: OnSelectHandler<DateRange>;
  /** The minimum number of days to include in the range. */
  min?: number;
  /** The maximum number of days to include in the range. */
  max?: number;
}
/**
 * The props when the range selection is optional.
 *
 * @group DayPicker
 * @see https://daypicker.dev/docs/selection-modes#range-mode
 */
interface PropsRange {
  mode: "range";
  required?: false | undefined;
  disabled?: Matcher | Matcher[] | undefined;
  /**
   * When `true`, the range will reset when including a disabled day.
   *
   * @since V9.0.2
   */
  excludeDisabled?: boolean | undefined;
  /** The selected range. */
  selected?: DateRange | undefined;
  /** Event handler when the selection changes. */
  onSelect?: OnSelectHandler<DateRange | undefined>;
  /** The minimum number of days to include in the range. */
  min?: number;
  /** The maximum number of days to include in the range. */
  max?: number;
}

type Selection<T extends DayPickerProps> = {
  /** The selected date(s). */
  selected: SelectedValue<T> | undefined;
  /** Set a selection. */
  select: SelectHandler<T> | undefined;
  /** Whether the given date is selected. */
  isSelected: (date: Date) => boolean;
};
type SelectedSingle<
  T extends {
    required?: boolean;
  },
> = T["required"] extends true ? Date : Date | undefined;
type SelectedMulti<
  T extends {
    required?: boolean;
  },
> = T["required"] extends true ? Date[] : Date[] | undefined;
type SelectedRange<
  T extends {
    required?: boolean;
  },
> = T["required"] extends true ? DateRange : DateRange | undefined;
type SelectedValue<T> = T extends {
  mode: "single";
  required?: boolean;
}
  ? SelectedSingle<T>
  : T extends {
        mode: "multiple";
        required?: boolean;
      }
    ? SelectedMulti<T>
    : T extends {
          mode: "range";
          required?: boolean;
        }
      ? SelectedRange<T>
      : undefined;
type SelectHandlerSingle<
  T extends {
    required?: boolean | undefined;
  },
> = (
  triggerDate: Date,
  modifiers: Modifiers,
  e: MouseEvent | KeyboardEvent,
) => T["required"] extends true ? Date : Date | undefined;
type SelectHandlerMulti<
  T extends {
    required?: boolean | undefined;
  },
> = (
  triggerDate: Date,
  modifiers: Modifiers,
  e: MouseEvent | KeyboardEvent,
) => T["required"] extends true ? Date[] : Date[] | undefined;
type SelectHandlerRange<
  T extends {
    required?: boolean | undefined;
  },
> = (
  triggerDate: Date,
  modifiers: Modifiers,
  e: MouseEvent | KeyboardEvent,
) => T["required"] extends true ? DateRange : DateRange | undefined;
type SelectHandler<
  T extends {
    mode?: Mode | undefined;
    required?: boolean | undefined;
  },
> = T extends {
  mode: "single";
}
  ? SelectHandlerSingle<T>
  : T extends {
        mode: "multiple";
      }
    ? SelectHandlerMulti<T>
    : T extends {
          mode: "range";
        }
      ? SelectHandlerRange<T>
      : undefined;

/** @ignore */
declare const dayPickerContext: Context<
  | DayPickerContext<{
      mode?: Mode | undefined;
      required?: boolean | undefined;
    }>
  | undefined
>;
/**
 * Represents the context for the DayPicker component, providing various
 * properties and methods to interact with the calendar.
 *
 * @template T - The type of the DayPicker props, which must optionally include
 *   `mode` and `required` properties. This type can be used to refine the type
 *   returned by the hook.
 */
type DayPickerContext<
  T extends {
    mode?: Mode | undefined;
    required?: boolean | undefined;
  },
> = {
  /** The months displayed in the calendar. */
  months: CalendarMonth[];
  /** The next month to display. */
  nextMonth: Date | undefined;
  /** The previous month to display. */
  previousMonth: Date | undefined;
  /** Navigate to the specified month. Will fire the `onMonthChange` callback. */
  goToMonth: (month: Date) => void;
  /** Returns the modifiers for the given day. */
  getModifiers: (day: CalendarDay) => Modifiers;
  /** The selected date(s). */
  selected: SelectedValue<T> | undefined;
  /** Set a selection. */
  select: SelectHandler<T> | undefined;
  /** Whether the given date is selected. */
  isSelected: ((date: Date) => boolean) | undefined;
  /** The components used internally by DayPicker. */
  components: CustomComponents;
  /** The class names for the UI elements. */
  classNames: ClassNames;
  /** The styles for the UI elements. */
  styles: Partial<Styles> | undefined;
  /** The labels used in the user interface. */
  labels: Labels;
  /** The formatters used to format the UI elements. */
  formatters: Formatters;
  /**
   * The props as passed to the DayPicker component.
   *
   * @since 9.3.0
   */
  dayPickerProps: DayPickerProps;
};
/**
 * Returns the context to work with `<DayPicker />` inside custom components.
 *
 * This hook provides access to the DayPicker context, which includes various
 * properties and methods to interact with the DayPicker component. It must be
 * used within a custom component.
 *
 * @template T - Use this type to refine the returned context type with a
 *   specific selection mode.
 * @returns {DayPickerContext<T>} The context to work with DayPicker.
 * @throws {Error} If the hook is used outside of a DayPicker provider.
 * @group Hooks
 * @see https://daypicker.dev/guides/custom-components
 */
declare function useDayPicker<
  T extends {
    mode?: Mode | undefined;
    required?: boolean | undefined;
  },
>(): DayPickerContext<T>;

/**
 * @ignore
 * @deprecated This type will be removed.
 */
type RootProvider = any;
/**
 * @ignore
 * @deprecated This type will be removed.
 */
type RootProviderProps = any;
/**
 * @ignore
 * @deprecated This component has been renamed. Use `MonthCaption` instead.
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare const Caption: typeof MonthCaption;
/**
 * @ignore
 * @deprecated This type has been renamed. Use `MonthCaptionProps` instead.
 */
type CaptionProps = MonthCaptionProps;
/**
 * @ignore
 * @deprecated This component has been removed.
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
type HeadRow = any;
/**
 * @ignore
 * @deprecated This component has been renamed. Use `Week` instead.
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare const Row: typeof Week;
/**
 * @ignore
 * @deprecated This type has been removed. Use `WeekProps` instead.
 */
type RowProps = WeekProps;
/**
 * @ignore
 * @deprecated This type has been renamed. Use `PropsSingle` instead.
 */
type DayPickerSingleProps = PropsSingle;
/**
 * @ignore
 * @deprecated This type has been renamed. Use `PropsMulti` instead.
 */
type DayPickerMultipleProps = PropsMulti;
/**
 * @ignore
 * @deprecated This type has been renamed. Use `PropsRange` instead.
 */
type DayPickerRangeProps = PropsRange;
/**
 * @ignore
 * @deprecated This type will be removed. Use `NonNullable<unknown>` instead
 */
type DayPickerDefaultProps = NonNullable<unknown>;
/**
 * @ignore
 * @deprecated This type has been renamed. Use `Mode` instead.
 */
type DaySelectionMode = Mode;
/**
 * @ignore
 * @deprecated This type will be removed. Use `string` instead;
 */
type Modifier = string;
/**
 * @ignore
 * @deprecated This type will be removed. Use {@link DayFlag} or
 *   {@link SelectionState} instead.
 */
type InternalModifier =
  | DayFlag.disabled
  | DayFlag.hidden
  | DayFlag.focused
  | SelectionState.range_end
  | SelectionState.range_middle
  | SelectionState.range_start
  | SelectionState.selected;
/**
 * @ignore
 * @deprecated This type will be removed. Use `SelectHandler<{mode: "single"}>`
 *   instead.
 */
type SelectSingleEventHandler = PropsSingle["onSelect"];
/**
 * @ignore
 * @deprecated This type will be removed. Use `SelectHandler<{mode:
 *   "multiple"}>` instead.
 */
type SelectMultipleEventHandler = PropsMulti["onSelect"];
/**
 * @ignore
 * @deprecated This type will be removed. Use `SelectHandler<{mode: "range"}>`
 *   instead.
 */
type SelectRangeEventHandler = PropsRange["onSelect"];
/**
 * @ignore
 * @deprecated This type is not used anymore.
 */
type DayPickerProviderProps = any;
/**
 * @ignore
 * @deprecated This type has been removed to `useDayPicker`.
 * @group Hooks
 */
declare const useNavigation: typeof useDayPicker;
/**
 * @ignore
 * @deprecated This hook has been removed. Use a custom `Day` component instead.
 * @group Hooks
 * @see https://daypicker.dev/guides/custom-components
 */
type useDayRender = any;
/**
 * @ignore
 * @deprecated This type is not used anymore.
 */
type ContextProvidersProps = any;
/**
 * @ignore
 * @deprecated Use `typeof labelDayButton` instead.
 */
type DayLabel = typeof labelDayButton;
/**
 * @ignore
 * @deprecated Use `typeof labelNext` or `typeof labelPrevious` instead.
 */
type NavButtonLabel = typeof labelNext;
/**
 * @ignore
 * @deprecated Use `typeof labelWeekday` instead.
 */
type WeekdayLabel = typeof labelWeekday;
/**
 * @ignore
 * @deprecated Use `typeof labelWeekNumber` instead.
 */
type WeekNumberLabel = typeof labelWeekNumber;
/**
 * @ignore
 * @deprecated Use {@link DayMouseEventHandler} instead.
 */
type DayClickEventHandler = DayEventHandler<MouseEvent>;
/**
 * @ignore
 * @deprecated This type will be removed. Use `DayEventHandler<FocusEvent
 *   | KeyboardEvent>` instead.
 */
type DayFocusEventHandler = DayEventHandler<FocusEvent | KeyboardEvent>;
/**
 * @ignore
 * @deprecated This type will be removed. Use
 *   `DayEventHandler<KeyboardEvent>` instead.
 */
type DayKeyboardEventHandler = DayEventHandler<KeyboardEvent>;
/**
 * @ignore
 * @deprecated This type will be removed. Use
 *   `DayEventHandler<MouseEvent>` instead.
 */
type DayMouseEventHandler = DayEventHandler<MouseEvent>;
/**
 * @ignore
 * @deprecated This type will be removed. Use
 *   `DayEventHandler<PointerEvent>` instead.
 */
type DayPointerEventHandler = DayEventHandler<PointerEvent>;
/**
 * @ignore
 * @deprecated This type will be removed. Use
 *   `DayEventHandler<TouchEvent>` instead.
 */
type DayTouchEventHandler = DayEventHandler<TouchEvent>;

/**
 * Render the date picker calendar.
 *
 * @group DayPicker
 * @see https://daypicker.dev
 */
declare function DayPicker(props: DayPickerProps): JSX.Element;

/**
 * Get the default class names for the UI elements.
 *
 * @group Utilities
 */
declare function getDefaultClassNames(): ClassNames;

/**
 * Add a day to an existing range.
 *
 * The returned range takes in account the `undefined` values and if the added
 * day is already present in the range.
 *
 * @group Utilities
 */
declare function addToRange(
  /** The date to add to the range. */
  date: Date,
  /** The range where to add `date`. */
  initialRange: DateRange | undefined,
  min?: number,
  max?: number,
  required?: boolean,
  /** @ignore */
  dateLib?: DateLib,
): DateRange | undefined;

/**
 * Returns whether a day matches against at least one of the given
 * {@link Matcher}.
 *
 * ```tsx
 * const date = new Date(2022, 5, 19);
 * const matcher1: DateRange = {
 *   from: new Date(2021, 12, 21),
 *   to: new Date(2021, 12, 30)
 * };
 * const matcher2: DateRange = {
 *   from: new Date(2022, 5, 1),
 *   to: new Date(2022, 5, 23)
 * };
 * dateMatchModifiers(date, [matcher1, matcher2]); // true, since day is in the matcher1 range.
 * ```
 *
 * @group Utilities
 */
declare function dateMatchModifiers(
  date: Date,
  matchers: Matcher | Matcher[],
  dateLib?: DateLib,
): boolean;
/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */
declare const isMatch: typeof dateMatchModifiers;

/**
 * Returns whether a date range contains one or more days of the week.
 *
 * ```tsx
 * const range: DateRange = {
 *   from: new Date(2024, 8, 1), //  Sunday
 *   to: new Date(2024, 8, 6) //  Thursday
 * };
 * rangeContainsDayOfWeek(date, 1); // true: contains range contains Monday
 * ```
 *
 * @since 9.2.2
 * @group Utilities
 */
declare function rangeContainsDayOfWeek(
  range: {
    from: Date;
    to: Date;
  },
  dayOfWeek: number | number[],
  dateLib?: DateLib,
): boolean;

/**
 * Returns whether a range contains dates that match the given modifiers.
 *
 * ```tsx
 * const range: DateRange = {
 *   from: new Date(2021, 12, 21),
 *   to: new Date(2021, 12, 30)
 * };
 * const matcher1: Date = new Date(2021, 12, 21);
 * const matcher2: DateRange = {
 *   from: new Date(2022, 5, 1),
 *   to: new Date(2022, 5, 23)
 * };
 * rangeContainsModifiers(range, [matcher1, matcher2]); // true, since matcher1 is in the date.
 * ```
 *
 * @since 9.2.2
 * @group Utilities
 */
declare function rangeContainsModifiers(
  range: {
    from: Date;
    to: Date;
  },
  modifiers: Matcher | Matcher[],
  dateLib?: DateLib,
): boolean;

/**
 * Determines whether a given date is inside a specified date range.
 *
 * @since 9.0.0
 * @group Utilities
 */
declare function rangeIncludesDate(
  range: DateRange,
  date: Date,
  /** If `true`, the ends of the range are excluded. */
  excludeEnds?: boolean,
  dateLib?: DateLib,
): boolean;
/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */
declare const isDateInRange: (range: DateRange, date: Date) => boolean;

/**
 * Determines whether a given range overlaps with another range.
 *
 * @since 9.2.2
 * @group Utilities
 */
declare function rangeOverlaps(
  rangeLeft: {
    from: Date;
    to: Date;
  },
  rangeRight: {
    from: Date;
    to: Date;
  },
  dateLib?: DateLib,
): boolean;

/**
 * Returns true if `matcher` is of type {@link DateInterval}.
 *
 * @group Utilities
 */
declare function isDateInterval(matcher: unknown): matcher is DateInterval;
/**
 * Returns true if `value` is a {@link DateRange} type.
 *
 * @group Utilities
 */
declare function isDateRange(value: unknown): value is DateRange;
/**
 * Returns true if `value` is of type {@link DateAfter}.
 *
 * @group Utilities
 */
declare function isDateAfterType(value: unknown): value is DateAfter;
/**
 * Returns true if `value` is of type {@link DateBefore}.
 *
 * @group Utilities
 */
declare function isDateBeforeType(value: unknown): value is DateBefore;
/**
 * Returns true if `value` is a {@link DayOfWeek} type.
 *
 * @group Utilities
 */
declare function isDayOfWeekType(value: unknown): value is DayOfWeek;
/**
 * Returns true if `value` is an array of valid dates.
 *
 * @private
 */
declare function isDatesArray(
  value: unknown,
  dateLib: DateLib,
): value is Date[];

/**
 * Time zone date class. It overrides original Date functions making them
 * to perform all the calculations in the given time zone.
 *
 * It also provides new functions useful when working with time zones.
 *
 * Combined with date-fns, it allows using the class the same way as
 * the original date class.
 *
 * This complete version provides formatter functions, mirroring all original
 * methods of the `Date` class. It's build-size-heavier than `TZDateMini` and
 * should be used when you need to format a string or in an environment you
 * don't fully control (a library).
 *
 * For the minimal version, see `TZDateMini`.
 */
declare class TZDate extends Date {
  /**
   * Constructs a new `TZDate` instance in the system time zone.
   */
  constructor();

  /**
   * Constructs a new `TZDate` instance from the date time string and time zone.
   *
   * @param dateStr - Date time string to create a new instance from
   * @param timeZone - Time zone name (IANA or UTC offset)
   */
  constructor(dateStr: string, timeZone?: string);

  /**
   * Constructs a new `TZDate` instance from the date object and time zone.
   *
   * @param date - Date object to create a new instance from
   * @param timeZone - Time zone name (IANA or UTC offset)
   */
  constructor(date: Date, timeZone?: string);

  /**
   * Constructs a new `TZDate` instance from the Unix timestamp in milliseconds
   * and time zone.
   *
   * @param timestamp - Unix timestamp in milliseconds to create a new instance from
   * @param timeZone - Time zone name (IANA or UTC offset)
   */
  constructor(timestamp: number, timeZone?: string);

  /**
   * Constructs a new `TZDate` instance from the year, month, and time zone.
   *
   * @param year - Year
   * @param month - Month (0-11)
   * @param timeZone - Time zone name (IANA or UTC offset)
   */
  constructor(year: number, month: number, timeZone?: string);

  /**
   * Constructs a new `TZDate` instance from the year, month, date and time zone.
   *
   * @param year - Year
   * @param month - Month (0-11)
   * @param date - Date
   * @param timeZone - Time zone name (IANA or UTC offset)
   */
  constructor(year: number, month: number, date: number, timeZone?: string);

  /**
   * Constructs a new `TZDate` instance from the year, month, date, hours
   * and time zone.
   *
   * @param year - Year
   * @param month - Month (0-11)
   * @param date - Date
   * @param hours - Hours
   * @param timeZone - Time zone name (IANA or UTC offset)
   */
  constructor(
    year: number,
    month: number,
    date: number,
    hours: number,
    timeZone?: string,
  );

  /**
   * Constructs a new `TZDate` instance from the year, month, date, hours,
   * minutes and time zone.
   *
   * @param year - Year
   * @param month - Month (0-11)
   * @param date - Date
   * @param hours - Hours
   * @param minutes - Minutes
   * @param timeZone - Time zone name (IANA or UTC offset)
   */
  constructor(
    year: number,
    month: number,
    date: number,
    hours: number,
    minutes: number,
    timeZone?: string,
  );

  /**
   * Constructs a new `TZDate` instance from the year, month, date, hours,
   * minutes, seconds and time zone.
   *
   * @param year - Year
   * @param month - Month (0-11)
   * @param date - Date
   * @param hours - Hours
   * @param minutes - Minutes
   * @param seconds - Seconds
   * @param timeZone - Time zone name (IANA or UTC offset)
   */
  constructor(
    year: number,
    month: number,
    date: number,
    hours: number,
    minutes: number,
    seconds: number,
    timeZone?: string,
  );

  /**
   * Constructs a new `TZDate` instance from the year, month, date, hours,
   * minutes, seconds, milliseconds and time zone.
   *
   * @param year - Year
   * @param month - Month (0-11)
   * @param date - Date
   * @param hours - Hours
   * @param minutes - Minutes
   * @param seconds - Seconds
   * @param milliseconds - Milliseconds
   * @param timeZone - Time zone name (IANA or UTC offset)
   */
  constructor(
    year: number,
    month: number,
    date: number,
    hours: number,
    minutes: number,
    seconds: number,
    milliseconds: number,
    timeZone?: string,
  );

  /**
   * Creates a new `TZDate` instance in the given time zone.
   *
   * @param tz - Time zone name (IANA or UTC offset)
   */
  static tz(tz: string): TZDate;

  /**
   * Creates a new `TZDate` instance in the given time zone from the Unix
   * timestamp in milliseconds.
   *
   * @param tz - Time zone name (IANA or UTC offset)
   * @param timestamp - Unix timestamp in milliseconds
   */
  static tz(tz: string, timestamp: number): TZDate;

  /**
   * Creates a new `TZDate` instance in the given time zone from the date time
   * string.
   *
   * @param tz - Time zone name (IANA or UTC offset)
   * @param dateStr - Date time string
   */
  static tz(tz: string, dateStr: string): TZDate;

  /**
   * Creates a new `TZDate` instance in the given time zone from the date object.
   *
   * @param tz - Time zone name (IANA or UTC offset)
   * @param date - Date object
   */
  static tz(tz: string, date: Date): TZDate;

  /**
   * Creates a new `TZDate` instance in the given time zone from the year
   * and month.
   *
   * @param tz - Time zone name (IANA or UTC offset)
   * @param year - Year
   * @param month - Month (0-11)
   */
  static tz(tz: string, year: number, month: number): TZDate;

  /**
   * Creates a new `TZDate` instance in the given time zone from the year,
   * month and date.
   *
   * @param tz - Time zone name (IANA or UTC offset)
   * @param year - Year
   * @param month - Month (0-11)
   * @param date - Date
   */
  static tz(tz: string, year: number, month: number, date: number): TZDate;

  /**
   * Creates a new `TZDate` instance in the given time zone from the year,
   * month, date and hours.
   *
   * @param tz - Time zone name (IANA or UTC offset)
   * @param year - Year
   * @param month - Month (0-11)
   * @param date - Date
   * @param hours - Hours
   */
  static tz(
    tz: string,
    year: number,
    month: number,
    date: number,
    hours: number,
  ): TZDate;

  /**
   * Creates a new `TZDate` instance in the given time zone from the year,
   * month, date, hours and minutes.
   *
   * @param tz - Time zone name (IANA or UTC offset)
   * @param year - Year
   * @param month - Month (0-11)
   * @param date - Date
   * @param hours - Hours
   * @param minutes - Minutes
   */
  static tz(
    tz: string,
    year: number,
    month: number,
    date: number,
    hours: number,
    minutes: number,
  ): TZDate;

  /**
   * Creates a new `TZDate` instance in the given time zone from the year,
   * month, date, hours, minutes and seconds.
   *
   * @param tz - Time zone name (IANA or UTC offset)
   * @param year - Year
   * @param month - Month (0-11)
   * @param date - Date
   * @param hours - Hours
   * @param minutes - Minutes
   * @param seconds - Seconds
   */
  static tz(
    tz: string,
    year: number,
    month: number,
    date: number,
    hours: number,
    minutes: number,
    seconds: number,
  ): TZDate;

  /**
   * Creates a new `TZDate` instance in the given time zone from the year,
   * month, date, hours, minutes, seconds and milliseconds.
   *
   * @param tz - Time zone name (IANA or UTC offset)
   * @param year - Year
   * @param month - Month (0-11)
   * @param date - Date
   * @param hours - Hours
   * @param minutes - Minutes
   * @param seconds - Seconds
   * @param milliseconds - Milliseconds
   */
  static tz(
    tz: string,
    year: number,
    month: number,
    date: number,
    hours: number,
    minutes: number,
    seconds: number,
    milliseconds: number,
  ): TZDate;

  /**
   * The current time zone of the date.
   */
  readonly timeZone: string | undefined;

  /**
   * Creates a new `TZDate` instance in the given time zone.
   */
  withTimeZone(timeZone: string): TZDate;

  /**
   * Creates a new `TZDate` instance in the current instance time zone and
   * the specified date time value.
   *
   * @param date - Date value to create a new instance from
   */
  [constructFromSymbol](date: Date | number | string): TZDate;
}

export {
  Animation,
  Button,
  type ButtonProps,
  CalendarDay,
  CalendarMonth,
  CalendarWeek,
  Caption,
  CaptionLabel,
  type CaptionLabelProps,
  type CaptionProps,
  Chevron,
  type ChevronProps,
  type ClassNames,
  type ContextProvidersProps,
  type CustomComponents,
  type DateAfter,
  type DateBefore,
  type Month$1 as DateFnsMonth,
  type DateInterval,
  DateLib,
  type DateLibOptions,
  type DateRange,
  Day,
  DayButton,
  type DayButtonProps,
  type DayClickEventHandler,
  type DayEventHandler,
  DayFlag,
  type DayFocusEventHandler,
  type DayKeyboardEventHandler,
  type DayLabel,
  type DayMouseEventHandler,
  type DayOfWeek,
  DayPicker,
  type DayPickerContext,
  type DayPickerDefaultProps,
  type DayPickerMultipleProps,
  type DayPickerProps,
  type DayPickerProviderProps,
  type DayPickerRangeProps,
  type DayPickerSingleProps,
  type DayPointerEventHandler,
  type DayProps,
  type DaySelectionMode,
  type DayTouchEventHandler,
  type DeprecatedUI,
  Dropdown,
  DropdownNav,
  type DropdownNavProps,
  type DropdownOption,
  type DropdownProps,
  Footer,
  type FooterProps,
  type FormatOptions,
  type Formatters,
  type HeadRow,
  type InternalModifier,
  type LabelOptions,
  type Labels,
  type Locale,
  type Matcher,
  type Mode,
  type Modifier,
  type Modifiers,
  type ModifiersClassNames,
  type ModifiersStyles,
  Month,
  MonthCaption,
  type MonthCaptionProps,
  type MonthChangeEventHandler,
  MonthGrid,
  type MonthGridProps,
  type MonthProps,
  Months,
  MonthsDropdown,
  type MonthsProps,
  type MoveFocusBy,
  type MoveFocusDir,
  Nav,
  type NavButtonLabel,
  type NavProps,
  NextMonthButton,
  type NextMonthButtonProps,
  type Numerals,
  type OnSelectHandler,
  Option,
  type OptionProps,
  PreviousMonthButton,
  type PreviousMonthButtonProps,
  type PropsBase,
  type PropsMulti,
  type PropsMultiRequired,
  type PropsRange,
  type PropsRangeRequired,
  type PropsSingle,
  type PropsSingleRequired,
  Root,
  type RootProps,
  type RootProvider,
  type RootProviderProps,
  Row,
  type RowProps,
  Select,
  type SelectHandler,
  type SelectHandlerMulti,
  type SelectHandlerRange,
  type SelectHandlerSingle,
  type SelectMultipleEventHandler,
  type SelectProps,
  type SelectRangeEventHandler,
  type SelectSingleEventHandler,
  type SelectedMulti,
  type SelectedRange,
  type SelectedSingle,
  type SelectedValue,
  type Selection,
  SelectionState,
  type Styles,
  TZDate,
  UI,
  type V9DeprecatedProps,
  Week,
  WeekNumber,
  WeekNumberHeader,
  type WeekNumberHeaderProps,
  type WeekNumberLabel,
  type WeekNumberProps,
  type WeekProps,
  Weekday,
  type WeekdayLabel,
  type WeekdayProps,
  Weekdays,
  type WeekdaysProps,
  Weeks,
  type WeeksProps,
  YearsDropdown,
  addToRange,
  dateLib,
  dateMatchModifiers,
  dayPickerContext,
  defaultDateLib,
  enUS as defaultLocale,
  formatCaption,
  formatDay,
  formatMonthCaption,
  formatMonthDropdown,
  formatWeekNumber,
  formatWeekNumberHeader,
  formatWeekdayName,
  formatYearCaption,
  formatYearDropdown,
  getDefaultClassNames,
  isDateAfterType,
  isDateBeforeType,
  isDateInRange,
  isDateInterval,
  isDateRange,
  isDatesArray,
  isDayOfWeekType,
  isMatch,
  labelCaption,
  labelDay,
  labelDayButton,
  labelGrid,
  labelGridcell,
  labelMonthDropdown,
  labelNav,
  labelNext,
  labelPrevious,
  labelWeekNumber,
  labelWeekNumberHeader,
  labelWeekday,
  labelYearDropdown,
  rangeContainsDayOfWeek,
  rangeContainsModifiers,
  rangeIncludesDate,
  rangeOverlaps,
  useDayPicker,
  type useDayRender,
  useNavigation,
};
