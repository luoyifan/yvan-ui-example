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
                                text: "对话框回调1",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "func1",
                                },
                            },
                            {
                                view: "button",
                                text: "对话框回调2",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "func2",
                                },
                            },
                            {
                                view: "button",
                                text: "对话框性能测试",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "funcPerform",
                                },
                            },
                            {},
                        ],
                    },
                    {
                        cols: [
                            {
                                view: "button",
                                text: "alert",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "alertDemo",
                                },
                            },
                            {
                                view: "button",
                                text: "error",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "errorDemo",
                                },
                            },
                            {
                                view: "button",
                                text: "confirm",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "confirmDemo",
                                },
                            },
                            {
                                view: "button",
                                text: "prompt",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "promptDemo",
                                },
                            },
                            {},
                        ],
                    },
                    {
                        cols: [
                            {
                                view: "button",
                                text: "msg",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "msgDemo",
                                },
                            },
                            {
                                view: "button",
                                text: "msgError",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "msgErrorDemo",
                                },
                            },
                            {
                                view: "button",
                                text: "msgInfo",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "msgInfoDemo",
                                },
                            },
                            {
                                view: "button",
                                text: "msgSuccess",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "msgSuccessDemo",
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
        Module.prototype.promptDemo = function () {
            YvanUI.prompt('请输入一个你想要的的内容', "默认值0")
                .then(function (value) {
                YvanUI.alert('确认:' + value);
            }).catch(function () {
                YvanUI.msg('取消了');
            });
        };
        Module.prototype.alertDemo = function () {
            YvanUI.alert("这里是弹出框的内容，内容很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长!");
        };
        Module.prototype.confirmDemo = function () {
            YvanUI.confirm("确定要这样做？这里是弹出框的内容，内容很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长!")
                .then(function () {
                YvanUI.alert('确认要这样做');
            }).catch(function () {
                YvanUI.msg('取消了');
            });
        };
        Module.prototype.errorDemo = function () {
            YvanUI.error("这里是错误框的内容，内容很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长!");
        };
        Module.prototype.msgDemo = function () {
            YvanUI.msg("这里是 msg 对话框");
        };
        Module.prototype.msgErrorDemo = function () {
            YvanUI.msgError("这里是 msgError 对话框");
        };
        Module.prototype.msgInfoDemo = function () {
            YvanUI.msgInfo("这里是 msgInfo 对话框");
        };
        Module.prototype.msgSuccessDemo = function () {
            YvanUI.msgSuccess("这里是 msgSuccess 对话框");
        };
        Module.prototype.showLoading = function () {
            YvanUI.loading('正在下载...');
            setTimeout(function () {
                YvanUI.clearLoading();
            }, 3000);
        };
        Module.prototype.onLoad = function () {
            console.log("setup module:", this);
            _.extend(window, {
                module: this,
            });
        };
        Module.prototype.customDialogAtAll = function () {
            var webix = _.get(window, 'webix');
            var tid = webix.uid();
            function resolve(value) {
                YvanUI.msg(value);
            }
            function onConfirm() {
                var value = (webix.$$(tid.toString())).getValue();
                if (value) {
                    resolve(value);
                    dialog.close();
                    return;
                }
                YvanUI.msg('请输入内容');
            }
            var vjson = {
                view: 'window', close: true, move: true, modal: true, position: 'center', resize: true, fullscreen: false,
                head: {
                    view: "toolbar", margin: -4, cols: [
                        { view: "label", label: "请输入内容", css: 'webix_header webix_win_title' },
                        {
                            view: "icon", icon: "wxi-plus-square", click: function () {
                                dialog.config.fullscreen = !dialog.config.fullscreen;
                                if (dialog.config.fullscreen) {
                                    dialog.config.oldtop = dialog.config.top;
                                    dialog.config.oldleft = dialog.config.left;
                                    dialog.config.left = 0;
                                    dialog.config.top = 0;
                                    this.define({ icon: 'wxi-minus-square' });
                                }
                                else {
                                    dialog.config.top = dialog.config.oldtop;
                                    dialog.config.left = dialog.config.oldleft;
                                    this.define({ icon: 'wxi-plus-square' });
                                }
                                dialog.resize();
                                this.refresh();
                            }
                        },
                        {
                            view: "icon", icon: "wxi-close", click: function () {
                                dialog.close();
                            }
                        }
                    ]
                },
                on: {
                    onShow: function () {
                        webix.$$(tid).focus();
                    },
                    onDestruct: function () {
                        console.log('onUnload');
                    }
                },
                body: {
                    rows: [
                        { view: 'text', id: tid, placeholder: '请输入' },
                        {
                            cols: [
                                {},
                                {
                                    view: 'button',
                                    value: '确定',
                                    width: 100,
                                    css: 'yvan_primary',
                                    click: onConfirm,
                                },
                                {
                                    view: 'button',
                                    value: '取消',
                                    width: 100,
                                    css: 'default',
                                    click: function () {
                                        dialog.close();
                                    }
                                }
                            ]
                        }
                    ]
                }
            };
            var dialog = webix.ui(vjson);
            dialog.show();
            $(webix.$$(tid).$view).keydown(function (e) {
                if (e.keyCode === 27) {
                    dialog.close();
                    e.preventDefault();
                    return;
                }
                if (e.keyCode === 13) {
                    onConfirm();
                    e.preventDefault();
                    return;
                }
            });
        };
        Module.prototype.func1 = function () {
            var dialog = new DialogC1_1.default();
            console.time();
            dialog.showDialog({
                content: "内容1",
                success: function (cap) {
                    console.log("success1", cap);
                },
            }, this);
            console.timeEnd();
        };
        Module.prototype.func2 = function () {
            var dialog = new DialogC1_1.default();
            console.time('单次打开对话框');
            dialog.showDialog({
                content: "内容2",
                success: function (cap) {
                    console.log("success2", cap);
                },
                onShow: function () {
                    console.timeEnd('单次打开对话框');
                }
            }, this);
        };
        Module.prototype.funcPerform = function () {
            var CC_COUNT = 200;
            console.time(CC_COUNT + '次对话框性能');
            var _loop_1 = function (i) {
                var dialog = new DialogC1_1.default();
                console.time('单次打开' + i);
                dialog.showDialog({
                    content: "内容2",
                    success: function (cap) {
                        console.log("success2", cap);
                    },
                    onShow: function () {
                        dialog.closeDialog();
                    },
                    onClose: function () {
                        console.timeEnd('单次打开' + i);
                    }
                }, this_1);
                dialog.closeDialog();
            };
            var this_1 = this;
            for (var i = 0; i < 100; i++) {
                _loop_1(i);
            }
            console.timeEnd(CC_COUNT + '次对话框性能');
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=ExampleWindow.js.map