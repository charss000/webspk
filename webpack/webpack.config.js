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
                    'css-loader?sourceMap','sass-loader?sourceMap',
                ]
            },
            {
                test:/\.(jpg|png|gif|jpeg|svg|ico)$/,
                use:[{
                  
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath:'assets/img/',
                        publicPath:'../img/',
                        
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
                      outputPath: 'assets/fonts/',
                      publicPath:'../fonts/',
                    }
                  }
                ]
              }
        ]
    },
    plugins: [
      /* new  CopyPlugin({
            patterns: Asset.map(asset => {
                //to: 'dest/[name].[hash].[ext]',
                return{
                    from: path.resolve(__dirname, `../${asset}`),
                    to: path.resolve(__dirname,'../dist/assets/[ext]/[name].[ext]')
                }
            })
        }),*/
        new  CopyPlugin({
            patterns: [
              
             
                { from: path.resolve(__dirname,'../src/assets/fonts'), to: '../dist/assets/fonts/' },
               { from: path.resolve(__dirname,'../src/assets/css'), to: '../dist/assets/css/' },
                { from: path.resolve(__dirname,'../src/assets/js'), to: '../dist/assets/js/' }
              ]
        }),
        
        new htmlWebpackPlugin({
            filename: 'index.html',
            template:'./src/index.handlebars',
            title: 'Pagina de Inicio SPK',
            minify: {
                html5: true,
                collapseWhitespace: false,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: true
            }

        }),
        
        new htmlWebpackPlugin({
            filename: 'nosotros.html',
            title: 'Pagina Nosotros SPK',
            template:'./src/nosotros.handlebars',
            publicPath:'',
            minify: {
                html5: true,
                collapseWhitespace: false,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: true
            }

        }),
        new htmlWebpackPlugin({
            filename: 'clientesPse.html',
            title: 'Pagina Conculta CPE',
            template:'./src/consultas.handlebars',
            publicPath:'',
            minify: {
                html5: true,
                collapseWhitespace: false,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: true
            }

        }),
        new htmlWebpackPlugin({
            filename: 'inicio.html',
            title: 'Pagina Conculta CPE',
            template:'./src/index.html',
            publicPath:'',
            minify: {
                html5: true,
                collapseWhitespace: false,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: true
            }

        }),

        new miniCssExtractPlugin({
            filename: './assets/css/[name].css',
            chunkFilename: "[id].css"
        }),

    ]
}