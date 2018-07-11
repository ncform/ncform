import ncformCommon from "@ncform/ncform-common";

const { notEmptyVal } = ncformCommon.ncformUtils;
const { ValidationRule } = ncformCommon;

class RequiredRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "required";
    this.defaultErrMsg = "is required";
  }

  validateLogic(val, ruleVal) {
    if (!ruleVal) return true;
    return notEmptyVal(val);
  }
}

module.exports = RequiredRule;
