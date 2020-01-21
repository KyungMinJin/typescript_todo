const webpack = require('webpack');
const path = require('path');
const NotifierPlugin = require('webpack-notifier');
const TerserPlugin = require('terser-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: path.resolve(__dirname, './src/index.tsx')
  },

  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
    publicPath: '/'
  },

  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules')
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      react: require.resolve('react')
    }
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({ template: './build/index.html' }),
    new webpack.HotModuleReplacementPlugin()
  ],

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },

  devServer: {
    contentBase: './build',
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
};

module.exports = (env, argument) => {
  if (argument.mode === 'development') {
    config.devtool = 'cheap-module-eval-source-map';

    config.plugins.push(
      new NotifierPlugin({
        title: 'React 스터디',
        alwaysNotify: true
      })
    );
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      _mode: JSON.stringify(argument.mode),
      __ENVIRONMENT__: JSON.stringify(process.env.NODE_ENV)
    })
  );

  return config;
};
