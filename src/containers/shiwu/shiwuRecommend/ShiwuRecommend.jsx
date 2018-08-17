/*
识物recommend
 */
import React, {Component} from 'react'
import Swiper from 'swiper'

import './shiwuRecommend.styl'

export default class ShiwuRecommend extends Component {

  componentDidMount () {
    new Swiper('.swiper-container-tenFifteen', {
      slidesPerView: 'auto',
      centeredSlides: false
    })
  }

  render () {
    return (
      <div id='shiwuRecommends'>
        {/* 为你推荐 */}
        <div className="recommends">
          <div className="container">
            <div className="module-title">为你推荐</div>
            {/* mainPosItem */}
            <a className="mainPosItem" href="javascript:;">
              <div className="imgContainer mainPic">
                <img className='mainImg' alt="" src="http://yanxuan.nosdn.127.net/9c16d0d118f00d9db00fa6414aea0487.jpg?imageView&quality=75"/>
                <div className="topicTag">
                  <p className="exploreTag">严选推荐</p>
                </div>
              </div>
              <div className="topicInfo" style={{paddingBottom:'0.8933333333333333rem'}}>
                <div className="line1">
                  <span className="title">严选恋爱博物馆</span>
                  <span className="price">9.9元起</span>
                </div>
                <div className="line2">
                  <div className="subTitle">40款恋爱小甜饼高甜来袭！</div>
                </div>
              </div>
            </a>
            {/* minorPosItem */}
            <a className="minorPosItem" href="javascript:;">
              <div className="topicInfo">
                <div className="author-container">
                  <div className="author">
                    <div className="avatar">
                      <img src="//yanxuan.nosdn.127.net/45edf343a898f4a14d6d3086ce7d6ce8.png?imageView&quality=75&thumbnail=48y48" alt=""/>
                    </div>
                    <div className="nickname">丁磊</div>
                  </div>
                </div>
                <div className="line1">
                  <p className="title">今年七夕送什么？</p>
                </div>
                <div className="line2">
                  <p className="subTitle twolines">七夕女生零食礼盒，限量98元</p>
                </div>
              </div>
              <div className="minorPic">
                <div className="imgContainer">
                  <img className='minorImg' src="//yanxuan.nosdn.127.net/ab35bcd18efd1a042d08dfe3d2438ea9.jpg?imageView&quality=75" alt=""/>
                  <div className="topicTag">
                    <div className="exploreTag">丁磊的好货推荐</div>
                  </div>
                </div>
              </div>
            </a>
            {/* mainPosItem */}
            <a className="mainPosItem" href="javascript:;">
              <div className="imgContainer mainPic">
                <img className='mainImg' alt="" src="http://yanxuan.nosdn.127.net/9c16d0d118f00d9db00fa6414aea0487.jpg?imageView&quality=75"/>
                <div className="topicTag">
                  <p className="exploreTag">严选推荐</p>
                </div>
              </div>
              <div className="topicInfo" style={{paddingBottom:'0.8933333333333333rem'}}>
                <div className="line1">
                  <span className="title">严选恋爱博物馆</span>
                  <span className="price">9.9元起</span>
                </div>
                <div className="line2">
                  <div className="subTitle">40款恋爱小甜饼高甜来袭！</div>
                </div>
              </div>
            </a>
            {/* minorPosItem */}
            <a className="minorPosItem" href="javascript:;">
              <div className="topicInfo">
                <div className="author-container">
                  <div className="author">
                    <div className="avatar">
                      <img src="//yanxuan.nosdn.127.net/45edf343a898f4a14d6d3086ce7d6ce8.png?imageView&quality=75&thumbnail=48y48" alt=""/>
                    </div>
                    <div className="nickname">丁磊</div>
                  </div>
                </div>
                <div className="line1">
                  <p className="title">今年七夕送什么？</p>
                </div>
                <div className="line2">
                  <p className="subTitle twolines">七夕女生零食礼盒，限量98元</p>
                </div>
              </div>
              <div className="minorPic">
                <div className="imgContainer">
                  <img className='minorImg' src="//yanxuan.nosdn.127.net/ab35bcd18efd1a042d08dfe3d2438ea9.jpg?imageView&quality=75" alt=""/>
                  <div className="topicTag">
                    <div className="exploreTag">丁磊的好货推荐</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* tenFifteen */}
        <div className="tenFifteen">
          <div className="inner">
            <div className="module-title">十点一刻</div>
            <div className="swiper-container-tenFifteen">
              <div className="list swiper-wrapper">
                <a className="item swiper-slide icon-tenFifteen" href="javascript:;">
                  <div className="line-title">
                    <span className="inner">今日话题</span>
                  </div>
                  <div className="title">你有哪些租房经历</div>
                  <div className="desc">聊聊你用过的租房神器</div>
                  <div className="joinInfo">
                    <div className="inner">
                      <div className="avatars">
                        <div className="avatar">
                          <img src="//yanxuan.nosdn.127.net/043087c63976c7631b0417d9916eae9a.jpg?imageView&thumbnail=48y48" alt=""/>
                        </div>
                        <div className="avatar">
                          <img src="//yanxuan.nosdn.127.net/043087c63976c7631b0417d9916eae9a.jpg?imageView&thumbnail=48y48" alt=""/>
                        </div>
                        <div className="avatar">
                          <img src="//yanxuan.nosdn.127.net/043087c63976c7631b0417d9916eae9a.jpg?imageView&thumbnail=48y48" alt=""/>
                        </div>
                        <div className="avatar" style={{zIndex: '0'}}>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      </div>
                      <div className="join">482人参与话题</div>
                    </div>
                  </div>
                </a>
                <a className="item swiper-slide" href="javascript:;">
                  <div className="inner">
                    <p className="txt">查看全部话题</p>
                    <i className="icon-circle-right-arrow"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* recommends */}
        <div className="recommends">
          <div className="container">
            <div className="module-title">严选甄品</div>
            {/* mainPosItem */}
            <a className="mainPosItem" href="javascript:;">
              <div className="imgContainer mainPic">
                <img src="http://yanxuan.nosdn.127.net/9c16d0d118f00d9db00fa6414aea0487.jpg?imageView&quality=75"
                     alt=""/>
                <div className="topicTag">
                  <p className="exploreTag">严选推荐</p>
                </div>
              </div>
              <div className="topicInfo" style={{paddingBottom:'0.8933333333333333rem'}}>
                <div className="line1">
                  <span className="title">严选恋爱博物馆</span>
                  <span className="price">9.9元起</span>
                </div>
                <div className="line2">
                  <div className="subTitle">40款恋爱小甜饼高甜来袭！</div>
                </div>
              </div>
            </a>
            {/* minorPosItem */}
            <a className="minorPosItem" href="javascript:;">
              <div className="topicInfo">
                <div className="author-container">
                  <div className="author">
                    <div className="avatar">
                      <img src="//yanxuan.nosdn.127.net/45edf343a898f4a14d6d3086ce7d6ce8.png?imageView&quality=75&thumbnail=48y48" alt=""/>
                    </div>
                    <div className="nickname">丁磊</div>
                  </div>
                </div>
                <div className="line1">
                  <p className="title">今年七夕送什么？</p>
                </div>
                <div className="line2">
                  <p className="subTitle twolines">七夕女生零食礼盒，限量98元</p>
                </div>
              </div>
              <div className="minorPic">
                <div className="imgContainer">
                  <img src="//yanxuan.nosdn.127.net/ab35bcd18efd1a042d08dfe3d2438ea9.jpg?imageView&quality=75" alt=""/>
                  <div className="topicTag">
                    <div className="exploreTag">丁磊的好货推荐</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* look */}
        <div className="look">
          <div className="module-title">严选LOOK</div>
          <a className="content" href="javascript:;">
            <div className="imgWrap">
              <img src="//yanxuan.nosdn.127.net/8e1f8b6e0c7a06c863935613ae090e9d.jpg?imageView&quality=75" alt=""/>
            </div>
            <div className="topicInfo">
              <div className="author-container">
                <div className="author">
                  <div className="avatar">
                    <img src="//yanxuan.nosdn.127.net/45edf343a898f4a14d6d3086ce7d6ce8.png?imageView&quality=75&thumbnail=48y48" alt=""/>
                  </div>
                  <div className="nickname">丁磊</div>
                </div>
              </div>
              <div className="desc">美美哒，主子很满意，不时啃一啃，解决喵与花不可得兼的困扰😂</div>
            </div>
          </a>
        </div>
        {/* exploreMore */}
        <div className="exploreMore">
          <div className="line-title">
            <div className="inner">更多精彩</div>
          </div>
          <div className="content">
            <a className="topicItem" href="javascript:;">
              <div className="imgContainer onePic">
                <img src="//yanxuan.nosdn.127.net/2ff7bd412d5537ee17fa46619ae48f4e.jpg?imageView&quality=75" alt=""/>
              </div>
              <div className="desc">40款恋爱小甜饼高甜来袭！</div>
            </a>
            <a className="topicItem" href="javascript:;">
              <div className="imgContainer onePic">
                <img src="//yanxuan.nosdn.127.net/2ff7bd412d5537ee17fa46619ae48f4e.jpg?imageView&quality=75" alt=""/>
              </div>
              <div className="desc">40款恋爱小甜饼高甜来袭！</div>
            </a>
            <a className="topicItem" href="javascript:;">
              <div className="imgContainer onePic">
                <img src="//yanxuan.nosdn.127.net/2ff7bd412d5537ee17fa46619ae48f4e.jpg?imageView&quality=75" alt=""/>
              </div>
              <div className="desc">40款恋爱小甜饼高甜来袭！</div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
