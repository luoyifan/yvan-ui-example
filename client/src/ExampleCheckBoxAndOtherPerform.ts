interface Refs {
  rows: YvanUI.CtlText;
  cols: YvanUI.CtlText;
  checkbox1: YvanUI.CtlCheckBox;
  switch1: YvanUI.CtlSwitch;
  radio1: YvanUI.CtlRadio;
}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {

  showType: string = "checkbox";

  onShow(): void {
    _.extend(window, {
      module: this,
    });
    console.log("module setup", this);
  }

  viewResolver(): any {
    return {
      view: "form",
      type: "space",
      scroll: true,
      onRender: function () {
        console.log("form");
      },
      rows: [
        {
          view: "fieldset",
          label: "性能参数",
          body: {
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
              {
                view: "button",
                text: "渲染checkbox",
                onClick: { type: "function", bind: "rendercheckbox" },
              },
              {
                view: "button",
                text: "渲染switch",
                onClick: { type: "function", bind: "renderswitch" },
              },
              {
                view: "button",
                text: "渲染radio",
                onClick: { type: "function", bind: "renderradio" },
              },
              { template: "" },
            ],
          },
        },
        { template: "", placeId: "thePlace" },
      ],
    };
  }

  ttt = 1;

  clear() {
    const vjson: any = { rows: [] };
    // this.refs.clearBtn.hidden = true;
    console.time("thetest");
    YvanUI.renderPlace(this, "thePlace", {
      view: "fieldset",
      label: `性能测试${this.ttt}`,
      body: vjson,
      placeId: "thePlace",
    });
    console.timeEnd("thetest");
  }

  rendercheckbox() {
    this.showType = "checkbox";
    this.render();
  }

  renderswitch() {
    this.showType = "switch";
    this.render();
  }

  renderradio() {
    this.showType = "radio";
    this.render();
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
          ctlName: this.showType + `${i}_${j}`,
          view: this.showType,
          text: `按钮${i * cols + j + 1}(${i},${j})第${this.ttt}次`,
          cssType: j % 3 === 0 ? "danger" : j % 3 === 1 ? "primary" : "",
          onClick: function () {
            console.log(this.showType + `${i}_${j}, clicked`);
          },
          width: 200,
          options: itemData
        });
      }
      row.cols.push({});
      vjson.rows.push(row);
    }

    console.time("thetest");
    YvanUI.renderPlace(this, "thePlace", {
      view: "fieldset",
      label: `性能测试${this.ttt}`,
      body: vjson,
      placeId: "thePlace",
    });
    console.timeEnd("thetest");

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
  { id: "first", text: "第一" },
  { id: "second", text: "第二" }
];