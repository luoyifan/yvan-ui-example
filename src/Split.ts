export interface Refs {
  menuTree: YvanUI.CtlTree;
}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {
  viewResolver() {
    return {
      rows: [
        { template: "row 1" },
        { view: "resizer" },
        { template: "row 2" },
        { view: "resizer" },
        {
          cols: [
            { template: "column 1" },
            { view: "resizer" },
            { template: "column 2" },
          ],
        },
      ],
    };
  }
}
