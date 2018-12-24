import extend from "extend";
import axios from "axios";
import ncformUtils from "../../ncform-utils";

export default {
  created() {

    if (!this.$http) {
      this.$http = this.$axios || this.axios || axios;
    }

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
      type: Object,
      default() {
        return {
          disabled: false,
          readonly: false,
          hidden: false,
          placeholder: ""
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
    },

    value: {
      type: [String, Number, Boolean, Object, Array]
    }
  },

  data() {
    return {
      mergeConfig: {},
      defaultConfig: {},
      modelVal: this.value
    };
  },

  computed: {
    disabled() {
      return this._analyzeVal(this.config.disabled);
    },
    readonly() {
      return this._analyzeVal(this.config.readonly);
    },
    placeholder() {
      return this._analyzeVal(this.config.placeholder);
    },
    hidden() {
      return this._analyzeVal(this.config.hidden);
    }
  },

  watch: {
    modelVal(newVal) {
      const val = this._processModelVal(newVal);
      this.$options.tempProcessedVal = val; // 用这个变量来记录处理过后的值，然后下面进行比较，避免循环
      this.$emit("input", val);
    },
    value(newVal) {
      if (
        JSON.stringify(this.$data.modelVal) !== JSON.stringify(newVal) &&
        JSON.stringify(this.$options.tempProcessedVal) !==
          JSON.stringify(newVal)
      ) {
        this.$data.modelVal = newVal;
      }
      this.$options.tempProcessedVal = null;
    }
  },

  methods: {
    _analyzeVal(val) {
      return ncformUtils.smartAnalyzeVal(val, {
        idxChain: this.idxChain,
        data: { rootData: this.formData, constData: this.globalConst }
      });
    },

    _processModelVal(modelVal) {
      return modelVal;
    }
  }
};
