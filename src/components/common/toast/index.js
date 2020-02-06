import Toast from './Toast.vue'

export default {
  install(Vue) {
    // 1. 创建一个组件构造器
    const toastConstructor = Vue.extend(Toast);
    // 2.创建一个组件对象
    const toast = new toastConstructor();
    // 3. 手动挂载到一个元素上
    toast.$mount(document.createElement('div'));
    // 4. toast.$el对应的就是div
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast = toast;
  }
}