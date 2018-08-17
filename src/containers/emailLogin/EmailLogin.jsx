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
    showPwd: false,  // 默认不显示
    captcha: ''
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

  goLogin =  () => {
    const {email,pwd,captcha} = this.state;
    if(!email) {
      alert('邮箱错误提示', '主人，邮箱不能为空咯', [
        { text: '取消', onPress: () => {}},
        { text: '确定', onPress: () => {} },
      ]);
      return
    } else if(!pwd) {
      alert('密码错误提示', '主人，密码不能为空咯', [
        { text: '取消', onPress: () => {}},
        { text: '确定', onPress: () => {} },
      ]);
      return
    }else if(!captcha) {
      alert('验证码错误提示', '主人，验证码不能为空咯', [
        { text: '取消', onPress: () => {}},
        { text: '确定', onPress: () => {} },
      ]);
      return
    }else if(captcha.toLowerCase() !== 'wk3v') {
      alert('验证码错误提示', '主人，验证码不正确耶', [
        { text: '取消', onPress: () => {}},
        { text: '确定', onPress: () => {}},
      ]);
      return
    }else{
      this.props.history.replace('/home');
    }
  }

  render () {
    const {email, pwd, showPwd, captcha} = this.state
    return (
      <div className='emailLogin'>
        <ShiwuHeader/>
        <div className="loginWrap">
          <div className="view">
            <div className="logo">
              <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo"/>
            </div>
            <div className="userBox">
              <section className="login_message">
                <input type="text"  value={email} onChange={this.handleEmail} placeholder='请输入邮箱账号'/>
              </section>
              <section className="login_verification">
                {
                  showPwd ? (
                    <input type="text"  value={pwd} onChange={this.handlePwd} placeholder='请输入密码'/>
                  ) : (
                    <input type="password"  value={pwd} onChange={this.handlePwd} placeholder='请输入确认密码'/>
                  )
                }
                <div className={showPwd ? 'switch_button on' : 'switch_button off'}  onClick={this.changeShowPwd}>
                  <div className={showPwd ? 'switch_circle right' : 'switch_circle'}></div>
                  <span className="switch_text">{showPwd ? 'abc' : '...'}</span>
                </div>
              </section>
              <section className="login_message">
                <input type="text" placeholder="验证码" value={captcha} onChange={this.handleCaptcha}/>
                <img className="get_verification" src={codeImg} alt="captcha"
                     style={{width: 150, marginTop: 5, right: 20}}/>
              </section>
              <section className="login_hint">
                <span>注册账号</span>
                <span>忘记密码</span>
              </section>
            </div>
            <div className="btnWrapper">
              <div className="btn btn-xl btn-block phone-login" onClick={this.goLogin}>
                <i className="icon icon-loginPhone"></i>
                <span>登录</span>
              </div>
              <div className="btn btn-xl btn-block email-login"
                   onClick={() => this.props.history.replace('/profile')}>
                <i className="icon icon-loginEmail"></i>
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
