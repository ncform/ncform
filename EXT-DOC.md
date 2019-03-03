# Hwo To Custom

- Table Of Contents
  - [Custom Validation Rule](#Custom-validation-rule)
  - [Custom Form Widget](#Custom-form-widget)
  - [widgetConfig support `dx expression`](#widgetConfig-support-dx-expression)

## Custom Validation Rule

1.Install ncform-common
```
npm i @ncform/ncform-common --save
```

2.Extend ValidationRule class
```
# myCustomRule.js

import ncformCommon from '@ncform/ncform-common';

class MyCustomRule extends ncformCommon.ValidationRule {

  constructor(props) {
    super(props);
    this.name = 'myCustom'; // your rule name
    this.defaultErrMsg = 'yeah, show my custom rule message'; // you rule default error message tips
  }

  validateLogic(val, ruleVal) {
    // val: the input value for validating
    // ruleVal: rule's value. example: {maxLength: {value: 1}}, the ruleVal's value here is 1  
    // You can change the error message programmatically by setting this.errMsg. (e.g. this.errMsg = 'There are some errors')
    // You can use this.$http to make some http request (this.$http is the same as axios)
    return true;
    // or return new Promise(resolve => resolve(true))
  }

}

export MyCustomRule;
```

3.Register rule
```
Vue.use(vueNcform, { extRules: [{myCustom: MyCustomRule}] });

or 

vm.$ncformAddRule({name: 'myCustom', rule: MyCustomRule});
```

4.Use it
```
rules: {
  myCustom: 1,
}
```

## Custom form widget

1.Install ncform-common
```
npm i @ncform/ncform-common --save
```

2.Implement the control
```
# myCustomComp.vue

<template>
  <div >
    <!-- use $t to get i18n data -->
    <label>{{$t('hi', {name: mergeConfig.name})}}</label>

    <!-- disabled / readonly / placeholder / hidden : use the computed version, not the config version. defined in controlMixin -->
    <!-- modelVal: for binding value. defined in controlMixin -->
    <input 
      :disabled="disabled" 
      :readonly="readonly"
      :placeholder="placeholder" 
      v-show="!hidden"
      v-model="modelVal">
  </div>
</template>

<style></style>

<script>

import ncformCommon from '@ncform/ncform-common';

export default {
  mixins: [ncformCommon.mixins.vue.controlMixin],

  i18nData: { // i18n
    en: {
      hi: 'Hi <%= name %>'
    },
    zh_cn: {
      hi: '你好 <%= name %>'
    }
  },

  data() {
    return {
      defaultConfig: { // your config's default value（Note: use mergeConfig when use config value）
        name: 'daniel'
      }
    }
  },

  methods: {
    // you can handle the modelVal before $emit it (before this.$emit('input'))
    _processModelVal(modelVal) {
      return modelVal;
    },

    // you can use this.$http the make some http request (this.$http is the same as axios)
  }
}

</script>

```

3.Register control

```
Vue.use(vueNcform, { extComponents: {myCustomComp} });

or

vm.$ncformAddWidget({name: 'myCustomComp', widget: myCustomComp});
```

4.Use it

```
ui: {
  widget: 'my-custom-comp',
  widgetConfig: {
    msg: 'hi'
  }
}
```

## widgetConfig support `dx expression`

```
# myCustomComp.vue

<template>
  <div >
    <label>{{msg}}</label>
    ...
  </div>
</template>

<style></style>

<script>

import ncformCommon from '@ncform/ncform-common';

export default {
  mixins: [ncformCommon.mixins.vue.controlMixin],

  data() {
    return {
      defaultConfig: {
        msg: 'hello'
      }
    }
  },

  computed: {
    msg() { // add computed field to replace config field, call the powerful method: _analyzeVal
      return this._analyzeVal(this.config.msg);
    },
  }

}

</script>

# Use example

ui: {
  widget: 'my-custom-comp',
  widgetConfig: {
    msg: 'dx: {{$root.otherField}}'
  }
}

```

