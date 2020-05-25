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
                                view: "text",
                                label: "输入框f1",
                                width: 250,
                                entityName: "dsMain.f1",
                            },
                            {
                                view: "text",
                                label: "输入框f2",
                                width: 250,
                                entityName: "dsMain.f2",
                            },
                            {},
                        ],
                    },
                    {
                        cols: [
                            {
                                view: "button",
                                text: "getValue",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "getValue",
                                },
                            },
                            {
                                view: "button",
                                text: "setValue",
                                width: 250,
                                onClick: {
                                    type: "function",
                                    bind: "setValue",
                                },
                            },
                            {},
                        ],
                    },
                    {},
                ],
            };
        };
        Module.prototype.onLoad = function () {
            console.log("setup module:", this);
            _.extend(window, {
                module: this,
            });
        };
        Module.prototype.invokeIt = function (nv) {
            console.log("dsMain changed!", _.cloneDeep(nv));
        };
        Module.prototype.getValue = function () {
            console.log(_.cloneDeep(this.dsMain));
        };
        Module.prototype.setValue = function () {
            this.i++;
            this.dsMain.f1 = "f1-" + this.i;
            this.dsMain.f2 = "f2-" + this.i;
        };
        tslib_1.__decorate([
            YvanUI.Watch("dsMain", true),
            tslib_1.__metadata("design:type", Function),
            tslib_1.__metadata("design:paramtypes", [Object]),
            tslib_1.__metadata("design:returntype", void 0)
        ], Module.prototype, "invokeIt", null);
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=ExampleBind.js.map