import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  CSSProperties,
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
 * The {@link endOfWeek} function options.
 */
interface EndOfWeekOptions<DateType extends Date = Date>
  extends WeekOptions,
    LocalizedOptions<"options">,
    ContextOptions<DateType> {}

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
 * The {@link getMonth} function options.
 */
interface GetMonthOptions extends ContextOptions<Date> {}

/**
 * The {@link getWeek} function options.
 */
interface GetWeekOptions
  extends LocalizedOptions<"options">,
    WeekOptions,
    FirstWeekContainsDateOptions,
    ContextOptions<Date> {}

/**
 * The {@link getYear} function options.
 */
interface GetYearOptions extends ContextOptions<Date> {}

/**
 * The {@link startOfWeek} function options.
 */
interface StartOfWeekOptions<DateType extends Date = Date>
  extends LocalizedOptions<"options">,
    WeekOptions,
    ContextOptions<DateType> {}

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
 * Render the caption for a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function MonthCaption(
  props: {
    /** The month to display in the caption. */
    calendarMonth: CalendarMonth;
    /** The index of the month being displayed. */
    displayIndex: number;
  } & HTMLAttributes<HTMLDivElement>,
): JSX.Element;
type MonthCaptionProps = Parameters<typeof MonthCaption>[0];

/**
 * Render a table row representing a week in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Week(
  props: {
    /** The week to render. */
    week: CalendarWeek;
  } & HTMLAttributes<HTMLTableRowElement>,
): JSX.Element;
type WeekProps = Parameters<typeof Week>[0];

/**
 * Generates the ARIA label for a day button.
 *
 * Use the `modifiers` argument to provide additional context for the label,
 * such as indicating if the day is "today" or "selected."
 *
 * @defaultValue The formatted date.
 * @param date - The date to format.
 * @param modifiers - The modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the day button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelDayButton(
  date: Date,
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
 * Generates the ARIA label for the month grid, which is announced when entering
 * the grid.
 *
 * @defaultValue Locale-specific month/year order (e.g., "November 2022").
 * @param date - The date representing the month.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the month grid.
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
 * Generates the label for a day grid cell when the calendar is not interactive.
 *
 * @param date - The date to format.
 * @param modifiers - Optional modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The label for the day grid cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelGridcell(
  date: Date,
  modifiers?: Modifiers,
  options?: DateLibOptions,
  dateLib?: DateLib,
): string;

/**
 * Generates the ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the months dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelMonthDropdown(_options?: DateLibOptions): string;

/**
 * Generates the ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @returns The ARIA label for the navigation toolbar.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelNav(): string;

/**
 * Generates the ARIA label for the "next month" button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @param month - The date representing the next month, or `undefined` if there
 *   is no next month.
 * @returns The ARIA label for the "next month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelNext(_month: Date | undefined): string;

/**
 * Generates the ARIA label for the "previous month" button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @param month - The date representing the previous month, or `undefined` if
 *   there is no previous month.
 * @returns The ARIA label for the "previous month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelPrevious(_month: Date | undefined): string;

/**
 * Generates the ARIA label for a weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @param date - The date representing the weekday.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the weekday column header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelWeekday(
  date: Date,
  options?: DateLibOptions,
  dateLib?: DateLib,
): string;

/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelWeekNumber(
  weekNumber: number,
  _options?: DateLibOptions,
): string;

/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelWeekNumberHeader(_options?: DateLibOptions): string;

/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */
declare function labelYearDropdown(_options?: DateLibOptions): string;

/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
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
/** Enum representing flags for the {@link UI.Day} element. */
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
 * Enum representing selection states that can be applied to the {@link UI.Day}
 * element in selection mode.
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
 * Deprecated UI elements and flags from previous versions of DayPicker.
 *
 * These elements are kept for backward compatibility and to assist in
 * transitioning to the new {@link UI} elements.
 *
 * @deprecated
 * @since 9.0.1
 * @template T - The type of the deprecated UI element (e.g., CSS class or
 *   style).
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
 * Represents a week in a calendar month.
 *
 * A `CalendarWeek` contains the days within the week and the week number.
 */
declare class CalendarWeek {
  constructor(weekNumber: number, days: CalendarDay[]);
  /** The number of the week within the year. */
  weekNumber: number;
  /** The days that belong to this week. */
  days: CalendarDay[];
}

/**
 * Represents a month in a calendar year.
 *
 * A `CalendarMonth` contains the weeks within the month and the date of the
 * month.
 */
declare class CalendarMonth {
  constructor(month: Date, weeks: CalendarWeek[]);
  /** The date representing the first day of the month. */
  date: Date;
  /** The weeks that belong to this month. */
  weeks: CalendarWeek[];
}

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
   * - `label`: Displays the month and year as a label. Default value.
   * - `dropdown`: Displays dropdowns for both month and year navigation.
   * - `dropdown-months`: Displays a dropdown only for the month navigation.
   * - `dropdown-years`: Displays a dropdown only for the year navigation.
   *
   * **Note:** By default, showing the dropdown will set the {@link startMonth}
   * to 100 years ago and {@link endMonth} to the end of the current year. You
   * can override this behavior by explicitly setting `startMonth` and
   * `endMonth`.
   *
   * @see https://daypicker.dev/docs/customization#caption-layouts
   */
  captionLayout?: "label" | "dropdown" | "dropdown-months" | "dropdown-years";
  /**
   * Reverse the order of years in the dropdown when using
   * `captionLayout="dropdown"` or `captionLayout="dropdown-years"`.
   *
   * @since 9.9.0
   * @see https://daypicker.dev/docs/customization#caption-layouts
   */
  reverseYears?: boolean;
  /**
   * Adjust the positioning of the navigation buttons.
   *
   * - `around`: Displays the buttons on either side of the caption.
   * - `after`: Displays the buttons after the caption. This ensures the tab order
   *   matches the visual order.
   *
   * If not set, the buttons default to being displayed after the caption, but
   * the tab order may not align with the visual order.
   *
   * @since 9.7.0
   * @see https://daypicker.dev/docs/customization#navigation-layouts
   */
  navLayout?: "around" | "after" | undefined;
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
   *
   * See
   * [Wikipedia](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
   * for the possible values.
   *
   * @since 9.1.1
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
   * Apply the `disabled` modifier to the matching days. Disabled days cannot be
   * selected when in a selection mode is set.
   *
   * @see https://daypicker.dev/docs/selection-modes#disabled
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
   * @example
   *   const modifiers = {
   *   weekend: { dayOfWeek: [0, 6] }, // Match weekends
   *   holiday: [new Date(2023, 11, 25)] // Match Christmas
   *   };
   *   <DayPicker modifiers={modifiers} />
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
  "aria-label"?: string;
  /**
   * The aria-labelledby attribute to add to the container element.
   *
   * @since 9.11.0
   * @see https://daypicker.dev/guides/accessibility
   */
  "aria-labelledby"?: string;
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
   * default.
   *
   * @see https://daypicker.dev/docs/localization#first-date-of-the-week
   */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  /**
   * The day of January that is always in the first week of the year.
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
 * @example
 *   const handleSelect: OnSelectHandler<Date> = (
 *     selected,
 *     triggerDate,
 *     modifiers,
 *     e,
 *   ) => {
 *     console.log("Selected:", selected);
 *     console.log("Triggered by:", triggerDate);
 *   };
 *
 * @template T - The type of the selected item.
 * @callback OnSelectHandler
 * @param {T} selected - The selected item after the event.
 * @param {Date} triggerDate - The date when the event was triggered. This is
 *   typically the day clicked or interacted with.
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
  /**
   * Apply the `disabled` modifier to the matching days. Disabled days cannot be
   * selected when in a selection mode is set.
   *
   * @see https://daypicker.dev/docs/selection-modes#disabled
   */
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
  /**
   * Apply the `disabled` modifier to the matching days. Disabled days cannot be
   * selected when in a selection mode is set.
   *
   * @see https://daypicker.dev/docs/selection-modes#disabled
   */
  disabled?: Matcher | Matcher[] | undefined;
  /**
   * When `true`, the range will reset when including a disabled day.
   *
   * @since V9.0.2
   * @see https://daypicker.dev/docs/selection-modes#exclude-disabled
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
/**
 * Represents the selected value based on the selection mode.
 *
 * @example
 *   // Single selection mode
 *   const selected: SelectedValue<{ mode: "single" }> = new Date();
 *
 *   // Multiple selection mode
 *   const selected: SelectedValue<{ mode: "multiple" }> = [
 *     new Date(),
 *     new Date(),
 *   ];
 *
 *   // Range selection mode
 *   const selected: SelectedValue<{ mode: "range" }> = {
 *     from: new Date(),
 *     to: new Date(),
 *   };
 */
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
/**
 * The handler to set a selection based on the mode.
 *
 * @example
 *   const handleSelect: SelectHandler<{ mode: "single" }> = (
 *     triggerDate,
 *     modifiers,
 *     e,
 *   ) => {
 *     console.log("Selected date:", triggerDate);
 *   };
 */
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
 * Provides access to the DayPicker context, which includes properties and
 * methods to interact with the DayPicker component. This hook must be used
 * within a custom component.
 *
 * @template T - Use this type to refine the returned context type with a
 *   specific selection mode.
 * @returns The context to work with DayPicker.
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
 * @deprecated This type will be removed. Use `NonNullable<unknown>` instead.
 */
type DayPickerDefaultProps = NonNullable<unknown>;
/**
 * @ignore
 * @deprecated This type has been renamed. Use `Mode` instead.
 */
type DaySelectionMode = Mode;
/**
 * @ignore
 * @deprecated This type will be removed. Use `string` instead.
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
 * @deprecated This type will be removed. Use `SelectHandler<{ mode: "single"
 *   }>` instead.
 */
type SelectSingleEventHandler = PropsSingle["onSelect"];
/**
 * @ignore
 * @deprecated This type will be removed. Use `SelectHandler<{ mode: "multiple"
 *   }>` instead.
 */
type SelectMultipleEventHandler = PropsMulti["onSelect"];
/**
 * @ignore
 * @deprecated This type will be removed. Use `SelectHandler<{ mode: "range" }>`
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
 * @deprecated This type has been moved to `useDayPicker`.
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
 * Render a grid cell for a specific day in the calendar.
 *
 * Handles interaction and focus for the day. If you only need to change the
 * content of the day cell, consider swapping the `DayButton` component
 * instead.
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
 * Render a button for a specific day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function DayButton(
  props: {
    /** The day to render. */
    day: CalendarDay;
    /** The modifiers to apply to the day. */
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
  /** Whether the dropdown option is disabled (e.g., out of the calendar range). */
  disabled: boolean;
};
/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Dropdown(
  props: {
    /**
     * @deprecated Use {@link useDayPicker} hook to get the list of internal
     *   components.
     */
    components: CustomComponents;
    /**
     * @deprecated Use {@link useDayPicker} hook to get the list of internal
     *   class names.
     */
    classNames: ClassNames;
    /** The options to display in the dropdown. */
    options?: DropdownOption[] | undefined;
  } & Omit<SelectHTMLAttributes<HTMLSelectElement>, "children">,
): JSX.Element;
type DropdownProps = Parameters<typeof Dropdown>[0];

/**
 * Render the navigation dropdowns for the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function DropdownNav(
  props: HTMLAttributes<HTMLDivElement>,
): JSX.Element;
type DropdownNavProps = Parameters<typeof DropdownNav>[0];

/**
 * Render the footer of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Footer(props: HTMLAttributes<HTMLDivElement>): JSX.Element;
type FooterProps = Parameters<typeof Footer>[0];

/**
 * Render the grid with the weekday header row and the weeks for a specific
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Month(
  props: {
    /** The month to display in the grid. */
    calendarMonth: CalendarMonth;
    /** The index of the month being displayed. */
    displayIndex: number;
  } & HTMLAttributes<HTMLDivElement>,
): JSX.Element;
type MonthProps = Parameters<typeof Month>[0];

/**
 * Render the grid of days for a specific month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function MonthGrid(
  props: TableHTMLAttributes<HTMLTableElement>,
): JSX.Element;
type MonthGridProps = Parameters<typeof MonthGrid>[0];

/**
 * Render a container wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Months(props: HTMLAttributes<HTMLDivElement>): JSX.Element;
type MonthsProps = Parameters<typeof Months>[0];

/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function MonthsDropdown(props: DropdownProps): JSX.Element;

/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Nav(
  props: {
    /** Handler for the previous month button click. */
    onPreviousClick?: MouseEventHandler<HTMLButtonElement>;
    /** Handler for the next month button click. */
    onNextClick?: MouseEventHandler<HTMLButtonElement>;
    /** The date of the previous month, if available. */
    previousMonth?: Date | undefined;
    /** The date of the next month, if available. */
    nextMonth?: Date | undefined;
  } & HTMLAttributes<HTMLElement>,
): JSX.Element;
type NavProps = Parameters<typeof Nav>[0];

/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function NextMonthButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
): JSX.Element;
type NextMonthButtonProps = Parameters<typeof NextMonthButton>[0];

/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Option(
  props: OptionHTMLAttributes<HTMLOptionElement>,
): JSX.Element;
type OptionProps = Parameters<typeof Option>[0];

/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function PreviousMonthButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
): JSX.Element;
type PreviousMonthButtonProps = Parameters<typeof PreviousMonthButton>[0];

/**
 * Render the root element of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Root(
  props: {
    /** Ref for the root element, used when `animate` is `true`. */
    rootRef?: Ref<HTMLDivElement>;
  } & HTMLAttributes<HTMLDivElement>,
): JSX.Element;
type RootProps = Parameters<typeof Root>[0];

/**
 * Render a `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Select(
  props: SelectHTMLAttributes<HTMLSelectElement>,
): JSX.Element;
type SelectProps = Parameters<typeof Select>[0];

/**
 * Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Weekday(
  props: ThHTMLAttributes<HTMLTableCellElement>,
): JSX.Element;
type WeekdayProps = Parameters<typeof Weekday>[0];

/**
 * Render the table row containing the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Weekdays(
  props: HTMLAttributes<HTMLTableRowElement>,
): JSX.Element;
type WeekdaysProps = Parameters<typeof Weekdays>[0];

/**
 * Render a table cell displaying the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function WeekNumber(
  props: {
    /** The week to display. */
    week: CalendarWeek;
  } & ThHTMLAttributes<HTMLTableCellElement>,
): JSX.Element;
type WeekNumberProps = Parameters<typeof WeekNumber>[0];

/**
 * Render the header cell for the week numbers column.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function WeekNumberHeader(
  props: ThHTMLAttributes<HTMLTableCellElement>,
): JSX.Element;
type WeekNumberHeaderProps = Parameters<typeof WeekNumberHeader>[0];

/**
 * Render the container for the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function Weeks(
  props: HTMLAttributes<HTMLTableSectionElement>,
): JSX.Element;
type WeeksProps = Parameters<typeof Weeks>[0];

/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
declare function YearsDropdown(props: DropdownProps): JSX.Element;

/**
 * Formats the caption of the month.
 *
 * @defaultValue Locale-specific month/year order (e.g., "November 2022").
 * @param month The date representing the month.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted caption as a string.
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
 * Formats the day date shown in the day cell.
 *
 * @defaultValue `d` (e.g., "1").
 * @param date The date to format.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted day as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
declare function formatDay(
  date: Date,
  options?: DateLibOptions,
  dateLib?: DateLib,
): string;

/**
 * Formats the month for the dropdown option label.
 *
 * @defaultValue The localized full month name.
 * @param month The date representing the month.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted month name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
declare function formatMonthDropdown(month: Date, dateLib?: DateLib): string;

/**
 * Formats the name of a weekday to be displayed in the weekdays header.
 *
 * @defaultValue `cccccc` (e.g., "Mo" for Monday).
 * @param weekday The date representing the weekday.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted weekday name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
declare function formatWeekdayName(
  weekday: Date,
  options?: DateLibOptions,
  dateLib?: DateLib,
): string;

/**
 * Formats the week number.
 *
 * @defaultValue The week number as a string, with a leading zero for single-digit numbers.
 * @param weekNumber The week number to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted week number as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
declare function formatWeekNumber(
  weekNumber: number,
  dateLib?: DateLib,
): string;

/**
 * Formats the header for the week number column.
 *
 * @defaultValue An empty string `""`.
 * @returns The formatted week number header as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */
declare function formatWeekNumberHeader(): string;

/**
 * Formats the year for the dropdown option label.
 *
 * @param year The year to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted year as a string.
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
 * Selection modes supported by DayPicker.
 *
 * - `single`: Select a single day.
 * - `multiple`: Select multiple days.
 * - `range`: Select a range of days.
 *
 * @see https://daypicker.dev/docs/selection-modes
 */
type Mode = "single" | "multiple" | "range";
/**
 * The components that can be customized using the `components` prop.
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
  /** Render the dropdown for selecting months. */
  MonthsDropdown: typeof MonthsDropdown;
  /** Render the dropdown for selecting years. */
  YearsDropdown: typeof YearsDropdown;
};
/** Represents a map of formatters used to render localized content. */
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
   *
   *   **Note:** This formatter will be removed in version 10.0.0.
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
/** A map of functions to translate ARIA labels for various elements. */
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
  /** The label for the column of week numbers. */
  labelWeekNumberHeader: typeof labelWeekNumberHeader;
};
/**
 * A value or a function that matches specific days.
 *
 * @example
 *   // Match weekends and specific holidays
 *   const matcher: Matcher = [
 *     { dayOfWeek: [0, 6] }, // Weekends
 *     { from: new Date(2023, 11, 24), to: new Date(2023, 11, 26) }, // Christmas
 *   ];
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
 * Match a day falling after the specified date (exclusive).
 *
 * @example
 *   // Match days after February 2, 2019
 *   const matcher: DateAfter = { after: new Date(2019, 1, 2) };
 */
type DateAfter = {
  after: Date;
};
/**
 * Match a day falling before the specified date (exclusive).
 *
 * @example
 *   // Match days before February 2, 2019
 *   const matcher: DateBefore = { before: new Date(2019, 1, 2) };
 */
type DateBefore = {
  before: Date;
};
/**
 * An interval of dates. Unlike {@link DateRange}, the range ends are not
 * included.
 *
 * @example
 *   // Match days between February 2 and February 5, 2019
 *   const matcher: DateInterval = {
 *     after: new Date(2019, 1, 2),
 *     before: new Date(2019, 1, 5),
 *   };
 */
type DateInterval = {
  before: Date;
  after: Date;
};
/**
 * A range of dates. Unlike {@link DateInterval}, the range ends are included.
 *
 * @example
 *   // Match days between February 2 and February 5, 2019
 *   const matcher: DateRange = {
 *     from: new Date(2019, 1, 2),
 *     to: new Date(2019, 1, 5),
 *   };
 */
type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};
/**
 * Match days of the week (`0-6`, where `0` is Sunday).
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
 *     [UI.Nav]: "nav",
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
 * @example
 *   const modifiers: Modifiers = {
 *     today: true, // The day is today
 *     selected: false, // The day is not selected
 *     weekend: true, // Custom modifier for weekends
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
 *     weekend: { color: "green" },
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
 *     weekend: "weekend", // Use the "weekend" class for the weekend days
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
 * - `thai`: Thai
 * - `mymr`: Myanmar
 * - `khmr`: Khmer
 * - `laoo`: Lao
 * - `tibt`: Tibetan
 *
 * @see https://daypicker.dev/docs/translation#numeral-systems
 */
type Numerals =
  | "latn"
  | "arab"
  | "arabext"
  | "deva"
  | "geez"
  | "beng"
  | "guru"
  | "gujr"
  | "orya"
  | "tamldec"
  | "telu"
  | "knda"
  | "mlym"
  | "thai"
  | "mymr"
  | "khmr"
  | "laoo"
  | "tibt";

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
/** Indicates the preferred ordering of month and year for localized labels. */
type MonthYearOrder = "month-first" | "year-first";
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
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */
declare class DateLib {
  /** The options for configuring the date library. */
  readonly options: DateLibOptions;
  /** Overrides for the default date library functions. */
  readonly overrides?: Partial<typeof DateLib.prototype>;
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(
    options?: DateLibOptions,
    overrides?: Partial<typeof DateLib.prototype>,
  );
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  private getDigitMap;
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  private replaceDigits;
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(value: number | string): string;
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder(): MonthYearOrder;
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(date: Date): string;
  private static readonly yearFirstLocales;
  /**
   * Reference to the built-in Date constructor.
   *
   * @deprecated Use `newDate()` or `today()`.
   */
  Date: typeof Date;
  /**
   * Creates a new `Date` object representing today's date.
   *
   * @since 9.5.0
   * @returns A `Date` object for today's date.
   */
  today: () => Date;
  /**
   * Creates a new `Date` object with the specified year, month, and day.
   *
   * @since 9.5.0
   * @param year The year.
   * @param monthIndex The month (0-11).
   * @param date The day of the month.
   * @returns A new `Date` object.
   */
  newDate: (year: number, monthIndex: number, date: number) => Date;
  /**
   * Adds the specified number of days to the given date.
   *
   * @param date The date to add days to.
   * @param amount The number of days to add.
   * @returns The new date with the days added.
   */
  addDays: (date: Date, amount: number) => Date;
  /**
   * Adds the specified number of months to the given date.
   *
   * @param date The date to add months to.
   * @param amount The number of months to add.
   * @returns The new date with the months added.
   */
  addMonths: (date: Date, amount: number) => Date;
  /**
   * Adds the specified number of weeks to the given date.
   *
   * @param date The date to add weeks to.
   * @param amount The number of weeks to add.
   * @returns The new date with the weeks added.
   */
  addWeeks: (date: Date, amount: number) => Date;
  /**
   * Adds the specified number of years to the given date.
   *
   * @param date The date to add years to.
   * @param amount The number of years to add.
   * @returns The new date with the years added.
   */
  addYears: (date: Date, amount: number) => Date;
  /**
   * Returns the number of calendar days between the given dates.
   *
   * @param dateLeft The later date.
   * @param dateRight The earlier date.
   * @returns The number of calendar days between the dates.
   */
  differenceInCalendarDays: (dateLeft: Date, dateRight: Date) => number;
  /**
   * Returns the number of calendar months between the given dates.
   *
   * @param dateLeft The later date.
   * @param dateRight The earlier date.
   * @returns The number of calendar months between the dates.
   */
  differenceInCalendarMonths: (dateLeft: Date, dateRight: Date) => number;
  /**
   * Returns the months between the given dates.
   *
   * @param interval The interval to get the months for.
   */
  eachMonthOfInterval: (interval: Interval) => Date[];
  /**
   * Returns the years between the given dates.
   *
   * @since 9.11.1
   * @param interval The interval to get the years for.
   * @returns The array of years in the interval.
   */
  eachYearOfInterval: (interval: Interval) => Date[];
  /**
   * Returns the end of the broadcast week for the given date.
   *
   * @param date The original date.
   * @returns The end of the broadcast week.
   */
  endOfBroadcastWeek: (date: Date) => Date;
  /**
   * Returns the end of the ISO week for the given date.
   *
   * @param date The original date.
   * @returns The end of the ISO week.
   */
  endOfISOWeek: (date: Date) => Date;
  /**
   * Returns the end of the month for the given date.
   *
   * @param date The original date.
   * @returns The end of the month.
   */
  endOfMonth: (date: Date) => Date;
  /**
   * Returns the end of the week for the given date.
   *
   * @param date The original date.
   * @returns The end of the week.
   */
  endOfWeek: (date: Date, options?: EndOfWeekOptions<Date>) => Date;
  /**
   * Returns the end of the year for the given date.
   *
   * @param date The original date.
   * @returns The end of the year.
   */
  endOfYear: (date: Date) => Date;
  /**
   * Formats the given date using the specified format string.
   *
   * @param date The date to format.
   * @param formatStr The format string.
   * @returns The formatted date string.
   */
  format: (date: Date, formatStr: string, _options?: FormatOptions$1) => string;
  /**
   * Returns the ISO week number for the given date.
   *
   * @param date The date to get the ISO week number for.
   * @returns The ISO week number.
   */
  getISOWeek: (date: Date) => number;
  /**
   * Returns the month of the given date.
   *
   * @param date The date to get the month for.
   * @returns The month.
   */
  getMonth: (date: Date, _options?: GetMonthOptions) => number;
  /**
   * Returns the year of the given date.
   *
   * @param date The date to get the year for.
   * @returns The year.
   */
  getYear: (date: Date, _options?: GetYearOptions) => number;
  /**
   * Returns the local week number for the given date.
   *
   * @param date The date to get the week number for.
   * @returns The week number.
   */
  getWeek: (date: Date, _options?: GetWeekOptions) => number;
  /**
   * Checks if the first date is after the second date.
   *
   * @param date The date to compare.
   * @param dateToCompare The date to compare with.
   * @returns True if the first date is after the second date.
   */
  isAfter: (date: Date, dateToCompare: Date) => boolean;
  /**
   * Checks if the first date is before the second date.
   *
   * @param date The date to compare.
   * @param dateToCompare The date to compare with.
   * @returns True if the first date is before the second date.
   */
  isBefore: (date: Date, dateToCompare: Date) => boolean;
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
  isSameDay: (dateLeft: Date, dateRight: Date) => boolean;
  /**
   * Checks if the given dates are in the same month.
   *
   * @param dateLeft The first date to compare.
   * @param dateRight The second date to compare.
   * @returns True if the dates are in the same month.
   */
  isSameMonth: (dateLeft: Date, dateRight: Date) => boolean;
  /**
   * Checks if the given dates are in the same year.
   *
   * @param dateLeft The first date to compare.
   * @param dateRight The second date to compare.
   * @returns True if the dates are in the same year.
   */
  isSameYear: (dateLeft: Date, dateRight: Date) => boolean;
  /**
   * Returns the latest date in the given array of dates.
   *
   * @param dates The array of dates to compare.
   * @returns The latest date.
   */
  max: (dates: Date[]) => Date;
  /**
   * Returns the earliest date in the given array of dates.
   *
   * @param dates The array of dates to compare.
   * @returns The earliest date.
   */
  min: (dates: Date[]) => Date;
  /**
   * Sets the month of the given date.
   *
   * @param date The date to set the month on.
   * @param month The month to set (0-11).
   * @returns The new date with the month set.
   */
  setMonth: (date: Date, month: number) => Date;
  /**
   * Sets the year of the given date.
   *
   * @param date The date to set the year on.
   * @param year The year to set.
   * @returns The new date with the year set.
   */
  setYear: (date: Date, year: number) => Date;
  /**
   * Returns the start of the broadcast week for the given date.
   *
   * @param date The original date.
   * @returns The start of the broadcast week.
   */
  startOfBroadcastWeek: (date: Date, _dateLib: DateLib) => Date;
  /**
   * Returns the start of the day for the given date.
   *
   * @param date The original date.
   * @returns The start of the day.
   */
  startOfDay: (date: Date) => Date;
  /**
   * Returns the start of the ISO week for the given date.
   *
   * @param date The original date.
   * @returns The start of the ISO week.
   */
  startOfISOWeek: (date: Date) => Date;
  /**
   * Returns the start of the month for the given date.
   *
   * @param date The original date.
   * @returns The start of the month.
   */
  startOfMonth: (date: Date) => Date;
  /**
   * Returns the start of the week for the given date.
   *
   * @param date The original date.
   * @returns The start of the week.
   */
  startOfWeek: (date: Date, _options?: StartOfWeekOptions) => Date;
  /**
   * Returns the start of the year for the given date.
   *
   * @param date The original date.
   * @returns The start of the year.
   */
  startOfYear: (date: Date) => Date;
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
 * Represents a day displayed in the calendar.
 *
 * In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
 * provides additional information about the day, such as whether it belongs to
 * the displayed month.
 */
declare class CalendarDay {
  constructor(date: Date, displayMonth: Date, dateLib?: DateLib);
  /**
   * Utility functions for manipulating dates.
   *
   * @private
   */
  readonly dateLib: DateLib;
  /**
   * Indicates whether the day does not belong to the displayed month.
   *
   * If `outside` is `true`, use `displayMonth` to determine the month to which
   * the day belongs.
   */
  readonly outside: boolean;
  /**
   * The month that is currently displayed in the calendar.
   *
   * This property is useful for determining if the day belongs to the same
   * month as the displayed month, especially when `showOutsideDays` is
   * enabled.
   */
  readonly displayMonth: Date;
  /** The date represented by this day. */
  readonly date: Date;
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(day: CalendarDay): boolean;
}

/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */
declare function DayPicker(initialProps: DayPickerProps): JSX.Element;

/**
 * Returns the default class names for the UI elements.
 *
 * This function generates a mapping of default class names for various UI
 * elements, day flags, selection states, and animations.
 *
 * @returns An object containing the default class names.
 * @group Utilities
 */
declare function getDefaultClassNames(): ClassNames;

/**
 * Adds a date to an existing range, considering constraints like minimum and
 * maximum range size.
 *
 * @param date - The date to add to the range.
 * @param initialRange - The initial range to which the date will be added.
 * @param min - The minimum number of days in the range.
 * @param max - The maximum number of days in the range.
 * @param required - Whether the range must always include at least one date.
 * @param dateLib - The date utility library instance.
 * @returns The updated date range, or `undefined` if the range is cleared.
 * @group Utilities
 */
declare function addToRange(
  date: Date,
  initialRange: DateRange | undefined,
  min?: number,
  max?: number,
  required?: boolean,
  dateLib?: DateLib,
): DateRange | undefined;

/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
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
 * Checks if a date range contains one or more specified days of the week.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param dayOfWeek - The day(s) of the week to check for (`0-6`, where `0` is
 *   Sunday).
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains the specified day(s) of the week,
 *   otherwise `false`.
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
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
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
 * Checks if a given date is within a specified date range.
 *
 * @since 9.0.0
 * @param range - The date range to check against.
 * @param date - The date to check.
 * @param excludeEnds - If `true`, the range's start and end dates are excluded.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date is within the range, otherwise `false`.
 * @group Utilities
 */
declare function rangeIncludesDate(
  range: DateRange,
  date: Date,
  excludeEnds?: boolean,
  dateLib?: DateLib,
): boolean;
/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */
declare const isDateInRange: (range: DateRange, date: Date) => boolean;

/**
 * Determines if two date ranges overlap.
 *
 * @since 9.2.2
 * @param rangeLeft - The first date range.
 * @param rangeRight - The second date range.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the ranges overlap, otherwise `false`.
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
 * Checks if the given value is of type {@link DateInterval}.
 *
 * @param matcher - The value to check.
 * @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
 * @group Utilities
 */
declare function isDateInterval(matcher: unknown): matcher is DateInterval;
/**
 * Checks if the given value is of type {@link DateRange}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateRange}, otherwise `false`.
 * @group Utilities
 */
declare function isDateRange(value: unknown): value is DateRange;
/**
 * Checks if the given value is of type {@link DateAfter}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateAfter}, otherwise `false`.
 * @group Utilities
 */
declare function isDateAfterType(value: unknown): value is DateAfter;
/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */
declare function isDateBeforeType(value: unknown): value is DateBefore;
/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */
declare function isDayOfWeekType(value: unknown): value is DayOfWeek;
/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */
declare function isDatesArray(
  value: unknown,
  dateLib: DateLib,
): value is Date[];

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
  type MonthYearOrder,
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
