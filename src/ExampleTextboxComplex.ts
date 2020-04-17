import * as YvanUI from "yvan-ui";

interface Refs {}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {
  viewResolver(): any {
    return {
      rows: [
        {
          cols: [
            {
              view: "text",
              entityName: "dsMain.f1",
              label: "dsMain.f1",
            },
            {
              view: "text",
              entityName: "dsMain.f2",
              label: "dsMain.f2",
            },
          ],
        },
        {
          cols: [
            {
              view: "button",
              text: "getValue",
              width: 150,
              onClick: {
                type: "function",
                bind: "getValue",
              },
            },
            {
              view: "button",
              text: "setValue",
              width: 150,
              onClick: {
                type: "function",
                bind: "setValue",
              },
            },
          ],
        },
      ],
    };
  }

  dsMain: {
    f1: string;
    f2: string;
  } = {
    f1: "",
    f2: "",
  };
  i: number = 1;

  onLoad(): void {
    console.log("module attached");
    Object.assign(window, { module: this });
  }

  getValue() {
    console.log(_.cloneDeep(this.dsMain));
  }

  setValue() {
    this.dsMain.f1 = "新值" + this.i;
    this.dsMain.f2 = "新值" + this.i;
    this.i++;
  }
}
