console.log('build.js is ok');
import webpack from 'webpack';
import config from '../webpack.config.prod.js';
console.log('2')
webpack(config).run((error,stats)=>{
  console.log('webpack is ok!');
  return 0
});
