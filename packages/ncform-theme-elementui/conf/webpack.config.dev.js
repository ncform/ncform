const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = require("./config");

// webpack.config.js
const webpackConfig = {

  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  entry: {
    input: path.join(config.src, "components", "control-comps", "input.vue"),
    radio: path.join(config.src, "components", "control-comps", "radio.vue"),
    checkbox: path.join(
      config.src,
      "components",
      "control-comps",
      "checkbox.vue"
    ),
    upload: path.join(config.src, "components", "control-comps", "upload.vue"),
    inputNumber: path.join(
      config.src,
      "components",
      "control-comps",
      "input-number.vue"
    ),
    textarea: path.join(
      config.src,
      "components",
      "control-comps",
      "textarea.vue"
    ),
    select: path.join(config.src, "components", "control-comps", "select.vue"),
    colorPicker: path.join(
      config.src,
      "components",
      "control-comps",
      "color-picker.vue"
    ),
    datePicker: path.join(
      config.src,
      "components",
      "control-comps",
      "date-picker.vue"
    ),
    slider: path.join(config.src, "components", "control-comps", "slider.vue"),
    rate: path.join(config.src, "components", "control-comps", "rate.vue"),
    label: path.join(config.src, "components", "control-comps", "label.vue"),
    switch: path.join(config.src, "components", "control-comps", "switch.vue"),
    // Don't touch me - controls

    object: path.join(config.src, "components", "layout-comps", "object.vue"),
    array: path.join(config.src, "components", "layout-comps", "array.vue"),
    arrayTable: path.join(
      config.src,
      "components",
      "layout-comps",
      "array-table.vue"
    ),
    arrayTabs: path.join(
      config.src,
      "components",
      "layout-comps",
      "array-tabs.vue"
    )
    // Don't touch me - layouts
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
    axios: {
      root: "axios",
      commonjs2: "axios",
      commonjs: "axios",
      amd: "axios"
    },
    "@ncform/ncform-common": {
      root: "ncformCommon",
      commonjs2: "@ncform/ncform-common",
      commonjs: "@ncform/ncform-common",
      amd: "ncformCommon"
    },
    "element-ui": {
      root: "ELEMENT",
      commonjs2: "element-ui",
      commonjs: "element-ui",
      amd: "ELEMENT"
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


module.exports = [
  webpackConfig,
  Object.assign({}, webpackConfig, {
    entry: {
      ncformStdComps: path.join(config.src, 'components', 'index.js'),
    }
  })
]
