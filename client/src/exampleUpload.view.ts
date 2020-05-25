export type Refs = {};
export default abstract class<M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  $refs!: Refs;

  viewResolver() {
    return {
      view: "form",
      rows: [
        {
          // view: "uploader",
          value: "Upload file",
          name: "files",
          link: "mylist",
          upload: "http://10.2.136.63:8080/mdt/pad/hyb/upload/uploadImg.json",
          // width: 464, height: 275,
          cols: [
            {
              css: "image",
              template: function img(obj: any) {
                return (
                  '<img src="' +
                  obj.src +
                  '" class="content" ondragstart="return false"/><div class="title">' +
                  obj.title +
                  "</div>"
                );
              },
              data: {
                src:
                  "http://docs.webix.com/samples/26_carousel/imgs/image001.jpg",
              },
            },
          ],
        },
        {
          view: "list",
          id: "mylist",
          type: "uploader",
          autoheight: true,
          borderless: true,
        },
        // {
        //     view: "button", label: "Get value", click: function () {
        //         var text = this.getParentView().getValues();
        //         text = JSON.stringify(text, "\n");
        //         webix.message("<pre>" + text + "</pre>");
        //     }
        // }
      ],
    };
  }
}
