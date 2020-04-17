import * as YvanUI from "yvan-ui";

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
          label: "文本框性能参数",
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
                text: "渲染",
                width: 50,
                onClick: { type: "function", bind: "render" },
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

  render() {
    if (!_.parseInt(this.refs.rows.value)) {
      YvanUI.msg("rows 必须是数字");
      return;
    }
    if (!_.parseInt(this.refs.cols.value)) {
      YvanUI.msg("cols 必须是数字");
      return;
    }

    const rows = _.toNumber(this.refs.rows.value);
    const cols = _.toNumber(this.refs.cols.value);
    const vjson: any = { rows: [] };
    for (let i = 0; i < rows; i++) {
      const row: any = { cols: [] };
      for (let j = 0; j < cols; j++) {
        row.cols.push({
          ctlName: `txt${i}_${j}`,
          view: "text",
          label: `文本框${i * cols + j + 1}`,
          labelAlign: "right",
          value: `${i},${j},第${this.ttt}次`,
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
    YvanUI.renderPlace(this, "thePlace", {
      view: "fieldset",
      label: `文本框性能测试${this.ttt}`,
      body: vjson,
      placeId: "thePlace",
    });
    console.timeEnd("thetest2");

    this.ttt++;
  }

  onLoad(): void {
    console.log(this.refs);
    YvanUI.msgInfo("输入 module 代表本对象");
    _.extend(window, {
      module: this,
    });
  }
}
