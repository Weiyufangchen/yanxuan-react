/*
入口js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route, Switch, HashRouter} from 'react-router-dom'

import Home from './containers/home/Home'
import Shiwu from './containers/shiwu/Shiwu'
import Category from './containers/category/Category'
import Cart from './containers/cart/Cart'
import Profile from './containers/profile/Profile'
import store from './redux/store'
// 引入混合stylus样式
import './assets/stylus/mixins.styl'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/shiwu' component={Shiwu}></Route>
        <Route path='/category' component={Category}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route path='/profile' component={Profile}></Route>
        <Route component={Home}></Route> {/* 默认路由 */}
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
