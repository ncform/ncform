import ncformCommon from "@ncform/ncform-common";

const { getValType } = ncformCommon.ncformUtils;
const { ValidationRule } = ncformCommon;

class NumberRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "number";
    this.defaultErrMsg = "it's not a number.";
  }

  validateLogic(val, ruleVal) {
    if (!ruleVal) return true;
    switch (getValType(val)) {
      case "number":
        return !Number.isNaN(val) && Number.isFinite(val);
      case "string":
        return /^(-)?\d+(\.\d+)?$/.test(val);
      default:
        return false;
    }
  }
}

module.exports = NumberRule;
