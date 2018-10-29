import _map from "lodash-es/map";
import _kebabCase from "lodash-es/kebabCase";
import ncform from "./ncform.vue";
import RegularValidation from "../../regular-validation";

import defControls from "./control-comps";
import defLayouts from "./layout-comps";

module.exports = {
  /**
   * options.extComponents:
   * 格式：
   * {
   *   ncform-***': Vue component object,
   * }
   * options.extRules
   * 格式：
   * [
   *   { 'rule name': rule class }
   * ]
   */
  install: (Vue, options = { extComponents: {}, extRules: [] }) => {
    window.__$ncform = {}; // 属于ncform的全局变量

    window.__$ncform.__ncFormsGlobalList = {};

    window.__$ncform.__ncformRegularValidation = new RegularValidation();

    // 注册组件
    _map(
      Object.assign(defLayouts, defControls, options.extComponents || {}),
      (compItem, name) => Vue.component(`ncform-${_kebabCase(name)}`, compItem)
    );

    // 注册验证规则
    (options.extRules || []).forEach(ruleItem =>
      window.__$ncform.__ncformRegularValidation.registerRule(ruleItem)
    );

    Vue.prototype.$ncformValidate = function(formName) {
      formName = formName || "_ncformDefaultName";
      const vm = window.__$ncform.__ncFormsGlobalList[formName];

      if (!vm) {
        return Promise.resolve(false);
      }

      return vm.ncformValidate();
    };

    Vue.prototype.$ncformReset = function(formName) {
      formName = formName || "_ncformDefaultName";
      const vm = window.__$ncform.__ncFormsGlobalList[formName];

      if (!vm) {
        return;
      }

      return vm.reset();
    };

    Vue.component("ncform", ncform);
  }
};
