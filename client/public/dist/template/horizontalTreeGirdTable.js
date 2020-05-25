define(["require", "exports", "tslib", "./horizontalTreeGirdTable.view", "./singleGrid.data"], function (require, exports, tslib_1, horizontalTreeGirdTable_view_1, singleGrid_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    horizontalTreeGirdTable_view_1 = tslib_1.__importDefault(horizontalTreeGirdTable_view_1);
    singleGrid_data_1 = tslib_1.__importDefault(singleGrid_data_1);
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Module.prototype.viewResolver = function () {
            return YvanUI.viewExtend(_super.prototype.viewResolver.call(this), {
                treeTable1: {
                    onNodeClick: {
                        type: "function",
                        bind: "menuTreeNodeClick",
                    },
                    dataSource: {
                        type: "function",
                        bind: "getTreeGridData",
                    },
                },
                grid1: {
                    dataSource: {
                        type: "function",
                        bind: "getData",
                    },
                },
                combo1: {
                    onChange: {
                        type: "function",
                        bind: "comboOnChange",
                    },
                },
                richselect1: {
                    onChange: {
                        type: "function",
                        bind: "richselectOnChange",
                    },
                },
            });
        };
        Module.prototype.menuTreeNodeClick = function (sender, node) {
            debugger;
            this.refs.grid1.reload();
        };
        Module.prototype.getData = function (sender, param) {
            debugger;
            param.successCallback(singleGrid_data_1.default.data);
        };
        Module.prototype.getTreeGridData = function (sender, param) {
            param.successCallback([
                {
                    id: "1",
                    value: "The Shawshank",
                    open: true,
                    data: [
                        { id: "1.1", value: "Part 1", chapter: "alpha" },
                        {
                            id: "1.2",
                            value: "Part 2",
                            chapter: "beta",
                            open: true,
                            data: [
                                { id: "1.2.1", value: "Part 1", chapter: "beta-twin" },
                                { id: "1.2.2", value: "Part 2", chapter: "sss" },
                            ],
                        },
                        { id: "1.3", value: "Part 3", chapter: "alpha" },
                        {
                            id: "1.4",
                            value: "Part 4",
                            chapter: "beta",
                            open: true,
                            data: [
                                { id: "1.4.1", value: "Part 1", chapter: "beta-twin" },
                                { id: "1.4.2", value: "Part 2", chapter: "sss" },
                            ],
                        },
                    ],
                },
            ]);
        };
        Module.prototype.comboOnChange = function (sender, value) {
            debugger;
        };
        Module.prototype.richselectOnChange = function (sender, value) {
            debugger;
            this.refs.combo1.value = "1";
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(horizontalTreeGirdTable_view_1.default));
    exports.default = Module;
});
//# sourceMappingURL=horizontalTreeGirdTable.js.map