import { ncformUtils, ValidationRule } from '@ncform-plus/ncform-common'

const { notEmptyVal } = ncformUtils

class MinimumRule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'minimum'
    this.defaultErrMsg = 'minimum validate error'
  }

  validateLogic (val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true
    if (typeof val !== 'number') return true
    return val >= ruleVal
  }
}

export default MinimumRule
