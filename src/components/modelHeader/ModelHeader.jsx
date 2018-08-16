/*
通用的模版头部
 */
import React, {Component} from 'react'
import './modelHeader.styl'

export default class ModelHeader extends Component {
  render () {
    return (
      <header className="hd-one">
        <a className="more" href="javascript:;">
          <span>品牌制造商直供</span>
          <i className="icon icon-go"></i>
        </a>
      </header>
    )
  }
}