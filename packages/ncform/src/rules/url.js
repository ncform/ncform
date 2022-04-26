import { ncformUtils, ValidationRule } from '@ncform-plus/ncform-common'

const { getValType } = ncformUtils

class UrlRule extends ValidationRule {
  constructor (props) {
    super(props)
    this.name = 'url'
    this.defaultErrMsg = "it's not url"
  }

  validateLogic (val) {
    if (getValType(val) !== 'string') return true
    return /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/)*[\w-]+(\.[\w-]+)*\/?(\?([\w\-.,@?^=%&:/~+#]*)+)?/.test(
      val
    )
  }
}

export default UrlRule
