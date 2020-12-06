<template>
<div class="ncform">
  <form v-if="!isSchemaChanging" novalidate :class="dataFormSchema.globalConfig.style.formCls">
    <form-item :schema="dataFormSchema" :form-data="formData" :temp-data="tempData" :global-config="dataFormSchema.globalConfig" :complete-schema="dataFormSchema" :form-name="name"></form-item>
    <!-- button这样处理是为了在Mac下的Safari能否正常使用回车键触发表单的submit事件 -->
    <button @click.prevent="submit()" type="submit" style="position: absolute; left: -100px; visibility: hidden"></button>
  </form>
</div>
</template>

<style lang="scss" scoped>
.ncform {
}
</style>

<script>
import _get from 'lodash-es/get';
import _cloneDeep from 'lodash-es/cloneDeep';
import _omit from 'lodash-es/omit';
import ncformCommon from '@ncform/ncform-common';
import formItem from './form-item.vue';

const ncformUtils = ncformCommon.ncformUtils;

export default {
  /* ====================== 生命周期 ====================== */
  created() {
    // 在这里做一些跟DOM无关的初始化, 比如获取初始化数据

    let vm = this;

    // 在进行Form操作前的原始值，用于reset操作
    vm.$nextTick(() => {
      vm.$options.originFormVal =
        ncformUtils.getModelFromSchema(vm.$data.dataFormSchema) || {};
    });

    // 用于识别value的变化是内部触发还是外部主动更改
    vm.$options.isValueUpdateFromInner = false;

    function handleSchema() {
      let dataFormSchema = ncformUtils.perfectFormSchema(vm.formSchema);
      vm.$data.dataFormSchema = dataFormSchema;
      vm.$data.formData = ncformUtils.getModelFromSchema(dataFormSchema);

      // 初始赋值
      ncformUtils.setValueToSchema(
        vm.value || dataFormSchema.value,
        dataFormSchema,
        true
      );
      dataFormSchema.value = {}; // 清空最顶层的value，以防止更新的值被其覆盖

      // 在这里强行把最外层的对象布局（根布局永远都是对象）的边框置空（对象的布局样式必须是v-layout和h-layout）
      vm.$nextTick(() => {
        let rootBorderElement = vm.$el.querySelector('[class$=-layout]');
        if (rootBorderElement) rootBorderElement.style.border = 'none';
      });
    }

    this.$watch('formSchema', (newVal, oldVal) => {
      if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
        this.$data.isSchemaChanging = true;
        this.$nextTick(() => {
          this.$data.isSchemaChanging = false;
          handleSchema();
        });
      }
    });

    this.$watch('value', (newVal, oldVal) => {
      if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
        if (!this.$options.isValueUpdateFromInner) {
          // 外部更新值
          this.$data.isSchemaChanging = true;
          this.$nextTick(() => {
            this.$data.isSchemaChanging = false;
            handleSchema();
            this.$options.originFormVal =
              ncformUtils.getModelFromSchema(this.$data.dataFormSchema) || {}; // 每次外部赋值都要更新原始值，作为reset有依据
            this.$emit('update:isDirty', false);
          });
        } else {
          if (this.$options.originFormVal) {
            // 通知表单值dirty，配合 is-dirty.sync
            this.$emit(
              'update:isDirty',
              JSON.stringify(this.$options.originFormVal) !==
                JSON.stringify(this.$data.formData)
            );
          }
        }
      }

      this.$options.isValueUpdateFromInner = false; // reset
    });

    handleSchema();
  },

  mounted() {
    // 在这里做一些跟DOM有关的初始化
    let vm = this;
    if (window.__$ncform.__ncFormsGlobalList[this.$data.name]) {
      console.warn(`表单命名重复`);
      const newName = `${this.$data.name}_${Math.random()
        .toString(36)
        .substring(2)})`;
      window.__$ncform.__ncFormsGlobalList[newName] = vm;
      this.$data.name = newName;
    } else {
      window.__$ncform.__ncFormsGlobalList[this.$data.name] = vm;
    }
  },

  destroyed() {
    // 在这里销毁无用的资源，比如setTimeout返回的值
    delete window.__$ncform.__ncFormsGlobalList[this.$data.name];
  },

  /* ====================== 引用组件 ====================== */

  components: {
    formItem
  },

  /* ====================== 数据绑定 ====================== */

  props: {
    formSchema: {
      type: Object
    },

    formName: {
      type: String,
      default: '_ncformDefaultName'
    },

    value: {
      type: Object
    },

    isDirty: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      name: this.formName,
      dataFormSchema: {},
      formData: {},
      tempData: {},
      isSchemaChanging: false // 利用该属性，当schema变化时，整个form表单重建，这样确保组件的生命周期跟预想的一致
    };
  },

  /* ====================== 事件处理 ====================== */

  methods: {
    ncformValidate() {
      // 清空验证数组，数组内为promise对象。
      this.$data.validateArray = [];
      this.checkValidation(this.$data.dataFormSchema, 'dataFormSchema', 'data');

      return new Promise((resolve, reject) => {
        Promise.all(this.$data.validateArray).then(data => {
          data.forEach(item => {
            this.$set(
              _get(this.$data, item.__path),
              '__validationResult',
              JSON.parse(JSON.stringify(item.result))
            );
          });
          resolve({
            result: !data.some(item => item.result.result === false),
            detail: data.map(item => {
              delete item.__path;
              return item;
            })
          });
        });
      });
    },

    // 根据schema，递归检索出所有的验证规则，并push进验证数组validateArray。
    // __path参数：控件在schema中的路径。 验证结束后，将验证结果放到对应的控件中展示时需要使用。
    // __dataPath: 数据在value中的路径。 最终返回给用户。
    checkValidation(schema, __path, __dataPath, __idxChain) {
      __idxChain = __idxChain === undefined ? '' : __idxChain; // 不在参数命名的时候给默认值是因为会传了undifine进来导致错误

      if (
        _get(this.dataFormSchema, 'globalConfig.ignoreRulesWhenHidden', true)
      ) {
        // 如果开启了忽略隐藏字段规则
        const isHidden = ncformUtils.smartAnalyzeVal(schema.ui.hidden, {
          idxChain: __idxChain,
          data: {
            rootData: this.$data.formData,
            constData: this.dataFormSchema.globalConfig.constants
          }
        });
        // 如果是隐藏，则忽略校验规则
        if (isHidden)
          return Promise.resolve({ result: true, __path, __dataPath });
      }

      if (schema.__validationResult) {
        // 存在验证结果，直接取验证结果。
        this.$data.validateArray.push(
          Promise.resolve({
            result: schema.__validationResult,
            __path,
            __dataPath
          })
        );
      } else if (schema.rules && Object.keys(schema.rules) !== 0) {
        // 不存在验证结果，则进行验证
        this.$data.validateArray.push(
          window.__$ncform.__ncformRegularValidation
            .validate(schema.value, schema.rules, {
              formData: this.$data.formData,
              idxChain: __idxChain,
              globalConfig: this.dataFormSchema.globalConfig
            })
            .then(result => {
              return Promise.resolve({ result, __path, __dataPath });
            })
        );
      }

      // 递归
      switch (schema.type) {
        case 'object':
          for (let key in schema.properties) {
            if (schema.properties[key]) {
              this.checkValidation(
                schema.properties[key],
                `${__path}.properties.${key}`,
                `${__dataPath}.${key}`,
                __idxChain
              );
            }
          }
          break;
        case 'array':
          if (schema.items) {
            schema.value.forEach((item, index) => {
              if (item.__dataSchema) {
                this.checkValidation(
                  item.__dataSchema,
                  `${__path}.value[${index}].__dataSchema`,
                  `${__dataPath}[${index}]`,
                  !__idxChain && __idxChain !== 0
                    ? [index].join(',')
                    : [__idxChain, index].join(',')
                );
              }
            });
          }
          break;
        default:
          break;
      }
    },

    getValue(ignoreHiddenField) {
      if ( ignoreHiddenField ) {
        // 开启了忽略隐藏字段值，需要递归忽略掉隐藏的字段值
        const ignoreFieldPaths = this._getValueIgnoreHiddenFields(this.$data.dataFormSchema, 'data')
        const tempData = _omit({data: _cloneDeep(this.$data.formData)}, ignoreFieldPaths)
        return tempData.data
      } else {
        return _cloneDeep(this.$data.formData)
      }
    },
    _getValueIgnoreHiddenFields(schema, __dataPath, __idxChain = '', allIgnoreFieldPaths = []) {
      const isHidden = ncformUtils.smartAnalyzeVal(schema.ui.hidden, {
        idxChain: __idxChain,
        data: {
          rootData: this.$data.formData,
          constData: this.dataFormSchema.globalConfig.constants
        }
      });
      // 如果是隐藏，则忽略校验规则
      if (isHidden) {
        allIgnoreFieldPaths.push(__dataPath)
      } else {
        // 递归
        switch (schema.type) {
          case 'object':
            for (let key in schema.properties) {
              if (schema.properties[key]) {
                this._getValueIgnoreHiddenFields(
                  schema.properties[key],
                  `${__dataPath}.${key}`,
                  __idxChain,
                  allIgnoreFieldPaths
                );
              }
            }
            break;
          case 'array':
            if (schema.items) {
              schema.value.forEach((item, index) => {
                if (item.__dataSchema) {
                  this._getValueIgnoreHiddenFields(
                    item.__dataSchema,
                    `${__dataPath}[${index}]`,
                    !__idxChain && __idxChain !== 0
                      ? [index].join(',')
                      : [__idxChain, index].join(','),
                    allIgnoreFieldPaths
                  );
                }
              });
            }
            break;
          default:
            break;
        }
      }
      return allIgnoreFieldPaths
    },

    submit() {
      this.$emit('submit');
    },

    reset() {
      this.$options.isValueUpdateFromInner = false; // 通过模拟外部赋值来达到重置的目的
      this.$emit('input', this.$options.originFormVal);
    }
  },

  watch: {
    dataFormSchema: {
      handler(newVal) {
        this.$data.formData = ncformUtils.getModelFromSchema(newVal);
        this.$options.isValueUpdateFromInner = true;
        this.$emit('input', this.$data.formData);
      },
      deep: true
    }
  }
};
</script>
