/**
 * 向子组件派发事件
 * @param {*} componentName 子组件名 
 * @param {*} eventName 事件名
 * @param  {...any} params 参数
 */
function broadcast(componentName, eventName, ...params) {
  this.$children.forEach( child => {
    const name = child.$options.name;
    if (name === componentName) {
      child.$emit.call(child, eventName, ...params);
    } else {
      broadcast.call(child, componentName, eventName, ...params);
    }
  });
}

export default {
  methods: {
    /**
     * 向父组件派发事件
     * @param {*} componentName 子组件名
     * @param {*} eventName 事件名
     * @param  {...any} params 参数
     */
    dispatch(componentName, eventName, ...params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        parent.$emit.call(parent, eventName, ...params);
      }
    },
    broadcast(componentName, eventName, ...params) {
      broadcast.call(this, componentName, eventName, ...params);
    }
  }
}