import selectOrg from "./widgets/selectOrg";

interface INP {
  content: string;
  success: (cap: string) => void;
  onShow?: Function;
  onClose?: Function;
}

interface Refs { }

let seq: number = 1;

const events = {
  onClick: {
    type: "function",
    bind: "onTextClick",
  },
  // onEnter: {
  //     type: 'function',
  //     bind: 'onEnter'
  // },
  onFocus: {
    type: "function",
    bind: "onTextFocus",
  },
  onChange: {
    type: "function",
    bind: "onTextChange",
  },
  onBlur: {
    type: "function",
    bind: "onTextBlur",
  },
  onKeydown: {
    type: "function",
    bind: "onTextKeydown",
  },
};

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseDialog<Module, Refs, INP> {
  query = {
    org_id: "",
    org_name: "",
  };

  i: number = 1;

  viewResolver(): any {
    seq++;
    return {
      title: "对话框C1-" + seq,
      width: 600,
      modal: true,
      btn: ["按钮A", "按钮B"],
      body: {
        rows: [
          {
            cols: [
              {
                view: "button",
                text: "关闭",
                onClick: {
                  type: "function",
                  bind: "closeMe",
                },
              },
              {
                view: "button",
                text: "传回父容器",
                onClick: {
                  type: "function",
                  bind: "sendParent",
                },
              },
              {
                view: "button",
                text: "继续打开对话框",
                onClick: {
                  type: "function",
                  bind: "openNew",
                },
              },
              {}
            ],
          },
          {
            view: "search",
            ctlName: "seachboxOrgName",
            entityName: "query.org_name",
            label: "组织机构查找",
            widget: {
              content: selectOrg,
              bind: {
                "query.org_id": "org_id",
                "query.org_name": "org_name",
              },
            },
            // ...events,
          },
          {
            view: "combo",
            options: [
              { id: "1", text: "a1" },
              { id: "2", text: "a2" },
              { id: "3", text: "a3" },
              { id: "4", text: "a4" },
            ],
            ...events,
          },
          {
            view: "combo",
            options: [
              { id: "1", text: "a1" },
              { id: "2", text: "a2" },
              { id: "3", text: "a3" },
              { id: "4", text: "a4" },
            ],
            ...events,
          },
          {
            view: "combo",
            options: [
              { id: "1", text: "a1" },
              { id: "2", text: "a2" },
              { id: "3", text: "a3" },
              { id: "4", text: "a4" },
            ],
            ...events,
          },
        ],
      },
    };
  }

  onLoad() {
    YvanUI.msg("onLoad");
    if (this.inParamter.onShow) {
      this.inParamter.onShow(this);
    }
  }

  onClose() {
    YvanUI.msg("onClose");
    if (this.inParamter.onClose) {
      this.inParamter.onClose(this);
    }
  }

  onEsc() {
    YvanUI.msg("onEsc");
  }

  onEnter() {
    YvanUI.msg("onEnter");
  }

  closeMe() {
    this.closeDialog();
  }

  onTextClick(sender: any) {
    console.log('onTextClick', sender, arguments);
  }

  onTextFocus(sender: any) {
    console.log('onTextFocus', sender, arguments);
  }

  onTextChange(sender: any) {
    console.log('onTextChange', sender, arguments);
  }

  onTextBlur(sender: any) {
    console.log('onTextBlur', sender, arguments);
  }

  onTextKeydown(sender: any) {
    console.log('onTextKeydown', sender, arguments);
  }

  sendParent() {
    this.inParamter.success(`传回一段字符串 ${this.i++}`);
  }

  openNew() {
    const dialog = new Module();
    dialog.showDialog(this.inParamter, this.dialogParent);
  }

  destroy(): void {
    console.log("desc");
  }
}
