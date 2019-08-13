const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    //...
    entry: './input.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'test.good.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        hot: false
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // all options are optional
          filename: '[name].css',
          chunkFilename: '[id].css',
          ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify('https://www.sina.com')
          }),
          new HtmlWebpackPlugin(
            {
                title: 'Good Morning Beijing',
                filename: 'index.html',
                template: 'template.htm;'
            }
          )
      ],
    module: {
        rules: [
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                }
              }
            ]
          },
          {
            test: /\.(m?js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-transform-react-jsx']
              }
            }
          },
          {
            test: /\.scss$/,
            use: [
              // fallback to style-loader in development
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            ]
          }
        ]
    },
    mode: 'development'
};

  