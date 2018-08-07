<template>
    <el-tooltip
    class="ncform-label-wrap"
    :content="modelVal"
    placement="top"
    :disabled="mergeConfig.multiLine"
  >
    <label
      ref="label"
      :class="['ncform-label', mergeConfig.multiLine ? 'multi-line' : '']"
      :style="{ width: dynamicWidth }"
    >{{val}}</label>
  </el-tooltip>
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
        dynamicWidth: '100%'
        // mergeConfig: 请使用该值去绑定你的组件的属性，它包含了defaultConfig data和config props的值
        // modelVal：请使用该值来绑定实际的组件的model
      }
    },

    methods: {
      setDynamicWidth() {
        const vm = this;
        // 不只使用css3的原因在于 内嵌ncform布局组件，此组件的父组件下有子组件具有浮动属性导致宽度继承失效，父组件宽度为0，只能靠子组件自行撑开宽度
        if (!vm.mergeConfig.multiLine && vm.modelVal !== '') {
          vm.$nextTick(() => {
            vm.dynamicWidth = `${this.$parent.$el.offsetWidth}px`;
          })
        }
      }
    },

    mounted() {
      const vm = this;
      vm.setDynamicWidth();
      vm.val = vm.modelVal;
    },
	}
</script>
