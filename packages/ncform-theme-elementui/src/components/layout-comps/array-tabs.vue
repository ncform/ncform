<template>

  <div class="__array-tabs-form-item">

    <legend v-if="schema.ui.legend && schema.ui.showLegend" @click="collapse()">
      {{_analyzeVal(schema.ui.legend)}}
      <i v-if="!mergeConfig.disableCollapse" class="el-collapse-item__arrow" :class="{'el-icon-arrow-up': !collapsed, 'el-icon-arrow-down': collapsed}"></i>
    </legend>

    <el-tabs v-show="!collapsed" :addable="!mergeConfig.disableAdd" type="card" :tab-position="mergeConfig.tabPosition" @edit="handleTabsEdit" v-model="activeName">
      <el-tab-pane v-for="(dataItem, idx) in schema.value" :key="dataItem.__dataSchema.__id" :closable="(!mergeConfig.disableDel && !isDelExceptionRow(dataItem.__dataSchema)) || (mergeConfig.disableDel && isDelExceptionRow(dataItem.__dataSchema))" :name="'' + idx">

        <span slot="label">
          {{_analyzeVal(dataItem.__dataSchema.ui.label) + ' ' + (idx + 1)}}
          <!-- 提示信息 -->
          <el-tooltip class="item" effect="dark" placement="right-start">
            <div slot="content" v-html="dataItem.__dataSchema.ui.help.content"></div>
            <a class="help" v-if="dataItem.__dataSchema.ui.help.show === true" href="#"><span :class="dataItem.__dataSchema.ui.help.iconCls">{{dataItem.__dataSchema.ui.help.text}}</span></a>
          </el-tooltip>
        </span>

        <!-- array item 是 正常的 object 类型 -->
        <template v-if="isNormalObjSchema(dataItem.__dataSchema)">
          <ncform-object :schema="dataItem.__dataSchema" :form-data="formData" :idx-chain="(idxChain ? idxChain + ',' : '') + idx" :config="dataItem.__dataSchema.ui.widgetConfig" :show-legend="false">

            <template v-for="(fieldSchema, fieldName) in (dataItem.__dataSchema.properties || {__notObjItem: dataItem.__dataSchema})" :slot="fieldName"><!-- 注意：__notObjItem 这个Key为与form-item约定好的值，其它名字不生效 -->
              <slot :name="fieldName" :schema="fieldSchema" :idx="idx"></slot>
            </template>

          </ncform-object>
        </template>

        <!-- array item 是 非正常的 object 类型 以及 其它类型 -->
        <template v-else>
          <slot name="__notObjItem" :schema="dataItem.__dataSchema" :idx="idx"></slot> <!-- 注意：__notObjItem 和 __dataSchema 都是约定好的值，其它名字不生效 -->
        </template>
      </el-tab-pane>
    </el-tabs>

  </div>

</template>

<style lang="scss">
  .__array-tabs-form-item {

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

    .el-tabs {
      margin-top: 6px;
      &.el-tabs--left {
        .el-tabs__new-tab {
          margin-left: 0;
          .el-icon-plus {
            width: 100%;
          }
        }
      }
    }

    .el-tab-pane > .__object-form-item > .el-row {
      border: none;
      margin-top: -8px
    }
    .el-tabs__header {
      margin: 0 0 8px;
    }
  }
</style>

<script>

  import ncformCommon from '@ncform/ncform-common';

  const layoutArrayMixin = ncformCommon.mixins.vue.layoutArrayMixin;

  export default {

    mixins: [layoutArrayMixin],

    i18nData: {
      en: {
        delItemTips: 'Are you sure to delete this item?',
      },
      zh_cn: {
        delItemTips: '确定要删除该项吗？',
      }
    },

    data() {
      return {
        activeName: '0',
        defaultConfig: {
          tabPosition: 'top',
        },
      }
    },

    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          this.addItem();
          this.$data.activeName = (this.schema.value.length - 1) + '';
        }
        if (action === 'remove') {
          this.delItem(targetName, this.mergeConfig.requiredDelConfirm, this.mergeConfig.delConfirmText.item || this.$nclang('delItemTips'));
          this.$nextTick(() => {
            let tabIdx = parseInt(targetName);
            if (targetName === this.$data.activeName) { // Remote item is the active item
              if (tabIdx === 0) { // First item
                this.$data.activeName = '0'
              } else {
                this.$data.activeName = (tabIdx - 1) + '';
              }
            } else {
              let activeIdx = parseInt(this.$data.activeName);
              if (activeIdx > tabIdx) { // active item at the right side
                this.$data.activeName = (activeIdx - 1) + '';
              }
            }
          })
        }
      }
    }

  }
</script>
