const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolvePath = (segment) => resolve(__dirname, segment);
module.exports = {
    target: 'web',
    mode: process.env.NODE_ENV ?? "development",
    entry: './src/index.tsx',
    output: {
        path: resolvePath('dist'),
        filename: '[name].[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.svg?$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolvePath('public/index.html'),
            title: 'Chat Widget',
        }),
    ],
    devServer: {
        hot: true,
        port: 8080,
    },
};