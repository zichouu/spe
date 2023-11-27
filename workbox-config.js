module.exports = {
	globDirectory: 'docs/.vitepress/dist/',
	globPatterns: [
		'**/*.{html,png,js,woff2,css,ico,json}'
	],
	swDest: 'docs/.vitepress/dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};