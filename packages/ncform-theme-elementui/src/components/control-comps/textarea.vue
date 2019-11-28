<template>
  <div v-show="!hidden" class="ncform-textarea">
    <pre v-if="globalStatus === 'preview'" class="ncform-textarea-preview">{{inputVal}}</pre>
    <el-input
      v-else
      v-show="!hidden"
      v-model="inputVal"
      type="textarea"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :rows="mergeConfig.rows"
      :autosize="mergeConfig.autoSize"
      @blur="onBlur"
    ></el-input>
  </div>
</template>

<style lang="scss" scoped>
  .ncform-textarea-preview {
    color: #606266;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
  }
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
