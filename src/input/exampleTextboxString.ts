interface Refs {
  text1: YvanUI.CtlText;
}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {
  i: number = 1;
  property: {
    value: string;
  } = {
    value: "当前值",
  };

  viewResolver(): any {
    return {
      rows: [
        {
          view: "form",
          cols: [
            {
              view: "text",
              required: true,
              label: "请输入",
              changeValueImplete: false,
              maxlength: 10,
              ctlName: "text1",
              entityName: "property.value",
              // invalid: false,
              validate: "number & <10 | number & >100 & <20000", //'number',
              invalidMessage: "Incorrect e-mail address",
              suggest: [
                { id: 1, value: "新疆" },
                { id: 2, value: "西藏" },
                { id: 3, value: "内蒙" },
                { id: 4, value: "甘肃" },
                { id: 5, value: "宁夏" },
                { id: 6, value: "陕西" },
              ],
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
          template: "在控制台 text1 就代表按钮",
        },
      ],
    };
  }

  onLoad() {
    _.extend(window, { module: this });
    console.log("module has set", this);
  }

  render(sender: YvanUI.CtlButton) {
    _.extend(window, { text1: sender });
    console.log("text1 has set", sender);
  }

  onClick(sender: YvanUI.CtlButton) {
    console.log("text1 onClick", sender);
  }

  onEnter(sender: YvanUI.CtlButton) {
    console.log("text1 onEnter", sender);
  }

  onFocus(sender: YvanUI.CtlButton) {
    console.log("text1 onFocus", sender);
  }

  onChange(sender: YvanUI.CtlButton) {
    console.log("text1 onChange", sender);
  }

  onBlur(sender: YvanUI.CtlButton) {
    console.log("text1 onBlur", sender);
  }

  onKeydown(sender: YvanUI.CtlButton, event: KeyboardEvent) {
    console.log("text1 onKeydown", event);
  }

  onInput(sender: YvanUI.CtlButton) {
    console.log("text1 onInput", sender);
  }
}
