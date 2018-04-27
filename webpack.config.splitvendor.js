const webpackMerge = require('webpack-merge');
const baseCfg = require('./webpack.config.js');

const cfg = webpackMerge(
  baseCfg,
  {
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: 'initial',
            name: 'vendor',
            test: 'vendor',
            enforce: true,
          },
        },
      },
    }
  },
);

module.exports = cfg;
