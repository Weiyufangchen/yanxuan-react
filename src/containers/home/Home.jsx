/*
首页路由组件
 */
import React, {Component} from 'react'
import Swiper from 'swiper'
import {connect} from 'react-redux'
import LazyLoad from 'react-lazyload'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'

import {getHomeData, getTopicData, getNavData} from '../../redux/actions'
// 引入样式
import './home.styl'
// 引入自定义模块组件
import HomeHeader from '../../components/homeHeader/HomeHeader'
import Carousel from './carousel/Carousel'
import Supply from './supply/Supply'
import Split from '../../components/split/Split'
import LimitTimeBuy from '../../components/limitTimeBuy/LimitTimeBuy'
import Weal from '../../components/weal/Weal'
import FooterGuide from '../../components/footerGuide/FooterGuide'
import GoTop from '../../components/goTop/GoTop'

class Home extends Component {

  state = {
    isShow: false,  // 默认不显示
    scrollTop: 0  // 滚动位移
  }

  componentDidMount() {
    this.props.getHomeData()
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    // console.log('浏览器滚动事件', window.pageYOffset)
    if (window.pageYOffset >= 800) {
      this.setState({
        isShow: true,
        scrollTop: window.pageYOffset
      });
    } else {
      this.setState({
        isShow: false,
        scrollTop: window.pageYOffset
      })
    }
  }

  componentDidUpdate() {
    new Swiper('.homeCarousel', {
      slidesPerView: 'auto',
      centeredSlides: false,
      zoom: true
    })
    new Swiper('.homeCarousel-topic', {
      slidesPerView: 'auto',
      centeredSlides: false,
      spaceBetween: 30
    })
  }


  render() {
    const {isShow, scrollTop} = this.state
    const {homeData} = this.props
    const {focusList, tagList, newItemNewUserList, popularItemList, flashSaleIndexVO, topicList, cateList} = homeData;
    return (
      <div className='home' ref='home'>
        {/* 头部：搜索导航 */}
        <HomeHeader/>
        {/* 首页轮播图 */}
        <Carousel data={focusList}/>
        <Split/>
        {/* 品牌制造商直供 */}
        <div className='template'>
          <Supply data={tagList}/>
        </div>
        <Split/>
        {/* 新品首发 */}
        <div className='template'>
          <div className='newItems'>
            <header className="hd">
              <a className="more" href="javascript:;">
                <span>新品首发</span>
                <div className="all">
              <span className="wrap">
                <span>查看全部</span>
                <i className="arrow-right"></i>
              </span>
                </div>
              </a>
            </header>
            <div className="goodGrid goodGrid-goodsList">
              <div className="inner swiper-container homeCarousel">
                <div className="list swiper-wrapper">
                  {
                    newItemNewUserList ? (
                      newItemNewUserList.map(item => {
                        return (
                          <div className="item swiper-slide" key={item.id}>
                            <a className="good" href="javascript:;">
                              <div className="hd">
                                <div className="wraper">
                                  <img src={item.listPicUrl}/>
                                </div>
                                <div className="desc">{item.simpleDesc}</div>
                              </div>
                              <div className="tagWrapper">
                                <p className="status anniversary">七夕推荐</p>
                              </div>
                              <div className="name">
                                <span>{item.name}</span>
                              </div>
                              <div className="newItemDesc">{item.simpleDesc}</div>
                              <div className="price">
                                <div>
                                  <span>￥{item.retailPrice}</span>
                                </div>
                              </div>
                              <span></span>
                              <div className="specification">
                                <div>3</div>
                                <div>色</div>
                                <div>可</div>
                                <div>选</div>
                              </div>
                            </a>
                          </div>
                        )
                      })
                    ) : null
                  }
                  <div className="item swiper-slide more">
                    <a href="javascript:;" style={{display: 'block', width: '100%', height: '100%',}}>
                      <span className="text">查看全部</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Split/>
        {/* 人气推荐 */}
        <div className="template">  {/*加一个类template，给组件添加背景色白色*/}
          <div className='popularItemList'>
            <header className="hd">
              <a className="more" href="javascript:;">
                <span>人气推荐 · 好物精选</span>
                <div className="all">
              <span className="wrap">
                <span>查看全部</span>
                <i className="arrow-right"></i>
              </span>
                </div>
              </a>
            </header>
            <div className="goodGrid goodGrid-goodsList">
              <div className="inner swiper-container homeCarousel">
                <div className="list swiper-wrapper">
                  {
                    popularItemList ? (
                      popularItemList.map(item => {
                        return (
                          <div className="item swiper-slide" key={item.id}>
                            <a className="good" href="javascript:;">
                              <div className="hd">
                                <div className="wraper">
                                  <img
                                    src={item.listPicUrl}/>
                                </div>
                                <div className="desc">{item.simpleDesc}</div>
                              </div>
                              <div className="tagWrapper">
                                <p className="status anniversary">七夕推荐</p>
                              </div>
                              <div className="name">
                                <span>{item.name}</span>
                              </div>
                              <div className="newItemDesc">{item.simpleDesc}</div>
                              <div className="price">
                                <div>
                                  <span>￥{item.retailPrice}</span>
                                </div>
                              </div>
                              <span></span>
                              <div className="specification">
                                <div>3</div>
                                <div>色</div>
                                <div>可</div>
                                <div>选</div>
                              </div>
                            </a>
                          </div>
                        )
                      })
                    ) : null
                  }
                  <div className="item swiper-slide more">
                    <a href="javascript:;" style={{display: 'block', width: '100%', height: '100%',}}>
                      <span className="text">查看全部</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Split/>
        {/* 限时购 */}
        <LimitTimeBuy data={flashSaleIndexVO}/>
        <Split/>
        {/* 福利社 */}
        <Weal/>
        <Split/>
        {/* 专题精选 */}
        <div className="template">
          <header className="hd">
            <a className="more" href="javascript:;">
              <span>专题精选</span>
              <i className="icon icon-go"></i>
            </a>
          </header>
          <div className="indexTopics-slide">
            <div className="inner swiper-container homeCarousel-topic">
              <ul className="list swiper-wrapper">
                {
                  topicList ? (topicList.map(item => {
                      return (
                        <li className="item swiper-slide" key={item.id}>
                          <a className="imgWrap" href="javascript:;">
                            <img src={item.itemPicUrl} alt=""/>
                          </a>
                          <div className="line1">
                            <h4 className="title">{item.title}</h4>
                            <span className="price">{item.priceInfo}元起</span>
                          </div>
                          <div className="desc">{item.subtitle}</div>
                        </li>
                      )
                    })
                  ) : null
                }
              </ul>
            </div>
          </div>
        </div>
        <Split/>
        {/* 居家好物 */} {/* 遍历所有好物组件 */}
        {
          cateList ? (
            cateList.map(list => {
              return (
                <div key={list.id}>
                  <div className="template">
                    <div className="titleGoodGrid">
                      <h3 className="title">{list.name}好物</h3>
                      <div className="goodGrid">
                        <ul className="list">
                          {
                            list.itemList.slice(0, 7).map(item => {
                              return (
                                <li className="item" key={item.id}
                                    style={{
                                      zIndex: '6',
                                      padding: '0rem 0.26666666666666666rem 0.44rem 0.13333333333333333rem'
                                    }}>
                                  <a className="good" href="javascript:;">
                                    <div className="hd-jujia">
                                      <div className="wraper">
                                        <img
                                          src={item.listPicUrl}
                                          alt=""/>
                                        <div className="desc">{item.simpleDesc}</div>
                                      </div>
                                    </div>
                                    <div className="tagWrapper">
                                      <p className="status gradientPrice">{list.name}特惠</p>
                                    </div>
                                    <div className="name">
                                      <span>{item.name}</span>
                                    </div>
                                    <div className="newItemDesc">{item.simpleDesc}</div>
                                    <div className="price">
                                      <span>￥{item.retailPrice}</span>
                                    </div>
                                    <span></span>
                                    <div className="specification">
                                      <div>3</div>
                                      <div>色</div>
                                      <div>可</div>
                                      <div>选</div>
                                    </div>
                                  </a>
                                </li>
                              )
                            })
                          }
                          <li className="item item-more">
                            <a className="more moreH" href="javascript:;">
                              <p className="txt">更多{list.name}好物</p>
                              <i className="icon icon-goodGridMore"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Split/>
                </div>
              )
            })
          ) : null
        }
        {/* 回到顶部 */}
        <GoTop isShow={isShow} scrollTop={scrollTop}/>
        {/* 底部导航栏 */}
        <FooterGuide/>
      </div>
    );
  }
}

// connect包装UI组件为容器组件
export default connect(
  // 更新获取状态
  state => ({homeData: state.homeData}),
  // 异步action，通知actions对象，发送ajax请求
  {getHomeData, getTopicData, getNavData}
)(Home)
