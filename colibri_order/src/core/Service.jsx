import axios from 'axios';

const client = axios.create({
    baseURL: '/api/web',
    timeout: 15000,
})

// 设置请求拦截器
client.interceptors.request.use(req => {
    // 判定非 FormData 情况转换数据格式
    if (!(req.data instanceof FormData)) {
      req.data = {
        data: req.data
      };
    }
    return req;
}, error => {
    console.log(error);
    Promise.reject(error);
})

// 设置响应拦截器
client.interceptors.response.use(res => {
    if (res.status < 400 && res.data.code === 100000) {
        return Promise.resolve(res.data.data);
      } else {
        let message = null;
        try {
          // 尝试获取系统内报错
          message = res.data.data.message || res.data.message;
        } catch (e) {
          // 获取 HTTP 协议或服务器给出的报错
          message = res.data.message || res.status;
        }
  
        const errorCode = res.data.code;
        if (errorCode === 201000 || errorCode === 201060 || errorCode === 202001) {
          console.log('打印请求失败===', errorCode);
          goLogin(errorCode, message);
        }

       
        const data = res.data.data;
        return Promise.reject({
          errorCode,
          message,
          data
        });
      }
}, error => {
    console.log(error);
    Promise.reject(error);
})


class Service {
    static post(url, params, config) {
        return client.post(url, params, config);
    }

    static get(url, params, config) {
        return client.get(url, params, config);
    }
}

export default Service;