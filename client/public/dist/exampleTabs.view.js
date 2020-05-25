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
                rows: [
                    {
                        view: "toolbar",
                        elements: [
                            {
                                view: "button",
                                text: "getValue",
                                onClick: {
                                    type: "function",
                                    bind: "getValue",
                                },
                            },
                        ],
                    },
                    {
                        view: "tabview",
                        ctlName: "theTab",
                        defaultTabIndex: 1,
                        tabbarContextMenu: [
                            {
                                text: "菜单1",
                                onClick: {
                                    type: "function",
                                    bind: "tabBar1",
                                },
                            },
                            {
                                text: "菜单2",
                                children: [
                                    {
                                        text: "菜单2.1",
                                        onClick: {
                                            type: "function",
                                            bind: "tabBar21",
                                        },
                                    },
                                    {
                                        text: "菜单2.2",
                                        onClick: {
                                            type: "function",
                                            bind: "tabBar22",
                                        },
                                    },
                                ],
                            },
                            {
                                text: "菜单3",
                                onClick: {
                                    type: "function",
                                    bind: "tabBar3",
                                },
                            },
                        ],
                        tabbar: {
                            view: "tabbar",
                            close: false,
                        },
                        cells: [
                            {
                                header: "选项卡1",
                                close: false,
                                body: {
                                    rows: [
                                        {
                                            view: "template",
                                            template: "卡1内容",
                                        },
                                    ],
                                },
                            },
                            {
                                header: "选项卡2",
                                close: false,
                                body: {
                                    rows: [
                                        {
                                            view: "template",
                                            template: "卡2内容",
                                        },
                                    ],
                                },
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
//# sourceMappingURL=exampleTabs.view.js.map