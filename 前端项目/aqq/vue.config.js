const { defineConfig } = require("@vue/cli-service")
const path = require("path")
function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	publicPath: "/",
	outputDir: "dist",
	assetsDir: "assets",
	devServer: {
		host: "0.0.0.0",
		https: false,
		open: true,



		proxy: {

			[process.env.VUE_APP_IDENT]: {
				changeOrigin: true,
				secure: false,
				target: process.env.VUE_APP_URL,
				pathRewrite: {
					["^" + process.env.VUE_APP_IDENT]: ""

				}
			}
		},
	},

	configureWebpack: {
		resolve: {
			alias: {
				"@": resolve("src"),
				$components: resolve("src/components"),
				vue$: "vue/dist/vue.esm.js"
			}
		}
	},
	chainWebpack(config) {
		config.plugins.delete("preload")
		config.plugins.delete("prefetch")
		config.module.rule("svg").exclude.add(resolve("src/icons")).end()
		config.module
			.rule("icons")
			.test(/\.svg$/)
			.include.add(resolve("src/icons"))
			.end()
			.use("svg-sprite-loader")
			.loader("svg-sprite-loader")
			.options({
				symbolId: "icon-[name]"
			})
			.end()
		config.module
			.rule("vue")
			.use("vue-loader")
			.loader("vue-loader")
			.tap((options) => {
				options.compilerOptions.preserveWhitespace = true
				return options
			})
			.end()

		config.when(process.env.NODE_ENV === "development", (config) => config.devtool("cheap-source-map"))

		config.when(process.env.NODE_ENV !== "development", (config) => {
			config
				.plugin("ScriptExtHtmlWebpackPlugin")
				.after("html")
				.use("script-ext-html-webpack-plugin", [
					{

						inline: /runtime\..*\.js$/
					}
				])
				.end()
			config.optimization.splitChunks({
				chunks: "all",
				cacheGroups: {
					libs: {
						name: "chunk-libs",
						test: /[\\/]node_modules[\\/]/,
						priority: 10,
						chunks: "initial"
					},
					elementUI: {
						name: "chunk-elementUI",
						priority: 20,
						test: /[\\/]node_modules[\\/]element-ui[\\/]/
					},
					commons: {
						name: "chunk-commons",
						test: resolve("src/components"),
						minChunks: 3,
						priority: 5,
						reuseExistingChunk: true
					}
				}
			})
			config.optimization.runtimeChunk("single")

		})

	}
})
