const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');

const isLocal = process.env.NODE_ENV === 'local';

let config = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      process: "process/browser",
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
        },
      },
      {
        test: /\.css$/,
        use: [CssWebpackPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.styl$/,
        use: [
          CssWebpackPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: {
                localIdentName: '[hash:base64:16]',
              },
            },
          },
          'postcss-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: `./env.${isLocal ? 'dev' : process.env.NODE_ENV}`
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
    }),
    new CssWebpackPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'React-admin-template',
      filename: 'index.html',
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/public", to: "./" },
      ],
    }),
    new webpack.DefinePlugin({
      'window.IS_LOCAL': JSON.stringify(isLocal),
      'window.ROUTES': JSON.stringify([]),
    })
  ],
  optimization: {
    splitChunks: {
      name: 'common',
      chunks: 'all',
    },
  },
};

if (process.env.REPORT) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

if (process.env.NODE_ENV === 'local') {
  config = Object.assign(config, {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: true,
      host: 'localhost', // 'localhost',//host: '192.168.0.57',
      historyApiFallback: true,
      compress: true,
    },
  });
  config.plugins.push(new ForkTsCheckerWebpackPlugin({
    eslint: {
      files: `${path.resolve('./src')}/**/*.{ts,tsx,js,jsx}`,
      options: {
        overrideConfigFile: path.resolve('./.eslintrc.js'),
      },
    },
  }))
  config.module.rules.push({
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader',
    exclude: /node_modules/,
  });
}

module.exports = config;