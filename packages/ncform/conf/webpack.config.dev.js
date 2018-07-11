const path = require("path");
const config = require("./config");

module.exports = {
  entry: {
    vueNcform: path.join(config.src, "components", "vue-ncform", "index.js")
  },

  output: {
    path: config.dist,
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    library: "[name]",
    libraryTarget: "umd",
    umdNamedDefine: true
  },

  externals: {
    vue: {
      root: "Vue",
      commonjs2: "vue",
      commonjs: "vue",
      amd: "vue"
    },
    "@ncform/ncform-common": {
      root: "ncformCommon",
      commonjs2: "@ncform/ncform-common",
      commonjs: "@ncform/ncform-common",
      amd: "ncformCommon"
    }
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue",
        include: [config.src]
      },
      {
        test: /\.js$/,
        loader: "babel",
        include: [config.src].concat(config.babelModules)
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url",
        query: {
          limit: 10000,
          name: "img/[name].[ext]"
        },
        include: [config.src]
      }
    ]
  },

  vue: {
    loaders: {
      js: "babel"
    }
  },
  babel: {
    presets: ["es2015"],
    plugins: ["transform-runtime"]
  }
};
