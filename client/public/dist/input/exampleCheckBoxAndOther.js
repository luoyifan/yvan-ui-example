define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var default_1 = /** @class */ (function (_super) {
        tslib_1.__extends(default_1, _super);
        function default_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.property = {
                value: "当前值",
            };
            return _this;
        }
        default_1.prototype.viewResolver = function () {
            return {
                rows: [
                    {
                        cols: [
                            tslib_1.__assign({ view: "checkbox", name: "default", ctlName: "checkbox1", label: "请选择", options: [
                                    { id: 1, value: "启用" },
                                    { id: 2, value: "停用" },
                                ] }, events),
                            {},
                        ],
                    },
                    {
                        template: "在控制台 checkbox1 就代勾选框",
                    },
                    {
                        cols: [
                            tslib_1.__assign({ view: "switch", name: "default", ctlName: "switch1", label: "请选择" }, events),
                            {},
                        ],
                    },
                    {
                        template: "在控制台 switch1 就代switch",
                    },
                    {
                        cols: [
                            tslib_1.__assign({ view: "radio", name: "default", ctlName: "radio1", label: "请选择", height: 70, options: itemData }, events),
                        ],
                    },
                    {
                        template: "在控制台 radio1 就代单选",
                    },
                    {},
                ],
            };
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
        default_1.prototype.onChange = function (sender, nv) {
            console.log(sender.ctlName + " onChange", nv);
        };
        default_1.prototype.onBlur = function (sender) {
            console.log(sender.ctlName + " onBlur", sender);
        };
        default_1.prototype.onKeydown = function (sender, event) {
            console.log(sender.ctlName + " onKeydown", event);
        };
        default_1 = tslib_1.__decorate([
            YvanUI.BizModule()
        ], default_1);
        return default_1;
    }(YvanUI.BaseModule));
    exports.default = default_1;
    var events = {
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
        // onBlur: {
        //     type: 'function',
        //     bind: 'onBlur'
        // },
        // onKeydown: {
        //     type: 'function',
        //     bind: 'onKeydown'
        // },
        onChange: {
            type: "function",
            bind: "onChange",
        },
    };
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
//# sourceMappingURL=exampleCheckBoxAndOther.js.map