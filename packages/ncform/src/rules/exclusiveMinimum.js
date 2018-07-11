import ncformCommon from "@ncform/ncform-common";

const { notEmptyVal } = ncformCommon.ncformUtils;
const { ValidationRule } = ncformCommon;

class ExclusiveMinimumRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "ExclusiveMinimum";
    this.defaultErrMsg = "ExclusiveMinimum validate error";
  }

  validateLogic(val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true;
    if (typeof val !== "number") return true;
    return val > ruleVal;
  }
}

module.exports = ExclusiveMinimumRule;
