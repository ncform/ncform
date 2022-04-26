import * as ncformUtils from "./ncform-utils";
import ValidationRule from "./validation-rule";

import controlMixin from "./mixins/vue/control-mixin";
import layoutObjectMixin from "./mixins/vue/layout-object-mixin";
import layoutArrayMixin from "./mixins/vue/layout-array-mixin";

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
