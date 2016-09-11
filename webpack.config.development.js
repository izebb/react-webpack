const path = require('path');
const config = require('./webpack.config');
const webpack = require('webpack');
const merge = require('webpack-merge');

let port = process.env.PORT || 3000;

module.exports = merge(config, {
    devtool: 'eval',
    entry: {
        app: [
            `webpack-dev-server/client?http://localhost:${port}`,
            'webpack/hot/dev-server',
            path.resolve(__dirname, './scripts/index.js')
        ]
    },
    devServer: {
        port: port,
        hot: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './public'),
        stats: {
            color: true
        },
        inline: true

    },
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                BABEL_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});
