require.config({
  baseUrl: "dist/",
  paths: {
    '@server': '/!',
    webix: '/static/plugins/webix/webix',
    'pinyinTong': '/static/plugins/pinyin/pinyin_dict_withtone',
    'pinyinUtil': '/static/plugins/pinyin/pinyinUtil',
    'yvan-ui': '/dist2/yvan-ui/dist/yvan-ui',

    'reflect-metadata': '//cdn.bootcss.com/reflect-metadata/0.1.13/Reflect.min',
    tslib: '//cdn.bootcss.com/tslib/1.11.1/tslib.min',
    echarts: "//cdn.bootcdn.net/ajax/libs/echarts/4.7.0/echarts.min",
    xterm: '/static/plugins/xterm/xterm',
    vue: '//cdn.bootcss.com/vue/2.6.11/vue.min',
    axios: '//cdn.bootcss.com/axios/0.19.2/axios.min',
    qs: '//cdn.bootcss.com/qs/6.9.3/qs.min',
    typescript: '//cdn.bootcss.com/typescript/3.7.4/typescript.min',
    moment: '//cdn.bootcss.com/moment.js/2.24.0/moment.min',
    toastr: '//cdn.bootcss.com/toastr.js/2.1.4/toastr.min',
    jquery: '//cdn.bootcss.com/jquery/1.11.3/jquery.min',
    lodash: '//cdn.bootcss.com/lodash.js/4.17.15/lodash.min',
    'xterm-addon-fit': '/static/plugins/xterm/xterm-addon-fit',
    'ag-grid': '//cdn.bootcss.com/ag-grid/23.0.2/ag-grid-community.min.noStyle.min',
    'polyfill': '//cdn.bootcss.com/babel-polyfill/7.8.7/polyfill.min',
  },
  map: {
    '*': {
      css: 'https://cdn.bootcss.com/require-css/0.1.10/css.min.js'
    }
  },
  shim: {
    'yvan-ui': {
      deps: [
        'css!//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css',
        'css!/static/css/webix.css',
        'css!/static/plugins/ag-grid/styles/ag-grid.css',
        'css!/static/plugins/ag-grid/styles/ag-theme-blue.css',
        'css!/dist2/yvan-ui/dist/yvan-ui.css'
      ]
    },
    xterm: {
      deps: [
        // 'css!//cdn.bootcss.com/xterm/3.14.5/xterm.min.css'
        'css!/static/plugins/xterm/xterm.css'
      ]
    },
    toastr: {
      deps: [
        'css!//cdn.bootcss.com/toastr.js/2.1.4/toastr.min.css'
      ]
    },
  }
});

require([
  "yvan-ui",
  "moment",
  "toastr",
  "jquery",
  "lodash",
  "pinyinTong",
  "polyfill",
], function (yvanui, moment, toastr, $, _) {
  window.YvanUI = yvanui;
  window.moment = moment;
  window.toastr = toastr;
  window.$ = $;
  window._ = _;

  // 载入词典完毕之后，再载入 pinyinUtil
  require(["pinyinUtil"], function () {
    window.getFirstPinyin = function (value) {
      return window.pinyinUtil.getFirstLetter(value, true).join("");
    };
  });

  require(["app"]);
});