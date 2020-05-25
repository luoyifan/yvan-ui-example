define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var default_1 = /** @class */ (function (_super) {
        tslib_1.__extends(default_1, _super);
        function default_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.main = {
                date1: "1990-10-01",
                dateRange: "1990-10-01 至 2019-10-01",
                start1: "",
                end1: "",
            };
            _this.i = 1;
            _this.property = {
                value: "当前值",
            };
            return _this;
        }
        default_1.prototype.viewResolver = function () {
            var events = {
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
                                entityName: "main.dateRange",
                                entityNameStart: "main.start1",
                                entityNameEnd: "main.end1",
                                required: true,
                                label: "日期范围选择",
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
        };
        default_1.prototype.dateRangeChange = function (nv) {
            //console.log('main.dateRange changed:' + nv);
        };
        default_1.prototype.start1Change = function (nv) {
            //console.log('main.start1 changed:' + nv);
        };
        default_1.prototype.end1Change = function (nv) {
            //console.log('main.end1 changed:' + nv);
        };
        default_1.prototype.date1Change = function (nv) {
            console.log("main.date1 changed:" + nv);
        };
        default_1.prototype.setDate1 = function () {
            this.main.date1 = "2008-10-01";
        };
        default_1.prototype.setRange = function () {
            this.main.dateRange = "2008-10-01 至 2012-10-01";
        };
        default_1.prototype.render = function (sender) {
            window[sender.ctlName] = sender;
            console.log(sender.ctlName + " has set", sender);
        };
        default_1.prototype.onClick = function (sender) {
            console.log(sender.ctlName + " onClick", sender);
        };
        default_1.prototype.onEnter = function (sender) {
            console.log(sender.ctlName + " onEnter", sender);
        };
        default_1.prototype.onFocus = function (sender) {
            console.log(sender.ctlName + " onFocus", sender);
        };
        default_1.prototype.onChange = function (sender) {
            console.log(sender.ctlName + " onChange", sender);
        };
        default_1.prototype.onBlur = function (sender) {
            console.log(sender.ctlName + " onBlur", sender);
        };
        default_1.prototype.onKeydown = function (sender, event) {
            console.log(sender.ctlName + " onKeydown", event);
        };
        tslib_1.__decorate([
            YvanUI.Watch("main.dateRange"),
            tslib_1.__metadata("design:type", Function),
            tslib_1.__metadata("design:paramtypes", [Object]),
            tslib_1.__metadata("design:returntype", void 0)
        ], default_1.prototype, "dateRangeChange", null);
        tslib_1.__decorate([
            YvanUI.Watch("main.start1"),
            tslib_1.__metadata("design:type", Function),
            tslib_1.__metadata("design:paramtypes", [Object]),
            tslib_1.__metadata("design:returntype", void 0)
        ], default_1.prototype, "start1Change", null);
        tslib_1.__decorate([
            YvanUI.Watch("main.end1"),
            tslib_1.__metadata("design:type", Function),
            tslib_1.__metadata("design:paramtypes", [Object]),
            tslib_1.__metadata("design:returntype", void 0)
        ], default_1.prototype, "end1Change", null);
        tslib_1.__decorate([
            YvanUI.Watch("main.date1"),
            tslib_1.__metadata("design:type", Function),
            tslib_1.__metadata("design:paramtypes", [Object]),
            tslib_1.__metadata("design:returntype", void 0)
        ], default_1.prototype, "date1Change", null);
        default_1 = tslib_1.__decorate([
            YvanUI.BizModule()
        ], default_1);
        return default_1;
    }(YvanUI.BaseModule));
    exports.default = default_1;
});
//# sourceMappingURL=exampleTextboxDate.js.map