const merge = require('webpack-merge');
const devConfig = require("./webpack.config.dev");
const prdConfig = require("./webpack.config.prd");

const env = process.env.NODE_ENV;
if (env === "production") {
  module.exports = merge(devConfig, prdConfig);
} else {
  module.exports = devConfig;
}
