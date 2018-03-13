/**
 * Created by gy on 2018/3/12.
 */

/**
 * React-Native Fatch网络请求工具类
 * Songlcy create
 * params:请求参数
 * ES6 Promise 使用
 * resolve 成功时候返回
 * reject 失败时候返回
 */

import showToast from '../util/toast';

export default class HttpUtil {

  //基于 fetch 封装的 GET请求
  static getFatch(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
          .then(response => {
            return response.json();
          })
          .then(json => {
            showToast(json.msg);
            if (json === 200) {
              return json;
            } else {
              //处理自定义异常

            }
          })
          .catch((err) => {
            showToast('网络错误');
            console.log('err:', url, err);     //网络请求失败返回的数据
            reject(err);
          });
    });

  }

  //基于 fetch 封装的 POST请求
  static postFatch(url, params) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      })
          .then(response => {
              return response.json();
          })
          .then(json => {
            showToast(json.msg);
            console.log(json);
            if (json.code === 200) {
              return json;
            } else {
              //处理自定义异常
            }

          })
          .catch((err) => {
            showToast('网络错误');
            console.log('err:', url, err);     //网络请求失败返回的数据
            reject(err);
          });
    });
  }
}
