import View, { Refs } from "./ExampleDashboard.view";
import * as YvanUI from "yvan-ui";
@YvanUI.BizModule()
export default class Module extends View<Module, void> {
  onShow(): void {
    _.extend(window, {
      module: this,
    });
    console.log("module setup", this);
  }
}
