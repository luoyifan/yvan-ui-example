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
                view: "form",
                rows: [
                    {
                        // view: "uploader",
                        value: "Upload file",
                        name: "files",
                        link: "mylist",
                        upload: "http://10.2.136.63:8080/mdt/pad/hyb/upload/uploadImg.json",
                        // width: 464, height: 275,
                        cols: [
                            {
                                css: "image",
                                template: function img(obj) {
                                    return ('<img src="' +
                                        obj.src +
                                        '" class="content" ondragstart="return false"/><div class="title">' +
                                        obj.title +
                                        "</div>");
                                },
                                data: {
                                    src: "http://docs.webix.com/samples/26_carousel/imgs/image001.jpg",
                                },
                            },
                        ],
                    },
                    {
                        view: "list",
                        id: "mylist",
                        type: "uploader",
                        autoheight: true,
                        borderless: true,
                    },
                ],
            };
        };
        return default_1;
    }(YvanUI.BaseModule));
    exports.default = default_1;
});
//# sourceMappingURL=exampleUpload.view.js.map