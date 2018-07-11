const path = require("path");

const config = require("./config");

// webpack.config.js
module.exports = {
  entry: {
    playground: path.join(config.src, "components", "playground", "index.vue"),
    schemaGen: path.join(config.src, "components", "schema-gen", "index.vue")
    // Don't touch me - components

    // Don't touch me - directives
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
    }
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: "vue",
        include: [config.src].concat(config.vueModules)
      },
      {
        test: /\.js$/,
        loader: "babel",
        include: [config.src].concat(config.babelModules)
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: "url",
        query: {
          // inline files smaller then 10kb as base64 dataURL
          limit: 10000,
          // fallback to file-loader with this naming scheme
          name: "img/[name].[ext]"
        },
        include: [config.src].concat(config.vueModules)
      }
    ]
  },

  vue: {
    loaders: {
      js: "babel"
    }
  },
  babel: {
    presets: ["stage-3", "es2015"],
    plugins: ["transform-runtime"]
  }
};
