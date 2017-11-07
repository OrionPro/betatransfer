const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const fonts = require('./webpack/fonts');
const js = require('./webpack/js');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const sprite = require('./webpack/sprite');

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build')
};

const common = merge([
	{
		entry: {
			'index': PATHS.source + '/pages/index/index.js',
			'login': PATHS.source + '/pages/login/login.js',
			'registration': PATHS.source + '/pages/registration/registration.js',
			'contacts': PATHS.source + '/pages/contacts/contacts.js',
			'news': PATHS.source + '/pages/news/news.js',
			'news-inner': PATHS.source + '/pages/news-inner/news-inner.js',
			'reviews': PATHS.source + '/pages/reviews/reviews.js',
			'exchange-BTC-QIWIRUB': PATHS.source + '/pages/exchange-BTC-QIWIRUB/exchange-BTC-QIWIRUB.js',
			'partners': PATHS.source + '/pages/partners/partners.js',
			'static-page': PATHS.source + '/pages/static-page/static-page.js',
			'after-registration-bid': PATHS.source + '/pages/after-registration-bid/after-registration-bid.js',
			'after-payment-bid': PATHS.source + '/pages/after-payment-bid/after-payment-bid.js',
			'after-the-confirmation-bid': PATHS.source + '/pages/after-the-confirmation-bid/after-the-confirmation-bid.js',
			'rates': PATHS.source + '/pages/rates/rates.js',
			'personal-account': PATHS.source + '/pages/personal-account/personal-account.js',
			'personal-account-your-operations': PATHS.source + '/pages/personal-account-your-operations/personal-account-your-operations.js',
		},
		output: {
			path: PATHS.build,
			filename: 'js/[name].js'
		},
		externals: {
			'jquery-mousewheel': 'jquery-mousewheel',
			'../TweenLite': 'TweenLite',
		},
		resolve: {
			modules: ["node_modules", "source"],
			alias: {
				'sprite': path.resolve(__dirname, 'source/spritesmith/'),
				'img': path.resolve(__dirname, 'source/img/'),
				'fonts': path.resolve(__dirname, 'source/fonts/'),
				'sass': path.resolve(__dirname, 'source/sass/')
			}
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				chunks: ['index', 'common'],
				template: PATHS.source + '/pages/index/index.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'contacts.html',
				chunks: ['contacts', 'common'],
				template: PATHS.source + '/pages/contacts/contacts.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'login.html',
				chunks: ['login', 'common'],
				template: PATHS.source + '/pages/login/login.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'registration.html',
				chunks: ['registration', 'common'],
				template: PATHS.source + '/pages/registration/registration.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'news.html',
				chunks: ['news', 'common'],
				template: PATHS.source + '/pages/news/news.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'news-inner.html',
				chunks: ['news-inner', 'common'],
				template: PATHS.source + '/pages/news-inner/news-inner.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'reviews.html',
				chunks: ['reviews', 'common'],
				template: PATHS.source + '/pages/reviews/reviews.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'exchange-BTC-QIWIRUB.html',
				chunks: ['exchange-BTC-QIWIRUB', 'common'],
				template: PATHS.source + '/pages/exchange-BTC-QIWIRUB/exchange-BTC-QIWIRUB.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'partners.html',
				chunks: ['partners', 'common'],
				template: PATHS.source + '/pages/partners/partners.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'static-page.html',
				chunks: ['static-page', 'common'],
				template: PATHS.source + '/pages/static-page/static-page.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'after-registration-bid.html',
				chunks: ['after-registration-bid', 'common'],
				template: PATHS.source + '/pages/after-registration-bid/after-registration-bid.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'after-payment-bid.html',
				chunks: ['after-payment-bid', 'common'],
				template: PATHS.source + '/pages/after-payment-bid/after-payment-bid.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'after-the-confirmation-bid.html',
				chunks: ['after-the-confirmation-bid', 'common'],
				template: PATHS.source + '/pages/after-the-confirmation-bid/after-the-confirmation-bid.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'rates.html',
				chunks: ['rates', 'common'],
				template: PATHS.source + '/pages/rates/rates.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'personal-account.html',
				chunks: ['personal-account', 'common'],
				template: PATHS.source + '/pages/personal-account/personal-account.pug'
			}),
			new HtmlWebpackPlugin({
				filename: 'personal-account-your-operations.html',
				chunks: ['personal-account-your-operations', 'common'],
				template: PATHS.source + '/pages/personal-account-your-operations/personal-account-your-operations.pug'
			}),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'common'
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery'
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin()
		]
	},
	pug(),
	sprite(),
	images(),
	fonts()
]);

module.exports = function(env) {
	if (env === 'production'){
		return merge([
			common,
			extractCSS(),
			uglifyJS(),
			js()
		]);
	}
	if (env === 'development'){
		return merge([
			common,
			js(),
			css(),
			sass(),
			devserver()
		]);
	}
};










