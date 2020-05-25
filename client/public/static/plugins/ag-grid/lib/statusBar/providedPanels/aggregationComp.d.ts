// ag-grid-enterprise v21.2.1
import {CellPositionUtils, Component, IStatusPanelComp, RowPositionUtils} from 'ag-grid-community';

export declare class AggregationComp extends Component implements IStatusPanelComp {
    private static TEMPLATE;
    private eventService;
    private rangeController;
    private valueService;
    private cellNavigationService;
    private rowRenderer;
    private gridOptionsWrapper;
    private gridOptions;
    private gridApi;
    cellPositionUtils: CellPositionUtils;
    rowPositionUtils: RowPositionUtils;
    private sumAggregationComp;
    private countAggregationComp;
    private minAggregationComp;
    private maxAggregationComp;
    private avgAggregationComp;
    constructor();
    private postConstruct;
    private isValidRowModel;
    init(): void;
    private setAggregationComponentValue;
    private getAggregationValueComponent;
    private onRangeSelectionChanged;
}
