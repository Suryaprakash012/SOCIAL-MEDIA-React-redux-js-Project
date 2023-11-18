import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Midel from './Midel'
import Rightbar from './Rightbar'
import './CSS/Home.css'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="condainer">
            <Sidebar/>
            <Midel/>
            <Rightbar/>
        </div>
    </div>
  )
}

export default Home