
function replaceOnlyNumber(str) {
  return str.replace(/[^0-9]/g, '');
}

function getTransferVal(type,length, val) {
  if (type === 'number') {
    return val = replaceOnlyNumber(val).slice(0, length);
  } else {
    return val = val.slice(0, length);
  }
}

function slice(el, binding, vnode) {
  const { expression, arg, modifiers } = binding;
    const content = vnode.context;
    let newVal = content[expression];
    let flag = Object.keys(modifiers);
    flag =  (flag && flag.length) ? flag[0] : ''; 
    newVal = getTransferVal(flag, arg, newVal);
    // 修改双向绑定
    el.value = newVal;
    content[expression] = newVal;
    return { flag, arg, expression, content };
}

const vSlice = {
  bind(el, binding, vnode) {
    const { flag, arg , expression, content} =  slice(el, binding, vnode);
    el.oninput = e => {
      let newVal = e.target.value;
      newVal = getTransferVal(flag, arg, newVal);
      content[expression] = newVal;
      e.target.value = newVal;
    }  
  },
  update(el, binding, vnode) {
    slice(el, binding, vnode);
  },
  inserted(el, binding, vnode) {
    // el.focus();
  }
}


export default {
  install(Vue) {
    Vue.directive('slice', vSlice);
  }
}