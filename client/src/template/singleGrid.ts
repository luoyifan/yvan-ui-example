import View, { Refs } from "./singleGrid.view";
import SingleGrid from "../template/singleGrid.data";
import singleGridDialong from "../template/singleGridDialong";
import DialogC1 from "../DialogC1";

@YvanUI.BizModule()
export default class Module extends View<Module, void> {
  add() {
    const dialog = new singleGridDialong();
    // dialog.showDialog({
    //     content: '内容1',
    //     success(cap) {
    //         console.log('success1', cap);
    //     }
    // }, this);
  }

  edit() {
    //
  }

  add1() {
    const dialog = new DialogC1();
    // dialog.showDialog({
    //     content: '内容1',
    //     success(cap) {
    //         console.log('success1', cap);
    //     }
    // }, this);
  }

  selectOnChange(sender: YvanUI.CtlCombo, value: any) {
    debugger;
  }
}
