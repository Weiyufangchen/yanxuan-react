/*
限时购组件：UI组件
 */
import React, {Component} from 'react'

import './limitTimeBuy.styl'

export default class LimitTimeBuy extends Component {

  state = {
    hour: '00', // 初始化限时购
    min: '10',
    second: '20',
    startTime: 20
  }

  componentDidMount () {
    this.countDown()
  }

  // 倒计时，限时购
  countDown = () => {
  //  获取当前时间
    let date = new Date()
    let start = date.getTime()
  //  设置截止时间
    let endDate = new Date("2018-8-18 20:00:00")
    let end = endDate.getTime()
  //  时间差
    let deltaTime = end - start
  // 定义变量 d,h,m,s保存倒计时的时间
    let d, h, m, s
    if (deltaTime >= 0) {
      d = Math.floor(deltaTime / 1000 / 60 / 60 / 24)
      h = Math.floor(deltaTime / 1000 / 60 / 60 % 24)
      m = Math.floor(deltaTime / 1000 / 60 % 60)
      s = Math.floor(deltaTime / 1000 % 60)
    }
  //  更新状态
    if (h < 10) {
      this.setState({
        hour: `0${h}`
      });
    } else {
      this.setState({
        hour: `${h}`
      })
    }
    if (m < 10) {
      this.setState({
        min: `0${m}`
      });
    } else {
      this.setState({
        min: `${m}`
      });
    }
    if (s < 10) {
      this.setState({
        sec: `0${s}`
      });
    } else {
      this.setState({
        second: `${s}`
      });
    }
  //  递归调用
    setTimeout(this.countDown, 1000)
  }

  render () {
    const flashSaleIndexVO = this.props.data
    const {hour, min, second, startTime} = this.state
    return (
      flashSaleIndexVO ? (
        <div>
          <a href="javascript:;">
            <div className="indexFlash">
              <div className="left-item">
                <div className="title">严选限时购</div>
                <div className="countdown">
                  <span className="hours">{hour}</span>
                  <span className="colon">:</span>
                  <span className="mins">{min}</span>
                  <span className="colon">:</span>
                  <span className="secs">{second}</span>
                </div>
                <div className="next-title">
            <span>
              <span>下一场</span>
              <span>{startTime}:00</span>
              <span>开始</span>
            </span>
                </div>
              </div>
              <div className="right-item">
                <img src={flashSaleIndexVO.primaryPicUrl}/>
                <div className="price">
                  <div className="price-now">
                    <span>￥{flashSaleIndexVO.activityPrice}</span>
                  </div>
                  <div className="price-origin">
                    {/* 添加伪类做删除线 */}
                    <span className="t">￥{flashSaleIndexVO.originPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      ) : null
    )
  }
}


