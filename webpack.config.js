const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');
const glob = require("glob");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const manifest = require('./vendor-manifest.json');

const smp = new SpeedMeasurePlugin();

const isLocal = process.env.NODE_ENV === 'local';

let config = {
  entry: './src/index.tsx',
  output: {
    filename: './assets/bundle.[contenthash].js',
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
      path: `./.env.${isLocal ? 'dev' : process.env.NODE_ENV}`
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new CssWebpackPlugin({
      filename: './assets/bundle.[contenthash].css',
      chunkFilename: './assets/bundle.[contenthash].css',
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
      '__IS_LOCAL__': JSON.stringify(isLocal),
      '__ROUTES__': JSON.stringify(getRoutes()),
    }),
    new webpack.DllReferencePlugin({
      manifest
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

if (isLocal) {
  config = Object.assign(config, {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: true,
      port: 3001,
      host: 'localhost', // 'localhost',//host: '192.168.0.57',
      historyApiFallback: true,
      compress: true,
    },
  });
  // config.plugins.push(new ForkTsCheckerWebpackPlugin({
  //   eslint: {
  //     files: `${path.resolve('./src')}/**/*.{ts,tsx,js,jsx}`,
  //     options: {
  //       overrideConfigFile: path.resolve('./.eslintrc.js'),
  //     },
  //   },
  // }))
  config.module.rules.push({
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loader',
    exclude: /node_modules/,
  });
}

if (!isLocal) {
  config.cache = {
    type: 'filesystem',
    compression: 'gzip',
  };
  config.plugins.unshift(new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'dist')],
  }))
}

// components내 .page.tsx 기반 라우팅 
function getRoutes () {
  const files = glob.sync("./src/components/**/*.page.tsx");
  return files.reduce((routes, pagePath) => {
    pagePath = pagePath.replace('./src/components/', '')
    let entry = pagePath.replace('./components', '');

    const endFixPage = '.page.tsx';
    if (entry.endsWith(endFixPage)) {
      entry = entry.slice(0, -9);
    }
    routes[entry] = pagePath;

    const endFixIndex = '/index';
    if (entry.endsWith(endFixIndex)) {
      entry = entry.slice(0, -6);
    }
    routes[entry] = pagePath;

    return routes;
  }, {});
}

module.exports = config;
// module.exports = smp.wrap(config);
