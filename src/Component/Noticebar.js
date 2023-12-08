import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllLikes } from '../Reducer/LikeSlice';
import { selectAllaccount } from '../Reducer/Accountreducer';
import {selectfollowmessage} from '../Reducer/LikeSlice'
import '../Component/CSS/Noticbar.css'
const Noticebar = () => {
  const likes = useSelector(selectAllLikes);
  const posts = useSelector(selectAllaccount);
  const followmessage = useSelector (selectfollowmessage);
  const postElements = posts.map((post) => (
    <article key={post.id} className="post-container">
      <div className="post-content">
        {post.image && <img src={post.image} alt={`Profile Image of ${post.username}`} className="follow-image" />}
      </div>
    </article>
  ));

  const likesList = likes.map((like) => (
    <div key={like.id} className="like-item" >{like} </div>
  ));

  
  const followmessages = followmessage.map((like) => (
    <div key={like.id} className="like-item" >{like} </div>
  ));

  return (
    <div className='noticfull'>
      <div className="follow">
        {postElements}
      </div>
      <div className="likes-container">
        <h4 >Likes</h4>
        </div>
        <div className="likes-list">
          {likesList}
          {followmessages}
        </div>
      
    </div>
  );
};

export default Noticebar;
