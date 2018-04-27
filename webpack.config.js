const HtmlWebpackPlugin = require('html-webpack-plugin');

const cfg = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: ['./src/index.js'],
    vendor: [
      'babel-polyfill',
      'moment',
    ],
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: (chunk1, chunk2) => {
        // make sure babel-polyfill in vendors is loaded before app
        const order = ['manifest', 'vendor', 'app'];
        const order1 = order.indexOf(chunk1.names[0]);
        const order2 = order.indexOf(chunk2.names[0]);

        return order1 - order2;
      },
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
  },
};

module.exports = cfg;
