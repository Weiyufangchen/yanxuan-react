/*
邮箱登录组件
 */
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Modal} from 'antd-mobile'

import ShiwuHeader from '../../components/shiwuHeader/ShiwuHeader'
import codeImg from './captcha.svg'
import './emailLogin.styl'

const alert = Modal.alert

class EmailLogin extends Component {

  state = {
    email: '',
    pwd: '',
    captcha: '',
    showPwd: false  // 默认不显示
  }

  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handleCaptcha = (event) => {
    this.setState({
      captcha: event.target.value
    })
  }
  handlePwd = (event) => {
    this.setState({
      pwd: event.target.value
    })
  }
  changeShowPwd = () => {
    this.setState({
      showPwd: !this.state.showPwd
    })
  }

  goLogin = () => {
    const {email, pwd, captcha} = this.state;
    if (!email || !pwd) {
      alert('邮箱或密码错误', '请输入正确的邮箱', [
        {
          text: '取消', onPress: () => {
            this.setState({
              email: '',
              pwd: '',
              captcha: '',
            })
          }
        },
        {
          text: '确定', onPress: () => {
            this.setState({
              email: '',
              pwd: '',
              captcha: '',
            })
          }
        },
      ]);
      return
    } else if (captcha.toLowerCase() !== 'wk3v') {
      alert('验证码错误提示', '验证码不正确', [
        {
          text: '取消', onPress: () => {
            this.setState({
              captcha: '',
            })
          }
        },
        {
          text: '确定', onPress: () => {
            this.setState({
              captcha: '',
            })
          }
        },
      ]);
      return
    } else {
      this.props.history.replace('/home');
    }
  }

  render() {
    const {email, pwd, showPwd, captcha} = this.state
    return (
      <div className='emailLogin'>
        <ShiwuHeader/>
        <div className="loginWrap loginWrap-1">
          <div className="view">
            <div className="logo">
              <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo"/>
            </div>
            <div className="userBox">
              <section className="login_message">
                <input type="text" value={email} onChange={this.handleEmail} placeholder='请输入邮箱账号'/>
              </section>
              <section className="login_verification">
                {
                  showPwd ? (
                    <input type="text" value={pwd} onChange={this.handlePwd} placeholder='请输入密码'/>
                  ) : (
                    <input type="password" value={pwd} onChange={this.handlePwd} placeholder='请输入密码'/>
                  )
                }
                <div className={showPwd ? 'switch_button on' : 'switch_button off'} onClick={this.changeShowPwd}>
                  <div className={showPwd ? 'switch_circle right' : 'switch_circle'}></div>
                  <span className="switch_text">{showPwd ? 'abc' : '...'}</span>
                </div>
              </section>
              <section className="login_message">
                <input type="text" placeholder="验证码" value={captcha} onChange={this.handleCaptcha}/>
                <img className="get_verification" src={codeImg} alt="captcha"
                     style={{width: 150, right: 20}}/>
              </section>
              <section className="login_hint">
                <span>注册账号</span>
                <span>忘记密码</span>
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(EmailLogin)
