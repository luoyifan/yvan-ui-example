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
                        cols: [
                            {
                                view: "echarts",
                                ctlName: "c1",
                            },
                            { view: "resizer" },
                            {
                                view: "echarts",
                                ctlName: "c2",
                            },
                        ],
                    },
                    { view: "resizer" },
                    {
                        cols: [
                            {
                                view: "echarts",
                                ctlName: "c3",
                            },
                            { view: "resizer" },
                            {
                                view: "echarts",
                                ctlName: "c4",
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
//# sourceMappingURL=ExampleECharts.view.js.map