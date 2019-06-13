import extend from "extend";
import ncformUtils from "../../ncform-utils";

export default {

  created() {
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
          type: "object"
        };
      }
    },

    formData: {
      type: Object
    },

    tempData: {
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
        layout: "v", // v:vertical | h:horizontal
        labelWidth: "100px"
      }
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
        data: { rootData: this.formData, constData: this.globalConst, tempData: this.tempData }
      });
    },
    _setTempData(key, value) {
      this.$set(this.tempData, key, value);
    },
    collapse() {
      if (!this.mergeConfig.disableCollapse)
        this.$data.collapsed = !this.$data.collapsed;
    },
    isNormalObjSchema: ncformUtils.isNormalObjSchema,
    isNormalArrSchema: ncformUtils.isNormalArrSchema
  }
};
