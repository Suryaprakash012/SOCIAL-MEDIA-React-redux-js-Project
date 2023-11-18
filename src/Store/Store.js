import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../Reducer/Reducer'; // Update the path to your reducer
import Accountreducer from "../Reducer/Accountreducer";
import LikeSlice from "../Reducer/LikeSlice";

export const store = configureStore({
  reducer: {
    post: postReducer, 
    Account : Accountreducer,
    likes : LikeSlice
  }
});
