<template>
  <el-input
    :disabled="disabled"
    :readonly="readonly"
    v-show="!hidden"
    :placeholder="placeholder"
    type="textarea"
    v-model="modelVal"
    :rows="mergeConfig.rows"
    :autosize="mergeConfig.autoSize"
  ></el-input>
</template>

<style lang="scss" scoped>
</style>

<script>

  import ncformCommon from '@ncform/ncform-common';

  const controlMixin = ncformCommon.mixins.vue.controlMixin;

  export default {

    mixins: [controlMixin],

    props: {
      value: {
        type: String,
        default: ''
      }
    },

    data() {
      return {
        // 组件特有的配置属性
        defaultConfig: {
          rows: 2,
          autoSize: false
        }
        // modelVal：请使用该值来绑定实际的组件的model
      }
    },

    computed: {
      // disabled / readonly / hidden / placeholder 你可以直接使用这些变量来控制组件的行为
    },

    methods: {

    }

  }
</script>
