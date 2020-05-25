export interface Refs {
  treeTable: YvanUI.CtlTreeTable;
}
export default abstract class <M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  refs!: Refs;

  viewResolver() {
    return {
      responsive: true,
      rows: [
        {
          view: "treetable",
          ctlName: "treeTable",
          select: true,
          onNodeClick: {
            type: "function",
            bind: "menuTreeNodeClick",
          },
          columns: [
            { id: "id", header: "id", width: 50, hidden: false },
            {
              id: "value",
              header: "标题",
              fillspace: true,
              css: { "text-align": "center" },
            },
            {
              id: "chapter",
              header: "Mode",
              fillspace: true,
              template: "{common.treetable()} #chapter#",
            },
          ],
          // filterMode: {
          //   level: 1,
          // },
          dataSource: {
            type: "function",
            bind: "getTreeGridData",
          },
          // data: [
          //     {
          //         id: "1",
          //         value: "The Shawshank Redemption",
          //         open: true,
          //         data: [
          //             { id: "1.1", value: "Part 1", chapter: "alpha" },
          //             {
          //                 id: "1.2",
          //                 value: "Part 2",
          //                 chapter: "beta",
          //                 open: true,
          //                 data: [
          //                     { id: "1.2.1", value: "Part 1", chapter: "beta-twin" },
          //                     { id: "1.2.2", value: "Part 2", chapter: "sss" }
          //                 ]
          //             },
          //             { id: "1.3", value: "Part 3", chapter: "alpha" },
          //             {
          //                 id: "1.4",
          //                 value: "Part 4",
          //                 chapter: "beta",
          //                 open: true,
          //                 data: [
          //                     { id: "1.4.1", value: "Part 1", chapter: "beta-twin" },
          //                     { id: "1.4.2", value: "Part 2", chapter: "sss" }
          //                 ]
          //             }
          //         ]
          //     }
          // ]
        },
      ],
    };
  }
}
