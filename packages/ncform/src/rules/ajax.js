import { ValidationRule } from "@ncform/ncform-common";
import _merge from 'lodash-es/merge';
import _get from 'lodash-es/get';

class AjaxRule extends ValidationRule {
  constructor(props) {
    super(props);
    this.name = 'ajax';
    this.defaultErrMsg = 'Ajax validation failed';
  }

  validateLogic(val, ruleVal) {
    const defConfig = {
      // default value
      remoteUrl: '',
      method: 'get',
      paramName: 'name',
      otherParams: {},
      resField: ''
    };

    let options = _merge({ params: {} }, defConfig, ruleVal);

    options.params[options.paramName] = val;
    Object.assign(options.params, options.otherParams);

    return this.$http({
      url: options.remoteUrl,
      method: options.method,
      data: options.method === 'post' ? options.params : {},
      params: options.method === 'post' ? {} : options.params
    }).then(res => {
      let data = res.data;
      return options.resField ? _get(data, options.resField) : data;
    });
  }
}

export default AjaxRule;

