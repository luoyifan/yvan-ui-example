require.config({
    baseUrl: 'dist/',
    paths: {
        app: '/dist/app',
        tslib: '/static/plugins/tslib/tslib.min',
        vue: '/static/plugins/vue/vue',
        axios: '/static/plugins/axios/axios',
        qs: '/static/plugins/qs/qs',
        typescript: '/static/plugins/typescript/typescript',
        webix: '/static/plugins/webix/webix',
        moment: '/static/plugins/moment/moment.min',
        'yvan-ui': '/dist2/yvan-ui',

    }
});

$(document).ready(function () {
    const yvanui = require(['yvan-ui'], function (yvanui) {
        window.YvanUI = yvanui;
        require(['app'])
    })
});