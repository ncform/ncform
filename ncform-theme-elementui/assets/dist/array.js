(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@ncform/ncform-common"));
	else if(typeof define === 'function' && define.amd)
		define("array", ["ncformCommon"], factory);
	else if(typeof exports === 'object')
		exports["array"] = factory(require("@ncform/ncform-common"));
	else
		root["array"] = factory(root["ncformCommon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(1)
	__vue_script__ = __webpack_require__(5)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src/components/layout-comps/array.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-01ce8d82/array.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./array.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./array.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".__array-form-item > legend {\n  border-left: 6px solid #878D99;\n  padding: 6px;\n  background-color: #d8dce5;\n  color: #5a5e66;\n  font-size: 14px;\n  margin-bottom: 0px;\n  border-radius: 4px 4px 0 0; }\n  .__array-form-item > legend .el-collapse-item__arrow {\n    line-height: 22px;\n    cursor: pointer; }\n\n.__array-form-item .list-item {\n  margin: 0px 0px 8px; }\n  .__array-form-item .list-item .list-item-label {\n    padding: 8px 8px 4px 8px; }\n    .__array-form-item .list-item .list-item-label label {\n      font-size: 14px; }\n\n.__array-form-item .normal-item {\n  padding: 4px 8px 8px 8px; }\n", ""]);

	// exports


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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
		if(false) {
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ncformCommon = __webpack_require__(6);

	var _ncformCommon2 = _interopRequireDefault(_ncformCommon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var layoutArrayMixin = _ncformCommon2.default.mixins.vue.layoutArrayMixin; // <template>
	//
	//   <div class="__array-form-item">
	//
	//     <legend v-if="schema.ui.legend && schema.ui.showLegend" @click="collapse()">
	//       {{schema.ui.legend}}
	//       <i v-if="!mergeConfig.disableCollapse" class="el-collapse-item__arrow" :class="{'el-icon-arrow-up': !mergeConfig.collapsed, 'el-icon-arrow-down': mergeConfig.collapsed}"></i>
	//     </legend>
	//
	//     <div v-show="!mergeConfig.collapsed" v-for="(dataItem, idx) in schema.value" :key="dataItem.__dataSchema.__id" class="list-item">
	//
	//       <div class="list-item-label">
	//         <label>{{dataItem.__dataSchema.ui.label}} {{idx + 1}}</label>
	//
	//         <!-- 项控制按钮 -->
	//         <div class="el-button-group">
	//           <button @click="delItem(idx)" v-if="!mergeConfig.disableDel" type="button" class="el-button el-button--danger el-button--mini"><i class="el-icon-remove"></i></button>
	//           <button @click="itemUp(idx)" v-show="idx !== 0" v-if="!mergeConfig.disableReorder" type="button" class="el-button el-button--mini"><i class="el-icon-sort-up"></i></button>
	//           <button @click="itemDown(idx)" v-show="idx !== schema.value.length - 1" v-if="!mergeConfig.disableReorder" type="button" class="el-button el-button--mini"><i class="el-icon-sort-down"></i></button>
	//         </div>
	//       </div>
	//
	//       <!-- array item 是 正常的 object 类型 -->
	//       <template v-if="isNormalObjSchema(dataItem.__dataSchema)">
	//         <ncform-object :schema="dataItem.__dataSchema" :form-data="formData" :idx-chain="(idxChain ? idxChain + ',' : '') + idx" :config="dataItem.__dataSchema.ui.widgetConfig" :show-legend="false">
	//
	//           <template v-for="(fieldSchema, fieldName) in (dataItem.__dataSchema.properties || {__notObjItem: dataItem.__dataSchema})" :slot="fieldName"><!-- 注意：__notObjItem 这个Key为与form-item约定好的值，其它名字不生效 -->
	//             <slot :name="fieldName" :schema="fieldSchema" :idx="idx"></slot>
	//           </template>
	//
	//         </ncform-object>
	//       </template>
	//
	//       <!-- array item 是 非正常的 object 类型 以及 其它类型 -->
	//       <div v-else class="normal-item">
	//         <slot name="__notObjItem" :schema="dataItem.__dataSchema" :idx="idx"></slot> <!-- 注意：__notObjItem 和 __dataSchema 都是约定好的值，其它名字不生效 -->
	//       </div>
	//
	//     </div>
	//
	//     <!-- 列表控制按钮 -->
	//     <div v-show="!mergeConfig.collapsed" class="el-button-group" v-if="!mergeConfig.disableAdd || !mergeConfig.disableDel">
	//       <button @click="addItem()" v-if="!mergeConfig.disableAdd" type="button" class="el-button el-button--mini"><i class="el-icon-circle-plus-outline"></i> {{mergeConfig.addTxt}}</button>
	//       <button @click="delAllItems()" v-if="!mergeConfig.disableDel" type="button" class="el-button el-button--danger el-button--mini"><i class="el-icon-remove"></i> {{mergeConfig.delAllTxt}}</button>
	//     </div>
	//
	//   </div>
	//
	// </template>
	//
	// <style lang="sass">
	//   .__array-form-item {
	//
	//     // margin-top: 8px;
	//
	//     & > legend {
	//       border-left: 6px solid #878D99;
	//       padding: 6px;
	//       background-color: #d8dce5;
	//       color: #5a5e66;
	//       font-size: 14px;
	//       margin-bottom: 0px;
	//       border-radius: 4px 4px 0 0;
	//
	//       .el-collapse-item__arrow {
	//         line-height: 22px;
	//         cursor: pointer;
	//       }
	//     }
	//
	//     .list-item {
	//       // border: 1px solid #d8dce5;
	//       margin: 0px 0px 8px;
	//       .list-item-label {
	//         padding: 8px 8px 4px 8px;
	//         label {
	//           font-size: 14px;
	//         }
	//       }
	//     }
	//     .normal-item {
	//       padding: 4px 8px 8px 8px;
	//     }
	//   }
	// </style>
	//
	// <script>

	exports.default = {

	  mixins: [layoutArrayMixin]
	  // </script>

	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "\n\n<div class=\"__array-form-item\">\n\n  <legend v-if=\"schema.ui.legend && schema.ui.showLegend\" @click=\"collapse()\">\n    {{schema.ui.legend}}\n    <i v-if=\"!mergeConfig.disableCollapse\" class=\"el-collapse-item__arrow\" :class=\"{'el-icon-arrow-up': !mergeConfig.collapsed, 'el-icon-arrow-down': mergeConfig.collapsed}\"></i>\n  </legend>\n\n  <div v-show=\"!mergeConfig.collapsed\" v-for=\"(dataItem, idx) in schema.value\" :key=\"dataItem.__dataSchema.__id\" class=\"list-item\">\n\n    <div class=\"list-item-label\">\n      <label>{{dataItem.__dataSchema.ui.label}} {{idx + 1}}</label>\n\n      <!-- 项控制按钮 -->\n      <div class=\"el-button-group\">\n        <button @click=\"delItem(idx)\" v-if=\"!mergeConfig.disableDel\" type=\"button\" class=\"el-button el-button--danger el-button--mini\"><i class=\"el-icon-remove\"></i></button>\n        <button @click=\"itemUp(idx)\" v-show=\"idx !== 0\" v-if=\"!mergeConfig.disableReorder\" type=\"button\" class=\"el-button el-button--mini\"><i class=\"el-icon-sort-up\"></i></button>\n        <button @click=\"itemDown(idx)\" v-show=\"idx !== schema.value.length - 1\" v-if=\"!mergeConfig.disableReorder\" type=\"button\" class=\"el-button el-button--mini\"><i class=\"el-icon-sort-down\"></i></button>\n      </div>\n    </div>\n\n    <!-- array item 是 正常的 object 类型 -->\n    <template v-if=\"isNormalObjSchema(dataItem.__dataSchema)\">\n      <ncform-object :schema=\"dataItem.__dataSchema\" :form-data=\"formData\" :idx-chain=\"(idxChain ? idxChain + ',' : '') + idx\" :config=\"dataItem.__dataSchema.ui.widgetConfig\" :show-legend=\"false\">\n\n        <template v-for=\"(fieldSchema, fieldName) in (dataItem.__dataSchema.properties || {__notObjItem: dataItem.__dataSchema})\" :slot=\"fieldName\"><!-- 注意：__notObjItem 这个Key为与form-item约定好的值，其它名字不生效 -->\n          <slot :name=\"fieldName\" :schema=\"fieldSchema\" :idx=\"idx\"></slot>\n        </template>\n\n      </ncform-object>\n    </template>\n\n    <!-- array item 是 非正常的 object 类型 以及 其它类型 -->\n    <div v-else class=\"normal-item\">\n      <slot name=\"__notObjItem\" :schema=\"dataItem.__dataSchema\" :idx=\"idx\"></slot> <!-- 注意：__notObjItem 和 __dataSchema 都是约定好的值，其它名字不生效 -->\n    </div>\n\n  </div>\n\n  <!-- 列表控制\b按钮 -->\n  <div v-show=\"!mergeConfig.collapsed\" class=\"el-button-group\" v-if=\"!mergeConfig.disableAdd || !mergeConfig.disableDel\">\n    <button @click=\"addItem()\" v-if=\"!mergeConfig.disableAdd\" type=\"button\" class=\"el-button el-button--mini\"><i class=\"el-icon-circle-plus-outline\"></i> {{mergeConfig.addTxt}}</button>\n    <button @click=\"delAllItems()\" v-if=\"!mergeConfig.disableDel\" type=\"button\" class=\"el-button el-button--danger el-button--mini\"><i class=\"el-icon-remove\"></i> {{mergeConfig.delAllTxt}}</button>\n  </div>\n\n</div>\n\n";

/***/ })
/******/ ])
});
;