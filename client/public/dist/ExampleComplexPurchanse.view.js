define(["require", "exports", "tslib", "./widgets/selectCustom"], function (require, exports, tslib_1, selectCustom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    selectCustom_1 = tslib_1.__importDefault(selectCustom_1);
    var View = /** @class */ (function (_super) {
        tslib_1.__extends(View, _super);
        function View() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.basic = {
                billDate: "",
                billId: "",
                potype: "1",
                ordertype: "1",
                sourceOfOrder: "",
                settlementType: "",
                paymentType: "",
            };
            _this.dsSup = {
                suppliercode: "",
                suppliername: "",
                supplierprovince: "",
                suppliercity: "",
                supplierzip: "",
                suppliercontact: "",
                suppliertel: "",
                supplieraddress: "",
            };
            return _this;
        }
        View.prototype.viewResolver = function () {
            var qs = {
                widget: {
                    content: selectCustom_1.default,
                    bind: {
                        "dsSup.suppliercode": "customercode",
                        "dsSup.suppliername": "customername",
                        "dsSup.supplierprovince": "province",
                        "dsSup.suppliercity": "city",
                        "dsSup.supplierzip": "zip",
                        "dsSup.suppliercontact": "contact",
                        "dsSup.suppliertel": "telephone",
                        "dsSup.supplieraddress": "address",
                    },
                },
            };
            return {
                rows: [
                    {
                        view: "toolbar",
                        // css: "webix_dark",
                        borderless: true,
                        elements: [
                            { view: "label", label: "采购订单", width: 100 },
                            {
                                view: "button",
                                text: "保存",
                                icon: "fa fa-save",
                                onClick: { type: "function", bind: "saveBill" },
                                ctlName: "btnSave",
                            },
                            {
                                view: "button",
                                text: "读取单据1",
                                icon: "fa fa-circle-o-notch",
                                onClick: { type: "function", bind: "billLoad" },
                            },
                            {
                                view: "button",
                                text: "单据调整2",
                                icon: "fa fa-plus-circle",
                                onClick: { type: "function", bind: "reloadBill" },
                            },
                            {
                                view: "button",
                                text: "单据删除3",
                                icon: "fa fa-remove",
                                onClick: { type: "function", bind: "delBill" },
                            },
                            {},
                            {
                                view: "button",
                                text: "关闭",
                                icon: "fa fa-times",
                                onClick: { type: "function", bind: "closeMe" },
                            },
                        ],
                    },
                    {
                        view: "tabview",
                        tabbar: {
                            close: false,
                            popupWidth: 300,
                            optionWidth: 120,
                            tabMinWidth: 120,
                        },
                        cells: [
                            {
                                header: "主信息",
                                close: false,
                                body: {
                                    rows: [
                                        {
                                            cols: [
                                                {
                                                    width: "auto",
                                                    view: "text",
                                                    label: "单据日期",
                                                    value: "2020-01-14",
                                                    readonly: true,
                                                    ctlName: "billDate",
                                                    entityName: "basic.billDate",
                                                },
                                                {
                                                    width: "auto",
                                                    view: "text",
                                                    label: "订单编号",
                                                    value: "PO草",
                                                    readonly: true,
                                                    entityName: "basic.billId",
                                                },
                                                {
                                                    width: "auto",
                                                    view: "combo",
                                                    label: "PO类型",
                                                    required: true,
                                                    entityName: "basic.potype",
                                                    options: [
                                                        { id: "1", text: "采购入库" },
                                                        { id: "2", text: "销退入库" },
                                                        { id: "3", text: "产成品入库" },
                                                        { id: "4", text: "调拨入库" },
                                                        { id: "5", text: "其它入库" },
                                                        {
                                                            id: "6",
                                                            text: "直调入库",
                                                        },
                                                        { id: "7", text: "越库入库" },
                                                        { id: "8", text: "原材料入库" },
                                                        { id: "9", text: "余料回库" },
                                                    ],
                                                },
                                                {
                                                    width: "auto",
                                                    view: "combo",
                                                    label: "订单类型",
                                                    entityName: "basic.ordertype",
                                                    options: [
                                                        { id: "1", text: "入库" },
                                                        { id: "13", text: "补货" },
                                                        { id: "2", text: "出库" },
                                                        { id: "5", text: "移库" },
                                                        { id: "8", text: "损溢" },
                                                        { id: "9", text: "盘点" },
                                                    ],
                                                },
                                                {
                                                    width: "auto",
                                                    view: "text",
                                                    label: "订单来源",
                                                    value: "内部创建",
                                                    readonly: true,
                                                    entityName: "basic.sourceOfOrder",
                                                },
                                            ],
                                        },
                                        {
                                            cols: [
                                                {
                                                    width: "auto",
                                                    view: "search",
                                                    label: "货主编号",
                                                    required: true,
                                                },
                                                {
                                                    width: "auto",
                                                    view: "search",
                                                    label: "货主名称",
                                                    required: true,
                                                },
                                                { width: "auto", view: "date", label: "到货开始时间" },
                                                { width: "auto", view: "text", label: "源订单号" },
                                                {},
                                            ],
                                        },
                                        {
                                            cols: [
                                                {
                                                    width: "auto",
                                                    view: "combo",
                                                    label: "结算方式",
                                                    entityName: "basic.settlementType",
                                                    options: [
                                                        { id: "1", text: "现结" },
                                                        { id: "2", text: "月结" },
                                                    ],
                                                },
                                                {
                                                    width: "auto",
                                                    view: "combo",
                                                    label: "付款方式",
                                                    entityName: "basic.paymentType",
                                                    options: [
                                                        { id: "1", text: "现金" },
                                                        { id: "2", text: "电汇" },
                                                        { id: "3", text: "支票" },
                                                    ],
                                                },
                                                { width: "auto", view: "date", label: "到货截止时间" },
                                                {},
                                                {},
                                            ],
                                        },
                                        {
                                            cols: [
                                                {
                                                    width: "auto",
                                                    view: "text",
                                                    label: "用户自定义1",
                                                    entityName: "other.f1",
                                                },
                                                {
                                                    width: "auto",
                                                    view: "text",
                                                    label: "用户自定义2",
                                                    entityName: "other.f2",
                                                },
                                                {
                                                    width: "auto",
                                                    view: "text",
                                                    label: "用户自定义3",
                                                    entityName: "other.f3",
                                                },
                                                {},
                                                {},
                                            ],
                                        },
                                    ],
                                },
                            },
                            {
                                header: "供应商",
                                close: false,
                                body: {
                                    rows: [
                                        {
                                            cols: [
                                                tslib_1.__assign({ view: "search", ctlName: "suppliercode", entityName: "dsSup.suppliercode", label: "客户编号", width: "auto" }, qs),
                                                tslib_1.__assign({ view: "search", ctlName: "suppliername", entityName: "dsSup.suppliername", label: "客户名称", width: "auto" }, qs),
                                                {},
                                                {},
                                            ],
                                        },
                                        {
                                            cols: [
                                                {
                                                    label: "联系人",
                                                    entityName: "dsSup.suppliercontact",
                                                    width: "auto",
                                                    view: "text",
                                                },
                                                {
                                                    label: "电话",
                                                    entityName: "dsSup.suppliertel",
                                                    width: "auto",
                                                    view: "text",
                                                },
                                                {
                                                    label: "地址",
                                                    entityName: "dsSup.supplieraddress",
                                                    width: "auto",
                                                    view: "text",
                                                },
                                                {},
                                            ],
                                        },
                                        {
                                            cols: [
                                                {
                                                    label: "省",
                                                    view: "text",
                                                    entityName: "dsSup.supplierprovince",
                                                    disabled: true,
                                                    width: "auto",
                                                },
                                                {
                                                    label: "市",
                                                    view: "text",
                                                    entityName: "dsSup.suppliercity",
                                                    disabled: true,
                                                    width: "auto",
                                                },
                                                {
                                                    label: "邮编",
                                                    ctlName: "supplierzip",
                                                    entityName: "dsSup.supplierzip",
                                                    view: "text",
                                                    disabled: true,
                                                    width: "auto",
                                                },
                                                {},
                                            ],
                                        },
                                        {
                                            cols: [
                                                {
                                                    label: "备注",
                                                    ctlName: "supplierremark",
                                                    entityName: "dsSup.supplierremark",
                                                    view: "text",
                                                    width: "auto",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            {
                                header: "结算人",
                                close: false,
                                body: {
                                    rows: [{ cols: [{ template: "暂时未开发" }] }],
                                },
                            },
                        ],
                    },
                    { view: "resizer" },
                    {
                        view: "grid",
                        columns: [
                            { field: "skucode", title: "产品编号", width: 120 },
                            { field: "skuname", title: "产品名称", width: 210 },
                            { field: "manufacturer", title: "生产厂家", width: 140 },
                            { field: "packcode", title: "包装编号", width: 100 },
                            { field: "uom", title: "收货单位", width: 120 },
                            { field: "orderqty", title: "订单数量(主单位)", width: 120 },
                            { field: "orderqtyeach", title: "订单数量(收货单位)", width: 120 },
                            { field: "unitprice", title: "含税单价", width: 100 },
                            { field: "totalprice", title: "含税金额", width: 100 },
                            { field: "allowexcerece", title: "超量收货", width: 100 },
                            { field: "excereceperc", title: "超量百分比(%)", width: 100 },
                            { field: "lot01", title: "批属性01", width: 100 },
                            { field: "lot02", title: "批属性02", width: 100 },
                            { field: "lot03", title: "批属性03", width: 100 },
                            { field: "lot04", title: "批属性04", width: 100 },
                            { field: "lot05", title: "批属性05", width: 100 },
                            { field: "lot06", title: "批属性06", width: 100 },
                            { field: "lot07", title: "批属性07", width: 100 },
                            { field: "lot08", title: "批属性08", width: 100 },
                            { field: "lot09", title: "批属性09", width: 100 },
                            { field: "lot10", title: "批属性10", width: 100 },
                            { field: "lot11", title: "批属性11", width: 100 },
                            { field: "lot12", title: "批属性12", width: 100 },
                            { field: "packid", hidden: true },
                            { field: "packtype", hidden: true, value: "1" },
                            { field: "packmeasspec", hidden: true },
                            { field: "zpackMeasspec", hidden: true },
                            { field: "pono", hidden: true },
                            { field: "packunit", hidden: true },
                        ],
                    },
                    {
                        view: "fieldset",
                        label: "合计",
                        body: {
                            rows: [
                                {
                                    cols: [
                                        {
                                            view: "text",
                                            label: "合计金额",
                                        },
                                        {
                                            view: "text",
                                            label: "合计数量",
                                        },
                                        {},
                                    ],
                                },
                            ],
                        },
                    },
                ],
            };
        };
        return View;
    }(YvanUI.BaseModule));
    exports.default = View;
});
//# sourceMappingURL=ExampleComplexPurchanse.view.js.map