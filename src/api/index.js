/*
包含多个接口的请求函数的模块
函数的返回值：promise对象
 */
import ajax from './ajax'
// 获取首页数据
export const reqHomeData = () => ajax('/homedata')
export const reqNavData = () => ajax('/navdata')
export const reqTopicData = () => ajax('/topicdata')
