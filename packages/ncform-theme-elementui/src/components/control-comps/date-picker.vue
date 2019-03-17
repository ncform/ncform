<template>
  <el-date-picker class="ncform-date-picker"
    v-if="type && typeOptions[type]"
    :placeholder="placeholder || $t(typeOptions[type].placeholder)"
    :disabled="disabled"
    :readonly="readonly"
    :clearable="mergeConfig.clearable"
    v-show="!hidden"
    v-model="modelVal"
    :type="type"
    :format="mergeConfig.format || $t(typeOptions[type].format)"
    >
  </el-date-picker>
</template>

<style lang="scss">
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

  i18nData: {
    en: {
      chYear: 'Choose Year',
      chMonth: 'Choose Month',
      chDate: 'Choose Date',
      chWeek: 'Choose Week',
      chTime: 'Choose Datetime',
      weekFormat: 'Week WW of yyyy'
    },
    zh_cn: {
      chYear: '选择年份',
      chMonth: '选择月份',
      chDate: '选择日期',
      chWeek: '选择周',
      chTime: '选择时间',
      weekFormat: 'yyyy年 第WW周'
    }
  },

  props: {
    value: {
      type: String,
      default: ''
    }
  },
  created() {
    this.$data.type = this.mergeConfig.type;
  },

  mounted() {
    if(this.$data.modelVal){
      this.$data.modelVal = new Date(parseInt(this.$data.modelVal));
    }

    this.$nextTick(()=>{
      if(!this.$data.typeOptions[this.$data.type]){
        this.$data.type = 'date';
      }
    });
  },

  data() {
    return {
      type: 'date',
      typeOptions: {
        year: {
          format: '',
          placeholder: 'chYear',
        },
        month: {
          format: '',
          placeholder: 'chMonth',
        },
        date: {
          format: '',
          placeholder: 'chDate',
        },
        week: {
          format: 'weekFormat',
          placeholder: 'chWeek',
        },
        datetime:{
          format: '',
          placeholder: 'chTime',
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
