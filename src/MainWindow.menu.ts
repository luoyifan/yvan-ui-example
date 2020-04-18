import ExampleDashboard from "./ExampleDashboard";
import Page1 from "./Page1";
import ExampleTreeGrid from "./exampleTreeGrid";
import SystemDict from "./dictionary/SystemDict";
import TextboxString from "./input/exampleTextboxString";
import TextboxNumber from "./input/exampleTextboxNumber";
import ExampleButton from "./ExampleButton";
import TextboxDate from "./input/exampleTextboxDate";
import Tabs from "./exampleTabs";
import HorizontalTreeGirdTable from "./template/horizontalTreeGirdTable";
import SingleTreeGrid from "./template/singleTreeGrid";
import VerticalTwoGrid from "./template/verticalTwoGrid";
import ImagePreview from "./template/imagePreview";
import ExampleGrid from "./ExampleGrid";
import ExampleGridBig from './ExampleGridBig'
import exampleSearch from "./input/exampleSearch";
import SingleGrid from "./template/singleGrid";
import ExampleGridPivot from './ExampleGridPivot'
import exampleCombo from "./input/exampleCombo";
import exampleCheckBoxAndOther from "./input/exampleCheckBoxAndOther";
import HorizontalTwoGrid from "./template/HorizontalTwoGrid";
import Split from "./Split";
import ExampleBind from './ExampleBind';
import ExampleButtonPerform from './ExampleButtonPerform';
import ExampleTextboxPerform from './ExampleTextboxPerform';
import Upload from "./exampleUpload";
import ExampleDialogSimple from './dialog/exampleDialogSimple';
import ExampleWindow from "./ExampleWindow"
import ExampleComplexPurchanse from './ExampleComplexPurchanse'
import ExampleTextboxComplex from './ExampleTextboxComplex'
import ExampleTree from './ExampleTree'
import ExampleECharts from './ExampleECharts'
import ExampleCodeMirror from './ExampleCodeMirror'

export default [
    {
        text: "驾驶舱222",
        icon: "fa fa-database",
        value: ExampleDashboard,
        key: "./ExampleDashboard"
    },
    {
        text: "功能演示",
        icon: "fa fa-cube",
        children: [
            {text: "采购订单", value: ExampleComplexPurchanse, key: "./ExampleComplexPurchanse"},
            {text: "系统字典", icon: "fa fa-database", value: SystemDict, key: "./dictionary/SystemDict"}
        ]
    },
    {
        text: "按钮",
        icon: "fa fa-sign-in",
        children: [
            {text: "Button-常规", value: ExampleButton, key: "./exampleButtonSimple"},
            {text: "Button-属性演示", key: "./exampleButtonProperties"},
            {text: "Button-性能测试", value: ExampleButtonPerform, key: "./exampleButtonPerform.js"}
        ]
    },
    {
        text: "文本框",
        icon: "fa fa-edit",
        children: [
            {text: "Label-标签", value: Page1, key: "./exampleLabelSimple"},
            {text: "Textbox-字符串", value: TextboxString, key: "./input/exampleTextboxString"},
            {text: "Textbox-数字", value: TextboxNumber, key: "./exampleTextboxNumber"},
            {text: "Textbox-日期", value: TextboxDate, key: "./input/exampleTextboxDate"},
            {text: "Combobox-下拉选", value: exampleCombo, key: "./input/exampleCombo"},
            {text: "Textbox-查找", value: exampleSearch, key: "./input/exampleSearch"},
            {text: "Textbox-综合示例", value: ExampleTextboxComplex, key: "./exampleTextboxComplex"},
            {text: "Textbox-属性绑定", value: ExampleBind, key: "./ExampleBind.js"},
            {text: "Textbox-性能测试", value: ExampleTextboxPerform, key: "./exampleTextboxPerform.js"}
        ]
    },
    {
        text: "复选框",
        icon: "fa fa-check-square",
        children: [
            {text: "CheckBox-复选框和其他", value: exampleCheckBoxAndOther, key: "./input/exampleCheckBoxAndOther"},
            {text: "Checkbox-复选性能", key: "./exampleCheckboxPerform"}
        ]
    },
    {
        text: "布局",
        icon: "fa fa-columns",
        children: [
            {text: "Split-分割", value: Split, key: "./exampleSplit1"},
            {text: "Tabs-选项卡", value: Tabs, key: "./exampleTabs"},
            {text: "Div-自定义层", key: "./exampleDiv"}
        ]
    },
    {
        text: "数据表",
        icon: "fa fa-table",
        children: [
            {text: "DataGrid-数据表", value: ExampleGrid, key: "./exampleGridBasic"},
            {text: "DataGrid-大量数据", value: ExampleGridBig, key: "./ExampleGridBig"},
            {text: "DataGrid-透视表", value: ExampleGridPivot, key: "./ExampleGridPivot"},
        ]
    },
    {
        text: "对话框",
        icon: "fa fa-window-maximize",
        children: [
            {text: "Dialog-简单对话框", value: ExampleDialogSimple, key: "./exampleDialogSimple"},
            {text: "Dialog-简单对话框2", value: ExampleWindow, key: "./ExampleWindow"}
        ]
    },
    {
        text: "树",
        icon: "fa fa-tree",
        children: [
            {text: "Tree-树", value: ExampleTree, key: "./exampleTree"},
            {text: "TreeGrid-树形表格", value: ExampleTreeGrid, key: "./exampleTreeGrid"}
        ]
    },
    {
        text: "统计图",
        icon: "fa fa-tree",
        children: [
            {text: "ECharts 统计图", value: ExampleECharts, key: "./ExampleECharts"},
        ]
    },
    {
        text: "工具条",
        icon: "fa fa-align-justify",
        children: [
            {text: "Toolbar-工具条", key: "./exampleToolbar"},
            {text: "Toolbar-属性绑定", key: "./exampleToolbarProperties"}
        ]
    },
    {
        text: "模板",
        icon: "fa fa-align-justify",
        children: [
            {text: "单表", value: SingleGrid, key: "./template/singleGrid"},
            {text: "左右表", value: HorizontalTwoGrid, key: "./template/horizontalTwoGrid"},
            {text: "上下表", value: VerticalTwoGrid, key: "./template/verticalTwoGrid"},
            {text: "级联表", key: "./template/cascadeGrid"},
            {text: "树表", value: SingleTreeGrid, key: "./template/singleTreeGrid"},
            {text: "左树表右表", value: HorizontalTreeGirdTable, key: "./template/horizontalTreeGirdTable"},
            {text: "图片预览", value: ImagePreview, key: "./template/imagePreview"}
        ]
    },
    {
        text: "IDE",
        icon: "fa fa-file-code-o",
        children: [{text: "CodeMirror", value: ExampleCodeMirror, key: "./ExampleCodeMirror"}]
    },
    {
        text: "图片上传",
        icon: "fa fa-align-justify",
        children: [{text: "图片上传", value: Upload, key: "./exampleUpload"}]
    }
];
