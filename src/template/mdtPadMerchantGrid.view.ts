import * as YvanUI from "yvan-ui";

export type Refs = {
  grid: YvanUI.CtlGrid;
};
export default abstract class<M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  // $refs!: Refs;
  dsQuery!: {
    telephone: string;
  };

  gridMain: {
    selectedRow: any;
  } = {
    selectedRow: undefined,
  };

  viewResolver() {
    return {
      rows: [
        {
          view: "form",
          ctlName: "singleGridFrom",
          elements: [
            {
              cols: [
                {
                  view: "template",
                  // css: "webix_el_box",
                  // width: "200",
                  height: "20",
                  borderless: true,
                  template: function () {
                    return '联系人账号:<input id="telephone" style="border:0;"></input>';
                  },
                },

                {},
              ],
            },
          ],
        },
        {
          view: "toolbar",
          height: 38,
          type: "line",
          css: {
            "background-color": "#004c8b",
          },
          borderless: true,
          cols: [
            {
              view: "label",
              width: 80,
              label: '<span style="color: white">药店列表</span>',
              align: "left",
            },
            {
              view: "button",
              label: "新增",
              type: "icon",
              icon: "fa fa-plus-circle fa-lg",
              width: 80,
              css: { "margin-right": "20px" },
              click(this: any) {
                this.$scope.add();
              },
            },
            {
              view: "button",
              label: "编辑",
              type: "icon",
              icon: "fa fa-pencil-square-o",
              width: 80,
              css: { "margin-right": "20px" },
              click(this: any) {
                this.$scope.edit();
              },
            },
            {
              view: "button",
              label: "上线",
              type: "icon",
              icon: "fa fa-arrow-circle-up",
              width: 80,
              css: { "margin-right": "20px" },
              click(this: any) {
                this.$scope.online();
              },
            },
            {
              view: "button",
              label: "下线",
              type: "icon",
              icon: "fa fa-minus-square",
              width: 80,
              css: { "margin-right": "20px" },
              click(this: any) {
                this.$scope.offline();
              },
            },
            // {
            //     view: 'button', label: '导出', type: "icon", icon: "fa fa-external-link-square", width: 80,
            //     css: { "margin-right": "20px" },
            //     click(this: any) {
            //         // this.$scope.func1();
            //     }
            // },
          ],
        },
        {
          view: "grid",
          ctlName: "grid",
          onRender: {
            type: "function",
            bind: "setup",
          },
          entityName: "gridMain",
          idField: "user_id",
          newRowData: {},
          columns: [
            {
              field: "merchant_id",
              tittle: "id",
              hidden: true,
            },
            {
              field: "merchant_name",
              title: "药店名称",
            },
            {
              field: "merchant_shrotname",
              title: "药店简称",
            },
            {
              field: "business_license_id",
              title: "企业营业执照ID",
            },
            {
              field: "ali_zfb_account",
              title: "支付宝收款账户",
            },
            {
              field: "wx_sub_mch_id",
              title: "微信收款商户号",
            },
            {
              field: "wx_gzh_app_id",
              title: "公众号APPID",
            },
            {
              field: "online",
              title: "状态",
              formatter: function (v: number) {
                if (_.toString(v) === "1") {
                  return "上线";
                } else if (_.toString(v) === "2") {
                  return "下线";
                } else {
                  return "";
                }
              },
              onStyle: function (param: any) {
                // 单元格颜色渲染示例
                if (!param.data) {
                  // 数据还没有被 ajax 读取到表格，不用做任何事情
                  return;
                }
                switch (_.toString(param.value)) {
                  case "1":
                    return { color: "green" };

                  case "2":
                    return { color: "red" };
                }
              },
            },
          ],
          data: [],
        },
      ],
    };
  }
}
