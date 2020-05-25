"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yvan_server_1 = require("yvan-server");
var RootService = (function () {
    function RootService() {
    }
    RootService.prototype.selectAllCombo = function () {
        var rows = yvan_server_1.Dao.selectListAny("Root.selectCombo", {});
        return yvan_server_1.Model.newSuccess(undefined, rows);
    };
    RootService.prototype.testForeach = function (v) {
        var rows = yvan_server_1.Dao.selectListAny("Root.testForeach", { data: v });
        return yvan_server_1.Model.newSuccess(undefined, rows);
    };
    RootService.prototype.testForeach2 = function (v) {
        var rows = yvan_server_1.Dao.selectListAny("Root.testForeach2", { data: v });
        return yvan_server_1.Model.newSuccess(undefined, rows);
    };
    RootService.prototype.getMenu = function () {
        var data = [
            { menu_id: 1, menu_name: '首页', icon: 'fa fa-list', menu_url: '../protal' },
            { menu_id: 2, menu_name: '基础数据', icon: 'fa fa-list' },
            { menu_id: 201, menu_name: '组织机构', icon: 'fa fa-list', menu_url: './base/org/org', parent_id: 2 },
            { menu_id: 202, menu_name: '维修基地人员', icon: 'fa fa-list', menu_url: './base/repairBaseUser/repairBaseUser', parent_id: 2 },
            { menu_id: 203, menu_name: '基础物资', icon: 'fa fa-list', menu_url: './base/matInfo/MatInfo', parent_id: 2 },
            { menu_id: 204, menu_name: '车间信息', icon: 'fa fa-list', menu_url: './workshop/Workshop', parent_id: 2 },
            { menu_id: 205, menu_name: '机型车间信息', icon: 'fa fa-list', menu_url: './base/planeWorkshop/planeWorkshop', parent_id: 2 },
            { menu_id: 206, menu_name: '机型信息', icon: 'fa fa-list', menu_url: './base/planType/planType', parent_id: 2 },
            { menu_id: 207, menu_name: '物资分配(计划)', icon: 'fa fa-list', menu_url: './base/allot/planMat', parent_id: 2 },
            { menu_id: 208, menu_name: '物资分配(采购)', icon: 'fa fa-list', menu_url: './base/allot/cgMat', parent_id: 2 },
            { menu_id: 209, menu_name: '自制项目清册', icon: 'fa fa-list', menu_url: './base/makeBook/makeBook', parent_id: 2 },
            { menu_id: 210, menu_name: '固定配套清册', icon: 'fa fa-list', menu_url: './base/fixedMatchMat/fixedMatchMat', parent_id: 2 },
            { menu_id: 211, menu_name: '计划价管理', icon: 'fa fa-list', menu_url: './base/planPriceRecord/PlanPriceRecord', parent_id: 2 },
            { menu_id: 212, menu_name: '单位管理', icon: 'fa fa-list', menu_url: './base/company/company', parent_id: 2 },
            { menu_id: 213, menu_name: '供应商分类', icon: 'fa fa-list', menu_url: './base/supplierType/supplierType', parent_id: 2 },
            { menu_id: 3, menu_name: '系统管理', icon: 'fa fa-list' },
            { menu_id: 302, menu_name: '系统角色', icon: 'fa fa-list', menu_url: './base/role/role', parent_id: 3 },
            { menu_id: 303, menu_name: '功能C', icon: 'fa fa-list', menu_url: '../sys/module3', parent_id: 3 },
            { menu_id: 304, menu_name: 'ziduan', icon: 'fa fa-list', menu_url: './base/dictionaries/dictionaries', parent_id: 3 },
        ];
        return yvan_server_1.Model.newSuccess(undefined, data);
    };
    tslib_1.__decorate([
        yvan_server_1.Api,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", yvan_server_1.Model)
    ], RootService.prototype, "selectAllCombo", null);
    tslib_1.__decorate([
        yvan_server_1.Api,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Array]),
        tslib_1.__metadata("design:returntype", void 0)
    ], RootService.prototype, "testForeach", null);
    tslib_1.__decorate([
        yvan_server_1.Api,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Array]),
        tslib_1.__metadata("design:returntype", void 0)
    ], RootService.prototype, "testForeach2", null);
    tslib_1.__decorate([
        yvan_server_1.Api,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", yvan_server_1.Model)
    ], RootService.prototype, "getMenu", null);
    RootService = tslib_1.__decorate([
        yvan_server_1.Service
    ], RootService);
    return RootService;
}());
exports.default = RootService;
//# sourceMappingURL=RootService.js.map