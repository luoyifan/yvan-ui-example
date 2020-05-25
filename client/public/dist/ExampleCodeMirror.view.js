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
                                view: "codemirror-editor",
                                mode: "javascript",
                                ctlName: "cj",
                            },
                            { view: "resizer" },
                            {
                                view: "codemirror-editor",
                                mode: "xml",
                                ctlName: "cx",
                            },
                            { view: "resizer" },
                            {
                                view: "codemirror-editor",
                                mode: "sql",
                                ctlName: "cs",
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
//# sourceMappingURL=ExampleCodeMirror.view.js.map