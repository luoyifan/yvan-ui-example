export interface Refs {
  menuTree: YvanUI.CtlTree;
  tt: YvanUI.CtlTab;
}

export default abstract class <M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  query: {
    menuFilter: string;
  } = {
      menuFilter: "",
    };

  viewResolver(): any {
    return {
      rows: [
        {
          view: "toolbar",
          height: 63,
          type: "line",
          css: {
            "background-color": "#5fa2dd",
          },
          borderless: true,
          cols: [
            {},
            {
              view: "menu",
              width: 150,
              data: [
                {
                  value: "管理员",
                  submenu: [
                    { value: "修改密码" },
                    { value: "全屏显示" },
                    { value: "退出登录" },
                  ],
                },
              ],
              type: {
                subsign: true,
              },
            },
          ],
        },
        {
          cols: [
            {
              width: 260,
              rows: [
                {
                  view: "form",
                  type: "line",
                  rows: [
                    {
                      cols: [
                        {
                          view: "text",
                          placeholder: "查找功能",
                          width: "auto",
                          entityName: "query.menuFilter",
                          changeValueImplete: true,
                        },
                        {
                          view: "button",
                          value: "全部展开",
                          type: "icon",
                          icon: "fa fa-expand",
                          badge: 5,
                          width: 50,
                          onClick: {
                            type: "function",
                            bind: "expandAll",
                          },
                        },
                        {
                          view: "button",
                          value: "全部收起",
                          type: "icon",
                          icon: "fa fa-compress",
                          badge: 10,
                          width: 50,
                          onClick: {
                            type: "function",
                            bind: "collapseAll",
                          },
                        },
                        {
                          view: "button",
                          type: "icon",
                          icon: "fa fa-refresh",
                          badge: 10,
                          width: 50,
                          onClick: {
                            type: "function",
                            bind: "refreshMenu",
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  view: "tree",
                  select: "multiselect",
                  // drag: "move",
                  ctlName: "menuTree",
                  onDataComplete: {
                    type: 'function',
                    bind: 'treeLoadFinish'
                  },
                  dataSource: {
                    type: "function",
                    bind: "getMenu",
                  },
                  onNodeClick: {
                    type: "function",
                    bind: "menuTreeNodeClick",
                  },
                },
              ],
            },
            {
              view: "resizer",
            },
            {
              view: "tabview",
              css: "maintab",
              ctlName: "tt",
              onTabChanged: {
                type: "function",
                bind: "ttOnTabChanged",
              },
              animate: false,
              tabbarContextMenu: [
                {
                  text: "关闭",
                  onClick: {
                    type: "function",
                    bind: "closeMe",
                  },
                },
                "-",
                {
                  text: "关闭其他",
                  onClick: {
                    type: "function",
                    bind: "closeOther",
                  },
                },
                {
                  text: "全部关闭",
                  onClick: {
                    type: "function",
                    bind: "closeAll",
                  },
                },
              ],
              tabbar: {
                // close: true,
                popupWidth: 300,
                optionWidth: 120,
                tabMinWidth: 120,
              },
              cells: [
                {
                  header: "首页",
                  close: false,
                  body: {
                    id: "MainWindowFirstPage",
                    template: "你好",
                  },
                },
              ],
            },
          ],
        },
        { template: "底部栏", height: 35 },
      ],
    };
  }
}
