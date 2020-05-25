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
        Module.prototype.renderTabs = function () {
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
                        view: "text",
                        label: "\u6587\u672C\u6846" + (i * cols + j + 1),
                        labelAlign: "right",
                        value: i + "," + j + ",\u7B2C" + this_1.ttt + "\u6B21",
                        onChange: function (sender) {
                            console.log("txt" + i + "_" + j + " has changed", sender.value);
                        },
                        width: 300,
                        height: 100
                    });
                    row.cols.push({ view: "resizer" });
                };
                for (var j = 0; j < cols; j++) {
                    _loop_2(j);
                }
                row.cols.push({});
                vjson.rows.push(row);
                vjson.rows.push({ view: "resizer" });
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
});
//# sourceMappingURL=exampleSplitTabsPerform.js.map