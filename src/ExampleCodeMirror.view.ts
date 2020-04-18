export interface Refs {
  cj: YvanUI.CtlCodeMirror;
  cx: YvanUI.CtlCodeMirror;
  cs: YvanUI.CtlCodeMirror;
}

export default abstract class<M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  viewResolver() {
    return {
      rows: [
        {
          cols: [
            {
              view: "codemirror-editor",
              mode: "javascript",
              ctlName: "cj",
            },
            { view: "resizer" },
            {
              view: "codemirror-editor",
              mode: "xml",
              ctlName: "cx",
            },
            { view: "resizer" },
            {
              view: "codemirror-editor",
              mode: "sql",
              ctlName: "cs",
            },
          ],
        },
      ],
    };
  }
}
