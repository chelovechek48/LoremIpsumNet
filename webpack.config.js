const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';

const babelOptions = (preset) => {
  const opts = {
    presets: isProd ? ['@babel/preset-env'] : [],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? '[name].[contenthash].js' : '[name].js',
    assetModuleFilename: isProd ? '[path][name].[contenthash][ext]' : '[path][name][ext]',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.sass', '.scss', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
    },
  },
  optimization: {
    chunkIds: 'named',
  },
  devServer: {
    hot: false,
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html',
      filename: isProd ? 'index.[contenthash].html' : 'index.html',
    }),
    new CssPlugin({
      filename: isProd ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [
          CssPlugin.loader,
          'css-loader',
          'group-css-media-queries-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          CssPlugin.loader,
          'css-loader',
          'group-css-media-queries-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions(),
        },
      },
    ],
  },
};
