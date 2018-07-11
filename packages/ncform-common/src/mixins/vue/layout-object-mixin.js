import extend from "extend";
import ncformUtils from "../../ncform-utils";

export default {
  created() {
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
          type: "object"
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
        layout: "v", // v:vertical | h:horizontal
        labelWidth: "100px"
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
    collapse() {
      if (!this.$data.mergeConfig.disableCollapse)
        this.$data.mergeConfig.collapsed = !this.$data.mergeConfig.collapsed;
    },
    isNormalObjSchema: ncformUtils.isNormalObjSchema,
    isNormalArrSchema: ncformUtils.isNormalArrSchema
  }
};
