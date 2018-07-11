const path = require("path");
const webpack = require("webpack");

const config = require("./config");

// webpack.config.js
module.exports = {
  entry: {
    "vue-component": path.join(config.src, "components", "index.js"),
    "vue-directive": path.join(config.src, "directives", "index.js")
  },

  output: {
    path: config.dist,
    filename: "[name].min.js"
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
