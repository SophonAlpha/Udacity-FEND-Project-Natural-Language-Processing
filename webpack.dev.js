

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
      bundle: './src/client/client.js',
      component: './src/client/js/component.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: ['Client', '[name]'],
        // libraryTarget: 'umd',

        // library: {
        //     name: 'Client',
        //     type: 'var'
        // },
        clean: true
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
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
