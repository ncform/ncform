import ncformCommon from "@ncform/ncform-common";

const { getValType } = ncformCommon.ncformUtils;
const { ValidationRule } = ncformCommon;

class UniqueItemsRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "uniqueItems";
    this.defaultErrMsg = "uniqueItems validate error";
  }

  validateLogic(val, ruleVal) {
    if (!ruleVal) return true;
    if (getValType(val) !== "array") return true;
    return new Set(val).size === val.length;
  }
}

module.exports = UniqueItemsRule;
