define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var default_1 = /** @class */ (function (_super) {
        tslib_1.__extends(default_1, _super);
        function default_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        default_1.prototype.viewResolver = function () {
            return {
                id: "12345",
                rows: [
                    {
                        view: "toolbar",
                        css: {
                            "background-color": "#004c8b",
                        },
                        borderless: true,
                        elements: [
                            {
                                view: "label",
                                width: 120,
                                label: '<span style="color: white">字典分类管理</span>',
                            },
                            {
                                view: "button",
                                text: "查询",
                                icon: "fa fa-search",
                            },
                            {
                                view: "button",
                                text: "重置",
                                icon: "fa fa-refresh",
                            },
                            {
                                view: "button",
                                text: "关闭",
                                icon: "fa fa-times-circle",
                            },
                        ],
                    },
                    {
                        view: "form",
                        ctlName: "form1",
                        // cols: [
                        //     {view: "text", label: "Email"},
                        //     {view: "text", type: "password", label: "Password"},
                        // ]
                        elements: [
                            {
                                cols: [
                                    {
                                        view: "text",
                                        name: "a",
                                        label: "检索条件",
                                        width: 200,
                                        css: { "margin-right": "50px" },
                                    },
                                    {
                                        view: "combo",
                                        name: "b",
                                        label: "所属平台",
                                        width: 200,
                                        css: { "margin-right": "50px" },
                                    },
                                    {
                                        view: "combo",
                                        label: "启用状态",
                                        name: "c",
                                        width: 200,
                                        css: { "margin-right": "50px" },
                                        value: "One",
                                        options: ["One", "Two", "Three"],
                                    },
                                    // {
                                    //     view: "datepicker",
                                    //     value: new Date(2012, 6, 8),
                                    //     label: "Date",
                                    //     timepicker: true,
                                    //     width: 300
                                    // },
                                    {},
                                ],
                            },
                            {
                                cols: [
                                    {
                                        view: "radio",
                                        label: "radio",
                                        value: 3,
                                        options: [
                                            { id: 1, value: "Master" },
                                            { id: 2, value: "Branch" },
                                            { id: 3, value: "Cranch" },
                                        ],
                                    },
                                    { view: "switch", value: 0, label: "Sound" },
                                    {
                                        view: "menu",
                                        data: [
                                            {
                                                id: "1",
                                                value: "Translate...",
                                                submenu: [
                                                    "English",
                                                    {
                                                        value: "Slavic...",
                                                        submenu: [
                                                            "Belarusian",
                                                            "Russian",
                                                            { value: "Ukrainian", submenu: ["1", "2"] },
                                                        ],
                                                    },
                                                    "German",
                                                ],
                                            },
                                            {
                                                id: "2",
                                                value: "Post...",
                                                submenu: ["Facebook", "Google+", "Twitter"],
                                            },
                                            { id: "3", value: "Info" },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        cols: [
                            {
                                rows: [
                                    {
                                        view: "toolbar",
                                        height: 38,
                                        type: "line",
                                        css: {
                                            "background-color": "#004c8b",
                                        },
                                        borderless: true,
                                        elements: [
                                            {
                                                view: "label",
                                                width: 120,
                                                label: '<span style="color: white">字典分类列表</span>',
                                                align: "left",
                                            },
                                            {
                                                view: "button",
                                                text: "新增",
                                                type: "icon",
                                                icon: "fa fa-plus-circle",
                                                css: { "margin-right": "20px" },
                                                click: function () {
                                                    this.$scope.func2();
                                                },
                                            },
                                            {
                                                view: "button",
                                                text: "编辑",
                                                type: "icon",
                                                icon: "fa fa-pencil-square-o",
                                                css: { "margin-right": "20px" },
                                                click: function () {
                                                    // this.$scope.func1();
                                                },
                                            },
                                            {
                                                view: "button",
                                                text: "删除",
                                                type: "icon",
                                                icon: "fa fa-trash-o fa-lg",
                                                css: { "margin-right": "20px" },
                                                click: function () {
                                                    this.$scope.func1();
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        view: "grid",
                                        ctlName: "grid1",
                                        columnDefs: [
                                            { headerName: "分类ID", field: "dicTpId" },
                                            { headerName: "分类名称", field: "tpName" },
                                            { headerName: "分类编码", field: "TpCode" },
                                            { headerName: "字典数", field: "count" },
                                            { headerName: "启用状态", field: "status" },
                                        ],
                                        dataSource: {
                                            type: "function",
                                            bind: "getData",
                                        },
                                        rowData: [
                                            {
                                                dicTpId: "1",
                                                tpName: "启停状态",
                                                TpCode: "status",
                                                count: 2,
                                                status: 1,
                                            },
                                            {
                                                dicTpId: "2",
                                                tpName: "性别",
                                                TpCode: "gender",
                                                count: 2,
                                                status: 1,
                                            },
                                            {
                                                dicTpId: "3",
                                                tpName: "消息类型",
                                                TpCode: "msgType",
                                                count: 3,
                                                status: 1,
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                view: "resizer",
                            },
                            {
                                rows: [
                                    {
                                        view: "toolbar",
                                        height: 38,
                                        type: "line",
                                        css: {
                                            "background-color": "#004c8b",
                                        },
                                        borderless: true,
                                        cols: [
                                            {
                                                view: "label",
                                                width: 120,
                                                label: '<span style="color: white">字典详情</span>',
                                                align: "left",
                                            },
                                            {
                                                view: "button",
                                                text: "新增",
                                                type: "icon",
                                                icon: "fa fa-plus-circle",
                                                css: { "margin-right": "20px" },
                                                click: function () {
                                                    this.$scope.func2();
                                                },
                                            },
                                            {
                                                view: "button",
                                                text: "编辑",
                                                type: "icon",
                                                icon: "fa fa-pencil-square-o",
                                                css: { "margin-right": "20px" },
                                                click: function () {
                                                    // this.$scope.func1();
                                                },
                                            },
                                            {
                                                view: "button",
                                                text: "排序",
                                                type: "icon",
                                                icon: "fa fa-trash-o fa-lg",
                                                css: { "margin-right": "20px" },
                                                click: function () {
                                                    this.$scope.func1();
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        view: "grid",
                                        ctlName: "grid2",
                                        columnDefs: [
                                            { headerName: "分类ID", field: "dicTpId" },
                                            { headerName: "分类名称", field: "tpName" },
                                            { headerName: "分类编码", field: "TpCode" },
                                            { headerName: "字典数", field: "count" },
                                            { headerName: "启用状态", field: "status" },
                                        ],
                                        dataSource: {
                                            type: "function",
                                            bind: "getData",
                                        },
                                        rowData: [
                                            {
                                                dicTpId: "1",
                                                tpName: "启停状态",
                                                TpCode: "status",
                                                count: 2,
                                                status: 1,
                                            },
                                            {
                                                dicTpId: "2",
                                                tpName: "性别",
                                                TpCode: "gender",
                                                count: 2,
                                                status: 1,
                                            },
                                            {
                                                dicTpId: "3",
                                                tpName: "消息类型",
                                                TpCode: "msgType",
                                                count: 3,
                                                status: 1,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            };
        };
        return default_1;
    }(YvanUI.BaseModule));
    exports.default = default_1;
});
//# sourceMappingURL=SystemDict.view.js.map