import _cloneDeep from "lodash-es/cloneDeep";
import _template from "lodash-es/template";
import extend from "extend";
import ncformUtils from "../../ncform-utils";

export default {

  lang: (navigator.browserLanguage || navigator.language).replace(/-/, '_').toLowerCase(),
  i18nData: {
    en: {
    },
    zh_cn: {
    }
  },

  created() {

    this.$data.i18n = this.$options.i18nData[this.$options.lang] || this.$options.i18nData.en;

    this.schema.value =
      this.schema.value && this.schema.value.length > 0
        ? this.schema.value
        : [ncformUtils.getDefVal(this.schema.items.type)];
    this.schema.value.forEach((item, idx) => {
      this.addItem(idx);
    });

    this.$data.mergeConfig = extend(
      true,
      {},
      this.$data.defaultConfig,
      this.config
    );
    this.$watch("config", () => {
      this.$data.mergeConfig = extend(
        true,
        {},
        this.$data.defaultConfig,
        this.config
      );
    });

    window.__$ncform.eventHub.$on('ncform set lang', this._changeLang)
  },

  beforeDestroy() {
    window.__$ncform.eventHub.$off('ncform set lang', this._changeLang)
  },

  props: {
    config: {
      type: Object
    },

    schema: {
      type: Object,
      default() {
        return {
          type: "array"
        };
      }
    },

    formData: {
      type: Object
    },

    globalConst: {
      type: Object
    },

    idxChain: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      mergeConfig: {},
      defaultConfig: {
        collapsed: false,
        disableCollapse: false,
        disableReorder: false,
        disableAdd: false,
        disableDel: false,
        addTxt: "",
        delAllTxt: "",
      },
      i18n: {},
    };
  },

  methods: {
    _analyzeVal(val) {
      return ncformUtils.smartAnalyzeVal(val, {
        idxChain: this.idxChain,
        data: { rootData: this.formData, constData: this.globalConst }
      });
    },

    isNormalObjSchema: ncformUtils.isNormalObjSchema,

    isNormalArrSchema: ncformUtils.isNormalArrSchema,

    addItem(idxParam) {
      let idx = idxParam;

      if (idx === undefined) {
        this.schema.value.push(ncformUtils.getDefVal(this.schema.items.type));
        idx = this.schema.value.length - 1;
      }

      if (!this.schema.value[idx].__dataSchema) {
        const __dataSchema = _cloneDeep(this.schema.items);
        ncformUtils.setValueToSchema(
          this.schema.value[idx],
          __dataSchema,
          true
        );
        this.$set(this.schema.value, idx, { __dataSchema });
      }

      if (!this.schema.value[idx].__dataSchema.__id) {
        this.schema.value[idx].__dataSchema.__id = Math.random();
      }
    },

    delItem(idx) {
      this.schema.value.splice(idx, 1);
    },

    delAllItems() {
      this.schema.value = [];
    },

    itemUp(idx) {
      if (idx !== 0) {
        this.schema.value.splice(
          idx - 1,
          0,
          this.schema.value.splice(idx, 1)[0]
        );
      }
    },

    itemDown(idx) {
      if (idx !== this.schema.value.length - 1) {
        this.schema.value.splice(
          idx + 1,
          0,
          this.schema.value.splice(idx, 1)[0]
        );
      }
    },

    collapse() {
      if (!this.$data.mergeConfig.disableCollapse)
        this.$data.mergeConfig.collapsed = !this.$data.mergeConfig.collapsed;
    },

    _changeLang(lang) {
      this.$options.lang = lang.replace(/-/, '_').toLowerCase();
      this.$data.i18n = this.$options.i18nData[this.$options.lang] || this.$options.i18nData.en;
    },

    $t(key, data) {
      return Object.prototype.toString.call(data) !== "[object Object]" ? this.$data.i18n[key] : _template(this.$data.i18n[key])(data);
    }
  }
};
