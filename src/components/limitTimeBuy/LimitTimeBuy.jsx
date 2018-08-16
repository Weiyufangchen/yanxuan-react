/*
限时购组件：UI组件
 */
import React, {Component} from 'react'

import './limitTimeBuy.styl'

export default class LimitTimeBuy extends Component {
  render () {
    return (
      <div>
        <a href="javascript:;">
          <div className="indexFlash">
            <div className="left-item">
              <div className="title">严选限时购</div>
              <div className="countdown">
                <span className="hours">00</span>
                <span className="colon">:</span>
                <span className="mins">00</span>
                <span className="colon">:</span>
                <span className="secs">00</span>
              </div>
              <div className="next-title">
            <span>
              <span>下一场</span>
              <span>10:00</span>
              <span>开始</span>
            </span>
              </div>
            </div>
            <div className="right-item">
              <img src="http://yanxuan.nosdn.127.net/724d1a3df9cd907f20782b954088e786.png?imageView&quality=85&thumbnail=330x330"/>
              <div className="price">
                <div className="price-now">
                  <span>￥79</span>
                </div>
                <div className="price-origin">
                  {/* 添加伪类做删除线 */}
                  <span className="t">￥99</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}


