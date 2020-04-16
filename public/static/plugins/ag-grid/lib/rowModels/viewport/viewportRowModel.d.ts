// ag-grid-enterprise v21.2.1
import {IRowModel, IViewportDatasource, RowBounds, RowNode} from "ag-grid-community";

export declare class ViewportRowModel implements IRowModel {
    private gridOptionsWrapper;
    private eventService;
    private selectionController;
    private context;
    private gridApi;
    private columnApi;
    private rowRenderer;
    private firstRow;
    private lastRow;
    private rowCount;
    private rowNodesByIndex;
    private rowHeight;
    private viewportDatasource;
    ensureRowHeightsValid(startPixel: number, endPixel: number, startLimitIndex: number, endLimitIndex: number): boolean;
    private init;
    isLastRowFound(): boolean;
    private destroyDatasource;
    private calculateFirstRow;
    private calculateLastRow;
    private onViewportChanged;
    purgeRowsNotInViewport(): void;
    setViewportDatasource(viewportDatasource: IViewportDatasource): void;
    getType(): string;
    getRow(rowIndex: number): RowNode;
    getRowNode(id: string): RowNode | null;
    getRowCount(): number;
    getRowIndexAtPixel(pixel: number): number;
    getRowBounds(index: number): RowBounds;
    getTopLevelRowCount(): number;
    getTopLevelRowDisplayedIndex(topLevelIndex: number): number;
    getCurrentPageHeight(): number;
    isEmpty(): boolean;
    isRowsToRender(): boolean;
    getNodesInRangeForSelection(firstInRange: RowNode, lastInRange: RowNode): RowNode[];
    forEachNode(callback: (rowNode: RowNode, index: number) => void): void;
    private setRowData;
    private createBlankRowNode;
    setRowCount(rowCount: number): void;
    isRowPresent(rowNode: RowNode): boolean;
}
