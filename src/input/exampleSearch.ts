import selectOrg from "../widgets/selectOrg";
import selectCustom from "../widgets/selectCustom";

export type Refs = {
  seachboxOrgName: YvanUI.CtlSearch;
  btnGet: YvanUI.CtlButton;
  btnSet: YvanUI.CtlButton;
  btnSearch: YvanUI.CtlButton;
  btnClear: YvanUI.CtlButton;

  suppliercode: YvanUI.CtlSearch;
  suppliername: YvanUI.CtlSearch;
  suppliercontact: YvanUI.CtlText;
  suppliertel: YvanUI.CtlText;
  supplieraddress: YvanUI.CtlText;
  supplierprovince: YvanUI.CtlText;
  suppliercity: YvanUI.CtlText;
  supplierzip: YvanUI.CtlText;
  supplierremark: YvanUI.CtlText;
};

const events = {
  onClick: {
    type: "function",
    bind: "onClick",
  },
  onEnter: {
    type: "function",
    bind: "onEnter",
  },
  onFocus: {
    type: "function",
    bind: "onFocus",
  },
  onChange: {
    type: "function",
    bind: "onChange",
  },
  onBlur: {
    type: "function",
    bind: "onBlur",
  },
  onKeydown: {
    type: "function",
    bind: "onKeydown",
  },
};

@YvanUI.BizModule()
export default abstract class Module extends YvanUI.BaseModule<Module, Refs, void> {
  query = {
    org_id: "zz1v",
    org_name: "zz1",
  };

  qqq: string = '';

  dsMain: {
    suppliercode: string;
    suppliername: string;
    supplierprovince: string;
    suppliercity: string;
    supplierzip: string;
    suppliercontact: string;
    suppliertel: string;
    supplieraddress: string;
  } = {
      suppliercode: "",
      suppliername: "",
      supplierprovince: "",
      suppliercity: "",
      supplierzip: "",
      suppliercontact: "",
      suppliertel: "",
      supplieraddress: "",
    };

  viewResolver() {
    const qs = {
      widget: {
        content: selectCustom,
        params: {
          a: 1,
          b: "2",
        },
        bind: {
          "dsMain.suppliercode": "customercode",
          "dsMain.suppliername": "customername",
          "dsMain.supplierprovince": "province",
          "dsMain.suppliercity": "city",
          "dsMain.supplierzip": "zip",
          "dsMain.suppliercontact": "contact",
          "dsMain.suppliertel": "telephone",
          "dsMain.supplieraddress": "address",
        },
      },
    };

    return {
      view: "form",
      type: "space",
      scroll: true,
      rows: [
        {
          cols: [
            {
              view: "toolbar",
              borderless: true,
              elements: [
                {
                  view: "label",
                  label: "Searchbox 演示",
                  autowidth: true,
                },
                {
                  text: "取值",
                  view: "button",
                  ctlName: "btnGet",
                },
                {
                  text: "代码设值",
                  view: "button",
                  ctlName: "btnSet",
                },
                {
                  text: "代码查找",
                  view: "button",
                  ctlName: "btnSearch",
                },
                {
                  text: "置空",
                  view: "button",
                  ctlName: "btnClear",
                },
                {},
              ],
            },
            {},
          ],
        },
        {
          view: "fieldset",
          label: "组织机构",
          body: {
            rows: [
              {
                cols: [
                  {
                    view: "search",
                    ctlName: "seachboxOrgName",
                    entityName: "query.org_name",
                    label: "组织机构查找",
                    widget: {
                      content: selectOrg,
                      bind: {
                        "query.org_id": "org_id",
                        "query.org_name": "org_name",
                      },
                    },
                    ...events,
                  },
                  {},
                ],
              },
              {
                cols: [
                  {
                    label: "组织机构编号",
                    entityName: "query.org_id",
                    view: "text",
                    validate: function (value) {
                      if (!value || value.length < 3) {
                        return '输入长度必须大于等于3'
                      }
                    },
                    ...events,
                  },
                  {
                    label: "组织机构名称",
                    entityName: "query.org_name",
                    view: "text",
                    validate: function (value) {
                      if (!value || value.length < 5) {
                        return '输入长度必须大于等于5'
                      }
                    },
                    ...events,
                  },
                  {
                    label: "组织机构名称",
                    entityName: "qqq",
                    view: "text",
                    validate: function (value) {
                      if (!value || value.length < 10) {
                        return '输入长度必须大于等于10'
                      }
                    },
                    ...events,
                  },
                  {},
                ],
              },
              { template: "" },
            ],
          },
        },
        {
          view: "fieldset",
          label: "供应商",
          body: {
            rows: [
              {
                cols: [
                  {
                    view: "search",
                    ctlName: "suppliercode",
                    entityName: "dsMain.suppliercode",
                    label: "客户编号",
                    ...qs,
                    ...events,
                  },
                  {
                    view: "search",
                    ctlName: "suppliername",
                    entityName: "dsMain.suppliername",
                    label: "客户名称",
                    ...qs,
                    ...events,
                  },
                ],
              },
              {
                cols: [
                  {
                    label: "联系人",
                    ctlName: "suppliercontact",
                    entityName: "dsMain.suppliercontact",
                    view: "text",
                  },
                  {
                    label: "电话",
                    ctlName: "suppliertel",
                    entityName: "dsMain.suppliertel",
                    view: "text",
                  },
                  {
                    label: "地址",
                    ctlName: "supplieraddress",
                    entityName: "dsMain.supplieraddress",
                    view: "text",
                  },
                ],
              },
              {
                cols: [
                  {
                    label: "省",
                    view: "text",
                    ctlName: "supplierprovince",
                    entityName: "dsMain.supplierprovince",
                    disabled: true,
                  },
                  {
                    label: "市",
                    view: "text",
                    ctlName: "suppliercity",
                    entityName: "dsMain.suppliercity",
                    disabled: true,
                  },
                  {
                    label: "邮编",
                    ctlName: "supplierzip",
                    entityName: "dsMain.supplierzip",
                    view: "text",
                    disabled: true,
                  },
                ],
              },
              {
                cols: [
                  {
                    label: "备注",
                    ctlName: "supplierremark",
                    entityName: "dsMain.supplierremark",
                    view: "text",
                  },
                ],
              },
              {
                cols: [
                  {
                    text: "提交",
                    view: "button",
                    onClick: {
                      type: "function",
                      bind: "btnClick",
                    },
                  },
                  {}
                ]
              },
              { template: "" },
            ],
          },
        },
        {
          template: "",
        },
      ],
    };
  }

  onLoad(): void {
    _.set(window, "search", this.refs.seachboxOrgName);
    console.log("search has set", this.refs.seachboxOrgName);

    _.set(window, "search1", this.refs.seachboxOrgName);
    console.log("search1 has set", this.refs.suppliercode);

    _.set(window, "search2", this.refs.seachboxOrgName);
    console.log("search2 has set", this.refs.suppliername);
  }

  onClick(sender: any) {
    // console.log(sender.ctlName + " onClick", sender);
  }

  onEnter(sender: any) {
    // console.log(sender.ctlName + " onEnter", sender);
  }

  onFocus(sender: any) {
    // console.log(sender.ctlName + " onFocus", sender);
  }

  onChange(sender: any, nv: any) {
    console.log(sender.ctlName + " onChange", nv);
  }

  onBlur(sender: any) {
    // console.log(sender.ctlName + " onBlur", sender);
  }

  onKeydown(sender: any, event: KeyboardEvent) {
    // console.log(sender.ctlName + " onKeydown", event);
  }

  btnClick() {
    console.log("提交")
    this.validate('query').then((res) => {
      YvanUI.msg('校验成功');
      console.log(this.query);
    }).catch(e => {
      console.log('校验错误', e)
      // _.forEach(e, (value, key) => {
      //   YvanUI.msg(key + value);
      //   YvanUI.msgInfo(key + value);
      // });
    });
  }

  i: number = 1;
  property: {
    value: string;
  } = {
      value: "当前值",
    };
}
