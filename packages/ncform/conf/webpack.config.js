const devConfig = require("./webpack.config.dev");
const prdConfig = require("./webpack.config.prd");

const env = process.env.NODE_ENV;
if (env === "production") {
  module.exports = prdConfig;
} else {
  module.exports = devConfig;
}
