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
          showCheckbox: true,
          threeState: false,
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
    const data = {
      success: true,
      msg: "",
      data: {
        sql:
          "select a.fbranchorgname,\n        a.fbranchorgcode,\n        a.fparentid,\n        a.fbranchorglevel,\n        a.fbranchorgid\n        from branchorgdoc a\n        where a.FBRANCHORGID like concat(concat('%',:FBRANCHORGID),'%')\n        and a.FBRANCHORGLEVEL in('一级','二级')",
        totalCount: null,
        params: { FBRANCHORGID: "0001" },
        data: [
          {
            FBRANCHORGNAME: "九州通集团",
            FBRANCHORGCODE: "FJT",
            FPARENTID: "AAA",
            FBRANCHORGLEVEL: "一级",
            FBRANCHORGID: "0001",
          },
          {
            FBRANCHORGNAME: "重庆九州通医药有限公司",
            FBRANCHORGCODE: "FDM",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0010",
          },
          {
            FBRANCHORGNAME: "九州通医药集团股份有限公司",
            FBRANCHORGCODE: "FDG",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0001",
          },
          {
            FBRANCHORGNAME: "辽宁九州通医药有限公司",
            FBRANCHORGCODE: "FH7",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0011",
          },
          {
            FBRANCHORGNAME: "江西九州通药业有限公司",
            FBRANCHORGCODE: "FD8",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0012",
          },
          {
            FBRANCHORGNAME: "北京九州通医药有限公司",
            FBRANCHORGCODE: "FDJ",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0002",
          },
          {
            FBRANCHORGNAME: "上海九州通医药有限公司",
            FBRANCHORGCODE: "FDL",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0009",
          },
          {
            FBRANCHORGNAME: "河南九州通医药有限公司",
            FBRANCHORGCODE: "FDW",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0003",
          },
          {
            FBRANCHORGNAME: "新疆九州通医药有限公司",
            FBRANCHORGCODE: "FDE",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0004",
          },
          {
            FBRANCHORGNAME: "福建九州通医药有限公司",
            FBRANCHORGCODE: "FDB",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0005",
          },
          {
            FBRANCHORGNAME: "江苏九州通医药有限公司",
            FBRANCHORGCODE: "FDC",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0006",
          },
          {
            FBRANCHORGNAME: "广东九州通医药有限公司",
            FBRANCHORGCODE: "FDS",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0007",
          },
          {
            FBRANCHORGNAME: "山东九州通医药有限公司",
            FBRANCHORGCODE: "FDQ",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0008",
          },
          {
            FBRANCHORGNAME: "兰州九州通医药有限公司",
            FBRANCHORGCODE: "FH5",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0013",
          },
          {
            FBRANCHORGNAME: "内蒙古九州通医药有限公司",
            FBRANCHORGCODE: "FH6",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0014",
          },
          {
            FBRANCHORGNAME: "四川九州通医药有限公司",
            FBRANCHORGCODE: "FB8",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0015",
          },
          {
            FBRANCHORGNAME: "广西九州通医药有限公司",
            FBRANCHORGCODE: "FC6",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0017",
          },
          {
            FBRANCHORGNAME: "淮安九州通医药有限公司",
            FBRANCHORGCODE: "FH2",
            FPARENTID: "FDC",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0006.0001",
          },
          {
            FBRANCHORGNAME: "天津九州通达医药有限公司",
            FBRANCHORGCODE: "FC2",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0018",
          },
          {
            FBRANCHORGNAME: "浙江九州通医药有限公司",
            FBRANCHORGCODE: "FC3",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0019",
          },
          {
            FBRANCHORGNAME: "安徽九州通医药有限公司",
            FBRANCHORGCODE: "FWA",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0023",
          },
          {
            FBRANCHORGNAME: "黑龙江九州通医药有限公司",
            FBRANCHORGCODE: "FWH",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0021",
          },
          {
            FBRANCHORGNAME: "山西欣予药业有限公司",
            FBRANCHORGCODE: "FC7",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0022",
          },
          {
            FBRANCHORGNAME: "长春九州通医药有限公司",
            FBRANCHORGCODE: "FWP",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0024",
          },
          {
            FBRANCHORGNAME: "山西九州通医药有限公司",
            FBRANCHORGCODE: "FWX",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0025",
          },
          {
            FBRANCHORGNAME: "山西省太原药材有限公司",
            FBRANCHORGCODE: "FTY",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0026",
          },
          {
            FBRANCHORGNAME: "芜湖九州通医药销售有限公司",
            FBRANCHORGCODE: "FC8",
            FPARENTID: "FWA",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0023.0001",
          },
          {
            FBRANCHORGNAME: "湖北好药师医药有限公司",
            FBRANCHORGCODE: "FWK",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0030",
          },
          {
            FBRANCHORGNAME: "湖南九州通医药有限公司",
            FBRANCHORGCODE: "FHL",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0039",
          },
          {
            FBRANCHORGNAME: "西藏三通医药科技有限公司",
            FBRANCHORGCODE: "FXZ",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0031",
          },
          {
            FBRANCHORGNAME: "九州通金合（大连）药业有限公司",
            FBRANCHORGCODE: "FLD",
            FPARENTID: "FH7",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0011.0004",
          },
          {
            FBRANCHORGNAME: "仙居九州通医药有限公司",
            FBRANCHORGCODE: "FHZ",
            FPARENTID: "FC3",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0019.0002",
          },
          {
            FBRANCHORGNAME: "赤峰九州通医药有限公司",
            FBRANCHORGCODE: "FWF",
            FPARENTID: "FH6",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0014.0001",
          },
          {
            FBRANCHORGNAME: "苏州市国征医药有限公司",
            FBRANCHORGCODE: "FS5",
            FPARENTID: "FDC",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0006.0002",
          },
          {
            FBRANCHORGNAME: "九州通金合（辽宁）药业有限公司",
            FBRANCHORGCODE: "FLJ",
            FPARENTID: "FH7",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0011.0003",
          },
          {
            FBRANCHORGNAME: "云南城投九州通",
            FBRANCHORGCODE: "FYN",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0032",
          },
          {
            FBRANCHORGNAME: "大连九州通医药有限公司",
            FBRANCHORGCODE: "FTD",
            FPARENTID: "FH7",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0011.0001",
          },
          {
            FBRANCHORGNAME: "山西九州通医药有限公司长治分公司",
            FBRANCHORGCODE: "FCZ",
            FPARENTID: "FWX",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0025.0005",
          },
          {
            FBRANCHORGNAME: "西安九州通医药有限公司",
            FBRANCHORGCODE: "FXA",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0029",
          },
          {
            FBRANCHORGNAME: "浙江九州通医疗器械有限公司",
            FBRANCHORGCODE: "FP1",
            FPARENTID: "FC3",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0019.0004",
          },
          {
            FBRANCHORGNAME: "江苏九州通医疗器械有限公司",
            FBRANCHORGCODE: "FP7",
            FPARENTID: "FDC",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0006.0005",
          },
          {
            FBRANCHORGNAME: "哈尔滨九州通医药有限公司",
            FBRANCHORGCODE: "FHR",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0033",
          },
          {
            FBRANCHORGNAME: "榆林九州通医药有限公司",
            FBRANCHORGCODE: "FS4",
            FPARENTID: "FXA",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0029.0002",
          },
          {
            FBRANCHORGNAME: "海南九州通康达医药有限公司",
            FBRANCHORGCODE: "FHN",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0043",
          },
          {
            FBRANCHORGNAME: "九州通集团安国中药材有限公司",
            FBRANCHORGCODE: "FZ1",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0036",
          },
          {
            FBRANCHORGNAME: "湖南九州瑞通供应链管理有限公司",
            FBRANCHORGCODE: "FR3",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0038",
          },
          {
            FBRANCHORGNAME: "渭南九州通正元医药有限公司",
            FBRANCHORGCODE: "FHC",
            FPARENTID: "FXA",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0029.0001",
          },
          {
            FBRANCHORGNAME: "武汉瑞士昌达",
            FBRANCHORGCODE: "FCD",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0035",
          },
          {
            FBRANCHORGNAME: "九州通（江苏）医药销售有限公司",
            FBRANCHORGCODE: "FS7",
            FPARENTID: "FDC",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0006.0009",
          },
          {
            FBRANCHORGNAME: "九州通鞍山药业有限公司",
            FBRANCHORGCODE: "FAS",
            FPARENTID: "FH7",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0011.0007",
          },
          {
            FBRANCHORGNAME: "九州通医药集团重庆万州有限公司",
            FBRANCHORGCODE: "FCW",
            FPARENTID: "FDM",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0010.0007",
          },
          {
            FBRANCHORGNAME: "汉中九州通医药有限公司\t",
            FBRANCHORGCODE: "FZT",
            FPARENTID: "FXA",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0029.0005",
          },
          {
            FBRANCHORGNAME: "云南九州通医疗器械公司",
            FBRANCHORGCODE: "FEX",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0047",
          },
          {
            FBRANCHORGNAME: "广州九州通医疗器械有限公司",
            FBRANCHORGCODE: "FQL",
            FPARENTID: "FDS",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0007.0009",
          },
          {
            FBRANCHORGNAME: "云南九州通医药有限公司",
            FBRANCHORGCODE: "FMD",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0046",
          },
          {
            FBRANCHORGNAME: "宁波九州通医药有限公司",
            FBRANCHORGCODE: "FLK",
            FPARENTID: "FC3",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0019.0006",
          },
          {
            FBRANCHORGNAME: "宁波九州通久久医药有限公司",
            FBRANCHORGCODE: "FNB",
            FPARENTID: "FC3",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0019.0005",
          },
          {
            FBRANCHORGNAME: "吉林市广聚药业有限责任公司",
            FBRANCHORGCODE: "FTG",
            FPARENTID: "FWP",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0024.0002",
          },
          {
            FBRANCHORGNAME: "百汇香港贸易有限公司",
            FBRANCHORGCODE: "FXH",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0042",
          },
          {
            FBRANCHORGNAME: "天津九州通医疗器械有限公司",
            FBRANCHORGCODE: "FM3",
            FPARENTID: "FC2",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0018.0001",
          },
          {
            FBRANCHORGNAME: "海南华利医药进出口有限公司",
            FBRANCHORGCODE: "FEW",
            FPARENTID: "FJT",
            FBRANCHORGLEVEL: "二级",
            FBRANCHORGID: "0001.0044",
          },
        ],
        limit: null,
        limitOffset: null,
        affectRows: null,
      },
    };
    return option.successCallback(data.data.data);
  }

  getItem() {
    console.log(this.refs.theTree.getItem("FR3"));
  }

  getChilds() {
    console.log(
      "items:",
      this.refs.theTree.getChildItems("FH7"),
      "ids:",
      this.refs.theTree.getChildIds("FH7")
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
    this.refs.theTree.checkItems(["FLD", "FDJ", "FDL"]);
  }

  treeComplete(sender: YvanUI.CtlTree) {
    sender.open(sender.getFirstId());
  }

  treeNodeClick(sender: YvanUI.CtlTree, e: any) {
    console.log("treeNodeClick", e.row);
  }
}
