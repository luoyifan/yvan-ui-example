import ExampleData from "./ExampleGrid.data";

export interface Refs {
  grid1: YvanUI.CtlGrid;
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
          view: "toolbar",
          borderless: true,
          elements: [
            {
              view: "label",
              label: "表格示例",
              width: 80,
            },
            {
              view: "button",
              text: "Reload",
              onClick: { type: "function", bind: "btnReloadOnClick" },
            },
            {
              view: "button",
              text: "SelectedRow",
              onClick: { type: "function", bind: "btnGetSelectedRowOnClick" },
            },
            {
              view: "button",
              text: "SelectedRows",
              onClick: { type: "function", bind: "btnGetSelectedRowsOnClick" },
            },
            {
              view: "button",
              text: "SelectedId",
              icon: "fa fa-bars",
              onClick: { type: "function", bind: "btnGetSelectedIdOnClick" },
            },
            {},
          ],
        },
        {
          cols: [
            {
              width: "auto",
              view: "text",
              label: "条件1",
              changeValueImplete: true,
              entityName: "query.f1",
            },
            {
              width: "auto",
              view: "text",
              label: "条件2",
              entityName: "query.f2",
            },
            {
              width: "auto",
              view: "text",
              label: "条件3",
              entityName: "query.f3",
            },
            {
              view: "button",
              text: "按钮A",
              onClick: {
                type: "function",
                bind: "f3",
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
          checkbox: true,
          editSingleClick: true,
          editable: true,
          allowNewRow: true,
          newRowData: {},
          saveOn: "finishEdit",
          columns: [
            { field: "user_id", hidden: true },
            {
              title: "操作",
              width: 100,
              buttons: [
                {
                  text: "详情",
                  onClick: { type: "function", bind: "gridRowDetail" },
                },
                {
                  text: "删除",
                  cssType: "danger",
                  onClick: { type: "function", bind: "gridDelete" },
                },
              ],
            },
            {
              field: "login_name",
              title: "登录名",
              editable: true,
              filterable: true,
              sortable: true,
              width: 100,
            },
            {
              field: "staff_name",
              title: "职员姓名",
              editable: true,
              filterable: true,
              sortable: true,
              width: 100,
            },
            {
              field: "user_type",
              title: "用户类型",
              width: 100,
              editable: true,
              sortable: true,
              filterable: true,
              editMode: "combo",
              editParams: {
                data: "userType",
              },
            },
            {
              field: "gender",
              title: "性别",
              width: 70,
              editable: true,
              filterable: true,
              sortable: true,
              editMode: "combo",
              editParams: {
                require: true,
                data: [
                  { id: "M", text: "男" },
                  { id: "F", text: "女" },
                ],
              },
            },
            {
              field: "duty",
              title: "职务",
              editable: false,
              width: 100,
              sortable: true,
              filterable: true,
            },
            {
              field: "mobile",
              title: "手机",
              editable: false,
              width: 120,
              sortable: true,
              filterable: true,
            },
            {
              field: "ui_style",
              title: "界面风格",
              editable: true,
              filterable: true,
              sortable: true,
              width: 100,
              formatter: [
                { id: "light", text: "浅色风格" },
                { id: "dark", text: "暗色风格" },
              ],
            },
            {
              field: "login_count",
              title: "登录次数",
              editable: true,
              filterable: true,
              sortable: true,
              width: 90,
              align: "right",
              editMode: "number",
              //editParams: {
              //    precision: 3
              //}
            },
            {
              field: "last_login_time",
              title: "最后登录时间",
              width: 160,
              editable: true,
              filterable: true,
              sortable: true,
              formatter: "fmtDate",
              editMode: "datetime",
            },
            {
              field: "user_state",
              title: "是否锁定",
              width: 100,
              editMode: "combo",
              sortable: true,
              filterable: true,
              editable: true,
              editParams: {
                data: [
                  { id: "0", text: "锁定" },
                  { id: "1", text: "正常" },
                ],
              },
            },
            {
              field: "birthday",
              title: "生日",
              width: 100,
              editMode: "date",
              sortable: true,
              filterable: true,
              editable: true,
            },
            {
              field: "be_active",
              title: "启用",
              width: 70,
              editable: true,
              filterable: true,
              sortable: true,
              editMode: "checkbox",
              editParams: {
                on: "Y",
                off: "N",
              },
            },
            {
              field: "create_at",
              title: "创建时间",
              editable: false,
              filterable: true,
              width: 160,
              formatter: "fmtDate",
            },
            {
              field: "update_at",
              title: "最后更新时间",
              editable: false,
              filterable: true,
              width: 160,
              formatter: "fmtDate",
            },
          ],
          data: ExampleData.data,
        },
      ],
    };
  }

  query: {
    f1: string;
    f2: string;
    f3: string;
  } = {
      f1: "",
      f2: "",
      f3: "",
    };

  f3() {
    console.log(this.refs.grid1.checkedIds);
  }

  @YvanUI.Watch("query", true, false)
  ffff() {
    YvanUI.msg(`aaa:${JSON.stringify(this.query)}`);
  }

  gridRowDetail(
    sender: YvanUI.CtlGrid,
    args: YvanUI.CtlGridRowButtonClickArgs
  ) {
    YvanUI.msg(`查看行详情 ${args.data.user_id}`);
  }

  gridDelete(sender: YvanUI.CtlGrid, args: YvanUI.CtlGridRowButtonClickArgs) {
    YvanUI.confirm(`真的要删除 "${args.data.staff_name}" ?`).then(() => {
      YvanUI.msg(`行删除 ${args.data.user_id}`);
    });
  }

  setup(sender: YvanUI.CtlGrid) {
    _.extend(window, { grid1: sender });
    console.log("grid1 has set", sender);
  }

  btnReloadOnClick() {
    this.refs.grid1.reload();
  }

  btnGetSelectedRowOnClick() {
    console.log("getSelectedRow", this.refs.grid1.getSelectedRow());
  }

  btnGetSelectedRowsOnClick() {
    console.log("getSelectedRows", this.refs.grid1.getSelectedRows());
  }

  btnGetSelectedIdOnClick() {
    console.log("getSelectedId", this.refs.grid1.getSelectedId());
  }
}
