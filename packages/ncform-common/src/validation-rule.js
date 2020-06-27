import axios from "axios";

class ValidationRule {
  constructor() {
    this.name = "";
    this.defaultErrMsg = "";
  }

  validate(val, ruleVal, timeStamp) {
    this.errMsg = this.defaultErrMsg;
    let options = {};

    if (ruleVal instanceof Object) {
      // 如果格式是： {value: '', errMsg: ''}
      this.errMsg = ruleVal.errMsg;
      ruleVal = ruleVal.value;
      if (ruleVal && ruleVal.options) options = ruleVal.options;
    }

    const result = this.validateLogic(val, ruleVal, options);

    return new Promise(resolve => {
      switch (
        Object.prototype.toString
          .call(result)
          .toLowerCase()
          .slice(8, -1)
      ) {
        case "promise":
          result.then(res => {
            resolve({
              result: res,
              errMsg: !res ? this.errMsg || this.defaultErrMsg : "",
              timeStamp
            });
          });
          break;
        case "boolean":
          resolve({
            result,
            errMsg: !result ? this.errMsg || this.defaultErrMsg : "",
            timeStamp
          });
          break;
        default:
          resolve({
            result: false,
            errMsg: "something wrong with validateLogic.",
            timeStamp
          });
          break;
      }
    });
  }

  validateLogic(val, ruleVal, options) {
    return false;
  }

  get $http() {
    return window.$http || window.$axios || window.axios || axios;
  }
}

export default ValidationRule;
module.exports = ValidationRule;
