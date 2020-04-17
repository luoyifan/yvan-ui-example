import * as YvanUI from "yvan-ui";

export type Refs = {};
export default abstract class<M, INP> extends YvanUI.BaseDialog<M, Refs, INP> {
  // $refs!: Refs;

  main: {
    entity_id: string;
    linkman: string;
    telephone: string;
    address: string;
    files: any;
    front_id_card_photo: string;
    back_id_card_photo: string;
  } = {
    entity_id: "",
    linkman: "",
    telephone: "",
    address: "",
    files: [],
    front_id_card_photo: "",
    back_id_card_photo: "",
  };

  viewResolver(): any {
    return {
      title: "title",
      width: 500,
      height: 577,
      modal: false,
      view: "form",
      body: {
        rows: [
          {
            view: "text",
            field: "main.linkman",
            entityName: "main.linkman",
            label: "管理者姓名",
            width: 300,
          },
          {
            view: "text",
            field: "telephone",
            entityName: "main.telephone",
            label: "登录手机号",
            width: 300,
          },
          {
            view: "text",
            field: "address",
            entityName: "main.address",
            label: "联系地址",
            width: 300,
          },
          {
            id: "upload1",
            view: "uploader",
            upload: "http://upload.json",
            value: "选择身份证正面文件",
            multiple: false,
            autosend: false,
            accept: "image/png, image/gif, image/jpeg",
            on: {
              onBeforeFileAdd: function (item: any) {
                var type = item.type.toLowerCase();
                if (type !== "jpg" && type !== "png") {
                  YvanUI.alert("Only PNG or JPG images are supported");
                  return false;
                }
              },
              onAfterFileAdd: function (item: any) {
                var reader = new FileReader();
                //转base64
                reader.onload = function (e: any) {
                  $("#img1").attr("src", e.target.result);
                };
                reader.readAsDataURL(item.file);
              },
            },
            apiOnly: true,
          },
          {
            height: 150,
            cols: [
              {
                css: "image",
                template: function img(obj: any) {
                  return (
                    '<img id="img1" src="' +
                    obj.src +
                    '" class="content" ondragstart="return false"/>'
                  );
                },
                data: { src: "" },
              },
            ],
          },
          {
            id: "upload2",
            view: "uploader",
            upload: "http://upload.json",
            value: "选择身份证反面文件",
            multiple: false,
            autosend: false,
            accept: "image/png, image/gif, image/jpeg",
            on: {
              onBeforeFileAdd: function (item: any) {
                var type = item.type.toLowerCase();
                if (type !== "jpg" && type !== "png") {
                  YvanUI.alert("Only PNG or JPG images are supported");
                  return false;
                }
              },
              onAfterFileAdd: function (item: any) {
                var reader = new FileReader();
                //转base64
                reader.onload = function (e: any) {
                  $("#img2").attr("src", e.target.result);
                };
                reader.readAsDataURL(item.file);
              },
            },
            apiOnly: true,
          },
          {
            height: 150,
            cols: [
              {
                css: "image",
                template: function img(obj: any) {
                  return (
                    '<img id="img2" src="' +
                    obj.src +
                    '" class="content" ondragstart="return false"/>'
                  );
                },
                data: { src: "" },
              },
            ],
          },
          {
            cols: [
              {
                view: "button",
                id: "btnOK",
                label: "确定",
                type: "text",
                icon: "",
                width: 80,
                css: { padding: "0px 0px 0px 100px" },
                click(this: any) {
                  this.$scope.ok();
                },
              },
              {
                view: "button",
                label: "取消",
                type: "text",
                icon: "",
                width: 80,
                css: { padding: "0px 0px 0px 10px" },
                click(this: any) {
                  this.$scope.cancel();
                },
              },
            ],
          },
        ],
      },
    };
  }

  closeMe() {
    this.closeDialog();
  }
}
