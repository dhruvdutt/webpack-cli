module.exports = {
	entry: {
		a: "a.js",
		b: "taddda",
	},
	mode: "prod",
	devServer: {
		port: 9000,
	},
	devtool: "eval",
	plugins: [
		"plugin1",
		"plugin2",
		"plugin3",
	],
	module: {
		noParse: function(content) {
			return /jquery|lodash/.test(content);
		},
		rules: [
			{
				loader: "eslint-loader",
				options: {
					formatter: "someOption"
				}
			},
			{
				loader: "vue-loader",
				options: "vueObject"
			},
			{
				loader: "babel-loader",
				include: "asdf"
			}
		]
	}
};
