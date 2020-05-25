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
                rows: [
                    { template: "row 1" },
                    { view: "resizer" },
                    { template: "row 2" },
                    { view: "resizer" },
                    {
                        cols: [
                            { template: "column 1" },
                            { view: "resizer" },
                            { template: "column 2" },
                        ],
                    },
                ],
            };
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=Split.js.map