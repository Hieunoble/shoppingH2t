import React from 'react'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Product from '../product/Product'


const MainContent = () => {
  return (
    <div>
      <div className="main-product">
        <div className="product-container">
          <div className="collection-body">
            <div className="collection-detail">
              <div className="collection-title">
                <div className="heading-collection-title">
                  <h1 className="title">SALE 75%</h1>
                  <div className="sorted">
                    <label htmlFor=""></label>
                    <span>Featured product</span>
                    <MdKeyboardDoubleArrowDown className='arrow-down' />
                  </div>
                </div>
              </div >
              <div >
                <Product />
              </div>
              <div className="sort-pagination">
                <div className="pagiantion">
                  <div className="page-num">
                    <span>1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent