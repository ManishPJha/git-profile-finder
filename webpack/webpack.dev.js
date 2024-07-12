const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        compress: true,
        port: 3000,
        open: true,
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:3000',
            },
        ],
        static: {
            directory: path.resolve(__dirname, '..', 'client/public'),
            publicPath: '/',
        },

        // related to stats
        devMiddleware: {
            writeToDisk: true,
            stats: {
                assets: false,
                children: false,
                chunks: false,
                chunkModules: false,
                colors: true,
                entrypoints: false,
                hash: false,
                modules: false,
                timings: false,
                version: false,
                builtAt: false,
                errors: true,
                errorDetails: false,
                errorStack: true,
                logging: false,
            },
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('development'),
        }),
    ],
};
