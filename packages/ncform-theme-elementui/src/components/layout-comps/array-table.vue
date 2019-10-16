<template>

  <div class="__array-table-form-item">

    <legend v-if="schema.ui.legend && schema.ui.showLegend" @click="collapse()">
      {{_analyzeVal(schema.ui.legend)}}
      <i v-if="!mergeConfig.disableCollapse" class="el-collapse-item__arrow" :class="{'el-icon-arrow-up': !collapsed, 'el-icon-arrow-down': collapsed}"></i>
    </legend>

    <table v-show="!collapsed" class="table table-bordered">
      <colgroup v-if="mergeConfig.colgroup">
        <col v-for="(item, idx) in mergeConfig.colgroup" :key="idx" :width="item.width" />
      </colgroup>
      <colgroup v-else>
        <col v-for="(renderSchema, idx) in renderSchemas" :key="idx" v-show="!analyzeItemVal(renderSchema.ui.hidden, idx)"/>
        <col v-if="showActionColumn" width="130px"/>
      </colgroup>
      <thead>
          <th v-for="(renderSchema, idx) in renderSchemas" :key="renderSchema.ui.label" v-show="!analyzeItemVal(renderSchema.ui.hidden, idx)">

            <i v-if="showRequiredFlag(renderSchema.rules.required)" class="text-danger">*</i>

            {{_analyzeVal(renderSchema.ui.label)}}<!--  标签信息 -->

            <!-- 提示信息 -->
            <el-tooltip class="item" effect="dark" placement="right-start">
              <div slot="content" v-html="renderSchema.ui.help.content"></div>
              <a class="help" v-if="renderSchema.ui.help.show === true" href="#"><span :class="renderSchema.ui.help.iconCls">{{renderSchema.ui.help.text}}</span></a>
            </el-tooltip>

            <!-- 说明信息 -->
            <small v-if="renderSchema.ui.description" class="form-text text-muted" v-html="_analyzeVal(renderSchema.ui.description)">
            </small>
          </th>

          <th v-if="showActionColumn">{{$nclang('action')}}</th>
      </thead>
      <tbody>
        <tr v-for="(dataItem, idx) in schema.value" :key="dataItem.__dataSchema.__id">
          <td v-for="(fieldSchema, fieldName, fIdx) in (dataItem.__dataSchema.properties || {__notObjItem: dataItem.__dataSchema})" :key="fieldName" v-show="!analyzeItemVal(renderSchemas[fIdx].ui.hidden, fIdx)"><!-- 注意：__notObjItem 这个Key为与form-item约定好的值，其它名字不生效 -->
            <slot :name="fieldName" :schema="fieldSchema" :idx="idx"></slot>
          </td>

          <td v-if="showActionColumn">
            <!-- 项控制按钮 -->
            <div class="el-button-group">
              <button @click="delItem(idx, mergeConfig.requiredDelConfirm, mergeConfig.delConfirmText.item || $nclang('delItemTips'))" v-if="(!mergeConfig.disableDel && !isDelExceptionRow(dataItem.__dataSchema)) || (mergeConfig.disableDel && isDelExceptionRow(dataItem.__dataSchema))" type="button" class="el-button el-button--danger el-button--mini"><i class="el-icon-remove"></i></button>
              <button @click="itemUp(idx)" v-show="idx !== 0" v-if="!mergeConfig.disableReorder" type="button" class="el-button el-button--mini"><i class="el-icon-sort-up"></i></button>
              <button @click="itemDown(idx)" v-show="idx !== schema.value.length - 1" v-if="!mergeConfig.disableReorder" type="button" class="el-button el-button--mini"><i class="el-icon-sort-down"></i></button>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot v-if="!mergeConfig.disableDel || !mergeConfig.disableAdd">
        <tr>
          <td :colspan="renderSchemas.length + 1">
            <!-- 列表控制按钮 -->
            <div class="el-button-group" v-if="!mergeConfig.disableAdd || !mergeConfig.disableDel">
              <button @click="addItem()" v-if="!mergeConfig.disableAdd" type="button" class="el-button el-button--mini"><i class="el-icon-circle-plus-outline"></i> {{mergeConfig.addTxt || $nclang('add')}}</button>
              <button @click="delAllItems(mergeConfig.requiredDelConfirm, mergeConfig.delConfirmText.all || $nclang('delAllTips'))" v-if="!mergeConfig.disableDel" type="button" class="el-button el-button--danger el-button--mini"><i class="el-icon-remove"></i> {{mergeConfig.delAllTxt || $nclang('delAll')}}</button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>

  </div>

</template>

<style lang="scss">

.__array-table-form-item {

  // margin-top: 8px;

  & > legend {
    border-left: 6px solid #878D99;
    padding: 6px;
    background-color: #d8dce5;
    color: #5a5e66;
    font-size: 14px;
    margin-bottom: 0px;
    border-radius: 4px 4px 0 0;

    .el-collapse-item__arrow {
      cursor: pointer;
      line-height: 22px;
    }
  }

  .table-bordered {
    border: 1px solid #e6ebf5;
    thead td, thead th {
      border-bottom-width: 2px;
      border: 1px solid #e6ebf5;
    }
  }
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    border-collapse: collapse;
    thead th {
      vertical-align: bottom;
      border-bottom: 1px solid #e6ebf5;
      text-align: left;
      color: #878d99;
    }
    td, th {
      padding: .75rem;
      vertical-align: top;
      border-top: 1px solid #e6ebf5;
      border-right: 1px solid #e6ebf5;
    }
  }
}
</style>

<script>

  import _map from 'lodash-es/map';
  import ncformCommon from '@ncform/ncform-common';

  const ncformUtils = ncformCommon.ncformUtils;
  const layoutArrayMixin = ncformCommon.mixins.vue.layoutArrayMixin;

  export default {

    mixins: [layoutArrayMixin],

    i18nData: {
      en: {
        action: 'Action',
        add: 'Add',
        delAll: 'Delete All',
        delItemTips: 'Are you sure to delete this item?',
        delAllTips: 'Are you sure to delete all?'
      },
      zh_cn: {
        action: '操作',
        add: '增加',
        delAll: '删除全部',
        delItemTips: '确定要删除该项吗？',
        delAllTips: '确定要删除全部吗？'
      }
    },

    created() {

      // 取得表头数据
      if (ncformUtils.isNormalObjSchema(this.schema.items)) {
        this.$data.renderSchemas = _map(this.schema.items.properties, (fieldSchema, fieldName) => {
          return fieldSchema;
        });
      } else {
        this.$data.renderSchemas = [this.schema.items];
      }

    },

    data() {
      return {
        renderSchemas: []
      }
    },

    methods: {
      analyzeItemVal(val, idxChain) {
        return ncformUtils.smartAnalyzeVal(val, { idxChain: idxChain + '', data: { rootData: this.formData, constData: this.globalConst } });
      },
      showRequiredFlag(requiredConfig) {
        if (!requiredConfig) return false;

        let requiredVal = requiredConfig;
        if (requiredVal.value !== undefined) requiredVal = requiredVal.value;

        if (typeof requiredVal !== 'boolean') {
          requiredVal = requiredVal.toString();
          if (requiredVal.search(/^dx:.*\[i.*/) >= 0) { // Do not show when depending on the same line item
            requiredVal = false;
          } else {
            requiredVal = this._analyzeVal(requiredVal);
          }
        }

        return requiredVal;
      }
    }

  }
</script>
