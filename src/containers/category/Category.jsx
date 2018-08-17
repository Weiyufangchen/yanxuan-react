/*
商品分类路由组件
 */
import React, {Component} from 'react'

import CategoryHeader from '../../components/categoryHeader/CategoryHeader'
import FooterGuide from '../../components/footerGuide/FooterGuide'

export default class Category extends Component {
  render () {
    return (
      <div>
        <CategoryHeader/>
        <FooterGuide/>
      </div>
    )
  }
}
