import View, { Refs } from "./mdtPadMerchantGridDialog.view";
import * as YvanUI from "yvan-ui";

interface INP {
  content: string;
  isAdd: boolean;
  merchant_id: string;
  entity_id: string;
  success: (cap: any) => void;
}

@YvanUI.BizModule()
export default class Module extends View<Module, INP> {
  onLoad() {
    this.title = this.inParamter.content;
    if (!this.inParamter.isAdd) {
      YvanUI.ajax({
        url: "/mdt/pad/hyb/merchantInfo/merchant_detail.json",
        method: "POST",
        data: {
          id: this.inParamter.merchant_id,
        },
      })
        .then((res: any) => {
          if (res.code === "200") {
            this.main = YvanUI.snakeCase(res.data);
          } else {
            YvanUI.msg(res.msg);
          }
        })
        .finally(() => {});
    }
  }

  ok() {
    this.main.entity_id = this.inParamter.entity_id;
    this.main.merchant_id = this.inParamter.merchant_id;
    $$("btnOK").disable();
    let apiUrl = this.inParamter.isAdd
      ? "/mdt/pad/hyb/merchantInfo/merchant_add.json"
      : "/mdt/pad/hyb/merchantInfo/merchant_update.json";
    YvanUI.ajax({
      url: apiUrl,
      method: "POST",
      data: YvanUI.camelCase(this.main),
    })
      .then((res: any) => {
        if (res.code === "200") {
          this.inParamter.success({});
        } else {
          $$("btnOK").enable();
        }
        YvanUI.msg(res.msg);
      })
      .finally(() => {});
  }

  cancel() {
    this.closeMe();
  }
}
