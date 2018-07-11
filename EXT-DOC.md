# Extend

## Extend validation rules

1.Install ncform-common
```
npm i ncform-common --save
```

2.Extend ValidationRule class
```
# myCustomRule.js

import ncformCommon from 'ncform-common';

class MyCustomRule extends ncformCommon.ValidationRule {

  constructor(props) {
    super(props);
    this.name = 'myCustom'; // your rule name
    this.defaultErrMsg = 'yeah, show my custom rule message'; // you rule default error message tips
  }

  validateLogic(val, ruleVal) {
    // val: the input value for validating
    // ruleVal: rule's value. example: {maxLength: {value: 1}}, the ruleVal's value here is 1  
    return true;
  }

}

export MyCustomRule;
```

3.Register rule
```
Vue.use(vueNcform, { extRules: [{myCustom: MyCustomRule}] });
```

4.Use it
```
rules: {
  myCustom: 1,
}
```


## Extend form controls

1.Install ncform-common
```
npm i ncform-common --save
```

2.Implement the control
```
# myCustomComp.vue

<template>
  <div >
    <label>{{mergeConfig.msg}}</label>

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

import ncformCommon from 'ncform-common';

export default {
  mixins: [ncformCommon.mixins.vue.controlMixin],

  data() {
    return {
      defaultConfig: { // your config's default value（Note: use mergeConfig when use config value）
        msg: 'hello'
      }
    }
  },

  methods: {
    // you can handle the modelVal before $emit it (before this.$emit('input'))
    _processModelVal(modelVal) {
      return modelVal;
    }
  }
}

</script>

```

3.Register control

```
Vue.use(vueNcform, { extComponents: {myCustomComp} });
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

## Config support `dx expression`

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

import ncformCommon from 'ncform-common';

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

