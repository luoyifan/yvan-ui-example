export type Refs = {
  txtQuery: YvanUI.CtlText;
  grid: YvanUI.CtlGrid;
};

interface WidgetOption {
  title?: string;
  width?: number;
  height?: number;
  grid: Partial<YvanUI.CtlGrid>;
}

interface INP {
  existObject: any;
  onClose: Function;
  onWidgetConfirm: Function;
  query: string;
}

//自定义查询窗口
export abstract class BaseGridWidget<M> extends YvanUI.BaseDialog<
  M,
  Refs,
  INP
  > {
  dsQuery: {
    query: string;
  } = {
      query: "",
    };
  isConfirmed: boolean = false;

  onLoad(): void {
    super.onLoad();
  }

  onEnter() {
    this.widgetSelectRow();
  }

  onEsc() {
    this.widgetCancel();
  }

  onClose() {
    super.onClose();
    if (this.isConfirmed) {
      // 如果是发出确认请求，就不调用 onClose 方法
      return;
    }

    this.inParamter.onClose();
  }

  baseViewResolver({
    title = "未命名标题",
    width = 600,
    height = 400,
    grid = {},
  }: WidgetOption) {
    this.dsQuery.query = this.inParamter.query;
    return {
      title,
      width,
      height,
      modal: true,
      body: {
        rows: [
          {
            view: "toolbar",
            elements: [
              {
                view: "button",
                text: "确定",
                onClick: {
                  type: "function",
                  bind: "widgetSelectRow",
                },
              },
              {
                view: "button",
                type: "normal",
                text: "取消",
                onClick: {
                  type: "function",
                  bind: "widgetCancel",
                },
              },
              {
                view: "text",
                mode: "text",
                entityName: "dsQuery.query",
                ctlName: "txtQuery",
                onKeydown(
                  this: BaseGridWidget<M>,
                  sender: YvanUI.CtlText,
                  event: KeyboardEvent
                ) {
                  if (event.keyCode === 13) {
                    // 遇到回车键，拦截默认事件（防止自动提交），并触发更改
                    event.stopPropagation();
                    event.preventDefault();
                    this.dsQuery.query = _.get(event.target, "value");
                  } else if (event.key === "ArrowDown") {
                    // 遇到下键，让焦点定位到表格
                    event.stopPropagation();
                    event.preventDefault();
                    this.refs.grid.selectRow(() => true);
                  }
                },
                onShow(this: BaseGridWidget<M>, sender: YvanUI.CtlText) {
                  sender.value = this.inParamter.query;
                },
                prompt: "查询条件",
                labelWidth: 60,
                width: 250,
              },
            ],
          },
          {
            allowCellSelection: false,
            onFirstDataRendered(sender: YvanUI.CtlGrid) {
              //载入数据完毕之后 （如果有数据）定位焦点到第一行
              sender.selectRow(() => true);
            },
            onRowDblClick(this: BaseGridWidget<M>) {
              this.widgetSelectRow();
            },

            ...grid,

            view: "grid",
            ctlName: "grid",
            entityName: "gridMain",
          },
        ],
      },
    };
  }

  // 取消选择
  widgetCancel() {
    this.closeDialog();
  }

  // 确认选择
  widgetSelectRow() {
    const row = this.refs.grid.getSelectedRow();
    if (!row) {
      YvanUI.msg("请选择一行数据");
      return;
    }

    this.isConfirmed = true;
    this.inParamter.onWidgetConfirm.call(this, row);
  }
}
