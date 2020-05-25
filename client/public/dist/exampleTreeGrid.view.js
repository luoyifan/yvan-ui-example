define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var default_1 = /** @class */ (function (_super) {
        tslib_1.__extends(default_1, _super);
        function default_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        default_1.prototype.viewResolver = function () {
            return {
                responsive: true,
                rows: [
                    {
                        view: "treetable",
                        ctlName: "treeTable",
                        select: true,
                        onNodeClick: {
                            type: "function",
                            bind: "menuTreeNodeClick",
                        },
                        columns: [
                            { id: "id", header: "id", width: 50, hidden: false },
                            {
                                id: "value",
                                header: "标题",
                                fillspace: true,
                                css: { "text-align": "center" },
                            },
                            {
                                id: "chapter",
                                header: "Mode",
                                fillspace: true,
                                template: "{common.treetable()} #chapter#",
                            },
                        ],
                        // filterMode: {
                        //   level: 1,
                        // },
                        dataSource: {
                            type: "function",
                            bind: "getTreeGridData",
                        },
                    },
                ],
            };
        };
        return default_1;
    }(YvanUI.BaseModule));
    exports.default = default_1;
});
//# sourceMappingURL=exampleTreeGrid.view.js.map