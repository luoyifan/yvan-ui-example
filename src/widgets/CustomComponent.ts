import * as YvanUI from "yvan-ui";

/**
 * 封装自定义组件
 */
@YvanUI.UserComponent("my_component")
export class CustomComponent extends YvanUI.UserComponentBase<CustomComponent> {
  render(parentElement: Element): void {
    // const $dom = $(parentElement);
    // $dom.append('<input >');
  }
}
