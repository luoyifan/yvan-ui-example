// ag-grid-enterprise v21.2.1
import {BeanStub, IServerSideDatasource, IServerSideRowModel, RowBounds, RowNode} from "ag-grid-community";

export declare class ServerSideRowModel extends BeanStub implements IServerSideRowModel {
    private gridOptionsWrapper;
    private eventService;
    private columnController;
    private filterManager;
    private sortController;
    private gridApi;
    private columnApi;
    private rowRenderer;
    private rootNode;
    private datasource;
    private rowHeight;
    private cacheParams;
    private logger;
    private rowNodeBlockLoader;
    ensureRowHeightsValid(startPixel: number, endPixel: number, startLimitIndex: number, endLimitIndex: number): boolean;
    private postConstruct;
    private destroyDatasource;
    private setBeans;
    private addEventListeners;
    setDatasource(datasource: IServerSideDatasource): void;
    isLastRowFound(): boolean;
    private onColumnEverything;
    private onFilterChanged;
    private findChangedColumnsInSort;
    private onSortChanged;
    private onValueChanged;
    private onColumnRowGroupChanged;
    private onColumnPivotChanged;
    private onPivotModeChanged;
    private onRowGroupOpened;
    private reset;
    private createNewRowNodeBlockLoader;
    private destroyRowNodeBlockLoader;
    private toValueObjects;
    private createCacheParams;
    private createNodeCache;
    private onCacheUpdated;
    updateRowIndexesAndBounds(): void;
    private setDisplayIndexes;
    private resetRowTops;
    getRow(index: number): RowNode | null;
    getRowCount(): number;
    getTopLevelRowCount(): number;
    getTopLevelRowDisplayedIndex(topLevelIndex: number): number;
    getRowBounds(index: number): RowBounds;
    getRowIndexAtPixel(pixel: number): number;
    getCurrentPageHeight(): number;
    isEmpty(): boolean;
    isRowsToRender(): boolean;
    getType(): string;
    forEachNode(callback: (rowNode: RowNode, index: number) => void): void;
    private executeOnCache;
    purgeCache(route?: string[]): void;
    getNodesInRangeForSelection(firstInRange: RowNode, lastInRange: RowNode): RowNode[];
    getRowNode(id: string): RowNode | null;
    getBlockState(): any;
    isRowPresent(rowNode: RowNode): boolean;
    private extractSortModel;
    private isSortingWithValueColumn;
    private isSortingWithSecondaryColumn;
    private cacheExists;
    private createDetailNode;
    isLoading(): boolean;
}
