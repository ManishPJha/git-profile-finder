const webpack = require('webpack');
const terserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('production'),
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new terserWebpackPlugin({
                minify: terserWebpackPlugin.uglifyJsMinify,
                extractComments: true,
                parallel: true,
                test: /\.(ts|js)x?$/,

                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                    },
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },
};
