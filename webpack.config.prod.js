import webpack from 'webpack';
import path from 'path';

const GLOBAlS = {

};

let webpackConfig = {
  resolve: {
    extensions: ['*','.web.js','.js','.json']
  },
  entry: path.resolve(__dirname, 'src')
};

module.exports = webpackConfig;
