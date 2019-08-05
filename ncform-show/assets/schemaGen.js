(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("schemaGen", [], factory);
	else if(typeof exports === 'object')
		exports["schemaGen"] = factory();
	else
		root["schemaGen"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/schema-gen/index.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/babel-loader/lib/index.js!./src/components/schema-gen/schema-gen.js?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** D:/daniel/projects/owner/ncform/node_modules/babel-loader/lib!./src/components/schema-gen/schema-gen.js?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\r\n * <schema-gen></schema-gen>\r\n */\nexports.default = {\n  /* ====================== 自定义属性 ====================== */\n  editor: null,\n  output: null,\n\n  /* ====================== 生命周期 ====================== */\n\n  created: function created() {\n    // 在这里做一些跟DOM无关的初始化, 比如获取初始化数据\n  },\n  mounted: function mounted() {\n    // 在这里做一些跟DOM有关的初始化\n    var vm = this;\n    vm.createEditor();\n    vm.$options.editor.setValue(JSON.stringify(vm.$data.inputData, null, 2));\n  },\n  destroyed: function destroyed() {\n    // 在这里销毁无用的资源，比如setTimeout返回的值\n  },\n\n\n  /* ====================== 引用组件 ====================== */\n\n  components: {},\n\n  /* ====================== 数据绑定 ====================== */\n\n  props: {},\n\n  data: function data() {\n    return {\n      inputErr: {\n        isShow: false,\n        msg: \"\",\n        type: \"error\"\n      },\n      inputData: {\n        age: 18,\n        name: {\n          firstName: \"daniel\",\n          lastName: \"xiao\"\n        },\n        addresses: [{\n          provinceId: 1,\n          cityId: 2\n        }],\n        tags: [\"man\", \"it\"]\n      },\n      showNcform: false,\n      ncformSchema: {}, // 模式\n      ncformValue: {} // 模式对应的正确对象\n    };\n  },\n\n\n  /* ====================== 事件处理 ====================== */\n\n  methods: {\n    createEditor: function createEditor() {\n      var vm = this;\n      vm.$options.editor = window.ace.edit(this.$refs.editor);\n      vm.$options.output = window.ace.edit(this.$refs.output);\n      vm.$options.editor.$blockScrolling = Infinity;\n      vm.$options.output.$blockScrolling = Infinity;\n      vm.$options.output.setReadOnly(true);\n    },\n    setAlertMsg: function setAlertMsg(msg, isShow) {\n      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"error\";\n\n      var vm = this;\n      vm.$data.inputErr.msg = msg;\n      vm.$data.inputErr.type = type;\n      vm.$data.inputErr.isShow = isShow;\n      vm.showNcform = !isShow;\n      if (isShow) {\n        vm.$data.ncformSchema = {};\n        vm.$data.ncformValue = {};\n      }\n    },\n    jsonChange: function jsonChange() {\n      var vm = this;\n      var resultJSONStr = \"\";\n      try {\n        var editorVal = vm.$options.editor.getValue();\n\n        var resultJSON = vm.recurseTree({ val: eval(\"(\" + editorVal + \")\") });\n\n        var isObject = resultJSON.type === \"object\" ? 1 + (editorVal.replace(/\\s/g, \"\") === \"{}\" ? 0 : 1) : 0;\n\n        resultJSONStr = JSON.stringify(resultJSON, null, 2);\n\n        switch (isObject) {\n          case 2:\n            vm.$data.ncformSchema = resultJSON;\n\n            if (vm.$data.inputErr.isShow) {\n              vm.setAlertMsg(\"\", false);\n            } else {\n              vm.showNcform = true;\n            }\n            break;\n\n          case 1:\n            vm.setAlertMsg(\"Must provide at least one key-value pair\", true, \"warning\");\n            break;\n\n          case 0:\n            vm.setAlertMsg(\"The input must be object type. Current type is \" + resultJSON.type + \"\\u3002\", true, \"warning\");\n            break;\n\n          default:\n            break;\n        }\n      } catch (error) {\n        console.error(error);\n        vm.setAlertMsg(\"Not valid JSON data.\", true);\n      }\n\n      vm.$options.output.setValue(resultJSONStr);\n    },\n\n\n    // 设置结构\n    recurseTree: function recurseTree(_ref) {\n      var _ref$key = _ref.key,\n          key = _ref$key === undefined ? null : _ref$key,\n          _ref$val = _ref.val,\n          val = _ref$val === undefined ? null : _ref$val;\n\n      var vm = this;\n\n      // 设置ui的label值\n      var ui = { ui: { label: key } };\n\n      // 判断val的类型type\n      var type = Object.prototype.toString.call(val).slice(8, -1).toLowerCase();\n\n      var res = {};\n\n      switch (type) {\n        case \"null\":\n        case \"undefined\":\n          return { type: type };\n        case \"number\":\n        case \"string\":\n        case \"boolean\":\n          res = { type: type };\n          break;\n        case \"array\":\n          // 以数组第一个元素为准\n          res = { type: type, items: vm.recurseTree({ key: key, val: val[0] }) };\n          break;\n        case \"object\":\n          {\n            var buffer = {};\n            var _iteratorNormalCompletion = true;\n            var _didIteratorError = false;\n            var _iteratorError = undefined;\n\n            try {\n              for (var _iterator = Object.entries(val)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                var _step$value = _slicedToArray(_step.value, 2),\n                    k = _step$value[0],\n                    v = _step$value[1];\n\n                var result = vm.recurseTree({ key: k, val: v });\n                buffer = _extends({}, buffer, _defineProperty({}, k, result));\n              }\n            } catch (err) {\n              _didIteratorError = true;\n              _iteratorError = err;\n            } finally {\n              try {\n                if (!_iteratorNormalCompletion && _iterator.return) {\n                  _iterator.return();\n                }\n              } finally {\n                if (_didIteratorError) {\n                  throw _iteratorError;\n                }\n              }\n            }\n\n            res = { type: type, properties: buffer };\n            break;\n          }\n        default:\n          {\n            var msg = \"The existed type \" + type + \" is no allowed.\";\n            vm.setAlertMsg(msg, true);\n            throw new Error(msg);\n          }\n      }\n\n      return key ? _extends({}, res, ui) : res;\n    }\n  },\n\n  watch: {}\n};\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/schema-gen/schema-gen.js?D:/daniel/projects/owner/ncform/node_modules/babel-loader/lib");

/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/schema-gen/schema-gen.html?vue&type=template&id=eb112692&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** D:/daniel/projects/owner/ncform/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/schema-gen/schema-gen.html?vue&type=template&id=eb112692& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"schema-gen\" },\n    [\n      _c(\n        \"div\",\n        { staticClass: \"header\" },\n        [\n          _c(\n            \"a\",\n            {\n              staticClass: \"header-logo-invertocat\",\n              staticStyle: { float: \"right\" },\n              attrs: {\n                target: \"_blank\",\n                href: \"https://github.com/ncform/ncform\"\n              }\n            },\n            [\n              _c(\n                \"svg\",\n                {\n                  staticClass: \"octicon octicon-mark-github\",\n                  attrs: {\n                    height: \"32\",\n                    viewBox: \"0 0 16 16\",\n                    version: \"1.1\",\n                    width: \"32\",\n                    \"aria-hidden\": \"true\"\n                  }\n                },\n                [\n                  _c(\"path\", {\n                    attrs: {\n                      \"fill-rule\": \"evenodd\",\n                      d:\n                        \"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"\n                    }\n                  })\n                ]\n              )\n            ]\n          ),\n          _vm._v(\" \"),\n          _c(\"h3\", [_vm._v(\"ncform schema generator\")]),\n          _vm._v(\" \"),\n          _c(\n            \"el-button\",\n            {\n              attrs: { type: \"primary\", size: \"medium\" },\n              on: { click: _vm.jsonChange }\n            },\n            [_vm._v(\"Click to generate\")]\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _vm.inputErr.isShow\n        ? _c(\"el-alert\", {\n            attrs: {\n              title: _vm.inputErr.msg,\n              type: _vm.inputErr.type,\n              closable: false,\n              \"show-icon\": \"\"\n            }\n          })\n        : _vm._e(),\n      _vm._v(\" \"),\n      _c(\n        \"el-row\",\n        {\n          class: [_vm.inputErr.isShow ? \"alert\" : \"\", \"main\"],\n          attrs: { gutter: 20 }\n        },\n        [\n          _c(\"el-col\", { attrs: { span: 8 } }, [\n            _c(\"h4\", [_vm._v(\"Input:\")]),\n            _vm._v(\" \"),\n            _c(\"div\", { ref: \"editor\", staticClass: \"area\" })\n          ]),\n          _vm._v(\" \"),\n          _c(\"el-col\", { attrs: { span: 8 } }, [\n            _c(\"h4\", [_vm._v(\"Result:\")]),\n            _vm._v(\" \"),\n            _c(\"div\", { ref: \"output\", staticClass: \"area\" })\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"el-col\",\n            { attrs: { span: 8 } },\n            [\n              _c(\"h4\", [_vm._v(\"Preview:\")]),\n              _vm._v(\" \"),\n              _vm.showNcform\n                ? _c(\"ncform\", {\n                    staticClass: \"area\",\n                    attrs: {\n                      \"form-schema\": _vm.ncformSchema,\n                      \"form-name\": \"preview-form\"\n                    },\n                    model: {\n                      value: _vm.ncformValue,\n                      callback: function($$v) {\n                        _vm.ncformValue = $$v\n                      },\n                      expression: \"ncformValue\"\n                    }\n                  })\n                : _vm._e()\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/schema-gen/schema-gen.html?D:/daniel/projects/owner/ncform/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options");

/***/ }),

/***/ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!**************************************************************************************************!*\
  !*** D:/daniel/projects/owner/ncform/node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/D:/daniel/projects/owner/ncform/node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./src/components/schema-gen/schema-gen.scss?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!D:/daniel/projects/owner/ncform/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./src/components/schema-gen/schema-gen.scss?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")();\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.schema-gen .header {\\n  margin: 20px;\\n}\\n.schema-gen .header h3 {\\n    display: inline-block;\\n    margin-right: 10px;\\n}\\n.schema-gen .main.alert {\\n  margin-top: 20px;\\n}\\n.schema-gen .area {\\n  width: 100%;\\n  height: 600px;\\n  overflow: scroll;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/schema-gen/schema-gen.scss?./node_modules/css-loader!D:/daniel/projects/owner/ncform/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\nmodule.exports = function() {\r\n\tvar list = [];\r\n\r\n\t// return the list of modules as css string\r\n\tlist.toString = function toString() {\r\n\t\tvar result = [];\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar item = this[i];\r\n\t\t\tif(item[2]) {\r\n\t\t\t\tresult.push(\"@media \" + item[2] + \"{\" + item[1] + \"}\");\r\n\t\t\t} else {\r\n\t\t\t\tresult.push(item[1]);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn result.join(\"\");\r\n\t};\r\n\r\n\t// import a list of modules into the list\r\n\tlist.i = function(modules, mediaQuery) {\r\n\t\tif(typeof modules === \"string\")\r\n\t\t\tmodules = [[null, modules, \"\"]];\r\n\t\tvar alreadyImportedModules = {};\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar id = this[i][0];\r\n\t\t\tif(typeof id === \"number\")\r\n\t\t\t\talreadyImportedModules[id] = true;\r\n\t\t}\r\n\t\tfor(i = 0; i < modules.length; i++) {\r\n\t\t\tvar item = modules[i];\r\n\t\t\t// skip already imported module\r\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\r\n\t\t\t//  when a module is imported multiple times with different media queries.\r\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\r\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\r\n\t\t\t\tif(mediaQuery && !item[2]) {\r\n\t\t\t\t\titem[2] = mediaQuery;\r\n\t\t\t\t} else if(mediaQuery) {\r\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\r\n\t\t\t\t}\r\n\t\t\t\tlist.push(item);\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\treturn list;\r\n};\r\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-style-loader/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\nvar stylesInDom = {},\n\tmemoize = function(fn) {\n\t\tvar memo;\n\t\treturn function () {\n\t\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\t\treturn memo;\n\t\t};\n\t},\n\tisOldIE = memoize(function() {\n\t\treturn /msie [6-9]\\b/.test(window.navigator.userAgent.toLowerCase());\n\t}),\n\tgetHeadElement = memoize(function () {\n\t\treturn document.head || document.getElementsByTagName(\"head\")[0];\n\t}),\n\tsingletonElement = null,\n\tsingletonCounter = 0,\n\tstyleElementsInsertedAtTop = [];\n\nmodule.exports = function(list, options) {\n\tif(typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif(typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (typeof options.singleton === \"undefined\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the bottom of <head>.\n\tif (typeof options.insertAt === \"undefined\") options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list);\n\taddStylesToDom(styles, options);\n\n\treturn function update(newList) {\n\t\tvar mayRemove = [];\n\t\tfor(var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\t\tfor(var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor(var j = 0; j < domStyle.parts.length; j++)\n\t\t\t\t\tdomStyle.parts[j]();\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n}\n\nfunction addStylesToDom(styles, options) {\n\tfor(var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles(list) {\n\tvar styles = [];\n\tvar newStyles = {};\n\tfor(var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\t\tif(!newStyles[id])\n\t\t\tstyles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse\n\t\t\tnewStyles[id].parts.push(part);\n\t}\n\treturn styles;\n}\n\nfunction insertStyleElement(options, styleElement) {\n\tvar head = getHeadElement();\n\tvar lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];\n\tif (options.insertAt === \"top\") {\n\t\tif(!lastStyleElementInsertedAtTop) {\n\t\t\thead.insertBefore(styleElement, head.firstChild);\n\t\t} else if(lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\thead.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\thead.appendChild(styleElement);\n\t\t}\n\t\tstyleElementsInsertedAtTop.push(styleElement);\n\t} else if (options.insertAt === \"bottom\") {\n\t\thead.appendChild(styleElement);\n\t} else {\n\t\tthrow new Error(\"Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.\");\n\t}\n}\n\nfunction removeStyleElement(styleElement) {\n\tstyleElement.parentNode.removeChild(styleElement);\n\tvar idx = styleElementsInsertedAtTop.indexOf(styleElement);\n\tif(idx >= 0) {\n\t\tstyleElementsInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement(options) {\n\tvar styleElement = document.createElement(\"style\");\n\tstyleElement.type = \"text/css\";\n\tinsertStyleElement(options, styleElement);\n\treturn styleElement;\n}\n\nfunction addStyle(obj, options) {\n\tvar styleElement, update, remove;\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\t\tstyleElement = singletonElement || (singletonElement = createStyleElement(options));\n\t\tupdate = applyToSingletonTag.bind(null, styleElement, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);\n\t} else {\n\t\tstyleElement = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, styleElement);\n\t\tremove = function() {\n\t\t\tremoveStyleElement(styleElement);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle(newObj) {\n\t\tif(newObj) {\n\t\t\tif(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)\n\t\t\t\treturn;\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag(styleElement, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (styleElement.styleSheet) {\n\t\tstyleElement.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = styleElement.childNodes;\n\t\tif (childNodes[index]) styleElement.removeChild(childNodes[index]);\n\t\tif (childNodes.length) {\n\t\t\tstyleElement.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyleElement.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag(styleElement, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\tvar sourceMap = obj.sourceMap;\n\n\tif (media) {\n\t\tstyleElement.setAttribute(\"media\", media);\n\t}\n\n\tif (sourceMap) {\n\t\t// https://developer.chrome.com/devtools/docs/javascript-debugging\n\t\t// this makes source maps inside style tags work properly in Chrome\n\t\tcss += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */';\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tif (styleElement.styleSheet) {\n\t\tstyleElement.styleSheet.cssText = css;\n\t} else {\n\t\twhile(styleElement.firstChild) {\n\t\t\tstyleElement.removeChild(styleElement.firstChild);\n\t\t}\n\t\tstyleElement.appendChild(document.createTextNode(css));\n\t}\n}\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/vue-style-loader/addStyles.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./src/components/schema-gen/schema-gen.scss?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!D:/daniel/projects/owner/ncform/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./src/components/schema-gen/schema-gen.scss?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!./schema-gen.scss?vue&type=style&index=0&lang=scss& */ \"./node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./src/components/schema-gen/schema-gen.scss?vue&type=style&index=0&lang=scss&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(/*! ../../../node_modules/vue-style-loader/addStyles.js */ \"./node_modules/vue-style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/schema-gen/schema-gen.scss?./node_modules/vue-style-loader!./node_modules/css-loader!D:/daniel/projects/owner/ncform/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./src/components/schema-gen/index.vue":
/*!*********************************************!*\
  !*** ./src/components/schema-gen/index.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _schema_gen_html_vue_type_template_id_eb112692___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema-gen.html?vue&type=template&id=eb112692& */ \"./src/components/schema-gen/schema-gen.html?vue&type=template&id=eb112692&\");\n/* harmony import */ var _schema_gen_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema-gen.js?vue&type=script&lang=js& */ \"./src/components/schema-gen/schema-gen.js?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _schema_gen_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _schema_gen_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _schema_gen_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema-gen.scss?vue&type=style&index=0&lang=scss& */ \"./src/components/schema-gen/schema-gen.scss?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _schema_gen_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _schema_gen_html_vue_type_template_id_eb112692___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _schema_gen_html_vue_type_template_id_eb112692___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src\\\\components\\\\schema-gen\\\\index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/schema-gen/index.vue?");

/***/ }),

/***/ "./src/components/schema-gen/schema-gen.html?vue&type=template&id=eb112692&":
/*!**********************************************************************************!*\
  !*** ./src/components/schema-gen/schema-gen.html?vue&type=template&id=eb112692& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_schema_gen_html_vue_type_template_id_eb112692___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./schema-gen.html?vue&type=template&id=eb112692& */ \"../../node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/schema-gen/schema-gen.html?vue&type=template&id=eb112692&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_schema_gen_html_vue_type_template_id_eb112692___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_schema_gen_html_vue_type_template_id_eb112692___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/schema-gen/schema-gen.html?");

/***/ }),

/***/ "./src/components/schema-gen/schema-gen.js?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/components/schema-gen/schema-gen.js?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_schema_gen_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!./schema-gen.js?vue&type=script&lang=js& */ \"../../node_modules/babel-loader/lib/index.js!./src/components/schema-gen/schema-gen.js?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_schema_gen_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_schema_gen_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_schema_gen_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_schema_gen_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_schema_gen_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://%5Bname%5D/./src/components/schema-gen/schema-gen.js?");

/***/ }),

/***/ "./src/components/schema-gen/schema-gen.scss?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./src/components/schema-gen/schema-gen.scss?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_schema_gen_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!./schema-gen.scss?vue&type=style&index=0&lang=scss& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./src/components/schema-gen/schema-gen.scss?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_schema_gen_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_schema_gen_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_schema_gen_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_schema_gen_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_schema_gen_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://%5Bname%5D/./src/components/schema-gen/schema-gen.scss?");

/***/ })

/******/ });
});