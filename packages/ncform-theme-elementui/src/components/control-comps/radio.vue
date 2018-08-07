<template>
    <div class="ncform-radio">
      <el-radio-group
        v-model="modelVal"
        :disabled="disabled"
        v-show="!hidden && !readonly"
        size="mini"
      >
        <component :is="'el-radio' + (mergeConfig.type === 'button' ? '-button' : '')"
          v-for="opt in mergeConfig.enumSource"
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
        padding-top: 10px;
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
  import axios from 'axios';
  import _get from 'lodash-es/get';

  const controlMixin = ncformCommon.mixins.vue.controlMixin;

  export default {

    mixins: [controlMixin],

    props: {
      value: {
        type: [String, Number, Boolean]
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
          type: 'radio', // 显示类型，可选值：[radio | button]
          itemValueField: 'value', // 值字段
          itemLabelField: 'label', // 显示字段
          enumSource: [], // 可选项，默认[{value: true, label: '是'}, {value: false, label: '否'}]
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
        let res = '';
        const vm = this;
        const { enumSource, enumSourceRemote, itemValueField, itemLabelField } = vm.mergeConfig;

        for (let i in enumSource) {
          if (enumSource[i][itemValueField] === vm.modelVal) {
            res = enumSource[i][itemLabelField];
            break;
          }
        }
        return res;
      }
    },

    methods: {
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
              vm.mergeConfig.enumSource = enumSourceRemote.resField ? _get(data, enumSourceRemote.resField, []) : data;
            }
          }).catch(err => {
            vm.mergeConfig.enumSource = [];
          });
        } catch(err) {
          console.error(err);
        }
      },
      // // 你可以通过该方法在modelVal传出去之前进行加工处理，即在this.$emit('input')之前
      // _processModelVal(modelVal) {
      //   let val = modelVal;
      //   switch(this.config.type) {
      //     case 'number':
      //       val = parseFloat(val);
      //       break;
      //     case 'integer':
      //       val = parseInt(val);
      //       break;
      //   }
      //   return val;
      // }
    },
    created() {
      const vm = this;
      const enumSourceRemote = vm.mergeConfig.enumSourceRemote;
      if (enumSourceRemote && enumSourceRemote.remoteUrl) {
        vm.getRemoteSource();
      } else if (!vm.mergeConfig.enumSource.length) {
        vm.mergeConfig.enumSource = [ {value: true, label: '是'}, {value: false, label: '否'} ];
      }
    }
  }
</script>
