import { ncformUtils } from "@ncform/ncform-common";
import _get from "lodash-es/get";
import _cloneDeep from "lodash-es/cloneDeep";
import allRules from "./rules/index";
import eventHub from "./event-hub";

class RegularValidation {
  constructor() {
    this.allRules = allRules;
  }

  validate(
    value,
    rules = {},
    { formData, idxChain = "", globalConfig = {} },
    uniqueId = ""
  ) {
    const keys = Object.keys(rules);

    const timeStamp = new Date().getTime();

    idxChain = idxChain.toString();

    // 逐一验证rules
    const nextValidate = i =>
      new Promise(resolve => {
        // 对自定义规则进行验证
        if (keys[i] === "customRule") {
          const { customRule } = rules;
          if (ncformUtils.getValType(customRule) !== "array") {
            resolve({
              result: false,
              errMsg:
                "【Error】自定义验证规则应为对象数组，每项包含script,errMsg字段。"
            });
          }

          customRule.forEach(item => {
            if (
              !ncformUtils.smartAnalyzeVal(item.script, {
                idxChain,
                data: { rootData: formData, constData: globalConfig.constants }
              })
            ) {
              resolve({
                result: false,
                errMsg: item.errMsg
              });
            }
          });

          if (i < keys.length - 1) {
            resolve(nextValidate(i + 1));
          } else {
            resolve({
              result: true,
              errMsg: "",
              linkItems: (() => {
                let items = [];
                customRule.map(item => item.linkItems).forEach(linkItems => {
                  if (linkItems) items = items.concat(linkItems);
                });
                return items;
              })()
            });
          }
        }

        // 判断是否注册了验证规则
        if (!this.allRules[keys[i]]) {
          resolve({
            result: false,
            errMsg: `不存在验证规则${keys[i]}`
          });
        }

        // 创建验证规则实例进行验证
        let dxRules;
        if (rules[keys[i]] instanceof Object) {
          dxRules = _cloneDeep(rules[keys[i]]);
          dxRules.value = ncformUtils.smartAnalyzeVal(rules[keys[i]].value, {
            idxChain,
            data: { rootData: formData, constData: globalConfig.constants }
          });
        } else {
          dxRules = ncformUtils.smartAnalyzeVal(rules[keys[i]], {
            idxChain,
            data: { rootData: formData, constData: globalConfig.constants }
          });
        }

        // rule中存在options.delay时，延迟执行（避免高频验证）
        if (
          rules[keys[i]] instanceof Object &&
          _get(rules[keys[i]], "options.delay", 0) > 0
        ) {
          const delay = _get(rules[keys[i]], "options.delay", 0);
          const delayMsg = _get(
            rules[keys[i]],
            "options.delayMsg",
            "异步验证中.."
          );

          // 触发上一个验证绑定的事件，取消上一次验证。
          eventHub.emit(uniqueId, true);

          // 延迟执行验证
          const timer = setTimeout(() => {
            new this.allRules[keys[i]]()
              .validate(value, dxRules, timeStamp)
              .then(result => {
                if (i < keys.length - 1 && result.result === true) {
                  resolve(nextValidate(i + 1));
                } else {
                  resolve(result);
                }
              });
          }, delay);

          // 监听事件，下一个验证进入时触发该事件，取消本次验证，并且告知正在异步验证。
          eventHub.on(uniqueId, () => {
            clearTimeout(timer);
            resolve({ result: false, errMsg: delayMsg, timeStamp });
          });
        } else {
          // 不延迟
          new this.allRules[keys[i]]()
            .validate(value, dxRules, timeStamp)
            .then(result => {
              if (i < keys.length - 1 && result.result === true) {
                resolve(nextValidate(i + 1));
              } else {
                resolve(result);
              }
            });
        }
      });

    return new Promise(resolve => {
      if (keys.length === 0) {
        // 不存在验证规则则直接通过
        resolve({
          result: true,
          errMst: ""
        });
      } else if (
        (keys.indexOf("required") === -1 ||
          ncformUtils.smartAnalyzeVal(rules.required, {
            idxChain,
            data: { rootData: formData, constData: globalConfig.constants }
          }) === false ||
          ncformUtils.smartAnalyzeVal(
            _get(rules, "required.value"), {
              idxChain,
              data: { rootData: formData, constData: globalConfig.constants }
            }) === false
        ) &&
        !ncformUtils.notEmptyVal(value)
      ) {
        // 如果不存在required验证条件，且value为空时，直接验证通过
        resolve({
          result: true,
          errMsg: ""
        });
      } else {
        // 逐一验证
        resolve(nextValidate(0));
      }
    });
  }

  registerRule(obj) {
    if (Object.keys(obj).indexOf("customRule") !== -1) {
      delete obj.customRule;
      throw new Error(
        "customRule 注册失败。 customRule为【自定义规则】专用规则名，请更换。"
      );
    }
    this.allRules = Object.assign({}, this.allRules, obj);
  }
}

module.exports = RegularValidation;
