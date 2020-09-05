const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "./",
  assetsDir: "static",
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  productionSourceMap: true,
  devServer: {
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: false
    }
  }
};
