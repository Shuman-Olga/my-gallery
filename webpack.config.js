const { resolve } = require('path'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './js/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'  
    },
    module: {
        rules: [
            { 
                test: /\.(png|jpe?g|gif)$/i, 
                use: [
                    'file-loader?name=[path][name].[ext]',
                    {
                    loader: "webpack-image-resize-loader",
                    options: {
                        width: 1000,
                        }
                    },
                ],
            },
            {
                test: /\.mp3$/i,
                use: ['file-loader?name=[path][name].[ext]']
            },
            {
                test: /\.(mov|mp4)$/i,
                use: [
                    'file-loader?name=[path][name].[ext]'
                ]
            },
            { 
                test: /\.scss$/i, 
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], 
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        // new webpack.HotModuleReplacementPlugin()
        // new BundleAnalyzerPlugin(),
    ],
    devServer: {
        open: true,
        hot: true,
        port: 9000
      }
    
};