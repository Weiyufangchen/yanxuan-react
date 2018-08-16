/*
底部导航的组件FooterGuide
 */
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import './footerGuide.styl'

class FooterGuide extends Component {

  render() {
    return (
      <footer className="footer_guide border-1px">
        <a href="javascript:;" className="guide_item active">
          <i className="iconfont icon-shouye"></i>
          <span>首页</span>
        </a>
        <a href="javascript:;" className="guide_item">
          <i className="iconfont icon-fangkuaidagou-weixuanzhong"></i>
          <span>识物</span>
        </a>
        <a href="javascript:;" className="guide_item">
          <i className="iconfont icon-chouti"></i>
          <span>分类</span>
        </a>
        <a href="javascript:;" className="guide_item">
          <i className="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </a>
        <a href="javascript:;" className="guide_item">
          <i className="iconfont icon-renwu"></i>
          <span>个人</span>
        </a>
      </footer>
    )
  }
}

export default withRouter(FooterGuide)  // 向一般组件传递路由相关属性（history/location/match）
