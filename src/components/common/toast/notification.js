import Toast from './Toast.vue'

// export default {
//   install(Vue) {
//     // 1. 创建一个组件构造器
//     const toastConstructor = Vue.extend(Toast);
//     // 2.创建一个组件对象
//     const toast = new toastConstructor();
//     // 3. 手动挂载到一个元素上
//     toast.$mount(document.createElement('div'));
//     // 4. toast.$el对应的就是div
//     document.body.appendChild(toast.$el);
//     Vue.prototype.$toast = toast;
//   }
// }
import Vue from 'vue'
Toast.newInstance = (props = {}) => {
  const instance = new Vue({
    data: props,
    render: h => h(Toast, { props })
  })
  const component = instance.$mount();
  document.body.appendChild(component.$el)
  const toast = component.$children[0]
  return {
    show(msg,delay) {
      return toast.show(msg, delay)
    }
  }
}

export default Toast;