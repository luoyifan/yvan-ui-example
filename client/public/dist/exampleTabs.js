define(["require", "exports", "tslib", "./exampleTabs.view"], function (require, exports, tslib_1, exampleTabs_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exampleTabs_view_1 = tslib_1.__importDefault(exampleTabs_view_1);
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
        Module.prototype.getValue = function () {
            console.log(this.refs.theTab.getSelectedTabId());
        };
        Module.prototype.tabBar1 = function () {
            console.log("tabBar1 click");
        };
        Module.prototype.tabBar21 = function () {
            console.log("tabBar21 click");
        };
        Module.prototype.tabBar22 = function () {
            console.log("tabBar22 click");
        };
        Module.prototype.tabBar3 = function () {
            console.log("tabBar3 click");
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(exampleTabs_view_1.default));
    exports.default = Module;
});
//# sourceMappingURL=exampleTabs.js.map