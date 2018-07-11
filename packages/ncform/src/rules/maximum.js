import ncformCommon from "@ncform/ncform-common";

const { notEmptyVal } = ncformCommon.ncformUtils;
const { ValidationRule } = ncformCommon;

class MaximumRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "maximum";
    this.defaultErrMsg = "maximum validate error";
  }

  validateLogic(val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true;
    if (typeof val !== "number") return true;
    return val <= ruleVal;
  }
}

module.exports = MaximumRule;
