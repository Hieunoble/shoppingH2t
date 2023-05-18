import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaSearch, FaUserCircle } from 'react-icons/fa'


const UpperMenu = () => {
  return (
    <div>
      <div className='header-upper-menu'>
        <div id='nav'>
          <div className='main-nav'>
            <ul className='menu-list'>
              <li className='menu'>
                <Link to="/product">
                  Product
                  <FaChevronDown className='dropArrow' />
                </Link>
              </li>
              <li className='menu'>
                <Link to="/buy-1-get-1">Buy 1 get 1</Link>
              </li>
              <li className='menu'>
                <Link to="sale-up-to-75%">Sale up to 75%
                  <FaChevronDown className='dropArrow' />
                </Link>
              </li>
              <li className='menu'>
                <Link to="address">Address
                  <FaChevronDown className='dropArrow' />
                </Link>
              </li>
              <li className='menu'>
                <Link to="policies">Policies
                  <FaChevronDown className='dropArrow' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpperMenu