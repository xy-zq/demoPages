import Vue from 'vue'
import VueRouter from 'vue-router'
// import index from '../index.vue'
import meetingHistory from './meetingHistory.vue'
import meetingDetail from './meetingDetail.vue'
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
