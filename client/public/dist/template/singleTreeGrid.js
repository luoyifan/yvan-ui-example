define(["require", "exports", "tslib", "./singleTreeGrid.view"], function (require, exports, tslib_1, singleTreeGrid_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    singleTreeGrid_view_1 = tslib_1.__importDefault(singleTreeGrid_view_1);
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Module.prototype.menuTreeNodeClick = function (sender, node) {
            debugger;
        };
        Module.prototype.getTreeGridData = function (sender, param) {
            param.successCallback([
                {
                    id: "1",
                    value: "The Shawshank Redemption",
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
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(singleTreeGrid_view_1.default));
    exports.default = Module;
});
//# sourceMappingURL=singleTreeGrid.js.map