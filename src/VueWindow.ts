import { Component, Vue } from "vue-property-decorator";
import * as YvanUI from "yvan-ui";
import TestBody from "./TestBody";

@Component({
  template: `
    <webix-ui ref='webixui' :config='viewResolver'/>
`,
})
export default class User extends Vue {
  showHello = false;
  name: string = "";
  age: number = 0;

  get viewResolver(): any {
    return {
      responsive: true,
      rows: [
        {
          view: "toolbar",
          height: 63,
          type: "line",
          css: {
            "background-color": "#004c8b",
          },
          borderless: true,
          cols: [
            {
              view: "template",
              css: {
                background:
                  "url(/static/images/logo.png) left center no-repeat",
              },
            },
            {
              view: "text",
              value: this.age,
            },
            {
              view: "button",
              value: "按钮1",
              click: this.onShowHelloClick,
            },
            {
              view: "button",
              value: "添加body",
              click: this.onAddTabsClick,
            },
            {
              view: "button",
              value: "切换treeData",
              click: this.changeTreeData,
            },
            {
              view: "button",
              value: "删除",
              click: this.onDelete,
            },
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
                  elements: [{ view: "text", placeholder: "查找功能" }],
                },
                {
                  view: "tree",
                  id: "menuTree",
                  select: true,
                  data: [
                    {
                      id: "root",
                      value: "Cars",
                      open: true,
                      data: [
                        {
                          id: "1",
                          open: true,
                          value: "Toyota",
                          data: [
                            { id: "1.1", value: "Avalon" },
                            { id: "1.2", value: "Corolla" },
                            { id: "1.3", value: "Camry" },
                          ],
                        },
                        {
                          id: "2",
                          value: "Skoda",
                          open: true,
                          data: [
                            { id: "2.1", value: "Octavia" },
                            { id: "2.2", value: "Superb" },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              view: "resizer",
            },
            {
              view: "tabview",
              id: "tabs",
              animate: false,
              // multiview: {
              //     fitBiggest: false
              // },
              tabbar: {
                // close: true,
                popupWidth: 300,
                optionWidth: 120,
                tabMinWidth: 120,
              },
              cells: [
                {
                  view: "view",
                  id: "tab_1",
                  header: "首页",
                  close: true,
                  body: new TestBody().init(1),
                },
                {
                  id: "tab_2",
                  header: "首页",
                  close: true,
                  body: new TestBody().init(2),
                },
              ],
            },
          ],
        },
        { template: "底部栏", height: 35 },
      ],
    };
  }

  mounted() {
    YvanUI.webix.event(window, "resize", () => {
      YvanUI.webix.$$((<any>this.$refs.webixui).webixId).resize();
    });

    YvanUI.webix
      .$$("menuTree")
      .attachEvent("onItemClick", (item: any, a: any) => {
        // event handler code
        if (YvanUI.webix.$$(item)) {
          YvanUI.webix.$$(item).show();
          return;
        }
        const data = YvanUI.webix.$$("menuTree").data.pull[item];

        YvanUI.webix.$$("tabs").addView({
          header: data.value,
          close: true,
          body: new TestBody().init(data.item),
          // body: (() => {
          //
          //     // const moduleClass: any = data.url;
          //     // const module = new moduleClass();
          //     // debugger
          //     // return module.init(data.item);
          //
          //     // return new TestBody().init(data.item);
          //     return import(data.url).then((inp) => {
          //         const moduleClass: any = inp.default;
          //         const module = new moduleClass();
          //         debugger
          //         return module.init(data.item);
          //     });
          // })()
        });
      });
  }

  onDelete() {
    this.$destroy();
  }

  onShowHelloClick() {
    this.age++;
    this.showHello = !this.showHello;
    console.log(this.age);

    YvanUI.webix.$$("tabs");
    debugger;
  }

  onAddTabsClick() {
    YvanUI.webix.$$("tabs").addView({
      header: "首页3",
      close: true,
      body: new TestBody().init(3),
    });
  }

  changeTreeData() {
    YvanUI.webix.$$("menuTree").load({
      $proxy: true,
      load: function (data: any) {
        YvanUI.webix.$$("menuTree").clearAll();
        return [
          {
            id: "1",
            open: true,
            value: "标准模版",
            data: [
              { id: "1.1", value: "单表", url: "TestBody" },
              { id: "1.2", value: "双表", url: "TestBody" },
              { id: "1.3", value: "树表", url: "TestBody" },
            ],
          },
        ];
      },
    });
  }
}
