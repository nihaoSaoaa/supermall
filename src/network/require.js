import axios from 'axios'

export function request(config) {
  //创建对应的axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    // api 接口请微信加 coderway001 老师获取
    timeout: 10000
  }) 

  //拦截请求
  instance.interceptors.request.use(config => {
    return config;
  }, err => {});

  //拦截响应
  instance.interceptors.response.use(res => {
    return res.data;
  })

  //返回对应的axios实例，调用then方法处理数据
  return instance(config)
}