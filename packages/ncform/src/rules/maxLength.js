import { ncformUtils, ValidationRule } from '@ncform-plus/ncform-common'

const { notEmptyVal } = ncformUtils

class MaxLengthRule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'maxLength'
    this.defaultErrMsg = 'maxLength validate error'
  }

  validateLogic (val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true
    if (typeof val !== 'string') return true
    return val.length < parseInt(ruleVal, 10) + 1
  }
}

export default MaxLengthRule
