define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.i = 1;
            _this.property = {
                value: "0",
            };
            return _this;
        }
        Module.prototype.viewResolver = function () {
            return {
                rows: [
                    {
                        view: "form",
                        cols: [
                            {
                                view: "number",
                                required: true,
                                label: "请输入",
                                changeValueImplete: false,
                                ctlName: "number1",
                                entityName: "property.value",
                                onRender: {
                                    type: "function",
                                    bind: "render",
                                },
                                // onClick: {
                                //     type: 'function',
                                //     bind: 'onClick'
                                // },
                                // onEnter: {
                                //     type: 'function',
                                //     bind: 'onEnter'
                                // },
                                // onFocus: {
                                //     type: 'function',
                                //     bind: 'onFocus'
                                // },
                                //
                                // onBlur: {
                                //     type: 'function',
                                //     bind: 'onBlur'
                                // },
                                // onKeydown: {
                                //     type: 'function',
                                //     bind: 'onKeydown'
                                // },
                                // onInput: {
                                //     type: 'function',
                                //     bind: 'onInput'
                                // },
                                onChange: {
                                    type: "function",
                                    bind: "onChange",
                                },
                            },
                            {},
                        ],
                    },
                    {
                        template: "在控制台 number1 就代表按钮",
                    },
                ],
            };
        };
        Module.prototype.onLoad = function () {
            _.extend(window, { module: this });
            console.log("module has set", this);
        };
        Module.prototype.render = function (sender) {
            _.extend(window, { number1: sender });
            console.log("number1 has set", sender);
        };
        Module.prototype.onClick = function (sender) {
            console.log("number1 onClick", sender);
        };
        Module.prototype.onEnter = function (sender) {
            console.log("number1 onEnter", sender);
        };
        Module.prototype.onFocus = function (sender) {
            console.log("number1 onFocus", sender);
        };
        Module.prototype.onChange = function (sender) {
            console.log("number1 onChange", sender);
        };
        Module.prototype.onBlur = function (sender) {
            console.log("number1 onBlur", sender);
        };
        Module.prototype.onKeydown = function (sender, event) {
            console.log("number1 onKeydown", event);
        };
        Module.prototype.onInput = function (sender) {
            console.log("number1 onInput", sender);
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=exampleTextboxNumber.js.map