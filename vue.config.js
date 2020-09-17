// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})

// 使用等比适配插件
module.exports = {
  lintOnSave: true,
    // webpack配置 - 简单配置方式
    configureWebpack: {
      resolve: {
        alias: {
          // 别名
          vue$: "vue/dist/vue.esm.js", //加上这一句
         
        }
      }
    },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}