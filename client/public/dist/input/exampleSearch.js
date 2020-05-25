define(["require", "exports", "tslib", "../widgets/selectOrg", "../widgets/selectCustom"], function (require, exports, tslib_1, selectOrg_1, selectCustom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    selectOrg_1 = tslib_1.__importDefault(selectOrg_1);
    selectCustom_1 = tslib_1.__importDefault(selectCustom_1);
    var events = {
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
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.query = {
                org_id: "z",
                org_name: "zz1",
            };
            _this.qqq = '';
            _this.dsMain = {
                suppliercode: "",
                suppliername: "",
                supplierprovince: "",
                suppliercity: "",
                supplierzip: "",
                suppliercontact: "",
                suppliertel: "",
                supplieraddress: "",
            };
            _this.i = 1;
            _this.property = {
                value: "当前值",
            };
            return _this;
        }
        Module.prototype.viewResolver = function () {
            var qs = {
                widget: {
                    content: selectCustom_1.default,
                    params: {
                        a: 1,
                        b: "2",
                    },
                    bind: {
                        "dsMain.suppliercode": "customercode",
                        "dsMain.suppliername": "customername",
                        "dsMain.supplierprovince": "province",
                        "dsMain.suppliercity": "city",
                        "dsMain.supplierzip": "zip",
                        "dsMain.suppliercontact": "contact",
                        "dsMain.suppliertel": "telephone",
                        "dsMain.supplieraddress": "address",
                    },
                },
            };
            return {
                view: "form",
                type: "space",
                scroll: true,
                rows: [
                    {
                        cols: [
                            {
                                view: "toolbar",
                                borderless: true,
                                elements: [
                                    {
                                        view: "label",
                                        label: "Searchbox 演示",
                                        autowidth: true,
                                    },
                                    {
                                        text: "取值",
                                        view: "button",
                                        ctlName: "btnGet",
                                    },
                                    {
                                        text: "代码设值",
                                        view: "button",
                                        ctlName: "btnSet",
                                    },
                                    {
                                        text: "代码查找",
                                        view: "button",
                                        ctlName: "btnSearch",
                                    },
                                    {
                                        text: "置空",
                                        view: "button",
                                        ctlName: "btnClear",
                                    },
                                    {},
                                ],
                            },
                            {},
                        ],
                    },
                    {
                        view: "fieldset",
                        label: "组织机构",
                        body: {
                            rows: [
                                {
                                    cols: [
                                        tslib_1.__assign({ view: "search", ctlName: "seachboxOrgName", entityName: "query.org_name", label: "组织机构查找", widget: {
                                                content: selectOrg_1.default,
                                                bind: {
                                                    "query.org_id": "org_id",
                                                    "query.org_name": "org_name",
                                                },
                                            } }, events),
                                        {},
                                    ],
                                },
                                {
                                    cols: [
                                        tslib_1.__assign({ label: "组织机构编号", entityName: "query.org_id", view: "text", validate: function (value) {
                                                if (!value || value.length < 3) {
                                                    return '输入长度必须大于等于3';
                                                }
                                            } }, events),
                                        tslib_1.__assign({ label: "组织机构名称", entityName: "query.org_name", view: "text", validate: function (value) {
                                                if (!value || value.length < 5) {
                                                    return '输入长度必须大于等于5';
                                                }
                                            } }, events),
                                        tslib_1.__assign({ label: "组织机构名称", entityName: "qqq", view: "text", validate: function (value) {
                                                if (!value || value.length < 10) {
                                                    return '输入长度必须大于等于10';
                                                }
                                            }, required: true }, events),
                                        {},
                                    ],
                                },
                                { template: "" },
                            ],
                        },
                    },
                    {
                        view: "fieldset",
                        label: "供应商",
                        body: {
                            rows: [
                                {
                                    cols: [
                                        tslib_1.__assign(tslib_1.__assign({ view: "search", ctlName: "suppliercode", entityName: "dsMain.suppliercode", label: "客户编号" }, qs), events),
                                        tslib_1.__assign(tslib_1.__assign({ view: "search", ctlName: "suppliername", entityName: "dsMain.suppliername", label: "客户名称" }, qs), events),
                                    ],
                                },
                                {
                                    cols: [
                                        {
                                            label: "联系人",
                                            ctlName: "suppliercontact",
                                            entityName: "dsMain.suppliercontact",
                                            view: "text",
                                        },
                                        {
                                            label: "电话",
                                            ctlName: "suppliertel",
                                            entityName: "dsMain.suppliertel",
                                            view: "text",
                                        },
                                        {
                                            label: "地址",
                                            ctlName: "supplieraddress",
                                            entityName: "dsMain.supplieraddress",
                                            view: "text",
                                        },
                                    ],
                                },
                                {
                                    cols: [
                                        {
                                            label: "省",
                                            view: "text",
                                            ctlName: "supplierprovince",
                                            entityName: "dsMain.supplierprovince",
                                            disabled: true,
                                        },
                                        {
                                            label: "市",
                                            view: "text",
                                            ctlName: "suppliercity",
                                            entityName: "dsMain.suppliercity",
                                            disabled: true,
                                        },
                                        {
                                            label: "邮编",
                                            ctlName: "supplierzip",
                                            entityName: "dsMain.supplierzip",
                                            view: "text",
                                            disabled: true,
                                        },
                                    ],
                                },
                                {
                                    cols: [
                                        {
                                            label: "备注",
                                            ctlName: "supplierremark",
                                            entityName: "dsMain.supplierremark",
                                            view: "text",
                                        },
                                    ],
                                },
                                {
                                    cols: [
                                        {
                                            text: "提交",
                                            view: "button",
                                            onClick: {
                                                type: "function",
                                                bind: "btnClick",
                                            },
                                        },
                                        {
                                            text: "提交",
                                            view: "button",
                                            onClick: {
                                                type: "function",
                                                bind: "btnClick2",
                                            },
                                        },
                                        {}
                                    ]
                                },
                                { template: "" },
                            ],
                        },
                    },
                    {
                        template: "",
                    },
                ],
            };
        };
        Module.prototype.onLoad = function () {
            _.set(window, "search", this.refs.seachboxOrgName);
            console.log("search has set", this.refs.seachboxOrgName);
            _.set(window, "search1", this.refs.seachboxOrgName);
            console.log("search1 has set", this.refs.suppliercode);
            _.set(window, "search2", this.refs.seachboxOrgName);
            console.log("search2 has set", this.refs.suppliername);
        };
        Module.prototype.onClick = function (sender) {
            // console.log(sender.ctlName + " onClick", sender);
        };
        Module.prototype.onEnter = function (sender) {
            // console.log(sender.ctlName + " onEnter", sender);
        };
        Module.prototype.onFocus = function (sender) {
            // console.log(sender.ctlName + " onFocus", sender);
        };
        Module.prototype.onChange = function (sender, nv) {
            console.log(sender.ctlName + " onChange", nv);
        };
        Module.prototype.onBlur = function (sender) {
            // console.log(sender.ctlName + " onBlur", sender);
        };
        Module.prototype.onKeydown = function (sender, event) {
            // console.log(sender.ctlName + " onKeydown", event);
        };
        Module.prototype.codeValueChanged = function (value) {
            console.log("值改变了：", value);
        };
        Module.prototype.btnClick = function () {
            var _this = this;
            console.log("提交");
            this.validate('qqq').then(function (res) {
                YvanUI.msg('校验成功');
                console.log(_this.query);
            }).catch(function (e) {
                console.log('校验错误', e);
                // _.forEach(e, (value, key) => {
                //   YvanUI.msg(key + value);
                //   YvanUI.msgInfo(key + value);
                // });
            });
        };
        Module.prototype.btnClick2 = function () {
            console.log("提交2", this.dsMain);
        };
        tslib_1.__decorate([
            YvanUI.Watch('dsMain.suppliercode'),
            tslib_1.__metadata("design:type", Function),
            tslib_1.__metadata("design:paramtypes", [Object]),
            tslib_1.__metadata("design:returntype", void 0)
        ], Module.prototype, "codeValueChanged", null);
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=exampleSearch.js.map