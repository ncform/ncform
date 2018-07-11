<template>
  <div
    class="ncform-checkbox"
    :style="{display: hidden ? 'none' : ''}"
  >
    <el-checkbox
      v-if="mergeConfig.selectAll && !readonly"
      :class="'check-all'"
      :disabled="disabled"
      :indeterminate="mergeConfig.isIndeterminate"
      v-model="mergeConfig.checkAll"
      @change="handleCheckAllChange"
    >全选</el-checkbox>

    <el-checkbox-group
      v-if="!readonly"
      size="mini"
      :disabled="disabled"
      v-model="modelVal"
      @change="handleCheckedOptChange"
    >
      <component :is="'el-checkbox' + (mergeConfig.type === 'button' ? '-button' : '')"
        v-for="opt in mergeConfig.enumSource"
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

<style lang="sass">

  .h-layout {
    .ncform-checkbox {
      &.__ncform-control {
        clear: none;
        padding-top: 10px;
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
  import axios from 'axios';
  import _get from 'lodash-es/get';

  const controlMixin = ncformCommon.mixins.vue.controlMixin;

  export default {

    mixins: [controlMixin],

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
        // 组件特有的配置属性
        defaultConfig: {
          isIndeterminate: true,
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
          }
        },
        // mergeConfig: 请使用该值去绑定你的组件的属性，它包含了defaultConfig data和config props的值
        // modelVal：请使用该值来绑定实际的组件的model
      }
    },

    computed: {
      // disabled / readonly / hidden / placeholder 你可以直接使用这些变量来控制组件的行为
      labelRead() {
        let res = [];
        const vm = this;
        const { enumSource, enumSourceRemote, itemValueField, itemLabelField } = vm.mergeConfig;
        const modelVal = vm.modelVal;

        if (typeof modelVal === 'boolean') {
          res.push(modelVal ? '是' : '否');
        } else {
          for (let m in modelVal) {
            for (let i in enumSource) {
              if (enumSource[i][itemValueField] === modelVal[m]) {
                res.push(enumSource[i][itemLabelField]);
                break;
              }
            }
          }
        }

        return res;
      }
    },

    methods: {
      handleCheckAllChange(val) {
        const vm = this;
        const mergeConfig = vm.mergeConfig;
        const itemValueField = mergeConfig.itemValueField;
        const arrResAll = [];
        mergeConfig.enumSource.map(obj => {
          arrResAll.push(obj[itemValueField]);
        });
        vm.modelVal = val ? arrResAll : [];
        vm.mergeConfig.isIndeterminate = false;
      },
      handleCheckedOptChange(value) {
        const vm = this;
        let checkedCount = value.length;
        vm.mergeConfig.checkAll = checkedCount === vm.mergeConfig.enumSource.length;
        vm.mergeConfig.isIndeterminate = checkedCount > 0 && checkedCount < vm.mergeConfig.enumSource.lengths;
      },
      getRemoteSource() {
        try {
          const vm = this;
          const enumSourceRemote = vm.mergeConfig.enumSourceRemote;

          axios({
            method: 'GET',
            url: enumSourceRemote.remoteUrl,
            data: {},
            headers: {
              'X-Requested-With':'XMLHttpRequest'
            },
          }).then(res => {
            if (res.status === 200 ) {
              let data = res.data;
              vm.mergeConfig.enumSource = _get(data, enumSourceRemote.resField || '', []);
            }
          }).catch(err => {
            vm.mergeConfig.enumSource = [];
          });
        } catch(err) {
          console.error(err);
        }
      }
    },
    created() {
      const vm = this;
      const enumSourceRemote = vm.mergeConfig.enumSourceRemote;
      if (enumSourceRemote && enumSourceRemote.remoteUrl) {
        vm.getRemoteSource();
      } else if (!vm.mergeConfig.enumSource.length) {
        vm.mergeConfig.enumSource = [ {label: '是', value: true}];
      }
    }
  }
</script>
