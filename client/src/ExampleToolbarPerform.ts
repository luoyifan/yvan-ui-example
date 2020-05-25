import ExampleData from "./ExampleGrid.data";

interface Refs {
  rows: YvanUI.CtlText;
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
          label: "性能参数",
          body: {
            cols: [
              {
                view: "text",
                label: "行数",
                labelAlign: "right",
                ctlName: "rows",
                value: "50",
                width: 250,
              },
              {
                view: "button",
                text: "渲染",
                width: 50,
                onClick: { type: "function", bind: "render" },
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
              { template: "" },
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

  render() {
    if (!_.parseInt(this.refs.rows.value)) {
      YvanUI.msg("rows 必须是数字");
      return;
    }

    this.clear();

    const rows = _.toNumber(this.refs.rows.value);
    const vjson: any = { rows: [] };
    for (let i = 0; i < rows; i++) {
      const row: any = { cols: [] };
      row.cols.push(
        {
          view: "toolbar",
          elements: [
            {
              view: "label",
              label: "主数据管理系统",
              width: 140,
            },
            // {
            //   view: "button",
            //   text: "默认",
            // },
            // {
            //   view: "button",
            //   text: "主要",
            //   cssType: "primary",
            // },
            // {
            //   view: "button",
            //   text: "红色警告",
            //   cssType: "danger",
            // },
            // {
            //   view: "button",
            //   text: "绿色成功",
            //   cssType: "success",
            // },
            {},
          ],
        }
      );
      vjson.rows.push(row);
      // vjson.rows.push({ view: "resizer" });
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
