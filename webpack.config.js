var path = require('path');
var webpack = require('webpack');

var config = {
    port: 4000
};

module.exports = {

    entry: [
        './app/app',
        'webpack-dev-server/client?http://localhost:' + config.port
    ],

    output: {
        publicPath: '/',
        filename: 'app.js'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'app'), loader: 'babel-loader'}
        ]
    },

    debug: true,

    devServer: {
        contentBase: './app',
        port: config.port
    }
};
