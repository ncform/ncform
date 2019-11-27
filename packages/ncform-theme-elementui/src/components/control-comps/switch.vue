<template>
  <el-switch
    class="ncform-switch"
    v-model="modelVal"
    :disabled="disabled || readonly"
    :width="mergeConfig.width"
    :active-icon-class="mergeConfig.activeIconClass"
    :inactive-icon-class="mergeConfig.inactiveIconClass"
    :active-text="mergeConfig.activeText"
    :inactive-text="mergeConfig.inactiveText"
    :active-value="mergeConfig.activeValue"
    :inactive-value="mergeConfig.inactiveValue"
    :active-color="mergeConfig.activeColor"
    :inactive-color="mergeConfig.inactiveColor"
    v-show="!hidden"
  ></el-switch>
</template>

<style lang="scss">
  .h-layout {
    .__ncform-control.ncform-switch {
      line-height: 35px !important;
    }
  }
  .v-layout {
    .__ncform-control.ncform-switch {
      line-height: unset !important;
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
        type: [Boolean, String, Number]
      }
    },

    data() {
      return {
        // 组件特有的配置属性
        defaultConfig: {
            width: 40, // Switch's width（pixel）
            activeIconClass: '', // The class name of the icon displayed when the switch is turned on. Setting this item ignores activeText
            inactiveIconClass: '', // The class name of the icon displayed when the switch is closed. Setting this item ignores inactiveText
            activeText: '', // Text description when switch is turned on
            inactiveText: '', // Text description when switch is off
            activeValue: true, // The value of the switch when it is turned on. default is true [boolean / string / number]
            inactiveValue: false, //  The value of the switch when it is turned off. default is false [ boolean / string / number ]
            activeColor: '#409EFF', // Background color when switch is on
            inactiveColor: '#C0CCDA', // Background color when switch is off
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
