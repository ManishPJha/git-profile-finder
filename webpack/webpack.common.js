const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', 'client/src/index.tsx'),
    output: {
        path: path.resolve(__dirname, '..', 'client/dist'),
        filename: 'bundle.js',
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
        new htmlWebPackPlugin({
            template: path.resolve(__dirname, '..', 'client/src/index.html'),
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: './dist',
    },
};
