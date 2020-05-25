export interface Refs {
  theTree: YvanUI.CtlTree;
}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {
  onShow(): void {
    _.extend(window, {
      module: this,
    });
    console.log("module setup", this);
  }

  viewResolver(): any {
    return {
      rows: [
        {
          cols: [
            {
              view: "button",
              text: "checkItems",
              onClick: {
                type: "function",
                bind: "checkItems",
              },
            },
            {
              view: "button",
              text: "getSelected",
              onClick: {
                type: "function",
                bind: "getSelected",
              },
            },
            {
              view: "button",
              text: "getItem",
              onClick: {
                type: "function",
                bind: "getItem",
              },
            },
            {
              view: "button",
              text: "getCheckedIds",
              onClick: {
                type: "function",
                bind: "getCheckedIds",
              },
            },
            {
              view: "button",
              text: "getCheckedItems",
              onClick: {
                type: "function",
                bind: "getCheckedItems",
              },
            },
            {
              view: "button",
              text: "getChilds",
              onClick: {
                type: "function",
                bind: "getChilds",
              },
            },
            {},
          ],
        },
        {
          view: "tree",
          ctlName: "theTree",
          // animate: { type: "flip", subtype: "vertical" },
          // borderless: true,
          showCheckbox: true,
          threeState: true,
          dataSource: {
            type: "function",
            bind: "getTreeData",
            displayField: "FBRANCHORGNAME",
            valueField: "FBRANCHORGCODE",
            parentField: "FPARENTID",
          },
          onDataComplete: {
            type: "function",
            bind: "treeComplete",
          },
          onNodeClick: {
            type: "function",
            bind: "treeNodeClick",
          },
        },
      ],
    };
  }

  getTreeData(sender: YvanUI.CtlTree, option: YvanUI.DataSourceParam): any {

    const data2 = [
      {
        FBRANCHORGNAME: "AAA集团",
        FBRANCHORGCODE: "FJT",
        FPARENTID: "AAA",
      },
      {
        FBRANCHORGNAME: "重庆AAA有限公司",
        FBRANCHORGCODE: "FDM",
        FPARENTID: "FJT",
        disabled: true
      },
      {
        FBRANCHORGNAME: "湖北AAA有限公司",
        FBRANCHORGCODE: "FXA",
        FPARENTID: "FJT",
      },
      {
        FBRANCHORGNAME: "武汉AAA有限公司",
        FBRANCHORGCODE: "FZT",
        FPARENTID: "FXA",
        disabled: true
      },
      {
        FBRANCHORGNAME: "宜昌AAA有限公司",
        FBRANCHORGCODE: "FYC",
        FPARENTID: "FXA",
      }
    ]

    return option.successCallback(data2);
  }

  getItem() {
    console.log(this.refs.theTree.getItem("FYC"));
  }

  getChilds() {
    console.log(
      "items:",
      this.refs.theTree.getChildItems("FJT"),
      "ids:",
      this.refs.theTree.getChildIds("FJT")
    );
  }

  getCheckedIds() {
    console.log(this.refs.theTree.getCheckedIds());
  }

  getCheckedItems() {
    console.log(this.refs.theTree.getCheckedItems());
  }

  getSelected() {
    console.log(
      "ID:",
      this.refs.theTree.getSelectedId(),
      "Item:",
      this.refs.theTree.getSelectedItem()
    );
  }

  checkItems() {
    this.refs.theTree.checkItems(["FDM", "FYC"]);
  }

  treeComplete(sender: YvanUI.CtlTree) {
    sender.expandAll();
    this.refs.theTree.checkAll();
  }

  treeNodeClick(sender: YvanUI.CtlTree, e: any) {
    console.log("treeNodeClick", e.row);
  }
}
