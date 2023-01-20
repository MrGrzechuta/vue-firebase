import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)

import './assets/main.css'

new Vue({
  el: '#app',
  router: router,
  render: (h) => h(App)
})
