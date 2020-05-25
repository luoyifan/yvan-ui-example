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
                        template: "",
                        height: 100
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
                    },
                ],
            };
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=ExampleToolbar.js.map