import MainWindow from "./MainWindow";
import moment = require("moment");
import RootService from "@server/RootService";

const ajaxInner = YvanUI.createAjax({ baseUrl: '/' });

YvanUI.createBroker(RootService);

const ajax = function (option): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    ajaxInner(option).then(res => {
      resolve(res);
    }).catch(e => {
      let errorData = e.response.data
      if (errorData.msg == '未授权') {
        YvanUI.msgError("session超时,请重新登录")

      } else {
        reject(e)
      }
    })
  })
};

YvanUI.ajax = ajax;

YvanUI.extend({
  serverJsPrefix: '/!',
  ajax,
  formatter: {
    fmtDate(javaTimestamp: string) {
      const moment = _.get(window, 'moment');
      if (!javaTimestamp) {
        return '';
      }
      if (typeof javaTimestamp === 'string') {
        return moment(_.toInteger(javaTimestamp)).format('YYYY-MM-DD HH:mm:ss')
      }
      var timestamp = moment(javaTimestamp);
      return timestamp.format('YYYY-MM-DD HH:mm:ss');
    },
    fmtDateNoTime(javaTimestamp: string) {
      const moment = _.get(window, 'moment');
      if (!javaTimestamp) {
        return '';
      }
      if (typeof javaTimestamp === 'string') {
        return moment(_.toInteger(javaTimestamp)).format('YYYY-MM-DD')
      }
      var timestamp = moment(javaTimestamp);
      return timestamp.format('YYYY-MM-DD');
    }
  },
});

const main = new MainWindow();
YvanUI.render("app", main);
$('#i-loading').remove();