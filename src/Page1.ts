import * as YvanUI from "yvan-ui";

export interface Refs {
  menuTree: YvanUI.CtlTree;
}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {
  refs!: Refs;

  viewResolver() {
    return {
      rows: [
        {
          cols: [
            { view: "text", label: "text1" },
            { view: "text", label: "text2" },
          ],
        },
        {
          view: "datatable",
          autoConfig: true,
          data: {
            title: "My Fair Lady",
            year: 1964,
            votes: 533848,
            rating: 8.9,
            rank: 5,
          },
        },
      ],
    };
  }
}
