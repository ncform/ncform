import { ncformUtils, ValidationRule } from '@ncform-plus/ncform-common'

const { notEmptyVal } = ncformUtils

class MaxPropertiesRule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'maxProperties'
    this.defaultErrMsg = 'maxProperties validate error'
  }

  validateLogic (val, ruleVal) {
    if (!notEmptyVal(ruleVal)) return true
    if (
      getValType(val) !== 'object' ||
      getValType(ruleVal) !== 'number' ||
      ruleVal < 0
    ) { return true }
    return Object.keys(val).length <= ruleVal
  }
}

export default MaxPropertiesRule
