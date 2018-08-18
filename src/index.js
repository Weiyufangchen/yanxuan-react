/*
入口js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Switch, HashRouter, Redirect} from 'react-router-dom'

import Home from './containers/home/Home'
import Shiwu from './containers/shiwu/Shiwu'
import Category from './containers/category/Category'
import Cart from './containers/cart/Cart'
import Profile from './containers/profile/Profile'
import PhoneLogin from './containers/phoneLogin/PhoneLogin'
import EmailLogin from './containers/emailLogin/EmailLogin'

import store from './redux/store'
// 引入mock文件
import './mock/mockServer'
// 引入混合stylus样式
import './assets/css/stylus/mixins.styl'
import 'swiper/dist/css/swiper.css'
import './assets/css/reset.css'
import './assets/css/index.css'
import './assets/js/index'
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/phonelogin' component={PhoneLogin}/>
        <Route path='/emaillogin' component={EmailLogin}/>
        <Route path='/home' component={Home}/>
        <Route path='/shiwu' component={Shiwu}/>
        <Route path='/category' component={Category}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/profile' component={Profile}/>
        <Redirect to='/home'/> {/* 默认路由 */}
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
