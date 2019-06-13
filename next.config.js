const withTM = require("next-transpile-modules");
const path = require("path");

module.exports = withTM({
  transpileModules: ["react-select"]
});
