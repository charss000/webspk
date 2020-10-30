const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');
module.exports =
{
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/bundle.js'
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
                        outputPath: 'img/',
                        useRelativePath: true
                    }
                }
                    
                ]
            }
        ]
    },
    plugins: [
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
            filename: 'css/[name].css'
        })
    ]
}