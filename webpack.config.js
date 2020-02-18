const webpack = require("webpack");
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PUBLIC_PATH = resolve(__dirname, 'public');
const SRC_PATH = resolve(__dirname, 'src');

module.exports = {
    entry: {
        index: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            `${SRC_PATH}/index.js`,
        ]
    },
    output: {
        filename: 'bundle.js',
        path: PUBLIC_PATH
    },
    module: {
    rules: [
        {
            test: /\.(js)$/,
            exclude: /node_modules/
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: `${PUBLIC_PATH}/app.html` 
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};