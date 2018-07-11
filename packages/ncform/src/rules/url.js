import ncformCommon from "@ncform/ncform-common";

const { getValType } = ncformCommon.ncformUtils;
const { ValidationRule } = ncformCommon;

class UrlRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = "url";
    this.defaultErrMsg = "it's not url";
  }

  validateLogic(val) {
    if (getValType(val) !== "string") return true;
    return /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/)*[\w-]+(\.[\w-]+)*\/?(\?([\w\-.,@?^=%&:/~+#]*)+)?/.test(
      val
    );
  }
}

module.exports = UrlRule;
