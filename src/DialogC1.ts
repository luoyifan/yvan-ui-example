import * as YvanUI from "yvan-ui";
import selectOrg from "./widgets/selectOrg";

interface INP {
  content: string;
  success: (cap: string) => void;
}

interface Refs {}

let seq: number = 1;

const events = {
  onClick: {
    type: "function",
    bind: "onClick",
  },
  // onEnter: {
  //     type: 'function',
  //     bind: 'onEnter'
  // },
  onFocus: {
    type: "function",
    bind: "onFocus",
  },
  onChange: {
    type: "function",
    bind: "onChange",
  },
  onBlur: {
    type: "function",
    bind: "onBlur",
  },
  onKeydown: {
    type: "function",
    bind: "onKeydown",
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
      height: 200,
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
          },
          {
            view: "combo",
            options: [
              { id: "1", text: "a1" },
              { id: "2", text: "a2" },
              { id: "3", text: "a3" },
              { id: "4", text: "a4" },
            ],
          },
          {
            view: "combo",
            options: [
              { id: "1", text: "a1" },
              { id: "2", text: "a2" },
              { id: "3", text: "a3" },
              { id: "4", text: "a4" },
            ],
          },
          {},
        ],
      },
    };
  }

  onClose() {
    YvanUI.msg("onClose");
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
