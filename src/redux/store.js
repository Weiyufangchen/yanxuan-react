/*
redux管理状态的核心对象
 */
import {createStore, applyMiddleware} from 'redux'
// 应用异步中间件
import thunk from 'redux-thunk'
// 使用插件工具查看state
import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from './reducers'  // 它是一个个的reducer函数

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
