<template>
  <el-input
    :disabled="disabled"
    :readonly="readonly"
    v-show="!hidden"
    :placeholder="placeholder"
    type="textarea"
    v-model="inputVal"
    :rows="mergeConfig.rows"
    :autosize="mergeConfig.autoSize"
    @blur="onBlur"
  ></el-input>
</template>

<style lang="scss" scoped>
</style>

<script>

  import ncformCommon from '@ncform/ncform-common';

  const controlMixin = ncformCommon.mixins.vue.controlMixin;

  export default {

    mixins: [controlMixin],

    created() {
      this.$data.inputVal = this.$data.modelVal;
    },

    props: {
      value: {
        type: String,
        default: '',
        updateOn: 'change', // change or blur
      }
    },

    data() {
      return {
        inputVal: '',
        // 组件特有的配置属性
        defaultConfig: {
          rows: 2,
          autoSize: false
        }
        // modelVal：请使用该值来绑定实际的组件的model
      }
    },

    watch: {
      inputVal(newVal, oldVal) {
        if ((!newVal && !oldVal) || this.mergeConfig.updateOn === 'blur') return;
        this.$data.modelVal = newVal;
      }
    },

    computed: {
      // disabled / readonly / hidden / placeholder 你可以直接使用这些变量来控制组件的行为
    },

    methods: {
      onBlur() {
        if (this.mergeConfig.updateOn === 'blur') {
          this.$data.modelVal = this.$data.inputVal;
        }
      },
    }

  }
</script>
