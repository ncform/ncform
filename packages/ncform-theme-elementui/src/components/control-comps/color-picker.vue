<template>
  <div v-show="!hidden" class="ncform-color-picker">
    <div
      v-if="globalStatus === 'preview'"
      class="ncform-color-picker-preview"
      :style="{ borderColor: modelVal }"
    >
      {{modelVal}}
    </div>
    <el-color-picker
      v-else
      v-model="modelVal"
      :disabled="disabled || readonly"
    ></el-color-picker>
  </div>
</template>

<style lang="scss" scoped>
  .ncform-color-picker-preview {
    margin: 8px 0;
    padding: 4px 8px;
    font-size: 14px;
    color: #606266;
    border-left: solid 2px;
  }
</style>

<script>

  import ncformCommon from '@ncform/ncform-common';

  const controlMixin = ncformCommon.mixins.vue.controlMixin;

  export default {

    mixins: [controlMixin],

    props: {
      value: {
        type: [String]
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
