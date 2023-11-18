import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
  
}
];

const posts = createSlice({
  name: 'post', // Use the name 'post' for your slice
  initialState,
  reducers: {
    addPost(state, action) { // Change the reducer name to 'addPost'
      state.push(action.payload);
    }
  }
});

export const { addPost } = posts.actions; // Update the action name to 'addPost'
export default posts.reducer;
