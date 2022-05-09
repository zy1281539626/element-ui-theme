const { defineConfig } = require('@vue/cli-service')
const ThemeColorReplacer = require('webpack-theme-color-replacer')
const forElementUI = require('webpack-theme-color-replacer/forElementUI')
const appConfig = require('./src/config/app-config')
const JoinFileContentPlugin = require('join-file-content-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new JoinFileContentPlugin({
        file: 'node_modules/element-ui/packages/theme-chalk/src/common/var.scss',
        prependFile: 'src/style/element-variables.scss'
      }),
      // 生成仅包含颜色的替换样式（主题色等）
      new ThemeColorReplacer({
        fileName: 'style/theme-colors.[contenthash:8].css',
        matchColors: [
          ...forElementUI.getElementUISeries(appConfig.themeColor), // element-ui主色系列          
        ],
        // externalCssFiles: ['./node_modules/element-ui/lib/theme-chalk/index.css'],
        changeSelector: forElementUI.changeSelector,
        injectCss: true,
      })
    ]
  } 
})
