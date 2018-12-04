<template>

      <el-select v-model="modelVal" :placeholder="placeholder || '请选择'" v-show="!hidden" :disabled="disabled || readonly"
      :clearable="mergeConfig.clearable"
      :multiple="mergeConfig.multiple"
      :filterable="mergeConfig.filterable"
      :remote="!isLocalSource && !mergeConfig.filterLocal"
      :remote-method="remoteMethod"
      :loading="loading">
      <el-option
        v-for="item in options"
        :key="item[mergeConfig.itemValueField]"
        :label="item[mergeConfig.itemLabelField]"
        :value="item[mergeConfig.itemValueField]">
        <component
          v-if="itemTemplate.template"
          :item="item"
          :is="itemTemplate"></component>
      </el-option>
    </el-select>

</template>

<style lang="scss" scoped>
</style>

<script>
import axios from "axios";
import _get from "lodash-es/get";
import _cloneDeep from 'lodash-es/cloneDeep';
import ncformCommon from '@ncform/ncform-common';

const controlMixin = ncformCommon.mixins.vue.controlMixin;
const ncformUtils = ncformCommon.ncformUtils;

export default {
  mixins: [controlMixin],

  props: {
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: ''
    }
  },
  created() {
    if(typeof this.value === 'boolean'){
      this.$data.valueType = 'boolean';
      this.$data.modelVal = this.$data.modelVal ? 1 : 0;
    }
  },

  mounted() {
    // 判断是否存在自定义模板
    this.$data.itemTemplate.template = this.$data.mergeConfig.itemTemplate;

    // 标记是否使用本地数据
    if (this.$data.mergeConfig.enumSource.length == 0) {
      this.$data.isLocalSource = false;
      if(ncformUtils.getValType(this.value) == 'boolean'){
        this.$data.options = [{
          value: 1,
          label: 'true'
        },{
          value: 0,
          label: 'false'
        }]
      }
    } else {
      this.$data.options = this.$data.mergeConfig.enumSource;
    }

  },

  data() {
    return {

      // mergeConfig: 请使用该值去绑定你的组件的属性，它包含了defaultConfig data和config props的值
      // modelVal：请使用该值来绑定实际的组件的model

      // 组件特有的配置属性
      defaultConfig: {
        multiple: false, // 是否多选
        clearable: true, // 是否出现清空选项
        filterable: false, // 是否可搜索，即可输入关键字
        filterLocal: true, // 搜索本地的还是远程的数据，当为true时，就算配了enumSourceRemote，也只会从远程取一次数据
        itemTemplate: "", // 显示项的模板

        itemLabelField: 'label', // 项数据表示label的字段
        itemValueField: 'value', // 项数据表示value的字段
        enumSource: [], // 本地数据源
        enumSourceRemote: {
          // 远程数据源
          remoteUrl: "", // 如果是远程访问，则填写该url
          paramName: "keyword", // 请求参数名，默认是keyword
          otherParams: {}, // 其它请求的参数，支持字符串表达式
          resField: "", // 响应结果的字段
          selectFirstItem: false, // 默认选中第一项
        }
      },

      isLocalSource: true,
      options: [],
      itemTemplate: {
        template: "",
        props: ["item"]
      },

      loading: false
    };
  },

  computed: {
    // disabled / readonly / hidden / placeholder 你可以直接使用这些变量来控制组件的行为

    //【使config支持字符串表达式】(1) 声明computed属性，使用this._analyzeVal方法分析值
    otherParams() {
      let otherParams = _cloneDeep(_get(this.mergeConfig, 'enumSourceRemote.otherParams'), {});
      for (let key in otherParams) {
        otherParams[key] = this._analyzeVal(otherParams[key]);
      }
      return otherParams;
    }
  },

  methods: {
    remoteMethod(query) {

      if(!_get(this.mergeConfig, 'enumSourceRemote.remoteUrl')){ return; };

      const options = {
        url: this.mergeConfig.enumSourceRemote.remoteUrl,
        params: JSON.parse(JSON.stringify(this.otherParams)) // //【使config支持字符串表达式】(3) 使用computed属性
      };
      options.params[
        this.$data.mergeConfig.enumSourceRemote.paramName
      ] = query;
      axios(options).then(res => {
        this.$data.options = this.$data.mergeConfig.enumSourceRemote.resField ? _get(res.data, this.$data.mergeConfig.enumSourceRemote.resField) : res.data;
        if (this.mergeConfig.enumSourceRemote.selectFirstItem && this.$data.options.length > 0) {
          this.$data.modelVal = this.$data.modelVal || this.$data.options[0][this.$data.mergeConfig.itemValueField];
        }
      });
    },

    _processModelVal(newVal){
      if(this.$data.valueType === 'boolean'){
        return newVal ? true : false;
      }
      return newVal;
    }
  },

  watch: {
    //【使config支持字符串表达式】(2) watch在computed声明的属性，当发生变化时，执行相关的动作
    otherParams(newVal, oldVal) {
      if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
        if (oldVal !== undefined) { // 非第一次
          if (Array.isArray(this.modelVal)) {
            this.modelVal = [];
          } else {
            this.modelVal = null;
          }
        }
        this.remoteMethod();
      }
    }
  }
};
</script>
