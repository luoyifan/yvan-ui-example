interface Refs {
  input1: YvanUI.CtlText;
  rows: YvanUI.CtlText;
  cols: YvanUI.CtlText;
  clearBtn: YvanUI.CtlButton;
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
                text: "渲染",
                onClick: { type: "function", bind: "render" },
              },
              {
                view: "button",
                text: "获取空白区域",
                onClick: { type: "function", bind: "getPlace1" },
              },
              {
                view: "button",
                text: "清空",
                cssType: "",
                ctlName: "clearBtn",
                onClick: { type: "function", bind: "clear" },
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

  getPlace1() {
    console.log(this.getPlace("thePlace"));
  }

  clear() {
    const vjson: any = { rows: [] };
    this.refs.clearBtn.hidden = true;
    console.time("thetest");
    YvanUI.renderPlace(this, "thePlace", {
      view: "fieldset",
      label: `性能测试${this.ttt}`,
      body: vjson,
      placeId: "thePlace",
    });
    console.timeEnd("thetest");
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

    const rows = _.toNumber(this.refs.rows.value);
    const cols = _.toNumber(this.refs.cols.value);
    const vjson: any = { rows: [] };
    for (let i = 0; i < rows; i++) {
      const row: any = { cols: [] };
      for (let j = 0; j < cols; j++) {
        row.cols.push({
          ctlName: `button${i}_${j}`,
          view: "button",
          text: `按钮${i * cols + j + 1}(${i},${j})第${this.ttt}次`,
          cssType: j % 3 === 0 ? "danger" : j % 3 === 1 ? "primary" : "",
          onClick: function () {
            console.log(`button${i}_${j}, clicked`);
          },
          width: 200,
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
    YvanUI.msgInfo("输入 module 代表本对象");
    _.extend(window, {
      module: this,
    });
  }
}
