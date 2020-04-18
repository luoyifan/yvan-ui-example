import CustomData from "./custom.data";
import { BaseGridWidget } from "./BaseGridWidget";

@YvanUI.BizModule()
export default class Module extends BaseGridWidget<Module> {
  gridDataSource(
    sender: YvanUI.CtlGrid,
    params: YvanUI.GridDataSourceStaticFunctionParam
  ) {
    let data;
    if (!this.dsQuery.query) {
      data = CustomData;
    } else {
      data = CustomData.filter((row: any) => {
        return (
          row.customername.indexOf(this.dsQuery.query) >= 0 ||
          row.contact.indexOf(this.dsQuery.query) >= 0 ||
          row.customerid.indexOf(this.dsQuery.query) >= 0 ||
          row.customercode.indexOf(this.dsQuery.query) >= 0
        );
      });
    }

    params.successCallback(data, data.length);
  }

  viewResolver() {
    return super.baseViewResolver({
      title: "客户检索方案",
      grid: {
        autoSizeColumns: false,
        idField: "customerid",
        dataSource: {
          type: "function",
          bind: "gridDataSource",
          params: {
            query: { $watch: "dsQuery.query" },
          },
        },
        columns: [
          { field: "customerid", hidden: true },
          { field: "customercode", title: "客户编号", width: 80 },
          { field: "customername", title: "客户名称", width: 120 },
          { field: "logogram", title: "助记码", width: 80 },
          { field: "industryclass", title: "客户类型", width: 100 },
          { field: "customertype", title: "客户类别", width: 100 },
          { field: "zip", title: "邮编", width: 80 },
          { field: "contact", title: "联系人", width: 80 },
          { field: "telephone", title: "电话", width: 80 },
          { field: "province", title: "省", width: 80 },
          { field: "city", title: "市", width: 80 },
          { field: "address", title: "地址", width: 100 },
          { field: "ownername", title: "所属货主", width: 100 },
          { field: "isdefaultowner", title: "是否默认货主", width: 120 },
          { field: "routeid", hidden: true },
          { field: "routename", title: "线路名称", width: 120 },
          {
            field: "isenable",
            title: "是否启用",
            width: 100,
            //formatter: 'enable'
          },
          { field: "remark", title: "备注", width: 100 },
        ],
      },
    });
  }
}
