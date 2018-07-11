const path = require("path");
const webpack = require("webpack");

const config = require("./config");

module.exports = {
  entry: {
    vueNcform: path.join(config.src, "components", "vue-ncform", "index.js")
  },

  output: {
    path: config.dist,
    filename: "[name].min.js",
    sourceMapFilename: "[file].map",
    library: "[name]",
    libraryTarget: "umd",
    umdNamedDefine: true
  },

  plugins: [
    // compress js
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
