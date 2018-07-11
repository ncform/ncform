import { ValidationRule } from "@ncform/ncform-common";

class DateTimeRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "dateTime";
    this.defaultErrMsg = "dateTime validate error";
  }

  validateLogic(val, ruleVal) {
    if (!ruleVal || typeof val !== "string") return true;
    try {
      return !Number.isNaN(+new Date(parseInt(val, 10)));
    } catch (err) {
      return true;
    }
  }
}

module.exports = DateTimeRule;
