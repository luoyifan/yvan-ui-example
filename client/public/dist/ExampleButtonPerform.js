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
        };
        Module.prototype.getPlace1 = function () {
            console.log(this.getPlace("thePlace"));
        };
        Module.prototype.clear = function () {
            var vjson = { rows: [] };
            // this.refs.clearBtn.hidden = true;
            console.time("thetest");
            YvanUI.renderPlace(this, "thePlace", {
                view: "fieldset",
                label: "\u6027\u80FD\u6D4B\u8BD5" + this.ttt,
                body: vjson,
                placeId: "thePlace",
            });
            console.timeEnd("thetest");
        };
        Module.prototype.render = function () {
            if (!_.parseInt(this.refs.rows.value)) {
                YvanUI.msg("rows 必须是数字");
                return;
            }
            if (!_.parseInt(this.refs.cols.value)) {
                YvanUI.msg("cols 必须是数字");
                return;
            }
            var rows = _.toNumber(this.refs.rows.value);
            var cols = _.toNumber(this.refs.cols.value);
            var vjson = { rows: [] };
            var _loop_1 = function (i) {
                var row = { cols: [] };
                var _loop_2 = function (j) {
                    row.cols.push({
                        ctlName: "button" + i + "_" + j,
                        view: "button",
                        text: "\u6309\u94AE" + (i * cols + j + 1) + "(" + i + "," + j + ")\u7B2C" + this_1.ttt + "\u6B21",
                        cssType: j % 3 === 0 ? "danger" : j % 3 === 1 ? "primary" : "",
                        onClick: function () {
                            console.log("button" + i + "_" + j + ", clicked");
                        },
                        width: 200,
                    });
                };
                for (var j = 0; j < cols; j++) {
                    _loop_2(j);
                }
                row.cols.push({});
                vjson.rows.push(row);
            };
            var this_1 = this;
            for (var i = 0; i < rows; i++) {
                _loop_1(i);
            }
            console.time("thetest");
            YvanUI.renderPlace(this, "thePlace", {
                view: "fieldset",
                label: "\u6027\u80FD\u6D4B\u8BD5" + this.ttt,
                body: vjson,
                placeId: "thePlace",
            });
            console.timeEnd("thetest");
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
//# sourceMappingURL=ExampleButtonPerform.js.map