export interface Refs {
  theGrid: YvanUI.CtlGrid;
}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {
  viewResolver(): any {
    return {
      rows: [
        {
          view: "grid",
          ctlName: "theGrid",
          idField: "user_id",
          pagination: false,
          columns: [
            {
              field: "user_id",
              hidden: true
            },
            {
              title: "操作",
              width: 100,
              buttons: [
                {
                  text: "详情",
                  onClick: {
                    type: "function",
                    bind: "gridRowDetail"
                  },
                },
                {
                  text: "删除",
                  cssType: "danger",
                  onClick: {
                    type: "function",
                    bind: "gridDelete"
                  },
                },
              ],
            },
            {
              field: "login_name",
              title: "登录名",
              width: 100,
            },
            {
              field: "staff_name",
              title: "职员姓名",
              width: 100,
            },
            {
              field: "gender",
              title: "性别",
              width: 70,
              formatter: [
                { id: "M", text: "男" },
                { id: "F", text: "女" },
              ],
            },
            {
              field: "duty",
              title: "职务",
              width: 100,
            },
            {
              field: "mobile",
              title: "手机",
              width: 120,
            },
            {
              field: "ui_style",
              title: "界面风格",
              width: 100,
              formatter: [
                { id: "light", text: "浅色风格" },
                { id: "dark", text: "暗色风格" },
              ],
            },
            {
              field: "login_count",
              title: "登录次数",
              width: 90,
              align: "right",
              filterable: true,
              sortable: true,
            },
            {
              field: "last_login_time",
              title: "最后登录时间",
              width: 160,
              formatter: "fmtDate",
            },
            {
              field: "user_state",
              title: "是否锁定",
              width: 100,
              formatter: [
                { id: "0", text: "锁定" },
                { id: "1", text: "正常" },
              ],
              onStyle({ value: e }) {
                if (e == "1") {
                  return { color: 'green' }
                }
                return { color: 'red' }
              }
            },
            {
              field: "birthday",
              title: "生日",
              width: 100,
            },
            {
              field: "create_at",
              title: "创建时间",
              width: 160,
              formatter: "fmtDate",
            },
            {
              field: "update_at",
              title: "最后更新时间",
              width: 160,
              formatter: "fmtDate",
            },
          ],
          dataSource: {
            type: 'function',
            bind: "getGridDataSource"
          }
        },
      ],
    };
  }

  getGridDataSource(sender: YvanUI.CtlGrid, params: YvanUI.GridDataSourceStaticFunctionParam) {

    let dataArray: any[] = [];
    for (let index = 0; index < 200; index++) {
      const value = parseInt((Math.random() * 1000).toString()) % 2;
      const element = {
        'user_id': 'USER000000' + index,
        'login_name': 'admin' + index,
        'staff_name': '管理员' + index,
        'gender': value ? "M" : "F",
        'duty': '系统管理员' + index,
        'mobile': '17671794087',
        'user_state': value,
        'login_count': parseInt((Math.random() * 1000).toString()),
        'birthday': '1993-10-0' + index % 30,
        'last_login_time': 1559642281000,
        'create_at': 1559642281000,
        'update_at': 1559642281000,
        'ui_style': value ? 'light' : 'dark'
      };
      dataArray.push(element);
    }
    return params.successCallback(dataArray, dataArray.length);
  }
}
