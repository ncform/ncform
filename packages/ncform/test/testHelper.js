// 这里主要是解决跟test完全无关的ncform-common报window is not defined的问题，简单粗暴
// 如果想优雅的，请参考：https://github.com/rstacruz/jsdom-global
window = {};
require("babel-core/register")({
  ignore: /node_modules\/(?!lodash-es|@ncform)/
});
require("babel-polyfill");
