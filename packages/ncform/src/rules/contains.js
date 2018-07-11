import { ncformUtils, ValidationRule } from "@ncform/ncform-common";

const { notEmptyVal, getValType } = ncformUtils;

class ContainsRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "contains";
    this.defaultErrMsg = "contains validate error";
  }

  validateLogic(val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true;
    if (getValType(val) !== "array") return true;
    return val.indexOf(ruleVal) !== -1;
  }
}

module.exports = ContainsRule;
