const  webpack  = require('webpack');
const  ExtractTextPlugin  = require("extract-text-webpack-plugin");
const  autoprefixer  = require('autoprefixer');
const  precss  = require('precss');
const  path  = require('path');

let exclude = /(node_modules|bower_components)/;

let loaders = [{
    test: /\.json/,
    loader: "json-loader",
    exclude: exclude
}, {
    test: /\.jsx?$/,
    exclude: exclude,
    loader: 'babel',
}, {
    test: /\.xml$/,
    loader: 'xml-loader',
}, {
    test: /\.svg$/,
    loader: 'babel',
    query: {
        presets: ['react', 'svg-react']
    }
}, {
    test: /\.scss$/,
    loaders: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader']),

}, {
    test: /\.css/,
    loaders: ExtractTextPlugin.extract('style-loader', ['css-loader']),
}, {
    test: /\.(eot|ttf|svg|gif|png|jpg)$/,
    loader: "file-loader"
}];

module.exports ={
    output: {
      path: path.resolve(__dirname, './public'),
      publicPath: 'http://localhost:3000/',
      filename: '[name].bundle.js',
    },
    module: {
        loaders: loaders
    },
    postcss: function() {
        return [autoprefixer({
            browsers: ['last 2 versions']
        })];
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin(  path.resolve(__dirname, "../public/css/[name].css") )
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
};
