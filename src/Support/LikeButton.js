import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { increment , decrement } from '../Reducer/LikeSlice';
import './CSS/LikeButton.css'
const LikeButton = () => {
  const dispatch = useDispatch();
  const likeCount = useSelector((state) => state.likes.count);
  const isLiked = useSelector((state) => state.likes.isLiked);

  const handleLikeClick = () => {
    if (isLiked) {
      dispatch(decrement());
    } else {
      dispatch(increment());
    }
  };

  return (
    <>
    <div className='heart'>
      {isLiked ? (
        <FavoriteIcon
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={handleLikeClick}
        />
      ) : (
        <FavoriteBorderIcon
          style={{ color: 'black', cursor: 'pointer' }}
          onClick={handleLikeClick}
        />
      )}
    </div>
    <div>  <p> {likeCount}</p>
    </div>
    </>

  );
};

export default LikeButton;
