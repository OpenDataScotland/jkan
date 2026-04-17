/* global __dirname */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  const outputPath = path.resolve(__dirname, isDevelopment ? '_site/assets/scripts/dist' : 'assets/scripts/dist');

  return {
    entry: {
      vendor: path.resolve(__dirname, 'assets/scripts/src/vendor.js'),
      bundle: path.resolve(__dirname, 'assets/scripts/src/index.js'),
    },
    output: {
      path: outputPath,
      filename: '[name].js',
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: { keep: /map-utils\.js/ }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(woff|woff2|ttf|eot|svg|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'vendor.css'
      })
    ],
    optimization: {
      minimize: !isDevelopment,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            format: {
              comments: false
            }
          }
        })
      ]
    },
    externals: {},
    devServer: {
      static: {
        directory: path.resolve(__dirname, '_site')
      },
      port: 8080,
      open: true,
      hot: true
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map'
  };
};
