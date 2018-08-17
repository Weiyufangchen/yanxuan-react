/*
商品分类路由组件
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getNavData} from '../../redux/actions'
import BScroll from 'better-scroll'

import './category.styl'

import CategoryHeader from '../../components/categoryHeader/CategoryHeader'
import FooterGuide from '../../components/footerGuide/FooterGuide'

class Category extends Component {
  // 定义初始index值，保存左侧导航li的下标
  state = {
    currentIndex: 0
  }

  componentDidMount() {
    // 调用action中函数，通知state更新
    this.props.getNavData()
  }

  componentDidUpdate() {
    new BScroll(this.refs.leftScroll, {click: true})
    // new BScroll(this.refs.rightScroll, {click: true})
  }

  // 监听li下标的改变
  activeChange = (index) => {
    //  更新state
    this.setState({
      currentIndex: index
    })
  }

  render() {
    const {navData} = this.props
    const {currentIndex} = this.state
    if (navData.length === 0) {
      return (<div></div>)
    }
    return (
      <div style={{backgroundColor: '#fff', width: '100%', height: '1734px'}}>
        {/* 商品分类头部搜索 */}
        <CategoryHeader/>
        {/* 商品左侧菜单导航 */}
        <div className="cateNavLeft" style={{left: 0}}>
          <div ref='leftScroll' style={{position: 'relative', height: '100%', width: '100%', overflow: 'hidden'}}>
            <ul className="cateNav">
              {
                navData.map((item, index) => {
                  return (
                    <li className={index === currentIndex ? 'item active' : 'item'} key={index}
                        onClick={() => this.activeChange(index)}>
                      <a className="txt" href="javascript:;">{item.name}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        {/* 商品右侧展示列表 */}
        <div className="categoryNavRight">
          {
            navData.map((item, index) => {
              return (
                <div className={index === currentIndex ? 'wrap show': 'wrap hide'} key={index}>
                  <div className="banner" style={{backgroundImage: 'url(' + item.bannerUrl + ')'}}></div>
                  <div className="cateList">
                    <div className="hd">
                      <span className="text">
                        <span>{item.name}分类</span>
                      </span>
                    </div>
                    <div>
                      <ul className="list">
                        {
                          item.subCateList.map((subItem, index) => {
                            return (
                              <li className="cateItem" key={index}>
                                <a href="javascript:;">
                                  <div className="cateImgWraper">
                                    <img className="cateImg"
                                         src={subItem.wapBannerUrl}
                                         alt=""/>
                                  </div>
                                  <div className="name">{subItem.name}</div>
                                </a>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <FooterGuide/>
      </div>
    )
  }
}

export default connect(
  state => ({navData: state.navData}),
  {getNavData}
)(Category)
