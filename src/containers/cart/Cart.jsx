/*
购物车路由组件
 */
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './cart.styl'
import FooterGuide from '../../components/footerGuide/FooterGuide'

export default class Cart extends Component {
  render () {
    return (
      <div>
        <div className='cart'>
          {/* cart头部 */}
          <div className="cartHeader" style={{height: '88px'}}>
            <div className="hd">
              <div className="headWrapper">
                <span className="logo">购物车</span>
                <div className="right">
                  <NavLink className="cartCoupon" to='/profile'>领券</NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* 服务：30天无忧退货 */}
          <div className="service">
            <ul className="serviceList">
              <li className="item">
                <i className="icon icon-servicePolicy"></i>
                <span>30天无忧退货</span>
              </li>
              <li className="item">
                <i className="icon icon-servicePolicy"></i>
                <span>48小时快速退款</span>
              </li>
              <li className="item">
                <i className="icon icon-servicePolicy"></i>
                <span>满88元免邮费</span>
              </li>
            </ul>
          </div>
          {/* 购物车空状态的默认页面 */}
          <div className="defaultPage noCart-defaultPage">
            <div className="container">
              <div className="noCart-img"></div>
              <div className="txt noCart-login">
                <div className="noCart-title">去添加点什么吧</div>
                <div className="noCart-btn">登录</div>
              </div>
            </div>
          </div>
        </div>
        <FooterGuide/>
      </div>
    )
  }
}
