export interface Refs {
  treeTable1: YvanUI.CtlTreeTable;
  grid1: YvanUI.CtlGrid;
  richselect1: YvanUI.CtlCombo;
  combo1: YvanUI.CtlCombo;
}
export default abstract class <M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  refs!: Refs;
  viewResolver() {
    return {
      responsive: true,
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
                  label: '<span style="color: white">组织结构列表</span>',
                  align: "left",
                },
              ],
            },
            {
              view: "treetable",
              ctlName: "treeTable1",
              width: 350,
              select: true,
              columns: [
                { id: "id", header: "id", hidden: true },
                {
                  id: "value",
                  header: "标题",
                  width: 200,
                  template: "{common.treetable()} #value#",
                },
                {
                  id: "chapter",
                  header: "Mode",
                  fillspace: true,
                  css: { "text-align": "center" },
                },
              ],
              filterMode: {
                level: 1,
              },
            },
            {
              view: "label",
              label: '<span style="color: black;">数量总结</span>',
              align: "left",
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
                  label: '<span style="color: white">用户信息</span>',
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
              ],
            },
            {
              view: "form",
              elements: [
                {
                  cols: [
                    {
                      view: "richselect",
                      ctlName: "richselect1",
                      width: 200,
                      label: "自定义条件1",
                      value: "2",
                      options: [
                        { id: 1, value: "One" }, // the initially selected item
                        { id: 2, value: "Two" },
                        { id: 3, value: "Three" },
                      ],
                    },
                    {
                      view: "combo",
                      ctlName: "combo1",
                      width: 300,
                      label: "自定义条件2",
                      labelAlign: "right",
                      value: "3",
                      options: [
                        { id: 1, value: "One" },
                        { id: 2, value: "Two" },
                        { id: 3, value: "Three" },
                      ],
                    },
                    {},
                  ],
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
            },
          ],
        },
      ],
    };
  }
}
