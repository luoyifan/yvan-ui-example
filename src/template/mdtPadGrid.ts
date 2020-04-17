import View from "./mdtPadGrid.view";
import * as YvanUI from "yvan-ui";
import mdtPadGridDialog from "../template/mdtPadGridDialog";
import mdtPadMerchantGrid from "../template/mdtPadMerchantGrid";

@YvanUI.BizModule()
export default class Module extends View<Module, void> {
  onLoad() {
    YvanUI.ajax({
      url: "/mdt/pad/hyb/userInfo/user_list.json",
      method: "POST",
      data: this.dsQuery,
    })
      .then((res: any) => {
        if (res.code === "200") {
          this.refs.grid.setData(res.data);
          this.gridMain.selectedRow = undefined;
        } else {
          YvanUI.msg(res.msg);
        }
      })
      .finally(() => {});
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
    this.addOrEdit(true, "", "新增账号");
  }

  edit() {
    let row = this.gridMain.selectedRow;
    if (!row) {
      YvanUI.msg("请先选择一个账号");
      return;
    }
    this.addOrEdit(false, row.entity_id, "修改账号");
  }

  edit2(sender: YvanUI.CtlGrid, args: YvanUI.CtlGridRowButtonClickArgs) {
    let entity_id = args.data.entity_id;
    this.addOrEdit(false, entity_id, "修改账号");
  }

  addOrEdit(isAdd: boolean, entity_id: string, title: string) {
    let _this = this;
    const dialog = new mdtPadGridDialog();
    dialog.showDialog(
      {
        content: title,
        isAdd: isAdd,
        entity_id: entity_id,
        success(cap) {
          _this.onLoad();
          dialog.closeMe();
        },
      },
      this
    );
  }

  qiyong() {
    this.qiyongOrTingyong(1, "启用");
  }

  tingyong() {
    this.qiyongOrTingyong(2, "停用");
  }

  qiyongOrTingyong(state: number, title: string) {
    let row = this.gridMain.selectedRow;
    if (!row) {
      YvanUI.msg("请先选择一个账号");
      return;
    }
    let _this = this;
    YvanUI.confirm("您确定要" + title + "该账户吗？").then(() => {
      if (row.state === state) {
        return;
      }
      YvanUI.ajax({
        url: "/mdt/pad/hyb/userInfo/user_qiyong_or_tingyong.json",
        method: "POST",
        data: {
          id: row.entity_id,
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

  merchantManager() {
    let row = this.gridMain.selectedRow;
    if (!row) {
      YvanUI.msg("请先选择一个账号");
      return;
    }
    //请求打开标签页
    //const module: any = mdtPadMerchantGrid;
    //module.entity_id = row.entity_id;
    //module.telephone = row.telephone;
    //const addTab: any = _.get(window, 'addTab');

    const module = new mdtPadMerchantGrid();
    module.inParamter = {
      entity_id: row.entity_id,
      telephone: row.telephone,
    };

    addTab("药店管理", "YDGL_" + row.entity_id, module);
  }

  selectOnChange(sender: YvanUI.CtlCombo, value: any) {
    // debugger
  }
}
