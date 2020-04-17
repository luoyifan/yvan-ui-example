import View, { Refs } from "./exampleTreeGrid.view";
import * as YvanUI from "yvan-ui";

@YvanUI.BizModule()
export default class Module extends View<Module, void> {
  onShow(): void {
    _.extend(window, {
      module: this,
    });
    console.log("module setup", this);
  }

  menuTreeNodeClick(sender: YvanUI.CtlTreeTable, node: any) {
    debugger;
  }

  getTreeGridData(sender: YvanUI.CtlTreeTable, param: YvanUI.DataSourceParam) {
    param.successCallback([
      {
        id: "1",
        value: "The Shawshank Redemption",
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
}
