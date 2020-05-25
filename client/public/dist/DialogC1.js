define(["require", "exports", "tslib", "./widgets/selectOrg"], function (require, exports, tslib_1, selectOrg_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    selectOrg_1 = tslib_1.__importDefault(selectOrg_1);
    var seq = 1;
    var events = {
        onClick: {
            type: "function",
            bind: "onTextClick",
        },
        // onEnter: {
        //     type: 'function',
        //     bind: 'onEnter'
        // },
        onFocus: {
            type: "function",
            bind: "onTextFocus",
        },
        onChange: {
            type: "function",
            bind: "onTextChange",
        },
        onBlur: {
            type: "function",
            bind: "onTextBlur",
        },
        onKeydown: {
            type: "function",
            bind: "onTextKeydown",
        },
    };
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.query = {
                org_id: "",
                org_name: "",
            };
            _this.i = 1;
            return _this;
        }
        Module_1 = Module;
        Module.prototype.viewResolver = function () {
            seq++;
            return {
                title: "对话框C1-" + seq,
                width: 600,
                modal: true,
                btn: ["按钮A", "按钮B"],
                body: {
                    rows: [
                        {
                            cols: [
                                {
                                    view: "button",
                                    text: "关闭",
                                    onClick: {
                                        type: "function",
                                        bind: "closeMe",
                                    },
                                },
                                {
                                    view: "button",
                                    text: "传回父容器",
                                    onClick: {
                                        type: "function",
                                        bind: "sendParent",
                                    },
                                },
                                {
                                    view: "button",
                                    text: "继续打开对话框",
                                    onClick: {
                                        type: "function",
                                        bind: "openNew",
                                    },
                                },
                                {}
                            ],
                        },
                        {
                            view: "search",
                            ctlName: "seachboxOrgName",
                            entityName: "query.org_name",
                            label: "组织机构查找",
                            widget: {
                                content: selectOrg_1.default,
                                bind: {
                                    "query.org_id": "org_id",
                                    "query.org_name": "org_name",
                                },
                            },
                        },
                        tslib_1.__assign({ view: "combo", options: [
                                { id: "1", text: "a1" },
                                { id: "2", text: "a2" },
                                { id: "3", text: "a3" },
                                { id: "4", text: "a4" },
                            ] }, events),
                        tslib_1.__assign({ view: "combo", options: [
                                { id: "1", text: "a1" },
                                { id: "2", text: "a2" },
                                { id: "3", text: "a3" },
                                { id: "4", text: "a4" },
                            ] }, events),
                        tslib_1.__assign({ view: "combo", options: [
                                { id: "1", text: "a1" },
                                { id: "2", text: "a2" },
                                { id: "3", text: "a3" },
                                { id: "4", text: "a4" },
                            ] }, events),
                    ],
                },
            };
        };
        Module.prototype.onLoad = function () {
            YvanUI.msg("onLoad");
            if (this.inParamter.onShow) {
                this.inParamter.onShow(this);
            }
        };
        Module.prototype.onClose = function () {
            YvanUI.msg("onClose");
            if (this.inParamter.onClose) {
                this.inParamter.onClose(this);
            }
        };
        Module.prototype.onEsc = function () {
            YvanUI.msg("onEsc");
        };
        Module.prototype.onEnter = function () {
            YvanUI.msg("onEnter");
        };
        Module.prototype.closeMe = function () {
            this.closeDialog();
        };
        Module.prototype.onTextClick = function (sender) {
            console.log('onTextClick', sender, arguments);
        };
        Module.prototype.onTextFocus = function (sender) {
            console.log('onTextFocus', sender, arguments);
        };
        Module.prototype.onTextChange = function (sender) {
            console.log('onTextChange', sender, arguments);
        };
        Module.prototype.onTextBlur = function (sender) {
            console.log('onTextBlur', sender, arguments);
        };
        Module.prototype.onTextKeydown = function (sender) {
            console.log('onTextKeydown', sender, arguments);
        };
        Module.prototype.sendParent = function () {
            this.inParamter.success("\u4F20\u56DE\u4E00\u6BB5\u5B57\u7B26\u4E32 " + this.i++);
        };
        Module.prototype.openNew = function () {
            var dialog = new Module_1();
            dialog.showDialog(this.inParamter, this.dialogParent);
        };
        Module.prototype.destroy = function () {
            console.log("desc");
        };
        var Module_1;
        Module = Module_1 = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseDialog));
    exports.default = Module;
});
//# sourceMappingURL=DialogC1.js.map