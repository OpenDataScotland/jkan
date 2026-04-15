/* global __dirname */
const path = require('path');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  
  return {
    entry: path.resolve(__dirname, 'scripts/src/index.js'),
    output: {
      path: path.resolve(__dirname, isDevelopment ? '_site/scripts/dist' : 'scripts/dist'),
      filename: 'bundle.js',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    externals: {
      jquery: 'jQuery'
    },
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
