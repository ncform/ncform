<template>
  <div class="ncform-input-number">
    <el-input-number
      v-show="!hidden"
      v-model="modelVal"
      :disabled="disabled || readonly"
      :min="mergeConfig.min"
      :max="mergeConfig.max"
      :step="mergeConfig.step"
      :size="mergeConfig.size"
    />
  </div>
</template>

<script>

  import { ncformMixins } from '@ncform-plus/ncform-common';

  const { controlMixin } = ncformMixins.vue;

  export default {

    mixins: [controlMixin],

    props: {
      modelValue: {
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
