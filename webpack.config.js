const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './js/main.js',
        vendor: './js/vendor.js',
      },
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app'),
        publicPath: '',
        assetModuleFilename: 'img/[name].[ext]'
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'app')},
        open: true,
        hot: true,
        compress: true,
        port: 3000,
    },
    plugins: [
        
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd
            }, 
            chunks: ['main'],
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/description.html'),
            filename: 'description.html',
            minify: {
                collapseWhitespace: isProd
            },
            chunks: ['vendor'],
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, 'src/assets'), to:path.resolve(__dirname, 'app')}
            ]
        }),
        
    ],
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            {
                test:/\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { 
                            esModule: false
                        },                      
                    }, 
                        'css-loader'
                   ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resoursePath, context) => {
                                return path.relative(path.dirname(resoursePath), context) + '/';
                            },
                        }
                    },
                     'css-loader', 
                     'sass-loader'],
            },
            {
                test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
                type: 'asset/resource',
               
                 
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
           
        ]
    }
};