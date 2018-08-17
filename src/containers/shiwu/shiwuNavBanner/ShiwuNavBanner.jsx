/*
识物页面导航轮播图
 */

import React, {Component} from 'react'
import Swiper from 'swiper'

import './shiwuNavBanner.styl'

export default class ShiwuNavBanner extends Component {

  componentDidMount () {
    new Swiper('.swiper-container-banner2', {
      slidesPerView: 'auto',
      centeredSlides: false
    })
  }

  render () {
    return (
      <div className="exploreChannels">
        <div className="swiper-container-banner2">
          <div className="list swiper-wrapper">
            <a className="item swiper-slide" href="javascript:;">
              <div className="imgContainer channelPic"></div>
              <div className="icon icon-rbGradient">
                <p className="topNum">334篇文章</p>
              </div>
              <div className="title">严选推荐</div>
            </a>
            <a className="item swiper-slide" href="javascript:;">
              <div className="imgContainer channelPic"></div>
              <div className="icon icon-rbGradient">
                <p className="topNum">334篇文章</p>
              </div>
              <div className="title">严选推荐</div>
            </a>
            <a className="item swiper-slide" href="javascript:;">
              <div className="imgContainer channelPic"></div>
              <div className="icon icon-rbGradient">
                <p className="topNum">334篇文章</p>
              </div>
              <div className="title">严选推荐</div>
            </a>
            <a className="item swiper-slide" href="javascript:;">
              <div className="imgContainer channelPic"></div>
              <div className="icon icon-rbGradient">
                <p className="topNum">334篇文章</p>
              </div>
              <div className="title">严选推荐</div>
            </a>
            <a className="item swiper-slide" href="javascript:;">
              <div className="imgContainer channelPic"></div>
              <div className="icon icon-rbGradient">
                <p className="topNum">334篇文章</p>
              </div>
              <div className="title">严选推荐</div>
            </a>
            <a className="item swiper-slide" href="javascript:;">
              <div className="imgContainer channelPic"></div>
              <div className="icon icon-rbGradient">
                <p className="topNum">334篇文章</p>
              </div>
              <div className="title">严选推荐</div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
