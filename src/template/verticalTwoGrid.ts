import View, { Refs } from "./verticalTwoGrid.view";
import * as YvanUI from "yvan-ui";

@YvanUI.BizModule()
export default class Module extends View<Module, void> {
  selectOnChange(sender: YvanUI.CtlCombo, value: any) {}
}
