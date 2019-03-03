<template>
  <label :title="mergeConfig.multiLine ? '' : val"
    ref="label"
    :class="['ncform-label', mergeConfig.multiLine ? 'multi-line' : '']"
  >{{val}}</label>
</template>

<style lang="scss">
  .ncform-label {
    font-size: 14px;

    &:not(.multi-line) {
      line-height: 40px;
      text-overflow:ellipsis;
      overflow:hidden;
      white-space:nowrap;
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
        type: [String, Number]
      }
    },

    data() {
      return {
        // 组件特有的配置属性
        defaultConfig: {
          multiLine: false // 是否多行显示 （当为false时，内容溢出时用...显示，然后鼠标移上去可显示完整的内容）
        },
        val: '',
        // mergeConfig: 请使用该值去绑定你的组件的属性，它包含了defaultConfig data和config props的值
        // modelVal：请使用该值来绑定实际的组件的model
      }
    },

    mounted() {
      const vm = this;
      vm.val = vm.modelVal;
    },
	}
</script>
