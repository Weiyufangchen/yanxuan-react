/*
category头部
 */
import React, {Component} from 'react'

import './categoryHeader.styl'

export default class CategoryHeader extends Component {
  render () {
    return (
      <div className="hdWraper" style={{height: '88px'}}>
        <div className="hd">
          <div className="itemCateListHd">
            <div className="topSearchIpt ipt">
              <i className="icon"></i>
              <span className="placeholder">搜索商品, 共11991款好物</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

