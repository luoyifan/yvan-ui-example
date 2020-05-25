define(["require", "exports", "tslib", "./HorizontalTwoGrid.view"], function (require, exports, tslib_1, HorizontalTwoGrid_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    HorizontalTwoGrid_view_1 = tslib_1.__importDefault(HorizontalTwoGrid_view_1);
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
    }(HorizontalTwoGrid_view_1.default));
    exports.default = Module;
});
//# sourceMappingURL=HorizontalTwoGrid.js.map