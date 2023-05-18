import React from 'react'
import Product from '../product/Product'
import ContentStyle from './ContentStyle.css'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { Routes, Route, Link } from 'react-router-dom'
import datas from '../data/datas.json'
import UpperContent from './UpperContent'
import MainContent from './MainContent'


const Content = () => {
  return (
    <div className='mainContent'>
      <UpperContent />
      <MainContent />
    </div>
  )
}

export default Content