import View from "./ExampleComplexPurchanse.view";
import moment = require("moment");

// 一个功能模块
@YvanUI.BizModule()
export default class Module extends View<Module> {
  // 模块加载时调用
  onLoad() {
    this.refs.billDate.value = moment().format("YYYY-MM-DD");
    this.basic.sourceOfOrder = "内部创建";
    this.basic.billId = _.uniqueId("bill_");
  }

  // 模块卸载时调用
  onUnload() {
    console.log("onUnload", this);
  }

  // 模块显示时调用
  onShow() {
    _.extend(window, {
      module: this,
    });
    console.log("onShow", this);
  }

  // 私有模块，事件绑定
  private saveBill() {
    YvanUI.alert("保存单据" + JSON.stringify(this.basic));
  }

  private billLoad() {
    // 赋值实体属性，即为改变界面
    this.basic.potype = "6";
    this.basic.ordertype = "13";
    this.basic.settlementType = "1";
    this.basic.paymentType = "2";
  }

  // 实体属性发生变化后，立即调用本函数
  @YvanUI.Watch("basic.paymentType")
  private onPayTypeChange() {
    YvanUI.msg("支付方式发生变化:" + this.basic.paymentType);
  }
}
