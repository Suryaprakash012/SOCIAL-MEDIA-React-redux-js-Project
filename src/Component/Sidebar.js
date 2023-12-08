// Sidebar.js

import React from 'react';
import './CSS/Sidebar.css';
import { useSelector } from 'react-redux';
import { selectAllaccount } from '../Reducer/Accountreducer';
import { useNavigate } from 'react-router-dom';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
const Sidebar = () => {
  const posts = useSelector(selectAllaccount);

  const navigate = useNavigate()

  const postElements = posts.map((post) => (
    <article key={post.id} className="online-container">
      <div className="online-content">
        {post.image && <img src={post.image} alt={`Profile Image of ${post.username}`} className="circular-image" />}
        <h1 className="title-vertical1">{post.username}</h1>
      </div><br />
    </article>
  ));

  return (
    <div className="Sidebar">
      <div className="sidebarwarp">
        <ul className="sidebaritem">
          <li className="sidebarlistitem"onClick={() => navigate('/')}>
            <AddHomeWorkIcon className="sidebaricon" />
              <span>HOME</span>
          </li>
          <li className="sidebarlistitem" onClick={()=>navigate('/profile')}>
            <AccountBoxIcon className="sidebaricon"/>
              <span className='sidenames'>PROFILE</span>
          </li>
          <li className="sidebarlistitem" onClick={() => navigate('/Accountlogin')}>
            <AccountCircleIcon className="sidebaricon" />
              <span>ACCOUNT</span>
          </li>
          <li className="sidebarlistitem" onClick={()=>navigate('/post')}>
            <MarkAsUnreadIcon className="sidebaricon" />
              <span>POST</span>
          </li>
          <hr className="line" />
        </ul>
        <div className="sidebarfrientlist1">
          <p className='onlinefirentlist'>online</p>
            </div>
            <hr className="line" />
          <div className="onlinedisplaybox">
          {postElements}
          </div> 
      
      </div>
    </div>
  );
}

export default Sidebar;
