import React from 'react'
import Sidebar from './Sidebar'
import Midel from './Midel'
import Noticebar from '../Component/Noticebar'
import Navbar from '../Component/Navbar'
import '../Component/CSS/Notification.css'
const Notification = () => {
  return (
    
    <div>
        <Navbar/>
        <div className="condainers">
        <Sidebar/>
        <Midel/>
        <Noticebar/>
        </div>
    </div>
  )
}

export default Notification