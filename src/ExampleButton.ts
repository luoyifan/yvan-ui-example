interface Refs {
  input1: YvanUI.CtlText;
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
          cols: [
            {
              view: "button",
              onRender: {
                type: "function",
                bind: "render",
              },
              ctlName: "btn1",
              text: "默认",
              icon: "fa fa-bars",
              onClick: {
                type: "function",
                bind: "click1",
              },
            },
            {
              view: "button",
              text: "主要",
              icon: "fa fa-bars",
              cssType: "primary",
            },
            {
              view: "button",
              text: "红色警告",
              icon: "fa fa-bars",
              cssType: "danger",
            },
            {
              view: "button",
              text: "绿色成功",
              icon: "fa fa-bars",
              cssType: "success",
            },
            {},
          ],
        },
        {
          cols: [
            {
              view: "button",
              text: "默认",
            },
            {
              view: "button",
              text: "主要",
              cssType: "primary",
            },
            {
              view: "button",
              text: "红色警告",
              cssType: "danger",
            },
            {
              view: "button",
              text: "绿色成功",
              cssType: "success",
            },
            {},
          ],
        },
        {
          view: "toolbar",
          elements: [
            {
              view: "label",
              label: "主数据管理系统",
              width: 140,
            },
            {
              view: "button",
              text: "默认",
            },
            {
              view: "button",
              text: "主要",
              cssType: "primary",
            },
            {
              view: "button",
              text: "红色警告",
              cssType: "danger",
            },
            {
              view: "button",
              text: "绿色成功",
              cssType: "success",
            },
            {
              view: "button",
              text: "默认",
              icon: "fa fa-bars",
            },
            {
              view: "button",
              text: "主要",
              icon: "fa fa-bars",
              cssType: "primary",
            },
            {
              view: "button",
              text: "红色警告",
              icon: "fa fa-bars",
              cssType: "danger",
            },
            {
              view: "button",
              text: "绿色成功",
              icon: "fa fa-bars",
              cssType: "success",
            },
            {},
          ],
        },
        {
          view: "toolbar",
          css: "dark",
          elements: [
            {
              view: "label",
              label: "主数据管理系统",
              width: 140,
            },
            {
              view: "button",
              text: "默认",
            },
            {
              view: "button",
              text: "主要",
              cssType: "primary",
            },
            {
              view: "button",
              text: "红色警告",
              cssType: "danger",
            },
            {
              view: "button",
              text: "绿色成功",
              cssType: "success",
            },
            {
              view: "button",
              text: "默认",
              icon: "fa fa-bars",
            },
            {
              view: "button",
              text: "主要",
              icon: "fa fa-bars",
              cssType: "primary",
            },
            {
              view: "button",
              text: "红色警告",
              icon: "fa fa-bars",
              cssType: "danger",
            },
            {
              view: "button",
              text: "绿色成功",
              icon: "fa fa-bars",
              cssType: "success",
            },
            {},
          ],
        },
        {
          template: "在控制台 btn1 就代表按钮",
        },
      ],
    };
  }

  render(sender: YvanUI.CtlButton) {
    _.extend(window, { btn1: sender });
    console.log("btn1 has set", sender);
  }

  click1() {
    console.log("click1");
  }
}