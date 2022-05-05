import { ncformUtils, ValidationRule} from '@ncform-plus/ncform-common'

const { notEmptyVal, getValType } = ncformUtils

class PatternRule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'pattern'
    this.defaultErrMsg = 'pattern validate error'
  }

  validateLogic (val, ruleVal) {
    if (!notEmptyVal(ruleVal) && getValType(ruleVal) !== 'regexp') return true

    if (getValType(ruleVal) === 'string') ruleVal = new RegExp(ruleVal)

    return ruleVal.test(val)
  }
}

export default PatternRule
