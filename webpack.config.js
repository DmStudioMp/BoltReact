const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => {
  const isDevelopment = argv && argv.mode !== "production";

  return {
    mode: isDevelopment ? "development" : "production",
    entry: {
      main: "./src/index.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].min.js",
      library: {
        name: "BoltReact",
        type: "umd",
      },
      globalObject: "this",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 8192,
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        inject: "body",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].min.css",
      }),
    ],
    optimization: {
      minimize: !isDevelopment,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      splitChunks: {
        chunks: "all",
        maxSize: 200000,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devtool: isDevelopment ? "source-map" : false,
    devServer: {
      static: path.join(__dirname, "dist"),
      compress: true,
      port: 8080,
      historyApiFallback: true,
    },
  };
};
