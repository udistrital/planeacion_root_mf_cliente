const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "udistrital";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          isDev: webpackConfigEnv && webpackConfigEnv.isDev,
          isProd: webpackConfigEnv && webpackConfigEnv.isProd,
          orgName,
        },
      }),
      new DefinePlugin({
        isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
        isDev: webpackConfigEnv && webpackConfigEnv.isDev,
        isProd: webpackConfigEnv && webpackConfigEnv.isProd,
      }),
    ],
  });
};
