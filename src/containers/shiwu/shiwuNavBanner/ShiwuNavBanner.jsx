/*
识物页面导航轮播图
 */

import React, {Component} from 'react'
import Swiper from 'swiper'

import './shiwuNavBanner.styl'

export default class ShiwuNavBanner extends Component {

  componentDidUpdate () {
    new Swiper('.swiper-container-banner2', {
      slidesPerView: 'auto',
      centeredSlides: false
    })
  }

  render () {
    const {column} = this.props
    return (
      <div className="exploreChannels">
        <div className="swiper-container-banner2">
          <div className="list swiper-wrapper">
            {
              column ? (
                column.map((item, index) => {
                  return (
                    <a className="item swiper-slide" key={index} href="javascript:;">
                      <div className="imgContainer channelPic"
                        style={{backgroundImage: 'url('+ item.picUrl +')'}}
                      ></div>
                      <div className="icon icon-rbGradient">
                        <p className="topNum">{item.articleCount}</p>
                      </div>
                      <div className="title">{item.title}</div>
                    </a>
                  )
                })
              ) : null
            }
          </div>
        </div>
      </div>
    )
  }
}
