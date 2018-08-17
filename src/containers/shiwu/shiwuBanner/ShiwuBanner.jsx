/*
识物轮播图
 */
import React, {Component} from 'react'
import Swiper from 'swiper'

import './shiwuBanner.styl'

export default class ShiwuBanner extends Component {

  componentDidMount () {
    new Swiper('.swiper-container-banner1', {
      loop: true
    })
  }

  render () {
    return (
      <div className="banner-wrapper">
        <div className="carousel banner">
          <div className="swiper-container-banner1">
            <div className="swiper-wrapper">
              <div className="swiper-slide" style={{width: '690px'}}>
              <a href="javascript:;">
                <img src="//yanxuan.nosdn.127.net/03ca6f1617063cc3e7e9a9d18ee15e17.jpg?imageView&quality=75" alt="image"/>
                <div className="content">
                  <div className="subTitle">严选推荐</div>
                  <div className="title">严选按摩神器大公开</div>
                  <div className="desc">揭开每一款的秘技绝学</div>
                </div>
              </a>
            </div>
              <div className="swiper-slide" style={{width: '690px'}}>
                <a href="javascript:;">
                  <img src="//yanxuan.nosdn.127.net/03ca6f1617063cc3e7e9a9d18ee15e17.jpg?imageView&quality=75" alt="image"/>
                  <div className="content">
                    <div className="subTitle">严选推荐</div>
                    <div className="title">严选按摩神器大公开</div>
                    <div className="desc">揭开每一款的秘技绝学</div>
                  </div>
                </a>
              </div>
              <div className="swiper-slide" style={{width: '690px'}}>
                <a href="javascript:;">
                  <img src="//yanxuan.nosdn.127.net/03ca6f1617063cc3e7e9a9d18ee15e17.jpg?imageView&quality=75" alt="image"/>
                  <div className="content">
                    <div className="subTitle">严选推荐</div>
                    <div className="title">严选按摩神器大公开</div>
                    <div className="desc">揭开每一款的秘技绝学</div>
                  </div>
                </a>
              </div>
            </div>
          {/* Add Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
  </div>
    )
  }
}
