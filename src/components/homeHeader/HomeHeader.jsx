/*
首页头部组件HomerHeader
 */
import React, {Component} from 'react'
//引入滚动的插件库
// 引入样式
import './homeHeader.styl'

export default class HomeHeader extends Component {
  state = {
    navList: ['推荐', '居家', '鞋包配饰', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
  }

  componentWillMount() {

  }

  render() {
    const {navList} = this.state

    return (
      <div>
        <div className="home-header">
          {/*首页搜索*/}
          <div className="header-search">
            <a href="javascript:;" className="logo"></a>
            <div className="search">
              <i className="iconfont"></i>
              <span>搜索商品, 共11765款好物</span>
            </div>
          </div>
          {/*首页导航*/}
          <div className="header-nav border-1px">
            <ul className="nav-list">
              {
                navList.map((item, index) => {
                  return (
                    <li className="list-item" key={index}>
                      <span ref="span">{item}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
