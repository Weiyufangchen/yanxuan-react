/*
品牌制造商直供supply
 */
import React, {Component} from 'react'
import ModelHeader from '../../../components/modelHeader/ModelHeader'
import './supply.styl'

export default class Supply extends Component {
  render() {
    return (
      <div>
        <ModelHeader/>
        <div className="supplying">
          <ul className="list">
            <li className="item">
              <a href="javascript:;">
                <div className="cnt">
                  <h4 className="title">海外制造商</h4>
                  <div>
                    <span className="price1">9.9</span>
                    <span className="price2">元起</span>
                  </div>
                  <i className="icon icon-new"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/5e2f6d68ca4cf25b18d6573eafa2a4d4.png?imageView&thumbnail=355x0&quality=65" alt="supply"/>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;">
                <div className="cnt">
                  <h4 className="title">海外制造商</h4>
                  <div>
                    <span className="price1">9.9</span>
                    <span className="price2">元起</span>
                  </div>
                  <i className="icon icon-new"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/5e2f6d68ca4cf25b18d6573eafa2a4d4.png?imageView&thumbnail=355x0&quality=65" alt="supply"/>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;">
                <div className="cnt">
                  <h4 className="title">海外制造商</h4>
                  <div>
                    <span className="price1">9.9</span>
                    <span className="price2">元起</span>
                  </div>
                  <i className="icon icon-new"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/5e2f6d68ca4cf25b18d6573eafa2a4d4.png?imageView&thumbnail=355x0&quality=65" alt="supply"/>
              </a>
            </li>
            <li className="item">
              <a href="javascript:;">
                <div className="cnt">
                  <h4 className="title">海外制造商</h4>
                  <div>
                    <span className="price1">9.9</span>
                    <span className="price2">元起</span>
                  </div>
                  <i className="icon icon-new"></i>
                </div>
                <img src="http://yanxuan.nosdn.127.net/5e2f6d68ca4cf25b18d6573eafa2a4d4.png?imageView&thumbnail=355x0&quality=65" alt="supply"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
