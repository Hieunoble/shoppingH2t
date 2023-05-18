import React from 'react'
import { Link } from 'react-router-dom'

const MenuShop = () => {
  return (
    <div>
      <div className='shop'>
        <div className='shop-container'>
          <div className="shop-list">
            <ul>
              <li className='itemList'>
                <Link to='/'>
                  <span>Home page</span>
                </Link>
              </li>
              <li className='itemList'>
                <Link to='/all'>
                  <span>Category</span>
                </Link>
              </li>
              <li className='itemList'>
                <span className='sale75'>Sale 75%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuShop