import { ncformUtils, ValidationRule } from "@ncform/ncform-common";

const { notEmptyVal } = ncformUtils;

class ExclusiveMaximumRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "ExclusiveMaximum";
    this.defaultErrMsg = "ExclusiveMaximum validate error";
  }

  validateLogic(val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true;
    if (typeof val !== "number") return true;
    return val < ruleVal;
  }
}

module.exports = ExclusiveMaximumRule;
