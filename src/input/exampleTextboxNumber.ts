import * as YvanUI from "yvan-ui";

interface Refs {
  text1: YvanUI.CtlText;
}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {
  i: number = 1;
  property: {
    value: string;
  } = {
    value: "0",
  };

  viewResolver(): any {
    return {
      rows: [
        {
          view: "form",
          cols: [
            {
              view: "number",
              required: true,
              label: "请输入",
              changeValueImplete: false,
              ctlName: "number1",
              entityName: "property.value",
              onRender: {
                type: "function",
                bind: "render",
              },
              // onClick: {
              //     type: 'function',
              //     bind: 'onClick'
              // },
              // onEnter: {
              //     type: 'function',
              //     bind: 'onEnter'
              // },
              // onFocus: {
              //     type: 'function',
              //     bind: 'onFocus'
              // },
              //
              // onBlur: {
              //     type: 'function',
              //     bind: 'onBlur'
              // },
              // onKeydown: {
              //     type: 'function',
              //     bind: 'onKeydown'
              // },
              // onInput: {
              //     type: 'function',
              //     bind: 'onInput'
              // },
              onChange: {
                type: "function",
                bind: "onChange",
              },
            },
            {},
          ],
        },
        {
          template: "在控制台 number1 就代表按钮",
        },
      ],
    };
  }

  onLoad() {
    _.extend(window, { module: this });
    console.log("module has set", this);
  }

  render(sender: YvanUI.CtlNumber) {
    _.extend(window, { number1: sender });
    console.log("number1 has set", sender);
  }

  onClick(sender: YvanUI.CtlNumber) {
    console.log("number1 onClick", sender);
  }

  onEnter(sender: YvanUI.CtlNumber) {
    console.log("number1 onEnter", sender);
  }

  onFocus(sender: YvanUI.CtlNumber) {
    console.log("number1 onFocus", sender);
  }

  onChange(sender: YvanUI.CtlNumber) {
    console.log("number1 onChange", sender);
  }

  onBlur(sender: YvanUI.CtlNumber) {
    console.log("number1 onBlur", sender);
  }

  onKeydown(sender: YvanUI.CtlNumber, event: KeyboardEvent) {
    console.log("number1 onKeydown", event);
  }

  onInput(sender: YvanUI.CtlNumber) {
    console.log("number1 onInput", sender);
  }
}
