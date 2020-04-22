export interface Refs {
    menuTree: YvanUI.CtlTree;
    btnSave: YvanUI.CtlButton;
    billDate: YvanUI.CtlDatePicker;
}

function componentRenderFilter(vjson: any): boolean {
    if (_.has(vjson, 'requirePromission')) {
        if (_.indexOf(vjson.requirePromission, '2') >= 0) {
            // 不显示权限中包含2 的
            return false;
        }
    }
    return true;
}

YvanUI.componentRenderFilter = componentRenderFilter;

@YvanUI.BizModule()
export default class ExamplePromission extends YvanUI.BaseModule<ExamplePromission, Refs, void> {
    viewResolver(): any {
        return {
            rows: [
                {
                    cols: [
                        { view: 'text', label: '字段11', requirePromission: 'F11' },
                        { view: 'text', label: '字段12', requirePromission: 'F12' },
                        { view: 'text', label: '字段13', requirePromission: 'F13' }
                    ],
                },
                {
                    cols: [
                        { view: 'text', label: '字段21', requirePromission: 'F31' },
                        { view: 'text', label: '字段22', requirePromission: 'F31' },
                        { view: 'text', label: '字段23', requirePromission: 'F31' },
                    ]
                },
                {
                    requirePromission: 'F21',
                    hiddenPlaceholder: {},
                    cols: [
                        { view: 'tree' },
                    ]
                }
            ]
        }
    }

    onLoad() {

    }
}