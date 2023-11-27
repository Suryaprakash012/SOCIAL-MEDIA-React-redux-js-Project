import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { increment, decrement } from '../Reducer/LikeSlice';
import './CSS/LikeButton.css';
import { sendMessage } from '../Reducer/LikeSlice';

const LikeButton = ({ sendMessage }) => {
  const dispatch = useDispatch();
  const likeCount = useSelector((state) => state.likes.count);
  const isLiked = useSelector((state) => state.likes.isLiked);

  const handleLikeClick = () => {
    if (isLiked) {
      dispatch(decrement());
    } else {
      dispatch(increment());
    }
    const message = 'Hello, Redux!';
    sendMessage(message);
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
      <div>
        <p>{likeCount}</p>
      </div>
    </>
  );
};

export default connect(null, { sendMessage })(LikeButton);
