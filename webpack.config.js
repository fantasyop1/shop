var CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|webp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,//打包图片大小的限制
              fallback: 'file-loader'  //文件超出limi规定的大小使用fileloader
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/img', to: 'img' },
      ],
    }),
  ]
}