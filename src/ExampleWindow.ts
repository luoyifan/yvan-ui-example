import DialogC1 from "./DialogC1";

interface Refs { }

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
              text: "对话框回调1",
              width: 250,
              onClick: {
                type: "function",
                bind: "func1",
              },
            },
            {
              view: "button",
              text: "对话框回调2",
              width: 250,
              onClick: {
                type: "function",
                bind: "func2",
              },
            },
            {
              view: "button",
              text: "对话框性能测试",
              width: 250,
              onClick: {
                type: "function",
                bind: "funcPerform",
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
              text: "msgInfo",
              width: 250,
              onClick: {
                type: "function",
                bind: "msgInfoDemo",
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

  promptDemo(this: any) {

    YvanUI.prompt('请输入一个你想要的的内容', "默认值0")
      .then(value => {
        YvanUI.alert('确认:' + value);

      }).catch(() => {
        YvanUI.msg('取消了');
      });
  }

  alertDemo() {
    YvanUI.alert("这里是弹出框的内容，内容很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长!");
  }

  confirmDemo() {
    YvanUI.confirm("确定要这样做？这里是弹出框的内容，内容很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长!")
      .then(() => {
        YvanUI.alert('确认要这样做');

      }).catch(() => {
        YvanUI.msg('取消了');
      });
  }

  errorDemo() {
    YvanUI.error("这里是错误框的内容，内容很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长!");
  }

  msgDemo() {
    YvanUI.msg("这里是 msg 对话框");
  }

  msgErrorDemo() {
    YvanUI.msgError("这里是 msgError 对话框");
  }

  msgInfoDemo() {
    YvanUI.msgInfo("这里是 msgInfo 对话框");
  }

  msgSuccessDemo() {
    YvanUI.msgSuccess("这里是 msgSuccess 对话框");
  }

  showLoading() {
    YvanUI.loading('正在下载...');
    setTimeout(() => {
      YvanUI.clearLoading();
    }, 3000);
  }

  onLoad(): void {
    console.log("setup module:", this);
    _.extend(window, {
      module: this,
    });
  }

  customDialogAtAll() {
    const webix = _.get(window, 'webix');
    const tid = webix.uid()
    function resolve(value: string) {
      YvanUI.msg(value);
    }
    function onConfirm() {
      const value = (webix.$$(tid.toString())).getValue()
      if (value) {
        resolve(value);
        dialog.close();
        return;
      }

      YvanUI.msg('请输入内容');
    }

    const vjson = {
      view: 'window', close: true, move: true, modal: true, position: 'center', resize: true, fullscreen: false,
      head: {
        view: "toolbar", margin: -4, cols: [
          { view: "label", label: "请输入内容", css: 'webix_header webix_win_title' },
          {
            view: "icon", icon: "wxi-plus-square", click: function (this: any) {
              dialog.config.fullscreen = !dialog.config.fullscreen;
              if (dialog.config.fullscreen) {
                dialog.config.oldtop = dialog.config.top;
                dialog.config.oldleft = dialog.config.left;
                dialog.config.left = 0;
                dialog.config.top = 0;
                this.define({ icon: 'wxi-minus-square' });
              } else {
                dialog.config.top = dialog.config.oldtop;
                dialog.config.left = dialog.config.oldleft;
                this.define({ icon: 'wxi-plus-square' });
              }
              dialog.resize();
              this.refresh();
            }
          },
          {
            view: "icon", icon: "wxi-close", click: function () {
              dialog.close();
            }
          }
        ]
      },
      on: {
        onShow() {
          webix.$$(tid).focus();
        },
        onDestruct() {
          console.log('onUnload');
        }
      },
      body: {
        rows: [
          { view: 'text', id: tid, placeholder: '请输入' },
          {
            cols: [
              {},
              {
                view: 'button',
                value: '确定',
                width: 100,
                css: 'yvan_primary',
                click: onConfirm,
              },
              {
                view: 'button',
                value: '取消',
                width: 100,
                css: 'default',
                click: () => {
                  dialog.close()
                }
              }
            ]
          }
        ]
      }

    };
    const dialog = webix.ui(vjson);
    dialog.show();
    $(webix.$$(tid).$view).keydown((e) => {
      if (e.keyCode === 27) {
        dialog.close();
        e.preventDefault();
        return;
      }
      if (e.keyCode === 13) {
        onConfirm();
        e.preventDefault();
        return;
      }
    })
  }

  func1() {
    const dialog = new DialogC1();
    console.time()
    dialog.showDialog(
      {
        content: "内容1",
        success(cap) {
          console.log("success1", cap);
        },
      },
      this
    );
    console.timeEnd()
  }

  func2() {
    const dialog = new DialogC1();
    console.time('单次打开对话框')
    dialog.showDialog(
      {
        content: "内容2",
        success(cap: string) {
          console.log("success2", cap);
        },
        onShow() {
          console.timeEnd('单次打开对话框')
        }
      },
      this
    );
  }

  funcPerform() {
    const CC_COUNT = 200;

    console.time(CC_COUNT + '次对话框性能')
    for (let i = 0; i < 100; i++) {
      const dialog = new DialogC1();
      console.time('单次打开' + i);

      dialog.showDialog(
        {
          content: "内容2",
          success(cap: string) {
            console.log("success2", cap);
          },
          onShow() {
            dialog.closeDialog();
          },
          onClose() {
            console.timeEnd('单次打开' + i);
          }
        },
        this
      );
      dialog.closeDialog();

    }
    console.timeEnd(CC_COUNT + '次对话框性能')
  }
}
