import ncformUtils from "./ncform-utils";
import ValidationRule from "./validation-rule";

import controlMixin from "./vue/control-mixin";
import layoutObjectMixin from "./vue/layout-object-mixin";
import layoutArrayMixin from "./vue/layout-array-mixin";

const ncformMixins = {
  vue: {
    controlMixin,
    layoutObjectMixin,
    layoutArrayMixin
  }
}

const ncformCommon = {
  ncformUtils,
  ValidationRule,
  mixins: ncformMixins,
}

export {
  ncformUtils,
  ValidationRule,
  ncformMixins
}

export default ncformCommon
