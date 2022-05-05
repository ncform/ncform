import { ValidationRule } from '@ncform-plus/ncform-common'

class HostnameRule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'hostname'
    this.defaultErrMsg = 'hostname validate error'
  }

  validateLogic (val, ruleVal) {
    if (!ruleVal) return true
    if (typeof val !== 'string') return true
    return /^http(s)?:\/\/(.*?)\//.test(val)
  }
}

export default HostnameRule
