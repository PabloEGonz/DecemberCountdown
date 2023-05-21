const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/dec.js',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                },
            },
            {
                test: /\.(wav|mp3)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'audios/',
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
};