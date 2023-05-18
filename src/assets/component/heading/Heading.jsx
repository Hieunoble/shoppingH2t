import React from 'react'
import HeadingStyle from './HeadingStyle.css'
import { FaChevronDown, FaSearch, FaUserCircle } from 'react-icons/fa'
import UpperMenu from './UpperMenu'
import Icon from './Icon'
import Logo from './Logo'


const Heading = () => {
  return (
    <div className='heading'>
      <div className="top-bar">
        <div className="container top-bar">
          <div className='top-bar-content'>
            <p>Miễn phí vận chuyển với đơn hàng trên 500K</p>
          </div>
        </div>
      </div>
      <div className="header-upper">
        <div className="container heading-content">
          <div className="flex-container-header" >
            <Logo />
            <UpperMenu />
            <Icon />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading