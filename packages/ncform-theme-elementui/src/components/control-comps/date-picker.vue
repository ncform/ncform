<template>
  <el-date-picker class="ncform-date-picker"
    v-if="mergeConfig.type && typeOptions[mergeConfig.type]"
    :placeholder="placeholder || typeOptions[mergeConfig.type].placeholder"
    :disabled="disabled"
    :readonly="readonly"
    v-show="!hidden"
    v-model="modelVal"
    :type="mergeConfig.type"
    :format="mergeConfig.format || typeOptions[mergeConfig.type].format"
    >
  </el-date-picker>
</template>

<style lang="sass">
  .h-layout {
    .ncform-date-picker {
      &.__ncform-control {
        clear: none;
      }
    }
  }

  .v-layout {
    .ncform-date-picker {
      &.__ncform-control {
        clear: both;
      }
    }
  }

  .ncform-date-picker {
    &.el-date-editor.el-input {
      width: 100%;
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
      type: String,
      default: ''
    }
  },
  created() {
  },

  mounted() {
    if(this.$data.modelVal){
      this.$data.modelVal = new Date(parseInt(this.$data.modelVal));
    }

    this.$nextTick(()=>{
      if(!this.$data.typeOptions[this.$data.mergeConfig.type]){
        this.$data.mergeConfig.type = 'date';
      }
    });
  },

  data() {
    return {
      typeOptions: {
        year: {
          format: '',
          placeholder: '选择年',
        },
        month: {
          format: '',
          placeholder: '选择月',
        },
        date: {
          format: '',
          placeholder: '选择日期',
        },
        week: {
          format: 'yyyy年 第WW周',
          placeholder: '选择周',
        },
        datetime:{
          format: '',
          placeholder: '选择时间',
        }
      },
      // 组件特有的配置属性
      defaultConfig: {
        type: "date"  // year/month/date/week/datetime
      }
      // mergeConfig: 请使用该值去绑定你的组件的属性，它包含了defaultConfig data和config props的值
      // modelVal：请使用该值来绑定实际的组件的model
    };
  },

  computed: {
    // disabled / readonly / hidden / placeholder 你可以直接使用这些变量来控制组件的行为
  },

  methods: {
    // 你可以通过该方法在modelVal传出去之前进行加工处理，即在this.$emit('input')之前
    _processModelVal(newVal){
      return `${new Date(newVal).getTime()}`;
    }
  }
};
</script>
