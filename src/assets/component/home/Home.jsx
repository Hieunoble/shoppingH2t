import React from 'react'
import Content from '../content/Content'
import Heading from '../heading/Heading'
import { Outlet, Route, Routes } from 'react-router-dom'
import UpperContent from '../content/UpperContent'
import MainContent from '../content/MainContent'

const Home = () => {
  return (
    <div>
      <Heading />
      <UpperContent />
      <Outlet />
      <MainContent />

    </div>
  )
}

export default Home