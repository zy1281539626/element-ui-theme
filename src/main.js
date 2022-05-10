import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

import { initThemeColor } from './utils/themeColorClient'
initThemeColor();

import './style/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
