import * as YvanUI from "yvan-ui";

export interface Refs {
  treeTable: YvanUI.CtlTreeTable;
}
export default abstract class<M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  refs!: Refs;

  viewResolver() {
    return {
      responsive: true,
      rows: [
        {
          view: "toolbar",
          height: 38,
          type: "line",
          css: {
            "background-color": "#004c8b",
          },
          borderless: true,
          cols: [
            {
              view: "label",
              width: 120,
              label: '<span style="color: white">图片预览</span>',
              align: "left",
            },
          ],
        },
        {
          view: "carousel",
          ctlName: "carouselCtl",
          width: 464,
          height: 275,
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
                  "http://docs.webix.com/samples/26_carousel/imgs/image002.jpg",
              },
            },
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
                  "http://docs.webix.com/samples/26_carousel/imgs/image003.jpg",
              },
            },
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
                  "http://docs.webix.com/samples/26_carousel/imgs/image004.jpg",
              },
            },
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
                  "http://docs.webix.com/samples/26_carousel/imgs/image005.jpg",
              },
            },
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
                  "http://docs.webix.com/samples/26_carousel/imgs/image006.jpg",
              },
            },
          ],
          onShow: {
            type: "function",
            bind: "onShow2",
          },
        },
      ],
    };
  }
}
