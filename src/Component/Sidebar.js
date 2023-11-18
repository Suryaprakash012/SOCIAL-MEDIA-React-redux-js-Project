// Sidebar.js

import React from 'react';
import './CSS/Sidebar.css';
import { useSelector } from 'react-redux';
import { selectAllaccount } from '../Reducer/Accountreducer';
import { NavLink } from 'react-router-dom';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
const Sidebar = () => {
  const posts = useSelector(selectAllaccount);

  const postElements = posts.map((post) => (
    <article key={post.id} className="post-container">
      <div className="post-content">
        {post.image && <img src={post.image} alt={`Profile Image of ${post.username}`} className="circular-image" />}
        <h1 className="title-vertical">{post.username}</h1>
      </div>
    </article>
  ));

  return (
    <div className="Sidebar">
      <div className="sidebarwarp">
        <ul className="sidebaritem">
          <li className="sidebarlistitem">
            <AddHomeWorkIcon className="sidebaricon" />
            <NavLink to='/' activeClassName="active">
              <span>HOME</span>
            </NavLink>
          </li>
          <li className="sidebarlistitem">
            <AccountBoxIcon className="sidebaricon" />
            <NavLink to='/profile' activeClassName="active">
              <span>PROFILE</span>
            </NavLink>
          </li>
          <li className="sidebarlistitem">
            <AccountCircleIcon className="sidebaricon" />
            <NavLink to='/Accountlogin' activeClassName="active">
              <span>ACCOUNT</span>
            </NavLink>
          </li>
          <li className="sidebarlistitem">
            <MarkAsUnreadIcon className="sidebaricon" />
            <NavLink to='/post' activeClassName="active">
              <span>post</span>
            </NavLink>
          </li>
        </ul>
        <hr className="line" />
        <ul className="sidebarfrientlist">
          {postElements}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
