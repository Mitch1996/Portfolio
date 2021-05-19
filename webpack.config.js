const path = require('path');
const Mini = require('mini-css-extract-plugin')
const loader = require('url-loader')

module.exports = {
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
   },
   devServer: {
      port: 3010,
      watchContentBase: true,
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
            }
         },
         {
            test: /\.scss$/,
            use: [
               Mini.loader,
               'css-loader',
               'sass-loader',
            ],
         },
         {
            test: /\.(jpg|png)$/,
            use: {
               loader: 'url-loader',
            },
         }
      ]
   },
   plugins: [new Mini()],
};
