/*
识物recommend
 */
import React, {Component} from 'react'
import Swiper from 'swiper'

import './shiwuRecommend.styl'

export default class ShiwuRecommend extends Component {

  componentDidUpdate() {
    new Swiper('.swiper-container-tenFifteen', {
      slidesPerView: 'auto',
      centeredSlides: false
    })
  }

  render() {
    const {recommend, tenfifteen, zhen, yxLook, findMore} = this.props.topicData
    return (
      <div id='shiwuRecommends'>
        {/* 为你推荐 */}
        {recommend && (<div className="recommends">
          <div className="container">
            <div className="module-title">{recommend.name}</div>
            {/* mainPosItem */}
            <a className="mainPosItem" href="javascript:;">
              <div className="imgContainer mainPic">
                <img className='mainImg' alt=""
                     src="http://yanxuan.nosdn.127.net/9c16d0d118f00d9db00fa6414aea0487.jpg?imageView&quality=75"/>
                <div className="topicTag">
                  <p className="exploreTag">{recommend.Item[0].nickname}</p>
                </div>
              </div>
              <div className="topicInfo" style={{paddingBottom: '0.8933333333333333rem'}}>
                <div className="line1">
                  <span className="title">{recommend.Item[0].title}</span>
                  <span className="price">{recommend.Item[0].priceInfo}元起</span>
                </div>
                <div className="line2">
                  <div className="subTitle">{recommend.Item[0].subTitle}</div>
                </div>
              </div>
            </a>
            {/* minorPosItem */}
            <a className="minorPosItem" href="javascript:;">
              <div className="topicInfo">
                <div className="author-container">
                  <div className="author">
                    <div className="avatar">
                      <img src={recommend.Item[1].avatar} alt=""/>
                    </div>
                    <div className="nickname">{recommend.Item[1].nickname}</div>
                  </div>
                </div>
                <div className="line1">
                  <p className="title">{recommend.Item[1].title}</p>
                </div>
                <div className="line2">
                  <p className="subTitle twolines">{recommend.Item[1].subTitle}</p>
                </div>
              </div>
              <div className="minorPic">
                <div className="imgContainer">
                  <img className='minorImg' src={recommend.Item[1].picUrl} alt=""/>
                  <div className="topicTag">
                    <div className="exploreTag">{recommend.Item[1].typeName}</div>
                  </div>
                </div>
              </div>
            </a>
            <a className="minorPosItem" href="javascript:;">
              <div className="topicInfo">
                <div className="author-container">
                  <div className="author">
                    <div className="avatar">
                      <img src={recommend.Item[2].avatar} alt=""/>
                    </div>
                    <div className="nickname">{recommend.Item[2].nickname}</div>
                  </div>
                </div>
                <div className="line1">
                  <p className="title">{recommend.Item[2].title}</p>
                </div>
                <div className="line2">
                  <p className="subTitle twolines">{recommend.Item[2].subTitle}</p>
                </div>
              </div>
              <div className="minorPic">
                <div className="imgContainer">
                  <img className='minorImg' src={recommend.Item[2].picUrl} alt=""/>
                  <div className="topicTag">
                    <div className="exploreTag">{recommend.Item[2].typeName}</div>
                  </div>
                </div>
              </div>
            </a>
            {/* mainPosItem */}
            <a className="mainPosItem" href="javascript:;">
              <div className="imgContainer mainPic">
                <img className='mainImg' alt=""
                     src="http://yanxuan.nosdn.127.net/9c16d0d118f00d9db00fa6414aea0487.jpg?imageView&quality=75"/>
                <div className="topicTag">
                  <p className="exploreTag">{recommend.Item[0].nickname}</p>
                </div>
              </div>
              <div className="topicInfo" style={{paddingBottom: '0.8933333333333333rem'}}>
                <div className="line1">
                  <span className="title">{recommend.Item[0].title}</span>
                  <span className="price">{recommend.Item[0].priceInfo}元起</span>
                </div>
                <div className="line2">
                  <div className="subTitle">{recommend.Item[0].subTitle}</div>
                </div>
              </div>
            </a>
            {/* minorPosItem */}
            <a className="minorPosItem" href="javascript:;">
              <div className="topicInfo">
                <div className="author-container">
                  <div className="author">
                    <div className="avatar">
                      <img src={recommend.Item[1].avatar} alt=""/>
                    </div>
                    <div className="nickname">{recommend.Item[1].nickname}</div>
                  </div>
                </div>
                <div className="line1">
                  <p className="title">{recommend.Item[1].title}</p>
                </div>
                <div className="line2">
                  <p className="subTitle twolines">{recommend.Item[1].subTitle}</p>
                </div>
              </div>
              <div className="minorPic">
                <div className="imgContainer">
                  <img className='minorImg' src={recommend.Item[1].picUrl} alt=""/>
                  <div className="topicTag">
                    <div className="exploreTag">{recommend.Item[1].typeName}</div>
                  </div>
                </div>
              </div>
            </a>
            <a className="minorPosItem" href="javascript:;">
              <div className="topicInfo">
                <div className="author-container">
                  <div className="author">
                    <div className="avatar">
                      <img src={recommend.Item[2].avatar} alt=""/>
                    </div>
                    <div className="nickname">{recommend.Item[2].nickname}</div>
                  </div>
                </div>
                <div className="line1">
                  <p className="title">{recommend.Item[2].title}</p>
                </div>
                <div className="line2">
                  <p className="subTitle twolines">{recommend.Item[2].subTitle}</p>
                </div>
              </div>
              <div className="minorPic">
                <div className="imgContainer">
                  <img className='minorImg' src={recommend.Item[2].picUrl} alt=""/>
                  <div className="topicTag">
                    <div className="exploreTag">{recommend.Item[2].typeName}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>) }
        {/* tenFifteen */}
        <div className="tenFifteen">
          <div className="inner">
            <div className="module-title">十点一刻</div>
            <div className="swiper-container-tenFifteen">
              <div className="list swiper-wrapper">
                {
                  tenfifteen && (tenfifteen.map((item, index) => {
                      return (
                        <a key={index} className="item swiper-slide icon-tenFifteen" href="javascript:;">
                          <div className="line-title">
                            <span className="inner">今日话题</span>
                          </div>
                          <div className="title">{item.title}</div>
                          <div className="desc">{item.desc}</div>
                          <div className="joinInfo">
                            <div className="inner">
                              <div className="avatars">
                                {
                                  item.participantAvatar.map((itemAvatar, index) => {
                                    if (itemAvatar) {
                                      return (
                                        <div className="avatar" key={index}>
                                          <img src={itemAvatar} alt=""/>
                                        </div>
                                      )
                                    }
                                  })
                                }
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
                      )
                    })
                  )
                }
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
        {zhen && (<div className="recommends">
          <div className="container">
            <div className="module-title">{zhen.name}</div>
            {/* mainPosItem */}
            <a className="mainPosItem" href="javascript:;">
              <div className="imgContainer mainPic">
                <img className='mainImg' alt=""
                     src="http://yanxuan.nosdn.127.net/9c16d0d118f00d9db00fa6414aea0487.jpg?imageView&quality=75"/>
                <div className="topicTag">
                  <p className="exploreTag">{zhen.Item[0].nickname}</p>
                </div>
              </div>
              <div className="topicInfo" style={{paddingBottom: '0.8933333333333333rem'}}>
                <div className="line1">
                  <span className="title">{zhen.Item[0].title}</span>
                  <span className="price">{zhen.Item[0].priceInfo}元起</span>
                </div>
                <div className="line2">
                  <div className="subTitle">{zhen.Item[0].subTitle}</div>
                </div>
              </div>
            </a>
            {/* minorPosItem */}
            <a className="minorPosItem" href="javascript:;">
              <div className="topicInfo">
                <div className="author-container">
                  <div className="author">
                    <div className="avatar">
                      <img src={zhen.Item[1].avatar} alt=""/>
                    </div>
                    <div className="nickname">{zhen.Item[1].nickname}</div>
                  </div>
                </div>
                <div className="line1">
                  <p className="title">{zhen.Item[1].title}</p>
                </div>
                <div className="line2">
                  <p className="subTitle twolines">{zhen.Item[1].subTitle}</p>
                </div>
              </div>
              <div className="minorPic">
                <div className="imgContainer">
                  <img className='minorImg' src={zhen.Item[1].picUrl} alt=""/>
                  <div className="topicTag">
                    <div className="exploreTag">{zhen.Item[1].typeName}</div>
                  </div>
                </div>
              </div>
            </a>
            <a className="minorPosItem" href="javascript:;">
              <div className="topicInfo">
                <div className="author-container">
                  <div className="author">
                    <div className="avatar">
                      <img src={zhen.Item[2].avatar} alt=""/>
                    </div>
                    <div className="nickname">{zhen.Item[2].nickname}</div>
                  </div>
                </div>
                <div className="line1">
                  <p className="title">{zhen.Item[2].title}</p>
                </div>
                <div className="line2">
                  <p className="subTitle twolines">{zhen.Item[2].subTitle}</p>
                </div>
              </div>
              <div className="minorPic">
                <div className="imgContainer">
                  <img className='minorImg' src={zhen.Item[2].picUrl} alt=""/>
                  <div className="topicTag">
                    <div className="exploreTag">{zhen.Item[2].typeName}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>)}
        {/* look */}
        {yxLook && (<div className="look">
          <div className="module-title">{yxLook.title}</div>
          <a className="content" href="javascript:;">
            <div className="imgWrap">
              <img src={yxLook.picUrl} alt=""/>
            </div>
            <div className="topicInfo">
              <div className="author-container">
                <div className="author">
                  <div className="avatar">
                    <img src={yxLook.avatar} alt=""/>
                  </div>
                  <div className="nickname">{yxLook.nickname}</div>
                </div>
              </div>
              <div className="desc">{yxLook.content}</div>
            </div>
          </a>
        </div>)}
        {/* exploreMore */}
        <div className="exploreMore">
          <div className="line-title">
            <div className="inner">更多精彩</div>
          </div>
          <div className="content">
            {
              findMore && findMore.map(item => {
                return (
                  <a className="topicItem" href="javascript:;" key={item.topicId}>
                    <div className="imgContainer onePic">
                      <img src={item.itemPicUrl} alt=""/>
                    </div>
                    <div className="desc">{item.subTitle}</div>
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
