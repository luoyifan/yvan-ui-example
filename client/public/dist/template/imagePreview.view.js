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
                responsive: true,
                rows: [
                    {
                        view: "toolbar",
                        height: 38,
                        type: "line",
                        css: {
                            "background-color": "#004c8b",
                        },
                        borderless: true,
                        cols: [
                            {
                                view: "label",
                                width: 120,
                                label: '<span style="color: white">图片预览</span>',
                                align: "left",
                            },
                        ],
                    },
                    {
                        view: "carousel",
                        ctlName: "carouselCtl",
                        width: 464,
                        height: 275,
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
                                    src: "http://docs.webix.com/samples/26_carousel/imgs/image002.jpg",
                                },
                            },
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
                                    src: "http://docs.webix.com/samples/26_carousel/imgs/image003.jpg",
                                },
                            },
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
                                    src: "http://docs.webix.com/samples/26_carousel/imgs/image004.jpg",
                                },
                            },
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
                                    src: "http://docs.webix.com/samples/26_carousel/imgs/image005.jpg",
                                },
                            },
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
                                    src: "http://docs.webix.com/samples/26_carousel/imgs/image006.jpg",
                                },
                            },
                        ],
                        onShow: {
                            type: "function",
                            bind: "onShow2",
                        },
                    },
                ],
            };
        };
        return default_1;
    }(YvanUI.BaseModule));
    exports.default = default_1;
});
//# sourceMappingURL=imagePreview.view.js.map