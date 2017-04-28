const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const {DefinePlugin, ProvidePlugin} = webpack

const isProd = process.env.NODE_ENV === 'production'

const definePlugins = new DefinePlugin({
  TEST: process.env.NODE_ENV === 'test'
})
const providePlugins = new ProvidePlugin({
  moment: 'moment',
  'window.moment': 'moment',
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
  'windows.jQuery': 'jquery'
})

const config = {
  entry: './index.js',
//   devServer: {
//     contentBase: './',
//     historyApiFallback: true,
//     compress: isProd,
//     inline: !isProd,
//     host: 'localhost',
//     port: 9999,
//     stats: {
//       assets: false,
//       children: false,
//       chunks: false,
//       hash: false,
//       modules: false,
//       publicPath: false,
//       timings: true,
//       version: false,
//       warnings: true,
//       colors: {
//         green: '\u001b[32m',
//       }
//     },
//   },
  output: {
    // path: './dist/',
    // publicPath: 'http://localhost:9999/',
    // filename: '[name].[hash].js',
    // chunkFilename: '[id].[hash].chunk.js'
    filename:"build.js"
  },
  plugins: [
    definePlugins,
    providePlugins,
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ExtractTextPlugin('bundle.css'),
    // new ExtractTextPlugin('[name].[hash].css'),
    // new webpack.NoErrorsPlugin(),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: {
    //     keep_fnames: true
    //   }
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ng-annotate!babel'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
      { test: /\.css$/,
        exclude: /(node_modules)/,
        loader: 'to-string!css?-minimize!postcss'
      },
      {
        test: /\.(png|jpg|jpeg|bmp|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.less/,
        exclude: /(node_modules)/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'less-loader'])
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'sass-loader'])
      }
    ]
  },
  devtool: 'eval'
}


if(process.env.NODE_ENV === 'development') {
  config.output.publicPath = 'http://bpmn.cronix.ms/'
}

if(process.env.NODE_ENV === 'production') {
  config.output.publicPath = 'http://bpmn.cronix.ms/'
}

module.exports = config