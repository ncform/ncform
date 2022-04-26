<template>
  <label
    ref="label"
    :title="mergeConfig.multiLine ? '' : val"
    :class="['ncform-label', mergeConfig.multiLine ? 'multi-line' : '']"
  >{{ val }}</label>
</template>

<script>
  import { ncformMixins } from '@ncform-plus/ncform-common';

  const { controlMixin } = ncformMixins.vue;

	export default {

    mixins: [controlMixin],

    props: {
      modelValue: {
        type: [String, Number],
        default: ''
      }
    },

    data() {
      return {
        // 组件特有的配置属性
        defaultConfig: {
          multiLine: false, // 是否多行显示 （当为false时，内容溢出时用...显示，然后鼠标移上去可显示完整的内容）
          inVLayout: false, // 是否处于垂直布局中
        },
        val: '',
        // modelVal：请使用该值来绑定实际的组件的model
      }
    },

    mounted() {
      const vm = this;
      vm.val = vm.modelVal;
    },
	}
</script>

<style lang="scss">
  .ncform-label {
    font-size: 14px;

    &:not(.multi-line) {
      text-overflow:ellipsis;
      overflow:hidden;
      white-space:nowrap;
    }
  }
</style>
