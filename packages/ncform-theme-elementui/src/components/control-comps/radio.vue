<template>
    <div class="ncform-radio">
      <el-radio-group
        v-model="modelVal"
        :disabled="disabled"
        v-show="!hidden && !readonly"
        size="mini"
      >
        <component :is="'el-radio' + (mergeConfig.type === 'button' ? '-button' : '')"
          v-for="opt in dataSource"
          :key="opt[mergeConfig.itemValueField]"
          :label="opt[mergeConfig.itemValueField]"
          :class="mergeConfig.type === 'radio' && mergeConfig.arrangement === 'v' ? 'is-vertical' : ''"
        >{{opt[mergeConfig.itemLabelField]}}</component>
      </el-radio-group>

      <label v-show="readonly" class="label-read">{{labelRead}}</label>
    </div>
</template>

<style lang="scss">

  .h-layout {
    .ncform-radio {
      &.__ncform-control {
        clear: none;
      }
    }
  }

  .v-layout {
    .ncform-radio {
      &.__ncform-control {
        clear: both;
      }
    }
  }

  .ncform-radio {

    .is-vertical {
      display: block;

      & + .el-radio {
        margin-left: 0;
        margin-top: 15px;
      }
    }

    .label-read {
      font-size: 14px;
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
        no: 'No'
      },
      zh_cn: {
        yes: '是',
        no: '否'
      }
    },

    created() {
      this._getDataSource();
    },

    props: {
      value: {
        type: [String, Number, Boolean]
      }
    },

    data() {
      return {
        dataSource: [],
        // 组件特有的配置属性
        defaultConfig: {
          isIndeterminate: true,
          selectAll: false, // 是否显示全选
          checkAll: false,
          arrangement: 'h', // 排列 可选值 [v | h]
          type: 'radio', // 显示类型，可选值：[radio | button]
          itemValueField: 'value', // 值字段
          itemLabelField: 'label', // 显示字段
          enumSource: [], // 可选项，默认[{value: true, label: '是'}, {value: false, label: '否'}]
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
        let res = '';
        const vm = this;
        const { itemValueField, itemLabelField } = vm.mergeConfig;

        for (let i in vm.$data.dataSource) {
          if (vm.$data.dataSource[i][itemValueField] === vm.modelVal) {
            res = vm.$data.dataSource[i][itemLabelField];
            break;
          }
        }
        return res;
      },
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
              vm.$data.dataSource = enumSourceRemote.resField ? _get(data, enumSourceRemote.resField, []) : data;
              this._keepSelectedItem();
            }
          }).catch(err => {
            vm.$data.dataSource = [];
            this._keepSelectedItem();
          });
        } catch(err) {
          console.error(err);
        }
      },

      _keepSelectedItem() {
        if (this.mergeConfig.itemDataKey) {
          let selectedModelVal = this.$data.dataSource.find(item => item[this.mergeConfig.itemValueField] === this.$data.modelVal);
          this._setTempData(this.mergeConfig.itemDataKey, selectedModelVal);
        }
      },

      _getDataSource() {
        const vm = this;
        const enumSourceRemote = vm.mergeConfig.enumSourceRemote;
        if (enumSourceRemote && enumSourceRemote.remoteUrl) {
          vm.getRemoteSource();
        } else if (!vm.mergeConfig.enumSource.length) {
          vm.$data.dataSource = [ {value: true, label: this.$nclang('yes')}, {value: false, label: this.$nclang('no')} ];
          this._keepSelectedItem();
        } else {
          vm.$data.dataSource = vm.mergeConfig.enumSource;
          this._keepSelectedItem();
        }
      }
    }
  }
</script>
