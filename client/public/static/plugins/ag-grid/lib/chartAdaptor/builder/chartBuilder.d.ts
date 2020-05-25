// ag-grid-enterprise v21.2.1
import {
    AreaChartOptions,
    AreaSeriesOptions,
    AxisOptions,
    BarChartOptions,
    BarSeriesOptions,
    CaptionOptions,
    CartesianChartOptions,
    ChartOptions,
    DoughnutChartOptions,
    DropShadowOptions,
    LegendOptions,
    LineChartOptions,
    LineSeriesOptions,
    PieChartOptions,
    PieSeriesOptions,
    PolarChartOptions,
    ScatterChartOptions,
    ScatterSeriesOptions,
    SeriesOptions
} from "ag-grid-community";
import {CartesianChart} from "../../charts/chart/cartesianChart";
import {PolarChart} from "../../charts/chart/polarChart";
import {LineSeries} from "../../charts/chart/series/lineSeries";
import {ScatterSeries} from "../../charts/chart/series/scatterSeries";
import {BarSeries} from "../../charts/chart/series/barSeries";
import {AreaSeries} from "../../charts/chart/series/areaSeries";
import {PieSeries} from "../../charts/chart/series/pieSeries";
import {Chart} from "../../charts/chart/chart";
import {Series} from "../../charts/chart/series/series";
import {DropShadow} from "../../charts/scene/dropShadow";
import {CategoryAxis} from "../../charts/chart/axis/categoryAxis";
import {NumberAxis} from "../../charts/chart/axis/numberAxis";
import {Legend} from "../../charts/chart/legend";
import {Caption} from "../../charts/caption";
import {GroupedCategoryAxis} from "../../charts/chart/axis/groupedCategoryAxis";
import {GroupedCategoryChart} from "../../charts/chart/groupedCategoryChart";

declare type CartesianSeriesType = 'line' | 'scatter' | 'bar' | 'area';
declare type PolarSeriesType = 'pie';
declare type SeriesType = CartesianSeriesType | PolarSeriesType;
export declare class ChartBuilder {
    static createCartesianChart(options: CartesianChartOptions): CartesianChart;
    static createGroupedColumnChart(options: BarChartOptions): GroupedCategoryChart;
    static createGroupedBarChart(options: BarChartOptions): GroupedCategoryChart;
    static createGroupedLineChart(options: BarChartOptions): GroupedCategoryChart;
    static createGroupedAreaChart(options: AreaChartOptions): GroupedCategoryChart;
    static createBarChart(options: BarChartOptions): CartesianChart;
    static createColumnChart(options: BarChartOptions): CartesianChart;
    static createLineChart(options: LineChartOptions): CartesianChart;
    static createScatterChart(options: ScatterChartOptions): CartesianChart;
    static createAreaChart(options: AreaChartOptions): CartesianChart;
    static createPolarChart(options: PolarChartOptions): PolarChart;
    static createDoughnutChart(options: DoughnutChartOptions): PolarChart;
    static createPieChart(options: PieChartOptions): PolarChart;
    static createLineSeries(options: LineSeriesOptions): LineSeries;
    static createScatterSeries(options: ScatterSeriesOptions): ScatterSeries;
    static createSeries(options: any, type?: string): BarSeries | AreaSeries | PieSeries | LineSeries | ScatterSeries | null;
    static initChart<C extends Chart>(chart: C, options: ChartOptions, seriesType?: SeriesType): C;
    static initCartesianChart(chart: CartesianChart, options: CartesianChartOptions, seriesType?: CartesianSeriesType): CartesianChart;
    static initGroupedCategoryChart(chart: GroupedCategoryChart, options: CartesianChartOptions, seriesType?: CartesianSeriesType): GroupedCategoryChart;
    static initPolarChart(chart: PolarChart, options: PolarChartOptions, seriesType?: PolarSeriesType): PolarChart;
    static initSeries<S extends Series<any>>(series: S, options: SeriesOptions): S;
    static initLineSeries(series: LineSeries, options: LineSeriesOptions): LineSeries;
    static initScatterSeries(series: ScatterSeries, options: ScatterSeriesOptions): ScatterSeries;
    static initBarSeries(series: BarSeries, options: BarSeriesOptions): BarSeries;
    static initAreaSeries(series: AreaSeries, options: AreaSeriesOptions): AreaSeries;
    static initPieSeries(series: PieSeries, options: PieSeriesOptions): PieSeries;
    static initLegend(legend: Legend, options: LegendOptions): void;
    static createAxisTitle(options: CaptionOptions): Caption;
    static createChartTitle(options: CaptionOptions): Caption;
    static createChartSubtitle(options: CaptionOptions): Caption;
    static createPieTitle(options: CaptionOptions): Caption;
    static createCaption(options: CaptionOptions): Caption;
    static createDropShadow(options?: DropShadowOptions): DropShadow;
    static createAxis(options: AxisOptions): CategoryAxis | NumberAxis;
    static createGroupedAxis(options: AxisOptions): GroupedCategoryAxis;
}
export {};
