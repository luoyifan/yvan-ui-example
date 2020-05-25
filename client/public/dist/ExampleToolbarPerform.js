define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ttt = 1;
            return _this;
        }
        Module.prototype.onShow = function () {
            _.extend(window, {
                module: this,
            });
            console.log("module setup", this);
        };
        Module.prototype.viewResolver = function () {
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
        };
        Module.prototype.getPlace2 = function () {
            console.log(this.getPlace("thePlace2"));
        };
        Module.prototype.clear = function () {
            var vjson = { rows: [] };
            // this.refs.clearBtn.hidden = true;
            console.time("thetest");
            YvanUI.renderPlace(this, "thePlace2", {
                view: "fieldset",
                label: "\u6027\u80FD\u6D4B\u8BD5" + this.ttt,
                body: vjson,
                placeId: "thePlace2",
            });
            console.timeEnd("thetest");
        };
        Module.prototype.render = function () {
            if (!_.parseInt(this.refs.rows.value)) {
                YvanUI.msg("rows 必须是数字");
                return;
            }
            this.clear();
            var rows = _.toNumber(this.refs.rows.value);
            var vjson = { rows: [] };
            for (var i = 0; i < rows; i++) {
                var row = { cols: [] };
                row.cols.push({
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
                });
                vjson.rows.push(row);
                // vjson.rows.push({ view: "resizer" });
            }
            console.time("thetest2");
            YvanUI.renderPlace(this, "thePlace2", {
                view: "fieldset",
                label: "\u6587\u672C\u6846\u6027\u80FD\u6D4B\u8BD5" + this.ttt,
                body: vjson,
                placeId: "thePlace2",
            });
            console.timeEnd("thetest2");
            this.ttt++;
        };
        Module.prototype.onLoad = function () {
            console.log(this.refs);
            // YvanUI.msgInfo("输入 module 代表本对象");
            _.extend(window, {
                module: this,
            });
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=ExampleToolbarPerform.js.map