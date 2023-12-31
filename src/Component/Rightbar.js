// Rightbar.js
import React from 'react';
import './CSS/Rightbar.css';
import { useSelector } from 'react-redux';
import { selectAllLikes} from '../Reducer/LikeSlice'
import { selectAllaccount } from '../Reducer/Accountreducer';
import Noticebar from '../Component/Noticebar';
const Rightbar = () => {
  const likes = useSelector(selectAllLikes);
  const posts = useSelector(selectAllaccount);

  const postElements = posts.map((post) => (
    <article key={post.id} className="post-container">
      <div className="post-content">
        {post.image && <img src={post.image} alt={`Profile Image of ${post.username}`} className="follow-image" />}
        <p>{post.username}</p>
      </div>
      
    </article>
  ));

  return (
    <div className='Rightbar'>
      <div className="follow">
        {postElements}
        
      </div>
    </div>
  );
};

export default Rightbar;
