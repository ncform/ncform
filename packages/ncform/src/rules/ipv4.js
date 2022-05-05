import { ValidationRule } from '@ncform-plus/ncform-common'

class Ipv4Rule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'ipv4'
    this.defaultErrMsg = 'ipv4 validate error'
  }

  validateLogic (val, ruleVal) {
    if (!ruleVal) return true
    if (typeof val !== 'string') return true
    return /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/.test(
      val
    )
  }
}

export default Ipv4Rule
