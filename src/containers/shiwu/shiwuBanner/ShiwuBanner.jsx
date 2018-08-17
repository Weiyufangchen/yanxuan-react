/*
识物轮播图
 */
import React, {Component} from 'react'
import Swiper from 'swiper'

import './shiwuBanner.styl'

export default class ShiwuBanner extends Component {

  componentDidUpdate () {
    new Swiper('.swiper-container-banner1', {
      loop: true,
      zoom: true,
    })
  }

  render () {
    const banner = this.props.data
    return (
      <div className="banner-wrapper">
        <div className="carousel banner">
          <div className="swiper-container-banner1">
            <div className="swiper-wrapper">
              {
                banner ? (
                  banner.map((item, index) => {
                    return (
                      <div className="swiper-slide" style={{width: '690px'}} key={index}>
                        <a href="javascript:;">
                          <img src={item.picUrl} alt=""/>
                          <div className="content">
                            <div className="subTitle">{item.subTitle}</div>
                            <div className="title">{item.title}</div>
                            <div className="desc">{item.desc}</div>
                          </div>
                        </a>
                      </div>
                    )
                  })
                ) : null
              }
            </div>
          {/* Add Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
  </div>
    )
  }
}
