export type Refs = {
  date1: YvanUI.CtlDatePicker;
  date2: YvanUI.CtlDateRangePicker;
  search1: YvanUI.CtlSearch;
};
@YvanUI.BizModule()
export default abstract class <M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  main = {
    date1: "1990-10-01",
    dateRange: "1990-10-01 至 2019-10-01",
    start1: "",
    end1: "",
  };

  viewResolver() {
    const events = {
      onRender: {
        type: "function",
        bind: "render",
      },
      onClick: {
        type: "function",
        bind: "onClick",
      },
      onEnter: {
        type: "function",
        bind: "onEnter",
      },
      onFocus: {
        type: "function",
        bind: "onFocus",
      },
      onChange: {
        type: "function",
        bind: "onChange",
      },
      onBlur: {
        type: "function",
        bind: "onBlur",
      },
      onKeydown: {
        type: "function",
        bind: "onKeydown",
      },
    };

    return {
      rows: [
        {
          cols: [
            {
              view: "date",
              ctlName: "date1",
              entityName: "main.date1",
              value: "2019-11-11",
              required: true,
              label: "出厂日期",
              //...events
            },
            {
              view: "button",
              text: "设置",
              onClick: {
                type: "function",
                bind: "setDate1",
              },
            },
            {
              view: "label",
              label: "在控制台 date1",
            },
          ],
        },
        {
          cols: [
            {
              view: "datetime",
              ctlName: "date2",
              value: "2019-11-11 12:52:23",
              required: true,
              label: "出生日期",
              //...events
            },
            {
              view: "label",
              label: "在控制台 date2",
            },
          ],
        },
        {
          cols: [
            {
              view: "daterange",
              ctlName: "date3",
              entityName: "main.dateRange", // 实体值示例 "1990-10-01 至 2019-10-01"
              entityNameStart: "main.start1", // 实体值示例 1990-10-01
              entityNameEnd: "main.end1", // 实体值示例 2019-10-01
              required: true,
              label: "日期范围选择",
              // value: '1990-10-01 至 2019-10-01',
              //...events
            },
            {
              view: "button",
              text: "设置",
              onClick: {
                type: "function",
                bind: "setRange",
              },
            },
            {
              view: "label",
              label: "在控制台 date3",
            },
          ],
        },
        {
          cols: [
            {
              view: "datetimerange",
              ctlName: "date4",
              label: "日期时间范围",
              required: true,
              value: "1990-10-01 12:30:00 至 2019-10-01 11:50:03",
              //...events
            },
            {
              view: "label",
              label: "在控制台 date4",
            },
          ],
        },
        {},
      ],
    };
  }

  @YvanUI.Watch("main.dateRange")
  dateRangeChange(nv: any) {
    //console.log('main.dateRange changed:' + nv);
  }

  @YvanUI.Watch("main.start1")
  start1Change(nv: any) {
    //console.log('main.start1 changed:' + nv);
  }

  @YvanUI.Watch("main.end1")
  end1Change(nv: any) {
    //console.log('main.end1 changed:' + nv);
  }

  @YvanUI.Watch("main.date1")
  date1Change(nv: any) {
    console.log("main.date1 changed:" + nv);
  }

  setDate1() {
    this.main.date1 = "2008-10-01";
  }

  setRange() {
    this.main.dateRange = "2008-10-01 至 2012-10-01";
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

  onChange(sender: any) {
    console.log(sender.ctlName + " onChange", sender);
  }

  onBlur(sender: any) {
    console.log(sender.ctlName + " onBlur", sender);
  }

  onKeydown(sender: any, event: KeyboardEvent) {
    console.log(sender.ctlName + " onKeydown", event);
  }

  i: number = 1;
  property: {
    value: string;
  } = {
      value: "当前值",
    };
}
