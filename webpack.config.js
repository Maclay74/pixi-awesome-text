var pjson = require('./package.json');

var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
//var Visualizer = require('webpack-visualizer-plugin');

const config = {
  watch: true,
  entry: './src/index',
  output: {
    path: './dist',
    filename: 'pixi-awesome-text.min.js',
    library: 'AwesomeText',
    libraryTarget: 'umd'
  },
  devtool: "#inline-source-map",
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        //plugins: ['transform-runtime'],
        presets: [
          [ "@babel/preset-env" , { "modules": 'commonjs'  }]

        ],
        plugins: [
          'transform-object-rest-spread',
          "@babel/plugin-proposal-class-properties"
        ]
      }
    },
      {test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/},
      {test: /\.(glsl|frag|vert)$/, loader: 'glslify', exclude: /node_modules/}
    ]
  },
  plugins: [
    //new Visualizer(),
    /*new uglifyJsPlugin({
       minimize: true,
       sourceMap: false,
       output: {
           comments: false
       },
       compressor: {
           warnings: false
       }
   })*/
  ]
}

const moduleConfig = Object.assign({}, config, {
  output: {
    path: './dist',
    filename: 'pixi-awesome-text.module.js',
    library: 'AwesomeText',
    libraryTarget: 'umd'
  },

});
const includeConfig = Object.assign({}, config,{
  output: {
    path: './dist',
    filename: 'pixi-awesome-text.min.js',
  },

  plugins: [
    //new Visualizer(),
    new uglifyJsPlugin({
       minimize: true,
       sourceMap: false,
       output: {
           comments: false
       },
       compressor: {
           warnings: false
       }
   })
  ]
});

module.exports = [
  moduleConfig,includeConfig
]
