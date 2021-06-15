import Vue from 'vue'
import App from './index.vue'
import router from './router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../../assets/element-variables.scss'
import { baseUrl } from '@/utils/config/index.js'

if (window.platform) {
  var url = `http://${window.platform.ip}:${window.platform.port}`;
} else {
  var url = baseUrl;
}



Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')