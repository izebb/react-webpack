const  express = require('express');
const  webpack = require('webpack');
const  WebpackDevServer = require('webpack-dev-server');
const  config = require('./webpackConfig/development');
const  path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const compiler = webpack(config);


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    silent: true,
    stats: 'errors-only',
}).listen(3000, 'localhost', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
