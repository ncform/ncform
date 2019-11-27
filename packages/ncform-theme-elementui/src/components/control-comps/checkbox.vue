<template>
  <div
    class="ncform-checkbox"
    :style="{display: hidden ? 'none' : ''}"
  >
    <el-checkbox
      v-if="mergeConfig.selectAll && !readonly"
      :class="'check-all'"
      :disabled="disabled"
      :indeterminate="isIndeterminate"
      v-model="isCheckAll"
      @change="handleCheckAllChange"
    >{{$nclang('all')}}</el-checkbox>

    <el-checkbox-group
      v-if="!readonly"
      size="mini"
      :disabled="disabled"
      v-model="modelVal"
      @change="handleCheckedOptChange"
    >
      <component :is="'el-checkbox' + (mergeConfig.type === 'button' ? '-button' : '')"
        v-for="opt in dataSource"
        :key="opt[mergeConfig.itemValueField]"
        :label="opt[mergeConfig.itemValueField]"
        :class="mergeConfig.type === 'checkbox' && mergeConfig.arrangement === 'v' ? 'is-vertical' : ''"
      >{{opt[mergeConfig.itemLabelField]}}</component>
    </el-checkbox-group>

    <label
      v-show="readonly"
      v-for="(label, idx) in labelRead"
      :key="idx"
      :class="['label-read', mergeConfig.type === 'checkbox' && mergeConfig.arrangement === 'v' ? 'label-vertical' : '']"
    >{{label}}</label>
  </div>
</template>

<style lang="scss">

  .h-layout {
    .ncform-checkbox {
      &.__ncform-control {
        clear: none;
      }
    }
  }

  .v-layout {
    .ncform-checkbox {
      &.__ncform-control {
        clear: both;
      }
    }
  }

  .ncform-checkbox {
    .check-all {
      margin-right: 17px;
    }

    .el-checkbox-group {
      display: inline-block;
    }

    .is-vertical {
      display: block;

      & + .el-checkbox {
        margin-left: 0;
        margin-top: 15px;
      }
    }

    .label-read {
      font-size: 14px;

      &.not[label-vertical] + .label-read {
        margin-left: 20px;
      }

      &.label-vertical {
        display: block;
      }
    }
  }
</style>

<script>

  import ncformCommon from '@ncform/ncform-common';
  import _get from 'lodash-es/get';

  const controlMixin = ncformCommon.mixins.vue.controlMixin;

  export default {

    mixins: [controlMixin],

    i18nData: {
      en: {
        yes: 'Yes',
        no: 'No',
        all: 'All'
      },
      zh_cn: {
        yes: '是',
        no: '否',
        all: '全选'
      }
    },

    created() {
      this._getDataSource();
    },

    props: {
      value: {
        // type: [String, Number, Boolean, Array],
        type: [Boolean, Array],
        default() {
          return [];
        }
      }
    },

    data() {
      return {
        dataSource: [],
        isCheckAll: false,
        isIndeterminate: false,
        // 组件特有的配置属性
        defaultConfig: {
          selectAll: false, // 是否显示全选
          checkAll: false,
          arrangement: 'h', // 排列 可选值 [v | h]
          type: 'checkbox', // 显示类型，可选值：[checkbox | button]
          itemValueField: 'value', // 值字段
          itemLabelField: 'label', // 显示字段
          enumSource: [], // 可选项，默认值[{label: '是'}]
          enumSourceRemote: { // 远程数据源
            remoteUrl: '', // 如果是远程访问，则填写该url
            resField: '', // 响应结果的字段
          },
          itemDataKey: "", // 选中项的数据字段，可通过 {{$temp.[key]}} 取得
        },
        // modelVal：请使用该值来绑定实际的组件的model
      }
    },

    computed: {
      // disabled / readonly / hidden / placeholder 你可以直接使用这些变量来控制组件的行为
      labelRead() {
        let res = [];
        const vm = this;
        const { itemValueField, itemLabelField } = vm.mergeConfig;
        const modelVal = vm.modelVal;

        if (typeof modelVal === 'boolean') {
          res.push(modelVal ? this.$nclang('yes') : this.$nclang('no'));
        } else {
          for (let m in modelVal) {
            for (let i in vm.$data.dataSource) {
              if (vm.$data.dataSource[i][itemValueField] === modelVal[m]) {
                res.push(vm.$data.dataSource[i][itemLabelField]);
                break;
              }
            }
          }
        }

        return res;
      }
    },

    watch: {
      'mergeConfig.enumSourceRemote': {
        handler() {
          this._getDataSource();
        },
        deep: true
      },
      'mergeConfig.enumSource': {
        handler() {
          this._getDataSource();
        },
        deep: true
      }
    },

    methods: {
      handleCheckAllChange(val) {
        const vm = this;
        const mergeConfig = vm.mergeConfig;
        const itemValueField = mergeConfig.itemValueField;
        const arrResAll = [];
        vm.$data.dataSource.map(obj => {
          arrResAll.push(obj[itemValueField]);
        });
        vm.modelVal = val ? arrResAll : [];
        vm.isIndeterminate = false;

        vm._keepSelectedItem();
      },
      handleCheckedOptChange(value) {
        const vm = this;
        let checkedCount = value.length;
        vm.$data.isCheckAll = checkedCount === vm.$data.dataSource.length;
        vm.isIndeterminate = checkedCount > 0 && checkedCount < vm.$data.dataSource.length;

        vm._keepSelectedItem();
      },
      getRemoteSource() {
        try {
          const vm = this;
          const enumSourceRemote = vm.mergeConfig.enumSourceRemote;

          this.$http({
            method: 'GET',
            url: enumSourceRemote.remoteUrl,
            data: {},
            headers: {
              'X-Requested-With':'XMLHttpRequest'
            },
          }).then(res => {
            if (res.status === 200 ) {
              let data = res.data;
              vm.$data.dataSource = _get(data, enumSourceRemote.resField || '', []);
              vm._keepSelectedItem();
            }
          }).catch(err => {
            vm.$data.dataSource = [];
            vm._keepSelectedItem();
          });
        } catch(err) {
          console.error(err);
        }
      },
      _keepSelectedItem() {
        if (this.mergeConfig.itemDataKey) {
          let selectedModelVal = Array.isArray(this.$data.modelVal) ? this.$data.dataSource.filter(item => this.$data.modelVal.indexOf(item[this.mergeConfig.itemValueField]) >= 0) : this.$data.dataSource.find(item => item[this.mergeConfig.itemValueField] === this.$data.modelVal);
          this._setTempData(this.mergeConfig.itemDataKey, selectedModelVal);
        }
      },
      _getDataSource() {
        const vm = this;
        const enumSourceRemote = vm.mergeConfig.enumSourceRemote;
        if (enumSourceRemote && enumSourceRemote.remoteUrl) {
          vm.getRemoteSource();
        } else if (!vm.mergeConfig.enumSource.length) {
          vm.$data.dataSource = [ {label: this.$nclang('yes'), value: true}];
          vm._keepSelectedItem();
        } else {
          vm.$data.dataSource = vm.mergeConfig.enumSource;
          vm._keepSelectedItem();
        }
      }
    },
  }
</script>
