<template>
  <el-date-picker
    v-if="type && typeOptions[type]"
    v-show="!hidden"
    v-model="modelVal"
    class="ncform-date-picker"
    :placeholder="placeholder || $nclang(typeOptions[type].placeholder)"
    :disabled="disabled"
    :readonly="readonly"
    :size="mergeConfig.size"
    :clearable="mergeConfig.clearable"
    :type="type"
    :format="mergeConfig.format || $nclang(typeOptions[type].format)"
    :value-format="mergeConfig.valueFormat"
  />
</template>

<script>
import { ncformMixins } from '@ncform-plus/ncform-common';

const { controlMixin } = ncformMixins.vue;

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
    modelValue: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
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
        clearable: false,
        type: "date",  // year/month/date/week/datetime
        format: '',
        valueFormat: '',
        size: ''
      }
      // modelVal：请使用该值来绑定实际的组件的model
    };
  },

  computed: {
    // disabled / readonly / hidden / placeholder 你可以直接使用这些变量来控制组件的行为
    type() {
      if(!this.$data.typeOptions[this.mergeConfig.type]){
        return 'date';
      } else {
        return this.mergeConfig.type;
      }
    }
  },

  mounted() {
    if(this.$data.modelVal){
      this.$data.modelVal = this.mergeConfig.valueFormat ? this.$data.modelVal : new Date(parseInt(this.$data.modelVal));
    }
  },

  methods: {
    // 你可以通过该方法在modelVal传出去之前进行加工处理，即在this.$emit('input')之前
    _processModelVal(newVal){
      return `${newVal ? (this.mergeConfig.valueFormat ? newVal : +new Date(newVal)) : ''}`;
    }
  }
};
</script>

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
