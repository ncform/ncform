const path = require("path");
const webpack = require("webpack");

const config = require("./config");

// webpack.config.js
module.exports = {
  entry: {
    ncformStdComps: path.join(config.src, "components", "index.js")
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
