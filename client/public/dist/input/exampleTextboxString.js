define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.i = 1;
            _this.property = {
                value: "当前值",
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
                                view: "text",
                                required: true,
                                label: "请输入",
                                changeValueImplete: false,
                                maxlength: 10,
                                ctlName: "text1",
                                entityName: "property.value",
                                // invalid: false,
                                validate: "number & <10 | number & >100 & <20000",
                                invalidMessage: "Incorrect e-mail address",
                                suggest: [
                                    { id: 1, value: "新疆" },
                                    { id: 2, value: "西藏" },
                                    { id: 3, value: "内蒙" },
                                    { id: 4, value: "甘肃" },
                                    { id: 5, value: "宁夏" },
                                    { id: 6, value: "陕西" },
                                ],
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
                        template: "在控制台 text1 就代表按钮",
                    },
                ],
            };
        };
        Module.prototype.onLoad = function () {
            _.extend(window, { module: this });
            console.log("module has set", this);
        };
        Module.prototype.render = function (sender) {
            _.extend(window, { text1: sender });
            console.log("text1 has set", sender);
        };
        Module.prototype.onClick = function (sender) {
            console.log("text1 onClick", sender);
        };
        Module.prototype.onEnter = function (sender) {
            console.log("text1 onEnter", sender);
        };
        Module.prototype.onFocus = function (sender) {
            console.log("text1 onFocus", sender);
        };
        Module.prototype.onChange = function (sender) {
            console.log("text1 onChange", sender);
        };
        Module.prototype.onBlur = function (sender) {
            console.log("text1 onBlur", sender);
        };
        Module.prototype.onKeydown = function (sender, event) {
            console.log("text1 onKeydown", event);
        };
        Module.prototype.onInput = function (sender) {
            console.log("text1 onInput", sender);
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=exampleTextboxString.js.map