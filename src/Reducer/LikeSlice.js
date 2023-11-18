// likeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const likeSlice = createSlice({
  name: 'likes',
  initialState: {
    count: 0,
    isLiked: false, // Add isLiked state
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.isLiked = true; // Set isLiked to true when liked
    },
    decrement: (state) => {
      state.count -= 1;
      state.isLiked = false; // Set isLiked to false when unliked
    },
    toggleLike: (state) => {
      state.isLiked = !state.isLiked; // Toggle the isLiked state
    },
  },
});

export const { increment, decrement, toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
