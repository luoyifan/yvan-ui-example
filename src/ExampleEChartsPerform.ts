import ExampleData from "./ExampleGrid.data";

interface Refs {
  rows: YvanUI.CtlText;
  c1: YvanUI.CtlECharts;
  c2: YvanUI.CtlECharts;
  c3: YvanUI.CtlECharts;
  c4: YvanUI.CtlECharts;
  c5: YvanUI.CtlECharts;
  c6: YvanUI.CtlECharts;
  c7: YvanUI.CtlECharts;
  c8: YvanUI.CtlECharts;
  c9: YvanUI.CtlECharts;
  c10: YvanUI.CtlECharts;
  c11: YvanUI.CtlECharts;
  c12: YvanUI.CtlECharts;
  c13: YvanUI.CtlECharts;
  c14: YvanUI.CtlECharts;
  c15: YvanUI.CtlECharts;
  c16: YvanUI.CtlECharts;
  c17: YvanUI.CtlECharts;
  c18: YvanUI.CtlECharts;
  c19: YvanUI.CtlECharts;
  c20: YvanUI.CtlECharts;
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
                disabled: true,
                value: "5",
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
          height: 300,
          cols: [
            {
              view: "echarts",
              ctlName: "c" + (i * 4 + 1),
            },
            { view: "resizer" },
            {
              view: "echarts",
              ctlName: "c" + (i * 4 + 2),
            },
          ],
        },
        { view: "resizer" },
        {
          cols: [
            {
              view: "echarts",
              ctlName: "c" + (i * 4 + 3),
            },
            { view: "resizer" },
            {
              view: "echarts",
              ctlName: "c" + (i * 4 + 4),
            },
          ],
        }
      );
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
    this.setC1();
    this.setC2();
    this.setC3();
    this.setC4();
  }

  onLoad(): void {
    console.log(this.refs);
    // YvanUI.msgInfo("输入 module 代表本对象");
    _.extend(window, {
      module: this,
    });
  }

  setC1() {
    const option: any = {
      title: {
        text: "异步数据加载示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    }
    this.refs.c1.setOption(option);
    this.refs.c5.setOption(option);
    this.refs.c9.setOption(option);
    this.refs.c13.setOption(option);
    this.refs.c17.setOption(option);
  }

  setC2() {
    var base = +new Date(2014, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date: any = [];

    var data: any = [Math.random() * 150];
    var now: any = new Date(base);

    const addData: any = (shift: any) => {
      now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/");
      date.push(now);
      data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);

      if (shift) {
        date.shift();
        data.shift();
      }

      now = new Date(+new Date(now) + oneDay);
    };

    for (var i = 1; i < 100; i++) {
      addData();
    }

    const option: any = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: date,
      },
      yAxis: {
        boundaryGap: [0, "50%"],
        type: "value",
      },
      series: [
        {
          name: "成交",
          type: "line",
          smooth: true,
          symbol: "none",
          stack: "a",
          areaStyle: {
            normal: {},
          },
          data: data,
        },
      ],
    };
    this.refs.c2.setOption(option);
    this.refs.c6.setOption(option);
    this.refs.c10.setOption(option);
    this.refs.c14.setOption(option);
    this.refs.c18.setOption(option);

    // setInterval(() => {
    //   addData(true);
    //   this.refs.c2.setOption({
    //     xAxis: {
    //       data: date,
    //     },
    //     series: [
    //       {
    //         name: "成交",
    //         data: data,
    //       },
    //     ],
    //   });
    // }, 500);
  }

  setC3() {
    const option: any = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      legend: {
        data: [
          "直接访问",
          "邮件营销",
          "联盟广告",
          "视频广告",
          "搜索引擎",
          "百度",
          "谷歌",
          "必应",
          "其他",
        ],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "邮件营销",
          type: "bar",
          stack: "广告",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "联盟广告",
          type: "bar",
          stack: "广告",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "视频广告",
          type: "bar",
          stack: "广告",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "搜索引擎",
          type: "bar",
          data: [862, 1018, 964, 1026, 1679, 1600, 1570],
          markLine: {
            lineStyle: {
              type: "dashed",
            },
            data: [[{ type: "min" }, { type: "max" }]],
          },
        },
        {
          name: "百度",
          type: "bar",
          barWidth: 5,
          stack: "搜索引擎",
          data: [620, 732, 701, 734, 1090, 1130, 1120],
        },
        {
          name: "谷歌",
          type: "bar",
          stack: "搜索引擎",
          data: [120, 132, 101, 134, 290, 230, 220],
        },
        {
          name: "必应",
          type: "bar",
          stack: "搜索引擎",
          data: [60, 72, 71, 74, 190, 130, 110],
        },
        {
          name: "其他",
          type: "bar",
          stack: "搜索引擎",
          data: [62, 82, 91, 84, 109, 110, 120],
        },
      ],
    };
    this.refs.c3.setOption(option);
    this.refs.c7.setOption(option);
    this.refs.c11.setOption(option);
    this.refs.c15.setOption(option);
    this.refs.c19.setOption(option);
  }

  setC4() {
    const option: any = {
      xAxis: {
        scale: true,
      },
      yAxis: {
        scale: true,
      },
      series: [
        {
          type: "effectScatter",
          symbolSize: 20,
          data: [
            [172.7, 105.2],
            [153.4, 42],
          ],
        },
        {
          type: "scatter",
          data: [
            [161.2, 51.6],
            [167.5, 59.0],
            [159.5, 49.2],
            [157.0, 63.0],
            [155.8, 53.6],
            [170.0, 59.0],
            [159.1, 47.6],
            [166.0, 69.8],
            [176.2, 66.8],
            [160.2, 75.2],
            [172.5, 55.2],
            [170.9, 54.2],
            [172.9, 62.5],
            [153.4, 42.0],
            [160.0, 50.0],
            [147.2, 49.8],
            [168.2, 49.2],
            [175.0, 73.2],
            [157.0, 47.8],
            [167.6, 68.8],
            [159.5, 50.6],
            [175.0, 82.5],
            [166.8, 57.2],
            [176.5, 87.8],
            [170.2, 72.8],
            [174.0, 54.5],
            [173.0, 59.8],
            [179.9, 67.3],
            [170.5, 67.8],
            [160.0, 47.0],
            [154.4, 46.2],
            [162.0, 55.0],
            [176.5, 83.0],
            [160.0, 54.4],
            [152.0, 45.8],
            [162.1, 53.6],
            [170.0, 73.2],
            [160.2, 52.1],
            [161.3, 67.9],
            [166.4, 56.6],
            [168.9, 62.3],
            [163.8, 58.5],
            [167.6, 54.5],
            [160.0, 50.2],
            [161.3, 60.3],
            [167.6, 58.3],
            [165.1, 56.2],
            [160.0, 50.2],
            [170.0, 72.9],
            [157.5, 59.8],
            [167.6, 61.0],
            [160.7, 69.1],
            [163.2, 55.9],
            [152.4, 46.5],
            [157.5, 54.3],
            [168.3, 54.8],
            [180.3, 60.7],
            [165.5, 60.0],
            [165.0, 62.0],
            [164.5, 60.3],
            [156.0, 52.7],
            [160.0, 74.3],
            [163.0, 62.0],
            [165.7, 73.1],
            [161.0, 80.0],
            [162.0, 54.7],
            [166.0, 53.2],
            [174.0, 75.7],
            [172.7, 61.1],
            [167.6, 55.7],
            [151.1, 48.7],
            [164.5, 52.3],
            [163.5, 50.0],
            [152.0, 59.3],
            [169.0, 62.5],
            [164.0, 55.7],
            [161.2, 54.8],
            [155.0, 45.9],
            [170.0, 70.6],
            [176.2, 67.2],
            [170.0, 69.4],
            [162.5, 58.2],
            [170.3, 64.8],
            [164.1, 71.6],
            [169.5, 52.8],
            [163.2, 59.8],
            [154.5, 49.0],
            [159.8, 50.0],
            [173.2, 69.2],
            [170.0, 55.9],
            [161.4, 63.4],
            [169.0, 58.2],
            [166.2, 58.6],
            [159.4, 45.7],
            [162.5, 52.2],
            [159.0, 48.6],
            [162.8, 57.8],
            [159.0, 55.6],
            [179.8, 66.8],
            [162.9, 59.4],
            [161.0, 53.6],
            [151.1, 73.2],
            [168.2, 53.4],
            [168.9, 69.0],
            [173.2, 58.4],
            [171.8, 56.2],
            [178.0, 70.6],
            [164.3, 59.8],
            [163.0, 72.0],
            [168.5, 65.2],
            [166.8, 56.6],
            [172.7, 105.2],
            [163.5, 51.8],
            [169.4, 63.4],
            [167.8, 59.0],
            [159.5, 47.6],
            [167.6, 63.0],
            [161.2, 55.2],
            [160.0, 45.0],
            [163.2, 54.0],
            [162.2, 50.2],
            [161.3, 60.2],
            [149.5, 44.8],
            [157.5, 58.8],
            [163.2, 56.4],
            [172.7, 62.0],
            [155.0, 49.2],
            [156.5, 67.2],
            [164.0, 53.8],
            [160.9, 54.4],
            [162.8, 58.0],
            [167.0, 59.8],
            [160.0, 54.8],
            [160.0, 43.2],
            [168.9, 60.5],
            [158.2, 46.4],
            [156.0, 64.4],
            [160.0, 48.8],
            [167.1, 62.2],
            [158.0, 55.5],
            [167.6, 57.8],
            [156.0, 54.6],
            [162.1, 59.2],
            [173.4, 52.7],
            [159.8, 53.2],
            [170.5, 64.5],
            [159.2, 51.8],
            [157.5, 56.0],
            [161.3, 63.6],
            [162.6, 63.2],
            [160.0, 59.5],
            [168.9, 56.8],
            [165.1, 64.1],
            [162.6, 50.0],
            [165.1, 72.3],
            [166.4, 55.0],
            [160.0, 55.9],
            [152.4, 60.4],
            [170.2, 69.1],
            [162.6, 84.5],
            [170.2, 55.9],
            [158.8, 55.5],
            [172.7, 69.5],
            [167.6, 76.4],
            [162.6, 61.4],
            [167.6, 65.9],
            [156.2, 58.6],
            [175.2, 66.8],
            [172.1, 56.6],
            [162.6, 58.6],
            [160.0, 55.9],
            [165.1, 59.1],
            [182.9, 81.8],
            [166.4, 70.7],
            [165.1, 56.8],
            [177.8, 60.0],
            [165.1, 58.2],
            [175.3, 72.7],
            [154.9, 54.1],
            [158.8, 49.1],
            [172.7, 75.9],
            [168.9, 55.0],
            [161.3, 57.3],
            [167.6, 55.0],
            [165.1, 65.5],
            [175.3, 65.5],
            [157.5, 48.6],
            [163.8, 58.6],
            [167.6, 63.6],
            [165.1, 55.2],
            [165.1, 62.7],
            [168.9, 56.6],
            [162.6, 53.9],
            [164.5, 63.2],
            [176.5, 73.6],
            [168.9, 62.0],
            [175.3, 63.6],
            [159.4, 53.2],
            [160.0, 53.4],
            [170.2, 55.0],
            [162.6, 70.5],
            [167.6, 54.5],
            [162.6, 54.5],
            [160.7, 55.9],
            [160.0, 59.0],
            [157.5, 63.6],
            [162.6, 54.5],
            [152.4, 47.3],
            [170.2, 67.7],
            [165.1, 80.9],
            [172.7, 70.5],
            [165.1, 60.9],
            [170.2, 63.6],
            [170.2, 54.5],
            [170.2, 59.1],
            [161.3, 70.5],
            [167.6, 52.7],
            [167.6, 62.7],
            [165.1, 86.3],
            [162.6, 66.4],
            [152.4, 67.3],
            [168.9, 63.0],
            [170.2, 73.6],
            [175.2, 62.3],
            [175.2, 57.7],
            [160.0, 55.4],
            [165.1, 104.1],
            [174.0, 55.5],
            [170.2, 77.3],
            [160.0, 80.5],
            [167.6, 64.5],
            [167.6, 72.3],
            [167.6, 61.4],
            [154.9, 58.2],
            [162.6, 81.8],
            [175.3, 63.6],
            [171.4, 53.4],
            [157.5, 54.5],
            [165.1, 53.6],
            [160.0, 60.0],
            [174.0, 73.6],
            [162.6, 61.4],
            [174.0, 55.5],
            [162.6, 63.6],
            [161.3, 60.9],
            [156.2, 60.0],
            [149.9, 46.8],
            [169.5, 57.3],
            [160.0, 64.1],
            [175.3, 63.6],
            [169.5, 67.3],
            [160.0, 75.5],
            [172.7, 68.2],
            [162.6, 61.4],
            [157.5, 76.8],
            [176.5, 71.8],
            [164.4, 55.5],
            [160.7, 48.6],
            [174.0, 66.4],
            [163.8, 67.3],
          ],
        },
      ],
    };
    this.refs.c4.setOption(option);
    this.refs.c8.setOption(option);
    this.refs.c12.setOption(option);
    this.refs.c16.setOption(option);
    this.refs.c20.setOption(option);
  }
}
