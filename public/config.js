require.config({
    baseUrl: 'dist/',
    paths: {
        app: '/dist/app',
        tslib: '/static/plugins/tslib/tslib.min',
        vue: '/static/plugins/vue/vue.min',
        axios: '/static/plugins/axios/axios.min',
        qs: '/static/plugins/qs/qs.min',
        typescript: '/static/plugins/typescript/typescript.min',
        webix: '/static/plugins/webix/webix',
        moment: '/static/plugins/moment/moment.min',
        toastr: '//cdn.bootcss.com/toastr.js/2.1.4/toastr.min',
        jquery: '/static/plugins/jquery/jquery-1.11.1.min',
        lodash: '/static/plugins/lodash/lodash.min',
        'ag-grid': '/static/plugins/ag-grid/ag-grid-community.min.noStyle',
        'polyfill': '/static/plugins/polyfill/polyfill.min',
        'pinyinTong': '/static/plugins/pinyin/pinyin_dict_withtone',
        'pinyinUtil': '/static/plugins/pinyin/pinyinUtil',
        'yvan-ui': '/dist2/yvan-ui',
    }
});

require(['yvan-ui', 'moment', 'toastr', 'jquery', 'lodash', 'pinyinTong', 'polyfill'], function (yvanui, moment, toastr, $, _) {
    window.YvanUI = yvanui;
    window.moment = moment;
    window.toastr = toastr;
    window.$ = $;
    window._ = _;

    // 载入词典完毕之后，再载入 pinyinUtil
    require(['pinyinUtil'], function () {
        window.getFirstPinyin = function (value) {
            return window.pinyinUtil.getFirstLetter(value, true).join('')
        }
    })

    require(['app'])
});