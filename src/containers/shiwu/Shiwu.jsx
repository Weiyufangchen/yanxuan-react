/*
识物路由组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getHomeData, getTopicData} from '../../redux/actions'

import ShiwuHeader from '../../components/shiwuHeader/ShiwuHeader'
import ShiwuBanner from './shiwuBanner/ShiwuBanner'
import ShiwuNavBanner from './shiwuNavBanner/ShiwuNavBanner'
import ShiwuRecommend from './shiwuRecommend/ShiwuRecommend'
import FooterGuide from '../../components/footerGuide/FooterGuide'

class Shiwu extends Component {

  componentWillMount () {
    this.props.getTopicData()
  }

  render () {
    const {topicData} = this.props
    const {banner, column} = topicData
    return (
      <div style={{paddingBottom: '99px'}}>
        <ShiwuHeader/>
        <ShiwuBanner data={banner}/>
        <ShiwuNavBanner column={column}/>
        <ShiwuRecommend topicData={topicData}/>
        <FooterGuide/>
      </div>
    )
  }
}

// 使用connect函数包装成容器组件
export default connect(
  state => ({topicData: state.topicData}),
  {getHomeData, getTopicData}
)(Shiwu)
