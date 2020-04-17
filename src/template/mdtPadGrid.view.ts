import * as YvanUI from "yvan-ui";

export type Refs = {
  grid: YvanUI.CtlGrid;
};
export default abstract class<M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  // $refs!: Refs;
  dsQuery!: {
    linkman: string;
    telephone: string;
    state: string;
    entity_id: string;
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
              width: 120,
              label: '<span style="color: white">账号列表管理</span>',
              align: "left",
            },
            {
              view: "button",
              label: "查询",
              type: "icon",
              icon: "fa fa-search",
              width: 80,
              css: { "margin-right": "20px" },
              click(this: any) {
                this.$scope.onLoad();
              },
            },

            {
              view: "button",
              label: "重置",
              type: "icon",
              icon: "fa fa-refresh",
              width: 80,
              css: { "margin-right": "20px" },
              click(this: any) {
                this.$scope.resetForm();
              },
            },
            // {
            //     view: 'button', label: '关闭', type: "icon", icon: "fa fa-times-circle", width: 80,
            //     css: { "margin-right": "20px" },
            //     click(this: any) {
            //         // this.$scope.func1();
            //     }
            // },
          ],
        },
        {
          view: "form",
          ctlName: "singleGridFrom",
          elements: [
            {
              cols: [
                {
                  view: "text",
                  label: "管理者姓名",
                  width: 300,
                  entityName: "dsQuery.linkman",
                },
                {
                  view: "text",
                  label: "联系人手机号",
                  width: 300,
                  entityName: "dsQuery.telephone",
                },
                {
                  view: "combo",
                  ctlName: "selectl",
                  label: "状态",
                  labelWidth: 100,
                  labelAlign: "right",
                  width: 200,
                  entityName: "dsQuery.state",
                  options: [
                    { id: "-1", text: "全部" },
                    { id: "1", text: "启用" },
                    { id: "2", text: "停用" },
                  ],
                  onChange: {
                    type: "function",
                    bind: "selectOnChange",
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
              label: '<span style="color: white">账号列表</span>',
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
              label: "启用",
              type: "icon",
              icon: "fa fa-arrow-circle-up",
              width: 80,
              css: { "margin-right": "20px" },
              click(this: any) {
                this.$scope.qiyong();
              },
            },
            {
              view: "button",
              label: "停用",
              type: "icon",
              icon: "fa fa-minus-square",
              width: 80,
              css: { "margin-right": "20px" },
              click(this: any) {
                this.$scope.tingyong();
              },
            },
            {
              view: "button",
              label: "药店管理",
              type: "icon",
              icon: "fa fa-pencil-square",
              width: 100,
              css: { "margin-right": "20px" },
              click(this: any) {
                this.$scope.merchantManager();
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
          idField: "entity_id",
          newRowData: {},
          columns: [
            {
              field: "entity_id",
              tittle: "id",
              hidden: true,
            },
            // {
            //     title: '操作', width: 100,
            //     buttons: [
            //         {
            //             text: '编辑',
            //             onClick: {type: 'function', bind: 'edit2'}
            //         },
            //         {
            //             text: '删除', cssType: 'danger',
            //             onClick: {type: 'function', bind: 'edit2'},
            //         }
            //     ]
            // },
            {
              field: "linkman",
              title: "管理者姓名",
              sortable: true,
              width: 200,
            },
            {
              field: "telephone",
              title: "联系人手机号",
              maxwidth: "200",
            },
            {
              field: "address",
              title: "联系地址",
              width: "",
              maxwidth: "200",
              minwidth: "0",
            },
            {
              field: "merchant_count",
              title: "关联药店",
              maxwidth: "200",
            },
            {
              field: "state",
              title: "状态",
              maxwidth: "200",
              formatter: function (v: number) {
                if (_.toString(v) === "1") {
                  return "启用";
                } else if (_.toString(v) === "2") {
                  return "停用";
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
