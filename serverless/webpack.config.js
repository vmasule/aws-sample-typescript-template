const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
  devtool: "source-map",
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack")
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  target: "node",
};
