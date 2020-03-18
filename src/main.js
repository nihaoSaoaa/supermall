import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import toast from 'components/common/toast'

import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//创建事件总线对象
Vue.prototype.$bus =  new Vue()
// 安装toast插件
Vue.prototype.$toast = toast;
Vue.use(toast);
//使用fastclickj解决移动端300ms延迟
FastClick.attach(document.body);
Vue.use(LazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
