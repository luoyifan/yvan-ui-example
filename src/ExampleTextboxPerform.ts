import rows from './widgets/custom.data';

interface Refs {
  input1: YvanUI.CtlText;
  rows: YvanUI.CtlText;
  cols: YvanUI.CtlText;
}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {
  onShow(): void {
    _.extend(window, {
      module: this,
    });
    console.log("module setup", this);
  }

  renderName: String = "text";

  viewResolver(): any {
    return {
      view: "form",
      type: "space",
      borderless: true,
      scroll: true,
      onRender: function () {
        console.log("form");
      },
      rows: [
        {
          view: "fieldset",
          label: "性能参数",
          body: {
            rows: [
              {
                cols: [
                  {
                    view: "text",
                    label: "行数",
                    labelAlign: "right",
                    ctlName: "rows",
                    value: "40",
                    width: 250,
                  },
                  {
                    view: "text",
                    label: "列数",
                    labelAlign: "right",
                    ctlName: "cols",
                    value: "5",
                    width: 250,
                  },
                  { template: "" },
                ]
              },
              {
                cols: [
                  {
                    view: "button",
                    text: "渲染textbox-字符串",
                    width: 50,
                    onClick: { type: "function", bind: "renderString" },
                  },
                  {
                    view: "button",
                    text: "渲染textbox-数字",
                    width: 50,
                    onClick: { type: "function", bind: "renderNumber" },
                  },
                  { template: "" },
                ]
              },
              {
                cols: [
                  {
                    view: "button",
                    text: "渲染textbox-date",
                    width: 50,
                    onClick: { type: "function", bind: "renderDate" },
                  },
                  {
                    view: "button",
                    text: "渲染textbox-datetime",
                    width: 50,
                    onClick: { type: "function", bind: "renderDatetime" },
                  },
                  {
                    view: "button",
                    text: "渲染textbox-daterange",
                    width: 50,
                    onClick: { type: "function", bind: "renderDaterange" },
                  },
                  {
                    view: "button",
                    text: "渲染textbox-datetimerange",
                    width: 50,
                    onClick: { type: "function", bind: "renderDatetimerange" },
                  },
                  { template: "" },
                ]
              },
              {
                cols: [
                  {
                    view: "button",
                    text: "渲染textbox-下拉选",
                    width: 50,
                    onClick: { type: "function", bind: "rendercombo" },
                  },
                  {
                    view: "button",
                    text: "渲染textbox-多选下拉选",
                    width: 50,
                    onClick: { type: "function", bind: "rendermulticombo" },
                  },
                  {
                    view: "button",
                    text: "渲染textbox-查找",
                    width: 50,
                    onClick: { type: "function", bind: "rendersearch" },
                  },
                  {
                    view: "button",
                    text: "获取空白区域",
                    onClick: { type: "function", bind: "getPlace2" },
                  },
                  {
                    view: "button",
                    text: "清空",
                    cssType: "",
                    ctlName: "clearBtn",
                    onClick: { type: "function", bind: "clear" },
                  },
                  { template: "" }
                ]
              }
              // { template: "" }
            ],
          },
        },
        { template: "", placeId: "thePlace2" },
      ],
    };
  }

  ttt = 1;

  getPlace2() {
    console.log(this.getPlace("thePlace2"));
  }

  clear() {
    const vjson: any = { rows: [] };
    // this.refs.clearBtn.hidden = true;
    console.time("thetest");
    YvanUI.renderPlace(this, "thePlace2", {
      view: "fieldset",
      label: `性能测试${this.ttt}`,
      body: vjson,
      placeId: "thePlace2",
    });
    console.timeEnd("thetest");
  }

  renderString() {
    this.renderName = "text";
    this.render();
  }

  renderNumber() {
    this.renderName = "number";
    this.render();
  }

  renderDate() {
    this.renderName = "date";
    this.render();
  }

  renderDatetime() {
    this.renderName = "datetime";
    this.render();
  }

  renderDaterange() {
    this.renderName = "daterange";
    this.render();
  }

  renderDatetimerange() {
    this.renderName = "datetimerange";
    this.render();
  }

  rendercombo() {
    this.renderName = "combo";
    this.render();
  }

  rendermulticombo() {
    this.renderName = "multicombo";
    if (!_.parseInt(this.refs.rows.value)) {
      YvanUI.msg("rows 必须是数字");
      return;
    }
    if (!_.parseInt(this.refs.cols.value)) {
      YvanUI.msg("cols 必须是数字");
      return;
    }

    this.clear();

    const rows = _.toNumber(this.refs.rows.value);
    const cols = _.toNumber(this.refs.cols.value);
    const vjson: any = { rows: [] };
    for (let i = 0; i < rows; i++) {
      const row: any = { cols: [] };
      for (let j = 0; j < cols; j++) {
        row.cols.push({
          view: "multicombo",
          name: "default",
          ctlName: "combo2",
          required: true,
          width: 500,
          label: "请选择",
          options: itemData,
          // options: [1,2,3],
        });
      }
      row.cols.push({});
      vjson.rows.push(row);
    }

    console.time("thetest2");
    YvanUI.renderPlace(this, "thePlace2", {
      view: "fieldset",
      label: `文本框性能测试${this.ttt}`,
      body: vjson,
      placeId: "thePlace2",
    });
    console.timeEnd("thetest2");

    this.ttt++;
  }

  rendersearch() {
    this.renderName = "search";
    if (!_.parseInt(this.refs.rows.value)) {
      YvanUI.msg("rows 必须是数字");
      return;
    }
    if (!_.parseInt(this.refs.cols.value)) {
      YvanUI.msg("cols 必须是数字");
      return;
    }

    this.clear();

    const rows = _.toNumber(this.refs.rows.value);
    const cols = _.toNumber(this.refs.cols.value);
    const vjson: any = { rows: [] };
    for (let i = 0; i < rows; i++) {
      const row: any = { cols: [] };
      for (let j = 0; j < cols; j++) {
        row.cols.push({
          view: "search",
          label: "查找",
          width: 200,
        });
      }
      row.cols.push({});
      vjson.rows.push(row);
    }

    console.time("thetest2");
    YvanUI.renderPlace(this, "thePlace2", {
      view: "fieldset",
      label: `文本框性能测试${this.ttt}`,
      body: vjson,
      placeId: "thePlace2",
    });
    console.timeEnd("thetest2");

    this.ttt++;
  }

  render() {
    if (!_.parseInt(this.refs.rows.value)) {
      YvanUI.msg("rows 必须是数字");
      return;
    }
    if (!_.parseInt(this.refs.cols.value)) {
      YvanUI.msg("cols 必须是数字");
      return;
    }

    this.clear();

    const rows = _.toNumber(this.refs.rows.value);
    const cols = _.toNumber(this.refs.cols.value);
    const vjson: any = { rows: [] };
    for (let i = 0; i < rows; i++) {
      const row: any = { cols: [] };
      for (let j = 0; j < cols; j++) {
        row.cols.push({
          ctlName: `txt${i}_${j}`,
          view: this.renderName,
          label: `文本框${i * cols + j + 1}`,
          labelAlign: "right",
          value: `${i},${j},第${this.ttt}次`,
          options: itemData,
          onChange: function (sender: YvanUI.CtlText) {
            console.log(`txt${i}_${j} has changed`, sender.value);
          },
          width: 250,
        });
      }
      row.cols.push({});
      vjson.rows.push(row);
    }

    console.time("thetest2");
    YvanUI.renderPlace(this, "thePlace2", {
      view: "fieldset",
      label: `文本框性能测试${this.ttt}`,
      body: vjson,
      placeId: "thePlace2",
    });
    console.timeEnd("thetest2");

    this.ttt++;
  }

  onLoad(): void {
    console.log(this.refs);
    // YvanUI.msgInfo("输入 module 代表本对象");
    _.extend(window, {
      module: this,
    });
  }
}

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