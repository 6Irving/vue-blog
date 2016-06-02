"use strict"

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var isProduction = function() {
//     return process.env.NODE_ENV === 'production';
// };
// webpack插件
var plugins = [
	//提公用js到common.js文件中
  new webpack.optimize.CommonsChunkPlugin('common.js'),
  //将样式统一发布到style.css中
  new ExtractTextPlugin("styles.css"),
];

//生产环境js压缩和图片cdn
// if (isProduction()) {
//     //plugins.push(new webpack.optimize.UglifyJsPlugin());
//     cdnPrefix = "";
//     publishPath = cdnPrefix;
// }

module.exports = {
	// 入口
	debug: true,
  entry: './src/main',
  output: {
      path: path.join(__dirname,'/dist/'),
      filename: 'build.js',
      publicPath: '/dist/',
      chunkFilename:"[id].build.js?[chunkhash]"
  },
	module: {
		// 加载器
		loaders: [
			{test: /\.vue$/, loader: 'vue'},
			{test: /\.js$/, loader: 'babel', exclude: /node_modules|vue\/dist/},
			{test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", 'css-loader')},
			{test: /\.(html|tpl)$/, loader: 'html-loader'}
		]
	},
	vue: {
        loaders: {
            css: ExtractTextPlugin.extract('style!css!autoprefixer'),
        }
  },
  babel: {
      presets: ['es2015','stage-0'],
      plugins: ['transform-runtime']
  },
  resolve: {
      // require时省略的扩展名，如：require('module') 不需要module.js
      extensions: ['', '.js', '.vue'],
      // 别名
      // alias: {
      //     filter: path.join(__dirname, './src/filters'),
      //     components: path.join(__dirname, './src/components')
      // }
  },
  plugins: plugins,
  // 开启source-map，webpack有多种source-map，在官网文档可以查到
  devtool: '#source-map'
}