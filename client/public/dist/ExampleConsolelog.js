define(["require", "exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = /** @class */ (function (_super) {
        tslib_1.__extends(Module, _super);
        function Module() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.changeText = "默认语句";
            _this.i = 0;
            _this.property = {
                value: "",
            };
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
                                view: "button",
                                onRender: {
                                    type: "function",
                                    bind: "render",
                                },
                                text: "输出json",
                                icon: "fa fa-bars",
                                onClick: {
                                    type: "function",
                                    bind: "click1",
                                },
                            },
                            {},
                        ],
                    },
                    {
                        cols: [
                            {
                                view: "text",
                                label: "搜索内容",
                                entityName: "property.value",
                            },
                            {
                                view: "button",
                                text: "搜索",
                                icon: "fa fa-bars",
                                onClick: {
                                    type: "function",
                                    bind: "click2",
                                },
                            },
                            {},
                        ],
                    },
                    {
                        cols: [
                            {
                                view: "button",
                                text: "全部展开",
                                icon: "fa fa-bars",
                                onClick: {
                                    type: "function",
                                    bind: "click3",
                                },
                            },
                            {
                                view: "button",
                                text: "全部关闭",
                                icon: "fa fa-bars",
                                onClick: {
                                    type: "function",
                                    bind: "click4",
                                },
                            },
                            {
                                view: "button",
                                text: "全部清空",
                                icon: "fa fa-bars",
                                onClick: {
                                    type: "function",
                                    bind: "click5",
                                },
                            },
                            {},
                        ],
                    },
                    {
                        cols: [
                            {
                                view: "xconsolelog",
                                ctlName: "consoleEntity"
                            },
                        ],
                    },
                ],
            };
        };
        Module.prototype.render = function (sender) {
            _.extend(window, { btn1: sender });
            console.log("btn1 has set", sender);
        };
        Module.prototype.click1 = function () {
            console.log("点击");
            // var arr = {
            //   name: '呜呜呜',
            //   apis: ['api1', 'api2', 'api3'],
            //   marks: {
            //     name: "马六",
            //     gender: "男",
            //     age: 12,
            //     enName: "maliu"
            //   },
            //   content: [{
            //     name: "张三",
            //     gender: "男",
            //     age: 12,
            //     enName: "zhangsan"
            //   }, {
            //     name: "李四",
            //     gender: "男",
            //     age: 22,
            //     enName: "lisi"
            //   }, {
            //     name: "王五",
            //     gender: "男",
            //     age: 32,
            //     enName: "wangwu"
            //   }]
            // }
            var arr = {
                "@t": "2020-05-11T10:55:38.5920160Z",
                "@mt": "{\"TypeCode\":\"Unassigned\",\"Message\":\"订单单据编号DD5118070000981-2的明细编号6878已存在\",\"ShortText\":\"订单单据编号DD5118070000981-2的明细编号6878已存在\",\"Code\":\"999\",\"DocURL\":null,\"RequestUri\":\"/api/ChainDrugStore/InsertCgXx2\",\"RequestBody\":null,\"Result\":\"System.ApplicationException: 订单单据编号DD5118070000981-2的明细编号6878已存在\\r\\n   在 JZTERP.Service.InterfaceService.Impl.ChainDrugStoreService.InsertCgXx2(CgXxSumInfo[] orders)\\r\\n   在 Castle.Proxies.Invocations.IChainDrugStoreService_InsertCgXx2.InvokeMethodOnTarget()\\r\\n   在 Castle.DynamicProxy.AbstractInvocation.Proceed()\\r\\n   在 Castle.Proxies.IChainDrugStoreServiceProxy.InsertCgXx2(CgXxSumInfo[] orders)\\r\\n   在 lambda_method(Closure , Object , Object[] )\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ActionMethodExecutor.SyncObjectResultExecutor.Execute(IActionResultTypeMapper mapper, ObjectMethodExecutor executor, Object controller, Object[] arguments)\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.<InvokeActionMethodAsync>d__12.MoveNext()\\r\\n--- 引发异常的上一位置中堆栈跟踪的末尾 ---\\r\\n   在 System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()\\r\\n   在 System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.<InvokeNextActionFilterAsync>d__10.MoveNext()\\r\\n--- 引发异常的上一位置中堆栈跟踪的末尾 ---\\r\\n   在 System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.Rethrow(ActionExecutedContext context)\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.Next(State& next, Scope& scope, Object& state, Boolean& isCompleted)\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.<InvokeInnerFilterAsync>d__13.MoveNext()\\r\\n--- 引发异常的上一位置中堆栈跟踪的末尾 ---\\r\\n   在 System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()\\r\\n   在 System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ResourceInvoker.<InvokeNextExceptionFilterAsync>d__24.MoveNext()\",\"Value\":\"System.ApplicationException: 订单单据编号DD5118070000981-2的明细编号6878已存在\\r\\n   在 JZTERP.Service.InterfaceService.Impl.ChainDrugStoreService.InsertCgXx2(CgXxSumInfo[] orders)\\r\\n   在 Castle.Proxies.Invocations.IChainDrugStoreService_InsertCgXx2.InvokeMethodOnTarget()\\r\\n   在 Castle.DynamicProxy.AbstractInvocation.Proceed()\\r\\n   在 Castle.Proxies.IChainDrugStoreServiceProxy.InsertCgXx2(CgXxSumInfo[] orders)\\r\\n   在 lambda_method(Closure , Object , Object[] )\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ActionMethodExecutor.SyncObjectResultExecutor.Execute(IActionResultTypeMapper mapper, ObjectMethodExecutor executor, Object controller, Object[] arguments)\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.<InvokeActionMethodAsync>d__12.MoveNext()\\r\\n--- 引发异常的上一位置中堆栈跟踪的末尾 ---\\r\\n   在 System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()\\r\\n   在 System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.<InvokeNextActionFilterAsync>d__10.MoveNext()\\r\\n--- 引发异常的上一位置中堆栈跟踪的末尾 ---\\r\\n   在 System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.Rethrow(ActionExecutedContext context)\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.Next(State& next, Scope& scope, Object& state, Boolean& isCompleted)\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ControllerActionInvoker.<InvokeInnerFilterAsync>d__13.MoveNext()\\r\\n--- 引发异常的上一位置中堆栈跟踪的末尾 ---\\r\\n   在 System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw()\\r\\n   在 System.Runtime.CompilerServices.TaskAwaiter.HandleNonSuccessAndDebuggerNotification(Task task)\\r\\n   在 Microsoft.AspNetCore.Mvc.Internal.ResourceInvoker.<InvokeNextExceptionFilterAsync>d__24.MoveNext()\"}",
                "@l": "Error",
                "SourceContext": "ActorFabric.Web.AspNetCore.ApiResult.ExceptionResponseFilterAttribute",
                "ActionId": "e0c7fe05-3130-4364-94ff-795572503c8c",
                "ActionName": "JZTERP.Service.InterfaceService.Host.ChainDrugStoreController.InsertCgXx2 (JZTERP.Service.InterfaceService.Host)",
                "RequestId": "0HLVKTEPHLGSC:00000001",
                "RequestPath": "/api/ChainDrugStore/InsertCgXx2",
                "CorrelationId": null,
                "ConnectionId": "0HLVKTEPHLGSC",
                "ProcessName": "JZTERP.Service.InterfaceService.Host",
                "ThreadId": 59,
                "MachineName": "SER-JSYF-ERPAPP"
            };
            if (typeof arr['@mt'] === 'string') {
                var mt = arr['@mt'].trim();
                if (mt.startsWith("{") && mt.endsWith("}")) {
                    arr["@mt"] = JSON.parse(mt);
                }
            }
            for (var index = 0; index < 500; index++) {
                console.time();
                this.refs.consoleEntity.printLog(arr);
                console.timeEnd();
            }
            this.i++;
            this.changeText = "点击了" + this.i + "次";
        };
        Module.prototype.click2 = function () {
            console.log("搜索:", this.property.value);
            this.refs.consoleEntity.searchText(this.property.value);
        };
        Module.prototype.click3 = function () {
            console.log("全部展开");
            console.time();
            this.refs.consoleEntity.vcOpenAll();
            console.timeEnd();
        };
        Module.prototype.click4 = function () {
            console.log("全部关闭");
            console.time();
            this.refs.consoleEntity.vcCloseAll();
            console.timeEnd();
        };
        Module.prototype.click5 = function () {
            this.refs.consoleEntity.vcClearAll();
        };
        Module = tslib_1.__decorate([
            YvanUI.BizModule()
        ], Module);
        return Module;
    }(YvanUI.BaseModule));
    exports.default = Module;
});
//# sourceMappingURL=ExampleConsolelog.js.map