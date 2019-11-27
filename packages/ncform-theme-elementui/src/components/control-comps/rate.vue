<template>
  <el-rate class="ncform-rate"
    :disabled="disabled || readonly"
    :placeholder="placeholder"
    v-show="!hidden"
    v-model="modelVal"
    :max="mergeConfig.max"
    :allow-half="mergeConfig.allowHalf"
    :low-threshold="mergeConfig.lowThreshold"
    :high-threshold="mergeConfig.highThreshold"
    :colors="mergeConfig.colors"
    :void-color="mergeConfig.voidColor"
    :disabled-void-color="mergeConfig.disabledVoidColor"
    :icon-classes="mergeConfig.iconClasses"
    :void-icon-class="mergeConfig.voidIconClass"
    :disabled-void-icon-class="mergeConfig.disabledVoidIconClass"
    :show-text="mergeConfig.showText"
    :show-score="mergeConfig.showScore"
    :text-color="mergeConfig.textColor"
    :texts="mergeConfig.texts"
  ></el-rate>
</template>

<style lang="scss">
  .h-layout {
    .ncform-rate {
      &.__ncform-control {
        clear: none;
        line-height: 50px !important;
      }
    }
  }

  .v-layout {
    .ncform-rate {
      &.__ncform-control {
        clear: both;
        line-height: unset !important;
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
          max: 5, // 最大分值
          allowHalf: false, // 是否允许半选
          lowThreshold: 2, // 低分和中等分数的界限值，值本身被划分在低分中
          highThreshold: 4, // 高分和中等分数的界限值，值本身被划分在高分中
          colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'], // icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色
          voidColor: '#C6D1DE', // 未选中 icon 的颜色
          disabledVoidColor: '#EFF2F7', // 只读时未选中 icon 的颜色
          iconClasses: ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'], // icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名
          voidIconClass: 'el-icon-star-off', // 未选中 icon 的类名
          disabledVoidIconClass: 'el-icon-star-on', // 只读时未选中 icon 的类名
          showText: false, // 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容
          showScore: false, // 是否显示当前分数，showScore 和 showText 不能同时为真
          textColor: '#1F2D3D', // 辅助文字的颜色
          texts: ['极差', '失望', '一般', '满意', '惊喜'] // 辅助文字数组
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
