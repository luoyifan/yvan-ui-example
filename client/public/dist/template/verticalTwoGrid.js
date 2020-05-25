define(["require", "exports", "tslib", "./verticalTwoGrid.view"], function (require, exports, tslib_1, verticalTwoGrid_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    verticalTwoGrid_view_1 = tslib_1.__importDefault(verticalTwoGrid_view_1);
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Module.prototype.selectOnChange = function (sender, value) { };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(verticalTwoGrid_view_1.default));
    exports.default = Module;
});
//# sourceMappingURL=verticalTwoGrid.js.map