(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("playground", [], factory);
	else if(typeof exports === 'object')
		exports["playground"] = factory();
	else
		root["playground"] = factory();
})(this, function() {
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
	  console.warn("[vue-loader] src/components/playground/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
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
	  var id = "_v-fec2bcfe/index.vue"
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
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-fec2bcfe&scoped=true!./playground.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-fec2bcfe&scoped=true!./playground.css");
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
	exports.push([module.id, ".playground[_v-fec2bcfe] {\n    padding: 8px;\n}\n.editorArea[_v-fec2bcfe]{\n    margin: 8px 0 0;\n    border: 1px solid #d8dce5;\n    border-left: none;\n}\n.previewArea[_v-fec2bcfe]{\n    margin: 8px 0 0;\n    /* min-height: 650px; */\n}\n\n.editor[_v-fec2bcfe]{\n    position: relative;\n    width: 100%;\n    min-height: 600px;\n}", ""]);

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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(6);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * <playground></playground>
	 */
	exports.default = {
	  /* ====================== 生命周期 ====================== */

	  created: function created() {
	    // 在这里做一些跟DOM无关的初始化, 比如获取初始化数据
	  },
	  mounted: function mounted() {
	    var _this = this;

	    // 在这里做一些跟DOM有关的初始化
	    setTimeout(function () {
	      _this.createEditor();
	      _this.templateChange("0");
	    }, 0);
	  },
	  destroyed: function destroyed() {
	    // 在这里销毁无用的资源，比如setTimeout返回的值
	  },


	  /* ====================== 引用组件 ====================== */

	  components: {},

	  /* ====================== 数据绑定 ====================== */

	  props: {},

	  data: function data() {
	    return {
	      jsonValue: "",
	      ncformSchema: {
	        type: "object",
	        properties: {
	          username: {
	            type: "string",
	            ui: {
	              columns: 6,
	              label: "username"
	            }
	          }
	        }
	      },
	      ncformValue: {},

	      selectVal: "0",
	      options: [{
	        value: "0",
	        label: "基础使用"
	      }, {
	        value: "1",
	        label: "基础使用-丰富显示"
	      }, {
	        value: "2",
	        label: "基础使用-多列布局"
	      }, {
	        value: "22",
	        label: "基础使用-媒体预览"
	      }, {
	        value: "3",
	        label: "基础使用-标签居左"
	      }, {
	        value: "4",
	        label: "基础使用-校验规则"
	      }, {
	        value: "5",
	        label: "基础使用-数组类型"
	      }, {
	        value: "6",
	        label: "基础使用-表格数组"
	      }, {
	        value: "7",
	        label: "基础使用-标签数组"
	      }, {
	        value: "8",
	        label: "高级玩法-控件交互 dx表达式"
	      }, {
	        value: "9",
	        label: "高级玩法-数组项交互 dx表达式"
	      }, {
	        value: "10",
	        label: "高级玩法-下拉框值交互 dx表达式"
	      }, {
	        value: "101",
	        label: "高级玩法-校验关联 dx表达式"
	      }, {
	        value: "11",
	        label: "高级玩法-自定义校验规则 dx表达式"
	      }, {
	        value: "12",
	        label: "高级玩法-全局常量 dx表达式"
	      }],
	      templates: {
	        "0": {
	          type: "object",
	          properties: {
	            name: {
	              type: "string"
	            },
	            email: {
	              type: "string"
	            },
	            age: {
	              type: "integer"
	            },
	            adult: {
	              type: "boolean"
	            }
	          }
	        },
	        "1": {
	          type: "object",
	          properties: {
	            name: {
	              type: "string",
	              ui: {
	                label: "姓名",
	                description: "请填写你的姓名",
	                placeholder: "姓名"
	              }
	            },
	            email: {
	              type: "string",
	              ui: {
	                label: "邮件"
	              }
	            },
	            age: {
	              type: "integer",
	              default: 18,
	              ui: {
	                label: "年龄"
	              }
	            },
	            adult: {
	              type: "boolean",
	              ui: {
	                label: "是否成年",
	                help: {
	                  show: true,
	                  text: "?",
	                  content: "成年才可以玩农药啊"
	                }
	              }
	            }
	          }
	        },
	        "2": {
	          type: "object",
	          properties: {
	            firstname: {
	              type: "string",
	              ui: {
	                columns: 3,
	                label: "姓名",
	                placeholder: "姓"
	              }
	            },
	            lastname: {
	              type: "string",
	              ui: {
	                columns: 3,
	                showLabel: false,
	                placeholder: "名"
	              }
	            },
	            email: {
	              type: "string",
	              ui: {
	                columns: 6,
	                label: "邮件"
	              }
	            },
	            age: {
	              type: "integer",
	              ui: {
	                columns: 6,
	                label: "年龄"
	              }
	            },
	            adult: {
	              type: "boolean",
	              ui: {
	                columns: 6,
	                label: "是否成年",
	                help: {
	                  show: true,
	                  text: "?",
	                  content: "成年才可以玩农药啊"
	                }
	              }
	            }
	          }
	        },

	        "22": {
	          type: "object",
	          properties: {
	            image: {
	              type: "string",
	              default: "https://upload-images.jianshu.io/upload_images/2195795-e3c500e4b7d17b2c.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
	              ui: {
	                label: "图片",
	                columns: 6,
	                preview: {
	                  type: "image",
	                  value: "dx: {{$self}}",
	                  clearable: true,
	                  outward: {
	                    width: 150,
	                    height: 150,
	                    shape: "circle"
	                  }
	                }
	              }
	            },
	            video: {
	              type: "string",
	              default: "https://www.w3schools.com/html/mov_bbb.mp4",
	              ui: {
	                label: "视频",
	                columns: 6,
	                preview: {
	                  type: "video"
	                }
	              }
	            },
	            audio: {
	              type: "string",
	              default: "https://www.w3schools.com/html/mov_bbb.mp4",
	              ui: {
	                label: "音频",
	                columns: 6,
	                preview: {
	                  type: "audio"
	                }
	              }
	            },
	            link: {
	              type: "string",
	              default: "https://www.baidu.com",
	              ui: {
	                label: "链接",
	                columns: 6,
	                preview: {
	                  type: "link"
	                }
	              }
	            }
	          }
	        },

	        "3": {
	          type: "object",
	          properties: {
	            firstname: {
	              type: "string",
	              ui: {
	                label: "姓名",
	                placeholder: "姓"
	              }
	            },
	            lastname: {
	              type: "string",
	              ui: {
	                showLabel: false,
	                placeholder: "名"
	              }
	            },
	            email: {
	              type: "string",
	              ui: {
	                label: "邮件"
	              }
	            },
	            age: {
	              type: "integer",
	              ui: {
	                label: "年龄"
	              }
	            },
	            adult: {
	              type: "boolean",
	              ui: {
	                label: "是否成年",
	                help: {
	                  show: true,
	                  text: "?",
	                  content: "成年才可以玩农药啊"
	                }
	              }
	            }
	          },
	          ui: {
	            widgetConfig: {
	              layout: "h"
	            }
	          }
	        },
	        "4": {
	          type: "object",
	          properties: {
	            name: {
	              type: "string",
	              ui: {
	                label: "姓名",
	                description: "请填写你的姓名",
	                placeholder: "姓名"
	              },
	              rules: {
	                required: true,
	                minLength: 10
	              }
	            },
	            email: {
	              type: "string",
	              ui: {
	                label: "邮件"
	              },
	              rules: {
	                required: true,
	                email: {
	                  value: true,
	                  errMsg: "请填写有效的邮件地址"
	                }
	              }
	            },
	            age: {
	              type: "integer",
	              ui: {
	                label: "年龄"
	              }
	            },
	            adult: {
	              type: "boolean",
	              ui: {
	                label: "是否成年",
	                help: {
	                  show: true,
	                  text: "?",
	                  content: "成年才可以玩农药啊"
	                }
	              }
	            }
	          }
	        },
	        "5": {
	          type: "object",
	          properties: {
	            user: {
	              type: "array",
	              items: {
	                type: "object",
	                properties: {
	                  name: {
	                    type: "string",
	                    ui: {
	                      label: "姓名",
	                      description: "请填写你的姓名",
	                      placeholder: "姓名"
	                    },
	                    rules: {
	                      required: true
	                    }
	                  },
	                  email: {
	                    type: "string",
	                    ui: {
	                      label: "邮件"
	                    },
	                    rules: {
	                      required: true,
	                      email: true
	                    }
	                  },
	                  age: {
	                    type: "integer",
	                    ui: {
	                      label: "年龄"
	                    }
	                  },
	                  adult: {
	                    type: "boolean",
	                    ui: {
	                      label: "是否成年",
	                      help: {
	                        show: true,
	                        text: "?",
	                        content: "成年才可以玩农药啊"
	                      }
	                    }
	                  }
	                },
	                ui: {
	                  label: "用户"
	                }
	              },
	              ui: {
	                showLegend: false,
	                noLabelSpace: true
	              }
	            }
	          }
	        },
	        "6": {
	          type: "object",
	          properties: {
	            user: {
	              type: "array",
	              items: {
	                type: "object",
	                properties: {
	                  name: {
	                    type: "string",
	                    ui: {
	                      label: "姓名",
	                      description: "请填写你的姓名",
	                      placeholder: "姓名"
	                    },
	                    rules: {
	                      required: true
	                    }
	                  },
	                  email: {
	                    type: "string",
	                    ui: {
	                      label: "邮件"
	                    },
	                    rules: {
	                      required: true,
	                      email: true
	                    }
	                  },
	                  age: {
	                    type: "integer",
	                    ui: {
	                      label: "年龄"
	                    }
	                  },
	                  adult: {
	                    type: "boolean",
	                    ui: {
	                      label: "是否成年",
	                      help: {
	                        show: true,
	                        text: "?",
	                        content: "成年才可以玩农药啊"
	                      }
	                    }
	                  }
	                }
	              },
	              ui: {
	                showLegend: false,
	                noLabelSpace: true,
	                widget: "array-table",
	                widgetConfig: {
	                  disableCollapse: true
	                }
	              }
	            }
	          }
	        },
	        "7": {
	          type: "object",
	          properties: {
	            user: {
	              type: "array",
	              items: {
	                type: "object",
	                properties: {
	                  name: {
	                    type: "string",
	                    ui: {
	                      label: "姓名",
	                      description: "请填写你的姓名",
	                      placeholder: "姓名"
	                    },
	                    rules: {
	                      required: true
	                    }
	                  },
	                  email: {
	                    type: "string",
	                    ui: {
	                      label: "邮件"
	                    },
	                    rules: {
	                      required: true,
	                      email: true
	                    }
	                  },
	                  age: {
	                    type: "integer",
	                    ui: {
	                      label: "年龄"
	                    }
	                  },
	                  adult: {
	                    type: "boolean",
	                    ui: {
	                      label: "是否成年",
	                      help: {
	                        show: true,
	                        text: "?",
	                        content: "成年才可以玩农药啊"
	                      }
	                    }
	                  }
	                },
	                ui: {
	                  label: "用户"
	                }
	              },
	              ui: {
	                showLegend: false,
	                noLabelSpace: true,
	                widget: "array-tabs"
	              }
	            }
	          }
	        },
	        "8": {
	          type: "object",
	          properties: {
	            age: {
	              type: "integer",
	              ui: {
	                label: "年龄",
	                description: "大于18岁才能继续填写"
	              }
	            },
	            gameInfo: {
	              type: "object",
	              properties: {
	                game: {
	                  type: "string",
	                  ui: {
	                    label: "喜欢游戏",
	                    description: "填写解锁"
	                  }
	                },
	                gameAge: {
	                  type: "integer",
	                  ui: {
	                    label: "游戏年龄",
	                    disabled: "dx: !{{$root.gameInfo.game}}"
	                  }
	                }
	              },
	              ui: {
	                legend: "游戏信息",
	                hidden: "dx: !{{$root.age}} || {{$root.age}} < 18"
	              }
	            }
	          }
	        },
	        "9": {
	          type: "object",
	          properties: {
	            user: {
	              type: "array",
	              items: {
	                type: "object",
	                properties: {
	                  adult: {
	                    type: "boolean",
	                    ui: {
	                      label: "是否成年",
	                      help: {
	                        show: true,
	                        text: "?"
	                      }
	                    }
	                  },
	                  gameName: {
	                    type: "string",
	                    ui: {
	                      label: "喜欢游戏",
	                      disabled: "dx: !{{$root.user[i].adult}}"
	                    }
	                  },
	                  gameAge: {
	                    type: "integer",
	                    ui: {
	                      label: "游戏年龄",
	                      disabled: "dx: !{{$root.user[i].adult}}"
	                    }
	                  }
	                }
	              },
	              ui: {
	                showLegend: false,
	                noLabelSpace: true,
	                widget: "array-table"
	              }
	            }
	          }
	        },
	        "10": {
	          type: "object",
	          properties: {
	            province: {
	              type: "string",
	              ui: {
	                label: "省份",
	                widget: "select",
	                widgetConfig: {
	                  itemLabelField: "name", // 项数据表示label的字段
	                  itemValueField: "id", // 项数据表示value的字段
	                  enumSourceRemote: {
	                    // 远程数据源
	                    remoteUrl: "/api/test/getProvinces", // 如果是远程访问，则填写该url
	                    paramName: "keyword" // 请求参数名，默认是keyword
	                  }
	                }
	              }
	            },
	            city: {
	              type: "string",
	              ui: {
	                label: "城市",
	                widget: "select",
	                widgetConfig: {
	                  itemLabelField: "name", // 项数据表示label的字段
	                  itemValueField: "id", // 项数据表示value的字段
	                  enumSourceRemote: {
	                    // 远程数据源
	                    remoteUrl: "/api/test/getCities", // 如果是远程访问，则填写该url
	                    paramName: "keyword", // 请求参数名，默认是keyword
	                    otherParams: {
	                      provinceId: "dx: {{$root.province}}"
	                    }
	                  }
	                }
	              }
	            }
	          }
	        },
	        "101": {
	          type: "object",
	          properties: {
	            isRequired: {
	              type: "boolean",
	              ui: {
	                label: "是否必填",
	                linkFields: [{
	                  fieldPath: "num_1",
	                  rules: ["required"]
	                }, {
	                  fieldPath: "num_2",
	                  rules: ["required"]
	                }]
	              }
	            },
	            num_1: {
	              type: "number",
	              ui: {
	                description: "num_1 >= num_2",
	                columns: 6,
	                linkFields: [{
	                  fieldPath: "num_2",
	                  rules: ["maximum"]
	                }]
	              },
	              rules: {
	                required: {
	                  value: "dx: {{$root.isRequired}}"
	                },
	                minimum: {
	                  value: "dx: {{$root.num_2}} || 0",
	                  errMsg: "num_1 >= num_2"
	                }
	              }
	            },
	            num_2: {
	              type: "number",
	              ui: {
	                columns: 6,
	                linkFields: [{
	                  fieldPath: "num_1",
	                  rules: ["minimum"]
	                }]
	              },
	              rules: {
	                required: {
	                  value: "dx: {{$root.isRequired}}"
	                },
	                maximum: {
	                  value: "dx: {{$root.num_1}} || 0",
	                  errMsg: "num_2 <= num_1"
	                }
	              }
	            }
	          }
	        },
	        "11": {
	          type: "object",
	          properties: {
	            startTime: {
	              type: "string",
	              ui: {
	                widget: "date-picker"
	              },
	              rules: {
	                customRule: [{
	                  script: "dx: !{{$root.endTime}} || {{$root.endTime}} >= {{$root.startTime}}", // 支持dx表达式
	                  errMsg: "开始日期必须小于等于结束日期", // 验证错误信息
	                  linkItems: [
	                  // 当触发校验时，同时触发这些关联的项进行校验
	                  {
	                    fieldPath: "endTime", // 关联项
	                    customRuleIdx: 0 // 触发该项的自定义验证规则的索引
	                  }]
	                }]
	              }
	            },
	            endTime: {
	              type: "string",
	              ui: {
	                widget: "date-picker"
	              },
	              rules: {
	                customRule: [{
	                  script: "dx: !{{$root.startTime}} || {{$root.endTime}} >= {{$root.startTime}}", // 支持dx表达式
	                  errMsg: "结束日期必须大于等于开始日期", // 验证错误信息
	                  linkItems: [
	                  // 当触发校验时，同时触发这些关联的项进行校验
	                  {
	                    fieldPath: "startTime", // 关联项
	                    customRuleIdx: 0 // 触发该项的自定义验证规则的索引
	                  }]
	                }]
	              }
	            },
	            arrayItems: {
	              type: "array",
	              items: {
	                type: "object",
	                properties: {
	                  startTime: {
	                    type: "string",
	                    ui: {
	                      widget: "date-picker"
	                    },
	                    rules: {
	                      customRule: [{
	                        script: "dx: !{{$root.arrayItems[i].endTime}} || {{$root.arrayItems[i].endTime}} >= {{$root.arrayItems[i].startTime}}", // 支持dx表达式
	                        errMsg: "开始日期必须小于等于结束日期", // 验证错误信息
	                        linkItems: [
	                        // 当触发校验时，同时触发这些关联的项进行校验
	                        {
	                          fieldPath: "arrayItems[i].endTime", // 关联项
	                          customRuleIdx: 0 // 触发该项的自定义验证规则的索引
	                        }]
	                      }]
	                    }
	                  },
	                  endTime: {
	                    type: "string",
	                    ui: {
	                      widget: "date-picker"
	                    },
	                    rules: {
	                      customRule: [{
	                        script: "dx: !{{$root.arrayItems[i].startTime}} || {{$root.arrayItems[i].endTime}} >= {{$root.arrayItems[i].startTime}}", // 支持dx表达式
	                        errMsg: "结束日期必须大于等于开始日期", // 验证错误信息
	                        linkItems: [
	                        // 当触发校验时，同时触发这些关联的项进行校验
	                        {
	                          fieldPath: "arrayItems[i].startTime", // 关联项
	                          customRuleIdx: 0 // 触发该项的自定义验证规则的索引
	                        }]
	                      }]
	                    }
	                  }
	                }
	              },
	              ui: {
	                showLabel: false,
	                legend: "数组项",
	                widget: "array-table",
	                widgetConfig: {
	                  collapsed: true
	                }
	              }
	            }
	          }
	        },
	        "12": {
	          type: "object",
	          properties: {
	            age: {
	              type: "string",
	              ui: {
	                placeholder: 'dx: "年龄必须大于" + {{$const.ageLimit}}'
	              },
	              rules: {
	                customRule: [{
	                  script: "dx: {{$root.age}} > {{$const.ageLimit}}", // 支持dx表达式
	                  errMsg: "请填写正确的年龄" // 验证错误信息
	                }]
	              }
	            }
	          },
	          globalConfig: {
	            constants: {
	              ageLimit: 18
	            }
	          }
	        }
	      }
	    };
	  },


	  /* ====================== 事件处理 ====================== */

	  methods: {
	    createEditor: function createEditor() {
	      this.$options.editor = window.ace.edit(this.$refs.editor);
	      this.$options.editor.$blockScrolling = Infinity;
	    },
	    templateChange: function templateChange(v) {
	      this.$options.editor.setValue((0, _stringify2.default)(this.$data.templates[v], null, 2), 1);
	      this.$data.ncformSchema = JSON.parse(this.$options.editor.getValue());
	      this.$data.ncformValue = {};
	    },
	    createForm: function createForm() {
	      var value = this.$options.editor.getValue();
	      try {
	        eval('this.$data.ncformSchema = ' + value);
	        this.$data.ncformValue = {};
	      } catch (err) {
	        alert("不是有效的JSON数据.");
	        throw new Error("createForm Error:" + err);
	      }
	    },
	    getFormData: function getFormData() {
	      var _this2 = this;

	      this.$ncformValidate("preview-form").then(function (res) {
	        if (res.result) {
	          var data = (0, _stringify2.default)(_this2.$data.ncformValue, null, 2);
	          alert(data);
	        }
	      });
	    }
	  },

	  watch: {}
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(8);
	var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"playground\" _v-fec2bcfe=\"\">\n  <el-row _v-fec2bcfe=\"\">\n    <el-col :span=\"12\" _v-fec2bcfe=\"\">\n        模板：\n      <el-select v-model=\"selectVal\" placeholder=\"请选择\" @change=\"templateChange\" _v-fec2bcfe=\"\">\n        <el-option v-for=\"item in options\" :key=\"item.value\" :label=\"item.label\" :value=\"item.value\" _v-fec2bcfe=\"\">\n        </el-option>\n      </el-select>\n      <el-button type=\"primary\" @click=\"createForm\" _v-fec2bcfe=\"\">生成表单</el-button>\n    </el-col>\n    <el-col :span=\"12\" _v-fec2bcfe=\"\">\n      <el-button type=\"success\" @click=\"getFormData\" _v-fec2bcfe=\"\">获取表单数据</el-button>\n    </el-col>\n  </el-row>\n  <el-row _v-fec2bcfe=\"\">\n    <el-col :span=\"12\" _v-fec2bcfe=\"\">\n      <div class=\"editorArea\" _v-fec2bcfe=\"\">\n        <div ref=\"editor\" class=\"editor\" _v-fec2bcfe=\"\">{{jsonValue}}</div>\n      </div>\n    </el-col>\n    <el-col :span=\"12\" _v-fec2bcfe=\"\">\n      <div class=\"previewArea\" _v-fec2bcfe=\"\">\n        <ncform :form-schema=\"ncformSchema\" v-model=\"ncformValue\" form-name=\"preview-form\" _v-fec2bcfe=\"\"></ncform>\n      </div>\n    </el-col>\n  </el-row>\n</div>";

/***/ })
/******/ ])
});
;