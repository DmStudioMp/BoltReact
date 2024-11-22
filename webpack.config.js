const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("path");
const glob = require("glob");

const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

module.exports = (env, argv) => {
  const isDevelopment = argv && argv.mode !== "production";

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
          test: /\.(png|jpe?g|gif|svg|ico)$/,
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
        analyzerMode: isDevelopment ? "server" : "static",
        openAnalyzer: !isDevelopment, // No abrir en modo desarrollo
        reportFilename: path.resolve(__dirname, "bundle-report.html"),
      }),

      new PurgeCSSPlugin({
        paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, {
          nodir: true,
        }),
        safelist: {
          standard: [/^modal/, /^carousel/, /^show/], // Clases importantes que no se eliminan
        },
      }),
    ],
    optimization: {
      minimize: !isDevelopment,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Elimina console.logs
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: "all",
        minSize: 20000, // Ajusta para dividir en tamaños más pequeños
        maxSize: 200000, // Evita chunks demasiado grandes
        cacheGroups: {
          bootstrap: {
            test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
            name: "bootstrap",
            chunks: "all",
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          default: {
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
      },
    },
    devtool: isDevelopment ? "source-map" : false,
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
      open: true,
    },
  };
};
