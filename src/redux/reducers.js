/*
包含多个reducer函数
 */
import {combineReducers} from 'redux'

import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA,
  ERR_MSG
} from './action-types'

// 产生homeData状态的reducer
const initHomeData = {} // 初始化空对象
function homeData(state = initHomeData, action) {
  switch (action.type) {
    case RECEIVE_HOMEDATA:
      return action.data
    case ERR_MSG:
      const msg = action.data
      return {...state, msg}
    default:
      return state
  }
}

// 产生topicData状态的reducer
const initTopicData = {}

function topicData(state = initTopicData, action) {
  switch (action.type) {
    case RECEIVE_TOPICDATA:
      return action.data
    case ERR_MSG:
      const msg = action.data
      return {...state, msg}
    default:
      return state
  }
}

// 尝试navData状态的reducer
const initNavData = []

function navData(state = initNavData, action) {
  switch (action.type) {
    case RECEIVE_NAVDATA:
      return action.data
    case ERR_MSG:
      const msg = action.data
      return {...state, msg}
    default:
      return state
  }
}

// 合并多个reducer
// 返回的状态，是包含所有状态的对象：{homeData： xxx}
export default combineReducers({
  homeData,
  topicData,
  navData
})
