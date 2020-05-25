define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Module.prototype.viewResolver = function () {
            return {
                responsive: true,
                rows: [
                    {
                        view: "treetable",
                        ctlName: "theTreeTable",
                        select: 'cell',
                        columns: [
                            {
                                id: "id",
                                header: "id",
                                width: 100,
                                hidden: false
                            },
                            {
                                id: "value",
                                header: "姓名",
                                fillspace: true,
                                css: { "text-align": "center" },
                            },
                            {
                                id: "adress",
                                header: "地址",
                                fillspace: true,
                                template: "{common.treetable()} #adress#",
                            },
                        ],
                        dataSource: {
                            type: "function",
                            bind: "getTreeGridData",
                            valueField: "FBRANCHORGCODE",
                            parentField: "FPARENTID",
                        },
                        onNodeClick: {
                            type: "function",
                            bind: "treeNodeClick",
                        },
                    },
                ],
            };
        };
        // 树节点被点击后触发
        Module.prototype.treeNodeClick = function (sender, node) {
            console.log("treeNodeClick", node);
        };
        Module.prototype.getTreeGridData = function (sender, param) {
            var data = [
                {
                    id: "1",
                    value: "AAA集团",
                    adress: '湖北',
                    FBRANCHORGCODE: "FJT",
                },
                {
                    id: "1.1",
                    value: "重庆AAA有限公司",
                    adress: '重庆',
                    FBRANCHORGCODE: "FDM",
                    FPARENTID: "FJT",
                },
                {
                    id: "1.2",
                    value: "湖北AAA有限公司",
                    adress: "湖北",
                    FBRANCHORGCODE: "FXA",
                    FPARENTID: "FJT",
                },
                {
                    id: "1.2.1",
                    value: "武汉AAA有限公司",
                    adress: "武汉",
                    FBRANCHORGCODE: "FZT",
                    FPARENTID: "FXA",
                },
                {
                    id: "1.2.2",
                    value: "宜昌AAA有限公司",
                    adress: "宜昌",
                    FBRANCHORGCODE: "FYC",
                    FPARENTID: "FXA",
                }
            ];
            return param.successCallback(data);
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=exampleTreeGrid.js.map