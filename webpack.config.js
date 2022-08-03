const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode:'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
				test: /\.(sa|sc|c)ss$/,
				use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
					'sass-loader',          
				],
			},
      {
        test:/\.(|svg|jpg|jpeg|png|gif)$/i,
        type:'asset/resource',
        generator:{
          filename:'assets/img/[name]_[hash][ext]',
        },
      },      
      {
        test:/fonts.*\.(woff|woff2|ttf)$/i,
        type:'asset/resource',
        generator:{
          filename:'assets/fonts/[name]_[hash][ext]',
        },
      },

    ],
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename:'[name].min.css',
    }),
    new CleanWebpackPlugin(),
  ],
};