/*
首页轮播图组件carousel
 */
import React, {Component} from 'react'

import './carousel.styl'

export default class Carousel extends Component {
  render() {
    return (
      <div className="indexFloor">
        <div id="carousel">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style={{width: 750}}>
              <a href="javascript:;">
                <img
                  src="https://yanxuan.nosdn.127.net/95cc387d8e06fc708ce8ae7066b9478e.jpg?imageView&thumbnail=750x0&quality=75"
                  alt="image"/>
              </a>
            </div>
            {/* Add Pagination */}
            <div className="swiper-pagination" slot="pagination"></div>
          </div>
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
