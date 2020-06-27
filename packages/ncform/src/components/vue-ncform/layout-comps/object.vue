<template>
  <div class="__object-form-item">
    <legend v-if="legendEnable(schema) && showLegend" @click="collapse()">{{_analyzeVal(schema.ui.legend)}}</legend>

    <!-- 垂直布局，即label上，control下 -->
    <div v-if="mergeConfig.layout === 'v'" v-show="!collapsed" class="form-row v-layout" style="width: 100%">
      <div v-for="(fieldSchema, field) in schema.properties"
          :key="field"
          :class="['col-md-' + (_analyzeVal(fieldSchema.ui.columns) || 12)]"
          :style="{display: _analyzeVal(fieldSchema.ui.hidden) ? 'none' : ''}"
          class="form-group">
        <template>
            <label v-if="!legendEnable(fieldSchema) && !fieldSchema.ui.noLabelSpace" :style="{'visibility': fieldSchema.ui.showLabel ? 'visible' : 'hidden'}">
              <!-- 必填标识 -->
              <i v-if="_analyzeVal(fieldSchema.rules.required) === true || (typeof fieldSchema.rules.required === 'object' && _analyzeVal(fieldSchema.rules.required.value) === true)" class="text-danger">*</i>

              {{_analyzeVal(fieldSchema.ui.label)}}

              <!--  提示信息 -->
              <a v-if="fieldSchema.ui.help.show === true" :title="fieldSchema.ui.help.content" href="#"><span :class="fieldSchema.ui.help.iconCls">{{fieldSchema.ui.help.text}}</span></a>
            </label>

            <slot :name="field"></slot>

            <!-- 说明信息 -->
            <small v-if="fieldSchema.ui.description" class="form-text text-muted" v-html="_analyzeVal(fieldSchema.ui.description)">
            </small>

        </template>
      </div>
    </div>

    <!-- 水平布局，即label左，control右 -->
    <div v-if="mergeConfig.layout === 'h'" v-show="!collapsed" class="form-row h-layout" style="width: 100%">
      <div v-for="(fieldSchema, field) in schema.properties"
          :key="field"
          :class="['col-md-' + (_analyzeVal(fieldSchema.ui.columns) || 12)]"
          :style="{display: _analyzeVal(fieldSchema.ui.hidden) ? 'none' : ''}"
          class="form-group row">
        <template>
          <label v-if="!legendEnable(fieldSchema) && !fieldSchema.ui.noLabelSpace" :style="{'visibility': fieldSchema.ui.showLabel ? 'visible' : 'hidden', width: mergeConfig.labelWidth}" class="col-form-label">
            <!-- 必填标识 -->
            <i v-if="_analyzeVal(fieldSchema.rules.required) === true || (typeof fieldSchema.rules.required === 'object' && _analyzeVal(fieldSchema.rules.required.value) === true)" class="text-danger">*</i>
            {{_analyzeVal(fieldSchema.ui.label)}}

            <!--  提示信息 -->
            <a v-if="fieldSchema.ui.help.show === true" :title="fieldSchema.ui.help.content" href="#"><span :class="fieldSchema.ui.help.iconCls">{{fieldSchema.ui.help.text}}</span></a>
            :
          </label>
          <div :style="{'margin-left': !legendEnable(fieldSchema) && !fieldSchema.ui.noLabelSpace ? mergeConfig.labelWidth + ';' : '0px;'}" :class="{'col-md-9': !legendEnable(fieldSchema) && !fieldSchema.ui.noLabelSpace, 'col-md-12': !(!legendEnable(fieldSchema) && !fieldSchema.ui.noLabelSpace)}">
            <slot :name="field"></slot>

            <!-- 说明信息 -->
            <small v-if="fieldSchema.ui.description" class="form-text text-muted" v-html="_analyzeVal(fieldSchema.ui.description)">
            </small>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
  .__object-form-item {

    & > legend {
      cursor: pointer;
    }

    .h-layout {
      .row {
        margin-left: 0;
        margin-right: 0;
      }
      &.form-row, .form-row {
        padding: 0;
        margin: 0;
        & > [class*=col-] {
          padding-left: 5px;
          padding-right: 5px;
        }
      }
      [class*=col-] {
        padding-left: 0;
        padding-right: 0;
      }
      .col-form-label {
        padding-right: 5px !important;
        text-align: right;
      }
    }
  }
</style>

<script>

  import ncformCommon from '@ncform/ncform-common';

  const layoutObjectMixin = ncformCommon.mixins.vue.layoutObjectMixin;


  export default {
    props: {
      showLegend: {
        type: Boolean,
        default: true
      },
    },
    methods: {
      legendEnable(fieldSchema) {
        return fieldSchema.ui && fieldSchema.ui.showLegend && fieldSchema.ui.legend;
      }
    },
    mixins: [layoutObjectMixin]
  }
</script>
