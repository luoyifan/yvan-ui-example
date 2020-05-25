define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TestBody = /** @class */ (function () {
        function TestBody() {
        }
        TestBody.prototype.init = function (inp) {
            return {
                id: inp,
                rows: [
                    {
                        view: "template",
                        type: "header", template: "My App!" + inp
                    },
                    {
                        view: "datatable",
                        autoConfig: true,
                        data: {
                            title: "My Fair Lady", year: 1964, votes: 533848, rating: 8.9, rank: 5
                        }
                    }
                ]
            };
        };
        return TestBody;
    }());
    exports.default = TestBody;
});
//# sourceMappingURL=TestBody.js.map