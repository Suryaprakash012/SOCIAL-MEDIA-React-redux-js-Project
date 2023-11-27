// likeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const likeSlice = createSlice({
  name: 'likes',
  initialState: {
    count: 0,
    isLiked: false,
    messages: [],
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
  },
});

export const { increment, decrement, toggleLike, sendMessage } = likeSlice.actions;
export const selectAllLikes = (state) => state.likes.messages; // Adjust selector based on your actual structure
export default likeSlice.reducer;
export const selectAllaccount = (state) => state.account.accounts;
