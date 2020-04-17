import * as YvanUI from "yvan-ui";

export interface Refs {
  grid1: YvanUI.CtlGrid;
  grid2: YvanUI.CtlGrid;
  form1: YvanUI.CtlForm;
}

export default abstract class<M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  viewResolver() {
    YvanUI.webix.protoUI(
      {
        name: "myView",
        $init: function (config: any) {
          YvanUI.webix.ui(
            {
              view: "template",
              template: "<h1>12342423</h1>",
            },
            this
          );
        },
      },
      YvanUI.webix.ui.view
    );

    return {
      id: "12345",
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
              label: '<span style="color: white">字典分类管理</span>',
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
                // this.$scope.func1();
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
            {
              view: "button",
              label: "关闭",
              type: "icon",
              icon: "fa fa-times-circle",
              width: 80,
              css: { "margin-right": "20px" },
              click(this: any) {
                // this.$scope.func1();
              },
            },
          ],
        },
        {
          view: "form",
          ctlName: "form1",
          // cols: [
          //     {view: "text", label: "Email"},
          //     {view: "text", type: "password", label: "Password"},
          // ]
          elements: [
            {
              cols: [
                {
                  view: "text",
                  name: "a",
                  label: "检索条件",
                  width: 200,
                  css: { "margin-right": "50px" },
                },
                {
                  view: "combo",
                  name: "b",
                  label: "所属平台",
                  width: 200,
                  css: { "margin-right": "50px" },
                },
                {
                  view: "combo",
                  label: "启用状态",
                  name: "c",
                  width: 200,
                  css: { "margin-right": "50px" },
                  value: "One",
                  options: ["One", "Two", "Three"],
                },
                // {
                //     view: "datepicker",
                //     value: new Date(2012, 6, 8),
                //     label: "Date",
                //     timepicker: true,
                //     width: 300
                // },
                {},
              ],
              // },
              //     {
              //     cols: [
              //
              //         {view: "checkbox", id: "field_a", label: "Second age", value: 1},
              //         {
              //             view: "daterangepicker",
              //             name: "default",
              //             width: 500,
              //             label: "Default",
              //             value: {start: new Date(), end: YvanUI.webix.Date.add(new Date(), 1, "month")}
              //         },
              //         {
              //             view: "daterangepicker",
              //             name: "custom",
              //             width: 500,
              //             label: "Custom",
              //             suggest: {
              //                 view: "daterangesuggest",
              //                 body: {
              //                     calendarCount: 1,
              //                     icons: false,
              //                     timepicker: true
              //                 }
              //             }
              //         },
              //         {}
              //     ]
              // }, {
              //     cols: [
              //         {
              //             view: "multicombo",
              //             label: "To",
              //             value: "1,3",
              //             options: [
              //                 {"id": 1, "value": "Ray M. Parra"},
              //                 {"id": 2, "value": "Sabrina N. Hermann"},
              //                 {"id": 3, "value": "Lane E. Dion"},
              //                 {"id": 4, "value": "Bradly N. Mauro"}
              //             ]
              //         }, {
              //             view: "multiselect",
              //             label: "Participant",
              //             labelWidth: 100,
              //             options: [
              //                 {"id": 1, "value": "Alex Brown"},
              //                 {"id": 2, "value": "Dan Simons"},
              //                 {"id": 3, "value": "Gron Alanski"},
              //                 {"id": 4, "value": "Dan Alanski"}
              //             ],
              //             value: "1,4"
              //         }, {
              //             view: "search",
              //             label: "Participant",
              //             placeholder: "Search..",
              //             width: 300
              //         }
              //     ]
            },
            {
              cols: [
                {
                  view: "radio",
                  label: "radio",
                  value: 3,
                  options: [
                    { id: 1, value: "Master" },
                    { id: 2, value: "Branch" },
                    { id: 3, value: "Cranch" },
                  ],
                },
                { view: "switch", value: 0, label: "Sound" },
                {
                  view: "menu",
                  data: [
                    {
                      id: "1",
                      value: "Translate...",
                      submenu: [
                        "English",
                        {
                          value: "Slavic...",
                          submenu: [
                            "Belarusian",
                            "Russian",
                            { value: "Ukrainian", submenu: ["1", "2"] },
                          ],
                        },
                        "German",
                      ],
                    },
                    {
                      id: "2",
                      value: "Post...",
                      submenu: ["Facebook", "Google+", "Twitter"],
                    },
                    { id: "3", value: "Info" },
                  ],
                },
              ],
            },
          ],
        },
        {
          cols: [
            {
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
                      label: '<span style="color: white">字典分类列表</span>',
                      align: "left",
                    },
                    {
                      view: "button",
                      label: "新增",
                      type: "icon",
                      icon: "fa fa-plus-circle",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) {
                        this.$scope.func2();
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
                        // this.$scope.func1();
                      },
                    },
                    {
                      view: "button",
                      label: "删除",
                      type: "icon",
                      icon: "fa fa-trash-o fa-lg",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) {
                        this.$scope.func1();
                      },
                    },
                  ],
                },
                {
                  view: "grid",
                  ctlName: "grid1",
                  columnDefs: [
                    { headerName: "分类ID", field: "dicTpId" },
                    { headerName: "分类名称", field: "tpName" },
                    { headerName: "分类编码", field: "TpCode" },
                    { headerName: "字典数", field: "count" },
                    { headerName: "启用状态", field: "status" },
                  ],
                  dataSource: {
                    type: "function",
                    bind: "getData",
                  },
                  rowData: [
                    {
                      dicTpId: "1",
                      tpName: "启停状态",
                      TpCode: "status",
                      count: 2,
                      status: 1,
                    },
                    {
                      dicTpId: "2",
                      tpName: "性别",
                      TpCode: "gender",
                      count: 2,
                      status: 1,
                    },
                    {
                      dicTpId: "3",
                      tpName: "消息类型",
                      TpCode: "msgType",
                      count: 3,
                      status: 1,
                    },
                  ],
                },
              ],
            },
            {
              view: "resizer",
            },
            {
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
                      label: '<span style="color: white">字典详情</span>',
                      align: "left",
                    },
                    {
                      view: "button",
                      label: "新增",
                      type: "icon",
                      icon: "fa fa-plus-circle",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) {
                        this.$scope.func2();
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
                        // this.$scope.func1();
                      },
                    },
                    {
                      view: "button",
                      label: "排序",
                      type: "icon",
                      icon: "fa fa-trash-o fa-lg",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) {
                        this.$scope.func1();
                      },
                    },
                  ],
                },
                {
                  view: "grid",
                  ctlName: "grid2",
                  columnDefs: [
                    { headerName: "分类ID", field: "dicTpId" },
                    { headerName: "分类名称", field: "tpName" },
                    { headerName: "分类编码", field: "TpCode" },
                    { headerName: "字典数", field: "count" },
                    { headerName: "启用状态", field: "status" },
                  ],
                  dataSource: {
                    type: "function",
                    bind: "getData",
                  },
                  rowData: [
                    {
                      dicTpId: "1",
                      tpName: "启停状态",
                      TpCode: "status",
                      count: 2,
                      status: 1,
                    },
                    {
                      dicTpId: "2",
                      tpName: "性别",
                      TpCode: "gender",
                      count: 2,
                      status: 1,
                    },
                    {
                      dicTpId: "3",
                      tpName: "消息类型",
                      TpCode: "msgType",
                      count: 3,
                      status: 1,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  }
}
