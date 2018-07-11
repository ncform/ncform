import ncformCommon from "@ncform/ncform-common";

const { ValidationRule } = ncformCommon;

class TelRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "tel";
    this.defaultErrMsg = "tel validate error";
  }

  validateLogic(val, ruleVal) {
    if (!ruleVal) return true;
    if (typeof val !== "string") return true;
    return /^1[3|4|5|7|8][0-9]\d{4,8}$/.test(val);
  }
}

module.exports = TelRule;
