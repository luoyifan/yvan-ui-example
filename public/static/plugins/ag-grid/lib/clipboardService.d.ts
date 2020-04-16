// ag-grid-enterprise v21.2.1
import {CellPositionUtils, Column, GridCore, IClipboardService, RowPositionUtils} from "ag-grid-community";

export declare class ClipboardService implements IClipboardService {
    private csvCreator;
    private loggerFactory;
    private selectionController;
    private rangeController;
    private valueService;
    private focusedCellController;
    private rowRenderer;
    private columnController;
    private eventService;
    private cellNavigationService;
    private gridOptionsWrapper;
    private columnApi;
    private gridApi;
    cellPositionUtils: CellPositionUtils;
    rowPositionUtils: RowPositionUtils;
    private logger;
    private gridCore;
    registerGridCore(gridCore: GridCore): void;
    private init;
    pasteFromClipboard(): void;
    private pasteToRange;
    private pasteToSingleCell;
    copyRangeDown(): void;
    private fireRowChanged;
    private multipleCellRange;
    private singleCellRange;
    private updateCellValue;
    copyToClipboard(includeHeaders: boolean): void;
    private iterateActiveRanges;
    private iterateActiveRange;
    copySelectedRangeToClipboard(includeHeaders?: boolean): void;
    private copyFocusedCellToClipboard;
    private dispatchFlashCells;
    private userProcessCell;
    private userProcessHeader;
    copySelectedRowsToClipboard(includeHeaders?: boolean, columnKeys?: (string | Column)[]): void;
    private copyDataToClipboard;
    private executeOnTempElement;
    private dataToArray;
    private rangeSize;
}
