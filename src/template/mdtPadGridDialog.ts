import View, { Refs } from "./mdtPadGridDialog.view";
import * as YvanUI from "yvan-ui";

interface INP {
  content: string;
  isAdd: boolean;
  entity_id: String;
  success: (cap: any) => void;
}

@YvanUI.BizModule()
export default class Module extends View<Module, INP> {
  onLoad() {
    this.title = this.inParamter.content;
    if (!this.inParamter.isAdd) {
      YvanUI.ajax({
        url: "/mdt/pad/hyb/userInfo/user_detail.json",
        method: "POST",
        data: {
          id: this.inParamter.entity_id,
        },
      })
        .then((res: any) => {
          if (res.code === "200") {
            this.main = YvanUI.snakeCase(res.data);
            $("#img1").attr("src", this.main.front_id_card_photo);
            $("#img2").attr("src", this.main.back_id_card_photo);
          } else {
            YvanUI.msg(res.msg);
          }
        })
        .finally(() => {});
    }
  }

  getFile(uploadId: any): any {
    let file = null;
    let upload: any = $$(uploadId);
    function parse(obj: any) {
      file = obj.file;
    }
    upload["files"].data.each(parse);
    return file;
  }

  ok() {
    let file1 = this.getFile("upload1");
    let file2 = this.getFile("upload2");
    if (file1 !== null) {
      this.main.files[0] = file1;
    }
    if (file2 !== null) {
      this.main.files[1] = file2;
    }

    if (this.inParamter.isAdd && file1 == null) {
      YvanUI.msg("请选择身份证正面");
      return;
    }
    if (this.inParamter.isAdd && file2 == null) {
      YvanUI.msg("请选择身份证反面");
      return;
    }
    $$("btnOK").disable();
    let apiUrl = this.inParamter.isAdd
      ? "/mdt/pad/hyb/userInfo/user_add.json"
      : "/mdt/pad/hyb/userInfo/user_update.json";
    YvanUI.ajax({
      url: apiUrl,
      method: "POST-FILE",
      data: YvanUI.camelCase(this.main),
    })
      .then((res: any) => {
        if (res.code === "200") {
          this.inParamter.success({});
        } else {
          $$("btnOK").enable();
        }
        YvanUI.msg(res.msg);
      })
      .finally(() => {});
  }

  cancel() {
    this.closeMe();
  }
}
