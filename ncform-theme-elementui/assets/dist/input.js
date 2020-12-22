(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@ncform/ncform-common"));
	else if(typeof define === 'function' && define.amd)
		define("input", ["ncformCommon"], factory);
	else if(typeof exports === 'object')
		exports["input"] = factory(require("@ncform/ncform-common"));
	else
		root["input"] = factory(root["ncformCommon"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__ncform_ncform_common__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/control-comps/input.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js?!./src/components/control-comps/input.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/daniel/Projects/Owner/ncform/ncform/node_modules/babel-loader/lib!/Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib??vue-loader-options!./src/components/control-comps/input.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _ncformCommon = __webpack_require__(/*! @ncform/ncform-common */ "@ncform/ncform-common");

var _ncformCommon2 = _interopRequireDefault(_ncformCommon);

var _get2 = __webpack_require__(/*! lodash-es/get */ "./node_modules/lodash-es/get.js");

var _get3 = _interopRequireDefault(_get2);

var _cloneDeep2 = __webpack_require__(/*! lodash-es/cloneDeep */ "./node_modules/lodash-es/cloneDeep.js");

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controlMixin = _ncformCommon2.default.mixins.vue.controlMixin;

exports.default = {
  mixins: [controlMixin],

  i18nData: {
    en: {
      selectPls: "Select Please",
      uploading: "Uploading...",
      upload: "Upload",
      uploadFail: "Upload failed, please try again later!",
      resolutionTip1: "Please upload an image of <%= right %>, your image is <%= wrong %>",
      resolutionTip2: "Please upload an image with an aspect ratio of <%= right %>. Your image aspect ratio is <%= wrong %>",
      sizeTips1: "Please upload a file smaller than <%= right %>KB, your file is <%= wrong %>KB",
      sizeTips2: "Please upload a file larger than <%= right %>KB, your file is <%= wrong %>KB"
    },
    zh_cn: {
      selectPls: "请选择",
      uploading: "上传中...",
      upload: "点击上传",
      uploadFail: "上传失败，请稍后再试！",
      resolutionTip1: "请上传<%= right %>的图片，你的图片为<%= wrong %>",
      resolutionTip2: "请上传宽高比为<%= right %>的图片，你的图片宽高比为<%= wrong %>",
      sizeTips1: "请上传小于<%= right %>KB的文件，您的文件为<%= wrong %>KB",
      sizeTips2: "请上传大于<%= right %>KB的文件，您的文件为<%= wrong %>KB"
    }
  },

  props: {
    value: {
      type: [String, Number, Object]
    }
  },

  created: function created() {
    var _this = this;

    this.$watch("inputVal", function (newVal, oldVal) {
      if (!newVal && !oldVal || _this.mergeConfig.updateOn === 'blur') return;
      var val = _this._processModelVal();
      _this.$emit("input", val);
    });

    if (this.$data.modelVal !== undefined) {
      this.$data.inputVal = ["string", "number"].indexOf(_typeof(this.$data.modelVal)) >= 0 ? this.$data.modelVal : this.$data.modelVal[this.mergeConfig.modelField];
    }

    if ((0, _get3.default)(this.mergeConfig, "autocomplete.itemTemplate")) {
      this.$data.itemTemplate.template = (0, _get3.default)(this.mergeConfig, "autocomplete.itemTemplate");
    }

    if ((0, _get3.default)(this.mergeConfig, "compound.prependSelect")) {
      if ((0, _get3.default)(this.mergeConfig, "compound.prependSelect.enumSource")) {
        this.$data.prependSelectOptions = (0, _get3.default)(this.mergeConfig, "compound.prependSelect.enumSource");
      } else {
        this.$http({
          url: (0, _get3.default)(this.mergeConfig, "compound.prependSelect.enumSourceRemote.remoteUrl")
        }).then(function (res) {
          _this.$data.prependSelectOptions = _this.mergeConfig.compound.prependSelect.enumSourceRemote.resField ? (0, _get3.default)(res.data, _this.mergeConfig.compound.prependSelect.enumSourceRemote.resField) : res.data;
        });
      }
      this.$data.prependSelectVal = (0, _get3.default)(this.value, (0, _get3.default)(this.mergeConfig, "compound.prependSelect.modelField"));
      this.$watch("prependSelectVal", function () {
        var val = this._processModelVal();
        this.$emit("input", val);
      });
    }

    if ((0, _get3.default)(this.mergeConfig, "compound.appendSelect")) {
      if ((0, _get3.default)(this.mergeConfig, "compound.appendSelect.enumSource")) {
        this.$data.appendSelectOptions = (0, _get3.default)(this.mergeConfig, "compound.appendSelect.enumSource");
      } else {
        this.$http({
          url: (0, _get3.default)(this.mergeConfig, "compound.appendSelect.enumSourceRemote.remoteUrl")
        }).then(function (res) {
          _this.$data.appendSelectOptions = _this.mergeConfig.compound.appendSelect.enumSourceRemote.resField ? (0, _get3.default)(res.data, _this.mergeConfig.compound.appendSelect.enumSourceRemote.resField) : res.data;
        });
      }
      this.$data.appendSelectVal = (0, _get3.default)(this.value, (0, _get3.default)(this.mergeConfig, "compound.appendSelect.modelField"));

      this.$watch("appendSelectVal", function () {
        var val = this._processModelVal();
        this.$emit("input", val);
      });
    }
  },
  data: function data() {
    return {
      prependSelectOptions: [],
      prependSelectVal: "",
      appendSelectOptions: [],
      appendSelectVal: "",

      itemTemplate: {
        props: ["item"],
        template: ""
      },

      isUploading: false,

      inputVal: "",

      defaultConfig: {
        type: "text",
        trim: false,
        clearable: false,
        prefixIcon: "",
        suffixIcon: "",
        modelField: "",
        updateOn: 'change', // change or blur
        size: '',

        // autocomplete: { // 自动补全
        //   itemLabelField: 'label', // 项数据表示label的字段
        //   itemValueField: 'value', // 项数据表示value的字段
        //   itemTemplate: '<span>{{item.label}} : {{item.value}}</span>', // 显示项的模板
        //   immediateShow: false, // 是否立即显示，如果为false则当输入关键字才显示
        //   enumSource: [{value: [String | Number | Boolean], label: ''}], // 当提示数据是本地而非远程时提供
        //   enumSourceRemote: {
        //     remoteUrl: '', // 如果是远程访问，则填写该url
        //     paramName: 'keyword', // 请求参数名，默认是keyword
        //     otherParams: {}, // 其它请求参数，值支持 dx表达式
        //     resField: '', // 响应结果的字段
        //   }
        // },

        // compound: { // 组合
        //   prependLabel: '', // 前置标签
        //   appendLabel: '', // 后置标签
        //   prependIcon: '', // 后置图标样式
        //   appendIcon: '', // 前置图标样式
        //   prependSelect: { // 前置下拉框，使用该种的数据必须是对象
        //     itemLabelField: 'label', // 项数据表示label的字段
        //     itemValueField: 'value', // 项数据表示value的字段
        //     enumSource: [{value: [String | Number | Boolean], label: ''}], // 本地数据源
        //     enumSourceRemote: { // 远程数据源
        //       remoteUrl: '', // 如果是远程访问，则填写该url
        //       resField: '', // 响应结果的字段
        //     },
        //     modelField: '' // 用于绑定input value值的某个属性
        //   },
        //   appendSelect: { // 后置下拉框，使用该种的数据必须是对象
        //     itemLabelField: 'label', // 项数据表示label的字段
        //     itemValueField: 'value', // 项数据表示value的字段
        //     enumSource: [{value: [String | Number | Boolean], label: ''}], // 本地数据源
        //     enumSourceRemote: { // 远程数据源
        //       remoteUrl: '', // 如果是远程访问，则填写该url
        //       resField: '', // 响应结果的字段
        //     },
        //     modelField: '' // 用于绑定input value值的某个属性
        //   }
        // }

        upload: {
          // 上传的参数配置（当type="file"时，只认这个参数）
          uploadUrl: "", // 上传的地址
          data: {}, // 上传时附带的额外参数
          fileField: "file", // 表示文件的字段，默认是file
          accept: "", // 接受上传的文件类型
          constraint: {
            // 约束
            width: 0, // 图片宽度
            height: 0, // 图片高度
            sizeFixed: true, // 图片尺寸约束的大小是否按固定值，当为false时按比例
            maxSize: 0, // 最大图片大小，单位KB，0代表不限
            minSize: 0 // 最小图片大小，单位KB，0代表不限
          },
          resField: "", // 获取返回结果的字段,
          uploadText: "", //  上传按钮的名称
          headers: {}
        }
      }
    };
  },


  methods: {
    querySearch: function querySearch(queryString, cb) {
      var autoCpl = this.mergeConfig.autocomplete;

      // 本地数据源的处理
      if (autoCpl.enumSource) {
        cb(autoCpl.enumSource.filter(function (item) {
          var itemVal = item[autoCpl.itemValueField || "value"].toString().toLowerCase();
          return itemVal.indexOf(queryString.toLowerCase()) !== -1;
        }));
        return;
      }

      // 下面是远程数据源的处理
      var options = {
        url: autoCpl.enumSourceRemote.remoteUrl,
        params: (0, _cloneDeep3.default)((0, _get3.default)(this.mergeConfig, "autocomplete.enumSourceRemote.otherParams", {}))
      };
      if (autoCpl.enumSourceRemote.paramName) options.params[autoCpl.enumSourceRemote.paramName] = queryString;

      this.$http(options).then(function (res) {
        cb(autoCpl.enumSourceRemote.resField ? (0, _get3.default)(res.data, autoCpl.enumSourceRemote.resField) : res.data);
      });
    },
    handleClickUpload: function handleClickUpload() {
      // 处理选中的input[type="file"]
      var vm = this;
      if (!vm.disabled) {
        vm.$refs.upload.value = null;
        vm.$refs.upload.click();
      }
    },
    handleFileChange: function handleFileChange() {
      var _this2 = this;

      var vm = this;
      var fd = new FormData();
      var _vm$mergeConfig$uploa = vm.mergeConfig.upload,
          uploadUrl = _vm$mergeConfig$uploa.uploadUrl,
          data = _vm$mergeConfig$uploa.data,
          resField = _vm$mergeConfig$uploa.resField,
          fileField = _vm$mergeConfig$uploa.fileField,
          _vm$mergeConfig$uploa2 = _vm$mergeConfig$uploa.headers,
          headers = _vm$mergeConfig$uploa2 === undefined ? {} : _vm$mergeConfig$uploa2;

      var sendObj = Object.assign({}, data);
      sendObj[fileField] = this.$refs.upload.files[0];

      // 判断是否符合大小约束
      var fileSize = sendObj[fileField].size / 1024;
      if (vm.mergeConfig.upload.constraint.maxSize && fileSize > vm.mergeConfig.upload.constraint.maxSize) {
        vm.$message({
          message: vm.$nclang("sizeTips1", {
            right: vm.mergeConfig.upload.constraint.maxSize,
            wrong: fileSize.toFixed(0)
          }),
          type: "error"
        });
        return;
      }
      if (vm.mergeConfig.upload.constraint.minSize && fileSize < vm.mergeConfig.upload.constraint.minSize) {
        vm.$message({
          message: vm.$nclang("sizeTips2", {
            right: vm.mergeConfig.upload.constraint.minSize,
            wrong: fileSize.toFixed(0)
          }),
          type: "error"
        });
        return;
      }

      // 图片类型判断是否符合宽高要求
      var jurgeImgPromise = new Promise(function (resolve) {
        if (sendObj[fileField].type.indexOf("image") >= 0 && vm.mergeConfig.upload.constraint.width && vm.mergeConfig.upload.constraint.height) {
          var reader = new FileReader();
          reader.onload = function (theFile) {
            var image = new Image();
            image.onload = function () {
              var pass = false;
              if (vm.mergeConfig.upload.constraint.sizeFixed) {
                pass = this.width === vm.mergeConfig.upload.constraint.width && this.height === vm.mergeConfig.upload.constraint.height;
              } else {
                pass = (this.width / this.height).toFixed(1) === (vm.mergeConfig.upload.constraint.width / vm.mergeConfig.upload.constraint.height).toFixed(1);
              }
              if (!pass) {
                if (vm.mergeConfig.upload.constraint.sizeFixed) {
                  vm.$message({
                    message: vm.$nclang("resolutionTip1", {
                      right: vm.mergeConfig.upload.constraint.width + "x" + vm.mergeConfig.upload.constraint.height,
                      wrong: this.width + "x" + this.height
                    }),
                    type: "error"
                  });
                } else {
                  vm.$message({
                    message: vm.$nclang("resolutionTip2", {
                      right: vm._getFractionalExpression(vm.mergeConfig.upload.constraint.width / vm.mergeConfig.upload.constraint.height, 0.01),
                      wrong: vm._getFractionalExpression(this.width / this.height, 0.01)
                    }),
                    type: "error"
                  });
                }
              } else {
                resolve();
              }
            };
            image.src = theFile.target.result;
          };
          reader.readAsDataURL(sendObj[fileField]);
        } else {
          resolve();
        }
      });

      jurgeImgPromise.then(function () {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.entries(sendObj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            fd.append(key, value);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        _this2.$data.isUploading = true;
        _this2.$http({
          method: "POST",
          url: uploadUrl,
          data: fd,
          headers: headers
        }).then(function (res) {
          _this2.$data.inputVal = (0, _get3.default)(res, resField || "");
          _this2.$data.isUploading = false;
        }).catch(function () {
          vm.$message.error(_this2.$nclang("uploadFail"));
          _this2.$data.isUploading = false;
        });
      });
    },
    onBlur: function onBlur() {
      if (this.mergeConfig.updateOn === 'blur') {
        var val = this._processModelVal();
        this.$emit("input", val);
      }
    },
    onSelectSuggectionItem: function onSelectSuggectionItem() {
      if (this.mergeConfig.updateOn === 'blur') {
        var val = this._processModelVal();
        this.$emit("input", val);
      }
    },
    _getFractionalExpression: function _getFractionalExpression(value, threshold) {
      var i = 1,
          j = 1;
      while (Math.abs(i / j - value) > threshold) {
        if (i / j > value) {
          j++;
        } else if (i / j < value) {
          i++;
        }
      }
      return i + ":" + j;
    },


    // 你可以通过该方法在modelVal传出去之前进行加工处理，即在this.$emit('input')之前
    _processModelVal: function _processModelVal(newVal) {
      var val = void 0;
      if (newVal !== undefined) {
        // mixin调用的
        if (_typeof(this.value) === "object") {
          val = newVal[this.mergeConfig.modelField];
        } else {
          val = newVal;
        }
      } else {
        val = this.$data.inputVal;
      }

      if (this.mergeConfig.trim) {
        val = val ? val.toString().trim() : val;
      }

      switch (this.mergeConfig.type) {
        case "number":
          val = parseFloat(val);
          val = isNaN(val) ? "" : val;
          break;
        case "integer":
          val = parseInt(val);
          val = isNaN(val) ? "" : val;
          break;
        default:
          break;
      }

      if (_typeof(this.value) === "object") {
        var obj = {};
        obj[this.mergeConfig.modelField] = val;
        if ((0, _get3.default)(this.mergeConfig, "compound.prependSelect")) {
          obj[this.mergeConfig.compound.prependSelect.modelField] = this.$data.prependSelectVal;
        }
        if ((0, _get3.default)(this.mergeConfig, "compound.appendSelect")) {
          obj[this.mergeConfig.compound.appendSelect.modelField] = this.$data.appendSelectVal;
        }
        return obj;
      } else {
        this.$data.inputVal = val;
        return val;
      }
    }
  }
};

/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./src/components/control-comps/input.vue?vue&type=template&id=26aec122&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib??vue-loader-options!./src/components/control-comps/input.vue?vue&type=template&id=26aec122& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ncform-input" },
    [
      !_vm.mergeConfig.autocomplete
        ? _c(
            "el-input",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.hidden,
                  expression: "!hidden"
                }
              ],
              attrs: {
                size: _vm.mergeConfig.size,
                disabled: _vm.disabled,
                readonly: _vm.readonly,
                placeholder: _vm.placeholder,
                clearable: _vm.mergeConfig.clearable,
                type:
                  _vm.mergeConfig.type === "file"
                    ? "text"
                    : _vm.mergeConfig.type,
                "prefix-icon": _vm.mergeConfig.prefixIcon,
                "suffix-icon": _vm.mergeConfig.suffixIcon
              },
              on: { blur: _vm.onBlur },
              model: {
                value: _vm.inputVal,
                callback: function($$v) {
                  _vm.inputVal = $$v
                },
                expression: "inputVal"
              }
            },
            [
              _vm.mergeConfig.type !== "file" && _vm.mergeConfig.compound
                ? [
                    _vm.mergeConfig.compound.prependLabel
                      ? _c("template", { slot: "prepend" }, [
                          _vm._v(_vm._s(_vm.mergeConfig.compound.prependLabel))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.mergeConfig.compound.appendLabel
                      ? _c("template", { slot: "append" }, [
                          _vm._v(_vm._s(_vm.mergeConfig.compound.appendLabel))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.mergeConfig.compound.prependIcon
                      ? _c("el-button", {
                          attrs: {
                            slot: "prepend",
                            icon: _vm.mergeConfig.compound.prependIcon
                          },
                          slot: "prepend"
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.mergeConfig.compound.appendIcon
                      ? _c("el-button", {
                          attrs: {
                            slot: "append",
                            icon: _vm.mergeConfig.compound.appendIcon
                          },
                          slot: "append"
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.mergeConfig.compound.prependSelect
                      ? _c(
                          "el-select",
                          {
                            attrs: {
                              slot: "prepend",
                              placeholder:
                                _vm.mergeConfig.compound.prependSelect
                                  .placeholder || _vm.$nclang("selectPls")
                            },
                            slot: "prepend",
                            model: {
                              value: _vm.prependSelectVal,
                              callback: function($$v) {
                                _vm.prependSelectVal = $$v
                              },
                              expression: "prependSelectVal"
                            }
                          },
                          _vm._l(_vm.prependSelectOptions, function(item) {
                            return _c("el-option", {
                              key:
                                item[
                                  _vm.mergeConfig.compound.prependSelect
                                    .itemValueField
                                ],
                              attrs: {
                                label:
                                  item[
                                    _vm.mergeConfig.compound.prependSelect
                                      .itemLabelField
                                  ],
                                value:
                                  item[
                                    _vm.mergeConfig.compound.prependSelect
                                      .itemValueField
                                  ]
                              }
                            })
                          })
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.mergeConfig.compound.appendSelect
                      ? _c(
                          "el-select",
                          {
                            attrs: {
                              slot: "append",
                              placeholder:
                                _vm.mergeConfig.compound.appendSelect
                                  .placeholder || _vm.$nclang("selectPls")
                            },
                            slot: "append",
                            model: {
                              value: _vm.appendSelectVal,
                              callback: function($$v) {
                                _vm.appendSelectVal = $$v
                              },
                              expression: "appendSelectVal"
                            }
                          },
                          _vm._l(_vm.appendSelectOptions, function(item) {
                            return _c("el-option", {
                              key:
                                item[
                                  _vm.mergeConfig.compound.appendSelect
                                    .itemValueField
                                ],
                              attrs: {
                                label:
                                  item[
                                    _vm.mergeConfig.compound.appendSelect
                                      .itemLabelField
                                  ],
                                value:
                                  item[
                                    _vm.mergeConfig.compound.appendSelect
                                      .itemValueField
                                  ]
                              }
                            })
                          })
                        )
                      : _vm._e()
                  ]
                : _vm.mergeConfig.type === "file" && _vm.mergeConfig.upload
                  ? [
                      _vm.mergeConfig.upload.uploadUrl
                        ? _c(
                            "el-button",
                            {
                              staticClass: "ncform-input-upload",
                              attrs: { slot: "append" },
                              on: { click: _vm.handleClickUpload },
                              slot: "append"
                            },
                            [
                              _vm._v(
                                "\n        " +
                                  _vm._s(
                                    _vm.isUploading
                                      ? _vm.$nclang("uploading")
                                      : _vm.mergeConfig.upload.uploadText ||
                                        _vm.$nclang("upload")
                                  ) +
                                  "\n        "
                              ),
                              _c("input", {
                                ref: "upload",
                                attrs: {
                                  type: "file",
                                  accept: _vm.mergeConfig.upload.accept || ""
                                },
                                on: { change: _vm.handleFileChange }
                              })
                            ]
                          )
                        : _vm._e()
                    ]
                  : _vm._e()
            ],
            2
          )
        : _c(
            "el-autocomplete",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.hidden,
                  expression: "!hidden"
                }
              ],
              attrs: {
                disabled: _vm.disabled,
                readonly: _vm.readonly,
                placeholder: _vm.placeholder,
                clearable: _vm.mergeConfig.clearable,
                size: _vm.mergeConfig.size,
                type: _vm.mergeConfig.type,
                "prefix-icon": _vm.mergeConfig.prefixIcon,
                "suffix-icon": _vm.mergeConfig.suffixIcon,
                "fetch-suggestions": _vm.querySearch,
                "trigger-on-focus": !!_vm.mergeConfig.autocomplete
                  .immediateShow,
                "value-key":
                  _vm.mergeConfig.autocomplete.itemValueField || "value"
              },
              on: { select: _vm.onSelectSuggectionItem, blur: _vm.onBlur },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(props) {
                    return _vm.mergeConfig.autocomplete &&
                      _vm.mergeConfig.autocomplete.itemTemplate
                      ? [
                          _c(_vm.itemTemplate, {
                            tag: "component",
                            attrs: { item: props.item }
                          })
                        ]
                      : undefined
                  }
                }
              ]),
              model: {
                value: _vm.inputVal,
                callback: function($$v) {
                  _vm.inputVal = $$v
                },
                expression: "inputVal"
              }
            },
            [
              _vm.mergeConfig.compound
                ? [
                    _vm.mergeConfig.compound.prependLabel
                      ? _c("template", { slot: "prepend" }, [
                          _vm._v(_vm._s(_vm.mergeConfig.compound.prependLabel))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.mergeConfig.compound.appendLabel
                      ? _c("template", { slot: "append" }, [
                          _vm._v(_vm._s(_vm.mergeConfig.compound.appendLabel))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.mergeConfig.compound.prependIcon
                      ? _c("el-button", {
                          attrs: {
                            slot: "prepend",
                            icon: _vm.mergeConfig.compound.prependIcon
                          },
                          slot: "prepend"
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.mergeConfig.compound.appendIcon
                      ? _c("el-button", {
                          attrs: {
                            slot: "append",
                            icon: _vm.mergeConfig.compound.appendIcon
                          },
                          slot: "append"
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.mergeConfig.compound.prependSelect
                      ? _c(
                          "el-select",
                          {
                            attrs: {
                              slot: "prepend",
                              placeholder:
                                _vm.mergeConfig.compound.prependSelect
                                  .placeholder || _vm.$nclang("selectPls")
                            },
                            slot: "prepend",
                            model: {
                              value: _vm.prependSelectVal,
                              callback: function($$v) {
                                _vm.prependSelectVal = $$v
                              },
                              expression: "prependSelectVal"
                            }
                          },
                          _vm._l(_vm.prependSelectOptions, function(item) {
                            return _c("el-option", {
                              key:
                                item[
                                  _vm.mergeConfig.compound.prependSelect
                                    .itemValueField
                                ],
                              attrs: {
                                label:
                                  item[
                                    _vm.mergeConfig.compound.prependSelect
                                      .itemLabelField
                                  ],
                                value:
                                  item[
                                    _vm.mergeConfig.compound.prependSelect
                                      .itemValueField
                                  ]
                              }
                            })
                          })
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.mergeConfig.compound.appendSelect
                      ? _c(
                          "el-select",
                          {
                            attrs: {
                              slot: "append",
                              placeholder:
                                _vm.mergeConfig.compound.appendSelect
                                  .placeholder || _vm.$nclang("selectPls")
                            },
                            slot: "append",
                            model: {
                              value: _vm.appendSelectVal,
                              callback: function($$v) {
                                _vm.appendSelectVal = $$v
                              },
                              expression: "appendSelectVal"
                            }
                          },
                          _vm._l(_vm.appendSelectOptions, function(item) {
                            return _c("el-option", {
                              key:
                                item[
                                  _vm.mergeConfig.compound.appendSelectVal
                                    .itemValueField
                                ],
                              attrs: {
                                label:
                                  item[
                                    _vm.mergeConfig.compound.appendSelect
                                      .itemLabelField
                                  ],
                                value:
                                  item[
                                    _vm.mergeConfig.compound.appendSelect
                                      .itemValueField
                                  ]
                              }
                            })
                          })
                        )
                      : _vm._e()
                  ]
                : _vm._e()
            ],
            2
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!*************************************************************************************************************!*\
  !*** /Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?!./src/components/control-comps/input.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!/Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!/Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib??vue-loader-options!./src/components/control-comps/input.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "\n.ncform-input .el-select .el-input {\n  width: 130px;\n}\n.ncform-input .input-with-select .el-input-group__prepend {\n  background-color: #fff;\n}\n.ncform-input .ncform-input-upload [type=\"file\"] {\n  display: none;\n}\n.ncform-input .el-autocomplete {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ "./node_modules/lodash-es/_DataView.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_DataView.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNative = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");

var _getNative2 = _interopRequireDefault(_getNative);

var _root = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var DataView = (0, _getNative2.default)(_root2.default, 'DataView');

exports.default = DataView;

/***/ }),

/***/ "./node_modules/lodash-es/_Hash.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_Hash.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashClear = __webpack_require__(/*! ./_hashClear.js */ "./node_modules/lodash-es/_hashClear.js");

var _hashClear2 = _interopRequireDefault(_hashClear);

var _hashDelete = __webpack_require__(/*! ./_hashDelete.js */ "./node_modules/lodash-es/_hashDelete.js");

var _hashDelete2 = _interopRequireDefault(_hashDelete);

var _hashGet = __webpack_require__(/*! ./_hashGet.js */ "./node_modules/lodash-es/_hashGet.js");

var _hashGet2 = _interopRequireDefault(_hashGet);

var _hashHas = __webpack_require__(/*! ./_hashHas.js */ "./node_modules/lodash-es/_hashHas.js");

var _hashHas2 = _interopRequireDefault(_hashHas);

var _hashSet = __webpack_require__(/*! ./_hashSet.js */ "./node_modules/lodash-es/_hashSet.js");

var _hashSet2 = _interopRequireDefault(_hashSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear2.default;
Hash.prototype['delete'] = _hashDelete2.default;
Hash.prototype.get = _hashGet2.default;
Hash.prototype.has = _hashHas2.default;
Hash.prototype.set = _hashSet2.default;

exports.default = Hash;

/***/ }),

/***/ "./node_modules/lodash-es/_ListCache.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_ListCache.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listCacheClear = __webpack_require__(/*! ./_listCacheClear.js */ "./node_modules/lodash-es/_listCacheClear.js");

var _listCacheClear2 = _interopRequireDefault(_listCacheClear);

var _listCacheDelete = __webpack_require__(/*! ./_listCacheDelete.js */ "./node_modules/lodash-es/_listCacheDelete.js");

var _listCacheDelete2 = _interopRequireDefault(_listCacheDelete);

var _listCacheGet = __webpack_require__(/*! ./_listCacheGet.js */ "./node_modules/lodash-es/_listCacheGet.js");

var _listCacheGet2 = _interopRequireDefault(_listCacheGet);

var _listCacheHas = __webpack_require__(/*! ./_listCacheHas.js */ "./node_modules/lodash-es/_listCacheHas.js");

var _listCacheHas2 = _interopRequireDefault(_listCacheHas);

var _listCacheSet = __webpack_require__(/*! ./_listCacheSet.js */ "./node_modules/lodash-es/_listCacheSet.js");

var _listCacheSet2 = _interopRequireDefault(_listCacheSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear2.default;
ListCache.prototype['delete'] = _listCacheDelete2.default;
ListCache.prototype.get = _listCacheGet2.default;
ListCache.prototype.has = _listCacheHas2.default;
ListCache.prototype.set = _listCacheSet2.default;

exports.default = ListCache;

/***/ }),

/***/ "./node_modules/lodash-es/_Map.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Map.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNative = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");

var _getNative2 = _interopRequireDefault(_getNative);

var _root = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var Map = (0, _getNative2.default)(_root2.default, 'Map');

exports.default = Map;

/***/ }),

/***/ "./node_modules/lodash-es/_MapCache.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_MapCache.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapCacheClear = __webpack_require__(/*! ./_mapCacheClear.js */ "./node_modules/lodash-es/_mapCacheClear.js");

var _mapCacheClear2 = _interopRequireDefault(_mapCacheClear);

var _mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete.js */ "./node_modules/lodash-es/_mapCacheDelete.js");

var _mapCacheDelete2 = _interopRequireDefault(_mapCacheDelete);

var _mapCacheGet = __webpack_require__(/*! ./_mapCacheGet.js */ "./node_modules/lodash-es/_mapCacheGet.js");

var _mapCacheGet2 = _interopRequireDefault(_mapCacheGet);

var _mapCacheHas = __webpack_require__(/*! ./_mapCacheHas.js */ "./node_modules/lodash-es/_mapCacheHas.js");

var _mapCacheHas2 = _interopRequireDefault(_mapCacheHas);

var _mapCacheSet = __webpack_require__(/*! ./_mapCacheSet.js */ "./node_modules/lodash-es/_mapCacheSet.js");

var _mapCacheSet2 = _interopRequireDefault(_mapCacheSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear2.default;
MapCache.prototype['delete'] = _mapCacheDelete2.default;
MapCache.prototype.get = _mapCacheGet2.default;
MapCache.prototype.has = _mapCacheHas2.default;
MapCache.prototype.set = _mapCacheSet2.default;

exports.default = MapCache;

/***/ }),

/***/ "./node_modules/lodash-es/_Promise.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_Promise.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNative = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");

var _getNative2 = _interopRequireDefault(_getNative);

var _root = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var Promise = (0, _getNative2.default)(_root2.default, 'Promise');

exports.default = Promise;

/***/ }),

/***/ "./node_modules/lodash-es/_Set.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/_Set.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNative = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");

var _getNative2 = _interopRequireDefault(_getNative);

var _root = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var Set = (0, _getNative2.default)(_root2.default, 'Set');

exports.default = Set;

/***/ }),

/***/ "./node_modules/lodash-es/_Stack.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_Stack.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ListCache = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");

var _ListCache2 = _interopRequireDefault(_ListCache);

var _stackClear = __webpack_require__(/*! ./_stackClear.js */ "./node_modules/lodash-es/_stackClear.js");

var _stackClear2 = _interopRequireDefault(_stackClear);

var _stackDelete = __webpack_require__(/*! ./_stackDelete.js */ "./node_modules/lodash-es/_stackDelete.js");

var _stackDelete2 = _interopRequireDefault(_stackDelete);

var _stackGet = __webpack_require__(/*! ./_stackGet.js */ "./node_modules/lodash-es/_stackGet.js");

var _stackGet2 = _interopRequireDefault(_stackGet);

var _stackHas = __webpack_require__(/*! ./_stackHas.js */ "./node_modules/lodash-es/_stackHas.js");

var _stackHas2 = _interopRequireDefault(_stackHas);

var _stackSet = __webpack_require__(/*! ./_stackSet.js */ "./node_modules/lodash-es/_stackSet.js");

var _stackSet2 = _interopRequireDefault(_stackSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache2.default(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear2.default;
Stack.prototype['delete'] = _stackDelete2.default;
Stack.prototype.get = _stackGet2.default;
Stack.prototype.has = _stackHas2.default;
Stack.prototype.set = _stackSet2.default;

exports.default = Stack;

/***/ }),

/***/ "./node_modules/lodash-es/_Symbol.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_Symbol.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),

/***/ "./node_modules/lodash-es/_Uint8Array.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_Uint8Array.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var Uint8Array = _root2.default.Uint8Array;

exports.default = Uint8Array;

/***/ }),

/***/ "./node_modules/lodash-es/_WeakMap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_WeakMap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNative = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");

var _getNative2 = _interopRequireDefault(_getNative);

var _root = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var WeakMap = (0, _getNative2.default)(_root2.default, 'WeakMap');

exports.default = WeakMap;

/***/ }),

/***/ "./node_modules/lodash-es/_addMapEntry.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_addMapEntry.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

exports.default = addMapEntry;

/***/ }),

/***/ "./node_modules/lodash-es/_addSetEntry.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_addSetEntry.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

exports.default = addSetEntry;

/***/ }),

/***/ "./node_modules/lodash-es/_arrayEach.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayEach.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

exports.default = arrayEach;

/***/ }),

/***/ "./node_modules/lodash-es/_arrayFilter.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayFilter.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

exports.default = arrayFilter;

/***/ }),

/***/ "./node_modules/lodash-es/_arrayLikeKeys.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_arrayLikeKeys.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseTimes = __webpack_require__(/*! ./_baseTimes.js */ "./node_modules/lodash-es/_baseTimes.js");

var _baseTimes2 = _interopRequireDefault(_baseTimes);

var _isArguments = __webpack_require__(/*! ./isArguments.js */ "./node_modules/lodash-es/isArguments.js");

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isArray = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");

var _isArray2 = _interopRequireDefault(_isArray);

var _isBuffer = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");

var _isBuffer2 = _interopRequireDefault(_isBuffer);

var _isIndex = __webpack_require__(/*! ./_isIndex.js */ "./node_modules/lodash-es/_isIndex.js");

var _isIndex2 = _interopRequireDefault(_isIndex);

var _isTypedArray = __webpack_require__(/*! ./isTypedArray.js */ "./node_modules/lodash-es/isTypedArray.js");

var _isTypedArray2 = _interopRequireDefault(_isTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0, _isArray2.default)(value),
      isArg = !isArr && (0, _isArguments2.default)(value),
      isBuff = !isArr && !isArg && (0, _isBuffer2.default)(value),
      isType = !isArr && !isArg && !isBuff && (0, _isTypedArray2.default)(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? (0, _baseTimes2.default)(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    (0, _isIndex2.default)(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

exports.default = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash-es/_arrayMap.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_arrayMap.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

exports.default = arrayMap;

/***/ }),

/***/ "./node_modules/lodash-es/_arrayPush.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_arrayPush.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

exports.default = arrayPush;

/***/ }),

/***/ "./node_modules/lodash-es/_arrayReduce.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_arrayReduce.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

exports.default = arrayReduce;

/***/ }),

/***/ "./node_modules/lodash-es/_assignValue.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_assignValue.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseAssignValue = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");

var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

var _eq = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");

var _eq2 = _interopRequireDefault(_eq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0, _eq2.default)(objValue, value)) || value === undefined && !(key in object)) {
    (0, _baseAssignValue2.default)(object, key, value);
  }
}

exports.default = assignValue;

/***/ }),

/***/ "./node_modules/lodash-es/_assocIndexOf.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_assocIndexOf.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eq = __webpack_require__(/*! ./eq.js */ "./node_modules/lodash-es/eq.js");

var _eq2 = _interopRequireDefault(_eq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0, _eq2.default)(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

exports.default = assocIndexOf;

/***/ }),

/***/ "./node_modules/lodash-es/_baseAssign.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseAssign.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyObject = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");

var _copyObject2 = _interopRequireDefault(_copyObject);

var _keys = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && (0, _copyObject2.default)(source, (0, _keys2.default)(source), object);
}

exports.default = baseAssign;

/***/ }),

/***/ "./node_modules/lodash-es/_baseAssignIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignIn.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyObject = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");

var _copyObject2 = _interopRequireDefault(_copyObject);

var _keysIn = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");

var _keysIn2 = _interopRequireDefault(_keysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && (0, _copyObject2.default)(source, (0, _keysIn2.default)(source), object);
}

exports.default = baseAssignIn;

/***/ }),

/***/ "./node_modules/lodash-es/_baseAssignValue.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignValue.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(/*! ./_defineProperty.js */ "./node_modules/lodash-es/_defineProperty.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty2.default) {
    (0, _defineProperty2.default)(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

exports.default = baseAssignValue;

/***/ }),

/***/ "./node_modules/lodash-es/_baseClone.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseClone.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stack = __webpack_require__(/*! ./_Stack.js */ "./node_modules/lodash-es/_Stack.js");

var _Stack2 = _interopRequireDefault(_Stack);

var _arrayEach = __webpack_require__(/*! ./_arrayEach.js */ "./node_modules/lodash-es/_arrayEach.js");

var _arrayEach2 = _interopRequireDefault(_arrayEach);

var _assignValue = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/lodash-es/_assignValue.js");

var _assignValue2 = _interopRequireDefault(_assignValue);

var _baseAssign = __webpack_require__(/*! ./_baseAssign.js */ "./node_modules/lodash-es/_baseAssign.js");

var _baseAssign2 = _interopRequireDefault(_baseAssign);

var _baseAssignIn = __webpack_require__(/*! ./_baseAssignIn.js */ "./node_modules/lodash-es/_baseAssignIn.js");

var _baseAssignIn2 = _interopRequireDefault(_baseAssignIn);

var _cloneBuffer = __webpack_require__(/*! ./_cloneBuffer.js */ "./node_modules/lodash-es/_cloneBuffer.js");

var _cloneBuffer2 = _interopRequireDefault(_cloneBuffer);

var _copyArray = __webpack_require__(/*! ./_copyArray.js */ "./node_modules/lodash-es/_copyArray.js");

var _copyArray2 = _interopRequireDefault(_copyArray);

var _copySymbols = __webpack_require__(/*! ./_copySymbols.js */ "./node_modules/lodash-es/_copySymbols.js");

var _copySymbols2 = _interopRequireDefault(_copySymbols);

var _copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn.js */ "./node_modules/lodash-es/_copySymbolsIn.js");

var _copySymbolsIn2 = _interopRequireDefault(_copySymbolsIn);

var _getAllKeys = __webpack_require__(/*! ./_getAllKeys.js */ "./node_modules/lodash-es/_getAllKeys.js");

var _getAllKeys2 = _interopRequireDefault(_getAllKeys);

var _getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn.js */ "./node_modules/lodash-es/_getAllKeysIn.js");

var _getAllKeysIn2 = _interopRequireDefault(_getAllKeysIn);

var _getTag = __webpack_require__(/*! ./_getTag.js */ "./node_modules/lodash-es/_getTag.js");

var _getTag2 = _interopRequireDefault(_getTag);

var _initCloneArray = __webpack_require__(/*! ./_initCloneArray.js */ "./node_modules/lodash-es/_initCloneArray.js");

var _initCloneArray2 = _interopRequireDefault(_initCloneArray);

var _initCloneByTag = __webpack_require__(/*! ./_initCloneByTag.js */ "./node_modules/lodash-es/_initCloneByTag.js");

var _initCloneByTag2 = _interopRequireDefault(_initCloneByTag);

var _initCloneObject = __webpack_require__(/*! ./_initCloneObject.js */ "./node_modules/lodash-es/_initCloneObject.js");

var _initCloneObject2 = _interopRequireDefault(_initCloneObject);

var _isArray = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");

var _isArray2 = _interopRequireDefault(_isArray);

var _isBuffer = __webpack_require__(/*! ./isBuffer.js */ "./node_modules/lodash-es/isBuffer.js");

var _isBuffer2 = _interopRequireDefault(_isBuffer);

var _isObject = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

var _keys = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!(0, _isObject2.default)(value)) {
    return value;
  }
  var isArr = (0, _isArray2.default)(value);
  if (isArr) {
    result = (0, _initCloneArray2.default)(value);
    if (!isDeep) {
      return (0, _copyArray2.default)(value, result);
    }
  } else {
    var tag = (0, _getTag2.default)(value),
        isFunc = tag == funcTag || tag == genTag;

    if ((0, _isBuffer2.default)(value)) {
      return (0, _cloneBuffer2.default)(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : (0, _initCloneObject2.default)(value);
      if (!isDeep) {
        return isFlat ? (0, _copySymbolsIn2.default)(value, (0, _baseAssignIn2.default)(result, value)) : (0, _copySymbols2.default)(value, (0, _baseAssign2.default)(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = (0, _initCloneByTag2.default)(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack2.default());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull ? isFlat ? _getAllKeysIn2.default : _getAllKeys2.default : isFlat ? keysIn : _keys2.default;

  var props = isArr ? undefined : keysFunc(value);
  (0, _arrayEach2.default)(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    (0, _assignValue2.default)(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

exports.default = baseClone;

/***/ }),

/***/ "./node_modules/lodash-es/_baseCreate.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseCreate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObject = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!(0, _isObject2.default)(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

exports.default = baseCreate;

/***/ }),

/***/ "./node_modules/lodash-es/_baseGet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_baseGet.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castPath = __webpack_require__(/*! ./_castPath.js */ "./node_modules/lodash-es/_castPath.js");

var _castPath2 = _interopRequireDefault(_castPath);

var _toKey = __webpack_require__(/*! ./_toKey.js */ "./node_modules/lodash-es/_toKey.js");

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = (0, _castPath2.default)(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[(0, _toKey2.default)(path[index++])];
  }
  return index && index == length ? object : undefined;
}

exports.default = baseGet;

/***/ }),

/***/ "./node_modules/lodash-es/_baseGetAllKeys.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_baseGetAllKeys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayPush = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/lodash-es/_arrayPush.js");

var _arrayPush2 = _interopRequireDefault(_arrayPush);

var _isArray = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0, _isArray2.default)(object) ? result : (0, _arrayPush2.default)(result, symbolsFunc(object));
}

exports.default = baseGetAllKeys;

/***/ }),

/***/ "./node_modules/lodash-es/_baseGetTag.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseGetTag.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(/*! ./_getRawTag.js */ "./node_modules/lodash-es/_getRawTag.js");

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(/*! ./_objectToString.js */ "./node_modules/lodash-es/_objectToString.js");

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash-es/_baseIsArguments.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsArguments.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObjectLike = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0, _isObjectLike2.default)(value) && (0, _baseGetTag2.default)(value) == argsTag;
}

exports.default = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash-es/_baseIsNative.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsNative.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isMasked = __webpack_require__(/*! ./_isMasked.js */ "./node_modules/lodash-es/_isMasked.js");

var _isMasked2 = _interopRequireDefault(_isMasked);

var _isObject = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

var _toSource = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");

var _toSource2 = _interopRequireDefault(_toSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0, _isObject2.default)(value) || (0, _isMasked2.default)(value)) {
    return false;
  }
  var pattern = (0, _isFunction2.default)(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0, _toSource2.default)(value));
}

exports.default = baseIsNative;

/***/ }),

/***/ "./node_modules/lodash-es/_baseIsTypedArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_baseIsTypedArray.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _baseGetTag = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isLength = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");

var _isLength2 = _interopRequireDefault(_isLength);

var _isObjectLike = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return (0, _isObjectLike2.default)(value) && (0, _isLength2.default)(value.length) && !!typedArrayTags[(0, _baseGetTag2.default)(value)];
}

exports.default = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash-es/_baseKeys.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeys.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isPrototype = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");

var _isPrototype2 = _interopRequireDefault(_isPrototype);

var _nativeKeys = __webpack_require__(/*! ./_nativeKeys.js */ "./node_modules/lodash-es/_nativeKeys.js");

var _nativeKeys2 = _interopRequireDefault(_nativeKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0, _isPrototype2.default)(object)) {
    return (0, _nativeKeys2.default)(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

exports.default = baseKeys;

/***/ }),

/***/ "./node_modules/lodash-es/_baseKeysIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeysIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObject = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

var _isPrototype = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");

var _isPrototype2 = _interopRequireDefault(_isPrototype);

var _nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn.js */ "./node_modules/lodash-es/_nativeKeysIn.js");

var _nativeKeysIn2 = _interopRequireDefault(_nativeKeysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0, _isObject2.default)(object)) {
    return (0, _nativeKeysIn2.default)(object);
  }
  var isProto = (0, _isPrototype2.default)(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

exports.default = baseKeysIn;

/***/ }),

/***/ "./node_modules/lodash-es/_baseTimes.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseTimes.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

exports.default = baseTimes;

/***/ }),

/***/ "./node_modules/lodash-es/_baseToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_baseToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _arrayMap = __webpack_require__(/*! ./_arrayMap.js */ "./node_modules/lodash-es/_arrayMap.js");

var _arrayMap2 = _interopRequireDefault(_arrayMap);

var _isArray = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");

var _isArray2 = _interopRequireDefault(_isArray);

var _isSymbol = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");

var _isSymbol2 = _interopRequireDefault(_isSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol3.default ? _Symbol3.default.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if ((0, _isArray2.default)(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return (0, _arrayMap2.default)(value, baseToString) + '';
  }
  if ((0, _isSymbol2.default)(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

exports.default = baseToString;

/***/ }),

/***/ "./node_modules/lodash-es/_baseUnary.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseUnary.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

exports.default = baseUnary;

/***/ }),

/***/ "./node_modules/lodash-es/_castPath.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_castPath.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");

var _isArray2 = _interopRequireDefault(_isArray);

var _isKey = __webpack_require__(/*! ./_isKey.js */ "./node_modules/lodash-es/_isKey.js");

var _isKey2 = _interopRequireDefault(_isKey);

var _stringToPath = __webpack_require__(/*! ./_stringToPath.js */ "./node_modules/lodash-es/_stringToPath.js");

var _stringToPath2 = _interopRequireDefault(_stringToPath);

var _toString = __webpack_require__(/*! ./toString.js */ "./node_modules/lodash-es/toString.js");

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if ((0, _isArray2.default)(value)) {
    return value;
  }
  return (0, _isKey2.default)(value, object) ? [value] : (0, _stringToPath2.default)((0, _toString2.default)(value));
}

exports.default = castPath;

/***/ }),

/***/ "./node_modules/lodash-es/_cloneArrayBuffer.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Uint8Array = __webpack_require__(/*! ./_Uint8Array.js */ "./node_modules/lodash-es/_Uint8Array.js");

var _Uint8Array2 = _interopRequireDefault(_Uint8Array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array2.default(result).set(new _Uint8Array2.default(arrayBuffer));
  return result;
}

exports.default = cloneArrayBuffer;

/***/ }),

/***/ "./node_modules/lodash-es/_cloneBuffer.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneBuffer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _root = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root2.default.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

exports.default = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash-es/_cloneDataView.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_cloneDataView.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");

var _cloneArrayBuffer2 = _interopRequireDefault(_cloneArrayBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? (0, _cloneArrayBuffer2.default)(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

exports.default = cloneDataView;

/***/ }),

/***/ "./node_modules/lodash-es/_cloneMap.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_cloneMap.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addMapEntry = __webpack_require__(/*! ./_addMapEntry.js */ "./node_modules/lodash-es/_addMapEntry.js");

var _addMapEntry2 = _interopRequireDefault(_addMapEntry);

var _arrayReduce = __webpack_require__(/*! ./_arrayReduce.js */ "./node_modules/lodash-es/_arrayReduce.js");

var _arrayReduce2 = _interopRequireDefault(_arrayReduce);

var _mapToArray = __webpack_require__(/*! ./_mapToArray.js */ "./node_modules/lodash-es/_mapToArray.js");

var _mapToArray2 = _interopRequireDefault(_mapToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc((0, _mapToArray2.default)(map), CLONE_DEEP_FLAG) : (0, _mapToArray2.default)(map);
  return (0, _arrayReduce2.default)(array, _addMapEntry2.default, new map.constructor());
}

exports.default = cloneMap;

/***/ }),

/***/ "./node_modules/lodash-es/_cloneRegExp.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneRegExp.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

exports.default = cloneRegExp;

/***/ }),

/***/ "./node_modules/lodash-es/_cloneSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_cloneSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addSetEntry = __webpack_require__(/*! ./_addSetEntry.js */ "./node_modules/lodash-es/_addSetEntry.js");

var _addSetEntry2 = _interopRequireDefault(_addSetEntry);

var _arrayReduce = __webpack_require__(/*! ./_arrayReduce.js */ "./node_modules/lodash-es/_arrayReduce.js");

var _arrayReduce2 = _interopRequireDefault(_arrayReduce);

var _setToArray = __webpack_require__(/*! ./_setToArray.js */ "./node_modules/lodash-es/_setToArray.js");

var _setToArray2 = _interopRequireDefault(_setToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc((0, _setToArray2.default)(set), CLONE_DEEP_FLAG) : (0, _setToArray2.default)(set);
  return (0, _arrayReduce2.default)(array, _addSetEntry2.default, new set.constructor());
}

exports.default = cloneSet;

/***/ }),

/***/ "./node_modules/lodash-es/_cloneSymbol.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneSymbol.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol3.default ? _Symbol3.default.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

exports.default = cloneSymbol;

/***/ }),

/***/ "./node_modules/lodash-es/_cloneTypedArray.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneTypedArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");

var _cloneArrayBuffer2 = _interopRequireDefault(_cloneArrayBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? (0, _cloneArrayBuffer2.default)(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

exports.default = cloneTypedArray;

/***/ }),

/***/ "./node_modules/lodash-es/_copyArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_copyArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

exports.default = copyArray;

/***/ }),

/***/ "./node_modules/lodash-es/_copyObject.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_copyObject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignValue = __webpack_require__(/*! ./_assignValue.js */ "./node_modules/lodash-es/_assignValue.js");

var _assignValue2 = _interopRequireDefault(_assignValue);

var _baseAssignValue = __webpack_require__(/*! ./_baseAssignValue.js */ "./node_modules/lodash-es/_baseAssignValue.js");

var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0, _baseAssignValue2.default)(object, key, newValue);
    } else {
      (0, _assignValue2.default)(object, key, newValue);
    }
  }
  return object;
}

exports.default = copyObject;

/***/ }),

/***/ "./node_modules/lodash-es/_copySymbols.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbols.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyObject = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");

var _copyObject2 = _interopRequireDefault(_copyObject);

var _getSymbols = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");

var _getSymbols2 = _interopRequireDefault(_getSymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return (0, _copyObject2.default)(source, (0, _getSymbols2.default)(source), object);
}

exports.default = copySymbols;

/***/ }),

/***/ "./node_modules/lodash-es/_copySymbolsIn.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_copySymbolsIn.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyObject = __webpack_require__(/*! ./_copyObject.js */ "./node_modules/lodash-es/_copyObject.js");

var _copyObject2 = _interopRequireDefault(_copyObject);

var _getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn.js */ "./node_modules/lodash-es/_getSymbolsIn.js");

var _getSymbolsIn2 = _interopRequireDefault(_getSymbolsIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return (0, _copyObject2.default)(source, (0, _getSymbolsIn2.default)(source), object);
}

exports.default = copySymbolsIn;

/***/ }),

/***/ "./node_modules/lodash-es/_coreJsData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_coreJsData.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to detect overreaching core-js shims. */
var coreJsData = _root2.default['__core-js_shared__'];

exports.default = coreJsData;

/***/ }),

/***/ "./node_modules/lodash-es/_defineProperty.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_defineProperty.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNative = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");

var _getNative2 = _interopRequireDefault(_getNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defineProperty = function () {
  try {
    var func = (0, _getNative2.default)(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

exports.default = defineProperty;

/***/ }),

/***/ "./node_modules/lodash-es/_freeGlobal.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_freeGlobal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash-es/_getAllKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys.js */ "./node_modules/lodash-es/_baseGetAllKeys.js");

var _baseGetAllKeys2 = _interopRequireDefault(_baseGetAllKeys);

var _getSymbols = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");

var _getSymbols2 = _interopRequireDefault(_getSymbols);

var _keys = __webpack_require__(/*! ./keys.js */ "./node_modules/lodash-es/keys.js");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0, _baseGetAllKeys2.default)(object, _keys2.default, _getSymbols2.default);
}

exports.default = getAllKeys;

/***/ }),

/***/ "./node_modules/lodash-es/_getAllKeysIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getAllKeysIn.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys.js */ "./node_modules/lodash-es/_baseGetAllKeys.js");

var _baseGetAllKeys2 = _interopRequireDefault(_baseGetAllKeys);

var _getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn.js */ "./node_modules/lodash-es/_getSymbolsIn.js");

var _getSymbolsIn2 = _interopRequireDefault(_getSymbolsIn);

var _keysIn = __webpack_require__(/*! ./keysIn.js */ "./node_modules/lodash-es/keysIn.js");

var _keysIn2 = _interopRequireDefault(_keysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return (0, _baseGetAllKeys2.default)(object, _keysIn2.default, _getSymbolsIn2.default);
}

exports.default = getAllKeysIn;

/***/ }),

/***/ "./node_modules/lodash-es/_getMapData.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getMapData.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isKeyable = __webpack_require__(/*! ./_isKeyable.js */ "./node_modules/lodash-es/_isKeyable.js");

var _isKeyable2 = _interopRequireDefault(_isKeyable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return (0, _isKeyable2.default)(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

exports.default = getMapData;

/***/ }),

/***/ "./node_modules/lodash-es/_getNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsNative = __webpack_require__(/*! ./_baseIsNative.js */ "./node_modules/lodash-es/_baseIsNative.js");

var _baseIsNative2 = _interopRequireDefault(_baseIsNative);

var _getValue = __webpack_require__(/*! ./_getValue.js */ "./node_modules/lodash-es/_getValue.js");

var _getValue2 = _interopRequireDefault(_getValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = (0, _getValue2.default)(object, key);
  return (0, _baseIsNative2.default)(value) ? value : undefined;
}

exports.default = getNative;

/***/ }),

/***/ "./node_modules/lodash-es/_getPrototype.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),

/***/ "./node_modules/lodash-es/_getRawTag.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_getRawTag.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(/*! ./_Symbol.js */ "./node_modules/lodash-es/_Symbol.js");

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;

/***/ }),

/***/ "./node_modules/lodash-es/_getSymbols.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_getSymbols.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayFilter = __webpack_require__(/*! ./_arrayFilter.js */ "./node_modules/lodash-es/_arrayFilter.js");

var _arrayFilter2 = _interopRequireDefault(_arrayFilter);

var _stubArray = __webpack_require__(/*! ./stubArray.js */ "./node_modules/lodash-es/stubArray.js");

var _stubArray2 = _interopRequireDefault(_stubArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? _stubArray2.default : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return (0, _arrayFilter2.default)(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

exports.default = getSymbols;

/***/ }),

/***/ "./node_modules/lodash-es/_getSymbolsIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getSymbolsIn.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayPush = __webpack_require__(/*! ./_arrayPush.js */ "./node_modules/lodash-es/_arrayPush.js");

var _arrayPush2 = _interopRequireDefault(_arrayPush);

var _getPrototype = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _getSymbols = __webpack_require__(/*! ./_getSymbols.js */ "./node_modules/lodash-es/_getSymbols.js");

var _getSymbols2 = _interopRequireDefault(_getSymbols);

var _stubArray = __webpack_require__(/*! ./stubArray.js */ "./node_modules/lodash-es/stubArray.js");

var _stubArray2 = _interopRequireDefault(_stubArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? _stubArray2.default : function (object) {
  var result = [];
  while (object) {
    (0, _arrayPush2.default)(result, (0, _getSymbols2.default)(object));
    object = (0, _getPrototype2.default)(object);
  }
  return result;
};

exports.default = getSymbolsIn;

/***/ }),

/***/ "./node_modules/lodash-es/_getTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/_getTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DataView = __webpack_require__(/*! ./_DataView.js */ "./node_modules/lodash-es/_DataView.js");

var _DataView2 = _interopRequireDefault(_DataView);

var _Map = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _Promise = __webpack_require__(/*! ./_Promise.js */ "./node_modules/lodash-es/_Promise.js");

var _Promise2 = _interopRequireDefault(_Promise);

var _Set = __webpack_require__(/*! ./_Set.js */ "./node_modules/lodash-es/_Set.js");

var _Set2 = _interopRequireDefault(_Set);

var _WeakMap = __webpack_require__(/*! ./_WeakMap.js */ "./node_modules/lodash-es/_WeakMap.js");

var _WeakMap2 = _interopRequireDefault(_WeakMap);

var _baseGetTag = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _toSource = __webpack_require__(/*! ./_toSource.js */ "./node_modules/lodash-es/_toSource.js");

var _toSource2 = _interopRequireDefault(_toSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0, _toSource2.default)(_DataView2.default),
    mapCtorString = (0, _toSource2.default)(_Map2.default),
    promiseCtorString = (0, _toSource2.default)(_Promise2.default),
    setCtorString = (0, _toSource2.default)(_Set2.default),
    weakMapCtorString = (0, _toSource2.default)(_WeakMap2.default);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag2.default;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (_DataView2.default && getTag(new _DataView2.default(new ArrayBuffer(1))) != dataViewTag || _Map2.default && getTag(new _Map2.default()) != mapTag || _Promise2.default && getTag(_Promise2.default.resolve()) != promiseTag || _Set2.default && getTag(new _Set2.default()) != setTag || _WeakMap2.default && getTag(new _WeakMap2.default()) != weakMapTag) {
    getTag = function getTag(value) {
        var result = (0, _baseGetTag2.default)(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? (0, _toSource2.default)(Ctor) : '';

        if (ctorString) {
            switch (ctorString) {
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}

exports.default = getTag;

/***/ }),

/***/ "./node_modules/lodash-es/_getValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_getValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

exports.default = getValue;

/***/ }),

/***/ "./node_modules/lodash-es/_hashClear.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_hashClear.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nativeCreate = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");

var _nativeCreate2 = _interopRequireDefault(_nativeCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate2.default ? (0, _nativeCreate2.default)(null) : {};
  this.size = 0;
}

exports.default = hashClear;

/***/ }),

/***/ "./node_modules/lodash-es/_hashDelete.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_hashDelete.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

exports.default = hashDelete;

/***/ }),

/***/ "./node_modules/lodash-es/_hashGet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashGet.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nativeCreate = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");

var _nativeCreate2 = _interopRequireDefault(_nativeCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate2.default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

exports.default = hashGet;

/***/ }),

/***/ "./node_modules/lodash-es/_hashHas.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashHas.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nativeCreate = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");

var _nativeCreate2 = _interopRequireDefault(_nativeCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate2.default ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

exports.default = hashHas;

/***/ }),

/***/ "./node_modules/lodash-es/_hashSet.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_hashSet.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nativeCreate = __webpack_require__(/*! ./_nativeCreate.js */ "./node_modules/lodash-es/_nativeCreate.js");

var _nativeCreate2 = _interopRequireDefault(_nativeCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate2.default && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

exports.default = hashSet;

/***/ }),

/***/ "./node_modules/lodash-es/_initCloneArray.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneArray.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

exports.default = initCloneArray;

/***/ }),

/***/ "./node_modules/lodash-es/_initCloneByTag.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneByTag.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer.js */ "./node_modules/lodash-es/_cloneArrayBuffer.js");

var _cloneArrayBuffer2 = _interopRequireDefault(_cloneArrayBuffer);

var _cloneDataView = __webpack_require__(/*! ./_cloneDataView.js */ "./node_modules/lodash-es/_cloneDataView.js");

var _cloneDataView2 = _interopRequireDefault(_cloneDataView);

var _cloneMap = __webpack_require__(/*! ./_cloneMap.js */ "./node_modules/lodash-es/_cloneMap.js");

var _cloneMap2 = _interopRequireDefault(_cloneMap);

var _cloneRegExp = __webpack_require__(/*! ./_cloneRegExp.js */ "./node_modules/lodash-es/_cloneRegExp.js");

var _cloneRegExp2 = _interopRequireDefault(_cloneRegExp);

var _cloneSet = __webpack_require__(/*! ./_cloneSet.js */ "./node_modules/lodash-es/_cloneSet.js");

var _cloneSet2 = _interopRequireDefault(_cloneSet);

var _cloneSymbol = __webpack_require__(/*! ./_cloneSymbol.js */ "./node_modules/lodash-es/_cloneSymbol.js");

var _cloneSymbol2 = _interopRequireDefault(_cloneSymbol);

var _cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray.js */ "./node_modules/lodash-es/_cloneTypedArray.js");

var _cloneTypedArray2 = _interopRequireDefault(_cloneTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return (0, _cloneArrayBuffer2.default)(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return (0, _cloneDataView2.default)(object, isDeep);

    case float32Tag:case float64Tag:
    case int8Tag:case int16Tag:case int32Tag:
    case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
      return (0, _cloneTypedArray2.default)(object, isDeep);

    case mapTag:
      return (0, _cloneMap2.default)(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return (0, _cloneRegExp2.default)(object);

    case setTag:
      return (0, _cloneSet2.default)(object, isDeep, cloneFunc);

    case symbolTag:
      return (0, _cloneSymbol2.default)(object);
  }
}

exports.default = initCloneByTag;

/***/ }),

/***/ "./node_modules/lodash-es/_initCloneObject.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneObject.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseCreate = __webpack_require__(/*! ./_baseCreate.js */ "./node_modules/lodash-es/_baseCreate.js");

var _baseCreate2 = _interopRequireDefault(_baseCreate);

var _getPrototype = __webpack_require__(/*! ./_getPrototype.js */ "./node_modules/lodash-es/_getPrototype.js");

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isPrototype = __webpack_require__(/*! ./_isPrototype.js */ "./node_modules/lodash-es/_isPrototype.js");

var _isPrototype2 = _interopRequireDefault(_isPrototype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !(0, _isPrototype2.default)(object) ? (0, _baseCreate2.default)((0, _getPrototype2.default)(object)) : {};
}

exports.default = initCloneObject;

/***/ }),

/***/ "./node_modules/lodash-es/_isIndex.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_isIndex.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

exports.default = isIndex;

/***/ }),

/***/ "./node_modules/lodash-es/_isKey.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_isKey.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isArray = __webpack_require__(/*! ./isArray.js */ "./node_modules/lodash-es/isArray.js");

var _isArray2 = _interopRequireDefault(_isArray);

var _isSymbol = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");

var _isSymbol2 = _interopRequireDefault(_isSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if ((0, _isArray2.default)(value)) {
    return false;
  }
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || (0, _isSymbol2.default)(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

exports.default = isKey;

/***/ }),

/***/ "./node_modules/lodash-es/_isKeyable.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_isKeyable.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

exports.default = isKeyable;

/***/ }),

/***/ "./node_modules/lodash-es/_isMasked.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_isMasked.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _coreJsData = __webpack_require__(/*! ./_coreJsData.js */ "./node_modules/lodash-es/_coreJsData.js");

var _coreJsData2 = _interopRequireDefault(_coreJsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData2.default && _coreJsData2.default.keys && _coreJsData2.default.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

exports.default = isMasked;

/***/ }),

/***/ "./node_modules/lodash-es/_isPrototype.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_isPrototype.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

exports.default = isPrototype;

/***/ }),

/***/ "./node_modules/lodash-es/_listCacheClear.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheClear.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

exports.default = listCacheClear;

/***/ }),

/***/ "./node_modules/lodash-es/_listCacheDelete.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheDelete.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assocIndexOf = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");

var _assocIndexOf2 = _interopRequireDefault(_assocIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = (0, _assocIndexOf2.default)(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

exports.default = listCacheDelete;

/***/ }),

/***/ "./node_modules/lodash-es/_listCacheGet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheGet.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assocIndexOf = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");

var _assocIndexOf2 = _interopRequireDefault(_assocIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = (0, _assocIndexOf2.default)(data, key);

  return index < 0 ? undefined : data[index][1];
}

exports.default = listCacheGet;

/***/ }),

/***/ "./node_modules/lodash-es/_listCacheHas.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheHas.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assocIndexOf = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");

var _assocIndexOf2 = _interopRequireDefault(_assocIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return (0, _assocIndexOf2.default)(this.__data__, key) > -1;
}

exports.default = listCacheHas;

/***/ }),

/***/ "./node_modules/lodash-es/_listCacheSet.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_listCacheSet.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assocIndexOf = __webpack_require__(/*! ./_assocIndexOf.js */ "./node_modules/lodash-es/_assocIndexOf.js");

var _assocIndexOf2 = _interopRequireDefault(_assocIndexOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = (0, _assocIndexOf2.default)(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

exports.default = listCacheSet;

/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheClear.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheClear.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Hash = __webpack_require__(/*! ./_Hash.js */ "./node_modules/lodash-es/_Hash.js");

var _Hash2 = _interopRequireDefault(_Hash);

var _ListCache = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");

var _ListCache2 = _interopRequireDefault(_ListCache);

var _Map = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash2.default(),
    'map': new (_Map2.default || _ListCache2.default)(),
    'string': new _Hash2.default()
  };
}

exports.default = mapCacheClear;

/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheDelete.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheDelete.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMapData = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");

var _getMapData2 = _interopRequireDefault(_getMapData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = (0, _getMapData2.default)(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

exports.default = mapCacheDelete;

/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheGet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheGet.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMapData = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");

var _getMapData2 = _interopRequireDefault(_getMapData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return (0, _getMapData2.default)(this, key).get(key);
}

exports.default = mapCacheGet;

/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheHas.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheHas.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMapData = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");

var _getMapData2 = _interopRequireDefault(_getMapData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return (0, _getMapData2.default)(this, key).has(key);
}

exports.default = mapCacheHas;

/***/ }),

/***/ "./node_modules/lodash-es/_mapCacheSet.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_mapCacheSet.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMapData = __webpack_require__(/*! ./_getMapData.js */ "./node_modules/lodash-es/_getMapData.js");

var _getMapData2 = _interopRequireDefault(_getMapData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = (0, _getMapData2.default)(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

exports.default = mapCacheSet;

/***/ }),

/***/ "./node_modules/lodash-es/_mapToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_mapToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

exports.default = mapToArray;

/***/ }),

/***/ "./node_modules/lodash-es/_memoizeCapped.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_memoizeCapped.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _memoize = __webpack_require__(/*! ./memoize.js */ "./node_modules/lodash-es/memoize.js");

var _memoize2 = _interopRequireDefault(_memoize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = (0, _memoize2.default)(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

exports.default = memoizeCapped;

/***/ }),

/***/ "./node_modules/lodash-es/_nativeCreate.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeCreate.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNative = __webpack_require__(/*! ./_getNative.js */ "./node_modules/lodash-es/_getNative.js");

var _getNative2 = _interopRequireDefault(_getNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references that are verified to be native. */
var nativeCreate = (0, _getNative2.default)(Object, 'create');

exports.default = nativeCreate;

/***/ }),

/***/ "./node_modules/lodash-es/_nativeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(/*! ./_overArg.js */ "./node_modules/lodash-es/_overArg.js");

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0, _overArg2.default)(Object.keys, Object);

exports.default = nativeKeys;

/***/ }),

/***/ "./node_modules/lodash-es/_nativeKeysIn.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeysIn.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

exports.default = nativeKeysIn;

/***/ }),

/***/ "./node_modules/lodash-es/_nodeUtil.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_nodeUtil.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal2.default.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

exports.default = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash-es/_objectToString.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_objectToString.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;

/***/ }),

/***/ "./node_modules/lodash-es/_overArg.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_overArg.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),

/***/ "./node_modules/lodash-es/_root.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/_root.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(/*! ./_freeGlobal.js */ "./node_modules/lodash-es/_freeGlobal.js");

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),

/***/ "./node_modules/lodash-es/_setToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_setToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

exports.default = setToArray;

/***/ }),

/***/ "./node_modules/lodash-es/_stackClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_stackClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ListCache = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");

var _ListCache2 = _interopRequireDefault(_ListCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache2.default();
  this.size = 0;
}

exports.default = stackClear;

/***/ }),

/***/ "./node_modules/lodash-es/_stackDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_stackDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

exports.default = stackDelete;

/***/ }),

/***/ "./node_modules/lodash-es/_stackGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

exports.default = stackGet;

/***/ }),

/***/ "./node_modules/lodash-es/_stackHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

exports.default = stackHas;

/***/ }),

/***/ "./node_modules/lodash-es/_stackSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_stackSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ListCache = __webpack_require__(/*! ./_ListCache.js */ "./node_modules/lodash-es/_ListCache.js");

var _ListCache2 = _interopRequireDefault(_ListCache);

var _Map = __webpack_require__(/*! ./_Map.js */ "./node_modules/lodash-es/_Map.js");

var _Map2 = _interopRequireDefault(_Map);

var _MapCache = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");

var _MapCache2 = _interopRequireDefault(_MapCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache2.default) {
    var pairs = data.__data__;
    if (!_Map2.default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache2.default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

exports.default = stackSet;

/***/ }),

/***/ "./node_modules/lodash-es/_stringToPath.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_stringToPath.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _memoizeCapped = __webpack_require__(/*! ./_memoizeCapped.js */ "./node_modules/lodash-es/_memoizeCapped.js");

var _memoizeCapped2 = _interopRequireDefault(_memoizeCapped);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = (0, _memoizeCapped2.default)(function (string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

exports.default = stringToPath;

/***/ }),

/***/ "./node_modules/lodash-es/_toKey.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/_toKey.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isSymbol = __webpack_require__(/*! ./isSymbol.js */ "./node_modules/lodash-es/isSymbol.js");

var _isSymbol2 = _interopRequireDefault(_isSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || (0, _isSymbol2.default)(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

exports.default = toKey;

/***/ }),

/***/ "./node_modules/lodash-es/_toSource.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/_toSource.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

exports.default = toSource;

/***/ }),

/***/ "./node_modules/lodash-es/cloneDeep.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/cloneDeep.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseClone = __webpack_require__(/*! ./_baseClone.js */ "./node_modules/lodash-es/_baseClone.js");

var _baseClone2 = _interopRequireDefault(_baseClone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return (0, _baseClone2.default)(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

exports.default = cloneDeep;

/***/ }),

/***/ "./node_modules/lodash-es/eq.js":
/*!**************************************!*\
  !*** ./node_modules/lodash-es/eq.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

exports.default = eq;

/***/ }),

/***/ "./node_modules/lodash-es/get.js":
/*!***************************************!*\
  !*** ./node_modules/lodash-es/get.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGet = __webpack_require__(/*! ./_baseGet.js */ "./node_modules/lodash-es/_baseGet.js");

var _baseGet2 = _interopRequireDefault(_baseGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : (0, _baseGet2.default)(object, path);
  return result === undefined ? defaultValue : result;
}

exports.default = get;

/***/ }),

/***/ "./node_modules/lodash-es/isArguments.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArguments.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsArguments = __webpack_require__(/*! ./_baseIsArguments.js */ "./node_modules/lodash-es/_baseIsArguments.js");

var _baseIsArguments2 = _interopRequireDefault(_baseIsArguments);

var _isObjectLike = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = (0, _baseIsArguments2.default)(function () {
  return arguments;
}()) ? _baseIsArguments2.default : function (value) {
  return (0, _isObjectLike2.default)(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

exports.default = isArguments;

/***/ }),

/***/ "./node_modules/lodash-es/isArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/isArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

exports.default = isArray;

/***/ }),

/***/ "./node_modules/lodash-es/isArrayLike.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/isArrayLike.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction = __webpack_require__(/*! ./isFunction.js */ "./node_modules/lodash-es/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isLength = __webpack_require__(/*! ./isLength.js */ "./node_modules/lodash-es/isLength.js");

var _isLength2 = _interopRequireDefault(_isLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0, _isLength2.default)(value.length) && !(0, _isFunction2.default)(value);
}

exports.default = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash-es/isBuffer.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isBuffer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _root = __webpack_require__(/*! ./_root.js */ "./node_modules/lodash-es/_root.js");

var _root2 = _interopRequireDefault(_root);

var _stubFalse = __webpack_require__(/*! ./stubFalse.js */ "./node_modules/lodash-es/stubFalse.js");

var _stubFalse2 = _interopRequireDefault(_stubFalse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root2.default.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || _stubFalse2.default;

exports.default = isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash-es/isFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/isFunction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObject = __webpack_require__(/*! ./isObject.js */ "./node_modules/lodash-es/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0, _isObject2.default)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0, _baseGetTag2.default)(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

exports.default = isFunction;

/***/ }),

/***/ "./node_modules/lodash-es/isLength.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isLength.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

exports.default = isLength;

/***/ }),

/***/ "./node_modules/lodash-es/isObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

exports.default = isObject;

/***/ }),

/***/ "./node_modules/lodash-es/isObjectLike.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isObjectLike.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash-es/isSymbol.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/isSymbol.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _baseGetTag = __webpack_require__(/*! ./_baseGetTag.js */ "./node_modules/lodash-es/_baseGetTag.js");

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObjectLike = __webpack_require__(/*! ./isObjectLike.js */ "./node_modules/lodash-es/isObjectLike.js");

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || (0, _isObjectLike2.default)(value) && (0, _baseGetTag2.default)(value) == symbolTag;
}

exports.default = isSymbol;

/***/ }),

/***/ "./node_modules/lodash-es/isTypedArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash-es/isTypedArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray.js */ "./node_modules/lodash-es/_baseIsTypedArray.js");

var _baseIsTypedArray2 = _interopRequireDefault(_baseIsTypedArray);

var _baseUnary = __webpack_require__(/*! ./_baseUnary.js */ "./node_modules/lodash-es/_baseUnary.js");

var _baseUnary2 = _interopRequireDefault(_baseUnary);

var _nodeUtil = __webpack_require__(/*! ./_nodeUtil.js */ "./node_modules/lodash-es/_nodeUtil.js");

var _nodeUtil2 = _interopRequireDefault(_nodeUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil2.default && _nodeUtil2.default.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? (0, _baseUnary2.default)(nodeIsTypedArray) : _baseIsTypedArray2.default;

exports.default = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash-es/keys.js":
/*!****************************************!*\
  !*** ./node_modules/lodash-es/keys.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/lodash-es/_arrayLikeKeys.js");

var _arrayLikeKeys2 = _interopRequireDefault(_arrayLikeKeys);

var _baseKeys = __webpack_require__(/*! ./_baseKeys.js */ "./node_modules/lodash-es/_baseKeys.js");

var _baseKeys2 = _interopRequireDefault(_baseKeys);

var _isArrayLike = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0, _isArrayLike2.default)(object) ? (0, _arrayLikeKeys2.default)(object) : (0, _baseKeys2.default)(object);
}

exports.default = keys;

/***/ }),

/***/ "./node_modules/lodash-es/keysIn.js":
/*!******************************************!*\
  !*** ./node_modules/lodash-es/keysIn.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys.js */ "./node_modules/lodash-es/_arrayLikeKeys.js");

var _arrayLikeKeys2 = _interopRequireDefault(_arrayLikeKeys);

var _baseKeysIn = __webpack_require__(/*! ./_baseKeysIn.js */ "./node_modules/lodash-es/_baseKeysIn.js");

var _baseKeysIn2 = _interopRequireDefault(_baseKeysIn);

var _isArrayLike = __webpack_require__(/*! ./isArrayLike.js */ "./node_modules/lodash-es/isArrayLike.js");

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return (0, _isArrayLike2.default)(object) ? (0, _arrayLikeKeys2.default)(object, true) : (0, _baseKeysIn2.default)(object);
}

exports.default = keysIn;

/***/ }),

/***/ "./node_modules/lodash-es/memoize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash-es/memoize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MapCache = __webpack_require__(/*! ./_MapCache.js */ "./node_modules/lodash-es/_MapCache.js");

var _MapCache2 = _interopRequireDefault(_MapCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache2.default)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache2.default;

exports.default = memoize;

/***/ }),

/***/ "./node_modules/lodash-es/stubArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

exports.default = stubArray;

/***/ }),

/***/ "./node_modules/lodash-es/stubFalse.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/stubFalse.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

exports.default = stubFalse;

/***/ }),

/***/ "./node_modules/lodash-es/toString.js":
/*!********************************************!*\
  !*** ./node_modules/lodash-es/toString.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseToString = __webpack_require__(/*! ./_baseToString.js */ "./node_modules/lodash-es/_baseToString.js");

var _baseToString2 = _interopRequireDefault(_baseToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : (0, _baseToString2.default)(value);
}

exports.default = toString;

/***/ }),

/***/ "./node_modules/vue-style-loader/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-style-loader/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if (media) {
		styleElement.setAttribute("media", media);
	}

	if (sourceMap) {
		// https://developer.chrome.com/devtools/docs/javascript-debugging
		// this makes source maps inside style tags work properly in Chrome
		css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?!./src/components/control-comps/input.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!/Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!/Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib??vue-loader-options!./src/components/control-comps/input.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./input.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?!./src/components/control-comps/input.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/vue-style-loader/addStyles.js */ "./node_modules/vue-style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/control-comps/input.vue":
/*!************************************************!*\
  !*** ./src/components/control-comps/input.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_vue_vue_type_template_id_26aec122___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.vue?vue&type=template&id=26aec122& */ "./src/components/control-comps/input.vue?vue&type=template&id=26aec122&");
/* harmony import */ var _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.vue?vue&type=script&lang=js& */ "./src/components/control-comps/input.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _input_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.vue?vue&type=style&index=0&lang=scss& */ "./src/components/control-comps/input.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _input_vue_vue_type_template_id_26aec122___WEBPACK_IMPORTED_MODULE_0__["render"],
  _input_vue_vue_type_template_id_26aec122___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/control-comps/input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/control-comps/input.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/control-comps/input.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./input.vue?vue&type=script&lang=js& */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js?!./src/components/control-comps/input.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/control-comps/input.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************!*\
  !*** ./src/components/control-comps/input.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./input.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?!./src/components/control-comps/input.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/control-comps/input.vue?vue&type=template&id=26aec122&":
/*!*******************************************************************************!*\
  !*** ./src/components/control-comps/input.vue?vue&type=template&id=26aec122& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_26aec122___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./input.vue?vue&type=template&id=26aec122& */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./src/components/control-comps/input.vue?vue&type=template&id=26aec122&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_26aec122___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_26aec122___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "@ncform/ncform-common":
/*!************************************************************************************************************************************!*\
  !*** external {"root":"ncformCommon","commonjs2":"@ncform/ncform-common","commonjs":"@ncform/ncform-common","amd":"ncformCommon"} ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__ncform_ncform_common__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vc3JjL2NvbXBvbmVudHMvY29udHJvbC1jb21wcy9pbnB1dC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbC1jb21wcy9pbnB1dC52dWU/NWNlNiIsIndlYnBhY2s6Ly9bbmFtZV0vL1VzZXJzL2RhbmllbC9Qcm9qZWN0cy9Pd25lci9uY2Zvcm0vbmNmb3JtL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2wtY29tcHMvaW5wdXQudnVlP2E1YzAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX0RhdGFWaWV3LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX0hhc2guanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fTGlzdENhY2hlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX01hcC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19NYXBDYWNoZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19Qcm9taXNlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1NldC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TdGFjay5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19XZWFrTWFwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FkZE1hcEVudHJ5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FkZFNldEVudHJ5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5RWFjaC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheUxpa2VLZXlzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5TWFwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2FycmF5UHVzaC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hcnJheVJlZHVjZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUFzc2lnbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUFzc2lnblZhbHVlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VDbG9uZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlQ3JlYXRlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUtleXNJbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jYXN0UGF0aC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jbG9uZUFycmF5QnVmZmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Nsb25lRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVNYXAuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVSZWdFeHAuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVTZXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcHlBcnJheS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcHlTeW1ib2xzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NvcHlTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0QWxsS2V5c0luLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldE1hcERhdGEuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0U3ltYm9scy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0VGFnLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFZhbHVlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2hhc2hHZXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaEhhcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoU2V0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2luaXRDbG9uZUFycmF5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2luaXRDbG9uZUJ5VGFnLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2luaXRDbG9uZU9iamVjdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc0luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2lzS2V5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2lzS2V5YWJsZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVEZWxldGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlR2V0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2xpc3RDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX21lbW9pemVDYXBwZWQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25vZGVVdGlsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcm9vdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fc3RyaW5nVG9QYXRoLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3RvS2V5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3RvU291cmNlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvY2xvbmVEZWVwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvZXEuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9nZXQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQnVmZmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzTGVuZ3RoLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2tleXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9rZXlzSW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9tZW1vaXplLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvc3R1YkFycmF5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvc3R1YkZhbHNlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvdG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2wtY29tcHMvaW5wdXQudnVlP2JiNzgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbC1jb21wcy9pbnB1dC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbC1jb21wcy9pbnB1dC52dWU/NThiYSIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9jb250cm9sLWNvbXBzL2lucHV0LnZ1ZT81MDlhIiwid2VicGFjazovL1tuYW1lXS9leHRlcm5hbCB7XCJyb290XCI6XCJuY2Zvcm1Db21tb25cIixcImNvbW1vbmpzMlwiOlwiQG5jZm9ybS9uY2Zvcm0tY29tbW9uXCIsXCJjb21tb25qc1wiOlwiQG5jZm9ybS9uY2Zvcm0tY29tbW9uXCIsXCJhbWRcIjpcIm5jZm9ybUNvbW1vblwifSJdLCJuYW1lcyI6WyJEYXRhVmlldyIsInJvb3QiLCJIYXNoIiwiZW50cmllcyIsImluZGV4IiwibGVuZ3RoIiwiY2xlYXIiLCJlbnRyeSIsInNldCIsInByb3RvdHlwZSIsImhhc2hDbGVhciIsImhhc2hEZWxldGUiLCJnZXQiLCJoYXNoR2V0IiwiaGFzIiwiaGFzaEhhcyIsImhhc2hTZXQiLCJMaXN0Q2FjaGUiLCJsaXN0Q2FjaGVDbGVhciIsImxpc3RDYWNoZURlbGV0ZSIsImxpc3RDYWNoZUdldCIsImxpc3RDYWNoZUhhcyIsImxpc3RDYWNoZVNldCIsIk1hcCIsIk1hcENhY2hlIiwibWFwQ2FjaGVDbGVhciIsIm1hcENhY2hlRGVsZXRlIiwibWFwQ2FjaGVHZXQiLCJtYXBDYWNoZUhhcyIsIm1hcENhY2hlU2V0IiwiUHJvbWlzZSIsIlNldCIsIlN0YWNrIiwiZGF0YSIsIl9fZGF0YV9fIiwic2l6ZSIsInN0YWNrQ2xlYXIiLCJzdGFja0RlbGV0ZSIsInN0YWNrR2V0Iiwic3RhY2tIYXMiLCJzdGFja1NldCIsIlN5bWJvbCIsIlVpbnQ4QXJyYXkiLCJXZWFrTWFwIiwiYWRkTWFwRW50cnkiLCJtYXAiLCJwYWlyIiwiYWRkU2V0RW50cnkiLCJ2YWx1ZSIsImFkZCIsImFycmF5RWFjaCIsImFycmF5IiwiaXRlcmF0ZWUiLCJhcnJheUZpbHRlciIsInByZWRpY2F0ZSIsInJlc0luZGV4IiwicmVzdWx0Iiwib2JqZWN0UHJvdG8iLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImFycmF5TGlrZUtleXMiLCJpbmhlcml0ZWQiLCJpc0FyciIsImlzQXJnIiwiaXNCdWZmIiwiaXNUeXBlIiwic2tpcEluZGV4ZXMiLCJTdHJpbmciLCJrZXkiLCJjYWxsIiwicHVzaCIsImFycmF5TWFwIiwiQXJyYXkiLCJhcnJheVB1c2giLCJ2YWx1ZXMiLCJvZmZzZXQiLCJhcnJheVJlZHVjZSIsImFjY3VtdWxhdG9yIiwiaW5pdEFjY3VtIiwiYXNzaWduVmFsdWUiLCJvYmplY3QiLCJvYmpWYWx1ZSIsInVuZGVmaW5lZCIsImFzc29jSW5kZXhPZiIsImJhc2VBc3NpZ24iLCJzb3VyY2UiLCJiYXNlQXNzaWduSW4iLCJiYXNlQXNzaWduVmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSIsIkNMT05FX0RFRVBfRkxBRyIsIkNMT05FX0ZMQVRfRkxBRyIsIkNMT05FX1NZTUJPTFNfRkxBRyIsImFyZ3NUYWciLCJhcnJheVRhZyIsImJvb2xUYWciLCJkYXRlVGFnIiwiZXJyb3JUYWciLCJmdW5jVGFnIiwiZ2VuVGFnIiwibWFwVGFnIiwibnVtYmVyVGFnIiwib2JqZWN0VGFnIiwicmVnZXhwVGFnIiwic2V0VGFnIiwic3RyaW5nVGFnIiwic3ltYm9sVGFnIiwid2Vha01hcFRhZyIsImFycmF5QnVmZmVyVGFnIiwiZGF0YVZpZXdUYWciLCJmbG9hdDMyVGFnIiwiZmxvYXQ2NFRhZyIsImludDhUYWciLCJpbnQxNlRhZyIsImludDMyVGFnIiwidWludDhUYWciLCJ1aW50OENsYW1wZWRUYWciLCJ1aW50MTZUYWciLCJ1aW50MzJUYWciLCJjbG9uZWFibGVUYWdzIiwiYmFzZUNsb25lIiwiYml0bWFzayIsImN1c3RvbWl6ZXIiLCJzdGFjayIsImlzRGVlcCIsImlzRmxhdCIsImlzRnVsbCIsInRhZyIsImlzRnVuYyIsInN0YWNrZWQiLCJrZXlzRnVuYyIsImdldEFsbEtleXNJbiIsImdldEFsbEtleXMiLCJrZXlzSW4iLCJrZXlzIiwicHJvcHMiLCJzdWJWYWx1ZSIsIm9iamVjdENyZWF0ZSIsImNyZWF0ZSIsImJhc2VDcmVhdGUiLCJwcm90byIsImJhc2VHZXQiLCJwYXRoIiwiYmFzZUdldEFsbEtleXMiLCJzeW1ib2xzRnVuYyIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiYmFzZUdldFRhZyIsImJhc2VJc0FyZ3VtZW50cyIsInJlUmVnRXhwQ2hhciIsInJlSXNIb3N0Q3RvciIsImZ1bmNQcm90byIsIkZ1bmN0aW9uIiwiZnVuY1RvU3RyaW5nIiwidG9TdHJpbmciLCJyZUlzTmF0aXZlIiwiUmVnRXhwIiwicmVwbGFjZSIsImJhc2VJc05hdGl2ZSIsInBhdHRlcm4iLCJ0ZXN0IiwidHlwZWRBcnJheVRhZ3MiLCJiYXNlSXNUeXBlZEFycmF5IiwiYmFzZUtleXMiLCJiYXNlS2V5c0luIiwiaXNQcm90byIsImJhc2VUaW1lcyIsIm4iLCJJTkZJTklUWSIsInN5bWJvbFByb3RvIiwic3ltYm9sVG9TdHJpbmciLCJiYXNlVG9TdHJpbmciLCJiYXNlVW5hcnkiLCJmdW5jIiwiY2FzdFBhdGgiLCJjbG9uZUFycmF5QnVmZmVyIiwiYXJyYXlCdWZmZXIiLCJjb25zdHJ1Y3RvciIsImJ5dGVMZW5ndGgiLCJmcmVlRXhwb3J0cyIsImV4cG9ydHMiLCJub2RlVHlwZSIsImZyZWVNb2R1bGUiLCJtb2R1bGUiLCJtb2R1bGVFeHBvcnRzIiwiQnVmZmVyIiwiYWxsb2NVbnNhZmUiLCJjbG9uZUJ1ZmZlciIsImJ1ZmZlciIsInNsaWNlIiwiY29weSIsImNsb25lRGF0YVZpZXciLCJkYXRhVmlldyIsImJ5dGVPZmZzZXQiLCJjbG9uZU1hcCIsImNsb25lRnVuYyIsInJlRmxhZ3MiLCJjbG9uZVJlZ0V4cCIsInJlZ2V4cCIsImV4ZWMiLCJsYXN0SW5kZXgiLCJjbG9uZVNldCIsInN5bWJvbFZhbHVlT2YiLCJ2YWx1ZU9mIiwiY2xvbmVTeW1ib2wiLCJzeW1ib2wiLCJjbG9uZVR5cGVkQXJyYXkiLCJ0eXBlZEFycmF5IiwiY29weUFycmF5IiwiY29weU9iamVjdCIsImlzTmV3IiwibmV3VmFsdWUiLCJjb3B5U3ltYm9scyIsImNvcHlTeW1ib2xzSW4iLCJjb3JlSnNEYXRhIiwiZSIsImZyZWVHbG9iYWwiLCJnbG9iYWwiLCJnZXRTeW1ib2xzIiwiZ2V0U3ltYm9sc0luIiwiZ2V0TWFwRGF0YSIsImdldE5hdGl2ZSIsImdldFByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJnZXRSYXdUYWciLCJpc093biIsInVubWFza2VkIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJuYXRpdmVHZXRTeW1ib2xzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3R1YkFycmF5IiwicHJvbWlzZVRhZyIsImRhdGFWaWV3Q3RvclN0cmluZyIsIm1hcEN0b3JTdHJpbmciLCJwcm9taXNlQ3RvclN0cmluZyIsInNldEN0b3JTdHJpbmciLCJ3ZWFrTWFwQ3RvclN0cmluZyIsImdldFRhZyIsIkFycmF5QnVmZmVyIiwicmVzb2x2ZSIsIkN0b3IiLCJjdG9yU3RyaW5nIiwiZ2V0VmFsdWUiLCJuYXRpdmVDcmVhdGUiLCJIQVNIX1VOREVGSU5FRCIsImluaXRDbG9uZUFycmF5IiwiaW5wdXQiLCJpbml0Q2xvbmVCeVRhZyIsImluaXRDbG9uZU9iamVjdCIsIk1BWF9TQUZFX0lOVEVHRVIiLCJyZUlzVWludCIsImlzSW5kZXgiLCJyZUlzRGVlcFByb3AiLCJyZUlzUGxhaW5Qcm9wIiwiaXNLZXkiLCJ0eXBlIiwiaXNLZXlhYmxlIiwibWFza1NyY0tleSIsInVpZCIsIklFX1BST1RPIiwiaXNNYXNrZWQiLCJpc1Byb3RvdHlwZSIsImFycmF5UHJvdG8iLCJzcGxpY2UiLCJwb3AiLCJtYXBUb0FycmF5IiwiZm9yRWFjaCIsIk1BWF9NRU1PSVpFX1NJWkUiLCJtZW1vaXplQ2FwcGVkIiwiY2FjaGUiLCJuYXRpdmVLZXlzIiwibmF0aXZlS2V5c0luIiwiZnJlZVByb2Nlc3MiLCJwcm9jZXNzIiwibm9kZVV0aWwiLCJiaW5kaW5nIiwib2JqZWN0VG9TdHJpbmciLCJvdmVyQXJnIiwidHJhbnNmb3JtIiwiYXJnIiwiZnJlZVNlbGYiLCJzZWxmIiwic2V0VG9BcnJheSIsIkxBUkdFX0FSUkFZX1NJWkUiLCJwYWlycyIsInJlTGVhZGluZ0RvdCIsInJlUHJvcE5hbWUiLCJyZUVzY2FwZUNoYXIiLCJzdHJpbmdUb1BhdGgiLCJzdHJpbmciLCJtYXRjaCIsIm51bWJlciIsInF1b3RlIiwidG9LZXkiLCJ0b1NvdXJjZSIsImNsb25lRGVlcCIsImVxIiwib3RoZXIiLCJkZWZhdWx0VmFsdWUiLCJpc0FyZ3VtZW50cyIsImFyZ3VtZW50cyIsImlzQXJyYXkiLCJpc0FycmF5TGlrZSIsIm5hdGl2ZUlzQnVmZmVyIiwiaXNCdWZmZXIiLCJzdHViRmFsc2UiLCJhc3luY1RhZyIsInByb3h5VGFnIiwiaXNGdW5jdGlvbiIsImlzTGVuZ3RoIiwiaXNPYmplY3QiLCJpc09iamVjdExpa2UiLCJpc1N5bWJvbCIsIm5vZGVJc1R5cGVkQXJyYXkiLCJpc1R5cGVkQXJyYXkiLCJGVU5DX0VSUk9SX1RFWFQiLCJtZW1vaXplIiwicmVzb2x2ZXIiLCJUeXBlRXJyb3IiLCJtZW1vaXplZCIsImFyZ3MiLCJhcHBseSIsIkNhY2hlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2TkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1SkFBd0Y7QUFDeEY7QUFDQTtBQUNBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RrQztBQUNsQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBaUJBO0FBQ0E7QUFDQSxnRjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDdUwsMk9BQW9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0ksbVhBQW9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTlXLG1FIiwiZmlsZSI6ImlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQG5jZm9ybS9uY2Zvcm0tY29tbW9uXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiaW5wdXRcIiwgW1wibmNmb3JtQ29tbW9uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImlucHV0XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQG5jZm9ybS9uY2Zvcm0tY29tbW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpbnB1dFwiXSA9IGZhY3Rvcnkocm9vdFtcIm5jZm9ybUNvbW1vblwiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX25jZm9ybV9uY2Zvcm1fY29tbW9uX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb21wb25lbnRzL2NvbnRyb2wtY29tcHMvaW5wdXQudnVlXCIpO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibmNmb3JtLWlucHV0XCI+XG4gICAgPCEtLSDmsqHmnInoh6rliqjooaXlhaggLS0+XG4gICAgPGVsLWlucHV0XG4gICAgICB2LWlmPVwiIW1lcmdlQ29uZmlnLmF1dG9jb21wbGV0ZVwiXG4gICAgICA6c2l6ZT1cIm1lcmdlQ29uZmlnLnNpemVcIlxuICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgOnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxuICAgICAgdi1zaG93PVwiIWhpZGRlblwiXG4gICAgICA6Y2xlYXJhYmxlPVwibWVyZ2VDb25maWcuY2xlYXJhYmxlXCJcbiAgICAgIDp0eXBlPVwibWVyZ2VDb25maWcudHlwZSA9PT0gJ2ZpbGUnID8gJ3RleHQnIDogbWVyZ2VDb25maWcudHlwZVwiXG4gICAgICA6cHJlZml4LWljb249XCJtZXJnZUNvbmZpZy5wcmVmaXhJY29uXCJcbiAgICAgIDpzdWZmaXgtaWNvbj1cIm1lcmdlQ29uZmlnLnN1ZmZpeEljb25cIlxuICAgICAgQGJsdXI9XCJvbkJsdXJcIlxuICAgICAgdi1tb2RlbD1cImlucHV0VmFsXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgdi1pZj1cIm1lcmdlQ29uZmlnLnR5cGUgIT09ICdmaWxlJyAmJiBtZXJnZUNvbmZpZy5jb21wb3VuZFwiPlxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBzbG90PVwicHJlcGVuZFwiXG4gICAgICAgICAgdi1pZj1cIm1lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRMYWJlbFwiXG4gICAgICAgID57e21lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRMYWJlbH19PC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgc2xvdD1cImFwcGVuZFwiXG4gICAgICAgICAgdi1pZj1cIm1lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZExhYmVsXCJcbiAgICAgICAgPnt7bWVyZ2VDb25maWcuY29tcG91bmQuYXBwZW5kTGFiZWx9fTwvdGVtcGxhdGU+XG5cbiAgICAgICAgPGVsLWJ1dHRvblxuICAgICAgICAgIHNsb3Q9XCJwcmVwZW5kXCJcbiAgICAgICAgICB2LWlmPVwibWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZEljb25cIlxuICAgICAgICAgIDppY29uPVwibWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZEljb25cIlxuICAgICAgICA+PC9lbC1idXR0b24+XG4gICAgICAgIDxlbC1idXR0b25cbiAgICAgICAgICBzbG90PVwiYXBwZW5kXCJcbiAgICAgICAgICB2LWlmPVwibWVyZ2VDb25maWcuY29tcG91bmQuYXBwZW5kSWNvblwiXG4gICAgICAgICAgOmljb249XCJtZXJnZUNvbmZpZy5jb21wb3VuZC5hcHBlbmRJY29uXCJcbiAgICAgICAgPjwvZWwtYnV0dG9uPlxuXG4gICAgICAgIDxlbC1zZWxlY3RcbiAgICAgICAgICB2LWlmPVwibWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZFNlbGVjdFwiXG4gICAgICAgICAgdi1tb2RlbD1cInByZXBlbmRTZWxlY3RWYWxcIlxuICAgICAgICAgIHNsb3Q9XCJwcmVwZW5kXCJcbiAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJtZXJnZUNvbmZpZy5jb21wb3VuZC5wcmVwZW5kU2VsZWN0LnBsYWNlaG9sZGVyIHx8ICRuY2xhbmcoJ3NlbGVjdFBscycpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxlbC1vcHRpb25cbiAgICAgICAgICAgIHYtZm9yPVwiaXRlbSBpbiBwcmVwZW5kU2VsZWN0T3B0aW9uc1wiXG4gICAgICAgICAgICA6bGFiZWw9XCJpdGVtW21lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRTZWxlY3QuaXRlbUxhYmVsRmllbGRdXCJcbiAgICAgICAgICAgIDp2YWx1ZT1cIml0ZW1bbWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZFNlbGVjdC5pdGVtVmFsdWVGaWVsZF1cIlxuICAgICAgICAgICAgOmtleT1cIml0ZW1bbWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZFNlbGVjdC5pdGVtVmFsdWVGaWVsZF1cIlxuICAgICAgICAgID48L2VsLW9wdGlvbj5cbiAgICAgICAgPC9lbC1zZWxlY3Q+XG5cbiAgICAgICAgPGVsLXNlbGVjdFxuICAgICAgICAgIHYtaWY9XCJtZXJnZUNvbmZpZy5jb21wb3VuZC5hcHBlbmRTZWxlY3RcIlxuICAgICAgICAgIHYtbW9kZWw9XCJhcHBlbmRTZWxlY3RWYWxcIlxuICAgICAgICAgIHNsb3Q9XCJhcHBlbmRcIlxuICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIm1lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZFNlbGVjdC5wbGFjZWhvbGRlciB8fCAkbmNsYW5nKCdzZWxlY3RQbHMnKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZWwtb3B0aW9uXG4gICAgICAgICAgICB2LWZvcj1cIml0ZW0gaW4gYXBwZW5kU2VsZWN0T3B0aW9uc1wiXG4gICAgICAgICAgICA6bGFiZWw9XCJpdGVtW21lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZFNlbGVjdC5pdGVtTGFiZWxGaWVsZF1cIlxuICAgICAgICAgICAgOnZhbHVlPVwiaXRlbVttZXJnZUNvbmZpZy5jb21wb3VuZC5hcHBlbmRTZWxlY3QuaXRlbVZhbHVlRmllbGRdXCJcbiAgICAgICAgICAgIDprZXk9XCJpdGVtW21lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZFNlbGVjdC5pdGVtVmFsdWVGaWVsZF1cIlxuICAgICAgICAgID48L2VsLW9wdGlvbj5cbiAgICAgICAgPC9lbC1zZWxlY3Q+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8IS0t5LiK5Lyg57G75Z6LLS0+XG4gICAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwibWVyZ2VDb25maWcudHlwZSA9PT0gJ2ZpbGUnICYmIG1lcmdlQ29uZmlnLnVwbG9hZFwiPlxuICAgICAgICA8ZWwtYnV0dG9uXG4gICAgICAgICAgc2xvdD1cImFwcGVuZFwiXG4gICAgICAgICAgdi1pZj1cIm1lcmdlQ29uZmlnLnVwbG9hZC51cGxvYWRVcmxcIlxuICAgICAgICAgIGNsYXNzPVwibmNmb3JtLWlucHV0LXVwbG9hZFwiXG4gICAgICAgICAgQGNsaWNrPVwiaGFuZGxlQ2xpY2tVcGxvYWRcIlxuICAgICAgICA+XG4gICAgICAgICAge3tpc1VwbG9hZGluZyA/ICRuY2xhbmcoJ3VwbG9hZGluZycpIDogbWVyZ2VDb25maWcudXBsb2FkLnVwbG9hZFRleHQgfHwgJG5jbGFuZygndXBsb2FkJyl9fVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgcmVmPVwidXBsb2FkXCJcbiAgICAgICAgICAgIDphY2NlcHQ9XCJtZXJnZUNvbmZpZy51cGxvYWQuYWNjZXB0IHx8ICcnXCJcbiAgICAgICAgICAgIEBjaGFuZ2U9XCJoYW5kbGVGaWxlQ2hhbmdlXCJcbiAgICAgICAgICA+XG4gICAgICAgIDwvZWwtYnV0dG9uPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2VsLWlucHV0PlxuXG4gICAgPCEtLSDoh6rliqjooaXlhaggLS0+XG4gICAgPGVsLWF1dG9jb21wbGV0ZVxuICAgICAgdi1lbHNlXG4gICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiXG4gICAgICB2LXNob3c9XCIhaGlkZGVuXCJcbiAgICAgIDpjbGVhcmFibGU9XCJtZXJnZUNvbmZpZy5jbGVhcmFibGVcIlxuICAgICAgOnNpemU9XCJtZXJnZUNvbmZpZy5zaXplXCJcbiAgICAgIDp0eXBlPVwibWVyZ2VDb25maWcudHlwZVwiXG4gICAgICA6cHJlZml4LWljb249XCJtZXJnZUNvbmZpZy5wcmVmaXhJY29uXCJcbiAgICAgIDpzdWZmaXgtaWNvbj1cIm1lcmdlQ29uZmlnLnN1ZmZpeEljb25cIlxuICAgICAgOmZldGNoLXN1Z2dlc3Rpb25zPVwicXVlcnlTZWFyY2hcIlxuICAgICAgOnRyaWdnZXItb24tZm9jdXM9XCIhIW1lcmdlQ29uZmlnLmF1dG9jb21wbGV0ZS5pbW1lZGlhdGVTaG93XCJcbiAgICAgIDp2YWx1ZS1rZXk9XCJtZXJnZUNvbmZpZy5hdXRvY29tcGxldGUuaXRlbVZhbHVlRmllbGQgfHwgJ3ZhbHVlJ1wiXG4gICAgICB2LW1vZGVsPVwiaW5wdXRWYWxcIlxuICAgICAgQHNlbGVjdD1cIm9uU2VsZWN0U3VnZ2VjdGlvbkl0ZW1cIlxuICAgICAgQGJsdXI9XCJvbkJsdXJcIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICBzbG90LXNjb3BlPVwicHJvcHNcIlxuICAgICAgICB2LWlmPVwibWVyZ2VDb25maWcuYXV0b2NvbXBsZXRlICYmIG1lcmdlQ29uZmlnLmF1dG9jb21wbGV0ZS5pdGVtVGVtcGxhdGVcIlxuICAgICAgPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cIml0ZW1UZW1wbGF0ZVwiIDppdGVtPVwicHJvcHMuaXRlbVwiPjwvY29tcG9uZW50PlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJtZXJnZUNvbmZpZy5jb21wb3VuZFwiPlxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBzbG90PVwicHJlcGVuZFwiXG4gICAgICAgICAgdi1pZj1cIm1lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRMYWJlbFwiXG4gICAgICAgID57e21lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRMYWJlbH19PC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgc2xvdD1cImFwcGVuZFwiXG4gICAgICAgICAgdi1pZj1cIm1lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZExhYmVsXCJcbiAgICAgICAgPnt7bWVyZ2VDb25maWcuY29tcG91bmQuYXBwZW5kTGFiZWx9fTwvdGVtcGxhdGU+XG5cbiAgICAgICAgPGVsLWJ1dHRvblxuICAgICAgICAgIHNsb3Q9XCJwcmVwZW5kXCJcbiAgICAgICAgICB2LWlmPVwibWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZEljb25cIlxuICAgICAgICAgIDppY29uPVwibWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZEljb25cIlxuICAgICAgICA+PC9lbC1idXR0b24+XG4gICAgICAgIDxlbC1idXR0b25cbiAgICAgICAgICBzbG90PVwiYXBwZW5kXCJcbiAgICAgICAgICB2LWlmPVwibWVyZ2VDb25maWcuY29tcG91bmQuYXBwZW5kSWNvblwiXG4gICAgICAgICAgOmljb249XCJtZXJnZUNvbmZpZy5jb21wb3VuZC5hcHBlbmRJY29uXCJcbiAgICAgICAgPjwvZWwtYnV0dG9uPlxuXG4gICAgICAgIDxlbC1zZWxlY3RcbiAgICAgICAgICB2LWlmPVwibWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZFNlbGVjdFwiXG4gICAgICAgICAgdi1tb2RlbD1cInByZXBlbmRTZWxlY3RWYWxcIlxuICAgICAgICAgIHNsb3Q9XCJwcmVwZW5kXCJcbiAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJtZXJnZUNvbmZpZy5jb21wb3VuZC5wcmVwZW5kU2VsZWN0LnBsYWNlaG9sZGVyIHx8ICRuY2xhbmcoJ3NlbGVjdFBscycpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxlbC1vcHRpb25cbiAgICAgICAgICAgIHYtZm9yPVwiaXRlbSBpbiBwcmVwZW5kU2VsZWN0T3B0aW9uc1wiXG4gICAgICAgICAgICA6bGFiZWw9XCJpdGVtW21lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRTZWxlY3QuaXRlbUxhYmVsRmllbGRdXCJcbiAgICAgICAgICAgIDp2YWx1ZT1cIml0ZW1bbWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZFNlbGVjdC5pdGVtVmFsdWVGaWVsZF1cIlxuICAgICAgICAgICAgOmtleT1cIml0ZW1bbWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZFNlbGVjdC5pdGVtVmFsdWVGaWVsZF1cIlxuICAgICAgICAgID48L2VsLW9wdGlvbj5cbiAgICAgICAgPC9lbC1zZWxlY3Q+XG5cbiAgICAgICAgPGVsLXNlbGVjdFxuICAgICAgICAgIHYtaWY9XCJtZXJnZUNvbmZpZy5jb21wb3VuZC5hcHBlbmRTZWxlY3RcIlxuICAgICAgICAgIHYtbW9kZWw9XCJhcHBlbmRTZWxlY3RWYWxcIlxuICAgICAgICAgIHNsb3Q9XCJhcHBlbmRcIlxuICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIm1lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZFNlbGVjdC5wbGFjZWhvbGRlciB8fCAkbmNsYW5nKCdzZWxlY3RQbHMnKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZWwtb3B0aW9uXG4gICAgICAgICAgICB2LWZvcj1cIml0ZW0gaW4gYXBwZW5kU2VsZWN0T3B0aW9uc1wiXG4gICAgICAgICAgICA6bGFiZWw9XCJpdGVtW21lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZFNlbGVjdC5pdGVtTGFiZWxGaWVsZF1cIlxuICAgICAgICAgICAgOnZhbHVlPVwiaXRlbVttZXJnZUNvbmZpZy5jb21wb3VuZC5hcHBlbmRTZWxlY3QuaXRlbVZhbHVlRmllbGRdXCJcbiAgICAgICAgICAgIDprZXk9XCJpdGVtW21lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZFNlbGVjdFZhbC5pdGVtVmFsdWVGaWVsZF1cIlxuICAgICAgICAgID48L2VsLW9wdGlvbj5cbiAgICAgICAgPC9lbC1zZWxlY3Q+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZWwtYXV0b2NvbXBsZXRlPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5jZm9ybS1pbnB1dCB7XG4gIC5lbC1zZWxlY3QgLmVsLWlucHV0IHtcbiAgICB3aWR0aDogMTMwcHg7XG4gIH1cbiAgLmlucHV0LXdpdGgtc2VsZWN0IC5lbC1pbnB1dC1ncm91cF9fcHJlcGVuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAubmNmb3JtLWlucHV0LXVwbG9hZCB7XG4gICAgW3R5cGU9XCJmaWxlXCJdIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIC5lbC1hdXRvY29tcGxldGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuaW1wb3J0IG5jZm9ybUNvbW1vbiBmcm9tIFwiQG5jZm9ybS9uY2Zvcm0tY29tbW9uXCI7XG5pbXBvcnQgX2dldCBmcm9tIFwibG9kYXNoLWVzL2dldFwiO1xuaW1wb3J0IF9jbG9uZURlZXAgZnJvbSBcImxvZGFzaC1lcy9jbG9uZURlZXBcIjtcblxuY29uc3QgY29udHJvbE1peGluID0gbmNmb3JtQ29tbW9uLm1peGlucy52dWUuY29udHJvbE1peGluO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2NvbnRyb2xNaXhpbl0sXG5cbiAgaTE4bkRhdGE6IHtcbiAgICBlbjoge1xuICAgICAgc2VsZWN0UGxzOiBcIlNlbGVjdCBQbGVhc2VcIixcbiAgICAgIHVwbG9hZGluZzogXCJVcGxvYWRpbmcuLi5cIixcbiAgICAgIHVwbG9hZDogXCJVcGxvYWRcIixcbiAgICAgIHVwbG9hZEZhaWw6IFwiVXBsb2FkIGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlciFcIixcbiAgICAgIHJlc29sdXRpb25UaXAxOlxuICAgICAgICBcIlBsZWFzZSB1cGxvYWQgYW4gaW1hZ2Ugb2YgPCU9IHJpZ2h0ICU+LCB5b3VyIGltYWdlIGlzIDwlPSB3cm9uZyAlPlwiLFxuICAgICAgcmVzb2x1dGlvblRpcDI6XG4gICAgICAgIFwiUGxlYXNlIHVwbG9hZCBhbiBpbWFnZSB3aXRoIGFuIGFzcGVjdCByYXRpbyBvZiA8JT0gcmlnaHQgJT4uIFlvdXIgaW1hZ2UgYXNwZWN0IHJhdGlvIGlzIDwlPSB3cm9uZyAlPlwiLFxuICAgICAgc2l6ZVRpcHMxOlxuICAgICAgICBcIlBsZWFzZSB1cGxvYWQgYSBmaWxlIHNtYWxsZXIgdGhhbiA8JT0gcmlnaHQgJT5LQiwgeW91ciBmaWxlIGlzIDwlPSB3cm9uZyAlPktCXCIsXG4gICAgICBzaXplVGlwczI6XG4gICAgICAgIFwiUGxlYXNlIHVwbG9hZCBhIGZpbGUgbGFyZ2VyIHRoYW4gPCU9IHJpZ2h0ICU+S0IsIHlvdXIgZmlsZSBpcyA8JT0gd3JvbmcgJT5LQlwiXG4gICAgfSxcbiAgICB6aF9jbjoge1xuICAgICAgc2VsZWN0UGxzOiBcIuivt+mAieaLqVwiLFxuICAgICAgdXBsb2FkaW5nOiBcIuS4iuS8oOS4rS4uLlwiLFxuICAgICAgdXBsb2FkOiBcIueCueWHu+S4iuS8oFwiLFxuICAgICAgdXBsb2FkRmFpbDogXCLkuIrkvKDlpLHotKXvvIzor7fnqI3lkI7lho3or5XvvIFcIixcbiAgICAgIHJlc29sdXRpb25UaXAxOiBcIuivt+S4iuS8oDwlPSByaWdodCAlPueahOWbvueJh++8jOS9oOeahOWbvueJh+S4ujwlPSB3cm9uZyAlPlwiLFxuICAgICAgcmVzb2x1dGlvblRpcDI6XG4gICAgICAgIFwi6K+35LiK5Lyg5a696auY5q+U5Li6PCU9IHJpZ2h0ICU+55qE5Zu+54mH77yM5L2g55qE5Zu+54mH5a696auY5q+U5Li6PCU9IHdyb25nICU+XCIsXG4gICAgICBzaXplVGlwczE6IFwi6K+35LiK5Lyg5bCP5LqOPCU9IHJpZ2h0ICU+S0LnmoTmlofku7bvvIzmgqjnmoTmlofku7bkuLo8JT0gd3JvbmcgJT5LQlwiLFxuICAgICAgc2l6ZVRpcHMyOiBcIuivt+S4iuS8oOWkp+S6jjwlPSByaWdodCAlPktC55qE5paH5Lu277yM5oKo55qE5paH5Lu25Li6PCU9IHdyb25nICU+S0JcIlxuICAgIH1cbiAgfSxcblxuICBwcm9wczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXIsIE9iamVjdF1cbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLiR3YXRjaChcImlucHV0VmFsXCIsIChuZXdWYWwsIG9sZFZhbCkgPT4ge1xuICAgICAgaWYgKCghbmV3VmFsICYmICFvbGRWYWwpIHx8IHRoaXMubWVyZ2VDb25maWcudXBkYXRlT24gPT09ICdibHVyJykgcmV0dXJuO1xuICAgICAgbGV0IHZhbCA9IHRoaXMuX3Byb2Nlc3NNb2RlbFZhbCgpO1xuICAgICAgdGhpcy4kZW1pdChcImlucHV0XCIsIHZhbCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy4kZGF0YS5tb2RlbFZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLiRkYXRhLmlucHV0VmFsID1cbiAgICAgICAgW1wic3RyaW5nXCIsIFwibnVtYmVyXCJdLmluZGV4T2YodHlwZW9mIHRoaXMuJGRhdGEubW9kZWxWYWwpID49IDBcbiAgICAgICAgICA/IHRoaXMuJGRhdGEubW9kZWxWYWxcbiAgICAgICAgICA6IHRoaXMuJGRhdGEubW9kZWxWYWxbdGhpcy5tZXJnZUNvbmZpZy5tb2RlbEZpZWxkXTtcbiAgICB9XG5cbiAgICBpZiAoX2dldCh0aGlzLm1lcmdlQ29uZmlnLCBcImF1dG9jb21wbGV0ZS5pdGVtVGVtcGxhdGVcIikpIHtcbiAgICAgIHRoaXMuJGRhdGEuaXRlbVRlbXBsYXRlLnRlbXBsYXRlID0gX2dldChcbiAgICAgICAgdGhpcy5tZXJnZUNvbmZpZyxcbiAgICAgICAgXCJhdXRvY29tcGxldGUuaXRlbVRlbXBsYXRlXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKF9nZXQodGhpcy5tZXJnZUNvbmZpZywgXCJjb21wb3VuZC5wcmVwZW5kU2VsZWN0XCIpKSB7XG4gICAgICBpZiAoX2dldCh0aGlzLm1lcmdlQ29uZmlnLCBcImNvbXBvdW5kLnByZXBlbmRTZWxlY3QuZW51bVNvdXJjZVwiKSkge1xuICAgICAgICB0aGlzLiRkYXRhLnByZXBlbmRTZWxlY3RPcHRpb25zID0gX2dldChcbiAgICAgICAgICB0aGlzLm1lcmdlQ29uZmlnLFxuICAgICAgICAgIFwiY29tcG91bmQucHJlcGVuZFNlbGVjdC5lbnVtU291cmNlXCJcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGh0dHAoe1xuICAgICAgICAgIHVybDogX2dldChcbiAgICAgICAgICAgIHRoaXMubWVyZ2VDb25maWcsXG4gICAgICAgICAgICBcImNvbXBvdW5kLnByZXBlbmRTZWxlY3QuZW51bVNvdXJjZVJlbW90ZS5yZW1vdGVVcmxcIlxuICAgICAgICAgIClcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuJGRhdGEucHJlcGVuZFNlbGVjdE9wdGlvbnMgPSB0aGlzLm1lcmdlQ29uZmlnLmNvbXBvdW5kXG4gICAgICAgICAgICAucHJlcGVuZFNlbGVjdC5lbnVtU291cmNlUmVtb3RlLnJlc0ZpZWxkXG4gICAgICAgICAgICA/IF9nZXQoXG4gICAgICAgICAgICAgICAgcmVzLmRhdGEsXG4gICAgICAgICAgICAgICAgdGhpcy5tZXJnZUNvbmZpZy5jb21wb3VuZC5wcmVwZW5kU2VsZWN0LmVudW1Tb3VyY2VSZW1vdGVcbiAgICAgICAgICAgICAgICAgIC5yZXNGaWVsZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IHJlcy5kYXRhO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGRhdGEucHJlcGVuZFNlbGVjdFZhbCA9IF9nZXQoXG4gICAgICAgIHRoaXMudmFsdWUsXG4gICAgICAgIF9nZXQodGhpcy5tZXJnZUNvbmZpZywgXCJjb21wb3VuZC5wcmVwZW5kU2VsZWN0Lm1vZGVsRmllbGRcIilcbiAgICAgICk7XG4gICAgICB0aGlzLiR3YXRjaChcInByZXBlbmRTZWxlY3RWYWxcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCB2YWwgPSB0aGlzLl9wcm9jZXNzTW9kZWxWYWwoKTtcbiAgICAgICAgdGhpcy4kZW1pdChcImlucHV0XCIsIHZhbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoX2dldCh0aGlzLm1lcmdlQ29uZmlnLCBcImNvbXBvdW5kLmFwcGVuZFNlbGVjdFwiKSkge1xuICAgICAgaWYgKF9nZXQodGhpcy5tZXJnZUNvbmZpZywgXCJjb21wb3VuZC5hcHBlbmRTZWxlY3QuZW51bVNvdXJjZVwiKSkge1xuICAgICAgICB0aGlzLiRkYXRhLmFwcGVuZFNlbGVjdE9wdGlvbnMgPSBfZ2V0KFxuICAgICAgICAgIHRoaXMubWVyZ2VDb25maWcsXG4gICAgICAgICAgXCJjb21wb3VuZC5hcHBlbmRTZWxlY3QuZW51bVNvdXJjZVwiXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRodHRwKHtcbiAgICAgICAgICB1cmw6IF9nZXQoXG4gICAgICAgICAgICB0aGlzLm1lcmdlQ29uZmlnLFxuICAgICAgICAgICAgXCJjb21wb3VuZC5hcHBlbmRTZWxlY3QuZW51bVNvdXJjZVJlbW90ZS5yZW1vdGVVcmxcIlxuICAgICAgICAgIClcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgIHRoaXMuJGRhdGEuYXBwZW5kU2VsZWN0T3B0aW9ucyA9IHRoaXMubWVyZ2VDb25maWcuY29tcG91bmRcbiAgICAgICAgICAgIC5hcHBlbmRTZWxlY3QuZW51bVNvdXJjZVJlbW90ZS5yZXNGaWVsZFxuICAgICAgICAgICAgPyBfZ2V0KFxuICAgICAgICAgICAgICAgIHJlcy5kYXRhLFxuICAgICAgICAgICAgICAgIHRoaXMubWVyZ2VDb25maWcuY29tcG91bmQuYXBwZW5kU2VsZWN0LmVudW1Tb3VyY2VSZW1vdGVcbiAgICAgICAgICAgICAgICAgIC5yZXNGaWVsZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IHJlcy5kYXRhO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGRhdGEuYXBwZW5kU2VsZWN0VmFsID0gX2dldChcbiAgICAgICAgdGhpcy52YWx1ZSxcbiAgICAgICAgX2dldCh0aGlzLm1lcmdlQ29uZmlnLCBcImNvbXBvdW5kLmFwcGVuZFNlbGVjdC5tb2RlbEZpZWxkXCIpXG4gICAgICApO1xuXG4gICAgICB0aGlzLiR3YXRjaChcImFwcGVuZFNlbGVjdFZhbFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMuX3Byb2Nlc3NNb2RlbFZhbCgpO1xuICAgICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgdmFsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmVwZW5kU2VsZWN0T3B0aW9uczogW10sXG4gICAgICBwcmVwZW5kU2VsZWN0VmFsOiBcIlwiLFxuICAgICAgYXBwZW5kU2VsZWN0T3B0aW9uczogW10sXG4gICAgICBhcHBlbmRTZWxlY3RWYWw6IFwiXCIsXG5cbiAgICAgIGl0ZW1UZW1wbGF0ZToge1xuICAgICAgICBwcm9wczogW1wiaXRlbVwiXSxcbiAgICAgICAgdGVtcGxhdGU6IFwiXCJcbiAgICAgIH0sXG5cbiAgICAgIGlzVXBsb2FkaW5nOiBmYWxzZSxcblxuICAgICAgaW5wdXRWYWw6IFwiXCIsXG5cbiAgICAgIGRlZmF1bHRDb25maWc6IHtcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHRyaW06IGZhbHNlLFxuICAgICAgICBjbGVhcmFibGU6IGZhbHNlLFxuICAgICAgICBwcmVmaXhJY29uOiBcIlwiLFxuICAgICAgICBzdWZmaXhJY29uOiBcIlwiLFxuICAgICAgICBtb2RlbEZpZWxkOiBcIlwiLFxuICAgICAgICB1cGRhdGVPbjogJ2NoYW5nZScsIC8vIGNoYW5nZSBvciBibHVyXG4gICAgICAgIHNpemU6ICcnLFxuXG4gICAgICAgIC8vIGF1dG9jb21wbGV0ZTogeyAvLyDoh6rliqjooaXlhahcbiAgICAgICAgLy8gICBpdGVtTGFiZWxGaWVsZDogJ2xhYmVsJywgLy8g6aG55pWw5o2u6KGo56S6bGFiZWznmoTlrZfmrrVcbiAgICAgICAgLy8gICBpdGVtVmFsdWVGaWVsZDogJ3ZhbHVlJywgLy8g6aG55pWw5o2u6KGo56S6dmFsdWXnmoTlrZfmrrVcbiAgICAgICAgLy8gICBpdGVtVGVtcGxhdGU6ICc8c3Bhbj57e2l0ZW0ubGFiZWx9fSA6IHt7aXRlbS52YWx1ZX19PC9zcGFuPicsIC8vIOaYvuekuumhueeahOaooeadv1xuICAgICAgICAvLyAgIGltbWVkaWF0ZVNob3c6IGZhbHNlLCAvLyDmmK/lkKbnq4vljbPmmL7npLrvvIzlpoLmnpzkuLpmYWxzZeWImeW9k+i+k+WFpeWFs+mUruWtl+aJjeaYvuekulxuICAgICAgICAvLyAgIGVudW1Tb3VyY2U6IFt7dmFsdWU6IFtTdHJpbmcgfCBOdW1iZXIgfCBCb29sZWFuXSwgbGFiZWw6ICcnfV0sIC8vIOW9k+aPkOekuuaVsOaNruaYr+acrOWcsOiAjOmdnui/nOeoi+aXtuaPkOS+m1xuICAgICAgICAvLyAgIGVudW1Tb3VyY2VSZW1vdGU6IHtcbiAgICAgICAgLy8gICAgIHJlbW90ZVVybDogJycsIC8vIOWmguaenOaYr+i/nOeoi+iuv+mXru+8jOWImeWhq+WGmeivpXVybFxuICAgICAgICAvLyAgICAgcGFyYW1OYW1lOiAna2V5d29yZCcsIC8vIOivt+axguWPguaVsOWQje+8jOm7mOiupOaYr2tleXdvcmRcbiAgICAgICAgLy8gICAgIG90aGVyUGFyYW1zOiB7fSwgLy8g5YW25a6D6K+35rGC5Y+C5pWw77yM5YC85pSv5oyBIGR46KGo6L6+5byPXG4gICAgICAgIC8vICAgICByZXNGaWVsZDogJycsIC8vIOWTjeW6lOe7k+aenOeahOWtl+autVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfSxcblxuICAgICAgICAvLyBjb21wb3VuZDogeyAvLyDnu4TlkIhcbiAgICAgICAgLy8gICBwcmVwZW5kTGFiZWw6ICcnLCAvLyDliY3nva7moIfnrb5cbiAgICAgICAgLy8gICBhcHBlbmRMYWJlbDogJycsIC8vIOWQjue9ruagh+etvlxuICAgICAgICAvLyAgIHByZXBlbmRJY29uOiAnJywgLy8g5ZCO572u5Zu+5qCH5qC35byPXG4gICAgICAgIC8vICAgYXBwZW5kSWNvbjogJycsIC8vIOWJjee9ruWbvuagh+agt+W8j1xuICAgICAgICAvLyAgIHByZXBlbmRTZWxlY3Q6IHsgLy8g5YmN572u5LiL5ouJ5qGG77yM5L2/55So6K+l56eN55qE5pWw5o2u5b+F6aG75piv5a+56LGhXG4gICAgICAgIC8vICAgICBpdGVtTGFiZWxGaWVsZDogJ2xhYmVsJywgLy8g6aG55pWw5o2u6KGo56S6bGFiZWznmoTlrZfmrrVcbiAgICAgICAgLy8gICAgIGl0ZW1WYWx1ZUZpZWxkOiAndmFsdWUnLCAvLyDpobnmlbDmja7ooajnpLp2YWx1ZeeahOWtl+autVxuICAgICAgICAvLyAgICAgZW51bVNvdXJjZTogW3t2YWx1ZTogW1N0cmluZyB8IE51bWJlciB8IEJvb2xlYW5dLCBsYWJlbDogJyd9XSwgLy8g5pys5Zyw5pWw5o2u5rqQXG4gICAgICAgIC8vICAgICBlbnVtU291cmNlUmVtb3RlOiB7IC8vIOi/nOeoi+aVsOaNrua6kFxuICAgICAgICAvLyAgICAgICByZW1vdGVVcmw6ICcnLCAvLyDlpoLmnpzmmK/ov5znqIvorr/pl67vvIzliJnloavlhpnor6V1cmxcbiAgICAgICAgLy8gICAgICAgcmVzRmllbGQ6ICcnLCAvLyDlk43lupTnu5PmnpznmoTlrZfmrrVcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBtb2RlbEZpZWxkOiAnJyAvLyDnlKjkuo7nu5HlrpppbnB1dCB2YWx1ZeWAvOeahOafkOS4quWxnuaAp1xuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vICAgYXBwZW5kU2VsZWN0OiB7IC8vIOWQjue9ruS4i+aLieahhu+8jOS9v+eUqOivpeenjeeahOaVsOaNruW/hemhu+aYr+WvueixoVxuICAgICAgICAvLyAgICAgaXRlbUxhYmVsRmllbGQ6ICdsYWJlbCcsIC8vIOmhueaVsOaNruihqOekumxhYmVs55qE5a2X5q61XG4gICAgICAgIC8vICAgICBpdGVtVmFsdWVGaWVsZDogJ3ZhbHVlJywgLy8g6aG55pWw5o2u6KGo56S6dmFsdWXnmoTlrZfmrrVcbiAgICAgICAgLy8gICAgIGVudW1Tb3VyY2U6IFt7dmFsdWU6IFtTdHJpbmcgfCBOdW1iZXIgfCBCb29sZWFuXSwgbGFiZWw6ICcnfV0sIC8vIOacrOWcsOaVsOaNrua6kFxuICAgICAgICAvLyAgICAgZW51bVNvdXJjZVJlbW90ZTogeyAvLyDov5znqIvmlbDmja7mupBcbiAgICAgICAgLy8gICAgICAgcmVtb3RlVXJsOiAnJywgLy8g5aaC5p6c5piv6L+c56iL6K6/6Zeu77yM5YiZ5aGr5YaZ6K+ldXJsXG4gICAgICAgIC8vICAgICAgIHJlc0ZpZWxkOiAnJywgLy8g5ZON5bqU57uT5p6c55qE5a2X5q61XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgbW9kZWxGaWVsZDogJycgLy8g55So5LqO57uR5a6aaW5wdXQgdmFsdWXlgLznmoTmn5DkuKrlsZ7mgKdcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICB1cGxvYWQ6IHtcbiAgICAgICAgICAvLyDkuIrkvKDnmoTlj4LmlbDphY3nva7vvIjlvZN0eXBlPVwiZmlsZVwi5pe277yM5Y+q6K6k6L+Z5Liq5Y+C5pWw77yJXG4gICAgICAgICAgdXBsb2FkVXJsOiBcIlwiLCAvLyDkuIrkvKDnmoTlnLDlnYBcbiAgICAgICAgICBkYXRhOiB7fSwgLy8g5LiK5Lyg5pe26ZmE5bim55qE6aKd5aSW5Y+C5pWwXG4gICAgICAgICAgZmlsZUZpZWxkOiBcImZpbGVcIiwgLy8g6KGo56S65paH5Lu255qE5a2X5q6177yM6buY6K6k5pivZmlsZVxuICAgICAgICAgIGFjY2VwdDogXCJcIiwgLy8g5o6l5Y+X5LiK5Lyg55qE5paH5Lu257G75Z6LXG4gICAgICAgICAgY29uc3RyYWludDoge1xuICAgICAgICAgICAgLy8g57qm5p2fXG4gICAgICAgICAgICB3aWR0aDogMCwgLy8g5Zu+54mH5a695bqmXG4gICAgICAgICAgICBoZWlnaHQ6IDAsIC8vIOWbvueJh+mrmOW6plxuICAgICAgICAgICAgc2l6ZUZpeGVkOiB0cnVlLCAvLyDlm77niYflsLrlr7jnuqbmnZ/nmoTlpKflsI/mmK/lkKbmjInlm7rlrprlgLzvvIzlvZPkuLpmYWxzZeaXtuaMieavlOS+i1xuICAgICAgICAgICAgbWF4U2l6ZTogMCwgLy8g5pyA5aSn5Zu+54mH5aSn5bCP77yM5Y2V5L2NS0LvvIww5Luj6KGo5LiN6ZmQXG4gICAgICAgICAgICBtaW5TaXplOiAwIC8vIOacgOWwj+WbvueJh+Wkp+Wwj++8jOWNleS9jUtC77yMMOS7o+ihqOS4jemZkFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzRmllbGQ6IFwiXCIsIC8vIOiOt+WPlui/lOWbnue7k+aenOeahOWtl+autSxcbiAgICAgICAgICB1cGxvYWRUZXh0OiBcIlwiLCAvLyAg5LiK5Lyg5oyJ6ZKu55qE5ZCN56ewXG4gICAgICAgICAgaGVhZGVyczoge31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHF1ZXJ5U2VhcmNoKHF1ZXJ5U3RyaW5nLCBjYikge1xuICAgICAgY29uc3QgYXV0b0NwbCA9IHRoaXMubWVyZ2VDb25maWcuYXV0b2NvbXBsZXRlO1xuXG4gICAgICAvLyDmnKzlnLDmlbDmja7mupDnmoTlpITnkIZcbiAgICAgIGlmIChhdXRvQ3BsLmVudW1Tb3VyY2UpIHtcbiAgICAgICAgY2IoXG4gICAgICAgICAgYXV0b0NwbC5lbnVtU291cmNlLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtVmFsID0gaXRlbVthdXRvQ3BsLml0ZW1WYWx1ZUZpZWxkIHx8IFwidmFsdWVcIl1cbiAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVZhbC5pbmRleE9mKHF1ZXJ5U3RyaW5nLnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIOS4i+mdouaYr+i/nOeoi+aVsOaNrua6kOeahOWkhOeQhlxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgdXJsOiBhdXRvQ3BsLmVudW1Tb3VyY2VSZW1vdGUucmVtb3RlVXJsLFxuICAgICAgICBwYXJhbXM6IF9jbG9uZURlZXAoX2dldCh0aGlzLm1lcmdlQ29uZmlnLCBcImF1dG9jb21wbGV0ZS5lbnVtU291cmNlUmVtb3RlLm90aGVyUGFyYW1zXCIsIHt9KSlcbiAgICAgIH07XG4gICAgICBpZiAoYXV0b0NwbC5lbnVtU291cmNlUmVtb3RlLnBhcmFtTmFtZSlcbiAgICAgICAgb3B0aW9ucy5wYXJhbXNbYXV0b0NwbC5lbnVtU291cmNlUmVtb3RlLnBhcmFtTmFtZV0gPSBxdWVyeVN0cmluZztcblxuICAgICAgdGhpcy4kaHR0cChvcHRpb25zKS50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNiKFxuICAgICAgICAgIGF1dG9DcGwuZW51bVNvdXJjZVJlbW90ZS5yZXNGaWVsZFxuICAgICAgICAgICAgPyBfZ2V0KHJlcy5kYXRhLCBhdXRvQ3BsLmVudW1Tb3VyY2VSZW1vdGUucmVzRmllbGQpXG4gICAgICAgICAgICA6IHJlcy5kYXRhXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgaGFuZGxlQ2xpY2tVcGxvYWQoKSB7XG4gICAgICAvLyDlpITnkIbpgInkuK3nmoRpbnB1dFt0eXBlPVwiZmlsZVwiXVxuICAgICAgY29uc3Qgdm0gPSB0aGlzO1xuICAgICAgaWYgKCF2bS5kaXNhYmxlZCkge1xuICAgICAgICB2bS4kcmVmcy51cGxvYWQudmFsdWUgPSBudWxsO1xuICAgICAgICB2bS4kcmVmcy51cGxvYWQuY2xpY2soKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlRmlsZUNoYW5nZSgpIHtcbiAgICAgIGNvbnN0IHZtID0gdGhpcztcbiAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBjb25zdCB7IHVwbG9hZFVybCwgZGF0YSwgcmVzRmllbGQsIGZpbGVGaWVsZCwgaGVhZGVycyA9IHt9IH0gPSB2bS5tZXJnZUNvbmZpZy51cGxvYWQ7XG4gICAgICBjb25zdCBzZW5kT2JqID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSk7XG4gICAgICBzZW5kT2JqW2ZpbGVGaWVsZF0gPSB0aGlzLiRyZWZzLnVwbG9hZC5maWxlc1swXTtcblxuICAgICAgLy8g5Yik5pat5piv5ZCm56ym5ZCI5aSn5bCP57qm5p2fXG4gICAgICBsZXQgZmlsZVNpemUgPSBzZW5kT2JqW2ZpbGVGaWVsZF0uc2l6ZSAvIDEwMjQ7XG4gICAgICBpZiAoXG4gICAgICAgIHZtLm1lcmdlQ29uZmlnLnVwbG9hZC5jb25zdHJhaW50Lm1heFNpemUgJiZcbiAgICAgICAgZmlsZVNpemUgPiB2bS5tZXJnZUNvbmZpZy51cGxvYWQuY29uc3RyYWludC5tYXhTaXplXG4gICAgICApIHtcbiAgICAgICAgdm0uJG1lc3NhZ2Uoe1xuICAgICAgICAgIG1lc3NhZ2U6IHZtLiRuY2xhbmcoXCJzaXplVGlwczFcIiwge1xuICAgICAgICAgICAgcmlnaHQ6IHZtLm1lcmdlQ29uZmlnLnVwbG9hZC5jb25zdHJhaW50Lm1heFNpemUsXG4gICAgICAgICAgICB3cm9uZzogZmlsZVNpemUudG9GaXhlZCgwKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIlxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICB2bS5tZXJnZUNvbmZpZy51cGxvYWQuY29uc3RyYWludC5taW5TaXplICYmXG4gICAgICAgIGZpbGVTaXplIDwgdm0ubWVyZ2VDb25maWcudXBsb2FkLmNvbnN0cmFpbnQubWluU2l6ZVxuICAgICAgKSB7XG4gICAgICAgIHZtLiRtZXNzYWdlKHtcbiAgICAgICAgICBtZXNzYWdlOiB2bS4kbmNsYW5nKFwic2l6ZVRpcHMyXCIsIHtcbiAgICAgICAgICAgIHJpZ2h0OiB2bS5tZXJnZUNvbmZpZy51cGxvYWQuY29uc3RyYWludC5taW5TaXplLFxuICAgICAgICAgICAgd3Jvbmc6IGZpbGVTaXplLnRvRml4ZWQoMClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0eXBlOiBcImVycm9yXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8g5Zu+54mH57G75Z6L5Yik5pat5piv5ZCm56ym5ZCI5a696auY6KaB5rGCXG4gICAgICBsZXQganVyZ2VJbWdQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzZW5kT2JqW2ZpbGVGaWVsZF0udHlwZS5pbmRleE9mKFwiaW1hZ2VcIikgPj0gMCAmJlxuICAgICAgICAgIHZtLm1lcmdlQ29uZmlnLnVwbG9hZC5jb25zdHJhaW50LndpZHRoICYmXG4gICAgICAgICAgdm0ubWVyZ2VDb25maWcudXBsb2FkLmNvbnN0cmFpbnQuaGVpZ2h0XG4gICAgICAgICkge1xuICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbih0aGVGaWxlKSB7XG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBsZXQgcGFzcyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAodm0ubWVyZ2VDb25maWcudXBsb2FkLmNvbnN0cmFpbnQuc2l6ZUZpeGVkKSB7XG4gICAgICAgICAgICAgICAgcGFzcyA9XG4gICAgICAgICAgICAgICAgICB0aGlzLndpZHRoID09PSB2bS5tZXJnZUNvbmZpZy51cGxvYWQuY29uc3RyYWludC53aWR0aCAmJlxuICAgICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPT09IHZtLm1lcmdlQ29uZmlnLnVwbG9hZC5jb25zdHJhaW50LmhlaWdodDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXNzID1cbiAgICAgICAgICAgICAgICAgICh0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQpLnRvRml4ZWQoMSkgPT09XG4gICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIHZtLm1lcmdlQ29uZmlnLnVwbG9hZC5jb25zdHJhaW50LndpZHRoIC9cbiAgICAgICAgICAgICAgICAgICAgdm0ubWVyZ2VDb25maWcudXBsb2FkLmNvbnN0cmFpbnQuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICApLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFwYXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZtLm1lcmdlQ29uZmlnLnVwbG9hZC5jb25zdHJhaW50LnNpemVGaXhlZCkge1xuICAgICAgICAgICAgICAgICAgdm0uJG1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB2bS4kbmNsYW5nKFwicmVzb2x1dGlvblRpcDFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBgJHt2bS5tZXJnZUNvbmZpZy51cGxvYWQuY29uc3RyYWludC53aWR0aH14JHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLm1lcmdlQ29uZmlnLnVwbG9hZC5jb25zdHJhaW50LmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgIH1gLFxuICAgICAgICAgICAgICAgICAgICAgIHdyb25nOiBgJHt0aGlzLndpZHRofXgke3RoaXMuaGVpZ2h0fWBcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZtLiRtZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdm0uJG5jbGFuZyhcInJlc29sdXRpb25UaXAyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogdm0uX2dldEZyYWN0aW9uYWxFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgdm0ubWVyZ2VDb25maWcudXBsb2FkLmNvbnN0cmFpbnQud2lkdGggL1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5tZXJnZUNvbmZpZy51cGxvYWQuY29uc3RyYWludC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICB3cm9uZzogdm0uX2dldEZyYWN0aW9uYWxFeHByZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgMC4wMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHRoZUZpbGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHNlbmRPYmpbZmlsZUZpZWxkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAganVyZ2VJbWdQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzZW5kT2JqKSkge1xuICAgICAgICAgIGZkLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRkYXRhLmlzVXBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kaHR0cCh7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICB1cmw6IHVwbG9hZFVybCxcbiAgICAgICAgICBkYXRhOiBmZCxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGRhdGEuaW5wdXRWYWwgPSBfZ2V0KHJlcywgcmVzRmllbGQgfHwgXCJcIik7XG4gICAgICAgICAgICB0aGlzLiRkYXRhLmlzVXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgdm0uJG1lc3NhZ2UuZXJyb3IodGhpcy4kbmNsYW5nKFwidXBsb2FkRmFpbFwiKSk7XG4gICAgICAgICAgICB0aGlzLiRkYXRhLmlzVXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25CbHVyKCkge1xuICAgICAgaWYgKHRoaXMubWVyZ2VDb25maWcudXBkYXRlT24gPT09ICdibHVyJykge1xuICAgICAgICBsZXQgdmFsID0gdGhpcy5fcHJvY2Vzc01vZGVsVmFsKCk7XG4gICAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCB2YWwpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBvblNlbGVjdFN1Z2dlY3Rpb25JdGVtKCkge1xuICAgICAgaWYgKHRoaXMubWVyZ2VDb25maWcudXBkYXRlT24gPT09ICdibHVyJykge1xuICAgICAgICBsZXQgdmFsID0gdGhpcy5fcHJvY2Vzc01vZGVsVmFsKCk7XG4gICAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCB2YWwpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfZ2V0RnJhY3Rpb25hbEV4cHJlc3Npb24odmFsdWUsIHRocmVzaG9sZCkge1xuICAgICAgbGV0IGkgPSAxLFxuICAgICAgICBqID0gMTtcbiAgICAgIHdoaWxlIChNYXRoLmFicyhpIC8gaiAtIHZhbHVlKSA+IHRocmVzaG9sZCkge1xuICAgICAgICBpZiAoaSAvIGogPiB2YWx1ZSkge1xuICAgICAgICAgIGorKztcbiAgICAgICAgfSBlbHNlIGlmIChpIC8gaiA8IHZhbHVlKSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaSArIFwiOlwiICsgajtcbiAgICB9LFxuXG4gICAgLy8g5L2g5Y+v5Lul6YCa6L+H6K+l5pa55rOV5ZyobW9kZWxWYWzkvKDlh7rljrvkuYvliY3ov5vooYzliqDlt6XlpITnkIbvvIzljbPlnKh0aGlzLiRlbWl0KCdpbnB1dCcp5LmL5YmNXG4gICAgX3Byb2Nlc3NNb2RlbFZhbChuZXdWYWwpIHtcbiAgICAgIGxldCB2YWw7XG4gICAgICBpZiAobmV3VmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gbWl4aW7osIPnlKjnmoRcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgdmFsID0gbmV3VmFsW3RoaXMubWVyZ2VDb25maWcubW9kZWxGaWVsZF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsID0gbmV3VmFsO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSB0aGlzLiRkYXRhLmlucHV0VmFsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5tZXJnZUNvbmZpZy50cmltKSB7XG4gICAgICAgIHZhbCA9IHZhbCA/IHZhbC50b1N0cmluZygpLnRyaW0oKSA6IHZhbDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoICh0aGlzLm1lcmdlQ29uZmlnLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgIHZhbCA9IHBhcnNlRmxvYXQodmFsKTtcbiAgICAgICAgICB2YWwgPSBpc05hTih2YWwpID8gXCJcIiA6IHZhbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImludGVnZXJcIjpcbiAgICAgICAgICB2YWwgPSBwYXJzZUludCh2YWwpO1xuICAgICAgICAgIHZhbCA9IGlzTmFOKHZhbCkgPyBcIlwiIDogdmFsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgIG9ialt0aGlzLm1lcmdlQ29uZmlnLm1vZGVsRmllbGRdID0gdmFsO1xuICAgICAgICBpZiAoX2dldCh0aGlzLm1lcmdlQ29uZmlnLCBcImNvbXBvdW5kLnByZXBlbmRTZWxlY3RcIikpIHtcbiAgICAgICAgICBvYmpbXG4gICAgICAgICAgICB0aGlzLm1lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRTZWxlY3QubW9kZWxGaWVsZFxuICAgICAgICAgIF0gPSB0aGlzLiRkYXRhLnByZXBlbmRTZWxlY3RWYWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9nZXQodGhpcy5tZXJnZUNvbmZpZywgXCJjb21wb3VuZC5hcHBlbmRTZWxlY3RcIikpIHtcbiAgICAgICAgICBvYmpbXG4gICAgICAgICAgICB0aGlzLm1lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZFNlbGVjdC5tb2RlbEZpZWxkXG4gICAgICAgICAgXSA9IHRoaXMuJGRhdGEuYXBwZW5kU2VsZWN0VmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRkYXRhLmlucHV0VmFsID0gdmFsO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibmNmb3JtLWlucHV0XCIgfSxcbiAgICBbXG4gICAgICAhX3ZtLm1lcmdlQ29uZmlnLmF1dG9jb21wbGV0ZVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJlbC1pbnB1dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaGlkZGVuLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaGlkZGVuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc2l6ZTogX3ZtLm1lcmdlQ29uZmlnLnNpemUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0ucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgY2xlYXJhYmxlOiBfdm0ubWVyZ2VDb25maWcuY2xlYXJhYmxlLFxuICAgICAgICAgICAgICAgIHR5cGU6XG4gICAgICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcudHlwZSA9PT0gXCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICA6IF92bS5tZXJnZUNvbmZpZy50eXBlLFxuICAgICAgICAgICAgICAgIFwicHJlZml4LWljb25cIjogX3ZtLm1lcmdlQ29uZmlnLnByZWZpeEljb24sXG4gICAgICAgICAgICAgICAgXCJzdWZmaXgtaWNvblwiOiBfdm0ubWVyZ2VDb25maWcuc3VmZml4SWNvblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBibHVyOiBfdm0ub25CbHVyIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pbnB1dFZhbCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uaW5wdXRWYWwgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5wdXRWYWxcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcudHlwZSAhPT0gXCJmaWxlXCIgJiYgX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kXG4gICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5tZXJnZUNvbmZpZy5jb21wb3VuZC5wcmVwZW5kTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInByZXBlbmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRMYWJlbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5tZXJnZUNvbmZpZy5jb21wb3VuZC5hcHBlbmRMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwiYXBwZW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5tZXJnZUNvbmZpZy5jb21wb3VuZC5hcHBlbmRMYWJlbCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5tZXJnZUNvbmZpZy5jb21wb3VuZC5wcmVwZW5kSWNvblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJlbC1idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwicHJlcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IF92bS5tZXJnZUNvbmZpZy5jb21wb3VuZC5wcmVwZW5kSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcInByZXBlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcuY29tcG91bmQuYXBwZW5kSWNvblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJlbC1idXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYXBwZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhcHBlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZWwtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJwcmVwZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXIgfHwgX3ZtLiRuY2xhbmcoXCJzZWxlY3RQbHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwicHJlcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByZXBlbmRTZWxlY3RWYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcmVwZW5kU2VsZWN0VmFsID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcmVwZW5kU2VsZWN0VmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucHJlcGVuZFNlbGVjdE9wdGlvbnMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJlbC1vcHRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZXJnZUNvbmZpZy5jb21wb3VuZC5wcmVwZW5kU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbVZhbHVlRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbUxhYmVsRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW1WYWx1ZUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZWwtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhcHBlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcuY29tcG91bmQuYXBwZW5kU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyIHx8IF92bS4kbmNsYW5nKFwic2VsZWN0UGxzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFwcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFwcGVuZFNlbGVjdFZhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFwcGVuZFNlbGVjdFZhbCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYXBwZW5kU2VsZWN0VmFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYXBwZW5kU2VsZWN0T3B0aW9ucywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImVsLW9wdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW1WYWx1ZUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbUxhYmVsRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbVZhbHVlRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgOiBfdm0ubWVyZ2VDb25maWcudHlwZSA9PT0gXCJmaWxlXCIgJiYgX3ZtLm1lcmdlQ29uZmlnLnVwbG9hZFxuICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLnVwbG9hZC51cGxvYWRVcmxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuY2Zvcm0taW5wdXQtdXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImFwcGVuZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmhhbmRsZUNsaWNrVXBsb2FkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFwcGVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzVXBsb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLiRuY2xhbmcoXCJ1cGxvYWRpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ubWVyZ2VDb25maWcudXBsb2FkLnVwbG9hZFRleHQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJG5jbGFuZyhcInVwbG9hZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwidXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0OiBfdm0ubWVyZ2VDb25maWcudXBsb2FkLmFjY2VwdCB8fCBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmhhbmRsZUZpbGVDaGFuZ2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX2MoXG4gICAgICAgICAgICBcImVsLWF1dG9jb21wbGV0ZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaGlkZGVuLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaGlkZGVuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0ucGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgY2xlYXJhYmxlOiBfdm0ubWVyZ2VDb25maWcuY2xlYXJhYmxlLFxuICAgICAgICAgICAgICAgIHNpemU6IF92bS5tZXJnZUNvbmZpZy5zaXplLFxuICAgICAgICAgICAgICAgIHR5cGU6IF92bS5tZXJnZUNvbmZpZy50eXBlLFxuICAgICAgICAgICAgICAgIFwicHJlZml4LWljb25cIjogX3ZtLm1lcmdlQ29uZmlnLnByZWZpeEljb24sXG4gICAgICAgICAgICAgICAgXCJzdWZmaXgtaWNvblwiOiBfdm0ubWVyZ2VDb25maWcuc3VmZml4SWNvbixcbiAgICAgICAgICAgICAgICBcImZldGNoLXN1Z2dlc3Rpb25zXCI6IF92bS5xdWVyeVNlYXJjaCxcbiAgICAgICAgICAgICAgICBcInRyaWdnZXItb24tZm9jdXNcIjogISFfdm0ubWVyZ2VDb25maWcuYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAuaW1tZWRpYXRlU2hvdyxcbiAgICAgICAgICAgICAgICBcInZhbHVlLWtleVwiOlxuICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLmF1dG9jb21wbGV0ZS5pdGVtVmFsdWVGaWVsZCB8fCBcInZhbHVlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgc2VsZWN0OiBfdm0ub25TZWxlY3RTdWdnZWN0aW9uSXRlbSwgYmx1cjogX3ZtLm9uQmx1ciB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubWVyZ2VDb25maWcuYXV0b2NvbXBsZXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLmF1dG9jb21wbGV0ZS5pdGVtVGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoX3ZtLml0ZW1UZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBwcm9wcy5pdGVtIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pbnB1dFZhbCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uaW5wdXRWYWwgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5wdXRWYWxcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcuY29tcG91bmRcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwicHJlcGVuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZExhYmVsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJhcHBlbmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLmFwcGVuZExhYmVsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImVsLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJwcmVwZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwicHJlcGVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5tZXJnZUNvbmZpZy5jb21wb3VuZC5hcHBlbmRJY29uXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImVsLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJhcHBlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBfdm0ubWVyZ2VDb25maWcuY29tcG91bmQuYXBwZW5kSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFwcGVuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5tZXJnZUNvbmZpZy5jb21wb3VuZC5wcmVwZW5kU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbC1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcInByZXBlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB8fCBfdm0uJG5jbGFuZyhcInNlbGVjdFBsc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJwcmVwZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJlcGVuZFNlbGVjdFZhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByZXBlbmRTZWxlY3RWYWwgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByZXBlbmRTZWxlY3RWYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wcmVwZW5kU2VsZWN0T3B0aW9ucywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImVsLW9wdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lcmdlQ29uZmlnLmNvbXBvdW5kLnByZXBlbmRTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtVmFsdWVGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZXJnZUNvbmZpZy5jb21wb3VuZC5wcmVwZW5kU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtTGFiZWxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcuY29tcG91bmQucHJlcGVuZFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbVZhbHVlRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcuY29tcG91bmQuYXBwZW5kU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbC1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcImFwcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZXJnZUNvbmZpZy5jb21wb3VuZC5hcHBlbmRTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXIgfHwgX3ZtLiRuY2xhbmcoXCJzZWxlY3RQbHNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYXBwZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYXBwZW5kU2VsZWN0VmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXBwZW5kU2VsZWN0VmFsID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhcHBlbmRTZWxlY3RWYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hcHBlbmRTZWxlY3RPcHRpb25zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZWwtb3B0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcuY29tcG91bmQuYXBwZW5kU2VsZWN0VmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbVZhbHVlRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcuY29tcG91bmQuYXBwZW5kU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtTGFiZWxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVyZ2VDb25maWcuY29tcG91bmQuYXBwZW5kU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtVmFsdWVGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoIChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm5jZm9ybS1pbnB1dCAuZWwtc2VsZWN0IC5lbC1pbnB1dCB7XFxuICB3aWR0aDogMTMwcHg7XFxufVxcbi5uY2Zvcm0taW5wdXQgLmlucHV0LXdpdGgtc2VsZWN0IC5lbC1pbnB1dC1ncm91cF9fcHJlcGVuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ubmNmb3JtLWlucHV0IC5uY2Zvcm0taW5wdXQtdXBsb2FkIFt0eXBlPVxcXCJmaWxlXFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5jZm9ybS1pbnB1dCAuZWwtYXV0b2NvbXBsZXRlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuIiwiaW1wb3J0IGdldE5hdGl2ZSBmcm9tICcuL19nZXROYXRpdmUuanMnO1xuaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YVZpZXc7XG4iLCJpbXBvcnQgaGFzaENsZWFyIGZyb20gJy4vX2hhc2hDbGVhci5qcyc7XG5pbXBvcnQgaGFzaERlbGV0ZSBmcm9tICcuL19oYXNoRGVsZXRlLmpzJztcbmltcG9ydCBoYXNoR2V0IGZyb20gJy4vX2hhc2hHZXQuanMnO1xuaW1wb3J0IGhhc2hIYXMgZnJvbSAnLi9faGFzaEhhcy5qcyc7XG5pbXBvcnQgaGFzaFNldCBmcm9tICcuL19oYXNoU2V0LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2g7XG4iLCJpbXBvcnQgbGlzdENhY2hlQ2xlYXIgZnJvbSAnLi9fbGlzdENhY2hlQ2xlYXIuanMnO1xuaW1wb3J0IGxpc3RDYWNoZURlbGV0ZSBmcm9tICcuL19saXN0Q2FjaGVEZWxldGUuanMnO1xuaW1wb3J0IGxpc3RDYWNoZUdldCBmcm9tICcuL19saXN0Q2FjaGVHZXQuanMnO1xuaW1wb3J0IGxpc3RDYWNoZUhhcyBmcm9tICcuL19saXN0Q2FjaGVIYXMuanMnO1xuaW1wb3J0IGxpc3RDYWNoZVNldCBmcm9tICcuL19saXN0Q2FjaGVTZXQuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RDYWNoZTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIiwiaW1wb3J0IG1hcENhY2hlQ2xlYXIgZnJvbSAnLi9fbWFwQ2FjaGVDbGVhci5qcyc7XG5pbXBvcnQgbWFwQ2FjaGVEZWxldGUgZnJvbSAnLi9fbWFwQ2FjaGVEZWxldGUuanMnO1xuaW1wb3J0IG1hcENhY2hlR2V0IGZyb20gJy4vX21hcENhY2hlR2V0LmpzJztcbmltcG9ydCBtYXBDYWNoZUhhcyBmcm9tICcuL19tYXBDYWNoZUhhcy5qcyc7XG5pbXBvcnQgbWFwQ2FjaGVTZXQgZnJvbSAnLi9fbWFwQ2FjaGVTZXQuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuZXhwb3J0IGRlZmF1bHQgTWFwQ2FjaGU7XG4iLCJpbXBvcnQgZ2V0TmF0aXZlIGZyb20gJy4vX2dldE5hdGl2ZS5qcyc7XG5pbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvbWlzZTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0O1xuIiwiaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuaW1wb3J0IHN0YWNrQ2xlYXIgZnJvbSAnLi9fc3RhY2tDbGVhci5qcyc7XG5pbXBvcnQgc3RhY2tEZWxldGUgZnJvbSAnLi9fc3RhY2tEZWxldGUuanMnO1xuaW1wb3J0IHN0YWNrR2V0IGZyb20gJy4vX3N0YWNrR2V0LmpzJztcbmltcG9ydCBzdGFja0hhcyBmcm9tICcuL19zdGFja0hhcy5qcyc7XG5pbXBvcnQgc3RhY2tTZXQgZnJvbSAnLi9fc3RhY2tTZXQuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWNrO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxuZXhwb3J0IGRlZmF1bHQgVWludDhBcnJheTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcbmltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5leHBvcnQgZGVmYXVsdCBXZWFrTWFwO1xuIiwiLyoqXG4gKiBBZGRzIHRoZSBrZXktdmFsdWUgYHBhaXJgIHRvIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gcGFpciBUaGUga2V5LXZhbHVlIHBhaXIgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgbWFwYC5cbiAqL1xuZnVuY3Rpb24gYWRkTWFwRW50cnkobWFwLCBwYWlyKSB7XG4gIC8vIERvbid0IHJldHVybiBgbWFwLnNldGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIG1hcC5zZXQocGFpclswXSwgcGFpclsxXSk7XG4gIHJldHVybiBtYXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZE1hcEVudHJ5O1xuIiwiLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICovXG5mdW5jdGlvbiBhZGRTZXRFbnRyeShzZXQsIHZhbHVlKSB7XG4gIC8vIERvbid0IHJldHVybiBgc2V0LmFkZGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIHNldC5hZGQodmFsdWUpO1xuICByZXR1cm4gc2V0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRTZXRFbnRyeTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlFYWNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheUZpbHRlcjtcbiIsImltcG9ydCBiYXNlVGltZXMgZnJvbSAnLi9fYmFzZVRpbWVzLmpzJztcbmltcG9ydCBpc0FyZ3VtZW50cyBmcm9tICcuL2lzQXJndW1lbnRzLmpzJztcbmltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNCdWZmZXIgZnJvbSAnLi9pc0J1ZmZlci5qcyc7XG5pbXBvcnQgaXNJbmRleCBmcm9tICcuL19pc0luZGV4LmpzJztcbmltcG9ydCBpc1R5cGVkQXJyYXkgZnJvbSAnLi9pc1R5cGVkQXJyYXkuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5TGlrZUtleXM7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheU1hcDtcbiIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlQdXNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJheVJlZHVjZTtcbiIsImltcG9ydCBiYXNlQXNzaWduVmFsdWUgZnJvbSAnLi9fYmFzZUFzc2lnblZhbHVlLmpzJztcbmltcG9ydCBlcSBmcm9tICcuL2VxLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXNzaWduVmFsdWU7XG4iLCJpbXBvcnQgZXEgZnJvbSAnLi9lcS5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzc29jSW5kZXhPZjtcbiIsImltcG9ydCBjb3B5T2JqZWN0IGZyb20gJy4vX2NvcHlPYmplY3QuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlQXNzaWduO1xuIiwiaW1wb3J0IGNvcHlPYmplY3QgZnJvbSAnLi9fY29weU9iamVjdC5qcyc7XG5pbXBvcnQga2V5c0luIGZyb20gJy4va2V5c0luLmpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlQXNzaWduSW47XG4iLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSAnLi9fZGVmaW5lUHJvcGVydHkuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlQXNzaWduVmFsdWU7XG4iLCJpbXBvcnQgU3RhY2sgZnJvbSAnLi9fU3RhY2suanMnO1xuaW1wb3J0IGFycmF5RWFjaCBmcm9tICcuL19hcnJheUVhY2guanMnO1xuaW1wb3J0IGFzc2lnblZhbHVlIGZyb20gJy4vX2Fzc2lnblZhbHVlLmpzJztcbmltcG9ydCBiYXNlQXNzaWduIGZyb20gJy4vX2Jhc2VBc3NpZ24uanMnO1xuaW1wb3J0IGJhc2VBc3NpZ25JbiBmcm9tICcuL19iYXNlQXNzaWduSW4uanMnO1xuaW1wb3J0IGNsb25lQnVmZmVyIGZyb20gJy4vX2Nsb25lQnVmZmVyLmpzJztcbmltcG9ydCBjb3B5QXJyYXkgZnJvbSAnLi9fY29weUFycmF5LmpzJztcbmltcG9ydCBjb3B5U3ltYm9scyBmcm9tICcuL19jb3B5U3ltYm9scy5qcyc7XG5pbXBvcnQgY29weVN5bWJvbHNJbiBmcm9tICcuL19jb3B5U3ltYm9sc0luLmpzJztcbmltcG9ydCBnZXRBbGxLZXlzIGZyb20gJy4vX2dldEFsbEtleXMuanMnO1xuaW1wb3J0IGdldEFsbEtleXNJbiBmcm9tICcuL19nZXRBbGxLZXlzSW4uanMnO1xuaW1wb3J0IGdldFRhZyBmcm9tICcuL19nZXRUYWcuanMnO1xuaW1wb3J0IGluaXRDbG9uZUFycmF5IGZyb20gJy4vX2luaXRDbG9uZUFycmF5LmpzJztcbmltcG9ydCBpbml0Q2xvbmVCeVRhZyBmcm9tICcuL19pbml0Q2xvbmVCeVRhZy5qcyc7XG5pbXBvcnQgaW5pdENsb25lT2JqZWN0IGZyb20gJy4vX2luaXRDbG9uZU9iamVjdC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IGlzQnVmZmVyIGZyb20gJy4vaXNCdWZmZXIuanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IGtleXMgZnJvbSAnLi9rZXlzLmpzJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX0ZMQVRfRkxBRyA9IDIsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgYW5kIGBfLmNsb25lRGVlcGAgd2hpY2ggdHJhY2tzXG4gKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIERlZXAgY2xvbmVcbiAqICAyIC0gRmxhdHRlbiBpbmhlcml0ZWQgcHJvcGVydGllc1xuICogIDQgLSBDbG9uZSBzeW1ib2xzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgcGFyZW50IG9iamVjdCBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0LFxuICAgICAgaXNEZWVwID0gYml0bWFzayAmIENMT05FX0RFRVBfRkxBRyxcbiAgICAgIGlzRmxhdCA9IGJpdG1hc2sgJiBDTE9ORV9GTEFUX0ZMQUcsXG4gICAgICBpc0Z1bGwgPSBiaXRtYXNrICYgQ0xPTkVfU1lNQk9MU19GTEFHO1xuXG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIHJlc3VsdCA9IChpc0ZsYXQgfHwgaXNGdW5jKSA/IHt9IDogaW5pdENsb25lT2JqZWN0KHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBpc0ZsYXRcbiAgICAgICAgICA/IGNvcHlTeW1ib2xzSW4odmFsdWUsIGJhc2VBc3NpZ25JbihyZXN1bHQsIHZhbHVlKSlcbiAgICAgICAgICA6IGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgdmFyIGtleXNGdW5jID0gaXNGdWxsXG4gICAgPyAoaXNGbGF0ID8gZ2V0QWxsS2V5c0luIDogZ2V0QWxsS2V5cylcbiAgICA6IChpc0ZsYXQgPyBrZXlzSW4gOiBrZXlzKTtcblxuICB2YXIgcHJvcHMgPSBpc0FyciA/IHVuZGVmaW5lZCA6IGtleXNGdW5jKHZhbHVlKTtcbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUNsb25lO1xuIiwiaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlQ3JlYXRlO1xuIiwiaW1wb3J0IGNhc3RQYXRoIGZyb20gJy4vX2Nhc3RQYXRoLmpzJztcbmltcG9ydCB0b0tleSBmcm9tICcuL190b0tleS5qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXQ7XG4iLCJpbXBvcnQgYXJyYXlQdXNoIGZyb20gJy4vX2FycmF5UHVzaC5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRBbGxLZXlzO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXNBcmd1bWVudHM7XG4iLCJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IGlzTWFza2VkIGZyb20gJy4vX2lzTWFza2VkLmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCB0b1NvdXJjZSBmcm9tICcuL190b1NvdXJjZS5qcyc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VJc05hdGl2ZTtcbiIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzTGVuZ3RoIGZyb20gJy4vaXNMZW5ndGguanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzVHlwZWRBcnJheTtcbiIsImltcG9ydCBpc1Byb3RvdHlwZSBmcm9tICcuL19pc1Byb3RvdHlwZS5qcyc7XG5pbXBvcnQgbmF0aXZlS2V5cyBmcm9tICcuL19uYXRpdmVLZXlzLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlS2V5cztcbiIsImltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcbmltcG9ydCBpc1Byb3RvdHlwZSBmcm9tICcuL19pc1Byb3RvdHlwZS5qcyc7XG5pbXBvcnQgbmF0aXZlS2V5c0luIGZyb20gJy4vX25hdGl2ZUtleXNJbi5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VLZXlzSW47XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlVGltZXM7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgYXJyYXlNYXAgZnJvbSAnLi9fYXJyYXlNYXAuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBpc1N5bWJvbCBmcm9tICcuL2lzU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVRvU3RyaW5nO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlVW5hcnk7XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuaW1wb3J0IGlzS2V5IGZyb20gJy4vX2lzS2V5LmpzJztcbmltcG9ydCBzdHJpbmdUb1BhdGggZnJvbSAnLi9fc3RyaW5nVG9QYXRoLmpzJztcbmltcG9ydCB0b1N0cmluZyBmcm9tICcuL3RvU3RyaW5nLmpzJztcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FzdFBhdGg7XG4iLCJpbXBvcnQgVWludDhBcnJheSBmcm9tICcuL19VaW50OEFycmF5LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZUFycmF5QnVmZmVyO1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lQnVmZmVyO1xuIiwiaW1wb3J0IGNsb25lQXJyYXlCdWZmZXIgZnJvbSAnLi9fY2xvbmVBcnJheUJ1ZmZlci5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lRGF0YVZpZXc7XG4iLCJpbXBvcnQgYWRkTWFwRW50cnkgZnJvbSAnLi9fYWRkTWFwRW50cnkuanMnO1xuaW1wb3J0IGFycmF5UmVkdWNlIGZyb20gJy4vX2FycmF5UmVkdWNlLmpzJztcbmltcG9ydCBtYXBUb0FycmF5IGZyb20gJy4vX21hcFRvQXJyYXkuanMnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgbWFwLlxuICovXG5mdW5jdGlvbiBjbG9uZU1hcChtYXAsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhtYXBUb0FycmF5KG1hcCksIENMT05FX0RFRVBfRkxBRykgOiBtYXBUb0FycmF5KG1hcCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkTWFwRW50cnksIG5ldyBtYXAuY29uc3RydWN0b3IpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZU1hcDtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lUmVnRXhwO1xuIiwiaW1wb3J0IGFkZFNldEVudHJ5IGZyb20gJy4vX2FkZFNldEVudHJ5LmpzJztcbmltcG9ydCBhcnJheVJlZHVjZSBmcm9tICcuL19hcnJheVJlZHVjZS5qcyc7XG5pbXBvcnQgc2V0VG9BcnJheSBmcm9tICcuL19zZXRUb0FycmF5LmpzJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0LCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCBDTE9ORV9ERUVQX0ZMQUcpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVTZXQ7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVTeW1ib2w7XG4iLCJpbXBvcnQgY2xvbmVBcnJheUJ1ZmZlciBmcm9tICcuL19jbG9uZUFycmF5QnVmZmVyLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmVUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHlBcnJheTtcbiIsImltcG9ydCBhc3NpZ25WYWx1ZSBmcm9tICcuL19hc3NpZ25WYWx1ZS5qcyc7XG5pbXBvcnQgYmFzZUFzc2lnblZhbHVlIGZyb20gJy4vX2Jhc2VBc3NpZ25WYWx1ZS5qcyc7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3B5T2JqZWN0O1xuIiwiaW1wb3J0IGNvcHlPYmplY3QgZnJvbSAnLi9fY29weU9iamVjdC5qcyc7XG5pbXBvcnQgZ2V0U3ltYm9scyBmcm9tICcuL19nZXRTeW1ib2xzLmpzJztcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb3B5U3ltYm9scztcbiIsImltcG9ydCBjb3B5T2JqZWN0IGZyb20gJy4vX2NvcHlPYmplY3QuanMnO1xuaW1wb3J0IGdldFN5bWJvbHNJbiBmcm9tICcuL19nZXRTeW1ib2xzSW4uanMnO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHlTeW1ib2xzSW47XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuZXhwb3J0IGRlZmF1bHQgY29yZUpzRGF0YTtcbiIsImltcG9ydCBnZXROYXRpdmUgZnJvbSAnLi9fZ2V0TmF0aXZlLmpzJztcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVByb3BlcnR5O1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnJlZUdsb2JhbDtcbiIsImltcG9ydCBiYXNlR2V0QWxsS2V5cyBmcm9tICcuL19iYXNlR2V0QWxsS2V5cy5qcyc7XG5pbXBvcnQgZ2V0U3ltYm9scyBmcm9tICcuL19nZXRTeW1ib2xzLmpzJztcbmltcG9ydCBrZXlzIGZyb20gJy4va2V5cy5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsbEtleXM7XG4iLCJpbXBvcnQgYmFzZUdldEFsbEtleXMgZnJvbSAnLi9fYmFzZUdldEFsbEtleXMuanMnO1xuaW1wb3J0IGdldFN5bWJvbHNJbiBmcm9tICcuL19nZXRTeW1ib2xzSW4uanMnO1xuaW1wb3J0IGtleXNJbiBmcm9tICcuL2tleXNJbi5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsbEtleXNJbjtcbiIsImltcG9ydCBpc0tleWFibGUgZnJvbSAnLi9faXNLZXlhYmxlLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRNYXBEYXRhO1xuIiwiaW1wb3J0IGJhc2VJc05hdGl2ZSBmcm9tICcuL19iYXNlSXNOYXRpdmUuanMnO1xuaW1wb3J0IGdldFZhbHVlIGZyb20gJy4vX2dldFZhbHVlLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TmF0aXZlO1xuIiwiaW1wb3J0IG92ZXJBcmcgZnJvbSAnLi9fb3ZlckFyZy5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcm90b3R5cGU7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuIiwiaW1wb3J0IGFycmF5RmlsdGVyIGZyb20gJy4vX2FycmF5RmlsdGVyLmpzJztcbmltcG9ydCBzdHViQXJyYXkgZnJvbSAnLi9zdHViQXJyYXkuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFN5bWJvbHM7XG4iLCJpbXBvcnQgYXJyYXlQdXNoIGZyb20gJy4vX2FycmF5UHVzaC5qcyc7XG5pbXBvcnQgZ2V0UHJvdG90eXBlIGZyb20gJy4vX2dldFByb3RvdHlwZS5qcyc7XG5pbXBvcnQgZ2V0U3ltYm9scyBmcm9tICcuL19nZXRTeW1ib2xzLmpzJztcbmltcG9ydCBzdHViQXJyYXkgZnJvbSAnLi9zdHViQXJyYXkuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTeW1ib2xzSW47XG4iLCJpbXBvcnQgRGF0YVZpZXcgZnJvbSAnLi9fRGF0YVZpZXcuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnLi9fUHJvbWlzZS5qcyc7XG5pbXBvcnQgU2V0IGZyb20gJy4vX1NldC5qcyc7XG5pbXBvcnQgV2Vha01hcCBmcm9tICcuL19XZWFrTWFwLmpzJztcbmltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IHRvU291cmNlIGZyb20gJy4vX3RvU291cmNlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZhbHVlO1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaERlbGV0ZTtcbiIsImltcG9ydCBuYXRpdmVDcmVhdGUgZnJvbSAnLi9fbmF0aXZlQ3JlYXRlLmpzJztcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoR2V0O1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc2hIYXM7XG4iLCJpbXBvcnQgbmF0aXZlQ3JlYXRlIGZyb20gJy4vX25hdGl2ZUNyZWF0ZS5qcyc7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoU2V0O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0Q2xvbmVBcnJheTtcbiIsImltcG9ydCBjbG9uZUFycmF5QnVmZmVyIGZyb20gJy4vX2Nsb25lQXJyYXlCdWZmZXIuanMnO1xuaW1wb3J0IGNsb25lRGF0YVZpZXcgZnJvbSAnLi9fY2xvbmVEYXRhVmlldy5qcyc7XG5pbXBvcnQgY2xvbmVNYXAgZnJvbSAnLi9fY2xvbmVNYXAuanMnO1xuaW1wb3J0IGNsb25lUmVnRXhwIGZyb20gJy4vX2Nsb25lUmVnRXhwLmpzJztcbmltcG9ydCBjbG9uZVNldCBmcm9tICcuL19jbG9uZVNldC5qcyc7XG5pbXBvcnQgY2xvbmVTeW1ib2wgZnJvbSAnLi9fY2xvbmVTeW1ib2wuanMnO1xuaW1wb3J0IGNsb25lVHlwZWRBcnJheSBmcm9tICcuL19jbG9uZVR5cGVkQXJyYXkuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGNsb25lRnVuYywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVNYXAob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIGNsb25lU2V0KG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0Q2xvbmVCeVRhZztcbiIsImltcG9ydCBiYXNlQ3JlYXRlIGZyb20gJy4vX2Jhc2VDcmVhdGUuanMnO1xuaW1wb3J0IGdldFByb3RvdHlwZSBmcm9tICcuL19nZXRQcm90b3R5cGUuanMnO1xuaW1wb3J0IGlzUHJvdG90eXBlIGZyb20gJy4vX2lzUHJvdG90eXBlLmpzJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0Q2xvbmVPYmplY3Q7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNJbmRleDtcbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheS5qcyc7XG5pbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi9pc1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNLZXk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzS2V5YWJsZTtcbiIsImltcG9ydCBjb3JlSnNEYXRhIGZyb20gJy4vX2NvcmVKc0RhdGEuanMnO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc01hc2tlZDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNQcm90b3R5cGU7XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZUNsZWFyO1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZURlbGV0ZTtcbiIsImltcG9ydCBhc3NvY0luZGV4T2YgZnJvbSAnLi9fYXNzb2NJbmRleE9mLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlR2V0O1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlSGFzO1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZVNldDtcbiIsImltcG9ydCBIYXNoIGZyb20gJy4vX0hhc2guanMnO1xuaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlQ2xlYXI7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlRGVsZXRlO1xuIiwiaW1wb3J0IGdldE1hcERhdGEgZnJvbSAnLi9fZ2V0TWFwRGF0YS5qcyc7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVHZXQ7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVIYXM7XG4iLCJpbXBvcnQgZ2V0TWFwRGF0YSBmcm9tICcuL19nZXRNYXBEYXRhLmpzJztcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXBDYWNoZVNldDtcbiIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcFRvQXJyYXk7XG4iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICcuL21lbW9pemUuanMnO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDYXBwZWQ7XG4iLCJpbXBvcnQgZ2V0TmF0aXZlIGZyb20gJy4vX2dldE5hdGl2ZS5qcyc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdGl2ZUNyZWF0ZTtcbiIsImltcG9ydCBvdmVyQXJnIGZyb20gJy4vX292ZXJBcmcuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdGl2ZUtleXM7XG4iLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF0aXZlS2V5c0luO1xuIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZVV0aWw7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3ZlckFyZztcbiIsImltcG9ydCBmcmVlR2xvYmFsIGZyb20gJy4vX2ZyZWVHbG9iYWwuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3Q7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRUb0FycmF5O1xuIiwiaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFja0NsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFja0RlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhY2tHZXQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFja0hhcztcbiIsImltcG9ydCBMaXN0Q2FjaGUgZnJvbSAnLi9fTGlzdENhY2hlLmpzJztcbmltcG9ydCBNYXAgZnJvbSAnLi9fTWFwLmpzJztcbmltcG9ydCBNYXBDYWNoZSBmcm9tICcuL19NYXBDYWNoZS5qcyc7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFja1NldDtcbiIsImltcG9ydCBtZW1vaXplQ2FwcGVkIGZyb20gJy4vX21lbW9pemVDYXBwZWQuanMnO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVMZWFkaW5nRG90ID0gL15cXC4vLFxuICAgIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChyZUxlYWRpbmdEb3QudGVzdChzdHJpbmcpKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ1RvUGF0aDtcbiIsImltcG9ydCBpc1N5bWJvbCBmcm9tICcuL2lzU3ltYm9sLmpzJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvS2V5O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1NvdXJjZTtcbiIsImltcG9ydCBiYXNlQ2xvbmUgZnJvbSAnLi9fYmFzZUNsb25lLmpzJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZURlZXA7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXE7XG4iLCJpbXBvcnQgYmFzZUdldCBmcm9tICcuL19iYXNlR2V0LmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXQ7XG4iLCJpbXBvcnQgYmFzZUlzQXJndW1lbnRzIGZyb20gJy4vX2Jhc2VJc0FyZ3VtZW50cy5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQXJyYXk7XG4iLCJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICcuL2lzRnVuY3Rpb24uanMnO1xuaW1wb3J0IGlzTGVuZ3RoIGZyb20gJy4vaXNMZW5ndGguanMnO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNBcnJheUxpa2U7XG4iLCJpbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcbmltcG9ydCBzdHViRmFsc2UgZnJvbSAnLi9zdHViRmFsc2UuanMnO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGlzQnVmZmVyO1xuIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdC5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzRnVuY3Rpb247XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzTGVuZ3RoO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcbiIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZS5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNTeW1ib2w7XG4iLCJpbXBvcnQgYmFzZUlzVHlwZWRBcnJheSBmcm9tICcuL19iYXNlSXNUeXBlZEFycmF5LmpzJztcbmltcG9ydCBiYXNlVW5hcnkgZnJvbSAnLi9fYmFzZVVuYXJ5LmpzJztcbmltcG9ydCBub2RlVXRpbCBmcm9tICcuL19ub2RlVXRpbC5qcyc7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5leHBvcnQgZGVmYXVsdCBpc1R5cGVkQXJyYXk7XG4iLCJpbXBvcnQgYXJyYXlMaWtlS2V5cyBmcm9tICcuL19hcnJheUxpa2VLZXlzLmpzJztcbmltcG9ydCBiYXNlS2V5cyBmcm9tICcuL19iYXNlS2V5cy5qcyc7XG5pbXBvcnQgaXNBcnJheUxpa2UgZnJvbSAnLi9pc0FycmF5TGlrZS5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlzO1xuIiwiaW1wb3J0IGFycmF5TGlrZUtleXMgZnJvbSAnLi9fYXJyYXlMaWtlS2V5cy5qcyc7XG5pbXBvcnQgYmFzZUtleXNJbiBmcm9tICcuL19iYXNlS2V5c0luLmpzJztcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL2lzQXJyYXlMaWtlLmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGtleXNJbjtcbiIsImltcG9ydCBNYXBDYWNoZSBmcm9tICcuL19NYXBDYWNoZS5qcyc7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0dWJBcnJheTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R1YkZhbHNlO1xuIiwiaW1wb3J0IGJhc2VUb1N0cmluZyBmcm9tICcuL19iYXNlVG9TdHJpbmcuanMnO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvU3RyaW5nO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYgKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcblx0XHQvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG5cdFx0Y3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nO1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjZhZWMxMjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGFuaWVsL1Byb2plY3RzL093bmVyL25jZm9ybS9uY2Zvcm0vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI2YWVjMTIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI2YWVjMTIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjZhZWMxMjImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjZhZWMxMjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2NvbnRyb2wtY29tcHMvaW5wdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbmNmb3JtX25jZm9ybV9jb21tb25fXzsiXSwic291cmNlUm9vdCI6IiJ9