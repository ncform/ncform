/**
 * Fixtures added here.
 * Please make sure the value name is the same with json file name.
 */
const fixtures = [
  {
    value: "basic",
    label: {
      cn: "基础使用",
      en: "Basic"
    }
  },
  {
    value: "basic-rich-display",
    label: {
      cn: "基础使用-丰富显示",
      en: "Basic-Rich Display"
    }
  },
  {
    value: "basic-multi-columns",
    label: {
      cn: "基础使用-多列布局",
      en: "Basic-Multi Columns"
    }
  },
  {
    value: "basic-media-preview",
    label: {
      cn: "基础使用-媒体预览",
      en: "Basic-Media Preview"
    }
  },
  {
    value: "basic-label-left",
    label: {
      cn: "基础使用-标签居左",
      en: "Basic-Label Left"
    }
  },
  {
    value: "basic-verification-rule",
    label: {
      cn: "基础使用-校验规则",
      en: "Basic-Verification Rule"
    }
  },
  {
    value: "basic-array-type",
    label: {
      cn: "基础使用-数组类型",
      en: "Basic-Array Type"
    }
  },
  {
    value: "basic-table-array",
    label: {
      cn: "基础使用-表格数组",
      en: "Basic-Table Array"
    }
  },
  {
    value: "basic-tabs-array",
    label: {
      cn: "基础使用-标签数组",
      en: "Basic-Tabs Array"
    }
  },
  {
    value: "basic-separator",
    label: {
      cn: "基础使用-分隔栏",
      en: "Basic-Separator"
    }
  },
  {
    value: "adv-control-interaction",
    label: {
      cn: "高级玩法-控件交互 dx表达式",
      en: "Adv-Control Interaction [dx expression]"
    }
  },
  {
    value: "adv-array-item-interaction",
    label: {
      cn: "高级玩法-数组项交互 dx表达式",
      en: "Adv-Array Item Interaction [dx expression]"
    }
  },
  {
    value: "adv-selector-interaction",
    label: {
      cn: "高级玩法-下拉框值交互 dx表达式",
      en: "Adv-Selector Interaction [dx expression]"
    }
  },
  {
    value: "adv-check-association",
    label: {
      cn: "高级玩法-校验关联 dx表达式",
      en: "Adv-Check Association [dx expression]"
    }
  },
  {
    value: "adv-custom-rule",
    label: {
      cn: "高级玩法-自定义校验规则 dx表达式",
      en: "Adv-Custom Rule [dx expression]"
    }
  },
  {
    value: "adv-global-constant",
    label: {
      cn: "高级玩法-全局常量 dx表达式",
      en: "Adv-Global Constant [dx expression]"
    }
  },
  {
    value: "adv-follow",
    label: {
      cn: "高级玩法-跟随 dx表达式",
      en: "Adv-Follow [dx expression]"
    }
  },
  {
    value: "adv-temp-value",
    label: {
      cn: "高级玩法-临时变量 dx表达式",
      en: "Adv-Temp Value [dx expression]"
    }
  }
];

fixtures.map(item => {
  item.schema = require('./' + item.value + '.json');
});

export default fixtures;
