define(["require", "exports", "tslib", "./MainWindow.view", "./MainWindow.menu"], function (require, exports, tslib_1, MainWindow_view_1, MainWindow_menu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MainWindow_view_1 = tslib_1.__importDefault(MainWindow_view_1);
    MainWindow_menu_1 = tslib_1.__importDefault(MainWindow_menu_1);
    var MainWindow = /** @class */ (function (_super) {
        tslib_1.__extends(MainWindow, _super);
        function MainWindow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainWindow.prototype.onLoad = function () {
            _.extend(window, {
                addTab: this.refs.tt.addModule.bind(this.refs.tt)
            });
            // 数组 foreach 没问题！！
            // const data = ['a', 'b']
            // this.rootService.testForeach(data).then(res => {
            // })
            // const data2 = [
            //     {f1: 1, f2: 'a1'},
            //     {f1: 2, f2: 'b1'},
            //     {f1: 3, f2: 'c1'},
            // ]
            // this.rootService.testForeach2(data2).then(res => {
            // })
        };
        MainWindow.prototype.menuFilter = function (nv) {
            this.refs.menuTree.filter(nv);
        };
        MainWindow.prototype.ttOnRender = function (tt) {
            _.defer(function () {
                var $dom = $(tt._webix.$view);
                $dom.children(":first").addClass('mainTabBar');
                $dom.children(":nth-child(2)").addClass('mainTabBox');
            });
        };
        MainWindow.prototype.menuLoadFinish = function (sender) {
            sender.expandAll();
            if (!_.get(window, 'isFirstLoad')) {
                // 自动加载上一次的页面
                if ($.trim(window.location.hash).length > 1) {
                    var vv_1 = YvanUI.unparam(window.location.hash);
                    if (vv_1.key && this.refs.menuTree) {
                        var _a = tslib_1.__read(this.refs.menuTree.find(function (node) {
                            return node.row.menu_url === vv_1.key;
                        }), 1), node = _a[0];
                        if (node) {
                            this.refs.menuTree.select(node.id);
                            this.menuNodeClick(this.refs.tt, node);
                            _.set(window, 'isFirstLoad', true);
                        }
                    }
                }
            }
        };
        MainWindow.prototype.ttOnTabChanged = function (sender, newTabId) {
            if (newTabId) {
                window.location.hash = YvanUI.param({ key: newTabId });
            }
            else {
                window.location.hash = "";
            }
        };
        MainWindow.prototype.getMenu = function (sender, param) {
            param.successCallback(MainWindow_menu_1.default);
        };
        MainWindow.prototype.menuNodeClick = function (sender, node) {
            var _this = this;
            if (!node.id || !_.has(node, 'row')) {
                return;
            }
            var menu_url = _.get(node, 'row').menu_url;
            if (!menu_url) {
                return;
            }
            if (this.refs.tt.selectTab(menu_url)) {
                // 已经打开了页面
                return;
            }
            new Promise(function (resolve_1, reject_1) { require([menu_url], resolve_1, reject_1); }).then(tslib_1.__importStar).then(function (value) {
                var module = new value.default();
                var title = "<div class=\"myTabDiv\">" + node.value + "</div>";
                _this.refs.tt.addModule(title, menu_url, module);
            });
        };
        MainWindow.prototype.closeMe = function (sender, event) {
            var $dom = $(event.target);
            if ($dom.is('.webix_item_tab')) {
                $dom.find('.webix_tab_close').trigger('click');
            }
        };
        MainWindow.prototype.closeOther = function (sender, event) {
            var $dom = $(event.target);
            if ($dom.is('.webix_item_tab')) {
                var item = webix.$$(event);
                this.refs.tt.closeAll(['MainWindowFirstPage', $dom.attr('button_id')]);
            }
        };
        MainWindow.prototype.closeAll = function () {
            this.refs.tt.closeAll(['MainWindowFirstPage']);
        };
        tslib_1.__decorate([
            YvanUI.Watch("query.menuFilter"),
            tslib_1.__metadata("design:type", Function),
            tslib_1.__metadata("design:paramtypes", [String]),
            tslib_1.__metadata("design:returntype", void 0)
        ], MainWindow.prototype, "menuFilter", null);
        MainWindow = tslib_1.__decorate([
            YvanUI.BizModule()
        ], MainWindow);
        return MainWindow;
    }(MainWindow_view_1.default));
    exports.default = MainWindow;
});
//# sourceMappingURL=MainWindow.js.map