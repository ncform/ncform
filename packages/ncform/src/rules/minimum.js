import ncformCommon from "@ncform/ncform-common";

const { notEmptyVal } = ncformCommon.ncformUtils;
const { ValidationRule } = ncformCommon;

class MinimumRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "minimum";
    this.defaultErrMsg = "minimum validate error";
  }

  validateLogic(val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true;
    if (typeof val !== "number") return true;
    return val >= ruleVal;
  }
}

module.exports = MinimumRule;
