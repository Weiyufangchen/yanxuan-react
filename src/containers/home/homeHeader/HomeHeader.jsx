/*
首页头部组件HomerHeader
 */
import React, {Component} from 'react'

import './homeHeader.styl'

export default class  extends Component {
  render() {
    return (
      <div>
        <div class="home-header">
          {/*首页搜索*/}
          <div class="header-search">
            <a href="/" class="logo"></a>
            <div class="search">
              <i class="iconfont"></i>
              <span>搜索商品, 共11765款好物</span>
            </div>
          </div>
          {/*首页导航*/}
          <div class="header-nav border-1px">
            <ul class="nav-list">
              <li class="list-item">
                <span ref="span">111</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
