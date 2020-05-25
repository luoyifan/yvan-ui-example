define(["require", "exports", "tslib", "./singleGrid.view", "../template/singleGridDialong", "../DialogC1"], function (require, exports, tslib_1, singleGrid_view_1, singleGridDialong_1, DialogC1_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    singleGrid_view_1 = tslib_1.__importDefault(singleGrid_view_1);
    singleGridDialong_1 = tslib_1.__importDefault(singleGridDialong_1);
    DialogC1_1 = tslib_1.__importDefault(DialogC1_1);
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Module.prototype.add = function () {
            var dialog = new singleGridDialong_1.default();
            // dialog.showDialog({
            //     content: '内容1',
            //     success(cap) {
            //         console.log('success1', cap);
            //     }
            // }, this);
        };
        Module.prototype.edit = function () {
            //
        };
        Module.prototype.add1 = function () {
            var dialog = new DialogC1_1.default();
            // dialog.showDialog({
            //     content: '内容1',
            //     success(cap) {
            //         console.log('success1', cap);
            //     }
            // }, this);
        };
        Module.prototype.selectOnChange = function (sender, value) {
            debugger;
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(singleGrid_view_1.default));
    exports.default = Module;
});
//# sourceMappingURL=singleGrid.js.map