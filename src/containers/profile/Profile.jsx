/*
个人中心/登录/注册组件
 */
import React, {Component} from 'react'
// react-router 提供了一个withRouter组件
// withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入
import {withRouter} from 'react-router-dom'

import ShiwuHeader from '../../components/shiwuHeader/ShiwuHeader'
import './profile.styl'

class Profile extends Component {
  render () {
    return (
      <div className='profile'>
        {/* 登录/注册，个人中心头部 */}
        <ShiwuHeader/>
        <div className="loginWrap" style={{height: '1246px',display: 'block'}}>
          <div className="login-type">
            {/* 登录按钮 */}
            <div className="container">
              <div className="logoWrapper">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
              </div>
              <div className="btnWrapper">
                <div className="btn btn-xl btn-block phone-login"
                     onClick={() => this.props.history.replace('/phonelogin')}>
                  <i className="icon icon-loginPhone"></i>
                  <span>手机号码登录</span>
                </div>
                <div className="btn btn-xl btn-block email-login"
                  onClick={() => this.props.history.replace('/emaillogin')}>
                  <i className="icon icon-loginEmail"></i>
                  <span>邮箱账号登录</span>
                </div>
                <div className="register" onClick={() => this.props.history.replace('/profile')}>
                  <span>手机号快捷注册</span>
                  <i className="icon icon-arrow-right"></i>
                </div>
              </div>
            </div>
            {/* 联系方式 */}
            <ul className="contact">
              <li className="itemWrap">
            <span className="item">
              <i className="iconfont icon-weixin1"></i>
              <span className="name">微信</span>
            </span>
              </li>
              <li className="itemWrap">
            <span className="item">
              <i className="iconfont icon-qq"></i>
              <span className="name">QQ</span>
            </span>
              </li>
              <li className="itemWrap">
            <span className="item">
              <i className="iconfont icon-sinaweibo"></i>
              <span className="name">微博</span>
            </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Profile)
