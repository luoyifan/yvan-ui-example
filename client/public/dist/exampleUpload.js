define(["require", "exports", "tslib", "./exampleUpload.view"], function (require, exports, tslib_1, exampleUpload_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exampleUpload_view_1 = tslib_1.__importDefault(exampleUpload_view_1);
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
        Module.prototype.selectOnChange = function (sender, value) { };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(exampleUpload_view_1.default));
    exports.default = Module;
});
//# sourceMappingURL=exampleUpload.js.map