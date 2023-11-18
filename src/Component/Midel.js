import React from 'react';
import './CSS/Midel.css';
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import ReplyIcon from '@mui/icons-material/Reply';
import NearMeIcon from '@mui/icons-material/NearMe';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { selectAllaccount } from '../Reducer/Accountreducer';
import LikeButton from '../Support/LikeButton';

const Midel = () => {
  const posts = useSelector((state) => state.post);
  const account = useSelector(selectAllaccount);

  const latestAccountPost = account && account[account.length - 1];



  const Account = latestAccountPost && latestAccountPost.image ? (
    <article key={latestAccountPost.id}>
      <img src={latestAccountPost.image} alt="Image" className="circular-image" />
    </article>
  ) : null;


  const postElement = latestAccountPost ? (
    <article key={latestAccountPost.id} className="post-container">
      <div className="post-content">
        <h1 className="title-vertical">{latestAccountPost.username}</h1>
      </div>
    </article>
  ) : null;
  



  // Map both posts and account information
  const imagesWithAccount = posts.map((post) => (
    <div className='postview'>
      <div className="accountpic">
      {Account}
      </div>
      <h1 className="location1">{post.locations}{postElement}</h1>
      
     
      <article key={post.id} className="post-container">
        <div className="post-content">
          {post.image && <img src={post.image} alt="Image" className="post-image" />}
          <div className="title-like-container">
          
          <div className='postfoder'>
            <LikeButton className="like-button" />
            </div>
            <h1 className="title-vertical">{post.title}</h1>
            <div>
              <input type="text" />
            </div>
          
          </div>
        </div>
      </article>
    </div>
  ));

  return (
    <div className="Midel">
      <div className="head">
        <div className="dp">{Account}</div>
        <div className="headpost">
          <input type="search" name="" id="midelsearch" />
        </div>
        <SearchIcon />
        <hr />
        <div className="tags">
          <p className="font-weight-bold bold">
            <i className="blue">
              <VideoCallIcon />
            </i>
            <strong> Video&Photo</strong>
          </p>
          <p className="font-weight-bold bold">
            <i className="red">
              <LoyaltyIcon />
            </i>
            <strong> TAG</strong>
          </p>
          <button className="btn btn-primary btn-sm ss">
            <i>
              <ReplyIcon />
            </i>
            SHARE
          </button>
          <button className="btn btn-success btn-sm ss">
            <i>
              <NearMeIcon />
            </i>
            POST
          </button>
        </div>
      </div>
      <div className="">
        {imagesWithAccount}
        <div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Midel;
