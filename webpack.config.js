const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: ['@babel/polyfill', './src/index.js'],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'src/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  devServer: {
    static: './dist',
    port: port,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      },
      {
          test: /\.mp4$/,
          use: [
              {
                  loader: "file-loader",
                  options: {
                      name: "[name].[ext]",
                      outputPath: "video"
                  }
              }
          ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: "[name].[contenthash].[ext]",
              output: '/fonts'
            }
          }
        ]
      },
    ]
  }
};
