import _cloneDeep from "lodash-es/cloneDeep";
import extend from "extend";
import ncformUtils from "../../ncform-utils";

export default {
  created() {
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
        addTxt: "Add",
        delAllTxt: "Del All"
      }
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
    }
  }
};
