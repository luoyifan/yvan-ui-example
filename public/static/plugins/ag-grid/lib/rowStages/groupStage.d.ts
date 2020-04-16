// ag-grid-enterprise v21.2.1
import {IRowNodeStage, StageExecuteParams} from "ag-grid-community";

export declare class GroupStage implements IRowNodeStage {
    private selectionController;
    private gridOptionsWrapper;
    private columnController;
    private selectableService;
    private valueService;
    private eventService;
    private context;
    private usingTreeData;
    private getDataPath;
    private groupIdSequence;
    private oldGroupingDetails;
    private postConstruct;
    execute(params: StageExecuteParams): void;
    private createGroupingDetails;
    private handleTransaction;
    private sortChildren;
    private sortGroupsWithComparator;
    private getExistingPathForNode;
    private moveNodesInWrongPath;
    private moveNode;
    private removeNodes;
    private removeNodesInStages;
    private forEachParentGroup;
    private removeNodesFromParents;
    private postRemoveCreateFillerNodes;
    private postRemoveRemoveEmptyGroups;
    private removeFromParent;
    private addToParent;
    private areGroupColsEqual;
    private shotgunResetEverything;
    private insertNodes;
    private insertOneNode;
    private findParentForNode;
    private swapGroupWithUserNode;
    private getOrCreateNextNode;
    private createGroup;
    private getChildrenMappedKey;
    private isExpanded;
    private getGroupInfo;
    private getGroupInfoFromCallback;
    private getGroupInfoFromGroupColumns;
}
