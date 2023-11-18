import React from 'react'
import'./CSS/Rightbar.css'
import { useSelector } from 'react-redux';
import { selectAllaccount } from '../Reducer/Accountreducer';
const Rightbar = () => {
  const posts = useSelector(selectAllaccount);

  const postElements = posts.map((post) => (
    <article key={post.id} className="post-container">
      <div className="post-content">
        {post.image && <img src={post.image} alt={`Profile Image of ${post.username}`} className="follow-image" />}
        <h1 className="title-vertical">{post.names}</h1>
      </div>
    </article>
  ));

  return (
    <div className='Rightbar'>
      <div className="follow">
          {postElements}
      </div>
      
    </div>
  )
}

export default Rightbar