import ncformCommon from "@ncform/ncform-common";

const { ValidationRule } = ncformCommon;

class Ipv4Rule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "ipv4";
    this.defaultErrMsg = "ipv4 validate error";
  }

  validateLogic(val, ruleVal) {
    if (!ruleVal) return true;
    if (typeof val !== "string") return true;
    return /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(
      val
    );
  }
}

module.exports = Ipv4Rule;
