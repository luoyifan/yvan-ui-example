import View, { Refs } from "./imagePreview.view";

@YvanUI.BizModule()
export default class Module extends View<Module, void> {
  onShow2(sender: YvanUI.CtlCarousel, value: any) {
    debugger;
  }

  img(obj: any) {
    return (
      '<img src="' + obj.src + '" class="content" ondragstart="return false"/>'
    );
  }
}
