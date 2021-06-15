import Vue from 'vue'
import App from './index.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../../assets/element-variables.scss'

import VueRouter from 'vue-router'
import meetingHistory from './meetingHistory.vue'
import meetingDetail from './meetingDetail.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'meetingHistory',
    component: meetingHistory
  },
  {
    path: '/detail',
    name: 'meetingDetail',
    component: meetingDetail
  },
]

const router = new VueRouter({
  routes
})


Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')