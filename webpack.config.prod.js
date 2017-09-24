import webpack from 'webpack';
import path from 'path';
import ExtractTextplugin from 'extract-text-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const GLOBAlS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};

let webpackConfig = {
  target:'web',
  resolve: {
    extensions: ['*','.web.js','.js','.json']
  },
  entry: path.resolve(__dirname, 'src'),
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'static/js/build.js',
    publicPath:'./',
    chunkFilename: 'static/js/chunk/[name].js'
  },
  module: {
    rules:[
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js?/,
        exclude: /node_modeles/,
        loader: 'babel-loader'
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        loaders: ['style-loader','css-loader?sorceMap','postcss-loader','sass-loader?sourMap'],
        exclude:[path.resolve(__dirname, 'src/app')]
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        loader: 'style-loader!css-loader?modules!postcss-loader!sass-loader',
        exclude:[path.resolve(__dirname, 'src/styles'),path.resolve(__dirname, 'node_modules')]
      },
      {
        test: /\.(png|jpe?g|gif|ico|jpg)(\?.*)?$/,
        loader: 'url-loader?limit=10000&name=static/img/[name].[ext]'
      },
      {
        test:/\.eot$/,
        loader: 'url-loader?[name].[ext]'
      },
      {
        test: /\.woff$/,
        loader:'url-loader?limit=10000'
      },
      {
        test: /\.[ot]tf$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.svg$/,
        loader:'url-loader?limit=10000'
      }
    ]
  },
  plugins:[
    new WebpackMd5Hash(),
    new webpack.DefinePlugin(GLOBAlS),
    new ExtractTextplugin({filename: 'main.css',allChunks: true}),
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundanAttributes: true,
        minifyJS: true
      },
      template: 'index.html',
      injuct: false,
      chunksSortMode: 'dependency',
      loadCSS: true,
      loadJS: true,
      title: 'title'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
      minSize: 1
    }),
    new UglifyJSPlugin()
  ]
};

module.exports = webpackConfig;
