import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  // VueRouter,
  router,
  render: h => h(App),
}).$mount('#app')