import ncformCommon from "@ncform/ncform-common";

const { notEmptyVal, getValType } = ncformCommon.ncformUtils;
const { ValidationRule } = ncformCommon;

class MinPropertiesRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "minProperties";
    this.defaultErrMsg = "minProperties validate error";
  }

  validateLogic(val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true;
    if (
      getValType(val) !== "object" ||
      getValType(ruleVal) !== "number" ||
      ruleVal < 0
    )
      return true;
    return Object.keys(val).length >= ruleVal;
  }
}

module.exports = MinPropertiesRule;
