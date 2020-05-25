define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.query = {
                f1: "",
                f2: "",
            };
            return _this;
        }
        Module.prototype.onShow = function () {
            _.extend(window, {
                module: this,
            });
            console.log("module setup", this);
        };
        Module.prototype.viewResolver = function () {
            return {
                rows: [
                    {
                        cols: [
                            {
                                view: "label",
                                autowidth: true,
                                label: "window.grid1",
                            },
                            {
                                view: "button",
                                text: "Reload",
                                onClick: { type: "function", bind: "btnReloadOnClick" },
                            },
                            {
                                view: "button",
                                text: "SelectedRow",
                                onClick: { type: "function", bind: "btnGetSelectedRowOnClick" },
                            },
                            {
                                view: "button",
                                text: "SelectedRows",
                                onClick: { type: "function", bind: "btnGetSelectedRowsOnClick" },
                            },
                            {
                                view: "button",
                                text: "SelectedId",
                                icon: "fa fa-bars",
                                onClick: { type: "function", bind: "btnGetSelectedIdOnClick" },
                            },
                            {},
                        ],
                    },
                    {
                        view: "grid",
                        ctlName: "grid1",
                        autoLoad: false,
                        onRender: {
                            type: "function",
                            bind: "setup",
                        },
                        entityName: "grid",
                        idField: "goods_id",
                        checkbox: true,
                        dataSource: {
                            type: "SQL",
                            db: "db",
                            sqlId: "/demo@selectBigTable",
                            params: {
                                a: 1,
                                b: { $watch: "query.f1" },
                                c: { $get: "query.f2" },
                            },
                        },
                        columns: [
                            { field: "goods_id", hidden: true },
                            {
                                field: "prod_name",
                                title: "产品名称",
                                filterable: true,
                                sortable: false,
                                minwidth: 100,
                            },
                            {
                                field: "prod_local_name",
                                title: "通用名",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "manufacture",
                                title: "生产厂家",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "prod_specification",
                                title: "商品规格",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "prodscopeno_id",
                                title: "经营简码id",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "prodscopeno_name",
                                title: "经营简码名称",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "category",
                                title: "所属类目",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "approval_number",
                                title: "批准文号",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "validity",
                                title: "有效期",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "tax_id",
                                title: "税务编码",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "tax_name",
                                title: "税务名称",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "prod_character",
                                title: "性状",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "composition",
                                title: "成分",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "indications",
                                title: "适应症",
                                filterable: true,
                                sortable: true,
                            },
                            {
                                field: "adverse_reactions",
                                title: "不良反应",
                                filterable: true,
                                sortable: true,
                            },
                        ],
                    },
                ],
            };
        };
        Module.prototype.setup = function (sender) {
            _.extend(window, { grid1: sender });
            console.log("grid1 has set", sender);
        };
        Module.prototype.btnReloadOnClick = function () {
            debugger;
            this.refs.grid1.reload();
        };
        Module.prototype.btnGetSelectedRowOnClick = function () {
            console.log("getSelectedRow", this.refs.grid1.getSelectedRow());
        };
        Module.prototype.btnGetSelectedRowsOnClick = function () {
            console.log("getSelectedRows", this.refs.grid1.getSelectedRows());
        };
        Module.prototype.btnGetSelectedIdOnClick = function () {
            console.log("getSelectedId", this.refs.grid1.getSelectedId());
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=ExampleGridBig.js.map