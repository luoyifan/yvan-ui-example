define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            return _super !== null && _super.apply(this, arguments) || this;
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
                                text: "checkItems",
                                onClick: {
                                    type: "function",
                                    bind: "checkItems",
                                },
                            },
                            {
                                view: "button",
                                text: "getSelected",
                                onClick: {
                                    type: "function",
                                    bind: "getSelected",
                                },
                            },
                            {
                                view: "button",
                                text: "getItem",
                                onClick: {
                                    type: "function",
                                    bind: "getItem",
                                },
                            },
                            {
                                view: "button",
                                text: "getCheckedIds",
                                onClick: {
                                    type: "function",
                                    bind: "getCheckedIds",
                                },
                            },
                            {
                                view: "button",
                                text: "getCheckedItems",
                                onClick: {
                                    type: "function",
                                    bind: "getCheckedItems",
                                },
                            },
                            {
                                view: "button",
                                text: "getChilds",
                                onClick: {
                                    type: "function",
                                    bind: "getChilds",
                                },
                            },
                            {},
                        ],
                    },
                    {
                        view: "tree",
                        ctlName: "theTree",
                        // animate: { type: "flip", subtype: "vertical" },
                        // borderless: true,
                        showCheckbox: true,
                        threeState: true,
                        dataSource: {
                            type: "function",
                            bind: "getTreeData",
                            displayField: "FBRANCHORGNAME",
                            valueField: "FBRANCHORGCODE",
                            parentField: "FPARENTID",
                        },
                        onDataComplete: {
                            type: "function",
                            bind: "treeComplete",
                        },
                        onNodeClick: {
                            type: "function",
                            bind: "treeNodeClick",
                        },
                    },
                ],
            };
        };
        Module.prototype.getTreeData = function (sender, option) {
            var data2 = [
                {
                    FBRANCHORGNAME: "AAA集团",
                    FBRANCHORGCODE: "FJT",
                    FPARENTID: "AAA",
                },
                {
                    FBRANCHORGNAME: "重庆AAA有限公司",
                    FBRANCHORGCODE: "FDM",
                    FPARENTID: "FJT",
                    disabled: true
                },
                {
                    FBRANCHORGNAME: "湖北AAA有限公司",
                    FBRANCHORGCODE: "FXA",
                    FPARENTID: "FJT",
                },
                {
                    FBRANCHORGNAME: "武汉AAA有限公司",
                    FBRANCHORGCODE: "FZT",
                    FPARENTID: "FXA",
                    disabled: true
                },
                {
                    FBRANCHORGNAME: "宜昌AAA有限公司",
                    FBRANCHORGCODE: "FYC",
                    FPARENTID: "FXA",
                }
            ];
            return option.successCallback(data2);
        };
        Module.prototype.getItem = function () {
            console.log(this.refs.theTree.getItem("FYC"));
        };
        Module.prototype.getChilds = function () {
            console.log("items:", this.refs.theTree.getChildItems("FJT"), "ids:", this.refs.theTree.getChildIds("FJT"));
        };
        Module.prototype.getCheckedIds = function () {
            console.log(this.refs.theTree.getCheckedIds());
        };
        Module.prototype.getCheckedItems = function () {
            console.log(this.refs.theTree.getCheckedItems());
        };
        Module.prototype.getSelected = function () {
            console.log("ID:", this.refs.theTree.getSelectedId(), "Item:", this.refs.theTree.getSelectedItem());
        };
        Module.prototype.checkItems = function () {
            this.refs.theTree.checkItems(["FDM", "FYC"]);
        };
        Module.prototype.treeComplete = function (sender) {
            sender.expandAll();
            this.refs.theTree.checkAll();
        };
        Module.prototype.treeNodeClick = function (sender, e) {
            console.log("treeNodeClick", e.row);
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=ExampleTree.js.map