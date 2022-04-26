<template>
  <div class="__array-form-item">
    <legend
      v-if="schema.ui.legend && schema.ui.showLegend"
      @click="collapse()"
    >
      {{ _analyzeVal(schema.ui.legend) }}
      <i
        v-if="!mergeConfig.disableCollapse"
        class="el-collapse-item__arrow"
        :class="{'el-icon-arrow-up': !collapsed, 'el-icon-arrow-down': collapsed}"
      />
    </legend>

    <div
      v-for="(dataItem, idx) in schema.value"
      v-show="!collapsed"
      :key="dataItem.__dataSchema.__id"
      class="list-item"
    >
      <el-space class="list-item-label">
        <label>{{ _analyzeVal(dataItem.__dataSchema.ui.label, idx) }} {{ (mergeConfig.autoIdxToLabel ? (idx + 1) : '') }}</label>

        <!-- 项控制按钮 -->
        <el-button-group size="small">
          <el-button
            v-show="dataItem.__dataSchema._expand"
            v-if="!mergeConfig.disableItemCollapse"
            :icon="ArrowDown"
            @click="collapseItem(dataItem.__dataSchema)"
          />
          <el-button
            v-show="!dataItem.__dataSchema._expand"
            v-if="!mergeConfig.disableItemCollapse"
            :icon="ArrowUp"
            @click="collapseItem(dataItem.__dataSchema)"
          />
          <el-button
            v-if="(!mergeConfig.disableDel && !isDelExceptionRow(dataItem.__dataSchema)) || (mergeConfig.disableDel && isDelExceptionRow(dataItem.__dataSchema))"
            type="danger"
            :icon="RemoveFilled"
            @click="delItem(idx, mergeConfig.requiredDelConfirm, mergeConfig.delConfirmText.item || $nclang('delItemTips'))"
          />
          <el-button
            v-show="idx !== 0"
            v-if="!mergeConfig.disableReorder"
            :icon="SortUp"
            @click="itemUp(idx)"
          />
          <el-button
            v-show="idx !== schema.value.length - 1"
            v-if="!mergeConfig.disableReorder"
            :icon="SortDown"
            @click="itemDown(idx)"
          />
        </el-button-group>
      </el-space>

      <!-- array item 是 正常的 object 类型 -->
      <template v-if="isNormalObjSchema(dataItem.__dataSchema)">
        <ncform-object
          v-show="mergeConfig.disableItemCollapse || dataItem.__dataSchema._expand"
          :schema="dataItem.__dataSchema"
          :form-data="formData"
          :idx-chain="(idxChain ? idxChain + ',' : '') + idx"
          :global-const="globalConst"
          :config="dataItem.__dataSchema.ui.widgetConfig"
          :show-legend="false"
        >
          <template
            v-for="(fieldSchema, fieldName) in (dataItem.__dataSchema.properties || {__notObjItem: dataItem.__dataSchema})"
            #[fieldName]
          >
            <!-- 注意：__notObjItem 这个Key为与form-item约定好的值，其它名字不生效 -->
            <slot
              :name="fieldName"
              :schema="fieldSchema"
              :idx="idx"
            />
          </template>
        </ncform-object>
      </template>

      <!-- array item 是 非正常的 object 类型 以及 其它类型 -->
      <div
        v-else
        class="normal-item"
      >
        <div v-show="mergeConfig.disableItemCollapse || dataItem.__dataSchema._expand">
          <slot
            name="__notObjItem"
            :schema="dataItem.__dataSchema"
            :idx="idx"
          /> <!-- 注意：__notObjItem 和 __dataSchema 都是约定好的值，其它名字不生效 -->
        </div>
      </div>
    </div>

    <!-- 列表控制按钮 -->
    <el-button-group
      v-show="!collapsed"
      v-if="!mergeConfig.disableAdd || !mergeConfig.disableDel"
      size="small"
    >
      <el-button
        v-if="!mergeConfig.disableAdd"
        :icon="CirclePlusFilled"
        @click="addItem()"
      >
        {{ mergeConfig.addTxt || $nclang('add') }}
      </el-button>
      <el-button
        v-if="!mergeConfig.disableDel"
        type="danger"
        :icon="RemoveFilled"
        @click="delAllItems(mergeConfig.requiredDelConfirm, mergeConfig.delConfirmText.all || $nclang('delAllTips'))"
      >
        {{ mergeConfig.delAllTxt || $nclang('delAll') }}
      </el-button>
    </el-button-group>
  </div>
</template>

<script setup>
  import { ArrowDown, ArrowUp, CirclePlusFilled, RemoveFilled, SortUp, SortDown } from '@element-plus/icons-vue'
</script>

<script>
  import { ncformMixins } from '@ncform-plus/ncform-common';

  const { layoutArrayMixin } = ncformMixins.vue;

  export default {
    mixins: [layoutArrayMixin],

    i18nData: {
      en: {
        add: 'Add',
        delAll: 'Delete All',
        delItemTips: 'Are you sure to delete this item?',
        delAllTips: 'Are you sure to delete all?'
      },
      zh_cn: {
        add: '增加',
        delAll: '删除全部',
        delItemTips: '确定要删除该项吗？',
        delAllTips: '确定要删除全部吗？'
      }
    },

    watch: {
      'schema.value.length': {
        handler(newVal, oldVal) {
          if (newVal > oldVal) { // add item
            this._supportItemsCollapse();
          }
        }
      }
    },

    created() {
      this._supportItemsCollapse();
    },

    methods: {
      collapseItem(dataSchema) {
        dataSchema._expand = !dataSchema._expand;
      },

      _supportItemsCollapse() {
        if (!this.mergeConfig.disableItemCollapse) {
          this.schema.value.forEach(dataItem => {
            if (dataItem.__dataSchema && dataItem.__dataSchema._expand === undefined)
              dataItem.__dataSchema._expand = !this.mergeConfig.itemCollapse;
          })
        }
      }
    }

  }
</script>

<style lang="scss">
  .__array-form-item {

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
        line-height: 22px;
        cursor: pointer;
      }
    }

    .list-item {
      // border: 1px solid #d8dce5;
      margin: 0px 0px 8px;
      .list-item-label {
        padding: 8px 8px 4px 8px;
        label {
          font-size: 14px;
        }
      }
    }
    .normal-item {
      padding: 4px 8px 8px 8px;
    }
  }
</style>
