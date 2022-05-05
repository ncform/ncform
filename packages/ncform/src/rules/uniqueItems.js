import { ncformUtils, ValidationRule } from '@ncform-plus/ncform-common'

const { getValType } = ncformUtils

class UniqueItemsRule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'uniqueItems'
    this.defaultErrMsg = 'uniqueItems validate error'
  }

  validateLogic (val, ruleVal) {
    if (!ruleVal) return true
    if (getValType(val) !== 'array') return true
    return new Set(val).size === val.length
  }
}

export default UniqueItemsRule
