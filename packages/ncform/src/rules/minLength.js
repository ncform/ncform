import { ncformUtils, ValidationRule } from '@ncform-plus/ncform-common'

const { notEmptyVal } = ncformUtils

class MinLengthRule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'minLength'
    this.defaultErrMsg = 'minLength validate error'
  }

  validateLogic (val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true
    if (typeof val !== 'string') return true
    return val.length + 1 > parseInt(ruleVal, 10)
  }
}

export default MinLengthRule
