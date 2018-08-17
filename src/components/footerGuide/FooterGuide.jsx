/*
底部导航的组件FooterGuide
 */
import React, {Component} from 'react'
import {
  withRouter,
  NavLink,
} from 'react-router-dom'

import './footerGuide.styl'

class FooterGuide extends Component {

  render() {
    return (
      <footer className="footer_guide border-1px">
        <NavLink href="javascript:;" className="guide_item" activeClassName='active' to='/home'>
          <i className="iconfont icon-shouye"></i>
          <span>首页</span>
        </NavLink>
        <NavLink href="javascript:;" className="guide_item" activeClassName='active' to='/shiwu'>
          <i className="iconfont icon-fangkuaidagou-weixuanzhong"></i>
          <span>识物</span>
        </NavLink>
        <NavLink href="javascript:;" className="guide_item" activeClassName='active' to='/category'>
          <i className="iconfont icon-chouti"></i>
          <span>分类</span>
        </NavLink>
        <NavLink href="javascript:;" className="guide_item" activeClassName='active' to='/cart'>
          <i className="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </NavLink>
        <NavLink href="javascript:;" className="guide_item" activeClassName='active' to='/profile'>
          <i className="iconfont icon-renwu"></i>
          <span>个人</span>
        </NavLink>
      </footer>
    )
  }
}

export default withRouter(FooterGuide)  // 向一般组件传递路由相关属性（history/location/match）
