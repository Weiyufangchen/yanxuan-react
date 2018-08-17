/*
手机登录组件
 */
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Modal} from 'antd-mobile'

import ShiwuHeader from '../../components/shiwuHeader/ShiwuHeader'
import './phoneLogin.styl'

const {alert} = Modal

class PhoneLogin extends Component {

  state = {
    phone: '', // 手机号
    code: ''   // 验证码
  }

  // 手机号输出框值发生改变
  phoneNumber = (event) => {
    this.setState({
      phone: event.target.value
    })
  }
  // 手机验证码
  phoneCode = (event) => {
    this.setState({
      code: event.target.value
    })
  }

  // 登录
  goLogin = () => {
  //  正则验证
    const reg = /^1[34578]\d{9}$/
    if (!reg.test(this.state.phone)) {  // 手机号不符合规范
      alert('提示', '手机号格式不正确', [
        {text: '取消', onPress: () => {
          this.state.phone = ''
          this.state.code = ''
        }},
        {text: '确定', onPress: () => {
          this.state.phone = ''
          this.state.code = ''
        }}
      ])
      return
    }else if (!/^\d{6}$/.test(this.state.code)) {
      alert('提示', '请输入6位数字验证码', [
        {
          text: '取消', onPress: () => {
            this.state.code = '';
          }
        },
        {
          text: '确定', onPress: () => {
            this.state.code = '';
          }
        }
      ]);
      return;
    } else {
      this.props.history.replace('/home')
    }
  }

  render () {
    const {phone, code} = this.state
    return (
      <div className='phoneLogin'>
        <ShiwuHeader/>
        <div className="loginWrap loginWrap-1">
          <div className="view">
            <div className="logo">
              <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo"/>
            </div>
            <div className="userBox userBox-1">
              <section className="login_message">
                <input type="text"  value={phone} onChange={this.phoneNumber} placeholder='请输入手机号'/>
              </section>
              <section className="login_verification">
                <input type="text"  value={code} onChange={this.phoneCode} placeholder='请输入验证码'/>
                <div className="getWrap">
                  <a className="getsmscode">获取验证码</a>
                </div>
              </section>
              <section className="login_hint">
                <span>遇到问题？</span>
                <span>使用密码验证登录</span>
              </section>
            </div>
            <div className="btnWrapper">
              <div className="btn btn-xl btn-block phone-login" onClick={this.goLogin}>
                <span>登录</span>
              </div>
              <div className="btn btn-xl btn-block email-login"
                   onClick={() => this.props.history.replace('/profile')}>
                <span>其他登录方式</span>
              </div>
              <div className="register" onClick={() => this.props.history.replace('/profile')}>
                <span>注册账号 ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PhoneLogin)
