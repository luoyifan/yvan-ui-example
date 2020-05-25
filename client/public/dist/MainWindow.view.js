define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var default_1 = /** @class */ (function (_super) {
        tslib_1.__extends(default_1, _super);
        function default_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.query = {
                menuFilter: '',
            };
            return _this;
        }
        default_1.prototype.viewResolver = function () {
            return {
                rows: [
                    {
                        view: "toolbar",
                        height: 73,
                        css: 'mainHeader',
                        borderless: true,
                        cols: [
                            {
                                view: "template",
                                borderless: true,
                                template: '<h2 style="padding-left: 50px;">YvanUI示例</h2>'
                            },
                            {},
                            {
                                view: "menu",
                                width: 150,
                                css: 'headerMenu',
                                data: [
                                    {
                                        value: "管理员",
                                        submenu: [
                                            { value: "修改密码" },
                                            { value: "全屏显示" },
                                            { value: "退出登录" },
                                        ],
                                    },
                                ],
                                type: {
                                    subsign: true,
                                },
                            },
                        ]
                    },
                    {
                        css: 'mainBox',
                        cols: [
                            {
                                width: 260,
                                css: 'mainLeft',
                                rows: [
                                    {
                                        view: "form",
                                        type: "line",
                                        rows: [
                                            {
                                                view: "text",
                                                prompt: "功能筛选",
                                                entityName: 'query.menuFilter',
                                                changeValueImplete: true
                                            }
                                        ]
                                    },
                                    {
                                        view: "tree",
                                        select: "multiselect",
                                        // drag: "move",
                                        ctlName: 'menuTree',
                                        onDataComplete: {
                                            type: "function",
                                            bind: "menuLoadFinish"
                                        },
                                        dataSource: {
                                            type: "function",
                                            bind: "getMenu",
                                            displayField: 'text',
                                            valueField: 'id',
                                            parentField: 'parentId'
                                        },
                                        onNodeClick: {
                                            type: 'function',
                                            bind: 'menuNodeClick'
                                        },
                                    }
                                ]
                            },
                            { view: 'resizer' },
                            {
                                view: "tabview",
                                css: "maintab",
                                ctlName: "tt",
                                id: 'tt',
                                onRender: {
                                    type: 'function',
                                    bind: 'ttOnRender'
                                },
                                onTabChanged: {
                                    type: "function",
                                    bind: "ttOnTabChanged",
                                },
                                animate: false,
                                tabbarContextMenu: [
                                    {
                                        text: "关闭",
                                        onClick: {
                                            type: "function",
                                            bind: "closeMe",
                                        },
                                    },
                                    "-",
                                    {
                                        text: "关闭其他",
                                        onClick: {
                                            type: "function",
                                            bind: "closeOther",
                                        },
                                    },
                                    {
                                        text: "全部关闭",
                                        onClick: {
                                            type: "function",
                                            bind: "closeAll",
                                        },
                                    },
                                ],
                                tabbar: {
                                    // close: true,
                                    popupWidth: 300,
                                    optionWidth: 120,
                                    tabMinWidth: 120,
                                },
                                cells: [
                                    {
                                        header: "<div class=\"myTabDiv\">\u9996\u9875</div>",
                                        close: false,
                                        body: {
                                            id: "MainWindowFirstPage",
                                            template: "你好",
                                        },
                                    },
                                ],
                            },
                        ],
                    }
                ],
            };
        };
        return default_1;
    }(YvanUI.BaseModule));
    exports.default = default_1;
});
//# sourceMappingURL=MainWindow.view.js.map