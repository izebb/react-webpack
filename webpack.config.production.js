const  path require('path');
const  config require('./webpack.config');
const  webpack require('webpack');
const  merge require('webpack-merge');
const  path require('path');
const  HtmlWebpackPlugin  require('html-webpack-plugin');

module.exports = merge(config, {
    entry: [
      entry: {
          // files goes here
          app: [  path.resolve(__dirname, '../scripts/index.js')]
      },
    ],
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            },
            comments: false

        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ]
});
