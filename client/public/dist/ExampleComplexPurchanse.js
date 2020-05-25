define(["require", "exports", "tslib", "./ExampleComplexPurchanse.view", "moment"], function (require, exports, tslib_1, ExampleComplexPurchanse_view_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ExampleComplexPurchanse_view_1 = tslib_1.__importDefault(ExampleComplexPurchanse_view_1);
    // 一个功能模块
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 模块加载时调用
        Module.prototype.onLoad = function () {
            this.refs.billDate.value = moment().format("YYYY-MM-DD");
            this.basic.sourceOfOrder = "内部创建";
            this.basic.billId = _.uniqueId("bill_");
        };
        // 模块卸载时调用
        Module.prototype.onUnload = function () {
            console.log("onUnload", this);
        };
        // 模块显示时调用
        Module.prototype.onShow = function () {
            _.extend(window, {
                module: this,
            });
            console.log("onShow", this);
        };
        // 私有模块，事件绑定
        Module.prototype.saveBill = function () {
            YvanUI.alert("保存单据" + JSON.stringify(this.basic));
        };
        Module.prototype.billLoad = function () {
            // 赋值实体属性，即为改变界面
            this.basic.potype = "6";
            this.basic.ordertype = "13";
            this.basic.settlementType = "1";
            this.basic.paymentType = "2";
        };
        // 实体属性发生变化后，立即调用本函数
        Module.prototype.onPayTypeChange = function () {
            YvanUI.msg("支付方式发生变化:" + this.basic.paymentType);
        };
        tslib_1.__decorate([
            YvanUI.Watch("basic.paymentType"),
            tslib_1.__metadata("design:type", Function),
            tslib_1.__metadata("design:paramtypes", []),
            tslib_1.__metadata("design:returntype", void 0)
        ], Module.prototype, "onPayTypeChange", null);
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(ExampleComplexPurchanse_view_1.default));
    exports.default = Module;
});
//# sourceMappingURL=ExampleComplexPurchanse.js.map