import React from 'react'
import Sidebar from '../elements/Sidebar'
import Navbar from '../elements/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Sidebar/>
        <Navbar />
        <Outlet/>
    </div>
  )
}

export default MainLayout