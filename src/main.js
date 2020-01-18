import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//创建事件总线对象
Vue.prototype.$bus =  new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
