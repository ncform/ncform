require("babel-core/register")({
  ignore: /node_modules\/(?!lodash-es|@ncform)/
});
require("babel-polyfill");
require("jsdom-global/register");
