<template>
  <el-color-picker
    v-show="!hidden"
    v-model="modelVal"
    :disabled="disabled || readonly"
  />
</template>

<script>

  import { ncformMixins } from '@ncform-plus/ncform-common';

  const { controlMixin } = ncformMixins.vue;

  export default {

    mixins: [controlMixin],

    props: {
      modelValue: {
        type: [String],
        default: ''
      }
    },

    data() {
      return {
        // 组件特有的配置属性
        defaultConfig: {
        }
        // modelVal：请使用该值来绑定实际的组件的model
      }
    },

    computed: {
      // disabled / readonly / hidden / placeholder 你可以直接使用这些变量来控制组件的行为
    },

    methods: {
      // 你可以通过该方法在modelVal传出去之前进行加工处理，即在this.$emit('input')之前
    }

  }
</script>
