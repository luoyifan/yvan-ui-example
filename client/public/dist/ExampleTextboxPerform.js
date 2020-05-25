define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.renderName = "text";
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
                            rows: [
                                {
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
                                        { template: "" },
                                    ]
                                },
                                {
                                    cols: [
                                        {
                                            view: "button",
                                            text: "渲染textbox-字符串",
                                            width: 50,
                                            onClick: { type: "function", bind: "renderString" },
                                        },
                                        {
                                            view: "button",
                                            text: "渲染textbox-数字",
                                            width: 50,
                                            onClick: { type: "function", bind: "renderNumber" },
                                        },
                                        { template: "" },
                                    ]
                                },
                                {
                                    cols: [
                                        {
                                            view: "button",
                                            text: "渲染textbox-date",
                                            width: 50,
                                            onClick: { type: "function", bind: "renderDate" },
                                        },
                                        {
                                            view: "button",
                                            text: "渲染textbox-datetime",
                                            width: 50,
                                            onClick: { type: "function", bind: "renderDatetime" },
                                        },
                                        {
                                            view: "button",
                                            text: "渲染textbox-daterange",
                                            width: 50,
                                            onClick: { type: "function", bind: "renderDaterange" },
                                        },
                                        {
                                            view: "button",
                                            text: "渲染textbox-datetimerange",
                                            width: 50,
                                            onClick: { type: "function", bind: "renderDatetimerange" },
                                        },
                                        { template: "" },
                                    ]
                                },
                                {
                                    cols: [
                                        {
                                            view: "button",
                                            text: "渲染textbox-下拉选",
                                            width: 50,
                                            onClick: { type: "function", bind: "rendercombo" },
                                        },
                                        {
                                            view: "button",
                                            text: "渲染textbox-多选下拉选",
                                            width: 50,
                                            onClick: { type: "function", bind: "rendermulticombo" },
                                        },
                                        {
                                            view: "button",
                                            text: "渲染textbox-查找",
                                            width: 50,
                                            onClick: { type: "function", bind: "rendersearch" },
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
                                        { template: "" }
                                    ]
                                }
                                // { template: "" }
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
        Module.prototype.renderString = function () {
            this.renderName = "text";
            this.render();
        };
        Module.prototype.renderNumber = function () {
            this.renderName = "number";
            this.render();
        };
        Module.prototype.renderDate = function () {
            this.renderName = "date";
            this.render();
        };
        Module.prototype.renderDatetime = function () {
            this.renderName = "datetime";
            this.render();
        };
        Module.prototype.renderDaterange = function () {
            this.renderName = "daterange";
            this.render();
        };
        Module.prototype.renderDatetimerange = function () {
            this.renderName = "datetimerange";
            this.render();
        };
        Module.prototype.rendercombo = function () {
            this.renderName = "combo";
            this.render();
        };
        Module.prototype.rendermulticombo = function () {
            this.renderName = "multicombo";
            if (!_.parseInt(this.refs.rows.value)) {
                YvanUI.msg("rows 必须是数字");
                return;
            }
            if (!_.parseInt(this.refs.cols.value)) {
                YvanUI.msg("cols 必须是数字");
                return;
            }
            this.clear();
            var rows = _.toNumber(this.refs.rows.value);
            var cols = _.toNumber(this.refs.cols.value);
            var vjson = { rows: [] };
            for (var i = 0; i < rows; i++) {
                var row = { cols: [] };
                for (var j = 0; j < cols; j++) {
                    row.cols.push({
                        view: "multicombo",
                        name: "default",
                        ctlName: "combo2",
                        required: true,
                        width: 500,
                        label: "请选择",
                        options: itemData,
                    });
                }
                row.cols.push({});
                vjson.rows.push(row);
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
        Module.prototype.rendersearch = function () {
            this.renderName = "search";
            if (!_.parseInt(this.refs.rows.value)) {
                YvanUI.msg("rows 必须是数字");
                return;
            }
            if (!_.parseInt(this.refs.cols.value)) {
                YvanUI.msg("cols 必须是数字");
                return;
            }
            this.clear();
            var rows = _.toNumber(this.refs.rows.value);
            var cols = _.toNumber(this.refs.cols.value);
            var vjson = { rows: [] };
            for (var i = 0; i < rows; i++) {
                var row = { cols: [] };
                for (var j = 0; j < cols; j++) {
                    row.cols.push({
                        view: "search",
                        label: "查找",
                        width: 200,
                    });
                }
                row.cols.push({});
                vjson.rows.push(row);
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
        Module.prototype.render = function () {
            if (!_.parseInt(this.refs.rows.value)) {
                YvanUI.msg("rows 必须是数字");
                return;
            }
            if (!_.parseInt(this.refs.cols.value)) {
                YvanUI.msg("cols 必须是数字");
                return;
            }
            this.clear();
            var rows = _.toNumber(this.refs.rows.value);
            var cols = _.toNumber(this.refs.cols.value);
            var vjson = { rows: [] };
            var _loop_1 = function (i) {
                var row = { cols: [] };
                var _loop_2 = function (j) {
                    row.cols.push({
                        ctlName: "txt" + i + "_" + j,
                        view: this_1.renderName,
                        label: "\u6587\u672C\u6846" + (i * cols + j + 1),
                        labelAlign: "right",
                        value: i + "," + j + ",\u7B2C" + this_1.ttt + "\u6B21",
                        options: itemData,
                        onChange: function (sender) {
                            console.log("txt" + i + "_" + j + " has changed", sender.value);
                        },
                        width: 250,
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
    var itemData = [
        { id: "KM", text: "千米" },
        { id: "M", text: "米" },
        { id: "DM", text: "分米" },
        { id: "CM", text: "厘米" },
        { id: "MM", text: "毫米" },
        { id: "UM", text: "微米" },
        { id: "NM", text: "纳米" },
        { id: "PM", text: "皮米" },
        { id: "LY", text: "光年" },
        { id: "AU", text: "天文单位" },
        { id: "IN", text: "英寸" },
        { id: "inch", text: "inch" },
        { id: "FT", text: "英尺" },
        { id: "YD", text: "码" },
        { id: "MI", text: "英里" },
        { id: "NMI", text: "海里" },
        { id: "FM", text: "英寻" },
        { id: "FUR", text: "弗隆" },
        { id: "C_L", text: "里" },
        { id: "C_Z", text: "丈" },
        { id: "C_C", text: "尺" },
        { id: "C_A", text: "寸" },
        { id: "C_F", text: "分" },
        { id: "C_I", text: "厘" },
        { id: "C_H", text: "毫" },
    ];
});
//# sourceMappingURL=ExampleTextboxPerform.js.map