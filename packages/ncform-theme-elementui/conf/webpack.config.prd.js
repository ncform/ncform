const path = require("path");
const webpack = require("webpack");

const config = require("./config");

module.exports = {

  mode: 'production',

  devtool: false,

  entry: {
    ncformStdComps: path.join(config.src, 'components', 'index.js'),
  },

  output: {
    filename: "[name].min.js",
  },

  optimization: {
    minimize: true
  }
};
