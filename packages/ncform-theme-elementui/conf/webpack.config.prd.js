const path = require("path");
const merge = require("webpack-merge");

const config = require("./config");
const devConfig = require("./webpack.config.dev");

const commonConfig = {
  mode: "production",

  devtool: "source-map",

  entry: {
    ncformStdComps: path.join(config.src, "components", "index.js")
  },

  output: {
    filename: "[name].min.js"
  },

  optimization: {
    minimize: true
  }
};

module.exports = module.exports = [
  // 非压缩版本
  merge(devConfig[1], commonConfig, {
    output: {
      filename: "[name].js"
    },
    optimization: {
      minimize: false
    }
  }),
  // 压缩版本
  merge(devConfig[1], commonConfig)
];
