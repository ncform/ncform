import ncformCommon from "@ncform/ncform-common";

const { notEmptyVal, getValType } = ncformCommon.ncformUtils;
const { ValidationRule } = ncformCommon;

class MaxItemsRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "maxItems";
    this.defaultErrMsg = "maxItems validate error";
  }

  validateLogic(val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true;
    if (
      getValType(val) !== "array" ||
      getValType(ruleVal) !== "number" ||
      ruleVal < 0
    )
      return true;
    return val.length <= ruleVal;
  }
}

module.exports = MaxItemsRule;
