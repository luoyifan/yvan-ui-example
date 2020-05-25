define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ttt = 1;
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
                view: "form",
                type: "space",
                borderless: true,
                scroll: true,
                onRender: function () {
                    console.log("form");
                },
                rows: [
                    {
                        view: "fieldset",
                        label: "性能参数",
                        body: {
                            cols: [
                                {
                                    view: "text",
                                    label: "行数",
                                    labelAlign: "right",
                                    ctlName: "rows",
                                    value: "5",
                                    width: 250,
                                },
                                {
                                    view: "button",
                                    text: "渲染",
                                    width: 50,
                                    onClick: { type: "function", bind: "render" },
                                },
                                {
                                    view: "button",
                                    text: "获取空白区域",
                                    onClick: { type: "function", bind: "getPlace2" },
                                },
                                {
                                    view: "button",
                                    text: "清空",
                                    cssType: "",
                                    ctlName: "clearBtn",
                                    onClick: { type: "function", bind: "clear" },
                                },
                                { template: "" },
                            ],
                        },
                    },
                    { template: "", placeId: "thePlace2" },
                ],
            };
        };
        Module.prototype.getPlace2 = function () {
            console.log(this.getPlace("thePlace2"));
        };
        Module.prototype.clear = function () {
            var vjson = { rows: [] };
            // this.refs.clearBtn.hidden = true;
            console.time("thetest");
            YvanUI.renderPlace(this, "thePlace2", {
                view: "fieldset",
                label: "\u6027\u80FD\u6D4B\u8BD5" + this.ttt,
                body: vjson,
                placeId: "thePlace2",
            });
            console.timeEnd("thetest");
        };
        Module.prototype.render = function () {
            if (!_.parseInt(this.refs.rows.value)) {
                YvanUI.msg("rows 必须是数字");
                return;
            }
            var rows = _.toNumber(this.refs.rows.value);
            var vjson = { rows: [] };
            for (var i = 0; i < rows; i++) {
                var row = { cols: [] };
                row.cols.push({
                    view: "grid",
                    onRender: {
                        type: "function",
                        bind: "setup",
                    },
                    idField: "user_id",
                    checkbox: true,
                    editSingleClick: true,
                    editable: true,
                    pagination: true,
                    // height: 300,
                    // pageSize: 20,
                    allowNewRow: true,
                    newRowData: {},
                    saveOn: "finishEdit",
                    columns: [
                    // { field: "user_id", hidden: true },
                    // {
                    //   title: "操作",
                    //   width: 100,
                    //   buttons: [
                    //     {
                    //       text: "详情",
                    //       onClick: { type: "function", bind: "gridRowDetail" },
                    //     },
                    //     {
                    //       text: "删除",
                    //       cssType: "danger",
                    //       onClick: { type: "function", bind: "gridDelete" },
                    //     },
                    //   ],
                    // },
                    // {
                    //   field: "login_name",
                    //   title: "登录名",
                    //   editable: true,
                    //   filterable: true,
                    //   sortable: true,
                    //   width: 100,
                    // },
                    // {
                    //   field: "staff_name",
                    //   title: "职员姓名",
                    //   editable: true,
                    //   filterable: true,
                    //   sortable: true,
                    //   width: 100,
                    // },
                    // {
                    //   field: "user_type",
                    //   title: "用户类型",
                    //   width: 100,
                    //   editable: true,
                    //   sortable: true,
                    //   filterable: true,
                    //   editMode: "combo",
                    //   editParams: {
                    //     data: "userType",
                    //   },
                    // },
                    // {
                    //   field: "gender",
                    //   title: "性别",
                    //   width: 70,
                    //   editable: true,
                    //   filterable: true,
                    //   sortable: true,
                    //   editMode: "combo",
                    //   editParams: {
                    //     require: true,
                    //     data: [
                    //       { id: "M", text: "男" },
                    //       { id: "F", text: "女" },
                    //     ],
                    //   },
                    // },
                    // {
                    //   field: "duty",
                    //   title: "职务",
                    //   editable: false,
                    //   width: 100,
                    //   sortable: true,
                    //   filterable: true,
                    // },
                    // {
                    //   field: "mobile",
                    //   title: "手机",
                    //   editable: false,
                    //   width: 120,
                    //   sortable: true,
                    //   filterable: true,
                    // },
                    // {
                    //   field: "ui_style",
                    //   title: "界面风格",
                    //   editable: true,
                    //   filterable: true,
                    //   sortable: true,
                    //   width: 100,
                    //   formatter: [
                    //     { id: "light", text: "浅色风格" },
                    //     { id: "dark", text: "暗色风格" },
                    //   ],
                    // },
                    // {
                    //   field: "login_count",
                    //   title: "登录次数",
                    //   editable: true,
                    //   filterable: true,
                    //   sortable: true,
                    //   width: 90,
                    //   align: "right",
                    //   editMode: "number",
                    //   //editParams: {
                    //   //    precision: 3
                    //   //}
                    // },
                    // {
                    //   field: "last_login_time",
                    //   title: "最后登录时间",
                    //   width: 160,
                    //   editable: true,
                    //   filterable: true,
                    //   sortable: true,
                    //   formatter: "fmtDate",
                    //   editMode: "datetime",
                    // },
                    // {
                    //   field: "user_state",
                    //   title: "是否锁定",
                    //   width: 100,
                    //   editMode: "combo",
                    //   sortable: true,
                    //   filterable: true,
                    //   editable: true,
                    //   editParams: {
                    //     data: [
                    //       { id: "0", text: "锁定" },
                    //       { id: "1", text: "正常" },
                    //     ],
                    //   },
                    // },
                    // {
                    //   field: "birthday",
                    //   title: "生日",
                    //   width: 100,
                    //   editMode: "date",
                    //   sortable: true,
                    //   filterable: true,
                    //   editable: true,
                    // },
                    // {
                    //   field: "be_active",
                    //   title: "启用",
                    //   width: 70,
                    //   editable: true,
                    //   filterable: true,
                    //   sortable: true,
                    //   editMode: "checkbox",
                    //   editParams: {
                    //     on: "Y",
                    //     off: "N",
                    //   },
                    // },
                    // {
                    //   field: "create_at",
                    //   title: "创建时间",
                    //   editable: false,
                    //   filterable: true,
                    //   width: 160,
                    //   formatter: "fmtDate",
                    // },
                    // {
                    //   field: "update_at",
                    //   title: "最后更新时间",
                    //   editable: false,
                    //   filterable: true,
                    //   width: 160,
                    //   formatter: "fmtDate",
                    // },
                    // {}
                    ],
                });
                vjson.rows.push(row);
                // vjson.rows.push({ view: "resizer" });
            }
            console.time("thetest2");
            YvanUI.renderPlace(this, "thePlace2", {
                view: "fieldset",
                label: "\u6587\u672C\u6846\u6027\u80FD\u6D4B\u8BD5" + this.ttt,
                body: vjson,
                placeId: "thePlace2",
            });
            console.timeEnd("thetest2");
            this.ttt++;
        };
        Module.prototype.onLoad = function () {
            console.log(this.refs);
            // YvanUI.msgInfo("输入 module 代表本对象");
            _.extend(window, {
                module: this,
            });
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=ExampleGridPerform.js.map