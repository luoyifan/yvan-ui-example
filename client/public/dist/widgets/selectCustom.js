define(["require", "exports", "tslib", "./custom.data", "./BaseGridWidget"], function (require, exports, tslib_1, custom_data_1, BaseGridWidget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    custom_data_1 = tslib_1.__importDefault(custom_data_1);
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Module.prototype.gridDataSource = function (sender, params) {
            var _this = this;
            var data;
            if (!this.dsQuery.query) {
                data = custom_data_1.default;
            }
            else {
                data = custom_data_1.default.filter(function (row) {
                    return (row.customername.indexOf(_this.dsQuery.query) >= 0 ||
                        row.contact.indexOf(_this.dsQuery.query) >= 0 ||
                        row.customerid.indexOf(_this.dsQuery.query) >= 0 ||
                        row.customercode.indexOf(_this.dsQuery.query) >= 0);
                });
            }
            params.successCallback(data, data.length);
        };
        Module.prototype.viewResolver = function () {
            return _super.prototype.baseViewResolver.call(this, {
                title: "客户检索方案",
                grid: {
                    autoSizeColumns: false,
                    idField: "customerid",
                    dataSource: {
                        type: "function",
                        bind: "gridDataSource",
                        params: {
                            query: { $watch: "dsQuery.query" },
                        },
                    },
                    columns: [
                        { field: "customerid", hidden: true },
                        { field: "customercode", title: "客户编号", width: 80 },
                        { field: "customername", title: "客户名称", width: 120 },
                        { field: "logogram", title: "助记码", width: 80 },
                        { field: "industryclass", title: "客户类型", width: 100 },
                        { field: "customertype", title: "客户类别", width: 100 },
                        { field: "zip", title: "邮编", width: 80 },
                        { field: "contact", title: "联系人", width: 80 },
                        { field: "telephone", title: "电话", width: 80 },
                        { field: "province", title: "省", width: 80 },
                        { field: "city", title: "市", width: 80 },
                        { field: "address", title: "地址", width: 100 },
                        { field: "ownername", title: "所属货主", width: 100 },
                        { field: "isdefaultowner", title: "是否默认货主", width: 120 },
                        { field: "routeid", hidden: true },
                        { field: "routename", title: "线路名称", width: 120 },
                        {
                            field: "isenable",
                            title: "是否启用",
                            width: 100,
                        },
                        { field: "remark", title: "备注", width: 100 },
                    ],
                },
            });
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(BaseGridWidget_1.BaseGridWidget));
    exports.default = Module;
});
//# sourceMappingURL=selectCustom.js.map