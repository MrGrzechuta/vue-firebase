import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatView from '../views/ChatView.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
      props: true,
      beforeEnter: (to, from, next) => {
        if(to.params.name) {
          next()
        }
        else {
          next({ name: 'home' })
        }
      }
    }
  ]
})
