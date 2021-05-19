const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'myBundle.js'
  },
  // devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/i,
        use: ["style-loader","css-loader","sass-loader"]
      },
      {
        test: /\.(jpg|jpeg|svg|png|gif)$/i,
        type: "asset/resource"
      }
    ]
  },
  devServer: {
    before: function(src,server){
      server._watch('./src/*.html')
    },
    contentBase: path.join(__dirname,'src'),
    hot: true,
    port: 3000
  }
  
}