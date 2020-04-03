const path = require("path");
const resolve = file => path.resolve(__dirname, file);
const { targetMap, nodeMap, libraryTargetMap,
  splitChunksMap, externalsMap, vuePluginMap } = require('./build.map')
const TARGET_NODE = process.env.BUILD_TARGET === "node";
const target = TARGET_NODE ? "server" : "client";
module.exports = {
  lintOnSave: false,
  assetsDir: "static",
  configureWebpack: config => ({
    entry: `./src/entry-${target}.js`,
    target: targetMap[target],
    node: nodeMap[target],
    externals: externalsMap[target],
    optimization: {
      splitChunks: splitChunksMap[target]
    },
    output: {
      libraryTarget: libraryTargetMap[target]
    },
    plugins: vuePluginMap[target]
  }),
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
  }
};