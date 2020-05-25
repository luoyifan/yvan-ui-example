import View, { Refs } from "./horizontalTreeGirdTable.view";
import SingleGridData from "./singleGrid.data";

@YvanUI.BizModule()
export default class Module extends View<Module, void> {
  viewResolver(): any {
    return YvanUI.viewExtend(super.viewResolver(), {
      treeTable1: {
        onNodeClick: {
          type: "function",
          bind: "menuTreeNodeClick",
        },
        dataSource: {
          type: "function",
          bind: "getTreeGridData",
        },
      },
      grid1: {
        dataSource: {
          type: "function",
          bind: "getData",
        },
        // data: SingleGridData.data
      },
      combo1: {
        onChange: {
          type: "function",
          bind: "comboOnChange",
        },
      },
      richselect1: {
        onChange: {
          type: "function",
          bind: "richselectOnChange",
        },
      },
    });
  }

  menuTreeNodeClick(sender: YvanUI.CtlTreeTable, node: any) {
    debugger;
    this.refs.grid1.reload();
  }
  getData(sender: YvanUI.CtlGrid, param: YvanUI.DataSourceParam) {
    debugger;
    param.successCallback(SingleGridData.data);
  }
  getTreeGridData(sender: YvanUI.CtlTreeTable, param: YvanUI.DataSourceParam) {
    param.successCallback([
      {
        id: "1",
        value: "The Shawshank",
        open: true,
        data: [
          { id: "1.1", value: "Part 1", chapter: "alpha" },
          {
            id: "1.2",
            value: "Part 2",
            chapter: "beta",
            open: true,
            data: [
              { id: "1.2.1", value: "Part 1", chapter: "beta-twin" },
              { id: "1.2.2", value: "Part 2", chapter: "sss" },
            ],
          },
          { id: "1.3", value: "Part 3", chapter: "alpha" },
          {
            id: "1.4",
            value: "Part 4",
            chapter: "beta",
            open: true,
            data: [
              { id: "1.4.1", value: "Part 1", chapter: "beta-twin" },
              { id: "1.4.2", value: "Part 2", chapter: "sss" },
            ],
          },
        ],
      },
    ]);
  }
  comboOnChange(sender: YvanUI.CtlCombo, value: any) {
    debugger;
  }

  richselectOnChange(sender: YvanUI.CtlCombo, value: any) {
    debugger;
    this.refs.combo1.value = "1";
  }
}
