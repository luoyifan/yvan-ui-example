define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.dsMain = {
                f1: "",
                f2: "",
            };
            _this.i = 1;
            return _this;
        }
        Module.prototype.viewResolver = function () {
            return {
                rows: [
                    {
                        cols: [
                            {
                                view: "text",
                                entityName: "dsMain.f1",
                                label: "dsMain.f1",
                            },
                            {
                                view: "text",
                                entityName: "dsMain.f2",
                                label: "dsMain.f2",
                            },
                        ],
                    },
                    {
                        cols: [
                            {
                                view: "button",
                                text: "getValue",
                                width: 150,
                                onClick: {
                                    type: "function",
                                    bind: "getValue",
                                },
                            },
                            {
                                view: "button",
                                text: "setValue",
                                width: 150,
                                onClick: {
                                    type: "function",
                                    bind: "setValue",
                                },
                            },
                            {}
                        ],
                    },
                    {
                        template: "",
                    },
                ],
            };
        };
        Module.prototype.onLoad = function () {
            console.log("module attached");
            Object.assign(window, { module: this });
        };
        Module.prototype.getValue = function () {
            console.log(_.cloneDeep(this.dsMain));
        };
        Module.prototype.setValue = function () {
            this.dsMain.f1 = "新值" + this.i;
            this.dsMain.f2 = "新值" + this.i;
            this.i++;
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=ExampleTextboxComplex.js.map