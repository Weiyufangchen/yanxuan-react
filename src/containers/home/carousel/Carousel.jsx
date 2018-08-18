/*
首页轮播图组件carousel
 */
import React, {Component} from 'react'
import Swiper from 'swiper'
import {withRouter} from 'react-router-dom'
import LazyLoad from 'react-lazyload'
// import PropTypes from 'prop-types'

import './carousel.styl'

class Carousel extends Component {

  componentDidUpdate() {
    // 判断swiper是否存在，挂载到this上，避免重复创建
    if (!this.swiper) {
      // 首页轮播图
      this.swiper = new Swiper('#carousel', {
        loop: true, // 循环轮播
        zoom: true,
        // 自动轮播
        autoplay: {
          delay: 2000,  // 时长
          disableOnInteraction: false  // 用户操作之后是否停止轮播，false表示继续轮播
        },
        pagination: {
          // 是否需要分页器
          el: '.swiper-pagination'
        }
      });
    }
  }

  render() {
    const focusList = this.props.data
    return (
      <div className="indexFloor">
        <div id="carousel" className='swiper-container-banner'>
          <div className="swiper-wrapper">
            {
              focusList ? (focusList.map(img => {
                return (
                  <div className="swiper-slide" style={{width: 750}} key={img.id}>
                    <a href="javascript:;">
                      <img src={img.picUrl} alt=""/>
                    </a>
                  </div>
                )
              })) : null
            }
          </div>
          {/* Add Pagination */}
          <div className="swiper-pagination"></div>
        </div>
        <div className="service-policy">
          <ul className="grow">
            <li className="item">
              <a href="javascript:;">
                <i></i>
                <span>网易自营品牌</span>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;">
                <i></i>
                <span>30天无忧退货</span>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;">
                <i></i>
                <span>48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Carousel)
