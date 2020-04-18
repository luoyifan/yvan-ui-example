import SingleGrid from "./singleGrid.data";

export type Refs = {};
export default abstract class <M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  $refs!: Refs;

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
              label: '<span style="color: white">单位列表管理</span>',
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
          cols: [
            {
              rows: [
                {
                  view: "form",
                  ctlName: "singleGridFrom",
                  elements: [
                    {
                      cols: [
                        { view: "text", label: "检索条件", width: 300 },
                        {
                          view: "combo",
                          ctlName: "combol",
                          label: "状态",
                          labelWidth: 100,
                          width: 200,
                          options: [
                            { id: 1, value: "草稿" },
                            { id: 2, value: "发布" },
                            { id: -1, value: "作废" },
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
                      label: '<span style="color: white">单位列表</span>',
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
                        // this.$scope.func1();
                      },
                    },
                    {
                      view: "button",
                      label: "编辑",
                      type: "icon",
                      icon: "fa fa-pencil-square-o",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) { },
                    },
                    {
                      view: "button",
                      label: "发布",
                      type: "icon",
                      icon: "fa fa-arrow-circle-up",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) {
                        // this.$scope.func1();
                      },
                    },
                    {
                      view: "button",
                      label: "作废",
                      type: "icon",
                      icon: "fa fa-minus-square",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) {
                        // this.$scope.func1();
                      },
                    },
                    {
                      view: "button",
                      label: "导入",
                      type: "icon",
                      icon: "fa fa-pencil-square",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) { },
                    },
                    {
                      view: "button",
                      label: "导出",
                      type: "icon",
                      icon: "fa fa-external-link-square",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) {
                        // this.$scope.func1();
                      },
                    },
                  ],
                },
                {
                  view: "grid",
                  ctlName: "grid1",
                  onRender: {
                    type: "function",
                    bind: "setup",
                  },
                  entityName: "gridMain",
                  idField: "user_id",
                  newRowData: {},
                  columns: [
                    {
                      field: "jo_id",
                      tittle: "业务单位",
                      hidden: true,
                    },
                    {
                      field: "jo_code",
                      title: "单位编号",
                      sortable: true,
                      width: 200,
                    },
                    {
                      field: "jo_name",
                      title: "单位名称",
                      maxwidth: "200",
                    },
                    {
                      field: "jo_hisName",
                      title: "单位别名",
                      width: "",
                      maxwidth: "200",
                      minwidth: "0",
                    },
                    {
                      field: "jo_addr",
                      title: "单位地址",
                      maxwidth: "200",
                    },
                    {
                      field: "jo_tel",
                      title: "联系方式",
                      maxwidth: "200",
                    },
                    {
                      field: "remarks",
                      title: "备注",
                      maxwidth: "300",
                      minwidth: "100",
                    },
                    {
                      field: "pub_status",
                      title: "发布状态",
                      width: 100,
                      maxwidth: "200",
                      align: "center",
                      sortable: true,
                      data: [
                        { id: "1", text: "草稿" },
                        { id: "2", text: "发布" },
                        { id: "-1", text: "作废" },
                      ],
                    },
                    {
                      field: "name",
                      title: "更新人",
                    },
                    {
                      field: "role_name",
                      title: "更新角色",
                    },
                    {
                      field: "time_update",
                      title: "更新时间",
                      sortable: true,
                    },
                  ],
                  data: SingleGrid.data,
                },
              ],
            },
            { view: "resizer" },
            {
              rows: [
                {
                  view: "form",
                  ctlName: "singleGridFrom",
                  elements: [
                    {
                      cols: [
                        { view: "text", label: "检索条件", width: 300 },
                        {
                          view: "combo",
                          ctlName: "combo2",
                          label: "状态",
                          labelWidth: 100,
                          width: 200,
                          options: [
                            { id: 1, value: "草稿" },
                            { id: 2, value: "发布" },
                            { id: -1, value: "作废" },
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
                      label: '<span style="color: white">单位列表</span>',
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
                        // this.$scope.func1();
                      },
                    },
                    {
                      view: "button",
                      label: "编辑",
                      type: "icon",
                      icon: "fa fa-pencil-square-o",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) { },
                    },
                    {
                      view: "button",
                      label: "发布",
                      type: "icon",
                      icon: "fa fa-arrow-circle-up",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) {
                        // this.$scope.func1();
                      },
                    },
                    {
                      view: "button",
                      label: "作废",
                      type: "icon",
                      icon: "fa fa-minus-square",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) {
                        // this.$scope.func1();
                      },
                    },
                    {
                      view: "button",
                      label: "导入",
                      type: "icon",
                      icon: "fa fa-pencil-square",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) { },
                    },
                    {
                      view: "button",
                      label: "导出",
                      type: "icon",
                      icon: "fa fa-external-link-square",
                      width: 80,
                      css: { "margin-right": "20px" },
                      click(this: any) {
                        // this.$scope.func1();
                      },
                    },
                  ],
                },
                {
                  view: "grid",
                  ctlName: "grid1",
                  onRender: {
                    type: "function",
                    bind: "setup",
                  },
                  entityName: "gridMain",
                  idField: "user_id",
                  newRowData: {},
                  columns: [
                    {
                      field: "jo_id",
                      tittle: "业务单位",
                      hidden: true,
                    },
                    {
                      field: "jo_code",
                      title: "单位编号",
                      sortable: true,
                      width: 200,
                    },
                    {
                      field: "jo_name",
                      title: "单位名称",
                      maxwidth: "200",
                    },
                    {
                      field: "jo_hisName",
                      title: "单位别名",
                      width: "",
                      maxwidth: "200",
                      minwidth: "0",
                    },
                    {
                      field: "jo_addr",
                      title: "单位地址",
                      maxwidth: "200",
                    },
                    {
                      field: "jo_tel",
                      title: "联系方式",
                      maxwidth: "200",
                    },
                    {
                      field: "remarks",
                      title: "备注",
                      maxwidth: "300",
                      minwidth: "100",
                    },
                    {
                      field: "pub_status",
                      title: "发布状态",
                      width: 100,
                      maxwidth: "200",
                      align: "center",
                      sortable: true,
                      data: [
                        { id: "1", text: "草稿" },
                        { id: "2", text: "发布" },
                        { id: "-1", text: "作废" },
                      ],
                    },
                    {
                      field: "name",
                      title: "更新人",
                    },
                    {
                      field: "role_name",
                      title: "更新角色",
                    },
                    {
                      field: "time_update",
                      title: "更新时间",
                      sortable: true,
                    },
                  ],
                  data: SingleGrid.data,
                },
              ],
            },
          ],
        },
      ],
    };
  }
}
