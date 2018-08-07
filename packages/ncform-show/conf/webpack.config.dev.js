const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require("./config");

// webpack.config.js
module.exports = {

  mode: 'development',

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
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        include: [config.src]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [config.src].concat(config.babelModules)
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: "img/[name].[ext]"
        },
        include: [config.src]
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
};
