
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/client/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'client',
            type: 'umd',
        },
        clean: true
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        injectClient: false,    // this setting solved the issue described here https://github.com/webpack/webpack-dev-server/issues/2484
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Natural Language Processing',
            template: './src/client/views/index.html',
            filename: './index.html',
            favicon: './src/client/img/favicon.ico'
      })
    ]
}
