define(["require", "exports", "tslib", "./imagePreview.view"], function (require, exports, tslib_1, imagePreview_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    imagePreview_view_1 = tslib_1.__importDefault(imagePreview_view_1);
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Module.prototype.onShow2 = function (sender, value) {
            debugger;
        };
        Module.prototype.img = function (obj) {
            return ('<img src="' + obj.src + '" class="content" ondragstart="return false"/>');
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(imagePreview_view_1.default));
    exports.default = Module;
});
//# sourceMappingURL=imagePreview.js.map