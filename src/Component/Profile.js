import React from 'react';
import Sidebar from './Sidebar';
import Rightbar from './Rightbar';
import './CSS/Profile.css';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { selectAllaccount } from '../Reducer/Accountreducer';
import EditNoteIcon from '@mui/icons-material/EditNote';
import EditOffIcon from '@mui/icons-material/EditOff';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  const account = useSelector(selectAllaccount);
  const latestAccountPost = account && account.length > 0 && account[account.length - 1];

  const profileImageElement = latestAccountPost && latestAccountPost.image ? (
    <article key={latestAccountPost.id}>
      <img src={latestAccountPost.image} alt="Profile Image" className="profile-image" />
    </article>
  ) : null;

  const profileImageElement1 = latestAccountPost && latestAccountPost.image ? (
    <article key={latestAccountPost.id}>
      <img src={latestAccountPost.image} alt="Profile Image" className="profile-image1" />
    </article>
  ) : null;

  const profileElement = latestAccountPost ? (
    <article key={latestAccountPost.id} className="post-container">
      <div className="profile-content">
        <div className="profiletop">
          {profileImageElement1}
          <p className='profiletopviews'> {latestAccountPost.about} <hr /> </p>
          
          <div className="profileicon1"><EditNoteIcon className='icons'></EditNoteIcon>  </div>
          
        </div><br />
        <div className="profileviewdiv">
          <label className='label'>NAME</label><br />
          <p className='profileviews'> {latestAccountPost.names} <hr /> </p>

          <label className='label'>USERNAME</label><br />
          <p className='profileviews'> {latestAccountPost.username} <hr /></p>

          <label className='label'>DATE</label><br />
          <p className='profileviews'> {latestAccountPost.date} <hr /></p>

          <label className='label'>ABOUT</label><br />
          <p className='profileviews'> {latestAccountPost.about} <hr /> </p>
          <button className='btn btn-primary btn-sm'>Edit</button>

        </div>
      </div>
    </article>
  ) : null;

  return (
    <div className='full1'>
      <div className="div">
        <Navbar />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="profilebar">
        <div className='profilehead'>
          {profileImageElement}
        </div>
        <div className="profileview">
          <h3>PROFILE</h3>
          <NavLink to='/Accountlogin'>
            <p className='editprofile'><EditOffIcon/>Edit Profile</p>
          </NavLink>
          {profileElement}
        </div>
      </div>
      <div className='rightbar'>
        <Rightbar />
      </div>
    </div>
  );
};

export default Profile;
