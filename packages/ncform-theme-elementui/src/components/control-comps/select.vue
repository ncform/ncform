<template>
  <el-select
    v-model="modelVal"
    :placeholder="placeholder || $nclang('selectPls')"
    v-show="!hidden"
    :disabled="disabled || readonly"
    :size="mergeConfig.size"
    :clearable="mergeConfig.clearable"
    :multiple="mergeConfig.multiple"
    :filterable="mergeConfig.filterable"
    :remote="!isLocalSource && !mergeConfig.filterLocal"
    :remote-method="(!isLocalSource && !mergeConfig.filterLocal) ? remoteMethod : null"
    :loading="loading"
    @change="handleChange"
    @visible-change="handleVisibleChange"
  >
    <el-option
      v-for="item in optionsData"
      :key="item[mergeConfig.itemValueField]"
      :label="item[mergeConfig.itemLabelField]"
      :value="item[mergeConfig.itemValueField]"
    >
      <component v-if="itemTemplate.template" :item="item" :is="itemTemplate"></component>
    </el-option>
  </el-select>
</template>

<style lang="scss" scoped>
</style>

<script>
import _get from "lodash-es/get";
import _cloneDeep from "lodash-es/cloneDeep";
import ncformCommon from "@ncform/ncform-common";

const controlMixin = ncformCommon.mixins.vue.controlMixin;
const ncformUtils = ncformCommon.ncformUtils;

export default {
  mixins: [controlMixin],

  i18nData: {
    en: {
      selectPls: "Select Please"
    },
    zh_cn: {
      selectPls: "请选择"
    }
  },

  props: {
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: ""
    }
  },
  created() {
    if (typeof this.value === "boolean") {
      this.$data.valueType = "boolean";
      this.$data.modelVal = this.$data.modelVal ? 1 : 0;
    }
    this.$data.itemTemplate.template = this.mergeConfig.itemTemplate;
    this._getDataSource();
  },

  data() {
    return {
      // modelVal：请使用该值来绑定实际的组件的model

      // 组件特有的配置属性
      defaultConfig: {
        multiple: false, // 是否多选
        clearable: true, // 是否出现清空选项
        filterable: false, // 是否可搜索，即可输入关键字
        filterLocal: true, // 搜索本地的还是远程的数据，当为true时，就算配了enumSourceRemote，也只会从远程取一次数据
        itemTemplate: "", // 显示项的模板
        size: '',

        itemDataKey: "", // 选中项的数据字段，可通过 {{$temp.[key]}} 取得

        itemLabelField: "label", // 项数据表示label的字段
        itemValueField: "value", // 项数据表示value的字段
        enumSource: [], // 本地数据源
        enumSourceRemote: {
          // 远程数据源
          remoteUrl: "", // 如果是远程访问，则填写该url
          paramName: "keyword", // 请求参数名，默认是keyword
          otherParams: {}, // 其它请求的参数，支持字符串表达式
          resField: "", // 响应结果的字段
          selectFirstItem: false // 默认选中第一项
        }
      },

      isLocalSource: true,
      options: [],
      itemTemplate: {
        template: '',
        props: ["item"]
      },

      loading: false
    };
  },

  computed: {
    // disabled / readonly / hidden / placeholder 你可以直接使用这些变量来控制组件的行为
    optionsData() {
      return (this.$data.isLocalSource && this.mergeConfig.enumSource.length > 0) ? this.mergeConfig.enumSource : this.$data.options;
    }
  },

  methods: {
    remoteMethod(query) {
      if (!_get(this.mergeConfig, "enumSourceRemote.remoteUrl")) {
        return;
      }

      const options = {
        url: this.mergeConfig.enumSourceRemote.remoteUrl,
        params: _cloneDeep(_get(this.mergeConfig, "enumSourceRemote.otherParams", {}))
      };
      if (this.mergeConfig.enumSourceRemote.paramName)
        options.params[this.mergeConfig.enumSourceRemote.paramName] = query;
      this.$http(options).then(res => {
        this.$data.options = this.mergeConfig.enumSourceRemote.resField
          ? _get(res.data, this.mergeConfig.enumSourceRemote.resField)
          : res.data;
        if (
          this.mergeConfig.enumSourceRemote.selectFirstItem &&
          this.$data.options.length > 0
        ) {
          this.$data.modelVal =
            this.$data.modelVal ||
            this.$data.options[0][this.mergeConfig.itemValueField];
        }

        this._keepSelectedItem();
      });
    },

    handleChange() {
      this._keepSelectedItem();
    },

    handleVisibleChange(isVisible) {
      if (!isVisible && !this.mergeConfig.filterLocal && this.optionsData.length === 0) { // 当输入搜索关键字从远程接口获取不到数据时，在隐藏时(UI上关键字被清空)需要重新call远程接口(关键字为空)，防止再次focus时不显示可选项
        this.remoteMethod();
      }
    },

    _keepSelectedItem() {
      if (this.mergeConfig.itemDataKey) {
        let selectedModelVal = Array.isArray(this.$data.modelVal) ? this.optionsData.filter(item => this.$data.modelVal.indexOf(item[this.mergeConfig.itemValueField]) >= 0) : this.optionsData.find(item => item[this.mergeConfig.itemValueField] === this.$data.modelVal);
        this._setTempData(this.mergeConfig.itemDataKey, selectedModelVal);
      }
    },

    _getDataSource() {
      if (_get(this.mergeConfig, "enumSourceRemote.remoteUrl")) {
        this.$data.isLocalSource = false;
        this.remoteMethod();
      } else {
        if (this.mergeConfig.enumSource.length == 0) {
          if (ncformUtils.getValType(this.value) == "boolean") {
            this.$data.options = [
              {
                value: 1,
                label: "true"
              },
              {
                value: 0,
                label: "false"
              }
            ];
            this._keepSelectedItem();
          }
        } else {
          this.$data.options = this.mergeConfig.enumSource;
          this._keepSelectedItem();
        }
      }
    },

    _processModelVal(newVal) {
      if (this.$data.valueType === "boolean") {
        return newVal ? true : false;
      }
      return newVal;
    }
  },

  watch: {
    //【使config支持字符串表达式】(2) watch在computed声明的属性，当发生变化时，执行相关的动作
    "mergeConfig.enumSourceRemote.otherParams": {
      handler: function(newVal, oldVal) {
        if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
          if (oldVal !== undefined) {
            // 非第一次
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
  }
};
</script>
