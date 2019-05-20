const path = require("path");

module.exports = {
  entry:  { "src/handler": "./src/handler.ts" },
  mode: "production",
  module: {
    rules: [
      {
        loader: "ts-loader",
        test: /\.tsx?$/,
      },
    ],
  },
  node: { fs: "empty" },
  output: {
    filename: "handler.js",
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  target: "node",
};
