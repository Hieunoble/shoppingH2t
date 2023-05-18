import React from 'react'
import { FaChevronDown, FaSearch, FaUserCircle } from 'react-icons/fa'

const Icon = () => {
  return (
    <div>
      <div className='header-upper-icon'>
        <div className="header-wrapper-icon">
          <div className="header-action  header-search">
            <div className="header-box-icon">
              <FaSearch className='icon' />
            </div>
            <div className="header-action-dropdown">
              <div className="box-triangle"></div>
              <div className="header-dropdown-content"></div>
            </div>
          </div>
          <div className="header-action  header-account">
            <FaUserCircle className='icon' />
            <div className="header-action-dropdown">
              <div className="box-triangle"></div>
              <div className="header-dropdown-content"></div>
            </div>
          </div>
          <div className="header-action  header-cart">
            <div className="box">
              <div className="curl"></div>
              <div className="box-cart">
                <div className="number">1</div>
              </div>
            </div>
            <div className="header-action-dropdown">
              <div className="box-triangle"></div>
              <div className="header-dropdown-content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Icon