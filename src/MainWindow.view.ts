export interface Refs {
  menuTree: YvanUI.CtlTree
  tt: YvanUI.CtlTab
}

export default abstract class <M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  query = {
    menuFilter: '',
  };

  viewResolver(): any {
    return {
      rows: [
        {
          view: "toolbar",
          height: 73,
          css: 'mainHeader',
          borderless: true,
          cols: [
            {
              view: "template",
              borderless: true,
              template: '<h2 style="padding-left: 50px;">YvanUI示例</h2>'
            },
            {},
            {
              view: "menu",
              width: 150,
              css: 'headerMenu',
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
          ]
        },
        {
          css: 'mainBox',
          cols: [
            {
              width: 260,
              css: 'mainLeft',
              rows: [
                {
                  view: "form",
                  type: "line",
                  rows: [
                    {
                      view: "text",
                      prompt: "功能筛选",
                      entityName: 'query.menuFilter',
                      changeValueImplete: true
                    }
                  ]
                },
                {
                  view: "tree",
                  select: "multiselect",
                  // drag: "move",
                  ctlName: 'menuTree',
                  onDataComplete: {
                    type: "function",
                    bind: "menuLoadFinish"
                  },
                  dataSource: {
                    type: "function",
                    bind: "getMenu",
                    displayField: 'text',
                    valueField: 'id',
                    parentField: 'parentId'
                  },
                  onNodeClick: {
                    type: 'function',
                    bind: 'menuNodeClick'
                  },
                }
              ]
            },
            { view: 'resizer' },
            {
              view: "tabview",
              css: "maintab",
              ctlName: "tt",
              id: 'tt',
              onRender: {
                type: 'function',
                bind: 'ttOnRender'
              },
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
                  header: `<div class="myTabDiv">首页</div>`,
                  close: false,
                  body: {
                    id: "MainWindowFirstPage",
                    template: "你好",
                  },
                },
              ],
            },
          ],
        }
      ],
    };
  }
}