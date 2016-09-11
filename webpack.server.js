import express from 'express'
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevConfig from "./webpack.config.development";
let compiler = webpack(webpackDevConfig);
let port = process.env.PORT || 3000;
new WebpackDevServer(compiler, {
  


}).listen(port, err => {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at port 3000...');
})
