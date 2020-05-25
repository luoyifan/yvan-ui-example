export interface Refs {
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

  viewResolver() {
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
                value: "20",
                width: 250,
              },
              {
                view: "text",
                label: "列数",
                labelAlign: "right",
                ctlName: "cols",
                value: "3",
                width: 250,
              },
              {
                view: "button",
                text: "渲染Split",
                width: 50,
                onClick: { type: "function", bind: "render" },
              },
              {
                view: "button",
                text: "渲染Tabs",
                width: 50,
                onClick: { type: "function", bind: "renderTabs" },
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

  renderTabs() {
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
          view: "tabview",
          ctlName: "theTab",
          defaultTabIndex: 1,
          height: 200,
          tabbarContextMenu: [
            {
              text: "菜单1",
              onClick: {
                type: "function",
                bind: "tabBar1",
              },
            },
            {
              text: "菜单2",
              children: [
                {
                  text: "菜单2.1",
                  onClick: {
                    type: "function",
                    bind: "tabBar21",
                  },
                },
                {
                  text: "菜单2.2",
                  onClick: {
                    type: "function",
                    bind: "tabBar22",
                  },
                },
              ],
            },
            {
              text: "菜单3",
              onClick: {
                type: "function",
                bind: "tabBar3",
              },
            },
          ],
          tabbar: {
            view: "tabbar",
            close: false,
          },
          cells: [
            {
              header: "选项卡1",
              close: false,
              body: {
                rows: [
                  {
                    view: "template",
                    template: "卡1内容",
                  },
                ],
              },
            },
            {
              header: "选项卡2",
              close: true,
              body: {
                rows: [
                  {
                    view: "template",
                    template: "卡2内容",
                  },
                ],
              },
            },
          ]
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
          view: "text",
          label: `文本框${i * cols + j + 1}`,
          labelAlign: "right",
          value: `${i},${j},第${this.ttt}次`,
          onChange: function (sender: YvanUI.CtlText) {
            console.log(`txt${i}_${j} has changed`, sender.value);
          },
          width: 300,
          height: 100
        });
        row.cols.push({ view: "resizer" });
      }
      row.cols.push({});
      vjson.rows.push(row);
      vjson.rows.push({ view: "resizer" });
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
