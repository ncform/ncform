<template>
  <div class="__array-form-item">
    <legend
      v-if="schema.ui.legend && schema.ui.showLegend"
      @click="collapse()"
    >
      {{ _analyzeVal(schema.ui.legend) }}
    </legend>

    <div
      v-for="(dataItem, idx) in schema.value"
      v-show="!collapsed"
      :key="dataItem.__dataSchema.__id"
    >
      <label>{{ _analyzeVal(dataItem.__dataSchema.ui.label, idx) }} {{ (mergeConfig.autoIdxToLabel ? (idx + 1) : '') }}</label>

      <!-- 项控制按钮 -->
      <div class="btn-group btn-group-sm">
        <button
          v-show="dataItem.__dataSchema._expand"
          v-if="!mergeConfig.disableItemCollapse"
          type="button"
          class="btn btn-primary btn-secondary"
          @click="collapseItem(dataItem.__dataSchema)"
        >
          fold
        </button>
        <button
          v-show="!dataItem.__dataSchema._expand"
          v-if="!mergeConfig.disableItemCollapse"
          type="button"
          class="btn btn-primary btn-secondary"
          @click="collapseItem(dataItem.__dataSchema)"
        >
          Expand
        </button>
        <button
          v-if="(!mergeConfig.disableDel && !isDelExceptionRow(dataItem.__dataSchema)) || (mergeConfig.disableDel && isDelExceptionRow(dataItem.__dataSchema))"
          type="button"
          class="btn btn-danger btn-secondary"
          @click="delItem(idx, mergeConfig.requiredDelConfirm, mergeConfig.delConfirmText.item || $nclang('delItemTips'))"
        >
          Del
        </button>
        <button
          v-show="idx !== 0"
          v-if="!mergeConfig.disableReorder"
          type="button"
          class="btn btn-secondary"
          @click="itemUp(idx)"
        >
          Up
        </button>
        <button
          v-show="idx !== schema.value.length - 1"
          v-if="!mergeConfig.disableReorder"
          type="button"
          class="btn btn-secondary"
          @click="itemDown(idx)"
        >
          Down
        </button>
      </div>

      <!-- array item 是 正常的 object 类型 -->
      <template v-if="isNormalObjSchema(dataItem.__dataSchema)">
        <ncform-object
          v-show="mergeConfig.disableItemCollapse || dataItem.__dataSchema._expand"
          :schema="dataItem.__dataSchema"
          :form-data="formData"
          :idx-chain="(idxChain ? idxChain + ',' : '') + idx"
          :config="dataItem.__dataSchema.ui.widgetConfig"
          :global-const="globalConst"
          :show-legend="false"
        >
          <!-- 注意：__notObjItem 这个Key为与form-item约定好的值，其它名字不生效 -->
          <template
            v-for="(fieldSchema, fieldName) in (dataItem.__dataSchema.properties || {__notObjItem: dataItem.__dataSchema})"
            #[fieldName]
          >
            <slot
              :name="fieldName"
              :schema="fieldSchema"
              :idx="idx"
            />
          </template>
        </ncform-object>
      </template>

      <!-- array item 是 非正常的 object 类型 以及 其它类型 -->
      <template v-else>
        <div v-show="mergeConfig.disableItemCollapse || dataItem.__dataSchema._expand">
          <slot
            name="__notObjItem"
            :schema="dataItem.__dataSchema"
            :idx="idx"
          /> <!-- 注意：__notObjItem 和 __dataSchema 都是约定好的值，其它名字不生效 -->
        </div>
      </template>
    </div>

    <!-- 列表控制按钮 -->
    <div
      v-show="!collapsed"
      v-if="!mergeConfig.disableAdd || !mergeConfig.disableDel"
      class="btn-group btn-group-sm"
    >
      <button
        v-if="!mergeConfig.disableAdd"
        type="button"
        class="btn btn-secondary"
        @click="addItem()"
      >
        {{ mergeConfig.addTxt || $nclang('add') }}
      </button>
      <button
        v-if="!mergeConfig.disableDel"
        type="button"
        class="btn btn-danger btn-secondary"
        @click="delAllItems(mergeConfig.requiredDelConfirm, mergeConfig.delConfirmText.all || $nclang('delAllTips'))"
      >
        {{ mergeConfig.delAllTxt || $nclang('delAll') }}
      </button>
    </div>
  </div>
</template>

<script>
import { ncformMixins } from '@ncform-plus/ncform-common'

const { layoutArrayMixin } = ncformMixins.vue

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
      handler (newVal, oldVal) {
        if (newVal > oldVal) { // add item
          this._supportItemsCollapse()
        }
      }
    }
  },

  created () {
    this._supportItemsCollapse()
  },

  methods: {
    collapseItem (dataSchema) {
      dataSchema._expand = !dataSchema._expand
    },

    _supportItemsCollapse () {
      if (!this.mergeConfig.disableItemCollapse) {
        this.schema.value.forEach(dataItem => {
          if (dataItem.__dataSchema && dataItem.__dataSchema._expand === undefined) { dataItem.__dataSchema._expand = !this.mergeConfig.itemCollapse }
        })
      }
    }
  }

}
</script>

<style lang="scss">
  .__array-form-item {

    & > legend {
      cursor: pointer;
    }

  }
</style>
