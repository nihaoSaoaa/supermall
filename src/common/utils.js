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

//更具特定格式转换时间
export function formatDate(date, fmt) {
  // 匹配年份
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, String(date.getFullYear()).substring(4 - RegExp.$1.length));
  }
  console.log(fmt);
  //匹配其他
  const o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    //不要忘记加（）
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = String(o[k]);
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str :  padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substring(str.length);
}