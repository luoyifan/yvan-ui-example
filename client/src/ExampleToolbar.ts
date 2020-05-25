interface Refs {
  input1: YvanUI.CtlText;
}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {

  changeText: string = "默认语句";
  i: number = 0;

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
            {},
          ],
        },
        {
          template: "",
          height: 100
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
          template: "",
        },
      ],
    };
  }
}
