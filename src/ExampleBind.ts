interface Refs {}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {
  dsMain: {
    f1: string;
    f2: string;
  } = {
    f1: "",
    f2: "",
  };
  i: number = 1;

  onShow(): void {
    _.extend(window, {
      module: this,
    });
    console.log("module setup", this);
  }

  viewResolver(): any {
    return {
      rows: [
        {
          cols: [
            {
              view: "text",
              label: "输入框f1",
              width: 250,
              entityName: "dsMain.f1",
            },
            {
              view: "text",
              label: "输入框f2",
              width: 250,
              entityName: "dsMain.f2",
            },
            {},
          ],
        },
        {
          cols: [
            {
              view: "button",
              text: "getValue",
              width: 250,
              onClick: {
                type: "function",
                bind: "getValue",
              },
            },
            {
              view: "button",
              text: "setValue",
              width: 250,
              onClick: {
                type: "function",
                bind: "setValue",
              },
            },
            {},
          ],
        },
        {},
      ],
    };
  }

  onLoad(): void {
    console.log("setup module:", this);
    _.extend(window, {
      module: this,
    });
  }

  @YvanUI.Watch("dsMain", true)
  invokeIt(nv: any) {
    console.log("dsMain changed!", _.cloneDeep(nv));
  }

  getValue() {
    console.log(_.cloneDeep(this.dsMain));
  }

  setValue() {
    this.i++;
    this.dsMain.f1 = "f1-" + this.i;
    this.dsMain.f2 = "f2-" + this.i;
  }
}
