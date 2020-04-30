export default [
    {
        text: "驾驶舱222",
        icon: "fa fa-database",
        key: "./ExampleDashboard"
    },
    {
        text: "功能演示",
        icon: "fa fa-cube",
        children: [
            { text: "采购订单", key: "./ExampleComplexPurchanse" },
            { text: "系统字典", icon: "fa fa-database", key: "./dictionary/SystemDict" },
            { text: "权限", icon: "fa fa-bars", key: "./ExamplePromission" }
        ]
    },
    {
        text: "按钮",
        icon: "fa fa-sign-in",
        children: [
            { text: "Button-常规", key: "./ExampleButton" },
            { text: "Button-性能测试", key: "./ExampleButtonPerform" }
        ]
    },
    {
        text: "文本框",
        icon: "fa fa-edit",
        children: [
            { text: "Label-标签", key: "./Page1" },
            { text: "Textbox-字符串", key: "./input/exampleTextboxString" },
            { text: "Textbox-数字", key: "./input/exampleTextboxNumber" },
            { text: "Textbox-日期", key: "./input/exampleTextboxDate" },
            { text: "Combobox-下拉选", key: "./input/exampleCombo" },
            { text: "Textbox-查找", key: "./input/exampleSearch" },
            { text: "Textbox-综合示例", key: "./ExampleTextboxComplex" },
            { text: "Textbox-属性绑定", key: "./ExampleBind" },
            { text: "Textbox-性能测试", key: "./ExampleTextboxPerform" }
        ]
    },
    {
        text: "复选框",
        icon: "fa fa-check-square",
        children: [
            { text: "CheckBox-复选框和其他", key: "./input/exampleCheckBoxAndOther" },
            { text: "Checkbox-复选性能测试", key: "./ExampleCheckBoxAndOtherPerform" }
        ]
    },
    {
        text: "布局",
        icon: "fa fa-columns",
        children: [
            { text: "Split-分割", key: "./Split" },
            { text: "Tabs-选项卡", key: "./exampleTabs" },
            { text: "布局性能测试", key: "./exampleSplitTabsPerform" },
            // { text: "Div-自定义层", key: "./exampleDiv" }
        ]
    },
    {
        text: "数据表",
        icon: "fa fa-table",
        children: [
            { text: "DataGrid-数据表", key: "./ExampleGrid" },
            { text: "DataGrid-大量数据", key: "./ExampleGridBig" },
            { text: "DataGrid-透视表", key: "./ExampleGridPivot" },
            { text: "DataGrid-表性能测试", key: "./ExampleGridPerform" },
        ]
    },
    {
        text: "对话框",
        icon: "fa fa-window-maximize",
        children: [
            { text: "Dialog-简单对话框", key: "./ExampleWindow" },
            { text: "Dialog-对话框性能测试", key: "./ExampleWindowPerform" }
        ]
    },
    {
        text: "树",
        icon: "fa fa-tree",
        children: [
            { text: "Tree-树", key: "./exampleTree" },
            { text: "TreeGrid-树形表格", key: "./exampleTreeGrid" },
            { text: "TreeGrid-树形表格性能测试", key: "./exampleTreeGridPerform" }
        ]
    },
    {
        text: "统计图",
        icon: "fa fa-tree",
        children: [
            { text: "ECharts 统计图", key: "./ExampleECharts" },
            { text: "ECharts 统计图性能测试", key: "./ExampleEChartsPerform" }
        ]
    },
    {
        text: "工具条",
        icon: "fa fa-align-justify",
        children: [
            { text: "Toolbar-工具条", key: "./ExampleToolbar" },
            { text: "Toolbar-工具条性能测试", key: "./ExampleToolbarPerform" },
        ]
    },
    // {
    //     text: "模板",
    //     icon: "fa fa-align-justify",
    //     expand: true,
    //     children: [
    //         { text: "单表", key: "./template/singleGrid" },
    //         { text: "左右表", key: "./template/horizontalTwoGrid" },
    //         { text: "上下表", key: "./template/verticalTwoGrid" },
    //         { text: "级联表", key: "./template/cascadeGrid" },
    //         { text: "树表", key: "./template/singleTreeGrid" },
    //         { text: "左树表右表", key: "./template/horizontalTreeGirdTable" },
    //         { text: "图片预览", key: "./template/imagePreview" }
    //     ]
    // },
    {
        text: "IDE",
        icon: "fa fa-file-code-o",
        children: [{ text: "CodeMirror", key: "./ExampleCodeMirror" }]
    },
    // {
    //     text: "图片上传",
    //     icon: "fa fa-align-justify",
    //     children: [{ text: "图片上传", key: "./exampleUpload" }]
    // }
];
