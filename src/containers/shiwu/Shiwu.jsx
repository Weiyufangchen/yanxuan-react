/*
识物路由组件
 */
import React, {Component} from 'react'

import ShiwuHeader from '../../components/shiwuHeader/ShiwuHeader'
import ShiwuBanner from './shiwuBanner/ShiwuBanner'
import ShiwuNavBanner from './shiwuNavBanner/ShiwuNavBanner'
import ShiwuRecommend from './shiwuRecommend/ShiwuRecommend'
import FooterGuide from '../../components/footerGuide/FooterGuide'

export default class Shiwu extends Component {
  render () {
    return (
      <div style={{paddingBottom: '99px'}}>
        <ShiwuHeader/>
        <ShiwuBanner/>
        <ShiwuNavBanner/>
        <ShiwuRecommend/>
        <FooterGuide/>
      </div>
    )
  }
}
