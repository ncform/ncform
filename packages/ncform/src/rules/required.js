import { ncformUtils, ValidationRule } from '@ncform-plus/ncform-common'

const { notEmptyVal } = ncformUtils

class RequiredRule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'required'
    this.defaultErrMsg = 'is required'
  }

  validateLogic (val, ruleVal) {
    if (!ruleVal) return true
    return notEmptyVal(val)
  }
}

export default RequiredRule
