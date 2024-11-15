const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const path = require("path");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode !== "production";

  return {
    mode: isDevelopment ? "development" : "production",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isDevelopment ? "[name].js" : "[name].[contenthash].js",
      publicPath: "/",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 8192, // 8kb
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? "[name].css" : "[name].[contenthash].css",
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: isDevelopment ? "server" : "disabled",
      }),
    ],
    optimization: {
      minimize: !isDevelopment,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
  };
};
