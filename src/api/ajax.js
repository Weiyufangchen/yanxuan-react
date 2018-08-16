/*
ajax请求函数模块
函数的返回值为promise对象
 */
import axios from 'axios'

export default function ajax(url='', data={}, type='GET') {
  // 返回一个自己创建的promise对象，为了能得到的不是response，而是得到response.data的数据
  return new Promise(function (resolve, reject) {
    let promise
    // 如果发送的GET请求
    if (type === 'GET') {
      //  将data中所有数据作为请求参数传到url中
      //  准备url query 参数数据
      let queryStr = '';
      Object.keys(data).forEach(key => {  // keys() 得到对象自身的所有属性名组成的数组
        const value = data[key]  // 拿到对应的属性值
        //  拼串
        queryStr += key + '=' + value + '&'  // 最后会多一个&
      });
      if (queryStr) {  // 如果确实发送了请求数据
        //  去除最后的&
        queryStr = queryStr.substring(0, queryStr.length - 1)
        //  加上问号
        queryStr = '?' + queryStr
      }
      //  拿到response.data
      promise = axios.get(url + queryStr);
    } else {  // POST请求
      promise = axios.post(url, data)
    }
    promise.then(response => {
      // 请求成功
      resolve(response.data)
    }).catch(err => {  // 请求失败
      reject(err)
    })
  })
}
