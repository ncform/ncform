import _cloneDeep from "lodash-es/cloneDeep";
import _template from "lodash-es/template";
import extend from "extend";
import ncformUtils from "../../ncform-utils";

export default {

  i18nData: {
    en: {
    },
    zh_cn: {
    }
  },

  created() {

    this.$options.lang = window.__$ncform.lang;
    this.$data.i18n = this.$options.i18nData[this.$options.lang] || this.$options.i18nData.en;

    this.schema.value =
      this.schema.value && this.schema.value.length > 0
        ? this.schema.value
        : [ncformUtils.getDefVal(this.schema.items.type)];
    this.schema.value.forEach((item, idx) => {
      this.addItem(idx);
    });

    this.$data.collapsed = this.mergeConfig.collapsed;

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
      collapsed: false,
      defaultConfig: {
        collapsed: false,
        disableCollapse: false,
        disableReorder: false,
        disableAdd: false,
        disableDel: false,
        addTxt: "",
        delAllTxt: "",
        requiredDelConfirm: false,
        delConfirmText: {
          item: '',
          all: ''
        },
      },
      i18n: {},
    };
  },

  computed: {
    mergeConfig() {
      let newConfig = extend(
        true,
        {},
        this.$data.defaultConfig,
        this.config
      )
      return ncformUtils.traverseJSON(newConfig, (...params) => {
        let val = params[1];
        if (val !== null && typeof val !== 'object')
          return this._analyzeVal(val);
        else return val;
      })
    }
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

    delItem(idx, requiredConfirm, confirmText) {
      if (this.$confirm) { // use element-ui
        if (requiredConfirm) {
          this.$confirm(confirmText, '', {
            type: 'warning'
          }).then(() => {
            this.schema.value.splice(idx, 1);
          })
        } else {
          this.schema.value.splice(idx, 1);
        }
      } else {
        if (requiredConfirm) {
          window.confirm(confirmText) && this.schema.value.splice(idx, 1);
        } else {
          this.schema.value.splice(idx, 1);
        }
      }
    },

    delAllItems(requiredConfirm, confirmText) {
      if (this.$confirm) { // use element-ui
        if (requiredConfirm) {
          this.$confirm(confirmText, '', {
            type: 'warning'
          }).then(() => {
            this.schema.value = [];
          })
        } else {
          this.schema.value = [];
        }
      } else {
        if (requiredConfirm) {
          window.confirm(confirmText) && (this.schema.value = []);
        } else {
          this.schema.value = [];
        }
      }

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
      if (!this.mergeConfig.disableCollapse)
        this.$data.collapsed = !this.$data.collapsed;
    },

    $nclang(key, data) {
      return Object.prototype.toString.call(data) !== "[object Object]" ? this.$data.i18n[key] : _template(this.$data.i18n[key])(data);
    }
  }
};
