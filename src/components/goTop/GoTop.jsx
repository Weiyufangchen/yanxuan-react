/*
回到顶部的组件
 */
import React, {Component} from 'react'

import './goTop.styl'

export default class GoTop extends Component {

  componentWillUnmount () {
    // clearInterval(intervalId)
  }

  // 点击回到顶部
  gotoTop = () => {
    // const speed = 10  // 初始化速度
    // intervalId = setInterval(() => {
    //   scrollTop -= speed
      window.scrollTo(0, 0)
    // }, 1000)
  }

  render () {
    const {isShow, scrollTop} = this.props
    return (
      <i id='goTop' className={isShow ? 'on' : 'off'} onClick={this.gotoTop}></i>
    )
  }
}
