require.config({
  baseUrl: 'dist/',
  paths: {
    app: '/dist/app',
    tslib: '/static/plugins/tslib/tslib.min',
    'yvan-ui': '/dist2/yvan-ui'
  }
});

$(document).ready(function () {
  require(['app'])
});