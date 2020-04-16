// ag-grid-enterprise v21.2.1
import {
    CellComp,
    CellNavigationService,
    CellPosition,
    CellRange,
    ColumnController,
    Component,
    DragService,
    ISelectionHandle,
    MouseEventService,
    RowPosition,
    RowPositionUtils,
    RowRenderer
} from "ag-grid-community";
import {RangeController} from "../../rangeController";

export declare abstract class AbstractSelectionHandle extends Component implements ISelectionHandle {
    protected rowRenderer: RowRenderer;
    protected dragService: DragService;
    protected rangeController: RangeController;
    protected mouseEventService: MouseEventService;
    protected columnController: ColumnController;
    protected cellNavigationService: CellNavigationService;
    protected rowPositionUtils: RowPositionUtils;
    private cellComp;
    private cellRange;
    private rangeStartRow;
    private rangeEndRow;
    private cellHoverListener;
    private lastCellHovered;
    private changedCell;
    private dragging;
    protected abstract type: string;
    protected shouldDestroyOnEndDragging: boolean;
    private init;
    protected abstract onDrag(e: MouseEvent | Touch): void;
    protected abstract onDragEnd(e: MouseEvent | Touch): void;
    protected isDragging(): boolean;
    protected getCellComp(): CellComp | undefined;
    protected setCellComp(cellComp: CellComp): void;
    protected getCellRange(): CellRange;
    protected setCellRange(range: CellRange): void;
    protected getRangeStartRow(): RowPosition;
    protected setRangeStartRow(row: RowPosition): void;
    protected getRangeEndRow(): RowPosition;
    protected setRangeEndRow(row: RowPosition): void;
    protected getLastCellHovered(): CellPosition | undefined;
    private preventRangeExtension;
    protected onDragStart(e: MouseEvent): void;
    private updateLastCellPositionHovered;
    getType(): string;
    refresh(cellComp: CellComp): void;
    protected clearValues(): void;
    private removeListeners;
    destroy(): void;
}
