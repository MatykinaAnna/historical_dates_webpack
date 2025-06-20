const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'none',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                            {  
                                loader: 'ts-loader',
                                options: {
                                    compilerOptions: {
                                        noEmit: false,
                                    },
                                },
                            }  
                ] ,
                exclude: '/node_modules/'
            },
            {
                test: /\.scss?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
                exclude: '/node_modules/'
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader", 
            }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ]
}