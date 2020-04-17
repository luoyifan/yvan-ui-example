import * as YvanUI from "yvan-ui";

export type Refs = {};
export default abstract class<M, INP> extends YvanUI.BaseDialog<M, Refs, INP> {
  // $refs!: Refs;

  main: {
    merchant_id: string;
    entity_id: string;
    merchant_name: string;
    merchant_shrotname: string;
    business_license_id: string;
    business_license: string;
    ali_zfb_account: string;
    wx_sub_mch_id: string;
    wx_gzh_app_id: string;
    wx_gzh_app_secret: string;
    wx_gzh_origin_id: string;
  } = {
    merchant_id: "",
    entity_id: "",
    merchant_name: "",
    merchant_shrotname: "",
    business_license_id: "",
    business_license: "",
    ali_zfb_account: "",
    wx_sub_mch_id: "",
    wx_gzh_app_id: "",
    wx_gzh_app_secret: "",
    wx_gzh_origin_id: "",
  };

  viewResolver(): any {
    return {
      title: "title",
      width: 500,
      height: 477,
      modal: false,
      view: "form",
      body: {
        rows: [
          {
            view: "text",
            field: "merchant_name",
            entityName: "main.merchant_name",
            label: "药店名称",
            width: 300,
          },
          {
            view: "text",
            field: "merchant_shrotname",
            entityName: "main.merchant_shrotname",
            label: "药店简称",
            width: 300,
          },
          {
            view: "text",
            field: "business_license_id",
            entityName: "main.business_license_id",
            label: "企业营业执照ID",
            width: 300,
          },
          {
            view: "text",
            field: "ali_zfb_account",
            entityName: "main.ali_zfb_account",
            label: "支付宝收款账户",
            width: 300,
          },
          {
            view: "text",
            field: "wx_sub_mch_id",
            entityName: "main.wx_sub_mch_id",
            label: "微信收款商户号",
            width: 300,
          },
          {
            view: "text",
            field: "wx_gzh_app_id",
            entityName: "main.wx_gzh_app_id",
            label: "微信公众号APPID",
            width: 300,
          },
          {
            view: "text",
            field: "wx_gzh_app_secret",
            entityName: "main.wx_gzh_app_secret",
            label: "微信公众号密钥",
            width: 300,
          },
          {
            view: "text",
            field: "wx_gzh_origin_id",
            entityName: "main.wx_gzh_origin_id",
            label: "微信原始ID",
            width: 300,
          },
          {
            cols: [
              {
                view: "button",
                id: "btnOK",
                label: "确定",
                type: "text",
                icon: "",
                width: 80,
                css: { padding: "0px 0px 0px 100px" },
                click(this: any) {
                  this.$scope.ok();
                },
              },
              {
                view: "button",
                label: "取消",
                type: "text",
                icon: "",
                width: 80,
                css: { padding: "0px 0px 0px 10px" },
                click(this: any) {
                  this.$scope.cancel();
                },
              },
            ],
          },
        ],
      },
    };
  }

  closeMe() {
    this.closeDialog();
  }
}
