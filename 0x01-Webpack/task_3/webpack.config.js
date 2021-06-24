const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		header: './modules/header/header.js',
		body: './modules/body/body.js',
		footer: './modules/footer/footer.js',
	},
	mode: 'development',
	devServer: {
		contentBase: './public',
		compress: true,
		port: 8564,
	},
	devtool: 'inline-source-map',
	plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	performance: {
		maxAssetSize: 100000,
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
						},
					},
				],
			},
		],
	},
};
