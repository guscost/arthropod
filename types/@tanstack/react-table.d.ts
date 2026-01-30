import * as React from "react";

type PartialKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type RequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
type Overwrite<
  T,
  U extends {
    [TKey in keyof T]?: any;
  },
> = Omit<T, keyof U> & U;
type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (
  x: infer R,
) => any
  ? R
  : never;
type IsAny<T, Y, N> = 1 extends 0 & T ? Y : N;
type IsKnown<T, Y, N> = unknown extends T ? N : Y;
type ComputeRange<
  N extends number,
  Result extends Array<unknown> = [],
> = Result["length"] extends N
  ? Result
  : ComputeRange<N, [...Result, Result["length"]]>;
type Index40 = ComputeRange<40>[number];
type IsTuple<T> = T extends readonly any[] & {
  length: infer Length;
}
  ? Length extends Index40
    ? T
    : never
  : never;
type AllowedIndexes<
  Tuple extends ReadonlyArray<any>,
  Keys extends number = never,
> = Tuple extends readonly []
  ? Keys
  : Tuple extends readonly [infer _, ...infer Tail]
    ? AllowedIndexes<Tail, Keys | Tail["length"]>
    : Keys;
type DeepKeys<T, TDepth extends any[] = []> = TDepth["length"] extends 5
  ? never
  : unknown extends T
    ? string
    : T extends readonly any[] & IsTuple<T>
      ? AllowedIndexes<T> | DeepKeysPrefix<T, AllowedIndexes<T>, TDepth>
      : T extends any[]
        ? DeepKeys<T[number], [...TDepth, any]>
        : T extends Date
          ? never
          : T extends object
            ? (keyof T & string) | DeepKeysPrefix<T, keyof T, TDepth>
            : never;
type DeepKeysPrefix<
  T,
  TPrefix,
  TDepth extends any[],
> = TPrefix extends keyof T & (number | string)
  ? `${TPrefix}.${DeepKeys<T[TPrefix], [...TDepth, any]> & string}`
  : never;
type DeepValue<T, TProp> =
  T extends Record<string | number, any>
    ? TProp extends `${infer TBranch}.${infer TDeepProp}`
      ? DeepValue<T[TBranch], TDeepProp>
      : T[TProp & string]
    : never;
type NoInfer<T> = [T][T extends any ? 0 : never];
type Getter<TValue> = <TTValue = TValue>() => NoInfer<TTValue>;
declare function functionalUpdate<T>(updater: Updater<T>, input: T): T;
declare function noop(): void;
declare function makeStateUpdater<K extends keyof TableState>(
  key: K,
  instance: unknown,
): (updater: Updater<TableState[K]>) => void;
type AnyFunction = (...args: any) => any;
declare function isFunction<T extends AnyFunction>(d: any): d is T;
declare function isNumberArray(d: any): d is number[];
declare function flattenBy<TNode>(
  arr: TNode[],
  getChildren: (item: TNode) => TNode[],
): TNode[];
declare function memo<TDeps extends readonly any[], TDepArgs, TResult>(
  getDeps: (depArgs?: TDepArgs) => [...TDeps],
  fn: (...args: NoInfer<[...TDeps]>) => TResult,
  opts: {
    key: any;
    debug?: () => any;
    onChange?: (result: TResult) => void;
  },
): (depArgs?: TDepArgs) => TResult;
declare function getMemoOptions(
  tableOptions: Partial<TableOptionsResolved<any>>,
  debugLevel:
    | "debugAll"
    | "debugCells"
    | "debugTable"
    | "debugColumns"
    | "debugRows"
    | "debugHeaders",
  key: string,
  onChange?: (result: any) => void,
): {
  debug: () => boolean | undefined;
  key: string | false;
  onChange: ((result: any) => void) | undefined;
};

interface CoreTableState {}
interface CoreOptions<TData extends RowData> {
  /**
   * An array of extra features that you can add to the table instance.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#_features)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  _features?: TableFeature[];
  /**
   * Set this option to override any of the `autoReset...` feature options.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#autoresetall)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  autoResetAll?: boolean;
  /**
   * The array of column defs to use for the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#columns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  columns: ColumnDef<TData, any>[];
  /**
   * The data for the table to display. This array should match the type you provided to `table.setRowType<...>`. Columns can access this data via string/index or a functional accessor. When the `data` option changes reference, the table will reprocess the data.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#data)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  data: TData[];
  /**
   * Set this option to `true` to output all debugging information to the console.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#debugall)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  debugAll?: boolean;
  /**
   * Set this option to `true` to output cell debugging information to the console.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#debugcells]
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  debugCells?: boolean;
  /**
   * Set this option to `true` to output column debugging information to the console.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#debugcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  debugColumns?: boolean;
  /**
   * Set this option to `true` to output header debugging information to the console.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#debugheaders)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  debugHeaders?: boolean;
  /**
   * Set this option to `true` to output row debugging information to the console.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#debugrows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  debugRows?: boolean;
  /**
   * Set this option to `true` to output table debugging information to the console.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#debugtable)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  debugTable?: boolean;
  /**
   * Default column options to use for all column defs supplied to the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#defaultcolumn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  defaultColumn?: Partial<ColumnDef<TData, unknown>>;
  /**
   * This required option is a factory for a function that computes and returns the core row model for the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#getcorerowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  getCoreRowModel: (table: Table<any>) => () => RowModel<any>;
  /**
   * This optional function is used to derive a unique ID for any given row. If not provided the rows index is used (nested rows join together with `.` using their grandparents' index eg. `index.index.index`). If you need to identify individual rows that are originating from any server-side operations, it's suggested you use this function to return an ID that makes sense regardless of network IO/ambiguity eg. a userId, taskId, database ID field, etc.
   * @example getRowId: row => row.userId
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#getrowid)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  getRowId?: (originalRow: TData, index: number, parent?: Row<TData>) => string;
  /**
   * This optional function is used to access the sub rows for any given row. If you are using nested rows, you will need to use this function to return the sub rows object (or undefined) from the row.
   * @example getSubRows: row => row.subRows
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#getsubrows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  getSubRows?: (originalRow: TData, index: number) => undefined | TData[];
  /**
   * Use this option to optionally pass initial state to the table. This state will be used when resetting various table states either automatically by the table (eg. `options.autoResetPageIndex`) or via functions like `table.resetRowSelection()`. Most reset function allow you optionally pass a flag to reset to a blank/default state instead of the initial state.
   *
   * Table state will not be reset when this object changes, which also means that the initial state object does not need to be stable.
   *
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#initialstate)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  initialState?: InitialTableState;
  /**
   * This option is used to optionally implement the merging of table options.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#mergeoptions)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  mergeOptions?: (
    defaultOptions: TableOptions<TData>,
    options: Partial<TableOptions<TData>>,
  ) => TableOptions<TData>;
  /**
   * You can pass any object to `options.meta` and access it anywhere the `table` is available via `table.options.meta`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#meta)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  meta?: TableMeta<TData>;
  /**
   * The `onStateChange` option can be used to optionally listen to state changes within the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#onstatechange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  onStateChange: (updater: Updater<TableState>) => void;
  /**
   * Value used when the desired value is not found in the data.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#renderfallbackvalue)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  renderFallbackValue: any;
  /**
   * The `state` option can be used to optionally _control_ part or all of the table state. The state you pass here will merge with and overwrite the internal automatically-managed state to produce the final state for the table. You can also listen to state changes via the `onStateChange` option.
   * > Note: Any state passed in here will override both the internal state and any other `initialState` you provide.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#state)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  state: Partial<TableState>;
}
interface CoreInstance<TData extends RowData> {
  _features: readonly TableFeature[];
  _getAllFlatColumnsById: () => Record<string, Column<TData, unknown>>;
  _getColumnDefs: () => ColumnDef<TData, unknown>[];
  _getCoreRowModel?: () => RowModel<TData>;
  _getDefaultColumnDef: () => Partial<ColumnDef<TData, unknown>>;
  _getRowId: (_: TData, index: number, parent?: Row<TData>) => string;
  _queue: (cb: () => void) => void;
  /**
   * Returns all columns in the table in their normalized and nested hierarchy.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#getallcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  getAllColumns: () => Column<TData, unknown>[];
  /**
   * Returns all columns in the table flattened to a single level.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#getallflatcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  getAllFlatColumns: () => Column<TData, unknown>[];
  /**
   * Returns all leaf-node columns in the table flattened to a single level. This does not include parent columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#getallleafcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  getAllLeafColumns: () => Column<TData, unknown>[];
  /**
   * Returns a single column by its ID.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#getcolumn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  getColumn: (columnId: string) => Column<TData, unknown> | undefined;
  /**
   * Returns the core row model before any processing has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#getcorerowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  getCoreRowModel: () => RowModel<TData>;
  /**
   * Returns the row with the given ID.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#getrow)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  getRow: (id: string, searchAll?: boolean) => Row<TData>;
  /**
   * Returns the final model after all processing from other used features has been applied. This is the row model that is most commonly used for rendering.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#getrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  getRowModel: () => RowModel<TData>;
  /**
   * Call this function to get the table's current state. It's recommended to use this function and its state, especially when managing the table state manually. It is the exact same state used internally by the table for every feature and function it provides.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#getstate)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  getState: () => TableState;
  /**
   * This is the resolved initial state of the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#initialstate)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  initialState: TableState;
  /**
   * A read-only reference to the table's current options.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#options)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  options: RequiredKeys<TableOptionsResolved<TData>, "state">;
  /**
   * Call this function to reset the table state to the initial state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#reset)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  reset: () => void;
  /**
   * This function can be used to update the table options.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#setoptions)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  setOptions: (newOptions: Updater<TableOptionsResolved<TData>>) => void;
  /**
   * Call this function to update the table state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/table#setstate)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/tables)
   */
  setState: (updater: Updater<TableState>) => void;
}
declare function createTable<TData extends RowData>(
  options: TableOptionsResolved<TData>,
): Table<TData>;

type VisibilityState = Record<string, boolean>;
interface VisibilityTableState {
  columnVisibility: VisibilityState;
}
interface VisibilityOptions {
  /**
   * Whether to enable column hiding. Defaults to `true`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#enablehiding)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  enableHiding?: boolean;
  /**
   * If provided, this function will be called with an `updaterFn` when `state.columnVisibility` changes. This overrides the default internal state management, so you will need to persist the state change either fully or partially outside of the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#oncolumnvisibilitychange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  onColumnVisibilityChange?: OnChangeFn<VisibilityState>;
}
type VisibilityDefaultOptions = Pick<
  VisibilityOptions,
  "onColumnVisibilityChange"
>;
interface VisibilityInstance<TData extends RowData> {
  /**
   * If column pinning, returns a flat array of leaf-node columns that are visible in the unpinned/center portion of the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getcentervisibleleafcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  getCenterVisibleLeafColumns: () => Column<TData, unknown>[];
  /**
   * Returns whether all columns are visible
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getisallcolumnsvisible)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  getIsAllColumnsVisible: () => boolean;
  /**
   * Returns whether any columns are visible
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getissomecolumnsvisible)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  getIsSomeColumnsVisible: () => boolean;
  /**
   * If column pinning, returns a flat array of leaf-node columns that are visible in the left portion of the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getleftvisibleleafcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  getLeftVisibleLeafColumns: () => Column<TData, unknown>[];
  /**
   * If column pinning, returns a flat array of leaf-node columns that are visible in the right portion of the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getrightvisibleleafcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  getRightVisibleLeafColumns: () => Column<TData, unknown>[];
  /**
   * Returns a handler for toggling the visibility of all columns, meant to be bound to a `input[type=checkbox]` element.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#gettoggleallcolumnsvisibilityhandler)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  getToggleAllColumnsVisibilityHandler: () => (event: unknown) => void;
  /**
   * Returns a flat array of columns that are visible, including parent columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getvisibleflatcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  getVisibleFlatColumns: () => Column<TData, unknown>[];
  /**
   * Returns a flat array of leaf-node columns that are visible.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getvisibleleafcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  getVisibleLeafColumns: () => Column<TData, unknown>[];
  /**
   * Resets the column visibility state to the initial state. If `defaultState` is provided, the state will be reset to `{}`
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#resetcolumnvisibility)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  resetColumnVisibility: (defaultState?: boolean) => void;
  /**
   * Sets or updates the `state.columnVisibility` state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#setcolumnvisibility)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  setColumnVisibility: (updater: Updater<VisibilityState>) => void;
  /**
   * Toggles the visibility of all columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#toggleallcolumnsvisible)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  toggleAllColumnsVisible: (value?: boolean) => void;
}
interface VisibilityColumnDef {
  enableHiding?: boolean;
}
interface VisibilityRow<TData extends RowData> {
  _getAllVisibleCells: () => Cell<TData, unknown>[];
  /**
   * Returns an array of cells that account for column visibility for the row.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getvisiblecells)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  getVisibleCells: () => Cell<TData, unknown>[];
}
interface VisibilityColumn {
  /**
   * Returns whether the column can be hidden
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getcanhide)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  getCanHide: () => boolean;
  /**
   * Returns whether the column is visible
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#getisvisible)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  getIsVisible: () => boolean;
  /**
   * Returns a function that can be used to toggle the column visibility. This function can be used to bind to an event handler to a checkbox.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#gettogglevisibilityhandler)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  getToggleVisibilityHandler: () => (event: unknown) => void;
  /**
   * Toggles the visibility of the column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-visibility#togglevisibility)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-visibility)
   */
  toggleVisibility: (value?: boolean) => void;
}
declare const ColumnVisibility: TableFeature;
declare function _getVisibleLeafColumns<TData extends RowData>(
  table: Table<TData>,
  position?: ColumnPinningPosition | "center",
): Column<TData, unknown>[];

interface ColumnOrderTableState {
  columnOrder: ColumnOrderState;
}
type ColumnOrderState = string[];
interface ColumnOrderOptions {
  /**
   * If provided, this function will be called with an `updaterFn` when `state.columnOrder` changes. This overrides the default internal state management, so you will need to persist the state change either fully or partially outside of the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-ordering#oncolumnorderchange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-ordering)
   */
  onColumnOrderChange?: OnChangeFn<ColumnOrderState>;
}
interface ColumnOrderColumn {
  /**
   * Returns the index of the column in the order of the visible columns. Optionally pass a `position` parameter to get the index of the column in a sub-section of the table
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-ordering#getindex)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-ordering)
   */
  getIndex: (position?: ColumnPinningPosition | "center") => number;
  /**
   * Returns `true` if the column is the first column in the order of the visible columns. Optionally pass a `position` parameter to check if the column is the first in a sub-section of the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-ordering#getisfirstcolumn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-ordering)
   */
  getIsFirstColumn: (position?: ColumnPinningPosition | "center") => boolean;
  /**
   * Returns `true` if the column is the last column in the order of the visible columns. Optionally pass a `position` parameter to check if the column is the last in a sub-section of the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-ordering#getislastcolumn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-ordering)
   */
  getIsLastColumn: (position?: ColumnPinningPosition | "center") => boolean;
}
interface ColumnOrderDefaultOptions {
  onColumnOrderChange: OnChangeFn<ColumnOrderState>;
}
interface ColumnOrderInstance<TData extends RowData> {
  _getOrderColumnsFn: () => (
    columns: Column<TData, unknown>[],
  ) => Column<TData, unknown>[];
  /**
   * Resets the **columnOrder** state to `initialState.columnOrder`, or `true` can be passed to force a default blank state reset to `[]`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-ordering#resetcolumnorder)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-ordering)
   */
  resetColumnOrder: (defaultState?: boolean) => void;
  /**
   * Sets or updates the `state.columnOrder` state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-ordering#setcolumnorder)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-ordering)
   */
  setColumnOrder: (updater: Updater<ColumnOrderState>) => void;
}
declare const ColumnOrdering: TableFeature;

type ColumnPinningPosition = false | "left" | "right";
interface ColumnPinningState {
  left?: string[];
  right?: string[];
}
interface ColumnPinningTableState {
  columnPinning: ColumnPinningState;
}
interface ColumnPinningOptions {
  /**
   * Enables/disables column pinning for the table. Defaults to `true`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#enablecolumnpinning)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  enableColumnPinning?: boolean;
  /**
   * @deprecated Use `enableColumnPinning` or `enableRowPinning` instead.
   * Enables/disables all pinning for the table. Defaults to `true`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#enablepinning)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  enablePinning?: boolean;
  /**
   * If provided, this function will be called with an `updaterFn` when `state.columnPinning` changes. This overrides the default internal state management, so you will also need to supply `state.columnPinning` from your own managed state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#oncolumnpinningchange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/oncolumnpinningchange)
   */
  onColumnPinningChange?: OnChangeFn<ColumnPinningState>;
}
interface ColumnPinningDefaultOptions {
  onColumnPinningChange: OnChangeFn<ColumnPinningState>;
}
interface ColumnPinningColumnDef {
  /**
   * Enables/disables column pinning for this column. Defaults to `true`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#enablepinning-1)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  enablePinning?: boolean;
}
interface ColumnPinningColumn {
  /**
   * Returns whether or not the column can be pinned.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getcanpin)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  getCanPin: () => boolean;
  /**
   * Returns the pinned position of the column. (`'left'`, `'right'` or `false`)
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getispinned)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  getIsPinned: () => ColumnPinningPosition;
  /**
   * Returns the numeric pinned index of the column within a pinned column group.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getpinnedindex)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  getPinnedIndex: () => number;
  /**
   * Pins a column to the `'left'` or `'right'`, or unpins the column to the center if `false` is passed.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#pin)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  pin: (position: ColumnPinningPosition) => void;
}
interface ColumnPinningRow<TData extends RowData> {
  /**
   * Returns all center pinned (unpinned) leaf cells in the row.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getcentervisiblecells)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  getCenterVisibleCells: () => Cell<TData, unknown>[];
  /**
   * Returns all left pinned leaf cells in the row.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getleftvisiblecells)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  getLeftVisibleCells: () => Cell<TData, unknown>[];
  /**
   * Returns all right pinned leaf cells in the row.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getrightvisiblecells)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  getRightVisibleCells: () => Cell<TData, unknown>[];
}
interface ColumnPinningInstance<TData extends RowData> {
  /**
   * Returns all center pinned (unpinned) leaf columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getcenterleafcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  getCenterLeafColumns: () => Column<TData, unknown>[];
  /**
   * Returns whether or not any columns are pinned. Optionally specify to only check for pinned columns in either the `left` or `right` position.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getissomecolumnspinned)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  getIsSomeColumnsPinned: (position?: ColumnPinningPosition) => boolean;
  /**
   * Returns all left pinned leaf columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getleftleafcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  getLeftLeafColumns: () => Column<TData, unknown>[];
  /**
   * Returns all right pinned leaf columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#getrightleafcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  getRightLeafColumns: () => Column<TData, unknown>[];
  /**
   * Resets the **columnPinning** state to `initialState.columnPinning`, or `true` can be passed to force a default blank state reset to `{ left: [], right: [], }`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#resetcolumnpinning)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  resetColumnPinning: (defaultState?: boolean) => void;
  /**
   * Sets or updates the `state.columnPinning` state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-pinning#setcolumnpinning)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-pinning)
   */
  setColumnPinning: (updater: Updater<ColumnPinningState>) => void;
}
declare const ColumnPinning: TableFeature;

type RowPinningPosition = false | "top" | "bottom";
interface RowPinningState {
  bottom?: string[];
  top?: string[];
}
interface RowPinningTableState {
  rowPinning: RowPinningState;
}
interface RowPinningOptions<TData extends RowData> {
  /**
   * Enables/disables row pinning for the table. Defaults to `true`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#enablerowpinning)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)
   */
  enableRowPinning?: boolean | ((row: Row<TData>) => boolean);
  /**
   * When `false`, pinned rows will not be visible if they are filtered or paginated out of the table. When `true`, pinned rows will always be visible regardless of filtering or pagination. Defaults to `true`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#keeppinnedrows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)
   */
  keepPinnedRows?: boolean;
  /**
   * If provided, this function will be called with an `updaterFn` when `state.rowPinning` changes. This overrides the default internal state management, so you will also need to supply `state.rowPinning` from your own managed state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#onrowpinningchange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/onrowpinningchange)
   */
  onRowPinningChange?: OnChangeFn<RowPinningState>;
}
interface RowPinningDefaultOptions {
  onRowPinningChange: OnChangeFn<RowPinningState>;
}
interface RowPinningRow {
  /**
   * Returns whether or not the row can be pinned.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#getcanpin-1)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)
   */
  getCanPin: () => boolean;
  /**
   * Returns the pinned position of the row. (`'top'`, `'bottom'` or `false`)
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#getispinned-1)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)
   */
  getIsPinned: () => RowPinningPosition;
  /**
   * Returns the numeric pinned index of the row within a pinned row group.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#getpinnedindex-1)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)
   */
  getPinnedIndex: () => number;
  /**
   * Pins a row to the `'top'` or `'bottom'`, or unpins the row to the center if `false` is passed.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#pin-1)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)
   */
  pin: (
    position: RowPinningPosition,
    includeLeafRows?: boolean,
    includeParentRows?: boolean,
  ) => void;
}
interface RowPinningInstance<TData extends RowData> {
  _getPinnedRows: (
    visiblePinnedRows: Array<Row<TData>>,
    pinnedRowIds: Array<string> | undefined,
    position: "top" | "bottom",
  ) => Row<TData>[];
  /**
   * Returns all bottom pinned rows.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#getbottomrows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)
   */
  getBottomRows: () => Row<TData>[];
  /**
   * Returns all rows that are not pinned to the top or bottom.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#getcenterrows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)
   */
  getCenterRows: () => Row<TData>[];
  /**
   * Returns whether or not any rows are pinned. Optionally specify to only check for pinned rows in either the `top` or `bottom` position.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#getissomerowspinned)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)
   */
  getIsSomeRowsPinned: (position?: RowPinningPosition) => boolean;
  /**
   * Returns all top pinned rows.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#gettoprows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)
   */
  getTopRows: () => Row<TData>[];
  /**
   * Resets the **rowPinning** state to `initialState.rowPinning`, or `true` can be passed to force a default blank state reset to `{ top: [], bottom: [], }`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#resetrowpinning)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)
   */
  resetRowPinning: (defaultState?: boolean) => void;
  /**
   * Sets or updates the `state.rowPinning` state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-pinning#setrowpinning)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-pinning)
   */
  setRowPinning: (updater: Updater<RowPinningState>) => void;
}
declare const RowPinning: TableFeature;

interface CoreHeaderGroup<TData extends RowData> {
  depth: number;
  headers: Header<TData, unknown>[];
  id: string;
}
interface HeaderContext<TData, TValue> {
  /**
   * An instance of a column.
   */
  column: Column<TData, TValue>;
  /**
   * An instance of a header.
   */
  header: Header<TData, TValue>;
  /**
   * The table instance.
   */
  table: Table<TData>;
}
interface CoreHeader<TData extends RowData, TValue> {
  /**
   * The col-span for the header.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/header#colspan)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  colSpan: number;
  /**
   * The header's associated column object.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/header#column)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  column: Column<TData, TValue>;
  /**
   * The depth of the header, zero-indexed based.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/header#depth)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  depth: number;
  /**
   * Returns the rendering context (or props) for column-based components like headers, footers and filters.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/header#getcontext)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getContext: () => HeaderContext<TData, TValue>;
  /**
   * Returns the leaf headers hierarchically nested under this header.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/header#getleafheaders)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getLeafHeaders: () => Header<TData, unknown>[];
  /**
   * The header's associated header group object.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/header#headergroup)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  headerGroup: HeaderGroup<TData>;
  /**
   * The unique identifier for the header.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/header#id)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  id: string;
  /**
   * The index for the header within the header group.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/header#index)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  index: number;
  /**
   * A boolean denoting if the header is a placeholder header.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/header#isplaceholder)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  isPlaceholder: boolean;
  /**
   * If the header is a placeholder header, this will be a unique header ID that does not conflict with any other headers across the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/header#placeholderid)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  placeholderId?: string;
  /**
   * The row-span for the header.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/header#rowspan)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  rowSpan: number;
  /**
   * The header's hierarchical sub/child headers. Will be empty if the header's associated column is a leaf-column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/header#subheaders)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  subHeaders: Header<TData, TValue>[];
}
interface HeadersInstance<TData extends RowData> {
  /**
   * Returns all header groups for the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getheadergroups)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getHeaderGroups: () => HeaderGroup<TData>[];
  /**
   * If pinning, returns the header groups for the left pinned columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getleftheadergroups)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getLeftHeaderGroups: () => HeaderGroup<TData>[];
  /**
   * If pinning, returns the header groups for columns that are not pinned.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getcenterheadergroups)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getCenterHeaderGroups: () => HeaderGroup<TData>[];
  /**
   * If pinning, returns the header groups for the right pinned columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getrightheadergroups)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getRightHeaderGroups: () => HeaderGroup<TData>[];
  /**
   * Returns the footer groups for the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getfootergroups)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getFooterGroups: () => HeaderGroup<TData>[];
  /**
   * If pinning, returns the footer groups for the left pinned columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getleftfootergroups)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getLeftFooterGroups: () => HeaderGroup<TData>[];
  /**
   * If pinning, returns the footer groups for columns that are not pinned.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getcenterfootergroups)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getCenterFooterGroups: () => HeaderGroup<TData>[];
  /**
   * If pinning, returns the footer groups for the right pinned columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getrightfootergroups)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getRightFooterGroups: () => HeaderGroup<TData>[];
  /**
   * Returns headers for all columns in the table, including parent headers.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getflatheaders)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getFlatHeaders: () => Header<TData, unknown>[];
  /**
   * If pinning, returns headers for all left pinned columns in the table, including parent headers.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getleftflatheaders)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getLeftFlatHeaders: () => Header<TData, unknown>[];
  /**
   * If pinning, returns headers for all columns that are not pinned, including parent headers.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getcenterflatheaders)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getCenterFlatHeaders: () => Header<TData, unknown>[];
  /**
   * If pinning, returns headers for all right pinned columns in the table, including parent headers.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getrightflatheaders)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getRightFlatHeaders: () => Header<TData, unknown>[];
  /**
   * Returns headers for all leaf columns in the table, (not including parent headers).
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getleafheaders)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getLeafHeaders: () => Header<TData, unknown>[];
  /**
   * If pinning, returns headers for all left pinned leaf columns in the table, (not including parent headers).
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getleftleafheaders)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getLeftLeafHeaders: () => Header<TData, unknown>[];
  /**
   * If pinning, returns headers for all columns that are not pinned, (not including parent headers).
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getcenterleafheaders)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getCenterLeafHeaders: () => Header<TData, unknown>[];
  /**
   * If pinning, returns headers for all right pinned leaf columns in the table, (not including parent headers).
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/headers#getrightleafheaders)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/headers)
   */
  getRightLeafHeaders: () => Header<TData, unknown>[];
}
declare const Headers: TableFeature;
declare function buildHeaderGroups<TData extends RowData>(
  allColumns: Column<TData, unknown>[],
  columnsToGroup: Column<TData, unknown>[],
  table: Table<TData>,
  headerFamily?: "center" | "left" | "right",
): HeaderGroup<TData>[];

interface FacetedColumn<TData extends RowData> {
  _getFacetedMinMaxValues?: () => undefined | [number, number];
  _getFacetedRowModel?: () => RowModel<TData>;
  _getFacetedUniqueValues?: () => Map<any, number>;
  /**
   * A function that **computes and returns** a min/max tuple derived from `column.getFacetedRowModel`. Useful for displaying faceted result values.
   * > ⚠️ Requires that you pass a valid `getFacetedMinMaxValues` function to `options.getFacetedMinMaxValues`. A default implementation is provided via the exported `getFacetedMinMaxValues` function.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-faceting#getfacetedminmaxvalues)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-faceting)
   */
  getFacetedMinMaxValues: () => undefined | [number, number];
  /**
   * Returns the row model with all other column filters applied, excluding its own filter. Useful for displaying faceted result counts.
   * > ⚠️ Requires that you pass a valid `getFacetedRowModel` function to `options.facetedRowModel`. A default implementation is provided via the exported `getFacetedRowModel` function.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-faceting#getfacetedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-faceting)
   */
  getFacetedRowModel: () => RowModel<TData>;
  /**
   * A function that **computes and returns** a `Map` of unique values and their occurrences derived from `column.getFacetedRowModel`. Useful for displaying faceted result values.
   * > ⚠️ Requires that you pass a valid `getFacetedUniqueValues` function to `options.getFacetedUniqueValues`. A default implementation is provided via the exported `getFacetedUniqueValues` function.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-faceting#getfaceteduniquevalues)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-faceting)
   */
  getFacetedUniqueValues: () => Map<any, number>;
}
interface FacetedOptions<TData extends RowData> {
  getFacetedMinMaxValues?: (
    table: Table<TData>,
    columnId: string,
  ) => () => undefined | [number, number];
  getFacetedRowModel?: (
    table: Table<TData>,
    columnId: string,
  ) => () => RowModel<TData>;
  getFacetedUniqueValues?: (
    table: Table<TData>,
    columnId: string,
  ) => () => Map<any, number>;
}
declare const ColumnFaceting: TableFeature;

interface GlobalFacetingInstance<TData extends RowData> {
  _getGlobalFacetedMinMaxValues?: () => undefined | [number, number];
  _getGlobalFacetedRowModel?: () => RowModel<TData>;
  _getGlobalFacetedUniqueValues?: () => Map<any, number>;
  /**
   * Currently, this function returns the built-in `includesString` filter function. In future releases, it may return more dynamic filter functions based on the nature of the data provided.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-faceting#getglobalautofilterfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-faceting)
   */
  getGlobalFacetedMinMaxValues: () => undefined | [number, number];
  /**
   * Returns the row model for the table after **global** filtering has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-faceting#getglobalfacetedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-faceting)
   */
  getGlobalFacetedRowModel: () => RowModel<TData>;
  /**
   * Returns the faceted unique values for the global filter.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-faceting#getglobalfaceteduniquevalues)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-faceting)
   */
  getGlobalFacetedUniqueValues: () => Map<any, number>;
}
declare const GlobalFaceting: TableFeature;

declare const filterFns: {
  includesString: FilterFn<any>;
  includesStringSensitive: FilterFn<any>;
  equalsString: FilterFn<any>;
  arrIncludes: FilterFn<any>;
  arrIncludesAll: FilterFn<any>;
  arrIncludesSome: FilterFn<any>;
  equals: FilterFn<any>;
  weakEquals: FilterFn<any>;
  inNumberRange: FilterFn<any>;
};
type BuiltInFilterFn = keyof typeof filterFns;

interface ColumnFiltersTableState {
  columnFilters: ColumnFiltersState;
}
type ColumnFiltersState = ColumnFilter[];
interface ColumnFilter {
  id: string;
  value: unknown;
}
interface ResolvedColumnFilter<TData extends RowData> {
  filterFn: FilterFn<TData>;
  id: string;
  resolvedValue: unknown;
}
interface FilterFn<TData extends RowData> {
  (
    row: Row<TData>,
    columnId: string,
    filterValue: any,
    addMeta: (meta: FilterMeta) => void,
  ): boolean;
  autoRemove?: ColumnFilterAutoRemoveTestFn<TData>;
  resolveFilterValue?: TransformFilterValueFn<TData>;
}
type TransformFilterValueFn<TData extends RowData> = (
  value: any,
  column?: Column<TData, unknown>,
) => unknown;
type ColumnFilterAutoRemoveTestFn<TData extends RowData> = (
  value: any,
  column?: Column<TData, unknown>,
) => boolean;
type CustomFilterFns<TData extends RowData> = Record<string, FilterFn<TData>>;
type FilterFnOption<TData extends RowData> =
  | "auto"
  | BuiltInFilterFn
  | keyof FilterFns
  | FilterFn<TData>;
interface ColumnFiltersColumnDef<TData extends RowData> {
  /**
   * Enables/disables the **column** filter for this column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#enablecolumnfilter)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  enableColumnFilter?: boolean;
  /**
   * The filter function to use with this column. Can be the name of a built-in filter function or a custom filter function.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#filterfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  filterFn?: FilterFnOption<TData>;
}
interface ColumnFiltersColumn<TData extends RowData> {
  /**
   * Returns an automatically calculated filter function for the column based off of the columns first known value.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#getautofilterfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  getAutoFilterFn: () => FilterFn<TData> | undefined;
  /**
   * Returns whether or not the column can be **column** filtered.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#getcanfilter)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  getCanFilter: () => boolean;
  /**
   * Returns the filter function (either user-defined or automatic, depending on configuration) for the columnId specified.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#getfilterfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  getFilterFn: () => FilterFn<TData> | undefined;
  /**
   * Returns the index (including `-1`) of the column filter in the table's `state.columnFilters` array.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#getfilterindex)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  getFilterIndex: () => number;
  /**
   * Returns the current filter value for the column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#getfiltervalue)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  getFilterValue: () => unknown;
  /**
   * Returns whether or not the column is currently filtered.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#getisfiltered)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  getIsFiltered: () => boolean;
  /**
   * A function that sets the current filter value for the column. You can pass it a value or an updater function for immutability-safe operations on existing values.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#setfiltervalue)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  setFilterValue: (updater: Updater<any>) => void;
}
interface ColumnFiltersRow<TData extends RowData> {
  /**
   * The column filters map for the row. This object tracks whether a row is passing/failing specific filters by their column ID.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#columnfilters)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  columnFilters: Record<string, boolean>;
  /**
   * The column filters meta map for the row. This object tracks any filter meta for a row as optionally provided during the filtering process.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#columnfiltersmeta)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  columnFiltersMeta: Record<string, FilterMeta>;
}
interface ColumnFiltersOptionsBase<TData extends RowData> {
  /**
   * Enables/disables **column** filtering for all columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#enablecolumnfilters)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  enableColumnFilters?: boolean;
  /**
   * Enables/disables all filtering for the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#enablefilters)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  enableFilters?: boolean;
  /**
   * By default, filtering is done from parent rows down (so if a parent row is filtered out, all of its children will be filtered out as well). Setting this option to `true` will cause filtering to be done from leaf rows up (which means parent rows will be included so long as one of their child or grand-child rows is also included).
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#filterfromleafrows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  filterFromLeafRows?: boolean;
  /**
   * If provided, this function is called **once** per table and should return a **new function** which will calculate and return the row model for the table when it's filtered.
   * - For server-side filtering, this function is unnecessary and can be ignored since the server should already return the filtered row model.
   * - For client-side filtering, this function is required. A default implementation is provided via any table adapter's `{ getFilteredRowModel }` export.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#getfilteredrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  getFilteredRowModel?: (table: Table<any>) => () => RowModel<any>;
  /**
   * Disables the `getFilteredRowModel` from being used to filter data. This may be useful if your table needs to dynamically support both client-side and server-side filtering.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#manualfiltering)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  manualFiltering?: boolean;
  /**
     * By default, filtering is done for all rows (max depth of 100), no matter if they are root level parent rows or the child leaf rows of a parent row. Setting this option to `0` will cause filtering to only be applied to the root level parent rows, with all sub-rows remaining unfiltered. Similarly, setting this option to `1` will cause filtering to only be applied to child leaf rows 1 level deep, and so on.
  
     * This is useful for situations where you want a row's entire child hierarchy to be visible regardless of the applied filter.
      * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#maxleafrowfilterdepth)
      * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
     */
  maxLeafRowFilterDepth?: number;
  /**
   * If provided, this function will be called with an `updaterFn` when `state.columnFilters` changes. This overrides the default internal state management, so you will need to persist the state change either fully or partially outside of the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#oncolumnfilterschange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
}
type ResolvedFilterFns = keyof FilterFns extends never
  ? {
      filterFns?: Record<string, FilterFn<any>>;
    }
  : {
      filterFns: Record<keyof FilterFns, FilterFn<any>>;
    };
interface ColumnFiltersOptions<TData extends RowData>
  extends ColumnFiltersOptionsBase<TData>, ResolvedFilterFns {}
interface ColumnFiltersInstance<TData extends RowData> {
  _getFilteredRowModel?: () => RowModel<TData>;
  /**
   * Returns the row model for the table after **column** filtering has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#getfilteredrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  getFilteredRowModel: () => RowModel<TData>;
  /**
   * Returns the row model for the table before any **column** filtering has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#getprefilteredrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  getPreFilteredRowModel: () => RowModel<TData>;
  /**
   * Resets the **columnFilters** state to `initialState.columnFilters`, or `true` can be passed to force a default blank state reset to `[]`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#resetcolumnfilters)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  resetColumnFilters: (defaultState?: boolean) => void;
  /**
   * Resets the **globalFilter** state to `initialState.globalFilter`, or `true` can be passed to force a default blank state reset to `undefined`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#resetglobalfilter)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  resetGlobalFilter: (defaultState?: boolean) => void;
  /**
   * Sets or updates the `state.columnFilters` state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#setcolumnfilters)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  setColumnFilters: (updater: Updater<ColumnFiltersState>) => void;
  /**
   * Sets or updates the `state.globalFilter` state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-filtering#setglobalfilter)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-filtering)
   */
  setGlobalFilter: (updater: Updater<any>) => void;
}
declare const ColumnFiltering: TableFeature;
declare function shouldAutoRemoveFilter<TData extends RowData>(
  filterFn?: FilterFn<TData>,
  value?: any,
  column?: Column<TData, unknown>,
): boolean;

interface GlobalFilterTableState {
  globalFilter: any;
}
interface GlobalFilterColumnDef {
  /**
   * Enables/disables the **global** filter for this column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-filtering#enableglobalfilter)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-filtering)
   */
  enableGlobalFilter?: boolean;
}
interface GlobalFilterColumn {
  /**
   * Returns whether or not the column can be **globally** filtered. Set to `false` to disable a column from being scanned during global filtering.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-filtering#getcanglobalfilter)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-filtering)
   */
  getCanGlobalFilter: () => boolean;
}
interface GlobalFilterOptions<TData extends RowData> {
  /**
   * Enables/disables **global** filtering for all columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-filtering#enableglobalfilter)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-filtering)
   */
  enableGlobalFilter?: boolean;
  /**
   * If provided, this function will be called with the column and should return `true` or `false` to indicate whether this column should be used for global filtering.
   *
   * This is useful if the column can contain data that is not `string` or `number` (i.e. `undefined`).
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-filtering#getcolumncanglobalfilter)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-filtering)
   */
  getColumnCanGlobalFilter?: (column: Column<TData, unknown>) => boolean;
  /**
   * The filter function to use for global filtering.
   * - A `string` referencing a built-in filter function
   * - A `string` that references a custom filter functions provided via the `tableOptions.filterFns` option
   * - A custom filter function
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-filtering#globalfilterfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-filtering)
   */
  globalFilterFn?: FilterFnOption<TData>;
  /**
   * If provided, this function will be called with an `updaterFn` when `state.globalFilter` changes. This overrides the default internal state management, so you will need to persist the state change either fully or partially outside of the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-filtering#onglobalfilterchange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-filtering)
   */
  onGlobalFilterChange?: OnChangeFn<any>;
}
interface GlobalFilterInstance<TData extends RowData> {
  /**
   * Currently, this function returns the built-in `includesString` filter function. In future releases, it may return more dynamic filter functions based on the nature of the data provided.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-filtering#getglobalautofilterfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-filtering)
   */
  getGlobalAutoFilterFn: () => FilterFn<TData> | undefined;
  /**
   * Returns the filter function (either user-defined or automatic, depending on configuration) for the global filter.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-filtering#getglobalfilterfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-filtering)
   */
  getGlobalFilterFn: () => FilterFn<TData> | undefined;
  /**
   * Resets the **globalFilter** state to `initialState.globalFilter`, or `true` can be passed to force a default blank state reset to `undefined`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-filtering#resetglobalfilter)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-filtering)
   */
  resetGlobalFilter: (defaultState?: boolean) => void;
  /**
   * Sets or updates the `state.globalFilter` state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/global-filtering#setglobalfilter)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/global-filtering)
   */
  setGlobalFilter: (updater: Updater<any>) => void;
}
declare const GlobalFiltering: TableFeature;

declare const reSplitAlphaNumeric: RegExp;
declare const sortingFns: {
  alphanumeric: SortingFn<any>;
  alphanumericCaseSensitive: SortingFn<any>;
  text: SortingFn<any>;
  textCaseSensitive: SortingFn<any>;
  datetime: SortingFn<any>;
  basic: SortingFn<any>;
};
type BuiltInSortingFn = keyof typeof sortingFns;

type SortDirection = "asc" | "desc";
interface ColumnSort {
  desc: boolean;
  id: string;
}
type SortingState = ColumnSort[];
interface SortingTableState {
  sorting: SortingState;
}
interface SortingFn<TData extends RowData> {
  (rowA: Row<TData>, rowB: Row<TData>, columnId: string): number;
}
type CustomSortingFns<TData extends RowData> = Record<string, SortingFn<TData>>;
type SortingFnOption<TData extends RowData> =
  | "auto"
  | keyof SortingFns
  | BuiltInSortingFn
  | SortingFn<TData>;
interface SortingColumnDef<TData extends RowData> {
  /**
   * Enables/Disables multi-sorting for this column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#enablemultisort)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  enableMultiSort?: boolean;
  /**
   * Enables/Disables sorting for this column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#enablesorting)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  enableSorting?: boolean;
  /**
   * Inverts the order of the sorting for this column. This is useful for values that have an inverted best/worst scale where lower numbers are better, eg. a ranking (1st, 2nd, 3rd) or golf-like scoring
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#invertsorting)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  invertSorting?: boolean;
  /**
   * Set to `true` for sorting toggles on this column to start in the descending direction.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#sortdescfirst)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  sortDescFirst?: boolean;
  /**
   * The sorting function to use with this column.
   * - A `string` referencing a built-in sorting function
   * - A custom sorting function
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#sortingfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  sortingFn?: SortingFnOption<TData>;
  /**
   * The priority of undefined values when sorting this column.
   * - `false`
   *   - Undefined values will be considered tied and need to be sorted by the next column filter or original index (whichever applies)
   * - `-1`
   *   - Undefined values will be sorted with higher priority (ascending) (if ascending, undefined will appear on the beginning of the list)
   * - `1`
   *   - Undefined values will be sorted with lower priority (descending) (if ascending, undefined will appear on the end of the list)
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#sortundefined)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  sortUndefined?: false | -1 | 1 | "first" | "last";
}
interface SortingColumn<TData extends RowData> {
  /**
   * Removes this column from the table's sorting state
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#clearsorting)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  clearSorting: () => void;
  /**
   * Returns a sort direction automatically inferred based on the columns values.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getautosortdir)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getAutoSortDir: () => SortDirection;
  /**
   * Returns a sorting function automatically inferred based on the columns values.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getautosortingfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getAutoSortingFn: () => SortingFn<TData>;
  /**
   * Returns whether this column can be multi-sorted.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getcanmultisort)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getCanMultiSort: () => boolean;
  /**
   * Returns whether this column can be sorted.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getcansort)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getCanSort: () => boolean;
  /**
   * Returns the first direction that should be used when sorting this column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getfirstsortdir)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getFirstSortDir: () => SortDirection;
  /**
   * Returns the current sort direction of this column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getissorted)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getIsSorted: () => false | SortDirection;
  /**
   * Returns the next sorting order.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getnextsortingorder)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getNextSortingOrder: () => SortDirection | false;
  /**
   * Returns the index position of this column's sorting within the sorting state
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getsortindex)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getSortIndex: () => number;
  /**
   * Returns the resolved sorting function to be used for this column
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getsortingfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getSortingFn: () => SortingFn<TData>;
  /**
   * Returns a function that can be used to toggle this column's sorting state. This is useful for attaching a click handler to the column header.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#gettogglesortinghandler)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getToggleSortingHandler: () => undefined | ((event: unknown) => void);
  /**
   * Toggles this columns sorting state. If `desc` is provided, it will force the sort direction to that value. If `isMulti` is provided, it will additivity multi-sort the column (or toggle it if it is already sorted).
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#togglesorting)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  toggleSorting: (desc?: boolean, isMulti?: boolean) => void;
}
interface SortingOptionsBase {
  /**
   * Enables/disables the ability to remove multi-sorts
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#enablemultiremove)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  enableMultiRemove?: boolean;
  /**
   * Enables/Disables multi-sorting for the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#enablemultisort)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  enableMultiSort?: boolean;
  /**
   * Enables/Disables sorting for the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#enablesorting)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  enableSorting?: boolean;
  /**
   * Enables/Disables the ability to remove sorting for the table.
   * - If `true` then changing sort order will circle like: 'none' -> 'desc' -> 'asc' -> 'none' -> ...
   * - If `false` then changing sort order will circle like: 'none' -> 'desc' -> 'asc' -> 'desc' -> 'asc' -> ...
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#enablesortingremoval)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  enableSortingRemoval?: boolean;
  /**
   * This function is used to retrieve the sorted row model. If using server-side sorting, this function is not required. To use client-side sorting, pass the exported `getSortedRowModel()` from your adapter to your table or implement your own.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getsortedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getSortedRowModel?: (table: Table<any>) => () => RowModel<any>;
  /**
   * Pass a custom function that will be used to determine if a multi-sort event should be triggered. It is passed the event from the sort toggle handler and should return `true` if the event should trigger a multi-sort.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#ismultisortevent)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  isMultiSortEvent?: (e: unknown) => boolean;
  /**
   * Enables manual sorting for the table. If this is `true`, you will be expected to sort your data before it is passed to the table. This is useful if you are doing server-side sorting.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#manualsorting)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  manualSorting?: boolean;
  /**
   * Set a maximum number of columns that can be multi-sorted.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#maxmultisortcolcount)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  maxMultiSortColCount?: number;
  /**
   * If provided, this function will be called with an `updaterFn` when `state.sorting` changes. This overrides the default internal state management, so you will need to persist the state change either fully or partially outside of the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#onsortingchange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  onSortingChange?: OnChangeFn<SortingState>;
  /**
   * If `true`, all sorts will default to descending as their first toggle state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#sortdescfirst)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  sortDescFirst?: boolean;
}
type ResolvedSortingFns = keyof SortingFns extends never
  ? {
      sortingFns?: Record<string, SortingFn<any>>;
    }
  : {
      sortingFns: Record<keyof SortingFns, SortingFn<any>>;
    };
interface SortingOptions<TData extends RowData>
  extends SortingOptionsBase, ResolvedSortingFns {}
interface SortingInstance<TData extends RowData> {
  _getSortedRowModel?: () => RowModel<TData>;
  /**
   * Returns the row model for the table before any sorting has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getpresortedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getPreSortedRowModel: () => RowModel<TData>;
  /**
   * Returns the row model for the table after sorting has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#getsortedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  getSortedRowModel: () => RowModel<TData>;
  /**
   * Resets the **sorting** state to `initialState.sorting`, or `true` can be passed to force a default blank state reset to `[]`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#resetsorting)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  resetSorting: (defaultState?: boolean) => void;
  /**
   * Sets or updates the `state.sorting` state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/sorting#setsorting)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/sorting)
   */
  setSorting: (updater: Updater<SortingState>) => void;
}
declare const RowSorting: TableFeature;

declare const aggregationFns: {
  sum: AggregationFn<any>;
  min: AggregationFn<any>;
  max: AggregationFn<any>;
  extent: AggregationFn<any>;
  mean: AggregationFn<any>;
  median: AggregationFn<any>;
  unique: AggregationFn<any>;
  uniqueCount: AggregationFn<any>;
  count: AggregationFn<any>;
};
type BuiltInAggregationFn = keyof typeof aggregationFns;

type GroupingState = string[];
interface GroupingTableState {
  grouping: GroupingState;
}
type AggregationFn<TData extends RowData> = (
  columnId: string,
  leafRows: Row<TData>[],
  childRows: Row<TData>[],
) => any;
type CustomAggregationFns = Record<string, AggregationFn<any>>;
type AggregationFnOption<TData extends RowData> =
  | "auto"
  | keyof AggregationFns
  | BuiltInAggregationFn
  | AggregationFn<TData>;
interface GroupingColumnDef<TData extends RowData, TValue> {
  /**
   * The cell to display each row for the column if the cell is an aggregate. If a function is passed, it will be passed a props object with the context of the cell and should return the property type for your adapter (the exact type depends on the adapter being used).
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#aggregatedcell)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  aggregatedCell?: ColumnDefTemplate<
    ReturnType<Cell<TData, TValue>["getContext"]>
  >;
  /**
   * The resolved aggregation function for the column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#aggregationfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  aggregationFn?: AggregationFnOption<TData>;
  /**
   * Enables/disables grouping for this column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#enablegrouping)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  enableGrouping?: boolean;
  /**
   * Specify a value to be used for grouping rows on this column. If this option is not specified, the value derived from `accessorKey` / `accessorFn` will be used instead.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getgroupingvalue)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getGroupingValue?: (row: TData) => any;
}
interface GroupingColumn<TData extends RowData> {
  /**
   * Returns the aggregation function for the column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getaggregationfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getAggregationFn: () => AggregationFn<TData> | undefined;
  /**
   * Returns the automatically inferred aggregation function for the column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getautoaggregationfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getAutoAggregationFn: () => AggregationFn<TData> | undefined;
  /**
   * Returns whether or not the column can be grouped.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getcangroup)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getCanGroup: () => boolean;
  /**
   * Returns the index of the column in the grouping state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getgroupedindex)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getGroupedIndex: () => number;
  /**
   * Returns whether or not the column is currently grouped.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getisgrouped)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getIsGrouped: () => boolean;
  /**
   * Returns a function that toggles the grouping state of the column. This is useful for passing to the `onClick` prop of a button.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#gettogglegroupinghandler)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getToggleGroupingHandler: () => () => void;
  /**
   * Toggles the grouping state of the column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#togglegrouping)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  toggleGrouping: () => void;
}
interface GroupingRow {
  _groupingValuesCache: Record<string, any>;
  /**
   * Returns the grouping value for any row and column (including leaf rows).
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getgroupingvalue)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getGroupingValue: (columnId: string) => unknown;
  /**
   * Returns whether or not the row is currently grouped.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getisgrouped)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getIsGrouped: () => boolean;
  /**
   * If this row is grouped, this is the id of the column that this row is grouped by.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#groupingcolumnid)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  groupingColumnId?: string;
  /**
   * If this row is grouped, this is the unique/shared value for the `groupingColumnId` for all of the rows in this group.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#groupingvalue)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  groupingValue?: unknown;
}
interface GroupingCell {
  /**
   * Returns whether or not the cell is currently aggregated.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getisaggregated)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getIsAggregated: () => boolean;
  /**
   * Returns whether or not the cell is currently grouped.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getisgrouped)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getIsGrouped: () => boolean;
  /**
   * Returns whether or not the cell is currently a placeholder cell.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getisplaceholder)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getIsPlaceholder: () => boolean;
}
interface ColumnDefaultOptions {
  enableGrouping: boolean;
  onGroupingChange: OnChangeFn<GroupingState>;
}
interface GroupingOptionsBase {
  /**
   * Enables/disables grouping for the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#enablegrouping)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  enableGrouping?: boolean;
  /**
   * Returns the row model after grouping has taken place, but no further.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getgroupedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getGroupedRowModel?: (table: Table<any>) => () => RowModel<any>;
  /**
   * Grouping columns are automatically reordered by default to the start of the columns list. If you would rather remove them or leave them as-is, set the appropriate mode here.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#groupedcolumnmode)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  groupedColumnMode?: false | "reorder" | "remove";
  /**
   * Enables manual grouping. If this option is set to `true`, the table will not automatically group rows using `getGroupedRowModel()` and instead will expect you to manually group the rows before passing them to the table. This is useful if you are doing server-side grouping and aggregation.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#manualgrouping)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  manualGrouping?: boolean;
  /**
   * If this function is provided, it will be called when the grouping state changes and you will be expected to manage the state yourself. You can pass the managed state back to the table via the `tableOptions.state.grouping` option.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#ongroupingchange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  onGroupingChange?: OnChangeFn<GroupingState>;
}
type ResolvedAggregationFns = keyof AggregationFns extends never
  ? {
      aggregationFns?: Record<string, AggregationFn<any>>;
    }
  : {
      aggregationFns: Record<keyof AggregationFns, AggregationFn<any>>;
    };
interface GroupingOptions extends GroupingOptionsBase, ResolvedAggregationFns {}
type GroupingColumnMode = false | "reorder" | "remove";
interface GroupingInstance<TData extends RowData> {
  _getGroupedRowModel?: () => RowModel<TData>;
  /**
   * Returns the row model for the table after grouping has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getgroupedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getGroupedRowModel: () => RowModel<TData>;
  /**
   * Returns the row model for the table before any grouping has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#getpregroupedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  getPreGroupedRowModel: () => RowModel<TData>;
  /**
   * Resets the **grouping** state to `initialState.grouping`, or `true` can be passed to force a default blank state reset to `[]`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#resetgrouping)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  resetGrouping: (defaultState?: boolean) => void;
  /**
   * Updates the grouping state of the table via an update function or value.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/grouping#setgrouping)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/grouping)
   */
  setGrouping: (updater: Updater<GroupingState>) => void;
}
declare const ColumnGrouping: TableFeature;
declare function orderColumns<TData extends RowData>(
  leafColumns: Column<TData, unknown>[],
  grouping: string[],
  groupedColumnMode?: GroupingColumnMode,
): Column<TData, unknown>[];

type ExpandedStateList = Record<string, boolean>;
type ExpandedState = true | Record<string, boolean>;
interface ExpandedTableState {
  expanded: ExpandedState;
}
interface ExpandedRow {
  /**
   * Returns whether the row can be expanded.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getcanexpand)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getCanExpand: () => boolean;
  /**
   * Returns whether all parent rows of the row are expanded.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getisallparentsexpanded)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getIsAllParentsExpanded: () => boolean;
  /**
   * Returns whether the row is expanded.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getisexpanded)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getIsExpanded: () => boolean;
  /**
   * Returns a function that can be used to toggle the expanded state of the row. This function can be used to bind to an event handler to a button.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#gettoggleexpandedhandler)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getToggleExpandedHandler: () => () => void;
  /**
   * Toggles the expanded state (or sets it if `expanded` is provided) for the row.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#toggleexpanded)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  toggleExpanded: (expanded?: boolean) => void;
}
interface ExpandedOptions<TData extends RowData> {
  /**
   * Enable this setting to automatically reset the expanded state of the table when expanding state changes.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#autoresetexpanded)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  autoResetExpanded?: boolean;
  /**
   * Enable/disable expanding for all rows.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#enableexpanding)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  enableExpanding?: boolean;
  /**
   * This function is responsible for returning the expanded row model. If this function is not provided, the table will not expand rows. You can use the default exported `getExpandedRowModel` function to get the expanded row model or implement your own.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getexpandedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getExpandedRowModel?: (table: Table<any>) => () => RowModel<any>;
  /**
   * If provided, allows you to override the default behavior of determining whether a row is currently expanded.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getisrowexpanded)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getIsRowExpanded?: (row: Row<TData>) => boolean;
  /**
   * If provided, allows you to override the default behavior of determining whether a row can be expanded.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getrowcanexpand)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getRowCanExpand?: (row: Row<TData>) => boolean;
  /**
   * Enables manual row expansion. If this is set to `true`, `getExpandedRowModel` will not be used to expand rows and you would be expected to perform the expansion in your own data model. This is useful if you are doing server-side expansion.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#manualexpanding)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  manualExpanding?: boolean;
  /**
   * This function is called when the `expanded` table state changes. If a function is provided, you will be responsible for managing this state on your own. To pass the managed state back to the table, use the `tableOptions.state.expanded` option.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#onexpandedchange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  onExpandedChange?: OnChangeFn<ExpandedState>;
  /**
   * If `true` expanded rows will be paginated along with the rest of the table (which means expanded rows may span multiple pages). If `false` expanded rows will not be considered for pagination (which means expanded rows will always render on their parents page. This also means more rows will be rendered than the set page size)
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#paginateexpandedrows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  paginateExpandedRows?: boolean;
}
interface ExpandedInstance<TData extends RowData> {
  _autoResetExpanded: () => void;
  _getExpandedRowModel?: () => RowModel<TData>;
  /**
   * Returns whether there are any rows that can be expanded.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getcansomerowsexpand)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getCanSomeRowsExpand: () => boolean;
  /**
   * Returns the maximum depth of the expanded rows.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getexpandeddepth)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getExpandedDepth: () => number;
  /**
   * Returns the row model after expansion has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getexpandedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getExpandedRowModel: () => RowModel<TData>;
  /**
   * Returns whether all rows are currently expanded.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getisallrowsexpanded)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getIsAllRowsExpanded: () => boolean;
  /**
   * Returns whether there are any rows that are currently expanded.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getissomerowsexpanded)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getIsSomeRowsExpanded: () => boolean;
  /**
   * Returns the row model before expansion has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#getpreexpandedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getPreExpandedRowModel: () => RowModel<TData>;
  /**
   * Returns a handler that can be used to toggle the expanded state of all rows. This handler is meant to be used with an `input[type=checkbox]` element.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#gettoggleallrowsexpandedhandler)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  getToggleAllRowsExpandedHandler: () => (event: unknown) => void;
  /**
   * Resets the expanded state of the table to the initial state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#resetexpanded)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  resetExpanded: (defaultState?: boolean) => void;
  /**
   * Updates the expanded state of the table via an update function or value.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#setexpanded)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  setExpanded: (updater: Updater<ExpandedState>) => void;
  /**
   * Toggles the expanded state for all rows.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/expanding#toggleallrowsexpanded)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/expanding)
   */
  toggleAllRowsExpanded: (expanded?: boolean) => void;
}
declare const RowExpanding: TableFeature;

interface ColumnSizingTableState {
  columnSizing: ColumnSizingState;
  columnSizingInfo: ColumnSizingInfoState;
}
type ColumnSizingState = Record<string, number>;
interface ColumnSizingInfoState {
  columnSizingStart: [string, number][];
  deltaOffset: null | number;
  deltaPercentage: null | number;
  isResizingColumn: false | string;
  startOffset: null | number;
  startSize: null | number;
}
type ColumnResizeMode = "onChange" | "onEnd";
type ColumnResizeDirection = "ltr" | "rtl";
interface ColumnSizingOptions {
  /**
   * Determines when the columnSizing state is updated. `onChange` updates the state when the user is dragging the resize handle. `onEnd` updates the state when the user releases the resize handle.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#columnresizemode)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  columnResizeMode?: ColumnResizeMode;
  /**
   * Enables or disables column resizing for the column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#enablecolumnresizing)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  enableColumnResizing?: boolean;
  /**
   * Enables or disables right-to-left support for resizing the column. defaults to 'ltr'.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#columnResizeDirection)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  columnResizeDirection?: ColumnResizeDirection;
  /**
   * If provided, this function will be called with an `updaterFn` when `state.columnSizing` changes. This overrides the default internal state management, so you will also need to supply `state.columnSizing` from your own managed state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#oncolumnsizingchange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  onColumnSizingChange?: OnChangeFn<ColumnSizingState>;
  /**
   * If provided, this function will be called with an `updaterFn` when `state.columnSizingInfo` changes. This overrides the default internal state management, so you will also need to supply `state.columnSizingInfo` from your own managed state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#oncolumnsizinginfochange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  onColumnSizingInfoChange?: OnChangeFn<ColumnSizingInfoState>;
}
type ColumnSizingDefaultOptions = Pick<
  ColumnSizingOptions,
  | "columnResizeMode"
  | "onColumnSizingChange"
  | "onColumnSizingInfoChange"
  | "columnResizeDirection"
>;
interface ColumnSizingInstance {
  /**
   * If pinning, returns the total size of the center portion of the table by calculating the sum of the sizes of all unpinned/center leaf-columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getcentertotalsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getCenterTotalSize: () => number;
  /**
   * Returns the total size of the left portion of the table by calculating the sum of the sizes of all left leaf-columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getlefttotalsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getLeftTotalSize: () => number;
  /**
   * Returns the total size of the right portion of the table by calculating the sum of the sizes of all right leaf-columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getrighttotalsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getRightTotalSize: () => number;
  /**
   * Returns the total size of the table by calculating the sum of the sizes of all leaf-columns.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#gettotalsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getTotalSize: () => number;
  /**
   * Resets column sizing to its initial state. If `defaultState` is `true`, the default state for the table will be used instead of the initialValue provided to the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#resetcolumnsizing)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  resetColumnSizing: (defaultState?: boolean) => void;
  /**
   * Resets column sizing info to its initial state. If `defaultState` is `true`, the default state for the table will be used instead of the initialValue provided to the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#resetheadersizeinfo)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  resetHeaderSizeInfo: (defaultState?: boolean) => void;
  /**
   * Sets the column sizing state using an updater function or a value. This will trigger the underlying `onColumnSizingChange` function if one is passed to the table options, otherwise the state will be managed automatically by the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#setcolumnsizing)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  setColumnSizing: (updater: Updater<ColumnSizingState>) => void;
  /**
   * Sets the column sizing info state using an updater function or a value. This will trigger the underlying `onColumnSizingInfoChange` function if one is passed to the table options, otherwise the state will be managed automatically by the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#setcolumnsizinginfo)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  setColumnSizingInfo: (updater: Updater<ColumnSizingInfoState>) => void;
}
interface ColumnSizingColumnDef {
  /**
   * Enables or disables column resizing for the column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#enableresizing)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  enableResizing?: boolean;
  /**
   * The maximum allowed size for the column
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#maxsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  maxSize?: number;
  /**
   * The minimum allowed size for the column
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#minsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  minSize?: number;
  /**
   * The desired size for the column
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#size)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  size?: number;
}
interface ColumnSizingColumn {
  /**
   * Returns `true` if the column can be resized.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getcanresize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getCanResize: () => boolean;
  /**
   * Returns `true` if the column is currently being resized.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getisresizing)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getIsResizing: () => boolean;
  /**
   * Returns the current size of the column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getSize: () => number;
  /**
   * Returns the offset measurement along the row-axis (usually the x-axis for standard tables) for the header. This is effectively a sum of the offset measurements of all preceding (left) headers in relation to the current column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getstart)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getStart: (position?: ColumnPinningPosition | "center") => number;
  /**
   * Returns the offset measurement along the row-axis (usually the x-axis for standard tables) for the header. This is effectively a sum of the offset measurements of all succeeding (right) headers in relation to the current column.
   */
  getAfter: (position?: ColumnPinningPosition | "center") => number;
  /**
   * Resets the column to its initial size.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#resetsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  resetSize: () => void;
}
interface ColumnSizingHeader {
  /**
   * Returns an event handler function that can be used to resize the header. It can be used as an:
   * - `onMouseDown` handler
   * - `onTouchStart` handler
   *
   * The dragging and release events are automatically handled for you.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getresizehandler)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getResizeHandler: (context?: Document) => (event: unknown) => void;
  /**
   * Returns the current size of the header.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getsize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getSize: () => number;
  /**
   * Returns the offset measurement along the row-axis (usually the x-axis for standard tables) for the header. This is effectively a sum of the offset measurements of all preceding headers.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/column-sizing#getstart)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-sizing)
   */
  getStart: (position?: ColumnPinningPosition) => number;
}
declare const defaultColumnSizing: {
  size: number;
  minSize: number;
  maxSize: number;
};
declare const ColumnSizing: TableFeature;
declare function passiveEventSupported(): boolean;

interface PaginationState {
  pageIndex: number;
  pageSize: number;
}
interface PaginationTableState {
  pagination: PaginationState;
}
interface PaginationInitialTableState {
  pagination?: Partial<PaginationState>;
}
interface PaginationOptions {
  /**
   * If set to `true`, pagination will be reset to the first page when page-altering state changes eg. `data` is updated, filters change, grouping changes, etc.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#autoresetpageindex)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  autoResetPageIndex?: boolean;
  /**
   * Returns the row model after pagination has taken place, but no further.
   *
   * Pagination columns are automatically reordered by default to the start of the columns list. If you would rather remove them or leave them as-is, set the appropriate mode here.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getpaginationrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  getPaginationRowModel?: (table: Table<any>) => () => RowModel<any>;
  /**
   * Enables manual pagination. If this option is set to `true`, the table will not automatically paginate rows using `getPaginationRowModel()` and instead will expect you to manually paginate the rows before passing them to the table. This is useful if you are doing server-side pagination and aggregation.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#manualpagination)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  manualPagination?: boolean;
  /**
   * If this function is provided, it will be called when the pagination state changes and you will be expected to manage the state yourself. You can pass the managed state back to the table via the `tableOptions.state.pagination` option.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#onpaginationchange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  onPaginationChange?: OnChangeFn<PaginationState>;
  /**
   * When manually controlling pagination, you can supply a total `pageCount` value to the table if you know it (Or supply a `rowCount` and `pageCount` will be calculated). If you do not know how many pages there are, you can set this to `-1`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#pagecount)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  pageCount?: number;
  /**
   * When manually controlling pagination, you can supply a total `rowCount` value to the table if you know it. The `pageCount` can be calculated from this value and the `pageSize`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#rowcount)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  rowCount?: number;
}
interface PaginationDefaultOptions {
  onPaginationChange: OnChangeFn<PaginationState>;
}
interface PaginationInstance<TData extends RowData> {
  _autoResetPageIndex: () => void;
  _getPaginationRowModel?: () => RowModel<TData>;
  /**
   * Returns whether the table can go to the next page.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getcannextpage)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  getCanNextPage: () => boolean;
  /**
   * Returns whether the table can go to the previous page.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getcanpreviouspage)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  getCanPreviousPage: () => boolean;
  /**
   * Returns the page count. If manually paginating or controlling the pagination state, this will come directly from the `options.pageCount` table option, otherwise it will be calculated from the table data using the total row count and current page size.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getpagecount)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  getPageCount: () => number;
  /**
   * Returns the row count. If manually paginating or controlling the pagination state, this will come directly from the `options.rowCount` table option, otherwise it will be calculated from the table data.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getrowcount)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  getRowCount: () => number;
  /**
   * Returns an array of page options (zero-index-based) for the current page size.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getpageoptions)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  getPageOptions: () => number[];
  /**
   * Returns the row model for the table after pagination has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getpaginationrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  getPaginationRowModel: () => RowModel<TData>;
  /**
   * Returns the row model for the table before any pagination has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#getprepaginationrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  getPrePaginationRowModel: () => RowModel<TData>;
  /**
   * Increments the page index by one, if possible.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#nextpage)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  nextPage: () => void;
  /**
   * Decrements the page index by one, if possible.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#previouspage)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  previousPage: () => void;
  /**
   * Sets the page index to `0`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#firstpage)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  firstPage: () => void;
  /**
   * Sets the page index to the last page.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#lastpage)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  lastPage: () => void;
  /**
   * Resets the page index to its initial state. If `defaultState` is `true`, the page index will be reset to `0` regardless of initial state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#resetpageindex)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  resetPageIndex: (defaultState?: boolean) => void;
  /**
   * Resets the page size to its initial state. If `defaultState` is `true`, the page size will be reset to `10` regardless of initial state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#resetpagesize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  resetPageSize: (defaultState?: boolean) => void;
  /**
   * Resets the **pagination** state to `initialState.pagination`, or `true` can be passed to force a default blank state reset to `[]`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#resetpagination)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  resetPagination: (defaultState?: boolean) => void;
  /**
   * @deprecated The page count no longer exists in the pagination state. Just pass as a table option instead.
   */
  setPageCount: (updater: Updater<number>) => void;
  /**
   * Updates the page index using the provided function or value in the `state.pagination.pageIndex` state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#setpageindex)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  setPageIndex: (updater: Updater<number>) => void;
  /**
   * Updates the page size using the provided function or value in the `state.pagination.pageSize` state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#setpagesize)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  setPageSize: (updater: Updater<number>) => void;
  /**
   * Sets or updates the `state.pagination` state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/pagination#setpagination)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/pagination)
   */
  setPagination: (updater: Updater<PaginationState>) => void;
}
declare const RowPagination: TableFeature;

type RowSelectionState = Record<string, boolean>;
interface RowSelectionTableState {
  rowSelection: RowSelectionState;
}
interface RowSelectionOptions<TData extends RowData> {
  /**
   * - Enables/disables multiple row selection for all rows in the table OR
   * - A function that given a row, returns whether to enable/disable multiple row selection for that row's children/grandchildren
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#enablemultirowselection)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  enableMultiRowSelection?: boolean | ((row: Row<TData>) => boolean);
  /**
   * - Enables/disables row selection for all rows in the table OR
   * - A function that given a row, returns whether to enable/disable row selection for that row
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#enablerowselection)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
  /**
   * Enables/disables automatic sub-row selection when a parent row is selected, or a function that enables/disables automatic sub-row selection for each row.
   * (Use in combination with expanding or grouping features)
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#enablesubrowselection)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  enableSubRowSelection?: boolean | ((row: Row<TData>) => boolean);
  /**
   * If provided, this function will be called with an `updaterFn` when `state.rowSelection` changes. This overrides the default internal state management, so you will need to persist the state change either fully or partially outside of the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#onrowselectionchange)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
}
interface RowSelectionRow {
  /**
   * Returns whether or not the row can multi-select.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getcanmultiselect)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getCanMultiSelect: () => boolean;
  /**
   * Returns whether or not the row can be selected.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getcanselect)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getCanSelect: () => boolean;
  /**
   * Returns whether or not the row can select sub rows automatically when the parent row is selected.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getcanselectsubrows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getCanSelectSubRows: () => boolean;
  /**
   * Returns whether or not all of the row's sub rows are selected.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getisallsubrowsselected)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getIsAllSubRowsSelected: () => boolean;
  /**
   * Returns whether or not the row is selected.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getisselected)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getIsSelected: () => boolean;
  /**
   * Returns whether or not some of the row's sub rows are selected.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getissomeselected)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getIsSomeSelected: () => boolean;
  /**
   * Returns a handler that can be used to toggle the row.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#gettoggleselectedhandler)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getToggleSelectedHandler: () => (event: unknown) => void;
  /**
   * Selects/deselects the row.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#toggleselected)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  toggleSelected: (
    value?: boolean,
    opts?: {
      selectChildren?: boolean;
    },
  ) => void;
}
interface RowSelectionInstance<TData extends RowData> {
  /**
   * Returns the row model of all rows that are selected after filtering has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getfilteredselectedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getFilteredSelectedRowModel: () => RowModel<TData>;
  /**
   * Returns the row model of all rows that are selected after grouping has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getgroupedselectedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getGroupedSelectedRowModel: () => RowModel<TData>;
  /**
   * Returns whether or not all rows on the current page are selected.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getisallpagerowsselected)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getIsAllPageRowsSelected: () => boolean;
  /**
   * Returns whether or not all rows in the table are selected.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getisallrowsselected)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getIsAllRowsSelected: () => boolean;
  /**
   * Returns whether or not any rows on the current page are selected.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getissomepagerowsselected)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getIsSomePageRowsSelected: () => boolean;
  /**
   * Returns whether or not any rows in the table are selected.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getissomerowsselected)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getIsSomeRowsSelected: () => boolean;
  /**
   * Returns the core row model of all rows before row selection has been applied.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getpreselectedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getPreSelectedRowModel: () => RowModel<TData>;
  /**
   * Returns the row model of all rows that are selected.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#getselectedrowmodel)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getSelectedRowModel: () => RowModel<TData>;
  /**
   * Returns a handler that can be used to toggle all rows on the current page.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#gettoggleallpagerowsselectedhandler)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getToggleAllPageRowsSelectedHandler: () => (event: unknown) => void;
  /**
   * Returns a handler that can be used to toggle all rows in the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#gettoggleallrowsselectedhandler)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  getToggleAllRowsSelectedHandler: () => (event: unknown) => void;
  /**
   * Resets the **rowSelection** state to the `initialState.rowSelection`, or `true` can be passed to force a default blank state reset to `{}`.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#resetrowselection)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  resetRowSelection: (defaultState?: boolean) => void;
  /**
   * Sets or updates the `state.rowSelection` state.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#setrowselection)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  setRowSelection: (updater: Updater<RowSelectionState>) => void;
  /**
   * Selects/deselects all rows on the current page.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#toggleallpagerowsselected)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  toggleAllPageRowsSelected: (value?: boolean) => void;
  /**
   * Selects/deselects all rows in the table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/features/row-selection#toggleallrowsselected)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/row-selection)
   */
  toggleAllRowsSelected: (value?: boolean) => void;
}
declare const RowSelection: TableFeature;
declare function selectRowsFn<TData extends RowData>(
  table: Table<TData>,
  rowModel: RowModel<TData>,
): RowModel<TData>;
declare function isRowSelected<TData extends RowData>(
  row: Row<TData>,
  selection: Record<string, boolean>,
): boolean;
declare function isSubRowSelected<TData extends RowData>(
  row: Row<TData>,
  selection: Record<string, boolean>,
  table: Table<TData>,
): boolean | "some" | "all";

interface CoreRow<TData extends RowData> {
  _getAllCellsByColumnId: () => Record<string, Cell<TData, unknown>>;
  _uniqueValuesCache: Record<string, unknown>;
  _valuesCache: Record<string, unknown>;
  /**
   * The depth of the row (if nested or grouped) relative to the root row array.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#depth)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  depth: number;
  /**
   * Returns all of the cells for the row.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#getallcells)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  getAllCells: () => Cell<TData, unknown>[];
  /**
   * Returns the leaf rows for the row, not including any parent rows.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#getleafrows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  getLeafRows: () => Row<TData>[];
  /**
   * Returns the parent row for the row, if it exists.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#getparentrow)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  getParentRow: () => Row<TData> | undefined;
  /**
   * Returns the parent rows for the row, all the way up to a root row.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#getparentrows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  getParentRows: () => Row<TData>[];
  /**
   * Returns a unique array of values from the row for a given columnId.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#getuniquevalues)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  getUniqueValues: <TValue>(columnId: string) => TValue[];
  /**
   * Returns the value from the row for a given columnId.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#getvalue)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  getValue: <TValue>(columnId: string) => TValue;
  /**
   * The resolved unique identifier for the row resolved via the `options.getRowId` option. Defaults to the row's index (or relative index if it is a subRow).
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#id)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  id: string;
  /**
   * The index of the row within its parent array (or the root data array).
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#index)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  index: number;
  /**
   * The original row object provided to the table. If the row is a grouped row, the original row object will be the first original in the group.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#original)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  original: TData;
  /**
   * An array of the original subRows as returned by the `options.getSubRows` option.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#originalsubrows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  originalSubRows?: TData[];
  /**
   * If nested, this row's parent row id.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#parentid)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  parentId?: string;
  /**
   * Renders the value for the row in a given columnId the same as `getValue`, but will return the `renderFallbackValue` if no value is found.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#rendervalue)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  renderValue: <TValue>(columnId: string) => TValue;
  /**
   * An array of subRows for the row as returned and created by the `options.getSubRows` option.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/row#subrows)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/rows)
   */
  subRows: Row<TData>[];
}
declare const createRow: <TData extends unknown>(
  table: Table<TData>,
  id: string,
  original: TData,
  rowIndex: number,
  depth: number,
  subRows?: Row<TData>[],
  parentId?: string,
) => Row<TData>;

interface CellContext<TData extends RowData, TValue> {
  cell: Cell<TData, TValue>;
  column: Column<TData, TValue>;
  getValue: Getter<TValue>;
  renderValue: Getter<TValue | null>;
  row: Row<TData>;
  table: Table<TData>;
}
interface CoreCell<TData extends RowData, TValue> {
  /**
   * The associated Column object for the cell.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/cell#column)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/cells)
   */
  column: Column<TData, TValue>;
  /**
   * Returns the rendering context (or props) for cell-based components like cells and aggregated cells. Use these props with your framework's `flexRender` utility to render these using the template of your choice:
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/cell#getcontext)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/cells)
   */
  getContext: () => CellContext<TData, TValue>;
  /**
   * Returns the value for the cell, accessed via the associated column's accessor key or accessor function.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/cell#getvalue)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/cells)
   */
  getValue: CellContext<TData, TValue>["getValue"];
  /**
   * The unique ID for the cell across the entire table.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/cell#id)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/cells)
   */
  id: string;
  /**
   * Renders the value for a cell the same as `getValue`, but will return the `renderFallbackValue` if no value is found.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/cell#rendervalue)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/cells)
   */
  renderValue: CellContext<TData, TValue>["renderValue"];
  /**
   * The associated Row object for the cell.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/cell#row)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/cells)
   */
  row: Row<TData>;
}
declare function createCell<TData extends RowData, TValue>(
  table: Table<TData>,
  row: Row<TData>,
  column: Column<TData, TValue>,
  columnId: string,
): Cell<TData, TValue>;

interface CoreColumn<TData extends RowData, TValue> {
  /**
   * The resolved accessor function to use when extracting the value for the column from each row. Will only be defined if the column def has a valid accessor key or function defined.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/column#accessorfn)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-defs)
   */
  accessorFn?: AccessorFn<TData, TValue>;
  /**
   * The original column def used to create the column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/column#columndef)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-defs)
   */
  columnDef: ColumnDef<TData, TValue>;
  /**
   * The child column (if the column is a group column). Will be an empty array if the column is not a group column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/column#columns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-defs)
   */
  columns: Column<TData, TValue>[];
  /**
   * The depth of the column (if grouped) relative to the root column def array.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/column#depth)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-defs)
   */
  depth: number;
  /**
   * Returns the flattened array of this column and all child/grand-child columns for this column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/column#getflatcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-defs)
   */
  getFlatColumns: () => Column<TData, TValue>[];
  /**
   * Returns an array of all leaf-node columns for this column. If a column has no children, it is considered the only leaf-node column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/column#getleafcolumns)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-defs)
   */
  getLeafColumns: () => Column<TData, TValue>[];
  /**
     * The resolved unique identifier for the column resolved in this priority:
        - A manual `id` property from the column def
        - The accessor key from the column def
        - The header string from the column def
     * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/column#id)
     * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-defs)
     */
  id: string;
  /**
   * The parent column for this column. Will be undefined if this is a root column.
   * @link [API Docs](https://tanstack.com/table/v8/docs/api/core/column#parent)
   * @link [Guide](https://tanstack.com/table/v8/docs/guide/column-defs)
   */
  parent?: Column<TData, TValue>;
}
declare function createColumn<TData extends RowData, TValue>(
  table: Table<TData>,
  columnDef: ColumnDef<TData, TValue>,
  depth: number,
  parent?: Column<TData, TValue>,
): Column<TData, TValue>;

interface TableFeature<TData extends RowData = any> {
  createCell?: (
    cell: Cell<TData, unknown>,
    column: Column<TData>,
    row: Row<TData>,
    table: Table<TData>,
  ) => void;
  createColumn?: (column: Column<TData, unknown>, table: Table<TData>) => void;
  createHeader?: (header: Header<TData, unknown>, table: Table<TData>) => void;
  createRow?: (row: Row<TData>, table: Table<TData>) => void;
  createTable?: (table: Table<TData>) => void;
  getDefaultColumnDef?: () => Partial<ColumnDef<TData, unknown>>;
  getDefaultOptions?: (
    table: Table<TData>,
  ) => Partial<TableOptionsResolved<TData>>;
  getInitialState?: (initialState?: InitialTableState) => Partial<TableState>;
}
interface TableMeta<TData extends RowData> {}
interface ColumnMeta<TData extends RowData, TValue> {}
interface FilterMeta {}
interface FilterFns {}
interface SortingFns {}
interface AggregationFns {}
type Updater<T> = T | ((old: T) => T);
type OnChangeFn<T> = (updaterOrValue: Updater<T>) => void;
type RowData = unknown | object | any[];
type AnyRender = (Comp: any, props: any) => any;
interface Table<TData extends RowData>
  extends
    CoreInstance<TData>,
    HeadersInstance<TData>,
    VisibilityInstance<TData>,
    ColumnOrderInstance<TData>,
    ColumnPinningInstance<TData>,
    RowPinningInstance<TData>,
    ColumnFiltersInstance<TData>,
    GlobalFilterInstance<TData>,
    GlobalFacetingInstance<TData>,
    SortingInstance<TData>,
    GroupingInstance<TData>,
    ColumnSizingInstance,
    ExpandedInstance<TData>,
    PaginationInstance<TData>,
    RowSelectionInstance<TData> {}
interface FeatureOptions<TData extends RowData>
  extends
    VisibilityOptions,
    ColumnOrderOptions,
    ColumnPinningOptions,
    RowPinningOptions<TData>,
    FacetedOptions<TData>,
    ColumnFiltersOptions<TData>,
    GlobalFilterOptions<TData>,
    SortingOptions<TData>,
    GroupingOptions,
    ExpandedOptions<TData>,
    ColumnSizingOptions,
    PaginationOptions,
    RowSelectionOptions<TData> {}
interface TableOptionsResolved<TData extends RowData>
  extends CoreOptions<TData>, FeatureOptions<TData> {}
interface TableOptions<TData extends RowData> extends PartialKeys<
  TableOptionsResolved<TData>,
  "state" | "onStateChange" | "renderFallbackValue"
> {}
interface TableState
  extends
    CoreTableState,
    VisibilityTableState,
    ColumnOrderTableState,
    ColumnPinningTableState,
    RowPinningTableState,
    ColumnFiltersTableState,
    GlobalFilterTableState,
    SortingTableState,
    ExpandedTableState,
    GroupingTableState,
    ColumnSizingTableState,
    PaginationTableState,
    RowSelectionTableState {}
interface CompleteInitialTableState
  extends
    CoreTableState,
    VisibilityTableState,
    ColumnOrderTableState,
    ColumnPinningTableState,
    RowPinningTableState,
    ColumnFiltersTableState,
    GlobalFilterTableState,
    SortingTableState,
    ExpandedTableState,
    GroupingTableState,
    ColumnSizingTableState,
    PaginationInitialTableState,
    RowSelectionTableState {}
interface InitialTableState extends Partial<CompleteInitialTableState> {}
interface Row<TData extends RowData>
  extends
    CoreRow<TData>,
    VisibilityRow<TData>,
    ColumnPinningRow<TData>,
    RowPinningRow,
    ColumnFiltersRow<TData>,
    GroupingRow,
    RowSelectionRow,
    ExpandedRow {}
interface RowModel<TData extends RowData> {
  rows: Row<TData>[];
  flatRows: Row<TData>[];
  rowsById: Record<string, Row<TData>>;
}
type AccessorFn<TData extends RowData, TValue = unknown> = (
  originalRow: TData,
  index: number,
) => TValue;
type ColumnDefTemplate<TProps extends object> =
  | string
  | ((props: TProps) => any);
type StringOrTemplateHeader<TData, TValue> =
  | string
  | ColumnDefTemplate<HeaderContext<TData, TValue>>;
interface StringHeaderIdentifier {
  header: string;
  id?: string;
}
interface IdIdentifier<TData extends RowData, TValue> {
  id: string;
  header?: StringOrTemplateHeader<TData, TValue>;
}
type ColumnIdentifiers<TData extends RowData, TValue> =
  | IdIdentifier<TData, TValue>
  | StringHeaderIdentifier;
interface ColumnDefExtensions<TData extends RowData, TValue = unknown>
  extends
    VisibilityColumnDef,
    ColumnPinningColumnDef,
    ColumnFiltersColumnDef<TData>,
    GlobalFilterColumnDef,
    SortingColumnDef<TData>,
    GroupingColumnDef<TData, TValue>,
    ColumnSizingColumnDef {}
interface ColumnDefBase<
  TData extends RowData,
  TValue = unknown,
> extends ColumnDefExtensions<TData, TValue> {
  getUniqueValues?: AccessorFn<TData, unknown[]>;
  footer?: ColumnDefTemplate<HeaderContext<TData, TValue>>;
  cell?: ColumnDefTemplate<CellContext<TData, TValue>>;
  meta?: ColumnMeta<TData, TValue>;
}
interface IdentifiedColumnDef<
  TData extends RowData,
  TValue = unknown,
> extends ColumnDefBase<TData, TValue> {
  id?: string;
  header?: StringOrTemplateHeader<TData, TValue>;
}
type DisplayColumnDef<TData extends RowData, TValue = unknown> = ColumnDefBase<
  TData,
  TValue
> &
  ColumnIdentifiers<TData, TValue>;
interface GroupColumnDefBase<
  TData extends RowData,
  TValue = unknown,
> extends ColumnDefBase<TData, TValue> {
  columns?: ColumnDef<TData, any>[];
}
type GroupColumnDef<
  TData extends RowData,
  TValue = unknown,
> = GroupColumnDefBase<TData, TValue> & ColumnIdentifiers<TData, TValue>;
interface AccessorFnColumnDefBase<
  TData extends RowData,
  TValue = unknown,
> extends ColumnDefBase<TData, TValue> {
  accessorFn: AccessorFn<TData, TValue>;
}
type AccessorFnColumnDef<
  TData extends RowData,
  TValue = unknown,
> = AccessorFnColumnDefBase<TData, TValue> & ColumnIdentifiers<TData, TValue>;
interface AccessorKeyColumnDefBase<
  TData extends RowData,
  TValue = unknown,
> extends ColumnDefBase<TData, TValue> {
  id?: string;
  accessorKey: (string & {}) | keyof TData;
}
type AccessorKeyColumnDef<
  TData extends RowData,
  TValue = unknown,
> = AccessorKeyColumnDefBase<TData, TValue> &
  Partial<ColumnIdentifiers<TData, TValue>>;
type AccessorColumnDef<TData extends RowData, TValue = unknown> =
  | AccessorKeyColumnDef<TData, TValue>
  | AccessorFnColumnDef<TData, TValue>;
type ColumnDef<TData extends RowData, TValue = unknown> =
  | DisplayColumnDef<TData, TValue>
  | GroupColumnDef<TData, TValue>
  | AccessorColumnDef<TData, TValue>;
type ColumnDefResolved<TData extends RowData, TValue = unknown> = Partial<
  UnionToIntersection<ColumnDef<TData, TValue>>
> & {
  accessorKey?: string;
};
interface Column<TData extends RowData, TValue = unknown>
  extends
    CoreColumn<TData, TValue>,
    VisibilityColumn,
    ColumnPinningColumn,
    FacetedColumn<TData>,
    ColumnFiltersColumn<TData>,
    GlobalFilterColumn,
    SortingColumn<TData>,
    GroupingColumn<TData>,
    ColumnSizingColumn,
    ColumnOrderColumn {}
interface Cell<TData extends RowData, TValue>
  extends CoreCell<TData, TValue>, GroupingCell {}
interface Header<TData extends RowData, TValue>
  extends CoreHeader<TData, TValue>, ColumnSizingHeader {}
interface HeaderGroup<TData extends RowData> extends CoreHeaderGroup<TData> {}

type ColumnHelper<TData extends RowData> = {
  accessor: <
    TAccessor extends AccessorFn<TData> | DeepKeys<TData>,
    TValue extends TAccessor extends AccessorFn<TData, infer TReturn>
      ? TReturn
      : TAccessor extends DeepKeys<TData>
        ? DeepValue<TData, TAccessor>
        : never,
  >(
    accessor: TAccessor,
    column: TAccessor extends AccessorFn<TData>
      ? DisplayColumnDef<TData, TValue>
      : IdentifiedColumnDef<TData, TValue>,
  ) => TAccessor extends AccessorFn<TData>
    ? AccessorFnColumnDef<TData, TValue>
    : AccessorKeyColumnDef<TData, TValue>;
  display: (
    column: DisplayColumnDef<TData>,
  ) => DisplayColumnDef<TData, unknown>;
  group: (column: GroupColumnDef<TData>) => GroupColumnDef<TData, unknown>;
};
declare function createColumnHelper<
  TData extends RowData,
>(): ColumnHelper<TData>;

declare function getCoreRowModel<TData extends RowData>(): (
  table: Table<TData>,
) => () => RowModel<TData>;

declare function getExpandedRowModel<TData extends RowData>(): (
  table: Table<TData>,
) => () => RowModel<TData>;
declare function expandRows<TData extends RowData>(
  rowModel: RowModel<TData>,
): {
  rows: Row<TData>[];
  flatRows: Row<TData>[];
  rowsById: Record<string, Row<TData>>;
};

declare function getFacetedMinMaxValues<TData extends RowData>(): (
  table: Table<TData>,
  columnId: string,
) => () => undefined | [number, number];

declare function getFacetedRowModel<TData extends RowData>(): (
  table: Table<TData>,
  columnId: string,
) => () => RowModel<TData>;

declare function getFacetedUniqueValues<TData extends RowData>(): (
  table: Table<TData>,
  columnId: string,
) => () => Map<any, number>;

declare function getFilteredRowModel<TData extends RowData>(): (
  table: Table<TData>,
) => () => RowModel<TData>;

declare function getGroupedRowModel<TData extends RowData>(): (
  table: Table<TData>,
) => () => RowModel<TData>;

declare function getPaginationRowModel<TData extends RowData>(opts?: {
  initialSync: boolean;
}): (table: Table<TData>) => () => RowModel<TData>;

declare function getSortedRowModel<TData extends RowData>(): (
  table: Table<TData>,
) => () => RowModel<TData>;

type Renderable<TProps> = React.ReactNode | React.ComponentType<TProps>;
/**
 * If rendering headers, cells, or footers with custom markup, use flexRender instead of `cell.getValue()` or `cell.renderValue()`.
 */
declare function flexRender<TProps extends object>(
  Comp: Renderable<TProps>,
  props: TProps,
): React.ReactNode | React.JSX.Element;
declare function useReactTable<TData extends RowData>(
  options: TableOptions<TData>,
): Table<TData>;

export {
  type AccessorColumnDef,
  type AccessorFn,
  type AccessorFnColumnDef,
  type AccessorFnColumnDefBase,
  type AccessorKeyColumnDef,
  type AccessorKeyColumnDefBase,
  type AggregationFn,
  type AggregationFnOption,
  type AggregationFns,
  type AnyRender,
  type BuiltInAggregationFn,
  type BuiltInFilterFn,
  type BuiltInSortingFn,
  type Cell,
  type CellContext,
  type Column,
  type ColumnDef,
  type ColumnDefBase,
  type ColumnDefResolved,
  type ColumnDefTemplate,
  type ColumnDefaultOptions,
  ColumnFaceting,
  type ColumnFilter,
  type ColumnFilterAutoRemoveTestFn,
  ColumnFiltering,
  type ColumnFiltersColumn,
  type ColumnFiltersColumnDef,
  type ColumnFiltersInstance,
  type ColumnFiltersOptions,
  type ColumnFiltersRow,
  type ColumnFiltersState,
  type ColumnFiltersTableState,
  ColumnGrouping,
  type ColumnHelper,
  type ColumnMeta,
  type ColumnOrderColumn,
  type ColumnOrderDefaultOptions,
  type ColumnOrderInstance,
  type ColumnOrderOptions,
  type ColumnOrderState,
  type ColumnOrderTableState,
  ColumnOrdering,
  ColumnPinning,
  type ColumnPinningColumn,
  type ColumnPinningColumnDef,
  type ColumnPinningDefaultOptions,
  type ColumnPinningInstance,
  type ColumnPinningOptions,
  type ColumnPinningPosition,
  type ColumnPinningRow,
  type ColumnPinningState,
  type ColumnPinningTableState,
  type ColumnResizeDirection,
  type ColumnResizeMode,
  ColumnSizing,
  type ColumnSizingColumn,
  type ColumnSizingColumnDef,
  type ColumnSizingDefaultOptions,
  type ColumnSizingHeader,
  type ColumnSizingInfoState,
  type ColumnSizingInstance,
  type ColumnSizingOptions,
  type ColumnSizingState,
  type ColumnSizingTableState,
  type ColumnSort,
  ColumnVisibility,
  type CoreCell,
  type CoreColumn,
  type CoreHeader,
  type CoreHeaderGroup,
  type CoreInstance,
  type CoreOptions,
  type CoreRow,
  type CoreTableState,
  type CustomAggregationFns,
  type CustomFilterFns,
  type CustomSortingFns,
  type DeepKeys,
  type DeepValue,
  type DisplayColumnDef,
  type ExpandedInstance,
  type ExpandedOptions,
  type ExpandedRow,
  type ExpandedState,
  type ExpandedStateList,
  type ExpandedTableState,
  type FacetedColumn,
  type FacetedOptions,
  type FilterFn,
  type FilterFnOption,
  type FilterFns,
  type FilterMeta,
  type Getter,
  GlobalFaceting,
  type GlobalFacetingInstance,
  type GlobalFilterColumn,
  type GlobalFilterColumnDef,
  type GlobalFilterInstance,
  type GlobalFilterOptions,
  type GlobalFilterTableState,
  GlobalFiltering,
  type GroupColumnDef,
  type GroupingCell,
  type GroupingColumn,
  type GroupingColumnDef,
  type GroupingColumnMode,
  type GroupingInstance,
  type GroupingOptions,
  type GroupingRow,
  type GroupingState,
  type GroupingTableState,
  type Header,
  type HeaderContext,
  type HeaderGroup,
  Headers,
  type HeadersInstance,
  type IdIdentifier,
  type IdentifiedColumnDef,
  type InitialTableState,
  type IsAny,
  type IsKnown,
  type NoInfer,
  type OnChangeFn,
  type Overwrite,
  type PaginationDefaultOptions,
  type PaginationInitialTableState,
  type PaginationInstance,
  type PaginationOptions,
  type PaginationState,
  type PaginationTableState,
  type PartialKeys,
  type Renderable,
  type RequiredKeys,
  type ResolvedColumnFilter,
  type Row,
  type RowData,
  RowExpanding,
  type RowModel,
  RowPagination,
  RowPinning,
  type RowPinningDefaultOptions,
  type RowPinningInstance,
  type RowPinningOptions,
  type RowPinningPosition,
  type RowPinningRow,
  type RowPinningState,
  type RowPinningTableState,
  RowSelection,
  type RowSelectionInstance,
  type RowSelectionOptions,
  type RowSelectionRow,
  type RowSelectionState,
  type RowSelectionTableState,
  RowSorting,
  type SortDirection,
  type SortingColumn,
  type SortingColumnDef,
  type SortingFn,
  type SortingFnOption,
  type SortingFns,
  type SortingInstance,
  type SortingOptions,
  type SortingState,
  type SortingTableState,
  type StringHeaderIdentifier,
  type StringOrTemplateHeader,
  type Table,
  type TableFeature,
  type TableMeta,
  type TableOptions,
  type TableOptionsResolved,
  type TableState,
  type TransformFilterValueFn,
  type UnionToIntersection,
  type Updater,
  type VisibilityColumn,
  type VisibilityColumnDef,
  type VisibilityDefaultOptions,
  type VisibilityInstance,
  type VisibilityOptions,
  type VisibilityRow,
  type VisibilityState,
  type VisibilityTableState,
  _getVisibleLeafColumns,
  aggregationFns,
  buildHeaderGroups,
  createCell,
  createColumn,
  createColumnHelper,
  createRow,
  createTable,
  defaultColumnSizing,
  expandRows,
  filterFns,
  flattenBy,
  flexRender,
  functionalUpdate,
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getGroupedRowModel,
  getMemoOptions,
  getPaginationRowModel,
  getSortedRowModel,
  isFunction,
  isNumberArray,
  isRowSelected,
  isSubRowSelected,
  makeStateUpdater,
  memo,
  noop,
  orderColumns,
  passiveEventSupported,
  reSplitAlphaNumeric,
  selectRowsFn,
  shouldAutoRemoveFilter,
  sortingFns,
  useReactTable,
};
