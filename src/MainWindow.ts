import View from "./MainWindow.view";
import Menu from "./MainWindow.menu";

@YvanUI.BizModule()
export default class Module extends View<Module, void> {

  i = 0;

  @YvanUI.Watch("query.menuFilter")
  menuFilter(nv: string) {
    this.refs.menuTree.filter(nv);
  }

  getMenu(sender: YvanUI.CtlTree, param: YvanUI.DataSourceParam) {
    this.i++;

    //转换菜单
    const that = this;

    function convert(list: any[]): any {
      if (!list) return;
      return list.map((item) => {
        return {
          value: item.text + that.i,
          id: item.key,
          module: item.value,
          icon: item.icon,
          data: convert(item.children),
          $css: { padding: "5px" },
        };
      });
    }

    param.successCallback(convert(Menu));
  }

  treeLoadFinish(){
    if ($.trim(window.location.hash).length > 1) {
      const vv = YvanUI.unparam(window.location.hash);
      if (vv.key && this.refs.menuTree) {
        const node = this.refs.menuTree.getItem(vv.key);
        if (node) {
          this.refs.menuTree.select(vv.key);
          this.menuTreeNodeClick(this.refs.tt, node);
        }
      }
    }
  }

  menuTreeNodeClick(sender: any, node: any) {
    if (this.refs.tt.selectTab(node.id)) {
      return;
    }
    if (node.module) {
      const module: any = new node.module();
      this.refs.tt.addModule(node.value, node.id, module);
    }
  }

  ttOnTabChanged(sender: any, newTabId: any): void {
    if (newTabId) {
      window.location.hash = YvanUI.param({ key: newTabId });
    } else {
      window.location.hash = "";
    }
  }

  onLoad() {
    _.extend(window, {
      addTab: this.refs.tt.addModule.bind(this.refs.tt),
    });
  }

  expandAll() {
    this.refs.menuTree.expandAll();
  }

  collapseAll() {
    this.refs.menuTree.collapseAll();
  }

  refreshMenu() {
    this.refs.menuTree.reload();
  }

  closeMe(sender: any, event: any) {
    const $dom = $(event.target);
    if ($dom.is(".webix_item_tab")) {
      $dom.find(".webix_tab_close").trigger("click");
    }
  }

  closeOther(sender: any, event: any) {
    const $dom = $(event.target);
    if ($dom.is(".webix_item_tab")) {
      const item: any = webix.$$(event);
      this.refs.tt.closeAll(["MainWindowFirstPage", $dom.attr("button_id")]);
    }
  }

  closeAll() {
    this.refs.tt.closeAll(["MainWindowFirstPage"]);
  }
}
