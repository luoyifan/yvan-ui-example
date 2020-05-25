define(["require", "exports", "tslib", "./ExampleCodeMirror.view"], function (require, exports, tslib_1, ExampleCodeMirror_view_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ExampleCodeMirror_view_1 = tslib_1.__importDefault(ExampleCodeMirror_view_1);
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Module.prototype.onLoad = function () {
            _.extend(window, {
                module: this,
            });
            console.log("module setup", this);
            this.refs.cj.value = "function v1(){\n}";
            this.refs.cx.value = "<YvanSQL>\n    <sql id=\"aab\">\n        select * from table2\n    </sql>\n</YvanSQL>";
            this.refs.cs.value = "select * from abc";
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(ExampleCodeMirror_view_1.default));
    exports.default = Module;
});
//# sourceMappingURL=ExampleCodeMirror.js.map