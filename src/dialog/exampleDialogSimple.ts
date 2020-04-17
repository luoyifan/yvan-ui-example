import * as YvanUI from "yvan-ui";

export type Refs = {
  // combo1: YvanUI.CtlCombo
};
@YvanUI.BizModule()
export default abstract class<M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  viewResolver() {
    return {
      rows: [
        {
          cols: [
            {
              view: "button",
              label: "查询",
              type: "icon",
              icon: "fa fa-search",
              width: 200,
              css: { "margin-right": "20px" },
              click(this: any) {
                YvanUI.webix.ui({
                  container: "testDialog",
                  rows: [
                    {
                      view: "button",
                      label: "查询",
                      type: "icon",
                      icon: "fa fa-search",
                    },
                    {
                      view: "button",
                      label: "查询",
                      type: "icon",
                      icon: "fa fa-search",
                    },
                    {
                      cols: [
                        {
                          view: "button",
                          label: "查询",
                          type: "icon",
                          icon: "fa fa-search",
                        },
                        {
                          view: "button",
                          label: "查询",
                          type: "icon",
                          icon: "fa fa-search",
                        },
                        {
                          view: "button",
                          label: "查询",
                          type: "icon",
                          icon: "fa fa-search",
                        },
                      ],
                    },
                  ],
                  on: {
                    onInited: function (this: any) {
                      const that = this;
                      $(window).resize(() => {
                        webix.$$(that).resize();
                      });
                    },
                  },
                });
              },
            },
            {},
          ],
        },
        {
          view: "template",
          template:
            '<div id="testDialog" style="width: auto; height: 400px; background-color: #5faee3"></div>',
          on: {
            onAfterRender: function (this: any) {
              const that = this;
              $(window).resize(() => {
                webix.$$(that).resize();
              });
            },
            onDestruct: function () {
              debugger;
            },
          },
        },
        {},
      ],
    };
  }
}
