const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    port: 8080,
    hot: true,
    static: {
      // match the output path
      directory: path.resolve(__dirname, 'dist'),
      //match the output 'publicPath'
      publicPath: '/'
    },
    headers: { 'Access-Control-Allow-Origin': '*'},

    // proxy is required in order to make api calls to express server while using hot-reload webpack server
    // routes api fetch requests from localhost:8080/api/* (webpack dev server) to localhost:3000/api/* (where our Express server is running)
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
      }, 
    },
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      }, 
    ],
  },
};
