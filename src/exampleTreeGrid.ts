export interface Refs {
  theTreeTable: YvanUI.CtlTreeTable;
}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {

  viewResolver() {
    return {
      responsive: true,
      rows: [
        {
          view: "treetable",
          ctlName: "theTreeTable",
          select: 'cell',
          columns: [
            {
              id: "id",
              header: "id",
              width: 100,
              hidden: false
            },
            {
              id: "value",
              header: "姓名",
              fillspace: true,
              css: { "text-align": "center" },
            },
            {
              id: "adress",
              header: "地址",
              fillspace: true,
              template: "{common.treetable()} #adress#",
            },
          ],
          dataSource: {
            type: "function",
            bind: "getTreeGridData",
            valueField: "FBRANCHORGCODE",
            parentField: "FPARENTID",
          },
          onNodeClick: {// 节点点击之后的回调
            type: "function",
            bind: "treeNodeClick",// 绑定的方法
          },
        },
      ],
    };
  }

  // 树节点被点击后触发
  treeNodeClick(sender: YvanUI.CtlTreeTable, node: any) {
    console.log("treeNodeClick", node);
  }

  getTreeGridData(sender: YvanUI.CtlTreeTable, param: YvanUI.DataSourceParam) {
    const data = [
      {
        id: "1",
        value: "AAA集团",
        adress: '湖北',
        FBRANCHORGCODE: "FJT",
      },
      {
        id: "1.1",
        value: "重庆AAA有限公司",
        adress: '重庆',
        FBRANCHORGCODE: "FDM",
        FPARENTID: "FJT",
      },
      {
        id: "1.2",
        value: "湖北AAA有限公司",
        adress: "湖北",
        FBRANCHORGCODE: "FXA",
        FPARENTID: "FJT",
      },
      {
        id: "1.2.1",
        value: "武汉AAA有限公司",
        adress: "武汉",
        FBRANCHORGCODE: "FZT",
        FPARENTID: "FXA",
      },
      {
        id: "1.2.2",
        value: "宜昌AAA有限公司",
        adress: "宜昌",
        FBRANCHORGCODE: "FYC",
        FPARENTID: "FXA",
      }
    ]
    return param.successCallback(data);
  }
}


