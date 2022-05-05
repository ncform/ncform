import { ncformUtils, ValidationRule } from '@ncform-plus/ncform-common'

const { notEmptyVal } = ncformUtils

class MultipleOfRule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'multipleOf'
    this.defaultErrMsg = 'multipleOf validate error'
  }

  validateLogic (val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true
    if (typeof val !== 'number' || typeof ruleVal !== 'number') return true
    return val % ruleVal === 0
  }
}

export default MultipleOfRule
