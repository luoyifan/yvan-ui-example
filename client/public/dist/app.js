define(["require", "exports", "tslib", "./MainWindow", "moment"], function (require, exports, tslib_1, MainWindow_1, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MainWindow_1 = tslib_1.__importDefault(MainWindow_1);
    var main = new MainWindow_1.default();
    YvanUI.render("app", main);
    $('#i-loading').remove();
    function default_1() {
        var ajax = YvanUI.createAjax({ baseUrl: "http://localhost:9090" });
        function complexValidMessage(valid) {
            var msg = "";
            var orEl = valid.split(" | ");
            orEl = _.compact(orEl);
            for (var i = 0; i < orEl.length; i++) {
                if (orEl[i] === undefined || orEl[i] === "" || orEl[i] === null) {
                    continue;
                }
                if (i > 0) {
                    msg += " \n或者 ";
                }
                var andEl = orEl[i].split(" & ");
                andEl = _.compact(andEl);
                for (var j = 0; j < andEl.length; j++) {
                    var el = andEl[j];
                    if (el === undefined || el === "" || el === null) {
                        continue;
                    }
                    var sc = undefined;
                    var elf = "";
                    var parm = undefined;
                    el = _.replace(el, "number", "数字");
                    el = _.replace(el, ">", "大于");
                    el = _.replace(el, "<", "小于");
                    el = _.replace(el, "=", "等于");
                    el = _.replace(el, "!", "不");
                    if (j > 0) {
                        msg += " 且 ";
                    }
                    msg += el;
                }
            }
            return msg;
        }
        var validType = {
            telNum: function (value) {
                //既验证手机号，又验证座机号
                if (!/(^(0[0-9]{2,3}-)?([2-9][0-9]{6,7})+(-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}-))?(1[3456789]\d{9})$)|(^(400)-(\d{3})-(\d{4})(.)(\d{1,4})$)|(^(400)-(\d{3})-(\d{4}$))/.test(value)) {
                    return "请输入正确的电话号码。";
                }
            },
            email: function (value) {
                value = _.toString(value);
                if (_.size(value) <= 0)
                    return; //没内容
                if (!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
                    return "邮箱地址不合法";
                }
            },
            number: function (value) {
                var partten = /^-?[0-9]*$/;
                if (!partten.test(value)) {
                    return "请输入整数";
                }
            },
            uInteger: function (value) {
                var partten = /^[0-9]*$/;
                if (!partten.test(value)) {
                    return "请输入正整数";
                }
            },
            gtZeroCon: function (value) {
                if (parseFloat(value) < 0.0) {
                    return "必须大于等于0";
                }
            },
            decimal: function (value) {
                var partten = /^-?(([1-9]{1}\d*)|(0{1}))(\.\d*)?$/;
                if (!partten.test(value)) {
                    return "请输入数字";
                }
            },
            decimal_1: function (value) {
                var partten = /^-?(([1-9]{1}\d*)|(0{1}))(\.\d)$/;
                if (!partten.test(value)) {
                    return "请输入1位小数的数字";
                }
            },
            decimal_2: function (value) {
                var partten = /^-?(([1-9]{1}\d*)|(0{1}))(\.\d{2})$/;
                if (!partten.test(value)) {
                    return "请输入2位小数的数字";
                }
            },
            decimal_3: function (value) {
                var partten = /^-?(([1-9]{1}\d*)|(0{1}))(\.\d{3})$/;
                if (!partten.test(value)) {
                    return "请输入3位小数的数字";
                }
            },
            decimal_4: function (value) {
                var partten = /^-?(([1-9]{1}\d*)|(0{1}))(\.\d{4})$/;
                if (!partten.test(value)) {
                    return "请输入4位小数的数字";
                }
            },
            sChar: function (value) {
                var regEn = /[`~!@#$%^&*+<>?:"{},.\\/;'[\]]/im;
                var regCn = /[·！#￥——：；“”‘、，|《。》？、【】[\]]/im;
                if (regEn.test(value) || regCn.test(value)) {
                    return "不能包含特殊字符";
                }
            },
            noCnEn: function (value) {
                var reg = /[\u4e00-\u9fa5]/;
                if (reg.test(value)) {
                    return "不能输入中文字符";
                }
            },
            numFh: function (value) {
                var noCn = /^[\d:,a-zA-Z]+$/;
                if (!noCn.test(value)) {
                    return "只能输入数字或英文冒号逗号";
                }
            },
            idcard: function (value) {
                var noCn = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
                if (!noCn.test(value)) {
                    return "身份证号码格式不正确";
                }
            },
            chinese: function (value) {
                var noCn = /^[\u4e00-\u9fa5]*$/;
                if (!noCn.test(value)) {
                    return "请输入中文";
                }
            },
            english: function (value) {
                var noCn = /^[A-Za-z]*$/;
                if (!noCn.test(value)) {
                    return "请输入英文";
                }
            },
            age: function (value) {
                var noCn = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/i;
                if (!noCn.test(value)) {
                    return "年龄必须是0到120之间的整数";
                }
            },
            zip: function (value) {
                var noCn = /^[1-9]\d{5}$/i;
                if (!noCn.test(value)) {
                    return "邮政编码格式不正确";
                }
            },
            faxno: function (value) {
                var noCn = /^((\(\d{2,3}\))|(\d{3}-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(-\d{1,4})?$/i;
                if (!noCn.test(value)) {
                    return "传真号码不正确";
                }
            },
            menuUrl: function (value) {
                var noCn = /^[A-Za-z0-9_/.]*$/i;
                if (!noCn.test(value)) {
                    return "请输入正确url地址";
                }
            },
            dateValidate: function (value) {
                var noCn = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
                if (!noCn.test(value)) {
                    return "请输入正确的日期";
                }
            },
            greaterThan: function (value) {
                return function (v) {
                    if (!(_.toNumber(value) > _.toNumber(v))) {
                        return "\u5FC5\u987B\u5927\u4E8E" + v;
                    }
                };
            },
            lessThan: function (value) {
                return function (v) {
                    if (!(_.toNumber(value) < _.toNumber(v))) {
                        return "\u5FC5\u987B\u5C0F\u4E8E" + v;
                    }
                };
            },
            greaterThanOrEqual: function (value) {
                return function (v) {
                    if (_.toNumber(value) < _.toNumber(v)) {
                        return "\u5FC5\u987B\u5927\u4E8E\u6216\u7B49\u4E8E" + v;
                    }
                };
            },
            lessThanOrEqual: function (value) {
                return function (v) {
                    if (_.toNumber(value) > _.toNumber(v)) {
                        return "\u5FC5\u987B\u5C0F\u4E8E\u6216\u7B49\u4E8E" + v;
                    }
                };
            },
            notEqual: function (value) {
                return function (v) {
                    if (_.toNumber(value) === _.toNumber(v)) {
                        return "\u5FC5\u987B\u4E0D\u7B49\u4E8E" + v;
                    }
                };
            },
        };
        YvanUI.extend({
            ajax: ajax,
            /**
             * 全局数据库
             */
            dbs: {
                db: YvanUI.createDb({ baseUrl: "/_yvanui", ajax: ajax, defaultDb: "db" }),
            },
            /**
             * 全局格式化
             */
            formatter: {
                // userType: function (nv) {
                //     if (nv === 'A') {
                //         return '系统管理员'
                //     }
                //     if (nv === 'E') {
                //         return '企业用户'
                //     }
                //     if (nv === 'N') {
                //         return '仓库用户'
                //     }
                //     return nv
                // },
                fmtDate: function (javaTimestamp) {
                    if (!javaTimestamp) {
                        return "";
                    }
                    if (typeof javaTimestamp === "string") {
                        return moment(_.toInteger(javaTimestamp)).format("YYYY-MM-DD HH:mm:ss");
                    }
                    var timestamp = moment(javaTimestamp);
                    return timestamp.format("YYYY-MM-DD HH:mm:ss");
                },
            },
            /**
             * 全局字典
             */
            dict: {
                userType: [
                    { id: "A", text: "系统管理员" },
                    { id: "E", text: "企业用户" },
                    { id: "N", text: "仓库用户" },
                ],
            },
            /**
             * 全局校验
             */
            validType: validType,
            complexValid: {
                fun: function (valid, value) {
                    var msg;
                    var orEl = valid.split(" | ");
                    for (var i = 0; i < orEl.length; i++) {
                        if (orEl[i] === undefined || orEl[i] === "" || orEl[i] === null) {
                            continue;
                        }
                        var andEl = orEl[i].split(" & ");
                        for (var j = 0; j < andEl.length; j++) {
                            var el = andEl[j];
                            if (el === undefined || el === "" || el === null) {
                                continue;
                            }
                            var sc = undefined;
                            var elf = undefined;
                            var parm = undefined;
                            if (_.startsWith(el, ">")) {
                                sc = ">";
                                elf = "greaterThan";
                                if (_.startsWith(el, ">=")) {
                                    sc = ">=";
                                    elf = "greaterThanOrEqual";
                                }
                            }
                            else if (_.startsWith(el, "<")) {
                                sc = "<";
                                elf = "lessThan";
                                if (_.startsWith(el, "<=")) {
                                    sc = "<=";
                                    elf = "lessThanOrEqual";
                                }
                            }
                            else if (_.startsWith(el, "!=")) {
                                sc = "!=";
                                elf = "notEqual";
                            }
                            if (sc) {
                                parm = _.last(el.split(sc));
                            }
                            if (elf) {
                                el = elf;
                            }
                            msg = validType[el](value);
                            if (msg) {
                                if (typeof msg === "function") {
                                    msg = msg(parm);
                                    if (typeof msg === "function") {
                                        msg = "validate error";
                                    }
                                }
                                if (msg) {
                                    break;
                                }
                            }
                        }
                        if (!msg) {
                            break;
                        }
                    }
                    if (msg) {
                        if (valid.indexOf(" | ") >= 0 || valid.indexOf(" & ") >= 0) {
                            msg = complexValidMessage(valid);
                        }
                    }
                    return msg;
                },
            },
        });
        YvanUI.ajax = ajax;
        // const grid = new ExampleGrid();
        // YvanUI.render("#app", grid);
        // const vueWindow = new VueWindow()
        // vueWindow.$mount('#app')
        //YvanUI.msgSuccess("运行成功")
        // const layout = YvanUI.webix.ui({
        //     container: "app",
        //     id: "layout",
        //     responsive: true,
        //     rows: [
        //         { template: "顶部菜单栏", height: 35 },
        //     ]
        // })
        // // console.log($$('layout'))
        // YvanUI.webix.event(window, "resize", () => {
        //     $$("layout").resize();
        // });
        // console.log('ok!')
    }
    exports.default = default_1;
});
//# sourceMappingURL=app.js.map