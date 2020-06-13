import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import toast from 'components/common/toast'
import vSlice from './common/directions'

import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = true

router.beforeEach((to, from, next) => {
  const needLogin = to.matched.some(record=> record.meta.login);
  if (needLogin) {
    const isLogin = document.cookie.includes('uid');
    if (isLogin) {
      next();
    } else {
      // this.$toast.show('请先登录查看信息！')
      // console.log(this);
      next('/profile/login')
    }
  } else {
    next();
  }
})


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
Vue.use(vSlice)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
