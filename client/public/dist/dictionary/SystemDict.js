define(["require", "exports", "tslib", "./SystemDict.view"], function (require, exports, tslib_1, SystemDict_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    SystemDict_view_1 = tslib_1.__importDefault(SystemDict_view_1);
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Module.prototype.func1 = function () {
            // this.refs.menuTree.expandAll()
            // this.refs.menuTree.loading = true
            // this.refs.grid1.data = [];
        };
        Module.prototype.getData = function (sender, param) {
            param.successCallback([
                {
                    dicTpId: "1",
                    tpName: "启停状态",
                    TpCode: "status",
                    count: 2,
                    status: 1,
                },
                { dicTpId: "2", tpName: "性别", TpCode: "gender", count: 2, status: 1 },
                {
                    dicTpId: "3",
                    tpName: "消息类型",
                    TpCode: "msgType",
                    count: 3,
                    status: 1,
                },
            ]);
        };
        Module.prototype.resetForm = function () {
            this.refs.form1.setValues({ a: "123", b: "", c: "Two" });
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(SystemDict_view_1.default));
    exports.default = Module;
});
//# sourceMappingURL=SystemDict.js.map