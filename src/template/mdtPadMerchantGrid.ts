import View from "./mdtPadMerchantGrid.view";
import * as YvanUI from "yvan-ui";
import mdtPadMerchantGridDialog from "../template/mdtPadMerchantGridDialog";

interface INP {
  entity_id: string;
  telephone: string;
}

@YvanUI.BizModule()
export default class Module extends View<Module, INP> {
  onLoad() {
    YvanUI.ajax({
      url: "/mdt/pad/hyb/merchantInfo/merchant_list.json",
      method: "POST",
      data: {
        entityId: this.inParamter.entity_id,
      },
    })
      .then((res: any) => {
        if (res.code === "200") {
          this.refs.grid.setData(res.data);
          this.gridMain.selectedRow = undefined;
        } else {
          YvanUI.msg(res.msg);
        }
      })
      .finally(() => {
        $("#telephone").val(this.inParamter.telephone);
      });
  }

  resetForm() {
    // this.dsQuery = {
    //     linkman: "",
    //     telephone: '',
    //     status: '',
    //     entity_id: ''
    // }
  }

  add() {
    this.addOrEdit(true, "", this.inParamter.entity_id, "新增药店");
  }

  edit() {
    let row = this.gridMain.selectedRow;
    if (!row) {
      YvanUI.msg("请先选择一个药店");
      return;
    }
    this.addOrEdit(
      false,
      row.merchant_id,
      this.inParamter.entity_id,
      "修改药店"
    );
  }

  addOrEdit(
    isAdd: boolean,
    merchant_id: string,
    entity_id: string,
    title: string
  ) {
    let _this = this;
    const dialog = new mdtPadMerchantGridDialog();
    dialog.showDialog(
      {
        content: title,
        isAdd: isAdd,
        merchant_id: merchant_id,
        entity_id: entity_id,
        success(cap) {
          _this.onLoad();
          dialog.closeMe();
        },
      },
      this
    );
  }

  online() {
    this.onlineOrOffine(1, "上线");
  }

  offline() {
    this.onlineOrOffine(2, "下线");
  }

  onlineOrOffine(state: number, title: string) {
    let row = this.gridMain.selectedRow;
    if (!row) {
      YvanUI.msg("请先选择一个药店");
      return;
    }
    let _this = this;
    YvanUI.confirm("您确定要" + title + "该药店吗？").then(() => {
      if (row.state === state) {
        return;
      }
      YvanUI.ajax({
        url: "/mdt/pad/hyb/merchantInfo/merchant_online_offline.json",
        method: "POST",
        data: {
          id: row.merchant_id,
          state: state,
        },
      })
        .then((res: any) => {
          if (res.code === "200") {
            _this.onLoad();
          }
          YvanUI.msg(res.msg);
        })
        .finally(() => {});
    });
  }

  selectOnChange(sender: YvanUI.CtlCombo, value: any) {
    // debugger
  }
}
