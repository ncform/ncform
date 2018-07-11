/**
 * Created by daniel on 16/9/6.
 */

const devConfig = require("./webpack.config.dev");
const prdConfig = require("./webpack.config.prd");

const env = process.env.NODE_ENV;
if (env === "production") {
  module.exports = Object.assign(devConfig, prdConfig);
} else {
  module.exports = devConfig;
}
