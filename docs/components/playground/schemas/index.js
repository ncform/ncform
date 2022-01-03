/**
 * Schemas added here.
 */

import basicSchema from './basic.json';
import basicRichDisplaySchema from './basic-rich-display.json';
import basicMultiColumnsSchema from './basic-multi-columns.json';
import basicMediaPreviewSchema from './basic-media-preview.json';
import basicLabelLeftSchema from './basic-label-left.json';
import basicVerificationRuleSchema from './basic-verification-rule.json';
import basicArrayTypeSchema from './basic-array-type.json';
import basicTableArraySchema from './basic-table-array.json';
import basicTabsArraySchema from './basic-tabs-array.json';
import basicSeparatorSchema from './basic-separator.json';
import advControlInteractionSchema from './adv-control-interaction.json';
import arrayItemInteractionSchema from './adv-array-item-interaction.json';
import advSelectorInteractionSchema from './adv-selector-interaction.json';
import advCheckAssociationSchema from './adv-check-association.json';
import advCustomRuleSchema from './adv-custom-rule.json';
import advGlobalConstantSchema from './adv-global-constant.json';
import advFollowSchema from './adv-follow.json';
import advTempValueSchema from './adv-temp-value.json';
import extArrayImportSchema from './ext-array-import.json';

const schemas = [
  {
    value: "basic",
    label: {
      cn: "基础使用",
      en: "Basic"
    },
    schema: basicSchema
  },
  {
    value: "basic-rich-display",
    label: {
      cn: "基础使用-丰富显示",
      en: "Basic-Rich Display"
    },
    schema: basicRichDisplaySchema
  },
  {
    value: "basic-multi-columns",
    label: {
      cn: "基础使用-多列布局",
      en: "Basic-Multi Columns"
    },
    schema: basicMultiColumnsSchema
  },
  {
    value: "basic-media-preview",
    label: {
      cn: "基础使用-媒体预览",
      en: "Basic-Media Preview"
    },
    schema: basicMediaPreviewSchema
  },
  {
    value: "basic-label-left",
    label: {
      cn: "基础使用-标签居左",
      en: "Basic-Label Left"
    },
    schema: basicLabelLeftSchema
  },
  {
    value: "basic-verification-rule",
    label: {
      cn: "基础使用-校验规则",
      en: "Basic-Verification Rule"
    },
    schema: basicVerificationRuleSchema
  },
  {
    value: "basic-array-type",
    label: {
      cn: "基础使用-数组类型",
      en: "Basic-Array Type"
    },
    schema: basicArrayTypeSchema
  },
  {
    value: "basic-table-array",
    label: {
      cn: "基础使用-表格数组",
      en: "Basic-Table Array"
    },
    schema: basicTableArraySchema
  },
  {
    value: "basic-tabs-array",
    label: {
      cn: "基础使用-标签数组",
      en: "Basic-Tabs Array"
    },
    schema: basicTabsArraySchema
  },
  {
    value: "basic-separator",
    label: {
      cn: "基础使用-分隔栏",
      en: "Basic-Separator"
    },
    schema: basicSeparatorSchema
  },
  {
    value: "adv-control-interaction",
    label: {
      cn: "高级玩法-控件交互 dx表达式",
      en: "Adv-Control Interaction [dx expression]"
    },
    schema: advControlInteractionSchema
  },
  {
    value: "adv-array-item-interaction",
    label: {
      cn: "高级玩法-数组项交互 dx表达式",
      en: "Adv-Array Item Interaction [dx expression]"
    },
    schema: arrayItemInteractionSchema
  },
  {
    value: "adv-selector-interaction",
    label: {
      cn: "高级玩法-下拉框值交互 dx表达式",
      en: "Adv-Selector Interaction [dx expression]"
    },
    schema: advSelectorInteractionSchema
  },
  {
    value: "adv-check-association",
    label: {
      cn: "高级玩法-校验关联 dx表达式",
      en: "Adv-Check Association [dx expression]"
    },
    schema: advCheckAssociationSchema
  },
  {
    value: "adv-custom-rule",
    label: {
      cn: "高级玩法-自定义校验规则 dx表达式",
      en: "Adv-Custom Rule [dx expression]"
    },
    schema: advCustomRuleSchema
  },
  {
    value: "adv-global-constant",
    label: {
      cn: "高级玩法-全局常量 dx表达式",
      en: "Adv-Global Constant [dx expression]"
    },
    schema: advGlobalConstantSchema
  },
  {
    value: "adv-follow",
    label: {
      cn: "高级玩法-跟随 dx表达式",
      en: "Adv-Follow [dx expression]"
    },
    schema: advFollowSchema
  },
  {
    value: "adv-temp-value",
    label: {
      cn: "高级玩法-临时变量 dx表达式",
      en: "Adv-Temp Value [dx expression]"
    },
    schema: advTempValueSchema
  },
  {
    value: "ext-array-import",
    label: {
      cn: "外部扩展-数组导入",
      en: "Ext-Array Import"
    },
    schema: extArrayImportSchema,
    desc: {
      cn: "该示例使用扩展组件nc-array-import(非标准组件): https://github.com/ncform/nc-array-import",
      en: "This example uses the extension component nc-array-import (non-standard component): https://github.com/ncform/nc-array-import"
    }
  }
];

export default schemas;
