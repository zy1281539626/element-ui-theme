# Element 2.15.8 + Vue 2.6.14 主题动态切换

注意点：

- babel.config.js 配置 babel-plugin-component
- 使用插件 webpack-theme-color-replacer 替换颜色
- 使用插件 join-file-content-plugin 覆盖默认主题色
- 可以添加默认 scss 变量
- vue.config 设置 additionalData 可以在任意位置使用变量，不需要每个页面引入

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
