<template>
  <input
    v-show="!hidden"
    v-model="modelVal"
    :disabled="disabled"
    :readonly="readonly"
    :placeholder="placeholder"
    :type="mergeConfig.type"
    class="form-control"
  >
</template>

<script>
import { ncformMixins } from '@ncform-plus/ncform-common'

const { controlMixin } = ncformMixins.vue

export default {

  mixins: [controlMixin],

  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },

  data () {
    return {
      // 组件特有的配置属性
      defaultConfig: {
        type: 'text'
      }
      // mergeConfig: 请使用该值去绑定你的组件的属性，它包含了defaultConfig data和config props的值
      // modelVal：请使用该值来绑定实际的组件的model
    }
  },

  computed: {
    // disabled / readonly / hidden / placeholder 你可以直接使用这些变量来控制组件的行为
  },

  methods: {
    // 你可以通过该方法在modelVal传出去之前进行加工处理，即在this.$emit('input')之前
    _processModelVal (modelVal) {
      let val = modelVal
      switch (this.mergeConfig.type) {
        case 'number':
          val = parseFloat(val)
          val = isNaN(val) ? '' : val
          break
        case 'integer':
          val = parseInt(val)
          val = isNaN(val) ? '' : val
          break
        default:
          break
      }
      return val
    }
  }

}
</script>
