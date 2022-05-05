import { ncformUtils, ValidationRule } from '@ncform-plus/ncform-common'

const { notEmptyVal, getValType } = ncformUtils

class MinItemsRule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'minItems'
    this.defaultErrMsg = 'minItems validate error'
  }

  validateLogic (val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true
    if (
      getValType(val) !== 'array' ||
      getValType(ruleVal) !== 'number' ||
      ruleVal < 0
    ) { return true }
    return val.length >= ruleVal
  }
}

export default MinItemsRule
