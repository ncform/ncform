<template>
<div class="ncform">
  <form @submit.prevent="submit()" v-if="!isSchemaChanging" novalidate :class="dataFormSchema.globalConfig.style.formCls">
    <form-item :schema="dataFormSchema" :form-data="formData" :global-config="dataFormSchema.globalConfig" :complete-schema="dataFormSchema"></form-item>
    <button type="submit" style="display: none"></button>
  </form>
</div>
</template>

<style lang="scss" scoped>
.ncform {
}
</style>

<script>
import _get from "lodash-es/get";
import ncformCommon from '@ncform/ncform-common';
import formItem from "./form-item.vue";

const ncformUtils = ncformCommon.ncformUtils;

export default {
  /* ====================== 生命周期 ====================== */
  created() {
    // 在这里做一些跟DOM无关的初始化, 比如获取初始化数据

    let vm = this;

    // 用于识别value的变化是内部触发还是外部主动更改
    vm.$options.isValueUpdateFromInner = false;

    function handleSchema() {
      let dataFormSchema = ncformUtils.perfectFormSchema(vm.formSchema);
      vm.$data.dataFormSchema = dataFormSchema;

      // 初始赋值
      ncformUtils.setValueToSchema(vm.value || dataFormSchema.value, dataFormSchema, true);
      dataFormSchema.value = {}; // 清空最顶层的value，以防止更新的值被其覆盖

      // 在这里强行把最外层的对象布局（根布局永远都是对象）的边框置空（对象的布局样式必须是v-layout和h-layout）
      vm.$nextTick(() => {
        let rootBorderElement = vm.$el.querySelector('[class$=-layout]');
        if (rootBorderElement) rootBorderElement.style.border = 'none';
      })
    };

    this.$watch('formSchema',  (newVal, oldVal) => {
      if (newVal !== oldVal) {
        this.$data.isSchemaChanging = true;
        this.$nextTick(() => {
          this.$data.isSchemaChanging = false;
          handleSchema();
        })
      }
    })

    this.$watch('value',  (newVal, oldVal) => {
      if (JSON.stringify(newVal) !== JSON.stringify(oldVal) && !this.$options.isValueUpdateFromInner) {
        this.$data.isSchemaChanging = true;
        this.$nextTick(() => {
          this.$data.isSchemaChanging = false;
          handleSchema();
        })
      }
      this.$options.isValueUpdateFromInner = false; // reset
    })

    handleSchema();

  },

  mounted() {
    // 在这里做一些跟DOM有关的初始化
    let vm = this;
    if(window.__$ncform.__ncFormsGlobalList[this.$data.name]){
      console.error(`表单命名重复`);
      const newName = `${this.$data.name}_${Math.random().toString(36).substring(2)})`;
      window.__$ncform.__ncFormsGlobalList[newName] = vm;
      this.$data.name = newName;
    }else{
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
      default: "_ncformDefaultName"
    },

    value: {
      type: Object
    }
  },

  data() {
    return {
      name: this.formName,
      dataFormSchema: {},
      formData: {},
      isSchemaChanging: false // 利用该属性，当schema变化时，整个form表单重建，这样确保组件的生命周期跟预想的一致
    };
  },

  /* ====================== 事件处理 ====================== */

  methods: {
    ncformValidate() {
      // 清空验证数组，数组内为promise对象。
      this.$data.validateArray = [];
      this.checkValidation(this.$data.dataFormSchema, "dataFormSchema", "data");

      return new Promise((resolve, reject) => {
        Promise.all(this.$data.validateArray).then(data => {
          data.forEach(item => {
            this.$set(
              _get(this.$data, item.__path),
              "__validationResult",
              JSON.parse(JSON.stringify(item.result))
            );
          });
          resolve({
            result: !data.some(item => item.result.result === false),
            detail: data.map(item => {delete item.__path; return item;})
          });
        });
      });
    },

    // 根据schema，递归检索出所有的验证规则，并push进验证数组validateArray。
    // __path参数：控件在schema中的路径。 验证结束后，将验证结果放到对应的控件中展示时需要使用。
    // __dataPath: 数据在value中的路径。 最终返回给用户。
    checkValidation(schema, __path, __dataPath, __idxChain='') {
      if (schema.__validationResult) {
        // 存在验证结果，直接取验证结果。
        this.$data.validateArray.push(
          Promise.resolve({ result: schema.__validationResult, __path, __dataPath })
        );
      } else if (
        schema.rules &&
        Object.keys(schema.rules) !== 0
      ) {
        // 不存在验证结果，则进行验证
        this.$data.validateArray.push(
          window.__$ncform.__ncformRegularValidation
            .validate(schema.value, schema.rules, {formData:this.$data.formData, idxChain: __idxChain, globalConfig: this.dataFormSchema.globalConfig})
            .then(result => {
              return Promise.resolve({ result, __path, __dataPath });
            })
        );
      } else {
        //
      }

      // 递归
      switch (schema.type) {
        case "object":
          for (let key in schema.properties) {
            if(schema.properties[key]){
              this.checkValidation(
                schema.properties[key],
                `${__path}.properties.${key}`,
                `${__dataPath}.${key}`
              );
            }
          }
          break;
        case "array":
          if (schema.items) {
            schema.value.forEach((item, index) => {
              if (item.__dataSchema) {
                this.checkValidation(
                  item.__dataSchema,
                  `${__path}.value[${index}].__dataSchema`,
                  `${__dataPath}[${index}]`,
                  index
                );
              }
            });
          }
          break;
        default:
          break;
      }
    },

    submit() {
      this.$emit('submit');
    }

  },

  watch: {
    dataFormSchema: {
      handler(newVal) {
        this.$data.formData = ncformUtils.getModelFromSchema(newVal);
        this.$options.isValueUpdateFromInner = true;
        this.$emit("input", this.$data.formData);
      },
      deep: true
    }
  }
};
</script>
