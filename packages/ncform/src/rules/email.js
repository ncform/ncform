import { ValidationRule } from "@ncform/ncform-common";

class EmailRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "email";
    this.defaultErrMsg = "email validate error";
  }

  validateLogic(val, ruleVal) {
    if (!ruleVal) return true;
    if (typeof val !== "string") return true;
    return /^[A-Za-z0-9]+([._\\-]*[A-Za-z0-9])*@([A-Za-z0-9]+[-A-Za-z0-9]*[A-Za-z0-9]+.){1,63}[A-Za-z0-9]+$/.test(
      val
    );
  }
}

module.exports = EmailRule;
