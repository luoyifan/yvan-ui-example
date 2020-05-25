define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.changeText = "默认语句";
            _this.i = 0;
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
                rows: [
                    {
                        cols: [
                            {
                                view: "button",
                                onRender: {
                                    type: "function",
                                    bind: "render",
                                },
                                ctlName: "btn1",
                                text: "默认点击事件",
                                icon: "fa fa-bars",
                                onClick: {
                                    type: "function",
                                    bind: "click1",
                                },
                            },
                            {
                                view: "button",
                                text: "主要",
                                icon: "fa fa-bars",
                                cssType: "primary",
                            },
                            {
                                view: "button",
                                text: "红色警告",
                                icon: "fa fa-bars",
                                cssType: "danger",
                            },
                            {
                                view: "button",
                                text: "绿色成功",
                                icon: "fa fa-bars",
                                cssType: "success",
                            },
                            {},
                        ],
                    },
                    {
                        cols: [
                            {
                                view: "button",
                                text: "默认",
                            },
                            {
                                view: "button",
                                text: "主要",
                                cssType: "primary",
                            },
                            {
                                view: "button",
                                text: "红色警告",
                                cssType: "danger",
                            },
                            {
                                view: "button",
                                text: "绿色成功",
                                cssType: "success",
                            },
                            {},
                        ],
                    },
                    {
                        cols: [
                            {
                                view: "button",
                                text: "默认",
                                badge: 12
                            },
                            {
                                view: "button",
                                text: "主要",
                                cssType: "primary",
                                badge: "122"
                            },
                            {
                                view: "button",
                                text: "红色警告",
                                cssType: "danger",
                                badge: 2
                            },
                            {
                                view: "button",
                                text: "绿色成功",
                                cssType: "success",
                                badge: "成为"
                            },
                            {},
                        ],
                    },
                    {
                        view: "toolbar",
                        elements: [
                            {
                                view: "label",
                                label: "主数据管理系统",
                                width: 140,
                            },
                            {
                                view: "button",
                                text: "默认",
                            },
                            {
                                view: "button",
                                text: "主要",
                                cssType: "primary",
                            },
                            {
                                view: "button",
                                text: "红色警告",
                                cssType: "danger",
                            },
                            {
                                view: "button",
                                text: "绿色成功",
                                cssType: "success",
                            },
                            {},
                        ],
                    },
                    {
                        view: "toolbar",
                        css: "dark",
                        elements: [
                            {
                                view: "label",
                                label: "主数据管理系统",
                                width: 140,
                            },
                            {
                                view: "button",
                                text: "默认",
                                icon: "fa fa-bars",
                            },
                            {
                                view: "button",
                                text: "主要",
                                icon: "fa fa-bars",
                                cssType: "primary",
                            },
                            {
                                view: "button",
                                text: "红色警告",
                                icon: "fa fa-bars",
                                cssType: "danger",
                            },
                            {
                                view: "button",
                                text: "绿色成功",
                                icon: "fa fa-bars",
                                cssType: "success",
                            },
                            {},
                        ],
                    },
                    {
                        template: "",
                        height: 100
                    },
                    {
                        view: "text",
                        label: "点击事件的显示",
                        entityName: "changeText",
                    },
                    {
                        template: "",
                    },
                ],
            };
        };
        Module.prototype.render = function (sender) {
            _.extend(window, { btn1: sender });
            console.log("btn1 has set", sender);
        };
        Module.prototype.click1 = function () {
            console.log("点击");
            this.i++;
            this.changeText = "点击了" + this.i + "次";
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=ExampleButton.js.map