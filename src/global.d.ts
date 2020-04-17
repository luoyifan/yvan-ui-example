import lodash from "lodash";
import * as YvanUIStatic from "node_modules/yvan-ui/dist/index"; // 解决提示符问题
import Vue from "../public/static/plugins/vue/vue";

declare module "*.vue" {
  export default Vue;
}
declare global {
  const _: typeof lodash;
  const YvanUI: typeof YvanUIStatic;
  const webix: any;
}
