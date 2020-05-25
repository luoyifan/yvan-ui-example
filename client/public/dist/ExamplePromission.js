define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function componentRenderFilter(vjson) {
        if (_.has(vjson, 'requirePromission')) {
            if (_.indexOf(vjson.requirePromission, '2') >= 0) {
                // 不显示权限中包含2 的
                return false;
            }
        }
        return true;
    }
    YvanUI.componentRenderFilter = componentRenderFilter;
    var ExamplePromission = /** @class */ (function (_super) {
        tslib_1.__extends(ExamplePromission, _super);
        function ExamplePromission() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExamplePromission.prototype.viewResolver = function () {
            return {
                rows: [
                    {
                        cols: [
                            { view: 'text', label: '字段11', requirePromission: 'F11' },
                            { view: 'text', label: '字段12', requirePromission: 'F12' },
                            { view: 'text', label: '字段13', requirePromission: 'F13' }
                        ],
                    },
                    {
                        cols: [
                            { view: 'text', label: '字段21', requirePromission: 'F31' },
                            { view: 'text', label: '字段22', requirePromission: 'F31' },
                            { view: 'text', label: '字段23', requirePromission: 'F31' },
                        ]
                    },
                    {
                        requirePromission: 'F21',
                        hiddenPlaceholder: {},
                        cols: [
                            { view: 'tree' },
                        ]
                    }
                ]
            };
        };
        ExamplePromission.prototype.onLoad = function () {
        };
        ExamplePromission = tslib_1.__decorate([
            YvanUI.BizModule()
        ], ExamplePromission);
        return ExamplePromission;
    }(YvanUI.BaseModule));
    exports.default = ExamplePromission;
});
//# sourceMappingURL=ExamplePromission.js.map