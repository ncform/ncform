const merge = require("webpack-merge");
const devConfig = require("./webpack.config.dev");

const commonConfig = {
  mode: "production",

  output: {
    filename: "[name].min.js"
  },

  devtool: "source-map",

  optimization: {
    minimize: true
  }
};

module.exports = [
  // 非压缩版本
  merge(devConfig, commonConfig, {
    output: {
      filename: "[name].js"
    },
    optimization: {
      minimize: false
    }
  }),
  // 压缩版本
  merge(devConfig, commonConfig)
];
