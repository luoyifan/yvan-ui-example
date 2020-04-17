import View, { Refs } from "./exampleTabs.view";
import * as YvanUI from "yvan-ui";

@YvanUI.BizModule()
export default class Module extends View<Module, void> {
  onShow(): void {
    _.extend(window, {
      module: this,
    });
    console.log("module setup", this);
  }

  getValue() {
    console.log(this.refs.theTab.getSelectedTabId());
  }

  tabBar1() {
    console.log("tabBar1 click");
  }

  tabBar21() {
    console.log("tabBar21 click");
  }

  tabBar22() {
    console.log("tabBar22 click");
  }

  tabBar3() {
    console.log("tabBar3 click");
  }
}
