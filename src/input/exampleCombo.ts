const events = {
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
  // onBlur: {
  //     type: 'function',
  //     bind: 'onBlur'
  // },
  // onKeydown: {
  //     type: 'function',
  //     bind: 'onKeydown'
  // },
  onChange: {
    type: "function",
    bind: "onChange",
  },
};

const itemData = [
  { id: "KM", text: "千米" },
  { id: "M", text: "米" },
  { id: "DM", text: "分米" },
  { id: "CM", text: "厘米" },
  { id: "MM", text: "毫米" },
  { id: "UM", text: "微米" },
  { id: "NM", text: "纳米" },
  { id: "PM", text: "皮米" },
  { id: "LY", text: "光年" },
  { id: "AU", text: "天文单位" },
  { id: "IN", text: "英寸" },
  { id: "inch", text: "inch" },
  { id: "FT", text: "英尺" },
  { id: "YD", text: "码" },
  { id: "MI", text: "英里" },
  { id: "NMI", text: "海里" },
  { id: "FM", text: "英寻" },
  { id: "FUR", text: "弗隆" },
  { id: "C_L", text: "里" },
  { id: "C_Z", text: "丈" },
  { id: "C_C", text: "尺" },
  { id: "C_A", text: "寸" },
  { id: "C_F", text: "分" },
  { id: "C_I", text: "厘" },
  { id: "C_H", text: "毫" },
];

export type Refs = {
  combo1: YvanUI.CtlCombo;
};
@YvanUI.BizModule()
export default abstract class<M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  i: number = 1;
  property: {
    value: string;
  } = {
    value: "当前值",
  };

  viewResolver() {
    return {
      rows: [
        {
          cols: [
            {
              view: "combo",
              name: "default",
              ctlName: "combo1",
              entityName: "property.value",
              required: true,
              width: 500,
              label: "请选择",
              // dataSource: {
              //     type: 'function',
              //     bind: 'getCombo'
              // },
              dataSource: {
                type: "SQL",
                db: "db",
                sqlId: "/sys/branch@queryToCombo",
                displayField: "TEXT",
                valueField: "ID",
              },
              // options: itemData,
              // options: [1,2,3],
              ...events,
            },
            {},
          ],
        },
        {
          template: "在控制台 combo1 就代下拉框",
        },
        {
          cols: [
            {
              view: "multicombo",
              name: "default",
              ctlName: "combo2",
              required: true,
              width: 500,
              label: "请选择",
              options: itemData,
              // options: [1,2,3],
              ...events,
            },
            {},
          ],
        },
        {
          template: "在控制台 combo2 就代下拉多选框",
        },
        {},
      ],
    };
  }

  getCombo(sender: YvanUI.CtlCombo, option: YvanUI.DataSourceParam) {
    option.successCallback(itemData);
  }

  render(sender: any) {
    window[sender.ctlName] = sender;
    console.log(sender.ctlName + " has set", sender);
  }

  onClick(sender: any) {
    console.log(sender.ctlName + " onClick", sender);
  }

  onEnter(sender: any) {
    console.log(sender.ctlName + " onEnter", sender);
  }

  onFocus(sender: any) {
    console.log(sender.ctlName + " onFocus", sender);
  }

  onChange(sender: any, v: any) {
    console.log(sender.ctlName + " onChange", v);
  }

  onBlur(sender: any) {
    console.log(sender.ctlName + " onBlur", sender);
  }

  onKeydown(sender: any, event: KeyboardEvent) {
    console.log(sender.ctlName + " onKeydown", event);
  }
}
