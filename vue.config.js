// // 引入等比适配插件
// const px2rem = require('postcss-px2rem')

// const { resolve } = require("core-js/fn/promise");

// // 配置基本大小
// const postcss = px2rem({
//   // 基准大小 baseSize，需要和rem.js中相同
//   remUnit: 16
// })

let path = require('path');

function resolve (dir) {
    path.join(__dirname, dir);
}
// 使用等比适配插件
module.exports = {
  lintOnSave: true,
    // webpack配置 - 简单配置方式
    configureWebpack: {
      resolve: {
        alias: {
            '@': resolve('src')
        }
    }
    },
  css: {
    // loaderOptions: {
    //   postcss: {
    //     plugins: [
    //       postcss
    //     ]
    //   }
    // }
  }
}