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
                        view: "toolbar",
                        height: 38,
                        type: "line",
                        css: {
                            "background-color": "#004c8b",
                        },
                        borderless: true,
                        cols: [
                            {
                                view: "label",
                                width: 120,
                                label: '<span style="color: white">字典分类列表</span>',
                                align: "left",
                            },
                        ],
                    },
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
                        filterMode: {
                            level: 1,
                        },
                        dataSource: {
                            type: "function",
                            bind: "getTreeGridData",
                        },
                    },
                    {
                        view: "label",
                        label: '<span style="color: black;">数量总结</span>',
                        align: "left",
                    },
                ],
            };
        };
        return default_1;
    }(YvanUI.BaseModule));
    exports.default = default_1;
});
//# sourceMappingURL=singleTreeGrid.view.js.map