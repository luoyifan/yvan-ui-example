export interface Refs {
  c1: YvanUI.CtlECharts;
  c2: YvanUI.CtlECharts;
  c3: YvanUI.CtlECharts;
  c4: YvanUI.CtlECharts;
}

export default abstract class<M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  viewResolver() {
    return {
      rows: [
        {
          cols: [
            {
              view: "echarts",
              ctlName: "c1",
            },
            { view: "resizer" },
            {
              view: "echarts",
              ctlName: "c2",
            },
          ],
        },
        { view: "resizer" },
        {
          cols: [
            {
              view: "echarts",
              ctlName: "c3",
            },
            { view: "resizer" },
            {
              view: "echarts",
              ctlName: "c4",
            },
          ],
        },
      ],
    };
  }
}
