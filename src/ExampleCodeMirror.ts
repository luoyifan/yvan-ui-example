import View from "./ExampleCodeMirror.view";
import * as YvanUI from "yvan-ui";
@YvanUI.BizModule()
export default class Module extends View<Module, void> {
  onLoad(): void {
    _.extend(window, {
      module: this,
    });
    console.log("module setup", this);

    this.refs.cj.value = `function v1(){
}`;
    this.refs.cx.value = `<YvanSQL>
    <sql id="aab">
        select * from table2
    </sql>
</YvanSQL>`;
    this.refs.cs.value = `select * from abc`;
  }
}
