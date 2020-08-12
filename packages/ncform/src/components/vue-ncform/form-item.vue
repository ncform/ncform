<template>

  <div :class="[(!!schema.__validationResult && !schema.__validationResult.result) ? 'invalid' : '', schema.ui.itemClass]">

    <!-- object 类型 -->
    <component v-if="isNormalObjSchema(schema)" :is="'ncform-' + schema.ui.widget" :schema="schema" :form-data="formData" :temp-data="tempData" :global-const="globalConfig.constants" :idx-chain="idxChain" :config="schema.ui.widgetConfig">

      <template v-for="(fieldSchema, fieldName) in schema.properties" :slot="fieldName">
        <form-item :schema="fieldSchema" :form-data="formData" :temp-data="tempData" :global-const="globalConfig.constants" :key="fieldName" :global-config="globalConfig" :idx-chain="idxChain" :complete-schema="completeSchema" :paths="paths ? paths + '.' + fieldName : fieldName" :form-name="formName"></form-item>
      </template>

    </component>

    <!-- array 类型 -->
    <component v-else-if="isNormalArrSchema(schema)" :is="'ncform-' + schema.ui.widget" :schema="schema" :form-data="formData" :temp-data="tempData" :global-const="globalConfig.constants" :idx-chain="idxChain" :config="schema.ui.widgetConfig" class="__ncform-control">

      <template v-for="(fieldSchema, fieldName) in (schema.items.properties || {__notObjItem: schema.items})" :slot="fieldName" slot-scope="props">
        <form-item :schema="props.schema" :key="fieldName" :form-data="formData" :temp-data="tempData" :global-const="globalConfig.constants" :idx-chain="(idxChain ? idxChain + ',' : '') + props.idx" :global-config="globalConfig" :complete-schema="completeSchema" :paths="paths + '[' + props.idx + ']' + (fieldName === '__notObjItem' ? '' : `.${fieldName}`)" :form-name="formName"></form-item>
      </template>

    </component>

    <!-- 特殊类型 HTML -->
    <template v-else-if="schema.type === 'HTML'">
      <div v-html="htmlTypeVal"></div>
    </template>

    <!-- 特殊类型 COMP -->
    <template v-else-if="schema.type === 'COMP'">
      <component :is="schema.ui.widget" :config="schema.ui.widgetConfig" :form-data="formData" :temp-data="tempData" :global-const="globalConfig.constants" :idx-chain="idxChain"></component>
    </template>

    <!-- string / number / integer / boolean 类型 -->
    <template v-else>
      <component :is="'ncform-' + schema.ui.widget" :config="schema.ui.widgetConfig" v-model="schema.value" :form-data="formData" :temp-data="tempData" :global-const="globalConfig.constants" :idx-chain="idxChain" class="__ncform-control">
      </component>
      <div class="__ncform-item-preview" v-if="schema.ui.preview && schema.value"
        :style="{width: schema.ui.preview.outward && schema.ui.preview.outward.width ?  schema.ui.preview.outward.width + 'px' : 'auto', height: schema.ui.preview.outward && schema.ui.preview.outward.height ? schema.ui.preview.outward.height + 'px' : 'auto'}" >
        <span class="clear" v-if="schema.ui.preview.clearable" @click="clearComponentValue()">x</span>
        <div class="wrapper" :class="[schema.ui.preview.outward ? schema.ui.preview.outward.shape : '']">
          <!-- 图片 -->
          <img v-if="schema.ui.preview.type === 'image'"
            :style="{width: schema.ui.preview.outward && schema.ui.preview.outward.width ?  schema.ui.preview.outward.width + 'px' : 'auto', height: schema.ui.preview.outward && schema.ui.preview.outward.height ? schema.ui.preview.outward.height + 'px' : 'auto'}"
            :src="getPreviewVal(schema.ui.preview.value, schema.value)" alt="预览区域">
          <!-- 视频 -->
          <video v-if="schema.ui.preview.type === 'video'" :src="getPreviewVal(schema.ui.preview.value, schema.value)" controls="controls"></video>
          <!-- 音频 -->
          <audio v-if="schema.ui.preview.type === 'audio'" :src="getPreviewVal(schema.ui.preview.value, schema.value)" controls="controls"></audio>
          <!-- 链接 -->
          <a v-if="schema.ui.preview.type === 'link'" :href="getPreviewVal(schema.ui.preview.value, schema.value)" target="_blank">{{schema.value}}</a>
        </div>
      </div>
    </template>

    <!-- 验证错误信息 -->
    <div v-show="!!schema.__validationResult && !schema.__validationResult.result" class="invalid-feedback" :class="globalConfig.style.invalidFeedbackCls" style="display:block;">
        {{!!schema.__validationResult && schema.__validationResult.errMsg}}
    </div>

  </div>

</template>

<style lang="scss">
  .__ncform-control {
    width: 100%;
    display: inline-block;
  }

  .__ncform-item-preview {
    margin-top: 6px;
    position: relative;

    .wrapper {
      overflow: hidden;
      height: 100%;
      width: 100%;
      &.circle {
        background-color: #EEEEEE;
        border-radius: 1000px;
      }
      &.rounded {
        background-color: #EEEEEE;
        border-radius: 20px;
      }
      img, video {
        max-width: 100%;
      }
    }
    .clear {
      position: absolute;
      right: 8px;
      cursor: pointer;
      font-size: 21px;
      font-weight: 700;
      opacity: 0.2;
    }
  }

  .invalid-feedback {
    color: #f56c6c;
  }
</style>

<script>
import "./layout-comps";
import "./control-comps";
import ncformCommon from '@ncform/ncform-common';
import _get from "lodash-es/get";
import _isArray from "lodash-es/isArray";

const ncformUtils = ncformCommon.ncformUtils;

export default {
  name: "form-item", // 声明name可以嵌套自身

  _init4valueTemplate: true,

  props: {
    schema: {
      type: Object,
      default() {
        return {};
      }
    },
    globalConfig: {
      type: Object
    },
    formData: {
      type: Object
    },
    tempData: {
      type: Object
    },
    completeSchema: {
      type: Object
    },
    idxChain: {
      // 用于记录在数组中的索引
      type: String
    },
    paths: {
      // 用于记录字段的路径
      type: String
    },
    formName: {
      type: String
    }
  },

  data() {
    return {
      _id: Math.random()
        .toString(36)
        .substring(2),
      // 用于保存控件旧值
      itemValue: null //this.schema.value
    };
  },

  computed: {
    valueTemplate() {

      if (!this.schema.valueTemplate) return undefined;

      // Put it here to let the dx expression in valueTemplate being watched
      let result = ncformUtils.smartAnalyzeVal(this.schema.valueTemplate, {
        idxChain: this.idxChain,
        data: {
          rootData: this.formData,
          tempData: this.tempData,
          constData: this.globalConfig.constants
        }
      });

      return result;
    },
    htmlTypeVal() {
      return ncformUtils.smartAnalyzeVal(this.schema.value, {
        idxChain: this.idxChain,
        data: {
          rootData: this.formData,
          tempData: this.tempData,
          constData: this.globalConfig.constants
        }
      });
    }
  },

  methods: {
    isNormalObjSchema: ncformUtils.isNormalObjSchema,

    isNormalArrSchema: ncformUtils.isNormalArrSchema,

    getPreviewVal(configVal, modelVal) {
      if (!configVal) return modelVal;
      return ncformUtils.smartAnalyzeVal(configVal, {
        idxChain: this.idxChain,
        data: {
          rootData: this.formData,
          tempData: this.tempData,
          constData: this.globalConfig.constants,
          selfData: modelVal
        }
      });
    },

    clearComponentValue() {
      this.schema.value = "";
    },

    // 校验其它指定字段的值
    _validOtherField(fieldPath, idxChain, ruleNames) {
      let val = _get(this.formData, fieldPath.replace("[i]", `[${idxChain}]`));
      let schema = ncformUtils.getSchemaByPath(this.completeSchema, fieldPath, idxChain);
      if (schema === undefined) {
        // 取不到schema说明传入的fieldPath或idxChain无效
        return null;
      }
      if (!schema.__validationResult) {
        // 如果之前没有进行过校验行为，则跳过
        return true;
      }

      let rules = {};

      Object.keys(schema.rules).forEach(ruleKey => {
        if (ruleNames.indexOf(ruleKey) >= 0) {
          rules[ruleKey] = schema.rules[ruleKey];
        }
      });

      window.__$ncform.__ncformRegularValidation
        .validate(val, rules, {
          formData: this.formData,
          tempData: this.tempData,
          idxChain: idxChain,
          globalConfig: this.globalConfig
        })
        .then(result => {
          this.$set(schema, "__validationResult", result);
        });
    }
  },

  watch: {
    valueTemplate: {
      handler: function(newVal, oldVal) {
        if (newVal !== undefined) {
          if (oldVal === undefined || JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
            if (!(this.$options._init4valueTemplate && (_isArray(this.schema.value) ? this.schema.value.length > 0 : this.schema.value))) { // Prevent init value from being overwritten
              this.schema.value = newVal;
            }
            if (this.$options._init4valueTemplate) {
              // User nextTick will cause the init value to be incorrect when field item in list
              // so here use setTimeout instead
              setTimeout(() => {
                this.$options._init4valueTemplate = false;
              }, 10)
            }
          }
        }
      },
      immediate: true
    },
    schema: {
      handler: function(newVal) {
        let changed = false;
        if (ncformUtils.isNormalArrSchema(newVal)) {
          this.$data.itemValue = this.$data.itemValue || [];
          if (newVal.value.length !== this.$data.itemValue.length) {
            changed = true;
          }
        } else if (newVal.value !== this.$data.itemValue) {
          changed = true;
        }

        // 对比控件改变前后的值，判断是否需要对其进行校验。
        if (changed) {
          if (!ncformUtils.isNormalObjSchema(newVal) && !ncformUtils.isNormalArrSchema(newVal)) { // 叶子结点
            const formVM = window.__$ncform.__ncFormsGlobalList[this.formName];
            formVM.$emit('change', {
              paths: this.paths,
              itemValue: this.schema.value,
              formValue: this.formData,
              itemOldValue: this.$data.itemValue
            })
          }

          if (ncformUtils.isNormalArrSchema(newVal)) {
            this.$data.itemValue = ncformUtils.getModelFromSchema(newVal);
          } else {
            this.$data.itemValue = newVal.value;
          }

          window.__$ncform.__ncformRegularValidation
            .validate(
              this.$data.itemValue,
              this.schema.rules,
              {
                formData: this.formData,
                tempData: this.tempData,
                idxChain: this.idxChain,
                globalConfig: this.globalConfig
              },
              this.$data._id
            )
            .then(result => {
              const oldValidationResult = this.schema.__validationResult;
              if (oldValidationResult && oldValidationResult.timeStamp && result.timeStamp < oldValidationResult.timeStamp) return;
              this.$set(this.schema, "__validationResult", result);

              if (result.result && result.linkItems) {
                // 如果校验成功，并且有linkItems，则校验关联item的指定规则
                result.linkItems.forEach(item => {
                  let val = _get(
                    this.formData,
                    ncformUtils.smartAnalyzeVal(item.fieldPath, {
                      idxChain: this.idxChain,
                      data: {
                        rootData: this.formData,
                        tempData: this.tempData,
                        constData: this.globalConfig.constants
                      }
                    })
                  );
                  let schema = ncformUtils.getSchemaByPath(this.completeSchema, item.fieldPath, this.idxChain);
                  let rules = {
                    customRule: [schema.rules.customRule[item.customRuleIdx]]
                  };

                  // 跟关联项当前的验证结果做比较，如果相同才进行验证操作，不要冲了原有的验证结果
                  if (_get(schema, "__validationResult.errMsg") && _get(schema, "__validationResult.errMsg") === _get(rules, "customRule[0].errMsg")) {
                    window.__$ncform.__ncformRegularValidation
                      .validate(val, rules, {
                        formData: this.formData,
                        tempData: this.tempData,
                        idxChain: this.idxChain,
                        globalConfig: this.globalConfig
                      })
                      .then(result => {
                        this.$set(schema, "__validationResult", result);
                      });
                  }
                });
              }
            });

          // 触发关联字段的校验
          let linkFields = this.schema.ui.linkFields;
          if (linkFields && linkFields.length > 0) {
            linkFields.forEach(item => {
              let returnRes = this._validOtherField(item.fieldPath, this.idxChain, item.rules);
              if (returnRes === null) {
                if (item.fieldPath.indexOf("[i]") >= 0) {
                  // TODO: 这里暂时仅支持一层的[i]
                  let arrField = item.fieldPath.match(/(.*?)\[i\]/)[1];
                  let arrSchema = ncformUtils.getSchemaByPath(this.completeSchema, arrField);
                  let arrItemTotal = arrSchema.value.length;
                  // 校验它所有子项指定的字段
                  for (let i = 0; i < arrItemTotal; i++) {
                    this._validOtherField(item.fieldPath, i + "", item.rules);
                  }
                }
              }
            });
          }
        }
      },
      deep: true
    }
  }
};
</script>
