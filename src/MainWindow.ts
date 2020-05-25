import MainWindowView from './MainWindow.view'
import menuData from './MainWindow.menu'

@YvanUI.BizModule()
export default class MainWindow extends MainWindowView<MainWindow, void> {


  onLoad() {
    _.extend(window, {
      addTab: this.refs.tt.addModule.bind(this.refs.tt)
    })

    // 数组 foreach 没问题！！
    // const data = ['a', 'b']
    // this.rootService.testForeach(data).then(res => {
    // })
    // const data2 = [
    //     {f1: 1, f2: 'a1'},
    //     {f1: 2, f2: 'b1'},
    //     {f1: 3, f2: 'c1'},
    // ]
    // this.rootService.testForeach2(data2).then(res => {
    // })
  }

  @YvanUI.Watch("query.menuFilter")
  menuFilter(nv: string) {
    this.refs.menuTree.filter(nv);
  }

  ttOnRender(tt: any) {
    _.defer(() => {
      const $dom = $(tt._webix.$view);
      $dom.children(":first").addClass('mainTabBar');
      $dom.children(":nth-child(2)").addClass('mainTabBox');
    });
  }

  menuLoadFinish(sender: YvanUI.CtlTree) {
    sender.expandAll();
    if (!_.get(window, 'isFirstLoad')) {
      // 自动加载上一次的页面
      if ($.trim(window.location.hash).length > 1) {
        const vv = YvanUI.unparam(window.location.hash);
        if (vv.key && this.refs.menuTree) {
          const [node] = this.refs.menuTree.find((node) => {
            return node.row.menu_url === vv.key
          });
          if (node) {
            this.refs.menuTree.select(node.id);
            this.menuNodeClick(this.refs.tt, node)
            _.set(window, 'isFirstLoad', true);
          }
        }
      }
    }
  }

  ttOnTabChanged(sender: any, newTabId: any): void {
    if (newTabId) {
      window.location.hash = YvanUI.param({ key: newTabId });
    } else {
      window.location.hash = "";
    }
  }

  getMenu(sender: YvanUI.CtlTree, param: YvanUI.DataSourceParam) {
    param.successCallback(menuData);
  }

  menuNodeClick(sender: any, node: any) {
    if (!node.id || !_.has(node, 'row')) {
      return;
    }

    const { menu_url } = _.get(node, 'row');
    if (!menu_url) {
      return;
    }

    if (this.refs.tt.selectTab(menu_url)) {
      // 已经打开了页面
      return;
    }

    import(menu_url).then(value => {
      const module: any = new value.default();
      const title: string = `<div class="myTabDiv">${node.value}</div>`;
      this.refs.tt.addModule(title, menu_url, module);
    });
  }

  closeMe(sender: any, event: any) {
    const $dom = $(event.target);
    if ($dom.is('.webix_item_tab')) {
      $dom.find('.webix_tab_close').trigger('click');
    }
  }

  closeOther(sender: any, event: any) {
    const $dom = $(event.target);
    if ($dom.is('.webix_item_tab')) {
      const item: any = webix.$$(event);
      this.refs.tt.closeAll(['MainWindowFirstPage', $dom.attr('button_id')]);
    }
  }

  closeAll() {
    this.refs.tt.closeAll(['MainWindowFirstPage']);
  }
}