import ncformCommon from "@ncform/ncform-common";

const { notEmptyVal } = ncformCommon.ncformUtils;
const { ValidationRule } = ncformCommon;

class MinLengthRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "minLength";
    this.defaultErrMsg = "minLength validate error";
  }

  validateLogic(val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true;
    if (typeof val !== "string") return true;
    return val.length + 1 > parseInt(ruleVal, 10);
  }
}

module.exports = MinLengthRule;
