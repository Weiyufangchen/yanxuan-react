/*
品牌制造商直供supply
 */
import React, {Component} from 'react'
import LazyLoad from 'react-lazyload'

import ModelHeader from '../../../components/modelHeader/ModelHeader'
import './supply.styl'

export default class Supply extends Component {
  render() {
    const tagList = this.props.data
    return (
      <div>
        <ModelHeader/>
        <div className="supplying">
          <ul className="list">
            {
              tagList ? (tagList.map(item => {
                return (
                  <li className="item" key={item.id}>
                    <a href="javascript:;">
                      <div className="cnt">
                        <h4 className="title">{item.name}</h4>
                        <div>
                          <span className="price1">{item.floorPrice}</span>
                          <span className="price2">元起</span>
                        </div>
                        {item.newOnshelf ? (<i className="icon icon-new"></i>) : null}
                      </div>
                      <LazyLoad>
                        <img src={item.picUrl} alt=''/>
                      </LazyLoad>
                    </a>
                  </li>
                )
              })) : null
            }
          </ul>
        </div>
      </div>
    )
  }
}
