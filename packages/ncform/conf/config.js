const path = require("path");

const root = process.cwd();

module.exports = {
  root,
  src: path.join(root, "src"),
  dist: path.join(root, "dist"),
  babelModules: ["lodash-es"].map(item => path.join(root, "node_modules", item))
};
