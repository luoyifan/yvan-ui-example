import lodash from "lodash";
import Vue from "../public/static/plugins/vue/vue";
import * as YvanUIStatic from 'node_modules/yvan-ui/dist'

declare module "*.vue" {
  export default Vue;
}
declare global {
  const _: typeof lodash;
  const YvanUI: typeof YvanUIStatic
  const webix: any;
}
