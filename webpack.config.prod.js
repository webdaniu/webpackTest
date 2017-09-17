import webpack from 'webpack';
import path from 'path';

const GLOBAlS = {

};

let webpackConfig = {
  resolve: {
    extensions: ['*','.web.js','.js','.json']
  },
  entry: path.resolve(__dirname, 'src'),
  output:{
    path: path.resolve(__dirname,'dist'),
    publicPath:'/',
    filename: 'static/js/build.js',
    chunkFilename: 'static/js/chunk/[name].js'
  }
};

module.exports = webpackConfig;
