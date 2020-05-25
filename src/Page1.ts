export interface Refs {
  menuTree: YvanUI.CtlTree;
}

@YvanUI.BizModule()
export default class Module extends YvanUI.BaseModule<Module, Refs, void> {
  refs!: Refs;

  viewResolver() {
    return {
      rows: [
        {
          cols: [
            { view: "text", label: "text1" },
            { view: "text", label: "text2" },
          ],
        },
        {
          cols: [
            { view: 'icon', icon: 'wxi-angle-down' },
            { view: 'icon', icon: 'wxi-angle-left' },
            { view: 'icon', icon: 'wxi-angle-right' },
            { view: 'icon', icon: 'wxi-angle-up' },
            { view: 'icon', icon: 'wxi-angle-double-right' },
            { view: 'icon', icon: 'wxi-angle-double-left' },
            { view: 'icon', icon: 'wxi-clock' },
            { view: 'icon', icon: 'wxi-calendar' },
            { view: 'icon', icon: 'wxi-search' },
            { view: 'icon', icon: 'wxi-dots' },
            { view: 'icon', icon: 'wxi-close' },
            { view: 'icon', icon: 'wxi-checkbox-marked' },
            { view: 'icon', icon: 'wxi-checkbox-blank' },
            { view: 'icon', icon: 'wxi-trash' },
            { view: 'icon', icon: 'wxi-pencil' },
            { view: 'icon', icon: 'wxi-eye' },
            { view: 'icon', icon: 'wxi-eye-slash' },
            { view: 'icon', icon: 'wxi-columns' },
            { view: 'icon', icon: 'wxi-drag' },
            { view: 'icon', icon: 'wxi-check' },
            {}
          ]
        }, {
          cols: [
            { view: 'icon', icon: 'wxi-underline' },
            { view: 'icon', icon: 'wxi-bold' },
            { view: 'icon', icon: 'wxi-italic' },
            { view: 'icon', icon: 'wxi-sync' },
            { view: 'icon', icon: 'wxi-plus-square' },
            { view: 'icon', icon: 'wxi-minus-square' },
            { view: 'icon', icon: 'wxi-menu-down' },
            { view: 'icon', icon: 'wxi-menu-right' },
            { view: 'icon', icon: 'wxi-menu-left' },
            { view: 'icon', icon: 'wxi-folder' },
            {}
          ]
        }, {
          cols: [
            { view: 'icon', icon: 'wxi-folder-open' },
            { view: 'icon', icon: 'wxi-file' },
            { view: 'icon', icon: 'wxi-close-circle' },
            { view: 'icon', icon: 'wxi-alert' },
            { view: 'icon', icon: 'wxi-radiobox-blank' },
            { view: 'icon', icon: 'wxi-radiobox-marked' },
            { view: 'icon', icon: 'wxi-angle-double-down' },
            { view: 'icon', icon: 'wxi-angle-double-up' },
            { view: 'icon', icon: 'wxi-plus-circle' },
            { view: 'icon', icon: 'wxi-minus-circle' },
            {}
          ]
        }, {
          cols: [
            { view: 'icon', icon: 'wxi-plus' },
            { view: 'icon', icon: 'wxi-minus' },
            { view: 'icon', icon: 'wxi-download' },
            { view: 'icon', icon: 'wxi-user' },
            {},
          ]
        },
        {}
      ],
    };
  }
}
