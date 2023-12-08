// likeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const likeSlice = createSlice({
  name: 'likes',
  initialState: {
    count: 0,
    isLiked: false,
    messages: [],
    followmessage : [],
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.isLiked = true;
    },
    decrement: (state) => {
      state.count -= 1;
      state.isLiked = false;
    },
    toggleLike: (state) => {
      state.isLiked = !state.isLiked;
    },
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    sendfollowMessage: (state, action) => {
      state.followmessage.push(action.payload);
    },
  },
});

export const { increment, decrement, toggleLike, sendMessage,sendfollowMessage } = likeSlice.actions;
export const selectAllLikes = (state) => state.likes.messages; // Adjust selector based on your actual structure
export const selectfollowmessage = (state) => state.likes.followmessage; 

export default likeSlice.reducer;
export const selectAllaccount = (state) => state.account.accounts;
