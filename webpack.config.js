const path = require('path');
const Mini = require('mini-css-extract-plugin')

module.exports = {
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.bundle.js',
   },
   devServer: {
      port: 3010,
      watchContentBase : true,
   } ,
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            }
         } ,
         {
            test: /\.scss$/,
            use: [
               Mini.loader,
               'css-loader',
               'sass-loader',
            ],
         } ,
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ]
   } ,
   plugins: [new Mini()],
};
