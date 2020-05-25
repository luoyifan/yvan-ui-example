define(["require", "exports", "tslib", "./DialogC1"], function (require, exports, tslib_1, DialogC1_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    DialogC1_1 = tslib_1.__importDefault(DialogC1_1);
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.i = 1;
            return _this;
        }
        Module.prototype.onLoad = function () {
            console.log("setup module:", this);
            _.extend(window, {
                module: this,
            });
        };
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
                                text: "dialog性能测试",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "dialogPerform",
                                },
                            },
                            {
                                view: "button",
                                text: "alert性能测试",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "alertPerform",
                                },
                            },
                            {
                                view: "button",
                                text: "msg性能测试",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "msgPerform",
                                },
                            },
                            {},
                        ],
                    },
                    {
                        cols: [
                            {
                                view: "button",
                                text: "loading",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "showLoading",
                                },
                            },
                            {}
                        ]
                    },
                    {},
                ],
            };
        };
        Module.prototype.alertPerform = function () {
            var CC_COUNT = 10;
            console.time(CC_COUNT + '次对话框性能');
            for (var i = 0; i < CC_COUNT; i++) {
                YvanUI.alert(i + "这里是弹出框的内容，内容很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长!");
            }
            console.timeEnd(CC_COUNT + '次对话框性能');
        };
        Module.prototype.msgPerform = function () {
            var CC_COUNT = 10;
            console.time(CC_COUNT + '次对话框性能');
            for (var i = 0; i < CC_COUNT; i++) {
                YvanUI.msg("这里是 msg 对话框" + i);
            }
            console.timeEnd(CC_COUNT + '次对话框性能');
        };
        Module.prototype.dialogPerform = function () {
            var CC_COUNT = 10;
            console.time(CC_COUNT + '次对话框性能');
            for (var i = 0; i < CC_COUNT; i++) {
                var dialog = new DialogC1_1.default();
                dialog.showDialog({
                    content: "内容1",
                    success: function (cap) {
                        console.log("success1", cap);
                    },
                }, this);
            }
            console.timeEnd(CC_COUNT + '次对话框性能');
        };
        Module.prototype.showLoading = function () {
            YvanUI.loading('正在下载...');
            setTimeout(function () {
                YvanUI.clearLoading();
            }, 3000);
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=ExampleWindowPerform.js.map