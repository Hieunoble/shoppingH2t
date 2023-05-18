import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
      <div className='header-upper-logo'>
        <div className="header-wrapper-logo">
          <Link to="/">
            <img src="https://file.hstatic.net/200000201725/file/logo300x70_edf9c9c72acb48f791fe052257311c5c.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Logo