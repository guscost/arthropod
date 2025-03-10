define(["require", "exports", "react/jsx-runtime", "react", "recharts", "@/lib/utils"], function (require, exports, jsx_runtime_1, React, RechartsPrimitive, utils_1) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChartStyle = exports.ChartLegend = exports.ChartTooltip = void 0;
    exports.ChartContainer = ChartContainer;
    exports.ChartTooltipContent = ChartTooltipContent;
    exports.ChartLegendContent = ChartLegendContent;
    // Format: { THEME_NAME: CSS_SELECTOR }
    const THEMES = { light: "", dark: ".dark" };
    const ChartContext = React.createContext(null);
    function useChart() {
        const context = React.useContext(ChartContext);
        if (!context) {
            throw new Error("useChart must be used within a <ChartContainer />");
        }
        return context;
    }
    function ChartContainer({ id, className, children, config, ...props }) {
        const uniqueId = React.useId();
        const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
        return ((0, jsx_runtime_1.jsx)(ChartContext.Provider, { value: { config }, children: (0, jsx_runtime_1.jsxs)("div", { "data-slot": "chart", "data-chart": chartId, className: (0, utils_1.cn)("[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", className), ...props, children: [(0, jsx_runtime_1.jsx)(ChartStyle, { id: chartId, config: config }), (0, jsx_runtime_1.jsx)(RechartsPrimitive.ResponsiveContainer, { children: children })] }) }));
    }
    const ChartStyle = ({ id, config }) => {
        const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);
        if (!colorConfig.length) {
            return null;
        }
        return ((0, jsx_runtime_1.jsx)("style", { dangerouslySetInnerHTML: {
                __html: Object.entries(THEMES)
                    .map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
                    .map(([key, itemConfig]) => {
                    var _a;
                    const color = ((_a = itemConfig.theme) === null || _a === void 0 ? void 0 : _a[theme]) ||
                        itemConfig.color;
                    return color ? `  --color-${key}: ${color};` : null;
                })
                    .join("\n")}
}
`)
                    .join("\n"),
            } }));
    };
    exports.ChartStyle = ChartStyle;
    const ChartTooltip = RechartsPrimitive.Tooltip;
    exports.ChartTooltip = ChartTooltip;
    function ChartTooltipContent({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, }) {
        const { config } = useChart();
        const tooltipLabel = React.useMemo(() => {
            var _a;
            if (hideLabel || !(payload === null || payload === void 0 ? void 0 : payload.length)) {
                return null;
            }
            const [item] = payload;
            const key = `${labelKey || (item === null || item === void 0 ? void 0 : item.dataKey) || (item === null || item === void 0 ? void 0 : item.name) || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const value = !labelKey && typeof label === "string"
                ? ((_a = config[label]) === null || _a === void 0 ? void 0 : _a.label) || label
                : itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label;
            if (labelFormatter) {
                return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("font-medium", labelClassName), children: labelFormatter(value, payload) }));
            }
            if (!value) {
                return null;
            }
            return (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("font-medium", labelClassName), children: value });
        }, [
            label,
            labelFormatter,
            payload,
            hideLabel,
            labelClassName,
            config,
            labelKey,
        ]);
        if (!active || !(payload === null || payload === void 0 ? void 0 : payload.length)) {
            return null;
        }
        const nestLabel = payload.length === 1 && indicator !== "dot";
        return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl", className), children: [!nestLabel ? tooltipLabel : null, (0, jsx_runtime_1.jsx)("div", { className: "grid gap-1.5", children: payload.map((item, index) => {
                        const key = `${nameKey || item.name || item.dataKey || "value"}`;
                        const itemConfig = getPayloadConfigFromPayload(config, item, key);
                        const indicatorColor = color || item.payload.fill || item.color;
                        return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5", indicator === "dot" && "items-center"), children: formatter && (item === null || item === void 0 ? void 0 : item.value) !== undefined && item.name ? (formatter(item.value, item.name, item, index, item.payload)) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.icon) ? ((0, jsx_runtime_1.jsx)(itemConfig.icon, {})) : (!hideIndicator && ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
                                            "h-2.5 w-2.5": indicator === "dot",
                                            "w-1": indicator === "line",
                                            "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                                            "my-0.5": nestLabel && indicator === "dashed",
                                        }), style: {
                                            "--color-bg": indicatorColor,
                                            "--color-border": indicatorColor,
                                        } }))), (0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center"), children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid gap-1.5", children: [nestLabel ? tooltipLabel : null, (0, jsx_runtime_1.jsx)("span", { className: "text-muted-foreground", children: (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label) || item.name })] }), item.value && ((0, jsx_runtime_1.jsx)("span", { className: "text-foreground font-mono font-medium tabular-nums", children: item.value.toLocaleString() }))] })] })) }, item.dataKey));
                    }) })] }));
    }
    const ChartLegend = RechartsPrimitive.Legend;
    exports.ChartLegend = ChartLegend;
    function ChartLegendContent({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey, }) {
        const { config } = useChart();
        if (!(payload === null || payload === void 0 ? void 0 : payload.length)) {
            return null;
        }
        return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className), children: payload.map((item) => {
                const key = `${nameKey || item.dataKey || "value"}`;
                const itemConfig = getPayloadConfigFromPayload(config, item, key);
                return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"), children: [(itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.icon) && !hideIcon ? ((0, jsx_runtime_1.jsx)(itemConfig.icon, {})) : ((0, jsx_runtime_1.jsx)("div", { className: "h-2 w-2 shrink-0 rounded-[2px]", style: {
                                backgroundColor: item.color,
                            } })), itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label] }, item.value));
            }) }));
    }
    // Helper to extract item config from a payload.
    function getPayloadConfigFromPayload(config, payload, key) {
        if (typeof payload !== "object" || payload === null) {
            return undefined;
        }
        const payloadPayload = "payload" in payload &&
            typeof payload.payload === "object" &&
            payload.payload !== null
            ? payload.payload
            : undefined;
        let configLabelKey = key;
        if (key in payload &&
            typeof payload[key] === "string") {
            configLabelKey = payload[key];
        }
        else if (payloadPayload &&
            key in payloadPayload &&
            typeof payloadPayload[key] === "string") {
            configLabelKey = payloadPayload[key];
        }
        return configLabelKey in config
            ? config[configLabelKey]
            : config[key];
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy91aS9jaGFydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUFBLFlBQVksQ0FBQzs7OztJQTBWWCx3Q0FBYztJQUVkLGtEQUFtQjtJQUVuQixnREFBa0I7SUF2VnBCLHVDQUF1QztJQUN2QyxNQUFNLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBVyxDQUFDO0lBZ0JyRCxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUEyQixJQUFJLENBQUMsQ0FBQztJQUV6RSxTQUFTLFFBQVE7UUFDZixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELFNBQVMsY0FBYyxDQUFDLEVBQ3RCLEVBQUUsRUFDRixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixHQUFHLEtBQUssRUFNVDtRQUNDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixNQUFNLE9BQU8sR0FBRyxTQUFTLEVBQUUsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBRTVELE9BQU8sQ0FDTCx1QkFBQyxZQUFZLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxZQUN0Qyw4Q0FDWSxPQUFPLGdCQUNMLE9BQU8sRUFDbkIsU0FBUyxFQUFFLElBQUEsVUFBRSxFQUNYLDZwQkFBNnBCLEVBQzdwQixTQUFTLENBQ1YsS0FDRyxLQUFLLGFBRVQsdUJBQUMsVUFBVSxJ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QUFDO1FBRWpDLElBQ0UsR0FBRyxJQUFJLE9BQU87WUFDZCxPQUFPLE9BQU8sQ0FBQyxHQUEyQixDQUFDLEtBQUssUUFBUSxFQUN4RCxDQUFDO1lBQ0QsY0FBYyxHQUFHLE9BQU8sQ0FBQyxHQUEyQixDQUFXLENBQUM7UUFDbEUsQ0FBQzthQUFNLElBQ0wsY0FBYztZQUNkLEdBQUcsSUFBSSxjQUFjO1lBQ3JCLE9BQU8sY0FBYyxDQUFDLEdBQWtDLENBQUMsS0FBSyxRQUFRLEVBQ3RFLENBQUM7WUFDRCxjQUFjLEdBQUcsY0FBYyxDQUM3QixHQUFrQyxDQUN6QixDQUFDO1FBQ2QsQ0FBQztRQUVELE9BQU8sY0FBYyxJQUFJLE1BQU07WUFDN0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDeEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUEwQixDQUFDLENBQUM7SUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlY2hhcnRzUHJpbWl0aXZlIGZyb20gXCJyZWNoYXJ0c1wiO1xuXG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG4vLyBGb3JtYXQ6IHsgVEhFTUVfTkFNRTogQ1NTX1NFTEVDVE9SIH1cbmNvbnN0IFRIRU1FUyA9IHsgbGlnaHQ6IFwiXCIsIGRhcms6IFwiLmRhcmtcIiB9IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBDaGFydENvbmZpZyA9IHtcbiAgW2sgaW4gc3RyaW5nXToge1xuICAgIGxhYmVsPzogUmVhY3QuUmVhY3ROb2RlO1xuICAgIGljb24/OiBSZWFjdC5Db21wb25lbnRUeXBlO1xuICB9ICYgKFxuICAgIHwgeyBjb2xvcj86IHN0cmluZzsgdGhlbWU/OiBuZXZlciB9XG4gICAgfCB7IGNvbG9yPzogbmV2ZXI7IHRoZW1lOiBSZWNvcmQ8a2V5b2YgdHlwZW9mIFRIRU1FUywgc3RyaW5nPiB9XG4gICk7XG59O1xuXG50eXBlIENoYXJ0Q29udGV4dFByb3BzID0ge1xuICBjb25maWc6IENoYXJ0Q29uZmlnO1xufTtcblxuY29uc3QgQ2hhcnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxDaGFydENvbnRleHRQcm9wcyB8IG51bGw+KG51bGwpO1xuXG5mdW5jdGlvbiB1c2VDaGFydCgpIHtcbiAgY29uc3QgY29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoQ2hhcnRDb250ZXh0KTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VDaGFydCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgPENoYXJ0Q29udGFpbmVyIC8+XCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIENoYXJ0Q29udGFpbmVyKHtcbiAgaWQsXG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIGNvbmZpZyxcbiAgLi4ucHJvcHNcbn06IFJlYWN0LkNvbXBvbmVudFByb3BzPFwiZGl2XCI+ICYge1xuICBjb25maWc6IENoYXJ0Q29uZmlnO1xuICBjaGlsZHJlbjogUmVhY3QuQ29tcG9uZW50UHJvcHM8XG4gICAgdHlwZW9mIFJlY2hhcnRzUHJpbWl0aXZlLlJlc3BvbnNpdmVDb250YWluZXJcbiAgPltcImNoaWxkcmVuXCJdO1xufSkge1xuICBjb25zdCB1bmlxdWVJZCA9IFJlYWN0LnVzZUlkKCk7XG4gIGNvbnN0IGNoYXJ0SWQgPSBgY2hhcnQtJHtpZCB8fCB1bmlxdWVJZC5yZXBsYWNlKC86L2csIFwiXCIpfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGNvbmZpZyB9fT5cbiAgICAgIDxkaXZcbiAgICAgICAgZGF0YS1zbG90PVwiY2hhcnRcIlxuICAgICAgICBkYXRhLWNoYXJ0PXtjaGFydElkfVxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiWyZfLnJlY2hhcnRzLWNhcnRlc2lhbi1heGlzLXRpY2tfdGV4dF06ZmlsbC1tdXRlZC1mb3JlZ3JvdW5kIFsmXy5yZWNoYXJ0cy1jYXJ0ZXNpYW4tZ3JpZF9saW5lW3N0cm9rZT0nI2NjYyddXTpzdHJva2UtYm9yZGVyLzUwIFsmXy5yZWNoYXJ0cy1jdXJ2ZS5yZWNoYXJ0cy10b29sdGlwLWN1cnNvcl06c3Ryb2tlLWJvcmRlciBbJl8ucmVjaGFydHMtcG9sYXItZ3JpZF9bc3Ryb2tlPScjY2NjJ11dOnN0cm9rZS1ib3JkZXIgWyZfLnJlY2hhcnRzLXJhZGlhbC1iYXItYmFja2dyb3VuZC1zZWN0b3JdOmZpbGwtbXV0ZWQgWyZfLnJlY2hhcnRzLXJlY3RhbmdsZS5yZWNoYXJ0cy10b29sdGlwLWN1cnNvcl06ZmlsbC1tdXRlZCBbJl8ucmVjaGFydHMtcmVmZXJlbmNlLWxpbmVfW3N0cm9rZT0nI2NjYyddXTpzdHJva2UtYm9yZGVyIGZsZXggYXNwZWN0LXZpZGVvIGp1c3RpZnktY2VudGVyIHRleHQteHMgWyZfLnJlY2hhcnRzLWRvdFtzdHJva2U9JyNmZmYnXV06c3Ryb2tlLXRyYW5zcGFyZW50IFsmXy5yZWNoYXJ0cy1sYXllcl06b3V0bGluZS1oaWRkZW4gWyZfLnJlY2hhcnRzLXNlY3Rvcl06b3V0bGluZS1oaWRkZW4gWyZfLnJlY2hhcnRzLXNlY3RvcltzdHJva2U9JyNmZmYnXV06c3Ryb2tlLXRyYW5zcGFyZW50IFsmXy5yZWNoYXJ0cy1zdXJmYWNlXTpvdXRsaW5lLWhpZGRlblwiLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8Q2hhcnRTdHlsZSBpZD17Y2hhcnRJZH0gY29uZmlnPXtjb25maWd9IC8+XG4gICAgICAgIDxSZWNoYXJ0c1ByaW1pdGl2ZS5SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9SZWNoYXJ0c1ByaW1pdGl2ZS5SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9DaGFydENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmNvbnN0IENoYXJ0U3R5bGUgPSAoeyBpZCwgY29uZmlnIH06IHsgaWQ6IHN0cmluZzsgY29uZmlnOiBDaGFydENvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IGNvbG9yQ29uZmlnID0gT2JqZWN0LmVudHJpZXMoY29uZmlnKS5maWx0ZXIoXG4gICAgKFssIGNvbmZpZ10pID0+IGNvbmZpZy50aGVtZSB8fCBjb25maWcuY29sb3IsXG4gICk7XG5cbiAgaWYgKCFjb2xvckNvbmZpZy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHN0eWxlXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICBfX2h0bWw6IE9iamVjdC5lbnRyaWVzKFRIRU1FUylcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgKFt0aGVtZSwgcHJlZml4XSkgPT4gYFxuJHtwcmVmaXh9IFtkYXRhLWNoYXJ0PSR7aWR9XSB7XG4ke2NvbG9yQ29uZmlnXG4gIC5tYXAoKFtrZXksIGl0ZW1Db25maWddKSA9PiB7XG4gICAgY29uc3QgY29sb3IgPVxuICAgICAgaXRlbUNvbmZpZy50aGVtZT8uW3RoZW1lIGFzIGtleW9mIHR5cGVvZiBpdGVtQ29uZmlnLnRoZW1lXSB8fFxuICAgICAgaXRlbUNvbmZpZy5jb2xvcjtcbiAgICByZXR1cm4gY29sb3IgPyBgICAtLWNvbG9yLSR7a2V5fTogJHtjb2xvcn07YCA6IG51bGw7XG4gIH0pXG4gIC5qb2luKFwiXFxuXCIpfVxufVxuYCxcbiAgICAgICAgICApXG4gICAgICAgICAgLmpvaW4oXCJcXG5cIiksXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5jb25zdCBDaGFydFRvb2x0aXAgPSBSZWNoYXJ0c1ByaW1pdGl2ZS5Ub29sdGlwO1xuXG5mdW5jdGlvbiBDaGFydFRvb2x0aXBDb250ZW50KHtcbiAgYWN0aXZlLFxuICBwYXlsb2FkLFxuICBjbGFzc05hbWUsXG4gIGluZGljYXRvciA9IFwiZG90XCIsXG4gIGhpZGVMYWJlbCA9IGZhbHNlLFxuICBoaWRlSW5kaWNhdG9yID0gZmFsc2UsXG4gIGxhYmVsLFxuICBsYWJlbEZvcm1hdHRlcixcbiAgbGFiZWxDbGFzc05hbWUsXG4gIGZvcm1hdHRlcixcbiAgY29sb3IsXG4gIG5hbWVLZXksXG4gIGxhYmVsS2V5LFxufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIFJlY2hhcnRzUHJpbWl0aXZlLlRvb2x0aXA+ICZcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHM8XCJkaXZcIj4gJiB7XG4gICAgaGlkZUxhYmVsPzogYm9vbGVhbjtcbiAgICBoaWRlSW5kaWNhdG9yPzogYm9vbGVhbjtcbiAgICBpbmRpY2F0b3I/OiBcImxpbmVcIiB8IFwiZG90XCIgfCBcImRhc2hlZFwiO1xuICAgIG5hbWVLZXk/OiBzdHJpbmc7XG4gICAgbGFiZWxLZXk/OiBzdHJpbmc7XG4gIH0pIHtcbiAgY29uc3QgeyBjb25maWcgfSA9IHVzZUNoYXJ0KCk7XG5cbiAgY29uc3QgdG9vbHRpcExhYmVsID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGhpZGVMYWJlbCB8fCAhcGF5bG9hZD8ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBbaXRlbV0gPSBwYXlsb2FkO1xuICAgIGNvbnN0IGtleSA9IGAke2xhYmVsS2V5IHx8IGl0ZW0uZGF0YUtleSB8fCBpdGVtLm5hbWUgfHwgXCJ2YWx1ZVwifWA7XG4gICAgY29uc3QgaXRlbUNvbmZpZyA9IGdldFBheWxvYWRDb25maWdGcm9tUGF5bG9hZChjb25maWcsIGl0ZW0sIGtleSk7XG4gICAgY29uc3QgdmFsdWUgPVxuICAgICAgIWxhYmVsS2V5ICYmIHR5cGVvZiBsYWJlbCA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IGNvbmZpZ1tsYWJlbCBhcyBrZXlvZiB0eXBlb2YgY29uZmlnXT8ubGFiZWwgfHwgbGFiZWxcbiAgICAgICAgOiBpdGVtQ29uZmlnPy5sYWJlbDtcblxuICAgIGlmIChsYWJlbEZvcm1hdHRlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKFwiZm9udC1tZWRpdW1cIiwgbGFiZWxDbGFzc05hbWUpfT5cbiAgICAgICAgICB7bGFiZWxGb3JtYXR0ZXIodmFsdWUsIHBheWxvYWQpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbihcImZvbnQtbWVkaXVtXCIsIGxhYmVsQ2xhc3NOYW1lKX0+e3ZhbHVlfTwvZGl2PjtcbiAgfSwgW1xuICAgIGxhYmVsLFxuICAgIGxhYmVsRm9ybWF0dGVyLFxuICAgIHBheWxvYWQsXG4gICAgaGlkZUxhYmVsLFxuICAgIGxhYmVsQ2xhc3NOYW1lLFxuICAgIGNvbmZpZyxcbiAgICBsYWJlbEtleSxcbiAgXSk7XG5cbiAgaWYgKCFhY3RpdmUgfHwgIXBheWxvYWQ/Lmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbmVzdExhYmVsID0gcGF5bG9hZC5sZW5ndGggPT09IDEgJiYgaW5kaWNhdG9yICE9PSBcImRvdFwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJib3JkZXItYm9yZGVyLzUwIGJnLWJhY2tncm91bmQgZ3JpZCBtaW4tdy1bOHJlbV0gaXRlbXMtc3RhcnQgZ2FwLTEuNSByb3VuZGVkLWxnIGJvcmRlciBweC0yLjUgcHktMS41IHRleHQteHMgc2hhZG93LXhsXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgPlxuICAgICAgeyFuZXN0TGFiZWwgPyB0b29sdGlwTGFiZWwgOiBudWxsfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xLjVcIj5cbiAgICAgICAge3BheWxvYWQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IGAke25hbWVLZXkgfHwgaXRlbS5uYW1lIHx8IGl0ZW0uZGF0YUtleSB8fCBcInZhbHVlXCJ9YDtcbiAgICAgICAgICBjb25zdCBpdGVtQ29uZmlnID0gZ2V0UGF5bG9hZENvbmZpZ0Zyb21QYXlsb2FkKGNvbmZpZywgaXRlbSwga2V5KTtcbiAgICAgICAgICBjb25zdCBpbmRpY2F0b3JDb2xvciA9IGNvbG9yIHx8IGl0ZW0ucGF5bG9hZC5maWxsIHx8IGl0ZW0uY29sb3I7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uZGF0YUtleX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICBcIlsmPnN2Z106dGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGZsZXggdy1mdWxsIGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIGdhcC0yIFsmPnN2Z106aC0yLjUgWyY+c3ZnXTp3LTIuNVwiLFxuICAgICAgICAgICAgICAgIGluZGljYXRvciA9PT0gXCJkb3RcIiAmJiBcIml0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Zm9ybWF0dGVyICYmIGl0ZW0/LnZhbHVlICE9PSB1bmRlZmluZWQgJiYgaXRlbS5uYW1lID8gKFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcihpdGVtLnZhbHVlLCBpdGVtLm5hbWUsIGl0ZW0sIGluZGV4LCBpdGVtLnBheWxvYWQpXG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIHtpdGVtQ29uZmlnPy5pY29uID8gKFxuICAgICAgICAgICAgICAgICAgICA8aXRlbUNvbmZpZy5pY29uIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAhaGlkZUluZGljYXRvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzaHJpbmstMCByb3VuZGVkLVsycHhdIGJvcmRlci0oLS1jb2xvci1ib3JkZXIpIGJnLSgtLWNvbG9yLWJnKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoLTIuNSB3LTIuNVwiOiBpbmRpY2F0b3IgPT09IFwiZG90XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3LTFcIjogaW5kaWNhdG9yID09PSBcImxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInctMCBib3JkZXItWzEuNXB4XSBib3JkZXItZGFzaGVkIGJnLXRyYW5zcGFyZW50XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3IgPT09IFwiZGFzaGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJteS0wLjVcIjogbmVzdExhYmVsICYmIGluZGljYXRvciA9PT0gXCJkYXNoZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tY29sb3ItYmdcIjogaW5kaWNhdG9yQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItLWNvbG9yLWJvcmRlclwiOiBpbmRpY2F0b3JDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgICAgICAgICAgICAgICBcImZsZXggZmxleC0xIGp1c3RpZnktYmV0d2VlbiBsZWFkaW5nLW5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICBuZXN0TGFiZWwgPyBcIml0ZW1zLWVuZFwiIDogXCJpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bmVzdExhYmVsID8gdG9vbHRpcExhYmVsIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtQ29uZmlnPy5sYWJlbCB8fCBpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0udmFsdWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZCBmb250LW1vbm8gZm9udC1tZWRpdW0gdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS52YWx1ZS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgQ2hhcnRMZWdlbmQgPSBSZWNoYXJ0c1ByaW1pdGl2ZS5MZWdlbmQ7XG5cbmZ1bmN0aW9uIENoYXJ0TGVnZW5kQ29udGVudCh7XG4gIGNsYXNzTmFtZSxcbiAgaGlkZUljb24gPSBmYWxzZSxcbiAgcGF5bG9hZCxcbiAgdmVydGljYWxBbGlnbiA9IFwiYm90dG9tXCIsXG4gIG5hbWVLZXksXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcImRpdlwiPiAmXG4gIFBpY2s8UmVjaGFydHNQcmltaXRpdmUuTGVnZW5kUHJvcHMsIFwicGF5bG9hZFwiIHwgXCJ2ZXJ0aWNhbEFsaWduXCI+ICYge1xuICAgIGhpZGVJY29uPzogYm9vbGVhbjtcbiAgICBuYW1lS2V5Pzogc3RyaW5nO1xuICB9KSB7XG4gIGNvbnN0IHsgY29uZmlnIH0gPSB1c2VDaGFydCgpO1xuXG4gIGlmICghcGF5bG9hZD8ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTRcIixcbiAgICAgICAgdmVydGljYWxBbGlnbiA9PT0gXCJ0b3BcIiA/IFwicGItM1wiIDogXCJwdC0zXCIsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICl9XG4gICAgPlxuICAgICAge3BheWxvYWQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke25hbWVLZXkgfHwgaXRlbS5kYXRhS2V5IHx8IFwidmFsdWVcIn1gO1xuICAgICAgICBjb25zdCBpdGVtQ29uZmlnID0gZ2V0UGF5bG9hZENvbmZpZ0Zyb21QYXlsb2FkKGNvbmZpZywgaXRlbSwga2V5KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aXRlbS52YWx1ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgICAgICAgIFwiWyY+c3ZnXTp0ZXh0LW11dGVkLWZvcmVncm91bmQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBbJj5zdmddOmgtMyBbJj5zdmddOnctM1wiLFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXRlbUNvbmZpZz8uaWNvbiAmJiAhaGlkZUljb24gPyAoXG4gICAgICAgICAgICAgIDxpdGVtQ29uZmlnLmljb24gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTIgdy0yIHNocmluay0wIHJvdW5kZWQtWzJweF1cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW0uY29sb3IsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aXRlbUNvbmZpZz8ubGFiZWx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gSGVscGVyIHRvIGV4dHJhY3QgaXRlbSBjb25maWcgZnJvbSBhIHBheWxvYWQuXG5mdW5jdGlvbiBnZXRQYXlsb2FkQ29uZmlnRnJvbVBheWxvYWQoXG4gIGNvbmZpZzogQ2hhcnRDb25maWcsXG4gIHBheWxvYWQ6IHVua25vd24sXG4gIGtleTogc3RyaW5nLFxuKSB7XG4gIGlmICh0eXBlb2YgcGF5bG9hZCAhPT0gXCJvYmplY3RcIiB8fCBwYXlsb2FkID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IHBheWxvYWRQYXlsb2FkID1cbiAgICBcInBheWxvYWRcIiBpbiBwYXlsb2FkICYmXG4gICAgdHlwZW9mIHBheWxvYWQucGF5bG9hZCA9PT0gXCJvYmplY3RcIiAmJlxuICAgIHBheWxvYWQucGF5bG9hZCAhPT0gbnVsbFxuICAgICAgPyBwYXlsb2FkLnBheWxvYWRcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gIGxldCBjb25maWdMYWJlbEtleTogc3RyaW5nID0ga2V5O1xuXG4gIGlmIChcbiAgICBrZXkgaW4gcGF5bG9hZCAmJlxuICAgIHR5cGVvZiBwYXlsb2FkW2tleSBhcyBrZXlvZiB0eXBlb2YgcGF5bG9hZF0gPT09IFwic3RyaW5nXCJcbiAgKSB7XG4gICAgY29uZmlnTGFiZWxLZXkgPSBwYXlsb2FkW2tleSBhcyBrZXlvZiB0eXBlb2YgcGF5bG9hZF0gYXMgc3RyaW5nO1xuICB9IGVsc2UgaWYgKFxuICAgIHBheWxvYWRQYXlsb2FkICYmXG4gICAga2V5IGluIHBheWxvYWRQYXlsb2FkICYmXG4gICAgdHlwZW9mIHBheWxvYWRQYXlsb2FkW2tleSBhcyBrZXlvZiB0eXBlb2YgcGF5bG9hZFBheWxvYWRdID09PSBcInN0cmluZ1wiXG4gICkge1xuICAgIGNvbmZpZ0xhYmVsS2V5ID0gcGF5bG9hZFBheWxvYWRbXG4gICAgICBrZXkgYXMga2V5b2YgdHlwZW9mIHBheWxvYWRQYXlsb2FkXG4gICAgXSBhcyBzdHJpbmc7XG4gIH1cblxuICByZXR1cm4gY29uZmlnTGFiZWxLZXkgaW4gY29uZmlnXG4gICAgPyBjb25maWdbY29uZmlnTGFiZWxLZXldXG4gICAgOiBjb25maWdba2V5IGFzIGtleW9mIHR5cGVvZiBjb25maWddO1xufVxuXG5leHBvcnQge1xuICBDaGFydENvbnRhaW5lcixcbiAgQ2hhcnRUb29sdGlwLFxuICBDaGFydFRvb2x0aXBDb250ZW50LFxuICBDaGFydExlZ2VuZCxcbiAgQ2hhcnRMZWdlbmRDb250ZW50LFxuICBDaGFydFN0eWxlLFxufTtcbiJdfQ==
