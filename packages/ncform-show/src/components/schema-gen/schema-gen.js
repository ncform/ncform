/**
 * <schema-gen></schema-gen>
 */
export default {
  /* ====================== 自定义属性 ====================== */
  editor: null,
  output: null,

  /* ====================== 生命周期 ====================== */

  created() {
    // 在这里做一些跟DOM无关的初始化, 比如获取初始化数据
  },

  mounted() {
    // 在这里做一些跟DOM有关的初始化
    const vm = this;
    vm.createEditor();
    vm.$options.editor.setValue(JSON.stringify(vm.$data.inputData, null, 2));
  },

  destroyed() {
    // 在这里销毁无用的资源，比如setTimeout返回的值
  },

  /* ====================== 引用组件 ====================== */

  components: {},

  /* ====================== 数据绑定 ====================== */

  props: {},

  data() {
    return {
      inputErr: {
        isShow: false,
        msg: "",
        type: "error"
      },
      inputData: {
        age: 18,
        name: {
          firstName: "daniel",
          lastName: "xiao"
        },
        addresses: [
          {
            provinceId: 1,
            cityId: 2
          }
        ],
        tags: ["man", "it"]
      },
      showNcform: false,
      ncformSchema: {}, // 模式
      ncformValue: {} // 模式对应的正确对象
    };
  },

  /* ====================== 事件处理 ====================== */

  methods: {
    createEditor() {
      const vm = this;
      vm.$options.editor = window.ace.edit(this.$refs.editor);
      vm.$options.output = window.ace.edit(this.$refs.output);
      vm.$options.editor.$blockScrolling = Infinity;
      vm.$options.output.$blockScrolling = Infinity;
      vm.$options.output.setReadOnly(true);
    },

    setAlertMsg(msg, isShow, type = "error") {
      const vm = this;
      vm.$data.inputErr.msg = msg;
      vm.$data.inputErr.type = type;
      vm.$data.inputErr.isShow = isShow;
      vm.showNcform = !isShow;
      if (isShow) {
        vm.$data.ncformSchema = {};
        vm.$data.ncformValue = {};
      }
    },

    jsonChange() {
      const vm = this;
      let resultJSONStr = "";
      try {
        const editorVal = vm.$options.editor.getValue();

        const resultJSON = vm.recurseTree({ val: eval(`(${editorVal})`) });

        const isObject =
          resultJSON.type === "object"
            ? 1 + (editorVal.replace(/\s/g, "") === "{}" ? 0 : 1)
            : 0;

        resultJSONStr = JSON.stringify(resultJSON, null, 2);

        switch (isObject) {
          case 2:
            vm.$data.ncformSchema = resultJSON;

            if (vm.$data.inputErr.isShow) {
              vm.setAlertMsg("", false);
            } else {
              vm.showNcform = true;
            }
            break;

          case 1:
            vm.setAlertMsg(
              "Must provide at least one key-value pair",
              true,
              "warning"
            );
            break;

          case 0:
            vm.setAlertMsg(
              `The input must be object type. Current type is ${
                resultJSON.type
              }。`,
              true,
              "warning"
            );
            break;

          default:
            break;
        }
      } catch (error) {
        console.error(error);
        vm.setAlertMsg("Not valid JSON data.", true);

      }

      vm.$options.output.setValue(resultJSONStr);
    },

    // 设置结构
    recurseTree({ key = null, val = null }) {
      const vm = this;

      // 设置ui的label值
      const ui = { ui: { label: key } };

      // 判断val的类型type
      const type = Object.prototype.toString
        .call(val)
        .slice(8, -1)
        .toLowerCase();

      let res = {};

      switch (type) {
        case "null":
        case "undefined":
          return { type };
        case "number":
        case "string":
        case "boolean":
          res = { type };
          break;
        case "array":
          // 以数组第一个元素为准
          res = { type, items: vm.recurseTree({ key, val: val[0] }) };
          break;
        case "object": {
          let buffer = {};
          for (const [k, v] of Object.entries(val)) {
            const result = vm.recurseTree({ key: k, val: v });
            buffer = { ...buffer, [k]: result };
          }
          res = { type, properties: buffer };
          break;
        }
        default: {
          const msg = `The existed type ${type} is no allowed.`;
          vm.setAlertMsg(msg, true);
          throw new Error(msg);
        }
      }

      return key ? { ...res, ...ui } : res;
    }
  },

  watch: {}
};
