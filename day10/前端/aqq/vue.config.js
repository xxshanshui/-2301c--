const { defineConfig } = require("@vue/cli-service")
const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

// console.log(process.env)

module.exports = defineConfig({
  // 关闭保存时候 代码格式化校验

  transpileDependencies: true,
  lintOnSave: false,
  // 在vue3.2.2以下是用baseURL
  // publicPath：是vue 3.2.2以上版本用
  publicPath: "/",
  // 修改打包的文件夹和路径
  outputDir: "dist",
  // 静态资源文件修改路径
  assetsDir: "assets",
  devServer: {
		// 修改端口号  因为后端有时只能使用8080  前端使用会造成混乱   一般不建议使用默认8080
		port:"9999",
    open: true,
    proxy: {
      [process.env.VUE_APP_IDENT]: {
        // 配置代理默认开启代理方式
        changeOrigin: true,
        // 如果是http接口，需要配置该参数
        secure: false,
        // 配置代理路径
        target: process.env.VUE_APP_URL,
        //路径重写 ,向后端发起服务的时候,不带代理标识
        pathRewrite: {
          ["^" + process.env.VUE_APP_IDENT]: ""
        }
      }
    }
  },
  chainWebpack (config) {
    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },

  configureWebpack: {
    resolve: {
      /**路径别名 */
      alias: {
        // eslint-disable-next-line no-undef
        "@": resolve("src"),
        $components: resolve("src/components"),
        vue$: "vue/dist/vue.esm.js"
      }
    }
  }
})
