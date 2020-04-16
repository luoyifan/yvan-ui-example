// ag-grid-enterprise v21.2.1
import {NumberSequence, RowBounds, RowNode, RowNodeBlock} from "ag-grid-community";
import {ServerSideCache, ServerSideCacheParams} from "./serverSideCache";

export declare class ServerSideBlock extends RowNodeBlock {
    private rowRenderer;
    private columnController;
    private valueService;
    private gridOptionsWrapper;
    private logger;
    private displayIndexStart;
    private displayIndexEnd;
    private blockTop;
    private blockHeight;
    private params;
    private parentCache;
    private parentRowNode;
    private level;
    private groupLevel;
    private leafGroup;
    private groupField;
    private rowGroupColumn;
    private nodeIdPrefix;
    private usingTreeData;
    private usingMasterDetail;
    static readonly DefaultBlockSize = 100;
    constructor(pageNumber: number, parentRowNode: RowNode, params: ServerSideCacheParams, parentCache: ServerSideCache);
    protected init(): void;
    private setBeans;
    private createNodeIdPrefix;
    protected createIdForIndex(index: number): string;
    getNodeIdPrefix(): string;
    getRow(displayRowIndex: number): RowNode | null;
    protected setDataAndId(rowNode: RowNode, data: any, index: number): void;
    private setChildCountIntoRowNode;
    private setGroupDataIntoRowNode;
    protected loadFromDatasource(): void;
    protected createBlankRowNode(rowIndex: number): RowNode;
    private createGroupKeys;
    isPixelInRange(pixel: number): boolean;
    getRowBounds(index: number, virtualRowCount: number): RowBounds | null;
    getRowIndexAtPixel(pixel: number, virtualRowCount: number): number;
    clearRowTops(virtualRowCount: number): void;
    setDisplayIndexes(displayIndexSeq: NumberSequence, virtualRowCount: number, nextRowTop: {
        value: number;
    }): void;
    private forEachRowNode;
    private createLoadParams;
    isDisplayIndexInBlock(displayIndex: number): boolean;
    isBlockBefore(displayIndex: number): boolean;
    getDisplayIndexStart(): number;
    getDisplayIndexEnd(): number;
    getBlockHeight(): number;
    getBlockTop(): number;
    isGroupLevel(): boolean | undefined;
    getGroupField(): string;
}
