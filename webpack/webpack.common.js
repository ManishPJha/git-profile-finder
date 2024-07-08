const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', 'client/src/index.tsx'),
    output: {
        path: path.resolve(__dirname, '..', 'client/dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, '..', 'client/src/components'),
            '@pages': path.resolve(__dirname, '..', 'client/src/pages'),
            '@utils': path.resolve(__dirname, '..', 'client/src/utils'),
            '@styles': path.resolve(__dirname, '..', 'client/src/styles'),
            '@types': path.resolve(__dirname, '..', 'client/src/types'),
            '@partials': path.resolve(__dirname, '..', 'client/src/partials'),
            '@assets': path.resolve(__dirname, '..', 'client/public/assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext][query]',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'client/public/index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: path.resolve(__dirname, '..', 'client/public'), to: 'public' }],
        }),
    ],
    devServer: {
        static: './dist',
    },
};
