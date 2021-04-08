<template>
    <div class="ncform-input-number">
        <el-input-number
          :disabled="disabled || readonly"
          v-show="!hidden"
          v-model="modelVal"
          :min="mergeConfig.min"
          :max="mergeConfig.max"
          :step="mergeConfig.step"
          :size="mergeConfig.size"
        ></el-input-number>
    </div>
</template>

<style lang="scss">
  .h-layout {
    .ncform-input-number {
      &.__ncform-control {
        clear: none;
      }
    }
  }

  .v-layout {
    .ncform-input-number {
      &.__ncform-control {
        clear: both;
      }
    }
  }
</style>

<script>

  import ncformCommon from '@ncform/ncform-common';

  const controlMixin = ncformCommon.mixins.vue.controlMixin;

  export default {

    mixins: [controlMixin],

    props: {
      value: {
        type: Number,
        default: 0
      }
    },

    data() {
      return {
        // 组件特有的配置属性
        defaultConfig: {
          min:0,
          max: Infinity,
          step: 1,
          size: ''
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
