const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var plugins = [];
/*plugins.push(
    new webpack.IgnorePlugin(/electron/)
);*/

module.exports = {
    mode: "development",
    entry: "./index.js",
    plugins: plugins,
    output: {
        publicPath: "dist",
        filename: 'electron-titlebar.js',
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                output: {
                  comments: false,
                },
              },
        })],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ],
    },
    target: 'node'
};
