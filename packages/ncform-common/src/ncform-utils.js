import _get from "lodash-es/get";
import _map from "lodash-es/map";
import _kebabCase from "lodash-es/kebabCase";
import extend from "extend";

const ncformUtils = {
  /**
   * 对form schema进行完善，包括：
   * 1. 校验格式
   * 2. 补全属性和默认值
   * @param {*} formSchema
   */
  perfectFormSchema(formSchema) {
    let returnSchema;
    if (typeof formSchema === "string") {
      try {
        returnSchema = JSON.parse(formSchema);
      } catch (err) {
        throw new Error("fromSchema must be a valid json format", err);
      }
    } else if (Object.prototype.toString.call(formSchema) === '[object Object]') {
      returnSchema = formSchema;
    } else {
      throw new Error("fromSchema must be a json object");
    }

    // 验证格式
    if (returnSchema.type !== "object") {
      throw new Error("fromSchema' root field type must be object");
    }

    // 补全数据

    // 根据type取得默认的widget
    function getDefWidget(type) {
      let result = "input";
      switch (type) {
        case "boolean":
          result = "radio";
          break;
        case "object":
          result = "object";
          break;
        case "array":
          result = "array";
          break;
        default:
          result = "input";
          break;
      }
      return result;
    }

    // 根据type取得默认的文本组件类型
    function getInputWidgetType(type) {
      let result = "text";
      switch (type) {
        case "number":
          result = "number";
          break;
        case "integer":
          result = "number";
          break;
        default:
          result = "text";
          break;
      }
      return result;
    }

    function addDefField(fieldName, fieldSchema) {
      let type = fieldSchema.type || "string";
      const fullFields = {
        /* 数据本身 */
        type: type,
        value: null, // 这里给了null，否则如果是对象这种，默认值就不会被覆盖了
        // value: ncformUtils.getDefVal(fieldSchema.type),

        /* UI */
        ui: {
          /* 通用的表单项字段 */
          label: fieldName === "$root" ? "" : fieldName,
          legend: fieldName === "$root" ? "" : fieldName,
          showLabel: true,
          showLegend: (ncformUtils.isNormalObjSchema(fieldSchema) || ncformUtils.isNormalArrSchema(fieldSchema)) ? true : false,
          noLabelSpace: type.toUpperCase() === type ? true : false, // 大写的类型为特殊的只读类型，所以不需要显示label
          description: "",
          placeholder: "",
          disabled: false,
          readonly: false,
          hidden: false,
          help: {
            show: false,
            content: ""
          },

          /* 渲染组件字段 */
          widget:
            fieldSchema.widget || getDefWidget(type),
          widgetConfig: {
            placeholder: _get(fieldSchema, "ui.placeholder", ""),
            disabled: _get(fieldSchema, "ui.disabled", false),
            readonly: _get(fieldSchema, "ui.readonly", false),
            hidden: _get(fieldSchema, "ui.hidden", false)
          }
        },

        rules: {}
      };

      if (fullFields.ui.widget === "input") {
        fullFields.ui.widgetConfig.type = getInputWidgetType(fullFields.type);
      }

      const result = extend(true, fullFields, fieldSchema);
      result.ui.widget = _kebabCase(result.ui.widget);
      return result;
    }

    function completionField(fieldName, fieldSchema) {
      const newFieldVal = addDefField(fieldName, fieldSchema);
      if (newFieldVal.properties) {
        const keys = Object.keys(newFieldVal.properties);
        keys.forEach(key => {
          newFieldVal.properties[key] = completionField(
            key,
            newFieldVal.properties[key]
          );
        });
      } else if (newFieldVal.items) {
        newFieldVal.items = completionField(fieldName, newFieldVal.items);
      }

      if (fieldName === "$root") {
        // 根节点
        const defaultGlobalConfig = {
          // 全局配置
          style: {
            formCls: "", // form class
            invalidFeedbackCls: "" // invalid feedback class
          },
          validationMsg: {},
          constants: {
            // 常量数据，可通过{{$const.}}访问
          },
          scrollToFailField: { // Automatically scroll to fields that failed validation
            enabled: true, // enable this feature or not
            container: 'body',
            duration: 500, // The duration (in milliseconds) of the scrolling animation
            offset: -80, // The offset that should be applied when scrolling.
          }
        };
        newFieldVal.globalConfig = newFieldVal.globalConfig || {};
        newFieldVal.globalConfig = extend(
          true,
          defaultGlobalConfig,
          newFieldVal.globalConfig
        );
      }

      return newFieldVal;
    }

    return completionField("$root", returnSchema);
  },

  /**
   * 从form schema中提取出model
   * @param {*} formSchema
   */
  getModelFromSchema(formSchema, fieldName) {
    let model = {};

    if (formSchema.type === "object") {
      if (formSchema.properties) {
        Object.keys(formSchema.properties).forEach(key => {
          if (
            ncformUtils.isNormalObjSchema(formSchema.properties[key]) ||
            ncformUtils.isNormalArrSchema(formSchema.properties[key])
          ) {
            model[key] = ncformUtils.getModelFromSchema(
              formSchema.properties[key],
              key
            );
          } else {
            if (formSchema.properties[key].type.toUpperCase() !== formSchema.properties[key].type) { // 大写的类型忽略掉
              model[key] = ncformUtils.priorityGetValue(
                "basic",
                formSchema.properties[key].value,
                ncformUtils.smartAnalyze(formSchema.properties[key].default),
                ncformUtils.getDefVal(formSchema.properties[key].type)
              );
            }
          }
        });
      }
      model = ncformUtils.priorityGetValue(
        "object",
        model,
        formSchema.value,
        ncformUtils.smartAnalyze(formSchema.default)
      );
    } else if (formSchema.type === "array") {
      model = [];

      if (
        ncformUtils.isNormalArrSchema(formSchema.items) ||
        ncformUtils.isNormalObjSchema(formSchema.items)
      ) {
        model.push(ncformUtils.getModelFromSchema(formSchema.items, fieldName));
      } else {
        model.push(
          ncformUtils.priorityGetValue(
            "basic",
            formSchema.items.value,
            ncformUtils.smartAnalyze(formSchema.items.default),
            ncformUtils.getDefVal(formSchema.items.type)
          )
        );
      }

      // model = ncformUtils.priorityGetValue('array', formSchema.value, model, formSchema.default);
      model = ncformUtils.priorityGetValue(
        "array",
        formSchema.value,
        ncformUtils.smartAnalyze(formSchema.default),
        []
      ); // 不让model来覆盖是为了空值的时候给出的值是正确的空数组

      model = model.map(item => {
        if (item.__dataSchema) {
          // 特殊处理
          return ncformUtils.getModelFromSchema(item.__dataSchema, "");
        }
        return item;
      });
    } else {
      model = ncformUtils.priorityGetValue(
        "basic",
        formSchema.value,
        ncformUtils.smartAnalyze(formSchema.default),
        ncformUtils.getDefVal(formSchema.type)
      );
    }

    return model;
  },

  /**
   * 将总的value赋值到form schema的各个value
   * @param {*} value
   * @param {*} formSchema
   * @param {Boolean} force 是否强制覆盖子结点的值，默认为false
   */
  setValueToSchema(value, formSchema, force) {
    function valToFirstLevelProperties(valParam, schemaParam, parentPath) {
      const val = valParam || {};
      const schema = schemaParam;
      if (ncformUtils.isNormalObjSchema(schema)) {
        Object.keys(schema.properties).forEach(key => {
          if (schema.properties && schema.properties[key]) {
            valToFirstLevelProperties(
              val[key],
              schema.properties[key],
              !parentPath ? key : `${parentPath}.${key}`
            );
          }
        });
      } else if (force || schema.value === undefined) {
        schema.value = !parentPath
          ? value
          : ncformUtils.priorityGetValue(
              "basic",
              _get(value, parentPath),
              schema.value,
              ncformUtils.smartAnalyze(schema.default),
              ncformUtils.getDefVal(schema.type)
            );
      }
    }

    valToFirstLevelProperties(value, formSchema, "");
  },

  /**
   * 是否正常的对象schema
   * @param {*} schema
   */
  isNormalObjSchema(schema) {
    return (
      schema.type === "object" &&
      !!schema.properties &&
      Object.keys(schema.properties).length > 0
    );
  },

  /**
   * 是否正常的数组schema
   * @param {*} schema
   */
  isNormalArrSchema(schema) {
    return (
      schema.type === "array" &&
      !!schema.items &&
      Object.keys(schema.items).length > 0
    );
  },

  /**
   * 根据数据路径取得相应的schema
   * @param {*} fromSchema
   * @param {*} path
   */
  getSchemaByPath(fromSchema, pathParam, idxChain) {
    let path = pathParam;
    if (idxChain) {
      // 处理[i]
      const idxList = idxChain.split(",") || [];
      idxList.forEach(idx => {
        path = path.replace("[i]", `[${idx}]`);
      });
    }

    const schemaPath = `properties.${path
      .replace(/\./g, ".properties.") // 对象
      .replace(/(\[\d+\])/g, ".value$1.__dataSchema")}`; // 数组

    return _get(fromSchema, schemaPath);
  },

  /**
   * 智能分析值
   * @param {*} val
   * @param {*}
   *   idxChain: 该值的索引链，即所在的路径中的所有数组中的索引，比如 persons[0].name[1].firstname，即该值为"0,1"
   *   data: {rootData: 代表$root的值, constData: 代表$const的值, selfData: 代表$self的值, tempData: 代表$tempData的值 }
   * 规则：
   * 1. 普通值直接返回
   * 2. 函数类型返回执行后的值
   * 3. 字符串且以dx:开头的，则会进行处理成可执行的脚本并执行返回结果（其中表达式中$root代表rootData, $const代表constData）
   */
  smartAnalyzeVal(
    val,
    { idxChain = "", data = { rootData: {}, constData: {}, selfData: {}, tempData: {} } } = {}
  ) {
    return ncformUtils.smartAnalyze(val, {
      idxChain,
      data: [
        {
          symbol: "$root",
          value: data.rootData
        },
        {
          symbol: "$const",
          value: data.constData
        },
        {
          symbol: "$self",
          value: data.selfData
        },
        {
          symbol: "$temp",
          value: data.tempData
        }
      ]
    });
  },

  /**
   * 智能分析值
   * @param {*} val
   * @param {*}
   *   idxChain: 该值的索引链，即所在的路径中的所有数组中的索引，比如 persons[0].name[1].firstname，即该值为"0,1"
   *   data: [ { symbol: '', value: {} }, ... ] symbol指数据代表的符号，比如$root；value即为数据本身
   *   expPrefix: 表达式前缀标识，默认值是"dx:"
   * 规则：
   * 1. 普通值直接返回
   * 2. 函数类型返回执行后的值
   * 3. 字符串且以dx:开头的，则会进行处理成可执行的脚本并执行返回结果
   *    支持的规则：$root.age / $root.person[0].age / $root.person[i].age (i表示取某数组中的某一项，由idxChain来指定具体项) / $root.person[e].age (e表示取该数组的每一项，返回是个数组值。注意：当使用e时，只能使用一次，并且不能与i搭配)
   */
  smartAnalyze(val, { idxChain = "", data = [], expPrefix = "dx:" } = {}) {
    const valType = typeof val;
    let result;
    const __get = _get;
    const __map = _map;

    data = data.map((
      dataItem // 套多一层是为了支持原始类型，如string, number
    ) =>
      Object.assign({}, dataItem, {
        value: { _value: dataItem.value }
      })
    );

    switch (valType) {
      case "string":
        if (val.indexOf(expPrefix) === 0) {
          // TODO daniel: 这里的替换可能需要再完善一下，可能会出错
          const idxChains = idxChain.split(",");
          // 假设val为：dx: {{$root.persons[i].age}} > 1 && {{$root.persons[i].age}} < 18
          const matchs = val.match(/\{{.*?}}/g) || []; // matchs值：["{{$root.persons[i].age}}", "{{$root.persons[i].age}}"]
          matchs.forEach(mItem => {
            // mItem值："{{$root.persons[i].age}}"
            let tempVal = mItem
              // trim
              .replace(/{{\s*/, '{{')
              .replace(/\s*}}/, '}}');

            data.forEach((dataItem, idx) => {
              if (tempVal.indexOf("[e]") >= 0) {
                tempVal = tempVal.replace(
                  new RegExp(`\\{{\\s*\\${dataItem.symbol}(.*)}}`),
                  `__map(data[${idx}].value._value, '$1')`
                );
              } else {
                tempVal = tempVal.replace(
                  new RegExp(`\\{{\\s*\\${dataItem.symbol}(\\.?.*)}}`),
                  `__get(data[${idx}].value, '_value$1')`
                ); // tempVal值：__get(_formData, 'persons[i].age')
              }
            });
            const brackets = tempVal.match(/\[.*?\]/g) || []; // brackets值：["[i]"]
            brackets.forEach((bItem, idx) => {
              // bItem值："[i]"
              if (bItem === "[e]") {
                // e表达式 [e]
                // before _map(data[0].value, '[e].id')
                tempVal = tempVal
                  .replace(", '", "")
                  .replace(/\[e\]\.{0,1}/, ", '")
                  .replace(", ''", "");
                // after __map(data[0].value, 'id')
              } else {
                // i表达式或者索引数字 [i] or [0]
                const bItemTemp = eval(bItem.replace(/i/g, idxChains[idx - 1])); // bItemTemp值：[0] （假设idxChain[0] == 0）
                tempVal = tempVal.replace(bItem, `[${bItemTemp}]`); // tempVal值：__get(_formData, 'persons[0].age')
              }
            });
            val = val.replace(mItem, tempVal);
          });
          result = eval(val);
        } else {
          result = val;
        }
        break;
      case "function":
        const idxChains = idxChain.split(",").filter(item => item).map(item => parseInt(item));
        result = val(...data.map(item => item.value._value).concat([idxChains]));
        break;
      default:
        result = val;
    }
    return result;
  },

  /**
   * 根据数据类型返回默认值
   * @param {*} dataType
   */
  getDefVal(dataType) {
    let defVal = "";
    switch (dataType) {
      case "string":
        defVal = "";
        break;
      case "number":
      case "integer":
        defVal = ""; // 数字默认值不好给，所以这里给undefined
        break;
      case "boolean":
        defVal = false;
        break;
      case "object":
        defVal = {};
        break;
      case "array":
        defVal = [];
        break;
      default:
        defVal = "";
        break;
    }
    return defVal;
  },

  /**
   * 取得val的type值
   * @param {*} val
   * @return undefined / string / number / array / object / bollean
   */
  getValType(val) {
    return Object.prototype.toString
      .call(val)
      .slice(8, -1)
      .toLowerCase();
  },

  /**
   * 判断值是否为空
   * @param {*} val
   */
  notEmptyVal(val) {
    switch (ncformUtils.getValType(val)) {
      case "undefined":
        return false;
      case "string":
        return val.length !== 0;
      case "number":
        return !Number.isNaN(val) && Number.isFinite(val);
      case "array":
        return val.length !== 0;
      case "object":
        return Object.keys(val).length !== 0;
      case "boolean":
        return true;
      default:
        return false;
    }
  },

  /**
   * get element
   * @param {*} node element id || element css selector || element instance
   */
  getElement(node) {
    let returnElem;
    if (typeof node === "string") {
      // element id or css selector
      returnElem =
        document.getElementById(node) || document.querySelector(node);
    } else if (node instanceof Element) {
      // element
      returnElem = node;
    } else {
      throw new Error("node must be a element id, or css selector, or element");
    }

    if (!returnElem) throw new Error("node is not exist");
    return returnElem;
  },

  /**
   * 优先取值, 排在前面的值优先级更高
   * @param dataType basic / object / array
   */
  priorityGetValue(dataType, ...vals) {
    let result;
    switch (dataType) {
      case "object":
        vals = vals.map(val => val || {});
        result = extend(...[true].concat(vals.reverse()));
        break;
      case "array":
        vals = vals.map(val => val || []);
        result = extend(...[true].concat(vals.reverse()));
        break;
      default:
        // 基础类型
        result = vals.find(val => val !== undefined && val !== null);
        break;
    }
    return result;
  },

  /**
   * 生成随机ID
   * @param {*} num
   */
  genRandomId(num) {
    if (!num) num = 5;
    if (num > 10) num = 10;
    return Math.random()
      .toString(36)
      .substring(2, num + 2);
  },

  /**
   * Traversing JSON
   * @param {*} json
   * @param {*} func
   */
  traverseJSON(json, func) {
    let newJson = json;
    for (var i in newJson) {
      newJson[i] = func.apply(this, [i, newJson[i]]);
      if (newJson[i] !== null && typeof (newJson[i]) == "object") {
        newJson[i] = ncformUtils.traverseJSON(newJson[i], func);
      }
    }
    return newJson;
  }
};

export default ncformUtils;
module.exports = ncformUtils;
