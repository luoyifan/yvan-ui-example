define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //自定义查询窗口
    var BaseGridWidget = /** @class */ (function (_super) {
        tslib_1.__extends(BaseGridWidget, _super);
        function BaseGridWidget() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.dsQuery = {
                query: "",
            };
            _this.isConfirmed = false;
            return _this;
        }
        BaseGridWidget.prototype.onLoad = function () {
            _super.prototype.onLoad.call(this);
        };
        BaseGridWidget.prototype.onEnter = function () {
            this.widgetSelectRow();
        };
        BaseGridWidget.prototype.onEsc = function () {
            this.widgetCancel();
        };
        BaseGridWidget.prototype.onClose = function () {
            _super.prototype.onClose.call(this);
            if (this.isConfirmed) {
                // 如果是发出确认请求，就不调用 onClose 方法
                return;
            }
            this.inParamter.onClose();
        };
        BaseGridWidget.prototype.baseViewResolver = function (_a) {
            var _b = _a.title, title = _b === void 0 ? "未命名标题" : _b, _c = _a.width, width = _c === void 0 ? 600 : _c, _d = _a.height, height = _d === void 0 ? 400 : _d, _e = _a.grid, grid = _e === void 0 ? {} : _e;
            this.dsQuery.query = this.inParamter.query;
            return {
                title: title,
                width: width,
                height: height,
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
                                    onKeydown: function (sender, event) {
                                        if (event.keyCode === 13) {
                                            // 遇到回车键，拦截默认事件（防止自动提交），并触发更改
                                            event.stopPropagation();
                                            event.preventDefault();
                                            this.dsQuery.query = _.get(event.target, "value");
                                        }
                                        else if (event.key === "ArrowDown") {
                                            // 遇到下键，让焦点定位到表格
                                            event.stopPropagation();
                                            event.preventDefault();
                                            this.refs.grid.selectRow(function () { return true; });
                                        }
                                    },
                                    onShow: function (sender) {
                                        sender.value = this.inParamter.query;
                                    },
                                    prompt: "查询条件",
                                    labelWidth: 60,
                                    width: 250,
                                },
                            ],
                        },
                        tslib_1.__assign(tslib_1.__assign({ allowCellSelection: false, onFirstDataRendered: function (sender) {
                                //载入数据完毕之后 （如果有数据）定位焦点到第一行
                                sender.selectRow(function () { return true; });
                            },
                            onRowDblClick: function () {
                                this.widgetSelectRow();
                            } }, grid), { view: "grid", ctlName: "grid", entityName: "gridMain" }),
                    ],
                },
            };
        };
        // 取消选择
        BaseGridWidget.prototype.widgetCancel = function () {
            this.closeDialog();
        };
        // 确认选择
        BaseGridWidget.prototype.widgetSelectRow = function () {
            var row = this.refs.grid.getSelectedRow();
            if (!row) {
                YvanUI.msg("请选择一行数据");
                return;
            }
            this.isConfirmed = true;
            this.inParamter.onWidgetConfirm.call(this, row);
        };
        return BaseGridWidget;
    }(YvanUI.BaseDialog));
    exports.BaseGridWidget = BaseGridWidget;
});
//# sourceMappingURL=BaseGridWidget.js.map