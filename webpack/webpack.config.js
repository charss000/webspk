const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin =require ('copy-webpack-plugin');
const  Asset=require('../assets');
module.exports =
{
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: 'assets/js/bundle.js'
    },
    module: {
        rules: [
            
            {
                test: /\.handlebars$/, loader: "handlebars-loader" 
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader','sass-loader',
                ]
            },
            {
                test:/\.(jpg|png|gif|jpeg|svg)$/,
                use:[{
                    loader:'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/assets/img/',
                        useRelativePath: true
                    }
                }
                    
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
       new  CopyPlugin({
            patterns: Asset.map(asset => {
                //to: 'dest/[name].[hash].[ext]',
                return{
                    from: path.resolve(__dirname, `../${asset}`),
                    to: path.resolve(__dirname,'../dist/assets/[ext]/[name].[ext]')
                }
            })
        }),
        new  CopyPlugin({
            patterns: [
              
                { from: path.resolve(__dirname,'../src/assets/img'), to: '../dist/assets/img/' },
                { from: path.resolve(__dirname,'../src/assets/fonts'), to: '../dist/assets/fonts/' }
              ]
        }),
        
        new htmlWebpackPlugin({
            template: './src/index.handlebars',
            minify: {
                html5: true,
                collapseWhitespace: true,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: true
            }

        }),
        new miniCssExtractPlugin({
            filename: './assets/css/[name].css'
        })
    ]
}