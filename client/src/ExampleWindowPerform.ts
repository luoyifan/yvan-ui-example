import DialogC1 from "./DialogC1";

interface Refs { }

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {
  i: number = 1;

  onLoad(): void {
    console.log("setup module:", this);
    _.extend(window, {
      module: this,
    });
  }

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
              text: "dialog性能测试",
              width: 250,
              onClick: {
                type: "function",
                bind: "dialogPerform",
              },
            },
            {
              view: "button",
              text: "alert性能测试",
              width: 250,
              onClick: {
                type: "function",
                bind: "alertPerform",
              },
            },
            {
              view: "button",
              text: "msg性能测试",
              width: 250,
              onClick: {
                type: "function",
                bind: "msgPerform",
              },
            },
            {},
          ],
        },
        {
          cols: [
            {
              view: "button",
              text: "loading",
              width: 250,
              onClick: {
                type: "function",
                bind: "showLoading",
              },
            },
            {}
          ]
        },
        {},
      ],
    };
  }

  alertPerform() {
    const CC_COUNT = 10;

    console.time(CC_COUNT + '次对话框性能')
    for (let i = 0; i < CC_COUNT; i++) {
      YvanUI.alert(i + "这里是弹出框的内容，内容很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长!");
    }
    console.timeEnd(CC_COUNT + '次对话框性能')
  }

  msgPerform() {
    const CC_COUNT = 10;

    console.time(CC_COUNT + '次对话框性能')
    for (let i = 0; i < CC_COUNT; i++) {
      YvanUI.msg("这里是 msg 对话框" + i);
    }
    console.timeEnd(CC_COUNT + '次对话框性能')
  }

  dialogPerform() {
    const CC_COUNT = 10;

    console.time(CC_COUNT + '次对话框性能')
    for (let i = 0; i < CC_COUNT; i++) {
      const dialog = new DialogC1();
      dialog.showDialog(
        {
          content: "内容1",
          success(cap) {
            console.log("success1", cap);
          },
        },
        this
      );
    }
    console.timeEnd(CC_COUNT + '次对话框性能')
  }

  showLoading() {
    YvanUI.loading('正在下载...');
    setTimeout(() => {
      YvanUI.clearLoading();
    }, 3000);
  }
}
