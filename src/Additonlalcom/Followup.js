import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { sendMessage } from '../Reducer/LikeSlice';
import '../Component/CSS/testfile.css'


const LikeButton = ({ sendMessage }) => {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    const message = isLiked ? 'You followed!' : 'You unfollowed';
    sendMessage(message);
    setIsLiked(!isLiked); 
  };

  return (
    <>
   
      <button className='followbtn' onClick={handleLikeClick}>
      {isLiked ? 'Unfollow' : 'Follow'}
      </button>
    </>
  );
};

export default connect(null, { sendMessage })(LikeButton);

