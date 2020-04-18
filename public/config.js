require.config({
    baseUrl: 'dist/',
    paths: {
        app: '/dist/app',
        tslib: '/static/plugins/tslib/tslib.min',
        vue: '/static/plugins/vue/vue.min',
        axios: '/static/plugins/axios/axios.min',
        qs: '/static/plugins/qs/qs.min',
        typescript: '/static/plugins/typescript/typescript.min',
        //typescript: 'https://cdn.bootcss.com/typescript/3.7.4/typescript.min',
        webix: '/static/plugins/webix/webix',
        moment: '/static/plugins/moment/moment.min',
        'polyfill': '/static/plugins/polyfill/polyfill.min',
        'yvan-ui': '/dist2/yvan-ui',
    }
});

$(document).ready(function () {
    require(['yvan-ui', 'moment', 'polyfill'], function (yvanui, moment, polyfill) {
        window.YvanUI = yvanui;
        window.moment = moment;
        debugger
        require(['app'])
    })
});