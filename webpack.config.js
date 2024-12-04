const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    mode: isDevelopment ? "development" : "production",
    entry: {
      // Dependencias del main para que se generen primero
      main: {
        import: "./src/index.js",
        dependOn: [
          "Carrousel",
          "Controls",
          "Indicators",
          "Slides",
          "DateInput",
          "EmailInput",
          "Forms",
          "FieldInput",
          "ImageInput",
          "NumberInput",
          "OptionsInput",
          "PasswordInput",
          "SubmitButton",
          "TextInput",
          "TitleContainer",
          "Modal",
          "UseModal",
          "GridSystem",
          "Cards",
        ],
      },

      // Componentes individuales
      Carrousel: "./src/Components/Carrousel/Carrousel.jsx",
      Controls: "./src/Components/Carrousel/Controls/Controls.jsx",
      Indicators: "./src/Components/Carrousel/Indicators/Indicators.jsx",
      Slides: "./src/Components/Carrousel/Slides/Slides.jsx",
      DateInput: "./src/Components/Forms/DateInput.jsx",
      EmailInput: "./src/Components/Forms/EmailInput.jsx",
      Forms: "./src/Components/Forms/Forms.jsx",
      FieldInput: "./src/Components/Forms/FieldInput.jsx",
      ImageInput: "./src/Components/Forms/ImageInput.jsx",
      NumberInput: "./src/Components/Forms/NumberInput.jsx",
      OptionsInput: "./src/Components/Forms/OptionsInput.jsx",
      PasswordInput: "./src/Components/Forms/PasswordInput.jsx",
      SubmitButton: "./src/Components/Forms/SubmitButton.jsx",
      TextInput: "./src/Components/Forms/TextInput.jsx",
      TitleContainer: "./src/Components/Forms/TitleContainer.jsx",
      Modal: "./src/Components/Modal/Modal.jsx",
      UseModal: "./src/Components/Modal/UseModal.js",
      GridSystem: "./src/Components/GridSystem/GridSystem.jsx",
      Cards: "./src/Components/Cards/Cards.jsx",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: (pathData) =>
        pathData.chunk.name === "main"
          ? "[name].min.js" // Archivo principal en raíz
          : "Components/[name].min.js", // Componentes en subdirectorio
      library: {
        name: "[name]", // Exportación nombrada
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
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].min.css",
      }),
    ],
    optimization: {
      minimize: !isDevelopment,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      splitChunks: {
        chunks: "all",
      },
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
};
