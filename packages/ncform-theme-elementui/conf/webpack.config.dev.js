const path = require("path");

const config = require("./config");

// webpack.config.js
module.exports = {
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
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: "url",
        query: {
          // inline files smaller then 10kb as base64 dataURL
          limit: 10000,
          // fallback to file-loader with this naming scheme
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
