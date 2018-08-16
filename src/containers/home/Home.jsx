/*
首页路由组件
 */
import React, {Component} from 'react'
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


export default class Home extends Component {
  render () {
    return (
      <div className='home'>
        {/* 头部：搜索导航 */}
        <HomeHeader/>
        {/* 首页轮播图 */}
        <Carousel/>
        <Split/>
        {/* 品牌制造商直供 */}
        <div className='template'>
          <Supply/>
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
              <div className="inner swiper-container-newItem">
                <div className="list swiper-wrapper">
                  <div className="item swiper-slide">
                    <a className="good" href="javascript:;">
                      <div className="hd">
                        <div className="wraper">
                          <img
                            src="http://yanxuan.nosdn.127.net/efaae8a4043638814b76b329647ccd27.png?imageView&quality=65&thumbnail=330x330"/>
                        </div>
                        <div className="desc">两圈相连，永恒相伴</div>
                      </div>
                      <div className="tagWrapper">
                        <p className="status anniversary">七夕推荐</p>
                      </div>
                      <div className="name">
                        <span>牵绊永恒 双环镀金项链</span>
                      </div>
                      <div className="newItemDesc">两圈相连，永恒相伴</div>
                      <div className="price">
                        <div>
                          <span>￥359</span>
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
                  <div className="item swiper-slide">
                    <a className="good" href="javascript:;">
                      <div className="hd">
                        <div className="wraper">
                          <img
                            src="http://yanxuan.nosdn.127.net/efaae8a4043638814b76b329647ccd27.png?imageView&quality=65&thumbnail=330x330"/>
                        </div>
                        <div className="desc">两圈相连，永恒相伴</div>
                      </div>
                      <div className="tagWrapper">
                        <p className="status anniversary">七夕推荐</p>
                      </div>
                      <div className="name">
                        <span>牵绊永恒 双环镀金项链</span>
                      </div>
                      <div className="newItemDesc">两圈相连，永恒相伴</div>
                      <div className="price">
                        <div>
                          <span>￥359</span>
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
                  <div className="item swiper-slide">
                    <a className="good" href="javascript:;">
                      <div className="hd">
                        <div className="wraper">
                          <img
                            src="http://yanxuan.nosdn.127.net/efaae8a4043638814b76b329647ccd27.png?imageView&quality=65&thumbnail=330x330"/>
                        </div>
                        <div className="desc">两圈相连，永恒相伴</div>
                      </div>
                      <div className="tagWrapper">
                        <p className="status anniversary">七夕推荐</p>
                      </div>
                      <div className="name">
                        <span>牵绊永恒 双环镀金项链</span>
                      </div>
                      <div className="newItemDesc">两圈相连，永恒相伴</div>
                      <div className="price">
                        <div>
                          <span>￥359</span>
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
              <div className="inner swiper-container-newItem">
                <div className="list swiper-wrapper">
                  <div className="item swiper-slide">
                    <a className="good" href="javascript:;">
                      <div className="hd">
                        <div className="wraper">
                          <img
                            src="http://yanxuan.nosdn.127.net/efaae8a4043638814b76b329647ccd27.png?imageView&quality=65&thumbnail=330x330"/>
                        </div>
                        <div className="desc">两圈相连，永恒相伴</div>
                      </div>
                      <div className="tagWrapper">
                        <p className="status anniversary">七夕推荐</p>
                      </div>
                      <div className="name">
                        <span>牵绊永恒 双环镀金项链</span>
                      </div>
                      <div className="newItemDesc">两圈相连，永恒相伴</div>
                      <div className="price">
                        <div>
                          <span>￥359</span>
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
                  <div className="item swiper-slide">
                    <a className="good" href="javascript:;">
                      <div className="hd">
                        <div className="wraper">
                          <img
                            src="http://yanxuan.nosdn.127.net/efaae8a4043638814b76b329647ccd27.png?imageView&quality=65&thumbnail=330x330"/>
                        </div>
                        <div className="desc">两圈相连，永恒相伴</div>
                      </div>
                      <div className="tagWrapper">
                        <p className="status anniversary">七夕推荐</p>
                      </div>
                      <div className="name">
                        <span>牵绊永恒 双环镀金项链</span>
                      </div>
                      <div className="newItemDesc">两圈相连，永恒相伴</div>
                      <div className="price">
                        <div>
                          <span>￥359</span>
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
                  <div className="item swiper-slide">
                    <a className="good" href="javascript:;">
                      <div className="hd">
                        <div className="wraper">
                          <img
                            src="http://yanxuan.nosdn.127.net/efaae8a4043638814b76b329647ccd27.png?imageView&quality=65&thumbnail=330x330"/>
                        </div>
                        <div className="desc">两圈相连，永恒相伴</div>
                      </div>
                      <div className="tagWrapper">
                        <p className="status anniversary">七夕推荐</p>
                      </div>
                      <div className="name">
                        <span>牵绊永恒 双环镀金项链</span>
                      </div>
                      <div className="newItemDesc">两圈相连，永恒相伴</div>
                      <div className="price">
                        <div>
                          <span>￥359</span>
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
        <LimitTimeBuy/>
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
            <div className="inner swiper-container">
              <ul className="list swiper-wrapper">
                <li className="item swiper-slide" style={{marginRight: '20.8333px'}}>
                  <a className="imgWrap" href="javascript:;">
                    <img
                      src="https://yanxuan.nosdn.127.net/e4d4520732e4e9aa5c9563f8ecc5e807.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75"
                      alt=""/>
                  </a>
                  <div className="line1">
                    <h4 className="title">内衣决定夏日的舒适</h4>
                    <span className="price">25元起</span>
                  </div>
                  <div className="desc">在最贴身的部位，不舒适怎能过好夏天。</div>
                </li>
                <li className="item swiper-slide" style={{marginRight: '20.8333px'}}>
                  <a className="imgWrap" href="javascript:;">
                    <img
                      src="https://yanxuan.nosdn.127.net/e4d4520732e4e9aa5c9563f8ecc5e807.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75"
                      alt=""/>
                  </a>
                  <div className="line1">
                    <h4 className="title">内衣决定夏日的舒适</h4>
                    <span className="price">25元起</span>
                  </div>
                  <div className="desc">在最贴身的部位，不舒适怎能过好夏天。</div>
                </li>
                <li className="item swiper-slide" style={{marginRight: '20.8333px'}}>
                  <a className="imgWrap" href="javascript:;">
                    <img
                      src="https://yanxuan.nosdn.127.net/e4d4520732e4e9aa5c9563f8ecc5e807.jpg?imageView&thumbnail=575y322&enlarge=1&quality=75"
                      alt=""/>
                  </a>
                  <div className="line1">
                    <h4 className="title">内衣决定夏日的舒适</h4>
                    <span className="price">25元起</span>
                  </div>
                  <div className="desc">在最贴身的部位，不舒适怎能过好夏天。</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Split/>
        {/* 居家好物 */}
        <div className="template">
          <div className="titleGoodGrid">
            <h3 className="title">居家好物</h3>
            <div className="goodGrid">
              <ul className="list">
                <li className="item"
                    style={{zIndex: '6', padding: '0rem 0.26666666666666666rem 0.44rem 0.13333333333333333rem'}}>
                  <a className="good" href="javascript:;">
                    <div className="hd-jujia">
                      <div className="wraper">
                        <img
                          src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330"
                          alt=""/>
                        <div className="desc">硬度偏好者优选</div>
                      </div>
                    </div>
                    <div className="tagWrapper">
                      <p className="status gradientPrice">居家特惠</p>
                    </div>
                    <div className="name">
                      <span>冬夏两用 护脊椰棕弹簧床垫</span>
                    </div>
                    <div className="newItemDesc">硬度偏好者优选</div>
                    <div className="price">
                      <span>￥2099</span>
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
                <li className="item"
                    style={{zIndex: '6', padding: '0rem 0.26666666666666666rem 0.44rem 0.13333333333333333rem'}}>
                  <a className="good" href="javascript:;">
                    <div className="hd-jujia">
                      <div className="wraper">
                        <img
                          src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330"
                          alt=""/>
                        <div className="desc">硬度偏好者优选</div>
                      </div>
                    </div>
                    <div className="tagWrapper">
                      <p className="status gradientPrice">居家特惠</p>
                    </div>
                    <div className="name">
                      <span>冬夏两用 护脊椰棕弹簧床垫</span>
                    </div>
                    <div className="newItemDesc">硬度偏好者优选</div>
                    <div className="price">
                      <span>￥2099</span>
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
                <li className="item"
                    style={{zIndex: '6', padding: '0rem 0.26666666666666666rem 0.44rem 0.13333333333333333rem'}}>
                  <a className="good" href="javascript:;">
                    <div className="hd-jujia">
                      <div className="wraper">
                        <img
                          src="http://yanxuan.nosdn.127.net/05ecfb1f8beff52a1aa4e48b21dda530.png?imageView&quality=65&thumbnail=330x330"
                          alt=""/>
                        <div className="desc">硬度偏好者优选</div>
                      </div>
                    </div>
                    <div className="tagWrapper">
                      <p className="status gradientPrice">居家特惠</p>
                    </div>
                    <div className="name">
                      <span>冬夏两用 护脊椰棕弹簧床垫</span>
                    </div>
                    <div className="newItemDesc">硬度偏好者优选</div>
                    <div className="price">
                      <span>￥2099</span>
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
                <li className="item item-more">
                  <a className="more moreH" href="javascript:;">
                    <p className="txt">更多居家好物</p>
                    <i className="icon icon-goodGridMore"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Split/>
        {/* 鞋包配饰好物 */}
        {/* 服装好物 */}
        {/* 电器好物 */}
        {/* 洗护好物 */}
        {/* 饮食好物 */}
        {/* 餐厨好物 */}
        {/* 婴童好物 */}
        {/* 文体好物 */}
        {/* 特色区好物 */}
        {/* 下载App/电脑版 */}

        {/* 底部导航栏 */}
        <FooterGuide/>
      </div>
    );
  }
}
