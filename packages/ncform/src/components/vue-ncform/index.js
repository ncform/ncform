import { createApp } from 'vue'
import _map from 'lodash-es/map'
import _kebabCase from 'lodash-es/kebabCase'
import VueScrollTo from 'vue-scrollto'
import ncform from './ncform.vue'
import RegularValidation from '../../regular-validation'

import defControls from './control-comps'
import defLayouts from './layout-comps'

function ncformValidate (formName) {
  formName = formName || '_ncformDefaultName'
  const vm = window.__$ncform.__ncFormsGlobalList[formName]

  if (!vm) {
    return Promise.resolve(false)
  }

  return vm.ncformValidate().then(data => {
    const config = vm.dataFormSchema.globalConfig.scrollToFailField
    if (!data.result && config.enabled) {
      vm.$nextTick(() => {
        const firstErrorElem = Array.prototype.slice.call(vm.$el.querySelectorAll('.invalid-feedback')).find(elem => elem.style.display !== 'none')
        if (firstErrorElem) {
          VueScrollTo.scrollTo(firstErrorElem, {
            container: config.container,
            duration: config.duration,
            offset: config.offset
          })
        }
      })
    }
    return data
  })
}

function ncformReset (formName) {
  formName = formName || '_ncformDefaultName'
  const vm = window.__$ncform.__ncFormsGlobalList[formName]

  if (!vm) {
    return
  }

  return vm.reset()
}

function ncformAddWidget ({ name, widget }) {
  const app = createApp({})
  window.__$ncform.__ncformComponents[_kebabCase(name)] = 1
  app.component(`ncform-${_kebabCase(name)}`, widget)
}

function ncformAddRule ({ name, rule }) {
  const ruleItem = {}
  ruleItem[name] = rule
  window.__$ncform.__ncformRegularValidation.registerRule(ruleItem)
}

function ncformAllRules () {
  return Object.keys(window.__$ncform.__ncformRegularValidation.allRules)
}

function ncformAllWidgets () {
  return Object.keys(window.__$ncform.__ncformComponents)
}

function ncformGetValue (formName, { ignoreHiddenField = false } = {}) {
  formName = formName || '_ncformDefaultName'
  const vm = window.__$ncform.__ncFormsGlobalList[formName]

  if (!vm) {
    return {}
  }

  return vm.getValue(ignoreHiddenField)
}

export const useNcform = () => {
  return {
    ncformValidate,
    ncformReset,
    ncformAddWidget,
    ncformAddRule,
    ncformAllRules,
    ncformAllWidgets,
    ncformGetValue
  }
}

export default {
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
  install: (app, options = { extComponents: {}, extRules: [], lang: '' }) => {
    window.__$ncform = {} // 属于ncform的全局变量

    window.__$ncform.__ncformComponents = {}

    window.__$ncform.__ncFormsGlobalList = {}

    window.__$ncform.__ncformRegularValidation = new RegularValidation()

    window.__$ncform.lang = (options.lang || window.__$ncform.lang || navigator.browserLanguage || navigator.language).replace(/-/, '_').toLowerCase()

    // 注册组件
    _map(
      Object.assign(defLayouts, defControls, options.extComponents || {}),
      (compItem, name) => { window.__$ncform.__ncformComponents[_kebabCase(name)] = 1; app.component(`ncform-${_kebabCase(name)}`, compItem) }
    );

    // 注册验证规则
    (options.extRules || []).forEach(ruleItem =>
      window.__$ncform.__ncformRegularValidation.registerRule(ruleItem)
    )

    app.config.globalProperties.$ncformValidate = ncformValidate
    app.config.globalProperties.$ncformReset = ncformReset
    app.config.globalProperties.$ncformAddWidget = ncformAddWidget
    app.config.globalProperties.$ncformAddRule = ncformAddRule
    app.config.globalProperties.$ncformAllRules = ncformAllRules
    app.config.globalProperties.$ncformAllWidgets = ncformAllWidgets
    app.config.globalProperties.$ncformGetValue = ncformGetValue

    app.component('ncform', ncform)
  }
}
