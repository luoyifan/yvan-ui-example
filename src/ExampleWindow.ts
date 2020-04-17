import * as YvanUI from "yvan-ui";
import DialogC1 from "./DialogC1";

interface Refs {}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {
  i: number = 1;

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
              text: "自定义对话框1",
              width: 250,
              onClick: {
                type: "function",
                bind: "func1",
              },
            },
            {
              view: "button",
              text: "自定义对话框2",
              width: 250,
              onClick: {
                type: "function",
                bind: "func2",
              },
            },
            {},
          ],
        },
        {
          cols: [
            {
              view: "button",
              text: "alert",
              width: 250,
              onClick: {
                type: "function",
                bind: "alertDemo",
              },
            },
            {
              view: "button",
              text: "error",
              width: 250,
              onClick: {
                type: "function",
                bind: "errorDemo",
              },
            },
            {
              view: "button",
              text: "confirm",
              width: 250,
              onClick: {
                type: "function",
                bind: "confirmDemo",
              },
            },
            {
              view: "button",
              text: "prompt",
              width: 250,
              onClick: {
                type: "function",
                bind: "promptDemo",
              },
            },
            {},
          ],
        },
        {
          cols: [
            {
              view: "button",
              text: "msg",
              width: 250,
              onClick: {
                type: "function",
                bind: "msgDemo",
              },
            },
            {
              view: "button",
              text: "msgError",
              width: 250,
              onClick: {
                type: "function",
                bind: "msgErrorDemo",
              },
            },
            {
              view: "button",
              text: "msgSuccess",
              width: 250,
              onClick: {
                type: "function",
                bind: "msgSuccessDemo",
              },
            },
            {},
          ],
        },
        {},
      ],
    };
  }

  promptDemo() {
    YvanUI.prompt("请输入内容").then((res) => {
      YvanUI.msg(res);
    });
  }

  alertDemo() {
    YvanUI.alert(
      "弹出Alert弹出Alert弹出Alert弹出Alert弹出Alert弹出Alert弹出Alert弹出Alert弹出Alert弹出Alert弹出Alert"
    );
  }

  confirmDemo() {
    YvanUI.confirm("确定要这样做？").then(() => {
      YvanUI.msg("确认");
    });
  }

  errorDemo() {
    YvanUI.error(
      "弹出Error对话框弹出Error对话框弹出Error对话框弹出Error对话框弹出Error对话框弹出Error对话框弹出Error对话框弹出Error对话框"
    );
  }

  msgDemo() {
    YvanUI.msg("这里是 msg 对话框");
  }

  msgErrorDemo() {
    YvanUI.msgError("这里是 msgError 对话框");
  }

  msgSuccessDemo() {
    YvanUI.msgSuccess("这里是 msgSuccess 对话框");
  }

  onLoad(): void {
    console.log("setup module:", this);
    _.extend(window, {
      module: this,
    });
  }

  func1() {
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

  func2() {
    const dialog = new DialogC1();

    dialog.showDialog(
      {
        content: "内容2",
        success(cap: string) {
          console.log("success2", cap);
        },
      },
      this
    );
  }
}
