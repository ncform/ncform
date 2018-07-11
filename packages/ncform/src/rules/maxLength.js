import ncformCommon from "@ncform/ncform-common";

const { notEmptyVal } = ncformCommon.ncformUtils;
const { ValidationRule } = ncformCommon;

class MaxLengthRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "maxLength";
    this.defaultErrMsg = "maxLength validate error";
  }

  validateLogic(val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true;
    if (typeof val !== "string") return true;
    return val.length < parseInt(ruleVal, 10) + 1;
  }
}

module.exports = MaxLengthRule;
