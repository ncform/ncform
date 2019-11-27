<template>
  <div class="__object-form-item">
    <legend v-if="legendEnable(schema) && showLegend" @click="collapse()">
      {{_analyzeVal(schema.ui.legend)}}
      <i v-if="!mergeConfig.disableCollapse" class="el-collapse-item__arrow" :class="{'el-icon-arrow-up': !collapsed, 'el-icon-arrow-down': collapsed}"></i>
    </legend>

    <!-- 垂直布局，即label上，control下 -->
    <div v-if="mergeConfig.layout === 'v'" v-show="!collapsed" class="el-row v-layout" style="width: 100%">

      <div v-for="(fieldSchema, field) in schema.properties"
          :key="field"
          :class="['el-col-' + (fieldSchema.ui.columns * 2 || 24)]"
          :style="{display: _analyzeVal(fieldSchema.ui.hidden) ? 'none' : ''}"
          class="el-col el-form-item">

        <template>
            <label v-if="!fieldSchema.ui.noLabelSpace" :style="{'visibility': fieldSchema.ui.showLabel ? 'visible' : 'hidden'}" class="el-form-item__label">
              <!-- 必填标识 -->
              <i v-if="_analyzeVal(fieldSchema.rules.required) === true || (typeof fieldSchema.rules.required === 'object' && _analyzeVal(fieldSchema.rules.required.value) === true)" class="text-danger">*</i>
              {{_analyzeVal(fieldSchema.ui.label)}}
              <!-- 提示信息 -->
              <el-tooltip class="item" effect="dark" :content="fieldSchema.ui.help.content" placement="right-start">
                <div slot="content" v-html="fieldSchema.ui.help.content"></div>
                <a class="help" v-if="fieldSchema.ui.help.show === true" href="#"><span :class="fieldSchema.ui.help.iconCls">{{fieldSchema.ui.help.text}}</span></a>
              </el-tooltip>
            </label>

            <div style="clear: both">
              <slot :name="field"></slot>
            </div>

            <!-- 说明信息 -->
            <small v-if="fieldSchema.ui.description" class="form-desc" v-html="_analyzeVal(fieldSchema.ui.description)">
            </small>

        </template>

      </div>
    </div>

    <!-- 水平布局，即label左，control右 -->
    <div v-if="mergeConfig.layout === 'h'" v-show="!collapsed" class="el-row h-layout" style="width: 100%">
      <div v-for="(fieldSchema, field) in schema.properties"
          :key="field"
          :class="['el-col-' + (fieldSchema.ui.columns * 2 || 24)]"
          :style="{display: _analyzeVal(fieldSchema.ui.hidden) ? 'none' : ''}"
          class="el-col el-form-item">
        <template>
          <label v-if="!fieldSchema.ui.noLabelSpace" :style="{'visibility': fieldSchema.ui.showLabel ? 'visible' : 'hidden', width: mergeConfig.labelWidth}"  class="el-form-item__label">
            <!-- 必填标识 -->
            <i v-if="_analyzeVal(fieldSchema.rules.required) === true || (typeof fieldSchema.rules.required === 'object' && _analyzeVal(fieldSchema.rules.required.value) === true)" class="text-danger">*</i>
            {{_analyzeVal(fieldSchema.ui.label)}}
            <!-- 提示信息 -->
            <el-tooltip class="item" effect="dark" placement="right-start">
              <div slot="content" v-html="fieldSchema.ui.help.content"></div>
              <a class="help" v-if="fieldSchema.ui.help.show === true" href="#"><span :class="fieldSchema.ui.help.iconCls">{{fieldSchema.ui.help.text}}</span></a>
            </el-tooltip>
            :
          </label>
          <div class="el-form-item__content" :style="{'margin-left': (fieldSchema.ui.noLabelSpace) ? '0px' : mergeConfig.labelWidth}">
            <slot :name="field"></slot>
            <!-- 说明信息 -->
            <small v-if="fieldSchema.ui.description" class="form-desc" v-html="_analyzeVal(fieldSchema.ui.description)">
            </small>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>

<style lang="scss">

  .__object-form-item {

    margin-top: 8px;

    & > legend {
      border-left: 6px solid #878D99;
      padding: 6px;
      background-color: #d8dce5;
      color: #5a5e66;
      font-size: 14px;
      margin-bottom: 0px;
      border-radius: 4px 4px 0 0;
      cursor: pointer;

      .el-collapse-item__arrow {
        line-height: 22px;
      }
    }

    & > [class*=-layout] {
      border: 1px solid #d8dce5;
      padding: 8px;
    }

    .el-form-item {
      position: relative;
      margin-bottom: 0;
    }
    .form-desc {
      color: #868e96!important;
    }
    .help {
      color: #007bff;
      text-decoration: none;
      background-color: transparent;
    }

    .el-row {
      display: flex;
      flex-wrap: wrap;
    }

    .el-row>[class*=el-col-] {
      padding-right: 5px;
      padding-left: 5px;
    }
    .text-danger {
      color: #FA5555
    }

    .v-layout {
      .el-form-item__label {
        font-weight: bold;
      }
      .el-form-item__error {
        position: relative;
      }
    }

    .h-layout {
      .el-form-item {
        margin-bottom: 22px;
        .el-form-item__content {
          line-height: unset;
        }
      }
    }

    // 解决对象水平布局的组件显示问题
    .h-layout {
      .__ncform-control {
        line-height: 40px;
        &.__array-form-item, &.__array-table-form-item, &.__array-tabs-form-item {
          line-height: unset;
        }
      }
    }
    .v-layout {
      .__ncform-control {
        line-height: unset;
      }
    }
  }

</style>

<script>
import ncformCommon from '@ncform/ncform-common';

const ncformUtils = ncformCommon.ncformUtils;
const layoutObjectMixin = ncformCommon.mixins.vue.layoutObjectMixin;

export default {
  props: {
    showLegend: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    legendEnable(fieldSchema) {
      return fieldSchema.ui && fieldSchema.ui.showLegend && fieldSchema.ui.legend;
    }
  },
  mixins: [layoutObjectMixin]
};
</script>
