/*
包含n个action creator函数的模块
同步action：对象 (与action type一一对应)
异步action：函数
 */

import {
  reqHomeData,
  reqTopicData,
  reqNavData
} from '../api'

import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA,
  ERR_MSG
} from './action-types'

// 成功的同步action
const homeDataSuccess = homeData => ({type: RECEIVE_HOMEDATA, data: homeData})

const topicDataSuccess = topicData => ({type: RECEIVE_TOPICDATA, data: topicData})

const navDataSuccess = navData => ({type: RECEIVE_NAVDATA, data: navData})

// 失败的同步action
const errMsg = msg => ({type: ERR_MSG, data: msg})

/*
注册异步的action
1. 执行异步代码（发送ajax请求）
2. 有了结果后，根据结果不同分发不同的同步action
 */

// 请求homeData数据
export function getHomeData() {
  return async dispatch => {
  //  1. 执行异步代码（发送ajax请求）
    const result = await reqHomeData()
    if (result.code === 0) {  // 请求成功
      // 2. 有了结果后, 根据结果不同分发不同的同步action，传给reducers对象
      dispatch(homeDataSuccess(result.data));
    } else {
      dispatch(errMsg(result.msg))
    }
  }
}

// 请求topicData数据
export function getTopicData() {
  return async dispatch => {
    const result = await reqTopicData()
    if (result.code === 0) {
      dispatch(topicDataSuccess(result.data))
    }
  }
}

// 请求navData数据
export function getNavData() {
  return async dispatch => {
    const result = await reqNavData()
    if (result.code === 0) {
      dispatch(navDataSuccess(result.data))
    }
  }
}

/*
1. async/await的作用
  1). 简化promise的使用
  2). 使用同步编程实现异步流程效果
2. async/await如何使用
  await: 执行一个返回promise的函数, 想直接得到异步返回的结果, 在函数调用的左侧加await
  async: 包含await的语句所在函数定义的左侧加async
 */
