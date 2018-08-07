const path = require("path");
const webpack = require("webpack");

const config = require("./config");

module.exports = {

  mode: 'production',

  output: {
    filename: "[name].min.js",
  },

  optimization: {
    minimize: true
  }
};
