//reqire for specifying path
const path = require('path');
//extracts CSS into separate files. It creates a CSS file per JS file which contains CSS (src/index.js)
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  //specify the entry point...
  entry: './src/index.js',
  //..and output file name and directory
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   //module configuration for scss
   module: {
      rules: [{
         test:/\.(s*)css$/,
         //used 
         use: [
            // 3) used miniCss plugin for create CSS file from index.js
            miniCss.loader,
            // 2) import file to index.js
            'css-loader',
            // 1) Compiles Sass to CSS
            'sass-loader'
         ]
      }]
   },
   // set port and directory for development server
   devServer: {
    port: 2999,
    contentBase: path.join(__dirname,'/dist')
  },
  //plugin set
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};