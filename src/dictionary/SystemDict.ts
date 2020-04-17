import View, { Refs } from "./SystemDict.view";
import * as YvanUI from "yvan-ui";
import _ = require("lodash");

@YvanUI.BizModule()
export default class Module extends View<Module, void> {
  func1() {
    // this.refs.menuTree.expandAll()
    // this.refs.menuTree.loading = true
    // this.refs.grid1.data = [];
  }

  getData(sender: YvanUI.CtlGrid, param: YvanUI.DataSourceParam) {
    param.successCallback([
      {
        dicTpId: "1",
        tpName: "启停状态",
        TpCode: "status",
        count: 2,
        status: 1,
      },
      { dicTpId: "2", tpName: "性别", TpCode: "gender", count: 2, status: 1 },
      {
        dicTpId: "3",
        tpName: "消息类型",
        TpCode: "msgType",
        count: 3,
        status: 1,
      },
    ]);
  }

  func2() {
    var window = YvanUI.webix
      .ui({
        view: "window",
        id: "my_win",
        head: "My Window",
        position: "center",
        move: true,
        resize: true,
        modal: true,
        width: 200,
        height: 200,
        body: {
          template: "Some text",
        },
      })
      .show(webix.$$("12345"));
  }

  resetForm() {
    this.refs.form1.setValues({ a: "123", b: "", c: "Two" });
  }
}
