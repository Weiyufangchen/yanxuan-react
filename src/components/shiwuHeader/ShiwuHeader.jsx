/*
识物头部
 */
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './shiwuHeader.styl'

export default class ShiwuHeader extends Component {
  render () {
    return (
      <div className="shiwuHeader hdWraper" style={{height: '87px'}}>
        <div className="hd">
          <div className="topBar">
            <div className="bd">
              <div className="row">
                <NavLink className="icon icon-home" to="/home"></NavLink>
                <a href="javascript:;">
                  <i className="logo icon icon-logo"></i>
                </a>
                <div className="right">
                  <a className="search" href="javasricpt:;">
                    <i className="icon icon-search1"></i>
                  </a>
                  <NavLink className="cart" to="/cart">
                    <i className="icon icon-cart"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
