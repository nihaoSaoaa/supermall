//工具方法

// 1. 函数防抖
export function debounce(fn, delay) {
  let timer = null;
  return function (...reg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...reg);
    }, delay);
  }
}