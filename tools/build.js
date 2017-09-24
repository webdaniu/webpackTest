import webpack from 'webpack';
import config from '../webpack.config.prod.js';
import {chalkSuccess, chalkError, chalkWarning, chalkProcessing} from './chalkConfig';

//设置环境变量
process.env.NODE_ENV = 'production';

console.log(chalkProcessing('Generating minified bundle. This will take a moment...'));

webpack(config).run((error,stats)=>{
  if(error){
    console.log(chalkError(error));
    return 1;
  }
  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(chalkError(error)))
  }

  if(jsonStats.hasWarnings){
    jsonStats.warnings.map(warning=>console.log(chalkWarning(warning)))
  }

  console.log(`Webpack stats: ${stats}`)

  console.log(chalkSuccess('生产环境打包完成'))

  return 0
});
