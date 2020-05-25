define(["require", "exports", "tslib", "./BaseGridWidget"], function (require, exports, tslib_1, BaseGridWidget_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Module.prototype.onLoad = function () {
            this.refs.grid.setData([
                {
                    jo_id: 1,
                    jo_code: "code01",
                    org_id: "机构编码01",
                    org_name: "组织机构名称01",
                },
                {
                    jo_id: 2,
                    jo_code: "code02",
                    org_id: "机构编码02",
                    org_name: "组织机构名称02",
                },
                {
                    jo_id: 3,
                    jo_code: "code03",
                    org_id: "机构编码03",
                    org_name: "组织机构名称03",
                },
                {
                    jo_id: 4,
                    jo_code: "code04",
                    org_id: "机构编码04",
                    org_name: "组织机构名称04",
                },
                {
                    jo_id: 5,
                    jo_code: "code05",
                    org_id: "机构编码05",
                    org_name: "组织机构名称05",
                },
                {
                    jo_id: 6,
                    jo_code: "code06",
                    org_id: "机构编码06",
                    org_name: "组织机构名称06",
                },
                {
                    jo_id: 7,
                    jo_code: "code07",
                    org_id: "机构编码07",
                    org_name: "组织机构名称07",
                },
                {
                    jo_id: 8,
                    jo_code: "code08",
                    org_id: "机构编码08",
                    org_name: "组织机构名称08",
                },
                {
                    jo_id: 9,
                    jo_code: "code09",
                    org_id: "机构编码09",
                    org_name: "组织机构名称09",
                },
                {
                    jo_id: 10,
                    jo_code: "code10",
                    org_id: "机构编码10",
                    org_name: "组织机构名称10",
                },
            ]);
        };
        Module.prototype.viewResolver = function () {
            return _super.prototype.baseViewResolver.call(this, {
                title: "选择组织机构",
                grid: {
                    data: [],
                    columns: [
                        {
                            hidden: true,
                            field: "jo_id",
                            title: "业务单位id",
                        },
                        {
                            field: "jo_code",
                            title: "单位编号",
                            maxwidth: 200,
                            sortable: true,
                        },
                        {
                            field: "org_id",
                            title: "机构编码",
                            maxwidth: 200,
                        },
                        {
                            field: "org_name",
                            title: "组织机构名称",
                            maxwidth: 200,
                        },
                    ],
                },
            });
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(BaseGridWidget_1.BaseGridWidget));
    exports.default = Module;
});
//# sourceMappingURL=selectOrg.js.map