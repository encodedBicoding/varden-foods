const HWP = require('html-webpack-plugin');
const path = require('path')


module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: [
            "@babel/preset-env", 
            "@babel/preset-react"
          ]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        use: "image-webpack-loader"
      }
    ]
  },
  plugins: [
    new HWP(
      {
        template: path.join(__dirname, '/src/index.html')
      }
    )
  ]

}